# Routing

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/angularroutinglesson?file=package.json)

In this project we practice some concept regarding to routes

- Lazy loading
- Preloading
- Guards & Resolvers
- Interceptors
- Providers

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Route lazy loading

We have several ways to lazy load routes.

If the routes are from a Module

```ts
const routes: Routes = [
 {
   path: 'items',
   loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
 }
];
```

If the route is from a component

```ts
const routes: Routes = [
 {
   path: 'items',
   loadComponent: () => import('./items/items.component).then(m => m.ItemsComponent)
 }
];

```

Or you can lazy load from a routes file

```ts
const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.routes').then(m => m.ITEMS_ROUTES)
  },
];
```

## Preloading

In module based applications you can set a preloading strategy in the `forRoot` method of `RouterModule`

```ts
import { PreloadAllModules } from '@angular/router';

RouterModule.forRoot(
  appRoutes,
  {
    preloadingStrategy: PreloadAllModules
  }
);
```

Standalone apps you can use `withPreloading` within the `provideRouter` function

```ts
import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter
  withPreloading,
} from '@angular/router';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)
    ),
  ],
};
```

>  Note: You can apply your custom preloading strategies.

## Guards

These are the current available guards:

- `canActivate`
- `canActivateChild`
- `canDeactivate`
- `canMatch`
- `resolve`

To use a guard function in a Route element:

```ts
{
  path: '/your-path',
  component: YourComponent,
  canActivate: [yourGuardFunction],
}

```

The defined function
```ts
export const yourGuardFunction: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
      // your  logic goes here
  }
```

>  Note: You can use inline function

### Resolvers

A resolver let you fetch data before enter a route

```ts
import { Resolve } from '@angular/router';
...
/*An interface that represents your data model*/
export interface Crisis {
  id: number;
  name: string;
}

export class CrisisDetailResolverService implements Resolve<Crisis> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
    // your logic goes here
  }
}
```

Add a resolve object to the component's route configuration.

```ts
const var = {
  path: '/your-path',
  component: YourComponent,
  resolve: {
    crisis: CrisisDetailResolverService
  }
}
```

then in your component

```ts
import { ActivatedRoute } from '@angular/router';
@Component({ … })
class YourComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data
      .subscribe(data => {
        const crisis: Crisis = data.crisis;
      });
  }
}
```

## Interceptors

They are function that you can run for each request. We can use inteceptors:

- Adding authentication tokens.
- Logging requests and responses.
- Handling global error messages.
- Modifying request/response formats.
- etc.

An example:

```ts
export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
}
```

## Dependency providers

You can configure dependency providers

- `useClass` - this option tells Angular DI to instantiate a provided class when a dependency is injected
- `useExisting` - allows you to alias a token and reference any existing one.
- `useFactory` - allows you to define a function that build a dependency.
- `useValue` - provides a static value that should be used as a dependency.

### Class providers: `useClass`

```ts
[{
  provide: Logger,
  useClass: BetterLogger
}]
```

### Alias providers: `useExisting`

```ts
[
  NewLogger,
  // Alias OldLogger w/ reference to NewLogger
  { provide: OldLogger, useExisting: NewLogger},
]
```

### Factory providers: `useFactory`

You can create a dynamic value based on information available in the DI and elsewhere in the app.

```ts
class HeroService {
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) { }
  getHeroes() {
    const auth = this.isAuthorized ? 'authorized' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}

const heroServiceFactory = (logger: Logger, userService: UserService) =>
  new HeroService(logger, userService.user.isAuthorized);

export const heroServiceProvider = {
  provide: HeroService,
  useFactory: heroServiceFactory,
  deps: [Logger, UserService]
};

```

### Value providers: `useValue`. Using an InjectionToken object

To inject values

```ts
import { InjectionToken } from '@angular/core';
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config description');

providers: [{ provide: APP_CONFIG, useValue: MY_APP_CONFIG_VARIABLE }]

export class AppComponent {
  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
  }
}
```

## Futher improvements

- You can improve the session and permission management

- A functionality to add favorite products


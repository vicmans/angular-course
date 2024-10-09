# Testing

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/angulartestinglesson?file=README.md)

What we'll do in this project

- Test Components
- Test Services
- Test Pipes
- Test Directives
- Test integration between them

## Development server

Run `ng serve`.

## Testing components

The complexity of the test depends on what the component does, if the components has inputs or outputs, if it displays some values, if it uses a service and so on...

First we set up a Testing Module

```ts
let component: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [HeaderComponent]
  })
  .compileComponents();

  fixture = TestBed.createComponent(HeaderComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});
```

In this example, we simply import the component to test. Then, we write some test for the functionality of the component.

If your component is dependant you have to add in the `imports` and `providers` arrays or mock them.

```ts
it('should create', () => {
  expect(component).toBeDefined();
});

it('should contain "header works!"', () => {
  const bannerElement: HTMLElement = fixture.nativeElement;
  expect(bannerElement.textContent).toContain('header works!');
});
```

## Testing Services

In some cases, we can write our service tests without using Angular testing utilities, testing them directly

```ts
describe('ValueService', () => {
  let service: ValueService;
  beforeEach(() => {
    service = new ValueService();
  });
  it('#getValue should return a value', () => {
    expect(service.getValue()).toBe('a value');
  });
});
```

Using the Angular TestBed

```ts
let service: AuthService;
beforeEach(() => {
  TestBed.configureTestingModule({providers: [AuthService]});
  ...
});
```

then

```ts
it('should be isLogged default value', () => {
  service = TestBed.inject(AuthService);
  expect(service.logged()).toBeFalsy();
});
```

### Testing functional guard, resolver, interceptor

A resolver function:

```ts
export function productDetailResolver(route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id');
  const productService = inject(ProductService);
  return productService.findById(id)
}
```

In the test you need to use `TestBed.runInInjectionContext` to run the resolver function in a injection context

```ts
TestBed.runInInjectionContext(() => productResolver(resolveParams))
```

#### Testing navigation

To test navigation I used this technique

First, created a Router spy
```ts
const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
```

Then, mock the Router using this spy
```ts
TestBed.configureTestingModule({
  // Mock Router
  providers: [{
    provide: Router,
    useValue: routerSpy,
  }]
});
service = TestBed.inject(AuthService);
```

Finally

```ts
it('should call the navigate method with the given parameter', () => {      
  service.logIn();
  const navArgs = routerSpy.navigate.calls.first().args[0];
  expect(navArgs).toEqual(["profile"]);
});
```

## Testing Pipes

A Pipe is a class with one method, `transform`, this manipulates the input value into a transformed output value.

We have a `FormatMoneyPipe` what format a number:

```ts
describe('FormatMoneyPipe', () => {
  const pipe = new FormatMoneyPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should tranform the number to format', () => {
    const value = 25.2564

    const result = pipe.transform(value)
    expect(result).toBe('$25.26');
  });
});
```

In this case the test is simple.

## Testing Directives

In Angular we have 3 types of directives, Attribute directive, Structural directive and Component, we already tested Componentes, now for testing the other two types of directives we need a Host component. When testing these Directives, we use a host Component that renders the host element.

For this example, we have a `IsFavoriteDirective` that change the color if the valor is `false` or `true`. In our test we have a `HostComponent` to test the attribute directive

```ts
@Component({
  standalone: true,
  template: `
    <div [isFavorite]="true" data-testid="favorite"></div>
  `,
  imports: [IsFavoriteDirective],
})
class HostComponent {}
```

the test describe:

```ts
describe('IsFavoriteDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let myElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsFavoriteDirective, HostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    myElement = fixture.debugElement.query(By.directive(IsFavoriteDirective));
  });

  it('should have red color', () => {
    const bgColor = myElement.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('red');
  });
});
```

## Change the test runner

Angular by default comes with Jasmine and Karma for testing but you can use another test runner if you want.

### Web test runner

You can use Web Test Runner

```sh
npm i -D @web/test-runner
```

then, in the angular.json in the test section, change the builder

```diff
"test": {
-  "builder": "@angular-devkit/build-angular:karma",
+  "builder": "@angular-devkit/build-angular:web-test-runner",
  ...
}
```

## Futher improvements

- Add missing tests
- Add the search functionality


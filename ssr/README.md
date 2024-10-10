# SSR

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/angularssrlesson?file=README.md)

To start with Angular SSR run the following command

```sh
ng add @angular/ssr
```

This command add the needed packages and prepare your project adding new files and modifing some preparing the app for using server-side rendering


for this lesson, add the following scripts to use in this project

```json
"dev:ssr": "ng serve",
"build:ssr": "ng build --configuration=production",
"serve:ssr": "node dist/ssr/server/server.mjs"
"prerender": "http-server -c-1 dist/ssr/browser",
```
Now, the current scripts do:

- `ng serve`: Run the SSR server in dev mode
- `ng build`: Build the application, generating two apps, the browser app and server app

It is recommended using the `withFetch` feature with `HttpCLient`

```ts
providers: [
  ...,
  provideHttpClient(withFetch()),
]
...
```

## Prerending (SSG)

By default, prerending is activated, your configuration options look like this

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            ...,
            "server": "src/main.server.ts",
            "prerender": true,
            "ssr": {
              "entry": "server.ts"
            }
          }
        }
      }
    }
  }
}
```

You can set the `prerender` to `false` if you don't want prerender.

The `prerender` property has two options

```json
"prerender": {
  "discoverRoutes": false,
  "routesFile": "routes.txt"
}
```

In the `routerFile` property you can indicate a txt file with the routes you want to prerender, this is usefull to prerender dynamic routes with dynamic content

```
/products/18
/products/19
/products/20
```

Setting the `ssr` property in the options deactivate the SSR and use only SSG.

```json
"ssr": false
```

## Futher improvements

- Nice


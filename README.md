# Wayscout

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## PWA installation checklist

If the browser does not show the install prompt, check these points:

1. `ng serve` uses the **development** configuration and the Service Worker is disabled there.
2. Build with production settings: `ng build --configuration production`.
3. Serve the build output (`dist/wayscout/browser`) from `http://localhost` or HTTPS.
4. Open DevTools → **Application** and verify:
   - Manifest is valid.
   - Service Worker is active.
   - No installability errors are shown.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

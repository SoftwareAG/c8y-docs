---
title: Upgrading from Angular 17 to Angular 18  
layout: redirect
weight: 450
---

Angular 18 is supported from version `1021.0.0`. The following configuration changes are required before you can run the application:

- Update all `@c8y` dependencies to version `1021.x.x` in your *package.json*.
- Run the command `ng update @angular/core@18 @angular/cli@18` to update Angular core and CLI to version 18.
- Update `ngx-bootstrap` to version `18.0.0`.
- Update `@angular/cdk` to version `18.x.x`.
- `Node.js`, `TypeScript`, `RxJS`: [Version compatibility](https://angular.dev/reference/versions#actively-supported-versions).
- Follow the `Angular 18` upgrade guide: [Updating to version 18](https://angular.dev/update-guide?v=17.0-18.0&l=2).


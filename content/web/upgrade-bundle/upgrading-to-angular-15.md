---
title: Upgrading from Angular 14 to Angular 15
# layout: redirect
weight: 6
---

Angular 15 is supported from version `1018.157.0`. The following configuration changes are required before you can run the application:

- Update all `@angular/*` dependencies to `15.2.7`.
- Update `TypeScript` to version `4.9.5`.
- Follow the `Angular 15` upgrade guide: [Updating to version 15](https://update.angular.io/?l=3&v=14.0-15.0).
- Use Node version `^14.20.0 || ^16.13.0 || ^18.10.0`.
- Delete `node_modules` and reinstall them.

{{< c8y-admon-info >}}
AOT (Ahead-of-time compilation) is not yet supported.
{{< /c8y-admon-info >}}


{{< c8y-admon-info >}}
If you use Visual Studio Code, make sure that in the Angular Language Service Plugin the option "Use legacy View Engine language service" is not selected.
{{< /c8y-admon-info >}}

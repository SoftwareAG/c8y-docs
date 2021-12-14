---
title: Upgrading to Angular 12 from 11
# layout: redirect
weight: 6
---

Angular 12 is supported from version `10.11.45.0`. The following configuration changes are required before you can run the application:

- **Enable IVY** (check the section "**How to enable IVY**").
- Follow `Angular 12` upgrade guide: [Updating to version 12](https://v12.angular.io/guide/updating-to-version-12).
- **Use Node** version `14`.

> **Info:** **`AOT`** is not yet supported.

#### How to enable IVY

- edit **tsconfig.json** and change `enableIvy` to `true` or delete it as this setting is the default setting:

```javascript
    "angularCompilerOptions": {
        "enableIvy": true
  }
```

- edit **package.json** and add `postinstall` hook:

```json
    "scripts": {
        ...
    "postinstall": "ngcc"
  }
```
- Delete `node_modules` and reinstall them. If `ngcc` works you should see a **compiling** step after installing all dependencies.

- If you use `Jest (JavaScript Testing Framework)` check: [Jest - Angular IVY](https://thymikee.github.io/jest-preset-angular/docs/guides/angular-ivy) for the configuration.

> **Info:** `Deep imports` are not supported. For example, you need to import from **`@c8y/ngx-components/asset-navigator`** but not from the **`@c8y/ngx-components/asset-navigator/services/asset-service`**.

> **Info:** If you are using Visual Studio Code, make sure in the **Angular Language Service Plugin** option: **`"Use legacy View Engine language service"`** is unchecked.

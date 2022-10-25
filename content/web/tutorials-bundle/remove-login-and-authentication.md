---
title: Remove login page and authentication
layout: redirect
weight: 60
---

**Version:** 1009.0.18 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

{{< c8y-admon-info >}}
This technique exposes the username and password. Ensure that this user doesn't have access to sensible data.
{{< /c8y-admon-info >}}

The default application always takes you to the login page for authentication before it allows you to access a page.
This recipe will explain how to remove the login authentication and use the application directly.

### Brief background

The removal of all authentication is not possible.
In order to get around it you must pass default credentials that the application will read upon request.
Your goal is to trigger the login with the default credentials before the application requests the login page because it is not authenticated.

The login functionality is part of the `CoreModule` in the  `@c8y/ngx-components` package which is loaded when Angular bootstraps the application.
The default credentials must be passed to the API before that happens.
The result will be that, when Angular loads the initial page, the user will be already authenticated and the login page will be skipped.

### 1. Initialize a new application

As a starting point, you need an application.
For this purpose, create a new application using the `c8ycli`:

```js
c8ycli new my-cockpit cockpit -a @c8y/apps@1009.0.18
```

This will create a new application that is an exact copy of the Cockpit application.
Next, you must install all dependencies.
Switch to the new folder and run `npm install`.

{{< c8y-admon-info >}}
The `c8ycli new` command has a `-a` flag which defines which package to use for scaffolding. This way you can also define which version of the application you want to scaffold, for example:

- `c8ycli new my-cockpit cockpit -a @c8y/apps@1009.0.18` will scaffold an application with the version `1009.0.18`
- `c8ycli new my-cockpit cockpit -a @c8y/apps@latest` will scaffold an application with the latest official release. Same as if used without the `-a` flag
- `c8ycli new my-cockpit cockpit -a @c8y/apps@next` will scaffold an application with the latest beta release.
{{< /c8y-admon-info >}}

### 2. Add logic for default authentication

First you must make sure to add the default authentication before Angular bootstraps your custom application.
For that reason you must add a new provider in the `app.module.ts` in the newly created custom Cockpit application, which will be triggered before the login.
For that, use Angular's injection token [`APP_INITIALIZER`](https://angular.io/api/core/APP_INITIALIZER).
This token will ensure that the application will not be initialized until the new functionality is being executed.

```js
providers: [
  {
    provide: APP_INITIALIZER,
    useFactory: initApp,
    multi: true,
    deps: [LoginService],
  },
];
```

Use a factory function `initApp`, where you will define and send your default authentication.
To send your credentials to the API, add a dependency to the `LoginService` ([http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/LoginService.html](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/LoginService.html)), which is a part of `@c8y/ngx-components`:

```js
export function initApp(loginService: LoginService) {
  return () => {
    const credentials = {
      tenant: "tenantName",
      user: "admin",
      password: "C8Yadmin",
    };
    const basicAuth = loginService.useBasicAuth(credentials);

    return loginService.login(basicAuth, credentials);
  };
}
```

To login with your default credentials, you must call the [login function](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/LoginService.html#login) from the service and pass the authentication method and the default credentials.

With that, the recipe is completed and authentication will be done behind the scenes:

```js
// --- 8< changed part ----
import { APP_INITIALIZER, NgModule } from "@angular/core";
// --- >8 ----
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule as NgRouterModule } from "@angular/router";
import { UpgradeModule as NgUpgradeModule } from "@angular/upgrade/static";
// --- 8< changed part ----
import { CoreModule, LoginService, RouterModule } from "@c8y/ngx-components";
// --- >8 ----
import { DashboardUpgradeModule, UpgradeModule, HybridAppModule, UPGRADE_ROUTES} from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { CockpitDashboardModule, ReportDashboardModule } from '@c8y/ngx-components/context-dashboard';
import { ReportsModule } from '@c8y/ngx-components/reports';
import { SensorPhoneModule } from '@c8y/ngx-components/sensor-phone';
import { BinaryFileDownloadModule } from '@c8y/ngx-components/binary-file-download';

@NgModule({
  imports: [
    // Upgrade module must be the first
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([...UPGRADE_ROUTES], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    ReportsModule,
    NgUpgradeModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    ReportDashboardModule,
    BinaryFileDownloadModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [LoginService],
    },
  ],
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}

export function initApp(loginService: LoginService) {
  return () => {
    const credentials = {
      tenant: "tenantName",
      user: "admin",
      password: "C8Yadmin",
    };
    const basicAuth = loginService.useBasicAuth(credentials);

    return loginService.login(basicAuth, credentials);
  };
}
```

### Conclusion

This tutorial shows how to remove authentication when developing a custom application.
This kind of technique can be used if an application does not have confidential information.
If you need data protection you should avoid this technique.

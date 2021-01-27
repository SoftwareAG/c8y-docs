---
title: Remove login page and authentication
layout: redirect
weight: 0
---

**Version:** 10.6.0.24 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

> **Info:** This technic exposes the username and password. Ensure that this user doesn't have access to sensible data.

The default application always leads you to the login page for authentication before it allows you to access a page. This recipe will explain how to remove the login authentication and use the app directly.

### Brief background

The removal of all authentication is not possible, so in order to go around that, you need to pass default credentials, that the app will read upon request. Our goal here will be to trigger the login with the default credentials before the application requests the login page, because it is not authenticated.

The login functionality is part of the `CoreModule` in `@c8y/ngx-components` package which is loaded when angulat bootstraps the application. The default credentials need to be passed to the API, before that happens. The result will be that, when angular loads the inital page, user will be already authenticated and login page will be skipped.

### 1. Initialize a new app

As a starting point, you need an application. For this purpose, create a new application using the `c8ycli`:

```js
c8ycli new my-cockpit cockpit
```

This will create a new application that is an exact copy of the Cockpit application.
Next, you need to install all dependencies. Switch to the new folder and run `npm install`.

### 2. Add logic for default authentication

First we need to make sure to add the default authentication before angular bootstraps our custom app. For that reason in the `app.module.ts` in the newly created custom cockpit application, you need to add a new provider, which will be triggered before the login. That can happen with Angularâs Injection Token [`APP_INITIALIZER`](https://angular.io/api/core/APP_INITIALIZER). This token will ensure that the application will not be initialized until the new functionality is being executed.

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

Here you will use a factory function `initApp`, in which we will define and send our default authentication.
Other thing that we need to mention here is the dependency of the [`LoginService`](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/LoginService.html), which is a part from `@c8y/ngx-components`. This will be needed to send our credentials to the API.

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

To do the login with our default credentials, you need to call the [login function](http://resources.cumulocity.com/documentation/websdk/ngx-components/injectables/LoginService.html#login) from the service and pass the authenticatin method and the default credentials.

With that done the recipe is completed and authentication will be done behind the scenes.

```js
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule as NgRouterModule } from "@angular/router";
import { UpgradeModule as NgUpgradeModule } from "@angular/upgrade/static";
import { CoreModule, LoginService, RouterModule } from "@c8y/ngx-components";
import {
  UpgradeModule,
  HybridAppModule,
  UPGRADE_ROUTES,
} from "@c8y/ngx-components/upgrade";
import { AssetsNavigatorModule } from "@c8y/ngx-components/assets-navigator";
import { ReportsModule } from "@c8y/ngx-components/reports";
import { ContextDashboardModule } from "@c8y/ngx-components/context-dashboard";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([...UPGRADE_ROUTES], {
      enableTracing: false,
      useHash: true,
    }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    ReportsModule,
    NgUpgradeModule,
    ContextDashboardModule,
    // Upgrade module must be the last
    UpgradeModule,
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

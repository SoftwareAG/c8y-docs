---
title: Extend an existing application and use hooks
layout: redirect
weight: 10
---

**Version:** 1009.0.18 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

It is a common use case to extend one of our existing apps like Cockpit or Device management.

This recipe explains step by step, how you can extend the Cockpit app with a custom route and hook this route into the navigator. Before starting with the step-by-step description we will provide some background on what we call a hybrid application and what the [@c8y/apps](/web/libraries/#application) npm package contains.

### Brief background

The default applications consist of three application which are shipped with our platform by default. As these applications are a result of several years of development, the code is mainly based on angularjs. As we now use Angular for all of our build-in applications, we needed to find a solution to serve both frameworks. The `@c8y/cli` allows scaffolding a default app which allows exactly this. It uses the Angular upgrade functionality, to serve an Angular and angularjs app at the same time. This enables us to develop new features in Angular while every angularjs plugin should be easily integrable. This is what we call the **hybrid** mode.

The hybrid mode, however, comes with some limitations we will cover later in this recipe. Due to these limitations, we decided to provide a **pure** Angular empty starter application which comes without the possibility to integrate angularjs plugins. That pure version of the app comes in two flavors:

 - [Angular CLI](/web/development-tools/#angular-cli): When using the Angular CLI you benefit from the whole Angular ecosystem so that you can re-use many of the tools of the Angular CLI (e.g. testing).
 - [@c8y/cli](/web/development-tools/#c8y-cli): Is our pre-caved way that integrates well with our tooling but most likely will not allow special cases.

 So in total, there are three possibilities to start with the Web SDK: Extending an existing hybrid app, building a pure Angular app with Angular CLI or building it with @c8y/cli. Which one to choose heavily depends on the application you want to build. E.g. if you want an application that just follows the look&feel of the platform but want to use special dependencies for certain scenarios (e.g. Material-Framework), you are best with the pure Angular CLI solution.

Most likely  you just want to extend a hybrid app, which we will cover in this recipe. But first, we must show the limitations of that approach to understanding better, why concepts are designed the way they are.

### Hybrid mode limitations

As we need to make sure that Angular and angularjs run side by side when running a hybrid app, there are some limitations. The following list tries to explain them:

 - It is not possible to access the `index.html`: The whole bootstrapping process needs to be handled by Cumulocity IoT to make sure, that all required elements for Angular and angularjs are in place. There is no possibility to change the bootstrapping template, you can only add routes.
 - As the services need to be loaded first, you can also not inject any service in the root app module. You need to provide them on a route or as `providedIn: root` at the deceleration of the service.
 - Routes in the router must be defined before the `UPGRADED_ROUTES`. The reason for this is that the Angular router has a `**` path match for all angularjs routes which is defined in the `UPGRADED_ROUTES`. If you define a route after it, the `**` will match before your defined route.
 - Every extension needs to be done via a hook. This is because Angular and angularjs is needed in hybrid apps and the hooks can be used by both.
 - Styling is limited to global styles. That means you can only extend the styling by applying a custom branding or by using inline styles. The `styleUrls` are, as of this version, not supported.

Now that you know the limitations we can start to extend the first application and develop our first extension hook. To do so,  we need to scaffold a hybrid app. Here the `@c8y/apps` package comes into play. It is a package containing the default apps and their minimum setup. The `c8ycli` uses that packages every time you initialize an app with the `new` command. The next section will explain that process and will then extend a hybrid app step by step.

### 1. Initialize the example app

As a starting point, you need an application. For this purpose, create a new Cockpit application using the `c8ycli`:

```js
c8ycli new my-cockpit cockpit -a @c8y/apps@1009.0.18
```

Next, you need to install all dependencies. Switch to the new folder and run `npm install`.

> **Tip:** The `c8ycli new` command has a `-a` flag which defines which package to use for scaffolding. This way you can also define which version of the app you want to scaffold, e.g.:
>
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@1009.0.18` will scaffold an app with the version `10.9.0.18`
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@latest` will scaffold an app with the latest official release. Same as if used without the `-a` flag
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@next` will scaffold an app with the latest beta release.

### 2. Bind a custom component to a route

Routes can be added the same way as in Angular. The only difference is that it needs to be defined before the `UPGRADE_ROUTES` (remember the hybrid limitations). Therefore we can create a simple `hello.component.ts` file in our project with the following content:

```js
import {Component} from "@angular/core";

@Component({
  selector: "app-hello",
  template: `
    <c8y-title>Hello</c8y-title>
    World
  `,
})
export class HelloComponent {
  constructor() {}
}
```

This is a very basic component. Only the template uses a special feature called "content projection" to show a title. Content projection is an Angular concept to display content in other places then they are defined. Which components support content projection is described in the [@c8y/ngx-components](/web/libraries/#component) documentation.

We can now bind this custom component to a route by changing the `app.module.ts` the following way:

```js
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule as NgRouterModule} from "@angular/router";
import {UpgradeModule as NgUpgradeModule} from "@angular/upgrade/static";
import {CoreModule, RouterModule} from "@c8y/ngx-components";
import {DashboardUpgradeModule, UpgradeModule, HybridAppModule, UPGRADE_ROUTES} from "@c8y/ngx-components/upgrade";
import {AssetsNavigatorModule} from "@c8y/ngx-components/assets-navigator";
import {CockpitDashboardModule, ReportDashboardModule} from "@c8y/ngx-components/context-dashboard";
import {ReportsModule} from "@c8y/ngx-components/reports";
import {SensorPhoneModule} from "@c8y/ngx-components/sensor-phone";
import {BinaryFileDownloadModule} from "@c8y/ngx-components/binary-file-download";

// --- 8< changed part ----
import { HelloComponent } from './hello.component';    // 1
// --- >8 ----

@NgModule({

  // --- 8< changed part ----
  declarations: [HelloComponent],                      // 2
  // --- >8 ----

  imports: [
    // Upgrade module must be the first
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot(
      // --- 8< changed part ----
      { path: 'hello', component: HelloComponent},     // 3
      // --- >8 ----

      ...UPGRADE_ROUTES
    ], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    ReportsModule,
    NgUpgradeModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    ReportDashboardModule,
    BinaryFileDownloadModule,
  ]
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
```

The changes here are straight forward: First, we import the component (1.). Then we add it to the declarations (2.). Last we need to bind it to a path, in this case, `hello` (3.). When you now spin up the application with the `c8ycli server` command and navigate to the URL by adding the right hash to the URL (`http://localhost:9000/apps/cockpit/#/hello`) you should already see that custom component. In the next step, we will hook that component in the navigator at the left.

### 3. Hooking a navigator node

To allow the user to navigate to our created `hello.component.ts` we need to add some navigation to the left-side navigator. To do so, we will use a so-called hook.

The hooks are just providers that are bound to a certain injection token. To allow adding multiple providers we use the multi-provider concept of Angular. Explaining it in detail goes beyond the scope of this tutorial but there is a good [official documentation](https://angular.io/guide/dependency-injection-providers#predefined-tokens-and-multiple-providers) describing it.

The injection tokens can be received from the `@c8y/ngx-components` package by simply importing it. They all start with `HOOK_` following what they are used for. To add a navigator node we will therefore use the `HOOK_NAVIGATOR_NODE`:

```js
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule as NgRouterModule} from "@angular/router";
import {UpgradeModule as NgUpgradeModule} from "@angular/upgrade/static";
// --- 8< changed part ----
import {CoreModule, RouterModule, HOOK_NAVIGATOR_NODES, NavigatorNode} from "@c8y/ngx-components";
// --- >8 ----
import {DashboardUpgradeModule, UpgradeModule, HybridAppModule, UPGRADE_ROUTES} from "@c8y/ngx-components/upgrade";
import {AssetsNavigatorModule} from "@c8y/ngx-components/assets-navigator";
import {CockpitDashboardModule, ReportDashboardModule} from "@c8y/ngx-components/context-dashboard";
import {ReportsModule} from "@c8y/ngx-components/reports";
import {SensorPhoneModule} from "@c8y/ngx-components/sensor-phone";
import {BinaryFileDownloadModule} from "@c8y/ngx-components/binary-file-download";

@NgModule({
  declarations: [HelloComponent],

  imports: [
    // Upgrade module must be the first
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot(
      [
        {path: "hello", component: HelloComponent}, // 3
        ...UPGRADE_ROUTES,
      ],
      {
        enableTracing: false,
        useHash: true,
      }
    ),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    ReportsModule,
    NgUpgradeModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    ReportDashboardModule,
    BinaryFileDownloadModule,
  ],

  // --- 8< changed part ----
  providers: [
    {
      provide: HOOK_NAVIGATOR_NODES, // 1
      useValue: [{                   // 2
        label: 'Hello',              // 3
        path: 'hello',
        icon: 'rocket',
        priority: 1000
      }] as NavigatorNode[],         // 4
      multi: true                    // 5
    }
  ]
  // --- >8 ----

})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
```

Explanation of the above comment numbers:

 1. We provide the `HOOK_NAVIGATOR_NODES`.
 2. We use a certain value. For complex cases we can also define a `useClass` and a `get()` function.
 3. We define how the navigator node should look like.
 4. Most hooks have interfaces which allow type-ahead information in typescript.
 5. The multi-provider flag tells Angular that there could be more than just one hook.

After we implement this extension hook we get a new entry in the navigator which looks like this (note that the property `priority` of the `NavigatorNode` interface defines in which order the nodes are shown):

![The extended Cockpit application](/images/web-sdk/route-extension-hook.png)

As you can see the `hello.component.ts` is now like a blank canvas inside the Cockpit app. In that, you can implement any kind of feature you need, while the given functionality of the Cockpit isn't touched.

### Conclusion

As seen in this recipe, a hybrid app is limited due to its angularjs and Angular integration. However, the hook concept and a custom route allow adding nearly anything to the existing hybrid apps. They give you a powerful tool to extend the build-in apps. But sometimes more features are needed and a pure Angular app might fit better. It depends on the use case to decide if a simple extension is enough or a new application needs to be implemented.

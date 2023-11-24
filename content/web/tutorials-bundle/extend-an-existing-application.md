---
title: Extend an existing application and use hooks
layout: redirect
weight: 50
---

**Version:** 1017.0.23 | **Packages:** @c8y/cli, @c8y/apps and @c8y/ngx-components

It is a common use case to extend one of our existing applications like Cockpit or Device management.

This recipe explains step by step, how you can extend the Cockpit application with a custom route and hook this route into the navigator.
First, we will provide some background on what we call a hybrid application and what the [@c8y/apps](/web/libraries/#application-library) npm package contains.

### Brief background {#brief-background}

The default applications consist of three applications which are shipped with our platform by default.
As these applications are a result of several years of development, the code is mainly based on angularjs.
As we now use Angular for all of our build-in applications, we needed a solution to serve both frameworks.
The `@c8y/cli` allows scaffolding a default application which does exactly that.
It uses the Angular upgrade functionality to serve an Angular and angularjs application at the same time.
This enables us to develop new features in Angular while every angularjs plugin can be integrated.
This is what we call the **hybrid** mode.

The hybrid mode, however, comes with some limitations we will cover later in this recipe.
Due to these limitations, we decided to provide a **pure** Angular empty starter application which comes without the possibility to integrate angularjs plugins.
This pure version of the application comes in two flavors:

 - [Angular CLI](/web/development-tools/#angular-cli): When using the Angular CLI you benefit from the whole Angular ecosystem so that you can re-use many of the tools of the Angular CLI (for example testing).
 - [@c8y/cli](/web/development-tools/#c8y-cli): This is our pre-caved way that integrates well with our tooling but will likely not support special cases.

There are three possibilities in total to start with the Web SDK:

* Extending an existing hybrid application.
* Building a pure Angular application with Angular CLI.
* Building it with `@c8y/cli`.

Which one to choose heavily depends on the application you want to build.
For example, if you want an application that just follows the look and feel of the platform but want to use special dependencies for certain scenarios, for example, the Material framework, you are best set with the pure Angular CLI solution.

The most common use case is the extension of a hybrid application, which we will cover in this recipe.
First, take a look at the limitations of that approach to understand why the concepts are designed the way they are.

### Hybrid mode limitations {#hybrid-mode-limitations}

As we must make sure that Angular and angularjs run side by side when running a hybrid application, there are some limitations:

 - It is not possible to access the *index.html*: The whole bootstrapping process needs to be handled by {{< product-c8y-iot >}} to make sure that all required elements for Angular and angularjs are in place. There is no possibility to change the bootstrapping template and you can only add routes.
 - As the services must be loaded first, you can also not inject any service in the root application module. You must provide them on a route or as `providedIn: root` at the deceleration of the service.
 - Routes in the router must be defined before the `UPGRADED_ROUTES`. This is because the Angular router has a `**` path match for all angularjs routes which is defined in the `UPGRADED_ROUTES`. If you define a route after it, the `**` will match before your defined route.
 - Every extension needs to be done via a hook. This is because Angular and angularjs are needed in hybrid applications and the hooks can be used by both.
 - Styling is limited to global styles. That means you can only extend the styling by applying a custom branding or by using inline styles. The `styleUrls` are, as of this version, not supported.

Now that you know the limitations you can start to extend the first application and develop your first extension hook.
To do so, you must scaffold a hybrid application.
`@c8y/apps` is a package which contains the default applications and their minimum setup.
The `c8ycli` uses this package every time you initialize an application with the `new` command.
The next section will explain the scaffolding process and how to extend a hybrid application step by step.

### 1. Initialize the example application {#1-initialize-the-example-application-existing-application}

As a starting point, you need an application.
For this purpose, create a new Cockpit application using the `c8ycli`:

```js
c8ycli new my-cockpit cockpit -a @c8y/apps@1017.0.23
```

Next, you must install all dependencies.
Switch to the new folder and run `npm install`.

{{< c8y-admon-info >}}
The `c8ycli new` command has a `-a` flag which defines which package to use for scaffolding. This way you can also define which version of the application you want to scaffold, for example:

`c8ycli new my-cockpit cockpit -a @c8y/apps@1017.0.23` will scaffold an application with the version `10.17.0.23`
{{< /c8y-admon-info >}}

### 2. Bind a custom component to a route {#2-bind-a-custom-component-to-a-route}

Routes can be added the same way as in Angular.
The only difference is that it needs to be defined before the `UPGRADE_ROUTES` because of the hybrid limitations.
Create the *hello.component.ts* file in our project with the following content:

```js
import { Component } from "@angular/core";

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

This is a basic component.
Only the template uses a special feature called "content projection" to show a title.
Content projection is an Angular concept used to display content in other places than they are defined.
For more information on which components support content projection refer to the [@c8y/ngx-components](/web/libraries/#component-library-ngx) documentation.

We can now bind this custom component to a route by changing the *app.module.ts* in the following way:

```js
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, RouterModule } from '@c8y/ngx-components';
import { DashboardUpgradeModule, UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from '@c8y/ngx-components/upgrade';
import { SubAssetsModule } from '@c8y/ngx-components/sub-assets';
import { ChildDevicesModule } from '@c8y/ngx-components/child-devices';
import { CockpitDashboardModule, ReportDashboardModule } from '@c8y/ngx-components/context-dashboard';
import { ReportsModule } from '@c8y/ngx-components/reports';
import { SensorPhoneModule } from '@c8y/ngx-components/sensor-phone';
import { BinaryFileDownloadModule } from '@c8y/ngx-components/binary-file-download';
import { SearchModule } from '@c8y/ngx-components/search';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { CockpitConfigModule } from '@c8y/ngx-components/cockpit-config';
import { DatapointLibraryModule } from '@c8y/ngx-components/datapoint-library';
import { WidgetsModule } from '@c8y/ngx-components/widgets';
import { PluginSetupStepperModule } from '@c8y/ngx-components/ecosystem/plugin-setup-stepper';

// --- 8< added part ----
import { HelloComponent } from './hello.component';    // 1
// --- >8 ----

@NgModule({

  // --- 8< added part ----
  declarations: [HelloComponent],                      // 2
  // --- >8 ----
  imports: [
    // Upgrade module must be the first
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    // --- 8< changed part ----
    NgRouterModule.forRoot(
      [{ path: "hello", component: HelloComponent }, ...UPGRADE_ROUTES],
      { enableTracing: false, useHash: true }
    ),
    // --- >8 ----
    CoreModule.forRoot(),
    ReportsModule,
    NgUpgradeModule,
    AssetsNavigatorModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    ReportDashboardModule,
    BinaryFileDownloadModule,
    SearchModule,
    SubAssetsModule,
    ChildDevicesModule,
    CockpitConfigModule,
    DatapointLibraryModule.forRoot(),
    WidgetsModule,
    PluginSetupStepperModule
  ],
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
```

The changes here are straightforward.
First, you import the component (1.). Then you add it to the declarations (2.). Last you have to bind it to a path, for this example, `hello` (3.).
When you now spin up the application with the `c8ycli server` command and navigate to the URL by adding the right hash to it (*http://localhost:9000/apps/cockpit/#/hello*) you should see the custom component.
In the next step, you will hook the component in the navigator at the left.

### 3. Hooking a navigator node {#3-hooking-a-navigator-node}

To allow the user to navigate to your newly created *hello.component.ts*, add some navigation to the navigator on the left.
To do so, you will use a so-called hook.

Hooks are providers that are bound to a certain injection token.
To allow the addition of multiple providers, use the multi-provider concept of Angular.
Explaining it in detail goes beyond the scope of this tutorial.
Refer to the [angular.io documentation](https://angular.io/guide/dependency-injection-providers#predefined-tokens-and-multiple-providers).

The injection tokens can be received from the `@c8y/ngx-components` package by importing it.
They all start with `HOOK_` followed by what they are used for.
For example, to add a navigator node, use the `HOOK_NAVIGATOR_NODE` in *app.module.ts* in the following way:

```js
{
      provide: HOOK_NAVIGATOR_NODES,
      useValue: [{
        label: 'Hello',  
        path: 'hello',
        icon: 'rocket',
        priority: 1000
      }] as NavigatorNode[],         // 1
      multi: true
}
```

As you see in (1) you must take care of the typing on your own.
To avoid it, you can also use the `hookX` function, which allow the same but without taking care of the boilerplate code.
The following example uses these functions, to add a navigator node, using `hookRoute` and `hookNavigatorNode`:

```js
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule as NgRouterModule } from "@angular/router";
import { UpgradeModule as NgUpgradeModule } from "@angular/upgrade/static";
// --- 8< changed part ----
import { CoreModule, RouterModule, hookNavigator, hookRoute } from "@c8y/ngx-components";
// --- >8 ----
import { DashboardUpgradeModule, UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from "@c8y/ngx-components/upgrade";
import { SubAssetsModule } from "@c8y/ngx-components/sub-assets";
import { ChildDevicesModule } from "@c8y/ngx-components/child-devices";
import { CockpitDashboardModule, ReportDashboardModule } from "@c8y/ngx-components/context-dashboard";
import { ReportsModule } from "@c8y/ngx-components/reports";
import { SensorPhoneModule } from "@c8y/ngx-components/sensor-phone";
import { BinaryFileDownloadModule } from "@c8y/ngx-components/binary-file-download";
import { SearchModule } from "@c8y/ngx-components/search";
import { AssetsNavigatorModule } from "@c8y/ngx-components/assets-navigator";
import { CockpitConfigModule } from "@c8y/ngx-components/cockpit-config";
import { DatapointLibraryModule } from "@c8y/ngx-components/datapoint-library";
import { WidgetsModule } from "@c8y/ngx-components/widgets";
import { PluginSetupStepperModule } from "@c8y/ngx-components/ecosystem/plugin-setup-stepper";
import { HelloComponent } from "./hello.component";

@NgModule({
  declarations: [HelloComponent],

  imports: [
    // Upgrade module must be the first
    UpgradeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot(
      [{ path: "hello", component: HelloComponent }, ...UPGRADE_ROUTES],
      { enableTracing: false, useHash: true }
    ),
    CoreModule.forRoot(),
    ReportsModule,
    NgUpgradeModule,
    AssetsNavigatorModule,
    DashboardUpgradeModule,
    CockpitDashboardModule,
    SensorPhoneModule,
    ReportDashboardModule,
    BinaryFileDownloadModule,
    SearchModule,
    SubAssetsModule,
    ChildDevicesModule,
    CockpitConfigModule,
    DatapointLibraryModule.forRoot(),
    WidgetsModule,
    PluginSetupStepperModule,
  ],
  // --- 8< changed part ----
  providers: [
    hookRoute({                     // 1
      path: "hello",
      component: HelloComponent,
    }),
    hookNavigator({                 // 1, 2
      priority: 1000,
      path: "/hello",               // 3
      icon: "rocket",
      label: "Hello",               // 4
    }),
  ],
  // --- >8 ----
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
```

Explanation of the above comment numbers:

 1. You provide the `hookRoute` and `hookNavigator`.
 2. You use a certain value. For complex cases you can also define a `useClass` and a `get()` function.
 3. You provide a path to your application, should always start with `/`.
 4. You define what the navigator node should look like.

After you implement this extension hook you get a new entry in the navigator which looks like this:

![The extended Cockpit application](/images/web-sdk/route-extension-hook.png)

Note that the property `priority` of the `NavigatorNode` interface defines in which order the nodes are shown.

The *hello.component.ts* is now like a blank canvas inside the Cockpit application.
You can implement any kind of feature you need, while the given functionality of the Cockpit is not affected.

### Conclusion {#conclusion}

A hybrid application is limited because of its angularjs and Angular integration.
However, the hook concept and a custom route allow for additions to existing hybrid applications.
They are a powerful tool to extend the build-in applications.
Sometimes additional features are needed and a pure Angular application is a better fit.
This depends on the use case.

---
title: Add a tab to a detail views with context routes
layout: redirect
weight: 10
---

 **Version:** 10.4.11.0 | **Packages:** @c8y/cli and @c8y/ngx-components

A common use case is that you want to show additional information if a user goes to a detail view (e.g. a device or group). This how to recipe will show you how you can accomplish a new tab in the device detail view that looks similar to this:

![Device info](/guides/images/users-guide/DeviceManagement/devmgmt-devices-info.png)

In the Web SDK for Angular that kind of views are called `ViewContext` as they provide a view for a certain context. There exist a couple of context views e.g. `Device`, `Group`, `User`, `Application` and `Tenant`. They are accessible by the user by navigating to a certain `Route` with the hash navigation. For example if you go to the route `apps/cockpit/#/device/1234` the application tries to resolve the device with the id `1234`. 

On that view there a mostly a couple of `Tabs` show, e.g. in the screenshot above the info tab which is referenced by another route called `/info` but reuses the context of the device to show information about it. This how-to recipe will guide you through the process of creating a new tab to that view that is accessible through the route `apps/cockpit/#/device/:id/hello`.

### 1. Initialize the example app
To start we need an application that supports context routes. Therefore we gone use the `c8ycli` to create a new cockpit application:

```js
c8ycli new my-cockpit cockpit
```
That will scaffold an cockpit application. You know need to install all dependencies by changing to the new folder and run `npm install`.

### 2. Add a new ROUTE_HOOK_ONCE
The hook concept allows you to hook into the existing code. In this case we want to add a so called ChildRoute (by Angular) on the existing route `device/:id`. Therefore we add to the `app.module.ts` the following code:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
// ---- 8< changed part ----
import { CoreModule, RouterModule, HOOK_ONCE_ROUTE, ViewContext } from '@c8y/ngx-components';
// ---- >8 ----
import { UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([
      ...UPGRADE_ROUTES,
    ], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    NgUpgradeModule,
    UpgradeModule
    ]

  // ---- 8< added part ----
  providers: [{ 
    provide: HOOK_ONCE_ROUTE,          // 1.
    useValue: [{                       // 2.
      context: ViewContext.Device,     // 3.
      path: 'hello',                   // 4.
      component: HelloComponent,       // 5.
      label: 'hello',                  // 6.
      priority: 100,
      icon: 'rocket'
    }], 
    multi: true
  }]
  // ---- >8 ----

})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
```

The code does the following:

 1. First we provide the multi-provider hook `HOOK_ROUTE_ONCE`. That tells the application to extend the current route configuration.
 2. Then we tell that we want to use a value to define the route hook. You can also use a class here. e.g. if you want to resolve the routes async.
 3. We define the context of the route. You should use the `ViewContext` enum to define it. In this case we want to extend the context of a device.
 4. The path where it should be shown. It is added to the context path. In this case the complete path is: `device/:id/hello`.
 5. Define what component should be shown if that path is hit by a user.
 6. The properties `label` and `icon` define how the tab should look like. The `priority` defines on which position it should be shown.

> Hint: The HOOK_ONCE_ROUTE inherits the Angular Route type. So all properties of it can be reused here.

After that alignments the route is registered but the application will fail to compile, as the `HelloComponent` does not exist. We will create it in the next chapter.

### 3. Add a Component to display context data

The hello component might want to display details about the device. Therefore it needs the information in which context it was opened. The context route resolves the device upfront, so there is no need to handle this. You can directly access it via the parent route. So let's create a new file called `hello.component.ts`:

```js
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  template: `
  <c8y-title>world</c8y-title>
  <pre>
    <code>
      {{route.snapshot.parent.data.contextData | json}}
    </code>
  </pre>
  `
})
export class HelloComponent {
  constructor(public route: ActivatedRoute) {}
}
```

Nothing special about that component expect that it injects the `ActivatedRoute` and access the parent data of it. This is the key point, as the parent context route already has resolved the data of the device, that component will always show the detailed data of the current device.

Adding this to the entryComponents in `app.module.ts` will allow to compile the application:

```js

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, RouterModule, HOOK_ONCE_ROUTE, ViewContext } from '@c8y/ngx-components';
import { UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
// ---- 8< added part ----
import { HelloComponent } from './hello.component';
// ---- >8 ----

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([
      ...UPGRADE_ROUTES,
    ], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    NgUpgradeModule,
    UpgradeModule
  ],

  // ---- 8< added part ----
  declarations: [HelloComponent],
  entryComponents: [HelloComponent],
  // ---- >8 ----

  providers: [{ 
    provide: HOOK_ONCE_ROUTE,
    useValue: [{
      context: ViewContext.Device,
      path: 'hello',
      component: HelloComponent,
      label: 'hello',
      priority: 100,
      icon: 'rocket'
    }], 
    multi: true
  }]
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}

```

When you now start your application with `npm start` and navigate to a detail view of a device it should look like this:

![Device info with custom tab](/guides/images/web-sdk/deveice-detail-custom-tab.png)

Congratulations, you added a tab to a device. You can do the same for tenants, users or applications detail views. Next you will learn how you can show this tab only if a certain criteria is given.

### (Bonus) 4. Show the tab only on certain criteria

Sometimes additional information are only available if a certain criteria is fulfilled. For example it only makes sense to show a location if the device has a location fragment associated. To add such a criteria the context-routes inherit the [guard concept of Angular](https://angular.io/guide/router#milestone-5-route-guards). To add a guard we simply need to add the `canActivate` property to the route definition:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, RouterModule, HOOK_ONCE_ROUTE, ViewContext } from '@c8y/ngx-components';
import { UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { HelloComponent } from './hello.component';

// ---- 8< added part ----
import { HelloGuard } from './hello.guard';
// ---- >8 ----

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([
      ...UPGRADE_ROUTES,
    ], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    NgUpgradeModule,
    UpgradeModule
  ],
  declarations: [HelloComponent],
  entryComponents: [HelloComponent],
  providers: [

    // ---- 8< added part ----
    HelloGuard,
    // ---- >8 ----

    {
    provide: HOOK_ONCE_ROUTE,
    useValue: [{
      context: ViewContext.Device,
      path: 'hello',
      component: HelloComponent,
      label: 'hello',
      priority: 100,
      icon: 'rocket',

      // ---- 8< added part ----
      canActivate: [HelloGuard]
      // ---- >8 ----

    }], 
    multi: true
  }]
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
```

Now you can write a guard which checks any criteria. If it resolves to true, the tab will be shown, otherwise not. A guard to check for a certain fragment on a device can look like this `hello.guard.ts`:

```js
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class HelloGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const contextData = route.data.contextData || route.parent.data.contextData;          // 1.
    const { 'acme_HelloWorld': helloWorldFragment } = contextData;                        // 2.
    return !!helloWorldFragment;
  }
}
```

The numbers explained:

 1. That is the only tricky part which is not aligned with the Angular router. As in a context route the `CanActivate` will be called twice, once when the parent route and when the child route is activated. The first one checks if the tab should be shown at all, while the second one checks if the user is allowed to navigate to it. Therefore the `ActivatedRouteSnapshot` is different on both and we need to resolve the `contextData` in the second case from the parent.
 2. We check if the `acme_HelloWorld` fragment is set on the context.

If you now post a device with the fragment `"acme_HelloWorld": {}` to the API, the Hello-Tab will just shown for that device and not for others.

## Conclusion
Context routes help you to extend existing routes with more information. At the same time it allows the application to be consistent as the context is just resolved once and a not found context can be handled by the parent. However there is currently no default way of abstracting the context route concept and implementing your own context route. However, as the concept is heavily based on [Angular routing](https://angular.io/guide/router) you can implement the concept quite easily.



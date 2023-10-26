---
title: Component library (ngx)
layout: redirect
weight: 10
---

ngx-components is a components collection and data access layer for Angular applications. It allows to access our platform from within an Angular application as well as to provide the core components. To achieve this the ngx-components consists of two basic imports:

 - core (`@c8y/ngx-components`) which contains all core components like title, navigator or tabs.
 - api (`@c8y/ngx-components/api`) which enables dependency injection of the [@c8y/client](/web/libraries/#client-library) services.

The full documentation of all modules and components can be found [here](http://resources.cumulocity.com/documentation/websdk/ngx-components/).

### Prerequisites {#prerequisites}

If you do not use the [@c8y/cli](/web/development-tools/#c8y-cli) to bootstrap a new application you must first install the package:

```
$ npm install @c8y/ngx-components
```

Next, you can add the ngx-components modules to your app module (for example app.module.ts):

```js
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, RouterModule } from '@c8y/ngx-components';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }), // 1
    CoreModule.forRoot() // 2
  ],
  bootstrap: [BootstrapComponent] // 3
})
export class AppModule {}

```

1. Make sure to set `useHash` navigation to true as the platform does not support [pushState](https://angular.io/guide/router#hashlocationstrategy)
2. Import the `CoreModule` to allow the use of the `c8y-` prefixed components.
3. Bootstrap your application with the `BootstrapComponent` which will use the `<c8y-bootstrap>` component to initialize the root application. Alternatively, you can bootstrap a component of your choice and include that tag into its template or only reuse the given components.

### Extension points {#extension-points}

To extend and compose an application, ngx-components provide four core architecture concepts called *Extensions points*:

#### Content Projection (CP) {#content-projection-cp}

This concept allows to project content from one component to another. For example, you can configure the title of a page by setting a `<c8y-title>` in any other component. The content of the `<c8y-title>` tag is then projected to an outlet component, which is placed in the header bar. The benefit of this concept is that you can place anything into the projected content, for example you can project another custom component into the title.<br>

A good example to use this concept is the `c8y-action-bar-item` which uses a `routerLink` directive from Angular to route to a different context:

```html
   <c8y-action-bar-item [placement]="'right'">
     <a class="btn btn-link" routerLink="add">
       <i class="fa fa-plus-square"></i> {{'Add' | translate}}
     </a>
   </c8y-action-bar-item>
```

The above example gives you an action bar item in the header bar, regardless in which component you define it. If the component is initialized the item is shown and it is removed on destroy.

#### Multi Provider (MP) {#multi-provider-mp}
The Multi Provider extension offers a declarative way to extend your application. Instead of defining extensions in the template, you can augment an existing factory using a `HOOK`. This hook is triggered whenever the application state changes, and its return values are subsequently injected into the page. You can leverage Angular's standard dependency injection system, allowing you to commonly return an Observable, Promise, or Array of a specific type. For instance, you can define the tabs for certain routes by utilizing the hookTab provider:

```js
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Tab, TabFactory, _ } from '@c8y/ngx-components';

@Injectable({ providedIn: 'root' })
export class ExampleTabFactory implements TabFactory { // 1

  constructor(public router: Router) { }

  get() {
    const tabs: Tab[] = [];
    if (this.router.url.match(/world/g)) {            // 2
      tabs.push({
        path: 'world/awesome',
        label: 'Awesome',
        icon: 'angellist'
      } as Tab);
    }
    return tabs;                                      // 3
  }
}
```

By defining a service with the `Injectable()` decorator that implements the `TabFactory` interface (1), you can specify which tabs should be displayed on each page. In this example, we use Angular's Router service to check if the route URL contains the word **world** (2). If it does, the tab labeled `Awesome` is returned (3). By incorporating this into your module's provider definition, you ensure that the `get()` function is invoked during each route change:

```js
@NgModule({
  declarations: [
    /* ... */
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot([/* ... */], { enableTracing: false, useHash: true }),
    CoreModule.forRoot()
  ],
  providers: [
    hookTab(ExampleTabFactory) // hook the ExampleTabFactory defined earlier
  ],
  bootstrap: [BootstrapComponent]
})
export class AppModule { }
```

Typically, you use Content Projection within a single route and Multi Provider when the context is shared across multiple routes or requires more complex logic to resolve the content. For example, if a title is valid only for one route, use Content Projection. On the other hand, if a tab should be displayed only on specific routes and under certain conditions, use Multi Provider. The following hooks are currently supported:

* `hookTab`: Allows to show tabs on certain conditions.
* `hookNavigator`: Enables navigator nodes to be shown.
* `hookAction`: Enables to define the global actions which should be shown or enabled on certain conditions.
* `hookActionBar`: Enables to define local actions on a page.
* `hookBreadcrumb`: Can be used to show breadcrumbs in the header bar.
* `hookSearch`: Allows to define the search to be shown or not.
* `hookComponent`: A hook to add dynamic components to the UI (e.g. widgets).
* `hookRoute`: A hook to add a new route.
* `hookWizard`: A hook to add a entry into a existing wizard.
* `hookStepper`: A hook to add a step into a existing stepper.
#### Services {#services}

A service is defined for most components of ngx-components. They can be used via the dependency injection concept of Angular, that means that these services can be injected in the constructor of a component and then add or remove certain UI elements. The following example shows how to use that concept with an alert:

```js
   constructor(private alert: AlertService) {
     try {
       // do something that might throw an exception
     } catch(ex) {
       this.alert.add({
         text: 'Something bad happened!'
         type: 'danger';
         detailedData: ex;
       } as Alert);
     }
   }
```

#### Legacy plugins {#legacy-plugins}

If you are extending a default application (Cockpit, Device management or Administration) you get a file called `ng1.ts`. These are so called plugins which haven't been migrated to Angular yet and are still using angular.js. You can add or remove these plugins to customize the application appearance like it has been done previously in a target file by the `addImports: []` or `removeImports: []` property. The following shows an example which removes the default import in the angular.js target file:

```json
    {
      "name": "example",
      "applications": [
        {
          "contextPath": "cockpit",
          "addImports": [
            "my-plugin/cockpit-home",
          ],
          "removeImports": [
            "core/cockpit-home"
          ]
        }
      ]
    }
```

You get the same result in the new Angular framework by modifying the `ng1.ts` file of the cockpit app:

```javascript
    import '@c8y/ng1-modules/core';
    // [...] more imports removed for readability
    import '@c8y/ng1-modules/alarmAssets/cumulocity.json';
    // import '@c8y/ng1-modules/cockpit-home/cumulocity.json';              // 1
    import '@c8y/ng1-modules/deviceControlMessage/cumulocity.json';
    import '@c8y/ng1-modules/deviceControlRelay/cumulocity.json';
    // [...] more imports removed for readability
    import 'my-plugin/cumulocity.json';                                    // 2
```

As you can see we simply removed the import of the original welcome screen plugin (1.) and replaced it by the custom implementation (2.). Note that all angular.js plugins must have the `/cumulocity.json` addition to tell webpack that a legacy plugin is imported.

To use legacy plugins in your custom non-default application you must set the `upgrade` flag in the package.json file and use the same import approach like described before:

```json
    "c8y": {
      "application": {
        "name": "myapp",
        "contextPath": "myapp",
        "key": "myapp-application-key",
        "upgrade": true
      }
    }
```

Also the module definition of your application must be changed to support these plugins:

```javascript
    import { NgModule } from '@angular/core';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { RouterModule as NgRouterModule } from '@angular/router';
    import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
    import { CoreModule, RouterModule } from '@c8y/ngx-components';
    import { UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from '@c8y/ngx-components/upgrade';
    import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';

    @NgModule({
      imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(),
        NgRouterModule.forRoot([
          ...UPGRADE_ROUTES,
        ], { enableTracing: false, useHash: true }),
        CoreModule.forRoot(),
        AssetsNavigatorModule,
        NgUpgradeModule,
        // Upgrade module must be the last
        UpgradeModule
      ]
    })
    export class AppModule extends HybridAppModule {
      constructor(protected upgrade: NgUpgradeModule) {
        super();
      }
    }
```

That will let your app start in a hybrid mode, which allows to use angular.js and Angular plugins/modules.

To determine which extension points are supported and which concept should be used for certain scenarios the following section gives an overview on all supported components and explains in which case they should be used.

### Data access to the platform {#data-access-to-the-platform}

The `CommonModule` exports the `DataModule`, an abstraction of the [@c8y/client](/web/libraries/#client-library) which allows to use the services of the client with the dependency injection system of Angular. So in any module in which the `CommonModule` or `DataModule` is imported you can use simple injection to access data of the platform:

```js
import { Component } from '@angular/core';
import { AlarmService } from '@c8y/client';              // 1

@Component({selector: 'app-alerts', template: ''})
export class AlarmComponent {
  constructor(private alarmService: AlarmService) {}    // 2

  async getAllAlarms() {
    const alarms = await this.alarmService.list();      // 3
    return alarms.data;
  }
}
```

1. Import the service from the [@c8y/client](/web/libraries/#client-library) package.
2. Dependency inject that service.
3. Use that service to request data from the platform.

For detailed information on all available services and on how to filter and select data refer to [@c8y/client](/web/libraries/#client-library).

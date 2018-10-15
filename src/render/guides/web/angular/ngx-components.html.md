---
title: ngx-components
layout: redirect
order: 40
---

ngx-components is a components collection and data access layer for Angular applications. It allows to access our platform from within an Angular application as well as to provide the core components. To achieve this the ngx-components consists of two basic imports:

 - core (`@c8y/ngx-components`) which contains all core components like title, navigator or tabs.
 - api (`@c8y/ngx-components/api`) which enables dependency injection of the [@c8y/client](/guides/web/angular#client) services.

### Prerequisites

If you do not use the [@c8y/cli](/guides/web/angular#cli) to bootstrap a new application you first need to install the package:

```
$ npm install @c8y/ngx-components
```

Next, you can add the ngx-components modules to your app module (e.g. app.module.ts):

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, CommonModule} from '@c8y/ngx-components';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { enableTracing: false, useHash: true }),
    CoreModule,   // 1
    CommonModule  // 2
  ],
  bootstrap: [BootstrapComponent] // 3
})
export class AppModule {}

```

1. Import the `CoreModule` to allow the use of the `c8y-` prefixed components.
2. Import the `CommonModule` to allow the use of data access and translations.
3. Bootstrap your application with the `BootstrapComponent` which will use the `<c8y-bootstrap>` component to initialize the root application. Alternatively, you can bootstrap a component of your choice and include that tag into its template or only reuse the given components.

### Extension points

To extend and compose an application, ngx-components provide three core architecture concepts called *Extensions points*:

1. **Content Projection** (CP):<br>This concept allows to project content from one component to another. For example, you can configure the title of a page by setting a `<c8y-title>` in any other component. The content of the `<c8y-title>` tag is then projected to an outlet component, which is placed in the header bar. The benefit of this concept is that you can place anything into the projected content, for example you can project another custom component into the title.<br>
   A good example to use this concept is the `c8y-action-bar-item` which uses a `routerLink` directive from Angular to route to a different context: 
  
   ```html
   <c8y-action-bar-item [placement]="'right'">
     <a class="btn btn-link" routerLink="add">
       <i class="fa fa-plus-square"></i> {{'Add' | translate}}
     </a>
   </c8y-action-bar-item>
   ```
   The above example gives you an action bar item in the header bar, regardless in which component you define it. If the component is initialized the item is shown and it is removed on destroy.

2. **Multi Provider** (MP):<br>
The Multi Provider extension allows a declarative approach to extend the application. Instead of defining it in the template, you extend an already defined factory via a `HOOK`. This hook gets executed if the application state changes. The return values are then injected into the page. You can use the normal dependency injection system of Angular and as a result you can usually return an Observable, Promise or Array of a certain type. As an example we can define the tabs of certain routes by hooking into the `HOOK_TABS` provider:
   
   ```typescript
   import { Injectable } from '@angular/core';
   import { Router } from '@angular/router';
   import { Tab, TabFactory, _ } from '@c8y/ngx-components';
   
   @Injectable()
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
   By defining a `Injectable()` services which implements the `TabFactory` (1) you can define which tabs you want to show on which page. By using the `Router` service of Angular we check in this example if the URL of the route contains the name **world** (2) and only if this matches the tab labeled `Awesome` is returned (3). By hooking this into your provider definition of your module you make sure, that the `get()` function is checked on each route change:

   ```typescript
    @NgModule({
      declarations: [
        /* ... */
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot([/* ... */], { enableTracing: false, useHash: true }),
        CoreModule,
        CommonModule
      ],
      providers: [
        { provide: HOOK_TABS, useClass: ExampleTabFactory, multi: true} // hook the ExampleTabFactory defined earlier
      ],
      bootstrap: [BootstrapComponent]
    })
    export class AppModule { }
   ```
   Usually you use Content Projection within a route and Multi Provider if the context is shared across multiple routes or needs more complex logic to resolve the content. Examples: a title is just valid for one route -> use Content Projection. A tab should only be shown on specific routes under certain conditions -> use Multi Provider. The following hooks are currently supported:
   
   * `HOOK_TABS`: Allows to show tabs on certain conditions.
   * `HOOK_NAVIGATOR_NODES`: Enables navigator nodes to be shown.
   * `HOOK_ACTION`: Enables to define the global actions which should be shown or enabled on certain conditions.
   * `HOOK_BREADCRUMB`: Can be used to show breadcrumbs in the header bar.
   * `HOOK_SEARCH`: Allows to define the search to be shown or not.


3. **Services**<br>
   A service is defined for most components of ngx-components. They can be used via the dependency injection concept of Angular, that means that these services can be injected in the constructor of a component and then add or remove certain UI elements. The following example shows how to use that concept with an alert: 
   
   ```typescript
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

To determine which extension points are supported and which concept should be used for certain scenarios the following section gives an overview on all supported components and explains in which case they should be used.
   
### List of supported components

Following is a list of components that are currently available in the `CoreModule`. 

The last three columns refer to the architectural concepts described above (CP = Content Projection, MP = Multi Provider, SVC = Service), an `x` means that the respective concept is supported by the component. Most of the components support all concepts, but some are marked with `(x)` indicating the preferred solution for that component. If non is marked the component can only be used with attributes.

|#| Tag | Module name<br>Service name | Description | Attributes | CP | MP | SVC
|---|---|---|---|---|---|---|---|---|
|1| `<c8y-bootstrap>` | BootstrapModule | Composes all outlets to bootstrap an application. | none | 
|2| `<c8y-action>` | ActionModule<br>ActionService | Adds global action to a page (upper right plus icon). | `disabled:boolean=false`<br>`label:string`<br>`priority:number=0`<br>`icon:string` | x | (x) | x
|3| `<c8y-action-bar-item>` | ActionBarModule<br>ActionBarService | Adds a local action to the page (new bar below the header bar). | `placement:('left'|'right'|'more')='left'`<br>`priority:number=0`| (x) | x | x
|4| `<c8y-alert>` | AlertModule<br>AlertService | Allows to show a message (alert, danger, warning) to the user. | `type:string`<br>`onDetail:()=>void`<br>`onClose:()=>void` | x | | (x)
|5| `<c8y-breadcrumb>` | BreadcrumbModule<br>BreadcrumbService | Can display multiple breadcrumb items on a page. | `items:BreadcrumbItem[];` | x | (x) | x
|6| `<c8y-breadcrumb-item>` | BreadcrumbModule<br>BreadcrumbService | One crumb of the breadcrumb.| `icon:string`<br>`translate:boolean`<br>`label:string`<br>`path:string` | x | (x) | x
|7| `<c8y-drop-area>` | DropAreaModule | A possibility to upload files per drag & drop. | `title='Upload file'`<br>`message='Drop file here'`<br>`icon='plus-square'`<br>`loadingMessage='Uploading...'`<br>`alwaysShow=false`<br>`clickToOpen=true`<br>`loading=false`<br>`dropped:EventEmitter<DroppedFile[]>` | (x) 
|8| `<c8y-title>` | HeaderModule<br>HeaderService | Allows to add a title to the page. | none | (x) | | x
|9| `<c8y-app-icon>` | HeaderModule<br>HeaderService | Generates an application icon with the given name for the given contextPath. | `contextPath:string`<br>`name:string= ''` |
|10| `<c8y-header-bar>` | HeaderModule<br>HeaderService | The main header which contains title, actions, search and user-dropdown. By default, it is included in the `BootstrapComponent` and only needs to be used if not bootstrapped with that component. | none
|11| `<c8y-login>` | LoginModule<br>LoginService | The login shown on each application start.  By default, it is included in the `BootstrapComponent` and only needs to be used if not bootstrapped with that component. | none|
|12| `<c8y-modal>` | ModalModule<br>ModalService | A modal with a backdrop. |  `onDismiss:EventEmitter<boolean>`<br>`onClose:EventEmitter<boolean>`<br>`disabled=false`<br>`close:()=>void`<br>`dismiss:()=>void`<br>`title:string` | (x) |  | x
|13| `<c8y-navigator-item>` | NavigatorModule<br>NavigatorService | The left navigator menu allows to switch between routes. |   `label:string`<br>`icon:string`<br>`path:string`<br>`priority=0` | x | (x) | x
|14| `<c8y-search>` | SearchModule<br>SearchService | Allows to add a custom search which will show up in the header bar. | `name:string`<br>`icon:string='search'`<br>`priority:number=0`<br>`search:EventEmitter<Search>`<br>`term:string=''`<br> | x | (x) | x
|15| `<c8y-select>` | SelectModule | A multi-select dropdown with the possibility to filter for values. | `placeholder:string='Select item'`<br>`selectedLabel:string|selectedLabelFunction`<br>`applyLabel:string='Apply'`<br>`items:Item[]`<br>`selected:Item[]|selectedFunction`<br>`onChange:EventEmitter<Item[]>`
|16| `<c8y-tab>` | TabsModule<br>TabsService | Allows to show tabs on a page. | `path:string`<br>`label:string=''`<br>`icon:string`<br>`priority:number` | x | (x) | x


### Data access to the platform

The `CommonModule` exports the `DataModule`, an abstraction of the [@c8y/client](/guides/web/angular#client) which allows to use the services of the client with the dependency injection system of Angular. So in any module in which the `CommonModule` or `DataModule` is imported you can use simple injection to access data of the platform:

```typescript
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

1. Import the service from the [@c8y/client](/guides/web/angular#client) package.
2. Dependency inject that service.
3. Use that service to request data from the platform.

> For detailed information on all available services and on how to filter and select data refer to [@c8y/client](/guides/web/angular#client).
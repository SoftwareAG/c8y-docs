---
title: Add a custom widget to a dashboard
layout: redirect
weight: 30
---

 **Version:** 10.4.11.0 | **Packages:** @c8y/cli and @c8y/ngx-components

If the widgets that are provided by the platform do not meet your requirements, you might want to create a custom widget and add it to a dashboard.

A typical dashboard looks like this, showing various widgets:

![A dashboard](/images/users-guide/cockpit/cockpit-dashboard-widgets.png)

This recipe will show how to archive a custom widget to a dashboard with the `HOOK_COMPONENTS`.

### 1. Initialize the example app

As a starting point, you need an application showing dashboards. For this purpose, create a new Cockpit application using the `c8ycli`:

```js
c8ycli new my-cockpit cockpit -a @c8y/apps@1004.11.0
```

Next, you need to install all dependencies. Switch to the new folder and run `npm install`.

> **Tip:** The `c8ycli new` command has a `-a` flag which defines which package to use for scaffolding. This way you can also define which version of the app you want to scaffold, e.g.:
>
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@1004.11.0` will scaffold an app with the version `10.4.11.0`
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@latest` will scaffold an app with the latest official release. Same as if used without the `-a` flag
> - `c8ycli new my-cockpit cockpit -a @c8y/apps@next` will scaffold an app with the latest beta release.

### 2. Create the widget components

Widgets usually consist of two parts:

* Configuration: The component that is shown when the user wants to add a widget to a dashboard.
* Widget: The component that is shown when it is added to the dashboard.

Hence you must create two components.

First, create the `demo-widget.component.ts`:

```js
import { Component, Input } from '@angular/core';

@Component({
  selector: 'c8y-widget-demo',
  template: `<p class="text">{{config?.text || 'No text'}}</p>`,
  styles: [ `.text { transform: scaleX(-1); font-size: 3em ;}` ]
})
export class WidgetDemo {
  @Input() config;
}
```

There is nothing special to mention about this component. It will just show a configured text which is vertically mirrored via CSS. You can basically do everything in it what you can do in any other Angular component.

It just needs to have the `config` input to pass the configuration from the `demo-widget-config.component.ts` which is defined as:

```js
import { Component, Input } from '@angular/core';

@Component({
  selector: 'c8y-widget-config-demo',
  template: `<div class="form-group">
    <c8y-form-group>
      <label translate>Text</label>
      <textarea style="width:100%" [(ngModel)]="config.text"></textarea>
    </c8y-form-group>
  </div>`
})
export class WidgetConfigDemo {
  @Input() config: any = {};
}
```

Here again, you just need to add a `config` object which you can fill with any serializable configuration that you want to pass to the widget.

### 3. Add the widget to your application

To add the widget you have to use the `HOOK_COMPONENTS` and define the created components as `entryComponent`.

To do so, add the following to your `app.module.ts`:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';

// --- 8< changed part ----
import { CoreModule, HOOK_COMPONENTS } from '@c8y/ngx-components';
// --- >8 ----

import { UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';

// --- 8< added part ----
import { WidgetDemo } from './demo-widget.component';
import { WidgetConfigDemo } from './demo-widget-config.component';
// --- >8 ----

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      ...UPGRADE_ROUTES
    ], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    NgUpgradeModule,
    UpgradeModule
  ],

  // --- 8< added part ----
  declarations: [WidgetDemo, WidgetConfigDemo],      // 1.
  entryComponents: [WidgetDemo, WidgetConfigDemo],
  providers: [{
    provide: HOOK_COMPONENTS,                         // 2.
    multi: true,
    useValue: [
      {
        id: 'acme.text.widget',                        // 3.
        label: 'Text widget',
        description: 'Can display a text',
        component: WidgetDemo,                         // 4.
        configComponent: WidgetConfigDemo,
      }
    ]
  }],
  // --- >8 ----

})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}

```

Explanation of the above numbers:

1. Define the components as entry components and declare them to make them accessible by this module.
2. Add a multi-provider hook with the `HOOK_COMPONENTS`. This hook is collected by the application and adds the widget based on the values you provide.
3. The ID needs to be unique as it identifies the data stored in the inventory. The label and description is shown as the title and in the widget dropdown.
4. These part tells the hook to associate the previously defined components to the widget.

If you now start your application with `npm start` you should be able to add your custom widget to a dashboard.

Once added to a dashboard, the widget looks similar to this:

![A custom widget](/images/web-sdk/custom-widget.png)

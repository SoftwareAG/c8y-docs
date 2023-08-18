---
title: Migrating applications
layout: redirect
weight: 10
---


This section targets developers who have either already developed a plugin with the AngularJS SDK for plugins or want to extend the existing default applications.

You should have read and understood the following concepts:

* [Appendix: Migration history](/web/appendix-migration-history/), explaining when to use which SDK.
* [Migration history](/web/background), explaining which versions you can use with the new SDK.
* [c8y Command Line Tool (CLI)](/web/development-tools/#c8y-cli), enabling you to install the new tooling.


### Setting up a hybrid application

With a hybrid application AngularJS and Angular can be used at the same time. It allows to use not-migrated plugins written in AngularJS in an Angular context. The CLI automatically sets up a hybrid application, if you use one of our default applications as a template (cockpit, devicemangement or administration). The command to be used is `c8ycli new <your-app-name> <template-name>`.

For example, to override the default cockpit you use:

```
c8ycli new cockpit cockpit
```

When you run this command it provides you with a very simple file structure that contains the following files:

 - `app.module.ts`: An Angular entry module in which you can hook Angular routes. Note that for a {{< product-c8y-iot >}} application you don't get access to the root element and therefore there is no root template (index.html) which you can modify.
 - `package.json`: The package.json describes the dependencies and the application itself. The `c8y.upgrade: true` flag tells our webpack plugins to allow AngularJS plugins.
 - `ng1.ts`: Our default AngularJS plugins for the Cockpit application.
 - `index.ts`: The bootstrapping which is setup to bootstrap a hybrid application.
 - `polyfills.ts`: Polyfills setup to run in IE11.
 - `tsconfig.json`: The typescript configuration.

### Importing AngularJS plugins

If you want to integrate your custom plugin into an application, you must first set up the hybrid application for the application into which you want to import the plugin. Then you simply copy the plugin to the hybrid application and reference the `cumulocity.json` of the plugin in the `ng1.ts` file with an import:

```
import 'my-custom-plugin/cumulocity.json';
```

Webpack now reads the manifest file and converts the content to CommonJS require imports so that the plugin will be loaded and applied to the application.

### Custom bootstrapping and upgrading

In the `app.module.ts` file we bootstrap the hybrid application with the following code on the `HybridAppModule`.

```js
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { ng1Modules } from './ng1';

export abstract class HybridAppModule {
  ng1Modules = ng1Modules;
  protected upgrade: NgUpgradeModule;

  ngDoBootstrap() {
    (window as any).bootstrap();
    this.upgrade.bootstrap(document.getElementById('app'), this.ng1Modules, { strictDi: false });
  }
}
```

This module not only bootstraps the upgrade module but also initializes the Angular application.

In the `app.module.ts` you can control the bootstrapping. For example, you can add another module to the bootstrapped ng1 modules:

```js
constructor() {
  this.ng1Modules.push('my-custom-module');
}
```

This will also load your `my-custom-module`. You can use this to override the `ngDoBootstrap()` function to whatever fits your application needs, for example, upgrade or downgrade Angular services as shown in the Angular docs.

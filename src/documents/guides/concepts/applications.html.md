---
order: 40
title: Developing applications
layout: default
---
## Overview

Cumulocity was designed to run arbitrary vertical IoT applications in addition to the built in Cumulocity applications. Tenants can subscribe to applications to get

* Extend Cumulocity user interface.
* Entirely new user interfaces.
* New server-side business logic.

This section introduces the basic concepts around applications in Cumulocity.

## Available applications to each tenant

The users in each tenant have access to the applications that:
* Have been created by them (*Own applications*)
* The tenant is subscribed to (*Subscribed Applications*)

### Own applications
Are only available to users of a particular tenant and are created by a user with application administration permissions. *Own applications* are used, for example, during application development when you do not yet want to make a particular application version available for a wide audience. They are also used for functionality that is proprietary for an enterprise, for example, interactions with in-house IT systems. The applications can be either:
  * **HTML5 Application**
  These are regular client side applications based on HTML, Javascript and CSS. There is no limitation on whatever library or framework you can use. If you choose to use [AngularJS 1.x](https://angularjs.org/) examples and source code are provided as part of the [Smart Apps Toolkit](/guides/web/smart-toolkit/)
  * **Smartapps**
  These web applications are built upon the Cumulocity UI platform, which uses AngularJS 1.x. It's a completely modular system that allows to:
    * Extend built in applications
    * Create custom applications applications reusing built in applications functionality
    * Create branded versions of built in applications
    * Create translations for the UI
    * Create plugins that can be uploaded and removed via *Application management* in *Administration* to any application of this type.
  To build a *Smartapp* you can follow the guide [Introduction to plugin development](/guides/web/introduction/).

### Subscribed applications
These are  owned by the tenant ```management```. Subscribing to a market application makes it available to that tenant. To certify an application as market application, please [contact us](mailto:info@cumulocity.com) or simply change your application ```availability``` setting to ```MARKET```.

## Properties

Applications are managed via the [Application API](/guides/reference/applications/).
The essential properties on an application object are:
* **name** A human friendly name for the application to be displayed on UI
* **contextPath** The url where the app will be available. If it is set to  ```devicemanagement``` the application will be available in at the url ```/apps/devicemanagement```. This value *must* be unique for all the apps owned by a single tenant.
If a specific tenant owns that an application with the same context path of another app which it is also subscribed to, the owned application will overide the subscribed one.
* **applicationKey** This key is included in every request an application executes to the api. It is a mechanism to associate requests with a specific application and distinguish from other request coming from devices. This value *must* be unique for all the applications owned by a single tenant.

## Contents
A ```HOSTED``` application can contain:
* A complete, standalone client side  web application, regardless if it is a *Smartapp* based on Cumlocity UI platform, or any other frontend stack.
* A ```cumulocity.json``` manifest on the root of the app in the case of *Smartapps*
* A set of statements in Cumulocity Event Language.

## Applications in user interface

Applications available to each user are listed in the **application switcher** on the top right corner of built in applications or any other *Smartapp*, so
that users can navigate between them. They can be ```HOSTED``` on an ```EXTERNAL``` web site.
* ```HOSTED``` are available via ```<tenant>.cumulocity.com/apps/<application>``` can serve files files uploaded in a zip archive or simply proxy he request to another webserver.
* ```EXTERNAL``` are nothing more than a link, and the user will navigate to that address. They can also be hosted through

![App switcher](/guides/concepts-guide/appswitcher.png)

The Cumulocity build in applications are based on AngularJS 1.x. It is designed in a modular fashion around a set of plugins that can be dynamically enabled and disabled even by end users.
As so, each built in app as any *Smartapp* is simply a set of plugins assembled together. These plugins can be uploaded or removed via the administration user interface and developers can leverage these same plugins to develop new plugins and assemble multiple applications.

![Plugin editor](/guides/users-guide/plugins.png)

## Plugins

A plugin is nothing else than a module that contains javascript, css, and any other kind of asset. Although it can contain any kind of code or library, the developer will probably want to integrate with existing UI using extension points:

* Add search functionality.
* Contribute menu items to the navigation bar on the left.
* Add views or "tabs" to devices.
* Add menu items to the drop-down menu of a device.
* Add widgets.
* Modify the branding

This is illustrated below:

![Extension points for plugins](/guides/concepts-guide/extensionpoints.png)


For more information on developing plugins, please visit the [Plugin Developer's Guide](/guides/web/introduction).

## Compatibility

Backwards compatibility for all REST APIs is guaranteed, while backward compatibilities for JavaScript APIs are not. We try to keep the JavaScript incompatibilities to a minimum, there are cases where they will happen. Therefore new application versions might cause older versions of the plugins to fail.

However, this is taken care by automatically by the previous mentioned mechanism to copy subscribed applications. For example, if a user adds a plugin to the builtin application “Cockpit Version 2.0”, then the application is copied. That means that the application is “freezed”. Updates of the Cockpit application will not be automatically available in the copied version. This ensures that the added plugin will work successfully. And because of the compatibility of the REST API the copied version is ensured to work also for the new backend version.

## Migration

If you have built a *Smartapp* built on the previous version where the plugins would be loaded from other applications at runtime, just read [Plugin Developer's Guide](/guides/web/introduction) and copy your plugins and application manifest to the new project structure.
The old "Smartapps" functionality is still available in the REST API although it's creation has been removed from the administration UI. The old *Smartapps* are not updated anymore (*frozen at 7.33*), this ensures working of existing Plugins.
If you want to use their Plugins with updated version of Cockpit or Device management, then you need to port their Plugins to the new *Smartapps* mechanism.
In the new paradigm described in [Plugin Developer's Guide](/guides/web/introduction) you can choose which version of UI to build your application with, as so you have total control over what is deployed and executed in each app.

## Modules

If your application requires new server-side processing functionality, you can add a [Cumulocity Event Language](/guides/reference/real-time-statements) module to it. This is simply a file inside your application at a particular location (```META-INF/application-module.cel```).

```console
module paypalhere;
@Name('store_purchase_details1_on_purchase_operation')
insert into PurchaseDetailsTmp1
select
    findManagedObjectById(purchaseEvent.operation.deviceId.value) as vendingMachine,
    getString(purchaseEvent.operation, "c8y_Purchase.tabId") as tabId,
    getNumber(purchaseEvent.operation, "c8y_Purchase.amount") as amount,
    purchaseEvent.operation.id as purchaseOperationId,
    purchaseEvent.operation.deviceId as deviceId
from
...
```

Please note that module deployment within application is not supported for local zip applications, so the ```resourceUrl``` has to point to some external resource from where the file can be downloaded. The file has to be named ```application-module.cel``` and be inside directory ```META-INF```.

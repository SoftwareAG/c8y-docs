---
order: 40
title: Developing applications
layout: default
---
## Overview

Cumulocity was designed to run arbitrary vertical IoT applications in addition to the generic functionality coming with Cumulocity. Tenants can subscribe to applications to get

* Extensions to the Cumulocity user interface.
* Entirely new user interfaces.
* Branding of the Cumulocity user interface.
* New server-side business logic.

This section introduces the basic concepts around applications in Cumulocity.

## Applications and subscriptions 

Applications are registered in Cumulocity either as "own applications" or "Subscribed applications". 

"Own applications" are only available to users of a particular tenant and are registered by the tenant's administrator. Own applications are used, for example, during application development when you do not yet want to make a particular application version available for a wide audience. They are also used for functionality that is proprietary for an enterprise, for example, interactions with in-house IT systems. The applications can be either "HTML5 applications" or "Smartapps"

- HTML5 applications: These are applications that are based on HTML, JavaScript and CSS. Cumulocity allows you to use the HTML5 library of your choice, like jQuery, ExtJS, AngularJS, Dojo or others. If you prefer to use AngularJS, Cumulocity provides you with example and source code as part of the “Smart Apps Toolkit”.
- "Smartapps" applications: These are HTML5 applications that can be extended by adding plugins. The power user can add and remove plugins in the Administration Application.

"Subscribed applications" are applications owned by the tenant "Management". Subscribing a tenant to a market application makes the application available to the tenant. To certify an application as market application, please [contact us](mailto:info@cumulocity.com). 

Applications are identified by a so-called *application key*, which is included into requests that an application makes. The application key enables Cumulocity to associate a request with a particular application and to distinguish the request from other requests coming from devices. Applications also have a context path. This is part of the URL that is used to access the application. For example, the context path of device management is “devicemanagement”. This application can then be accessed under “/apps/devicemanagement”. Own applications can have the same context path as subscribed application to override them.

 An application can be any combination of:
* A complete, standalone user interface application, regardless if based on the Cumulocity UI framework
(see below) or any other web components of your choice.
* A set of user interface plugins.
* A set of statements in Cumulocity Event Language.

User interface applications appear in the application switcher widget on the top right of Cumulocity, so
that users can navigate between the applications. They can be hosted on an external web site, in which
case the application switcher just directs the user to that web site. They can also be hosted through
Cumulocity, in which case the application will be made available through a URL
<tenant>.cumulocity.com/apps/<application>.

![App switcher](/guides/concepts-guide/appswitcher.png)

The Cumulocity user interface itself is built around a framework based on AngularJS and Bootstrap, the currently most modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins that can be dynamically enabled and disabled even by end users. Users can create their own configurations of the Cumulocity user interface with just functionality they need for their particular purpose. For this purpose, the administration application contains a plugin editor -- which is itself a plugin.

![Plugin editor](/guides/users-guide/plugins.png)

## Plugins

If the functionality provided by the Cumulocity user interface does not cover your use case, you can extend it with own plugins. Extension points for plugins are:

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

The old SmartApps functionality is still available, both in the REST API and in the
Administration App. However, the Administration App has been changed so that the new SmartApps are by default and using the old SmartApps are available only when loading additional options. The old SmartApps are not updated anymore. This ensures working of existing Plugins. If you want to use their Plugins with updated version of Cockpit or Device management, then you need to port their Plugins to the new SmartApps mechanism.



## Modules

If your application requires new server-side processing functionality, you can add a [Cumulocity Event Language](/guides/reference/real-time-statements) module to it. This is simply a file inside your application at a particular location (META-INF/application-module.cel).

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

Please note that module deployment within application is not supported for local zip applications, so the resource url has to point to some external resource from where the file can be downloaded. The file has to be named application-module.cel and be inside directory META-INF.

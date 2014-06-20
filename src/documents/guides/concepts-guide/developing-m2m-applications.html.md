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

Applications are registered in Cumulocity either as "own" applications or "market" applications. 

"Own" applications are only available to users of a particular tenant and are registered by the tenant's administrator. Own applications are used, for example, during application development when you do not yet want to make a particular application version available for a wide audience. They are also used for functionality that is proprietary for an enterprise, for example, interactions with in-house IT systems.

"Market" applications are available to all tenants of Cumulocity. Subscribing a tenant to a market application makes the application available to the tenant. To certify an application as market application, please [contact us](mailto:info@cumulocity.com).

Applications are identified by a so-called *application key*, which is included into requests that an application makes. The application key enables Cumulocity to associate a request with a particular application and to distinguish the request from other requests coming from devices.

An application can be any combination of 

* A complete, standalone user interface application, regardless if based on the Cumulocity UI framework (see below) or any other web components of your choice.
* A set of user interface plugins.
* A set of statements in Cumulocity Event Language.

User interface applications appear in the application switcher widget on the top right of Cumulocity, so that users can navigate between the subscribed applications. They can be hosted on an external web site, in which case the application switcher just directs the user to that web site. They can also be hosted, in which case the application will be made available through a URL <tenant>.cumulocity.com/apps/<application>.

[App switcher](/images/guides/appswitcher.png)

## Cumulocity applications

The Cumulocity user interface itself is built around a framework based on AngularJS and Bootstrap, the currently most modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins that can be dynamically enabled and disabled even by end users. Users can create their own configurations of the Cumulocity user interface with just functionality they need for their particular purpose. For this purpose, the administration application contains a plugin editor -- which is itself a plugin.

	TBD: Screenshot of plugin editor.

## Plugins

If the functionality provided by the Cumulocity user interface does not cover your use case, you can extend it with own plugins. Extension points for plugins are:

* Add search functionality.
* Contribute menu items to the navigation bar on the left. 
* Add views or "tabs" to devices. 
* Add menu items to the drop-down menu of a device. 
* Add widgets.
* Modify the branding

This is illustrated below:

[Extension points for plugins](/images/guides/extensionpoints.png)

For more information on developing plugins, please visit the [Plugin Developer's Guide].

## Modules

If your application requires new server-side processing functionality, you can add a [Cumulocity Event Language](/guides/reference-guide/realtime-statements) module to it. This is simply a file inside your application at a particular location (META-INF/application-module.cel).

	TBD: How to update the module. Show code snippet with module declaration here

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

## Hosting


...If you are satisfied with your application, publishing is just a matter of releasing your code in version control — deployment is handled automatically...


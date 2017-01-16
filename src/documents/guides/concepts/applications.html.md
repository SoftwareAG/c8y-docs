---
order: 40
title: Developing applications
layout: default
---
## Overview

Cumulocity was designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. Tenants can subscribe to applications to get

* Extensions to the Cumulocity user interface.
* Entirely new user interfaces.
* Branding of the Cumulocity user interface.
* New server-side business logic.

This section introduces the basic concepts around applications in Cumulocity.

## Applications and subscriptions

Applications are registered in Cumulocity either as "own" applications or "market" applications. 

"Own" applications are only available to users of a particular tenant and are registered by the tenant's administrator. Own applications are used, for example, during application development when you do not yet want to make a particular application version available for a wide audience. They are also used for functionality that is proprietary for an enterprise, for example, interactions with in-house IT systems.

"Market" applications are available to all tenants of Cumulocity. Subscribing a tenant to a market application makes this application available to the tenant. To certify an application as market application, please [contact us](mailto:info@cumulocity.com).

Applications are identified by a so-called *application key*. The application key enables Cumulocity to associate a request with one particular application.

An application can be any combination of 

* A complete, standalone user interface application, regardless if based on the Cumulocity UI framework (see below) or any other web components of your choice.
* A set of user interface plugins.
* A set of statements in Cumulocity Event Language.

User interface applications appear in the application switcher widget on the top right of Cumulocity, so that users can navigate between the subscribed applications. They can be hosted on an external web site, in which case the application switcher just directs the user to that website. They can also be hosted through Cumulocity, in which case the application will be made available through a URL <tenant>.cumulocity.com/apps/<application>.

![App switcher](/guides/concepts-guide/appswitcher.png)

## Cumulocity applications

The Cumulocity user interface itself is built around a framework based on AngularJS and Bootstrap, the currently most modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins that can be dynamically enabled and disabled even by end users. Users can create their own configurations of the Cumulocity user interface with just functionality they need for their particular purpose. For this purpose, the administration application contains a plugin editor -- which is itself a plugin.

![Plugin editor](/guides/concepts-guide/plugineditor.png)

## Plugins

If the functionality provided by the Cumulocity user interface does not cover your use case, you can extend it with own plugins. Extension points for plugins are:

* Add search functionality.
* Contribute menu items to the navigation bar on the left. 
* Add views or "tabs" to devices. 
* Add menu items to the drop-down menu of a device. 
* Add widgets.
* Modify the branding


![Extension points for plugins](/guides/concepts-guide/extensionpoints.png)

For more information on developing plugins, please look into the developer guide. [Plugin Developer's Guide](/guides/web/introduction)

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

Please note that module deployment within the application is not supported for local zip applications, so the resource url has to point to some external resource from where the file can be downloaded. The file has to be named application-module.cel and be inside directory META-INF.

## Hosting

To host your own HTML5 and JavaScript web applications through Cumulocity, visit "Own applications" in the Cumulocity administration application and click "Add new".

![List of own applications](/guides/concepts-guide/ownapplications.png)

There are two types of applications that can be configured:

-  "Hosted": The applications are served from a repository such as Bitbucket or Github to a user-defined path and are visible in the application switcher.
-   "External": The applications are completely external and are just shown in the application switcher.

Assume that you are developing a web application using Bitbucket as a code repository. In this case, exposing the application through Cumulocity can be done as follows:

-   Enter the name of the application. This is shown in the application switcher at the top left of the screen.
-   Optionally, enter an application key. This is used to distinguish your application from other applications in case you want to publish your application to other companies.
-   Select "Hosted" as type.
-   Select the URL that is used to make your application available to users.
-   Enter the URL to your repository. In case of Bitbucket, the URL has the structure shown below.
-   If your repository is private, enter the username and password of a Bitbucket user that is permitted to access the repository. Currently, basic authentication is the only supported authentication method (i.e., straight Bitbucket username and password, not any of the OpenID providers).
-   Save the application.

<pre><code>https://bitbucket.org/<bitbucket user>/<bitbucket repository>/raw/<branch>/[path inside repository]</code></pre>

Now the application shows up in the application switcher. You can also click on the link in the list of own applications to verify if the configuration was successful.

![Configuring a new application](/guides/concepts-guide/ownapplicationdetail.png)

The above procedure helps you to publish your M2M application much faster to your end users. If you are satisfied with your application, publishing is just a matter of releasing your code in version control -- deployment is handled automatically.

## Summary

Cumulocity is designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. Applications are registered in Cumulocity either as "own" applications or "market" applications. An application can be any combination of a complete, standalone user interface application, or a set of user interface plugins, or a set of statements in Cumulocity Event Language.
With Cumulocity users can publish any software to other users or customers.

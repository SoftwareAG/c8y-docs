---
title: Overview
layout: redirect
order: 10
---

Before you start working on the tab plugins, we recommend you to take a look at the [introduction](/guides/web/introduction) which deals with the basic concepts of applications and plugins as well as an "Hello world!" style demo plugin.

You can find this and all the other plugins described in the documentation inside the repository [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples).



### Device Contact Plugin

This section shows how to create a plugin that adds a new tab "Contact" to devices in your application. Clicking on "Contact" presents the user with a simple form for entering contact details. When the user saves the form, the contact details are stored as part of the device object in the inventory. The new tab looks like this:

![Contact tab](/guides/images/plugins/contact.png)

In order to achieve this goal you need to do the following steps:

* Create a plugin.
* Declare the plugin on the imports list of the [application manifest](/guides/web/introduction#application-manifest).
* Add a tab to devicess
* Display data in the tab.
* Persist the data to Cumulocity backend.

We assume that you already have created an application that you can add the new plugin to. If not, you can use the application provided in the [repository](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) mentioned above. You can also find the example described here in the folder "plugins/deviceContact".

### <a name="dependencies"></a>Adding dependencies

For this exercise, let us consider you want to extend the application "Device Management". In practice, this means adding the set of plugins used in Device Management and adding your own to the list of imports in your application manifest. You can print the list of used plugins by any available application in your development environment by executing the command ```c8y util:showimports <appContextPath>```.

In this case:

```console
$ c8y util:showimports devicemanagement
```

Add the printed list of plugins to the imports definition of your application manifest.

> Note that you have to exclude the c8yBranding plugin if you have already defined your own branding plugin.

However, if you prefer a more minimalistic approach you can also read the "cumulocity.json" file in [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) and only import the essential plugins for the Device Contact plugin to work.

>**TIP**
Run ```c8y util:showimports cockpit``` or ```c8y util:showimports administration``` to see other plugins available to you.
The manifests for the built-in applications are stored in *_apps.json* inside "node_modules/cumulocity-ui-build".

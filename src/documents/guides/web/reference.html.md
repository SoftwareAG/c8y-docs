---
order: 20
title: Plugins reference
layout: default
---

## Overview 

This section provides a reference for Cumulocity web applications. It first describes the folder structure of a Cumulocity web application. Then it specifies the content of the application manifest and the plugin manifest. Finally, it describes the services and extension points that the Cumulocity web application framework provides. 

A detailed reference for the various JavaScript classes is on the [JSDoc site](http://resources.cumulocity.com/documentation/jssdk/latest/). Most of the content of the manifest files corresponds to the application API properties, described in the [REST reference](/guides/reference-guide/applications). Examples of manifest files can be found in the [examples](http://bitbucket.org/m2m/cumulocity-ui-examples).

## Cumulocity web application folder structure

The default folder structure of a Cumulocity web application is as follows:

	<<root folder>>
		cumulocity.json
		...
		plugins
			<<plugin name>>
				cumulocity.json
				index.js
				icon.png
				controllers
				views
				services
				styles
				gallery
				images
				...

Inside the root folder of your application, the so-called "application manifest" is stored in a file "cumulocity.json". The folder "plugins" contains one folder per plugin contributed by the application. The plugin folder name together with the application name uniquely identifies the plugin. Inside each plugin folder, the so-called "plugin manifest" is stored in another "cumulocity.json" file. The format of the application manifest and the plugin manifest is described below.

We suggest the following convention for the structure of plugins:

* **index.js**: Entry point for the plugin, can define config() function for AngularJS module that wraps the plugin.
* **controllers**: Contains files with AngularJS controllers used by the plugin.
* **views**: Contains AngularJS view templates used by the plugin.
* **services**: Contains custom services defined by the plugin,
* **styles**: Contains stylesheets (plain CSS and LESS).
* **gallery**: Contains plugin screenshots. These are used for the plugin gallery in the Cumulocity administration application.
* **images**: Contains other images used by the plugin.

## Application manifest

The application manifest describes where your application is stored and how it is exposed to Cumulocity. The following properties are available:

* **name**: A descriptive name for the application.
* **availability**: "PRIVATE", if the application is only available in your tenant, "MARKET", if it is a public application.
* **contextPath**: The path to be used for hosted applications. The URL of the application will be "&lt;&lt;yourURL&gt;&gt;/apps/&lt;&lt;contextPath&gt;&gt;".
* **key**: The application key that is used for associating requests of an application with the application and for subscribing to applications.
* **resourcesUrl**: A URL pointing to the built application.
* **type**: *HOSTED*, if the application is hosted through Cumulocity, *EXTERNAL*, if the application is hosted elsewhere.
* **imports**: A list of plugins used by the application. List of *&lt;&lt;applicationName&gt;&gt;/&lt;&lt;pluginName&gt;&gt;*.

Note that "name", "contextPath" and "key" need to be unique. For "PRIVATE" applications, "name" and "contextPath" need to be only unique within your tenant.

## Plugin manifest

The plugin manifest describes how your plugin is shown in the Cumulocity administration application and what files need to be loaded in order to run the plugin.

* **name**: A descriptive name for the plugin, required.
* **description**: A description of the plugin, optional.
* **category**: A category for the plugin (see the "Category" drop-down in the administration application), optional.
* **icon**: The icon to be used for the plugin, either a Font Awesome icon name or "true" to load a file icon.png from the plugin folder, optional.
* **color**: The plugin color as hexadecimal RGB value (e.g., "#F2DF0F"), optional.
* **ngModules**: A list of AngularJS modules that are provided by plugin, at least one required.
* **js**: A list of JavaScript files to be loaded, such as "index.js", controllers, services, asf. The path is relative to the plugin's root folder. Optional.
* **dependencies**: A list of plugins that this plugin depends upon, in the form of *&lt;&lt;applicationName&gt;&gt;/&lt;&lt;pluginName&gt;&gt;*, optional.
* **css**: A list of CSS files to be loaded, paths relative to plugin’s root folder, optional.
* **less**: A list of LESS files to be loaded, paths relative to plugin’s root folder, optional.
* **gallery**: A list of images with screenshots to use in the Cumulocity administration application, optional.
* **copy**: A list of files that should be copied into the built, optional.
* **list**: Determines whether the plugin should be listed in the Cumulocity administration application, optional.

## Services and extension points

For more information on the JavaScript APIs, consult the [JSDoc site](http://resources.cumulocity.com/documentation/jssdk/latest/). Services to access Cumulocity APIs are provided in the "core" package, extension points to, for example, add new menu items or widgets are provided in the "ui" package.




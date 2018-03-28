------
order: 20
title: Concepts
layout: redirect
------

Before building an application or plugin, it is important to understand what exactly applications and plugins are. In this context, applications are based on the Cumulocity UI framework and make up the Cumulocity UI. By default, the Cumulocity UI consists of three core applications, namely "Device Management", "Administration" and "Cockpit". In turn, applications consist of plugins. A plugin represents any functionality you would like to add to an application. With a plugin, you can:
* Modify the branding,
* Add new navigation items to the menu,
* Add new widgets to dashboards,
* Add new menu items to the drop-down menus,
* Add new views or tabs to groups and devices
* Or any other kind of functionality (f.e. for the search) you would like to integrate.

This is illustrated below:

![Extension points for plugins](/guides/images/concepts-guide/extensionpoints.png)

Or, as an example, let us take a look at an extract of the list of plugins the “Cockpit” application uses. It consists of, i.a.
* Cockpit Home: a plugin, which adds the "Home" menu to the navigator.
* Dashboard: a plugin, which adds a new view/tab to groups and devices, functioning as a container for widgets.
* Data point table: a plugin, which adds a widget to dashboards providing a visualization of measurements in tabular form.
* etc.

> Note that you can [extend](#target) the core applications of Cumulocity (Administration, Cockpit, Device Management) with new functionality. For normal tenants, you must create a duplicate of the core application before you can extend it. To create a duplicate of an application, you can either [copy it via the UI in "Administration"](/guides/users-guide/administration#clone-application) or [create a new application which uses the exact same plugins as the desired application](/guides/web/tab-plugin#dependencies).

### Project structure

Whenever you create a new application or plugin, you have to comply with the following folder structure. Otherwise the application or plugin will not work. The default folder structure of an application is as follows:

```console
<<root folder>>
├── cumulocity.json
|	...
└── plugins
		└── <<plugin name>>
				├── cumulocity.json
				└── index.js
			...
```

Inside the root folder of your application, the so-called "[application manifest](#application-manifest)" is stored in the "cumulocity.json" file. The folder "plugins" contains one folder per plugin contributed by the application. The plugin folder name together with the application name uniquely identifies the plugin. Inside each plugin folder, the so-called "[plugin manifest](#plugin-manifest)" is stored in another "cumulocity.json" file. The format of the application manifest and the plugin manifest is described [below](#manifests).
In case that you only want to create a plugin and [add it to an already existing application](/guides/users-guide/administration#add-remove-plugin), use the exact folder structure described above:

```console
<<root folder>>
└── <<plugin name>>
		├── cumulocity.json
		└── index.js
		...
```

> Please create an explicit root folder for your project. The Web SDK assumes that the parent folder of the root folder is readable by your operating system user.

### <a name="manifests"></a>Manifests

#### <a name="application-manifest"></a>Application manifest

The application manifest describes where your application is stored and how it is exposed to Cumulocity. The following properties are available:

* **name**: A descriptive name for the application. It will appear in the app switcher menu.
* **availability**: "PRIVATE", if the application is only available in your tenant, "MARKET", if it is a public application.
* **contextPath**: The path to be used for hosted applications. The URL of the application will be "&lt;&lt;yourURL&gt;&gt;/apps/&lt;&lt;contextPath&gt;&gt;".
* **key**: The application key that is used for associating requests of an application with the application and for subscribing to applications.
* **resourcesUrl**: If the app is serving an upload zip file (which is the case for Smartapps) this value will be '/'. If it's a full url all the request will proxied to that address.
* **type**: *HOSTED*, if the application is hosted through Cumulocity, *EXTERNAL*, if the application is hosted elsewhere.
* **imports**: A list of plugins used by the application. List of *&lt;&lt;applicationName&gt;&gt;/&lt;&lt;pluginName&gt;&gt;*.
* **noAppSwitcher**: [OPTIONAL] If set to true, the application will not appear in the App Switcher menu. A possible use case is, for example, if the application only exposes plugins.
* **options**:
	* **hide_navigator**: [OPTIONAL] A boolean, which if set true collapses the navigator menu on the left by default.
	* **globalTitle**: [OPTIONAL] A title that will be used as the global title of the web application.

> Note that "contextPath" and "key" need to be unique. For "PRIVATE" applications, the properties "name" and "contextPath" need to be unique within your tenant only.

#### <a name="plugin-manifest"></a>Plugin manifest

The plugin manifest describes how your plugin is shown in the Cumulocity administration application (name, description, category, gallery, list) and what files need to be built and loaded in order to run the plugin (ngModules, js, imports, css, less, copy).

* **name**: A descriptive name for the plugin, required.
* **description**: [OPTIONAL] A longer description of the plugin.
* **category**: [OPTIONAL] A category for the plugin to be used in the filtering in user interface.
* **ngModules**: A list of AngularJS modules that are provided by plugin, at least one is required.
* **js**: [OPTIONAL] A list of JavaScript files to be loaded, such as "index.js", controllers, services, asf. The path is relative to the plugin's root folder.
* **css**: [OPTIONAL] A list of CSS files to be loaded, paths relative to plugin’s root folder.
* **less**: [OPTIONAL] A list of LESS files to be loaded, paths relative to plugin’s root folder.
* **copy**: [OPTIONAL] A list of files that should be copied into the built.

Most of the content of the manifest file corresponds to the application API properties, described in the [REST reference](/guides/reference/applications). Examples of manifest files can be found in the [examples](http://bitbucket.org/m2m/cumulocity-ui-plugin-examples).

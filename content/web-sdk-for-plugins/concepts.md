---
weight: 20
title: Concepts
layout: bundle
---

Before building an application or plugin, it is important to understand what is exactly meant by applications and plugins in {{< product-c8y-iot >}}.

In this context, applications are based on the {{< product-c8y-iot >}} UI framework and make up the {{< product-c8y-iot >}} UI. By default, the {{< product-c8y-iot >}} UI consists of three core applications, namely "[Device Management](/users-guide/device-management/)", "[Administration](/users-guide/administration/)" and "[Cockpit](/users-guide/cockpit/)".

In turn, applications consist of plugins. A plugin represents any functionality you would like to add to an application. With a plugin, you can:

* Modify the branding.
* Add new navigation items to the menu.
* Add new widgets to dashboards.
* Add new menu items to the drop-down menus.
* Add new views or tabs to groups and devices.
* Add any other kind of functionality (for example for the search) you would like to integrate.

This is illustrated below:

![Extension points for plugins](/images/web-sdk/extensionpoints.png)

As an example, let us take a look at some plugins being used by the Cockpit application.

* Cockpit home: Adds the home menu to the navigator.
* Dashboard: Adds a new view/tab to groups and devices, functioning as a container for widgets.
* Data point table: Adds a widget to dashboards providing a visualization of measurements in tabular form.

{{< c8y-admon-info >}}
You can [extend](/web-sdk-for-plugins/hello-world/#target) the default applications of {{< product-c8y-iot >}} (Administration, Cockpit, Device Management) with new functionality. You must create a duplicate of the core application before you can extend it. To create a duplicate of an application, you can either [copy it via the UI](/users-guide/administration#clone-application) in the Administration application or [create a new application](/web-sdk-for-plugins/tab-plugin#dependencies) which uses the exact same plugins as the desired application.
{{< /c8y-admon-info >}}

### Project structure

Whenever you create a new application or plugin, you must comply with the following folder structure. Otherwise the application or plugin will not work.

The default folder structure of an application is as follows:

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

Inside the root folder of your application, the [application manifest](#application-manifest) is stored in the *cumulocity.json* file.

The folder *plugins* contains one folder per plugin contributed by the application. The plugin folder name together with the application name uniquely identifies the plugin. Inside each plugin folder, the [plugin manifest](#plugin-manifest) is stored in another *cumulocity.json* file.

The format of the application manifest and the plugin manifest is described in [Manifests](#manifests).

If you only want to create a plugin and [add it to an already existing application](/users-guide/administration#add-remove-plugin), use the exact folder structure described above:

```console
<<root folder>>
└── <<plugin name>>
		├── cumulocity.json
		└── index.js
		...
```

Create an explicit root folder for your project. The Web SDK assumes that the parent folder of the root folder is readable by your operating system user.

<a name="manifests"></a>
### Manifests

<a name="application-manifest"></a>
#### Application manifest

The application manifest describes where your application is stored and how it is exposed to {{< product-c8y-iot >}}.

The following properties are available:

* **name**: A descriptive name for the application. It will appear in the application switcher menu.
* **availability**: "PRIVATE", if the application is only available in your tenant, "MARKET", if it is a public application.
* **contextPath**: The path to be used for hosted applications. The URL of the application will be `<<yourURL>>/apps/<<contextPath>>`.
* **key**: The application key which is used for associating requests of an application with the application and for subscribing to applications.
* **resourcesUrl**: If the application is serving an upload ZIP file (which is the case for Smartapps) this value will be '/'. If it is a full URL all requests will be proxied to that address.
* **type**: *HOSTED*, if the application is hosted through {{< product-c8y-iot >}}, *EXTERNAL*, if the application is hosted elsewhere.
* **imports**: A list of plugins used by the application. List of `<<applicationName>>/<<pluginName>>`.
* **noAppSwitcher**: [optional] If set to true, the application will not appear in the app switcher menu. You might want to use this, for example, if the application only exposes plugins.
* **options**:
	* **hide_navigator**: [optional] A boolean, which if set to true collapses the navigator menu at the left by default.
	* **globalTitle**: [optional] A title that will be used as the global title of the web application.

{{< c8y-admon-info >}}
The properties "contextPath" and "key" must be unique. For "PRIVATE" applications, the properties "name" and "contextPath" must be unique within your tenant only.
{{< /c8y-admon-info >}}

<a name="plugin-manifest"></a>
#### Plugin manifest

The plugin manifest describes how your plugin is shown in the {{< product-c8y-iot >}} Administration application (name, description, category, gallery, list) and what files must be built and loaded in order to run the plugin (ngModules, js, imports, css, less, copy).

* **name**: [required] A descriptive name for the plugin.
* **description**: [optional] A longer description of the plugin.
* **category**: [optional] A category for the plugin to be used in the filtering in the user interface.
* **ngModules**: A list of AngularJS modules that are provided by the plugin, at least one is required.
* **js**: [optional] A list of JavaScript files to be loaded, such as *index.js*, controllers, or services. The path is relative to the plugin's root folder.
* **CSS**: [optional] A list of CSS files to be loaded, paths relative to the plugin's root folder.
* **less**: [optional] A list of LESS files to be loaded, paths relative to the plugin's root folder.
* **copy**: [optional] A list of files that should be copied into the built.

Most of the content of the manifest file corresponds to the application API properties, described in the [REST reference](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Application-API). Examples of manifest files can be found in [the GitHub repository](https://github.com/SoftwareAG/cumulocity-ui-plugin-examples).

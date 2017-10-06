---
order: 10
title: Web SDK for plugins
layout: default
---

## Overview

In the following document you will get an overview on the Web SDK for Plugins which allows you to
* extend applications with your own plugins.
* add your own applications to Cumulocity’s web application.
* enhance the visualization of data with custom widgets.
* implement functionalities tailored to your use case.

![Architecture](/guides/plugins/overview.png)

The illustration above shows the structure behind the application and plugin development. The same as the core applications, your applications will be built on AngularJS and the "c8y.core" and "c8y.ui" [JavaScript API](http://resources.cumulocity.com/documentation/jssdk/latest/). Both modules offer you services to interact with the Cumulocity web application. While the module "c8y.core" provides services to access different kinds of data, such as users and managed objects, as well as basic functionalities, the module "c8y.ui" provides services to modify the user interface of your application or plugin, such as adding menu items or widgets. The modules in turn use the [REST API](/guides/rest/introduction) provided by Cumulocity. You can find examples on how to use the services in the plugin examples.

First, this document describes the concept behind applications and plugins. Then it specifies the required folder structure and different configuration options for applications and plugins. Subsequently, the setup necessary for developing applications and plugins is described. The Web SDK for Plugins guide is structured as follows:
* [Concepts](#concepts)
	* [Project structure](#project-structure)
	* [Manifests](#manifests)
* [Setup](#setup)
	* [Prerequisites](#prerequisites)
	* [Cumulocity CLI tool](#cli-tool)
	* [Cumulocity UI package](#ui-package)
* [Sample plugins](#sample-plugins)
 	* [Running the examples](#running-examples)

Afterwards, we describe how to create a sample plugin step-by-step:
* ["Hello World!"](#hello-world)

You can also find other, more complex examples in the following documents:
* [Branding plugin](/guides/web/branding-plugin)
* [Tab plugins](/guides/web/tab-plugin)
* [Widget plugins](/guides/web/widget-plugin)

Although an overview of the concepts of applications and plugins will be provided in this chapter, we recommend to take a look at the basic concept of Cumulocity applications described in [Developing applications](/guides/concepts/applications).

## <a name="concepts"></a>Concepts
Before building an application or plugin, it is important to understand what exactly applications and plugins are. In this context, applications are based on the Cumulocity UI framework and make up the Cumulocity UI. By default, the Cumulocity UI consists of three core applications, namely "Device Management", "Administration" and "Cockpit". In turn, applications consist of plugins. A plugin represents any functionality you would like to add to an application. With a plugin, you can:
* Modify the branding,
* Add new navigation items to the menu,
* Add new widgets to dashboards,
* Add new menu items to the drop-down menus,
* Add new views or tabs to groups and devices
* Or any other kind of functionality (f.e. for the search) you would like to integrate.

This is illustrated below:

![Extension points for plugins](/guides/concepts-guide/extensionpoints.png)

Or, as an example, let us take a look at an extract of the list of plugins the “Cockpit” application uses. It consists of, i.a.
* Cockpit Home: a plugin, which adds the "Home" menu to the navigator.
* Dashboard: a plugin, which adds a new view/tab to groups and devices, functioning as a container for widgets.
* Data point table: a plugin, which adds a widget to dashboards providing a visualization of measurements in tabular form.
* etc.

> Note that you can [extend](#target) the core applications of Cumulocity (Administration, Cockpit, Device Management) with new functionality. For normal tenants, you must create a duplicate of the core application before you can extend it. To create a duplicate of an application, you can either [copy it via the UI in "Administration"](/guides/users-guide/administration#clone-application) or [create a new application which uses the exact same plugins as the desired application](/guides/web/tab-plugin#dependencies).

### Project structure

Whenever you create a new application or plugin, you have to comply with the following folder structure. Otherwise the application or plugin will not work.
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

Inside the root folder of your application, the so-called "[application manifest](#application-manifest)" is stored in the "cumulocity.json" file. The folder "plugins" contains one folder per plugin contributed by the application. The plugin folder name together with the application name uniquely identifies the plugin. Inside each plugin folder, the so-called "[plugin manifest](#plugin-manifest)" is stored in another "cumulocity.json" file. The format of the application manifest and the plugin manifest is described [below](#manifests).
In case that you only want to create a plugin and [add it to an already existing application](/guides/users-guide/administration#add-remove-plugin), use the exact folder structure described above:

```console
<<root folder>>
└── <<plugin name>>
		├── cumulocity.json
		└── index.js
		...
```

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

## <a name="setup"></a>Setup

### <a name="prerequisites"></a>Prerequisites

Plugins are based on HTML5. You should be familiar with the following technologies:

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [AngularJS 1.x](https://angularjs.org/).


You will need the following prerequisites for being able to develop plugins and to execute the examples:

* You will need [Node.js](http://nodejs.org/) *(6.7 or newer)*
* You will need [npm](https://www.npmjs.com/) *(installed with Node.js)*
* You will need access to your Cumulocity account, i.e. you need your tenant name, username and password.

### <a name="cli-tool"></a>Cumulocity CLI tool

Once all prerequisites are fulfilled, you are almost ready to go to build your own application and plugin. For the process of developing a plugin (building, theming, translating and deploying your apps and plugins), you will need the npm package "cumulocity-tools" installed globally on your machine. To install the npm package, execute the following command on your terminal.

```bash
$ npm i cumulocity-tools -g
```

Now you are ready to use the command line interface (CLI) tool. Try it out by executing the following command:

```bash
$ c8y --help
```

The "--help" option displays all available commands for the CLI tool.

### <a name="ui-package"></a>Cumulocity UI package

As already described above, applications are always a collection of plugins. We provide a set of plugins you can build on in addition to your own. But before that, you must add a "package.json" file to the folder you will use for your application. To generate the "package.json" file automatically, simply run:

```bash
$ npm init
```

> Note that this command prompts you to enter values for several properties which will be included in the "package.json" file. The "package.json" file should include at least a name and version. To skip a property, press enter.

Then proceed to install the Cumulocity UI package containing the set of plugins by typing in the following command:

```bash
$ c8y install latest
```

This command will:
- Check for the latest version of the Cumulocity UI package.
- Download the package.
- Add it as a dependency inside the "package.json" file.

Instead of "latest", you can also specify a certain version number, but this version has to be the same or less than the backend version number.

> Note that when sharing your project, other developers only need to run  ```npm install``` inside the root folder of the application project, as the version of the Cumulocity UI package is already defined as a dependency in the "package.json" file. You can always install other versions by running the ```c8y install``` command again.

> You can see the list of plugins an application uses by utilizing the command "c8y util:showimports \[appContextPath\]".

## <a name="sample-plugins"></a>Sample plugins

After setting up everything and getting an insight into the folder structure and manifests, you can finally start building your first application and plugin. The following chapter will show you how to get the plugin running. After that you can find a guide which goes through the process of building a "Hello World!" style plugin in detail. You can download or clone the "Hello World!" plugin as well as other plugin examples from the repository [https://bitbucket.org/m2m/cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples).

### <a name="running-examples"></a>Running the examples

After you downloaded or cloned the repository, create the application containing the example plugins in your tenant by executing the command ```c8y deploy:app [appContextPath]```. If you omit appContextPath the contextPath will be read from the "cumulocity.json" at the path where the command was executed.

You will be asked for the name and base url of your tenant, as well as your username and password. To prevent filling out these prompts over and over again, you can define the following environment variables on your computer: ```C8Y_TENANT```, ```C8Y_USER```, ```C8Y_PASS``` and ```C8Y_BASE_URL```.

After deploying the application, it appears in the *"Own applications"* menu of the "Administration" application.

![My Application](/guides/plugins/applicationeditor.png)

To see the "Hello world!" plugin, navigate to the example you just created an select the menu "New plugin". You should be able to see the text "Hello world!". You can also try out the other example plugins. For further information on the example plugins, visit the respective documents in the documentation.

## <a name="hello-world"></a>"Hello world!"

The purpose of this plugin is to add a new application to the app switcher menu. This application will consist of a single menu item which will display a simple "Hello world!" page when selected by the user. At the end, the application should look as follows:

![Hello world plugin](/guides/plugins/hello.png)

In order to achieve this goal we need to do the following steps:

* Set up an application project.
* Configure the application manifest.
* Create the application in your tenant.
* Configure the plugin manifest.
* Implement the plugin's initialization function to add a menu item and associate it with a view template.
* Implement the controller to provide data for the view template (a simple text in this case).
* Add the view template to display the data.
* Test the application.
* Finally, build and publish the application and the plugin.

### Set up an application project

First, we need to create the application project by
* Creating a new folder with an arbitrary name.
* Creating a "cumulocity.json" file inside this folder, representing our application manifest.
* Running the command "npm init" to create a new "package.json" file.
* Running the command "c8y install latest" to get the latest core plugins.

After these steps you should have the following folder structure:

```console
<<root folder>>
├── node_modules
|		└── ...
├── cumulocity.json
└── package.json
```

### Configure the application manifest

Second, we have to fill out the application manifest (the "cumulocity.json" file inside our root folder) with information about our Cumulocity application, such as its name, key, URL and dependencies. For this example, we have to specify the following properties:

```json
	{
		"availability": "PRIVATE",
	  "contextPath": "myapplication",
	  "key": "myapplication-appkey",
	  "name": "myapplication",
	  "resourcesUrl": "/",
	  "type": "HOSTED",
		"imports": [
			"core/c8yBranding"
		]
	}
```

With the project structure so far, we can already test our application. By adding the "c8yBranding" plugin from the Cumulocity UI package to our imports, our application will not be completely empty when we try to access it. As the name already indicates, the plugin adds the Cumulocity's branding to our application. Before we can test an application locally, we have to create it on our tenant first.

For more details on other properties of the manifest, see "[Manifests](#manifests)".

### <a name="create-application"></a>Create the application in your tenant

After successfully logging in into a Cumulocity UI application, the application key is fetched automatically. Thus, to develop an application we need to make sure that the application is created in our tenant. To create the application in our tenant we simply deploy it using ```c8y deploy:app [appContextPath]```. If you omit appContextPath the contextPath will be read from the "cumulocity.json" at the path where the command was executed.

```bash
$ c8y deploy:app myapplication
? Tenant piedpiper
? User admin
? Password ***********
? Base url https://piedpier.cumulocity.com
GET application/applicationsByOwner/piedpier?pageSize=10000 200
POST application/applications/31337/binaries/ 201
PUT /application/applications/31337 200
```

You will be asked for the name and base url of your tenant, as well as your username and password. To prevent filling out these prompts over and over again, you can define the following environment variables on your computer: ```C8Y_TENANT```, ```C8Y_USER```, ```C8Y_PASS``` and ```C8Y_BASE_URL```.

After deploying your application, it appears in the *"Own applications"* menu of the "Administration" application.

![My Application](/guides/plugins/applicationeditor.png)

### Test your application

To run your application locally, just run ```c8y server```.
Additionally, you can pass options:

- ```-u https://tenant.cumulocity.com``` with the instance as parameter where you want your api calls to be proxied to,
- ```-t examples``` or ```-t targets/examples/json``` to use specific target file, e.g. if you want to test your plugins inside one of the standard applications and you have defined your target file as in the example:
 
```json
{
  "name": "Examples",
  "comment": "Release with additional example plugins",
  "replaceImports": {
    "core/c8yBranding": "myapplication/myBranding" 
  },
  "applications": [
    {
      "contextPath": "administration",
      "addImports": [
        "myapplication/weatherAdmin"
      ]
    },
    {
      "contextPath": "devicemanagement",
      "addImports": [
        "myapplication/deviceEventsRealTime", 
        "myapplication/deviceContact" 
      ]
    },
    {
      "contextPath": "cockpit",
      "addImports": [ 
        "myapplication/weather", 
        "myapplication/iconmap" 
      ]
    }
  ]
}
```

Example console output:

```console
$ c8y server -u https://tenant.cumulocity.com -t targets/examples.json
Cumulocity UI development server running in port 9000.
Proxying api requests to https://tenant.cumulocity.com
140 modules loaded.
5 application manifest loaded.
http://localhost:9000/apps/myapplication/ cumulocity.json
http://localhost:9000/apps/fieldbus4/  Packaged App
http://localhost:9000/apps/administration/  Packaged App
http://localhost:9000/apps/cockpit/  Packaged App
http://localhost:9000/apps/devicemanagement/  Packaged App
```

Now, you can test your application by opening your browser at the URL "http://localhost:9000/apps/myapplication/". If you access your application now, you should be able to see the following:

![My Application](/guides/plugins/emptyapplication.png)

What is missing now is a plugin which adds a menu item to the navigator.

### Configure the plugin manifest

Each plugin comes in a separate subfolder inside the plugins folder of your application. So to add a plugin to our application, we have to
* Create a "plugins" folder in our project
* Create a folder named "myplugin" inside the "plugins" folder.
* Create a "cumulocity.json" file inside the "myplugin" folder, representing our application manifest.
* Create a "views" folder inside the "myplugin" folder.
* Create a "hello.html" file inside the "views" folder, representing the view of our plugin.

After these steps you should have the following folder structure:

```console
<<root folder>>
├── node_modules
├── plugins
|		└── myplugin
|				├──views
|				|	 └── hello.html
|				└── cumulocity.json
├── cumulocity.js
└── package.json
```

The plugin manifest provides information about our plugin, such as the name, a short description, files to be loaded, and angular modules to be added to the main app. For our example, add the following lines to the "cumulocity.json" file:

```json
{
	"name": "Hello world plugin testing",
	"description": "Simple hello world plugin."
}
```

For more details on other properties of the manifest, see "[Manifests](#manifests)".

Now that we have added a plugin to our application, we also have to add it to the imports of our application manifest. The name of the import consists of two parts separated by a slash. The first part has to be the context path of the application the plugin is located in and the second part has to be the name of the plugin folder. In our case, our plugin is located in our application with the context path "myapplication" as specified in the application manifest and our plugin folder is named "myplugin" which results in:

```json
	{
		"availability": "PRIVATE",
		"contextPath": "myapplication",
		"key": "myapplication-appkey",
		"name": "myapplication",
		"resourcesUrl": "/",
		"type": "HOSTED",
		"imports": [
			"core/c8yBranding",
			"myapplication/myplugin"
		]
	}
```

After we added the plugin folder to our application, we can start implementing the functionality.

### Implement the plugin's initialization function

Even though the scope of this example is very small, we recommend to use a modular approach. For this reason, create a file "hello.module.js" for the module, a file "hello.config.js" for the config and a file "hello.controller.js" for the controller inside the "myplugin" folder.

Inside the "hello.module.js" file, we initialize the module for our plugin:

```js
(function () {
  'use strict';

  angular.module('myapp.hello', []);
}());
```

In our "hello.config.js" file, we have to configure our plugin so that it adds a menu item to the navigator and redirects to our view when clicking on this menu item. For that purpose, we can use the services "c8yNavigatorProvider" and "c8yViewsProvider" provided by the [Cumulocity JavaScript API](http://resources.cumulocity.com/documentation/jssdk/latest/). Simply inject the services into your config and call the following functions:

```js
(function () {
  'use strict';

  angular
    .module('myapp.hello')
    .config(configure);

  configure.$inject = [
    'c8yNavigatorProvider',
    'c8yViewsProvider'
  ];

  function configure(
    c8yNavigatorProvider,
    c8yViewsProvider
  ) {
    c8yNavigatorProvider.addNavigation({ // adds a menu item to the navigator with ...
      name: 'hello', // ... the name *"hello"*
      icon: 'cube', // ... the cube icon (icons are provided by the great Font Awesome library and you can use any of their [icon names](http://fontawesome.io/icons/) without the *fa-* prefix here
      priority: 100000, // ... a priority of 100000, which means that all menu items with a priority lower than 100000 appear before this menu item and all with a priority higher than 100000 appear after this menu item
      path: 'hello' // ... */hello* as path
    });

    c8yViewsProvider.when('/hello', { // when the path "/hello" is accessed ...
      templateUrl: ':::PLUGIN_PATH:::/views/hello.html', //  ... display our html file "hello.html" inside the "views" folder of our plugin (the plugin's folder is represented using the magic string ```:::PLUGIN_PATH:::```, which is replaced by the actual path during the build process)
      controller: 'HelloController', // ... use "HelloController" as controller
      controllerAs: 'vm'
    });
  }
}());
```

### Implement the controller

Second, we have to implement the controller for our view. For this example, the controller just defines a variable "text" which contains the simple static text "hello, world":

```js
(function () {
  'use strict';

  angular
    .module('myapp.hello')
    .controller('HelloController', HelloController);

  function HelloController() {
    var vm = this;

    vm.text = 'hello, world';
  }
}());
```

Now that we have added the module, config and controller to our plugin, we have to specify "myapp.hello" as our module and add each javascript file to our plugin manifest:

```json
{
	"name": "Hello world plugin testing",
	"description": "Simple hello world plugin.",
	"ngModules": [
    "myapp.hello"
	],
	"js": [
    "hello.module.js",
    "hello.config.js",
    "hello.controller.js"
	]
}
```

### View template

After we defined the variable "text", we can access it in our view template. To render the text, add the following to your hello.html file:

```html
<div>{{vm.text}}</div>
```

### Test your application

To test your application, use the command ```c8y server``` with the complete url of your tenant as parameter.

### Build and deploy your application and plugins

If you run ```c8y --help``` you will list all available commands.
You can choose to build applications or plugins which results in a zip file that you can add by hand in any Cumulocity "Administration" application or you can deploy the app directly to your tenant.

#### build:app
Builds the application to the specified folder (./build by default).
Inside the outputFolder you will find a directory named [appContextPath] and a zip file [appContextPath].zip. This zip file can then be uploaded in the "Administration" application.
If you omit appContextPath the contextPath will be read from the "cumulocity.json" file at the path where the command was executed.

```bash
$ c8y build:app [appContextPath] [outputFolder]
```

#### build:plugin
Builds the plugin to the specified folder (./build by default).
Inside the outputFolder you will find a directory named [pluginName] and a zip file [pluginName].zip. This zip file can be uploaded in the "Administration" interface and added to any application.

```bash
$ c8y build:plugin <pluginName> [outputFolder]
```

#### deploy:app
Builds all the plugins, assembles the application and uploads it to the defined tenant. If the app doesn't yet exist on the remote instance it will be automatically created.
If you omit appContextPath the contextPath will be read from the "cumulocity.json" at the path where the command was executed.

```bash
$ c8y deploy:app [appContextPath]
```

The build process for plugins includes the following steps:
1. Annotate angular functions with *$inject*. (Using [ng-annotate](https://github.com/olov/ng-annotate)).
2. Replace the ```:::PLUGIN_PATH:::``` by the proper strings.
3. Transform every html file to be included via *$templateCache*.
4. Concatenate and minify all the defined js files in the manifest (using [UglifyJS 2](https://github.com/mishoo/UglifyJS2)).
5. Compile all the less files.
6. Concatenate and minify all the css and result of the less files.
7. Copy all the files defined in 'copy' in the manifest.
8. Copy all the localization files that may be available inside locales folder inside the plugin.
9. Copy the plugin manifest.
10. Create a zip file with the above contents.

The build process for an app includes the following steps:
1. Copy a built version of each plugin defined in the imports list.
2. Assemble all the localization files available in each plugin and assemble them in a single .json and .po file for each available language.
3. Generate an index.html.
5. Copy the application manifest.
6. Create a zip file with the above contents.

### <a name="target"></a>Deploy your plugin to the core applications

You can also add or [replace](/guides/web/branding-plugin#branding) plugins in the core applications by specifying a target .json file. This file is not restricted in its name or path.

```json
{
	"name": "Examples",
	"comment": "Release with additional example plugins",
	"applications": [
		{
			"contextPath": "administration",
            "addImports": [ "myapplication/myplugin" ]
		}
	]
}
```

The example above shows how to add your self-developed plugin to one of the core applications, in this case the "Administration" application. When specifying a plugin, ensure to include the contextPath of the application the plugin is in. In this case, the plugin "myplugin" is located in the plugins folder of the application with the contextPath "myapplication".

If you are not deploying to a management tenant, you need to include the following fragment to your target .json file:

```json
	"allApplications": {
		"availability": "PRIVATE"
	}
```

To deploy a target file, you have to add the option ```-t pathToTargetFile/target.json``` when deploying your application. Assuming that we have the following folder structure:

```console
<<root folder>>
├── targets
|		└── target.json
├── plugins
|		└── ...
├── cumulocity.js
└── package.json
```

we would have to execute the following command:

```bash
c8y deploy:app myapplication -t targets/target.json
```

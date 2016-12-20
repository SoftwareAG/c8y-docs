---
title: Web SDK for plugins
layout: default
---

## Overview

In the following document you will get an overview on the Web Software Development Kit (SDK) which allows you to
* extend Cumulocity’s web application with your own applications.
* enhance the visualization of data with custom widgets.
* implement functionalities tailored to your use case.

First, this document describes the concept behind applications and plugins. Then it specifies the folder structure as well as the content of the application and plugin manifests which helps understanding how applications and plugins are built. Subsequently, the setup necessary for developing applications and plugins is described. The Web SDK guide is structured as follows:
* [Concepts](#concepts)
	* [Project structure](#project-structure)
	* [Manifests](#manifests)
* [Setup](#setup)
	* [Prerequisites](#prerequisites)
	* [Cumulocity CLI tool](#cli-tool)
	* [Cumulocity UI package](#ui-package)

Afterwards, we describe how to create a sample plugin step-by-step:
* ["Hello World!"](#hello-world)
* [Services and extension points](#service-points)

You can also find other, more complex examples in the following documents:
* [Branding plugin](/guides/web/branding-plugin)
* [Tab plugins](/guides/tab-plugin)
* [Widget plugins](/guides/widget-plugin)

Although an overview of the concepts of applications and plugins will be provided in this chapter, we recommend to take a look at the basic concept of Cumulocity applications described in [Developing applications](/guides/concepts/applications) before.

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

Or let us look at the “Cockpit” application as an example. It consists of, i.a.
* Cockpit Home: a plugin, which adds the "Home" menu to the navigator.
* Dashboard: a plugin, which adds a new view/tab to groups and devices functioning as a container for widgets.
* Data point table: a plugin, which adds an widget to dashboards providing a visualization of measurements in tabular form.
* etc.

> Note that you cannot extend the core applications of Cumulocity (Administration, Cockpit, Device Management) with new functionality. Instead, you can create a duplicate of the desired application and work on the duplicate itself. To create a duplicate of an application, you can either copy it via the UI in "Administration" or create a new application which uses the exact same plugins as the desired application.

### Project structure

Whenever you create a new application or plugin, you have to comply with the following structure. Otherwise the application or plugin will not work.
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

Inside the root folder of your application, the so-called "[application manifest](#application-manifest)" is stored in a file "cumulocity.json". The folder "plugins" contains one folder per plugin contributed by the application. The plugin folder name together with the application name uniquely identifies the plugin. Inside each plugin folder, the so-called "[plugin manifest](#plugin-manifest)" is stored in another "cumulocity.json" file. The format of the application manifest and the plugin manifest is described [below](#manifests).
In case that you only want to create a plugin and add it to an already existing application, use the exact folder structure described above:

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

* **name**: A descriptive name for the application.
* **availability**: "PRIVATE", if the application is only available in your tenant, "MARKET", if it is a public application.
* **contextPath**: The path to be used for hosted applications. The URL of the application will be "&lt;&lt;yourURL&gt;&gt;/apps/&lt;&lt;contextPath&gt;&gt;".
* **key**: The application key that is used for associating requests of an application with the application and for subscribing to applications.
* **resourcesUrl**: If the app is serving an upload zip file (is the case for Smartapps) this value will be '/'. If it's a full url all the request will proxied to that address.
* **type**: *HOSTED*, if the application is hosted through Cumulocity, *EXTERNAL*, if the application is hosted elsewhere.
* **imports**: A list of plugins used by the application. List of *&lt;&lt;applicationName&gt;&gt;/&lt;&lt;pluginName&gt;&gt;*.
* **noAppSwitcher**: If set to true, application will not appear in the App Switcher menu. Optional, use, for example, if the application only exposes plugins.
* **options**:
	* **tabsHorizontal**: A boolean, which if set true
	* **hide_navigator**: A boolean, which if set true collapses the navigator menu on the left by default, optional.
	* **globalTitle**: A title that will be used as the global title of the web application, optional.
	* **hide_powered**: A boolean, which if set true
	* **supportUrl**:
	* **login_extra_link**: An object that adds an url with a certain label to the login screen, optional.

> Note that "contextPath" and "key" need to be unique. For "PRIVATE" applications, "name" and "contextPath" need to be only unique within your tenant.

> You can see the list of plugins an application uses by utilizing the command "c8y util:showimports \[appContextPath\]".

#### <a name="plugin-manifest"></a>Plugin manifest

The plugin manifest describes how your plugin is shown in the Cumulocity administration application (name, description, category, gallery, list) and what files need to be built and loaded in order to run the plugin (ngModules, js, imports, css, less, copy).

* **name**: A descriptive name for the plugin, required.
* **description**: A longer description of the plugin, optional.
* **category**: A category for the plugin to be used in the filtering in user interface, this is optional.
* **ngModules**: A list of AngularJS modules that are provided by plugin, at least one is required.
* **js**: A list of JavaScript files to be loaded, such as "index.js", controllers, services, asf. The path is relative to the plugin's root folder. Optional.
* **css**: A list of CSS files to be loaded, paths relative to plugin’s root folder, optional.
* **less**: A list of LESS files to be loaded, paths relative to plugin’s root folder, optional.
* **copy**: A list of files that should be copied into the built, optional.

Most of the content of the manifest files corresponds to the application API properties, described in the [REST reference](/guides/reference/applications). Examples of manifest files can be found in the [examples](http://bitbucket.org/m2m/cumulocity-ui-plugin-examples).

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

As already described above, applications are always a collection of plugins. We provide a set of plugins you can build on in addition to your own. But before that, you must add a package.json file to the root folder of your application project. To generate the package.json file automatically, simply run:

```bash
$ npm init
```

Then proceed to install the Cumulocity UI package containing the set of plugins by typing in the following command:

```bash
$ c8y install latest
```

This command will:
- Check for the latest version of the Cumulocity UI package.
- Download the package.
- Add it as a dependency inside the package.json file.

> Note that when sharing your project, other developers only need to run  ```npm install``` inside the root folder of the application project, as the version of the Cumulocity UI package is already defined as a dependency in the package.json file. You can always install other versions by running the ```c8y install``` command again.

## Sample plugins

After setting up everything and getting an insight into the folder structure and manifests, you can finally start building your first application and plugin. The following chapter will guide you through the process of building a "Hello World!" style plugin. You can find the "Hello World!" and all other examples described in this section in the repository [https://bitbucket.org/m2m/cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples). However, we recommend to build the "Hello World!" example from scratch to gain a better understanding of how applications and plugins work.

CLONE OR ZIP?

## <a name="hello-world"></a>"Hello world!"

The following "Hello world!" plugin is available as an example in the repository "cumulocity-ui-plugin" as "myplugin". You can use this repository as a reference if you encounter bugs during development.

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
* Running the command "npm init" to create a new package.json file.
* Running the command "c8y install latest" to get the latest core plugins.


===================================================
===================================================
===================================================

### Set up an application project

* [Download](https://bitbucket.org/m2m/cumulocity-ui-plugin/get/tip.zip) the plugin boilerplate from Bitbucket. *(Alternatively, clone the repository if you use Mercurial. As the package.json is already created here, you don't need to npm init)*
* In a terminal window, go to the project's root folder and install the Cumulocity UI plugins

```bash
$ c8y install latest
```
### Configure the application manifest

The application manifest contains information about the Cumulocity application that holds your plugins, such as its name, key, URL and dependencies. It needs to be placed in a file named cumulocity.json in the project's root folder. Inspect the "boilerplate" application manifest:

```json
	{
		"name": "My application",
		"availability": "PRIVATE",
		"contextPath": "myapplication",
		"key": "myapplication-appkey",
		"resourcesUrl": "/",
		"type": "HOSTED",
		"imports": [
			"core/c8yBranding",
			"myapplication/myplugin"
		]
	}
```
You have more detailed information about manifests in the [Plugins Reference](/guides/web/reference)

### Create the application on your tenant

After a successful login in a Cumulocity UI application the application key is fetched automatically.
As so, to develop an application we need to make sure that the application is created in our tenant.
To create the application in our tenant we simply deploy it using using ```c8y deploy:app [appContextPath]```.
If you omit appContextPath the contextPath will be read from the cumulocity.json at the path where the command was executed.

```bash
$ c8y deploy:app
? Tenant piedpiper
? User admin
? Password ***********
? Base url https://piedpier.cumulocity.com
GET application/applicationsByOwner/piedpier?pageSize=10000 200
POST application/applications/31337/binaries/ 201
PUT /application/applications/31337 200
```

You will be asked for your tenant name, username, password and base url for you tenant. These prompts for data can be preventing by defining the environment variables: ```C8Y_TENANT```, ```C8Y_USER```, ```C8Y_PASS``` and ```C8Y_BASE_URL```;

After deploying your application, it appears in the *"Own applications"* menu of the Cumulocity administration application.

![My Application](/guides/plugins/applicationeditor.png)

### Test your application

To run your application locally just run ```c8y server```
You can pass an options ```-u https://piedpiper.cumulocity.com``` with the instance where you want your api calls to be proxied to.

```console
$ c8y server
Cumulocity UI development server running in port 9000.
Proxying api requests to https://bazinga.staging.c8y.io
140 modules loaded.
5 application manifest loaded.
http://localhost:9000/apps/myapplication/ cumulocity.json
http://localhost:9000/apps/fieldbus4/  Packaged App
http://localhost:9000/apps/administration/  Packaged App
http://localhost:9000/apps/cockpit/  Packaged App
http://localhost:9000/apps/devicemanagement/  Packaged App
```

Now, you can test your application by opening your browser at the URL "http://localhost:9000/apps/myapplication/".

### Configure the plugin manifest

Each plugin comes in a separate subfolder of the plugins folder of your application. The example contains a subfolder myplugin. Inside myplugin, you will another cumulocity.json file, the plugin manifest. The plugin manifest provides information about a plugin, such as the name, short description, files to be loaded, and angular modules to be added to the main app.
Inspect myplugins/cumulocity.json manifest:

```json
{
	"name": "Hello world plugin testing",
	"description": "Simple hello world plugin.",
	"ngModules": [
		"myapp.helloworld"
	],
	"js": [
		"index.js"
	]
}
```

You have more detailed information about manifests in the [Plugins Reference](/guides/web/reference)


### Implement the plugin's initialization function

Previsouly, while defining the plugin manifest, we mentioned that JavaScript code from the file index.js in the plugin folder should be loaded.
Inspect index.js:

```js
//Main module name must be defined in ngModules of the plugin manifest
//so that they can be loaded at application bootstrap
angular.module('myapp.helloworld', [])
	.config(config)
	.controller('MyMainController', MainController);

function config(c8yNavigatorProvider, c8yViewsProvider) {
	c8yNavigatorProvider.addNavigation({
		name: 'New plugin',
		icon: 'cube',
		priority: 100000,
		path: 'hello'
	});

	c8yViewsProvider.when('/hello', {
		// Please use this string placeholder where you want to refer you plugin path.
		templateUrl: ':::PLUGIN_PATH:::/index.html',
		controller: 'MyMainController'
	});

	c8yViewsProvider.when('/', {
		redirectTo: '/hello'
	});
}

function MainController($scope) {
	$scope.hello = 'Hello world!';
}
```

With this code, we contribute a menu item (c8yNavigationProvider) and a view with its controller (c8yViewsProvider) to our application.

* The menu item has the name *"New plugin"*.
* The menu item has a little cube icon. Icons are provided by the great Font Awesome library and you can use any of their [icon names](http://fontawesome.io/icons/) without the *fa-* prefix here.
* The menu item is sorted into the menu with a priority of 100000, which means that all menu items with a priority lower than 100000 appear before this menu item and all with a priority higher than 100000 appear after this menu item.
* It points to a URL /hello.
* When the user opens the URL /hello (resp. clicks on the menu item), the view /views/index.html inside the plugin's folder is displayed. The plugin's folder is represented using the magic string ```:::PLUGIN_PATH:::```, which is replaced by the actual path during the build process.
* Finally we just hook a redirect from the homepage to our /hello view.

### Implement the controller

index.js contains one more function, a controller *MainController*. This controller defines a variable *hello* to contain the simple static text "Hello world!":

```js
function MainController($scope) {
	$scope.hello = 'Hello world!';
}
```

### View template

The variable *hello* is used in the view template that renders the user interface of our plugin. Inspect the file views/index.html in the plugin folder:

```html
	<h1>{{hello}}</h1>
```

### Build and deploy your application and plugins

If you run ```c8y --help``` your will the list of commands available.
You can choose to build application or plugin resulting in zip file that you can add by hand in any Cumulocity administration application or you can deploy the app directly to your tenant.

#### build:app
Builds the application to the specified folder (./build by default).
Inside the outputFolder you will find a directory named [appContextPath] and a zip file [appContextPath].zip. This zip file can be upload in the administration interface and added to any tenant.
If you omit appContextPath the contextPath will be read from the cumulocity.json at the path where the command was executed.

```bash
$ c8y build:app [appContextPath] [outputFolder]
```

#### build:plugin
Builds the plugin to the specified folder (./build by default).
Inside the outputFolder you will find a directory named [pluginName] and a zip file [pluginName].zip. This zip file can be uploaded in the administration interface and added to any application.
```bash
$ c8y build:plugin <pluginName> [outputFolder]
```

#### deploy:app
Builds all the plugins, assembles the application and uploads it to the defined tenant. If the app doesn't yet exist on the remote instance it will be automatically created.
If you omit appContextPath the contextPath will be read from the cumulocity.json at the path where the command was executed.
```bash
$ c8y deploy:app [appContextPath]
```

The build process for plugins includes the following steps:
1. Annotate angular functions with *$inject*. (Using [ng-annotate](https://github.com/olov/ng-annotate) )
2. Replace the ```:::PLUGIN_PATH:::``` by the proper strings
3. Transform every html file to be included via *$templateCache*.
4. Concatenate and minify all the defined js files in the manifest (using [UglifyJS 2](https://github.com/mishoo/UglifyJS2))
5. Compile all the less files
6. Concatenate and minify all the css and result of the less files
7. Copy all the files defined in 'copy' in the manifest
8. Copy all the localization files that may be available inside locales folder inside the plugin
9. Copy the plugin manifest
10. Create a zip file with the above contents

The build process for an app includes the following steps:
1. Copy a built version of each plugin defined in the imports list
2. Assemble all the localization files available in each plugin and assemble them in a single .json and .po file for each available language.
3. Generate an index.html
5. Copy the application manifest
6. Create a zip file with the above contents

## Services and extension points

For more information on the JavaScript APIs, consult the [JSDoc site](http://resources.cumulocity.com/documentation/jssdk/latest/). Services to access Cumulocity APIs are provided in the "core" package, extension points to, for example, add new menu items or widgets are provided in the "ui" package.

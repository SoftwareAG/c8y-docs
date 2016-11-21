---
title: Introduction to plugin development
layout: default
---

## Overview

Plugins allow you to add new functionality to Cumulocity's user interface. In the following, we describe step-by-step how to create sample plugins. For the basic concepts of Cumulocity applications, please see [Developing applications](/guides/concepts/applications). For reference information, please see the [Plugins reference](/guides/web/reference).

## Prerequisites

Plugins are based on HTML5. You should be familiar with the following technologies:

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [AngularJS 1.x](https://angularjs.org/).


You will need the following prerequisites for being able to develop plugins and to execute the examples:

* You will need [Node.js](http://nodejs.org/) *(6.7 or newer)*
* You will need [npm](https://www.npmjs.com/) *(installed with Node.js)*
* You will need access to your Cumulocity account, i.e. you need your tenant name, username and password.

All examples described in the document are available in the repository [https://bitbucket.org/m2m/cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples).

## Command line interface

Applications based on Cumulocity UI are always a collection of plugins. We provide a set of plugins you can build on and you can add your own. For dealing with the process of building, theming, translating and deploying your apps and plugins the cli tool must be installed globally the development machine.

```bash
$ npm i cumulocity-tools -g
```
You can check the available commands with:

```bash
$ c8y --help
```

## Installing Cumulocity UI plugins

Cumulocity UI plugins to be used in your application are loaded via npm. For this you must have have a package.json in your project.
To create one simply run:

```bash
$ npm init
```
Then proceed to install Cumulocity UI package containing our plugins, which you can reuse to build your application on.

```bash
$ c8y install latest
```

This command will:
- Check for the latest version of the UI
- Download the package
- Add it as a dependency inside package.json
Have in mind that that, when sharing your project, other developers only need to run  ```npm install``` as the version of the Cumulocity UI is already defined as a dependency. You can always install other versions by running the ```c8y install``` command again.

## "Hello world!"

This section describes a "Hello world!" style plugin which is available as an example in the repository "cumulocity-ui-plugin" as "myplugin".

The purpose of this plugin is to add a new menu item which will display a simple "Hello world!" page when selected by user. The following screenshot presents the final result:

![Hello world plugin](/guides/plugins/hello.png)

In order to achieve this goal you need to do the following steps:

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

* [Download](https://bitbucket.org/m2m/cumulocity-ui-plugin/get/tip.zip) the plugin boilerplate from Bitbucket. *(Alternatively, clone the repository if you use Mercurial. As the package.json is already created here, you don't need to npm init)*
* In a terminal window, go to the project's root folder and install the Cumulocity UI plugins

```bash
$ c8y install latest
```
### Configure the application manifest

The application manifest contains information about the Cumulocity application that holds your plugins, such as its name, key, URL and dependencies. It needs to be placed in a file named cumulocity.json in the project's root folder. Inspect the "boilerplate" application manifest:

```json
	{
		"availability": "PRIVATE",
		"contextPath": "myapplication",
		"key": "myapplication-appkey",
		"name": "My application",
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


## Branding plugin

Our main css is based on 	the popular css framework [Bootstrap 3](http://getbootstrap.com/). It is possible to build a branding plugin based on Cumulocity own base branding simply by overriding less variables.

Inside the repo [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) you can find all the plugins described in this tutorial.

As the myBranding example is much more extensive than the other plugins copy over the myBranding folder into your plugins folder.
Although there a few files there, the strategy is straight forward: defining less variables that are overriding the setting on the base theme c8yBranding.

You can inspect the less files to see what variables are available for configuration.

A branding plugins are simply distinguished by their name: must end in *Branding* (e.g. *piedpiperBranding* ). To use it in an application add it to the imports statement of an application manifest cumulocity.json, as it is in [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) repo.

Make sure there is only single branding plugin declared otherwise both of them will be loaded.


![Branding example](/guides/plugins/branding.png)


## Device Contact Plugin

This section shows how to create a plugin that adds a new tab "Contact" to a device in the Cumulocity application. Clicking on "Contact" presents the user with a simple form for entering contact details. When the user saves the form, the contact details are stored as part of the device object in the inventory. The new tab looks like this:

![Contact tab](/guides/plugins/contact.png)

In order to achieve this goal you need to do the following steps:

* Create a plugin
* Declare the plugin on the imports list of the application manifest (cumulocity.json)
* Add a tab to a device.
* Display data in the tab.
* Persist the data to Cumulocity backend

We assume that you already have created an application to add the new plugin to. You can use myapplication from the previous example. The example is also contained in the folder plugins/deviceContact of  [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples).

### Adding dependencies

For this exercise let's consider you want to extend Device management. In practice this means importing the set of plugins used in Device management and add your own to the list.
You can print the list of imported plugins by any available app in your dev environment by executing the command ```c8y util:showimports <appContextPath>```.

In this case:

```console
$ c8y util:showimports devicemanagement
```

These values should be added to the imports definition of the application manifest. Beware to exclude the c8yBranding plugin if you have already defined your own branding plugin.

However if you prefer a more minimalistic approach you can read the cumulocity.json in [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) and only import the essential for the Device Contact plugin to work.

* **TIP**
Run ```c8y util:showimports cockpit``` or ```c8y util:showimports administration``` to see other plugins available to you.
The manifests for the built in applications are stored in *_apps.json* inside node_modules/cumulocity-ui-build.

### Create a plugin

In your application, run the command:

```console
$ c8y create:plugin deviceContact
```
Then edit the cumulocity.json file to add the following information:

```json
{
	"name": "Device Details - Contact",
	"description": "Plugin adds a Contact tab to Device Details view",
	"ngModules": [
		"myapp.deviceContact"
	],
	"js": [
		"index.js"
	]
}
```

Then create a file ```index.js``` at the plugin's root folder to have the following content:

```js
(function () {
	angular.module('myapp.deviceContact', []).config(function () {
	});
})();
```

Update the application manifest (```cumulocity.json```) to add this new plugin to the import list.

```console
{
	...
	"imports": [
		...
		"myapplication/deviceContact"
	]
}
```

### Adding Contact tab in Device Details view

Now, we create an empty "Contact" tab in the device details view, which we will fill with contents in the following step.
Inside the plugin folder, create a file deviceContact.controller.js with the content below.

```js
(function () {
	'use strict';
	angular.module('myapp.deviceContact')
		.controller('deviceContactCtrl', Controller)

	function Controller($scope, $routeParams, c8yDevices, c8yAlert) {

	});

})();
```

* Declare the file in the js array inside the plugin manifest in plugins/deviceControl/cumulocity.json:

```console
	{
		...
		"js": [
			...,
			"deviceContact.controller.js"
		]
	}
```

* Inside the plugin folder Create a file deviceContact.html with the contents:

```html
	<div class="panel panel-clean">
		<div class="panel-body">
			Contact
		</div>
	</div>
```

* Add the "Contact" tab to the device details just like we did in the "Hello world!" example. Edit index.js and add the content below.
Note that when multiple views are attached to the route (/device/:deviceId in this case) tabs are created automatically for each of them. Since the device details view uses /device/:deviceId for device details already, "Contact" is rendered as a tab.

```js
(function () {
	angular.module('myapp.deviceContact', []).config(function (c8yViewsProvider) {
		c8yViewsProvider.when('/device/:deviceId', {
			name: 'Contact',
			icon: 'envelope-o',
			priority: 1000,
			templateUrl: ':::PLUGIN_PATH:::/deviceContact.html',
			controller: 'deviceContactCtrl'
		});
	});
})();
```


### Display data in the "Contact" tab

Previously, we only set up a dummy view for device contacts. In this step, we will display the actual contact information stored with a device in the view. We will define that contact data is stored in a fragment c8y_Contact of a device in the inventory like this:

```json
	{
		"c8y_Contact": {
			"name": "John Smith",
			"email": "john.smith@example.com",
			"phone": "123-456-789",
			"address": "Sample Street 11 A"
		}
	}
```

* Add a load function to deviceContact.controller.js as shown below. The function gets the details of the currently displayed device ($routeParams.deviceId) and adds the device's id and c8y_Contact fragment to the local scope $scope.

```js
(function () {
	'use strict';
	angular.module('myapp.deviceContact')
		.controller('deviceContactCtrl', Controller)

	function Controller($scope, $routeParams, c8yDevices, c8yAlert) {
		function load() {
			c8yDevices.detail($routeParams.deviceId).then(function (res) {
				var device = res.data;
				$scope.device.id = device.id;
				$scope.device.c8y_Contact = device.c8y_Contact;
			});
		}

		$scope.device = {};

		load();
	});

})();
```


* Edit the device contact view in deviceContact.html with the content below.

```html
	<div class="panel panel-clean">
		<div class="panel-body">
			<form name="contactForm">
				<div class="form-group">
					<label for="contact_name">Name</label>
					<input id="contact_name" type="text" class="form-control" ng-model="device.c8y_Contact.name">
				</div>
				<div class="form-group">
					<label for="contact_email">E-mail address</label>
					<input id="contact_email" type="text" class="form-control" ng-model="device.c8y_Contact.email">
				</div>
				<div class="form-group">
					<label for="contact_phone">Phone</label>
					<input id="contact_phone" type="text" class="form-control" ng-model="device.c8y_Contact.phone">
				</div>
				<div class="form-group">
					<label for="contact_address">Address</label>
					<input id="contact_address" type="text" class="form-control" ng-model="device.c8y_Contact.address">
				</div>
			</form>
		</div>
	</div>
```

### Allow user to save the data.

After completing the following steps, you will be able to save the data edited using the new contact form.

* Update the controller in deviceContact.js to also save data by adding the content below just after the closing brace of the load function. c8yDevices.save is a library function that stores a device using the Cumulocity REST API. c8yAlert.success is a library function that displays a green confirmation box at the top of the user interface.


```js
	function save(device) {
		c8yDevices.save(device).then(onSave);
	}

	function onSave() {
		c8yAlert.success('Contact information successfully saved!');
	}

	$scope.save = save;
```

* Add a *"Save changes"* button to the device contact view. Paste the div below just before the closing form tag in deviceContact.html. The button will trigger the ```save``` function that we just defined.

```html
	<div>
		<a href="" class="btn btn-primary" ng-click="save(device)" ng-disabled="contactForm.$invalid">Save changes</a>
	</div>
```
Now your plugin is done! Open your application in the web browser and click on a device to see the new "Contact" tab.

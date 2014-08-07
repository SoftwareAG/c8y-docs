---
title: Introduction to plugin development
layout: default
---

## Overview 

Plugins allow you to add new functionality to Cumulocity's user interface. In the following, we describe step-by-step how to create sample plugins. For the basic concepts of Cumulocity applications, please see [Developing applications](/guides/concepts/applications). For reference information, please see the [Plugins reference](/guides/web/reference).

## Prerequisites

Plugins are based on HTML5. You should be familiar with the following technologies:

* [HTML5](http://www.w3schools.com/html/html5_intro.asp) and [CSS](http://www.w3schools.com/css/css3_intro.asp).
* [JavaScript](http://www.w3schools.com/js/).
* [AngularJS](https://angularjs.org/).
* [Grunt](http://gruntjs.com/).

You will need the following prerequisites for being able to develop plugins and to execute the examples:

* You will need [Node.js](http://nodejs.org/) (0.10 or newer) and [Grunt](http://gruntjs.com/) installed. 
* You will need access to your Cumulocity account, i.e. you need your tenant name, username and password.
* You will need a source code repository ([Bitbucket](https://bitbucket.org/) or [GitHub](https://github.com/)) where you can commit your source code and build sources for publishing your applications and plugins. 

All examples described in the document are available in the repository [https://bitbucket.org/m2m/cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples).

## "Hello world!"

This section describes a "Hello world!"-style plugin which is available as an example in the repository "cumulocity-ui-plugin" as "myplugin".

The purpose of this plugin is to add a new menu item which will display a simple "Hello world!" page when selected by user. The following screenshot presents the final result:

![Hello world plugin](/images/guides/plugins/hello.png)

In order to achieve this goal you need to do the following steps:

* Set up an application project.
* Configure the application manifest.
* Register the application.
* Configure the plugin manifest.
* Register the plugin.
* Implement the plugin’s initialization function to add a menu item and associate it with a view template.
* Implement the controller to provide data for the view template (a simple text in this case).
* Add the view template to display the data.
* Test the application.
* Finally, build and publish the application and the plugin.

### Set up an application project

* [Download](https://bitbucket.org/m2m/cumulocity-ui-plugin/get/tip.zip) the plugin boilerplate from Bitbucket. (Alternatively, clone the repository if you use Mercurial.)
* In a terminal window, go to the project's root folder and install the project dependencies.


	> npm install

### Configure the application manifest

The application manifest contains information about the Cumulocity application that holds your plugins, such as its name, key, URL and dependencies. It needs to be placed in a file named "cumulocity.json" in the project's root folder. Inspect the "boilerplate" application manifest:

	{
		"availability": "PRIVATE",
		"contextPath": "myapplication",
		"key": "myapplication-appkey",
		"name": "My application",
		"resourcesUrl": "https://bitbucket.org/USER/REPO/raw/master/build",
		"type": "HOSTED",
		"imports": [
			"core/c8yBranding",
			"myapplication/myplugin"`
		]
	}

Here's what the configuration file means:

* A "PRIVATE" application is only available for you to use inside your tenant. If you are satisfied with your application, you can publish it and make it a "MARKET" application for everyone to subscribe to.
* Your application will be available using the URL "&lt;tenant&gt;.cumulocity.com/apps/myapplication".
* Your application uses the key "myapplication-appkey". This key is used to identify what applications users are subscribed to.
* The name of your application is "My application". This is how it will show up in user interfaces, for example, in the App Switcher at the top right of the application.
* Your application will be built and published to "https://bitbucket.org/USER/REPO/raw/master/build", if you decide to publish it for your users. Usually, this URL needs to point to a valid Bitbucket or GitHub folder. Here, we will not publish the application, so you can leave the configuration as it is.
* The type of the application is "HOSTED", which means it is a Cumulocity application served through a "cumulocity.com" URL. ("EXTERNAL" can be used to add legacy applications to the App Switcher, but this is out of scope of this guide.)
* Your application depends on the "c8yBranding" plugin of the "core" application. This plugin provides all the visual settings around your plugin. You will most likely want to always include this plugin, unless you want to entirely replace the branding and layout. It also depends on the "myplugin" plugin, which is provided by the "boilerplate" code.

### Register the application

Next, you need to register your application manifest with Cumulocity using "grunt appRegister":

	> grunt appRegister
	Running "c8yAppRegister" task
	[?] What is your cumulocity tenant? mytenant
	[?] What is your username? myuser
	[?] What is your password? ********
	Credentials registered
	Registering application.
	>> Application registered
	Done, without errors.

You will be asked for your tenant name and username the first time you run any register task. Afterwards, your credentials are stored in a file ".cumulocity". Next time, you will be only asked for your password. You can define an environment variable "C8Y_PASS" if you do not want to be asked for your password.

After registering your application, it appears in the "Own applications" menu of the Cumulocity administration application.

![My Application](/images/guides/plugins/applicationeditor.png)

> Note: Every time you change the application manifest you need to re-register the application.

### Configure the plugin manifest

Each plugin comes in a separate subfolder of the "plugins" folder of your application. The example contains a subfolder "myplugin". Inside "myplugin", you will another "cumulocity.json" file, the plugin manifest. The plugin manifest provides information about a plugin, such as the name and the icon with which it is represented in the Plugin Editor. Inspect "myplugins"'s manifest:

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

Here's what this configuration file means:

* The plugin shows up as "Hello world plugin testing" in the Plugin Editor.
* It's description there is "Simple hello world plugin."
* The plugin exposes the "myapp.helloworld" AngularJS module.
* The plugin loads the JavaScript code in "index.js", located in the plugin's root folder.

### Register the plugin

Plugins need to be registered in a similar way as applications, using "grunt pluginRegister":

	> grunt pluginRegister:myplugin
	Running "pluginRegister:myplugin" (pluginRegister) task
	Running "c8yPluginRegister:myplugin" (c8yPluginRegister) task
	[?] What is your password? ********
	>> Plugin myplugin successfully registered
	Done, without errors.

Similar to applications, tenant and username are stored in a file ".cumulocity" and the password has to either be entered or stored in a variable "C8Y_PASS".

Alternatively to "pluginRegister", you can also register all plugins at once by running the following command:

	> grunt pluginRegisterAll

After registering your plugin, it appears in the "Plugins" tab of your application.

![My Plugin](/images/guides/plugins/plugineditor.png)

> Note: Every time you change the plugin manifest, you need to re-register the plugin.

### Implement the plugin’s initialization function

Previsouly, while defining the plugin manifest, we mentioned that JavaScript code from the file "index.js" in the plugin folder should be loaded. Inspect "index.js":

	angular.module('myapp.helloworld', []).config(['c8yNavigatorProvider', 'c8yViewsProvider',
	 function (c8yNavigatorProvider, c8yViewsProvider) {
		'use strict';
		
		c8yNavigatorProvider.addNavigation({
			name: 'New plugin',
			icon: 'cube',
			priority: 100000,
			path: 'hello'
		});
		
		c8yViewsProvider.when('/hello', {
			templateUrl: ':::PLUGIN_PATH:::/views/index.html',
			controller: 'mh_MainCtrl'
		});	
	}]);

With this code, we contribute a menu item ("c8yNavigationProvider") and a view with its controller ("c8yViewsProvider") to our application.

* The menu item has the name "New plugin".
* The menu item has a little cube icon. Icons are provided by the great Font Awesome library and you can use any of their [icon names](http://fortawesome.github.io/Font-Awesome/icons/) without the "fa-" prefix here.
* The menu item is sorted into the menu with a priority of 100000, which means that all menu items with a priority lower than 100000 appear before this menu item and all with a priority higher than 100000 appear after this menu item.
* It points to a URL "/hello".
* When the user opens the URL "/hello" (resp. clicks on the menu item), the view "/views/index.html" inside the plugin's folder is displayed. The plugin's folder is represented using the magic string ":::PLUGIN_PATH:::", which is replaced by the actual path during the build process.

### Implement the controller

"index.js" contains one more function, a controller "mh_MainCtrl". This controller defines a variable "hello" to contain the simple static text "Hello world!":

	angular.module('myapp.helloworld').controller('mh_MainCtrl', ['$scope', function ($scope) {
		'use strict';
		$scope.hello = 'Hello world!';
	}]);

### View template

The variable "hello" is used in the view template that renders the user interface of our plugin. Inspect the file "views/index.html" in the plugin folder:

	<h1>{{hello}}</h1>

### Test your application

You can use Grunt's server functionality to run your application and plugins locally.

	> grunt server
	Running "readApplication" task
	Application /apps/myapplication
	>> My application
	Running "readPlugins" task
	1 plugins detected
	>> myplugin
	Running "connect:plugin" (connect) task
	Started connect web server on http://0.0.0.0:8000
	Running "watch" task
	Waiting...

Now, you can test your application by opening your browser at the URL "http://localhost:8000/apps/myapplication".

### Build and publish your application and plugin

In order to build your application and plugin, run "grunt build".

	> grunt build
	Running "readPlugins" task
	1 plugins detected
	>> myplugin
	Running "pluginBuild:all" (pluginBuild) task
	Running "pluginBuild:myplugin" (pluginBuild) task
	Running "ngtemplates:plugin_myplugin" (ngtemplates) task
	File .tmp/plugins/myplugin/views.js created.
	Running "uglify:plugin_myplugin" (uglify) task
	File build/myplugin/main.js created: 935 B → 569 B
	Running "pluginReplaceString:myplugin" (pluginReplaceString) task
	Running "downloadIndex" task
	Running "clean:temp" (clean) task
	Cleaning .tmp...OK
	Done, without errors.

The build process does the following:

* Detects the plugins in the application.
* Builds each plugin by consolidating the plugin’s scripts and templates into a single, uglified `main.js` file. This is stored in the "build" directory.
* Downloads the "index.html" file required to run the Cumulocity application.
* And finally cleans up temporary files.

If you are using a Bitbucket or GitHub repository for your application (as defined in "resourceUrl" of the application manifest), you can now add the built files, commit everything and push the repository. This makes the application available to your users.

## Branding plugin

This section shows how to create a sample branding plugin that changes the icon displayed in the App Switcher. It can be developed further by adding more CSS/LESS rules to alter the appearance of the application. Base layout and styling is provided by the standard Cumulocity branding plugin "core/c8yBranding". The resulting App Switcher looks like this:

![Branding](/images/guides/plugins/branding.png)

In order to achieve this goal, you need to execute the following steps:

* Create your branding.
* Edit the plugin manifest.

We assume that you already have registered an application and a plugin. You can use "myapplication" and "myplugin" from the previous example. The example is also contained in the folder "plugins/branding" of  https://bitbucket.org/m2m/cumulocity-ui-plugin-examples.

### Create your branding

To create your new branding:

* Create a folder "img" and add your new "[logo.png](https://bytebucket.org/m2m/cumulocity-ui-plugin-examples/raw/64acaf1be3d29224c7a296ca49f4e1a372fa7bee/plugins/branding/img/logo.png?token=aed7a957488f41d23940079d16999300c82e4dd0)" image to the folder.
* Create a folder "style" and add a [LESS](http://lesscss.org/) stylesheet "main.less" to it. (LESS is a CSS precompiler; you can also use straight CSS.) The content of "main.less" should be:


	.header .logo {
		background: url('img/logo.png') no-repeat !important;
		background-size: 100%;
		width: 52px;
		height: 25px;
		margin: 7px 5px;
		float: left;
	}

### Edit the plugin manifest

Edit the "cumulocity.json" file in your plugin's folder and add the style sheet and the icon to it.

	{
		...
		"less": [
			"style/main.less"
		],
		"copy": [
			"img/*"
		]
		...
	}

The "copy" property lists all files that should be copied as such into the build folder of your application. Now you can reregister your plugin using "grunt pluginRegister" as described above and test it.

## Device Contact Plugin

This section shows how to create a plugin that adds a new tab "Contact" to a device in the Cumulocity application. Clicking on "Contact" presents the user with a simple form for entering contact details. When the user saves the form, the contact details are stored as part of the device in the inventory. The new tab looks like this:

![Contact tab](/images/guides/plugins/contact.png)

In order to achieve this goal you need to do the following steps:

* Create and register a plugin stub.
* Add the plugin stub to the application.
* Add a tab to a device.
* Display data in the tab.
* Allow user to save the data.

We assume that you already have registered an application to add the new plugin to. You can use "myapplication" from the previous example. The example is also contained in the folder "plugins/deviceContact" of  https://bitbucket.org/m2m/cumulocity-ui-plugin-examples.

### Create and register a plugin stub

In your application, create a folder "deviceContact" within the folder "plugins" and edit the file "cumulocity.json" to have the following content:

	{
		"name": "Device Details - Contact",
		"description": "Plugin adds a Contact tab to Device Details view",
		"category": "Examples",
		"icon": "bell",
		"color": "#F2DF0F",
		"ngModules": [
			"myapp.deviceContact"
		],
		"js": [
			"index.js"
		]
	}

Additionally, edit the file "index.js" in the plugin's root folder to have the following content:

	angular.module('myapp.deviceContact', []).config(function () {
	});

Now, register your new plugin:

	> grunt pluginRegister:deviceContact

### Add the plugin stub to the application.

After the plugin is registered, you need to include it into your application. You also need to include the device list and the device details view to your application, to which we add the tab. This is done by adding the following entries to the "imports" property of the application manifest:

	{
		...
		"imports": [
			...
			"core/deviceList",
			"core/deviceDetail",
			"myapplication/deviceContact"
		]
}

Now, re-register your application:

	> grunt appRegister

### Adding Contact tab in Device Details view

Now, we create an empty "Contact" tab in the device details view, which we will fill with contents in the following step.

* Create the folder "plugins/deviceControl/controllers".
* Inside the folder, create a file "deviceContact.js" with the content below. 


	angular.module('myapp.deviceContact')
	.controller('deviceContactCtrl', ['$scope', '$routeParams', 'c8yDevices', 'c8yAlert',
		function ($scope, $routeParams, c8yDevices, c8yAlert) {
			'use strict';
		}
	]);

* Add a reference to the file to the plugin manifest in "plugins/deviceControl/cumulocity.json":


	{
		...
		"js": [
			...,
			"controllers/deviceContact.js"
		]
	}

* Re-register the plugin.


	> grunt pluginRegister:deviceContact

* Create the folder "plugins/deviceControl/views".

* Inside the folder, create a file "deviceContact.html" with the content below.


	<div class="panel panel-clean">
		<div class="panel-body">
			Contact
		</div>
	</div>

* Add the "Contact" tab to the device details just like we did in the "Hello world!" example. Edit "index.js" and add the content below. Note that when multiple views are provided for one route ("/device/:deviceId" in this case), these are rendered as tabs. Since the device details view uses "/device/:deviceId" for device details already, "Contact" is rendered as a tab.


	angular.module('myapp.deviceContact', [])
	.config(['c8yViewsProvider', function (c8yViewsProvider) {
		c8yViewsProvider.when('/device/:deviceId', {
			name: 'Contact',
			icon: 'envelope-o',
			priority: 1000,
			templateUrl: ':::PLUGIN_PATH:::/views/deviceContact.html',
			controller: 'deviceContactCtrl'
		});
	}]);

### Display data in the "Contact" tab

Previously, we only set up a dummy view for device contacts. In this step, we will display the actual contact information stored with a device in the view. We assume that contact data is stored in a fragment "c8y_Contact" of a device in the inventory like this:

	{
		...
		"c8y_Contact": {
			"name": "John Smith",
			"email": "john.smith@example.com",
			"phone": "123-456-789",
			"address": "Sample Street 11 A"
		}
	}
	

>	UNCLEAR: This load function does not load anything. I assume that the actual loading is done by device detail.

* Add a "load" function to "deviceContact.js" as shown below. The function gets the details of the currently displayed device ("$routeParams.deviceId") and adds the device's "id" and "c8y_Contact" fragment to the local scope "$scope".


	angular.module('myapp.deviceContact')
	.controller('deviceContactCtrl', ['$scope', '$routeParams', 'c8yDevices', 'c8yAlert',
		function ($scope, $routeParams, c8yDevices, c8yAlert) {
			'use strict';

			function load() {
				c8yDevices.detail($routeParams.deviceId).then(function (res) {
					var device = res.data;
					$scope.device.id = device.id;
					$scope.device.c8y_Contact = device.c8y_Contact;
				});
			}
			
			$scope.device = {};
			
			load();
		}
	]);

* Edit the device contact view in "deviceContact.html" with the content below. 


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

### Allow user to save the data.

After completing the following steps, you will be able to save the data edited using the new contact form.

* Update the controller in "deviceContact.js" to also save data by adding the content below just after the closing brace of the "load" function. "c8yDevices.save" is a library function that stores a device using the Cumulocity REST API. "c8yAlert.success" is a library function that displays a green confirmation box at the top of the user interface.


	...
	function save(device) {
		c8yDevices.save(device).then(onSave);
	}
	
	function onSave() {
		c8yAlert.success('Contact information successfully saved!');
	}
	
	$scope.save = save;
	...

* Add a "Save changes" button to the device contact view. Paste the "&lt;div&gt;" below just before the "&lt;/form&gt;" in "deviceContact.html". The button will trigger the "save" function that we just defined.


	<div>
		<a href="" class="btn btn-primary" ng-click="save(device)" ng-disabled="contactForm.$invalid">Save changes</a>
	</div>

Now your plugin is done! Open your application in the web browser and click on a device to see the new "Contact" tab.

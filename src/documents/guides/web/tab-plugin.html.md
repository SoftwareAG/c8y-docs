---
title: Tab Plugin
layout: default
---

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

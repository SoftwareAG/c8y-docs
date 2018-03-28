---
title: Display data in the "Contact" tab
layout: redirect
order: 40
---

Previously, we only set up a dummy view for the "Contact" tab. In this step, we will display the actual contact information stored with a device in the view. We will define that the contact data is stored in a fragment "c8y_Contact" of a device in the inventory like this:

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

Add a load function to "deviceContact.controller.js" and the necessary injection dependencies as shown below. The function gets the details of the currently displayed device ($routeParams.deviceId) and adds the device's id and "c8y_Contact" fragment to the local scope.

```js
(function() {
  'use strict';

  angular
    .module('myapp.deviceContact')
    .controller('deviceContactCtrl', DeviceContactController);

  DeviceContactController.$inject = [
    '$scope',
    '$routeParams',
    'c8yDevices'
  ];

  function DeviceContactController($scope, $routeParams, c8yDevices) {

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

}());
```

Edit the device contact view in deviceContact.html with the content below.

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

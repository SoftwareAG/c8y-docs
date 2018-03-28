---
title: Allow the user to save the data
layout: redirect
order: 50
---
After completing the following steps, you will be able to save the data entered in the new contact form.

Update the controller in "deviceContact.controller.js" to also save data by adding another injection dependency and the content below just after the closing brace of the load function. "c8yDevices.save" is a [library function](http://resources.cumulocity.com/documentation/jssdk/latest/) that stores a device using the Cumulocity REST API. "c8yAlert.success" is a library function that displays a green confirmation box at the top of the user interface.


```js
(function() {
  'use strict';

  angular
    .module('myapp.deviceContact')
    .controller('deviceContactCtrl', DeviceContactController);

  DeviceContactController.$inject = [
    '$scope',
    '$routeParams',
    'c8yDevices',
    'c8yAlert'
  ];

  function DeviceContactController($scope, $routeParams, c8yDevices, c8yAlert) {

    function load() {
      c8yDevices.detail($routeParams.deviceId).then(function (res) {
        var device = res.data;
        $scope.device.id = device.id;
        $scope.device.c8y_Contact = device.c8y_Contact;
      });
    }

    function save(device) {
      c8yDevices.save(device).then(onSave);
    }

    function onSave() {
      c8yAlert.success('Contact information successfully saved!');
    }

    $scope.save = save;
    $scope.device = {};

    load();
  }

}());
```

Add a *"Save changes"* button to the device contact view. Paste the div below just before the closing form tag in deviceContact.html. The button will trigger the ```save``` function that we just defined.

```html
	<div>
		<a href="" class="btn btn-primary" ng-click="save(device)" ng-disabled="contactForm.$invalid">Save changes</a>
	</div>
```

Now your plugin is done! Deploy your plugin, open your application in the web browser and click on a device to see the new "Contact" tab.

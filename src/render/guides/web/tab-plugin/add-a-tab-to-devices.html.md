---
title: Add a tab to devices
layout: redirect
order: 30
---


Now, we create an empty "Contact" tab in the device details view, which we will fill with contents in the following step.
Inside the plugin folder, create a file "deviceContact.config.js" with the content below. Just like in the ["Hello world!" example](/guides/web/introduction#hello-world), we will use the "c8yViewsProvider" service provided by the [Cumulocity JavaScript API](http://resources.cumulocity.com/documentation/jssdk/latest/) to add a new view to our application.

```js
(function() {
  'use strict';

  angular
    .module('myapp.deviceContact')
    .config(configure);

  configure.$inject = [
    'c8yViewsProvider'
  ];

  function configure(
		c8yViewsProvider
	) {
    c8yViewsProvider.when('/device/:deviceId', { // when the path "/device/:deviceId" is accessed ...
      name: 'Contact', // ... show a tab with the name *"Contact"*
      icon: 'envelope-o', // ... use the envelope-o icon (icons are provided by the great Font Awesome library and you can use any of their [icon names](http://fontawesome.io/icons/) without the *fa-* prefix here
      priority: 1000, // ... set the priority to 1000, which means that all tabs with a priority lower than 1000 appear before this tab and all with a priority higher than 1000 appear after this tab
      templateUrl: ':::PLUGIN_PATH:::/views/deviceContact.html', //  ... display our html file "deviceContact.html" inside the "views" folder of our plugin (the plugin's folder is represented using the magic string ```:::PLUGIN_PATH:::```, which is replaced by the actual path during the build process)
      controller: 'deviceContactCtrl' // ... use "deviceContactCtrl" as controller
    });
  }

}());
```

> Note that when multiple views are attached to the route ("/device/:deviceId" in this case), tabs are created automatically for each of them. Since the device details view uses /device/:deviceId for device details already, "Contact" is rendered as a tab.

Next, we have to define our view and controller. For the controller, create a new file "deviceContact.controller.js" inside the plugin folder and add the following content:

```js
(function () {
	'use strict';

	angular
    .module('myapp.deviceContact')
    .controller('deviceContactCtrl', DeviceContactController);

	function DeviceContactController() {

	}
}());
```

Inside the plugin folder, create a new folder "views" and add the file "deviceContact.html" with the following content:

```html
	<div class="panel panel-clean">
		<div class="panel-body">
			Contact
		</div>
	</div>
```

Now that we have added the module, config and controller to our plugin, we have to specify "myapp.deviceContact" as our module and add each javascript file to our plugin manifest:

```json
{
  "name": "Device Details - Contact",
  "description": "Plugin adds a Contact tab to Device Details view",
  "category": "Examples",
  "ngModules": [
    "myapp.deviceContact"
  ],
  "js": [
    "deviceContact.module.js",
    "deviceContact.config.js",
    "deviceContact.controller.js"
  ]
}
```

At this point, you can [test your application](/guides/web/introduction#create-application) by deploying it. When selecting a device, a new tab "Contact" should be displayed.

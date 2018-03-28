------
order: 10
title: Iconmap Plugin
layout: redirect
------


With the following plugin a new widget will be available for dashboards which displays devices as icons on a map. The new widget looks like this:

![Iconmap Widget](/guides/images/plugins/iconmapwidget.png)

In order to achieve this goal you need to do the following steps:

* Create a plugin.
* Declare the plugin on the imports list of the [application manifest](/guides/web/branding-plugin#application-manifest).
* Add an item to the widget menu list.
* Get the images for the devices.
* Create a view for the widget.

We assume that you have already created an application that you can add the new plugin to. If not, you can use the application provided in the [repository](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) mentioned above. You can also find the example described here in the folder "plugins/iconmap".

### Create a plugin

Inside your application folder, run the command:

```console
$ c8y create:plugin iconmap
```
Then edit the [plugin manifest](/guides/web/branding-plugin#plugin-manifest) in /plugins/iconmap to add the following information:

```json
{
  "name": "Icon Map",
  "description": "Shows devices on a map using an icon for the device type.",
}
```

Then create a file "iconmap.module.js" at the plugin's root folder to have the following content:

```js
(function () {
  'use strict';

  angular.module('myapp.iconmap', []);
}());
```

Update the application manifest to add this new plugin to the import list.

```console
{
	...
	"imports": [
		...
		"myapplication/iconmap"
	]
}
```

### Add an item to the widget menu list

Next, we have to create a config file which adds a menu item to the widget menu list. For that purpose, we can use the service "c8yComponentsProvider" provided by the [Cumulocity JavaScript API](http://resources.cumulocity.com/documentation/jssdk/latest/). Inject the service into your config and call the following function:

```js
(function () {
  'use strict';

  angular
    .module('myapp.iconmap')
    .config(configure);

  configure.$inject = [
    'c8yComponentsProvider',
    'gettext'
  ];

  function configure(
    c8yComponentsProvider,
    gettext
  ) {
    c8yComponentsProvider.add({ // adds a menu item to the widget menu list with ...
      name: 'iconmap', // ... the identifier *"iconmap"* which has to be unique among the widgets in the application
      nameDisplay: gettext('Icon Map'), // ... the displayed name *"Icon Map"*
      description: gettext('Displays a map with icons for devices instead of markers'), // ... a description
      templateUrl: ':::PLUGIN_PATH:::/views/iconmap.main.html', // ... displaying *"iconmap.main.html"* when added to the dashboard
      options: { noDeviceTarget: true }
    });
  }
}());
```

### Get the images for the devices

To start with, we need to define an array "markers" which contains markers for every device to be displayed on the map. In this example, we will assign an image to a device based on its hardware model. To get the images, we need to get all binary objects in the inventory with the help of the "c8yBinary" service. Then we have to filter the binary objects for images which represent a certain hardware model. Afterwards, the devices will be placed on the map according to their "c8y_Position" fragment either with an image, if there is an image for the hardware model, or with the usual marker, if there is none.

```js
(function () {
  'use strict';

  angular
    .module('myapp.iconmap')
    .controller('iconmapController', iconmapController);

  iconmapController.$inject = [
    '$scope',
    '$q',
    'c8yInventory',
    'c8yBinary'
  ];

  function iconmapController(
    $scope,
    $q,
    c8yInventory,
    c8yBinary
  ) {
    $scope.markers = [];

    var getDevicesAndBinaries = {
      devices: getDevicesWithLocation(),
      binaries: c8yBinary.list({})
    };
    $q.all(getDevicesAndBinaries).then(placeTypes);

    function getDevicesWithLocation() {
      var filters = {fragmentType: 'c8y_Position' };
      return c8yInventory.list(filters);
    }

    function placeTypes(devicesAndBinaries) {
      var devicesOfType = createTypeMap(devicesAndBinaries.devices);
      var iconOfType = createIconMap(devicesAndBinaries.binaries);
      angular.forEach(devicesOfType, _.curry(placeType)(iconOfType));
    }

    function placeType(iconOfType, devices, type) {
      var icon = iconOfType[type];
      if (icon) {
        var placeDevices = _.curry(place)(devices);
        c8yBinary.downloadAsDataUri(icon).then(placeDevices);
      } else {
        place(devices);
      }
    }

    function createTypeMap(devices) {
      var typeMap = {};
      angular.forEach(devices, _.curry(addDeviceToTypeMap)(typeMap));
      return typeMap;
    }

    function addDeviceToTypeMap(typeMap, device) {
      var hw = 'default';
      if (device.c8y_Hardware && device.c8y_Hardware.model) {
        hw = device.c8y_Hardware.model;
      }

      if (!typeMap[hw]) {
        typeMap[hw] = [];
      }

      typeMap[hw].push(device);
    }

    function createIconMap(binaries) {
      var iconMap = {};
      angular.forEach(binaries, _.curry(addIconToIconMap)(iconMap));
      return iconMap;
    }

    function addIconToIconMap(iconMap, icon) {
      if (c8yBinary.isImage(icon)) {
        var name = icon.name;
        name = name.substring(0, name.lastIndexOf('.'));
        iconMap[name] = icon;
      }
    }

    function place(devices, uri) {
      angular.forEach(devices, _.curry(placeDevice)(_, uri));
    }

    function placeDevice(device, uri) {
      var pos = device.c8y_Position;
      var marker = {
        lat: pos.lat,
        lng: pos.lng,
        message: '<a href="#/device/' + device.id + '">' + device.name + '</a>'
      };

      if (uri) {
        marker.icon = { iconUrl: uri };
      }

      $scope.markers.push(marker);
    }
  }
}());
```

Now that we have added the module, config and controller to our plugin, we have to specify "myapp.iconmap" as our module and add each javascript file to our plugin manifest:

```json
{
	"name": "Icon Map",
	"description": "Shows devices on a map using an icon for the device type.",
  "ngModules": [
    "myapp.iconmap"
  ],
  "js": [
    "iconmap.module.js",
    "iconmap.config.js",
    "iconmap.controller.js"
  ]
}
```

### Create a view for the widget

In our config, we already specified the .html file which contains our view for the widget. In this example, our widget should show a simple map. To add a map to the view, create a folder "views" inside your plugin folder, create a file "iconmap.main.html" and add the following content:

```html
<div ng-controller="iconmapController">
    <leaflet markers="markers" ></leaflet>
</div>
```

The "leaflet" tag adds an [interactive map](http://leafletjs.com/) to our widget. To display the devices on the map, we just need to assign the array we defined in the controller to the "markers" attribute of the "leaflet" tag.

### Test your plugin

After [deploying](/guides/web/introduction#create-application) the plugin to your tenant, you should be able to create a widget "Icon Map". Note that in order to see an image for your device, you have to upload an image with the device type as file name to the [file repository](/guides/users-guide/administration#files) of your tenant.

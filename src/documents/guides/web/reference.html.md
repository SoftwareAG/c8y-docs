---
title: Plugins reference
layout: default
---

Introduction what this is about with references to the other docs

## Application manifest file

Application manifest is placed in `cumulocity.json` file in project’s root folder. The following options can be provided there:

* **availability**: *MARKET *to be public or *PRIVATE*,

* **contextPath**: application URL path (if application is public it needs to be unique globally otherwise it needs to be unique for tenant),

* **key**: application key for monitoring (it needs to be unique globally),

* **name**: descriptive name for application (it needs to be unique globally),

* **resourcesUrl**: URL referencing built application sources,

* **type**: *HOSTED *for application hosted by Cumulocity platform,

* **imports**: the list of plugins used by application as list of
*<applicationName>/<pluginName>*


## Common plugin folder layout

In order to create a new plugin you need to create a new folder for it under app/plugins folder. 

The following is common layout for a plugin folder:

* cumulocity.json - plugin manifest file, see [here](#heading=h.mdi7gr21asuk) for more details,

* index.js - entry point for plugin, can define config() function for AngularJS module that wraps the plugin, see [here](#heading=h.132797aw2ewj) for more details,

* controllers - contains files with AngularJS controllers used by the plugin,

* views - contains AngularJS view templates used by the plugin,

* services - contains custom services defined by the plugin,

* styles - contains stylesheets, can use plain CSS or LESS stylesheets,

* gallery - contains plugin screenshots to be used for Plugin Gallery,

* images - contains other images used by the plugin.

## Plugin manifest file - cumulocity.json

This file contains information about the plugin such as it’s id, name, description and also what files should be processed in order to make it work properly.

The following is the example plugin manifest file:

.`{`

`  "name": "Example Plugin",`

`  "id": "c8y.examples.plugin",`

`  "category": "Samples",`

`  "icon": "dashboard",`

`  "color": "#F03F0F",`

`  "gallery": [`

`    "gallery/01.png",`

`    "gallery/02.png"`

`  ],`

`  "list" : false,`

`  "description": "This is example plugin.",`

`  "css": [`

`	"plugins/examplePlugin/styles/style.css"`

`  ],`

`  "less": [`

`    "plugins/examplePlugin/style/theme.less"`

`  ],`

`  "dependencies": [`

`	"c8y.examples.pluginA",`

`	"c8y.examples.pluginB"`

`  ],`

`  "js": [`

`    "plugins/examplePlugin/index.js",`

`    "plugins/examplePlugin/controllers/exampleController.js",`

`    "plugins/examplePlugin/services/exampleService.js"`

`  ],`

`  "copy": [`

`    "gallery/*"`

`  ]`

`}`

Manifest file can define:

* name - friendly name for the plugin, required,

* id - unique string id for the plugin, required,

* category - category name for the plugin, optional,

* icon - icon to use for the plugin: either Font Awesome icon name or set to true to load icon.png file instead, optional,

* color - **???**

* gallery - list of images with plugin screenshots to use for Plugin Gallery, optional,

* list - determines whether plugin should be listed in GUI for editing application, optional,

* description - description for the plugin, optional,

* css - list of CSS files that should be included, optional,

* less - list of LESS files that should be compiled and included, optional,

* dependencies - list of plugin ids that should be loaded before the plugin,

* js - list of JavaScript files that should be processed, the list can contain files such as index.js and files defining controllers, services, directives or filters, optional,

* copy - list of files that should be copied to production.

Text from the other doc:

* **name**: plugin’s name,

* **description**: plugin’s description,

* **ngModules**: the list of AngularJS modules that are provided by plugin, at least one is necessary,

* **category**: plugin’s category name,

* **icon**: plugin’s icon class name,

* **color**: plugin’s color HEX code,

* **css**: list of CSS files to be loaded (paths relative to plugin’s root folder),

* **less**: list of LESS files to be loaded (paths relative to plugin’s root folder),

* **js**: the list of JavaScript files to be loaded (paths relative to plugin’s root folder).




## Main plugin file - index.js

You can use main plugin file to define its config() function in order to initialize it. You can also use extension points described below to associate plugin functionality with 

## Extension points

When you are developing custom plugins you can use several extension points to modify or add custom behaviour to standard GUI elements. Extension points allow you for defining or modifying:

* actions,

* components,

* navigation entries,

* kinds of search,

* tabs,

* titles,

* views.

These extension points are AngularJS providers that provide services. Therefore you can use service provider in config function and service in controllers or other services.

### c8yActions / c8yActionsProvider

In order to add an item to Actions menu from inside a controller or service you can use c8yActions service and its addAction method. You can provide:

* text - label for item in menu,

* priority - determines order of items in menu,

* action - function to be executed.

Sample code to add a new action item from inside a controller:

`c8yActions.addAction({`

`  text: 'New Action',`

`  action: function executeAction() {`

`    dashboardSvc.addChild();`

`  }`

`});`

You can also associate an action item with a route by using c8yActionsProvider and its addUrlAction method providing:

* path - path which the action will be assigned to,

* text - label for item in menu,

* priority - determines order of items in menu,

* action - function which will be executed,

* autoRun - determines if action should be executed automatically.

The following example adds create dashboard action assigned to /device/:deviceId route:

`c8yActionsProvider.addUrlAction({`

`  path: '/device/:deviceId',`

`  text: 'Create dashboard',`

`  priority: -1000,`

`  action: ['dashboardSvc', function createDashboard(dashboardSvc) {`

`    dashboardSvc.createDashboard();`

`  }]`

`});`

### c8yComponentsProvider

You can use c8yComponentsProvider to add a definition of new component providing:

* name - name for component,

* description - description for component,

* templateUrl - URL of a view template to use for displaying component,

* configTemplateUrl - URL of a view template to use for displaying custom configuration options for component.

The following code sample shows how to add new component:

`c8yComponentsProvider.add({`

`  name: 'Component Name',`

`  description: 'Component Description',`

`  templateUrl: 'plugins/examplePlugin/views/component.html',`

`  configTemplateUrl: 'plugins/examplePlugin/views/componentConfig.html'`

`});`

### c8yNavigatorProvider

You can use c8yNavigatorProvider to add items to the application navigation menu.

To add a navigation item to menu you need to call addNavigation function and provide an object with the following options:

* parent - the name of parent item,

* name - the name of item,

* path - URL path associated with navigation item,

* icon - Font Awesome icon name to display for the item,

* priority - determines order of navigation items, the higher priority the higher will be the item in navigation menu,

* searchParams - **???**

The following is sample code that adds a navigation item:

`c8yNavigatorProvider.addNavigation({`

`  parent: 'Top-level navigation group name',`

`  name: 'Example item text',`

`  path: 'alarms',`

`  icon: 'hdd-o',`

`  priority: 1500,`

`  searchParams: {`

`    resolved: 'false'`

`  }`

`});`

### c8ySearchProvider

You can use c8ySearchProvider to enable performing specified kind of search.

You need to use add function and provide:

* name - label for a list of available kinds of searches,

* path - string or function which returns a string that determines a path which should be accessed in order to perform a search,

* priority - determines order of items on the list of available kinds of searches.

The following example shows how to add a new kind of search:

`c8ySearchProvider.add({`

`  name: 'Search device',`

`  priority: 1000,`

`  path: '/device?text={{search}}'`

`});`

### c8yTabs / c8yTabsProvider

You can use c8yTabs service or its provider to add new tabs dynamically. You need to provide:

* name - name for a tab,

* icon - icon to use for a tab,

* priority - determines tab order,

* path - URL for which tab is assigned.

If you are using c8yTabs service you need to use addTab function passing an object with properties listed above. On the other hand, if you are using c8yTabsProvider you need to use addTab function passing path and an object with the rest of properties listed above.

The following sample code shows how to add a new tab using c8yTabs service:

`c8yTabs.addTab({`

`  name: 'Name',`

`  icon: 'icon',`

`  priority: 1000,`

`  path: '/device'`

`});`

The following sample code shows how to add a new tab using c8yTabsProvider:

`c8yTabsProvider.addTab('/device', {`

`  name: 'Name',`

`  icon: 'icon',`

`  priority: 1000`

`});`

### c8yTitle / c8yTitleProvider

You can use c8yTitle service and c8yTitleProvider to determine what title should be displayed. Using c8yTitleProvider you can define how should be title and subtitle determined for a given route.

You can use addTitle function to assign a title and subtitle data to a route as in the following sample code which displays the name of current device as a title:

`c8yTitleProvider.addTitle('/device/:deviceId', {`

`  data: ['$routeParams', 'c8yDevices', function ($routeParams, c8yDevices) {`

`    var deviceId = $routeParams.deviceId;`

`    if (!deviceId) {`

`      return {};`

`    }`

`    return c8yDevices.detailCached(deviceId).then(function (res) {`

`      return {`

`        title: res.data.name,`

`        subtitle: 'Page subtitle'`

`      };`

`    });`

`  }]`

`});`

You can also dynamically change title and subtitle from inside a controller or service using c8yTitle service and its changeTitle function. When invoking this function you need to provide an object containing title and subtitle properties. In case one of them is missing the target title property is not changed. In this way you can alter only subtitle and title will remain as it was.

### c8yViewsProvider

You can use c8yViewsProvider to define application routes and assign templates to them.

The following code sample shows how to define a route and assign view template to it:

`c8yViewsProvider.when('/device', {`

`  templateUrl: 'plugins/examplePlugin/views/list.html'`

`});`

You can also define routes with parameters using colon notation:

`c8yViewsProvider.when('/device/:deviceId', {`

`  templateUrl: 'plugins/examplePlugin/views/details.html'`

`});`

It is possible to define multiple views for the same route - in such case each view will become a separate tab accessible under given route:

`c8yViewsProvider.when('/device/:deviceId', {`

`  name: 'Events',`

`  priority: 900,`

`  icon: 'event',`

`  templateUrl: 'plugins/examplePlugin/views/events.html'`

`});`

`c8yViewsProvider.when('/device/:deviceId', {`

`  name: 'Alarms',`

`  priority: 800,`

`  icon: 'alarm',`

`  templateUrl: 'plugins/examplePlugin/views/alarms.html'`

`});`

For each view you can provide the same options as for regular routes defined with standard [$routeProvider](https://docs.angularjs.org/api/ngRoute.$routeProvider). Apart from that you can provide also the following options:

* name - name for a route, will be displayed as a name of a tab,

* icon - icon name from Font Awesome, will be displayed as an icon on a tab,

* priority - determines the order, the higher priority the higher will be a tab on a stack,

* showIf - determines when a tab related to a route should be displayed, accepts function or function with dependencies list in an array.

The following example demonstrates how to use these options:

`c8yViewsProvider.when('/device/:deviceId', {`

`  templateUrl: 'plugins/tracking/views/index.html',`

`  name: 'Tracking',`

`  icon: 'crosshairs',`

`  priority: 450,`

`  showIf: ['$routeParams', 'c8yDevices', function ($routeParams, c8yDevices) {`

`    var deviceId = $routeParams.deviceId;`

`    return c8yDevices.detailCached(deviceId).then(function (res) {`

`      var device = res.data;`

`      return device && (device.c8y_MotionTracking || device.c8y_Geofence);`

`    });`

`  }]`

`});`

## Services

You can use core services as well as your custom ones using AngularJS standard dependency injection mechanism.

### Core services

There are core services which you can use to interact with Cumulocity platform.

#### c8yAlarms

This service allows for managing alarms.

Usage examples:

1. Get filtered list of alarms:

`c8yAlarms.list({`

`  severity: 'MAJOR',`

`  pageSize: 30,`

`  source: deviceId,`

`  resolved: false`

`}).then(function (alarms) {`

`  $scope.alarms = [];`

`  alarms.forEach(function (alarm) {`

`    $scope.alarms.push(alarm);`

`  });`

`});`

2. Get alarm details:

`c8yAlarms.detail(alarmId).then(function (res) {`

`  $scope.alarm = res.data;`

`});`

3. Update alarm details:

`c8yAlarms.update({`

`  id: alarmId,`

`  severity: 'MINOR'`

`});`

#### c8yApplication

This service allows for managing applications.

Usage examples:

1. Get list of applications:

`c8yApplication.list().then(function (applications) {`

`  (...)`

`});`

2. Get application details:

`c8yApplication.detail(applicationId).then(function (res) {`

`  return res.data;`

`})`

`.then(function (application) {`

`  (...)`

`});`

3. Saving application:

`c8yApplication.save({});`

#### c8yAuth

This service is used for maintaining authentication token, adding authentication data to requests, performing logging out action.

#### c8yBase

This is base service for all services that send or receive data from Cumulocity platform containing common properties and functions such as: url, content headers, common paging  and time filters, date format.

#### c8yBinary

This service allows for managing managed objects containing Base64-encoded binary data.

Usage examples:

1. Save binary object:

`var selectedImage = {`

`  c8y_IsBinary: true,`

`  data: 'iVBORw0KGgo(...)AASUVORK5CYII=',`

`  dataType: 'image/png',`

`  name: 'Filename',`

`  size: 14672`

`};`

`c8yBinary.save(selectedImage);`

2. Get Data URI for stored binary object:

`c8yBinary.detail(binaryId).then(function (res) {`

`  $scope.dataUri = c8yBinary.getDataUri(res.data);`

`});`

#### c8yDevices

This service allows for creating, updating, deleting, getting list or getting details as well as contains other helper methods.

Usage examples:

1. Create new device:

`c8yDevices.create({`

`  c8y_CustomFragment: {(...)}`

`});`

2. Get the list of devices:

`c8yDevices.list().then(function (devices) {`

`  $scope.devices.length = 0;`

`  devices.forEach(function (dev) {`

`    $scope.devices.push(dev);`

`  });`

`});`

3. Get filtered list of devices:

`c8yDevices.list().then(function (devices) {`

`  $scope.devices.length = 0;`

`  devices.forEach(function (dev) {`

`    $scope.devices.push(dev);`

`  });`

`});`

4. Get device details:

`c8yDevices.detail(deviceId).then(function (res) {`

`  var deviceObj = res.data;`

`  $scope.device = deviceObj;`

`});`

5. Update device details:

`c8yDevices.save(deviceObj);`

`var devicePartial = {`

`  id: deviceId,`

`  newFragment: {(...)}`

`};`

`c8yDevices.save(devicePartial);`

6. Remove device:

`c8yDevices.remove(deviceId);`

`c8yDevices.remove(deviceObj);`

#### c8yEvents

This service allows for creating, updating, deleting, getting list or getting details of events.

1. Creating an event:

### Custom services

Custom services can be defined just as you define any AngularJS service inside a module. The only thing you need to remember here is that plugin’s custom service must be defined in a file that is included in plugin manifest file.

## Controllers

Similarly you can define controllers that you can use inside your plugin for example in views or when defining routes. They also must be defined in a file included in plugin manifest file.

## Views

You can define as much view templates as needed for a plugin. Then you can reference them using their path when defining routes using `c8yViewsProvider`.

## Styles

You can attach stylesheets to your plugin using plain CSS or LESS stylesheets.

### CSS

In order to attach a CSS stylesheet you need just to append CSS filename to css property in plugin manifest file. Then this CSS file will be included on the website.

### LESS

In order to attach LESS stylesheet you need just to append stylesheets (or just the main one if it includes all other stylesheets) to less property in plugin manifest file. Then all LESS stylesheets will be compiled and the concatenated result of compilation will be included on the website.

## Images

You can use images in your plugins just by referencing them using proper URL paths to them.

### Gallery images

Some of images included within plugin can be used as a screenshots in Plugin Gallery. You need to list all images that you want to be used in Plugin Gallery in plugin manifest file under `gallery` property.


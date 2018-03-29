------
order: 20
title: Weather Plugin
layout: redirect
------

With the following plugin a new widget will be available for dashboards which shows the current weather at the location of a device. The new widget looks like this:

![Weather Widget](/guides/images/plugins/weatherwidget.png)

In order to achieve this goal you need to do the following steps:

* Create a plugin for using the [Dark Sky API](https://darksky.net/dev/).
* Create a plugin for entering the API key.
* Add an item to the navigator menu.
* Create a view where the user can save the API key.
* Create a plugin for the widget.
* Declare the plugins on the imports list of the [application manifest](/guides/web/branding-plugin#application-manifest).
* Add an item to the widget menu list.
* Get the weather for the device.
* Create a view for the widget.

We assume that you already have created an application that you can add the new plugin to. If not, you can use the application provided in the [repository](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) mentioned above. You can also find the example described here in the folders "plugins/weather", "plugins/weatherAdmin" and "plugins/weatherService".

### Create a plugin for using the Dark Sky API

In this case, we recommend you to download the "weatherService" plugin from the [repository](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) and to save it in your application. This plugin provides the possibility to save and load the API key as well as retrieving weather information.

Do not forget to include the plugin in your application manifest:

```console
{
	...
	"imports": [
		...
		"myapplication/weatherService"
	]
}
```

### Create a plugin for entering the API key

Inside your application folder, run the command:

```console
$ c8y create:plugin weatherAdmin
```
Then edit the [plugin manifest](/guides/web/branding-plugin#plugin-manifest) in /plugins/weatherAdmin to add the following information:

```json
{
  "name": "Weather settings",
  "description": "Configure the API key for weather forecasts",
  "icon": "cloud",
  "category": "Administrator",
  "imports": [
    "myapplication/weatherService"
  ]
}
```

We will import the "weatherService" plugin, since it provides us the possibility to load the API key or save the API key the user enters.

Update the application manifest to add this new plugin to the import list.

```console
{
	...
	"imports": [
		...
		"myapplication/weatherAdmin"
	]
}
```

### Add an item to the navigator menu

Next, we have to create a config file, which adds an item to the navigator menu. For that purpose, we can use the service "c8yNavigatorProvider" and "c8yViewsProvider" provided by the [Cumulocity JavaScript API](http://resources.cumulocity.com/documentation/jssdk/latest/). Inject the service into your config and call the following function:

```js
(function () {
  'use strict';

  angular
  .module('myapp.weatherAdmin', [ 'myapp.weatherService' ])
  .config(configure);

  configure.$inject = [
    'c8yNavigatorProvider',
    'c8yViewsProvider',
    'gettext'
  ];

  function configure(c8yNavigatorProvider, c8yViewsProvider, gettext) {
    c8yNavigatorProvider.addNavigation({ // adds a menu item to the navigator with ...
      parent: gettext('Settings'), // ... the category *"Settings"*
      name: gettext('Weather'), // ... the name *"Weather"*
      path: 'weather', // ... */weather* as path
      icon: 'cloud' // ... the cloud icon (icons are provided by the great Font Awesome library and you can use any of their [icon names](http://fontawesome.io/icons/) without the *fa-* prefix here
    });

    c8yViewsProvider.when('/weather', { // when the path "/weather" is accessed ...
      templateUrl: ':::PLUGIN_PATH:::/views/weatherAdmin.html' //  ... display our html file "weatherAdmin.html" inside the "views" folder of our plugin (the plugin's folder is represented using the magic string ```:::PLUGIN_PATH:::```, which is replaced by the actual path during the build process)
    });
  }
}());
```

In our controller, we just need to implement a function for loading the API key and for saving the API key the user entered. For loading the API key, we use the "load" method provided by the "weatherService" plugin.

```js
(function () {
  'use strict';

  angular
    .module('myapp.weatherAdmin')
    .controller('weatherAdminController', weatherAdminController);

  weatherAdminController.$inject = [
    '$scope',
    'c8yTitle',
    'weatherService',
    'gettext'
  ];

  function weatherAdminController($scope, c8yTitle, weatherService, gettext) {
    $scope.updateKey = updateKey;
    weatherService.load().then(function setOpt(key) {
      $scope.key = key;
    });

    c8yTitle.changeTitle({
      title: gettext('Weather provider settings')
    });

    function updateKey() {
      weatherService.save($scope.key);
    }
  }
}());
```

Now that we have added the config and controller to our plugin, we have to specify "myapp.weatherAdmin" as our module and add each javascript file to our plugin manifest:

```json
{
  "name": "Weather settings",
  "description": "Configure the API key for weather forecasts",
  "icon": "cloud",
  "category": "Administrator",
  "imports": [
    "myapplication/weatherService"
  ],
  "ngModules": [
    "myapp.weatherAdmin"
  ],
  "js": [
    "weatheradmin.config.js"
    "weatheradmin.controller.js"
  ]
}
```

### Create a view where the user can save the API key

In our config, we already specified the .html file which contains our view for the navigation item. In this example, our view should show a simple text and input field as well as a button for saving. To add this view to the plugin, create a folder "views" inside your plugin folder, create a file "weatherAdmin.main.html" and add the following content:

```html
<div ng-controller="weatherAdminController">
  <div class="col-lg-6 panel panel-clean">
    <p translate>Weather functionality is based on the <a href="https://darksky.net" target="_blank">Dark Sky</a> service. Usage of Dark Sky requires an API key that can be obtained by registering at <a href="https://darksky.net/dev/" target="_blank">https://darksky.net/dev/</a>. Paste the API key below.</p>
    <form class="form-horizontal" name="weatherAdminForm" novalidate>
      <div class="form-group">
        <label for="key" class="control-label" translate>API Key</label>
        <div ng-class="{'has-error': invalid('license')}">
          <input type="text" class="form-control" required name="key" id="key" ng-model="key" c8y-autocomplete="off">
        </div>
      </div>
      <div class="form-group ">
        <button type="submit" class="btn btn-primary" ng-click="updateKey()"
                ng-disabled="weatherAdminForm.$invalid||weatherAdminForm.$pristine" translate>
          Save
        </button>
      </div>
    </form>
  </div>
</div>
```

### Create a plugin for the widget

Inside your application folder, run the command:

```console
$ c8y create:plugin weather
```
Then edit the [plugin manifest](/guides/web/branding-plugin#plugin-manifest) in /plugins/weather to add the following information:

```json
{
  "name": "Weather",
  "description": "Shows the current weather at the location of a device.",
  "category": "Widgets",
  "icon": "cloud",
  "imports": [
    "myapplication/weatherService"
  ]
}
```

We will import the "weatherService" plugin, since it provides us the possibility to get weather information for a certain location.

Update the application manifest to add this new plugin to the import list.

```console
{
	...
	"imports": [
		...
		"myapplication/weather"
	]
}
```

### Add an item to the widget menu list

Next, we have to create a config file, which adds a menu item to the widget menu list. For that purpose, we can use the service "c8yComponentsProvider" provided by the [Cumulocity JavaScript API](http://resources.cumulocity.com/documentation/jssdk/latest/). Inject the service into your config and call the following function:

```js
(function () {
  'use strict';

  angular
    .module('myapp.weather', [ 'myapp.weatherService' ])
    .config(configure);

  configure.$inject = [
    'c8yComponentsProvider',
    'gettext'
  ];

  function configure(c8yComponentsProvider, gettext) {
    c8yComponentsProvider.add({ // adds a menu item to the widget menu list with ...
      name: 'weather', // ... the identifier *"weather"* which has to be unique among the widgets in the application
      nameDisplay: gettext('Weather'), // ... the displayed name *"weather"*
      description: gettext('Shows the current weather at the location of a device'), // ... a description
      templateUrl: ':::PLUGIN_PATH:::/views/weather.main.html' // ... displaying *"weather.main.html"* when added to the dashboard
    });
  }
}());
```

### Get the weather for the device

In our controller, we get the weather information based on the position of the device which is selected in the widget dialog. If the device changes, the widget will be updated as well.

```js
(function () {
  'use strict';

  angular
  .module('myapp.weather')
  .controller('weatherController', weatherController);

  weatherController.$inject = [
    '$scope',
    '$q',
    'weatherService',
    'gettext',
    'c8yInventory'
  ];

  function weatherController($scope, $q, weatherService, gettext, c8yInventory) {
    $scope.$watch('child.config.device', function reInit(newVal, oldVal) {
      if (newVal && !angular.equals(newVal, oldVal)) {
        init();
      }
    }, true);
    init();

    function init() {
      getDevice().then(tryGetWeather).then(showWeather, printError);
    }

    function getDevice() {
      var deviceId = $scope.child.config.device.id;
      $scope.status = gettext('Retrieving device ...');
      return c8yInventory.detail(deviceId);
    }

    function tryGetWeather(res) {
      $scope.device = res.data;

      if (locationAvailable($scope.device)) {
        $scope.status = gettext('Retrieving weather ...');
        return getWeather($scope.device.c8y_Position);
      }

      $scope.status = gettext('Device has not reported a location, cannot retrieve weather.');
      return $q.reject();
    }

    function locationAvailable(device) {
      return device && device.c8y_Position && device.c8y_Position.lat && device.c8y_Position.lng;
    }

    function getWeather(coordinate) {
      return weatherService.weather.getCurrent(coordinate.lat, coordinate.lng);
    }

    function showWeather(weather) {
      $scope.weather = weather;
      $scope.windDirection = {
        'display': 'inline-block',
        '-ms-transform': rotate(weather),
        '-webkit-transform': rotate(weather),
        'transform': rotate(weather)
      };
      $scope.status = 'ready';
    }

    function printError() {
      $scope.status = gettext('Error retrieving weather information.');
    }

    function rotate(weather) {
      var direction = (weather.currently.windBearing + 180) % 360;
      return 'rotate(' + direction + 'deg)';
    }
  }
}());
```

Now that we have added the config and controller to our plugin, we have to specify "myapp.weather" as our module and add each javascript file to our plugin manifest:

```json
{
  "name": "Weather",
  "description": "Shows the current weather at the location of a device.",
  "category": "Widgets",
  "icon": "cloud",
  "imports": [
    "myapplication/weatherService"
  ],
  "ngModules": [
    "myapplication.weather"
  ],
  "js": [
    "weather.config.js",
    "weather.controller.js"
  ]
}
```

### Create a view for the widget

In our config, we already specified the .html file which contains our view for the widget. In this example, our widget should show a simple table with information about the temperature, pressure, humidity and wind at the position of the device. To add the table to the view, create a folder "views" inside your plugin folder, create a file "weather.main.html" and add the following content:

```html
<div ng-controller="weatherController" style="padding: 10px">
  <div ng-show="status != 'ready'" class="alert alert-info">{{ status }}</div>
  <div ng-show="status == 'ready'">
    <table class="table">
      <tbody>
        <tr>
          <td>{{ 'Weather' | translate }}</td>
          <td>
            <dark-sky-icon icon="{{ weather.currently.icon }}" uib-tooltip="{{weather.currently.summary | translate }}" tooltip-append-to-body="true"></dark-sky-icon>
          </td>
        </tr>
        <tr>
          <td>{{ 'Temperature' | translate }}</td>
          <td>{{weather.currently.temperature}} C</td>
        </tr>
        <tr>
          <td>{{ 'Pressure' | translate }}</td>
          <td>{{weather.currently.pressure}} hPa</td>
        </tr>
        <tr>
          <td>{{ 'Humidity' | translate }}</td>
          <td>{{weather.currently.humidity * 100}} %</td>
        </tr>
        <tr>
          <td>{{ 'Wind' | translate }}</td>
          <td>{{weather.currently.windSpeed}} {{ 'm/s' | translate }}
            <span class="direction" ng-style="windDirection" uib-tooltip="{{weather.currently.windBearing}} {{ 'deg' | translate }}">↑</span>
          </td>
        </tr>
      </tbody>
    </table>
    <a href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a>
  </div>
</div>
```

### Test your plugin

After [deploying](/guides/web/introduction#create-application) the plugin to your tenant, you should be able to create a widget "Weather". Note that you have to enter the API key first to see the weather information.

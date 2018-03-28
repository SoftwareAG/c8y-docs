---
title: Create an AngularJS application
layout: redirect
order: 80
---

To create the AngularJS application, insert the following into the "js/app.js" file:

```js
var app = angular.module('helloCoreApi', [
  'c8y.sdk',
  'ngRoute',
  'ui.bootstrap'
]);
```

"helloCoreApi" is the module name that is used with the `ng-app` directive. Everything between the brackets is a dependency to another module. Cumulocity's services are defined in "c8y.sdk".

```js
app.config([
  '$routeProvider',
  configRoutes
]);

function configRoutes(
  $routeProvider
) {
  $routeProvider
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/:section', {
      templateUrl: 'main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });
}
```

AngularJS uses syntax similar to [AMD](http://requirejs.org/docs/whyamd.html#amd) to declare dependencies. For more information, see [AngularJS DI Guide](https://docs.angularjs.org/guide/di). `$routeProvider` lets you choose which HTML file to load and which controller to execute depending on the route. For example, if your browser goes to [localhost:8080/index.html/#/login](localhost:8080/index.html/#/login), the file "login.html" will be loaded and the controller `LoginCtrl` will be executed. `.when('/:section')` allows the `:section` part of the URL to be anything, and you can access that value from the controller. The `controllerAs` value is important as it will be the variable name that is going to be used in HTML files to access values from the controller (e.g. `login.username`).

```js
app.config([
  'c8yCumulocityProvider',
  configCumulocity
]);
function configCumulocity(
  c8yCumulocityProvider
) {
  c8yCumulocityProvider.setAppKey('core-application-key');
  c8yCumulocityProvider.setBaseUrl('https://my-tenant.cumulocity.com/');
}
```

This is how you configure "c8y.core" to set your application key, tenant and domain that serve Cumulocity applications.

------
order: 30
title: Steps
layout: redirect
------

<ol start="0">
<li>[Check dependency versions](#step-0)</li>
<li>[Setup project structure](#step-1)</li>
<li>[Setup dependencies](#step-2)</li>
<li>[Create "index.html"](#step-3)</li>
<li>[Create an AngularJS app](#step-4)</li>
<li>[Create a login screen](#step-5)</li>
<li>[Create a main screen](#step-6)</li>
<li>[Create device/alarm/event lists](#step-7)</li>
<li>[Implement filtering](#step-8)</li>
<li>[Create a refresh button](#step-9)</li>
</ol>


### 0. Check dependency versions<a name="step-0"></a>

#### Node

Start with checking your node version and make sure that it is `0.10` or newer:

```sh
~ $ node --version
v0.10.39
```

#### Bower

You need Bower installed globally. First check if you have it:

```sh
~ $ bower --version
1.4.1
```

If the "bower" command cannot be found:

```sh
~ $ npm install bower -g
```

To update Bower to the latest version:

```sh
~ $ npm update bower -g
```

#### Grunt CLI

You need the command line interface of Grunt installed globally. First check if you have it:

```sh
~ $ grunt --version
grunt-cli v0.1.13
grunt v0.4.5
```

If the "grunt" command cannot be found:

```sh
~ $ npm install grunt-cli -g
```

To update "grunt-cli" to the latest version:

```sh
~ $ npm update grunt-cli -g
```

### 1. Setup project structure<a name="step-1"></a>

Create the following folder structure for the project:

```
hello-core-api
├── css
├── js
│   ├── alarms_ctrl.js
│   ├── app.js
│   ├── login_ctrl.js
│   ├── main_ctrl.js
│   └── section_dir.js
├── sections
│   ├── alarms.html
│   ├── devices.html
│   └── events.html
├── bower.json
├── Gruntfile.js
├── index.html
├── login.html
├── main.html
└── package.json
```

Copy the CSS files from [the example project](https://bitbucket.org/m2m/cumulocity-examples) under the folder "hello-core-api/css".

### 2. Setup dependencies<a name="step-2"></a>

Copy the following into the "bower.json" file:

```js
{
  "name": "hello-core-api",
  "dependencies": {
    "bootstrap": "~3.3.5",
    "angular-route": "1.5.8",
    "cumulocity-clients-javascript": "latest",
    "angular-ui-bootstrap-bower": "0.11.0"
  }
}
```

This JSON file defines modules and libraries that our example project depends on. Now you can run the following:

```sh
hello-core-api $ bower install
```

***

Copy the following into the "package.json" file:

```js
{
  "name": "hello-core-api",
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-http-server": "^1.4.0",
    "http-server": "^0.8.0"
  }
}
```

We are going to use "http-server" as a mini HTTP server that serves static files (because browsers prohibit making AJAX requests from a "file://" domain). Now install the dependencies:

```sh
hello-core-api $ npm install
```

***

Copy the following into the "Gruntfile.js" file:

```js
module.exports = function(grunt) {
  grunt.config('http-server.dev', {
    port: 8080,
    host: "0.0.0.0",
    ext: "html",
    runInBackground: false,
  });
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('server', ['http-server:dev']);
};
```

This registers a grunt task to start the HTTP server.

### 3. Create "index.html"<a name="step-3"></a>

Create the "index.html" file:

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.css">
    <link href="css/login.css" rel="stylesheet">
    <link href="css/dashboard.css" rel="stylesheet">

    <!-- Put cumulocity JavaScript dependencies here such as angular, lodash etc. You can copy them from the example project. -->
    <!--<script src="bower_components/angular/angular.js"></script>-->

    <script src="bower_components/cumulocity-clients-javascript/build/main.js"></script>
    <script src="js/app.js"></script>
    <script src="js/login_ctrl.js"></script>
    <script src="js/main_ctrl.js"></script>
    <script src="js/section_dir.js"></script>
  </head>
  <body ng-app="helloCoreApi">
    <ng-view />
  </body>
</html>
```

Now you can run the following:

```sh
hello-core-api $ grunt server
```

If you visit [http://localhost:8080](http://localhost:8080) in your browser, it should load an empty page, with a bunch of errors in the browser console, because some JavaScript files cannot be found.

* `ng-app`: bootstraps an AngularJS app, from a module defined with given name.
* `ng-view`: `angular-route` directive that loads partial HTML files as defined in routes configuration.

### 4. Create an AngularJS application<a name="step-4"></a>

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

### 5. Create a login screen<a name="step-5"></a>

![Login screen](/guides/images/smart-toolkit/login.png)

Create a login screen by using the following code. "c8y.core" will not work without specifying a tenant, username and password, so you explicitly have to set it in "src/login_ctrl.js":

```js
angular.module('helloCoreApi').controller('LoginCtrl', [
  '$location',
  '$rootScope',
  'c8yUser',
  LoginCtrl
]);

function LoginCtrl(
  $location,
  $rootScope,
  c8yUser
) {

  c8yUser.current().then(function () {
    $location.path('/');
    $rootScope.c8y.user = c8yUser;
  });

  this.credentials = {};
  this.onSuccess = function () {
    $location.path('/');
  };
}
```

`c8yUser.current` returns a `Promise` of the currently logged in user. If a user is already logged in, a redirection to "/" is triggered. In addition, we define the  function `onSuccess` that also redirects the application to "/".

```html
<div class="container">
  <form class="form-signin">
    <h2 class="form-signin-heading">Please login</h2>
    <label for="inputTenant" class="sr-only">Tenant</label>
    <input type="text" id="inputTenant" class="form-control" placeholder="Tenant" autofocus="" ng-model="login.tenant">
    <label for="inputUsername" class="sr-only">Username</label>
    <input type="text" id="inputUsername" class="form-control" placeholder="Username" required="" autofocus="" ng-model="login.username">
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" ng-model="login.password">
    <div class="checkbox">
      <label>
        <input type="checkbox" ng-model="login.rememberMe"> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit" c8y-login
      data-tenant="login.tenant"
      data-user="login.username"
      data-password="login.password"
      data-remember-me="login.rememberMe"
      on-success="login.onSuccess()"
    >Sign in</button>
  </form>
</div>
```

`ng-model` is very well [documented by AngularJS](https://docs.angularjs.org/api/ng/directive/ngModel). The `c8y-login` directive is defined in the "c8y.core" module. It logs in the user for which credentials are provided. It has the following signature:

```html
<ANY c8y-login
  tenant="tenantName"
  user="username"
  password="password"
  remember-me="true|false"
  on-success="onSuccessCallback"
  on-failure="onFailureCallback">
</ANY>
```

If you visit [localhost:8080/index.html/#/login](http://localhost:8080/index.html/#/login), you should see the login screen. You can type in your credentials and login, but we still have nothing at [localhost:8080/#/](http://localhost:8080/#/).

If you want to omit the tenant field in the login screen, you can set the tenant once using `c8yCumulocityProvider.setTenant` in the config phase.

### 6. Create a main screen<a name="step-6"></a>

![Main screen](/guides/images/smart-toolkit/main.png)

The main screen consists of a top navigator, left navigator and a content area. When we implement the device, alarm and event screens, content will be visible, but for now we will concentrate on the main screen. Add the following functionality to the "js/main_ctrl.js" file:

```js
angular.module('helloCoreApi').controller('MainCtrl', [
  '$location',
  '$routeParams',
  '$rootScope',
  'c8yAuth',
   MainCtrl
]);
var loggedIn = false;

function MainCtrl(
  $location,
  $routeParams,
  $rootScope,
  c8yAuth
) {

  $rootScope.$on('authStateChange', function (evt, state) {
    loggedIn = state.hasAuth;
  });

  c8yAuth.initializing.then(function() {
    if(!loggedIn) {
      $location.path('/login');
    }
  });

  this.currentSection = $routeParams.section;
  this.sections = {
    Devices: 'devices',
    Alarms: 'alarms',
    Events: 'events'
  };
  this.filter = {};

  this.logout = function () {
    $location.path('/login');
  };
}
```

We redirect to the login screen, if the current user's `state.hasAuth` equals `false`. We assign `currentSection` to `this` so that it can be accessed from "main.html". `this.sections` is a key-value dictionary of menu label and section name pairs. `this.filter` is used to have one synchronized filter object for a whole section. `this.logout` will be used as a logout callback. Now for "main.html":

```html
<div ng-if="c8y.user">
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header" ng-init="isCollapsed = true">
        <button type="button" class="navbar-toggle collapsed" ng-click="isCollapsed = !isCollapsed" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" ng-href="#/">Cumulocity</a>
      </div>
      <div id="navbar" class="navbar-collapse" collapse="isCollapsed">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="" ng-click="main.logout()" c8y-logout>Logout</a></li>
        </ul>
        <p class="navbar-text navbar-right">Hello {{c8y.user.firstName}}</p>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <li
            ng-repeat="(sectionLabel, section) in main.sections"
            ng-class="{'active': main.currentSection === section}">
            <a href="" ng-href="#/{{section}}">{{sectionLabel}}</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" ng-switch="!!main.currentSection">
        <div ng-switch-when="true">
          <eg-section service="{{main.currentSection}}" filter="main.filter" refresh="main.refresh">
            <ng-include src="['sections/', main.currentSection, '.html'].join('')">
            </ng-include>
          </eg-section>
        </div>
      </div>
    </div>
  </div>
</div>

```

`c8y-logout` is a directive that removes all user and session information from "c8y.core", when clicked. It can be used in conjunction with `ng-click`, which is executed after the logout is complete. Its signature is as follows:

```html
<ANY c8y-logout>
</ANY>
```

`eg-section` is a directive that we will create in *step 7*. It renders a table to display either device, alarm or event list depending on the value of `main.currentSection`. The content between its tags will be put above the rendered table, using `ng-transclude`. We will use that capability to render components that filter lists.

`c8y.user` is an object that is available, if there is a logged in Cumulocity user. It is defined on [`$rootScope`](https://docs.angularjs.org/api/ng/service/$rootScope). To learn more about the user object structure, see the [documentation](http://resources.cumulocity.com/documentation/jssdk/latest/#/api/c8y.core.service:c8yUser).

The rest is simple AngularJS such as `ng-switch` and `ng-repeat` about which you can get more information from the AngularJS documentations.

Try and visit [localhost:8080/index.html/#/](http://localhost:8080/index.html/#/) now.

### 7. Create device/alarm/event lists<a name="step-7"></a>

![Devices screen](/guides/images/smart-toolkit/devices.png)

As all section screens, the screens for devices, alarms and events, will share a common functionality defined in "js/section_dir.js":

```js
angular.module('helloCoreApi').controller('SectionCtrl', [
  '$scope',
  SectionCtrl
]).directive('egSection', [
  egSection
]);

function SectionCtrl(
  $scope
) {
  this.filter = $scope.filter || {};
  this.filter.pageSize = 10;
  this.service = $scope.service;
  $scope.$watch('section.refresh', function (val) {
    $scope.refresh = val;
  });
}

function egSection(
) {
  return {
    restrict: 'AE',
    templateUrl: 'section.html',
    controller: 'SectionCtrl',
    controllerAs: 'section',
    transclude: true,
    replace: true,
    scope: {
      service: '@',
      filter: '=?',
      refresh: '=?'
    }
  };
}
```

The lists also share a view defined in "section.html":

```html
<div>
  <div ng-transclude></div>
  <p class="text-warning">Page size is {{section.filter.pageSize}} by default. See <code>pageSize</code> filter.</p>
  <table class="table">
    <h2>List</h2>
    <tr c8y-repeat="x in {{section.service}}" filter="section.filter" refresh="section.refresh">
      <td>{{x.id}}</td>
      <td>{{x.type}}</td>
      <td>{{x.text}}</td>
      <td>{{x.name}}</td>
      <td>{{x.severity}}</td>
    </tr>
  </table>
</div>
```

We define a directive `eg-section` that will be used for all section screens. It makes use of the [`ngTransclude`](https://docs.angularjs.org/api/ng/directive/ngTransclude), [`$watch`](https://docs.angularjs.org/api/ng/type/$rootScope.Scope) and [`controllerAs`](https://docs.angularjs.org/api/ng/directive/ngController) syntax. It assigns `filter.pageSize` to 10. If you are familiar with the [Cumulocity REST API](https://www.cumulocity.com/guides/reference/rest-implementation/), you should have noticed we are limiting the number of result objects that are returned from GET-requests.

The decisive component here is the `c8y-repeat` directive. Its signature is as follows:

```html
<ANY
  c8y-repeat="repeat_expression"
  filter="optionalFilter"
  refresh="optionalFunction">
...
</ANY>
```

`repeat_expression` can be an expression similar to `someVar in *`, where `*` can be one of the supported services. See the bottom of this document.

We use the `controllerAs` syntax here as we did when we defined the routes. You can use `refresh` set by `c8y-repeat` to refresh the data. Note that you must obey to the [dot rule](https://www.youtube.com/watch?v=DTx23w4z6Kc) as it uses two-way data-binding.

For supported filters, see the respective [service documentation](http://resources.cumulocity.com/documentation/jssdk/latest/#/api/c8y.core).

Now we have a fully functional web application that can list devices, alarms and events.

### 8. Implement filtering<a name="step-8"></a>

In this part, we will implement device filtering by text and alarm filtering by severity.

#### Device search

![Device search screen](/guides/images/smart-toolkit/fdevices.png)

Add the following to "sections/devices.html" at the beginning, inside the tag `<div ng-controller=...`:

```html
<form ng-submit="main.filter.text = main.textFilter">
  <div class="input-group">
    <input type="text" ng-model="main.textFilter" class="form-control" placeholder="Filter with device name...">
    <span class="input-group-btn">
      <button type="submit" class="btn btn-default" type="button">Submit</button>
    </span>
  </div>
</form>
```

There are `main.filter.text` and `main.textFilter` variables which are almost the same thing but differ a little. `c8y-repeat` will refresh its data when the filter changes. Because we do not want it to be refreshed each time the user types in a character in the search field, we use two separate variables and synchronize them in `ng-submit`.

Now check [localhost:8080/index.html/#/devices](http://localhost:8080/index.html/#/devices) again.

#### Alarm filtering by severity

Alarm filtering by severity will be more verbose so let us create a controller in "js/alarms_ctrl.js" first:

```js
angular.module('helloCoreApi').controller('AlarmsCtrl', [
    AlarmsCtrl
  ]);

  function AlarmsCtrl(
  ) {
    this.severities = [
      {name: 'Critical', value: 'CRITICAL', cls: 'btn-danger'},
      {name: 'Major', value: 'MAJOR', cls: 'btn-warning'},
      {name: 'Minor', value: 'MINOR', cls: 'btn-primary'},
      {name: 'Warning', value: 'WARNING', cls: 'btn-info'}
    ];

    this.onClick = function (filter, severity) {
      if (filter.severity === severity.value) {
        filter.severity = undefined;
      } else {
        filter.severity = severity.value;
      }
    };

    this.isActive = function (filter, severity) {
      return filter.severity === severity.value;
    };
  }
```

The respective HTML file looks as follows:

```html
<div ng-controller="AlarmsCtrl as alarms" class="btn-group alarm-severity" role="group" aria-label="...">
  <style>
  .alarm-severity .btn:focus {
    outline: none;
  }
  </style>
  <button
    ng-repeat="severity in alarms.severities"
    class="btn {{severity.cls}}"
    ng-class="{'active': alarms.isActive(main.filter, severity)}"
    ng-click="alarms.onClick(main.filter, severity)">
    {{severity.name}}
  </button>
</div>
```

For this filtering, we define an array of objects that can represent alarm severities. Iterating over them using `ng-repeat` is trivial. When one of them is clicked, it either toggles off and sets `filter.severity` to `undefined`, or actually sets the severity. As `c8y-repeat` refreshes automatically when the filter changes, there is nothing else we have to do.

### 9. Create a refresh button<a name="step-9"></a>

In this final example, we will not create a filter. As we will not have a filter, we need another way of refreshing data. Here is how we do it in "sections/events.html":

```html
<div>
  <button class="btn btn-default pull-right" ng-click="main.refresh()" class="margin-bottom:2em">Refresh</button>
</div>
```

If you have not figured already, there is a two-level chain of two-way bindings in this example. The `eg-section` directive binds `main.refresh` and `section.refresh` to each other. `c8y-repeat` binds `section.refresh` to its own private refresh function. Inside "events.html", we have no access to `section` because it is *ngIncluded* inside "main.html" and not "section.html".
---
title: Smart Apps Toolkit v1.0
layout: default
---

## Overview

*Smart Apps Toolkit* allows you to create [AngularJS](https://angularjs.org/) components that are connected to Cumulocity ecosystem. With `c8y.sdk`, you can use *AngularJS* services as documented [here](http://resources.cumulocity.com/documentation/jssdk/latest/). In this document, we describe step-by-step how to create a simple *AngularJS* application using *c8y.sdk*. For the basic concepts of Cumulocity applications, please see [Developing applications](/guides/concepts/applications). For reference information, please see the [Plugins reference](/guides/web/reference).

The result of this tutorial is available at [https://bitbucket.org/m2m/cumulocity-examples](https://bitbucket.org/m2m/cumulocity-examples) under folder `hello-core-api`. If you wish to run it, either clone the repo or download it from bitbucket and do as follows:

> Go to `hello-core-api/js/app.js` and find the lines with `c8yCumulocityProvider`. Use `c8yCumulocityProvider.setAppKey` and `c8yCumulocityProvider.setBaseUrl` to set your application key and your *Cumulocity domain*. Then:

> ```sh
$ cd hello-core-api
$ npm install
$ bower install
$ grunt server
```

Now go to [localhost:8080/](http://localhost:8080) in your browser.

## Prerequisites

You should be familiar with the following technologies:

* [HTML5](http://www.w3schools.com/html/html5_intro.asp) and [CSS](http://www.w3schools.com/css/css3_intro.asp).
* [JavaScript](http://www.w3schools.com/js/).
* [AngularJS](https://angularjs.org/).
* [Grunt](http://gruntjs.com/).'
* [kriskowal/q](https://github.com/kriskowal/q), an informal introduction can be found at [www.promisejs.org](https://www.promisejs.org/).

You will need the following prerequisites for being able to develop plugins and to execute the examples:

* You will need [Node.js](http://nodejs.org/) (0.10 or newer, stable) and [Grunt](http://gruntjs.com/) installed.
* You will need access to your Cumulocity account, i.e. you need your tenant name, username and password.

If you are sure that you have `node`, `grunt` and `bower` installed on your system, you can skip to *Step 1*.

## Steps

<ol start="0">
<li>[Check dependency versions](#step-0)</li>
<li>[Setup project structure](#step-1)</li>
<li>[Setup dependencies](#step-2)</li>
<li>[Create `index.html`](#step-3)</li>
<li>[Create an AngularJS app](#step-4)</li>
<li>[Create login screen](#step-5)</li>
<li>[Create main screen](#step-6)</li>
<li>[Create device/alarm/event lists](#step-7)</li>
<li>[Implement filtering](#step-8)</li>
<li>[Create a refresh button](#step-9)</li>
</ol>


## 0. Check dependency versions<a name="step-0"></a>

#### `node`
Start with checking your node version and make sure that it is `0.10` or newer:
```sh
~ $ node --version
v0.10.39
```

#### `bower`
You need `bower` installed globally. First check if you have it:
```sh
~ $ bower --version
1.4.1
```
If `bower` command cannot be found:
```sh
~ $ npm install bower -g
```
To update `bower` to the latest version:
```sh
~ $ npm update bower -g
```
#### `grunt-cli`
You need `grunt-cli` installed globally. First check if you have it:
```sh
~ $ grunt --version
grunt-cli v0.1.13
grunt v0.4.5
```
If `grunt` command cannot be found:
```sh
~ $ npm install grunt-cli -g
```
To update `grunt-cli` to the latest version:
```sh
~ $ npm update grunt-cli -g
```

## 1. Setup project structure<a name="step-1"></a>

Create the following folder structure for the project:

```
hello-core-api
.
├── Gruntfile.js
├── bower.json
├── css
├── index.html
├── js
│   ├── alarms_ctrl.js
│   ├── app.js
│   ├── login_ctrl.js
│   ├── main_ctrl.js
│   └── section_dir.js
├── login.html
├── main.html
├── package.json
├── section.html
└── sections
    ├── alarms.html
    ├── devices.html
    └── events.html
```
Copy `css` files from [the example project](https://bitbucket.org/m2m/cumulocity-examples) under folder `hello-core-api/css`.

## 2. Setup dependencies<a name="step-2"></a>

Copy the following into `bower.json`:
```js
{
  "name": "hello-core-api",
  "dependencies": {
    "bootstrap": "~3.3.5",
    "angular-route": "1.2.20",
    "cumulocity-clients-javascript": "latest"
  }
}
```

This `json` file defines modules/libraries that our example project depends on. Now you can run the following:
```sh
hello-core-api $ bower install
```
***
Copy the following into `package.json`:
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
We are going to use `http-server` as a mini http server that serves static files (because browsers prohibit making AJAX requests from a `file://` domain). Now install dependencies:
```sh
hello-core-api $ npm install
```
***
Copy the following into `Gruntfile.js`:
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
This registers a `grunt` task to start http server.

## 3. Create `index.html`<a name="step-3"></a>

Now let's create the `index.html` file:
```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.css">
    <link href="css/login.css" rel="stylesheet">
    <link href="css/dashboard.css" rel="stylesheet">

    <!-- Put cumulocity Javascript dependencies here such as angular, lodash etc. You can copy them from the example project. -->
    <!--<script src="bower_components/angular/angular.js"></script>-->

    <script src="bower_components/cumulocity-clients-javascript/build/main.js"></script>
    <script src="js/app.js"></script>
    <script src="js/login_ctrl.js"></script>
    <script src="js/main_ctrl.js"></script>
    <script src="js/section_ctrl.js"></script>
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
If you visit [http://localhost:8080](http://localhost:8080) from your browser, it should load an empty page, with a bunch of errors in browser console because some Javascript files cannot be found.
* `ng-app`: bootstraps an AngularJS app, from a module defined with given name.
* `ng-view`: `angular-route` directive that loads partial `HTML` files as defined in routes configuration.

## 4. Create an AngularJS app<a name="step-4"></a>
Let's create the AngularJS app. In `js/app.js`:
```js
var app = angular.module('helloCoreApi', [
  'c8y.sdk',
  'ngRoute',
  'ui.bootstrap'
]);
```
`helloCoreApi` is the module name that is used with `ng-app` directive. Everything between brackets are dependencies to other modules. Cumulocity services are defined in `c8y.core`.

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
AngularJS uses syntax similar to [AMD](http://requirejs.org/docs/whyamd.html#amd) to declare dependencies. For more information see [AngularJS DI Guide](https://docs.angularjs.org/guide/di). `$routeProvider` lets you choose which HTML file to load and which controller to execute depending depending on the route. For example, if browser goes to [localhost:8080/index.html/#/login](localhost:8080/index.html/#/login), `login.html` will load and `LoginCtrl` will be executed. `.when('/:section')` allows `:section` part of the URL to be anything, and you can access that value from controllers. `controllerAs` value is important as it will be the variable name that is going to be used in HTML files to access controller values (e.g. `login.username`).

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
This is how you configure `c8y.core` to set your application key, tenant and domain that serves Cumulocity application.

## 5. Create login screen<a name="step-5"></a>

![Login screen](/guides/smart-toolkit/login.png)

Let's create a login screen. `c8y.core` won't work without tenant,username and password set; so you need it.

`src/login_ctrl.js`:
```js
angular.module('helloCoreApi').controller('LoginCtrl', [
  '$location',
  'c8yUser',
  LoginCtrl
]);

function LoginCtrl(
  $location,
  c8yUser
) {
  c8yUser.current().then(function () {
    $location.path('/');
  });
  this.onSuccess = function () {
    $location.path('/');
  };
}
```
That was easy right? `c8yUser.current` returns a `Promise` of currently logged in user. If a user is already logged in, a redirection to `/` is triggered. We define `onSuccess` function that redirects the application to `/`.

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
`ng-model` is very well documented by AngularJS [here](https://docs.angularjs.org/api/ng/directive/ngModel). `c8y-login` directive is defined in `c8y.core` module. It logs in the user for which credentials are provided and it has the following signature:
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

If you want to omit tenant field in login screen, you can set tenant once using `c8yCumulocityProvider.setTenant` function in the config phase.

## 6. Create main screen<a name="step-6"></a>

![Main screen](/guides/smart-toolkit/main.png)

The main screen is consisted of a top navigator, left navigator and a content area. When we implement device/alarm/event screens, content will be visible but for now, let's concentrate on the task on hand:

`js/main_ctrl.js`:
```js
angular.module('helloCoreApi').controller('MainCtrl', [
  '$location',
  '$routeParams',
  'c8yUser',
   MainCtrl
]);

function MainCtrl(
  $location,
  $routeParams,
  c8yUser
) {
  c8yUser.current().catch(function () {
    $location.path('/login');
  });

  if (!$routeParams.section) {
    $location.path('/devices');
  }

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
Similar to what we have done in login, we redirect to login screen if current user promise fails. In addition, we check if `$routeParams.section` exists or not (remember `when('/:section')`?). If it doesn't, then we redirect it to devices screen as an empty content won't make sense. We assign `currentSection` onto `this` to be able to access it from `main.html`. `this.sections` is a key-value dictionary of menu label, section name pairs. 'this.filter' is used to have one synchronized filter object for a whole section. `this.logout` will be used as a logout callback. Now for `main.html`:

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
`c8y-logout` is a directive that removes all user and session information from `c8y.core`, when clicked. It can be used in conjunction with `ng-click`, which is executed after logout is complete. Its signature is as follows:
```html
<ANY c8y-logout>
</ANY>
```
`eg-section` is a directive that we will create in *step 7*. It renders a table to display either device, alarm or event list depending on the value of `main.currentSection`. The content between its tags will be put above the rendered table, using `ng-transclude`. We will use that capability to render  components that filter lists.

`c8y.user` is an object that is available when there exists a logged in Cumulocity user. It is defined on [`$rootScope`](https://docs.angularjs.org/api/ng/service/$rootScope). To learn more about the user object structure, see [c8yUser documentation](http://resources.cumulocity.com/documentation/jssdk/latest/#/core/c8y.core.service:c8yUser).

The rest is simple AngularJS directives such as `ng-switch`, `ng-repeat` about which you can get more information from AngularJS docs.

Why don't you give [localhost:8080/index.html/#/](http://localhost:8080/index.html/#/) a try now?

## 7. Create device/alarm/event lists<a name="step-7"></a>

![Devices screen](/guides/smart-toolkit/devices.png)

As all section screens; namely devices, alarms and events, will share common functionality, let's start with creating `js/section_dir.js`:

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

`section.html`:
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

We define a directive `eg-section` that will be used for all section screens. It makes use of [`ngTransclude`](https://docs.angularjs.org/api/ng/directive/ngTransclude), [`$watch`](https://docs.angularjs.org/api/ng/type/$rootScope.Scope) and [`controller as`](https://docs.angularjs.org/api/ng/directive/ngController) syntax. It assigns `filter.pageSize` to 10. If you are familiar with [Cumulocity REST API](https://www.cumulocity.com/guides/reference/rest-implementation/), you should have noticed we are limiting the number of result objects that are returned from `GET` requests.

The game breaker here is `c8y-repeat` directive. Its signature is as follows:
```html
<ANY
  c8y-repeat="repeat_expression"
  filter="optionalFilter"
  refresh="optionalFunction">
...
</ANY>
```
`repeat_expression`: `someVar in *` where `*` can be one of  supported services. See bottom of this document.

We use `controller as` syntax here as we did when we defined routes. `refresh` is set by `c8y-repeat`, then you can use it to refresh the data. Note that you must obey to the [dot rule](https://www.youtube.com/watch?v=DTx23w4z6Kc) as it uses 2-way data-binding.

For supported filters, see respective service documentation at [resources.cumulocity.com/documentation/jssdk/latest/#/core](http://resources.cumulocity.com/documentation/jssdk/latest/#/core).

Now we have a fully functional web application that can list devices, alarms and events.

## 8. Implement filtering<a name="step-8"></a>
In this part, we will implement device filtering by text and alarm filtering by severity.

#### Device search

![Device search screen](/guides/smart-toolkit/fdevices.png)

Add the following to `sections/devices.html` at the beginning, inside `<div ng-controller=...`:

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

There are `main.filter.text` and `main.textFilter` variables which are almost the same thing but differs a little. `c8y-repeat` will refresh its data when filter changes. Because we don't want it to be refreshed each time user types in a character in the search field, we use two separate variables and synchronize them in `ng-submit`.

Now check [localhost:8080/index.html/#/devices](http://localhost:8080/index.html/#/devices) again.

#### Alarm filtering by severity

Alarm filtering by severity will be more verbose so let's create a controller first at `js/alarms_ctrl.js`:

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

`HTML`:
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

For this filtering, we define an array of objects that can represent alarm severities. Iterating over them using `ng-repeat` is trivial. When one of them is clicked, it either toggles off and sets `filter.severity` to `undefined`, or actually sets the severity. As `c8y-repeat` refreshes automatically when filter changes, that's all we have to do.

## 9. Create a refresh button<a name="step-9"></a>

In this final example, we won't create a filter. As we won't have a filter, we need another way of refreshing data. Here is how we do it in `sections/events.html`:

```html
<div>
  <button class="btn btn-default pull-right" ng-click="main.refresh()" class="margin-bottom:2em">Refresh</button>
</div>
```

If you haven't figured already, there's a 2-level chain of 2-way bindings in this example. `eg-section` directive binds `main.refresh` and `section.refresh` to each other. `c8y-repeat` binds `section.refresh` to its own private refresh function. Inside `events.html`, we have no access to `section` because it is *ngIncluded* inside `main.html` and not `section.html`.

## Conclusion

You have created an AngularJS app from scratch using `c8y.core` API, better known as *Smart Apps Toolkit*. Congratulations!

***

#### Supported Services for `c8y-repeat`
* Devices
* Alarms
* Events
* Inventory

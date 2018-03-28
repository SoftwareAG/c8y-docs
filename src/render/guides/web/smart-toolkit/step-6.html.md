---
title: Create a main screen
layout: redirect
order: 100
---

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

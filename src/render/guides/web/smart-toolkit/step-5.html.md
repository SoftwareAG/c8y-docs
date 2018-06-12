---
title: Create a login screen
layout: redirect
order: 90
---

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

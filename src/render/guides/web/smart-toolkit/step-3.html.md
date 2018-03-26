---
title: Create "index.html"
layout: redirect
order: 70
---

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

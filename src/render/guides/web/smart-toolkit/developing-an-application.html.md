------
order: 10
title: Developing an application
layout: redirect
------

The following section will guide you through the process of building a simple AngularJS application using the Web SDK. The resulting solution is available at [https://bitbucket.org/m2m/cumulocity-examples](https://bitbucket.org/m2m/cumulocity-examples) under the folder "hello-core-api". If you wish to run it, either clone the repository or download it from bitbucket and do as follows:

* Go to "hello-core-api/js/app.js" and find the lines with `c8yCumulocityProvider`. Use `c8yCumulocityProvider.setAppKey` and `c8yCumulocityProvider.setBaseUrl` to set your application key and your *Cumulocity domain*. Then:

```sh
$ cd hello-core-api
$ npm install
$ bower install
$ grunt server
```

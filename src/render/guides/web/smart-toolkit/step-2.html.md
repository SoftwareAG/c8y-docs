---
title: Setup dependencies
layout: redirect
order: 60
---

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

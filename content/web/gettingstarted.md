---
weight: 20
title: Getting started
layout: bundle
---

First install the Command Line Interface (CLI) which helps you with bootstrapping an application:

```
$ npm install -g @c8y/cli
```

Next, bootstrap a new blank application with the `new` command:

```
$ c8ycli new myApp
```

> **Info:** When you want to see the possibilities and implementation details of the Web SDK you should try the tutorial application. You can install it by running `c8ycli new <<your-app-name>> tutorial`.

Once the CLI installation is completed, change to the newly created folder and run `npm install`:

```
$ cd myapp
$ npm install
```

After all packages are installed you can start the application by running:

```
$ npm start
```

If you point your browser to `http://localhost:9000/apps/myapp/` you will get a login screen which proxies to the tenant defined in the start script. If you cannot log in, it might be pointing to the wrong instance. To change the proxy to your tenant URL change the `start` script in the script section of the newly created package.json:

```json
{
  "start": "c8ycli server -u http://your-tenant.my-provider.com"
}
```

After logging in you should see a barely empty starter application. If you want to start with a more complex example read the documentation about [@c8y/apps](/web/libraries/#application). If you want to build and deploy your application read more about the necessary commands of the [developer command line tool](/web/development-tools/#c8y-cli).

> **Info**: If you want to extend an existing application like Cockpit you can spin up a hybrid application. This allows you to combine existing AngularJS plugins into the new Web SDK, see [Migration](/web/upgrade/#migration).

> **Info**: You need to provide your tenant name or the tenant ID on login (as the application cannot derive it from the URL on localhost). If you don't know your tenant name or the tenant ID you can use the [REST API to request it](/reference/tenants/#get-the-current-tenant-details).

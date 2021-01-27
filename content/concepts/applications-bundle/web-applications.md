---
weight: 20
title: Web applications
layout: redirect
---

### Overview

A Cumulocity IoT web application can be a

* a user interface application built on any web framework of your choice
* a user interface application built using the Cumulocity IoT user interface framework as a set of user interface plugins.

All subscribed web applications of a tenant appear in the application switcher on the top right of the Cumulocity IoT UI, so that users can navigate between the applications. They are hosted by Cumulocity IoT and the application will be made available through a URL &lt;tenant&gt;.cumulocity.com/apps/&lt;application&gt;.

<img src="/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">

The Cumulocity IoT UI itself is built around a framework based on AngularJS and Bootstrap, the modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins so that developers can create their own configurations of the Cumulocity IoT user interfaces. For more information on developing plugins, refer to [Web SDK for plugins](/web/overview).

### Deploying web applications

For an application to be available it has to be deployed on the Cumulocity IoT platform.

For details on how to deploy an application to Cumulocity IoT, refer to [Administration > Managing applications](/users-guide/administration/#managing-applications) in the User guide.

> **Info:** In case of a web application, the application is active for you as owner without subscribing to it.

### Web application hosting

You can host your own HTML5 and JavaScript web applications through Cumulocity IoT by using the application manager under **Own applications** in the Cumulocity IoT Administration application.

![List of own applications](/images/users-guide/Administration/admin-applications-own.png)

For details refer to  [Administration > Managing applications](/users-guide/administration/#managing-applications) in the User guide.

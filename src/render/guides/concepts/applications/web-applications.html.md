---
order: 20
title: Cumulocity web applications
layout: redirect
---

### Overview

A Cumulocity web application can be a

* a user interface application built on any web framework of your choice
* a user interface application built using the Cumulocity user interface framework as a set of user interface plugins.

All subscribed web applications of a tenant appear in the application switcher on the top right of Cumulocity, so that users can navigate between the applications. They are hosted by Cumulocity and the application will be made available through a URL &lt;tenant&gt;.cumulocity.com/apps/&lt;application&gt;.

<img src="/guides/images/concepts-guide/Admin_AppSwitcher.png" alt="App switcher" style="max-width: 50%">

The Cumulocity user interface itself is built around a framework based on AngularJS and Bootstrap, the modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins so that developers can create their own configurations of the Cumulocity user interfaces. For more information on developing plugins, refer to the [Web SDK for Plugins](/guides/web/introduction) in the Web Developer's Guide.

### Deploying web applications

For an application to be available it has to be deployed at the Cumulocity platform. 

For details on how to deploy an application to Cumulocity, refer to [Administration > Managing applications](/guides/users-guide/administration#applications) in the User`s Guide. 

> **Info:** In case of a web application, the application is active for you as owner without subscribing to it.

### Web application hosting

You can host your own HTML5 and JavaScript web applications through Cumulocity by using the application manager under "Own applications" in the Cumulocity Administration application.

![List of own applications](/guides/images/concepts-guide/Admin_OwnApplications.png)

For details refer to  [Administration > Managing applications](/guides/users-guide/administration#applications) in the User's Guide. 

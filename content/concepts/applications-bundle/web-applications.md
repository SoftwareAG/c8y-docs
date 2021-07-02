---
weight: 20
title: Web applications
layout: redirect
---

### Overview

A {{< product-name-1 >}} web application can be a

* a user interface application built on any web framework of your choice
* a user interface application built using the {{< product-name-1 >}} user interface framework as a set of user interface plugins.

All subscribed web applications of a tenant appear in the application switcher on the top right of the{{< product-name-1 >}} UI, so that users can navigate between the applications. They are hosted by {{< product-name-1 >}} and the application will be made available through a URL &lt;tenant&gt;.{{< URL >}}/apps/&lt;application&gt;.

<img src="/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">

The {{< product-name-1 >}} UI itself is built around a framework based on AngularJS and Bootstrap, the modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins so that developers can create their own configurations of the {{< product-name-1 >}} user interfaces. For more information on developing plugins, refer to [Web SDK for plugins](/web/overview).

### Deploying web applications

For an application to be available it has to be deployed on the {{< product-name-1 >}} platform.

For details on how to deploy an application to {{< product-name-1 >}}, refer to [Administration > Managing applications](/users-guide/administration/#managing-applications) in the User guide.

> **Info:** In case of a web application, the application is active for you as owner without subscribing to it.

### Web application hosting

You can host your own HTML5 and JavaScript web applications through {{< product-name-1 >}} by using the application manager under **Own applications** in the {{< product-name-1 >}} Administration application.

![List of own applications](/images/users-guide/Administration/admin-applications-own.png)

For details refer to  [Administration > Managing applications](/users-guide/administration/#managing-applications) in the User guide.

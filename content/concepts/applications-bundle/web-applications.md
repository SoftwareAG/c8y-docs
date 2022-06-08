---
weight: 20
title: Web applications
layout: redirect
---

### Overview

A {{< product-c8y-iot >}} web application can be a

* a user interface application built on any web framework of your choice
* a user interface application built using the {{< product-c8y-iot >}} user interface framework as a set of user interface plugins.

All subscribed web applications of a tenant appear in the application switcher on the top right of the{{< product-c8y-iot >}} UI, so that users can navigate between the applications. They are hosted by {{< product-c8y-iot >}} and the application will be made available through a URL &lt;tenant&gt;.{{< domain-c8y >}}/apps/&lt;application&gt;.

<img src="/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">

The {{< product-c8y-iot >}} UI itself is built around a framework based on AngularJS and Bootstrap, the modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins so that developers can create their own configurations of the {{< product-c8y-iot >}} user interfaces. For more information on developing plugins, refer to [Web SDK for plugins](/web/overview).

### Deploying web applications

For an application to be available it must be deployed on the {{< product-c8y-iot >}} platform.

For details on how to deploy an application to {{< product-c8y-iot >}}, refer to [Administration > Managing applications](/users-guide/administration/#managing-applications) in the *User guide*.

{{< c8y-admon-info >}}
In case of a web application, the application is active for you as owner without subscribing to it.
{{< /c8y-admon-info >}}

### Web application hosting

You can host your own HTML5 and JavaScript web applications through {{< product-c8y-iot >}} by using the application manager under **Ecosystem** > **Applications** > **All applications** in the {{< product-c8y-iot >}} Administration application.

For details refer to  [Administration > Managing applications](/users-guide/administration/#managing-applications) in the *User guide*.

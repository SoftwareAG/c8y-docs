---
weight: 20
title: web apps
layout: redirect
---

### Overview

A {{< product-c8y-iot >}} web app can be a

* a user interface web app built on any web framework of your choice
* a user interface web app built using the {{< product-c8y-iot >}} user interface framework as a set of user interface plugins.

All subscribed web apps of a tenant appear in the web app switcher on the top right of the{{< product-c8y-iot >}} UI, so that users can navigate between the web apps. They are hosted by {{< product-c8y-iot >}} and the web app will be made available through a URL &lt;tenant&gt;.{{< domain-c8y >}}/apps/&lt;application&gt;.

<img src="/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">

The {{< product-c8y-iot >}} UI itself is built around a framework based on AngularJS and Bootstrap, the modern HTML5 web app frameworks. It is designed in a modular fashion around a set of plugins so that developers can create their own configurations of the {{< product-c8y-iot >}} user interfaces. For more information on developing plugins, refer to [Web SDK for plugins](/web/overview).

### Deploying web apps

For a web app to be available it must be deployed on the {{< product-c8y-iot >}} platform.

For details on how to deploy a web app to {{< product-c8y-iot >}}, refer to [Administration > Managing web apps](/users-guide/administration/#managing-applications) in the *User guide*.

{{< c8y-admon-info >}}
In case of a web app, the web app is active for you as owner without subscribing to it.
{{< /c8y-admon-info >}}

### web app hosting

You can host your own HTML5 and JavaScript web apps through {{< product-c8y-iot >}} by using the web app manager under **Ecosystem** > **Applications** > **All web apps** in the {{< product-c8y-iot >}} Administration web app.

For details refer to  [Administration > Managing web apps](/users-guide/administration/#managing-applications) in the *User guide*.

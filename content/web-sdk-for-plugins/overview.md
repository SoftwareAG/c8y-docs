---
weight: 10
title: Overview
layout: bundle
aliases:
  - /http
  - /web/jsdoc
  - /web/branding-plugin
  - /web/tab-plugin
  - /web/widget-plugin
  - /web/web-sdk-for-plugins/
---

<div style="padding: 24px ; border: 2px solid #1776BF; border-radius: 4px; margin-bottom: 24px; background-color: #f6fafe ">
  <h3 style="color: #1776BF"><strong>IMPORTANT</strong></h3>
  <p class="lead" style="font-size:22px">

  The [Web SDK for plugins](/web-sdk-for-plugins) is deprecated. To develop new web applications we recommend you to use our current [Web SDK](/web/) for Angular. If you have already developed a plugin, refer to [Web SDK > Migration](/web/upgrade/#migration) for information on how to import plugins into the Web SDK for Angular.

  </p>

</div>



In the following section you will get an overview on the Web SDK for Plugins which allows you to:

* Extend applications with your own plugins.
* Add your own applications to {{< product-c8y-iot >}}'s web application.
* Enhance the visualization of data with custom widgets.
* Implement functionalities tailored to your use case.

![Architecture](/images/plugins/overview.png)

The illustration above shows the structure which lies behind the application and plugin development.

As the default applications, your applications will be built on AngularJS and the "c8y.core" and "c8y.ui" [JavaScript API](http://resources.cumulocity.com/documentation/websdk/ng1-modules). Both modules offer you services to interact with the {{< product-c8y-iot >}} web application. While the module "c8y.core" provides services to access different kinds of data, such as users and managed objects as well as basic functionalities, the module "c8y.ui" provides services to modify the user interface of your application or plugin, such as adding menu items or widgets. The modules in turn use the [REST API](/rest/introduction) provided by {{< product-c8y-iot >}}. You can find examples on how to use the services in the plugin examples.

The following section describes the [concepts](/web-sdk-for-plugins/concepts/) behind applications and plugins and specifies the required folder structure and different configuration options for applications and plugins. Next, the [setup](/web-sdk-for-plugins/setup/) necessary for developing applications and plugins is described.

Several [sample plugins](/web-sdk-for-plugins/sample-plugins/) are provided and we describe how to create a ["Hello World!"](/web-sdk-for-plugins/hello-world/) sample plugin step-by-step.

Additionally, more complex examples are provided:

* [Branding plugin](/web-sdk-for-plugins/branding-plugin/)
* [Widget plugin](/web-sdk-for-plugins/widget-plugin/)
* [Tab plugin](/web-sdk-for-plugins/tab-plugin/)

Although an overview of the concepts of applications and plugins will be provided in the following, we recommend you to take a look at the basic concept of {{< product-c8y-iot >}} applications described in [Developing applications](/concepts/applications).

------
weight: 10
title: Overview
layout: redirect
------

In the following section you will get an overview on the Web SDK for Plugins which allows you to:

* Extend applications with your own plugins.
* Add your own applications to Cumulocity IoT’s web application.
* Enhance the visualization of data with custom widgets.
* Implement functionalities tailored to your use case.

![Architecture](/images/plugins/overview.png)

The illustration above shows the structure which lies behind the application and plugin development. 

As the default applications, your applications will be built on AngularJS and the "c8y.core" and "c8y.ui" [JavaScript API](http://resources.cumulocity.com/documentation/websdk/ng1-modules). Both modules offer you services to interact with the Cumulocity IoT web application. While the module "c8y.core" provides services to access different kinds of data, such as users and managed objects as well as basic functionalities, the module "c8y.ui" provides services to modify the user interface of your application or plugin, such as adding menu items or widgets. The modules in turn use the [REST API](/rest/introduction) provided by Cumulocity IoT. You can find examples on how to use the services in the plugin examples.

First, this section describes the [concept](#concepts) behind applications and plugins and specifies the required folder structure and different configuration options for applications and plugins. Next, the [setup](#setup) necessary for developing applications and plugins is described. 

Several [sample plugins](#sample-plugins) are provided and we describe how to create a ["Hello World!"](#hello-world) sample plugin step-by-step.

Additionally, more complex examples are provided:

* [Branding plugin](/web/web-sdk-for-plugins#branding-plugin)
* [Tab plugin](/web/web-sdk-for-plugins#tab-plugin)
* [Widget plugin](/web/web-sdk-for-plugins#widget-plugin)

Although an overview of the concepts of applications and plugins will be provided in the following, we recommend to take a look at the basic concept of Cumulocity IoT applications described in [Developing applications](/concepts/applications).



------
weight: 10
title: Overview
layout: redirect
------

In the following document you will get an overview on the Web SDK for Plugins which allows you to
* extend applications with your own plugins.
* add your own applications to Cumulocity’s web application.
* enhance the visualization of data with custom widgets.
* implement functionalities tailored to your use case.

![Architecture](/images/plugins/overview.png)

The illustration above shows the structure behind the application and plugin development. The same as the core applications, your applications will be built on AngularJS and the "c8y.core" and "c8y.ui" [JavaScript API](http://resources.cumulocity.com/documentation/websdk/ng1-modules). Both modules offer you services to interact with the Cumulocity web application. While the module "c8y.core" provides services to access different kinds of data, such as users and managed objects, as well as basic functionalities, the module "c8y.ui" provides services to modify the user interface of your application or plugin, such as adding menu items or widgets. The modules in turn use the [REST API](/guides/rest/introduction) provided by Cumulocity. You can find examples on how to use the services in the plugin examples.

First, this document describes the concept behind applications and plugins. Then it specifies the required folder structure and different configuration options for applications and plugins. Subsequently, the setup necessary for developing applications and plugins is described. The Web SDK for Plugins section is structured as follows:

* [Concepts](#concepts)
	* [Project structure](#project-structure)
	* [Manifests](#manifests)
* [Setup](#setup)
	* [Prerequisites](#prerequisites)
	* [Cumulocity CLI tool](#cli-tool)
	* [Cumulocity UI package](#ui-package)
* [Sample plugins](#sample-plugins)

Afterwards, we describe how to create a sample plugin step-by-step:
* ["Hello World!"](#hello-world)

You can also find other, more complex examples in the following documents:

* [Branding plugin](/guides/web/web-sdk-for-plugins#branding-plugin)
* [Tab plugins](/guides/web/web-sdk-for-plugins#tab-plugin)
* [Widget plugins](/guides/web/web-sdk-for-plugins#widget-plugin)

Although an overview of the concepts of applications and plugins will be provided in this chapter, we recommend to take a look at the basic concept of Cumulocity applications described in [Developing applications](/guides/concepts/applications).



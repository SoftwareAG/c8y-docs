---
weight: 10
title: Overview
layout: bundle
slug: introduction
aliases:
  - /developers-guide/developing-web-clients
  - /developers-guide/developing-web-clients.html
  - /web/smart-toolkit
  - /web/reference
---

This Web SDK guide provides information on the Web SDK which enables you to develop web applications on top of our platform, communicate through our API and apply UI components to your custom application.

The latest generation of our Web SDK - [Web SDK for Angular](/guides/web/angular) - has now been released. 

We strongly recommend using [Web SDK for Angular](/guides/web/angular) when developing new web applications.

Web SDK for Angular JS is deprecated. Therefore, its documentation is no longer provided here.  As all Cumulocity REST APIs are backward compatible, Angular JS applications will still continue to work. 

[Web SDK for plugins](/guides/web/web-sdk-for-plugins) is still based on Angular JS. For Angular-based development, we recommend to implement native Angular modules. 

When using [Web SDK for Angular](/guides/web/angular), you might face the following known limitations:

 - Currently, it is not possible to extend existing applications with custom widgets.
 - You may add new tabs or navigator nodes but it is not possible to remove or update existing ones.

In both cases, you either 

* develop the items with the [Web SDK for plugins](/guides/web/web-sdk-for-plugins) and import them to Angular as described in [ngx-components > Extension points](/guides/web/angular#extension-points), 
* or you downgrade an Angular service to angularjs as shown in the [Angular documentation](https://angular.io/guide/upgrade#using-angular-components-from-angularjs-code).

We are actively working on a solution to make this also possible within Angular natively.

If you have previously been working with older versions you might be interested in some short information on the evolution of the UI stack in [Upgrading to Angular](/guides/web/background) to better understand how and why it is now designed the way it is.
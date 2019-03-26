---
order: 10
title: Overview
layout: standalone
---

This Web SDK guide provides information on the Web SDK which enables you to develop web applications on top of our platform, communicate through our API and apply UI components to your custom application.

The latest generation of our Web SDK - [Web SDK for Angular](/guides/web/angular) - has now been released. 

We strongly recommend using [Web SDK for Angular](/guides/web/angular) when developing new web applications.

Web SDK for Angular JS is deprecated. Therefore, its documentation is no longer provided here.  As all Cumulocity APIs are backward compatible, Angular JS applications will still continue to work. 

[Web SDK for plugins](/guides/web/web-sdk-for-plugins) is still based on Angular JS. We are currently working on an Angular-based solution which will replace the existing Web SDK for plugins in the future.

---

There are the following known limitations that you might face with the new [Web SDK for Angular](/guides/web/angular):
 - Currently, it is not possible to extend existing applications with custom widgets.
 - The new Web SDK for Angular allows to add new tabs or navigator nodes but it is not possible to remove or update existing them.

In both cases you either develop the items still with the [Web SDK for plugins](/guides/web/web-sdk-for-plugins) and import them to Angular as described [here](/guides/web/angular#extension-points) or you might want to downgrade an Angular service to angularjs as shown [here](https://angular.io/guide/upgrade#using-angular-components-from-angularjs-code).

If you have previously been working with older versions you might be interested in some short [background information](/guides/web/background) on the evolution of the UI stack to better understand how and why it is now designed the way it is.
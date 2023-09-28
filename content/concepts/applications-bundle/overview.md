---
weight: 1
title: Overview
layout: bundle
---

 There are two types of {{< product-c8y-iot >}} applications:

 * [Web applications](#web-applications) -  web-based user interface applications
 * [Microservices](#microservices) - server-side business logic

Web applications are HTML5 single page applications, that appear in the {{< product-c8y-iot >}} application switcher and that are hosted in the {{< product-c8y-iot >}} platform.

Microservices are Docker containers, hosted by {{< product-c8y-iot >}} and exposing a REST API.

Applications regardless of their form are identified by a so-called *application key*. The application key enables {{< product-c8y-iot >}} to associate a REST request from an application with the particular application. The application key is the unique identifier of the application and should remain unchanged in all versions of that application. See the section on [Application management](https://{{< domain-c8y >}}/api/core/#tag/Application-API) in the {{< openapi >}}.

Super tenants ({{< management-tenant >}}s or {{< enterprise-tenant >}}s) can subscribe subtenants to {{< product-c8y-iot >}} applications deployed by them. This provides a basic application marketplace.

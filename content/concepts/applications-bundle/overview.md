
---
weight: 10
title: Overview
layout: redirect
---

 {{< product-c8y-iot >}} applications can have two forms:

* web-based user interface applications ("[web applications](#web-applications)")
* server-side business logic through microservices ("[microservices](#microservices)")

Web applications are HTML5 single page applications, that appear in the {{< product-c8y-iot >}} application switcher and that are hosted in the {{< product-c8y-iot >}} platform.

Microservices are Docker containers, hosted by {{< product-c8y-iot >}} and exposing a REST API.

Applications regardless of their form are identified by a so-called *application key*. The application key enables {{< product-c8y-iot >}} to associate a REST request from an application with the particular application. See the section on [Application management](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Application-API) in the {{< openapi >}}.

Super tenants ({{< management-tenant >}}s or {{< enterprise-tenant >}}s) can subscribe subtenants to {{< product-c8y-iot >}} applications deployed by them. This provides a basic application marketplace.

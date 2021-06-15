
---
weight: 10
title: Overview
layout: redirect
---

 Cumulocity IoT applications can have two forms:

* web-based user interface applications ("[web applications](#web-applications)")
* server-side business logic through microservices (“[microservices](#microservices)”)

Web applications are HTML5 single page applications, that appear in the Cumulocity IoT application switcher and that are hosted in the Cumulocity IoT platform.

Microservices are Docker containers, hosted by Cumulocity IoT and exposing a REST API.

Applications regardless of their form are identified by a so-called *application key*. The application key enables Cumulocity IoT to associate a REST request from an application with the particular application. See the section on [Application management](https://cumulocity.com/api/#tag/Application-API) in the Cumulocity IoT OpenAPI Specification.

Super tenants ({{< tenant-type-3 >}}s or {{< tenant-type-2 >}}s) can subscribe subtenants to Cumulocity IoT applications deployed by them. This provides a basic application marketplace.

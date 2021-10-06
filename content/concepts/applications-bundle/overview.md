
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

Applications regardless of their form are identified by a so-called *application key*. The application key enables Cumulocity IoT to associate a REST request from an application with the particular application. See the section on [Application management](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Application-API) in the Cumulocity IoT OpenAPI Specification.

Super tenants (Management tenants or Enterprise tenants) can subscribe subtenants to Cumulocity IoT applications deployed by them. This provides a basic application marketplace.

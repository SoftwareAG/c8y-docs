
---
weight: 10
title: Overview
layout: redirect
---

 {{< product-name-1 >}} applications can have two forms:

* web-based user interface applications ("[web applications](#web-applications)")
* server-side business logic through microservices (“[microservices](#microservices)”)

Web applications are HTML5 single page applications, that appear in the {{< product-name-1 >}} application switcher and that are hosted in the {{< product-name-1 >}} platform.

Microservices are Docker containers, hosted by {{< product-name-1 >}} and exposing a REST API.

Applications regardless of their form are identified by a so-called *application key*. The application key enables {{< product-name-1 >}} to associate a REST request from an application with the particular application. See the section on [Application management](https://{{< URL >}}/api/#tag/Application-API) in the {{< OpenAPI >}}.

Super tenants (Management tenants or Enterprise tenants) can subscribe subtenants to {{< product-name-1 >}} applications deployed by them. This provides a basic application marketplace.


---
weight: 10
title: Overview
layout: redirect
---

 {{< product-c8y-iot >}} web apps can have two forms:

 * [web web apps](#web-applications) -  web-based user interface web apps
 * [microservices](#microservices) - server-side business logic

Web web apps are HTML5 single page web apps, that appear in the {{< product-c8y-iot >}} web app switcher and that are hosted in the {{< product-c8y-iot >}} platform.

Microservices are Docker containers, hosted by {{< product-c8y-iot >}} and exposing a REST API.

Applications regardless of their form are identified by a so-called *application key*. The web app key enables {{< product-c8y-iot >}} to associate a REST request from a web app with the particular web app. The web app key is the unique identifier of the web app and should remain unchanged in all versions of that web app. See the section on [Application management](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Application-API) in the {{< openapi >}}.

Super tenants ({{< management-tenant >}}s or {{< enterprise-tenant >}}s) can subscribe subtenants to {{< product-c8y-iot >}} web apps deployed by them. This provides a basic web app marketplace.

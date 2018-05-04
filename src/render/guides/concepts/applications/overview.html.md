
---
order: 10
title: Overview
layout: redirect
---

 Cumulocity applications can have two forms:

* web-based user interface applications (“web applications”)
* server-side business logic through microservices (“microservices”)

Web applications are HTML5 single page applications, that appear in the Cumulocity app switcher and that are hosted on Cumulocity.

Microservices are docker containers, hosted by Cumulocity and exposing a REST API.

Applications regardless of form are identified by a so-called *application key*. The application key enables Cumulocity to associate a REST request from an application with the particular application, see the section on Application management in the [Reference guide](/guides/reference/applications).

Super tenants (management tenants or enterprise edition tenants) can subscribe subtenants to Cumulocity applications deployed by them. This provides a basic application marketplace. 

---
weight: 10
title: Introduction
layout: redirect
---

Microservices use standard REST APIs with full authentication and authorization to communicate with Cumulocity. They are, in most cases, multi-tenant, i.e. they need to be able to strictly separate tenants and connect to multiple tenants at the same time.
Microservices may offer their own endpoints that can be used by Cumulocity and Cumulocity-based applications, e.g. for system integration purposes. Examples of such microservices are the Jasper Control Center integration and the SMS integration for sending SMS notifications to end users.

You can extend the Cumulocity platform with customer-specific functionality by employing microservices. For instance, you can develop integrations to third-party software or provide server-side business logic. A microservice-based architecture introduces change that is often well received by those developing modern applications, and solutions can be delivered much more quickly to those requesting flexible and scalable applications. Microservices bring significant benefits such as deployability, reliability, availability, scalability, modifiability and management.

Cumulocity microservices have the following properties:

- By default, they provide one inbound REST or Websocket endpoint.
- Inbound REST and Websocket endpoints are secured by Cumulocity core built-in API gateway functionality.
- Requests from one microservice to the Cumulocity REST API can be executed using either the original user account (of the inbound request) or by using a service user.
- Multi-tenant support.

The following management features are supported:

- Microservices can be registered to individual tenants and super-tenants (i.e. tenants with subtenants).
- Multi-tenant microservices can be subscribed to other tenants.

Technically, microservices are Docker containers hosted by Cumulocity and they follow specific conventions. They are typically accessed using Cumulocity REST API available under <kbd>/service/&lt;microservice-name&gt;</kbd>.

Developers are not restricted to any programming language when developing a microservice for Cumulocity. However, a microservice must serve as an HTTP server working on port 80 and must be encapsulated in a Docker image. Refer to the relevant chapters in this guide for further information for the development of microservices.

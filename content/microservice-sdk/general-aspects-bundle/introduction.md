---
weight: 10
title: Introduction
layout: redirect
---

Microservices use standard REST APIs with full authentication and authorization to communicate with {{< product-c8y-iot >}}. They are, in most cases, multi-tenant, meaning they must be able to strictly separate tenants and connect to multiple tenants at the same time.
Microservices may offer their own endpoints that can be used by {{< product-c8y-iot >}} and {{< product-c8y-iot >}}-based applications, for example, for system integration purposes. Examples of such microservices are the Jasper Control Center integration and the SMS integration for sending SMS notifications to end users.

You can extend the {{< product-c8y-iot >}} platform with customer-specific functionality by deploying microservices. For instance, you can develop integrations to third-party software or provide server-side business logic. A microservice-based architecture introduces change that is often well received by those developing modern applications, and solutions can be delivered much more quickly to those requesting flexible and scalable applications. Microservices bring significant benefits such as deployability, reliability, availability, scalability, modifiability and management.

{{< product-c8y-iot >}} microservices have the following properties:

- By default, they provide REST or Websocket APIs.
- Inbound REST and Websocket endpoints are secured by {{< product-c8y-iot >}} core built-in API gateway functionality.
- Requests from one microservice to the {{< product-c8y-iot >}} REST API can be executed by either using the original user account (of the inbound request) or by using a [service user](/microservice-sdk/general-aspects/#users-and-roles).
- Multi-tenant support.

The following management features are supported:

- Microservices can be registered to individual tenants and super-tenants (that is, tenants with subtenants).
- Multi-tenant microservices can be subscribed to other tenants.

Technically, microservices are Docker containers hosted by {{< product-c8y-iot >}} and they follow specific conventions. They are typically accessed using {{< product-c8y-iot >}} REST API available under <kbd>/service/&lt;microservice-name&gt;</kbd>.

Developers are not restricted to any programming language when developing a microservice for {{< product-c8y-iot >}}. However, a microservice must serve as an HTTP server working on port 80 and must be encapsulated in a Docker image. Refer to the relevant chapters in this guide for further information for the development of microservices.

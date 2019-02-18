---
order: 40
title: Microservice isolation levels
layout: redirect
---

The following isolation levels are available for microservices:

* **Multi-tenant**: Single microservice docker container instantiated for all subscribed tenants, unless the microservice is scaled.
* **Single-tenant**: Dedicated microservice docker container instantiated for each subscribed tenant.

The isolation level is set using the [Microservice manifest](/guides/reference/microservice-manifest).

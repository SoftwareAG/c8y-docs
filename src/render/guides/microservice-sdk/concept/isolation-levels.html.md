---
order: 40
title: Isolation levels
layout: redirect
---

The following isolation levels are available for microservices:

* Multi-tenant: Single microservice Docker container instantiated for all subscribed tenants, unless the microservice is scaled.
* Single-tenant: Dedicated microservice Docker container instantiated for each subscribed tenant.

The isolation level is set using the [Microservice manifest](#manifest).

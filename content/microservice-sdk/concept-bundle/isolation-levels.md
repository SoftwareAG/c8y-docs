---
weight: 40
title: Isolation and scaling
layout: redirect
---

The following isolation levels are available for microservices:

* Multi-tenant: Single microservice Docker container instantiated for all subscribed tenants, unless the microservice is scaled.
* Single-tenant: Dedicated microservice Docker container instantiated for each subscribed tenant.

See [Microservice manifest > Settings](#settings) for the `isolation` setting.

If scaling is enabled, the microservice will be horizontally auto-scaled in case of high CPU usage. Auto-scaling monitors the microservices to make sure that they are operating at the desired performance levels, and it will automatically scale up your cluster as soon as you need it and scale it back down when you don’t.

See [Microservice manifest > Settings](#manifest) for the `scale` setting.

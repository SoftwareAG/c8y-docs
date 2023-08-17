---
weight: 100
title: M
layout: bundle
section:
  - getting_started
---

### Maintenance release

{{< company-c8y >}} provides Maintenance releases for supported {{< product-c8y-iot >}} GA releases. A Maintenance release contains fixes and improvements for a GA release but no new features.


### Managed objects

In {{< product-c8y-iot >}}, all [assets](#asset) are represented as managed objects. {{< product-c8y-iot >}} comes with a predefined set of types, for example [devices](#device), groups, and [agents](#agent).

Hierarchical structures of managed objects allow for the implementation of complex structures like a factory with many machines which consist of devices and sensors which can report [events](#event), [alarms](#alarm), and [measurements](#measurement).


### Management tenant

The {{< management-tenant >}} builds the highest level of the [{{< product-c8y-iot >}} tenant hierarchy](/concepts/tenant-hierarchy/#tenant-levels).
Every {{< product-c8y-iot >}} deployment is delivered with a {{< management-tenant >}}. The {{< management-tenant >}} is used to administer all tenants within the same deployment on platform level and thus provides full control of the platform.

See also [{{< standard-tenant >}}](#standard-tenant) and [{{< enterprise-tenant >}}](#enterprise-tenant).


### Measurement

A measurement contains one or multiple numerical values taken at a single point in time for a single asset. A sequence of measurements forms a time series.


### Microservices

Microservices are server-side applications. Microservices can be used to develop for example the following functionality on top of {{< product-c8y-iot >}}:

* Integrations
* Batch analytics
* Decoder
* Backend applications

Microservices are deployed as Container images to {{< product-c8y-iot >}}, and follow specific conventions. They typically provide one REST API, which is available under /service/<microservice-name> and access {{< product-c8y-iot >}} using this REST API.

For details see [Microservices](/concepts/applications/#microservices).


### Model

Used in the context of [Analytics Builder](#analytics-builder).

A model is a container which can have a network of [Blocks](#blocks) connected to each other with wires.
The behavior of a block inside a model does not depend on other blocks. There can be multiple instances of the same block in a model where each instance may behave differently, depending on the configurable parameters or the inputs connected to the block.


### MQTT

{{< product-c8y-iot >}} supports MQTT, an OASIS standard messaging protocol, for device integration.

For details see [Device integration using MQTT](/device-integration/mqtt).


### Multi-tenancy

With the Enterprise tenant concept, {{< product-c8y-iot >}} supports full multi-tenancy. All data related to a tenant is stored in a dedicated database. This includes user data, inventory, events, measurements, operations and alarms.

For details see [Multi-tenancy](/concepts/tenant-hierarchy/#multi-tenancy).

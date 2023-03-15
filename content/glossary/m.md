---
weight: 100
title: M
layout: bundle
section: 
  - getting_started
---

<a name="ml-engine"></a>

### Machine Learning Engine

Machine Learning Engine is an application that enables machine learning/IT operators to manage and operationalize production-ready models for generating predictions on data gathered from connected devices. These capabilities can be leveraged either from a web browser via an easy to use UI or programmatically via REST API. Machine Learning Engine provides a high-performance inference platform with deployed models exposed as endpoints that can be leveraged from Streaming Analytics and other applications for real-time inference.

For details see [Introduction > Machine Learning Engine](/machine-learning/introduction/#mle-overview) in the *Machine Learning guide*.

<a name="ml-workbench"></a>

### Machine Learning Workbench

Machine Learning Workbench is an application that enables data scientists and machine learning engineers to build, train and evaluate high-quality machine learning models using an intuitive, easy to use, no-code UI and a programmer-friendly Jupyter Notebook based environment. Machine Learning Workbench provides seamless access to data residing in {{< product-c8y-iot >}} operational store or any cloud data lakes with visual tools to ingest and transform the data.

For details see [Introduction > Machine Learning Workbench](/machine-learning/introduction/#mlw-overview) in the *Machine Learning guide*.

<a name="maintenance-release"></a>

### Maintenance release

{{< company-c8y >}} provides Maintenance releases for supported {{< product-c8y-iot >}} GA releases. A Maintenance release contains fixes and improvements for a GA release but no new features.

<a name="managed-object"></a>

### Managed objects

In {{< product-c8y-iot >}}, all [assets](#asset) are represented as managed objects. {{< product-c8y-iot >}} comes with a predefined set of types, for example [devices](#device), groups, and [agents](#agent).

Hierarchical structures of managed objects allow for the implementation of complex structures like a factory with many machines which consist of devices and sensors which can report [events](#event), [alarms](#alarm), and [measurements](#measurement).

<a name="mgm-tenant"></a>

### Management tenant

The {{< management-tenant >}} builds the highest level of the [{{< product-c8y-iot >}} tenant hierarchy](/concepts/tenant-hierarchy/#tenant-levels).
Every {{< product-c8y-iot >}} deployment is delivered with a {{< management-tenant >}}. The {{< management-tenant >}} is used to administer all tenants within the same deployment on platform level and thus provides full control of the platform.

See also [{{< standard-tenant >}}](#standard-tenant) and [{{< enterprise-tenant >}}](#ent-tenant).

<a name=""></a>

### Measurement

A measurement contains one or multiple numerical values taken at a single point in time for a single asset. A sequence of measurements forms a time series.

<a name="microservices"></a>

### Microservices

Microservices are server-side applications. Microservices can be used to develop for example the following functionality on top of {{< product-c8y-iot >}}:

* Integrations
* Batch analytics
* Decoder
* Backend applications

Microservices are deployed as Container images to {{< product-c8y-iot >}}, and follow specific conventions. They typically provide one REST API, which is available under /service/<microservice-name> and access {{< product-c8y-iot >}} using this REST API.

For details see [Developing applications > Microservices](/concepts/applications/#microservices).

<a name="Model"></a>

### Model

Used in the context of [Analytics Builder](#analytics-builder).

A model is a container which can have a network of [Blocks](#blocks) connected to each other with wires.
The behavior of a block inside a model does not depend on other blocks. There can be multiple instances of the same block in a model where each instance may behave differently, depending on the configurable parameters or the inputs connected to the block.

### MQTT

{{< product-c8y-iot >}} supports MQTT, an OASIS standard messaging protocol, for device integration.

For details see [Device integration using MQTT](/device-integration/mqtt) in *Device integration*.

<a name=""></a>

### Multi-tenancy

With the Enterprise tenant concept, {{< product-c8y-iot >}} supports full multi-tenancy. All data related to a tenant is stored in a dedicated database. This includes user data, inventory, events, measurements, operations and alarms.

For details see [Tenant hierarchy > Multi-tenancy](/concepts/tenant-hierarchy/#multi-tenancy).

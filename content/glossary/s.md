---
weight: 150
title: S
layout: bundle
section: 
  - getting_started
---


<a name="sensor-library"></a>

### Sensor library

{{< product-c8y-iot >}} includes a sensor library to model specific sensing and controlling skills across device products. A single device can have many sensor and control characteristics. The sensor library covers basic sensors and controls, and is supported by the {{< product-c8y-iot >}} client libraries. It also enables writing powerful generic IoT software plugins.
Technically, the sensor library defines standard fragments for inventory, measurements, events and device control, following the naming convention.

For details see [{{< product-c8y-iot >}}'s domain model > The sensor library](/concepts/domain-model/#sensor-library) and [{{< product-c8y-iot >}}'s domain model > Inventory](/concepts/domain-model/#inventory).

<a name="smart-rules"></a>

### Smart rules

{{< product-c8y-iot >}} includes a rule engine to analyze data in realtime and to perform actions based on data. To easily create rules, the Cockpit application includes a “smart rules” builder which allows you to create rules from templates (so-called smart rule templates).

For details see [Cockpit > Smart rules](/users-guide/cockpit/#smart-rules) in the *User guide*.

<a name="standard-tenant"></a>

### Standard tenant

At the bottom of the [{{< product-c8y-iot >}} tenant hierarchy](/concepts/tenant-hierarchy/#hierarchy-levels) you can find single tenants which are represented by the concept of {{< standard-tenant >}}.
A {{< standard-tenant >}} offers most of the device management and monitoring functionality of the {{< product-c8y-iot >}} platform, but has certain limitations when it comes to administrative aspects.

See also [{{< enterprise-tenant >}}](#ent-tenant) and [{{< management-tenant >}}](#mgm-tenant).

<a name="subscription"></a>

### Subscription

The application concept of {{< product-c8y-iot >}} includes a basic application marketplace.
Tenants can be subscribed to applications which have been deployed by their superior tenant ({{< management-tenant >}} or {{< enterprise-tenant >}}).
Granting access to subtenants and subscribing to applications is done in the Administration application.

For details see [Developing applications > Subscribing applications](/concepts/applications/#subscription) and [Administration > Managing applications](/users-guide/administration/#managing-applications) in the *User guide*.

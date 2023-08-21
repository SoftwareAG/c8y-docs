---
title: Overview
layout: bundle
section:
  - device_management
weight: 1
---


This section explains concepts relevant for interfacing IoT devices and other IoT-related data sources with {{< product-c8y-iot >}}.

To interface these systems with {{< product-c8y-iot >}}, a driver software called *agent* is required. We first describe the main tasks of an agent and discuss the structural options for agents later. We will walk step by step through the tasks of an agent. Finally, we discuss the usage of agents for acquiring data from other data sources such as a tenant's IT system.

{{< c8y-admon-related >}}

- [Getting started > Technical concepts > {{< product-c8y-iot >}}´s domain model](/concepts/domain-model) for understanding the data structures exchanged between agents and the {{< product-c8y-iot >}} core.
- [Device management > Device integration](/device-integration) for understanding in detail how to develop agent software using the REST or MQTT protocols.
- [REST implementation](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#section/REST-implementation) in the {{< openapi >}}, for a detailed specification of the interfaces between agents and the {{< product-c8y-iot >}} core.

{{< /c8y-admon-related >}}

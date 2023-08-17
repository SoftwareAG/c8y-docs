---
weight: 120
title: O
layout: bundle
section:
  - getting_started
---


### OEE

OEE (Overall Equipment Effectiveness) is a metric for measuring the efficiency, effectiveness and performance of production processes, by breaking them down into the three components Availability, Performance, and Quality. The {{< product-c8y-iot >}} OEE application uses machine data, master data and planning data from machines and machine lines to calculate the factors of the OEE calculation.

For details see the [{{< product-c8y-iot >}} OEE](/oee/overview).


### OPC UA

OPC Unified Architecture (OPC UA) is a standard to enable the communication between industrial devices. OPC UA is designed to work across technology boundaries (cross-platform).

One component of the OPC UA integration in {{< product-c8y-iot >}} is the OPC UA device gateway. The OPC UA device gateway is a stand-alone Java program that communicates with OPC UA server(s) and the {{< product-c8y-iot >}} platform. It stores data into the {{< product-c8y-iot >}} database via REST. The gateway must be registered as {{< product-c8y-iot >}} device.

For details see [OPC UA](/protocol-integration/opcua).


### Operations

Operations are cloud-to-device messages so that devices can be remotely controlled and managed by {{< product-c8y-iot >}}. Typical operations are installing a new software, switching a relay in a power meter or sending a credit to a vending machine.

For details see [Operations](/concepts/domain-model/#operations).

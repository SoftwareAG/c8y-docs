---
weight: 10
title: What´s new
layout: bundle
---


Release 10.11.0 includes the following new features or major feature enhancements.

### New OEE application

A new (optional) application has been added to the Cumulocity IoT platform, which allows to create OEE (Overall Equipment Effectiveness) calculation configurations for machines and machine lines.

The Cumulocity IoT OEE application uses machine data, master data and planning data, for example from an Enterprise Resource Planning (ERP) or Manufacturing Execution System (MES), to calculate the factors of the OEE calculation. Based on the calculation configurations and inputs, Cumulocity IoT OEE then calculates the OEE, Availability, Performance, Quality and various other metrics. The results are displayed in the application dashboards.

![Dashboard overview](/images/release-notes/dashboard-machine-park-overview.png)

For details, refer to the [OEE guide](https://cumulocity.com/guides/oee/overview/).

### New Messaging Service components to support the new notifications API

This release of the Cumulocity IoT platform adds initial support for the new Cumulocity IoT Messaging Service. The Messaging Service is a significant new platform capability that enables reliable, scalable and high-performance transfer of IoT data between platform components. At this time, the Messaging Service is an optional feature that is only required in environments that will be using the new microservice-based data broker implementation. In future releases more capabilities using the Messaging Service will be enabled, and the Messaging Service itself will become a core component of every Cumulocity IoT platform environment.

Contact [product support](/releasenotes/about/contacting-support/) or your Software AG sales representative to inquire about using the Messaging Service with the microservice-based data broker in your Cumulocity IoT environment. The new *Messaging Service - Installation & operations guide* documents installation, operation, management, monitoring and troubleshooting of the Messaging Service and the microservice-based data broker implementation.

### Thin Edge

Thin-edge.io is a new open-source framework to develop lightweight, smart, and secure connected devices.

The cloud-agnostic thin-edge.io provides the foundations for cloud connectivity and device management, a set of pre-packaged modules, plug & play connectors to cloud platforms, device certificate management, monitoring as well as built-in software and firmware management.

On top of these foundations, you can build telemetry applications using a combination of components provided by various IoT actors. The features provided by these components can include for example low-level connectivity to IoT protocols, event-stream analytics, machine-learning-powered systems, or application specific processors.

Thin-edge.io can be extended in various programming languages due to its extensible architecture. The following list shows the key aspects of the thin-edge.io architecture:

* The components are processes exchanging messages over an MQTT bus.
* The MQTT bus is connected to the cloud, forwarding the messages published on cloud-specific topics.
* A canonical data format lets the components exchange telemetry data independently of the connected cloud. This is an optional feature and the components are free to also use cloud-specific data formats.
* The mapper processes are responsible for translating the canonical data format into cloud-specific messages and vice versa.

For details, see the [Thin Edge guide](https://cumulocity.com/guides/thin-edge/overview/).

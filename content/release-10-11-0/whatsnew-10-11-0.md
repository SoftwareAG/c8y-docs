---
weight: 10
title: What´s new
layout: bundle
---


Release 10.11.0 includes the following new features or major feature enhancements.

### New OEE application

A new (optional) application has been added to the Cumulocity IoT platform, which allows to create OEE (Overall Equipment Effectiveness) calculation configurations for machines and machine lines.

The Cumulocity IoT OEE application uses machine data, master data and planning data, for example from an Enterprise Resource Planning (ERP) or Manufacturing Execution System (MES), to calculate the factors of the OEE calculation. Based on the calculation configurations and inputs, Cumulocity IoT OEE then calculates the OEE, Availability, Performance, Quality and various other metrics. The results are displayed in the application dashboards.

For details, refer to the [OEE guide](https://cumulocity.com/guides/oee/overview/).


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

### New Messaging Service components to support the new notifications API

A new API (Notifications 2.0) for subscribing to notifications from the platform has been added. The new API is conceptually similar to the existing "realtime" API, but powered by the Cumulocity IoT Messaging Service that enables reliable, scalable and high-performance flow of IoT data within and beyond the Cumulocity IoT platform.

Notifications 2.0 provides new REST API endpoints for managing subscriptions to notifications, and a new WebSocket protocol for streaming notifications into a client application.

To enable Notifications 2.0, the platform must have the latest version of the Messaging Service components installed, and the load balancer configuration must be updated to allow access to the new endpoints from client applications. For details of the process to install the Messaging Service, or to upgrade an existing installation to the latest version, see the *Messaging Service - Installation & operations guide* that is distributed as part of the Cumulocity IoT platform operations documentation set. Note that at this time the Messaging Service is an optional platform capability that can be made available by request in private cloud environments. Contact [product support](/releasenotes/about/contacting-support/) or your Software AG sales representative to inquire about using the Messaging Service in your Cumulocity IoT environment.

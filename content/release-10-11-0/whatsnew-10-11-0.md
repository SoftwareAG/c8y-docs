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

For details, refer to the [OEE guide](https://cumulocity.com/guides{{< 10-11-0 >}}/oee/overview/).

### Thin Edge

Thin-edge.io is a new open-source framework to develop lightweight, smart, and secure connected devices.

The cloud-agnostic thin-edge.io provides the foundations for cloud connectivity and device management, a set of pre-packaged modules, plug & play connectors to cloud platforms, device certificate management, monitoring as well as built-in software and firmware management.

On top of these foundations, you can build telemetry applications using a combination of components provided by various IoT actors. The features provided by these components can include for example low-level connectivity to IoT protocols, event-stream analytics, machine-learning-powered systems, or application specific processors.

Thin-edge.io can be extended in various programming languages due to its extensible architecture. The following list shows the key aspects of the thin-edge.io architecture:

* The components are processes exchanging messages over an MQTT bus.
* The MQTT bus is connected to the cloud, forwarding the messages published on cloud-specific topics.
* A canonical data format lets the components exchange telemetry data independently of the connected cloud. This is an optional feature and the components are free to also use cloud-specific data formats.
* The mapper processes are responsible for translating the canonical data format into cloud-specific messages and vice versa.

For details, see the [Thin Edge guide](https://cumulocity.com/guides{{< 10-11-0 >}}/thin-edge/overview/).


### New messaging-based notifications API

A new API (Notifications 2.0) for subscribing to notifications from the platform has been added. The new API is conceptually similar to the existing *realtime* notifications API, but powered by the Cumulocity IoT Messaging Service that enables reliable, scalable and high-performance flow of IoT data within and beyond the Cumulocity IoT platform. Notifications 2.0 provides new REST API endpoints for managing subscriptions to notifications, and a new WebSocket protocol for streaming notifications into a client application. Potential users of Notifications 2.0 should note that this is a **new** API, not a re-implementation of the the current realtime notifications. Users will need to implement new application code to make use of the new API. The realtime notifications API remains available and unchanged in this release.

At this time the Notifications 2.0 API is only available to tenants in the eu-latest.cumulocity.com public cloud environment. It can also be made available by request in private cloud environments. Contact [product support](/releasenotes/about/contacting-support/) to inquire about using Notifications 2.0 in your Cumulocity IoT environment.

For details on the capabilities and usage of Notifications 2.0, see [Notifications 2.0](https://cumulocity.com/guides/reference/notifications/) in the *Reference guide* and the Cumulocity IoT [API documentation](https://cumulocity.com/api). The [Notifications 2.0 example microservice](https://github.com/SoftwareAG/cumulocity-examples/tree/develop/hello-world-notification-microservice) may also be a useful guide for users developing applications that will use the new API.

#### New API for timestamp

In order to facilitate gathering alarm and event data across a period of date and time, two new query parameters are now available in the REST API. Measurement data is not in scope.  

Existing queries do not need to be changed, they will behave in exactly the same manner as prior to release 10.10.  For date and time bounded queries the new parameters available are:

* lastUpdatedFrom [DateTime type]
* lastUpdatedTo [DateTime type]

These new parameters are fully documented in the Cumulocity IoT OpenAPI documentation, see [https://cumulocity.com/api/10.10.0/#operation/getAlarmCollectionResource](https://cumulocity.com/api/10.10.0/#operation/getAlarmCollectionResource) and [https://cumulocity.com/api/10.10.0/#operation/getEventCollectionResource](https://cumulocity.com/api/10.10.0/#operation/getEventCollectionResource).

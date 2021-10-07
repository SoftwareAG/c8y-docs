---
weight: 10
title: Overview
layout: redirect
opensource: true
---

Thin-edge.io is an open-source framework to develop lightweight, smart, and secure connected devices.

The cloud-agnostic thin-edge.io provides the foundations for cloud connectivity and device management, a set of pre-packaged  modules, plug & play connectors to cloud platforms, device certificate management, monitoring as well as built-in software and firmware management.

On top of these foundations, you can build telemetry applications using a combination of components provided by various IoT actors. The features provided by these components can include for example low-level connectivity to IoT protocols, event-stream analytics, machine-learning-powered systems, or application specific processors.

Thin-edge.io can be extended in various programming languages due to its extensible architecture. The following list shows the key aspects of the thin-edge.io architecture:

* The components are processes exchanging messages over an MQTT bus.
* The MQTT bus is connected to the cloud, forwarding the messages published on cloud-specific topics.
* A [canonical data format](#thin-edge-json) lets the components exchange telemetry data independently of the connected cloud. This is an optional feature and the components are free to also use cloud-specific data formats.
* The mapper processes are responsible for translating the canonical data format into cloud-specific messages and vice versa.

![Overview](/images/thin-edge/thin-edge-overview.png)

### Design principles
The primary goal of thin-edge.io is:

* to simplify the connection of edge devices to the cloud by providing a secure and reliable cloud connectivity as well as a device management agent
* the ability to build IoT applications around a large diversity of components provided by independent actors

For that purpose, thin-edge.io focuses on:

* **Interoperability** -
  Thin-edge.io lets you integrate components producing or consuming telemetry data: northbound with cloud platforms, southbound with sensors
  as well as for east-west communication between analytics components.
* **Flexibility** -
  Thin-edge.io lets you integrate components provided by different IoT actors, not even originally designed with thin-edge.io in-mind,
  using various technologies and programming languages.
* **Security** -
  Thin-edge.io provides a secure and stable foundation for cloud connections, software/firmware updates, and remote device management.
* **Reliability** -
  Thin-edge.io components can survive in chaotic environments as network outages and process restarts happen.
* **Efficiency** -
  Thin-edge.io lets you build applications that can run on constrained device hardware and with limited bandwidth networks.
* **Multi-cloud** -
  Thin-edge.io enables you to connect your edge devices with multiple clouds.  Which cloud to use can be decided at runtime by the user.

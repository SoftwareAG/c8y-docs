---
weight: 10
title: Overview
layout: redirect
---

Thin-edge.io is an open-source framework to develop lightweight, smart, and secure connected devices.

The cloud agnostic thin-edge.io provides the foundations for cloud connectivity and device management, a set of pre-packaged  modules, plug & play connectors to cloud platforms, device certificate management, monitoring as well as built-in software and firmware management.

On top of these foundations, you can build telemetry applications using a combination of components provided by various IoT actors. The features provided by these components can include for example low-level connectivity to IoT protocols, event-stream analytics, machine-learning-powered systems, or application specific processors.

Thin-edge.io can be extended in various programming languages due to its extensible architecture. The following list shows the key aspects of the thin-edge.io architecture:

1. The components are processes exchanging messages over an MQTT bus.
2. The MQTT bus is connected to the cloud, forwarding the messages published on cloud specific topics.
2. A [canonical data format](#thin-edge-json) lets the components exchange telemetry data independently of the connected cloud. This is an optional feature and the components are free to also use cloud specific data formats.
3. The mapper processes are responsible for translating the canonical data format into cloud specific messages and vice versa.

![Overview](./thin-edge-overview.png)

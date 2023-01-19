---
weight: 10
title: Overview
layout: bundle
slug: introduction
aliases:
  - /developers-guide
  - /developers-guide/installing-the-sdk
  - /developers-guide/installing-the-sdk.html
  - /developers-guide/hello-world
  - /developers-guide/hello-world.html
  - /developers-guide/developing-java-clients
  - /developers-guide/developing-java-clients.html
  - /developers-guide/an-end-to-end-example
  - /developers-guide/an-end-to-end-example.html
  - /java/agents
  - /java/developing-java-clients
  - /java/developing-services-client
  - /java/hello-world-basic
  - /java/hello-world-me
  - /device-sdk/device-sdk-java
  - /device-sdk/device-sdk-java/agents
  - /device-sdk/device-sdk-java/developing-java-clients
  - /device-sdk/device-sdk-java/hello-world-basic
  - /device-sdk/device-sdk-java/hello-world-me
  - /device-sdk/device-sdk-java/introduction
  - /device-sdk/java
  - /device-sdk/java/agents
  - /device-sdk/java/developing-java-clients
  - /device-sdk/java/hello-world-basic
  - /device-sdk/java/hello-world-me
  - /device-sdk/java/introduction
  - /device-sdk/hello-mqtt-cs-0
  - /device-sdk/device-sdk-cs
  - /device-sdk/device-sdk-cs/#introduction
  - /device-sdk/device-sdk-cs/#hello-world-basic
  - /device-sdk/device-sdk-cs/#developing-cs-clients
  - /device-sdk/device-sdk-cs/#prerequisites-mqtt
  - /device-sdk/device-sdk-cs/#developing-the-client-mqtt
  - /device-sdk/device-sdk-cs/#cs-static-templates-mqtt
  - /cs
  - /cs/introduction
  - /cs/hello-world-basic
  - /cs/prerequisites-mqtt
  - /cs/developing-cs-clients
  - /cs/developing-the-client-mqtt
  - /cs/cs-static-templates
  - /device-sdk/device-sdk-introduction
  - /device-sdk/device-integration-introduction
  - /device-integration/cpp
  - /device-integration/linux-agent-developer-guide
  - /device-integration/linux-agent-user-guide
  - /device-sdk/cpp
  - /device-sdk/linux-agent-developer-guide
  - /device-sdk/linux-agent-user-guide
  - /thin-edge/thin-edge-doc
  - /thin-edge/overview
  - /thin-edge/thin-edge-architecture
  - /thin-edge/thin-edge-developer-tools
  - /thin-edge/thin-edge-howto
  - /thin-edge/thin-edge-tutorials
---

{{< company-c8y >}} offers a wide range of functionality for interfacing IoT devices and other IoT-related data sources with the {{< product-c8y-iot >}} platform.

We recommend you to can integrate devices via [thin-edge.io](https://thin-edge.io/). See the tutorial for [thin-edge.io on a Raspberry Pi](/device-integration/integration-tutorials/#thin-edge-raspberry-pi) for an easy-to-follow and hands-on example.

You can also use [MQTT](/device-integration/mqtt) and [SmartREST](/reference/smartrest-two/) to integrate devices, which can be very efficiently implemented using available MQTT client libraries such as [Eclipse Paho](https://www.eclipse.org/paho/).

Refer to [Device integration using REST](/device-integration/rest) for detailed information on integrating via REST.

An up-to-date open source reference implementation of a {{< product-c8y-iot >}} agent for embedded Linux systems with many device management features can be found at [https://github.com/SoftwareAG/cumulocity-agents-linux](https://github.com/SoftwareAG/cumulocity-agents-linux). Note that the reference implementation currently uses SmartREST 1 with the choice to switch between HTTP and MQTT as transport protocol.

For information on the general concept of agents being used for interfacing IoT data sources with {{< product-c8y-iot >}}, refer to [Interfacing devices](/concepts/interfacing-devices) in the *Concepts guide*.

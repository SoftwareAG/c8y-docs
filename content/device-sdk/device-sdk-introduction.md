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
---

Cumulocity offers a wide range of functionality for interfacing IoT devices and other IoT-related data sources with the Cumulocity IoT platform.

This Device SDK guide provides detailed information on device integration using [MQTT](/guides/device-sdk/mqtt), [REST](/guides/device-sdk/rest), [C++](/guides/device-sdk/cpp) and [C#](/guides/device-sdk/hello-mqtt-cs-0).

For interfacing devices with Cumulocity, we recommend to use MQTT and SmartREST 2. SmartREST 2 can be very efficiently implemented using generally available MQTT client libraries such as [Eclipse Paho](https://www.eclipse.org/paho/). 

An up-to-date, open source reference implementation of a Cumulocity agent for embedded Linux systems with many device management features can be found at [https://bitbucket.org/m2m/cumulocity-agents-linux](https://bitbucket.org/m2m/cumulocity-agents-linux). Note that the reference implementation currently uses SmartREST 1 with the choice to switch between HTTP and MQTT as transport protocol.

For information on the general concept of agents being used for interfacing IoT data sources with Cumulocity, refer to [Interfacing devices](/guides/concepts/interfacing-devices) in the Concepts guide.

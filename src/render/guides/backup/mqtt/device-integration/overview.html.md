---
order: 10
layout: redirect
title: Overview
---

The basic life cycle for integrating devices into Cumulocity is discussed in [Interfacing devices](/guides/concepts/interfacing-devices).
In this section, we will show how this life cycle can be managed using the MQTT implementation.
The life cycle consists of two phases, a startup phase and a cycle phase.

The startup phase can be as short as just checking the credentials:

* [Step 0](#step-0-request-device-credentials): Request device credentials, if they have not been requested yet.
* [Step 1](#step-1-verify-device): Ensure the device exists.
* [Step 2](#step-2-verify-children): Ensure the device children exist.
* [Step 3](#step-3-subscribe-topics): Subscribe the topics.

The cycle phase consists of two kinds of actions:

* [Step A](#step-a-send-csv-data): Send CSV data
* [Step B](#step-b-receive-csv-operations): Receive CSV operations

![MQTT phases](/guides/images/mqtt/mqttDeviceIntegration.png)

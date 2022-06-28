---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} can interface with LPWAN devices through LPWAN network providers via {{< product-c8y-iot >}} LPWAN agents, such as [Actility LoRa](https://cumulocity.com/guides/protocol-integration/lora-actility/).

Our LoRa integration allows you to define device protocols in a self-service manner to create a binary mapping of the LoRa sensor data to the {{< product-c8y-iot >}} data model.
However, this approach does not work for LoRa devices sending dynamic payloads.
To integrate LoRa devices with dynamic payloads, a custom codec for payload decoding and command encoding can be created in form of a microservice.
This microservice will be referred to as a custom codec microservice.
A custom codec microservice is a typical {{< product-c8y-iot >}} microservice which conforms to a specific contract for decoding and encoding LoRa payloads and commands.

When an LPWAN agent receives an uplink message, it forwards the device data to a REST endpoint (such as `/decode`) exposed by the custom codec microservice for decoding.
Similarly, when the user executes a device command through the device shell, the LPWAN agent forwards the command text to a REST endpoint (such as `/encode`) exposed by the custom codec microservice for encoding.  

To learn more about working with LPWAN custom codec, see the following sections:

* [Implementing a custom codec microservice](#implement-codec-microservice) - How to implement a custom codec microservice that conforms to the predefined contract.
* [Using the lpwan-custom-codec library](#implement-codec-microservice-using-lpwan-custom-codec-library) - How to implement a custom codec microservice using the lpwan-custom-codec library.
* [Deploy the sample codec microservice](#deploy-sample-codec-microservice) - How to deploy the sample codec microservice.

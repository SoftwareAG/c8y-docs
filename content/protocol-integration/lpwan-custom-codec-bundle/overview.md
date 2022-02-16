---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} can interface with LPWAN devices through LPWAN Network Providers via {{< product-c8y-iot >}} LPWAN agents (For example: [Actility LoRa](https://cumulocity.com/guides/protocol-integration/lora-actility/)).

Latest LPWAN devices send dynamic payloads which the existing binary mapping device protocol capability is not flexible enough to decode. Similar is the case with encoding the commands sent to the devices.
To overcome this, LPWAN agents provide a capability to extend the payload decoding and command encoding by allowing you to plugin custom implementation via a microservice.
Henceforth this microservice will be referred as Custom Codec Microservice. Custom Codec Microservice is a typical {{< product-c8y-iot >}} Microservice, which conforms to a specific contract. 

When an LPWAN Agent receives an uplink message, it forwards the device data it recieved to a REST endpoint (/decode) exposed by the Custom Codec Microservice for decoding. Similarly, when the user executes a device command through the device shell, LPWAN agent forwards the command text to a REST endpoint (/encode) exposed by the Custom Codec Microservice for encoding.  

The following sections describe how to:

* [Implement a Custom Codec Microservice](#implement-codec-microservice) How to implement a Custom Codec Microservice that conforms to the predefined contract.
* [Implement a Custom Codec Microservice using lpwan-custom-codec library](#implement-codec-microservice-using-lpwan-custom-codec-library)
* [Deploy sample codec microservice](#deploy-sample-codec-microservice)

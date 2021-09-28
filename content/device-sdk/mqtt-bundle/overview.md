---
weight: 10
layout: redirect
title: Overview
---


The MQTT implementation of {{< product-c8y-iot >}} provides the following benefits:

* Multi-tenancy support: A single endpoint serves multiple tenants.
* Device identity management: Devices authenticate using device-specific credentials.
* Device registration: Non-personalized devices can be deployed by pairing them with {{< product-c8y-iot >}} tenants.
* Device management: Rich, pre-defined device management payload formats to enable out-of-the-box management of millions of devices.
* Standard IoT payload formats: Pre-defined payload formats to support IoT sensor readings, alarm management, remote control and device hierarchies.
* Custom payload formats: Additional payload formats can be added.
* Minimum traffic overhead.
* Processing modes: Control whether data is persisted in {{< product-c8y-iot >}} database, transiently passed to real-time processing, processed using quiescent mode which ensures that real-time notifications are disabled or is processed using CEP mode that ensures data is transiently sent to real-time processing engine only with real-time notifications disabled.
* Full bi-directional communication.
* MQTT over WebSockets support.
* TLS support.
* Full horizontal scalability.

The MQTT section is structured as follows:

* [MQTT implementation](/device-sdk/mqtt#implementation) gives a detailed reference of protocol-level aspects in the {{< product-c8y-iot >}} implementation of MQTT.
* [Device integration](/device-sdk/mqtt#device-integration) walks you through the process of interfacing devices with {{< product-c8y-iot >}} through MQTT.
* [Device certificates](/device-sdk/mqtt#device-certificates) describes how devices can connect via MQTT with certificates.
* [SmartREST 1.0](/device-sdk/mqtt#smartrest-1) defines the SmartREST 1.0 payload format for MQTT for easy portability of existing SmartREST devices.
* [SmartREST 2.0](/device-sdk/mqtt#smartrest-2) defines the SmartREST 2.0 payload format for MQTT with improvements in usability and traffic usage.
* [MQTT static templates](/device-sdk/mqtt/#mqtt-static-templates) provides a reference of pre-defined payload formats that you can use straight away.
* [Handling IDs](/device-sdk/mqtt#handling-ids) describes how IDs are handled in the {{< product-c8y-iot >}} MQTT protocol.
* [JSON via MQTT](/device-sdk/mqtt/#json) describes the payload format that can be used with the {{< product-c8y-iot >}} MQTT implementation.


This section does not describe the basics of MQTT communication. If you are unfamiliar with MQTT, we recommend you to consult one of the numerous introductions in the Internet. Some references can be found on the [MQTT website](https://mqtt.org/mqtt-specification/).

> **Info**: For all MQTT connections to the platform, the maximum accepted payload size is 16184 bytes (16KiB), which includes both message header and body. The header size varies, but its minimum is 2 bytes.

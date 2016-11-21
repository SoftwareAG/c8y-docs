---
order: 10
title: Introduction to MQTT
layout: default
---

## Overview

Besides REST, Cumulocity supports MQTT as second, native protocol.

> Note: MQTT support is currently in beta. We encourage device integrators to provide feedback through [Stackoverflow](http://stackoverflow.com/questions/tagged/cumulocity) or the [support web site](https://support.cumulocity.com).

The MQTT implementation of Cumulocity provides the following benefits:
* Multi-tenancy support: A single endpoint serves multiple tenants.
* Device identity management: Devices authenticate using device-specific credentials.
* Device registration: Non-personalized devices can be deployed by pairing them with Cumulocity tenants.
* Device management: Rich, pre-defined device management payload formats to enable out-of-the-box management of millions of devices.
* Standard Internet of Things payload formats: Predefined payload formats to support Internet of Things sensor readings, alarm management, remote control and device hierarchies.
* Custom payload formats: Additional payload formats can be added. 
* Minimum traffic overhead.
* Full bidirectional communication.
* MQTT over WebSockets support.
* TLS support.
* Full horizontal scalability.

The MQTT developer's guide is structured as follows:

* [Hello MQTT](/guides/mqtt/hello-mqtt) provides an easy introduction to the Cumulocity MQTT protocol using a popular MQTT client.
* [MQTT Implementation](/guides/mqtt/implementation) gives a detailed reference of protocol-level aspects in the Cumulocity implementation of MQTT.
* [Device Integration](/guides/mqtt/device-integration) walks you through the provess of interfacing devices with Cumulocity through MQTT.
* [SmartREST 1.0](/guides/mqtt/smartrest-1) defines the SmartREST 1.0 payload format for MQTT for easy portability of existing SmartREST devices.
* [SmartREST 2.0](/guides/mqtt/smartrest-2) defines the SmartREST 2.0 payload format for MQTT with improvements in usability and traffic usage.
* [MQTT Static Templates](/guides/mqtt/static-templates) provides a reference of pre-defined payload formats that you can use straight away.
* [Handling IDs](/guides/mqtt/handling-ids) describes how IDs are handled in the Cumulocity MQTT protocol.

> This developer's guide does not describe the basics of MQTT communication. If you are unfamiliar with MQTT, we recommend consulting one of the numerous introductions on the Internet. Some references can be found on the [MQTT web site](http://mqtt.org/documentation).

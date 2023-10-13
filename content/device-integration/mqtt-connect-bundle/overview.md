---
weight: 10
layout: redirect
title: Overview
---

MQTT Connect is the new MQTT endpoint implementation of {{< product-c8y-iot >}} which provides the following benefits:

* Support for publishing and subscribing arbitrary payloads on any MQTT topic. The topics that are used by the existing {{< product-c8y-iot >}} MQTT implementation are not permitted for use with MQTT Connect.
* Support for subscribing to the data stream from MQTT Connect and mapping it to {{< product-c8y-iot >}} compatible one or routing them to a different service.
* Multi-tenancy support: A single endpoint serves multiple tenants.
* Full horizontal scalability.

This section does not describe the basics of MQTT communication. If you are unfamiliar with MQTT, we recommend 
you to consult one of the numerous introductions on the internet. Some references can be found on the [MQTT website](https://mqtt.org/mqtt-specification/).

### Requirements {#requirements}

MQTT Connect is in final stages of development now, available as a private preview only. Please reach out to [product support](/additional-resources/contacting-support/) if interested.

### Architecture {#architecture}

MQTT Connect works together with the Messaging Service to provide a framework for highly customizable and flexible MQTT message processing solutions.
The diagram below illustrates how a message flows, starting from the device, through the Messaging Service, 
then to the microservice where it is converted to the final {{< product-c8y-iot >}} REST request.

![MQTT Connect send](/images/mqtt-connect/mqtt-connect-send.svg)

All MQTT messages coming to MQTT Connect are forwarded to the Messaging Service, where they are persisted and waiting to be consumed.
A custom microservice that understands the topic and payload structure can, with the help of [Java Client](/device-integration/mqtt-connect#java-client),    
consume the MQTT messages, translate them to the {{< product-c8y-iot >}} format, and then use the [Microservice SDK](/microservice-sdk/java) to push them into {{< product-c8y-iot >}}.

Similarly, messages can be sent to devices, as shown in the diagram below.

![MQTT Connect push](/images/mqtt-connect/mqtt-connect-push.svg)

Like with the message coming from the device the same solution can be also applied when trying to communicate with the device.
Given the MQTT client ID and the topic, a microservice can push any MQTT message to a device via [Java Client](/device-integration/mqtt-connect#java-client).

### MQTT Connect vs {{< product-c8y-iot >}} MQTT {#mqtt-connect-vs-cumulocity-iot-mqtt}

The table below presents a basic comparison between the standard {{< product-c8y-iot >}} MQTT functionality and that of MQTT Connect.

|                              | {{< product-c8y-iot >}} MQTT                            | MQTT Connect                                                                      |
|:-----------------------------|:--------------------------------------------------------|:----------------------------------------------------------------------------------|
| QoS                          | 0, 1, 2                                                 | 0, 1                                                                              |
| Clean session                | Starting with clean session is recommended                 | Starting with clean session is recommended                                           |
| Retained flag                | Not supported                                           | Not supported                                                                     |
| Last will                    | Supported                                               | Supported                                                                         |
| MQTT 5.0 features            | Not supported                                           | Support is planned                                                                |
| Authentication               | Basic and device certificate                            | Basic authentication is supported, device certificate support is planned          |
| Scalability                  | Together with {{< product-c8y-iot >}}                   | Independent                                                                       |
| Topic format                 | Determined by the SmartREST 2.0 protocol                | Unrestricted, SmartREST topic names are reserved and cannot currently be used     |                                                                     |
| Payload                      | Determined by the SmartREST 2.0 protocol                | Unrestricted, maximum message size is 1048576 bytes (1 MiB) including all headers |                                                                   |
| Extensibility                | Limited by SmartREST 2.0 custom templates               | Custom mapping microservices can support arbitrary MQTT-based protocols           |
| Message processors/consumers | Build-in message processor for each SmartREST 2.0 topic | Custom mapping microservices can support multiple processors for a topic          |
| JSON via MQTT                | Limited feature set                                     | Custom mapping microservices can support arbitrary JSON payloads                  |                                                  |

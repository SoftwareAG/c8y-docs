---
weight: 10
title: Why Cumulocity IoT Platform supports LPWAN Codecs
layout: redirect
---

{{< product-c8y-iot >}} has the ability to integrate LPWAN devices via agents, for a list of all supported LPWAN agents see the [Protocol integration guide](https://cumulocity.com/guides/protocol-integration/overview/).

Latest LPWAN devices send dynamic payloads which are difficult to decode using the existing binary mapping device protocol capability. Similar is the case wieth the encoding commands sent to the devices.
This capability solves this problem by providing you an ability to plugin a microservice which implements the encode and decode functionality.

These Custom codec microservices can be developed in two ways.

* A custom codec is a typical Cumulocity microservice conforming to the `decode` and `encode` contracts and for each supported device it should have
a device type and set of device command operations. For details refer [Codec API definitions](#codec-api-definition) 
 

* For the user convenience we have provided `lpwan-custom-codec` library which automatically exposes the `decode` and `encode` endpoints 
where user just have two implement set of interfaces.For details refer [Steps to implement LPWAN codec microservice using lpwan-custom-codec library](#steps-to-implement-custom-codec-microservice)



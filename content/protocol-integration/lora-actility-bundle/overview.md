---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} can interface with LoRa devices through Actility's ThingPark Wireless, Enterprise or Community edition. You can:

* Provision and deprovision LoRa devices easily using the {{< product-c8y-iot >}} Device Management. No interaction in the ThingPark user interface is required.
* Decode upstream payload packets using a web-based user interface.
* Debug and postprocess raw device data through {{< product-c8y-iot >}} events.
* Send downstream data to the device using {{< product-c8y-iot >}} operations.
* Make use of existing {{< product-c8y-iot >}} features with LoRa devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

The following illustration gives an overview of the {{< product-c8y-iot >}} Actility LoRa integration.

![{{< product-c8y-iot >}} Actility LoRa integration](/images/device-protocols/lora-actility/lora-cumulocity-integration.png)

The following sections describe how to:

* [Configure your ThingPark account credentials](#configure-credentials) in {{< product-c8y-iot >}}.
* [Create device protocols](#create-device-protocols) for all devices.
* [Register devices](#register-device) and visualize Actility payload using {{< product-c8y-iot >}}.
* [Deprovision a device](#deprovision-device) in ThingPark.
* [Send operations](#configurable-port) to a device.

Moreover you find details on:

* [ThingPark Api availability monitoring](#thingpark-monitoring) in {{< product-c8y-iot >}}.
* Measurements and events created during [uplink message processing](#uplink-message).
* [Troubleshooting](#troubleshooting) for warning messages.

> Note that your subscription needs to include this feature. If you do not see the functionality described in this document, please contact [product support](/welcome/contacting-support/).

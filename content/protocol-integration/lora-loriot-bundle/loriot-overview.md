---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} can interface with LORIOT Network Server through the Loriot agent microservice. You can:

* Register the device in two ways:
  - Create a Loriot LNS connection and register the device using {{< product-c8y-iot >}}.
  - Configure the Loriot Agent endpoint via Loriot Network Server and register the device via uplink message. In order to be able to send downlink messages, the devices created using this method need to be re-registered via {{< product-c8y-iot >}} to be associated with a connection and device type.  
* Assign a device protocol for the LoRa device for payload processing.
* Decode upstream payload packets using a web-based user interface.
* Post-process raw device data through {{< product-c8y-iot >}} events.
* Make use of existing {{< product-c8y-iot >}} features with LoRa devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

The following illustration gives an overview of the {{< product-c8y-iot >}} Loriot LoRa integration.

![{{< product-c8y-iot >}} Loriot LoRa integration](/images/device-protocols/lora-loriot/loriot-cumulocity-integration.png)

The following sections describe how to:

* [Device Registration via uplink message](#configure-loriot-credentials-register-network-server)
* [Device registration via Cumulocity](#configure-loriot-credentials-cumulocity)
* [Assign the Loriot admin role](#assign-loriot-admin-role) to the user in {{< product-c8y-iot >}}.
* [Create device protocols](#create-loriot-device-protocols) for all devices.
* [Set device protocol](#assign-loriot-device-protocol) for processing the Loriot LoRa device payload for creating measurements or events in {{< product-c8y-iot >}}.
* [Send operations](#operations-loriot) to devices.

Moreover, check out

* [Uplink message processing](#uplink-message) for information on measurements and events created while processing the uplink message.
* [Troubleshooting](#sigfox-troubleshooting) in case of any issues.


> Note that your subscription needs to include this feature to be able to use it. If you do not see the functionality described in this document, please contact [product support](/welcome/contacting-support/).

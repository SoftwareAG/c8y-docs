---
weight: 10
title: Overview
layout: redirect
---

Cumulocity IoT can interface with LORIOT Network Server Provider through Loriot agent microservice. You can:

* Configure the loriot agent endpoint in LORIOT Network Server using HTTPS data forwarder.
* Loriot agent automatically creates Lora device in cumulocity if not exists.
* Assign device protocol for the LoRa device for payload processing. 
* Decode upstream payload packets using a web-based user interface.
* Post process raw device data through Cumulocity IoT events.
* Make use of existing Cumulocity IoT features with LoRa devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

The following illustration gives an overview of the Cumulocity IoT LORIOT LoRa integration.

![Cumulocity IoT LORIOT LoRa integration](/images/device-protocols/lora-loriot/loriot-cumulocity-integration.png)

The following sections describe how to:

* [Configure Loriot agent endpoint credentials](#configure-loriot-credentials) in LORIOT Network Server Provider.
* [Loriot admin role](#assign-loriot-admin-role) to the user in Cumulocity.
* [Register devices](#register-loriot-lora-device) and visualize Loriot payload using Cumulocity IoT.
* [Create device protocols](#create-loriot-lora-device-protocols) for all devices.
* [Set device protocol](#assign-loriot-lora-device-protocol) for processing the Loriot LoRa device payload for creating measurements or events in Cumulocity IoT.
* [Troubleshooting](#troubleshooting) for warning messages.
> Note that your subscription needs to include this feature. If you do not see the functionality described in this document, please [contact support](/about-doc/contacting-support).

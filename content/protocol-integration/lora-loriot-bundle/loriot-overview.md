---
weight: 10
title: Overview
layout: redirect
---

{{< product-name-1 >}} can interface with LORIOT Network Server through the Loriot agent microservice. You can:

* Configure the Loriot agent endpoint in LORIOT Network Server using {{< product-name-1 >}} data forwarder.
* Assign a device protocol for the LoRa device for payload processing.
* Decode upstream payload packets using a web-based user interface.
* Post-process raw device data through {{< product-name-1 >}} events.
* Make use of existing {{< product-name-1 >}} features with LoRa devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

>**Info:** The Loriot agent automatically creates a LoRa device in the {{< product-name-1 >}} platform if it does not exist so explicit registration is not required.

The following illustration gives an overview of the {{< product-name-1 >}} Loriot LoRa integration.

![{{< product-name-1 >}} Loriot LoRa integration](/images/device-protocols/lora-loriot/loriot-cumulocity-integration.png)

The following sections describe how to:

* [Configure Loriot agent endpoint credentials](#configure-loriot-credentials) in LORIOT Network Server.
* [Assign the Loriot admin role](#assign-loriot-admin-role) to the user in {{< product-name-1 >}}.
* [Register devices](#register-loriot-device) and visualize Loriot payload using {{< product-name-1 >}}.
* [Create device protocols](#create-loriot-device-protocols) for all devices.
* [Set device protocol](#assign-loriot-device-protocol) for processing the Loriot LoRa device payload for creating measurements or events in {{< product-name-1 >}}.
* [Troubleshoot](#loriot-troubleshooting) for warning messages.


> Note that your subscription needs to include this feature to be able to use it. If you do not see the functionality described in this document, please contact [product support](/welcome/contacting-support/).

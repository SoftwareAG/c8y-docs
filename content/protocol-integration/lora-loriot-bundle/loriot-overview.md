---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} can interface with LORIOT Network Server through the Loriot agent microservice. You can:

* Configure the Loriot agent endpoint in LORIOT Network Server using {{< product-c8y-iot >}} data forwarder.
* Assign a device protocol for the LoRa device for payload processing.
* Decode upstream payload packets using a web-based user interface.
* Post-process raw device data through {{< product-c8y-iot >}} events.
* Make use of existing {{< product-c8y-iot >}} features with LoRa devices, for example: connectivity monitoring, device management, data visualization with dashboards, real-time analytics and more.

{{< c8y-admon-info >}}
The Loriot agent automatically creates a LoRa device in the {{< product-c8y-iot >}} platform if it does not exist so explicit registration is not required.
{{< /c8y-admon-info >}}

The following illustration gives an overview of the {{< product-c8y-iot >}} Loriot LoRa integration.

![{{< product-c8y-iot >}} Loriot LoRa integration](/images/device-protocols/lora-loriot/loriot-cumulocity-integration.png)

The following sections describe how to:

* [Configure Loriot agent endpoint credentials](#configure-loriot-credentials) in LORIOT Network Server.
* [Assign the Loriot admin role](#assign-loriot-admin-role) to the user in {{< product-c8y-iot >}}.
* [Register devices](#register-loriot-device) and visualize Loriot payload using {{< product-c8y-iot >}}.
* [Create device protocols](#create-loriot-device-protocols) for all devices.
* [Set device protocol](#assign-loriot-device-protocol) for processing the Loriot LoRa device payload for creating measurements or events in {{< product-c8y-iot >}}.

Moreover, check out

* [Uplink message processing](#uplink-message) for information on measurements and events created while processing the uplink message.
* [Troubleshooting](#sigfox-troubleshooting) in case of any issues.


> Note that your subscription needs to include this feature to be able to use it. If you do not see the functionality described in this document, please contact [product support](/welcome/contacting-support/).

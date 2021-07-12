---
weight: 20
title: Configuring the Loriot agent endpoint credentials
layout: redirect
---

Before using LoRa devices with {{< product-name-1 >}}, you need to configure the {{< product-name-1 >}} Loriot agent endpoint details in LORIOT Network Server.

### <a name="map-loriot-endpoint-with-credentials">Configuring the Loriot endpoint using Basic authentication</a>

In LORIOT Network Server you can create multiple applications. Each application allows you to configure LoRa devices.

To specify the Loriot agent endpoint with user credentials, navigate to one of the applications in your LORIOT Network Server account and select **Output** in the **Application** menu in the navigator.

LORIOT Network Server forwards the LoRa device messages to the external applications using different connectors which are available in the **Output** section.

![Output page with https forwarder](/images/device-protocols/lora-loriot/loriot-output-https-page.png)

Use {{< product-name-1 >}} data forwarder for configuring the Loriot endpoint using Basic authentication.

![Setting endpoint credentials](/images/device-protocols/lora-loriot/loriot-endpoint-assignment.png)

Always keep the **Gateway Information** option enabled because the Loriot agent only processes "gw" (gateway information) messages.

![Enable gateway information option](/images/device-protocols/lora-loriot/loriot-gateway-option-enabled.png)

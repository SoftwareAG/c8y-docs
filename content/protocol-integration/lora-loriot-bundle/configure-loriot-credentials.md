---
weight: 20
title: Configure the loriot agent endpoint in LORIOT Network Server
layout: redirect
---


Before using LoRa devices with Cumulocity IoT, you need to configure your Cumulocity loriot server agent endpoint details in the output section of an application in LORIOT network server provider account. 
In order to specify the loriot agent endpoint with user credentials, you can go to one of the applications and select **Output** in the **Application** menu in the navigator.

### <a name="map-loriot-endpoint-with-credentials">Configure loriot endpoint using Basic authentication</a>

LORIOT Network Server allows you to create multiple applications and each application allows you to configure LoRa devices.
LORIOT Network Server forwards the LoRa device messages to the external applications using different connectors which are available in the **Output** of the **Application** menu in the navigator.


![Output page with https forwarder](/images/device-protocols/lora-loriot/loriot_output_https_page.png)

Use HTTPS data forwarder for configuring Loriot enpoint using Basic authorzation.

![Setting endpoint credentials](/images/device-protocols/lora-loriot/loriot-end-point-assignment.png)

Always keep 'Gateway Information' enabled because loriot agent process only 'gw' messages.

![Enable gateway information option](/images/device-protocols/lora-loriot/loriot-gateway-option-enabled.png)
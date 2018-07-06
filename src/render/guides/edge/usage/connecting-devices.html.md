---
order: 20
title: Connecting devices
layout: redirect
---

Cumulocity uses REST and MQTT as protocols for external communication. Both protocols may be used to interface devices with Cumulocity. For details refer to  the [REST developers guide](/guides/rest) and the [MQTT developers guide](/guides/mqtt).

Additionally, Cumulocity offers the Cloud Fieldbus application as an optional service, to collect data from fieldbus devices and remotely manage them. To do so, various protocols are provided, e.g. Modbus and OPC/UA. For details on how to integrate devices using Modbus and OPC/UA, refer to Optional Services > [Cloud Fieldbus](/guides/users-guide/optional-services) in the User guide.
   
### Example: Connecting an OPCUA device    
   
To connect an OPC/UA device in Edge, follow these steps:   
   
Check if the OPC/UA agent is running in Edge (running on port  6670):  

	$ sudo systemctl status opcua-agent-server

<img src="/guides/images/edge/edge-device-agent-check.jpg" name="Check agent" style="width:100%;"/> 

Check if the platform.url in `/etc/opcua/opcua-agent-gateway.properties` is pointing to the correct URL, which is `http://localhost`.

Next, you need to register a device in the Device management application with the same device ID as the gateway.identifier in `/etc/opcua/opcua-agent-gateway.properties`, e.g. “opcua”.

<img src="/guides/images/edge/edge-device-register.jpg" name="Register device" style="width:75%;"/> 

Follow the description in Device Management > [Connecting devices](/guides/users-guide/device-management/connecting-devices) in the User guide to register a device.

In the Device Management application, click “All devices” in the navigator and find the opcua device in the device list.

<img src="/guides/images/edge/edge-device-list.jpg" name="Device list" style="width:100%;"/> 



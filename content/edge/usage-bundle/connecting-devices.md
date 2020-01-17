---
weight: 20
title: Connecting devices
layout: redirect
---

Cumulocity uses REST and MQTT as protocols for external communication. Both protocols may be used to interface devices with Cumulocity. For details refer to   the sections on [Device integration using REST](/guides/device-sdk/rest) and [Device integration using MQTT](/guides/device-sdk/mqtt) in the Device SDK guide.

Additionally, Cumulocity IoT Edge offers Cloud Fieldbus functionality to collect data from fieldbus devices and remotely manage them. To do so, various protocols are provided, e.g. Modbus and OPC/UA. For details on how to integrate devices using Modbus and OPC/UA, refer to Optional Services > [Cloud Fieldbus](/guides/users-guide/optional-services#cloud-fieldbus) in the User guide.
   
### Connecting a Modbus device

Modbus is a serial communications protocol originally published by Modicon and used to establish master-slave/client-server communication between devices.

Before you connect a Modbus device 

* check if the agent is running,
* register the Modbus agent. This only has to be done once as a preparation step and is not required for every Modbus device.
   
#### How to check/change the agent state

Use the following command to check if the agent is running in Cumulocity IoT Edge (running on port  6670):  

```shell
$ systemctl status cumulocity-agent
```

If the agent is not running, start it with the following command:

```shell
$ systemctl start cumulocity-agent
```

The Modbus agent is pre-registered in the post-installation phase.
In the Device Management application, click **All devices** in the navigator and find the Modbus agent (called "linux-agent") in the device list.

<img src="/images/edge/edge-modbus-device.png" name="Device list" style="width:100%;"/> 

#### How to connect Modbus devices

For further information on connecting and managing Modbus devices, refer to Optional services > [Cloud Fieldbus](/guides/users-guide/optional-services#cloud-fieldbus) in the User guide.

### Example: Connecting an OPCUA device    
   
To connect an OPC/UA device in Edge, follow the steps below.

#### Preparation
   
Check if the OPC/UA agent is running in Cumulocity IoT Edge (running on port  6670):  

```shell
$ sudo systemctl status opcua-agent-server
```

<img src="/images/edge/edge-device-check-agent.png" name="Check agent" style="width:100%;"/>

If the agent is not running, start it with the following command:

```shell
$ sudo systemctl start opcua-agent-server
```

Check if the platform.url in */etc/opcua/opcua-agent-gateway.properties* is pointing to the correct URL, which is *http://localhost*.


#### Registering the device

Next, you need to register a device in the Device Management application with the same device ID as the gateway.identifier in */etc/opcua/opcua-agent-gateway.properties*, e.g. “opcua”.

<img src="/images/edge/edge-device-registration-example.png" name="Register device"/> 

Follow the description in Device Management > [Connecting devices](/guides/users-guide/device-management#connecting-devices) in the User guide to register a device.

In the Device Management application, click **All devices** in the navigator and find the OPCUA device in the device list.

<img src="/images/edge/edge-opcua-device.png" name="Device list" style="width:100%;"/> 

For further information on managing and configuring OPCUA devices, refer to Optional services > [Cloud Fieldbus](/guides/users-guide/optional-services#cloud-fieldbus) in the User guide.





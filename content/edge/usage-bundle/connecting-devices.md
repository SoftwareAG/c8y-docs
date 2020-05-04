---
weight: 20
title: Connecting devices
layout: redirect
---

Cumulocity IoT uses REST and MQTT as protocols for external communication. Both protocols may be used to interface devices with Cumulocity IoT . For more information, see [Device integration using REST](/device-sdk/rest) and [Device integration using MQTT](/device-sdk/mqtt) in the Device SDK guide.

Additionally, Cumulocity IoT Edge offers Cloud Fieldbus functionality to collect data from fieldbus devices and remotely manage them. To do so, various protocols are provided, e.g. Modbus and OPC UA. For details on how to integrate devices using Modbus and OPC UA, refer to Optional Services > [Cloud Fieldbus](/users-guide/optional-services#cloud-fieldbus) in the User guide.

>**Info:** Currently, only the Modbus and OPC UA protocols are supported.
   
### Connecting a Modbus device

Modbus is a serial communications protocol originally published by Modicon and used to establish master-slave/client-server communication between devices.

Before you connect a Modbus device 

* Check if the agent is running.
* Register the Modbus agent. This only has to be done once as a preparation step and is not required for every Modbus device.
* Next, you must register the device in the Device Management application with the device ID: “linux-agent".
   
#### How to check/change the agent state

Use the following command to check if the agent is running in Cumulocity IoT Edge (running on port  6670):  

```shell
[admin@server ~]$ systemctl status cumulocity-agent
```

If the agent is not running, start it with the following command:

```shell
[admin@server ~]$ systemctl start cumulocity-agent
```

The Modbus agent is pre-registered in the post-installation phase.
In the Device Management application, click **All devices** in the navigator and find the Modbus agent (called "linux-agent") in the device list.

<img src="/images/edge/edge-modbus-device.png" name="Device list" style="width:100%;"/> 

#### How to connect Modbus devices

For further information on connecting and managing Modbus devices, refer to Optional services > [Cloud Fieldbus](/users-guide/optional-services#cloud-fieldbus) in the User guide.

### Example: Connecting an OPCUA device

>**Important:** While configuring the OPC UA server, ensure that the server is reachable from the Edge VM. If you are using a hostname, configure DNS accordingly. 
   
To connect an OPC UA device in Edge, follow the steps below.

#### Preparation
   
**OPC UA Management service**

Check if the OPC UA management service is running in Cumulocity IoT Edge (running on port 8083):  

```shell
[admin@server ~]$ sudo service opcua-mgmt-service status
```

If the agent is not running, start it with the following command:

```shell
[admin@server ~]$ sudo service opcua-mgmt-service start
```

**OPC UA Device Gateway** 

Check if the OPC UA device gateway is running in Cumulocity IoT Edge (running on port 1099):  

```shell
[admin@server ~]$ sudo service opcua-device-gateway status
```

If the agent is not running, start it with the following command:

```shell
[admin@server ~]$ sudo service opcua-device-gateway start
```

#### Registering the device

Next, you need to register a device in the Device Management application with the name opcua-gateway

<img src="/images/edge/edge-device-registration-example.png" name="Register device"/> 

Follow the description in Device Management > [Connecting devices](/users-guide/device-management#connecting-devices) in the User guide to register a device.

In the Device Management application, click **All devices** in the navigator and find the OPCUA device in the device list.

For further information about managing and configuring OPCUA devices, see [OPC UA](/users-guide/optional-services/#opc-ua) section in the User guide.





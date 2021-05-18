---
weight: 60
title: Connecting a Modbus device
layout: redirect
---

Modbus is a serial communications protocol originally published by Modicon and used to establish primary-replica/client-server communication between devices.

Before you connect a Modbus device, ensure that the agent is running.

#### How to check/change the agent state

Use the following command to check if the agent is running in Cumulocity IoT Edge (running on port  6670):  

```shell
[admin@iot-edge-server ~]$ systemctl status cumulocity-agent
```

If the agent is not running, start it with the following command:

```shell
[admin@iot-edge-server ~]$ systemctl start cumulocity-agent
```

The Modbus agent is pre-registered.
In the Device Management application, click **All devices** in the navigator and find the Modbus agent (called "linux-agent") in the device list.

<img src="/images/edge/edge-modbus-device.png" name="Device list" style="width:100%;"/>

#### How to connect Modbus devices

For more information about connecting and managing Modbus devices, see [Cloud Fieldbus](/protocol-integration/cloud-fieldbus/) in the Protocol integration guide.

### Example: Connecting an OPCUA device

>**Important:** While configuring the OPC UA server, ensure that the server is reachable from the Edge appliance. If you are using a hostname, configure the DNS accordingly.

To connect an OPC UA device in Edge, follow the steps below.

#### Preparation

**OPC UA Management service**

Check if the OPC UA management service is running in Cumulocity IoT Edge (running on port 8083):  

```shell
[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service status
```

If the agent is not running, start it with the following command:

```shell
[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service start
```

**OPC UA Device Gateway**

Check if the OPC UA device gateway is running in Cumulocity IoT Edge (running on port 1099):  

```shell
[admin@iot-edge-server ~]$ sudo service opcua-device-gateway status
```

If the agent is not running, start it with the following command:

```shell
[admin@iot-edge-server ~]$ sudo service opcua-device-gateway start
```

#### Registering the device

Next, you must register a device in the Device Management application with the name opcua-gateway.

<img src="/images/edge/edge-device-registration-example.png" name="Register device"/>

Follow the description in [Device Management > Connecting devices](/users-guide/device-management#connecting-devices) in the User guide to register a device.

In the Device Management application, click **All devices** in the navigator and find the OPCUA device in the device list.

For further information about managing and configuring OPCUA devices, see [OPC UA](/protocol-integration/opcua/) in the Protocol integration guide.
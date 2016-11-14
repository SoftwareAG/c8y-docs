---
order: 40
title: Device Integration
layout: default
---

## Overview

The basic life cycle for integrating devices into Cumulocity is discussed in [Interfacing devices](/guides/concepts/interfacing-devices).
In this section, we will show how this life cycle can be managed using the MQTT implementation.
The life cycle consists of two phases, a startup phase and a cycle phase.

The startup phase can be as short as just checking the credentials:

* [Step 0](#step-0-request-device-credentials): Request device credentials, if they have not been requested yet.
* [Step 1](#step-1-verify-device): Ensure the device exists.
* [Step 2](#step-2-verify-children): Ensure the device children exist.
* [Step 3](#step-3-subscribe-topics): Subscribe the topics.

The cycle phase consists of two kinds of actions:

* [Step A](#step-a-send-csv-data): Send CSV data
* [Step B](#step-a-receive-csv-operations): Receive CSV operations

![MQTT phases](/guides/mqtt/mqttDeviceIntegration.png)

## Startup phase

### Step 0: Request device credentials

In Cumulocity every MQTT connection needs to be authenticated. You can use the device credentials topics in the MQTT implementation to generate new credentials for a device.
Once the device retrieved the credentials it needs to store them locally for further connections.

The process works as follows:
* Cumulocity assumes each device to have some form of unique ID. A good device identifier may be the MAC address of the network adapter, the IMEI of a mobile device or a hardware serial number.
* When you take a new device into use, you enter this unique ID into "Device registration" in Cumulocity and start the device.
* The device will use this ID as part of the [MQTT ClientId](/guides/mqtt/implementation#mqtt-clientid) and static user credentials that can be enquired from support@cumulocity.com.
* The device subscribes to the topic `s/dcr`
* The device starts publishing empty messages on the topic `s/ucr` to notify the server that it is ready to retrieve credentials
* You can accept the connection from the device in "Device registration", in which case Cumulocity sends generated credentials to the device.

The device will receive a message in the following format:

```
70,<tenant>,<username>,<password>
```

After receiving the credentials the device can close the MQTT connection and create a new one with the received credentials.

### Step 1: Verify device

As MQTT supports an automatic device creation if the client sends data and there is no device present this step is only required if you want to take the device creation into your own hand.

The device creation can be achieved by the [static template 100](/guides/mqtt/static-templates).
This template can be blindly used on every boot of the device as it will only create the device if it is not already present.
The device will be automatically linked to the ID the client uses with its MQTT ClientId.

```
100,Device Name,Device Type
```

### Step 2: Verify children

Like the root device also children of it are covered by the automatic device creation.

For handling this step manually you can send the [static template 101](/guides/mqtt/static-templates) for creating a child device.
Like before this template will only create the child if it did not already exist.

```
101,Unique Child ID,Child Name,Child Type
```

### Step 3: Subscribe topics

If the device supports operations it should subscribe to all topics (static templates and SmartREST 2.0) that  it needs.

## Cycle phase

### Step A: Send CSV data

While the device holds an active MQTT connection it can publish on either the topics for static templates or on the topics for a SmartREST template to send data to the server.
The physical device is because of the MQTT ClientId directly connected to the device object in Cumulocity. Therefore any data you send is automatically connected to the device.
To send data to a child device please publish the data to the topics describe in the section about [device hierarchies](/guides/mqtt/implementation#device-hierarchies).

### Step B: Receive CSV operations

By subscribing to a topics the device automatically tells Cumulocity that it wants to receive operations. Any operation created will be automatically parsed using either the static templates or the templates the device defined.

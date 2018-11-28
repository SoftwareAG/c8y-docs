---
order: 80
title: Device integration
layout: redirect
---

### Overview

The basic life cycle for integrating devices into Cumulocity is discussed in [Interfacing devices](/guides/concepts/interfacing-devices).

In this section, we will show how this life cycle can be managed using the MQTT implementation.

The life cycle consists of two phases, a startup phase and a cycle phase.

The startup phase can be as short as just checking the credentials:

* [Step 0](#step-0-request-device-credentials): Request device credentials, if they have not been requested yet.
* [Step 1](#step-1-verify-device): Ensure that the device exists.
* [Step 2](#step-2-verify-children): Ensure that the device children exist.
* [Step 3](#step-3-subscribe-topics): Subscribe to the topics.

The cycle phase consists of two kinds of actions:

* [Step A](#step-a-send-csv-data): Send CSV data
* [Step B](#step-b-receive-csv-operations): Receive CSV operations

![MQTT phases](/guides/images/mqtt/mqttDeviceIntegration.png)


### Startup phase

#### Step 0: Request device credentials

In Cumulocity, every MQTT connection needs to be authenticated. You can use the device credentials topics in the MQTT implementation to generate new credentials for a device.

Once the device retrieved the credentials it needs to store them locally for further connections.

To establish connection you need to configure the following connection parameters:

- Host: <Your_cumulocity_url>
- User: <Tenant>/<Username>
- Password: Your cumulocity password

For more info, refer to the [Hello MQTT](https://www.cumulocity.com/guides/device-sdk/mqtt/#hello-mqtt) section.

The process works as follows:

* Cumulocity assumes each device to have some form of unique ID. A good device identifier may be the MAC address of the network adapter, the IMEI of a mobile device or a hardware serial number.
* When you take a new device into use, you enter this unique ID into "Device registration" in the Device Management application in Cumulocity and start the device.
* The device will use this ID as part of the [MQTT ClientId](/guides/device-sdk/mqtt#mqtt-clientid) and static user credentials that can be enquired from support@cumulocity.com.
* The device subscribes to the topic `s/dcr`.
* You need to publish an empty message  on the `s/ucr` channel in order to allow cumulocity to accept the registration.
* Another empty message must be published to `s/ucr` to receive credentials through `s/dcr`.
* You can accept the connection from the device in "Device registration", in which case Cumulocity sends generated credentials to the device.

> **Info:** The process will fail if Cumulocity is not waiting for connection from the desired device.

The device will receive a message in the following format:

```
70,<tenant>,<username>,<password>
```

After receiving the credentials the device can close the MQTT connection and create a new one with the received credentials.

#### Step 1: Verify device

As MQTT supports an automatic device creation if the client sends data and there is no device present, this step is only required if you want to create the device manually.

The device creation can be achieved by the [static template 100](/guides/device-sdk/mqtt#static-templates). This template can be blindly used on every boot of the device as it will only create the device if it is not already present.

The device will automatically be linked to the ID the client uses with its MQTT ClientId.

>**Info:**The topic used for Cumulocity's pre-provided static templates is "s/us".

```
100,Device Name,Device Type
```

#### Step 2: Verify children

Like the root device also children of it are covered by the automatic device creation.

For handling this step manually you can send the [static template 101](/guides/device-sdk/mqtt#static-templates) for creating a child device. The template will only create the child if it does not already exist.

```
101,Unique Child ID,Child Name,Child Type
```

#### Step 3: Subscribe topics

If the device supports operations it should subscribe to all required topics (static templates and SmartREST 2.0).

### Cycle phase

#### Step A: Send CSV data

While the device holds an active MQTT connection it can publish either on the topics for static templates or on the topics for a SmartREST template to send data to the server.

Based on the MQTT ClientId the physical device is directly connected to the device object in Cumulocity. Therefore any data you send is automatically connected to the device.

To send data to a child device, publish the data to the topics described in [Device hierarchies](/guides/device-sdk/mqtt#device-hierarchies).

#### Step B: Receive CSV operations

By subscribing to a topic the device automatically tells Cumulocity that it wants to receive operations. Any operation created will be automatically parsed using either the static templates or the templates the device defined.


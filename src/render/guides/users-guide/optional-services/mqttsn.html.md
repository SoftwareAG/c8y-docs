---
order: 70
title: MQTT-SN
layout: redirect
---

MQTT-SN is a publish/subscribe messaging protocol for wireless sensor networks (WSN), with the aim of extending the MQTT protocol beyond the reach of TCP/IP infrastructure for Sensor and Actuator solutions. For more information, see 
[MQTT-SN specification](http://mqtt.org/new/wp-content/uploads/2009/06/MQTT-SN_spec_v1.2.pdf).

The MQTT-SN implementation looks similar to MQTT in most parts and the MQTT-SN gateway plays the role of translating the messages between them.

The following sections describe how to use MQTT-SN: 

* [Hello MQTT-SN](#hello-mqtt-sn) provides an easy introduction to the Cumulocity MQTT-SN protocol using a popular MQTT-SN client
* [MQTT-SN implementation](#mqtt-sn-implementation) gives a detailed reference of protocol-level aspects in the Cumulocity implementation of MQTT-SN
* [SmartREST 2.0](#sn-smartrest-2) provides a reference for SmartREST 2.0 payload format
* [MQTT static template](#sn-mqtt-static) provides a reference of pre-defined payload formats that you can use straight away

### <a name="hello-mqtt-sn"></a>Hello MQTT-SN

In this section, you will learn how to use MQTT-SN with Cumulocity using pre-defined messages (called "static templates").

#### <a name="sn-prerequisites"></a>Prerequisites

Make sure you have installed [MQTT-SN-TOOLS](https://github.com/njh/mqtt-sn-tools).

#### <a name="sn-device-registration"></a>Registration of devices

MQTT-SN has no authentication mechanism. Therefore the device can only send its IMEI (or other kinds of UID). The device registration is done via the standard Cumulocity registration process described in [Connecting devices](/guides/users-guide/device-management#connecting-devices).

#### <a name="sn-sending-data"></a>Sending data

##### Creating the device

After successfully registering the device(s), you can start sending messages. The following command can be used to create your device:

```
./mqtt-sn-pub -h <host> -p <port> -i SN_DEVICE -T 1 -m 100,SN_DEVICE,c8y_MQTTSNDevice -d
```

The following command options may be used: 

|Option|Description|
|:---|:---------------|
|-i|ID to use for this client. The ID used here corresponds to the external ID of the device in Cumulocity and the device should be registered with this ID in the platform.|
|-T|MQTT-SN topic name to publish to. “1” here corresponds to the [pre-defined topic](#sn-predefinedtopics).|
|-m|Message payload to send. The message used here is a standard Cumulocity static template, see [MQTT-SN static template](#sn-mqtt-static).|
|-d|Increase debug level by one. -d can occur multiple times.|

The template "100" will create a new device. Afterwards, you will find this device in the Device Management application as a new device. If you switch to the **Identity** tab of the device you will notice that there was an identity created automatically to link the device to the MQTT-SN client ID.

If the command fails for the first time with CONNACK 0x02 as illustrated, it means the registered device has not yet been accepted. 

![Failed device creation](/guides/images/users-guide/mqttsn/device_creation_command.png)

Once the device is accepted, re-run the command and you should be able to communicate.

##### Creating child devices

The following command can be used to create your child devices:

```
./mqtt-sn-pub -h <host> -p <port> -i SN_DEVICE -T 2 -m 101,SN_CHILD-DEVI CE,SN_CHILD-DEVICE,c8y_MQTTSNDevice -d
```

Here, the parent device is being used to create the child device. -T 2 corresponds to the [pre-defined topic](#sn-predefinedtopics). The message payload used here is a standard Cumulocity static template, see [MQTT-SN static template](#sn-mqtt-static).

##### Creating measurements

```
./mqtt-sn-pub -h <host> -p <port> -p 20000 -i SN_DEVICE -T 2 -m 200,myCustomTemperatureMeasurement,fahrenheit,75.2,F -d
```

After a reload in the Device Management application you should see graphs with the newly added measurements in the **Measurements** tab of your device. The message payload used here is a standard Cumulocity static template, see [MQTT-SN static template](#sn-mqtt-static).

#### <a name="sn-receiving-data"></a>Receiving data

##### Receiving operations

At the current state, the UI does not show any tabs for operations. Up to this point, it is unknown what exactly the device supports. But the list of supported operations can be modified with the template "114". 

In order to be able to receive messages from the platform, execute the command below which adds support for the configuration and shell:

```
./mqtt-sn-pub -h <host> -p <port> -i SN_DEVICE -T 2 -m 114,c8y_Command,c8y_Configuration -d
```

After executing this command, you should now see these tabs:

![Shell UI](/guides/images/users-guide/mqttsn/shell_ui.png)

Next, we will subscribe to the static operation templates for the device by executing the following command:

```
./mqtt-sn-sub -h <host> -p <port> -i SN_DEVICE -t s/ds -d
```

After executing this command, the client starts listening for messages from the server. The output of the command is illustrated below:

![Subscription](/guides/images/users-guide/mqttsn/subscription.png)

To understand what “511,SN_DEVICE,Hello from Server” means, refer to [MQTT-SN static template](#sn-mqtt-static). Note that operations are dropped if the client is not subscribed to the topic.

### <a name="mqtt-sn-implementation"></a>MQTT-SN implementation

This section will list the implementation details for the MQTT-SN protocol. The Cumulocity implementation supports MQTT-SN Version 1.2.

#### <a name="sn-connecting"></a>Connecting via MQTT-SN

Cumulocity supports MQTT-SN protocol via UDP. By default, it uses port **20000**.

#### <a name="sn-connecting"></a>Supported MQTT-SN features

##### MQTT-SN client ID

The MQTT-SN client ID uniquely identifies each connected client. The Cumulocity implementation also uses the client ID to link the client directly to a device.

##### MQTT-SN Quality of Service

The following QoS levels are supported:

- **QoS 0**: At most once
- **QoS 1**: At least once

For subscriptions, currently only **QoS 0** is supported.

##### <a name="sn-predefinedtopics"></a>Pre-defined topic IDs

A “pre-defined” topic ID is a topic ID whose mapping to a topic name is known in advance by both the client’s application and the gateway. When using pre-defined topic IDs, both sides can start immediately with sending PUBLISH messages; there is no need for the REGISTER procedure as in the case of ”normal" topic IDs. The following are default pre-defined topics that you can start publishing to:

|Topic ID|Cumulocity topic|Description|
|:--|:---|:----------|:---------------|
|1|s/us|Cumulocity static template publish topic. This topic should be only used for Device creation (100).|
|2|s/us/myChildDeviceIdentifier|Cumulocity static template publish topic. This topic should be used for all other purposes like publishing data and creation of child devices.|


##### <a name="sn-topic-name-registration"></a>Topic name registration

To register a topic name a client must send a REGISTER message to the gateway. If the registration could be accepted, a topic ID is assigned and sent as part of the REGACK message to the client. If the registration could not be accepted, a REGACK is returned to the client with the failure reason encoded in the ReturnCode field. After having received the REGACK message with ReturnCode=“accepted”, the client can start using the assigned topic ID to publish data of the corresponding topic name. If however, the REGACK contains a rejection code, the client may try to register later again.


### <a name="sn-smartrest-2"></a>SmartREST 2.0

The MQTT-SN gateway supports the SmartREST 2.0 payload format which is described in detail in [SmartREST 2.0](/guides/device-sdk/mqtt/#smartrest-2) in the Device SDK guide.

#### Usage

The following example shows how to publish to the SmartREST 2.0 topic:

```
./mqtt-sn-pub -h <host> -p <port> -i <clientId> -t s/uc/<X-ID> -m <message> -d
```

In this example as the full topic is specified via -t option, [MQTT-SN-TOOLS](https://github.com/njh/mqtt-sn-tools) first attempts to register the topic name and then uses the assigned topic ID to publish the message, see also [Topic name registration](#sn-topic-name-registration).  

The MQTT-SN gateway also supports subscription for responses.

#### Limitations

Currently, MQTT-SN gateway does not support TRANSIENT, QUIESCENT or CEP [Processing Modes](/guides/reference/smartrest/#processing-mode).

### <a name="sn-mqtt-static"></a>MQTT static template

To ease device integration, Cumulocity supports a number of static templates that can be used by any client without the need for creating own templates. For further information on MQTT static templates refer to [MQTT static templates](guides/device-sdk/mqtt/#mqtt-static-templates) in the Device SDK guide.

The usage of MQTT static templates is described in [Hello MQTT-SN](#hello-mqtt-sn).

#### Limitations

Currently, the MQTT-SN gateway does not support TRANSIENT, QUIESCENT or CEP [processing modes](/guides/reference/smartrest/#processing-mode).























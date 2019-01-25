---
order: 70
title: MQTT-SN
layout: redirect
---

MQTT-SN is a publish/subscribe messaging protocol for wireless sensor networks (WSN), with the aim of extending the MQTT protocol beyond the reach of TCP/IP infrastructure for Sensor and Actuator solutions. For more information, see 
[MQTT-SN specification](http://mqtt.org/new/wp-content/uploads/2009/06/MQTT-SN_spec_v1.2.pdf).

MQTT-SN implementation looks similar to MQTT in most part and MQTT-SN gateway plays the role of translating the messages between them.

The following sections describe how to: 

* [Hello MQTT-SN](#hello-mqtt-sn) provides an easy introduction to the Cumulocity MQTT-SN protocol using a popular MQTT-SN client
* [MQTT-SN implementation](#mqtt-sn-implementation) gives a detailed reference of protocol-level aspects in the Cumulocity implementation of MQTT-SN.
* [SmartREST 2.0](#sn-smartrest-2) provides a reference for SmartREST 2.0 payload format.
* [MQTT Static Template](#sn-mqtt-static) provides a reference of pre-defined payload formats that you can use straight away.

### <a name="hello-mqtt-sn"></a>Hello MQTT-SN

In this section, you will learn how to use MQTT-SN with Cumulocity using pre-defined messages (called "static templates")

#### <a name="sn-prerequisites"></a>Prerequisites

Please make sure you have installed [MQTT-SN-TOOLS](https://github.com/njh/mqtt-sn-tools)

#### <a name="sn-device-registration"></a>Registration of Devices

MQTT-SN has no authentication mechanism. Therefore the device is only able to send its IMEI (or other kinds of UID). The device registration is done via the normal Cumulocity registration process described in [Connecting Devices](/guides/users-guide/device-management#connecting-devices).

#### <a name="sn-sending-data"></a>Sending Data

##### Creating the device

After successful registration the device(s), we can start sending messages. The following command can be used to create our device:

```
./mqtt-sn-pub -h <host> -p <port> -i SN_DEVICE -T 1 -m 100,SN_DEVICE,c8y_MQTTSNDevice -d
```

The following table illustrates the command options and their description: 

|Option|Description|
|:---|:---------------|
|-i|ID to use for this client. The ID used here corresponds to the external ID of the device in Cumulocity and the device should be registered with this ID in the platform.|
|-T|MQTT-SN topic name to publish to. “1” here corresponds to the pre-defined topic which is explained in this [section](#sn-predefinedtopics).|
|-m|Message payload to send. The message used here is standard Cumulocity static templates. Please find for info about that [here](#sn-mqtt-static).|
|-d|Increase debug level by one. -d can occur multiple times.|

The template "100" will create a new device. Afterwards, you will find this device in the Device Management application as a new device. If you switch to the "Identity" tab of the device you will notice that there was an identity created automatically to link the device to the MQTT-SN Client ID.

If the command fails for the first time with CONNACK 0x02 as illustrated, It means the registered device has not been accepted. 

![Failed device creation](/guides/images/users-guide/mqttsn/device_creation_command.png)

Once the device is accepted, re-run the command and you should be able to communicate.

##### Creating child devices

The following command can be used to create our child device:

```
./mqtt-sn-pub -h <host> -p <port> -i SN_DEVICE -T 2 -m 101,SN_CHILD-DEVI CE,SN_CHILD-DEVICE,c8y_MQTTSNDevice -d
```

Here parent device is being used to create the child device. -T 2 corresponds to the pre-defined topic which is explained in this [section](#sn-predefinedtopics). The message payload is used here is standard Cumulocity static templates. Please find for info about that [here](#sn-mqtt-static).

##### Creating measurements

```
./mqtt-sn-pub -h <host> -p <port> -p 20000 -i SN_DEVICE -T 2 -m 200,myCustomTemperatureMeasurement,fahrenheit,75.2,F -d
```

After a reload in the Device Management application you should see graphs with the newly added measurements in the "Measurements" tab of your device. The message payload is used here is standard Cumulocity static templates. Please find for info about that [here](#sn-mqtt-static).

#### <a name="sn-receiving-data"></a>Receiving Data

##### Receiving operations

At the current state, the UI does not show any tabs for operations. Up to this point, it was unknown what exactly the device supports. But the list of supported operations can be modified with the template "114". In order to be able to receive messages from Platform, execute the below command:

```
./mqtt-sn-pub -h <host> -p <port> -i SN_DEVICE -T 2 -m 114,c8y_Command,c8y_Configuration -d
```

On the execution of the above command, which adds support for the configuration and shell, you should be able to see the following tab as illustrated:

![Shell UI](/guides/images/users-guide/mqttsn/shell_ui.png)

We will now subscribe to the static operation templates for the device by executing the following command:

```
./mqtt-sn-sub -h <host> -p <port> -i SN_DEVICE -t s/ds -d
```

On the execution of the above command, the client starts listening for messages from Server. The output of the command is illustrated below:

![Subscription](/guides/images/users-guide/mqttsn/subscription.png)

To know what “511,SN_DEVICE,Hello from Server” means, please read through this [section](#sn-mqtt-static).

### <a name="mqtt-sn-implementation"></a>MQTT-SN implementation

This section will list the implementation details for the MQTT-SN protocol. The Cumulocity implementation supports MQTT-SN Version 1.2.

#### <a name="sn-connecting"></a>Connecting via MQTT-SN

Cumulocity supports MQTT-SN protocol via UDP. By default, it uses port **20000**.

#### <a name="sn-connecting"></a>Supported MQTT-SN features

##### MQTT-SN Client ID

The MQTT-SN ClientId is a field to uniquely identify each connected client. The Cumulocity implementation also uses the ClientId to link the client directly to a device.

##### MQTT-SN Quality of Service

The following QoS levels are supported:
- **QoS 0**: At most once
- **QoS 1**: At least once

For subscriptions, currently, only **QoS 0** is supported.

##### <a name="sn-predefinedtopics"></a>Pre-defined topic ids

A “pre-defined” topic id is a topic id whose mapping to a topic name is known in advance by both the client’s application and the gateway. When using pre-defined topic ids, both sides can start immediately with the sending of PUBLISH messages; there is no need for the REGISTER procedure as in the case of ”normal" topic ids. The following are default pre-defined topics that you can start publishing to:

|Topic ID|Cumulocity Topic|Description|
|:--|:---|:----------|:---------------|
|1|s/us|Cumulocity static template publish topic.|
|2|s/us/myChildDeviceIdentifier|Cumulocity static template publish topic. This topic should be used to create data for a child instead of the root device and the unique ID of the child is added as another section in the topic.|


##### <a name="sn-topic-name-registration"></a>Topic Name Registration

To register a topic name a client should send a REGISTER message to the GW. If the registration could be accepted, a topicId is assigned and sent as part of REGACK message to the client. If the registration could not be accepted, a REGACK is returned to the client with the failure reason encoded in the ReturnCode field. After having received the REGACK message with ReturnCode=“accepted”, the client can start using the assigned topicId to publish data of the corresponding topic name. If however, the REGACK contains a rejection code, the client may try to register later again.


### <a name="sn-smartrest-2"></a>SmartREST 2.0

MQTT-SN gateway supports the SmartREST 2.0 payload format which is described in detail [here](/guides/device-sdk/mqtt/#smartrest-2).

#### Usage

The following example shows how to publish to SmartREST 2.0 topic:

```
./mqtt-sn-pub -h <host> -p <port> -i <clientId> -t s/uc/<X-ID> -m <message> -d
```

In this example as full topic is specified via -t option, [MQTT-SN-TOOLS](https://github.com/njh/mqtt-sn-tools) first attempts to register the topic name and then uses the assigned topic id to publish the message. Please find more information about topic registration [here](#sn-topic-name-registration).  

MQTT-SN gateway also supports subscription for responses.

#### Limitations

Currently, MQTT-SN gateway does not support TRANSIENT, QUIESCENT or CEP [Processing Modes](/guides/reference/smartrest/#processing-mode).

### <a name="sn-mqtt-static"></a>MQTT Static Template

To ease device integration Cumulocity already supports a number of static templates that can be used by any client without the need for creating own templates. Please find more information about MQTT static templates [here](guides/device-sdk/mqtt/#mqtt-static-templates).

The usage for MQTT static templates is described in [Hello MQTT-SN](#hello-mqtt-sn).

#### Limitations

Currently, MQTT-SN gateway does not support TRANSIENT, QUIESCENT or CEP [Processing Modes](/guides/reference/smartrest/#processing-mode).























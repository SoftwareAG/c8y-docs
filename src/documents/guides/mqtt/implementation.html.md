---
order: 30
title: MQTT Implementation
layout: default
---
## Overview

This section will list the implementation details for the MQTT protocol. The Cumulocity implementation supports MQTT Version 3.1.1.

## Connecting via MQTT

Cumulocity supports MQTT both via TCP and WebSockets. As the URL you can use mqtt.cumulocity.com.

Available ports:

||TCP|WebSockets|
|:---|:----|:----|
|SSL|8883|443|
|no SSL|1883|80|

_Note:_ To use WebSockets you need to connect to the path "/mqtt" and follow the [MQTT standard](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718127) for WebSocket communication.

## SmartREST Payload

The Cumulocity MQTT implementation uses SmartREST as a payload. SmartREST is a CSV-like message protocol that uses templates on the server side to create data in Cumulocity.

### SmartREST Basics

A SmartREST message is a single row where each parameter is separated by comma. The first parameter is an ID that defines the message.
You can send multiple messages in a single publish by using a line break between messages.

### SmartREST Escaping

The appearance of at least one of the following characters within a parameter requires that the parameter is enclosed in double quotes:
* Comma (,)
* Line break (\n)
* Carriage return (\r)
* Double quotes (")
Additionally each double quote within the parameter needs to be escaped with a backslash (\).

The same escaping rules apply to messages that will be send from the server to the client.

Publish example:
```
100,"This value, needs escaping",This value does not need escaping
```

Subscribe example:
```
511,myDeviceSerial,"execute this\nand this\nand \"this\""
```

## Device Hierarchies

MQTT sessions are linked to a single device but this device can have a freely configurable device hierarchy below it.
All children require a unique ID defined when creating the device. We recommend using a combination of the unique ID of the root device and an unique ID within the hierarchy.
To create data for a child instead of the root device the unique ID of the child is added as another section in the topic (e.g. "s/us/myChildDeviceIdentifier").

The client will automatically receive operations for every child in the hierarchy by subscribing to the respective topic. It is not required to subscribe for each child.
Every operation received will contain the template ID followed by the ID of the device/child for which the operation was created (followed by other operation parameters).
## MQTT Features

### MQTT Authentication

MQTT supports setting a username and a password. To connect to Cumulocity the MQTT username needs to include both tenant and username in the format "tenant/username".

### MQTT ClientId

The MQTT ClientId is a field to uniquely identify each connected client. The Cumulocity implementation also uses the ClientId to link the client directly to a device. Therefore the following format should be used for the ClientId:

"connectionType:deviceIdentifier:defaultTemplateIdentifier"

|Field|Mandatory|Description|
|:-------|:--------|:--------|
|connectionType|NO|indication of connection type default: d (device)|
|deviceIdentifier|YES|A unique identifier for your device e.g. IMEI,Serial number, ...|
|defaultTemplateIdentifier|NO|Please check the SmartREST 2.0 Guide for more information about template identifiers|

For the simplest version of a client the MQTT clientId can just be the deviceIdentfier. It will automatically interpreted as device connection.

Example ClientIds:
```
mySerialNumber
d:mySerialNumber
d:mySerialNumber:myDefaultTemplate
```
The uniqueness of the MQTT ClientId is determined only by the deviceIdentifier. Therefore from the above examples only one client can be connected at the same time.

### MQTT Quality of Service

The Cumulocity implementation supports all 3 levels of MQTT QoS

* QoS 0: At most once
* QoS 1: At least once
* QoS 2: Exactly once

For subscriptions to the operation or error topics we will deliver all messages in the QoS the client defined when subscribing to the topic.

### MQTT Clean Session

MQTT clients can set the clean session flag to 0 (false). This will ensure that if the client disconnects your subscription will still work and when you reconnect the client will receive the missed messages.

### MQTT Retained Flag

In the current Cumulocity implementation subscriptions to the topics where devices publish data is not allowed. Publishing data with the retained flag on these topic is allowed but has no practical difference from sending without the flag.
Messages published by Cumulocity like operations and errors do not contain the retain flag.

### MQTT Last Will

The Last Will feature is currently not supported in Cumulocity.

## Debugging

To support developers during development you can subscribe to the topic `s/e`.
On this topic the device can retrieve debug and error messages that occur during a publish from the device.

This topic is purely designed to support development of clients.
It is not recommended to subscribe to always subscribe to this channel as the messages are verbose and can significantly increase the data usage.
Also you should not use this topic to trigger actions of the device based on what you receive on the topic. It is not a response channel.

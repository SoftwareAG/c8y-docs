---
order: 40
layout: redirect
title: MQTT Features
---

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

*Note:* Cumulocity requires clean session to be set to 1 (true). At the moment we do not guarantee that disabling clean session would work reliably, hence we recommend to always enable clean session. 

### MQTT Retained Flag

In the current Cumulocity implementation subscriptions to the topics where devices publish data is not allowed. Publishing data with the retained flag on these topic is allowed but has no practical difference from sending without the flag.
Messages published by Cumulocity like operations and errors do not contain the retain flag.

### MQTT Last Will

In MQTT, the "last will" is a message that is specified at connection time and that is executed when the client looses the connection. For example, using

    400,c8y_ConnectionEvent,"Device connection was lost."

as last will message and "s/us" as last will topic raises an event whenever the device looses the connection.
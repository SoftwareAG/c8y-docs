---
order: 20
layout: redirect
title: Startup phase
---

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
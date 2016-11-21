---
layout: devices
title: Queclink
---

## Overview

[Queclink](http://www.queclink.com/product) offers GPS-enabled devices with diverse form factors, battery lifetimes and connectors. The following devices have been tested with Cumulocity and are known to report their location in a format that Cumulocity understands:

* GL200 Multi-Function Mini Asset Tracker
* GL300 Advanced Asset Tracker
* GL500 Hibernating Asset Tracking Device
* GL505 Waterproof Hibernating Asset Tracking Device
* GV200 Full Featured Vehicle Tracker
* GV300 Advanced Vehicle Tracking Device
* GV500 OBD Vehicle Tracking Device

The location and traces of the equipped assets are shown in Cumulocity and you can create additional business logic on top of the data (for example, sending an email when a geofence is left). For the GL200, device-side motion tracking and geofencing can be configured from Cumulocity.

<img src="/guides/devices/queclink/GL200.png" alt="GL200" style="display: inline">
<img src="/guides/devices/queclink/GL300.png" alt="GL300" style="display: inline">
<img src="/guides/devices/queclink/GL500.png" alt="GL500" style="display: inline">
<img src="/guides/devices/queclink/GL505.png" alt="GL505" style="display: inline">
<img src="/guides/devices/queclink/GV200.png" alt="GV200" style="display: inline">
<img src="/guides/devices/queclink/GV300.png" alt="GV300" style="display: inline">
<img src="/guides/devices/queclink/GV500.png" alt="GV500" style="display: inline">

## Configuring Queclink devices for Cumulocity

Use the Queclink Manage Tool to set up a device for Cumulocity:

* Verify that "Report Mode" is set to one of the TCP variants. If you want to send commands to the device, use "TCP long-connect mode". UDP or SMS are not supported by Cumulocity.
* Set the "Main Server IP/Domain Name" to tracker.cumulocity.com.
* Set the "Main Server Port" to 9090.
* Send the configuration to the device.

The screenshot below illustrates the setting.

![Queclink Manage Tool](/guides/devices/queclink/queclinkmanage.jpg)

## Registering Queclink devices with Cumulocity

To connect the device to your Cumulocity account:

* Open Cumulocity in a web browser and navigate to the "Registration" page.
* Locate the IMEI number on the device (below the barcode on the sticker).
* Type the IMEI into the "Device ID" field and click "Register Device". The IMEI will be listed with status "Waiting for connection".
* Switch the device on. After the device has dialled up to the network, an "Accept" button will be visible next to the IMEI.
* Click the "Accept" button.
* If this is the first tracking device you connect to your tenant you also need the register the tracker agent. Type tracker-agent-{tenant} (where {tenant} is your tenant name) into the "Device ID" field and click "Register Device". Click the "Accept" button once it shows up.
* The device will now send location data according to the device configuration that you set. 

![Device registration](/guides/devices/queclink/queclinkregister.png)

## Troubleshooting tracking devices

Here are some general hints if your tracking device does not connect to Cumulocity or shows incorrect data:

* Make sure that the LED indicators on the device indicate both a working GPS and a working network connection.
* Devices can only registered after they start sending data to Cumulocity.
* Devices may send the location of the last GPS fix if there is no GPS reception.
* The "Location" and "Tracking" tabs appear only in the user interface when the first GPS coordinate has been received.

## Enable sms mode

Sending operations to the tracker device via sms is supported. Tracker device's phone number information should be provided beforehand and one of the settings described at "[Control devices via SMS](/guides/reference/device-control#control_via_sms)" section should be done to use the functionality.
 
## Supported features

Supported events:

* Location update event
* Motion started event
* Motion ended event
* Crash detected event

![Queclink Events](/guides/devices/queclink/Events.png)

Supported measurements:

* Battery level measurement
* Signal strength measurement
* Tracker mileage measurement

![Queclink Measurement](/guides/devices/queclink/Measurement.png)

Supported alarms:

* Geofence exit alarm

## Getting additional functionality

If you need support for particular features of the above products or other Queclink products, [contact us](mailto:info@cumulocity.com).


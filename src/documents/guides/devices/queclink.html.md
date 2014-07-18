---
layout: default
title: Queclink
---

## Overview

[Queclink](http://www.queclink.com/product) offers GPS-enabled devices with diverse form factors, battery lifetimes and connectors. The following devices have been tested with Cumulocity and are known to report their location in a format that Cumulocity understands:

* GL200 Multi-Function Mini Asset Tracker
* GL300 Advanced Asset Tracker
* GL500 Hibernating Asset Tracking Device
* GV200 Full Featured Vehicle Tracker
* GV300 Advanced Vehicle Tracking Device
* GV500 OBD Vehicle Tracking Device

The location and traces of the equipped assets are shown in Cumulocity and you can create additional business logic on top of the data (for example, sending an email when a geofence is left). For the GL200, motion tracking and geofencing can be configured from Cumulocity.

<img src="/images/guides/devices/queclink/GL200.png" alt="GL200" style="display: inline">
<img src="/images/guides/devices/queclink/GL300.png" alt="GL300" style="display: inline">
<img src="/images/guides/devices/queclink/GL500.png" alt="GL500" style="display: inline">
<img src="/images/guides/devices/queclink/GV200.png" alt="GV200" style="display: inline">
<img src="/images/guides/devices/queclink/GV300.png" alt="GV300" style="display: inline">
<img src="/images/guides/devices/queclink/GV500.png" alt="GV500" style="display: inline">

## Configuring Queclink devices for Cumulocity

Use the Queclink Manage Tool to set up a device for Cumulocity:

* Verify that "Report Mode" is set to one of the TCP variants. If you want to send commands to the device, use "TCP long-connect mode". UDP or SMS are not supported by Cumulocity.
* Set the "Main Server IP/Domain Name" to tracker.cumulocity.com.
* Set the "Main Server Port" to 9090.
* Send the configuration to the device.

The screenshot below illustrates the setting.

![Queclink Manage Tool](/images/guides/devices/queclink/queclinkmanage.jpg)

## Registering Queclink devices with Cumulocity

To connect the device to your Cumulocity account:

* Open Cumulocity in a web browser and navigate to the "Registration" page. 
* Locate the IMEI number on the device (below the barcode on the sticker). 
* Type the IMEI into the "Device ID" field and click "Register Device". The IMEI will be listed with status "Waiting for connection".
* Switch the device on. After the device has dialled up to the network, an "Accept" button will be visible next to the IMEI.
* Click the "Accept" button.
* The device will now send location data according to the device configuration that you set. 

![Device registration](/images/guides/devices/queclink/queclinkregister.png)

## Getting additional functionality

If you need support for particular features of the above products or other Queclink products, [contact us](mailto:info@cumulocity.com).

---
title: Queclink Trackers
---

## Overview

[Queclink](http://www.queclink.com/product) offers GPS-enabled devices with diverse form factors, battery lifetimes and connectors. The following devices have been tested with Cumulocity and are known to currently report their location in a format that Cumulocity understands:

* GL200 Multi-Function Mini Asset Tracker
* GL300 Advanced Asset Tracker
* GL500 Hibernating Asset Tracking Device
* GV200 Full Featured Vehicle Tracker
* GV300 Advanced Vehicle Tracking Device
* GV500 OBD Vehicle Tracking Device

The location and traces of the equipped assets are shown in Cumulocity and you can create additional business logic on top of the data (for example, sending an email when a geofence is left). For the GL200, motion tracking and geofencing can be configured from Cumulocity.

![GL200](http://www.queclink.com/sites/default/files/styles/380-240/public/GL200new_0.png)
![GL300](http://www.queclink.com/sites/default/files/styles/380-240/public/GL300.png)
![GL500](http://www.queclink.com/sites/default/files/styles/380-240/public/GL500_3.png)
![GV200](http://www.queclink.com/sites/default/files/styles/380-240/public/GV200.png)
![GV300](http://www.queclink.com/sites/default/files/styles/380-240/public/GV300%2001_2.png)
![GV500](http://www.queclink.com/sites/default/files/styles/380-240/public/GV500_1.png)

## Configuring Queclink devices for Cumulocity

Use the Queclink Manage Tool to set up a device for Cumulocity:

* Verify that "Report Mode" is set to one of the TCP variants. If you want to send commands to the device, use "TCP long-connect mode". UDP or SMS are not supported by Cumulocity.
* Set the "Main Server IP/Domain Name" to 79.125.6.11.
* Set the "Main Server Port" to 9090.
* Send the configuration to the device.

The screenshot below illustrates the setting.

![Queclink Manage Tool](/images/guides/queclinkmanage.png)

## Registering Queclink devices with Cumulocity

To connect the device to your Cumulocity account:

* Open Cumulocity in a web browser and navigate to the "Registration" page. 
* Locate the IMEI number on the device (below the barcode on the sticker). 
* Type the IMEI into the "Device ID" field and click "Register Device". The IMEI will be listed with status "Waiting for connection".
* Switch the device on. After the device has dialled up to the network, an "Accept" button will be visible next to the IMEI.
* Click the "Accept" button.
* The device will now send location data according to the device configuration that you set. 

![Screen shot of device bar code?]()

![Screenshot of device registration]()

## Getting additional functionality

If you need support for particular features of the tracker models, [contact us](mailto:info@cumulocity.com).

---
layout: default
title: Telic
---

## Overview

[Telic GmbH](http://en.telic.de/) offers GPS-based devices for diverse industrial purposes, varying battery lifetime and ruggedness requirements. Cumulocity can record the coordinates of the devices centrally and enables you to create additional business logic on top of the data (for example, sending an email when a geofence is left).

<img src="/images/guides/devices/telic/sbc_avl_m.jpg" alt="SBC AVL/AVL Power" style="display: inline">
<img src="/images/guides/devices/telic/sbc3_can.jpg" alt="SBC3 CAN" style="display: inline">
<img src="/images/guides/devices/telic/picotrack.jpg" alt="Picotrack" style="display: inline">
<img src="/images/guides/devices/telic/picotrack_ip69k.jpg" alt="Picotrack IP69K" style="display: inline">
<img src="/images/guides/devices/telic/endurance_primary.jpg" alt="Endurance Primary" style="display: inline">
<img src="/images/guides/devices/telic/endurance.jpg" alt="Endurance Rechargeable" style="display: inline">

## Configuring Telic devices for Cumulocity

To connect a Telic device to Cumulocity, you need to

* Configure it to send data to the Cumulocity servers.
* Disable its "Acknowledge" setting.

To make the tracker send data to Cumulocity, follow these steps with the Telic Configuration Tool:

* Click on the tab "Communication Configuration". 
* In the section "Server" at the bottom, click the "New" button. 
* Set a profile name (for example, "Cumulocity").
* Set the "IP address" to 79.125.6.11.
* Set the "Port" to 9090.
* Verify that "IP Mode" is set to TCP.
* Verify also that the settings in "Network" are applicable to the SIM card that you inserted into the device (APN, user, password).
* (The control center is the number where SMS messages from the tracker are sent to.)
* Click "Save".

The screenshot below illustrates the setting.

![Telic Communication Configuration](/images/guides/devices/telic/teliccommconf.png)

To disable acknowledge, follow these steps:

* Click on the tab "Device Configuration".
* If you have not yet created an own device configuration profile, click "New".
* Make sure that the checkbox "Enable Acknowledge" on the top right is *unchecked*.
* Click "Save".

This screenshot shows a device configuration.

![Telic Device Configuration](/images/guides/devices/telic/telicdevconf.png)

Finally, send the data to the device:

* Click on the tab "General".
* Verify that the device profile and the server profile that you edited previously are selected on the top left.
* Click the "Send" button.

Once you have set up the profiles, you can send the same profiles also to other trackers. You just have to repeat the "Send" part.

## Registering Telic devices with Cumulocity

To connect the device to your Cumulocity account:

* Open Cumulocity in a web browser and navigate to the "Registration" page. 
* Locate the IMEI number on the device (below the barcode on the sticker). 
* Type the **last six digits** of the IMEI into the "Device ID" field and click "Register Device". The IMEI will be listed with status "Waiting for connection".
* Switch the device on. After the device has dialled up to the network, an "Accept" button will be visible next to the IMEI.
* Click the "Accept" button.
* The device will now send location data according to the device configuration that you set. 

![Device registration](/images/guides/devices/telic/telicregistration.png)

Note: Cumulocity currently assumes that the "extended IMEI reporting" option is switched off.

## Troubleshooting tracking devices

Here are some general hints if your tracking device does not connect to Cumulocity or shows incorrect data:

* Make sure that the LED indicators on the device indicate both a working GPS and a working network connection.
* Devices can only registered after they start sending data to Cumulocity.
* Devices may send the location of the last GPS fix if there is no GPS reception.
* The "Location" and "Tracking" tabs appear only in the user interface when the first GPS coordinate has been received.

## Getting additional functionality

If you need support for particular features of the tracker models, [contact us](mailto:info@cumulocity.com).


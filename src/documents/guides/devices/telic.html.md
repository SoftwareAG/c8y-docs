---
title: Telic Trackers
---

## Overview

[Telic GmbH](http://en.telic.de/) offers GPS-based devices for diverse industrial purposes, varying battery lifetime and ruggedness requirements. Cumulocity can record the coordinates of the devices centrally and enables you to create additional business logic on top of the data (for example, sending an email when a geofence is left).

![SBC AVL](http://en.telic.de/images/sbc_avl/sbc_avl_m.jpg)
![SBC AVL Power](http://en.telic.de/images/sbc_avl_power/sbc_avl_m.jpg)
![SBC3 CAN](http://en.telic.de/images/sbc3_can/telic_sbc3_can.jpg)
![Picotrack](http://en.telic.de/images/picotrack/telic_picotrack_m.jpg)
![Picotrack IP69K](http://en.telic.de/images/picotrack_ip69k/telic_picotrack_ip69k_m.jpg)
![Endurance Primary](http://en.telic.de/images/picotrack_endurance_primary/picotrack_endurance_primary_m.jpg)
![Endurance Rechargeable](http://en.telic.de/images/picotrack_endurance/telic_picotrack_endurance_m.jpg)


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
* (The control center is the number where SMS messages from the tracker are sent to.)
* Click "Save".

The screenshot below illustrates the setting.

![Telic Communication Configuration](/images/guides/teliccommconf.png)

To disable acknowledge, follow these steps:

* Click on the tab "Device Configuration".
* If you have not yet created an own device configuration profile, click "New".
* Make sure that the checkbox "Enable Acknowledge" on the top right is *unchecked*.
* Click "Save".

This screenshot shows a device configuration.

![Telic Device Configuration](/images/guides/telicdevconf.png)

Finally, send the data to the device:

* Click on the tab "General".
* Verify that the device profile and the server profile that you edited previously are selected on the top left.
* Click the "Send" button.

![Configure Device](/images/guides/telicconf.png)

Once you have set up the profiles, you can send the same profiles also to other trackers. You just have to repeat the "Send" part.

## Registering Telic devices with Cumulocity

To connect the device to your Cumulocity account:

* Open Cumulocity in a web browser and navigate to the "Registration" page. 
* Locate the IMEI number on the device (below the barcode on the sticker). 
* Type the *last six digits* of the IMEI into the "Device ID" field and click "Register Device". The IMEI will be listed with status "Waiting for connection".
* Switch the device on. After the device has dialled up to the network, an "Accept" button will be visible next to the IMEI.
* Click the "Accept" button.
* The device will now send location data according to the device configuration that you set. 

![Screen shot of device bar code?]()

![Screenshot of device registration]()

## Getting additional functionality

If you need support for particular features of the tracker models, [contact us](mailto:info@cumulocity.com).


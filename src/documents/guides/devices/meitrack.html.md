---
layout: devices
title: Meitrack
---

## Overview

[Meitrack Group](http://www.meitrack.com/) provides GPS-based vehicle, asset and personal trackers that can be connected to Cumulocity to record coordinates and tracking information. After connecting the devices, you can create additional business logic in Cumulocity by using, for example, geofence or threshold Smart Rules.

The following data is currently recorded:

* Location, including direction, accuracy, satellites used in calculation and GPS timestamp.
* Mobile network signal strength.
* Speed and distance.
* Battery level.

The Meitrack protocol support was tested with MT90 devices. It may not apply to all Meitrack models. In particular, the battery level calculation will be only correct for devices with compatible hardware. See the [Meitrack protocol documentation](http://www.meitrack.com/en/protocols/) for more information.

## Configuring Meitrack devices for Cumulocity

To connect a Meitrack device to Cumulocity, you need to configure it to send data to the Cumulocity servers. Use the Meitrack manager to set

* The GPRS protocol to "TCP".
* The IP/Domain to tracker.cumulocity.com.
* The Port to 9091.

The screenshot below illustrates the required settings in the "Tracking" menu.

![Meitrack configuration](/guides/devices/meitrackconf.png)

## Registering Meitrack devices with Cumulocity

To connect the device to your Cumulocity account:

* Open Cumulocity in a web browser and navigate to the "Registration" page. 
* Locate the IMEI number on the device (below the battery for the MT90).
* Type the IMEI into the "Device ID" field and click "Register Device". The IMEI will be listed with status "Waiting for connection".
* Switch the device on and wait until the device connects to both the mobile network and GPS. 
* When the device sends the first report, an "Accept" button will be visible next to the IMEI. Click the "Accept" button.
* If this is the first tracking device you connect to your tenant you also need the register the tracker agent. Type tracker-agent-{tenant} (where {tenant} is your tenant name) into the "Device ID" field and click "Register Device". Click the "Accept" button once it shows up.
* The device will now transmit  data according to the device configuration that you set. 

## Troubleshooting tracking devices

Here are some general hints if your tracking device does not connect to Cumulocity or shows incorrect data:

* Devices can only registered after they start sending data to Cumulocity.
* Devices may send the location of the last GPS fix if there is no GPS reception.
* The "Location" and "Tracking" tabs appear only in the user interface when the first GPS coordinate has been received.
* The LED indicators on the MT90 are *off* when it connected successfully.

## Getting additional functionality

If you need support for particular features of the tracker models, [contact us](mailto:info@cumulocity.com).

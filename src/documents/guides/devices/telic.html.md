---
layout: devices
title: Telic
---

## Overview

[Telic GmbH](http://en.telic.de/) offers GPS-based devices for diverse industrial purposes, varying battery lifetime and ruggedness requirements. Cumulocity can record the coordinates of the devices centrally and enables you to create additional business logic on top of the data (for example, sending an email when a geofence is left).

<img src="/guides/devices/telic/sbc_avl_m.jpg" alt="SBC AVL/AVL Power" style="display: inline">
<img src="/guides/devices/telic/sbc3_can.jpg" alt="SBC3 CAN" style="display: inline">
<img src="/guides/devices/telic/picotrack.jpg" alt="Picotrack" style="display: inline">
<img src="/guides/devices/telic/picotrack_ip69k.jpg" alt="Picotrack IP69K" style="display: inline">
<img src="/guides/devices/telic/endurance_primary.jpg" alt="Endurance Primary" style="display: inline">
<img src="/guides/devices/telic/endurance.jpg" alt="Endurance Rechargeable" style="display: inline">

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

![Telic Communication Configuration](/guides/devices/telic/teliccommconf.png)

To disable acknowledge, follow these steps:

* Click on the tab "Device Configuration".
* If you have not yet created an own device configuration profile, click "New".
* Make sure that the checkbox "Enable Acknowledge" on the top right is *unchecked*.
* Click "Save".

This screenshot shows a device configuration.

![Telic Device Configuration](/guides/devices/telic/telicdevconf.png)

GPS accuracy reporting is not available on all Telic devices. To enable accuracy reporting, follow these steps:

* Enable the checkbox "Use extended config"
* Click on the button "Setup extended config"
* Select the Tab "Logging Type"
* Enable the checkbox "Extended Data (incl. DOPs and Accuracy)"

This screenshot shows a extended device configuration.

![Telic Device Configuration](/guides/devices/telic/telicdevlogtype.png)

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
* If this is the first tracking device you connect to your tenant you also need the register the tracker agent. Type tracker-agent-{tenant} (where {tenant} is your tenant name) into the "Device ID" field and click "Register Device". Click the "Accept" button once it shows up.
* The device will now send location data according to the device configuration that you set.

![Device registration](/guides/devices/telic/telicregistration.png)

Note: Cumulocity currently assumes that the "extended IMEI reporting" option is switched off.

## Troubleshooting tracking devices

Here are some general hints if your tracking device does not connect to Cumulocity or shows incorrect data:

* Make sure that the LED indicators on the device indicate both a working GPS and a working network connection.
* Devices can only registered after they start sending data to Cumulocity.
* Devices may send the location of the last GPS fix if there is no GPS reception.
* The "Location" and "Tracking" tabs appear only in the user interface when the first GPS coordinate has been received.
* The agent currently supports the 100μ° and the 1μ°resolution data format.

## Getting additional functionality

If you need support for particular features of the tracker models, [contact us](mailto:info@cumulocity.com).

## Data created by Telic device

Telic creates following events:

* Location update event
* Geofence enter event
* Geofence exit event
* Motion started event
* Motion ended event
* Charger connected event

The central point is location event which has properties:

* "satellitesForCalculation" - is the number of satellites used to position calculation.
* "GPSTimestamp" - is the GPS timestamp.
* "logTimestamp" - is the value representing timestamp when the logging happened. This value is also substituted for time of all created events and measurements.
* "reportReason" - is the report reason and can have one of the folowing values: "Time Event", "Distance Event", "Angular Change Event", "Power Event", "Geofence Area Enter", "Geofence Area Exit", "Motion Start", "Motion Stop".
The "c8y_Position" fragment of the event is also updated in the device ManagedObject.
* "Fix type" - GPS fix: "No Fix", "2D Fix" or "3D Fix".
* "trackingProtocol" - is  the name of tracking protocol.

Telic events are listed here:

![Telic Events](/guides/devices/telic/telic_events_1.png)

Telic creates following measurements:

* Altitude measurement
* Speed measurement
* Mileage measurement
* Battery level measurement
* Motion measurement (with values: 1 - for motion, 0 - for stationary)

Telic measurements are presented in the graphs:

![Telic Measurements](/guides/devices/telic/telic_measurements_1.png)

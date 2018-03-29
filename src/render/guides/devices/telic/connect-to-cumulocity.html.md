---
title: Configuring Telic devices for Cumulocity
layout: redirect
order: 20
---
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

![Telic Communication Configuration](/guides/images/devices/telic/teliccommconf.png)

To disable acknowledge, follow these steps:

* Click on the tab "Device Configuration".
* If you have not yet created an own device configuration profile, click "New".
* Make sure that the checkbox "Enable Acknowledge" on the top right is *unchecked*.
* Click "Save".

This screenshot shows a device configuration.

![Telic Device Configuration](/guides/images/devices/telic/telicdevconf.png)

GPS accuracy reporting is not available on all Telic devices. To enable accuracy reporting, follow these steps:

* Enable the checkbox "Use extended config"
* Click on the button "Setup extended config"
* Select the Tab "Logging Type"
* Enable the checkbox "Extended Data (incl. DOPs and Accuracy)"

This screenshot shows a extended device configuration.

![Telic Device Configuration](/guides/images/devices/telic/telicdevlogtype.png)

Finally, send the data to the device:

* Click on the tab "General".
* Verify that the device profile and the server profile that you edited previously are selected on the top left.
* Click the "Send" button.

Once you have set up the profiles, you can send the same profiles also to other trackers. You just have to repeat the "Send" part.

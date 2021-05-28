---
weight: 65
title: Connecting new OBD Devices to the Sensor App
layout: redirect
---

Connections to OBD devices work in a slightly different way to normal Bluetooth sensors. They must be connected to the phone directly before the device can be added to Sensor App.

In the case of WiFi based OBD devices, the procedure is as follows:

* Plug the OBD dongle into the vehicle's diagnostic port. Ensure that the power LED is illuminated.
* On the phone, go into the Settings application and locate the WiFi settings page.
* Search for new networks, and join the "WiFi_OBDII" network (or other name as specified in the device's documentation), to pair directly with the dongle.
* If a password is required to do this, refer to your device's documentation.
* Once the device is connected, return to the Sensor App, and click the "+" button in the bottom-right of the screen.
* The OBD device should then become available in the list of available devices and can be added as if it was a normal Bluetooth sensor.

For Bluetooth based OBD devices, the device must be paired to the phone before Sensor App will recognize it:

* Plug the OBD dongle into the vehicle's diagnostic port. Ensure that the power LED is illuminated.
* On the phone, go into the Settings application and locate the Bluetooth settings page.
* Scan for new Bluetooth devices and connect to the device named "ODBII" (or other name as specified in the device's documentation).
* The pairing process will ask for a PIN, consult your device's documentation to find this value.
* Once the device is connected, return to the Sensor App, and click the "+" button in the bottom-right of the screen.
* The OBD device should then become available in the list of available devices and can be added as if it was any other Bluetooth sensor.
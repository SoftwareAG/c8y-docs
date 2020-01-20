---
title: Interacting with the Cumulocity Platform
layout: redirect
weight: 30
---

The device is now connected to Cumulocity and sends sensor data periodically. You can now browse and process the collected data in the cloud in various ways:

Browse the collected sensor data under "Measurements" tab, as shown in the following screenshot:
![Measurement Screenshot](/images/devices/mbed/measurements.png)

The device sends new sensor data only when the sensor values are changing. If the values remain constant, no new values are sent until 15 minutes when a sending is forced to inform the platform of device connectivity.

Create a dashboard to customize the representation of the sensor data from the device. You can create a new dashboard by selecting the mbed device, clicking on the small cog symbol on the top right and selecting "Create Dashboard".
An example dashboard created for an mbed device is shown below:
![Dashboard Screenshot](/images/devices/mbed/dashboard.png)

For further details, see the [Cumulocity User Guide](/users-guide/device-management).

### Interacting with the Control Operations

The "Control" page features a listing of all possible operations that are supported by a u-blox device, as shown in the following screenshot:

![Control Operations Screenshot](/images/devices/mbed/controls.png)


Currently  the u-blox firmware supports three operations:

* RELAY: Click either the "On" or "Off" button on the *RELAY* widget to turn on or off the RGB LED on the platform. When clicked, the LED is turned on after a few seconds in green.
* SEND MESSAGE: On the "SEND MESSAGE" widget, type in a message in the text field, then click the "Send" button. After several seconds, then first line of the LCD display should display the message you sent. This message will stay in the first line until you send another message or restart the device.
* CONFIGURATION: On the "CONFIGURATION" widget, all supported configuration parameters are shown with their current values. At the moment, the only parameter is "interval" with default value of 20 minutes, which determines the time period at which the Cumulocity platform will check for availability of the device. It must be the same value as the "REQUIRED INTERVAL" in the "Info" page.


---
weight: 40
title: Sending sensor data to Cumulocity IoT
layout: redirect
---


Measurements from your smartphone, OBD devices and connected Bluetooth sensors are sent to Cumulocity IoT automatically as soon as the device is connected or started and as long as the app is in foreground. All measurements of the smartphone sensors are displayed automatically in the device dashboard in Cumulocity IoT.

![Device dashboard](/images/users-guide/csa/csa-device-dashboard.jpg)

Various widgets may be used to display the data points. If your smartphone has a gyroscope sensor, a 3D rotation widget depicts the current sensor data for your smartphone's orientation.

The app sends sensor data to Cumulocity IoT at regular intervals.
By default, the interval is 2 seconds. This interval can be configured from the app itself for the accelerometer, location, and other sensors.

Tap the 3 vertical dots on a sensor's card, then **Edit** or drag the page up from the bottom to reveal additional settings.

Every time a measurement is sent to Cumulocity IoT the pulse indicator in front of the device name will animate.

Using device details, it is also possible to disable sending measurements for the device. The sensor measurements is still displayed, but not sent to Cumulocity IoT. When disabled, the pulse indicator is shown as "striked through".

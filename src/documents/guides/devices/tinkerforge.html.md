---
layout: default
title: "Tinkerforge"
---

## Overview

[Tinkerforge](http://tinkerforge.com) provides generic sensors and controls for diverse use cases ranging from environmental monitoring to industrial automation. Together with Cumulocity, you can

* Build complete machine-to-machine use cases by just plugging off-the-shelf hardware components together. No configuration is required -- the components are automatically discovered by the Cumulocity Java agent and connected to the cloud.
* Instantly visualize sensor data and remote control devices in real-time.

<img src="/images/guides/devices/tinkerforge/ambient_light.jpg" alt="Ambient Light" style="display: inline">
<img src="/images/guides/devices/tinkerforge/barometer.jpg" alt="Barometer" style="display: inline">
<img src="/images/guides/devices/tinkerforge/distance_ir.jpg" alt="Distance IR" style="display: inline">
<img src="/images/guides/devices/tinkerforge/gps.jpg" alt="GPS" style="display: inline">
<img src="/images/guides/devices/tinkerforge/humidity.jpg" alt="Humidity" style="display: inline">
<img src="/images/guides/devices/tinkerforge/lcd12_20x4.jpg" alt="LCD" style="display: inline">
<img src="/images/guides/devices/tinkerforge/temperature.jpg" alt="Temperatur" style="display: inline">

## Installation

Cumulocity's Java agent supports Tinkerforge out of the box. For installing and running the Java agent on the Raspberry Pi, please see the [Raspberry Pi section](/guides/devices/raspberry-pi.html). For installing and running the Java agent on other Unix systems, please visit the [Java agent section](/guides/devices/java-agent.html).

![Raspberry Pi and Tinkerforge](/images/guides/devices/tinkerforge/tinkerforge.jpg)

## Using Tinkerforge components with Cumulocity

### Basic usage

Open Cumulocity in a web browser, go to "All devices" and locate the device that is running the Java agent. The "Child devices" tab lists the connected Tinkerforge devices. 

![Child Devices](/images/guides/devices/tinkerforge/tinkerforgechildren.png)

By default, Tinkerforge components will be named using the name of the device that they are connected to ("RaspPi BCM2708 00000000e2f5ad4d" in the screenshot), the type of component ("Temperature") and the serial number of the component ("dGW"). You can edit the name in the "Info" tab of the device.

### Barometer, humidtiy, ambient light and temperature bricklet

Sensor data can be visualized by clicking on the "Measurements" tab of a sensor.

![Sensor measurements](/images/guides/devices/tinkerforge/tinkerforgemeasurements.png)

The data is regularly collected by the Cumulocity agent. The frequency of the collection can be configured by clicking on the "Control" tab of the device that runs the agent. The "Configuration" field allows you to edit the frequency and update the configuration on the device. For example, "c8y.light.interval=5000" means that the light sensor is queried every 5.000 milliseconds.

![Sensor configuration](/images/guides/devices/tinkerforge/tinkerforgeconfiguration.png)

### Display bricklet

To operate the display from Cumulocity, click the "Control" tab of the display bricklet. The "Relay" buttons switch the backlight on and off. The "Send Message" field sends a text message to be shown on the display.

![Display usage](/images/guides/devices/tinkerforge/tinkerforgedisplay.png)

The display has four buttons at the bottom. Operating these buttons will send an event to Cumulocity which is shown on the "Events" tab. You can process this event, for example, using a [CEL statement](/guides/concepts-guide/real-time-processing). The event is of type "c8y_ButtonPressedEvent". The number of the button is part of the text of the event.

![Events](/images/guides/devices/tinkerforge/tinkerforgeevents.png)

### Distance bricklet

Similar to a button press on the display, interrupting the infrared sensor of the distance bricklet will send an event. The event can be seen on the "Events" tab of the distance bricklet and can be post-processed with CEL. The type of the event is "c8y_EntranceEvent".

### GPS bricklet

The GPS bricklet will report its current location and send location updates as the device moves. The current location is shown in Device Management on a map and the movement history can be visualized.

![Location](/images/guides/devices/tinkerforge/tinkerforgetracing.png)

## Extending the Tinkerforge driver

The source code for the Tinkerforge driver is publicly available at https://bitbucket.org/m2m/cumulocity-examples in the folder linux-agent/tinkerforge-driver.


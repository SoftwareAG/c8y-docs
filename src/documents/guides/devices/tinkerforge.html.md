---
layout: "default"
title: "Tinkerforge"
---

## Overview

[Tinkerforge](http://tinkerforge.com) provides generic sensors and controls for diverse use cases ranging from environmental monitoring to industrial automation. Together with Cumulocity, you can

* Build complete machine-to-machine use cases by just plugging off-the-shelf hardware components together. No configuration is required -- the components are automatically discovered by the Cumulocity Java agent and connected to the cloud.
* Instantly visualize sensor data and remote control devices in real-time.

![Light sensor](http://www.tinkerforge.com/en/doc/_images/Bricklets/bricklet_ambient_light_tilted_350.jpg)
![Barometer](http://www.tinkerforge.com/en/doc/_images/Bricklets/bricklet_barometer_tilted_350.jpg)
![Distance sensor](http://www.tinkerforge.com/en/doc/_images/Bricklets/bricklet_distance_ir_tilted_350.jpg)
![GPS](http://www.tinkerforge.com/en/doc/_images/Bricklets/bricklet_gps_tilted_350.jpg)
![Humidity sensor](http://www.tinkerforge.com/en/doc/_images/Bricklets/bricklet_humidity_tilted_350.jpg)
![LCD display](http://www.tinkerforge.com/en/doc/_images/Bricklets/bricklet_lcd12_20x4_tilted_350.jpg)
![Temperature](http://www.tinkerforge.com/en/doc/_images/Bricklets/bricklet_temperature_tilted_350.jpg)

## Installation

Cumulocity's Java agent supports Tinkerforge out of the box. For installing and running the Java agent on the Raspberry Pi, please see the [Raspberry Pi section](/guides/devices/raspberry-pi.html). For installing and running the Java agent on other Unix systems, please visit the [Java agent section](/guides/devices/java-agent.html).

![Raspberry Pi and Tinkerforge](/images/guides/devices/tinkerforge.jpg)

## Using Tinkerforge components with Cumulocity

### Basic usage

Open Cumulocity in a web browser, go to "All devices" and locate the device that is running the Java agent. The "Child devices" tab lists the connected Tinkerforge devices. 

![Child Devices](/images/guides/devices/tinkerforgechildren.png)

By default, Tinkerforge components will be named using the name of the device that they are connected to ("RaspPi BCM2708 00000000e2f5ad4d" in the screenshot), the type of component ("Temperature") and the serial number of the component ("dGW"). You can edit the name in the "Info" tab of the device.

### Barometer, humidtiy, ambient light and temperature bricklet

Sensor data can be visualized by clicking on the "Measurements" tab of a sensor.

![Sensor measurements](/images/guides/devices/tinkerforgemeasurements.png)

The data is regularly collected by the Cumulocity agent. The frequency of the collection can be configured by clicking on the "Control" tab of the device that runs the agent. The "Configuration" field allows you to edit the frequency and update the configuration on the device. For example, "c8y.light.interval=5000" means that the light sensor is queried every 5.000 milliseconds.

![Sensor configuration](/images/guides/devices/tinkerforgeconfiguration.png)

### Display bricklet

To operate the display from Cumulocity, click the "Control" tab of the display bricklet. The "Relay" buttons switch the backlight on and off. The "Send Message" field sends a text message to be shown on the display.

![Display usage](/images/guides/devices/tinkerforgedisplay.png)

The display has four buttons at the bottom. Operating these buttons will send an event to Cumulocity which is shown on the "Events" tab. You can process this event, for example, using a [CEL statement](/guides/concepts-guide/real-time-processing). The event is of type "c8y_ButtonPressedEvent". The number of the button is part of the text of the event.

![Events](/images/guides/devices/tinkerforgeevents.png)

### Distance bricklet

Similar to a button press on the display, interrupting the infrared sensor of the distance bricklet will send an event. The event can be seen on the "Events" tab of the distance bricklet and can be post-processed with CEL. The type of the event is "c8y_EntranceEvent".

### GPS bricklet

The GPS bricklet will report its current location and send location updates as the device moves. The current location is shown in Device Management on a map and the movement history can be visualized.

![Location](/images/guides/devices/tinkerforgetracing.png)

## Extending the Tinkerforge driver

The source code for the Tinkerforge driver is publicly available at https://bitbucket.org/m2m/cumulocity-examples in the folder linux-agent/tinkerforge-driver.


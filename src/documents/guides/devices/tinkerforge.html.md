---
layout: devices
title: "TinkerForge"
---

## Overview

[TinkerForge](http://tinkerforge.com) provides generic sensors and controls for diverse use cases ranging from environmental monitoring to industrial automation. Together with Cumulocity, you can

* Build complete machine-to-machine use cases by just plugging off-the-shelf hardware components together. No configuration is required -- the components are automatically discovered by the Cumulocity Java agent and connected to the cloud.
* Instantly visualize sensor data and remote control devices in real-time.

## Installation

Cumulocity's Java agent supports TinkerForge out of the box. For installing and running the Java agent on the Raspberry Pi, please see the [Raspberry Pi section](/guides/devices/raspberry-pi). For installing and running the Java agent on Windows or other Unix systems, please visit the [Java agent section](/guides/java/agents).

![Raspberry Pi and TinkerForge](/guides/devices/tinkerforge/tinkerforge.jpg)

## Using TinkerForge components with Cumulocity

### Basic usage

Open Cumulocity in a web browser, go to "All devices" and locate the device that is running the Java agent. The "Child devices" tab lists the connected Tinkerforge devices. 

![Child Devices](/guides/devices/tinkerforge/tinkerforgechildren.png)

By default, TinkerForge components will be named using the name of the device that they are connected to ("RaspPi BCM2708 00000000e2f5ad4d" in the screenshot), the type of component ("Temperature") and the serial number of the component ("dGW"). You can edit the name in the "Info" tab of the device.

### Remote Configuration

Bricklets can be configured remotely using the c8y_Configuration operation. To access this functionality in the UI, navigate to the device running the agent. Under the control tab you will find the Configuration panel. It contains different client-side defined options that can be altered.

![Bricklet Configuration](/guides/devices/tinkerforge/tinkerforgeconfiguration.png)

### Barometer, humidtiy, ambient light, moisture, distance, voltage, current and temperature bricklets

<div><img src="/guides/devices/tinkerforge/barometer.jpg" alt="Barometer" style="display: inline">
<img src="/guides/devices/tinkerforge/humidity.jpg" alt="Humidity" style="display: inline">
<img src="/guides/devices/tinkerforge/ambient_light.jpg" alt="Ambient Light" style="display: inline">
<img src="/guides/devices/tinkerforge/moisture.jpg" alt="Moisture" style="display: inline">
<img src="/guides/devices/tinkerforge/distance_ir.jpg" alt="Distance IR" style="display: inline">
<img src="/guides/devices/tinkerforge/voltage_current.jpg" alt="Voltage/Current" style="display: inline">
<img src="/guides/devices/tinkerforge/current.jpg" alt="Current" style="display: inline">
<img src="/guides/devices/tinkerforge/temperature.jpg" alt="Temperatur" style="display: inline"></div>

Sensor data can be visualized by clicking on the "Measurements" tab of a sensor.

![Sensor measurements](/guides/devices/tinkerforge/tinkerforgemeasurements.png)

The data is regularly collected by the Cumulocity agent. The frequency of the collection can be configured on the Configuration panel. For example, "c8y.light.interval=5000" means that the light sensor is queried every 5.000 milliseconds.

### PTC bricklet

![PTC bricklet](/guides/devices/tinkerforge/ptc.jpg)

In addition to the polling interval, you can also configure the wire mode of the PTC bricklet via the "c8y.ptc.wiremode" option. For more information on wire mode [visit the TinkerForge online documentation](http://www.tinkerforge.com/en/doc/Hardware/Bricklets/PTC.html).

### LCD Display bricklet

![LCD 20x4 Display Bricklet](/guides/devices/tinkerforge/lcd12_20x4.jpg)

To operate the display from Cumulocity, click the "Control" tab of the display bricklet. The "Relay" buttons switch the backlight on and off. The "Send Message" field sends a text message to be shown on the display.

![Display usage](/guides/devices/tinkerforge/tinkerforgedisplay.png)

The display has four buttons at the bottom. Operating these buttons will send an event to Cumulocity which is shown on the "Events" tab. You can process this event, for example, using a [CEL statement](/guides/concepts/realtime). The event is of type "c8y_ButtonPressedEvent". The number of the button is part of the text of the event.

![Events](/guides/devices/tinkerforge/tinkerforgeevents.png)

### 4x7 Segment Display bricklet

![4x7 Segment Display bricklet](/guides/devices/tinkerforge/4x7_segment_display.jpg)

The 4x7 Segment Display's implementation is similar to that of the LCD Display bricklet. In addition you can set the display brightness in the Configuration panel through the "c8y.4x7segmentdisplay.brightness" option (Max: 7, Min: 1, Default: 4).

### Distance InfraRed and UltraSound bricklets

<div><img src="/guides/devices/tinkerforge/distance_ir.jpg" alt="Distance IR" style="display: inline">
<img src="/guides/devices/tinkerforge/distance_us.jpg" alt="Distance US" style="display: inline"></div>

Additionally to providing measurement data, the Distance US and IR bricklets also send events. Similar to a button press on the display, interrupting the sensor of the distance bricklets will send an event. The event can be seen on the "Events" tab of the distance bricklet and can be post-processed with [CEL](/guides/concepts/realtime). The type of the event is "c8y_EntranceEvent". Additionally the following configuration options are provided:

* c8y.distanceir.eventSlackTime, c8y.distanceus.eventSlackTime - sets the minimum time between events. Time is in ms. Default is 10000ms.
* c8y.distanceir.eventTreshold - sets the minimum distance in mm that would trigger an event.  Defauilt is 400mm;
* c8y.distanceus.eventTreshold - sets the minimum distance in % that would trigger an event. Default is 25%;

Note: The DistanceUS bricklet measures distance in percentages, where 0% would be around 2cm and 100% would be approximately 400cm.  This is because the relation between the distance value and the actual distance depends on the exact value of the 5V supply voltage(deviations in the supply voltage result in deviations in the measured distance values) and is non-linear (resolution is bigger at close range).

### GPS bricklet

![GPS Bricklet](/guides/devices/tinkerforge/gps.jpg)

The GPS bricklet will report its current location and send location updates as the device moves. The current location is shown in Device Management on a map and the movement history can be visualized.

![Location](/guides/devices/tinkerforge/tinkerforgetracing.png)

## Extending the TinkerForge driver

The source code for the TinkerForge driver is publicly available at https://bitbucket.org/m2m/cumulocity-examples in the folder linux-agent/tinkerforge-driver.


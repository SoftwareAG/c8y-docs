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

Open Cumulocity in a web browser, go to "All devices" and locate the device that is running the Java agent. The "Child devices" tab lists the connected TinkerForge devices. 

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
<img src="/guides/devices/tinkerforge/temperature.jpg" alt="Temperatur" style="display: inline"></div><br>

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

### Remote Switch bricklet

![Remote Switch bricklet](/guides/devices/tinkerforge/remote_switch.jpg)

#### Configuration

The Remote Switch bricklet can be used to toggle on and off various remote sockets, lamps, etc. It supports three types of addressing.

* Type A addressing: To add a predefined type A device to the Remote Switch bricklet, append the following lines to the Configuration panel:

		c8y.remoteswitch.<device name>.type=A
		c8y.remoteswitch.<device name>.houseCode=<house code>
		c8y.remoteswitch.<device name>.receiverCode=<receiver code>	
Where:	
&lt;device name&gt; - the name of the device(e.g. socket1, lamp1, etc.)	
&lt;house code&gt; - 5-bit integer (0 to 31)	
&lt;receiver code&gt; - 5-bit integer (0 to 31)

* Type B addressing: To add a predefined type B device to the Remote Switch bricklet, append the following lines to the Configuration panel:

		c8y.remoteswitch.<device name>.type=B
		c8y.remoteswitch.<device name>.address=<address>
		c8y.remoteswitch.<device name>.unit=<unit>	
Where:	
&lt;device name&gt; - the name of the device(e.g. socket1, lamp1, etc.).	
&lt;address&gt; - 16-bit integer (0 to 65534)	
&lt;unit&gt; - 4-bit integer (0 to 15)

* Type C addressing: To add a predefined type C device to the Remote Switch bricklet, append the following lines to the Configuration panel:	

		c8y.remoteswitch.<device name>.type=C
		c8y.remoteswitch.<device name>.systemCode=<system code>
		c8y.remoteswitch.<device name>.deviceCode=<device code>	
Where:	
&lt;device name&gt; - the name of the device(e.g. socket1, lamp1, etc.).	
&lt;system code&gt; - 4-bit character (A to P)	
&lt;device code&gt; - 4-bit integer (0 to 15)	

For more information on Remote Switch addressing please refer to the [TinkerForge documentation](http://www.tinkerforge.com/en/doc/Hardware/Bricklets/Remote_Switch.html).

#### Control 

The devices can be switched on and off, in alphabetical order, using the c8y_RelayArray operation. "OPEN" would mean off and "CLOSED" - on.

Example: An operation
		
	"c8y_RelayArray" : [
		"OPEN",
		"CLOSED"
	]
	
on a Remote Switch bricklet with the following configuration
	
	c8y.remotebricklet.device2.type=B
	c8y.remotebricklet.device2.address=31337
	c8y.remotebricklet.device2.unit=7
	c8y.remotebricklet.device1.type=C
	c8y.remotebricklet.device1.systemCode=B
	c8y.remotebricklet.device1.deviceCode=13
		
will turn off "device2" and turn on "device1".

### Dual Relay Bricklet

![Dual Relay Bricklet](/guides/devices/tinkerforge/dual_relay.jpg)

The dual relay bricklet consists of two relays. Each relay has three terminals such that the terminal in the middle is electrically connected to the terminal left or right depending on the relay state.

#### Control

The Dual Relay bricklet can be switched with the c8y_RelayArray operation.


	"c8y_RelayArray" : [
		"OPEN",
		"CLOSED"
	]

For example, the operation above will set the state of relay one to "OPEN" and relay two to "CLOSED".

### IO16 bricklet

![IO16 Bricklet](/guides/devices/tinkerforge/io16.jpg)

#### Configuration

The IO16 bricklet consist of two ports 8-pins each. It can be configured through the Configuration panel. Available options are:

	c8y.io16.porta.direction=<direction>
	c8y.io16.porta.value=<value>
	c8y.io16.portb.direction=<direction>
	c8y.io16.portb.value=<value>

Where:
* &lt;direction&gt; is an 8-bit integer(0 to 255) direction mask. 0 - output, 1 - input. 
* &lt;value&gt; is an 8-bit integer(0 to 255) value mask describing the type of input or the output value respectively. If a pin is set as output 1 and 0 will simply be the logical values. In case the pin is set as input 1 would mean pull up input and 0 would be default input.

For example, configuring port B direction to 192(11000000) and value to 88(01011000), would mean:
* pins B3, B4 are set as output with logical value 1(3,3/5 V)
* pins B0, B1, B2, B5 are set as output with logical value 0(0V)
* pin B6 is set as input with pull up
* pin B7 is set as default input

#### Control

The IO16 outputs can be switched with a c8y_RelayArray operation.

	"c8y_RelayArray" : [
		"OPEN",
		"OPEN",
		"CLOSED",
		"OPEN"
	]
	
This operation will find up to four outputs starting from A0 to B7 and switch them.

### Distance InfraRed and UltraSound bricklets

<div><img src="/guides/devices/tinkerforge/distance_ir.jpg" alt="Distance IR" style="display: inline">
<img src="/guides/devices/tinkerforge/distance_us.jpg" alt="Distance US" style="display: inline"></div><br>

Additionally to providing measurement data, the Distance US and IR bricklets also send events. Similar to a button press on the display, interrupting the sensor of the distance bricklets will send an event. The event can be seen on the "Events" tab of the distance bricklet and can be post-processed with [CEL](/guides/concepts/realtime). The type of the event is "c8y_EntranceEvent". Additionally the following configuration options are provided:

* c8y.distanceir.eventSlackTime, c8y.distanceus.eventSlackTime - sets the minimum time between events. Time is in ms. Default is 10000ms.
* c8y.distanceir.eventTreshold - sets the minimum distance in mm that would trigger an event.  Default is 400mm;
* c8y.distanceus.eventTreshold - sets the minimum distance in % that would trigger an event. Default is 25%;

Note: The DistanceUS bricklet measures distance in percentages, where 0% would be around 2cm and 100% would be approximately 400cm.  This is because the relation between the distance value and the actual distance depends on the exact value of the 5V supply voltage(deviations in the supply voltage result in deviations in the measured distance values) and is non-linear (resolution is bigger at close range).

### GPS bricklet

![GPS Bricklet](/guides/devices/tinkerforge/gps.jpg)

The GPS bricklet will report its current location and send location updates as the device moves. The current location is shown in Device Management on a map and the movement history can be visualized.

![Location](/guides/devices/tinkerforge/tinkerforgetracing.png)

## Extending the TinkerForge driver

The source code for the TinkerForge driver is publicly available at https://bitbucket.org/m2m/cumulocity-examples in the folder java-agent/tinkerforge-driver.


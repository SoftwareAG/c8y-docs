---
title: Tinkerforge
---

## Overview

[Tinkerforge](http://tinkerforge.com) provides generic sensors and controls for diverse use cases ranging from environmental monitoring to industrial automation. Together with Cumulocity, you can

* Build complete machine-to-machine use cases by just plugging off-the-shelf hardware components together. No configuration is required -- the components are automatically discovered by the Cumulocity Java agent and connected to the cloud.
* Instantly visualize sensor data and remote control devices in real-time.

## Installation

Cumulocity's Java agent supports Tinkerforge out of the box. For installing and running the Java agent on the Raspberry Pi, please see the [Raspberry Pi section](raspberry-pi.html). For installing and running the Java agent on other Unix systems, please visit the [Java agent section](java-agent.html).

## Using Tinkerforge components with Cumulocity

### Basic usage

To remotely manage the Tinkerforge components, open the Device Management application. 

	https://<<tenant URL>>/apps/devicemanagement

Tinkerforge components will be automatically visible as children of the device running the Java agent. Click on "List all" or search for the device using the search box:

	TBD: Image with Raspberry Pi & TF connected

Click on "Browse Child Devices":

	TBD: Image with child devices

By default, Tinkerforge components will be named using the name of the device that they are connected to ("RaspPi BCM2708 00000000e2f5ad4d"), the type of component ("Temperature") and the serial number of the component ("dGW"). You can make simplify this by simply clicking on the component, editing the name ("Temperature Living Room") and saving. For simplicity, the Master brick not be shown.

### Barometer, humidtiy, ambient light and temperature bricklet


### Display bricklet

Backlight 
Text
Events


### Distance bricklet


### GPS bricklet

The GPS bricklet will report its current location and send location updates as the device moves. The current location is shown in Device Management on a map. If you subscribe to AssetTrack, further functionality such as location traces is available.

	Screenshots

### Configuration

To change the behaviour of 

Some components can be 

### Writing rules

CEL applies, give example

## Extending the Tinkerforge driver

Source code for modifciation

---
title: Java reference agent
---

## Overview

The Java Agent provides a Java-based reference implementation for all device management features of Cumulocity plus drivers for various device kits. There are multiple ways of using the agent:

* Use it as it is for managing your Java-enabled devices.
* Use it as a base for your own implementation by adding drivers for additional hardware.
* Use it as a reference for implementing device management features in other environments.

The Java agent is available in [source code form](https://bitbucket.org/m2m/cumulocity-examples) and supports Unix-based systems. It provides the following functionality: 

* Discovery and hardware identification: Automatically registers a device, its supported functionality and its connected sensors and controls.
* Availability management: Determine if a device connects as expected and notify the user if not.
* Software management: Upgrade the software on the device and restart with the new software.
* Firmware management: Upgrade the firmware on the device and restart with the new firmware.
* Modem support: Provides basic modem information and signal statistics  (IMEI, ICCID, cell ID, signal strength, BER; depending on modem type).
* Extensibility through driver concept.
* Ready-made drivers for [Kontron M2M development kit](kontron.html), [PiFace Digital](piface.html) and [Tinkerforge](tinkerforge.html).

## Prerequisites

A Unix-based system with an installation of Java SE 7 is required (for example, Linux, MacOS). To verify the availability of Java on your system, type

	$ java -version
	java version "1.7.0_45"

To install Java, please visit http://java.com.

## Installation

* Visit kit pages (Raspberry Pi, Kontron, ... )
* Download tar and unpack
* Edit config file
* Go into folder and run
* Watch log

## Drivers

* META-INF service, add jar to classpath
* Driver interface, follows flow described in REST Dev Guide

## Building

## Extending

How it works

Follows cycle described in REST developer's guide:
* Discovery
* Polling


* Hardware
* 

How it can be extended

* Drivers

---
title: Overview
layout: redirect
weight: 10
---

The [Raspberry Pi](http://en.wikipedia.org/wiki/Raspberry_Pi) is a popular, low-cost mini computer running Linux. It is ideally suited for prototyping machine-to-machine solutions through its GPIO pins and USB support.

In this section, we describe how to install a Cumulocity agent with all relevant drivers on the Raspberry Pi to be able to remotely manage the Raspberry Pi and its connected sensors and controls. This allows you to

* Use basic device management functionality.
* Identify individual Raspberry Pis remotely based on their hardware serial number.
* Update the Pi's firmware remotely through the firmware repository on GitHub.
* Use the [PiFace Digital](http://www.element14.com/community/docs/DOC-52857/l/piface-digital-for-raspberry-pi) adapter board from the cloud.
* Use [TinkerForge](/guides/devices/tinkerforge) sensors and controls from the cloud.

> The agent is provided in open source form as-is without support or warranty. For commercial use, we recommend to use industrial hardware and/or the Cumulocity C++ SDK.

![Raspberry Pi image](http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/RaspberryPi.jpg/640px-RaspberryPi.jpg)

### Prerequisites

To install the agent, you need a Raspberry Pi with an installation of Java SE, Version 7 or later. Java SE is pre-installed in recent distributions of [Raspbian](http://www.raspberrypi.org/downloads), the default Linux distribution of the Raspberry Pi. To verify, simply type

	$ java -version
	java version "1.7.0_40"

You also need to know the serial number of your Raspberry Pi to register it with Cumulocity:

	$ cat /proc/cpuinfo
	Processor	: ARMv6-compatible processor rev 7 (v6l)
	BogoMIPS	: 464.48
	Features	: swp half thumb fastmult vfp edsp java tls 
	CPU implementer	: 0x41
	CPU architecture: 7
	CPU variant	: 0x0
	CPU part	: 0xb76
	CPU revision	: 7

	Hardware	: BCM2708
	Revision	: 000e
	Serial		: 0000000017b769d5

Write down the number in the line "Serial". Make sure that your power supply matches the power demands of the Raspberry Pi and its connected devices. A standard USB charger may not be sufficient to connect additional devices as well as a modem. The most simple solution is to use a USB hub that provides power on both the host and client ports, such as [this one](http://www.logilink.eu/showproduct/UA0085.htm). Connect the Raspberry Pi to the host side and all other devices to the client sides.

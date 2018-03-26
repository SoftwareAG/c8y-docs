---
order: 10
layout: redirect
title: Overview
---

The Java agent provides an example implementation for many device management features of Cumulocity plus drivers for various device kits. The Java agent supports Windows and Unix-based systems and contains the following functionality:

* Discovery and hardware identification: Automatically registers a device, its supported functionality and its connected sensors and controls.
* Availability management: Determine if a device connects as expected and notify the user if not.
* Software management: Upgrade the software on the device and restart with the new software.
* Modem support: Provides basic modem information and signal statistics  (IMEI, ICCID, cell ID, signal strength, BER; depending on modem type).
* Extensibility through driver concept.
* Ready-made drivers for [Raspberry Pi](/guides/devices/raspberry-pi), [PiFace Digital](/guides/devices/raspberry-pi) and [Tinkerforge](/guides/devices/tinkerforge).

> The agent is provided in open source form as-is without support or warranty. For commercial use, we recommend to use industrial hardware and/or the Cumulocity C++ SDK.
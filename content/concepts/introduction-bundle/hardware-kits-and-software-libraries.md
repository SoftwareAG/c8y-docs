---
title: Hardware kits and software libraries
weight: 20
---


### Functionality within Cumulocity

Cumulocity directly supports various devices with ready-made software libraries and examples. These can be specialized devices for a particular use case, as locations trackers, OBUs and vending telemetry devices. They can also be developer kits for building generic devices, such as [Raspberry Pi](/guides/devices/raspberry-pi), [Cinterion boards](/guides/devices/cinterion), [Tinkerforge sensors](/guides/devices/tinkerforge) and more. These developer kits are described in more detail in the corresponding chapters of the "Devices" section in this documentation.

Outside of the specific kits, many other devices can run the software with no or little modification. That is why the software is provided in source code form for you to extend it to any other device that you may have. There are also generic client libraries for Java, JavaME, C/C++ and Lua for your own implementation. If your device uses a completely proprietary runtime environment, you can always use Cumulocity's REST resp. HTTP interfaces. These will work on practically any Internet-connected device today, down to the smallest systems.

![Supported devices](/guides/images/concepts-guide/devices.png)
---
order: 10
title: Introduction to Cumulocity
layout: default
---

## Overview

Cumulocity gives you very fast visibility and control over your remote assets, be these houses, cars, machines or any other assets that you might need to manage. Cumulocity provides

* Certified hardware kits and software libraries that you can use to bring your remote assets into the cloud.
* Device management, data visualization and remote control functionality through the web.
* Rapid customization of the above through [Cumulocity Event Language](/guides/concepts-guide/real-time-processing) rules and [Cumulocity applications](/guides/concepts-guide/developing-applications).
* APIs for extending the existing functionality or interfacing Cumulocity with your other IT services such as ERP or CRM systems. Cumulocity can also host your HTML5 applications.

All this is provided through a cloud-based subscription service, which makes creating Internet of Things (IoT) solutions with Cumulocity fundamentally different from bespoke development and RAD (rapid application development). You can start immediately with a large amount of existing functionality, and you can start for free. You do not need to worry about IT infrastructure (such as hosting, networking, security, storage and backup) and IT management (for example, making sure that all software is available for your users). 

Cumulocity works with any network architecture, but is specifically designed to work out of the box with mobile networks. In the following sections, we will give a short overview of the different functional areas with references to more detailed descriptions.

![Solution building](/images/guides/concepts-guide/solution.gif)

## Hardware kits and software libraries

Cumulocity directly supports various devices with ready-made software libraries and examples. These can be specialized devices for a particular use case, such as locations trackers, OBUs and vending telemetry devices. They can also be developer kits for building generic devices, such as [Arduino](/guides/devices/startwitharduino), [Raspberry Pi](/guides/devices/raspberry-pi), [Cinterion boards](/guides/devices/developing-with-the-smart-agent-for-cinterion), [Tinkerforge sensors](/guides/devices/tinkerforge) and more. These developer kits are described in more detail in the corresponding chapters of the "Devices" section in this documentation.

Outside of the specific kits, many other devices can run the software with no or little modification. That is why the software is provided in source code form for you to extend it to any other device that you may have. There are also generic client libraries for Java, JavaME, C/C++ and Lua for your own implementation. If your device uses a completely proprietary runtime environment, you can always use Cumulocity's REST resp. HTTP interfaces. These will work on practically any Internet-connected device today, down to the smallest systems.

![Supported devices](/images/guides/concepts-guide/devices.png)

## Mobile networking support

Cumulocity supports any type of Internet connectivity in a secure manner. It gracefully deals with intermittent, bandwidth-restricted and uni-directional connections (such as communication through NAT). Where desired, Cumulocity can control remote devices in a near real-time fashion.

Mobile Internet connectivity is an ideal choice for many machine-to-machine applications, since it works "over the top" nearly everywhere without requiring any integration with a company's network infrastructure. This is especially true if your M2M SIM card allows for free roaming between mobile networks. Also, the large bandwidths requirements of consumer applications are often not required. With Cumulocity, you can benefit from mobile connectivity without requiring additional network provider services such as VPNs and public or even static IP addressing.

## Device management

Cumulocity provides extensive device management for fully certified devices. This includes

* Hardware and modem information.
* Connection monitoring.
* Centralized fault management and service level monitoring.
* Configuration management.
* Software and firmware management.
* Graphs of device statistics.
* Frequently used remote controls (e.g., restart button, switches).
* Troubleshooting features such as event list and operations queue.

The level of depth in device management may depend on device features. (E.g., if a device does not support remote firmware upgrade, it will also not be available through Cumulocity.) For interfacing devices not yet certified with Cumulocity, the [Device Management Library](/guides/reference-guide/device-management) and the [REST Developer's Guide](/guides/rest/device-integration) is publicly available.

![Device Management](/images/guides/concepts-guide/devicemanagement.png)

## Visualization and remote control

Cumulocity visualizes your sensor data centrally and graphically through its modern web user interface. It also exposes common remote controls to users with the relevant permissions.

The user interface automatically adapts itself to the devices you connect -- no configuration required. For example, if you connect a device that supports being restarted from remote, you will see a "Restart" button. If the device sends light sensor data, you will see a graph with the readings from the sensor.

It also adapts itself to the web browser that you use. For example, if you use a mobile phone or tablet with limited screen size, it will change user interface controls to use less screen estate.

Through the [Sensor Library](/guides/reference-guide/sensor-library), common sensor and control types are correctly rendered regardless of the device that produces the sensor data.

![Dashboard](/images/guides/concepts-guide/dashboard.png)

## Customization

The functionality described above provides already a wide range of device management, visualization and control options. But what about custom visualization, new control widgets and custom business logic? Try Cumulocity's extensive customization options:

* Write alarm rules to reprioritize or suppress alarms and to define your SLA parameters.
* Use [Cumulocity Event Language](/guides/concepts-guide/real-time-processing) to implement real-time business rules. For example, get an email when critical events happen, or trigger automated actions on devices in that case.
* Set up a graphical dashboard with your most important KPIs.
* Subscribe to plugins that contribute new functionality to the Cumulocity application.

![Rules](/images/guides/concepts-guide/rules.png)

## APIs

Cumulocity exposes its complete functionality through programming interfaces (APIs). This means that all of Cumulocity's functionality is available for you to use in different contexts outside of what Cumulocity directly provides -- in your own applications, in your own devices.

In contrast to many other M2M and IoT platforms, Cumulocity uses the same APIs and the same interface technology for all use cases. As a consequence, you have a wider range of choices in putting intelligence into your IoT devices, depending on how powerful they are. You also have to use only one set of APIs and one technology to build a complete solution from device to application on your own.

Cumulocity uses HTTP and REST, which is today the most widely used interfacing technology and which works on any Internet-connected device ranging from small embedded microcontrollers up to desktop PCs. The secure variant, HTTPS, is used for the most security critical applications and will you give the best possible security.

The plugin concept of Cumulocity enables you to write new user interface functionality that will seamlessly extend the existing Cumulocity application.

## Where to learn more?

More conceptual information can be found in the following sections of the concept's guide:

* The general technical concepts behind Cumulocity are described in [Cumulocity's domain model](/guides/concepts-guide/domain-model).
* Concepts related to interfacing devices and other IT systems with Cumulocity are described in [Interfacing devices](/guides/concepts-guide/interfacing-devices).
* Customization concepts of Cumulocity are described in [Real-time processing in Cumulocity](/guides/concepts-guide/real-time-processing) and [Hosting applications](/guides/concepts-guide/hosting).
* Security concepts are described in [Securing M2M applications](/guides/concepts-guide/securing-m2m-applications).

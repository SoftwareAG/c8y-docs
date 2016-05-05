---
title: BeagleBone Black
layout: default
---

## Overview

[BeagleBone - Black](https://beagleboard.org/black) is a  community-supported development platform perfect for IoT applications. The device features the following interfaces:

> 1 x 10/100 MBit/s Ethernet

> 1 x USB 2.0
 
> 1 x HDMI

> 1 x MicroSD slot

> Multiple I/O bus: GPMC (nand), MMC, SPI, I2C, CAN, McASP, MMC, 4 Timers, XDMA interrupt


## Install the Agent

The device is supported by Cumulocity's Linux agent. To install the agent, first login to the device.

![Connect](/guides/devices/beaglebone/beagleboneconnect.png)

Second, after you have logged into the device you will have to install the javaSDK. Simply follow the instructions in [here](http://beagleboard.org/project/java/).

> Note that Java must be in your path variable.

Third, download and install the latest Linux agent:

![Agent](/guides/devices/beaglebone/getagent.png)

Finally, start the agent

![RunAgent](/guides/devices/beaglebone/runagent.png)

## Register to Cumulocity

When the agent has been started, find the serial number of your device and go to the device registration page in the "Device Management" application, type the serial number and click on "Register Device". Green "Accept" button will appear after a few seconds, click on the button to accept the device.

![RegisterDevice](/guides/devices/beaglebone/bootstrap.png)

## Cumulocity IoT Platform

When the device has been accepted, you can remotely monitor and control your device.

![DeviceInfo](/guides/devices/beaglebone/deviceinfo.png)
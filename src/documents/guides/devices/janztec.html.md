---
title: Janz Tec emPC-A/RPI
layout: default
---

## Overview

[Janz Tec emPC-A/RPI](https://www.janztec.com/en/products/embedded-computing/empc/empc-arpi/) is a industrial embedded controller based on the Raspberry Pi 2 Model B, makes it ideal for IoT applications. The emPC-A/RPI device features the following interfaces:

> 1 x 10/100 MBit/s Ethernet

> 4 x USB 2.0

> 1 x Serial console

> 1 x HDMI (sideways)

> 1 x Industrial connector (sideways) with 1 x CAN,

> 1 x RS232 / RS485 (switchable)

> 4 x Digital input and 4 x Digital output

![Janz Tec emPC-A/RPI](/guides/devices/janztec/janztec.png)

## Install the Agent

The device has been tested to be supported by Cumulocity's Linux agent. First, login to the device, and make sure you are running as least Raspbian 8.0 (Jessie).

```shell
$ lsb_release -a
No LSB modules are available.
Distributor ID: Raspbian
Description:    Raspbian GNU/Linux 8.0 (jessie)
Release:        8.0
Codename:       jessie
```

Second, install the required dependencies for the agent by issuing the following command in the terminal:

```shell
$ sudo apt-get install libcurl3 liblua5.2-0
```

Third, download and install the latest Linux agent:

```shell
$ wget http://resources.cumulocity.com/examples/c8ydemo-agent-armhf-latest.deb
$ sudo dpkg -i c8ydemo-agent-armhf-latest.deb
```

Finally, reboot the device to automatically start the agent:

```shell
$ sudo reboot
```

## Register to Cumulocity

First, find out the serial number of your device:

```shell
$ grep Serial /proc/cpuinfo
Serial          : 000000001955c218
```

Go to Cumulocity's device registration page, type in the above serial number and click "Register Device". In a few seconds, a green "Accept" button appears, click the button to accept the device.

![Bootstrap](/guides/devices/janztec/bootstrap.png)

## Cumulocity IoT Platform

Remotely monitoring the memory usage and system load of your device.

![measurement](/guides/devices/janztec/measurement.png)

Troubleshooting your device via Cumulocity's logview feature.
![logview](/guides/devices/janztec/logview.png)

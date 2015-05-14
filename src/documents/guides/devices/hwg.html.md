---
layout: devices
title: HW group
---

## Overview

The HW group device Ares 12 is a remote environment monitoring device that can be used at any place with GSM coverage and contains a battery for several hours of backup. Ares collects and records data from connected sensors, stored values being sent to Cumulocity platform.
HWg-Ares 12 include two digital (dry contact) inputs and support temperature, humidity, illumination, voltage and other 1-Wire UNI sensors.

<img src="/guides/devices/hwg/Ares12.png" alt="HW group" style="display: inline;max-width: 40%">

## Configuring the HW group Ares 12 for Cumulocity

In order to connect the device to Cumulocity platform, use Aresconf configuration tool and follow the next steps:

* Connect the device to the PC using the USB cable, start the Aresconf tool and choose “Advanced mode”.
* Under “Portal”, thick “Enable Portal” and set the “Server Address” to <br> _hwg-agent.cumulocity.com/HwgServAgent/rest/sendData_.
* Set the “Port” to 9099.
* Set the “Username” as _tenant/username_ (Cumulocity tenant and username)
* Set the “Password” as _password_ (Cumulocity passoword)

While you can use your personal username and password for testing, we suggest that in production you create a new user account for each device. To do this, go to the "Administration" application in Cumulocity, and create a new user. Set the user group to "device" to provide the correct access rights.

The below images illustrate the configuration described above.

![Aresconf](/guides/devices/hwg/Aresconf.png)


## Monitoring the HW group Ares 12

Once the device setup is done, it is enough to power on the device and it will be automatically registered in Cumulocity. Under the tab “Child device” a list of all the sensors and inputs is shown.

![Devicemanagement](/guides/devices/hwg/Devicemanagement.png)



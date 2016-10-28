---
title: SMARTBox
layout: devices
---

## Overview

Smartbox, based on the Telit Chipset HE910 is a ready to use solution for connecting Modbus devices to the Cumulocity Fieldbus Cloud. It provides a Master Slave Communication on RS485 for connecting up to 20 devices as well as 10 Sensors (Current ,Temperature, Pressure). Easy configure the SetUp of building automation fielddevices like pumps, e-meters, Airhandling units in the Cumulocity Fieldbus cloud or connect different sensortypes to the box. Using the Smartrest protocol the terminal comes up with a low traffic solution for decentralized applications. For the Smartbox there is a customized user interface available made for easy handling the sensors and showing graphs for consumption and temperatures. 

![Overview](/guides/devices/smartbox/overview.png)

## Wire your Modbus RTU RS485 Network

Wire the Modbus RTU RS485 network: 
![Modbus RTU](/guides/devices/smartbox/modbus.png)

Wire the Sensors:
![Sensors](/guides/devices/smartbox/sensors.png)
By default NTC temperature sensors are configured. 

## Configure the Terminal

By default the terminal supports cloud fieldbus from Cumulocity. To use it you should:
* Subscribe your account to the Cloud Fieldbus app by contacting [support](https://support.cumulocity.com).
* Configure the terminal:
  1. Power on the Terminal.
  2. Configure the Terminal's APN by sending an SMS to Terminal's SIM card with the following syntax: `GPRS=APN,username,password` (e.g. `GPRS==public4.m2minternet.com,,`)

## Registering the Terminal in Cumulocity

In the cumulocity Cloud Fieldbus app go to the menu and there find Devices -> Registration. Enter the Terminal's IMEI as an ID. The IMEI is printed on the devices itself:

![IMEI](/guides/devices/smartbox-modbus/imei.png)

After accepting the device you should be able to see it in the All Devices list within 30 second.

![The Terminal in the List of All Devices](/guides/devices/smartbox-modbus/terminal-in-all-devices.png)

## References

For further information please refer to the [manual](/guides/devices/smartbox/Manual_Smartbox_29-09-2016.pdf) and [datasheet](/guides/devices/smartbox/Datasheet_Smartbox_29-09-2016.pdf) provided by PSsystec.

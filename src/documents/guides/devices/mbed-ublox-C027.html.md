---
layout: devices
title: Mbed u-blox C027
---

## Introduction

The [u-blox C027](https://mbed.org/platforms/u-blox-C027/ "u-blox C027") is a complete starter kit that allows quick prototyping of a variety of applications for the Internet of Things. The device has a cellular module as well as a GPS/GNSS receiver, enabling straightforward development of location-aware global communication.  

![u-blox C027](/guides/devices/mbed/c027.png)

For demonstration purposes, the [mbed application shield](http://mbed.org/components/mbed-Application-Shield/) can be attached to the C027. It provides various sensors and an LCD display.

![mbed application shield](/guides/devices/mbed/applicationshield.jpg)

The Cumulocity mbed agent connects the C027 and the application board to Cumulocity and provides the following features:

* Network dialup using the C027 modem.
* Efficient communication through [SmartREST](/guides/rest/smartrest).
* No configuration required through Cumulocity's device registration feature.
* Connection status monitoring using the LCD display of the application shield.
* Collection and storage of temperature, GPS and analog sensor readings.

## Prerequisites

To run the Cumulocity mbed agent, the following items are required:

* [u-blox C027 Internet of Things starter kit](https://mbed.org/platforms/u-blox-C027/).
* [mbed appliation shield](https://mbed.org/components/mbed-Application-Shield/).
* A USB cable.
* A power supply.
* An account on https://mbed.org.
* A SIM card with data plan for Internet access. The SIM card should have no SIM PIN. The SIM PIN can be deactivated using any mobile phone.

## Preparation

* Insert the SIM card into the SIM slot on the backside of the u-blox C027.
* Attach the cellular antenna to the board.
* For GPS/GNSS capabilities, attach the GPS antenna to the board.
* Attach the mbed application shield to the C027.
* Connect a USB cable to the C027 and to your computer. The C027 will appear as "MBED" drive on your computer.
* Plug in the power supply and connect it to the application board.

> Note that the device cannot be flashed without the power supply connected.

## Install the agent

* Login to the mbed.org site and visit the [C027 page](https://mbed.org/platforms/u-blox-C027/). Click "Add platform".
* Visit <a href="http://mbed.org/users/Cumulocity/code/MbedSmartRestMain/" target="_blank" title="Cumulocity Mbed SmartREST main application">the mbed application site</a> and click "Import" to import the agent into your online Mbed IDE.
* In the IDE, click the "Compile" button. The IDE will download the compiled application to your computer.
* Copy the downloaded file to the "MBED" drive.
* Press the reset button on the C027 to start the agent.

## Connect the C027

* The C027 will now dial up to the Internet. You will see status updated in the LCD display. If the device cannot connect to the Internet, it will display an error message. In case of an error message "No APN found", follow the instructions below in Section "Troubleshooting".
* Log on to the Cumulocity web interface and enter the IMEI address of the cellular module into the device registration form. The IMEI is printed on the modem chip of the C027.
* The device appears as *connected*. Click the "Accept" button.
* The device now registers with Cumulocity and shows up in the device list.

## Common problems

* **The device does not connect to a network**: Review the source code file `apndb.cpp` and add an entry with the mobile country code, mobile network code and your APN.

* **The device does not appear as *connected* in the device registration process**: Review application output using a serial console. See http://mbed.org/handbook/SerialPC for details.

* **The device does not appear in the devices section on the web interface**: Review application output using a serial console. See http://mbed.org/handbook/SerialPC for details.


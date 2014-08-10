---
layout: devices
title: Mbed u-blox C027
---

## Introduction

The [u-blox C027](https://mbed.org/platforms/u-blox-C027/ "u-blox C027") is a complete starter kit that allows quick prototyping of a variety of applications for the Internet of Things. The device has a cellular module as well as a GPS/GNSS receiver, enabling straightforward development of location-aware global communication.  
<img class="img-responsive center-block" src="/images/guides/devices/mbed/c027.png" title="u-blox C027"/>

Cumulocity is supporting the u-blox C027 application board using the *SmartREST* protocol. To get started, follow the steps below.

## Getting Started

This guide requires the u-blox C027 REV-B model as the REV-A does not have a debugging LED.

Furthermore, basic knowledge of the Mbed online IDE is assumed.

### Preparation

1. Insert an internet-enabled SIM card into the SIM slot on the backside of the u-blox C027 application board.

2. Attach the cellular antenna to the board.

3. For GPS/GNSS capabilities, attach the GPS antenna to the board.

4. Connect a USB cable to the C027 and to your computer.

5. Plug in the power supply and connect it to the application board. This step can be done at any time when working with the device. Just be aware that the device cannot be flashed using only the USB connection.

### Flash the application

1. Go to <a href="http://mbed.org/users/Cumulocity/code/MbedSmartRestMain/" target="_blank" title="Cumulocity Mbed SmartREST main application">the mbed application site</a> and import the program into your online Mbed IDE.

2. Upload the application to the u-blox C027 by pressing the *Compile* button and downloading the program image to your Mbed flash drive.

3. Press the reset button on the C027 to finally start the program.

4. Log on to the Cumulocity web interface and enter the IMEI address of the cellular module into the device registration form.

5. The device should appear as *connected*. Should this not be the case, use a serial console to view the output of the application.

6. Accept the device registration request.

7. A new device should appear in your account. The application will remember the credentials obtained from the registration process upon reset.

## Common problems

* **The device does not connect to a network**: Review `apndb.cpp` and add an entry with the mobile country code, mobile network code and your APN.

* **The device does not appear as *connected* in the device registration process**: Review application output using a serial console.

* **he device does not appear in the devices section on the web interface**: Review application output using a serial console.


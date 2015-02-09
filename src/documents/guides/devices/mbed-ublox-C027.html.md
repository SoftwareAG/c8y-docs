---
layout: devices
title: Mbed u-blox C027
---

## Introduction

The [u-blox C027](https://mbed.org/platforms/u-blox-C027/ "u-blox C027") is a complete starter kit that allows quick prototyping of a variety of applications for the Internet of Things. The device also comes with a detachable cellular module as well as a GPS/GNSS receiver, which enable straightforward development of applications with location-aware global communication capability.

![u-blox C027](/guides/devices/mbed/c027.png)

For demonstration purposes, the [mbed application shield](http://mbed.org/components/mbed-Application-Shield/) can be attached to the C027. It provides various sensors and an LCD display.

![mbed application shield](/guides/devices/mbed/applicationshield.jpg)

The Cumulocity mbed agent connects the C027 application board to Cumulocity and provides the following features:

* Network dial-up using the C027 modem.
* Efficient communication through [SmartREST](/guides/rest/smartrest).
* No configuration required through Cumulocity's device registration feature.
* Connection status monitoring using the LCD display of the application shield.
* Collection and storage of temperature, GPS and analog sensor readings.

## Prerequisites

To run the Cumulocity mbed agent, the following items are required:

* [u-blox C027 Internet of Things starter kit](https://mbed.org/platforms/u-blox-C027/).
* [mbed appliation shield](https://mbed.org/components/mbed-Application-Shield/).
* A USB type A to type B adapter.
* A power supply.
* An account on https://mbed.org.
  > You can simply sign up an account in [mbed](https://mbed.org) for free.
* A SIM card with data plan for Internet access. The SIM card should have no SIM PIN. The SIM PIN can be deactivated using any mobile phone.
* You need access to Cumulocity platform. If you do not have it yet, click on "TRY CUMULOCITY FREE" on the top right of https://www.cumulocity.com.

## Preparation

* Insert the SIM card into the SIM slot on the backside of the u-blox C027.
* Attach the cellular antenna to the board.
* For GPS/GNSS capabilities, attach the GPS antenna to the board.
* Attach the mbed application shield to the C027.
* Connect a USB cable to the C027 and to your computer. The C027 will appear as "MBED" drive on your computer.
* Plug in the power supply and connect it to the application board.

> Note that the device cannot be flashed without the power supply connected.

> Further information is available on http://mbed.org/users/ublox/notebook/u-blox-C027-Getting-Started/ and http://mbed.org/users/ublox/notebook/u-blox-C027-Downloading/.

## Install the agent

* Login to the mbed.org site and visit the [C027 page](https://mbed.org/platforms/u-blox-C027/). Click "Add to your mbed Compiler".
* Visit <a href="http://mbed.org/users/Cumulocity/code/MbedSmartRestMain/" target="_blank" title="Cumulocity Mbed SmartREST main application">the mbed application site</a> and click "Import" to import the agent into your online Mbed IDE.
* In the IDE, click the "Compile" button. The IDE will download the compiled application to your computer.
* Copy the downloaded file to the "MBED" drive.
* Press the reset button on the C027 to start the agent.

## Connect the C027

* The C027 will now dial up to the Internet. You will see status updated in the LCD display. If the device cannot connect to the Internet, it will display an error message. In case of an error message "No APN found", follow the instructions below in Section "Troubleshooting".
* On a successful connection for the first time, the device should print "Bootstrapping" and below the IMEI of the cellular modem on the LCD display.
  _Note_: The IMEI can also be found on the white sticker on modem chip of the C027.
* Log on to the Cumulocity web interface, select "Registration". Enter the IMEI and press "Register Device".
* The device appears as *CONNECTED*. Click the "Accept" button.
* The device is now registered with Cumulocity and shows up under "All Devices" with the name "Mbed Test Device".

## What next?

The device is now connected to Cumulocity and sends sensor data periodically. You can now browse and process the collected data in the cloud in various ways:

Browse the collected sensor data under "Measurements" tab, as shown in the following screenshot:
![Measurement Screenshot](/guides/devices/mbed/measurements.png)

Create a dashboard to customize the representation of the sensor data from the device. You can create a new dashboard by selecting the mbed device, clicking on the small cog symbol on the top right and selecting "Create Dashboard".
An example dashboard created for an mbed device is shown below:
![Dashboard Screenshot](/guides/devices/mbed/dashboard.png)

For further details, see the Cumulocity User Guide.

> You can change the reporting interval of sensor values by changing the source code of the file "MbedAgent.h" in the line that defines MBED_AGENT_INTERVAL.

## Troubleshooting

* **The device does not connect to a network**: Review the source code file `C027_Support/MDMAPN.h` and add an entry with the mobile country code, mobile network code and your APN.

* **The device does not appear as *connected* in the device registration process**: Review application output using a serial console. See http://mbed.org/handbook/SerialPC for details.

* **The device does not appear in the devices section on the web interface**: Review application output using a serial console. See http://mbed.org/handbook/SerialPC for details.

* **The device displays "Integrated device", but no "Bootstrapping" and IMEI after booting up**: The device is already registered with Cumulocity under another user account, a _factory reset_ has to be performed to unregister the device.

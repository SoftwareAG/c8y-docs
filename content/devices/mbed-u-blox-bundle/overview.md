---
title: Overview
layout: redirect
weight: 10
---

The [u-blox C027](https://mbed.org/platforms/u-blox-C027/ "u-blox C027") is a starter kit that allows quick prototyping of a variety of applications for the Internet of Things. The device comes with a cellular module as well as a GPS/GNSS receiver, which enable straightforward development of applications with location-aware communication capability.

![u-blox C027](/images/devices/mbed/c027.png)

For demonstration purposes, the [mbed application shield](http://mbed.org/components/mbed-Application-Shield/) can be attached to the C027. It provides various sensors and an LCD display.

![mbed application shield](/images/devices/mbed/applicationshield.jpg)

The Cumulocity mbed agent connects the C027 application board to Cumulocity and provides the following features:

* Network dial-up using the C027 modem.
* Efficient communication through [SmartREST](/microservice-sdk/rest#smartrest).
* Full auto-registration using Cumulocity's bootstrap and device registration.
* Collection and storage of temperature, GPS, accelerometer and analog sensor readings.
* Control the device LED's and LCD display remotely from Cumulocity.
* Status monitoring using the LCD display of the application shield.

### Prerequisites

To run the Cumulocity mbed agent, the following items are required:

* [u-blox C027](https://mbed.org/platforms/u-blox-C027/) Internet of Things starter kit, 2G or 3G version.
* [mbed appliation shield](https://mbed.org/components/mbed-Application-Shield/).
* A USB type A to type B adapter.
* A power supply.
* A SIM card with data plan for Internet access. The SIM card should have no SIM PIN. The SIM PIN can be deactivated using any mobile phone.
* You need access to Cumulocity platform. If you do not have it yet, click on "TRY CUMULOCITY FREE" on the top right of https://www.cumulocity.com.
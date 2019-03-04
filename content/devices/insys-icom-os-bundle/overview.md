---
title: Overview
layout: redirect
weight: 10
---

The [INSYS icom](http://www.insys-icom.com/) Smart Devices with icom OS support automatic data transmission from monitored PLCs or other devices to the Cumulocity Cloud. This is realised by the [icom Data Suite](https://www.insys-icom.de/icom-data-suite), a Device App for icom OS based devices. The Device App allows an easy and efficient monitoring of PLCs and Modbus TCP/RTU devices or the I/Os of an INSYS Smart Device. Measurement values, conditions, events and alarms can be transmitted to the Cumulocity Cloud. All available data can be set-up directly in the icom Data Suite and are automatically provided to the cloud account for (automatically self-scaling) charts and lists. Several PLCs can be monitored in parallel with one INSYS Smart Device. The transmission of data to several cloud accounts is also possible. If the cloud service or transmission path is (temporarily) not available, data can be buffered on the INSYS Smart Device or transmitted via redundant transmission paths in the meantime. Cloud Control enables the modification of values (e.g. for using them as set points) of data handled from the icom Data Suite by means of the Cumulocity Cloud. Please contact INSYS icom to use the Cloud Control plugin.

The following icom OS Smart Devices support Cumulocity with installed icom Data Suite:

* [MRX series](http://insys-icom.com/mrx): compact all-in-one routers
* [MRO series](http://insys-icom.com/mro): fully modular industrial router platform

Cumulocity support for INSYS Smart Devices with INSYS OS is described [here](/guides/images/devices/insys).

### How to Setup an icom OS-based INSYS Smart Device for Cumulocity

The following example for a simple monitoring application (monitoring input 1 of the Smart Device and displaying the status in Cumulocity) is broken up in two steps:

* [Device registration](/guides/images/devices/icom#device-registration)
* [Application configuration](/guides/images/devices/icom#application-configuration)

It is necessary to make the following settings in both web interfaces, of Cumulocity and the icom Data Suite of the Smart Device.

#### Prerequisites

* You have a functional icom Data Suite with one of above INSYS Smart Devices.
* The icom Data Suite is installed on the INSYS Smart Device and the required Cumulocity Device Connector package is licensed.
* The INSYS Smart Device has Internet connection.
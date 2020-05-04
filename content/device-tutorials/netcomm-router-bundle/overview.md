---
title: Introduction
weight: 10
---

This tutorial describes how to set up and configure the Casa Systems (NetComm) routers of the [NTC-220](https://support.netcommwireless.com/products/NTC-220%20Series) series using the Cumulocity IoT NetComm Agent package.

>**Info:** For [NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series), and [NTC-6200](https://support.netcommwireless.com/products/NTC-6200%20Series), refer to the [NetComm section](https://cumulocity.com/guides/10.4.6/devices/netcommwireless/) in the Devices guide of the Cumulocity IoT 10.4.6 documentation. 

>**Info:** The developer documentation is available at [https://bitbucket.org/m2m/cumulocity-agents-netcomm/src/master/doc/devguide.md](https://bitbucket.org/m2m/cumulocity-agents-netcomm/src/master/doc/devguide.md).

### Overview

The following sections demonstrate how to use a Casa Systems (NetComm) router with the Cumulocity IoT platform.

|SECTION|CONTENT|
|:---|:---|
|[Prerequisites](#prerequisites)|Description of the [system requirements](#sys-req) and [supported routers](#support-router).
|[Setting up and registering the device](#setup)|How to [install](#install-agent) the agent, [configure](#configure) the router and [connect](#connect) the router to your Cumulocity IoT account.
|[Remote monitoring and control of industrial assets](#monitoring-and-control)|How to use [Cloud Fieldbus](#modbus), [Cloud Remote Access](#remote-access) and the [GPIO](#gpio) pins control feature to remotely monitor and control industrial assets.
|[Managing devices](#device-management)|Description of the supported device management functionalities.
|[Troubleshooting](#troubleshooting)|List of known bugs and limitations.
|[Release notes](#release-history)|Release notes for the Cumulocity IoT NetComm Agent.

### Supported functionality

The Cumulocity IoT NetComm Agent supports the following Industrial IoT functionality to remotely monitor and control industrial assets:

* Modbus-RTU and Modbus-TCP support as a [Cloud Fieldbus](#modbus) feature.
* [Cloud Remote Access](#remote-access) for remotely accessing assets via VNC/Telnet/SSH protocols.
* [GPIO](#gpio) pins control.

For details refer to [Remote monitoring and control of industrial assets](#monitoring-and-control).

Moreover, the Cumulocity IoT NetComm Agent offers a large variety of device management features:

* Reporting of model, serial number, firmware version and installed software.
* Configuring WAN, LAN and DHCP [networks](#network).
*  Installing/uninstalling [software and firmware](#software-and-firmware) remotely.
* Reporting [system resources](#system-resources) as measurements.
* Reporting [cellular signal strength](#cellular) as measurements.
* Updating and tracking [GPS](#gps) locations.
* Getting and applying router’s [configuration snapshot](#snapshot) backup.
* Sending router’s [event notifications](#notification) as alarms.
* Remotely executing commands via the [device shell](#device-shell) interface.
* Viewing system, ipsec and agent [log files](#logs).

For details refer to [Managing devices](#managing-devices). 



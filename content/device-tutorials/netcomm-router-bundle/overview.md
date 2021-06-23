---
title: Introduction
weight: 10
---

This tutorial describes how to set up and configure the Casa Systems (NetComm) routers of the [NTC-220](https://support.netcommwireless.com/products/NTC-220%20Series) series using the {{< product-name-1 >}} {{< router-agent >}} package.

>**Info:** For [NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series), and [NTC-6200](https://support.netcommwireless.com/products/NTC-6200%20Series), refer to the [NetComm section](https://cumulocity.com/guides/10.4.6/devices/netcommwireless/) in the Devices guide of the {{< product-name-1 >}} 10.4.6 documentation.

>**Info:** The developer documentation is available at [https://bitbucket.org/m2m/cumulocity-agents-netcomm/src/master/doc/devguide.md](https://bitbucket.org/m2m/cumulocity-agents-netcomm/src/master/doc/devguide.md).

### Overview

The following sections demonstrate how to use a Casa Systems (NetComm) router with the {{< product-name-1 >}} platform.

|SECTION|CONTENT|
|:---|:---|
|[Prerequisites](#prerequisites)|Description of the [system requirements](#sys-req) and [supported routers](#support-router).
|[Setting up and registering the device](#setup)|How to [install](#install-agent) the agent, [configure](#configure) the router and [connect](#connect) the router to your {{< product-name-1 >}} account.
|[Remote monitoring and control of industrial assets](#monitoring-and-control)|How to use [Cloud Fieldbus](#modbus), [Cloud Remote Access](#remote-access) and the [GPIO](#gpio) pins control feature to remotely monitor and control industrial assets.
|[Managing devices](#device-management)|Description of the supported device management functionalities.
|[Troubleshooting](#troubleshooting)|List of known bugs and limitations.
|[Release notes](#release-history)|Release notes for the {{< product-name-1 >}} {{< router-agent >}}.

### Supported functionality

The {{< product-name-1 >}} {{< router-agent >}} supports the following Industrial IoT functionality to remotely monitor and control industrial assets:

* Modbus-RTU and Modbus-TCP support using [Cloud Fieldbus](#modbus).
* [Cloud Remote Access](#remote-access) for remotely accessing assets via VNC/Telnet/SSH protocols.
* Remote [GPIO](#gpio) reading and controlling.

For details refer to [Remote monitoring and control of industrial assets](#monitoring-and-control).

Moreover, the {{< product-name-1 >}} {{< router-agent >}} offers a large variety of device management features:

* Configuring WAN, LAN and DHCP [networks](#network).
*  Updating [software and firmware](#software-and-firmware) remotely.
* Collecting metrics like [system resources](#system-resources) and [cellular signal strength](#cellular) as measurements.
* Updating and tracking [GPS](#gps) locations.
* Getting and applying router’s [configuration snapshots](#snapshots).
* Sending router’s [event notifications](#notification) as alarms.
* Remotely executing commands via the [device shell](#device-shell) interface.
* Retrieving system, ipsec and agent [log files](#logs).

For details refer to [Managing devices](#device-management).

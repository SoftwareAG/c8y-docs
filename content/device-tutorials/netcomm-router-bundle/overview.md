---
title: Introduction
weight: 10
---

This tutorial describes how to set up and configure the Casa Systems (NetComm) routers of the [NTC-220](https://support.netcommwireless.com/products/NTC-220%20Series) series using the {{< product-c8y-iot >}} NetComm Agent package.

{{< c8y-admon-info >}}
For [NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series), and [NTC-6200](https://support.netcommwireless.com/products/NTC-6200-01), refer to the [NetComm section](https://{{< domain-c8y >}}/guides/10.4.6/devices/netcommwireless/) in the Devices guide of the {{< product-c8y-iot >}} 10.4.6 documentation.
{{< /c8y-admon-info >}}

{{< c8y-admon-info >}}
The developer documentation is available at [https://github.com/SoftwareAG/cumulocity-agents-netcomm/blob/master/doc/devguide.md](https://github.com/SoftwareAG/cumulocity-agents-netcomm/blob/master/doc/devguide.md).
{{< /c8y-admon-info >}}

### Overview

The following sections demonstrate how to use a Casa Systems (NetComm) router with the {{< product-c8y-iot >}} platform.

|SECTION|CONTENT|
|:---|:---|
|[Prerequisites](#prerequisites)|Description of the [system requirements](#sys-req) and [supported routers](#support-router).
|[Setting up and registering the device](#setup)|How to [install](#install-agent) the agent, [configure](#configure) the router and [connect](#connect) the router to your {{< product-c8y-iot >}} account.
|[Remote monitoring and control of industrial assets](#monitoring-and-control)|How to use [Cloud Fieldbus](#modbus), [Cloud Remote Access](#remote-access) and the [GPIO](#gpio) pins control feature to remotely monitor and control industrial assets.
|[Managing devices](#device-management)|Description of the supported device management functionalities.
|[Troubleshooting](#troubleshooting)|List of known bugs and limitations.
|[Release notes](#release-history)|Release notes for the {{< product-c8y-iot >}} NetComm Agent.

### Supported functionality

The {{< product-c8y-iot >}} NetComm Agent supports the following Industrial IoT functionality to remotely monitor and control industrial assets:

* Modbus-RTU and Modbus-TCP support using [Cloud Fieldbus](#modbus).
* [Cloud Remote Access](#remote-access) for remotely accessing assets via VNC/Telnet/SSH protocols.
* Remote [GPIO](#gpio) reading and controlling.

For details refer to [Remote monitoring and control of industrial assets](#monitoring-and-control).

Moreover, the {{< product-c8y-iot >}} NetComm Agent offers a large variety of device management features:

* Configuring WAN, LAN and DHCP [networks](#network).
*  Updating [software and firmware](#software-and-firmware) remotely.
* Collecting metrics like [system resources](#system-resources) and [cellular signal strength](#cellular) as measurements.
* Updating and tracking [GPS](#gps) locations.
* Getting and applying router's [configuration snapshots](#snapshots).
* Sending router's [event notifications](#notification) as alarms.
* Remotely executing commands via the [device shell](#device-shell) interface.
* Retrieving system, ipsec and agent [log files](#logs).

For details refer to [Managing devices](#device-management).

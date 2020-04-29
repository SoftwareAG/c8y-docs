---
title: Overview
weight: 10
---

The following sections demonstrate how to use a Casa Systems (NetComm) router with the Cumulocity IoT platform.

|SECTION|CONTENT|
|:---|:---|
|[Prerequisites](#prerequisites)|Description of the [system requirements](#sys-req) and [supported routers](#support-router).
|[Setting up and registering the device](#setup)|How to [install](#install-agent) the agent, [configure](#configure) the router and [connect](#connect) the router to your Cumulocity IoT account.
|[Interacting with Cumulocity IoT](#interaction)|How to use the built-in router functionalities with the Cumulocity IoT platform.
|[Troubleshooting](#troubleshooting)|List of known [bugs and limitations](#troubleshooting).
|[Release notes](#release-history)|Release notes for the Cumulocity IoT NetComm Agent.

### Supported functionality

The Cumulocity IoT NetComm Agent supports the following functionality:

* Bootstrap and registration of the router in the Cumulocity IoT platform.
* Reporting of model, serial number, firmware version and installed software.
* WAN, LAN and DHCP configuration.
* Remote software and firmware installation and upgrading as service through the ipkg package manager.
* System resource monitoring.
* Cellular signal strength monitoring.
* GPS-based location reporting.
* Reporting GPIO pin readings (analog input) as measurements.
* Raising and clearing alarms based on whether a GPIO pin (digital input) is open or closed in a circuit, including debouncing.
* Remote controlling of GPIO pins (digital output) from the Cumulocity IoT platform.
* Editing the router configuration.
* Managing router configuration snapshots.
* Remotely executing commands via device shell interface.
* Sending event notifications as alarms.
* Modbus-RTU and Modbus-TCP support for remotely managing Modbus devices from Cumulocity IoT.
* Lua plug-in API for rapid development of IoT applications.
* Configuring and displaying agent settings on the router’s web user interface.
* Get and set device configuration.
* View system, ipsec and agent log files.
* Cloud Remote Access for remotely accessing devices via VNC/Telnet/SSH protocols.
* MQTT as an alternative communication protocol.

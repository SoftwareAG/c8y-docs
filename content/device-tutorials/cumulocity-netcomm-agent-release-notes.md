---
weight: 70
title: Cumulocity-Netcomm-Agent Release Notes
layout: bundle
---

### Release notes for NetComm Agent 1.0.0

This document describes the Cumulocity-Netcomm-Agent package for the [casa systems NTC-220 series](https://support.netcommwireless.com/product/ntc-220-series) router.

> If you have either [NetComm Wireless NTC-6200](https://support.netcommwireless.com/product/ntc-6200) or [NetComm Wireless NTC-140W](https://support.netcommwireless.com/product/ntc-140w), you must get our old Netcomm Agent version 4.2.3 or older. Please contact [support](https://empower.softwareag.com/ContactSupport/) or refer to the other guide to get packages.

### Supported functionality

The agent supports the following functionality:

* Bootstrap and registration of the router in Cumulocity.
* Reporting of model, serial number, firmware version and installed software.
* WAN, LAN and DHCP configuration.
* Remote software and firmware installation and upgrading as service through the ipkg package manager.
* System resource monitoring.
* Cellular signal strength monitoring.
* GPS-based location reporting.
* Reporting GPIO pin readings (analog input) as measurements.
* Raising and clearing alarms based on whether a GPIO pin (digital input) is open or closed in a circuit, including debouncing.
* Remote controlling of GPIO pins (digital output) from Cumulocity.
* Editing the router configuration.
* Managing router configuration snapshots.
* Remotely executing commands via device shell interface.
* Sending event notifications as alarms.
* Modbus-RTU and Modbus-TCP support for remotely managing Modbus devices from Cumulocity.
* Lua plug-in API for rapid development of IoT applications.
* Configuring and displaying agent settings on the router’s web user interface.
* Get and put device configuration.
* View system, ipsec and agent log files.
* Cloud Remote Access for remotely accessing devices via VNC/Telnet/SSH protocols.
* MQTT as an alternative communication protocol.
* CANopen protocol support for managing CANopen devices in a CANopen network.
* All packages are with the signature.

### Known limitations and bugs

* The time on the router and on the server may not be fully in sync, hence you may see updates (e.g., alarms, events) that occur **in the future**. This is also the reason that it may take a while until the **Location** and the **Measurement** tab appear for new devices.
* Only WAN profile 1 is supported. To set APNs, the **auto APN** mode on the device needs to be disabled.
* Under some circumstances, a command sent to the device may be lost while switching between SMS and IP mode.
* After the new firmware is installed, all Cumulocity Agent packages (Agent Software, CA certificate bundle and VNC Proxy) will be deleted. There is a need to reinstall all again.

### System requirements

The agent was tested on an NTC-221 device with firmware version 2.0.84.0 and 2.0.89.0 and NTC-222 device with firmware 2.0.89.0.

For remote configuration of WAN parameters, you need a SIM card with SMS function. Currently, GSMA OneAPI (e.g., on Ericsson DCP), OpenIT and Jasper Wireless are supported APIs for SMS providers. Please contact [support](https://empower.softwareag.com/ContactSupport/) for connecting to an SMS provider.

### Installing the agent

* Download the agent software, including the CA root certificate, Cloud Remote Access software, and our package public key: http://resources.cumulocity.com/ntc-220/cumulocity-ntc-agent_1.0.0_arm-signed.ipk.
* Log in to the web user interface of the NTC-200 series.
* Navigate to the **System** menu. Click on **System configuration**, **Firmware signature**
* Turn **Enable firmware signature check** to OFF.
  > **Note:** If you forget this step, no software can be installed later. After installing the agent package, this function will be enabled again automatically.  
  Firmware version 2.0.84.0 does not support the firmware signature. You can ignore this step.

* Navigate to the **System** menu. Click on **System configuration**, **Choose a file** and select the downloaded software. Click **Upload** to upload the software to the router.
* Click the **Install** button for the uploaded software which you want to install.
* Reboot the NetComm router. If you install via Netcomm-UI, the device will reboot automatically after the installation.

The agent will automatically start after installation and the router can then be [registered with Cumulocity](/device-tutorials/casa-systems-router/#connect). Subsequent upgrades or downgrades can be performed remotely via the agent’s software management feature, or locally via the router’s web portal.

### Using the agent

For information on using the agent, please refer to [Quick Start Guide](/device-tutorials/casa-systems-router/).

### History

> **Important:** Cumulocity-Netcomm-Agent is only supported on [casa systems NTC-220 series](https://support.netcommwireless.com/product/ntc-220-series) devices. [NetComm Wireless NTC-6200](https://support.netcommwireless.com/product/ntc-6200) and [NetComm Wireless NTC-140W](https://support.netcommwireless.com/product/ntc-140w) are only supported by another agent.

#### 1.0.0

[Agent Software](http://resources.cumulocity.com/ntc-220/cumulocity-ntc-agent_1.0.0_arm-signed.ipk). Changes from another agent for NTC-6200 and NTC-140W:
* Started support for NTC-220 series and stopped support for NTC-6200 and NTC-140W.
* Merge all softwares into one package.
* Fixed Netcomm-WebUI to support NTC-220 series
* Fixed Event Notification to adjust the event notification format change on NTC-220 series
* Improve the connection stability when the size of message queue is over MQTT maximum payload size (<16KB)
* Fixed to load reporter buffer capacity always from RDB.
* Changed that configuration is always sent via HTTP to avoid the violation of MQTT maximum payload size
* Fixed websocket frame initialization issue and improve the stability of Cloud Remote Access via SSH.
* Fixed error handling for logging wrong error messages when connection closed in Cloud Remote Access.
* Updated CA certificate bundle to 20200101 version.

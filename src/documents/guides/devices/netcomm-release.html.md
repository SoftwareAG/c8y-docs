---
title: NetCommWireless Agent Release Notes
layout: default
---

## Release notes for NetComm Agent 2.3

This document describes the Cumulocity agent package for the [NetComm Wireless NTC-6200](http://www.netcommwireless.com/product/m2m/ntc-6200) router.

## Supported functionality

The agent supports the following functionality:

* Bootstrap and registration of the router in Cumulocity.
* Reporting of model, serial number, firmware version and installed software.
* WAN, LAN and DHCP configuration.
* Remote software and firmware installation and upgrading as service through the ipkg package manager.
* System resource monitoring.
* GPS-based location reporting.
* Reporting GPIO pin readings (analog input) as measurements.
* Raising and clearing alarms based on whether a GPIO pin (digital input) is open or closed in a circuit, including debouncing.
* Remote controlling of GPIO pins (digital output) from Cumulocity.
* Editing the router configuration.
* Managing router configuration snapshots.
* Remotely executing commands via device shell interface.
* Sending event notifications as alarms.
* Modbus/TCP support to remotely manage Modbus devices from Cumulocity.
* Lua plug-in API for rapid development of IoT applications.
* Configuring and displaying of agent settings on the router's web user interface.
* Get and put device configuration.
* View system, ipsec and agent log files.

## Known limitations and bugs

* The time on the router and on the server may not be fully in sync, hence you may see updates (e.g., alarms, events) that occur "in future". This is also the reason that it may take a while until the "Location" and the "Measurement" tab appear for new devices.
* Only WAN profile 1 is supported. To set APNs, the "auto APN" mode on the device needs to be disabled.
* The Modbus implementation currently does not support shifting decimal points. (However, divisor can be used to achieve the same effect.)
* Under some circumstances, a command sent to the device may be lost while switching between SMS and IP mode.
* Saving configuration snapshots can lead to disconnecting the device.

## System requirements

The agent was tested on an NTC-6200 device with firmware version 2.0.24.3. For remote configuration of WAN parameters, you need a SIM card with SMS function. Currently, GSMA OneAPI (e.g., on Ericsson DCP), OpenIT and Jasper Wireless are supported APIs for SMS providers. Please contact <support@cumulocity.com> for connecting to an SMS provider.

> Agent versions 2.1.10 and up require at least Cumulocity 6.10 to support the new log viewer.

> Agent versions 2.3 and up require Cloud Fieldbus 4. They are not compatible with earlier versions of the Cloud Fieldbus application.

## Installing the agent

* Download the software: http://resources.cumulocity.com/ntc/smartrest-agent_2.3.5_arm.ipk.
* Log in to the web user interface of the NTC-6200.
* Navigate to the "System" menu. Click on "System configuration", "Choose a file" and select the downloaded software. Click "Upload" to upload the software to the router.
* Click the "Install" button for the uploaded software which you want to install.

The agent will automatically start after installation and the router can then be [registered with Cumulocity](/guides/devices/netcommwireless#connect). Subsequent upgrades or downgrades can be performed remotely via the agent's software management feature, or locally via the router's web portal.

> When upgrading from versions older than 2.1.1, the device needs to be re-registered.

## Using the agent

For information on using the agent, please visit the [NetComm Agent User's Guide](/guides/devices/netcommwireless).

## Rapid development of IoT applications

For an alpha version of the Lua-based rapid development, visit https://bitbucket.org/m2m/cumulocity-clients-c/src/b68581d239244f301fde91131ff68f157cf91495/Lua.md?at=develop.

## History

### 2.1.4

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.4_arm.ipk). Changes:

* Operator name in "Info" page is now correctly displayed.
* Clear credentials button in web UI works now correctly.

### 2.1.6

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.6_arm.ipk). Changes:

* Configuration snapshot support (requires Cumulocity 6.9).
* Sending event notifications as alarms.

### 2.1.8

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.8_arm.ipk). Changes:

* Save MSISDN number fix
* Memory leak fix
* Configuration file tar bar


### 2.1.10

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.10_arm.ipk). Changes:

* Crash fix
* Configuration file tar bar and configuration text save fixes
* Log viewer
* Support for breakpad (crash tool)
* Detect wrong plug-in name in configuration
* Removed timeouts in software manager
* Remove agent log file after install new version

### 2.2.6

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.2.6_arm.ipk). Changes:

* GPIO alarm status is updated on device start.
* GPIO debouncing fixes.
* Performance and reliability improvements for operations.
* Device Shell robustness improvements.
* Modbus stability improvements and corrections.
* Log rotation and log quota setting (through RDB parameter service.cumulocity.log.quota).
* Remote log viewing of ipsec.log.
* Log API for Lua.

### 2.3.5
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.3.5_arm.ipk). Changes:

* Full support for fieldbus 4.
* *fix*: Unintentionally include device credential when uploading configuration.
* *fix*: Device shell plugin for operations that restart agent/device.
* *fix* Unexpectedly restarting of the agent when set log level via device shell.
* *fix*: Duplicate events and incorrect status updates
* *fix*: Operation of set register for first holding register hangs

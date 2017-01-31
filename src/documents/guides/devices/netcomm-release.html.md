---
title: Netcomm Release Notes
layout: default
---

## Release notes for NetComm Agent 3.2

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
* Modbus-RTU and Modbus-TCP support for remotely managing Modbus devices from Cumulocity.
* Lua plug-in API for rapid development of IoT applications.
* Configuring and displaying of agent settings on the router's web user interface.
* Get and put device configuration.
* View system, ipsec and agent log files.

## Known limitations and bugs

* The time on the router and on the server may not be fully in sync, hence you may see updates (e.g., alarms, events) that occur "in future". This is also the reason that it may take a while until the "Location" and the "Measurement" tab appear for new devices.
* Only WAN profile 1 is supported. To set APNs, the "auto APN" mode on the device needs to be disabled.
* Under some circumstances, a command sent to the device may be lost while switching between SMS and IP mode.

## System requirements

The agent was tested on an NTC-6200 device with firmware version 2.0.24.3. For remote configuration of WAN parameters, you need a SIM card with SMS function. Currently, GSMA OneAPI (e.g., on Ericsson DCP), OpenIT and Jasper Wireless are supported APIs for SMS providers. Please contact [support](https://support.cumulocity.com) for connecting to an SMS provider.

> Agent versions 2.1.10 and up require at least Cumulocity 6.10 to support the new log viewer.

> Agent versions 2.3 and up require Cloud Fieldbus 4. They are not compatible with earlier versions of the Cloud Fieldbus application.

> Agent version 3.2.0 and up require backend minimum version 7.20 for multip-XID support.

## Installing the agent

* Download the software: http://resources.cumulocity.com/ntc/smartrest-agent_3.2.2_arm.ipk.
* Log in to the web user interface of the NTC-6200.
* Navigate to the "System" menu. Click on "System configuration", "Choose a file" and select the downloaded software. Click "Upload" to upload the software to the router.
* Click the "Install" button for the uploaded software which you want to install.
* Reboot the NetComm router.

The agent will automatically start after installation and the router can then be [registered with Cumulocity](/guides/devices/netcommwireless#connect). Subsequent upgrades or downgrades can be performed remotely via the agent's software management feature, or locally via the router's web portal.

> When upgrading from versions older than 2.1.1, the device needs to be re-registered.

## Using the agent

For information on using the agent, please visit the [NetComm Agent User's Guide](/guides/devices/netcommwireless).

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

### 2.3.6
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.3.6_arm.ipk). Changes:

* [MTM-11911]*fix*: not respect multiplier, divisor and decimalPlaces definition in FieldBus 4 when sending event.
* [MTM-11740] string update: use generic IoT tokens instead of Cumulocity.

### 3.0.0
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.0.0_arm.ipk). Changes:

* [MTM-12034](https://cumulocity.atlassian.net/browse/MTM-12034): add measurement poll support.
* [COT-60](https://cumulocity.atlassian.net/browse/COT-60): implement modbus-RTU support for Cloud Fieldbus 4.
* [MTM-12239](https://cumulocity.atlassian.net/browse/MTM-12239): add timestamp to description of uploaded configuration snapshot.
* [MTM-11785](https://cumulocity.atlassian.net/browse/MTM-11785): report GPS fix on boot.
* [MTM-11830](https://cumulocity.atlassian.net/browse/MTM-11830): Add support for serial number in registration.
* [MTM-12283](https://cumulocity.atlassian.net/browse/MTM-12283): disallow removing agent from Cumulocity Software Management.

### 3.1.2
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.1.2_arm.ipk). Changes:

* *fix*: fragile start-up process when send fails after register templates.
* *fix*: Fixed one-hour off issue because of DST in logviewer.
* [MTM-11104](https://cumulocity.atlassian.net/browse/MTM-11104): raise alarm when modbus slave reading fails.
* *fix*: in logview get *last* N lines instead of *first* N lines in the given timeframe.
* [MTM-9815](https://cumulocity.atlassian.net/browse/MTM-9815): use decimal instead of hex for LAC for OpenCellID to work.
* [MTM-12039](https://cumulocity.atlassian.net/browse/MTM-12039): add RDB dump support.

### 3.1.6
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.1.6_arm.ipk). Changes:

* [fix]Modbus: read per contiguous block.
* [MTM-12594](https://cumulocity.atlassian.net/browse/MTM-12594) [fix]lua/config: save configuration doesn't have effect.
* ntcagent/postinst: set default serial port to /dev/ttyAPP4.
* Modbus: add mbmanager so change serial configuration no longer requires a reboot.
* [fix]lua/net: filter out deliveryType=SMS for configuring WAN operation.
* Modbus: shorten modbus-TCP timeout from 50 sec to 10 sec.
* [fix]Modbus: transmit rate not working because msg composing improperly.
* [fix]Modbus: set byte timeout to 1 sec for getting slow Modbus-RTU to work.
* [fix]lua/gps: use correct format DDDMM.MMmmm instead of DDMM.SSsss for GPS position.

### 3.2.0
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.2.0_arm.ipk). Changes:

* [MTM-12808](https://cumulocity.atlassian.net/browse/MTM-12808)ntcagent: Use file backed buffering for sending measurement, events, etc.
* [fix]Modbus: write partial holding register crash in 3.1.6.
* Query pending operations at boot time.
* [fix]Makefile: separate LDLIBS for smsagent so smsagent build correctly and without unnecessary dependencies.
* [fix]ntcagent: remove trailing slash in server URL so URL with trailing slash also works.

### 3.2.2
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.2.2_arm.ipk). Changes:

* [MTM-13384](https://cumulocity.atlassian.net/browse/MTM-13384)signal: report RSRP signal strength instead of RSCP when using 4G network.
* [MTM-13384](https://cumulocity.atlassian.net/browse/MTM-13384)integrate: use RDB uboot.hw_id as name when creating device.
* [MTM-13384](https://cumulocity.atlassian.net/browse/MTM-13384)modbus: disable Modbus-RTU support when model is NTC-140W.
* [MTM-13904](https://cumulocity.atlassian.net/browse/MTM-13384)modbus/mbbase: write modbus response values to agent log for easier troubleshooting.
* [fix]modbus: fix regression bug introduced in 3.2.0 that reading is offset by 1 when data model doesn't start from number 1.

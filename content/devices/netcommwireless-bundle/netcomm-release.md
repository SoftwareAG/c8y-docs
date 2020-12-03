---
weight: 140
title: Netcomm Release Notes
layout: redirect
---

## Release notes for NetComm Agent 4.0

This document describes the Cumulocity agent package for the [NetComm Wireless NTC-6200](https://www.netcommwireless.com/product/3g-m2m-router-series) and the [NetComm Wireless NTC-140W](http://support.netcommwireless.com/product/4g/ntc-140w) router.

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
* Cloud Remote Access for remotely accessing devices via VNC/Telnet/SSH protocols.
* MQTT as alternative communication protocol.
* CANopen protocol support for managing CANopen devices in a CANopen network.

## Known limitations and bugs

* The time on the router and on the server may not be fully in sync, hence you may see updates (e.g., alarms, events) that occur "in future". This is also the reason that it may take a while until the "Location" and the "Measurement" tab appear for new devices.
* Only WAN profile 1 is supported. To set APNs, the "auto APN" mode on the device needs to be disabled.
* Under some circumstances, a command sent to the device may be lost while switching between SMS and IP mode.

## System requirements

The agent was tested on an NTC-6200 device with firmware version 2.0.36.10. For remote configuration of WAN parameters, you need a SIM card with SMS function. Currently, GSMA OneAPI (e.g., on Ericsson DCP), OpenIT and Jasper Wireless are supported APIs for SMS providers. Please contact [support](https://support.cumulocity.com) for connecting to an SMS provider.

> Agent version 3.2.0 and up require backend minimum version 7.20 for multip-XID support.

> Agent versions 2.3 and up require Cloud Fieldbus 4. They are not compatible with earlier versions of the Cloud Fieldbus application.

> Agent versions 2.1.10 and up require at least Cumulocity 6.10 to support the new log viewer.


## Installing the agent

* Download the agent software: http://resources.cumulocity.com/ntc/smartrest-agent_4.2.6_arm.ipk.
* Download the CA certificate bundle: http://resources.cumulocity.com/ntc/ca-cumulocity_20200722.0_arm.ipk.
* Download the VNC proxy if you want to use VNC remote access: http://resources.cumulocity.com/ntc/vncproxy_2.2_arm.ipk.
* Log in to the web user interface of the NTC-6200.
* Navigate to the "System" menu. Click on "System configuration", "Choose a file" and select the downloaded software. Click "Upload" to upload the software to the router.
* Click the "Install" button for the uploaded software which you want to install.
* Reboot the NetComm router.

The agent will automatically start after installation and the router can then be [registered with Cumulocity](/images/devices/netcommwireless#connect). Subsequent upgrades or downgrades can be performed remotely via the agent's software management feature, or locally via the router's web portal.

> When upgrading from versions older than 2.1.1, the device needs to be re-registered.

## Using the agent

For information on using the agent, please visit the [NetComm Agent User's Guide](/images/devices/netcommwireless).

## History

### 4.2.6
[Agent software](http://resources.cumulocity.com/ntc/smartrest-agent_4.2.6_arm.ipk),
[CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20200722.0_arm.ipk),
[VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_2.2_arm.ipk). Changes:

* Improved the connection stability when the size of the message queue exceeds the MQTT maximum payload size (<16KB).
* Fixed to load the reporter buffer capacity always from RDB.
* Changed that configuration is always sent via HTTP to avoid the violation of MQTT maximum payload size.
* Fixed the issue that the agent updates its position with different intervals from the configured ones.
* Fixed the Modbus plugin issue in which the agent continues to send measurements after slaves get unavailable.
* Added a new validation for LAN IP, subnet mask, DHCP range. In addition, DHCP range can change automatically accordingly to the IP address.
* Added a monitor timer on network changes made by the router UI.
* Added "NTP synchronisation failed" mode.
  * If a user configured a non-existing NTP server, the agent used to be stuck in a loop and never connected to c8y.
  * With this fix, the agent has a 5 minutes timeout to check the NTP server. If a timeout happens, the agent creates a CRITICAL alarm "NTP synchronisation failed. Update your NTP server configuration and restart the agent". In this case, the agent provides very limited device management functionalities from c8y: only restart operations and change configurations by either text-based configuration or snapshot.
  * Once the NTP server is configured correctly, the agent will clear the alarm and give users full functionalities of device management.
* Fixed websocket frame initialization issue and improved the stability of Cloud Remote Access via SSH.
* Fixed error handling for logging wrong error messages when the connection was closed in Cloud Remote Access.
* Updated CA certificate bundle to 20200722 version.


### 4.2.3
[Agent Software](http://resources.cumulocity.com/ntc/smartrest-agent_4.2.3_arm.ipk),
[CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20190515.0_arm.ipk),
[VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_2.0_arm.ipk). Changes:

* Add support for modbus 32/64 bit registers, and little/big endianness.
* Correctly handling special characters in software names so that software upgrade with special characters in their names will fail with a clear reason.
* Correctly parsing timestamps with UTC "Z" timezone suffix when handling c8y_LogFileRequest operation.
* Correctly calculate memory usage to fix a bogus memory leak issue.
* Fixed websocket frame packing issue so that Cloud Remote Access works correctly for SSH protocol.
* Updated CA certificate bundle to 20190515 version.

### 4.0.2
[Agent Software](http://resources.cumulocity.com/ntc/smartrest-agent_4.0.2_arm.ipk),
[CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20170118.0_arm.ipk),
[VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_1.0_arm.ipk). Changes:

* Agent is started/stopped directly after activating/deactivating it in Netcomm-WebUI
* Agent is not started after device boot, when it was deactivated in Netcomm-WebUI
* Created ntcagent folder is removed, when the Agent is completly de-installed
* Temporary created files are deleted after usage

### 4.0.1
[Agent Software](http://resources.cumulocity.com/ntc/smartrest-agent_4.0.1_arm.ipk),
[CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20170118.0_arm.ipk),
[VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_1.0_arm.ipk). Changes:

* Agent waits after device boot for NTP synchronization before proceeding.
* Supports now timer intervals smaller than 200 ms.

### 4.0.0
[Agent Software](http://resources.cumulocity.com/ntc/smartrest-agent_4.0.0_arm.ipk),
[CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20170118.0_arm.ipk),
[VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_1.0_arm.ipk). Changes:

* Add support for server certificate verification.
* Add MQTT support as an alternative protocol alongside HTTP.
* Support for VNC remote access.

### 3.2.2
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.2.2_arm.ipk). Changes:

* signal: report RSRP signal strength instead of RSCP when using 4G network.
* integrate: use RDB uboot.hw_id as name when creating device.
* modbus: disable Modbus-RTU support when model is NTC-140W.
* modbus/mbbase: write modbus response values to agent log for easier troubleshooting.
* [fix]modbus: fix regression bug introduced in 3.2.0 that reading is offset by 1 when data model doesn't start from number 1.

### 3.2.0
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.2.0_arm.ipk). Changes:

* ntcagent: Use file backed buffering for sending measurement, events, etc.
* [fix]Modbus: write partial holding register crash in 3.1.6.
* Query pending operations at boot time.
* [fix]Makefile: separate LDLIBS for smsagent so smsagent build correctly and without unnecessary dependencies.
* [fix]ntcagent: remove trailing slash in server URL so URL with trailing slash also works.

### 3.1.6
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.1.6_arm.ipk). Changes:

* [fix]Modbus: read per contiguous block.
* [fix]lua/config: save configuration doesn't have effect.
* ntcagent/postinst: set default serial port to /dev/ttyAPP4.
* Modbus: add mbmanager so change serial configuration no longer requires a reboot.
* [fix]lua/net: filter out deliveryType=SMS for configuring WAN operation.
* Modbus: shorten modbus-TCP timeout from 50 sec to 10 sec.
* [fix]Modbus: transmit rate not working because msg composing improperly.
* [fix]Modbus: set byte timeout to 1 sec for getting slow Modbus-RTU to work.
* [fix]lua/gps: use correct format DDDMM.MMmmm instead of DDMM.SSsss for GPS position.

### 3.1.2
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.1.2_arm.ipk). Changes:

* *fix*: fragile start-up process when send fails after register templates.
* *fix*: Fixed one-hour off issue because of DST in logviewer.
* Raise alarm when modbus slave reading fails.
* *fix*: in logview get *last* N lines instead of *first* N lines in the given timeframe.
* Use decimal instead of hex for LAC for OpenCellID to work.
* Add RDB dump support.

### 3.0.0
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.0.0_arm.ipk). Changes:

* Add measurement poll support.
* Implement modbus-RTU support for Cloud Fieldbus 4.
* Add timestamp to description of uploaded configuration snapshot.
* Report GPS fix on boot.
* Add support for serial number in registration.
* Disallow removing agent from Cumulocity Software Management.

### 2.3.6
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.3.6_arm.ipk). Changes:

* *fix*: not respect multiplier, divisor and decimalPlaces definition in FieldBus 4 when sending event.
* string update: use generic IoT tokens instead of Cumulocity.

### 2.3.5
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.3.5_arm.ipk). Changes:

* Full support for fieldbus 4.
* *fix*: Unintentionally include device credential when uploading configuration.
* *fix*: Device shell plugin for operations that restart agent/device.
* *fix* Unexpectedly restarting of the agent when set log level via device shell.
* *fix*: Duplicate events and incorrect status updates
* *fix*: Operation of set register for first holding register hangs

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

### 2.1.10

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.10_arm.ipk). Changes:

* Crash fix
* Configuration file tar bar and configuration text save fixes
* Log viewer
* Support for breakpad (crash tool)
* Detect wrong plug-in name in configuration
* Removed timeouts in software manager
* Remove agent log file after install new version

### 2.1.8

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.8_arm.ipk). Changes:

* Save MSISDN number fix
* Memory leak fix
* Configuration file tar bar

### 2.1.6

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.6_arm.ipk). Changes:

* Configuration snapshot support (requires Cumulocity 6.9).
* Sending event notifications as alarms.

### 2.1.4

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.4_arm.ipk). Changes:

* Operator name in "Info" page is now correctly displayed.
* Clear credentials button in web UI works now correctly.

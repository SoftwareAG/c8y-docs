---
title: Release notes for SMARTbox Agent
layout: devices
---

## Release notes for SMARTbox Agent

This document describes the Cumulocity agent package for the SMARTbox IO and the SMARTbox Mini. 



## Supported functionality

* The agent supports the following functionality:
* Available on all Cumulocity based systems 
* Available on all T-Systems 
* Cloud Fieldbus
* TLS-Security
* Full SmartRest implementation
* Location by Cell ID
* Shell to operate by AT Commands
* Support of Alarms, measurements, events
* Realtime operating the device
* Offline buffering of measurements, events, alarms
* Fieldbus connectivity over Modbus RTU
* FOTA - Remote Software update
* MQTT Support



## Installing the agent

If already an agent is running: The installed software on the SMARTbox can be remotely managed using the standard software and management feature from Cumulocity, as described in the Device management user's guide.

## Manual installing the agent

Pls proceed as follows:
1. Download the Tools here: https://www.pssystec.de/downloads/
2. Install the USB Driver for the Telit Module
3. Install AT console from Telit
4. Open File system tool and connect via USB
5. Drag and Drop the Agent (see below) to the MOD folder
6. Disconnect and Connect with installed Telit AT controller to USB3 Port
7. Start the Machine by typing: at#m2mrun=2,"SMARTbox.bin";+m2m=4,10


## Using the agent

For information on using the agent, please visit the SMARTbox IO or SMARTbox Mini Agent User's Guide. 



## History

### 2.0  Base Version
* Cloud Fieldbus
* TLS-Security
* Full SmartRest implementation
* Location by Cell ID
* Shell to operate by AT Commands
* Support of Alarms, measurements, events
* Realtime operating the device
* Offline buffering of measurements, events, alarms
* Fieldbus connectivity over Modbus RTU/ASCII
* FOTA - Remote Software update
* MQTT Support

You can download [here](/guides/devices/smartbox-release-notes/F4_IO_2100.03.1_TypeA)

### 2.1.5
* Fixed Buffer Management for Sensor connected on BuiltIn Temp. Sensor
* Improved 2G/3G connectivity in case of changeover

You can download [here](/guides/devices/smartbox-release-notes/F4_IO_2100.03.1_TypeA)


---
order: 10
title: Netcomm Agent Release Notes
layout: default
---


## Release notes for Netcomm Agent 1.4.8

This document describes the Cumulocity agent package for the [Netcomm Wireless NTC-6200](www.netcommwireless.com/product/m2m/ntc-6200) gateway.

## Supported functionality

The agent supports the following functionality:

* Installation on the device as service through the ipkg package manager.
* Bootstrap and registration of the device in Cumulocity.
* Reporting of model, serial number, firmware version and installed software.
* GPS-based location reporting.
* Reporting of analog input values as measurements.
* Raising and clearing alarms based on the values of digital inputs.
* Remote switching of digital outputs from Cumulocity.
* WAN, LAN and DHCP configuration.
* Software and firmware management.
* Configuration management through RDB configuration dumps.
* Lua plugin API for rapid development of IoT applications.
* Modbus/TCP support to remotely manage Modbus devices from Cumulocity.

## Known limitations

* Timestamps on the device and on the server may not be fully in sync, hence you may see updates (e.g., alarms, events) that occur "in future". This is also the reason that it may take a while until the "Location" and the "Measurement" tab appear for new devices.
* Only WAN profile 1 is supported.
* The success of a software installation can currently not be monitored. install_file does not return error messages.
* The Modbus implementation currently does not support shifting decimal points. (However, divisor can be used.)
* Sending multiple operations in rapid succession to the router may cause the agent to hang.

## System requirements

The agent was tested on a stock NTC-6200 with firmware version 1.10.40.7. For remote configuration of WAN parameters, an SMS service provider is required to be able to send SMS to the device. Currently, GSMA OneAPI and Jasper Wireless are supported APIs for SMS providers. Please contact support@cumulocity.com for connecting to an SMS provider.

## Installing the agent

To install the agent initially:

* Log in to the web user interface of the NTC-6200.
* Navigate to the "System" menu. Click on "System configuration" and "Upload".
* Upload the packages below to the device and click "Install" for each package in the order listed below.

	http://resources.cumulocity.com/ntc/curl_7.37.0_arm.ipk
	http://resources.cumulocity.com/ntc/libconfig_1.4.9_arm.ipk
	http://resources.cumulocity.com/ntc/smartrest-agent_1.4.8_arm.ipk

The agent will automatically start after the last package has been installed. If you installed the packages in a different order, you may need to restart the gateway. Further upgrades or downgrades can be done remotely through the software management feature, or directly on the device.

## Starting the agent manually

You can run the agent manually with the following command:

	sragent [-d <log level>] -c <configuration file>

The optional "-d" option lets you define the log verbosity (3 = error, 4 = warning, 5 = notice, 6 = info, 7 = debug). The "-c" option points to a configuration file. After installation, the default configuration file is located in "/etc/sragent.conf".

## Agent configuration

The agent configuration file provides default settings for diverse configuration options. Many of the configuration options can also be set through RDB and through the remote configuration management feature in Cumulocity. The most relevant configuration options are:

* **server**: The Cumulocity instance that the device will connect to. (Default: Netcomm instance.)
* **log**: A log file name. (Default: None.)

## Using the agent

For information on using the agent, please visit the [Netcomm Agent User's Guide](/guides/devices/netcomm/netcomm-usersguide).

## Troubleshooting

Device credentials are stored in the file "/var/lib/sragent/bootstrap.cache". To re-register the device in a different tenant, simply delete this file.


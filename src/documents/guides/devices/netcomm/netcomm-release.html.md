---
order: 10
title: Netcomm Agent Release Notes
layout: default
---

## Release notes for Netcomm Agent 2.0

This document describes the Cumulocity agent package for the [Netcomm Wireless NTC-6200](www.netcommwireless.com/product/m2m/ntc-6200) router.

## Supported functionality

The agent supports the following functionality:

* Installation on the router as service through the ipkg package manager.
* Configuration and status display of the agent through the router's web user interface.
* Bootstrap and registration of the router in Cumulocity.
* Reporting of model, serial number, firmware version and installed software.
* GPS-based location reporting.
* Reporting of analog input values as measurements.
* Raising and clearing alarms based on the values of digital inputs.
* Remote switching of digital outputs from Cumulocity.
* WAN, LAN and DHCP configuration.
* Software and firmware management.
* Reading RDB configuration dumps.
* Lua plugin API for rapid development of IoT applications.
* Modbus/TCP support to remotely manage Modbus devices from Cumulocity.

## Known limitations

* Timestamps on the router and on the server may not be fully in sync, hence you may see updates (e.g., alarms, events) that occur "in future". This is also the reason that it may take a while until the "Location" and the "Measurement" tab appear for new devices.
* Only WAN profile 1 is supported.
* The success of a software installation can currently not be monitored. (install_file does not return error messages.)
* After a firmware upgrade, the router needs to be [re-registered](/guides/devices/netcomm/netcomm-usersguide) and receives new credentials. All data is preserved.
* The Modbus implementation currently does not support shifting decimal points. (However, divisor can be used to create the same effect.)

## System requirements

The agent was tested on a stock NTC-6200 with firmware version 2.0.24.3. For remote configuration of WAN parameters, an SMS service provider is required to be able to send SMS to the router. Currently, GSMA OneAPI (e.g., on Ericsson DCP), OpenIT and Jasper Wireless are supported APIs for SMS providers. Please contact support@cumulocity.com for connecting to an SMS provider.

## Installing the agent

> Note: Previous beta user may need to remove the software before installing the pre-release due to a change in the configuration mechanism.

To install the agent initially:

* Download the software: http://resources.cumulocity.com/ntc/smartrest-agent_2.0.0_arm.ipk.
* Log in to the web user interface of the NTC-6200.
* Navigate to the "System" menu. Click on "System configuration", "Choose a file" and select the downloaded software. Click "Upload" to upload the software to the router.
* Click the "Install" link next to the uploaded software to install the software.

The agent will automatically start after installation and the router can be [registered with Cumulocity](/guides/devices/netcomm/netcomm-usersguide#connect). Further upgrades or downgrades can be done remotely through the software management feature, or directly on the router.

## Using the agent

For information on using the agent, please visit the [Netcomm Agent User's Guide](/guides/devices/netcomm/netcomm-usersguide).

## Rapid development of IoT applications

For an alpha version of the Lua-based rapid development feature, visit https://bitbucket.org/m2m/cumulocity-clients-c/src/b68581d239244f301fde91131ff68f157cf91495/Lua.md?at=develop.

## Troubleshooting

The router's credentials are stored in the file "/var/lib/sragent/bootstrap.cache". To re-register the router in a different tenant, simply delete this file.


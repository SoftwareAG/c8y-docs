---
title: Device management & connectivity
layout: change_log
section:
  - change_log
weight: 10
---


### October 2023


#### -Change- Device management: Improved smart group filter layout

In subasset views, smart group filters are now represented by a filter chips dropdown instead of displaying the raw text filter. [DM-1615]

#### -Change- Device management: Improved device registration process

If a pending device in the registration list has been accepted, the device is now removed from the list instead of the list showing the "accepted" status for the device. [DM-1723]

#### -Change- Device management: Removal of software item

If the last version of a software is deleted, the software is entirely removed from the repository. [DM-2266]

#### -Feature- Device management: Customizable dashboard in the device details

Users can now customize the dashboard on the <b>Info</b> tab in the device details. Widgets can be moved and resized, and new widgets can be added from a list of available widgets. The dashboard can be reset anytime to the default dashboard settings. By default, the "Asset notes" widget has been removed. [DM-2279]

#### -Feature- Device management: New wizard for device replacement

In the Device management application, a wizard has been implemented which guides users through replacing a physical device with another one. The replacing device must be registered in the platform in advance and is removed after the replacement procedure has been finished. [DM-2168]

#### -Feature- Device management: Customizable home dashboard

The Device management home page now also provides a customizable dashboard which lets users add customized widgets. [DM-1644]

#### -Feature- LWM2M: New LWM2M configuration tab

The details of a LWM2M device now show a <b>LWM2M configuration</b> tab which replaces the <b>LWM2M bootstrap parameters</b> tab. The new tab is better structured and allows detailed configuration. It contains all configuration options of the former <b>LWM2M bootstrap parameters</b> tab as well as additional setting options:

- LWM2M device settings such as awake time registration parameter, request timeout, serialization format, binary delivery encoding, use timestamp resources, keeping old values
- Device security modes selection including the new X.509 certificate mode and selection for LWM2M bootstrap and server individually
- Firmware update configurations
- A set of LWM2M Server configurations that can be written to the device during bootstrap

For details, refer to the [LWM2M](https://cumulocity.com/docs/protocol-integration/lwm2m/) user documentation.

If the new <b>LWM2M configuration</b> tab is not displayed and the <b>LWM2M bootstrap parameters</b> tab is displayed instead, the LWM2M agent is installed in an older version that does not yet support the new tab. [DM-342]

#### -Change- LWM2M: Improved performance

The performance of the <code>migrateLwm2mDevices</code> operation has been improved. New command line arguments have been introduced with the operation. A list of legacy LWM2M devices can be specified directly from the shell command. Moreover, the migration of the LWM2M client registration objects can be skipped by using an argument.

For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/#migration-of-the-lwm2m-devices" class="no-ajaxy">Migration of the LWM2M devices</a>. [DM-1866]

#### -Change- LWM2M: New shell commands

Two new LWM2M shell commands have been added.

- The new <code>executelegacy</code> command allows LWM2M execute requests with non-standard LWM2M parameters. The behavior of this operation resembles the semantics of the existing <code>execute</code> operation until version 10.15.
- The new <code>coap</code> shell command enables making raw CoAP requests to devices to facilitate non-standard communication in exceptional cases.

For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/#shell-commands" class="no-ajaxy">Handling LWM2M shell commands<a/>. [DM-2153]

#### -Change- SmartREST: New static template 507

Added the SmartREST static template 507 for changing the device operations status from EXECUTING to FAILED. The operations can be filtered by type. The template is intended for facilitating an operations cleanup after a crash. [DM-2347]


#### -Change- SmartREST: New static template 125

Added the SmartREST static template 125 for sending heartbeat from a device. [DM-2346]


#### -Change- SmartREST: New static template 201

Added the SmartREST static template 201 for creating measurements with multiple fragments and series. [DM-1860]


#### -Change- Loriot: Increased memory limit

The memory limit for the Loriot microservice has been increased to 2Gi. [DM-2427]


#### -Change- LWM2M: New configuration flag in device registration settings

The configuration flag <code>fwResetStateMachineOnStart</code> has been added to control if the LWM2M agent resets the firmware update state machine on the client at the beginning of a firmware update. The default of this flag is <code>true</code> which matches the existing behaviour of the LWM2M agent. It is available in the [device registration settings](https://cumulocity.com/docs/protocol-integration/lwm2m/#device-registration-settings). [DM-2292]


#### -Change- OPC UA: Disabling endpoint validation

The endpoint validation happening during the connection to an OPC UA server can now optionally be disabled. This can be done in the gateway configuration by changing the <code>gateway.connectivity.validateDiscoveredEndpoints</code> setting to "false". Alternatively, it can be controlled via the OPC UA server managed object by setting the fragment <code>validateDiscoveredEndpoints</code> to "false".  For details, refer to <a href="https://cumulocity.com/guides/protocol-integration/opcua/" class="no-ajaxy">OPC UA</a>. [DM-2425]

---
title: Device management & connectivity
layout: change_log
section:
  - change_log
weight: 10
---


### December 2023

#### -Feature- Device management: New "Replace device" options

In the **Subassets** view, a "Replace device" option is now available in the context menu of  every supported device. Previously, the "Replace device" option was only available in the **All devices** page. Moreover, a **Replace device** button has been added to the "Device status" widget on the **Info** tab in the device details. This functionality does not support LWM2M devices. [DM-2673]

#### -Feature- Device management: Improved filter by software type

In the <b>Software</b> tab in the device details, currently the <b>Filter by software type</b> dropdown in the <b>Installed software</b> list and the <b>Install software</b> modal shows types based on existing types in the software repository. This has been changed to show only the supported software types announced by the device in its <code>c8y_SupportedSoftwareTypes</code> fragment. If a device has not announced supported software types, then again all available existing software types are listed. [DM-2809]

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

#### -Change Device management: Added information on restrictions to auto-registration

Information has been added that the auto-registration option in trusted certification does not support devices communicating via the LWM2M protocol. This information has been included in the tooltip on the **Trusted certificates** page and in the user documentation. [MTM-56462]

#### -Feature LWM2M: New toggle for switching off empty data

For LWM2M devices, it is now possible to switch off the sending of empty measurement/event/alarm/custom actions data for individual resources. Moreover, you can toggle on/off or optionally skip empty values for all resources using the LWM2M device protocol at once. [DM-2798]


#### -Feature- LWM2M: New LWM2M configuration tab

The details of a LWM2M device now show a <b>LWM2M configuration</b> tab which replaces the <b>LWM2M bootstrap parameters</b> tab. The new tab is better structured and allows detailed configuration. It contains all configuration options of the former <b>LWM2M bootstrap parameters</b> tab as well as additional setting options:

- LWM2M device settings such as awake time registration parameter, request timeout, serialization format, binary delivery encoding, use timestamp resources, keeping old values
- Device security modes selection including the new X.509 certificate mode and selection for LWM2M bootstrap and server individually
- Firmware update configurations
- A set of LWM2M Server configurations that can be written to the device during bootstrap

For details, refer to the [LWM2M](https://cumulocity.com/docs/protocol-integration/lwm2m/) user documentation.

If the new <b>LWM2M configuration</b> tab is not displayed and the <b>LWM2M bootstrap parameters</b> tab is displayed instead, the LWM2M agent is installed in an older version that does not yet support the new tab. [DM-342]

#### -Feature- LWM2M: X.509 security mode support

LWM2M device connections with X.509 certificates are now supported.
The X.509 security mode can be selected separately for the Bootstrap server and the LWM2M server either during device registration or, for existing devices, by using the new **LWM2M configuration** tab.
The Certificate Authority that issued device certificates must be added and enabled in [trusted certificates](https://cumulocity.com/docs/device-management-application/managing-device-data/#managing-trusted-certificates) in the tenant.

Together with this change also the following changes are introduced:

##### Separate security mode for Bootstrap and LWM2M server

Now all LWM2M device security modes can be selected separately for Bootstrap server and LWM2M server connections. This can be defined either during the device registration or using the **LWM2M configuration** tab of the device.

##### Disable authentication for Bootstrap or LWM2M server

Under **Connectivity** in the **LWM2M configuration** tab, the Bootstrap or LWM2M server connection can be disabled for a device.

##### PSK-generated option for LWM2M server security mode

During device registration, the "PSK generated" option can be selected for LWM2M Server connection to make LWM2M agent to generate the PSK ID and PSK key credentials for the device. These will be set to the device during the bootstrap process.

For details, refer to the [LWM2M](https://cumulocity.com/docs/protocol-integration/lwm2m/) user documentation. [DM-554]

#### -Change- LWM2M: Improved performance

The performance of the <code>migrateLwm2mDevices</code> operation has been improved. New command line arguments have been introduced with the operation. A list of legacy LWM2M devices can be specified directly from the shell command. Moreover, the migration of the LWM2M client registration objects can be skipped by using an argument.

For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/#migration-of-the-lwm2m-devices" class="no-ajaxy">Migration of the LWM2M devices</a>. [DM-1866]

#### -Change- LWM2M: New shell commands

Two new LWM2M shell commands have been added.

- The new <code>executelegacy</code> command allows LWM2M execute requests with non-standard LWM2M parameters. The behavior of this operation resembles the semantics of the existing <code>execute</code> operation until version 10.15.
- The new <code>coap</code> shell command enables making raw CoAP requests to devices to facilitate non-standard communication in exceptional cases.

For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/#shell-commands" class="no-ajaxy">Handling LWM2M shell commands<a/>. [DM-2153]

#### -Change- LWM2M: New configuration flag in device registration settings

The configuration flag <code>fwResetStateMachineOnStart</code> has been added to control if the LWM2M agent resets the firmware update state machine on the client at the beginning of a firmware update. The default of this flag is <code>true</code> which matches the existing behaviour of the LWM2M agent. It is available in the [device registration settings](https://cumulocity.com/docs/protocol-integration/lwm2m/#device-registration-settings). [DM-2292]

#### -Change- Loriot: Increased memory limit

The memory limit for the Loriot microservice has been increased to 2Gi. [DM-2427]

#### -Change- OPC UA: Disabling endpoint validation

The endpoint validation happening during the connection to an OPC UA server can now optionally be disabled. This can be done in the gateway configuration by changing the <code>gateway.connectivity.validateDiscoveredEndpoints</code> setting to "false". Alternatively, it can be controlled via the OPC UA server managed object by setting the fragment <code>validateDiscoveredEndpoints</code> to "false".  For details, refer to <a href="https://cumulocity.com/guides/protocol-integration/opcua/" class="no-ajaxy">OPC UA</a>. [DM-2425]


#### -Change- SmartREST: New static template 507

Added the SmartREST static template 507 for changing the device operations status from EXECUTING to FAILED. The operations can be filtered by type. The template is intended for facilitating an operations cleanup after a crash. [DM-2347]

#### -Change- SmartREST: New static template 125

Added the SmartREST static template 125 for sending heartbeat from a device. [DM-2346]


#### -Change- SmartREST: New static template 201

Added the SmartREST static template 201 for creating measurements with multiple fragments and series. [DM-1860]

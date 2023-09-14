---
title: LWM2M
layout: change_log
section:
  - change_log
weight: 30
---

### October 2023

#### -Change-  Improved performance

The performance of the <code>migrateLwm2mDevices</code> operation has been improved. New command line arguments have been introduced with the operation. A list of legacy LWM2M devices can be specified directly from the shell command. Moreover, the migration of the LWM2M client registration objects can be skipped by using an argument. For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/#migration-of-the-lwm2m-devices" class="no-ajaxy"Migration of the LWM2M devices</a> in the user documentation. [DM-1866]


#### -Change-  New shell commands

Two new LWM2M shell commands have been added.

- The new <code>executelegacy</code> command allows LWM2M execute requests with non-standard LWM2M parameters. The behavior of this operation resembles the semantics of the existing <code>execute</code> operation until version 10.15.
- The new <code>coap</code> shell command enables making raw CoAP requests to devices to facilitate non-standard communication in exceptional cases.

For details, refer to <a href="https://cumulocity.com/docs/protocol-integration/lwm2m/#shell-commands" class="no-ajaxy">Handling LWM2M shell commands<a/> in the user documentation. [DM-2153]


#### -Change-  New configuration flag in device registration settings

The configuration flag <code>fwResetStateMachineOnStart</code> has been added to control if the LWM2M agent resets the firmware update state machine on the client at the beginning of a firmware update. The default of this flag is <code>true</code> which matches the existing behaviour of the LWM2M agent. It is available in the [device registration settings](https://cumulocity.com/docs/protocol-integration/lwm2m/#device-registration-settings). [DM-2292]

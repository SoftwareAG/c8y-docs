---
weight: 30
title: LWM2M connector device
layout: redirect
---

The LWM2M connector device is an automatically generated device for the tenants which have a subscription to the LWM2M application.
You can use this device to manage tenant-wide LWM2M devices.
The `help` shell command shows the available operations and how to use them.

![LWM2M connector device help command](/images/device-protocols/lwm2m/lwm2m-connector-device-help-command.png)

Additionally, the bulk device registration status and result are shown under this device.

![LWM2M connector bulk device registration result](/images/device-protocols/lwm2m/lwm2m-connector-device-bulk-device-reg-res-with-1-duplicate.png)

### Migration of the LWM2M devices

Starting from version 10.15.0, the new device registration for LWM2M is introduced.
If LWM2M devices were created earlier and were not already migrated or if they were created later but in a legacy way, use the `migrateLwm2mDevices` command for the tenant.
The command can take comma-separated device managed object IDs as parameters. If IDs are specified, the migration will be done for the respective devices.
If the command is sent without any parameters then all LWM2M devices that have not been migrated will be detected and migrated.

Example usages: `migrateLwm2mDevices 1122,3344` or `migrateLwm2mDevices`

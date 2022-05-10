---
weight: 30
title: LWM2M connector device
layout: redirect
---

LWM2M connector device is an automatically generated device for the tenants which have subscription to the LWM2M application.
This device is usable to manage tenant-wide LWM2M devices.
The **help** shell command shows the possible operations and the usages.

![LWM2M connector device help command](/images/device-protocols/lwm2m/lwm2m-connector-device-help-command.png)

Additionally, the bulk device registration status and result are shown under this device.

![LWM2M connector bulk device registration result](/images/device-protocols/lwm2m/lwm2m-connector-device-bulk-device-reg-res-with-1-duplicate.png)

### Migration of the LWM2M devices

Starting from version 10.15.0, the new device registration for LWM2M is introduced. If there are LWM2M devices created earlier and was not already migrated or if they are LWM2M devices created later with the legacy way then the **migrateLwm2mDevices** command can be used for the tenant.

The commmand can take comma-separated device managed object IDs as parameters. If the IDs are specified then the migration will be done only for those devices. If the command is sent without any parameters then all the non-migrated LWM2M devices that are detected will be tried to be migrated. 
Example usages: **migrateLwm2mDevices 1122,3344** or **migrateLwm2mDevices**
---
title: Configuration Management
layout: redirect
order: 70
---

You can retrieve, modify and save user configuration data. To do this, navigate to the "[Configuration](/guides/users-guide/device-management#operation-monitoring)" tab of the router, click on the "Reload" button in the "CONFIGURATION" widget to request configuration data. It will take a few seconds to download. After the configuration data has arrived, you will see a list of parameters and their corresponding values. You can then make changes to the configuration and save them back to the device.

You can also request a configuration snapshot from the device and later apply the configuration snapshot to other devices.

Starting from agent version 3.1.1 and Cumulocity version 7.26 there is also RDB snapshot support, which is a super-set of the configurations. This is mainly for troubleshooting purpose.

![RDB setup](/guides/images/devices/netcomm/rdb.png)

> Prior to Cumulocity 6.9, this widget was in the "Control" tab. Starting from Cumulocity 6.9, you can also take entire configuration snapshots including the non-textual parts of the device and send reference configuration snapshots back to the device.

## <a name="sms_mode"></a> Configuring devices to use SMS mode

To use SMS commands for devices, open the router's web interface and navigate to "Services", "SMS messaging", then "Diagnostics". Configure the device as follows:

* Either disable "Only accept authenticated SMS messages", or add permitted senders to the white list. Usage of passwords is not supported.
* Turn the other settings on.

![Enable SMS mode](/guides/images/devices/netcomm/sms_mode.png)

> For more information please refer to "[Control devices via SMS](/guides/reference/device-control#control_via_sms)".

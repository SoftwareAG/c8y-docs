---
title: Configuring Queclink devices for Cumulocity
layout: redirect
weight: 20
---
Use the Queclink Manage Tool to set up a device for Cumulocity:

* Verify that "Report Mode" is set to one of the TCP variants. If you want to send commands to the device, use "TCP long-connect mode". UDP or SMS are not supported by Cumulocity.
* Set the "Main Server IP/Domain Name" to tracker.cumulocity.com.
* Set the "Main Server Port" to 9090.
* Send the configuration to the device.

The screenshot below illustrates the setting.

![Queclink Manage Tool](/guides/images/devices/queclink/queclinkmanage.jpg)
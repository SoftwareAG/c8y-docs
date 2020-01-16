---
title: Device Shell
layout: redirect
weight: 80
---
With Device Shell, you can read and write individual configuration parameters from the device, as well as execute diagnostic commands. For more information, please refer to the [user guide](/guides/users-guide/device-management#shell). Consult the Netcomm documentation for valid parameters and diagnostic commands. The general format is:

* "get &lt;parameter&gt;" to read a parameter from the device.
* "set &lt;parameter&gt;=&lt;value&gt;" to write a parameter to the device.
* "execute &lt;command&gt;" to execute a diagnostic command on the device.

Multiple get, set and execute commands can be sent using a semicolon as separator. Click the "Get Predefined" link to access frequently used parameters and commands.

![Device Shell](/guides/images/devices/netcomm/shell.png)
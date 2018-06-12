---
title: Configuring network parameters
layout: redirect
order: 30
---

You can view and configure the essential mobile network ("WAN") and local area network ("LAN") parameters in the "Network" tab as shown in the screenshot below.

The mobile network ("WAN") parameters shown in the user interface correspond to the first profile stored in the router. These parameters can be remotely configured directly or via SMS.

For SMS configuring, the router needs to be configured to accept SMS commands. Consult the router's manual on the relevant parameters for SMS configuration, or use the router's web user interface. You also need to have an SMS gateway configured with your account. Contact [support](https://support.cumulocity.com) for setting up an SMS gateway. For more information on Device Shell, consult the  [user's guide](https://cumulocity.com/guides/users-guide/device-management/#shell).

> Note configuring WAN parameters via both IP and SMS mode requires Cumulocity 7.26. When you configure a wrong APN setting, the device will lose mobile network connection and can only be managed by limited SMS functionality.

![WAN parameters](/guides/images/devices/netcomm/wan.png)

LAN and DHCP parameters can be directly configured from Cumulocity as well.

![LAN parameters](/guides/images/devices/netcomm/lan.png)

## <a name="software"></a>Managing software and firmware

The installed software and firmware on the router can be remotely managed using the standard software and firmware management feature from Cumulocity, as described in the [Device management user's guide](/guides/users-guide/device-management#software-repo).

Software packages need to be in [ipkg](http://en.wikipedia.org/wiki/Ipkg) format and follow the naming convention "&lt;package&gt;\_&lt;version&gt;\_&lt;arch&gt;.ipk". Version numbers including letters are not supported. All package management methods (install, upgrade, downgrade, removal) are supported through the router's package manager. If software packages have dependencies, please make sure to install these first.

> The package "smartrest-agent\_&lt;version&gt;\_arm.ipk" represents the NetComm agent. It is prohibited to remove this package from Cumulocity.

> When upgrading from versions older than 2.1.1, the device needs to be re-registered.

Firmware can be uploaded and installed on the router as well. To successfully upgrade the firmware, make sure that the target firmware includes the agent package. If the agent package is not included in the target firmware, the agent will not start after the installation. Firmware files need to follow Netcomm's naming convention ("&lt;name&gt;\_&lt;version&gt;.cdi").

![Software/firmware](/guides/images/devices/netcomm/software.png)
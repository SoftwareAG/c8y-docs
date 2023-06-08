---
weight: 130
title: Network
layout: redirect
---

In the **Network** tab, mobile network (WAN) and local area network (LAN) parameters can be viewed and configured.

![Network tab](/images/users-guide/DeviceManagement/devmgmt-devices-network.png)

The WAN parameters in the user interface correspond to the first profile stored in the router. These parameter can be configured remotely or via SMS.

{{< c8y-admon-info >}}
For SMS configuration, the router needs to be configured to accept SMS commands.
{{< /c8y-admon-info >}}

#### To configure WAN parameters

1. Enter the Access Point Name (APN).
2. Enter the username and the password of your account in the platform to which you wish to establish a connection.
3. Select the authentication type.
4. Click **Save** to save your settings.

#### To configure LAN parameters

To configure LAN parameters, simply enter **IP address** and **Subnet mask**.

{{< c8y-admon-info >}}
**Name** and **Mac address** fields are not configurable.
{{< /c8y-admon-info >}}

#### To configure DHCP parameters

1. Enter the address range in which the connection can be established.
2. Enter the DNS.
3. Enter the DNS 2.
4. Enter the domain name.
5. Click **Save** to save your settings.

{{< c8y-admon-info >}}
If the LAN configuration is disabled, the DHCP configuration is automatically disabled as well.
{{< /c8y-admon-info >}}

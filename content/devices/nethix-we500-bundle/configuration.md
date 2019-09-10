---
title: Configuring the device
layout: redirect
weight: 20
---

WE500 needs an internet connection to be able to connect to your Cumulocity account. There are three different ways to establish an Internet connection with WE500:

* WAN
* LAN
* WLAN (if available)

### <a name="wan"></a>WAN

To establish a WAN connection through WE500 you first need to insert a SIM card as shown below:

![Sim](/guides/images/devices/we500/sim1.png)

The SIM card contacts must face the pluggable screw terminal and the cut angle must be faced to the front of the device.

>**Warning**: Avoid to insert the SIM card when the device is turned on. After turning off the device and removing the power source, the SIM card can be inserted/removed.

Connect a quad band GSM antenna with the proper cable and, if required, the extension to make sure that you have a satisfactory GSM signal, then turn on the device.

After logging in, navigate to the **Administration > Networking > SIM** tab.

![Networking_Sim](/guides/images/devices/we500/networking_sim1.png)

Enter the required information with the relevant parameters, according to your provider.

WE500 is ready now to establish a WAN connection. In order to activate the connection, navigate to the **Administration > Networking > HSPA** tab.

![Networking_hspa](/guides/images/devices/we500/networking_hspa1.png)

Enable the service by selecting the **Enable** check box. 

Specify whether the connection is **Always on** or **On demand**:

* **Always on**: WE500 will permanently keep the connection. If it is interrupted (e.g. missing credit, signal not available) the connection will be restored as soon as possible.
* **On demand**: The connection is activated on request by an authorized user through a **wake-up** message ([11. Commands](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-builtin-cmd-en)) and is automatically disabled after 15 minutes. If the activated services require a connection for data sending, it will automatically be closed at the end of the configured operations.

If the parameters have been properly configured, the HSPA connection will be activated after a few minutes. On the status panel, at the right of the web interface, the HSPA indicator will get green and the connection uptime and the relevant IP address will be displayed next to it.

It’s possible to check the quality of the connection by using the diagnostic tool **Ping** ([12.3. Ping](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-ping-en)). Further information on the status of the connection can be found in **Administration > Diagnostics > Networking** in [12.2. Information of connectivity](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-networking-info-en).

### <a name="lan"></a>LAN

LAN parameters can be configured in the **Administration > Networking > LAN** tab.

![Networking_LAN](/guides/images/devices/we500/networking_lan1.png)

First of all the **MAC address** of the device will be displayed, with the option of using the LAN network on static IP address or on DHCP.

If the Static address will be selected, the following parameters must be set for the correct operation of the service:

* **IP address:** static IP address assigned to WE500. Make sure that the address is available and not used on other devices.
* **Netmask:** Subnet mask. A valid netmask must be entered, according to the specifications of the own local LAN.
* **Gateway:** Network gateway.
* **DNS:** DNS that can be assigned to WE500 (max. 3).

After settings modification WE500 requires a reboot in order to activate them. For further information regarding the status of the LAN connection, see page **Diagnostics > Networking** on section **LAN Interface** (see [12. Diagnostic](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-diagnostics-en)).

### <a name="wlan"></a>WLAN

WLAN parameters can be configured in the **Administration > Networking > WLAN** tab.

Please note that this option is available only if, at order confirmation, the *Wi-Fi on USB port* option has been selected.

![Networking_WLAN](/guides/images/devices/we500/networking_wlan.png)

First of all it will be displayed the **MAC address** of the Wi-Fi device connected to WE500, and it will be given the possibility to choose between a static or dynamic IP address.

Choosing the static IP address, all necessary parameters for a proper functioning of the service will be required.

* Choosing a **static IP-address** the following parameters must be set for a proper operation of the service:
* **IP address:** static IP address assigned to WE500. Make sure that the address is available and not used on other devices.
* **Netmask:** Subnet mask. A valid netmask must be entered, according to the specifications of the own local LAN.
* **Gateway:** Network gateway.

Then the access data of the Wi-Fi network, where WE500 has to get connected to, have to be defined:

* **SSID:** Complete name of the Wi-Fi network
* **Protection:** Encryption of the access key
* **Key:** type of key/password for the authentication

After clicking on **Save**, WE500 starts to scan the on-site available Wi-Fi networks. Once found the network with the previously set SSID, WE500 will make the authentication using the indicated parameters.

For further information regarding the status of the WLAN connection, it’s possible to enter the page **Administration > Diagnostics > Networking** on section **WLAN Interface** (see [12. Diagnostic](https://nethix.co/doc/en/we500/we500_sw_manual.html#we500-sw-diagnostics-en)).

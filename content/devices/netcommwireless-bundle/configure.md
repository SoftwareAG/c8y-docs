---
title: Configuring the router
layout: redirect
weight: 20
---

The support for Cumulocity can be configured through the router's web user interface. To do so, login to the user interface as described in the router's manual. Navigate to the "System" tab and click on the "Internet of Things" menu item.

![Cumulocity configuration](/images/devices/netcomm/routerconf.png)

Verify that the toggle switch "Cumulocity agent" is set to "ON" and the URL shown in "Server" points to the Cumulocity instance that you want to connect. For example, use

* https://demos.cumulocity.com/ for connecting to Cumulocity.
* https://management.ram.m2m.telekom.com/ for connecting to Deutsche Telekom Cloud of Things.

Optionally, you can activate data collecting for the following functionalities:

* GPIO analog measurements: Send the voltages of the analog inputs [seconds].
* GPS position interval: Update the current GPS position [seconds].
* GPS position event: Send a location trace of the GPS position [seconds].
* System resources measurements: Get information about CPU usage, memory usage and network traffic [seconds].

All these options are disabled by default (the interval is set to 0).

The web interface also shows the status of the connection to Cumulocity:

(For version 2.x)

 * Off: The software is disabled.
 * Initializing: The software is initializing.
 * Registering: The device waits for being registered to Cumulocity (see next section).
 * Starting: The software starts all its components.
 * No credentials: The device did not get credentials for accessing Cumulocity, the credentials were deactivated, or the credentials were wrong.
 * Started: The software is started.
 * Connecting: The software is connecting to Cumulocity.
 * Connected: The software is connected to Cumulocity.
 * Disconnected: The software is not connected to Cumulocity.
 * Reconnecting: The software is retrying the connection.
 * Stopping: The software is terminating.

(For version 3.x onwards)
* Checking network connection: waiting for mobile network connection at boot.
* Bootstrapping: load credentials or request credentials from Cumulocity.
* Integrating: Connecting to Cumulocity.
* Loading plugins: loading Lua plugins.
* Connected: The agent is successfully connected to Cumulocity.
* No server URL: no or invalid server URL.
* Bootstrap failed: Can not get credentials from Cumulocity.
* Integration failed: can not connect to Cumulocity.
* Create threads failed: not able to start reporter or device push.

## <a name="connect"></a>Connecting the router

To register your NetComm router to Cumulocity, you need the router's serial number as _Device ID_. The registration process is described in section "[Connecting devices](/users-guide/device-management/#device-registration)" in the User Guide. The serial number is printed on the back side of the router as shown below. Alternately, it is also available in the router's web user interface. Navigate to "System", "Internet of Things" and view the "Device ID" field.

> Users of version 2.x or upgrading from 2.x to 3.x should use the router's MAC address. Please make sure to use only lowercase letters and numbers when entering the MAC address. Do not use colons to separate the MAC address. For example, the MAC address from the picture would be entered as

	006064dda4ae

![MAC address](/images/devices/netcomm/mac.png)

After clicking the "accept" button, navigate to "All devices", the router should appear here after registration. The default name of a router is "&lt;model&gt; (S/N &lt;serial number&gt;)", where &lt;model&gt; is the device model name. For example, the above router would appear as "NTC-6200-02 (S/N 165711141901036)". Click on the router to view the detailed information and to access the functionality described in the remaining sections of this document. In order to distinguish a registered router from other devices in the listing, you can change the router's name on the "Info" tab, which also displays basic information such as serial number of the router and SIM card data. After changing the name, remember to click "save changes" button at the bottom of the "Info" page.

![Device details](/images/devices/netcomm/info.png)
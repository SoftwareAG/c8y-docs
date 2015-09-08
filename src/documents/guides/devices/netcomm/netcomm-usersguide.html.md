---
order: 20
title: NetComm Agent User's Guide
layout: default
---

## Overview

The following sections demonstrate how to use a NetComm router with Cumulocity. It describes how to

* [Configure](#configure) the router.
* [Connect](#connect) the router to your Cumulocity account.
* [Configure WAN, LAN and DHCP](#network) parameters.
* Manage [software and firmware](#software).
* Monitor [system resourcess](#system).
* Use the built-in [GPS](#gps) functionality.
* Use the built-in [GPIO](#gpio) pins.
* View [configuration](#rdb) parameters.
* Remotely execute text commands via [device shell](#shell).
* Get [event notifications](#notifications).
* Connect [Modbus](#modbus) devices.

The following sections assume that the router has the NetComm [agent](/guides/devices/netcomm/netcomm-release/) package installed. Compatible model is: [NTC-6200](http://www.netcommwireless.com/product/m2m/ntc-6200). For more information on a particular feature of the router, please consult the respective manual found in the "Downloads" section of the router's home page.

## <a name="configure"></a>Configuring the router

The support for Cumulocity can be configured through the router's web user interface. To do so, login to the user interface as described in the router's manual. Navigate to the "System" tab and click on the "Cumulocity" menu item.

![Cumulocity configuration](/guides/devices/netcomm/routerconf.png)

Verify that the toggle switch "Cumulocity agent" is set to "ON" and the URL shown in "Cumulocity server" points to the Cumulocity instance that you want to connect. For example, use

* https://54.75.252.207/s for connecting to NetComm NRM.
* https://management.cumulocity.com/s for connecting to Cumulocity.
* https://management.telstra-iot.com/s for connecting to the Telstra IoT platform.

Optionally, you can activate data collecting for the following functionalities:

* *GPIO analog measurements*: Send the voltages of the analog inputs [seconds].
* *GPS position interval*: Update the current GPS position [seconds].
* *GPS position event*: Send a location trace of the GPS position [seconds].
* *Network/mobile update interval*: Send the network and mobile updates not often than this interval [seconds].
* *System resources measurements*: Get information on CPU, memory and network [seconds].

All these functionalities are disabled by default (interval is set to zero).

## <a name="connect"></a>Connecting the router

To register your NetComm router to Cumulocity, you need the MAC address of the router's Ethernet card as _Device ID_. The registration process is described in section "[Connecting devices](/guides/users-guide/device-management/#device-registration)" in the User Guide. The MAC address is printed on the back side of the router as shown in the screenshot below. Alternately, it is also available in the router's web user interface. Navigate to "System", "Cumulocity" and view the "Device ID" field as shown in the screenshot above. Please make sure to use only lowercase letters and numbers when entering the MAC address. Do not use colons to separate the MAC address. For example, the MAC address from the picture would be entered as "006064dda4ae".

![MAC address](/guides/devices/netcomm/mac.png)

After clicking the "accept" button, navigate to "All devices", the router should appear here after registration. The default name of a router is "NTC-6200 <serial number>". For example, the above router would appear as "NTC-6200 165711141901036". Click on the router to view the detailed information and to access the functionality described in the remaining sections of this document. In order to distinguish a registered router from other devices in the listing, you can change the router's name on the "Info" tab, which also displays basic information such as serial number of the router and SIM card data. After changing the name, remember to click "save changes" button at the bottom of the "Info" page.

![Device details](/guides/devices/netcomm/info.png)

## <a name="network"></a>Configuring network parameters

You can view and configure the essential mobile network ("WAN") and local area network ("LAN") parameters in the "Network" tab as shown in the screenshot below.

The mobile network ("WAN") parameters shown in the user interface correspond to the first profile stored in the router. These parameters can be remotely configured via SMS or [Device Shell](#shell). For SMS configuring, the router needs to be configured to accept SMS commands. Consult the router's manual on the relevant parameters for SMS configuration, or use the router's web user interface. You also need to have an SMS gateway configured with your account. Contact <support@cumulocity.com> for setting up an SMS gateway. For more information on Device Shell, consult the  [user's guide](https://cumulocity.com/guides/users-guide/device-management/#shell).

![WAN parameters](/guides/devices/netcomm/wan.png)

LAN and DHCP parameters can be directly configured from Cumulocity as well.

![LAN parameters](/guides/devices/netcomm/lan.png)

## <a name="software"></a>Managing software and firmware

The installed software and firmware on the router can be remotely managed using the standard software and firmware management feature from Cumulocity, as described in the [Device management user's guide](/guides/users-guide/device-management#software-repo).

Software packages need to be in [ipkg](http://en.wikipedia.org/wiki/Ipkg) format and follow the naming convention "&lt;package&gt;\_&lt;version&gt;\_&lt;arch&gt;.ipk". Version numbers including letters are not supported. All package management methods (install, upgrade, downgrade, removal) are supported through the router's package manager. If software packages have dependencies, please make sure to install these first. 

> The package "smartrest-agent\_&lt;version&gt;\_arm.ipk" represents the NetComm agent. it must remain installed on the router, otherwise the device will lose connection to Cumulocity.

> When upgrading from versions older than 2.1.1, the device needs to be re-registered.

Firmware can be uploaded and installed on the router as well using NetComm firmware images (following the naming convention "&lt;name&gt;\_&lt;version&gt;.cdi").

![Software/firmware](/guides/devices/netcomm/software.png)

## <a name="system"></a>Monitoring system resources

You can record statistics of the router's system resources usage for troubleshooting purposes. The following statistics are available:

* CPU load in percent.
* Used and total memory in MB.
* Uplink and downlink traffic over all interfaces in KB/sec.

By default, collection of resource statistics is disabled. They can be enabled by setting a non-zero collecting interval in the "System resources measurements" entry of the [router user interface](#configure) or using [Device Shell](#shell):

	set service.cumulocity.plugin.system_resources.interval=<interval>

Collected data can be accessed in the "Measurements" tab or in a dashboard.

## <a name="gps"></a>Using GPS

To locate or trace the router, connect a GPS antenna to the router and enable its GPS functionality. Then [configure](#configure) the frequency of data collection by setting the "GPS position interval" and/or the "GPS position event" to a non-zero value. "GPS position interval" defines how often the current location of the router is updated. "GPS position event" defines how often the current location is stored as location update event for tracing. Similarly, you can set these parameters from Device Shell:

	set service.cumulocity.plugin.ntc6200.gps.update_interval=<update interval>
	set service.cumulocity.plugin.ntc6200.gps.interval=<event interval>

After you applied the configuration changes, wait a moment for the first GPS data to arrive, then refresh the page. A "Location" and a "Tracking" tab should now appear. See the "[Location](/guides/users-guide/device-management#location)" and "[Tracking](/guides/users-guide/device-management#tracking)" sections in the user guide for more information.

## <a name="gpio"></a>Using GPIO

The following GPIO functionalities are supported by the agent:

* Send the voltage of an analog input as measurements to Cumulocity.
* Create or clear alarms when a digital input turn 1 or 0, respectively.
* Log the state of a digital input as events.
* Write to a digital output remotely from Cumulocity.

Consult the documentation of your router for more information about its specific IO settings. The available functionalities may vary between different device models. For example, the NTC 6200 model supports GPIO pins 1-3.

### Analog input

To regularly poll the input voltage of a GPIO pin and send it to Cumulocity, set "[GPIO analog measurements](#configure)" to a non-zero value. Alternatively, use Device Shell:

	set service.cumulocity.plugin.ntc6200.gpio.interval=<interval>

Navigate to the "Measurements" tab to view the visualized result, or create your own dashboard.

### Digital input

You can create events and alarms from digital inputs. These can be configured using the router user interface or through Device Shell. The format is

	set service.cumulocity.gpio.<port>.notify = <off | event | alarm | alarm-inverted>
	set service.cumulocity.gpio.<port>.debounce.interval = <SECONDS>
	set service.cumulocity.gpio.<port>.text = <ALARM_TEXT>
	set service.cumulocity.gpio.<port>.severity = <severity>

Port `<port>` is range 1..3 for NetComm wireless router NTC 6200.

Possible notifications are:

* off: The digital input is ignored.
* event: The value of the input is logged as event.
* alarm: If the input is set to "high", an alarm is created.
* alarm-inverted: If the input is set to "low", an alarm is created.

The debounce interval reduces electrical noise from the GPIO inputs: The shorter the interval, the noisier the value but the faster the reaction to signal changes. The default debounce interval is zero (no delay).

You can override the default alarm text by setting the "text" property. By default, this value is empty and "Digital input gpio<N>" is used as text, where <N> is the numbering of a GPIO pin.

Valid alarm severities are:

 * WARNING
 * MINOR
 * MAJOR [default]
 * CRITICAL

The inputs are checked every second for changes.

### Digital output

Digital outputs can be controlled using the "Relay array" widget in the "[Control](/guides/users-guide/device-management#operation-monitoring)" tab, see below in the screenshot. The numbering of the GPIO pins are listed in the same order as they are listed on the router. For the NTC-6200 model, three GPIO pins can be set.

## <a name="rdb"></a>Retrieving configuration

You can retrieve, modify and save user configuration data. To do this, navigate to the "[Configuration](/guides/users-guide/device-management#operation-monitoring)" tab of the router, click on the "Reload" button in the "CONFIGURATION" widget to request configuration data. It will take a few seconds to download. After the configuration data has arrived, you will see a list of parameters and their corresponding values. You can use your web browser's text search functionality to locate specific configuration.

![RDB setup](/guides/devices/netcomm/rdb.png)

> Prior to Cumulocity 6.9, this widget was in the "Control" tab. Starting from Cumulocity 6.9, you can also take entire configuration snapshots including the non-textual parts of the device and send reference configuration snapshots back to the device.

## <a name="shell"></a>Device Shell

With Device Shell, you can read and write individual configuration parameters from the device, as well as execute diagnostic commands. For more information, please refer to the [user guide](/guides/users-guide/device-management#shell). Consult the Netcomm documentation for valid parameters and diagnostic commands. The general format is:

* "get &lt;parameter&gt;" to read a parameter from the device.
* "set &lt;parameter&gt;=&lt;value&gt;" to write a parameter to the device.
* "execute &lt;command&gt;" to execute a diagnostic command on the device.

Multiple get, set and execute commands can be sent using a semicolon as separator. Click the "Get Predefined" link to access frequently used parameters and commands.

![Device Shell](/guides/devices/netcomm/shell.png)

## <a name="notifications"></a>Event notifications

The router reports certain system events as notifications, which can be forwarded to Cumulocity as alarms. The system events help, for example, in troubleshooting mobile network issues. For more information on the different types of events and how to forward them, please consult the Netcomm documentation.

![Event notifications](/guides/devices/netcomm/notifications.png)

## <a name="modbus"></a>Connecting Modbus devices

You can connect Modbus/TCP devices using the router's LAN port and manage them remotely from Cumulocity. To do so, you need to

* Establish basic LAN connectivity. Use the "[Network](#network)" tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the device.
* Subscribe your account to the Cloud Fieldbus app by contacting <support@cumulocity.com>.
* Configure Modbus communication as described in the [Cloud Fieldbus user's guide](/guides/devices/netcomm/cloud-fieldbus).

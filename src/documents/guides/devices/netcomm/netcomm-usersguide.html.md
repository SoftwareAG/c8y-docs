---
order: 20
title: Netcomm Agent User's Guide
layout: default
---

## Overview

The following sections demonstrate how to use a Netcomm router with Cumulocity. It describes how to

* [Configure](#configure) the router.
* [Connect](#connect) the router to your Cumulocity account.
* [Configure WAN, LAN and DHCP](#network) parameters.
* Manage [software and firmware](#software).
* Monitor [system resourcess](#system).
* Use the built-in [GPS](#gps) functionality.
* Use the built-in [GPIO](#gpio) pins.
* View [RDB](#rdb) parameters.
* Connect [Modbus](#modbus) devices.

The following sections assume that the router has the NetComm [agent](/guides/devices/netcomm/netcomm-release/) package installed. Compatible model is: [NTC-6200](http://www.netcommwireless.com/product/m2m/ntc-6200). For more information on a particular feature of the router, please consult the respective manual found in the "Downloads" section of the router's home page.

## <a name="configure"></a>Configuring the router

The support for Cumulocity can be configured through the router's web user interface. To do so, login to the user interface as described in the router's manual. Navigate to the "System" tab and click on the "Cumulocity" menu item.

![Cumulocity configuration](/guides/devices/netcomm/routerconf.png)

Verify that the toggle switch "Cumulocity agent" is set to "ON" and the URL shown in "Cumulocity server" points to the Cumulocity instance that you want to connect. For example, use

* https://54.75.252.207/s for connecting to Netcomm NRM.
* https://<tenant>.cumulocity.com/s for connecting to Cumulocity. You can sign-up a free trial tenant on https://cumulocity.com/.
* https://management.telstra-iot.com/s for connecting to the Telstra IoT platform.

Optionally, you can activate data collecting for the following functionalities:

* *GPIO analog measurements*: Send the voltages of the analog inputs [seconds].
* *GPS position interval*: Update the current GPS position [seconds].
* *GPS position event*: Send a location trace of the GPS position [seconds].
* *Network/mobile update interval*: Send the network and mobile updates not often than this interval [seconds].
* *System resources measurements*: Get information on CPU, memory and network [seconds].

All these functionalities are disabled by default (interval is set to zero).

## <a name="connect"></a>Connecting the router

To register your NetComm router to Cumulocity, you need the MAC address of the router's Ethernet card as _Device ID_. The registration process is described in section "[Connecting devices](/guides/users-guide/device-management/#device-registration)" in the User Guide. The MAC address is printed on the back side of the router as shown in the screenshot below. Alternately, it is also available in the router's web user interface. Please make sure to use only lowercase letters and numbers when entering the MAC address. For example, the MAC address from the picture would be entered as "006064dda4ae".

![MAC address](/guides/devices/netcomm/mac.png)

After click the "accept" button, navigate to "All devices", the router should appear here after registration. The default name of a router is _NTC-6200 <serial number>_. For example, the above router would appear as _NTC-6200 165711141901036_. Click on the router to view the detailed information and to access the functionality described in the remaining sections of this document. In order to distinguish a registered router from other devices in the listing, you can change the router's name on the "Info" tab, which also displays basic information such as serial number of the router and SIM card data. After changing the name, remember to click "save changes" button at the bottom of the "Info" page.

![Device details](/guides/devices/netcomm/info.jpg)

## <a name="network"></a>Configuring network parameters

You can view and configure the essential mobile network ("WAN") and local area network ("LAN") parameters in the "Network" tab as shown in the screenshot below.

The mobile network ("WAN") parameters shown in the user interface correspond to the first profile stored in the router. These parameters can be remotely configured via SMS or _Device Shell_. For SMS configuring, the router needs to be configured to accept SMS commands. Consult the router's manual on the relevant RDB parameters for SMS configuration, or use the router's web user interface. You also need to have an SMS gateway configured with your account. Contact support@cumulocity.com for setting up an SMS gateway. _Device Shell_ is a functionality supported by Cumulocity, please refer to the [user guide](https://cumulocity.com/guides/users-guide/device-management/#shell) for how to use it.

![WAN parameters](/guides/devices/netcomm/wan.png)

Configuring of LAN and DHCP parameters are directly supported in Cumulocity and correspond the RDB parameters of exactly the same name.

![LAN parameters](/guides/devices/netcomm/lan.png)

## <a name="software"></a>Managing software and firmware

The installed software and firmware on the router can be remotely managed using the standard software and firmware management feature from Cumulocity, as described in the [Device management user's guide](/guides/users-guide/device-management#software-repo).

Software packages need to be in [ipkg](http://en.wikipedia.org/wiki/Ipkg) format and follow the naming convention <package>_<version>_<arch>.ipk. Version numbers with letters in them are not supported. All package management methods (install, upgrade, downgrade, removal) are supported (provided the router's package manager supports them). If software packages have dependencies, please beware to install the dependencies first.

Mind that the package smartrest-agent_<version>.ipk represents the NetComm agent, it must remain installed on the router, otherwise the device will lose connection to Cumulocity.

Firmware can be uploaded and installed on the router as well using Netcomm firmware images (following the naming convention <name>_<version>.cdi).

![Software/firmware](/guides/devices/netcomm/software.png)

## <a name="system"></a>Monitoring system resources

You can record statistics of the router's system resources usage for troubleshooting purposes. The following statistics are available:

* CPU load in percent.
* Used and total memory in MB.
* Uplink and downlink traffic over all interfaces in KB/sec.

By default, collection of resource statistics is disabled. They can be enabled by setting a non-zero collection interval in the "[System resources measurements](#configure)". Collected data can be accessed in the "Measurements" tab or in a dashboard.

## <a name="gps"></a>Using GPS

To locate or trace the router, connect a GPS antenna to the router and enable its GPS functionality. Then [configure](#configure) the frequency of data collection by setting the "GPS position interval" and/or the "GPS position event" to a non-zero value. "GPS position interval" defines how often the current location of the router is updated. "GPS position event" defines how often the current location is stored as location update event for tracing.

After you applied the configuration changes, wait a moment for the first GPS data to arrive, then refresh the page. A "Location" and a "Tracking" tab should now appear. See the "[Location](/guides/users-guide/device-management#location)" and "[Tracking](/guides/users-guide/device-management#tracking)" sections in the user guide for more information.

## <a name="gpio"></a>Using GPIO

The following GPIO functionalities are supported by the agent:

* Send the voltage of an analog input as measurements to Cumulocity.
* Create or clear alarms when a digital input turn 1 or 0, respectively.
* Log the state of a digital input as events.
* Write to a digital output remotely from Cumulocity.

Consult the documentation of your router for more information about its specific IO settings. The available functionalities may vary between different device models. For example, the NTC 6200 model supports the following GPIO pins: xaux1, xaux2 and xaux3.

### Analog input

To regularly poll the input voltage of a GPIO pin and send it to Cumulocity, set "[GPIO analog measurements](#configure)" to a non-zero value. Navigate to the "Measurements" tab to view the visualized result, or create your own dashboard.

### Digital input

You can create events and alarms from digital inputs. Currently, this has to be done through setting RDB variables. The format is

	service.cumulocity.gpio.<port>.notify = <off | event | alarm | alarm-inverted>
	service.cumulocity.gpio.<port>.debounce.interval = <SECONDS>
	service.cumulocity.gpio.<port>.text = <ALARM_TEXT>
	service.cumulocity.gpio.<port>.severity = <severity>

Port <port> is range 1..3 for NetComm wireless router NTC 6200.

Possible notifications are:

* off: The digital input is ignored.
* event: The value of the input is logged as event.
* alarm: If the input is set to "high", an alarm is created.
* alarm-inverted: If the input is set to "low", an alarm is created.

Debounce interval helps reduce electrical noises from the GPIO pins. The shorter the interval, the noisier is the value. But the higher the interval, the slower the agent react to GPIO pin value changes. A reasonable interval should be, like 600 seconds (i.e., 10 minutes). Default is zero (no delay).

You can override default alarm text if you set ALARM_TEXT. Default this value is empty and alarm text is "Digital input gpio<N>", where <N> is the numbering of a GPIO pin.

Possible alarm severity are:

 * WARNING
 * MINOR
 * MAJOR [default]
 * CRITICAL

The inputs are checked every second for changes.

### Digital output

Digital outputs can be controlled in the "Relay array" widget in the "Control" tab. The GPIO pins are listed in the same order as they are listed on the router. For the NTC-6200 model, there are three GPIO pins: xaux1, xaux2, xaux3.

## <a name="rdb"></a>Retrieving configuration

You can retrieve, modify and save configuration. To do this, navigate to the "Control" tab of the router, click on the "Reload" button in the "CONFIGURATION" widget to request RDB configurations. It will take a few seconds to download. After the configurations has arrived, you will see a list of RDB parameters and their corresponding values. As the configuration list is quite size-able, using your web browser's text search functionality to locate specific configuration will save your time searching the list.

![RDB setup](/guides/devices/netcomm/rdb.png)

## <a name="modbus"></a>Connecting Modbus devices

You can connect Modbus/TCP devices using the router's LAN port and manage them remotely from Cumulocity. To do so, you need to

* Establish basic LAN connectivity. Use the "[Network](#network)" tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the device.
* Subscribe your account to the Cloud Fieldbus app by contacting <support@cumulocity.com>.
* Configure Modbus communication as described in the [Cloud Fieldbus user's guide](/guides/devices/netcomm/cloud-fieldbus).

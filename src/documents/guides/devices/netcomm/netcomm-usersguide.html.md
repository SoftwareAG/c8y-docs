---
order: 20
title: Netcomm Agent User's Guide
layout: default
---

## Overview

The following section shows how to use a Netcomm router with Cumulocity. It describes how to

* [Configure](#configure) the router.
* [Connect](#connect) the router to your Cumulocity account.
* [Set WAN, LAN and DHCP](#network) parameters.
* Manage [software and firmware](#software).
* Monitor [system resourcess](#system).
* Use the built-in [GPS](#gps) functionality.
* Use the built-in [GPIO](#gpio) ports.
* Read [RDB](#rdb) parameters.
* Connect [Modbus](#modbus) devices.

The section assumes that the router includes the software support for Cumulocity. Compatible models are: [NTC-6200](http://www.netcommwireless.com/product/m2m/ntc-6200). For more information on a particular feature of the router, please also consult the respective manuals found in the "Downloads" sections of the router's home page.

## <a name="configure"></a>Configuring the router

The support for Cumulocity can be configured through the router's web user interface. To do so, login to the user interface as described in the router documentation. Navigate to the "System" tab of the router and click on the "Cumulocity" menu item.

![Cumulocity configuration](/guides/devices/netcomm/routerconf.png)

Verify that the switch "Cumulocity agent" is set to "ON". Verify that the URL shown in "Cumulocity server" points to the Cumulocity instance that you would like to use. For example, use

* https://54.75.252.207/s for connecting to Netcomm NRM.
* https://management.cumulocity.com/s for connecting to Cumulocity Standard Edition.
* https://management.telstra-iot.com/s for connecting to the Telstra IoT platform.

Optionally, you can activate collection of data in regular intervals:

* *GPIO analog measurements*: Send the voltages of the analog inputs.
* *GPS position interval*: Update the current GPS position.
* *GPS position event*: Send a location trace of the GPS position.
* *System resources measurements*: Get information on CPU, memory and network.

These options are described in more detail below.

## <a name="connect"></a>Connecting the router

To connect your Netcomm router to your Cumulocity account, you need to register it using the MAC address of the router's Ethernet port. The registration process is described in the section "[Connecting devices](/guides/users-guide/device-management/#device-registration)" of the User's Guide. The MAC address is printed on the back side of the router as shown by the screenshot below. It is also visible in the router's web user interface. Please make sure to use lowercase letters when entering the MAC address. For example, the MAC address from the picture would be entered as "006064dda4ae".

![MAC address](/guides/devices/netcomm/mac.png)

After accepting the router, click on "All devices" to navigate to the router, or search for it. The default name of the router is "&lt;model&gt; &lt;serial number&gt;". For example, the above router would appear as "NTC-6200 165711141901036". Click on the router to view the details of the router and to access the functionality described in the remaining sections of this document. You can change the name of the router on the "Info" tab, which also displays basic information such as serial number of the router and SIM card data.

![Device details](/guides/devices/netcomm/info.jpg)

## <a name="network"></a>Configuring network parameters

You can view and configure the essential mobile network ("WAN") and local area network ("LAN") parameters using the "Network" tab as shown in the screenshot below. 

The mobile network parameters shown in the user interface correspond to the first profile stored in the router. Please note that these parameters can only be remotely edited using SMS, so the router needs to be configured to accept SMS commands. Consult the manuals of the router on the relevant RDB parameters for SMS configuration, or use the router's web user interface. You also need to have an SMS gateway configured with your account. Contact support@cumulocity.com for setting up an SMS gateway.

![WAN parameters](/guides/devices/netcomm/wan.png)

LAN and DHCP parameters can be configured through the normal IP connection to the router and correspond exactly to the parameters of the same name on the router.

![LAN parameters](/guides/devices/netcomm/lan.png)

## <a name="software"></a>Managing software and firmware

The installed software packages on the router can be remotely managed using the standard software and firmware management features of Cumulocity, as described in the [Device management user's guide](/guides/users-guide/device-management#software-repo). 

Software packages need to be provided in [ipkg](http://en.wikipedia.org/wiki/Ipkg) format and follow the naming convention &lt;package&gt;_&lt;version&gt;_&lt;arch&gt;.ipk. Version numbers with text in them are not supported. All installation paths (install, upgrade, downgrade, removal) are supported (provided the installation package supports them). If software packages have dependencies, install them in several steps.

The above applies to the Cumulocity support software on the router itself as well. Please note that the package smartrest-agent_&lt;version&gt;.ipk must remain installed on the router to be able to remotely manage the router through Cumulocity.

Firmware can be uploaded and installed on the router as well using Netcomm firmware images (following the naming convention &lt;name&gt;_&lt;version&gt;.cdi). 

![Software/firmware](/guides/devices/netcomm/software.png)

## <a name="system"></a>Monitoring system resources

You can record statistics of the router operating system resources for troubleshooting purposes. The following statistics are available:

* CPU load in percent.
* Used and total memory in MB.
* Uplink and downlink traffic over all interfaces in KB/sec.

By default, collection of resource statistics is disabled. They can be enabled by setting a non-zero collection interval in the "[System resources measurements](#configure)". Collected data can be visualized in the "Measurements" tab or in a dashboard.

## <a name="gps"></a>Using GPS

To locate or trace the router, connect a GPS antenna to the router and enable its GPS functionality. Then [configure](#configure) the frequency of data collection by setting the "GPS position interval" and/or the "GPS position event" to a non-zero value. "GPS position interval" defines how often the current location of the router is updated. "GPS position event" defines how often the current location is stored as location update event for tracing.

After you applied the configuration changes and after the first GPS data arrives, a "Location" and a "Tracking" tab appear. You may have to reload the web user interface to make the tabs visible. See the "[Location](/guides/users-guide/device-management#location)" and "[Tracking](/guides/users-guide/device-management#tracking)" sections in the user's guide for more information.

## <a name="gpio"></a>Using GPIO

The agent software supports the following GPIO functionality:

* Send the voltage of the analog inputs as measurements to Cumulocity. In Cumulocity, you can visualize the voltages directly, for example, as graphs and gauges. You can also scale and transform the voltages using rules.
* Create alarms when a digital input goes high or low.
* Log the state of the digital inputs as events.
* Switch a digital output remotely from Cumulocity.

Consult the documentation of your router for more information about its IO configuration. The available functionality may vary between device models. For example, the NTC 6200 supports the following GPIO ports: 3v8poe, ign, vin, xaux1, xaux2 and xaux3. 

### Analog input

To poll the input voltages of the GPIO ports and send them to Cumulocity, set "[GPIO analog measurements](](#configure))" to a non-zero value. Use the "Measurements" tab to visualize the values, or create a dashboard.

### Digital input

You can create events and alarms from digital inputs. Currently, this has to be done through setting RDB variables. The format is

	agent.gpio.<port>.notify = <off | event | alarm | alarm-inverted>

Possible notifications are: 

* off: The digital input is ignored.
* event: The value of the input is logged as event.
* alarm: If the input is set to "high", an alarm is created.
* alarm-inverted: If the input is set to "low", an alarm is created.

The inputs are checked every second for changes.

### Digital output

Digital outputs can be switched from the "Relay array" widget in the "Control" tab. Currently, all ports are listed regardless of which port is actually switchtable. The ports are listed in the order in which they are listed on the router. For the NTC-6200, the relevant switches for the three GPIO output ports (xaux1-3) are 4-6.

> Note that you can also implement own widgets to switch digital outputs and name them according to the router that is connected to the output.

## <a name="rdb"></a>Retrieving RDB parameters

To troubleshoot the router, you can pull a dump of all RDB parameters available on the device. To do this, navigate to the "Control" tab of the router. Click the "Reload" link to request an RDB configuration dump. It will take a few seconds to download the dump. After the dump has arrived, you will see a list of parameters and their values. You can navigate to a particular parameter by simply using your web browser's text search functionality. Since the dump has a significant size, it is only downloaded on request by using the link.

![RDB setup](/guides/devices/netcomm/rdb.png)

## <a name="modbus"></a>Connecting Modbus devices

You can connect Modbus/TCP devices using the router's LAN port and manage them remotely from Cumulocity. To do so, you need to

* Establish basic LAN connectivity. Use the "[Network](#network)" tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the device.
* Subscribe your account to the Cloud Fieldbus app by contacting support@cumulocity.com.
* Configure Modbus communication as described in the [Cloud Fieldbus user's guide](/guides/devices/netcomm/cloud-fieldbus).

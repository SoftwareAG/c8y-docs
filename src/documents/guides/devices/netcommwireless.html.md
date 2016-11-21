---
title: Netcomm
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
* Configure devices to use [SMS mode](#sms_mode).
* Remotely execute text commands via [device shell](#shell).
* Get [event notifications](#notifications).
* Connect [Modbus](#modbus) devices.
* View [logs](#logs).

The following sections assume that the router has the NetComm [agent](/guides/devices/netcomm-release) package installed. The agent is compatible with the [NTC-6200](http://www.netcommwireless.com/product/m2m/ntc-6200) and [NTC-140W](http://www.netcommwireless.com/product/4g-wifi-m2m-router). For more information on a particular feature of the router, please consult the respective manual found in the "Downloads" section of the router's home page.

## <a name="configure"></a>Configuring the router

The support for Cumulocity can be configured through the router's web user interface. To do so, login to the user interface as described in the router's manual. Navigate to the "System" tab and click on the "Internet of Things" menu item.

![Cumulocity configuration](/guides/devices/netcomm/routerconf.png)

Verify that the toggle switch "Cumulocity agent" is set to "ON" and the URL shown in "Server" points to the Cumulocity instance that you want to connect. For example, use

* https://developer.cumulocity.com/s for connecting to Cumulocity.
* https://management.ram.m2m.telekom.com/s for connecting to Deutsche Telekom Cloud of Things.

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

(For version 3.x)
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

To register your NetComm router to Cumulocity, you need the router's serial number as _Device ID_. The registration process is described in section "[Connecting devices](/guides/users-guide/device-management/#device-registration)" in the User Guide. The serial number is printed on the back side of the router as shown below. Alternately, it is also available in the router's web user interface. Navigate to "System", "Internet of Things" and view the "Device ID" field.

> Users of version 2.x or upgrading from 2.x to 3.x should use the router's MAC address. Please make sure to use only lowercase letters and numbers when entering the MAC address. Do not use colons to separate the MAC address. For example, the MAC address from the picture would be entered as

	006064dda4ae

![MAC address](/guides/devices/netcomm/mac.png)

After clicking the "accept" button, navigate to "All devices", the router should appear here after registration. The default name of a router is "&lt;model&gt; (S/N &lt;serial number&gt;)", where &lt;model&gt; is the device model name. For example, the above router would appear as "NTC-6200-02 (S/N 165711141901036)". Click on the router to view the detailed information and to access the functionality described in the remaining sections of this document. In order to distinguish a registered router from other devices in the listing, you can change the router's name on the "Info" tab, which also displays basic information such as serial number of the router and SIM card data. After changing the name, remember to click "save changes" button at the bottom of the "Info" page.

![Device details](/guides/devices/netcomm/info.png)

## <a name="network"></a>Configuring network parameters

You can view and configure the essential mobile network ("WAN") and local area network ("LAN") parameters in the "Network" tab as shown in the screenshot below.

The mobile network ("WAN") parameters shown in the user interface correspond to the first profile stored in the router. These parameters can be remotely configured directly or via SMS.

For SMS configuring, the router needs to be configured to accept SMS commands. Consult the router's manual on the relevant parameters for SMS configuration, or use the router's web user interface. You also need to have an SMS gateway configured with your account. Contact [support](https://support.cumulocity.com) for setting up an SMS gateway. For more information on Device Shell, consult the  [user's guide](https://cumulocity.com/guides/users-guide/device-management/#shell).

> Note configuring WAN parameters via both IP and SMS mode requires Cumulocity 7.26. When you configure a wrong APN setting, the device will lose mobile network connection and can only be managed by limited SMS functionality.

![WAN parameters](/guides/devices/netcomm/wan.png)

LAN and DHCP parameters can be directly configured from Cumulocity as well.

![LAN parameters](/guides/devices/netcomm/lan.png)

## <a name="software"></a>Managing software and firmware

The installed software and firmware on the router can be remotely managed using the standard software and firmware management feature from Cumulocity, as described in the [Device management user's guide](/guides/users-guide/device-management#software-repo).

Software packages need to be in [ipkg](http://en.wikipedia.org/wiki/Ipkg) format and follow the naming convention "&lt;package&gt;\_&lt;version&gt;\_&lt;arch&gt;.ipk". Version numbers including letters are not supported. All package management methods (install, upgrade, downgrade, removal) are supported through the router's package manager. If software packages have dependencies, please make sure to install these first.

> The package "smartrest-agent\_&lt;version&gt;\_arm.ipk" represents the NetComm agent. It is prohibited to remove this package from Cumulocity.

> When upgrading from versions older than 2.1.1, the device needs to be re-registered.

Firmware can be uploaded and installed on the router as well. To successfully upgrade the firmware, make sure that the target firmware includes the agent package. If the agent package is not included in the target firmware, the agent will not start after the installation. Firmware files need to follow Netcomm's naming convention ("&lt;name&gt;\_&lt;version&gt;.cdi").

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

The following GPIO functionalities are supported:

* Send the voltage of an analog input as measurements to Cumulocity.
* Raise or clear alarms when a digital input turn 1 or 0, respectively.
* Write to a digital output remotely from Cumulocity.

Consult the documentation of your router for more information about its specific IO settings. The available functionalities may vary between different device models. For example, the NTC 6200 model supports GPIO pins 1-3, while the NTC 140W model supports only GPIO pin 1.

### Analog input

To regularly poll the input voltage of a GPIO pin and send it to Cumulocity, set "[GPIO analog measurements](#configure)" to a non-zero value. Alternatively, use Device Shell:

	set service.cumulocity.plugin.ntc6200.gpio.interval=<interval>
	set service.cumulocity.gpio.<port>.notify=measurement

&lt;port&gt; is the numbering of the GPIO pin. For the NTC-6200, &lt;port&gt; can be 1, 2 or 3, while for NTC-140W, &lt;port&gt; can only be 1. The Visualized result is then visible in "Measurements".

### Digital input

You can raise alarms from digital inputs. These can be configured using the router user interface or through Device Shell. The format is

	set service.cumulocity.gpio.<port>.notify=alarm
	set service.cumulocity.gpio.<port>.debounce.interval=<SECONDS>
	set service.cumulocity.gpio.<port>.alarm.text=<ALARM_TEXT>
	set service.cumulocity.gpio.<port>.alarm.severity=<severity>

Possible values for the notify parameter are:

* off: The pin is disabled for any notification.
* alarm: An alarm is raised when the pin reading is "high".
* measurement: Analog reading of voltage will be send as measurement.

The debounce interval reduces electrical noise from the GPIO inputs: The shorter the interval, the noisier the value but the faster the reaction to signal changes. The default debounce interval is 10 mins.

You can override the default alarm text by setting the "text" property. By default, this value is empty and "gpio&lt;N&gt; is active" is used as text, where &lt;N&gt; is the numbering of a GPIO pin.

Valid alarm severities are:

 * WARNING
 * MINOR
 * MAJOR [default]
 * CRITICAL

The inputs are checked every second for changes.

### Digital output

Digital outputs can be controlled using the "Relay array" plugin, see below in the screenshot. The numbering of the GPIO pins are the same as listed on the router. For the NTC-6200 model, three GPIO pins can be set, while for the NTC-140W model, only the first pin has effect.

![Relay Array](/guides/devices/netcomm/relayarray.png)

## <a name="rdb"></a>Configuration Management

You can retrieve, modify and save user configuration data. To do this, navigate to the "[Configuration](/guides/users-guide/device-management#operation-monitoring)" tab of the router, click on the "Reload" button in the "CONFIGURATION" widget to request configuration data. It will take a few seconds to download. After the configuration data has arrived, you will see a list of parameters and their corresponding values. You can then make changes to the configuration and save them back to the device.

You can also request a configuration snapshot from the device and later apply the configuration snapshot to other devices.

Starting from agent version 3.1.1 and Cumulocity version 7.26 there is also RDB snapshot support, which is a super-set of the configurations. This is mainly for troubleshooting purpose.

![RDB setup](/guides/devices/netcomm/rdb.png)

> Prior to Cumulocity 6.9, this widget was in the "Control" tab. Starting from Cumulocity 6.9, you can also take entire configuration snapshots including the non-textual parts of the device and send reference configuration snapshots back to the device.

## <a name="sms_mode"></a> Configuring devices to use SMS mode

To use SMS commands for devices, open the router's web interface and navigate to "Services", "SMS messaging", then "Diagnostics". Configure the device as follows:

* Either disable "Only accept authenticated SMS messages", or add permitted senders to the white list. Usage of passwords is not supported.
* Turn the other settings on.

![Enable SMS mode](/guides/devices/netcomm/sms_mode.png)

> For more information please refer to "[Control devices via SMS](/guides/reference/device-control#control_via_sms)".

## <a name="shell"></a>Device Shell

With Device Shell, you can read and write individual configuration parameters from the device, as well as execute diagnostic commands. For more information, please refer to the [user guide](/guides/users-guide/device-management#shell). Consult the Netcomm documentation for valid parameters and diagnostic commands. The general format is:

* "get &lt;parameter&gt;" to read a parameter from the device.
* "set &lt;parameter&gt;=&lt;value&gt;" to write a parameter to the device.
* "execute &lt;command&gt;" to execute a diagnostic command on the device.

Multiple get, set and execute commands can be sent using a semicolon as separator. Click the "Get Predefined" link to access frequently used parameters and commands.

![Device Shell](/guides/devices/netcomm/shell.png)

## <a name="notifications"></a>Event notifications

The router reports certain system events as notifications, which can be forwarded to Cumulocity as alarms. The system events help, for example, in troubleshooting mobile network issues. For more information on the different types of events and how to forward them, please consult the Netcomm documentation (for example, Section "Event notification" in the user's guide). To forward an event as alarm, set up a UDP destination sending to Port 1331 on localhost (Section "Destination configuration").

![Event notifications](/guides/devices/netcomm/notifications.png)

## <a name="modbus"></a>Cloud Fieldbus

You can connect Modbus-TCP and Modbus-RTU slaves to the router via LAN and serial port, respectively, and manage them remotely in Cumulocity. To do so, you need to

For Modbus-TCP setup:

* Establish LAN connectivity. Use the "[Network](#network)" tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the your Modbus-TCP slaves.
* Configure the Modbus-TCP port in the Cumulocity menu on NetComm device's web UI if you are using a different port than the default 502, see "[Configuring the router](#configure)".

For Modbus-RTU setup:

* Connect the router and your Modbus-RTU slaves via a serial cable.
* Configure serial port mode via device shell:

        set serial.iomode.default=<mode>

where `<mode>` can be rs232, rs422 or rs485. You may need to reboot the device after changing the mode.

> The default serial port `/dev/ttyAPP4` should work with no further configuration. In case it's empty or you need to configure a different port, it can be configured in the Cumulocity menu in devices' web UI, see "[Configuring the router](#configure)".

> Some USB to serial adapters have echo mode enabled by default, this can render the Modbus communication stop working completely. If you have one of these adapters, consult the adapter's manufacturer about how to disable it.

> Model NTC-140W doesn't support modbus RTU, so you will not see the corresponding functionality in the UI.

> Model NTC-140W doesn't support modbus RTU, so you will not see the corresponding functionality in the UI.

Then:

* Subscribe your account to the Cloud Fieldbus app by contacting [support](https://support.cumulocity.com).
* Configure Modbus communication as described in the [Cloud Fieldbus user's guide](/guides/users-guide/cloud-fieldbus).
* Enable or disable write permission by setting the "Modbus read only" property in the Cumulocity menu on the device's web UI, see "[Configuring the router](#configure)". Set it to 0 means allow write permission, while 1 means disallow Modbus write permission.

## <a name="logs"></a>Log viewer

You can download and view logs from the device. Log files can be quite big, you can set filtering criteria to get only what is interesting for you.

From right you can set date range (date from and date to), you can select log file. Next you can search the text, and only matching lines are retrieved from the device. You can also limit matched lines.

Received logs are visible in a list below. You can click on it to show log file content at the bottom of the page. Last requested log is opened automatically.

![Log vierer](/guides/devices/netcomm/logs.png)

---
weight: 50
title: Netcomm Router
layout: bundle
---

### Overview

Tutorial on how to setup and configure the Casa System (NetComm) routers using the Cumulocity IoT agent package.

The following sections demostrates how to use a Casa Systems (NetComm) router with the Cumulocity IoT platform.

|SECTION|CONTENT|
|:---|:---|
|[Prerequisites](#prerequisites)|Description of the [system requirements](#sys-req) and a list of [supported routers](#support-router)
|[Setting up and registering the device](#setup)|How to [install](#install-agent) the agent, [configure](#configure) the router and [connect](#connect) the router to your Cumulocity IoT account
|[Interacting with Cumulocity IoT](#interaction)|How to [configure WAN, LAN and DHCP](#network) parameters, manage [software and firmware](#manage), monitor [system resources](#system) and monitor [cellular signal strength](#cellular). <br> How to use the built in [GPS](#gps) functionality, how to use the built-in [GPIO](#gpio) pins and view [configuration](#parameters) parameters.<br> How to remotely execute text commands via [device shell](#device-shell), get event notifications](#notification) and connect [cloud fieldbus](#modbus) devices. How to view [logs](#logs), use [VNC remote access](#vnc) and configure [MQTT](#mqtt)
|[Troubleshooting](#troubleshooting)|List of known [bugs and limitations](#troubleshooting)
|[Release history](#release-history)|Release notes for cumulocity-ntc-agent and smartrest-agent

#### Supported functionality

The agent supports the following functionality:

* Bootstrap and registration of the router in the Cumulocity IoT platform.
* Reporting of model, serial number, firmware version and installed software.
* WAN, LAN and DHCP configuration.
* Remote software and firmware installation and upgrading as service through the ipkg package manager.
* System resource monitoring.
* Cellular signal strength monitoring.
* GPS-based location reporting.
* Reporting GPIO pin readings (analog input) as measurements.
* Raising and clearing alarms based on whether a GPIO pin (digital input) is open or closed in a circuit, including debouncing.
* Remote controlling of GPIO pins (digital output) from Cumulocity IoT.
* Editing the router configuration.
* Managing router configuration snapshots.
* Remotely executing commands via device shell interface.
* Sending event notifications as alarms.
* Modbus-RTU and Modbus-TCP support for remotely managing Modbus devices from Cumulocity IoT.
* Lua plug-in API for rapid development of IoT applications.
* Configuring and displaying agent settings on the router’s web user interface.
* Get and put device configuration.
* View system, ipsec and agent log files.
* Cloud Remote Access for remotely accessing devices via VNC/Telnet/SSH protocols.
* MQTT as an alternative communication protocol.
* CANopen protocol support for managing CANopen devices in a CANopen network.
* All packages are with the signature.

### <a name="prerequisites"></a> Prerequisites

#### <a name="sys-req"> System requirements

The agent was tested on an NTC-221 device with firmware version 2.0.84.0 and 2.0.89.0 and NTC-222 device with firmware 2.0.89.0.

For remote configuration of WAN parameters, you need a SIM card with SMS function. Currently, GSMA OneAPI (e.g., on Ericsson DCP), OpenIT and Jasper Wireless are supported APIs for SMS providers. Contact [support](https://empower.softwareag.com/ContactSupport/) for connecting to an SMS provider.

#### <a name="support-router"> NTC-220 series

The following sections assume that the router has the NetComm agent package installed. The agent is compatible with [NTC-220](https://support.netcommwireless.com/products/NTC-220%20Series).

#### NTC-6200 and NTC-140W series

For [NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series), and [NTC-6200](https://support.netcommwireless.com/products/NTC-6200%20Series), refer to another document. For more information on a particular feature of the router, Consult the respective manual found in the *Downloads* section of the router’s home page.

### <a name="setup"></a> Setting up and registering the deviece

#### <a name="install-agent"> To install the agent

1. Download the agent software, including the CA root certificate, Cloud Remote Access software, and our package public key: http://resources.cumulocity.com/ntc-220/cumulocity-ntc-agent_1.0.0_arm-signed.ipk.
2. Log in to the web user interface of the NTC-200 series.
3. Navigate to the **System** menu. Click on **System configuration**, **Firmware signature**
4. Turn **Enable firmware signature check** to OFF.

    > **Note:** If you forget this step, no software can be installed later. After installing the agent package, this function will be enabled again automatically.  
  Firmware version 2.0.84.0 does not support the firmware signature. You can ignore this step.

5. Navigate to the **System** menu. Click on **System configuration**, **Choose a file** and select the downloaded software. Click **Upload** to upload the software to the router.
6. Click the **Install** button for the uploaded software which you want to install.
7. Reboot the NetComm router. If you install via Netcomm-UI, the device will reboot automatically after the installation.

The agent will automatically start after installation and the router can then be [registered with Cumulocity IoT](#connect). Subsequent upgrades or downgrades can be performed remotely via the agent’s software management feature, or locally via the router’s web portal.

#### Using the agent

For information on using the agent, refer to [Quick Start Guide] "find the correct link" ().

#### <a name="register-device"> To register the device to Cumuloctiy IoT

##### <a name="configure"></a> Configuring the router

The support for Cumulocity IoT can be configured through the router’s web user interface. To do so, login to the user interface as described in the router’s manual. Navigate to the **System** tab and click on the **Internet of Things** menu item.

![Web Interface](/images/device-demos/casa-system-router/router-web-interface.png)

Verify that the toggle switch **Agent** is set to **ON** and the URL shown in **Server** points to the Cumulocity IoT instance that you want to connect. For example, use https://mqtt.cumulocity.com/ for connecting to the Cumulocity IoT platform.

Optionally, you can activate data collecting for the following functionalities:

* GPIO analog measurements: Send the voltages of the analog inputs [seconds].
* GPS position interval: Update the current GPS position [seconds].
* GPS position event: Send a location trace of the GPS position [seconds].
* System resources measurements: Get information about CPU usage, memory usage and network traffic [seconds].
* Connection signal measurements: Get information about cellular signal strength [seconds].

All these options are disabled by default (the interval is set to 0).

The web interface also shows the status of the connection to Cumulocity IoT:

* Checking network connection: waiting for mobile network connection at boot.
* Bootstrapping: load credentials or request credentials from Cumulocity IoT.
* Integrating: Connecting to Cumulocity IoT.
* Loading plugins: loading Lua plugins.
* Connected: The agent is successfully connected to Cumulocity IoT.
* No server URL: no or invalid server URL.
* Bootstrap failed: Cannot get credentials from Cumulocity IoT.
* Integration failed: Cannot connect to Cumulocity IoT.
* Create threads failed: not able to start reporter or device push.

##### <a name="connect"></a> Connecting the router

To register your NetComm router to Cumulocity IoT, you need the router’s serial number as Device ID. For more information on the registration process, see Device management -> [Connecting devices](/users-guide/device-management/#connecting-devices) in the User guide. The serial number is printed on the back side of the router as shown below. Alternatively, it is also available in the router’s web user interface. Navigate to **System**, **Internet of Things** and view the **Device ID** field.

![Serial Number](/images/device-demos/casa-system-router/router-serial-number.png)

After clicking the **Accept** button, navigate to **All devices**, the router should appear here after registration. The default name of a router is "**&#60;model&#62; (S/N &#60;serial number&#62;)**", where &#60;model&#62; is the device model name. For example, the above router would appear as “NTC-221 (S/N 191611192800580)”.

Click on the router to view the detailed information and to access the functionality described in the remaining sections of this document. In order to distinguish a registered router from other devices in the listing, you can change the router’s name on the **Info** tab, which also displays basic information such as serial number of the router and SIM card data on the **DEVICE DATA** widget. After clicking the **Edit** icon at the bottom of the widget and changing the name, remember to click the **Save** button at the bottom of the **DEVICE DATA** widget on the **info** page.

![Device Info](/images/device-demos/casa-system-router/router-device-info.png)

### <a name="interaction"></a> Interacting with Cumulocity IoT

#### <a name="network"></a> Configuring network parameters

You can view and configure the essential mobile network (**WAN**) and local area network (**LAN**) parameters in the **Network** tab as shown in the screenshot below.

The mobile network (**WAN**) parameters shown in the user interface corresponding to the first profile stored in the router. These parameters can be remotely configured directly or via SMS.

For SMS configuring, the router needs to be configured to accept SMS commands. Consult the router’s manual on the relevant parameters for SMS configuration, or use the router’s web user interface. You also need to have an SMS gateway configured with your account. Contact [support](https://empower.softwareag.com/ContactSupport/) for setting up an SMS gateway. For more information on Device Shell, see Device management -> [Shell](/users-guide/device-management/#shell) in the User guide.

> **Info:** When you configure a wrong APN settings, the device will lose mobile network connection and can only be managed by limited SMS functionality.

![Network Parameters](/images/device-demos/casa-system-router/router-network-info.png)

LAN and DHCP parameters can be directly configured from Cumulocity IoT as well.

#### <a name="manage"></a> Managing software and firmware

The installed software and firmware on the router can be remotely managed using the standard software and firmware management feature from Cumulocity IoT. For details, see Device management -> [Managing device firmware and software](/users-guide/device-management/#software-repo) in the User guide.

Software packages need to be in [ipkg](http://en.wikipedia.org/wiki/Ipkg) format and follow the naming convention "**&#60;package&#62;&#95;&#60;version&#62;&#95;&#60;arch&#62;.ipk**”. Version numbers including letters are not supported. All package management methods (install, upgrade, downgrade, removal) are supported through the router’s package manager. If software packages have dependencies, make sure to install these first.

> **Info:** The package **cumulocity-ntc-agent&#95;&#60;version&#62;&#95;arm.ipk** represents the NetComm agent. It is prohibited to remove this package from Cumulocity IoT.

Firmware can be uploaded and installed on the router as well. To successfully upgrade the firmware, make sure that the target firmware includes the agent package. Firmware files need to follow Netcomm’s naming convention (”**&#60;name&#62;\_&#60;version&#62;.cdi**”).

> **Info:** If the agent package is not included in the target firmware, the agent will not start after the installation.

![Software and Firmware info](/images/device-demos/casa-system-router/router-software-menu.png)

#### <a name="system"></a> Monitoring system resource

You can record statistics of the router’s system resources usage for troubleshooting purposes. The following statistics are available:
* CPU load in percent.
* Used and total memory in MB.
* Uplink and downlink traffic over all interfaces in KB/sec.

By default, collection of resource statistics is disabled. They can be enabled by setting a non-zero collecting interval in the **System resources measurements** entry of the [router user interface](#configure) or using [Device Shell](#device-shell):

```shell
set service.cumulocity.system_resources.interval=<interval>
```

Collected data can be accessed in the **Measurements** tab or in a dashboard.

#### <a name="cellular"></a> Monitoring cellular signal strength

You can also record statistics of the router’s cellular signal strength.

By default, collection of signal strength statistics is disabled. They can be enabled by setting a non-zero collecting interval in the **Connection signal measurements** entry of the [router user interface](#configure) or using [Device Shell](#device-shell):

```shell
set service.cumulocity.signal.interval=<interval>
```

Collected data can be accessed in the **Measurements** tab or in a dashboard.

#### <a name="gps"></a> Using GPS

To locate or trace the router, connect a GPS antenna to the router and enable its GPS functionality. Then [configure](#configure) the frequency of data collection by setting the **GPS position update interval** and/or the **GPS position event** to a non-zero value. **GPS position update interval** defines how often the current location of the router is updated. **GPS position event** defines how often the current location is stored as location update event for tracing.

Similarly, you can set these parameters from Device Shell:

```shell
set service.cumulocity.gps.update_interval=<update interval>
set service.cumulocity.gps.interval=<event interval>
```

After you applied the configuration changes, wait a moment for the first GPS data to arrive, then refresh the page. A **Location** and a **Tracking** tab should now appear. See Device management -> [Location](/users-guide/device-management#location) and Device management -> [Tracking](/users-guide/device-management#tracking) sections in the User guide for more information.

#### <a name="gpio"></a> Using GPIO

The following GPIO functionalities are supported:

* Send the voltage of an analog input as measurements to the Cumulocity IoT platform.
* Raise or clear alarms when a digital input turns 1 or 0, respectively.
* Write to a digital output remotely from the Cumulocity IoT platform.

Consult the documentation of your router for more information about its specific IO settings. The available functionalities may vary between different device models. For example, the NTC-220 supports GPIO pins 1-3.

##### Analog input

To regularly poll the input voltage of a GPIO pin and send it to the Cumulocity IoT platform, set [**GPIO analog measurements**](#configure) to a non-zero value. Alternatively, use Device Shell:

```shell
set service.cumulocity.gpio.interval=<interval>
```

Then, you need to specify the port and turn on the notification by using Device Shell:

```shell
set service.cumulocity.gpio.<port>.notify=measurement
```

&#60;port&#62; is the numbering of the GPIO pin. For NTC-220, <port> can be 1, 2 or 3. The Visualized result is then visible in **Measurements**.

##### Digital input
You can raise alarms from digital inputs. These can be configured using the router user interface or through Device Shell. The format is

```shell
set service.cumulocity.gpio.<port>.notify=alarm
set service.cumulocity.gpio.<port>.debounce.interval=<SECONDS>
set service.cumulocity.gpio.<port>.alarm.text=<ALARM_TEXT>
set service.cumulocity.gpio.<port>.alarm.severity=<severity>
```

Possible values for the notify parameter are:

* off: The pin is disabled for any notification.
* alarm: An alarm is raised when the pin reading is **high**.
* measurement: Analog reading of voltage will be sent as measurement.

The debounce interval reduces electrical noise from the GPIO inputs: The shorter the interval, the noisier the value but the faster the reaction to signal changes. The default debounce interval is 10 mins.

You can override the default alarm text by setting the **text** property. By default, this value is empty and *gpio&#60;N&#62; is active* is used as text, where &#60;N&#62; is the numbering of a GPIO pin.

Valid alarm severities are:

* WARNING
* MINOR
* MAJOR [default]
* CRITICAL

The inputs are checked every second for changes.

##### Digital output

Digital outputs can be controlled using the **Relay array** widget, see below in the screenshot. The green icon means “closed (low value)” and the red icon means “opened (high value)”. The numbering of the GPIO pins are the same as listed on the router. For the NTC-220 model, three GPIO pins can be set.

![Relay Array Widget](/images/device-demos/casa-system-router/router-relay-array.png)

#### <a name="parameters"></a> Configuration Management

You can retrieve, modify and save user configuration data. To do this, navigate to Device management -> [Configuration](/users-guide/device-management/#config) tab of the router, click on the **Reload** button in the **Configuration** widget to request configuration data. It will take a few seconds to download. After the configuration data has arrived, you will see a list of parameters and their corresponding values. You can then make changes to the configuration and save them back to the device.

You can also request a configuration snapshot from the device and later apply the configuration snapshot to other devices.

There is also RDB snapshot support, which is a super-set of the configurations. This is mainly for the troubleshooting purpose.

![Configuration](/images/device-demos/casa-system-router/router-relay-configuration-widget.png)

#### <a name="device-shell"></a> Device shell

With Device Shell, you can read and write individual configuration parameters from the device, as well as execute diagnostic commands. For more information, refer to Device management -> [Shell](/users-guide/device-management/#shell). Consult the Netcomm documentation for valid parameters and diagnostic commands. The general format is:

* “get &#60;parameter&#62;” to read a parameter from the device.
* “set &#60;parameter&#62;=&#60;value&#62;” to write a parameter to the device.
* “execute &#60;command&#62;” to execute a diagnostic command on the device.

Multiple get, set and execute commands can be sent using a semicolon as a separator.  
Click the **Get Predefined** link to access frequently used parameters and commands.

![Device Shell](/images/device-demos/casa-system-router/router-device-shell.png)

#### <a name="notification"></a> Event notifications

The router reports certain system events as notifications, which can be forwarded to the Cumulocity IoT as alarms. The system events help, for example, in troubleshooting mobile network issues. For more information on the different types of events and how to forward them, consult the Netcomm documentation (for example, Section **Event notification** in the NTC-220 [User guide](https://support.netcommwireless.com/api/Media/Document/f8d82c69-060e-43d2-9a2a-689f018d207c?Product=NTC-220-User-Guide.pdf)). To forward an event as an alarm, set up a UDP destination sending to Port 1331 on localhost (see the **Destination configuration** section in the NTC-200 [User guide](https://support.netcommwireless.com/api/Media/Document/f8d82c69-060e-43d2-9a2a-689f018d207c?Product=NTC-220-User-Guide.pdf)).

![Notification](/images/device-demos/casa-system-router/router-alarms.png)

#### <a name="modbus"></a> Cloud Fieldbus

You can connect Modbus-TCP and Modbus-RTU slaves to the router via LAN and serial port, respectively, and manage them remotely in Cumulocity IoT. To do so, you need to

For Modbus-TCP setup:
* Establish LAN connectivity. Use the [**Network**](#network) tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the Modbus-TCP slaves.
* Configure the Modbus-TCP port in the Cumulocity IoT menu on NetComm device’s web UI if you are using a different port than the default 502, see [**Configuring the router**](#configure).

For Modbus-RTU setup:
* Connect the router and your Modbus-RTU slaves via a serial cable.
* Configure serial port mode via device shell:

```shell
set serial.iomode.default=<mode>
```

where `<mode>` can be rs232, rs422 or rs485. You may need to reboot the device after changing the mode.
* Make sure to turn off all serial port related functionalities on the router, e.g. PADD, Data Stream Manager. Otherwise, the Agent will conflict for accessing the serial port.

> **Info:** The default serial port `/dev/ttyO1` is for the Model NTC-220 series. For another model, it might use a different port. For example, the Model NTC-6200 uses `/dev/ttyAPP4` instead. It should work with no further configuration. In case it’s empty or you need to configure a different port, it can be configured in the Cumulocity IoT menu in devices’ web UI, see [Configuring the router](#configure).
>
>Some USB to serial adapters have echo mode enabled by default, this can render the Modbus communication stop working completely. If you have one of these adapters, consult the adapter’s manufacturer about how to disable it.s

Then:
* Subscribe your account to the Cloud Fieldbus feature by contacting [support](https://empower.softwareag.com/ContactSupport/).
* Configure Modbus communication as described in User guide -> [Cloud fieldbus](/users-guide/optional-services/#cloud-fieldbus).
* Enable or disable write permission by setting the “Modbus read only” property in the Cumulocity IoT menu on the device’s web UI, see [Configuring the router](#configure). Set it to 0 means allow write permission, while 1 means disallow Modbus write permission.

#### <a name="logs"></a> Log viewer

You can download and view the logs from the device. Log files can be quite big, you can set filtering criteria to get only what is interesting for you.

From right you can set a date range (date from and date to), you can select log file. Next you can search the text, and only matching lines are retrieved from the device. You can also limit matched lines.

Received logs are visible in the list below. You can click on it to show log file content at the bottom of the page. Last requested log is opened automatically. For more information about logs, see User-guide -> [Logs](/users-guide/device-management/#logs).

![Logs](/images/device-demos/casa-system-router/router-log.png)

#### <a name="vnc"></a> VNC remote access

If you have a device which supports VNC, Telnet or SSH remote access, it’s now possible to manage your device via Cumulocity IoT.

As shown in the screenshot, you can add your VNC, Telnet or SSH servers as an endpoint with appropriate IP and port in the **Remote Access** tab of a particular device in the Device Management application. If you click **Connect**, the display content of your remote server will be shown in a new browser window.

![Remote Access](/images/device-demos/casa-system-router/router-remote-access.png)

#### <a name="mqtt"></a> MQTT

Now the agent supports the MQTT protocol. MQTT is set as a default protocol. However, in case you need to manually configure MQTT enablement, run following command via “Device Shell”:

```shell
set service.cumulocity.mqtt.enable = <0|1>
```

to either disable or enable MQTT communication. The configured server URL remains the same. For example, http://mqtt.cumulocity.com if you want to use plain MQTT, or https://mqtt.cumulocity.com if you want secure MQTT + TLS.

To configure the MQTT keepalive interval (default to 240 seconds):

```shell
set service.cumulocity.mqtt.keepalive = <seconds>
```
to change the keepalive interval.

> **Info:** Changing the keepalive interval only has effect after the next reboot.

### <a name="troubleshooting"></a> Troubleshooting

#### Known limitations and bugs

* The time on the router and on the server may not be fully in sync, hence you may see updates (e.g., alarms, events) that occur **in the future**. This is also the reason that it may take a while until the **Location** and the **Measurement** tab appear for new devices.
* Only WAN profile 1 is supported. To set APNs, the **auto APN** mode on the device needs to be disabled.
* Under some circumstances, a command sent to the device may be lost while switching between SMS and IP mode.
* After the new firmware is installed, all Cumulocity IoT Agent packages (Agent Software, CA certificate bundle and VNC Proxy) will be deleted. There is a need to reinstall all again.

### <a name="release-history"></a> Release history

#### Release notes for NetComm Agent 1.0.0

This document describes the Cumulocity-Netcomm-Agent package for the [casa systems NTC-220 series](https://support.netcommwireless.com/products/NTC-220%20Series) router.

> **Info:** If you have either [NetComm Wireless NTC-6200](https://support.netcommwireless.com/products/NTC-6200%20Series) or [NetComm Wireless NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series), you must get our old Netcomm Agent version 4.2.3 or older. Contact [support](https://empower.softwareag.com/ContactSupport/) or refer to the other guide to get packages.

> **Important:** Cumulocity-Netcomm-Agent is only supported on [casa systems NTC-220 series](https://support.netcommwireless.com/products/NTC-220%20Series) devices. [NetComm Wireless NTC-6200](https://support.netcommwireless.com/products/NTC-6200%20Series) and [NetComm Wireless NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series) are only supported by another agent.

#### 1.0.0

[Agent Software](http://resources.cumulocity.com/ntc-220/cumulocity-ntc-agent_1.0.0_arm-signed.ipk). Changes from another agent for NTC-6200 and NTC-140W:
* Started support for NTC-220 series and stopped support for NTC-6200 and NTC-140W.
* Merge all softwares into one package.
* Fixed Netcomm-WebUI to support NTC-220 series
* Fixed Event Notification to adjust the event notification format change on NTC-220 series
* Improve the connection stability when the size of message queue is over MQTT maximum payload size (<16KB)
* Fixed to load reporter buffer capacity always from RDB.
* Changed that configuration is always sent via HTTP to avoid the violation of MQTT maximum payload size
* Fixed websocket frame initialization issue and improve the stability of Cloud Remote Access via SSH.
* Fixed error handling for logging wrong error messages when connection closed in Cloud Remote Access.
* Updated CA certificate bundle to 20200101 version.

#### Release notes for NetComm Agent 4.0

This document describes the Cumulocity agent package for the [NetComm Wireless NTC-6200](https://support.netcommwireless.com/products/NTC-6200%20Series) and the [NetComm Wireless NTC-140W router](https://support.netcommwireless.com/products/NTC-140W%20Series).

> **Important:** The agent was tested on an NTC-6200 device with firmware version 2.0.36.10. For remote configuration of WAN parameters, you need a SIM card with SMS function. Currently, GSMA OneAPI (e.g., on Ericsson DCP), OpenIT and Jasper Wireless are supported APIs for SMS providers. Please contact [support](https://empower.softwareag.com/ContactSupport/) for connecting to an SMS provider.

> **Info:**  Agent version 3.2.0 and up require backend minimum version 7.20 for multip-XID support.
>
>Agent versions 2.3 and up require Cloud Fieldbus 4. They are not compatible with earlier versions of the Cloud Fieldbus application.
>
>Agent versions 2.1.10 and up require at least Cumulocity 6.10 to support the new log viewer.

#### 4.2.3

[Agent Software](http://resources.cumulocity.com/ntc/smartrest-agent_4.2.3_arm.ipk), [CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20190515.0_arm.ipk), [VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_2.0_arm.ipk). Changes:

+ Add support for modbus <sup>32</sup>/<sub>64</sub> bit registers, and little/big endianness.
+ Correctly handling special characters in software names so that software upgrade with special characters in their names will fail with a clear reason.
+ Correctly parsing timestamps with UTC “Z” timezone suffix when handling c8y_LogFileRequest operation.
+ Correctly calculate memory usage to fix a bogus memory leak issue.
+ Fixed websocket frame packing issue so that Cloud Remote Access works correctly for SSH protocol.
+ Updated CA certificate bundle to 20190515 version.

#### 4.0.2

[Agent Software](http://resources.cumulocity.com/ntc/smartrest-agent_4.0.2_arm.ipk), [CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20170118.0_arm.ipk), [VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_1.0_arm.ipk). Changes:

+ Agent is started/stopped directly after activating/deactivating it in Netcomm-WebUI.
+ Agent is not started after device boot, when it was deactivated in Netcomm-WebUI.
+ Created ntcagent folder is removed, when the Agent is completly de-installed.
+ Temporary created files are deleted after usage.

#### 4.0.1

[Agent Software](http://resources.cumulocity.com/ntc/smartrest-agent_4.0.1_arm.ipk), [CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20170118.0_arm.ipk), [VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_1.0_arm.ipk). Changes:

+ Agent waits after device boot for NTP synchronization before proceeding.
+ Supports now timer intervals smaller than 200 ms.

#### 4.0.0

[Agent Software](http://resources.cumulocity.com/ntc/smartrest-agent_4.0.0_arm.ipk), [CA certificate bundle](http://resources.cumulocity.com/ntc/ca-cumulocity_20170118.0_arm.ipk), [VNC Proxy](http://resources.cumulocity.com/ntc/vncproxy_1.0_arm.ipk). Changes:

+ Add support for server certificate verification.
+ Add MQTT support as an alternative protocol alongside HTTP.
+ Support for VNC remote access.

#### 3.2.2

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.2.2_arm.ipk). Changes:

+ signal: report RSRP signal strength instead of RSCP when using 4G network.
+ integrate: use RDB uboot.hw_id as name when creating device.
+ modbus: disable Modbus-RTU support when model is NTC-140W.
+ modbus/mbbase: write modbus response values to agent log for easier troubleshooting.
+ [fix]modbus: fix regression bug introduced in 3.2.0 that reading is offset by 1 when data model doesn’t start from number 1.

#### 3.2.0

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.2.0_arm.ipk). Changes:

+ ntcagent: Use file backed buffering for sending measurement, events, etc.
+ [fix]Modbus: write partial holding register crash in 3.1.6.
+ Query pending operations at boot time.
+ [fix]Makefile: separate LDLIBS for smsagent so smsagent build correctly and without unnecessary dependencies.
+ [fix]ntcagent: remove trailing slash in server URL so URL with trailing slash also works.

#### 3.1.6

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.1.6_arm.ipk). Changes:

+ [fix]Modbus: read per contiguous block.
+ [fix]lua/config: save configuration doesn’t have effect.
+ ntcagent/postinst: set default serial port to /dev/ttyAPP4.
+ Modbus: add mbmanager so change serial configuration no longer requires a reboot.
+ [fix]lua/net: filter out deliveryType=SMS for configuring WAN operation.
+ Modbus: shorten modbus-TCP timeout from 50 sec to 10 sec.
+ [fix]Modbus: transmit rate not working because msg composing improperly.
+ [fix]Modbus: set byte timeout to 1 sec for getting slow Modbus-RTU to work.
+ [fix]lua/gps: use correct format DDDMM.MMmmm instead of DDMM.SSsss for GPS position.

#### 3.1.2

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.1.2_arm.ipk). Changes:

+ *fix*: fragile start-up process when send fails after register templates.
+ *fix*: Fixed one-hour off issue because of DST in logviewer.
+ Raise alarm when modbus slave reading fails.
+ *fix*: in logview get last N lines instead of first N lines in the given timeframe.
+ Use decimal instead of hex for LAC for OpenCellID to work.
+ Add RDB dump support.

#### 3.0.0

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_3.0.0_arm.ipk). Changes:

+ Add measurement poll support.
+ mplement modbus-RTU support for Cloud Fieldbus 4.
+ Add timestamp to description of uploaded configuration snapshot.
+ Report GPS fix on boot.
+ Add support for serial number in registration.
+ Disallow removing agent from Cumulocity Software Management.

#### 2.3.6

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.3.6_arm.ipk). Changes:

+ fix: not respect multiplier, divisor and decimalPlaces definition in FieldBus 4 when sending event.
+ string update: use generic IoT tokens instead of Cumulocity.

#### 2.3.5

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.3.5_arm.ipk). Changes:

+ Full support for fieldbus 4.
+ fix: Unintentionally include device credential when uploading configuration.
+ fix: Device shell plugin for operations that restart agent/device.
+ fix Unexpectedly restarting of the agent when set log level via device shell.
+ fix: Duplicate events and incorrect status updates.
+ fix: Operation of set register for first holding register hangs.

#### 2.2.6
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.2.6_arm.ipk). Changes:

+ GPIO alarm status is updated on device start.
+ GPIO debouncing fixes.
+ Performance and reliability improvements for operations.
+ Device Shell robustness improvements.
+ Modbus stability improvements and corrections.
+ Log rotation and log quota setting (through RDB parameter service.cumulocity.log.quota).
+ Remote log viewing of ipsec.log.
+ Log API for Lua.

#### 2.1.10
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.10_arm.ipk). Changes:

+ Crash fix.
+ Configuration file tar bar and configuration text save fixes.
+ Log viewer.
+ Support for breakpad (crash tool).
+ Detect wrong plug-in name in configuration.
+ Removed timeouts in software manager.
+ Remove agent log file after install new version.

#### 2.1.8
[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.8_arm.ipk). Changes:

+ Save MSISDN number fix.
+ Memory leak fix.
+ Configuration file tar bar.

#### 2.1.6

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.6_arm.ipk). Changes:

+ Configuration snapshot support (requires Cumulocity 6.9).
+ Sending event notifications as alarms.

#### 2.1.4

[Download link](http://resources.cumulocity.com/ntc/smartrest-agent_2.1.4_arm.ipk). Changes:

+ Operator name in “Info” page is now correctly displayed.
+ Clear credentials button in web UI works now correctly.

---
weight: 50
title: Casa Systems (NetComm) router
layout: bundle
---

The Casa Systems (NetComm) router is a robust industrial IoT router designed for forwarding data packets between IoT devices within a network, ensuring reliable and secure connectivity.

### Introduction

This tutorial describes how to set up and configure the Casa Systems (NetComm) routers of the [NTC-220](https://support.netcommwireless.com/products/NTC-220%20Series) series using the {{< product-c8y-iot >}} NetComm Agent package.

{{< c8y-admon-info >}}
For [NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series), and [NTC-6200](https://support.netcommwireless.com/products/NTC-6200-01), refer to the [NetComm section](https://{{< domain-c8y >}}/guides/10.4.6/devices/netcommwireless/) in the Devices guide of the {{< product-c8y-iot >}} 10.4.6 documentation.
{{< /c8y-admon-info >}}

{{< c8y-admon-info >}}
The developer documentation is available at [https://github.com/SoftwareAG/cumulocity-agents-netcomm/blob/master/doc/devguide.md](https://github.com/SoftwareAG/cumulocity-agents-netcomm/blob/master/doc/devguide.md).
{{< /c8y-admon-info >}}

#### Overview

The following sections demonstrate how to use a Casa Systems (NetComm) router with the {{< product-c8y-iot >}} platform.

|SECTION|CONTENT|
|:---|:---|
|[Prerequisites](#prerequisites)|Description of the [system requirements](#sys-req) and [supported routers](#support-router).
|[Setting up and registering the device](#setup)|How to [install](#install-agent) the agent, [configure](#configure) the router and [connect](#connect) the router to your {{< product-c8y-iot >}} account.
|[Remote monitoring and control of industrial assets](#monitoring-and-control)|How to use [Cloud Fieldbus](#modbus), [Cloud Remote Access](#remote-access) and the [GPIO](#gpio) pins control feature to remotely monitor and control industrial assets.
|[Managing devices](#device-management)|Description of the supported device management functionalities.
|[Troubleshooting](#troubleshooting)|List of known bugs and limitations.
|[Release notes](#release-history)|Release notes for the {{< product-c8y-iot >}} NetComm Agent.

#### Supported functionality

The {{< product-c8y-iot >}} NetComm Agent supports the following Industrial IoT functionality to remotely monitor and control industrial assets:

* Modbus-RTU and Modbus-TCP support using [Cloud Fieldbus](#modbus).
* [Cloud Remote Access](#remote-access) for remotely accessing assets via VNC/Telnet/SSH protocols.
* Remote [GPIO](#gpio) reading and controlling.

For details refer to [Remote monitoring and control of industrial assets](#monitoring-and-control).

Moreover, the {{< product-c8y-iot >}} NetComm Agent offers a large variety of device management features:

* Configuring WAN, LAN and DHCP [networks](#network).
*  Updating [software and firmware](#software-and-firmware) remotely.
* Collecting metrics like [system resources](#system-resources) and [cellular signal strength](#cellular) as measurements.
* Updating and tracking [GPS](#gps) locations.
* Getting and applying router's [configuration snapshots](#snapshots).
* Sending router's [event notifications](#notification) as alarms.
* Remotely executing commands via the [device shell](#device-shell) interface.
* Retrieving system, ipsec and agent [log files](#logs).

For details refer to [Managing devices](#device-management).

### Prerequisites

<a name="sys-req">
#### System requirements

The agent was tested on an NTC-221 router with firmware version 2.0.84.0 and 2.0.89.0 and an NTC-222 router with firmware version 2.0.89.0.

For remote configuration of WAN parameters, you need a SIM card with SMS function. To configure the router remotely with SMS, a Connectivity management platform must be configured inside your tenant. Refer to [Device Management > Connectivity](/users-guide/device-management/#connectivity) in the *User guide* for details.

### Setting up and registering the device

<a name="install-agent"></a>
#### To install the agent

1. Download the agent software, which includes the CA root certificate bundle, Cloud Remote Access software, and our package public key. For the link see the table below.
2. Log in to the web user interface of the NTC-200 series.
3. Navigate to the **System** menu. Click **System configuration** > **Firmware signature**.
4. Turn **Enable firmware signature check** to OFF.

    {{< c8y-admon-info >}}
If you don´t turn the signature check off, the software installation will fail. After you have installed the agent package, the signature check will automatically be turned on again. In case of firmware version 2.0.84.0 you can ignore this step as this version does not support the firmware signature.
    {{< /c8y-admon-info >}}

5. Navigate to the **System** menu. Click **System configuration** > **Upload** > **Choose a file** and select the downloaded software. Click **Upload** to upload the software to the router.
6. Click the **Install** button for the uploaded software which you want to install.

The routers of the NTC-200 series will reboot automatically after the installation.

The agent will automatically start and the router can then be [registered with {{< product-c8y-iot >}}](#register-device). Subsequent upgrades or downgrades can be performed remotely via the agent's software management feature, or locally via the router's web user interface.

##### NTC-200 series agent software

|Version|Download|GA release version|
|:---|:---|:---|
|1.0.0|[download](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.0_arm-signed.ipk)|10.6.0|
|1.0.2|[download](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.2_arm-signed.ipk)|10.6.0|
|1.0.3|[download](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.0.3_arm-signed.ipk)|10.6.0|
|1.1.0|[download](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.1.0_arm-signed.ipk)|10.6.6 and higher|
|1.1.1|[download](http://resources.cumulocity.com/ntc/cumulocity-ntc-agent_1.1.1_arm-signed.ipk)|10.6.6 and higher|


<a name="register-device"></a>
#### Registering the router as a device to the platform

<a name="configure"></a>
##### To configure the router

The support for {{< product-c8y-iot >}} can be configured through the router's web user interface. To do so, log in to the user interface as described in the router's manual. Navigate to the **System** tab and click the **Internet of Things** menu item.

![Web Interface](/images/device-demos/casa-system-router/router-web-interface.png)

Verify that the **Agent** toggle is set to **ON**.

The URL in the **Server** field must point to the {{< product-c8y-iot >}} instance that you want to connect to. The URL must be of the format `https://<my-tenant>.<instance-url>`, where &lt;instance-url&gt; refers to the URL of the {{< product-c8y-iot >}} instance, for example `https://mqtt.{{< domain-c8y >}}/`.

Optionally, you can activate data collecting for the following functionalities:

* GPIO analog measurements: Send the voltages of the analog inputs [seconds].
* GPS position interval: Update the current GPS position [seconds].
* GPS position event: Send a location trace of the GPS position [seconds].
* System resources measurements: Get information about CPU usage, memory usage and network traffic [seconds].
* Connection signal measurements: Get information about cellular signal strength [seconds].

All these options are disabled by default (the interval is set to 0).

The web interface also shows the status of the connection to {{< product-c8y-iot >}}:

* Checking network connection: Waiting for mobile network connection at boot.
* Bootstrapping: Load credentials or request credentials from {{< product-c8y-iot >}}.
* Integrating: Connecting to {{< product-c8y-iot >}}.
* Loading plugins: Loading Lua plugins.
* Connected: The agent is successfully connected to {{< product-c8y-iot >}}.
* No server URL: No or invalid server URL.
* Bootstrap failed: Cannot get credentials from {{< product-c8y-iot >}}.
* Integration failed: Cannot connect to {{< product-c8y-iot >}}.
* Create threads failed: Not able to start reporter or device push.

<a name="connect"></a>
##### To connect the router

To register your NetComm router to {{< product-c8y-iot >}}, you need the router's serial number as device ID. The serial number is printed on the back side of the router as shown below. Alternatively, it is also available in the router's web user interface. Navigate to **System** > **Internet of Things** and view the **Device ID** field.

![Serial Number](/images/device-demos/casa-system-router/router-serial-number.png)

You can find detailed information on the registration process in the *User guide*. Follow the description on how to connect a device manually in [Device Management > Connecting devices](/users-guide/device-management/#device-registration-manually).

After clicking the **Accept** button on the {{< product-c8y-iot >}} platform, navigate to **All devices**. The router should appear here after registration. The default name of a router is "&#60;model&#62; (S/N &#60;serial number&#62;)", where &#60;model&#62; is the device model name. For example, the above router would appear as "NTC-221 (S/N 191611192800580)".

Click on the router to view the detailed information and to access the functionality described in the remaining sections of this document. In order to distinguish a registered router from other devices in the listing, you can change the router's name on the **Info** tab, which also displays basic information such as serial number of the router and SIM card data on the "Device data" widget. After clicking the edit icon at the bottom of the widget and changing the name, remember to click **Save** at the bottom of the "Device data" widget on the **Info** page.

![Device Info](/images/device-demos/casa-system-router/router-device-info.png)

### Remote monitoring and control of industrial assets

<a name="gpio"></a>
#### Using GPIO

The following GPIO functionalities are supported:

* Send the voltage of an analog input as measurements to the {{< product-c8y-iot >}} platform.
* Raise or clear alarms when a digital input turns 1 or 0, respectively.
* Write to a digital output remotely from the {{< product-c8y-iot >}} platform.

Consult the documentation of your router for more information about its specific IO settings. The available functionalities may vary between different router models. For example, the NTC-220 supports GPIO pins 1-3.

##### Analog input

To regularly poll the input voltage of a GPIO pin and send it to the {{< product-c8y-iot >}} platform, set [**GPIO analog measurements**](#configure) to a non-zero value. Alternatively, use the [device shell](#device-shell).

```shell
set service.cumulocity.gpio.interval=<seconds>
```

Then, you must specify the port and turn on the notification by using the [device shell](#device-shell).

```shell
set service.cumulocity.gpio.<port>.notify=measurement
```

&#60;port&#62; is the numbering of the GPIO pin. For NTC-220, <port> can be 1, 2 or 3. The visualized result is then visible in the **Measurements** tab.

##### Digital input
You can raise alarms from digital inputs. These can be configured using the router user interface or through the [device shell](#device-shell).

```shell
set service.cumulocity.gpio.<port>.notify=alarm
set service.cumulocity.gpio.<port>.debounce.interval=<seconds>
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

Digital outputs can be controlled using the "Relay array control" widget, see the screenshot below. The green icon means "closed (low value)" and the red icon means "opened (high value)". The numbering of the GPIO pins are the same as listed on the router. For the NTC-220 model, three GPIO pins can be set.

![Relay Array Widget](/images/device-demos/casa-system-router/router-relay-array.png)

<a name="modbus"></a>
#### Cloud Fieldbus

You can connect Modbus-TCP and Modbus-RTU clients to the router via LAN and serial port, respectively, and manage them remotely in {{< product-c8y-iot >}}. To do so, you must follow these steps.

For Modbus-TCP setup:

* Establish LAN connectivity. Use the [**Network**](#network) tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the Modbus-TCP clients.
* Configure the Modbus-TCP port in the {{< product-c8y-iot >}} menu in the web UI of the router if you are using a different port than the default 502, see [Configuring the router](#configure).

For Modbus-RTU setup:

* Connect the router and your Modbus-RTU clients via a serial cable.
* Configure the serial port mode via the device shell:

```shell
set serial.iomode.default=<mode>
```

where `<mode>` can be rs232, rs422 or rs485. You may need to reboot the router after changing the mode.

* Make sure to turn off all serial port related functionalities on the router, such as PADD and Data Stream Manager. Otherwise, the agent will conflict for accessing the serial port.

{{< c8y-admon-info >}}
The default serial port `/dev/ttyO1` refers to the Model NTC-220 series. Other models might use different ports. For example, the Model NTC-6200 uses `/dev/ttyAPP4` instead. It should work with no further configuration. In case it's empty or you need to configure a different port, it can be configured in the {{< product-c8y-iot >}} menu in the web UI of the router, see [Configuring the router](#configure).

Some USB to serial adapters have echo mode enabled by default.This may result in stopping the Modbus communication completely. If you have one of these adapters, consult the adapter's manufacturer about how to disable it.
{{< /c8y-admon-info >}}

Then:

* Subscribe your account to the Cloud Fieldbus feature by contacting [product support](/welcome/contacting-support/).
* Configure the Modbus communication as described in [Cloud Fieldbus](/protocol-integration/cloud-fieldbus/#configuring-fieldbus) in the *Protocol integration guide*.
* Enable or disable write permission by setting the "Modbus read only" property in the {{< product-c8y-iot >}} menu in the web UI of the router, see [Configuring the router](#configure). Set it to 0 to allow write permission and 1 to disallow Modbus write permission.

<a name="remote-access"></a>
#### Cloud Remote Access

If your device supports VNC, Telnet or SSH remote access, you can remotely manage it via {{< product-c8y-iot >}}.

As shown in the screenshot, you can add your VNC, Telnet or SSH servers as an endpoint with appropriate IP and port in the **Remote Access** tab of a particular device in the Device Management application. If you click **Connect**, the display content of your remote server will be shown in a new browser window.

![Remote Access](/images/device-demos/casa-system-router/router-remote-access.png)

For details on the remote access functionality, refer to [Cloud Remote Access](/cloud-remote-access/cra-general-aspects).

### Managing devices

<a name="network"></a>
#### Configuring network parameters

You can view and configure the essential mobile network (**WAN**) and local area network (**LAN**) parameters in the **Network** tab as shown in the screenshot below.

The mobile network (**WAN**) parameters shown in the user interface corresponds to the first profile stored in the router. These parameters can be remotely configured directly or via SMS.

For SMS configuration, the router needs to be configured to accept SMS commands. Consult the router's manual on the relevant parameters for SMS configuration, or use the router's web user interface. Moreover, a Connectivity management platform must be configured inside your tenant. Refer to [Device Management > Connectivity](/users-guide/device-management/#connectivity) in the *User guide* for details.

For more information on the **Network** tab, see [Device Management > Device details > Network](/users-guide/device-management/#network) in the *User guide*.

{{< c8y-admon-info >}}
If you configure the wrong APN settings, the device will lose mobile network connection and can only be managed by limited SMS functionality.
{{< /c8y-admon-info >}}

![Network Parameters](/images/device-demos/casa-system-router/router-network-info.png)

LAN and DHCP parameters can be directly configured from {{< product-c8y-iot >}} as well.

<a name="software-and-firmware"></a>
#### Managing software and firmware

The installed software and firmware on the router can be remotely managed using the standard software and firmware management feature from {{< product-c8y-iot >}}. For details, see [Device Management > Managing device data](/users-guide/device-management/#managing-device-data) in the *User guide*.

Software packages must be in [ipkg](http://en.wikipedia.org/wiki/Ipkg) format and follow the naming convention *&#60;package&#62;&#95;&#60;version&#62;&#95;&#60;arch&#62;.ipk*. Version numbers including letters are not supported. All package management methods (install, upgrade, downgrade, removal) are supported through the router's package manager. If software packages have dependencies, make sure to install these first.

{{< c8y-admon-info >}}
The package *cumulocity-ntc-agent&#95;&#60;version&#62;&#95;arm.ipk* represents the NetComm Agent. It is prohibited to remove this package from {{< product-c8y-iot >}}.
{{< /c8y-admon-info >}}

Firmware can be uploaded and installed on the router as well. To successfully upgrade the firmware, make sure that the target firmware includes the agent package. Firmware files must follow Netcomm's naming convention (*&#60;name&#62;\_&#60;version&#62;.cdi*).

{{< c8y-admon-info >}}
If the agent package is not included in the target firmware, the agent will not start after the installation.
{{< /c8y-admon-info >}}

![Software and Firmware info](/images/device-demos/casa-system-router/router-software-menu.png)

<a name="system-resources"></a>
#### Monitoring system resources

You can record statistics of the router's system resources usage for troubleshooting purposes. The following statistics are available:

* CPU load in percent.
* Used and total memory in MB.
* Uplink and downlink traffic over all interfaces in KB/sec.

By default, the collection of resource statistics is disabled. It can be enabled by setting a non-zero collecting interval in the **System resources measurements** entry of the [web user interface of the router](#configure) or using the [device shell](#device-shell).

```shell
set service.cumulocity.system_resources.interval=<seconds>
```

Collected data can be accessed in the **Measurements** tab or in a dashboard.

<a name="cellular"></a>
#### Monitoring cellular signal strength

You can also record statistics of the router's cellular signal strength.

By default, the collection of signal strength statistics is disabled. They can be enabled by setting a non-zero collecting interval in the **Connection signal measurements** entry of the [web user interface of the router](#configure) or using the [device shell](#device-shell).

```shell
set service.cumulocity.signal.interval=<seconds>
```

Collected data can be accessed in the **Measurements** tab or in a dashboard.

<a name="gps"></a>
#### Using GPS

To locate or trace the router, connect a GPS antenna to the router and enable its GPS functionality. Then [configure](#configure) the frequency of data collection by setting the **GPS position update interval** and/or the **GPS position event** to a non-zero value. **GPS position update interval** defines how often the current location of the router is updated. **GPS position event** defines how often the current location is stored as location update event for tracing.

Similarly, you can set these parameters from the [device shell](#device-shell).

```shell
set service.cumulocity.gps.update_interval=<seconds>
set service.cumulocity.gps.interval=<seconds>
```

After you applied the configuration changes, wait a moment for the first GPS data to arrive, then refresh the page. A **Location** and a **Tracking** tab should now appear. See  [Device Management > Device details](/users-guide/device-management/#device-details) in the *User guide* for details on the  [**Location**](/users-guide/device-management#location) and [**Tracking**](/users-guide/device-management#tracking) tab.

<a name="snapshots"></a>
#### Managing configuration snapshots

You can retrieve, modify and save user configuration data. To do this, navigate to the router in  **Device Management > All devices** and switch to its [**Configuration**](/users-guide/device-management/#config) tab. Click **Reload** in the **Configuration** section to request configuration data. It will take a few seconds to download. After the configuration data has arrived, you will see a list of parameters and their corresponding values. You can then make changes to the configuration and save them back to the device.

You can also request a configuration snapshot from the device and later apply the configuration snapshot to other devices.

There is also RDB snapshot support, which is a super-set of the configurations. This is mainly for troubleshooting purpose.

![Configuration](/images/device-demos/casa-system-router/router-relay-configuration-widget.png)

<a name="device-shell"></a>
#### Using the device shell

With the device shell, you can read and write individual configuration parameters from the device, as well as execute diagnostic commands. For more information, refer to [Device Management > Device details > Device shell](/users-guide/device-management/#shell) in the *User guide*. Consult the NetComm documentation for valid parameters and diagnostic commands. The general format is:

* "get &#60;parameter&#62;" to read a parameter from the device.
* "set &#60;parameter&#62;=&#60;value&#62;" to write a parameter to the device.
* "execute &#60;command&#62;" to execute a diagnostic command on the device.

Multiple get, set and execute commands can be sent using a semicolon as a separator.
Click the **Get Predefined** link to access frequently used parameters and commands.

![Device Shell](/images/device-demos/casa-system-router/router-device-shell.png)

<a name="logs"></a>
#### Viewing log files

You can download and view the logs from the device. Log files can be quite big, but you can set filtering criteria to get only what is interesting for you.

For more information about logs, see [Device Management > Device details > Logs](/users-guide/device-management/#logs) in the *User guide*.

![Logs](/images/device-demos/casa-system-router/router-log.png)

<a name="notification"></a>
#### Event notifications

The router reports certain system events as notifications, which can be forwarded to the {{< product-c8y-iot >}} platform as alarms. The system events help, for example, in troubleshooting mobile network issues. For more information on the different types of events and how to forward them, consult the NetComm documentation (for example the *Event notification* section in the NTC-220 [User guide](https://support.netcommwireless.com/api/Media/Document/f8d82c69-060e-43d2-9a2a-689f018d207c?Product=NTC-220-User-Guide.pdf)). To forward an event as an alarm, set up a UDP destination sending to Port 1331 on localhost (see the *Destination configuration* section in the NTC-200 [User guide](https://support.netcommwireless.com/api/Media/Document/f8d82c69-060e-43d2-9a2a-689f018d207c?Product=NTC-220-User-Guide.pdf)).

![Notification](/images/device-demos/casa-system-router/router-alarms.png)

<a name="mqtt"></a>
#### MQTT protocol support

The agent supports the MQTT protocol. MQTT is set as a default protocol. However, in case you need to manually configure MQTT enablement, run the following command via the [device shell](#device-shell) to either disable or enable MQTT communication.

```shell
set service.cumulocity.mqtt.enable = <0|1>
```

The configured server URL remains the same. For example, `http://mqtt.{{< domain-c8y >}}` if you want to use plain MQTT, or `https://mqtt.{{< domain-c8y >}}` if you want secure MQTT + TLS.

To configure the MQTT keepalive interval (default is 240 seconds), run the following command via the [device shell](#device-shell) to change the keepalive interval.

```shell
set service.cumulocity.mqtt.keepalive = <seconds>
```

{{< c8y-admon-info >}}
Changing the keepalive interval only has effect after the next reboot.
{{< /c8y-admon-info >}}

### Troubleshooting

#### Local logs

You may check the agent log file stored locally in your router when you face any issues.</br> The log file is located in `/opt/ntcagent/ntcagent.log` by default.<br> Also, you may increase the **Log level** in the web [user interface](#configure) of the router. The log level is configured from 1 (min - error) to 8 (max - debug).

#### Known limitations and bugs

* The time on the router and on the server may not be fully in sync, hence you may see updates (for example alarms, events) that occur in the future. This is also the reason why it may take a while until the **Location** and the **Measurement** tab appear for new devices.
* Only WAN profile 1 is supported. To set APNs, the **auto APN** mode on the device needs to be disabled.
* Under some circumstances, a command sent to the device may be lost while switching between SMS and IP mode.

### Release history

#### Release notes for the NetComm Agent

This document describes the {{< product-c8y-iot >}} NetComm Agent package for the [Casa System NTC-220 series](https://support.netcommwireless.com/products/NTC-220%20Series) router.

{{< c8y-admon-info >}}
If you are using either [NetComm Wireless NTC-6200](https://support.netcommwireless.com/products/NTC-6200-01) or [NetComm Wireless NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series), you must use our prior NetComm Agent version 4.2.3 or older. Contact [product support](/welcome/contacting-support/) or refer to the [NetComm](https://{{< domain-c8y >}}/guides/10.4.6/devices/netcommwireless/) section in the Devices guide in the {{< product-c8y-iot >}} 10.4.6 documentation 10.4.6 for information on how to get the packages.
{{< /c8y-admon-info >}}

{{< c8y-admon-important >}}
The {{< product-c8y-iot >}} NetComm Agent releases 1.0.x and 1.1.x are only supported on [Casa Systems NTC-220 series](https://support.netcommwireless.com/products/NTC-220%20Series) routers. [NetComm Wireless NTC-6200](https://support.netcommwireless.com/products/NTC-6200-01) and [NetComm Wireless NTC-140W](https://support.netcommwireless.com/products/NTC-140W%20Series) are only supported by another agent.
{{< /c8y-admon-important >}}

##### 1.0.0

Changes from the previous agent for NTC-6200 and NTC-140W:

* Started support for NTC-220 series and stopped support for NTC-6200 and NTC-140W.
* Merged all software into one package.
* Fixed Netcomm Web UI to support NTC-220 series.
* Fixed event notification to adjust the event notification format change on NTC-220 series.
* Improved the connection stability when the size of message queue is over MQTT maximum payload size (<16KB).
* Fixed to load reporter buffer capacity always from RDB.
* Changed that configuration is always sent via HTTP to avoid the violation of MQTT maximum payload size.
* Fixed websocket frame initialization issue and improved the stability of Cloud Remote Access via SSH.
* Fixed error handling for logging wrong error messages when the connection was closed in Cloud Remote Access.
* Updated CA certificate bundle to 20200101 version.


##### 1.0.2

* Fixed the issue in which the agent updates its position with different intervals from the configured ones.
* Made the agent work also with Ethernet WAN or USB WAN.


##### 1.0.3

* Fixed a Modbus plugin issue in which the agent continues to send measurements after clients are unavailable.


##### 1.1.0

* The device type has been renamed to NTC-220 Agent (previously POSIX Agent).
* Predefined commands in the shell are now available.


##### 1.1.1

* Added "NTP synchronisation failed" mode.

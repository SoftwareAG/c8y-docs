---
weight: 50
title: Casa Systems (NetComm) Router
layout: bundle
---


### Overview

The following sections demostrates how to use a Casa Systems (NetComm) router with the Cumulocity IoT platform. It describes how to:

* [Configure](#configure) the router.
* [Connect](#connect) the router to your Cumulocity IoT account.
* [Configure WAN, LAN and DHCP](#network) parameters.
* Manage [software and firmware](#manage).
* Monitor [system resources](#system).
* Monitor [cellular signal strength](#cellular).
* Use the built-in [GPS](#gps) functionality.
* Use the built-in [GPIO](#gpio) pins.
* View [configuration](#parameters) parameters.
* Remotely execute text commands via [device shell](#device-shell).
* Get [event notifications](#notification).
* Connect [Modbus](#modbus) devices.
* View [logs](#logs).
* [VNC](#vnc) remote access.
* Configure [MQTT](#mqtt).

The following sections assume that the router has the NetComm agent package installed. The agent is compatible with [NTC-220](https://support.netcommwireless.com/product/ntc-220-series).

For [NTC-140W](https://support.netcommwireless.com/product/ntc-140w), and [NTC-6200](https://support.netcommwireless.com/product/ntc-6200), please refer to another document. For more information on a particular feature of the router, please consult the respective manual found in the *Downloads* section of the router’s home page.

### <a name="configure"></a> Configuring the router

The support for Cumulocity can be configured through the router’s web user interface. To do so, login to the user interface as described in the router’s manual. Navigate to the **System** tab and click on the **Internet of Things** menu item.

![Web Interface](/images/device-demos/casa-system-router/router-web-interface.png)

Verify that the toggle switch **Agent** is set to **ON** and the URL shown in **Server** points to the Cumulocity instance that you want to connect. For example, use
* https://mqtt.cumulocity.com/ for connecting to Cumulocity.

Optionally, you can activate data collecting for the following functionalities:
* GPIO analog measurements: Send the voltages of the analog inputs [seconds].
* GPS position interval: Update the current GPS position [seconds].
* GPS position event: Send a location trace of the GPS position [seconds].
* System resources measurements: Get information about CPU usage, memory usage and network traffic [seconds].
* Connection signal measurements: Get information about cellular signal strength [seconds].

All these options are disabled by default (the interval is set to 0).

The web interface also shows the status of the connection to Cumulocity:
* Checking network connection: waiting for mobile network connection at boot.
* Bootstrapping: load credentials or request credentials from Cumulocity.
* Integrating: Connecting to Cumulocity.
* Loading plugins: loading Lua plugins.
* Connected: The agent is successfully connected to Cumulocity.
* No server URL: no or invalid server URL.
* Bootstrap failed: Cannot get credentials from Cumulocity.
* Integration failed: Cannot connect to Cumulocity.
* Create threads failed: not able to start reporter or device push.

### <a name="connect"></a> Connecting the router

To register your NetComm router to Cumulocity, you need the router’s serial number as Device ID. The registration process is described in section [Connecting devices](/users-guide/device-management/#connecting-devices) in the User Guide. The serial number is printed on the back side of the router as shown below. Alternatively, it is also available in the router’s web user interface. Navigate to **System**, **Internet of Things** and view the **Device ID** field.

![Serial Number](/images/device-demos/casa-system-router/router-serial-number.png)

After clicking the **Accept** button, navigate to **All devices**, the router should appear here after registration. The default name of a router is "**&#60;model&#62; (S/N &#60;serial number&#62;)**", where &#60;model&#62; is the device model name. For example, the above router would appear as “NTC-221 (S/N 191611192800580)”.

Click on the router to view the detailed information and to access the functionality described in the remaining sections of this document. In order to distinguish a registered router from other devices in the listing, you can change the router’s name on the **Info** tab, which also displays basic information such as serial number of the router and SIM card data on the **DEVICE DATA** widget. After clicking the **Edit** icon at the bottom of the widget and changing the name, remember to click the **Save** button at the bottom of the **DEVICE DATA** widget on the **info** page.

![Device Info](/images/device-demos/casa-system-router/router-device-info.png)

### <a name="network"></a> Configuring network parameters

You can view and configure the essential mobile network (**WAN**) and local area network (**LAN**) parameters in the **Network** tab as shown in the screenshot below.

The mobile network (**WAN**) parameters shown in the user interface corresponding to the first profile stored in the router. These parameters can be remotely configured directly or via SMS.

For SMS configuring, the router needs to be configured to accept SMS commands. Consult the router’s manual on the relevant parameters for SMS configuration, or use the router’s web user interface. You also need to have an SMS gateway configured with your account. Contact [support](https://empower.softwareag.com/ContactSupport/) for setting up an SMS gateway. For more information on Device Shell, consult the [user’s guide](/users-guide/device-management/#shell).

> **Info:** When you configure a wrong APN settings, the device will lose mobile network connection and can only be managed by limited SMS functionality.

![Network Parameters](/images/device-demos/casa-system-router/router-network-info.png)

LAN and DHCP parameters can be directly configured from Cumulocity as well.

### <a name="manage"></a> Managing software and firmware

The installed software and firmware on the router can be remotely managed using the standard software and firmware management feature from Cumulocity, as described in the [Device management user’s guide](/users-guide/device-management/#software-repo).

Software packages need to be in [ipkg](http://en.wikipedia.org/wiki/Ipkg) format and follow the naming convention "**&#60;package&#62;&#95;&#60;version&#62;&#95;&#60;arch&#62;.ipk**”. Version numbers including letters are not supported. All package management methods (install, upgrade, downgrade, removal) are supported through the router’s package manager. If software packages have dependencies, please make sure to install these first.

> **Info:** The package “cumulocity-ntc-agent_&#60;version&#62;\_arm.ipk” represents the NetComm agent. It is prohibited to remove this package from Cumulocity.

Firmware can be uploaded and installed on the router as well. To successfully upgrade the firmware, make sure that the target firmware includes the agent package. Firmware files need to follow Netcomm’s naming convention (”**&#60;name&#62;\_&#60;version&#62;.cdi**”).

> **Info:** If the agent package is not included in the target firmware, the agent will not start after the installation.

![Software and Firmware info](/images/device-demos/casa-system-router/router-software-menu.png)

### <a name="system"></a> Monitoring system resource

You can record statistics of the router’s system resources usage for troubleshooting purposes. The following statistics are available:
* CPU load in percent.
* Used and total memory in MB.
* Uplink and downlink traffic over all interfaces in KB/sec.

By default, collection of resource statistics is disabled. They can be enabled by setting a non-zero collecting interval in the **System resources measurements** entry of the [router user interface](#configure) or using [Device Shell](#device-shell):

```shell
set service.cumulocity.system_resources.interval=<interval>
```

Collected data can be accessed in the **Measurements** tab or in a dashboard.

### <a name="cellular"></a> Monitoring cellular signal strength

You can also record statistics of the router’s cellular signal strength.

By default, collection of signal strength statistics is disabled. They can be enabled by setting a non-zero collecting interval in the **Connection signal measurements** entry of the [router user interface](#configure) or using [Device Shell](#device-shell):

```shell
set service.cumulocity.signal.interval=<interval>
```

Collected data can be accessed in the **Measurements** tab or in a dashboard.

### <a name="gps"></a> Using GPS

To locate or trace the router, connect a GPS antenna to the router and enable its GPS functionality. Then [configure](#configure) the frequency of data collection by setting the **GPS position update interval** and/or the **GPS position event** to a non-zero value. **GPS position update interval** defines how often the current location of the router is updated. **GPS position event** defines how often the current location is stored as location update event for tracing.

Similarly, you can set these parameters from Device Shell:

```shell
set service.cumulocity.gps.update_interval=<update interval>
set service.cumulocity.gps.interval=<event interval>
```

After you applied the configuration changes, wait a moment for the first GPS data to arrive, then refresh the page. A **Location** and a **Tracking** tab should now appear. See the [**Location**](/users-guide/device-management#location) and [**Tracking**](/users-guide/device-management#tracking) sections in the user guide for more information.

### <a name="gpio"></a> Using GPIO

The following GPIO functionalities are supported:

* Send the voltage of an analog input as measurements to the Cumulocity IoT platform.
* Raise or clear alarms when a digital input turns 1 or 0, respectively.
* Write to a digital output remotely from the Cumulocity IoT platform.

Consult the documentation of your router for more information about its specific IO settings. The available functionalities may vary between different device models. For example, the NTC-220 supports GPIO pins 1-3.

#### Analog input

To regularly poll the input voltage of a GPIO pin and send it to Cumulocity, set [**GPIO analog measurements**](#configure) to a non-zero value. Alternatively, use Device Shell:

```shell
set service.cumulocity.gpio.interval=<interval>
```

Then, you need to specify the port and turn on the notification by using Device Shell:

```shell
set service.cumulocity.gpio.<port>.notify=measurement
```

&#60;port&#62; is the numbering of the GPIO pin. For NTC-220, <port> can be 1, 2 or 3. The Visualized result is then visible in **Measurements**.

#### Digital input
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

#### Digital output

Digital outputs can be controlled using the **Relay array** widget, see below in the screenshot. The green icon means “closed (low value)” and the red icon means “opened (high value)”. The numbering of the GPIO pins are the same as listed on the router. For the NTC-220 model, three GPIO pins can be set.

![Relay Array Widget](/images/device-demos/casa-system-router/router-relay-array.png)

### <a name="parameters"></a> Configuration Management

You can retrieve, modify and save user configuration data. To do this, navigate to the [**Configuration**](/users-guide/device-management/#config) tab of the router, click on the **Reload** button in the **Configuration** widget to request configuration data. It will take a few seconds to download. After the configuration data has arrived, you will see a list of parameters and their corresponding values. You can then make changes to the configuration and save them back to the device.

You can also request a configuration snapshot from the device and later apply the configuration snapshot to other devices.

There is also RDB snapshot support, which is a super-set of the configurations. This is mainly for the troubleshooting purpose.

![Configuration](/images/device-demos/casa-system-router/router-relay-configuration-widget.png)

### <a name="device-shell"></a> Device shell

With Device Shell, you can read and write individual configuration parameters from the device, as well as execute diagnostic commands. For more information, please refer to the [user guide](/users-guide/device-management/#shell). Consult the Netcomm documentation for valid parameters and diagnostic commands. The general format is:

* “get &#60;parameter&#62;” to read a parameter from the device.
* “set &#60;parameter&#62;=&#60;value&#62;” to write a parameter to the device.
* “execute &#60;command&#62;” to execute a diagnostic command on the device.

Multiple get, set and execute commands can be sent using a semicolon as a separator.  
Click the **Get Predefined** link to access frequently used parameters and commands.

![Device Shell](/images/device-demos/casa-system-router/router-device-shell.png)

### <a name="notification"></a> Event notifications

The router reports certain system events as notifications, which can be forwarded to Cumulocity as alarms. The system events help, for example, in troubleshooting mobile network issues. For more information on the different types of events and how to forward them, please consult the Netcomm documentation (for example, Section **Event notification** in the user’s guide). To forward an event as an alarm, set up a UDP destination sending to Port 1331 on localhost (Section **Destination configuration**).

![Notification](/images/device-demos/casa-system-router/router-alarms.png)

### <a name="modbus"></a> Cloud Fieldbus

You can connect Modbus-TCP and Modbus-RTU slaves to the router via LAN and serial port, respectively, and manage them remotely in Cumulocity. To do so, you need to

For Modbus-TCP setup:
* Establish LAN connectivity. Use the [**Network**](#network) tab as described above and the corresponding configuration mechanism on the Modbus device to enable IP communication between the router and the Modbus-TCP slaves.
* Configure the Modbus-TCP port in the Cumulocity menu on NetComm device’s web UI if you are using a different port than the default 502, see [**Configuring the router**](#configure).

For Modbus-RTU setup:
* Connect the router and your Modbus-RTU slaves via a serial cable.
* Configure serial port mode via device shell:

```shell
set serial.iomode.default=<mode>
```

where &#60;mode&#62; can be rs232, rs422 or rs485. You may need to reboot the device after changing the mode.
* Make sure to turn off all serial port related functionalities on the router, e.g. PADD, Data Stream Manager. Otherwise, the Agent will conflict for accessing the serial port.

> **Info:** The default serial port `/dev/ttyO1` is for the Model NTC-220 series. For another model, it might use a different port. For example, the Model NTC-6200 uses `/dev/ttyAPP4` instead. It should work with no further configuration. In case it’s empty or you need to configure a different port, it can be configured in the Cumulocity menu in devices’ web UI, see [**Configuring the router**](#configure).
>
>Some USB to serial adapters have echo mode enabled by default, this can render the Modbus communication stop working completely. If you have one of these adapters, consult the adapter’s manufacturer about how to disable it.s

Then:
* Subscribe your account to the Cloud Fieldbus feature by contacting [support](https://empower.softwareag.com/ContactSupport/).
* Configure Modbus communication as described in the [Cloud Fieldbus user’s guide](/users-guide/optional-services/#cloud-fieldbus).
* Enable or disable write permission by setting the “Modbus read only” property in the Cumulocity menu on the device’s web UI, see [**Configuring the router**](#configure). Set it to 0 means allow write permission, while 1 means disallow Modbus write permission.

### <a name="logs"></a> Log viewer

You can download and view the logs from the device. Log files can be quite big, you can set filtering criteria to get only what is interesting for you.

From right you can set a date range (date from and date to), you can select log file. Next you can search the text, and only matching lines are retrieved from the device. You can also limit matched lines.

Received logs are visible in the list below. You can click on it to show log file content at the bottom of the page. Last requested log is opened automatically.

![Logs](/images/device-demos/casa-system-router/router-log.png)

### <a name="vnc"></a> VNC remote access

If you have a device which supports VNC, Telnet or SSH remote access, it’s now possible to manage your device via Cumulocity.

As shown in the screenshot, you can add your VNC, Telnet or SSH servers as an endpoint with appropriate IP and port in the Remote Access tab of a particular device in the Device Management application. If you click Connect, the display content of your remote server will be shown in a new browser window.

![Remote Access](/images/device-demos/casa-system-router/router-remote-access.png)

### <a name="mqtt"></a> MQTT

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

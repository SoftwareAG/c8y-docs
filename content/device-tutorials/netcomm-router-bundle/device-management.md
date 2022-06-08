---
title: Managing devices
weight: 45
---

<a name="network"></a>
### Configuring network parameters

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
### Managing software and firmware

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
### Monitoring system resources

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
### Monitoring cellular signal strength

You can also record statistics of the router's cellular signal strength.

By default, the collection of signal strength statistics is disabled. They can be enabled by setting a non-zero collecting interval in the **Connection signal measurements** entry of the [web user interface of the router](#configure) or using the [device shell](#device-shell).

```shell
set service.cumulocity.signal.interval=<seconds>
```

Collected data can be accessed in the **Measurements** tab or in a dashboard.

<a name="gps"></a>
### Using GPS

To locate or trace the router, connect a GPS antenna to the router and enable its GPS functionality. Then [configure](#configure) the frequency of data collection by setting the **GPS position update interval** and/or the **GPS position event** to a non-zero value. **GPS position update interval** defines how often the current location of the router is updated. **GPS position event** defines how often the current location is stored as location update event for tracing.

Similarly, you can set these parameters from the [device shell](#device-shell).

```shell
set service.cumulocity.gps.update_interval=<seconds>
set service.cumulocity.gps.interval=<seconds>
```

After you applied the configuration changes, wait a moment for the first GPS data to arrive, then refresh the page. A **Location** and a **Tracking** tab should now appear. See  [Device Management > Device details](/users-guide/device-management/#device-details) in the *User guide* for details on the  [**Location**](/users-guide/device-management#location) and [**Tracking**](/users-guide/device-management#tracking) tab.

<a name="snapshots"></a>
### Managing configuration snapshots

You can retrieve, modify and save user configuration data. To do this, navigate to the router in  **Device Management > All devices** and switch to its [**Configuration**](/users-guide/device-management/#config) tab. Click **Reload** in the **Configuration** section to request configuration data. It will take a few seconds to download. After the configuration data has arrived, you will see a list of parameters and their corresponding values. You can then make changes to the configuration and save them back to the device.

You can also request a configuration snapshot from the device and later apply the configuration snapshot to other devices.

There is also RDB snapshot support, which is a super-set of the configurations. This is mainly for troubleshooting purpose.

![Configuration](/images/device-demos/casa-system-router/router-relay-configuration-widget.png)

<a name="device-shell"></a>
### Using the device shell

With the device shell, you can read and write individual configuration parameters from the device, as well as execute diagnostic commands. For more information, refer to [Device Management > Device details > Device shell](/users-guide/device-management/#shell) in the *User guide*. Consult the NetComm documentation for valid parameters and diagnostic commands. The general format is:

* "get &#60;parameter&#62;" to read a parameter from the device.
* "set &#60;parameter&#62;=&#60;value&#62;" to write a parameter to the device.
* "execute &#60;command&#62;" to execute a diagnostic command on the device.

Multiple get, set and execute commands can be sent using a semicolon as a separator.
Click the **Get Predefined** link to access frequently used parameters and commands.

![Device Shell](/images/device-demos/casa-system-router/router-device-shell.png)

<a name="logs"></a>
### Viewing log files

You can download and view the logs from the device. Log files can be quite big, but you can set filtering criteria to get only what is interesting for you.

For more information about logs, see [Device Management > Device details > Logs](/users-guide/device-management/#logs) in the *User guide*.

![Logs](/images/device-demos/casa-system-router/router-log.png)

<a name="notification"></a>
### Event notifications

The router reports certain system events as notifications, which can be forwarded to the {{< product-c8y-iot >}} platform as alarms. The system events help, for example, in troubleshooting mobile network issues. For more information on the different types of events and how to forward them, consult the NetComm documentation (for example the *Event notification* section in the NTC-220 [User guide](https://support.netcommwireless.com/api/Media/Document/f8d82c69-060e-43d2-9a2a-689f018d207c?Product=NTC-220-User-Guide.pdf)). To forward an event as an alarm, set up a UDP destination sending to Port 1331 on localhost (see the *Destination configuration* section in the NTC-200 [User guide](https://support.netcommwireless.com/api/Media/Document/f8d82c69-060e-43d2-9a2a-689f018d207c?Product=NTC-220-User-Guide.pdf)).

![Notification](/images/device-demos/casa-system-router/router-alarms.png)

<a name="mqtt"></a>
### MQTT protocol support

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

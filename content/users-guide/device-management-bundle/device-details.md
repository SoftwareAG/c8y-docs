---
weight: 31
title: Device details
layout: redirect
---
For each device, detailed information is available. The kind of information actually provided for a device depends on the device type, device usage and the configuration of your user interface.

To view detailed information on the device, click a device in the device list.

![Device info](/images/users-guide/DeviceManagement/devmgmt-devices-info.png)

The device details are divided into tabs. The number of tabs is dynamic and depends on the available information, that means, tabs are only displayed if the kind of information is available for the particular device. For a detailed description of the operations and fragments related to each device detail tab see the [Device management library](/reference/device-management-library/#overview) in the *Reference guide*.

Initially the **Info** tab is shown, which offers general information on a device and is available for each device.

Each device at least shows the following tabs: **Info**, **Alarms**, **Control**, **Events**, **Availability**, **Identity** (also see the tab list below).

The following tabs are the most common ones, each described in detail in a separate section:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup><thead>
<tr>
<th align="left">Tab</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lora-actility">Actility LoRa</a></td>
<td style="text-align:left">Provides details for devices connected via Actility LoRa. For details, see <a href="../../protocol-integration/lora-actility">Actility LoRa</a>.</td>
</tr>
<tr>
<td align="left"><a href="#alarms">Alarms</a></td>
<td align="left">Provides information on the alarms for a device. See <a href="#alarm-monitoring">Working with alarms</a>. Available for each device.</td>
</tr>
<tr>
<td align="left"><a href="#availability">Availability</a></td>
<td align="left">Allows the availability monitoring of machines. For details, see <a href="#monitoring-availability">Availability</a>. Available for each device.</td>
</tr>
<tr>
<td align="left"><a href="#child-devices">Child Devices</a></td>
<td align="left">Lists devices being connected to the current device.</td>
</tr>
<tr>
<td align="left"><a href="#config">Configuration</a></td>
<td align="left">Allows manual configuration of device parameters and settings entered in a text format. For details, see <a href="#configuration-repository">Managing configurations</a> for binary configuration.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../users-guide/device-management/#connectivity">Connectivity</a></td>
<td style="text-align:left">Provides SIM management functionality. For details, see <a href="../../users-guide/device-management/#connectivity">Connectivity</a>.</td>
</tr>
<tr>
<td align="left"><a href="#control">Control</a></td>
<td align="left">Displays operations being sent to a device. Also refer to <a href="#operation-monitoring">Working with operations</a>. Available for each device.</td>
</tr>
<tr>
<td align="left"><a href="#dev-profile">Device profile</a></td>
<td align="left">Shows the details of the currently installed profile on a device.</td>
</tr>
<tr>
<td align="left"><a href="#events">Events</a></td>
<td align="left">Displays events related to a device, helpful for low-level troubleshooting. Also refer to <a href="#events-all">Troubleshooting devices</a>. Available for each device.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/cloud-fieldbus">Fieldbus</a></td>
<td style="text-align:left">Provides details for fieldbus devices. For details, see <a href="../../protocol-integration/cloud-fieldbus">Cloud Fieldbus</a>.</td>
</tr>
<tr>
<td align="left"><a href="#firmware">Firmware</a></td>
<td align="left">Manages firmware of a device. See <a href="#managing-firmware">Managing firmware on a device</a>.</td>
</tr>
<tr>
<td align="left"><a href="#identity">Identity</a></td>
<td align="left">Displays identities recorded for a particular device. Available for each device.</td>
</tr>
<tr>
<td align="left"><a href="#info">Info</a></td>
<td align="left">Provides general information on a device. Available for each device.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lwm2m">LWM2M</a></td>
<td style="text-align:left">Provides details for devices connected via LightweightM2M. For details, see <a href="../../protocol-integration/lwm2m">LightweightM2M</a>.</td>
</tr>
<tr>
<td align="left"><a href="#location">Location</a></td>
<td align="left">Shows the location of a device, if available.</td>
</tr>
<tr>
<td align="left"><a href="#logs">Logs</a></td>
<td align="left">Allows requesting log information for a device.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/lora-loriot">LORIOT LoRa</a></td>
<td style="text-align:left">Provides details for devices connected via LORIOT LoRa. For details, see <a href="../../protocol-integration/lora-loriot">LORIOT LoRa</a> for more details.</td>
</tr>
<tr>
<td align="left"><a href="#measurements">Measurements</a></td>
<td align="left">Provides a default visualization of numeric data provided by the device in the form of charts.</td>
</tr>
<tr>
<td align="left"><a href="#network">Network</a></td>
<td align="left">Displays network information for a device.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/opcua">OPC UA server</a></td>
<td style="text-align:left">Provides details for devices connected via an OPC UA server. For details, see <a href="../../protocol-integration/opcua">OPC UA</a>.</td>
</tr>
<tr>
<td align="left"><a href="#services">Services</a></td>
<td align="left">Provides an overview of the services running on a device.</td>
</tr>
<tr>
<td align="left"><a href="#shell">Shell</a></td>
<td align="left">Enables you to interact with remote devices via a command prompt.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/sigfox">Sigfox</a></td>
<td style="text-align:left">Provides details for devices connected via Sigfox. For details, see <a href="../../protocol-integration/sigfox">Sigfox</a> for more details.</td>
</tr>
<tr>
<td style="text-align:left"><a href="../../protocol-integration/snmp">SNMP</a></td>
<td style="text-align:left">Provides details for devices connected via SNMP. For details, see <a href="../../protocol-integration/snmp">SNMP</a>.</td>
</tr>
<tr>
<td align="left"><a href="#software">Software</a></td>
<td align="left">Manages software installed on a device. For details, see <a href="#managing-software">Managing software on a device</a>.</td>
</tr>
<tr>
<td align="left"><a href="#tracking">Tracking</a></td>
<td align="left">Shows the movement of a device, if available.</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
Several individual tabs, which you do not find listed here, may be described in a different context in another section of the {{< product-c8y-iot >}} documentation. Use the Search function to switch to the relevant sections. A detailed description on the **Modbus** tab, for example, can be found in [Cloud fieldbus](/protocol-integration/cloud-fieldbus) in the *Protocol integration guide*.
{{< /c8y-admon-info >}}

Below the name, a list of breadcrumbs is displayed. If the device is part of an asset hierarchy (such as a group), you can use the breadcrumbs to easily navigate up that hierarchy. Since devices can be part of multiple hierarchies, several rows of breadcrumbs may be shown.

Depending of the type and usage of a device, further actions are provided in an action menu when clicking **More...** at the right of the top menu bar.

![More menu](/images/users-guide/DeviceManagement/devmgmt-devices-more.png)

Details on these additional menu items are provided where required.

<a name="alarms"></a>
### Alarms

The **Alarms** tab provides information on the alarms of a device. See [Working with alarms](#alarm-monitoring) for detailed information on alarms.

<a name="availability"></a>
### Availability

The Availability tab offers availability monitoring for machines, see [Monitoring and controlling devices > Availability](#monitoring-availability) for more information.


<a name="child-devices"></a>
### Child devices

The **Child devices** tab shows a list of devices connected to the currently displayed device. For example, if you look at a gateway, the tab lists all machines connected to the gateway.

For details provided in the child device list, see [Viewing devices](#viewing-devices).

<a name="config"></a>
### Configuration

The **Configuration** tab allows you to configure the parameters and initial settings of your device. Depending on the device, possible configurations are:
 - Text-based configurations
 - Binary-based configuration snapshots

For more details on managing binary-based configuration snapshots, see [Managing device data > Managing configurations](#configuration-repository).

#### To request the current text-based configuration snapshot

1. Navigate to the **Configuration** tab.
2. Select one of the device-supported configurations in the list.
3. Click **Get snapshot from device**.

#### To add or edit a text-based configuration snapshot

1. In the **Configuration** tab, you can manually add or edit the device configuration in the text field.
2. Click **Send configuration to device** to save your edits.

![Text-based configuration](/images/users-guide/DeviceManagement/devmgmt-devices-textconfig.png)

{{< c8y-admon-info >}}
If a device supports both text-based and binary-based configuration the **Configuration** tab shows a subtab for each configuration type.
{{< /c8y-admon-info >}}

<a name="control"></a>
### Control

The **Control** tab lists the operations being sent to a device. See [Working with operations](#operation-monitoring) for detailed information on operations.

![Operations](/images/users-guide/DeviceManagement/devmgmt-devices-control.png)

<a name="dev-profile"></a>
### Device profile

See [Applying device profiles to devices](#applying-device-profiles) for more information on how to apply device profiles to a device.

<a name="events"></a>
### Events

The **Events** tab displays events related to a device. This enables low-level troubleshooting of a device. See [Troubleshooting devices](#events-all) for detailed information.

<a name="firmware"></a>
### Firmware

See [Managing firmware on a device](#managing-firmware) for more information on how to manage and update the firmware on a device.

<a name="identity"></a>
### Identity

{{< product-c8y-iot >}} can associate devices and assets with multiple external identities. For example, devices can often be identified by the IMEI of their modem, by a micro-controller serial number or by an asset tag. The **Identity** tab lists all the identities recorded for a particular device.

This is useful, for example, when you have non-functional hardware and must replace the hardware without losing the data that was recorded. Just connect the new hardware to your account and modify the identity entry of the old hardware, to contain the identity of the new hardware.

<a name="info"></a>
### Info

The **Info** tab summarizes management-relevant device information in a dashboard.

![Device Info](/images/users-guide/DeviceManagement/devmgmt-devices-infotab.png)

The information is provided on the following cards:

<table>
<col width = 20%>
<col width = 80%>
<thead>
<tr>
<th style="text-align:left">Card</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Notes</td>
<td style="text-align:left">Provides optional notes to inform about current activities. Notes usually may only be edited by an administrator. To add or edit a note, click <strong>Edit</strong>, enter your note or your modifications in the text box and save your edits by clicking the green checkmark at the right of the text box. </td>
</tr>
<tr>
<td style="text-align:left">Device status</td>
<td style="text-align:left">Displays connection-relevant information, as described in detail in <a href="#connection-monitoring" class="no-ajaxy">Connection monitoring</a>. </td>
</tr>
<tr>
<td style="text-align:left">Device and communication</td>
<td style="text-align:left">Shows a data point graph displaying real-time data on particular measurements. Drag the x-axis to move the data point time measurement. To zoom in select a time period, double click to zoom out of the graph. For details on data point graphs, refer to <a href="/users-guide/cockpit#data-explorer" class="no-ajaxy">Using the data explorer</a> in the Cockpit documentation.<br> The following measurements may be shown here: <br>
<strong>Data points</strong>: c8y_Battery.level, c8y_SignalStrength.rssi, c8y_MemoryMeasurement.Used, c8y_CPUMeasurement.Workload, c8y_NetworkStatistics.Upload, c8y_SignalStrength.RCSP, c8y_SignalStrength.ber, c8y_SignalStrength.ECN0, c8y_NetworkStatistics.Download, c8y_MemoryMeasurement.Total <br>
<strong>Alarms</strong>: c8y_UnavailabilityAlarm<br>
<strong>Events</strong>: c8y_LocationUpdate</td>
</tr>
<tr>
<td style="text-align:left">Device data</td>
<td style="text-align:left">Displays general information on the device (ID, name, type, owner, last update). The fields <strong>Name</strong> and <strong>Type</strong> can be edited. Below the general device information, the card shows status information for active alarms, availability and connection (not editable). Moreover, various device-specific information like hardware and firmware is displayed here (editable).</td>
</tr>
<tr>
<td style="text-align:left">Active, critical alarms</td>
<td style="text-align:left">Shows the active critical alarms for the device.</td>
</tr>
<tr>
<td style="text-align:left">Groups assignment</td>
<td style="text-align:left">Displays the groups the device belongs to. Moreover you can add the device to groups here or unassign it from groups, see <a href="#grouping-devices" class="no-ajaxy">Grouping devices</a>.</td>
</tr>
<tr>
<td style="text-align:left">Location</td>
<td style="text-align:left">Shows the location of a device on a map as reported by the device or as manually set, see <a href="#location" class="no-ajaxy">Location</a>.</td>
</tr>
</tbody>
</table>

<a name="location"></a>
### Location

The **Location** tab by default shows the location of a device on a map and as coordinates, as reported by the device. For devices that do not report a location you may manually set the location. Simply place the "pin" in the correct place of the displayed map.

![Location tab](/images/users-guide/DeviceManagement/devmgmt-devices-location.png)

The **Location** tab also shows when a device contains `c8y_Position` property. When you send a new `c8y_Position` event, you can set the same `c8y_Position` fragment on the device and it will automatically mark its position on the map.


<a name="logs"></a>
### Logs

In the **Logs** tab you can manage log information from devices.

#### To request log information

1. In the **Logs** tab, click **Request log file** at the right of the top menu bar.
2. In the resulting dialog box, specify a date and time range for the log information.
3. Select the type of log from the dropdown field. The supported logs listed are usually device-specific.
4. Optionally, specify a text filter. For example, if you enter "Users", only lines including the term "Users" will appear in the returned log information.
5. Specify the maximum number of lines to be returned (counted from the end). The default value is 1000.
1. Click **Request log**.

The log information will be requested from the device.

![Logs tab](/images/users-guide/DeviceManagement/devmgmt-devices-logs.png)

>Requesting a log from a device may take some time.

After the log has been transferred from the device to {{< product-c8y-iot >}}, it will be listed in the **Logs** tab. The row in the list shows the requested log time range.

Click on the entry in the list to show the entire log information.

#### To download a log

Hover over a row and click the download icon, to download the log excerpt to your file system.

#### To delete a log

Hover over a row and click the delete icon, to delete the log information.

<a name="measurements"></a>
### Measurements

The **Measurements** tab provides a default visualization of numeric data provided by the device in the form of charts. Charts are grouped into types of measurements, which can contain multiple graphs or "series".

The screenshot below, for example, shows a chart for motion measurement including graphs for acceleration in the three dimensions, and a chart with modem statistics in the form of signal strength and bit error rate.

![Measurements](/images/users-guide/DeviceManagement/devmgmt-devices-measurements.png)

If a chart contains graphs with different units, one Y-axis is rendered per unit. In the example above, motion measurements consist of three parameters with unit "meter per square second", so only one axis is rendered. Modem statistics consist of signal strength in decibel milliwatts and bit error rate in percent, so one axis is rendered for each graph.

To see detailed information about the measured values, hover over the chart. A tooltip will be displayed with detailed information on the measurement next to your cursor (the tooltip will "snap" to the closest measurement).

> **Info:** We recommend you to have max. 20 series per measurement for optimal performance and readability of a single graph in Device Management (the graph displays all available series). If you need to display only a few series from the measurement, we advise you to use Data explorer in Cockpit where you can select series to be shown in the graph.

**Time range and aggregation**

By default, charts show the raw data of the last hour. To change the time range on the X-axis, open the "Last hour" dropdown menu at the top right and select a time range.

If you increase the time range, the value in the **Aggregation** field will automatically switch to "hourly" or "daily". The chart now shows ranges instead of individual raw data points. For "hourly", the chart will show a range of the minimum and maximum value measured in one hour. For "daily", the chart will show the minimum and maximum value measured over one day. Likewise, the tooltips will now show ranges of values instead of individual values.

This enables you to get an efficient overview over larger time periods. A graph will only show 5.000 data points per graph maximum to avoid overloading your desktop browser. If you select a fine focus resulting in more than 5.000 data points, a warning message will be shown: "Truncated data. Change aggregation or select shorter date range."

Clicking **Realtime** will enable real-time user interface updates of the graphs as new data flows into the system from the connected devices.

You can influence the graphical display and axes limits by setting up so-called "KPIs", see the [Administration Guide](/users-guide/administration).

**Measurement format**

In order to see measurement graphs, the device must send measurements in a specified fragment format.

	"fragment_name" : {
		"serie_name" : {
			"value" : ...
			"unit" : ...
		}
	}

Example:

	"c8y_SpeedMeasurement": {
	      "Speed": { "value": 1234, "unit": "km/h" }
	}

`"Fragment_name"` and `"serie_name"` can be replaced by different valid JSON property names, but no whitespaces and special characters like [ ],* are allowed. The structure must be exactly as above, two-level deep JSON object.

<a name="network"></a>
### Network

In the **Network** tab, mobile network (WAN) and local area network (LAN) parameters can be viewed and configured.

![Network tab](/images/users-guide/DeviceManagement/devmgmt-devices-network.png)

The WAN parameters in the user interface correspond to the first profile stored in the router. These parameter can be configured remotely or via SMS.

{{< c8y-admon-info >}}
For SMS configuration, the router needs to be configured to accept SMS commands.
{{< /c8y-admon-info >}}

#### To configure WAN parameters

1. Enter the Access Point Name (APN).
2. Enter the username and the password of your account in the platform to which you wish to establish a connection.
3. Select the authentication type.
4. Click **Save changes** to save your settings.

#### To configure LAN parameters

To configure LAN parameters, simply enter **IP address** and **Subnet mask**.

{{< c8y-admon-info >}}
**Name** and **Mac address** fields are not configurable.
{{< /c8y-admon-info >}}

#### To configure DHCP parameters

1. Enter the address range in which the connection can be established.
2. Enter the DNS.
3. Enter the DNS 2.
4. Enter the domain name.
5. Click **Save changes** to save your settings.

{{< c8y-admon-info >}}
If the LAN configuration is disabled, the DHCP configuration is automatically disabled as well.
{{< /c8y-admon-info >}}

<a name="services"></a>
### Services

The **Services tab** provides a list of all services running on a device with their status, name, type and date of the last update.
Every column allows services to be filtered and/or sorted by the respective value displayed.

![Services overview](/images/users-guide/DeviceManagement/devmgmt-services-overview.png)

The platform defines three status options for services: **Up**, **Down** and **Unknown**.
These predefined statuses have their own graphical representation and can be selected directly from the **Status** filter:

![Status filter](/images/users-guide/DeviceManagement/devmgmt-services-status-filter.png)

Other status options are also allowed and can be freely defined, see [Service module](http://resources.cumulocity.com/documentation/websdk/ngx-components/modules/ServicesModule.html#readme) in the Web SDK documentation resources.
They all share the same icon and must be entered manually in the **Status** filter.
A tooltip on the status icon displays their actual value.

<a name="shell"></a>
### Shell

The device shell enables you to interactively work with remote devices. Many industrial devices support some form of command language, like AT commands for modems, CSV-style commands for many tracking devices or elaborate scripting mechanisms such as Tixi TiXML. In the shell, you can send commands in the respective language of the device and interactively view the results of the commands.

The **Shell** tab presents a command prompt to enter commands.

In the command prompt you can enter arbitrary command text. To send the command text to the device, click **Execute**. This button only is activated if the device is online.

![Device shell](/images/users-guide/DeviceManagement/devmgmt-devices-shell.png)

{{< c8y-admon-important >}}
When using {{< product-c8y-iot >}} to remotely operate machinery, make sure that all remote operations follow the safety standards and do not cause any harm.
{{< /c8y-admon-important >}}

Click **View history** at the right of the top menu bar to switch to the **Control** tab which displays a list of the previously executed commands. For details, refer to [Monitoring and controlling devices > Working with operations](#operation-monitoring).

For your convenience, {{< product-c8y-iot >}} provides several frequently used commands for some devices. Click **<_Get predefined commands** at the right of the top menu bar to open a window containing a list of available pre-defined commands. Select the command of your choice and click **Use**, to copy the command to the command prompt, or **Execute**, to execute the command straight away. You may also add new commands here for re-use.

![Device shell predefined](/images/users-guide/DeviceManagement/devmgmt-devices-shell-precommands.png)

<a name="software"></a>
### Software

See [Managing software on a device](#managing-software) for more information on how to manage and update the software installed on a device.

<a name="tracking"></a>
### Tracking

Devices can record the history of their movements in {{< product-c8y-iot >}}. This movements may be viewed in the **Tracking** tab.

{{< c8y-admon-info >}}
The **Tracking** tab only shows up when a device contains `c8y_Position` property.
{{< /c8y-admon-info >}}

In the dropdown list at the top right you can select a time period (or specify one by selecting "Custom- from the list) and visualize the movements of the device during this period. Movements are shown as red lines in the map.

![Tracking tab](/images/users-guide/DeviceManagement/devmgmt-devices-tracking.png)

Next to the map, the individual recordings with their time are listed ("location update events"). When you click a recording, a "pin" on the map will show the location at the time of the recording.

Depending on the type of device and the integration into {{< product-c8y-iot >}}, you can configure device-side geo-fencing and motion detection.

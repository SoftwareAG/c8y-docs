---
order: 30
title: Device details
layout: redirect
---

For each device, detailed information is available. The kind of information actually provided for a device depends on the device type, device usage and the configuration of your user interface. 

To view detailed information on the device, click a device in the device list. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_DeviceDetails.png" alt="Device details" style="max-width: 100%">

The device details are divided into tabs. The number of tabs is dynamic and depends on the available information, i.e. tabs are only displayed if the kind of information is available for the particular device. 

Initially the "Info" tab is shown, which offers general information on a device and is available for each device. 

Each device at least shows the following tabs: Info, Alarms, Control, Events, Service monitoring, Identity (also see the tab list below).

The following tabs are the most common ones, each described in detail in a separate section:

|Tab|Description|
|:---|:---|
|[Info](#info)|Provides general information on a device. Available for each device.
|[Child Devices](#child-devices)|Lists devices being connected to the current device.
|[Measurements](#measurements)|Provides a default visualization of numeric data provided by the device in the form of charts.
|[Alarms](#alarms)|Provides information on the alarms for a device. See also [Working with alarms](#alarm-monitoring). Available for each device.
|[Configuration](#configuration)|Allows manual configuration of device parameters and settings entered in a text format. See also [Configuration Repository](#configuration-snapshot) for binary configuration.
|[Control](#control)|Displays operations being sent to a device. Also refer to [Working with operations](#operation-monitoring). Available for each device.
|[Network](#network)|Displays network information for a device.
|[Software](#software)|Manages firmware of a device and software installed on a device.
|[Events](#events)|Displays events related to a device, helpful for low-level troubleshooting. Also refer to [Troubleshooting devices](#events-all). Available for each device.
|[Location](#location)|Shows the location of a device, if available.
|[Logs](#logs)|Allows requesting log information for a device.
|[Service monitoring](#service-monitoring)|Allows the service monitoring of machines. See also [Monitoring services](#monitoring-services). Available for each device.
|[Shell](#shell)|Enables you to interact with remote devices via a command prompt.
|[Tracking](#tracking)|Shows the movement of a device, if available.
|[Identity](#identity)|Displays identities recorded for a particular device. Available for each device.

>**Info**: Potential individual tabs, which you do not find listed here, may be described in a different context and therefore somewhere else in the Cumulocity documentation. Use the Search function to switch to the relevant sections. A detailed description on the "Modbus" tab, for example, can be found in the respective device guide.

Below the name, a list of breadcrumbs is displayed. If the device is part of an asset hierarchy (such as a group), you can use the breadcrumbs to easily navigate up that hierarchy. Since devices can be part of multiple hierarchies, several rows of breadcrumbs may be shown.

Depending of the type and usage of a device, further actions are provided in a context menu when clicking **More...** at the right of the top menu bar. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_DevicesMoreMenu.png" alt="More menu" style="max-width: 50%">

Details on these additional menu items are provided where required.

### <a name="info"></a>Info

The "Info" tab summarizes management-relevant device information in a dashboard.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_DeviceInfoDashboard.png" alt="Info dashboard" style="max-width: 100%">

The information is provided on the following cards:

|Card|Description|
|:---|:---|
|Notes|Provides optional notes to inform about current activities. Notes usually may only be edited by an administrator. To add or edit a note, click **Edit**, enter your note or your modifications in the text box and save your edits by clicking the green checkmark at the right of the text box. 
|Device status|Displays connection-relevant information, as described in detail in [Connection monitoring](#connection-monitoring). 
|Device and communication|Shows a data point graph displaying realtime data on particular measurements. For details, refer to [Using the Data Explorer](/guides/users-guide/cockpit#visualize) in the Cockpit documentation.
|Device data|Displays editable information on the device (name, type, ID, owner, last updated). The fields "ID" and "Last Updated" cannot be edited. Moreover information on hardware (editable) and firmware (not editable) is displayed here if available.
|Active, critical alarms|Shows the active critical alarms for the device.
|Groups assignment|Displays the groups the device belongs to. Moreover you can add the device to groups here or unassign it from groups. For details on grouping devices see [Grouping Devices](#grouping-devices).
|Location|Shows the location of a device on a map as reported by the device or as manually set. For details, refer to [Location](#location).

### <a name="child-devices"></a>Child devices

The "Child devices" tab shows a list of devices connected to the currently displayed device. For example, if you look at a gateway, the tab lists all machines connected to the gateway.

For details provided in the child device list, refer to [Viewing Devices](#viewing-devices).

### <a name="measurements"></a>Measurements

The "Measurements" tab provides a default visualization of numeric data provided by the device in the form of charts. Charts are grouped into types of measurements, which can contain multiple graphs or "series". The screenshot below, for example, shows a chart for motion measurement including graphs for acceleration in the three dimensions, and a chart with modem statistics in the form of signal strength and bit error rate.

![Measurements](/guides/users-guide/measurements.png)

If a chart contains graphs with different units, one Y-axis is rendered per unit. In the example above, motion measurements consist of three parameters with unit "meter per square second", so only one axis is rendered. Modem statistics consist of signal strength in decibel milliwatts and bit error rate in percent, so one axis is rendered for each graph.

To see detailed information about the measured values, hover over the chart. A tooltip will be displayed with detailed information on the measurement next to your cursor (the tooltip will "snap" to the closest measurement).

**Time range and aggregation**

By default, charts show the raw data of the last hour. To change the time range on the X-axis, open the "Last hour" dropdown menu at the top right and select a time range.

If you increase the time range, the value in the "Aggregation" field will automatically switch to "hourly" or "daily". The chart now shows ranges instead of individual raw data points. For "hourly", the chart will show a range of the minimum and maximum value measured in one hour. For "daily", the chart will show the minimum and maximum value measured over one day. Likewise, the tooltips will now show ranges of values instead of individual values.

This enables you to get an efficient overview over larger time periods. A graph will only show 5.000 data points per graph maximum to avoid overloading your desktop browser. If you select a fine focus resulting in more than 5.000 data points, a warning message will be shown: "Truncated data. Change aggregation or select shorter date range."

Clicking **Realtime** will enable realtime user interface updates of the graphs as new data flows into the system from the connected devices. 

You can influence the graphical display and axes limits by setting up so-called "KPIs", see the [*Administration Guide*](/guides/users-guide/administration#kpis).

**Measurement format**

In order to see measurement graphs, the device has to send measurements in a specified fragment format.

"fragment<span>&#95;</span>name" : {
	"serie<span>&#95;</span>name" : {
		"value" : ...
		"unit" : ...
	}
}

Example: 

"c8y_SpeedMeasurement": {
      "Speed": { "value": 1234, "unit": "km/h" }
}

Fragment<span>&#95;</span>name and serie<span>&#95;</span>name can be replaced by different valid json property names, but no whitespaces and special characters like [ ],* are allowed. The structure has to be exactly as above, two-level deep json object.

### <a name="alarms"></a>Alarms

The "Alarms" tab provides information on the alarms of a device. Refer to  [Working with alarms](#alarm-monitoring) for further information on alarms.

### <a name="config"></a> Configuration

The text configuration, available in the "Configuration" tab of a device, allows you to configure the parameters and initial settings of your device in a text format.

To manually add or edit a device configuration, follow these steps:

1. Open the details for your desired device.
2. Click the "Configuration" tab.
3. In the text field you can add or edit the device configuration as desired.
4. Click **Save** to save your edits.

<img src="/guides/users-guide/textconfig.png" alt="Device details" style="max-width: 100%">

Alternatively, you can work with configuration snapshots. For details, refer to [Configuration snapshots](#configuration-snapshot).

### <a name="control"></a>Control

The "Control" tab lists the operations being sent to a device. Refer to [Working with operations](#operation-monitoring) for further information on operations.

![Operations](/guides/users-guide/operations.png)

### <a name="software"></a>Network

In the "Network" tab network settings can be configured for the device.

<!-- Needs to be documented-->


### <a name="software"></a>Software

The "Software" tab allows you to manage and update the firmware of a device and the software installed on a device. 

To install a new firmware, click **Install firmware**, then select a firmware image from the [Firmware repository](#software-repo) and click **Install**.

Similarly, to install a software on the device, click **Install software**, select a software package from the [Software repository](#software-repo) and click **Install**. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_software.png" alt="Software" style="max-width: 100%">

Installing software and firmware usually includes a restart of the device. To monitor the progress of an installation, visit the "Control" tab.

To remove a software from a device, hover over a particular software package and click the **Delete** button.

### <a name="events"></a>Events

The "Events" tab displays events related to a device. This enables low-level troubleshooting of a device. Refer to [Troubleshooting devices](#events-all) for further information.

### <a name="location"></a>Location

The "Location" tab by default shows the location of a device on a map and as coordinates, as reported by the device. For devices that do not report a location you may manually set the location. Simply place the "pin" in the correct place of the displayed map.

The "Location" tab also shows when a device contains c8y_Position property. When you send a new c8y-position event, you can set the same c8y-Position fragment on the device and it will automatically mark its position on the map.


### <a name="logs"></a>Logs

In the "Logs" tab you can request log information from devices. Log information can be filtered according to date ranges, log type, keywords and the maximum number of lines to transfer.

In the "Logs" tab, click **Request log file** at the right of the top menu bar.

In the upcoming window, specify the following settings for the log information:

- A date and time range.
- The type of log. The supported logs listed are usually device-specific.
- An optional text to filter the log. For example, if you enter "Users", only lines including the term "Users" will appear in the returned log information.
- The maximum number of lines to be returned (counted from the end). The default value is 1000.

Click **Request log** to request the specified log information for the device.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_RequestLogs.png" alt="Request Logs" style="max-width: 100%">

>Requesting a log from a device may take some time. 

After the log has been transferred from the device to Cumulocity, it will be listed on the screen. The entry in the list includes the requested log time range. 

Click on the entry in the list to show the log information in the screen. 

When hovering over an entry, the **Download** and **Delete** buttons appear. Click the **Download** button to download the log excerpt to your local PC. Click the **Delete** button to delete the log file.


### <a name="service-monitoring"></a>Service monitoring

In addition to connection monitoring, Cumulocity offers a separate service monitoring for machines. See [Service monitoring](#monitoring-services) for more information.

### <a name="shell"></a>Shell

The device shell enables you to interactively work with remote devices. Many industrial devices support some form of command language, be it AT commands for modems, CSV-style commands for many tracking devices or elaborate scripting mechanisms such as Tixi TiXML. In the shell, you can send commands in the respective language of the device and interactively view the results of the commands.

The "Shell" tab presents a command prompt to enter commands. 

In the command prompt you can enter arbitrary command text. To send the command text to the device, click **Execute**. This button only is activated if the device is online.

Click **View history** at the right of the top menu bar to display a list of the previously executed commands. By default, the last three commands are visible.
The list displays status, date and text of a command. Clicking a list item reveals the result of the command (provided it has been executed).

![Device shell](/guides/users-guide/shell.png)

For your convenience, Cumulocity provides several frequently used commands for some devices. Click **<_Get predefined commands** at the right of the top menu bar to open a window containing a list of available pre-defined commands. Select the command of your choice and click **Use**, to copy the command to the command prompt, or **Execute**, to execute the command straight away. You may also add new commands here for re-use.

![Shell commands](/guides/users-guide/DeviceManagement/DevMgmt_ShellPredefined.png)

### <a name="tracking"></a>Tracking

Devices can record the history of their movements in Cumulocity. This movements may be viewed in the "Tracking" tab.

**Note** that the "Tracking" tab only shows up when a device contains c8y_Position property.

In the dropdown list at the top right you can select a time period (or specify one by selecting Custom from the list) and visualize the movements of the device during this period. Movements are shown as red lines in the map.

![Tracking](/guides/users-guide/tracking.png)

Next to the map, the individual recordings with their time are listed ("location update events"). When you click a recording, a "pin" on the map will show the location at the time of the recording.

Depending on the type of device and the integration into Cumulocity, you can configure device-side geo-fencing and motion detection.

>**Info**: When this feature is activated and the device is compatible, Cell ID information can be used to determine the position of the device. Currently, the services from [Combain](https://combain.com/) and [Google](https://developers.google.com/maps/documentation/geolocation/intro) are supported. The user can see the tracks based on both data, or filter out GPS based data or Cell ID based data.

### <a name="identity"></a>Identity

Cumulocity can associate devices and assets with multiple external identities. For example, devices can often be identified by the IMEI of their modem, by a microcontroller serial number or by an asset tag. The "Identity" tab lists all the identities recorded for a particular device.

This is useful, for example, when you have non-functional hardware and need to replace the hardware without losing the data that was recorded. Just connect the new hardware to your account and modify the identity entry of the old hardware, to contain the identity of the new hardware.

## <a name="grouping-devices"></a>Grouping devices

Devices can be arbitrarily grouped according to a particular use case. A device can be located in multiple groups, and groups themselves can again be part of multiple groups.

Cumulocity distinguishes between top-level groups and subgroups. 

Top-level groups are shown in the "Group" menu in the navigator at top-level. Subgroups are used to further subdivide top-level groups.

### Viewing groups

To display a list of all groups in the account, click "Groups" in the navigator. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_GroupList.png" alt="Groups list" style="max-width: 100%">

For each group, the name and the number of children is displayed.

Click a group to view its details. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_GroupDetails.png" alt="Group details" style="max-width: 100%">

**Info Tab**

In the **Info** tab, the following information is provided:

|Card|Description|
|:---|:---|
|Notes|Provides optional notes to inform about current activities. Notes usually may only be edited by an administrator. To add or edit a note, click **Edit**, enter your note or your modifications in the text box and save your edits by clicking the green checkmark at the right of the text box. 
|Group data|Displays editable information on the group (name, description).
|Active, critical alarms|Shows the active critical alarms for the devices in the group.

**Sub-assets**

In the "Sub-assets" tab you see a list of all devices assigned to the group. For each device, the name and the number of children is displayed.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_GroupSubAssets.png" alt="Sub-assets" style="max-width: 100%">

To assign a device to a group, click **Assign devices** at the right of the top menu bar (see [How to assign a device to an existing group](#assigning-devices)).

To unassign a device, click the menu icon in a device entry and from the context menu select **Unassign**.

**Bulk operations**

In the "Bulk operations" tab, bulk operations created for the group can be managed. With bulk operations you can at once execute operations for each device within one group. For details, refer to [Bulk operations](#bulk-operations).


### How to create a new group

To create a new group follow these steps:

1. Click the **Plus** button at the right of the top bar, then select **New group** from the menu.
2. In the window that comes up enter a unique group name to identify your group.
3. In the "Device Search" field, enter the search criteria for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
4. Checkmark the devices you want to add from the list.
5. Click **Create group with X device(s)** to finally create your new group. 

>**Info:** A group can be created with "0" devices in it.

<img src="/guides/users-guide/addtopgroup.png" alt="Device Management" style="max-width: 100%">

### <a name="assigning-devices"></a>How to assign a device to an existing group

You can assign devices to an existing group in two ways. 

From the device perspective:

1. Select a device from the device list and open it.
2. In the "Info" tab, scroll down to the "Groups assignment" card. In the drop-down field, select the group you want to assign the device to. 
3. Click **Add to group**.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_GroupAssignment.png" alt="Add to group" style="max-width: 50%">

From the group perspective:

1. In the navigator, select a group from the "Group" menu and then open the "Sub-assets" tab. In the "Sub-assets" tab, all devices that are assigned to the respective group are displayed. 
2. Click **Assign devices** at the right of the top menu bar. In the upcoming window search for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
3. Checkmark the devices you want to add from the list.
4. Click **Assign X device(s)** to assign the selected devices. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_AssignDevices.png" alt="Assign devices to a group" style="max-width: 50%">

### How to create a sub-group

1. In the navigator, click a group to open it. 
2. Click **Add Group** at the right of the top menu bar. 
2. In the upcoming window, enter a name for the sub-group and click **Add group**.

### How to edit a group

1. In the navigator, click a group to open it. 
2. In the "Info" tab, click **Edit**. This allows you to edit the name of the group and to assign user permissions for the group. 
For further information on permissions, see the [*Administration Guide*](/guides/users-guide/administration).

### <a name="smart-groups"></a>Using smart groups

Smart groups are groups dynamically constructed based on filtering criteria. They have a temporary character because the group members can change constantly. Smart groups do not have fixed member listings.They have fixed criteria instead. This type of group can be used, for example, for bulk upgrades of devices of a certain type to a new software or firmware version.

<img src="/guides/users-guide/smartfilters.png" alt="Adding top-level groups" style="max-width: 100%">

Smart groups can be created from the device list. 

1. To open the device list, click "All devices" in the navigator.
2. Filter the devices in the list to select the desired devices. Refer to [Filtering devices](#filtering-devices) for details on filtering.
3. Click **Create smart group** at the right of the top menu bar.
4. Enter a name for the group and click **Create**.

<img src="/guides/users-guide/smartgroup1.png" alt="Create a smart group" style="max-width: 100%">

The new group will appear as a top-level group in the "Groups" menu of the navigator. Smart groups can be distinguished by a small cogwheel in the folder icon. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_SmartgroupIcon.png" alt="Smart groups" style="max-width: 100%">

In the "Sub-asset" tab you can adjust your selection and modify the filter settings.

To delete a smart group, click the menu icon and from the context menu select **Delete**. 

<img src="/guides/users-guide/smartgroupdelete1.png" alt="Adding top-level groups" style="max-width: 100%">

**Important**: Deleting a smart group is irreversible.

>**Info**: Smart groups are not shown when using the Cockpit application.

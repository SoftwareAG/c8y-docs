---
order: 20
title: Device Management
layout: default
---
## <a name="introduction"></a>Overview

The Device Management application provides functionalities for managing and monitoring devices and enables you to control and troubleshoot devices remotely. 

The following sections will walk you through all functionalities of the Device Management application in detail. For your convenience find an overview on the content of this document below.

|SECTION|CONTENT|
|:---|:---|
|[Connecting Devices](#device-registration)|How to [register one or more devices manually](#device-registration-manually) and how to [bulk-register devices](#creds-upload) in order to connect devices to your account.
|[Viewing Devices](#viewing-devices)|What is displayed in the [device list](#device-list) and how to sort devices by [searching for devices](#searching-devices) and [filtering devices](#filtering-devices).
|[Grouping Devices](#grouping-devices)|Why and how to group devices into top-level groups, subgroups and [smart groups](#smart-groups).
|[Device Details](#device-details)|Detailed description of the various kind of  information available for various types of  devices.
|[Monitoring and Controlling Devices](#monitoring-and-controlling-devices)|How to monitor the [connection quality](#connection-monitoring) and [service status](#monitoring-services) of devices, how to handle [alarms](#alarm-monitoring) from devices, how to [remote control](#operation-monitoring) and how to [troubleshoot](#events-all) devices.
|[Managing Device Types](#managing-device-protocols)|How to process data from various device types by using [device protocols](#managing-device-protocols). 
|[Managing Device Data](#managing-device-data)|How to retrieve and manage [firmware and software](#software-repo) for devices and how to handle [configuration snapshots](#configuration-snapshots). 
|[Working with the Simulator](#simulator)|How to model devices with the [simulator](#simulator) in order to have the same level of functionality as connected hardware devices.
|[Using SmartREST Templates](#Smartrest)|How to work with [SmartREST templates](#Smartrest), a collection of request and response templates used to convert CSV data and Cumulocity Rest API calls.
|[Cloud Remote Access](#cloud_remote_access)|How to remotely access operating panels and other devices via a web browser using Cumulocity [Cloud Remote Access](#cloud_remote_access).

## <a name="device-registration"></a>Connecting Devices

This section describes how to connect devices to your Cumulocity account either manually or by bulk-registration.

### <a name="device-registration-manually"></a>How to connect a device manually
The following process describes how to connect devices manually. Depending on the type of device you want to connect, not all steps of the process may be relevant. 

**Info**: In case of any issues, consult the [device guide](www.cumulocity.com/guides/) applicable for your device type, search for your device type in the [Developer Center](http://cumulocity.com/dev-center/) on our  website for further information, or look up the manual of your device.

To connect devices to your Cumulocity account follow these steps:

1. Click "Registration" in the "Devices" menu of the navigator and click **Register device**.
2. In the upcoming window, choose **General device registration** to register one or more devices individually (see next section for handling bulk registration).
3. In the "Device ID" field, enter a unique ID for the device. To determine the ID, consult the device documentation. In case of mobile devices the ID usually is the IMEI (International Mobile Equipment Identity) often found on the back of the device.
4. Optionally, select a group to assign your device to after registration. Find further information on groups assignment in [Grouping Devices](#grouping-devices).
5. Click **Add another device** to register one more devices. Again, enter the device ID and optionally select a group. This way, you can add multiple devices in one step.
6. Click **Next** to register your device(s). After successful registration the device(s) will be listed on the screen with the status "Waiting for connection".

<img src="/guides/users-guide/DeviceManagement/DevMgmt_RegisterMultiple.png" alt="Register Multiple Devices" style="max-width: 50%">

Turn on the device(s) and wait for the connection to be established.
Once a device is connected, its status will change to "Pending acceptance".
Click **Accept** to confirm the connection. The status of the device will change to "Accepted".

### <a name="creds-upload"></a>Bulk-registering devices

To connect larger amounts of devices, Cumulocity offers the option to bulk-register devices, i.e. to register them all in one step. This is done by uploading a CSV file with at least the IDs and credentials of the devices.

1. Click "Registration" in the "Devices" menu of the navigator and click **Register device**.
2. In the upcoming window choose **Bulk device registration**.
3. Select the CSV file you want to upload by browsing for it.

		ID;Credentials;Tenant;PATH;ICCID;NAME;TYPE
		006064ce800a;LF2PWJoLG1Fz;management;Sample_Düsseldorf;	+491555555;Sample_Device1;c8y_Device
		006064ce8077;OowoGKAbiNJs;management;Sample_Düsseldorf;	+491555555;Sample_Device2;c8y_Device

You may also download a template file here to view or copy the structure.

 <!--
 Needs to be tested. Seems to be outdated.
 Use the "Upload" button to upload the CSV file, as shown in the screenshot below. After the data is imported, you will get feedback on the number of devices that were pre-registered as well as on any potential errors that may have occurred. -->

**Pre-registering devices**

To connect the devices, they need to be pre-registered with the relevant information. More specific, each device needs to be configured as follows:

* User name - the user name for accessing Cumulocity must have the format &lt;tenant&gt;/device_&lt;id&gt;, where &lt;Tenant&gt; refers to the tenant from which the CSV file is imported and  &lt;id&gt; refers to the respective value in the CSV file.
* Password - the password to access Cumulocity, equals the value "Credentials" in the CSV file.
* Device in managed object representation - fields "Type", "Name", "Iccid", "Idtype", "Path", "Shell" in the CSV file.

**Info**: If you work with a Cumulocity Enterprise Edition you may also register devices across multiple tenants by adding a "tenant" column to the spreadsheet and importing the CSV file from the "management" tenant.

For further information on the file format and accepted CSV variants, refer to 
[Bulk device credentials](/guides/reference/device-credentials/#creds-upload).

## <a name="viewing-devices"></a>Viewing Devices

To view all devices connected to your account, click "All devices" in the "Devices" menu in the navigator. 

A detailed device list will be displayed.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_DevicesList.png" alt="Device List" style="max-width: 100%">


### <a name="device-list"></a>Device list

For each device, the device list shows the following information provided in columns:

|Column|Description|
|:---|:---|
|Status|An icon representing the connection status. For details, see [Connection monitoring](#connection-monitoring).
|Name|Unique name of the device.
|Model|Model type of the device. Not always displayed, depends on browser width.
|Serial Number|Serial number of the device. Not always displayed, depends on browser width.
|Group|Group the device is assigned to, if any.
|Registration Date|Date when the device was registered to your account.
|System ID|System ID of the device.
|IMEI|IMEI of the device.
|Alarms|The alarm status of the device, showing number and type of alarms currently unresolved for the device. See [Working with alarms](#alarm-monitoring) for further information on working with alarms.

The devices list displays up to 100 rows. If a list contains more than 100 devices, click **Load more** at the bottom of the list to display the next 100 entries.

When hovering over a row in the list, a **Delete** button appears at the right. Click it to delete the device permanently.

**Important:** Deleting a device means to remove the device from Cumulocity database including all its generated data. Alternatively, you can arrange all retired devices in one group (see [Grouping Devices](#grouping-devices)). This ensures that all reports remain correct. To prevent alarms from being raised for the retired devices, disable [connection monitoring](#connection-monitoring). Deleting a device does not delete the data of its child devices.


### <a name="searching-devices"></a>Searching for devices

Cumulocity includes a full-text search for devices. 

Click the **Search** button at the top right and enter a search term into the textbox. Cumulocity returns all devices containing this term in any property (name, model, any fragment...)

Our example shows a search for "Ublox C027". 

**Info**: Unlike filtering, the use of wildcards in a search is not supported.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_Search.png" alt="Device Management Search" style="max-width: 100%">

### <a name="filtering-devices"></a>Filtering devices

The device list offers a filtering functionality to filter devices in the list for specific criteria. 

Filtering is available on every column. Just click the filter icon next to the name of the column you want to set a filter for. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_Filtering.png" alt="Filtering" style="max-width: 100%">

A window will come up in which you can specify your filter options.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_FilteringOptions.png" alt="Filter Options" style="max-width: 50%">

Most columns represent text fields. You can filter these columns by simply entering an arbitrary text into the textbox as in the Search field. Click **+ Or** to add another textbox if you want to filter for more than one term. 

Apart from filtering for text there are several other options:
* In case of date fields (i.e. "Registration date"), you specify a date range to filter for. 
* In the "Status" column you can filter for various criteria representing the send, push or maintenance status of the device.
* In the "Alarm" column the filtering options you may select correspond to the alarm types (critical, major, minor, warning, no alarms).

In the "Filter options" window, click **Ascending** or **Descending** if you want the devices to be sorted in a specific order. Finally, click **Apply** to carry out the filtering. 

The devices list will now only display devices matching the filtering options.

Click **Clear filters** at the right of the top menu bar if you want to clear all filters and view all devices.


## <a name="grouping-devices"></a>Grouping Devices

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

## <a name="device-details"></a>Device Details

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


## <a name="monitoring-and-comntrolling-devices"></a>Monitoring and Controlling Devices

### <a name="map"></a>Locating devices

Cumulocity provides the option to view all devices in your account on a map.

Click **Map** in the "Devices" menu in the navigator to display a map showing all devices in realtime. 

Devices are represented as "pins". Click a pin to see the name of the respective device. Click the device name to switch to the device details. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_Map.png" alt="Device Map" style="max-width: 100%">

### <a name="connection-monitoring"></a>Connection monitoring

In the Device Management application you have the option to monitor the connections to your devices. 

This can be done at the level of individual devices (see below) or across multiple devices in a list.

To monitor the connections for multiple devices, open any device list.

The connection status is represented by arrows in the "Status" column in the device list.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_ConnectionStatus.png" alt="Connection Status" style="max-width: 100%">

**Send connections**

The top arrow represents the Send connection (traffic from the device to Cumulocity). The status for the Send connections may be one of:

* Online (data was sent within the required interval)- indicated by a green arrow
* Offline (data was not sent within the required interval) - indicated by a red arrow
* Unknown or not monitored (no interval configured) - indicated by a grey arrow

Hovering over the arrow displays the timestamp of the last request from the device to the server. 

When a device is detected to be offline (stops sending data within required interval and top arrow changes to red color), an unavailability alarm is created for the device reading "No data received from device within required interval".

**Push connections**

The bottom arrow represents the Push connection (from Cumulocity to the device). The status for the Push connections may be one of:

* Online (connection established)- indicated by a green arrow
* Offline (connection not established) - indicated by a red arrow
* Not monitored - indicated by a grey arrow

>**Info**: The Push connection means the connection from Cumulocity to /devicecontrol/notifications API, **not** to realtime API.

**Maintenance mode**

Moreover, the device may be in  "Maintenance" mode, indicated by the tool icon in the "Status" column. This is a special connection status indicating that the device is currently being maintained and cannot be monitored. While a device is being maintained, no alarms for that device are raised. 

You can turn maintenance mode on or off for a device through a slider in the "Connection monitoring" card in its "Info" tab. 


**Connection monitoring in the "Info" tab**

To monitor the connections of a particular device, go to the "Info" tab of this device. Under "Device status", the connection status for the device is displayed. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_DeviceInfoStatus.png" alt="Device Status" style="max-width: 50%">

Below the send connection and push connection status, the time of the last communication is displayed. 

> **Info**: "Last communication" and "Last updated" are two entirely different time stamps. "Last communication" indicates when a device has last sent data. "Last updated" indicates when the inventory entry of the device was last updated. This update may have originated from the device, from the web user interface or from another application.

In the  "Required Interval" field you can specify an interval. This parameter defines how often you expect to hear from the device. If, for example, you set the required interval to 60, you expect the device at least to communicate once in an hour with Cumulocity. The interval is either set by the device itself, based on the device's knowledge how often it will try to send data, or it is set manually by you.

If an interval is set, you will find the **Maintenance** slider below it.

With the **Maintenance** slider you can turn the maintenance mode for the device on or off which is immediately reflected in the connection status. 

<img src="/guides/users-guide/DeviceManagement/DevMgmt_DeviceInfoStatusMaintenance.png" alt="Device status maintenance" style="max-width: 50%">

>**Info**: Connection monitoring is not realtime. This means that the connection status will not change immediately when you switch off a device. Depending on your network, it may take about 20 minutes until a broken connection is discovered, since the network will retry sending data for a significant amount of time.

### <a name="monitoring-services"></a>Service monitoring

Cumulocity distinguishes between connection monitoring and service monitoring. Connection monitoring, as described in the previous section, only indicates if the device is communicating with Cumulocity, it does not automatically indicate if it is functional or not.

Service monitoring indicates if a device is in service. For example, a vending machine is in service if it is ready to sell goods. A vending machine can sell goods using cash money without a connection to Cumulocity. From the perspective of a merchant, it is in service. Similar, if you switch off the power on a gateway, the devices behind the gateway can still continue to work.

Cumulocity considers a device to be in service while there is no critical, unresolved alarm present for the machine. This is displayed as a share of time such an alarm was present. If a machine didn't have any critical alarms whatsoever during a time period, it was 100% in service. If half of the time there was some critical, unresolved alarm, the machine was 50% in service.

While a machine is offline, Cumulocity assumes by default 

* that the machine continues to stay in service during the connection outage, if this was the status before it lost connection.
* that the machine continues to stay out of service, if this was the status before it lost connection.

There may be exceptions from this rule. If your vending machines rely exclusively on cashless payment, losing the connection to the network means that your machine is out of service and stops selling. In this case, unavailability alarms must be set in the [Administration application](/guides/users-guide/administration#alarm-mapping) which have "critical" severity instead of "major" severity.

Cumulocity displays service availability at the level of individual devices and across all devices. 

To check the service monitoring of this specific device, click the "Service monitoring" tab in the details of a particular device.

To display the overall service across all devices, click "Service monitoring" in the navigator.
 
![Service monitoring](/guides/users-guide/servicemonitoring.png)

The "Service Monitoring" page shows the availability percentage of devices for the last day, last week and last month. 


### <a name="alarm-monitoring"></a>Working with alarms

Devices can raise alarms to indicate that there is a problem requiring an intervention. 

Cumulocity displays alarms at the level of individual devices and across all devices:

* Click "Alarms" in the "Overview" menu in the navigator, to check the alarms for all devices. 
* Switch to the "Alarm" tab in the details of a particular device, to check the alarms of this specific device.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_AlarmDevice.png" alt="Alarms" style="max-width: 100%">

By default, 

* only unresolved alarms are shown. If you turn on **Show cleared alarms** at the right of the top menu bar, you will see the entire alarm history.
* alarms are shown as coming in from the devices in realtime. Click **Realtime** in the top menu bar to disable realtime updates.

Alarms are classified according to their severity. Cumulocity includes four different alarm types:

|Severity|Description|
|:---|:--|
|Critical|The device is out of service and should be fixed immediately.
|Major|The device has a problem that should be fixed.
|Minor|The device has a problem that may be fixed.
|Warning|There is a warning.

The "Alarm" tab is split into four sections corresponding to these alarm types.

By clicking one of the buttons at the top, the corresponding section will be hidden. Click it again to show the section again.
 
Within each section, the alarms are sorted by their occurrence, displaying the most recent alarm first.

In each row, the following information for an alarm is provided:

|Info|Description|
|:---|:---|
|Severity|One of critical, major, minor, warning (see above).
|Count|The number of times this alarm was sent by the device. Only one alarm of a particular type can be active for a certain device. If another alarm of the same type is sent by the device, the number is increased by 1.
|Description|An arbitrary text describing the alarm.
|Status|The status of the alarm. An alarm can be: <br/> **Active**: When it was raised and nobody is so far working on the alarm. <br/>**Acknowledged**: When someone changed the status to **Acknowledged** to indicate that someone is working on the alarm.<br/>**Resolved**: When either someone manually set the status to Resolved or when the device detected by itself that the problem has gone.
|Last occurrence|Timestamp of the last occurrence of the alarm (device time).
|Device|The name of the device. Clicking the name leads you to the detailed view of the device.

Click the arrow on the right of a row to expand it and display further details on the alarm.

* **Status**: Providing further information on the alarm status and showing the type of the alarm. The type info is used for duplicating alarms and for configuring the priority of alarms in the [Administration application](/guides/users-guide/administration#alarm-mapping).
* **Change Log**: Providing the server time when the alarm was created, which may differ from the device time.

To change the status of an alarm, hover over it and click the button for the desired status or click the menu icon and from the context menu select the desired status.

![Alarm dropdown](/guides/users-guide/DeviceManagement/DevMgmt_AlarmDropdown.png)

<!-- Seems to be no longer relevant
* **Additional information**: An alarm can contain arbitrary additional information provided by the device.
* **Audit log**: Along with the alarm, a log of changes to the alarm is stored. This creates an alarm history with various data. -->

### <a name="operation-monitoring"></a>Working with operations

Operations are used to remote control devices. 

Cumulocity displays operations at the level of individual devices and across all devices:

* Click "Device control" in the "Overview" menu in the navigator to see the operations for all devices. 
* * Switch to the "Control" tab in the details of a particular device to see the operations of this specific device.

![Device Control](/guides/users-guide/DeviceManagement/DevMgmt_DeviceControl.png)

Operations can be in any of four states, indicated by meaningful icons:

|State|Description|
|:---|:--|
|Pending|The operation has just been created and is waiting for the device to pick it up.
|Executing|The operation has been picked up by the device and is being executed.
|Successful|The operation has been successfully executed by the device.
|Failed|The operation could not be executed by the device.

By clicking one of the state buttons at the top, the corresponding operations will be hidden. Click it again to show the operations again.

Click **Realtime** at the right of the top menu bar to see operations coming in from the devices in realtime.

Operations are listed in descending time order. Operations are executed strictly according to this order.

For each operation, the following information is provided:

|Info|Description|
|:---|:---|
|Status|One of pending, executing, successful, failed (see above).
|Name|Name of the operation.
|Device|The name of the device. Clicking the name leads you to the detailed view of the device.

Clicking a row expands it and displays further details on the operation.

* **Details**: Providing information on the operation name and status. In case of status = FAILED the reason for the failure is provided. 
* **History of Changes**: Providing information on the past changes of the operation.

![Operation Details](/guides/users-guide/DeviceManagement/DevMgmt_OperationDetails.png)

<a name="bulk-operations"></a>**Bulk Operations**

For easier handling of devices, Cumulocity offers bulk operations. With bulk operations you can at once execute operations for each device within one group.

To execute bulk operations for a group, follow these steps:

1. Select a device and open the "Control" tab.
2. Create an operation.
3. Hover over the operation you want to execute.
4. Click the menu icon.
5. In the context menu click **Execute for whole group**.

![Execute bulk operations](/guides/users-guide/executebulkoperations.png)

In order to view the status and progress of your operations, simply select the desired group and click the "Bulk Operations" tab.

![Bulk operations tab](/guides/users-guide/DeviceManagement/DevMgmt_BulkOperations.png)

To edit a bulk operation, follow these steps:

1. Hover over the bulk operation you want to edit and click the menu icon. 
2. In the context menu click **Edit operation schedule**.
3. In the upcoming window you may change the "Start Date" and "Delay" values.
4. To change operation details, click **Show operation details**. 
5. Click **Reschedule** to apply your changes. 

![Edit bulk operations](/guides/users-guide/DeviceManagement/DevMgmt_BulkOperationsEdit.png)

To delete a bulk operation, hover over the bulk operation you want to delete and click the menu icon. In the context menu, click **Cancel operation**.

### <a name="events-all"></a>Troubleshooting devices

Troubleshooting devices at a more detailed level can be done with the help of events. Events are low-level messages sent by devices that are usually used for application-specific processing. For example, a vending device sends its realtime sales in the form of events. 

Cumulocity displays events at the level of individual devices and across all devices: 

* To see the events of this specific device, click the "Events" tab.
* To see the operations for all devices, click "Events" in the "Overview" menu in the navigator.
*  
![Events](/guides/users-guide/DeviceManagement/DevMgmt_Events.png)

Per default, events are shown as coming in from the devices in realtime. To disable realtime updates, click **Realtime** at the right of the top menu bar.

For each event, the following information is provided:

|Info|Description|
|:---|:---|
|Timestamp|Timestamp when the event has been executed.
|Name|Name of the event.
|Device|The name of the device sending the event. Clicking the name leads you to the detailed view of the device.

In the event list the latest entry is displayed on top.

Clicking a row expands it and displays further details on the event (as type and position of the device).

Since devices may send large amounts of event data, you can filter the data to be displayed by date. 

Select a start date and an end date from the fields in the top menu bar and click the **Filter** button to apply the filter. Click the **Clear** button to clear the filter again.

## <a name="managing-device-protocols"></a> Managing Device Types

To process data from various device types, Cumulocity uses device protocols.

Click “Device protocols” in the “Device types” menu to access the “Device protocols” page.

In the “Device protocols”  page you will find a list with all device protocols available in your account.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_DeviceProtocols.png" alt="Device protocols" style="max-width: 100%">

The device protocols list shows the following information on each device:

* the device protocol type (IMPACT, LWM2M)
* the device protocol name 
* the number of resources for the device (at the right)

To add a new device protocol, click **Add device protocol** at the top bar. For details on adding a device protocol, follow the documentation of the particular device type you want to add:

* [IMPACT](/guides/users-guide/impact)
* LWM2M

To edit a device protocol, either click on the protocol or click the menu icon at the right of the row and in the context menu click **Edit**. 

To remove a device protocol, click **Remove** in its context menu.


## <a name="managing-device-data"></a> Managing Device Data


### <a name="software-repo"></a> Managing device firmware and software

In the Firmware and in the Software repository Cumulocity offers to collect reference firmware and software for devices respectively.

The description below exemplarily refers to firmware but also applies to device software.

Open the "Firmware repository" from the "Management" menu in the navigator.

The available firmware objects will be displayed, presented as cards in a grid.

![Firmware List](/guides/users-guide/DeviceManagement/DevMgmt_FirmwareRepository.png)

Click **Details** on a specific object to "turn around" its card and display details.

In addition to the object name and version, you will here find the name of the file containing the firmware. 

Moreover, several buttons allow you to update the information (see also "How to add a firmware object" below).

**How to add a firmware object**

To add a firmware object, follow these steps:

1. Upload the firmware file in the [Administration application](/guides/users-guide/administration#files). This step is not necessarily required since some manufacturers offer the firmware online.
2. In the "Firmware repository" page, click **Add firmware** at the right of the top bar menu.
3. In the upcoming window, enter a name for the firmware and its version.
4. Specify the file for the firmware by choosing or uploading it or enter the URL from which the device can download the firmware. 
5. Click **Save** to save your settings.

Similarly, you can add a new software object to the Software repository.

**How to install firmware on a device**

Open the device list by clicking "All devices" in the navigator and select a device from the device list.

Open the "Software" tab for the device and click **Install firmware**. 

For further information on these steps, refer to the description of the ["Software"](#software) tab.

>**Info:** To store other types of binaries in Cumulocity, switch to the [Administration application](/guides/users-guide/administration#files).

**How to install firmware on multiple devices**

Cumulocity offers the option to execute firmware or software updates for multiple devices at once. To do so, follow these steps:

1. Execute the software update in a single device to test that the new version really works.
2. Navigate to operation and select **Execute for the whole group**.
3. Fill the form to schedule the bulk operation and click **Create**.

The operation status can be viewed in the "Bulk Operation" tab of the selected group. For further information, refer to [Bulk Operations](#bulk-operations).

### <a name="credentials"></a>Managing device credentials

The "Device credentials" tab lists all credentials that have been generated for your connected devices. Each device that has been [registered](#device-registration) shows up here with the naming convention "device_&lt;id&gt;".

Click the arrow in the "Global roles" column of a device to open a list with available global roles. Assign or remove permissions for an individual device by selecting/deselecting roles, and click **Apply** to save your settings.

Click the menu icon at the right of a device to access the following functionalities:

* **Edit** - To open the device credential details (see below).

* **Disable** - To temporarily disconnect a device.

* **Delete** - To delete the credentials of a device. This might be required if you have carried out a factory reset on a device. In this case, the device will often loose its assigned credentials. Delete it and continue with the normal [registration process](#device-registration) to re-register the device.

In the details page of any particular device credentials you can

* disable/enable a device with the "Active" slider,
* change the password for a device,
* assign or remove permissions for an individual device by selecting/deselecting roles in the "Global roles" list. 

<!--
![Bulk provisioning](/guides/users-guide/autoregister.png)

Device credentials can also be provided from a CSV file. Files can be uploaded using the button pointed with an arrow. More details on the file structure can be found in under [Bulk-registering devices](#creds-upload) above.-->

## <a name="configuration-snapshots"></a>Configuration Repository

Cumulocity allows to retrieve configuration data and store and manage it in a Configuration repository. The configuration data contains the parameters and the initial settings of your device.

Configuration snapshots help you, for example, to apply the same configuration to multiple devices as described below. 

In the "Configuration repository" page which you open from the "Management" menu in the navigator, all available configurations are listed. Each entry shows the configuration name, the device from which it has been uploaded and the upload timestamp.

![Configuration Repository](/guides/users-guide/DeviceManagement/DevMgmt_ConfigurationRepository.png)

Click a configuration in the list to open it. You may modify the settings here and apply them by clicking **Save**. Refer to the section below for details on the fields.

![Configuration Repository](/guides/users-guide/DeviceManagement/DevMgmt_ConfigurationDetails.png)

### How to add a snapshot configuration from a file

To add a new configuration from a file, follow these steps:

1. Click **Add configuration snapshot** at the right of the top menu bar. 
2. In the upcoming window, enter a unique name and optional description for the configuration.
3. In the "Device Type" field, enter a device type. The device type can be found in the "Info" tab of the target device.
4. Select the configuration snapshot file by uploading or choosing a file or providing an external URL. 
5. Click **Add configuration snapshot** to save your settings.

The snapshot will be added to the Configuration repository.

![Configuration Snapshot Repository](/guides/users-guide/configsnaprepo.png)


### How to retrieve a current snapshot from a device

In addition to adding configurations from a file you can also add configurations by retrieving them from a device.

In order to retrieve a current configuration snapshot from a device, follow these steps:

1. Navigate to the desired device and open its "Configuration" tab. 
2. Under "Configuration snapshot", click **Get new snapshot from device** at the top right. 

The retrieved snapshot can be found in the "Configuration repository", accessed through the "Management" menu of the navigator.

![Retrieve Configuration Snapshot](/guides/users-guide/retrievesnap.png)

### How to apply a configuration snapshot to a device

In order to apply a configuration snapshot to a device, follow these steps:

1. Navigate to the desired device and open its "Configuration" tab. 
2. Under "Configuration snapshot", select a configuration from the dropdown field.
3. Click **Put new snapshot to device** to apply the selected snapshot to the device.

![Apply new snapshot to a device](/guides/users-guide/addsnap.png)

### How to apply a snapshot configuration from one device to another

In order to apply a configuration snapshot from one device to another, follow these steps:

1. Navigate to the device which has your desired configuration and open the "Configuration" tab.
2. Under "Configuration snapshot", click **Get new snapshot from device** at the top right.
3. Navigate to the other device and open its "Configuration" tab.
4. Under "Configuration snapshot", select the new configuration from the dropdown field and click **Put new snapshot to device**.
 
>**Info**: When you apply snapshot configuration from one device to another, the configuration may contain data which is device-specific.


## <a name="simulator"></a>Simulators

With the Cumulocity simulator all aspects of IoT devices can be simulated:

* Setting up a simulated device or a network of simulated devices
* Specify which operations the device can process
* Create work instructions based on predefined message templates or user defined templates and schedule work steps
* Create up to ten devices of a defined type
* Generate messages for measurements, alarms, events and inventory
* View simulation problems as alarms

### What is a simulator?

With the simulator you can create artificial devices that have the same level of functionality as connected hardware devices.

A simulator uses a playlist to simulate messages that the device sends to the Cumulocity platform. A playlist is a series of instructions that the simulator executes one after the other. When the last instruction is reached, the simulator starts again with the first one.

An instruction can either send a message (measurements, alarms, events and inventory) or wait for a specified time (sleep). 

A message is defined by choosing a message template (like sending a temperature) and providing the values for this template (23.0 degrees). Many predefined message templates are provided, i.e. for creating a measurement, sending an event, creating and cancelling an alarm. These templates are based on MQTT static templates. Additionally, custom message templates can be defined using the [SmartREST template editor](#smartrest). 

### The Simulator tab
In the navigator, click "Simulator" in the "Devices" menu to open the "Simulator" tab.

All simulators which you can access will be listed here. Click the menu icon at the top right of a simulator card to open a context menu from where you can edit, clone or remove a simulator.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_SimulatorCard.png" alt="Simulator card" style="max-width: 50%">

### How to create a simulator

To set up a new simulator follow these steps:

1. Click **New Simulator** at the right of the top menu bar. 
2. In the upcoming window select a simulator type from the dropdown list in the "Presets" field. Select "Empty simulator" to create a simulator from scratch or select one of the sample simulators.
3. Enter a meaningful name for the simulator. 
4. Select the number of instances for this simulator (up to ten).
3. Click **Continue** to proceed to the next dialog.

<img src="/guides/users-guide/addsim.png" alt="Add Simulator" style="max-width: 60%">

### Instructions

After setting up a simulator you can add instructions which define what your simulator is supposed to do. Instructions are single tasks added to a playlist through which the simulator will work. 

Instructions can be viewed and edited on the "Instructions" tab of the simulator.

![Add Instructions](/guides/users-guide/addinstructions.png)

**Examples**

Within the presets, samples instructions are already added. For example, the "Temperature measurement" preset already has instructions in it for the steps "Create measurement" and "Sleep". 

![Add Instructions Step 2](/guides/users-guide/addinstructions2.png)

The measurement instruction refers to a fragment. Fragments are used to identify capabilities of a managed object. Find more details about fragments here: 
[Sensor Library ](https://www.cumulocity.com/guides/reference/sensor-library/) 

![Add Instructions Step 3](/guides/users-guide/addinstructions3.png)

The "Sleep" instruction requires one value for its duration in seconds. 

The panel on the right changes according to the type of instruction selected on the left.

![Add Instructions Step 4](/guides/users-guide/addinstructions4.png)

### Supported operations

In the "Supported operations" tab of a simulator you can turn on or off specific operations like configurations or software/firmware updates.

![Operations Off](/guides/users-guide/supop1.png)

![Operations On](/guides/users-guide/supop2.png)

Click **Add custom operation** to specify a customized operation and add it to the list.

### Alarms (simulator)

The "Alarm" tab of a simulator displays alarms related to the simulator itself (not to the simulated device), i.e. if the simulator itself does not work correctly, you will find alarms here. Refer to [Working with alarms](#alarms) for information on alarms. 

![Simulator Alarm](/guides/users-guide/simalarm.png)


## <a name="smartrest"></a> SmartREST Templates

### Introduction

SmartREST templates are a collection of request and response templates used to convert CSV data and Cumulocity Rest API calls. For example, you can use SmartREST templates to easily add devices to the platform instead of manually writing the requests each time.

To ease the device integration, Cumulocity supports static templates that can be used without the need for creating your own templates. These templates focus only on the most commonly used messages for device management. For further information on static templates, refer to the [*MQTT Developer´s Guide*](/guides/mqtt/static-templates/).

Open the SmartREST template list from the "Device Types" menu in the navigator. 

![template view](/guides/users-guide/templateview.png)

For each template, the following information is provided:

* Template name, e.g. Camel
* Template ID, e.g. 99
* Number of send messages
* Number of responses

There are two ways to add a SmartRest template:

- Import an already existing template.
- Create a new template.

### How to import an existing SmartREST template

1. Click **Import** at the right of the top menu bar.
2. In the upcoming window, choose a file to upload by browsing for it.
3. Enter a template name and a unique template ID (both mandatory fields). 
4. Click **Import** to import the template.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_TemplateImport.png" alt="Import template" style="max-width: 50%">

### How to create a new SmartREST template

1. Click **New** at the right of the top menu bar.
2. In the upcoming window, enter a template name and a unique template ID (both mandatory fields). 
4. Click **Continue** to proceed adding messages or responses.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_TemplateCreate.png" alt="Create template" style="max-width: 50%">

### How to add a message

The message template contains all necessary information to convert the SmartRest request into a corresponding Rest API call which is then sent to the platform.

To add a new message, navigate to the "Messages" tab in your desired SmartREST template and click **Add message**. Complete the following fields:

|Field|Description|
|:---|:---|
|Message ID|Unique integer that will be used as a message identifier. It must be unique among all message and response templates.
|Name|Name for the message. Mandatory.
|Target REST API|REST API for the target. Dropdown list. May be one of Measurement, Inventory, Alarm, Event, Operation.
|Method|Request method. May be one of POST, PUT, GET, depending on the selected Target REST API.
|Include Responses|Click this checkbox if you want to process the results of the request with response templates.
|REST API built-in fields|These fields are optional and vary depending on the target REST API selected. In case no value is provided, a device will be able to set it when sending an actual message.
|REST API custom fields|Additional fields can be added by clicking **Add field**. Enter the API key and select the desired data type.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_TemplateMessage.png" alt="Message" style="max-width: 100%">

In the Preview you can see the preview of your request message.

Click **Save** to save your settings.

To delete a message, open it and click **Remove** at the bottom.

### How to add a response

A response template contains the necessary information to extract data values from a platform REST API call response, which is then sent back to the client in a CSV data format.

To add a new response, navigate to the "Response" tab in your desired SmartREST template and click **Add response**. Complete the following fields:

<img src="/guides/users-guide/DeviceManagement/DevMgmt_TemplateResponse.png" alt="Response" style="max-width: 100%">

|Field|Description|
|:---|:---|
|Response ID|Unique integer that will be used as a response identifier. 
|Name|Name for the response. Mandatory.
|Base Pattern|Base pattern for the response.
|Condition|Condition value of the response.
|Pattern|At least one pattern is required. Click **Add pattern** and enter a pattern value.

Click **Save** to save your settings.

To delete a response, open it and click **Remove** at the bottom.

### How to edit or delete a SmartREST template

To edit a SmartREST template, either click the desired template or click the menu icon and in the context menu click **Edit**.

To delete a SmartREST template, click **Remove** in its context menu.

### How to export a SmartREST template

To export a SmartREST template, click the menu icon and in the menu click  **Export**. The template will automatically be downloaded.

To export a SmartREST template as CSV file follow these steps:

1. Open the template of your choice and select the "CSV Preview" tab. 
2. In the "CSV Preview" tab which provides additional information on messages and responses, click **Export CSV**. 
1. In the upcoming window, specify the preferred options for the field separator, decimal separator and character set.
1. Click **Download** to download the template as CSV file.

<img src="/guides/users-guide/DeviceManagement/DevMgmt_TemplateExportCSV.png" alt="Export CSV" style="max-width: 50%">

## <a name="cloud_remote_access"></a>Cloud Remote Access

### Introduction

Cumulocity Cloud Remote Access implements Virtual Network Computing (VNC) to remotely access operating panels and other devices via a web browser.

![VNC](/guides/users-guide/VNC1a.png)

Cloud Remote Access works as in the illustration below. Starting from the remote-controlled device: The device runs a VNC server and is connected to a gateway compatible with Cloud Remote Access. This gateway must be registered as a device within the Device Management application in Cumulocity. More information about registering devices and instructions can be found here: [Device Registration](https://www.cumulocity.com/guides/users-guide/device-management/#device-registration).

![VNC2](/guides/users-guide/VNC2.png)

With Cloud Remote Access users can

* view status visualizations and track updates of remote devices immediately as if the user were at the device location,
* connect to remote devices easily as complex VPN setups are not required. 

![VNC1b](/guides/users-guide/VNC1b.png)

The connection to remote devices is securely encrypted through TLS technology. Additionally, passwords are encrypted in your Cumulocity account, so that you do not need to manage them elsewhere.

### Using Cloud Remote Access

Cloud Remote Access is available in the Device Management application. 

To use Cloud Remote Access, the following prerequisites have to be met:

* a Cloud Remote Access compatible gateway connected to your Cumulocity account;
* a device with a VNC server that is connected to the gateway and reachable from the gateway;
* Cloud Remote Access included into your subscription plan. 

>**Info**: If the prerequisites are met and you do not see the "Remote access" tab in the tab list of your gateway contact sales@cumulocity.com.

Click "All devices" and select the desired gateway from the device list. 

![router device](/guides/users-guide/routerdevice.png)

When you open the device you will find the “Remote access” tab in the tab list of the device. 

In the "Remote Access" tab you will find a list of devices for remote control, so-called "endpoints".

### How to add and connect to endpoints

The "endpoint" is the IP address and port of the VNC server running on the device. The IP address and port need to be reachable from the gateway. 

![Endpoints](/guides/users-guide/endpoints.png)

To configure remote devices, click **Add endpoint**. 

In the upcoming window, enter a description for the remote access endpoint, the IP address and port, and the password of the VNC server. Click **Save** to add the endpoint to the list.

![Remote access endpoint](/guides/users-guide/remoteaccess.png)

>**Info**: To be able to configure an endpoint, you need "Change" permission for "Remote access" and "Device control". To read data, a “Read” permission is sufficient. For more information on permissions, refer to the [*Administration Guide*](https://www.cumulocity.com/guides/users-guide/administration/#users).

To connect to configured endpoints, choose an endpoint in the "Remote access" tab and click **Connect**. The VNC connection will start. 

![Connect Endpoint](/guides/users-guide/connectendp.png)

A new browser tab will open displaying the front screen or operating panel of the device you are connected to. The top bar of the screen will show “starting VNC handshake” when the process is starting. 

To edit or remove an endpoint, click the menu icon at the right of a row and select **Edit** or **Remove** from the context menu.

![Edit endpoints](/guides/users-guide/editendpoint.png)

### Troubleshooting

If you cannot set up new endpoints, check if you have sufficient permissions.

To set up new endpoints, you need "Change" permission for "Device control" to be able to register a device and “Change” permission for "Remote access" to be able to add an endpoint. 

To establish a connection to a remote operating panel, a “Read” permission for "Remote access" is sufficient.

For more information on permissions, refer to the [*Administration Guide*](https://www.cumulocity.com/guides/users-guide/administration/#users).

The VNC connection via a gateway to a remote VNC server can fail because of network problems. In this case you need to contact your network administrator.

The functionality has been on the following VNC servers:

* Real VNC Connect 6.0.2	
* TightVNC 1.3.9
* TigerVNC 1.7.0
* EfonVNC 4.2

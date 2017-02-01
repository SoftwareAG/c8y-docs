---
order: 20
title: Device management
layout: default
---
## <a name="overview"></a>Overview

The Device Management application shows you your connected devices and enables you to manage their status. The Device Management gives you the following options:

* [Connect](#device-registration) new devices to your account and disconnect them.
* [List](#viewing-devices), [search](#searching-devices) and [group](#grouping-devices) the connected devices.
* [View](#device-details) details of the devices and check their status.
* Monitor the [connection](#connection-monitoring) quality and the [service](#monitoring-services) status of devices.
* [Locate](#map) devices.
* Work with [alarms](#alarm-monitoring) from devices.
* [Remote control](#operation-monitoring) devices.
* [Troubleshoot](#events-all) devices.
* [Manage](#software-repo) the software and the firmware on devices.
* [Manage](#credentials) the credentials of devices.
* [Simulate](#simulator) devices.

The Device Management Application looks like this:

<img src="/guides/users-guide/app.png" alt="Device Management" style="max-width: 100%">

**The following sections will walk you through the various menus of the Device Management application.**

## <a name="device-registration"></a>Connecting devices manually

This section describes the general procedure for manually connecting devices to your Cumulocity account. Only some steps in the procedure may be specific to the type of device that you are using. Locate your device type in the "Device Guide ", the start page of the developer center of our website, to find more information or consult the manual of your device if there are any difficulties.

To connect devices to your Cumulocity account, click "Device Registration" in the navigator and follow these steps:

1.  Enter the ID of the device in the "Device ID" text field and click "Register Device". To determine the ID, consult the device documentation. For mobile devices, the ID is usually the IMEI (International Mobile Equipment Identity) often found on the back of the device.
2.  Now the device listed is visible by its IMEI number with the status reading as "Waiting for connection". Turn on the device and wait for a connection to be established.
3.  After the device connected, the status should change to "Waiting for acceptance". You will need to confirm that this is indeed the device you want to add by clicking on the green "accept" button on the right of your device's listing.
4.  The status of your device should now read "Accepted". Once that happens your device will be connected to your account.

You are now ready to manage the device.

<img src="/guides/users-guide/registration2.png" alt="Device registration" style="max-width: 100%">

## <a name="creds-upload"></a>Bulk-registering devices

For connecting larger amounts of devices, you can upload a CSV file with the IDs and credentials. When uploading the CSV file, Cumulocity creates user accounts for each device listed in the file. Devices can then connect securely to Cumulocity without the need to do a manual "Device Registration" step as described in the previous section.

The CSV file needs to have a header row followed by the actual data. The header row needs to contain at least one column marked "ID" and one column marked "Credentials". Here is an example of a valid CSV format:

	ID;Credentials;Tenant;Group;ICCID;NAME
	006064ce800a;LF2PWJoLG1Fz;management;Sample_Düsseldorf;+491555555;Sample_Device1
	006064ce8077;OowoGKAbiNJs;management;Sample_Düsseldorf;+491555555;Sample_Device2

Use the "Upload" button to upload the CSV file, as shown in the screenshot below. After the data is imported, you will get feedback on the number of devices that were pre-registered as well as on any potential errors that may have occurred.

<img src="/guides/users-guide/autoregister.png" alt="Bulk registration" style="max-width: 100%">


To connect the devices, the devices need to be pre-provisioned with related information. More specific, each device needs to be configured as follows:

* Username: The username to access Cumulocity must have the form &lt;tenant&gt;/device_&lt;id&gt;. &lt;Tenant&gt; refers to the tenant where the CSV file is imported, and  &lt;id&gt; refers to the respective value in the CSV file.
* Password: The password to access Cumulocity, equals the value "Credentials" in the CSV file.
* Device in managed object representation. Fields: "Type", "Name", "Iccid", "Idtype", "Path", "Shell" in the CSV file.

If you own a Cumulocity Dedicated or Private Edition, you can also register devices across multiple tenants by adding a "tenant" column to the spreadsheet and importing the CSV file from the "management" tenant.

For more information on the file format and accepted CSV variants, please see 
[Bulk device credentials](/guides/reference/device-credentials/#creds-upload).

## <a name="viewing-devices"></a>Viewing the connected devices

To view the connected devices, you can use the following tools.

* Select "All devices", which lists all connected devices (in pages of 1.000 devices).
* [Search](#searching-devices) for the device using the "search" text field.
* [Arrange](#grouping-devices) devices in groups and view the groups.

In all cases, you will see a list of devices as shown in the example below. The list consists of the following columns:

* An icon representing the connection status as described in "[Connection monitoring](#connection-monitoring)".
* The name of the device.
* Depending on browser width, the model and the serial number of the device.
* The alarm status of the device, how many critical, major, minor or warning level alarms are currently unresolved for the device. See "[Alarms](#alarm-monitoring)" for more information on working with alarms.
* A button for deleting the device.

Deleting a device means to remove the device from Cumulocity database including all its generated data. Alternatively, to deleting a device, you can also arrange devices into groups with one group holding all retired devices. This ensures that all reports remain correctly. To prevent alarms from being raised for the retired devices, disable [connection monitoring](#connection-monitoring). Deleting a device does not delete the data of its child devices.

<img src="/guides/users-guide/devicelist.png" alt="Device List" style="max-width: 100%">

In case a list contains more than 1.000 entries, only the first 1.000 entries are shown. Click the "Load more" link at the bottom to load the next 1.000 entries.

## <a name="searching-devices"></a>Searching for devices

Cumulocity includes a full-text search for devices. By entering a search term into the "search ..." text field, you can find all devices that contain that term. The image below shows an example of searching for devices that contain the term "Ublox C027". You can search for any text properties of a device. Prefixes are also supported. For example, a search for "Ublox" would also return the devices containing "Ublox C027". Suffixes are currently not supported. For example, searching for "C027" would not return the "Ublox C027".


## <a name="grouping-devices"></a>Grouping Devices

Devices can be arbitrarily grouped according to your use case. A device can be located in multiple groups, and groups themselves can be part of multiple groups again.

Cumulocity distinguishes between top-level groups and subgroups. Top-level groups are shown in the navigator at top-level in the section "Groups". They are your main entry point. Subgroups are used to further subdivide groups.

To create a top-level group, click on the cross button at the top-right next to the search field, then select "Add new group". A small window will appear. Enter group name and search for the desired devices that should be added to the group. Mark the devices and press the "Create group with X devices" button to finish the process. ("X" will be the number of devices that you marked.)

> A group can be created with "0" devices in it.


<img src="/guides/users-guide/addtopgroup.png" alt="Device Management" style="max-width: 100%">

You can also add devices to a group in two other ways: 

* Select a device and scroll down to the "Groups" section on the "Info" tab. Use the drop-down menu called "Select and Search groups" to select a group to add this device to.
* Select a group and go to the tab "Sub-assets" on the left and select it. Then click "Assign devices" at the top right of the group list. A new menu appears. Search for the devices that should be added in the search field. Then mark the relevant devices in the result and click the "Assign x devices" button at the bottom of the result list. 


<img src="/guides/users-guide/subassetadd.png" alt="Adding top-level groups" style="max-width: 100%">


To create a subgroup, just click "Add Group" when viewing a group.

To edit a group, click on the group's name. This allows you to edit the name of the group and assign user permissions for the group. For more information on permissions, see the [Administration](/guides/users-guide/administration) guide.

## <a name="Using Smart Groups"></a>Using Smart Groups


Smart groups are groups dynamically constructed based on filtering criteria. They have a temporary character because the group members can change constantly. These groups do not have fixed member listings.They have fixed criteria instead. This type of group can be used, for bulk upgrades for devices of a certain type to a new software or firmware version.

<img src="/guides/users-guide/smartfilters.png" alt="Adding top-level groups" style="max-width: 100%">

Smart groups can be created by selecting "All devices". To create a new group, simply use filters to select devices. Now click on “Create smart group” and name the group.

<img src="/guides/users-guide/smartgroup1.png" alt="Create a smart group" style="max-width: 100%">

When the group is created, it will appear as top-level group in the “Groups” section. You can adjust filter criteria by selecting the "Sub-assets" tab and modify the filter settings.

<img src="/guides/users-guide/smartgroup2.png" alt="Adding top-level groups" style="max-width: 100%">

Users can also delete smart groups from the top level groups. This operation is irreversible.


> Smart groups are not shown when using the Cockpit application.

<img src="/guides/users-guide/smartgroupdelete.png" alt="Adding top-level groups" style="max-width: 100%">

## <a name="device-details"></a>Viewing the device details

By clicking on a device in a device list, detailed information about the device is displayed. What is actually shown depends on the device type and your configuration of the user interface. If a device has not sent any measurements yet, there will be no "Measurement" tab.

At the top of the device details display, the name of the device is shown. Below the name, a list of breadcrumbs is displayed. If the device is part of an asset hierarchy (such as a group), you can use the breadcrumbs to easily navigate up that hierarchy. Since devices can be part of multiple hierarchies, several rows of breadcrumbs may be shown.

To the right of the name, a cogwheel is shown. Clicking on the cogwheel displays a drop-down menu with further actions that you can take, like creating a dashboard for the device.

If the device is compatible, an "Initiate measurement poll" menu item is available from the cogwheel. Using this item, you can request a device to send measurements with a specified frequency for a specific duration. This type of debugging avoids too much data traffic generated by sending measurements.

<img src="/guides/users-guide/devicedetails.png" alt="Device details" style="max-width: 100%">

Device details are divided into a number of tabs. The most common standard tabs visible are:

* [Info](#info)
* [Child devices](#child-devices)
* [Measurements](#measurements)
* [Alarms](#alarms)
* [Control](#control)
* [Text configuration](#config)
* [Binary configuration](#configsnap)
* [Software](#software)
* [Events](#events)
* [Location](#location)
* [Shell](#shell)
* [Permissions](#permissions)
* [Tracking](#tracking)
* [Service monitoring](#service-monitoring)
* [Logs](#logs)
* [Identity](#identity)

### <a name="info"></a>Info

The "Info" tab displays generic information for a device (from top left to bottom):

* **Connection monitoring**: The connection monitoring configuration, as described in more detail [below](#connection-monitoring).
* **Name** and **Type**: The display name of the device for you to edit, as well as an identifier for the specific type of device.
* **Hardware**: Hardware information read from the device.
* **Mobile**: If the device contains a modem, the mobile network information will be shown here. You will also see a "Locate" link. If enough information could be obtained, "Locate" will determine the rough location of the device using the opencellid.org database. This will not always be successful and depends on the format that the connected mobile network uses to report its data to the modem.
* **Groups**: The groups this device is a part of. You can add and remove groups here. For more information, see "[Grouping devices](#grouping-devices)".
* **System**: This section shows
 * The internal ID of the device (for access from Cumulocity's APIs).
 * The "owner" of the device (the Cumulocity user who created this device).
 * The time stamp when the device data was last updated.
 * A button to disconnect the device, provided you have administrative access to users and the device was connected using the "[Device registration](#device-registration)" feature.
* **Notes**: Text notes for a device you can share with your co-workers.

Many other fields in this tab are editable. It only makes sense to edit them if the device does not provide this information by itself. If the device provides this information, your edits will be overwritten by incoming information from the device. To save your edits, click on the "Save changes" button at the bottom of the screen.

> "Last communication" and "Last updated" are two entirely different time stamps. "Last communication" indicates when a device has last sent data. "Last updated" indicates when the inventory entry of the device was last updated. This update may have originated from the device, from the web user interface or from another application.

### <a name="child-devices"></a>Child devices

This tab shows other devices that are connected to the currently displayed device. For example, if you look at a gateway, the tab lists all machines connected to the gateway.

### <a name="measurements"></a>Measurements

This tab provides a default visualization of numeric data provided by the device in the form of charts. Charts are grouped into types of measurements, which can contain multiple graphs or "series". For example, the screenshot below shows a chart for motion measurement including graphs for acceleration in the three dimensions, and a chart with modem statistics in the form of signal strength and bit error rate.

![Measurements](/guides/users-guide/measurements.png)

If a chart contains graphs with different units, one Y-axis is rendered per unit. For example, motion measurements consist of three parameters with unit "meter per square second"; so only one axis is rendered. Modem statistics consist of signal strength in decibel milliwatts and bit error rate in percent, so one axis is rendered for each graph.

To see detailed information about the measured values, hover your mouse cursor over the chart. A tooltip will be displayed with detailed information on the measurement most close to your cursor. (The tooltip will "snap" to the closest measurement.)

**Time Ranges and Measurements**

By default, charts show the raw data of the last hour. You can change the time range on the X-axis by clicking on the drop-down menu reading "Last hour".

If you increase the time range, the drop-down menu reading "No aggregation" will switch to "hourly" or "daily". The chart now shows ranges instead of individual raw data points. For "hourly", the chart will show a range of the minimum and maximum value measured in one hour. For "daily", the chart will show the minimum and maximum value measured over one day. Likewise, the tooltips will now show ranges of values instead of individual values.

This enables you to get an efficient overview over larger time periods. A graph will only show 5.000 data points per graph maximum not to overload your desktop browser. If you select a fine focus resulting in more than 5.000 data points, a warning message will be shown: "Data has been truncated. Please use aggregation."

Clicking on the "Realtime" button will enable real-time user interface updates of the graphs as new data flows into the system from the connected devices. You can influence the graphical display and axes limits by setting up so-called "KPIs", see the [Administration](/guides/users-guide/administration#kpis) guide.

Important: In order to see measurement graphs, the device has to send measurements in a specified fragment format.

"fragment_name" : {
	"serie_name" : {
		"value" : ...
		"unit" : ...
	}
}

Real example: 

"c8y_SpeedMeasurement": {
      "Speed": { "value": 1234, "unit": "km/h" }
}

Fragment_name and serie_name can be replaced by different valid json property name, but that name cannot contain whitespaces and special characters like [],*. The structure has to be exactly as above, two-level deep json object.

### <a name="alarms"></a>Alarms

The "Alarms" tab displays the alarms of a device. Please see the Section "[Working with alarms](#alarm-monitoring)" for more information.

### <a name="control"></a>Control

This tab lists the operations that are sent to a device or were sent to a device. Please see the Section "[Working with operations](#operation-monitoring)" for more information on operations.

![Operations](/guides/users-guide/operations.png)

### <a name="config"></a> Text configuration

The text configuration allows you to configure the parameters and initial settings of your device. You can manually add or edit a device configuration.

<img src="/guides/users-guide/textconfig.png" alt="Device details" style="max-width: 100%">

### Adding or editing a device configuration

To manually add or edit a device configuration:

- Navigate to your desired device.
- Click on the "Configuration" tab.
- Under "Configuration", you can add or edit the device configuration as desired.
- When ready, click "Save".

### <a name="configsnap"></a> Binary configuration

The binary configuration allows you to retrieve, modify or save configuration data. The configuration data contains the parameters and the initial settings of your device.
This option can be found here:
<center><img src="/guides/users-guide/configrepscreenshot.png" alt="Device details" style="max-width: 100%"></center>
A good use-case example for the configuration snapshot is when applying the same configuration to multiple devices. With the configuration snapshot, you can configure one device, download the snapshot and apply it to other devices.

![Configuration Snapshot](/guides/users-guide/configsnap.png)

### Retrieving a current snapshot configuration from a device

In order to retrieve a current snapshot from a device, navigate to the device and then click on the "Configuration" tab. Then click on "Get new snapshot from device" at the top right corner. The retrieved snapshot can be found in the "Configuration repository".

The "Configuration repository" is located under the "Management" menu. 

![Retrieve Configuration Snapshot](/guides/users-guide/retrievesnap.png)

### Applying snapshot configuration to a device

In order to apply a new snapshot, navigate to a device and then click on "Configuration". Under "Configuration snapshot", you can select a configuration repository entry to use from the drop-down menu. When the entry file is selected, click on "Put new snapshot to device".

![Apply new snapshot to a device](/guides/users-guide/addsnap.png)

### Applying a snapshot configuration from one device to another device 


- Navigate to the configuration tab of the device which has your desired configuration.
- Retrieve the current snapshot from the device by clicking on "Get new snapshot from device".
- Navigate to the configuration tab of the other device, select the new snapshot from the drop down menu and click on "Put new snapshot to device".
 
> When you apply snapshot configuration from one device to another, the configuration may contain data that is device specific!
 
### Creating a snapshot configuration from a file

New configurations can be added to the "Configuration snapshots" list by clicking on "Add configuration snapshot". Then, you will be redirected to the "Configuration repository". All device configurations are kept in the "Configuration repository" which is located under the "Management" menu item. To add a new snapshot:

- Enter "Name".
- Enter "Description.
- Write the "Device Type" which can be found in the "Info" tab of the target device.
- Add the "Configuration snapshot file" by clicking either "Upload" or "Choose file".
- When ready, click "Save".

![Configuration Snapshot Repository](/guides/users-guide/configsnaprepo.png)

### <a name="software"></a>Software

This tab allows you to manage and update the firmware of a device and the software installed on a device. To install a new firmware, click on "Install firmware", then select a firmware image from the [firmware repository](#software-repo) and click the "Install" button.

Similar, to install a software on the device, click "Install software", select a software package from the [software repository](#software-repo) and click the "Install" button. Hover over a particular software package and click the "x" button to remove the package from the device.

![Software](/guides/users-guide/software.png)

Installing software and firmware usually includes a restart of the device. To monitor the progress of an installation, visit the "Control" tab.

### <a name="events"></a>Events

This tab enables low-level troubleshooting of a device, see "[Troubleshooting devices](#events-all)" for more information.

### <a name="location"></a>Location

The "Location" tab by default shows the location as reported by the device on a map. For devices that do not report a location, you can also manually set the location. Simply place the "pin" in the correct place of the displayed map.

The tab shows when a device contains c8y_Position property. When you send a new c8y position event, you can also set the same c8y_Position fragment on the device and it will automatically mark its position on the map.

### <a name="shell"></a>Shell

The device shell enables you to interactively work with remote devices. Many industrial devices support some form of command language, be it AT commands for modems, CSV-style commands for many tracking devices or elaborate scripting mechanisms such as Tixi TiXML. In the shell, you can send commands in the respective language of the device and interactively view the results of the commands.

The shell user interface is split into two parts:

* A list of the previously executed commands. By default, the last three commands are visible.
* A command prompt to enter new commands, which are added to the list.

The list displays status, date and text of a command. Clicking on a list item reveals the result of the command (provided it has been executed).

![Device shell](/guides/users-guide/shell.png)

In the command prompt, you can enter arbitrary command text. To send the command text to the device, click the "Execute" button. The "Execute" button can only be selected if the device is online.

To help you with the command syntax, frequently used commands are available for some devices by clicking the "Get predefined" button. Select a command and click "Use" to copy the command to the command prompt, or select "Execute" to execute the command straight away.

![Shell commands](/guides/users-guide/shelltemplates.png)

### <a name="permissions"></a>Permissions

The ability to view, edit or control certain devices can be limited to users and user groups. For more information on managing permissions, please visit the [Administration](/guides/users-guide/administration) guide. Use the application switcher to go to the Administration application.

### <a name="tracking"></a>Tracking

Devices can record the history of their movements in Cumulocity. Using the tracking tab, you can select a time period and visualize the movements of the device during this time period. Movements are shown as red lines on the map.

Next to the map, the individual recordings with their time are listed ("location update events"). When you click a recording, a "pin" on the map will show the location at the time of the recording.

The Tracking tab shows up when device contains c8y_Position property.

![Tracking](/guides/users-guide/tracking.png)

Depending on the type of device and the integration into Cumulocity, you can also configure device-side geo-fencing and motion detection.

Additionally, when the feature is activated, and with compatible devices, Cell ID information can be used to determine the position of the device. Currently, the services from [Combain](https://combain.com/) and [Google](https://developers.google.com/maps/documentation/geolocation/intro) are supported. The user can see the tracks based on both data, or filter out GPS based data or Cell ID based data.

### <a name="service-monitoring"></a>Service monitoring

In addition to connection monitoring, Cumulocity features a separate service monitoring for machines. See "[Service monitoring](#monitoring-services)" for more information.

### <a name="logs"></a>Logs

Using the "Logs" tab, you can request log information from devices. Log information can be filtered according to date ranges, type of log, keywords and the maximum number of lines to transfer.


To request a log from a device you have the following options:

- Select the date and time range.
- Choose the type of log. The supported logs are usually device-specific.
- Enter an optional text to filter the log. For example, if you enter "Users", only lines with the word "Users" in them will appear in the returned log information.
- Select the maximum number of lines to display (counted from the end).
- Click "Request log".

![Request log](/guides/users-guide/requestlog.png)

Requesting a log from a device may take some time. After the log has been transferred from the device to Cumulocity, it will appear in the list below the selection widgets. The entry in the list includes the log time range that was queried. Click on the entry in the list to show the log on the page. Hover over the entry to access the download and delete symbols. Using the download symbol, you can download the log excerpt to your local PC. Using the delete symbol, you can delete the log file.

### <a name="identity"></a>Identity

Finally, Cumulocity can associate devices and assets with multiple external identities. For example, devices often can be identified by the IMEI of their modem, by a microcontroller serial number as well as by an asset tag. This tab lists all the identities recorded for a particular device.

This is useful when you have non-functional hardware and need to replace the hardware without losing the data that was recorded. Just connect the new hardware to your account and modify the identity entry of the old hardware to contain the identity of the new hardware.


## <a name="connection-monitoring"></a>Connection monitoring

Cumulocity can automatically monitor the connection to your devices. If you want the connection to a device to be monitored, visit the "Info" tab of the device. On that tab, check the "Required Interval" field at the top. This field defines how often you expect to hear from the device. For example, if you set "Required interval" to 60, you expect that the device communicates at least once in an hour with Cumulocity. The interval is either set by the device itself, based on the device's knowledge how often it will try to send data, or it is set manually by you.

The various connection states are illustrated on the image below. The top arrow represents traffic from the device to Cumulocity. It can be green, red or grey. Green means that data was sent within the required interval. Red means that it was not sent within the required interval. Grey means that no required interval is configured.

The bottom arrow indicates the state of the push connection that is used to send commands from Cumulocity to the device (a connection to /devicecontrol/notifications API, NOT to realtime API). It can be either green or grey. Green means that the connection is established. Grey means that the connection is not established. In case of a grey arrow, either the device does not support push connections, or there is an error.

"Maintenance mode" is a special connection state indicating that the device is currently being maintained and should not be monitored. While a device is being maintained, no alarms for that device are raised. You can enable maintenance mode by setting the required interval to a negative value.

![Connection states](/guides/users-guide/connection_monitoring.png)

> Connection monitoring is not real-time. For example, the state of the connection will not change immediately when you switch off a device. Depending on your network, it may take about 20 minutes until a broken connection is discovered, since the network will retry sending data for a significant amount of time.

When a device is detected to be offline (stops sending data within required interval and top arrow changes to red color), an unavailability alarm is created for the device reading "No communication with the device since <time>".

## <a name="monitoring-services"></a>Service monitoring

Cumulocity distinguishes between connection monitoring and service monitoring. Connection monitoring only indicates that the device is communicating with Cumulocity, it does not automatically mean it is functional or not.

Service monitoring indicates if the device is in service. For example, a vending machine is in service if it is ready to sell goods. A vending machine can sell goods using cash money without a connection to Cumulocity. From the perspective of a merchant, it is in service. Similar, if you switch off the power on a gateway, the devices behind the gateway can still continue to work.

Cumulocity considers a device to be in service while there is no critical, unresolved alarm present for the machine. This is displayed as a share of time such an alarm was present. If a machine didn't have any critical alarms whatsoever during a time period, it was 100% in service. If half of the time there was some critical, unresolved alarm, the machine was 50% in service.

![Service monitoring](/guides/users-guide/servicemonitoring.png)

While a machine is offline, Cumulocity assumes by default that the machine continues to stay in service as it was before it lost connection. If it was out of service before, Cumulocity assumes the machine to be out of service during a connection outage.

There can be exceptions from this rule. If your vending machines rely exclusively on cashless payment, losing the connection to the network means that your machine is out of service and stops selling. For this case, unavailability alarms must be set to have "CRITICAL" priority instead of "MAJOR" priority in the [Administration application](/guides/users-guide/administration#alarm-mapping).

Cumulocity can display service availability at the level of individual devices or across all devices. If you select "Service monitoring" in the navigator, the overall service across all devices is shown. On that page, you will also see a histogram of how many devices had what service availability in the past month (see the above screenshot).

## <a name="map"></a>Locating devices

By clicking on "Map" in the navigator, a map of all devices in your account is shown. Devices are shown as "pins" that you can click to see the name of the device. Clicking the name of the device takes you to the detailed view of the device. By clicking the "Realtime" checkbox, the map will refresh automatically when devices are moving.

## <a name="alarm-monitoring"></a>Working with alarms

Devices can raise alarms to indicate that there is a problem requiring an intervention. They can be viewed
in various places:

* By clicking on "Only unresolved" in the "Alarms" tab to see alarms of all devices that have not been cleared yet.
* By clicking on "Alarms" in the navigator to see the entire alarm history.
* By clicking on a device and selecting the "Alarms tab" to see the alarms of that device. By default, only unresolved alarms are shown, but you can disable the "Only unresolved" checkbox to see all alarms.

The alarm display is split into four sections, separately listing alarms of different priorities. In each section, the most recent alarm is displayed first. The image below shows the detailed display of an alarm after it is clicked. The detail view contains the following items:

* **Alarm severity**: The severity of the alarm. Cumulocity's alarm severities are:
 * **Critical**: The device is out of service and should be fixed immediately.
 * **Major**: The device has a problem that should be fixed.
 * **Minor**: The device has a problem that may be fixed.
 * **Warning**: There is a warning.
* **Status**: The status of the alarm. An alarm can be:
 * **Active**: When it was raised and nobody is so far working on the alarm.
 * **Acknowledged**: When someone clicked the "acknowledged" button to indicate that someone is working on the alarm.
 * **Cleared**: When either someone clicked the "clear" button to manually clear an alarm, or when the device detected by itself that the problem was removed.
* **Count**: The number of times that this alarm was sent by the device. Cumulocity duplicates alarms so that only one alarm of a particular type can be active for a particular device. If another alarm of the same type is sent by the device, the count is increased.
* **Description**: A text description of the alarm.
* **Device**: The name of the device. Clicking the name leads you to the detail view of the device.
* **Date created**: The timestamp when the alarm was created first.
* **Type**: The type of the alarm. This text is used for duplicating alarms and for configuring the priority of alarms in the [Administration application](/guides/users-guide/administration#alarm-mapping).
* **Additional information**: An alarm can contain arbitrary additional information provided by the device.
* **Audit log**: Along with the alarm, a log of changes to the alarm is stored. This creates an alarm history with various data.

![Alarm display](/guides/users-guide/alarm2.png)

## <a name="operation-monitoring"></a>Working with operations

Operations are used to remote control devices. You can click on the "Device control" menu in the navigator to view all operations that have been sent to a device and that are still queued for being sent to a device. Similar, you can select the "Control" tab of a particular device to view that device's operations.

Operations can be in any of four states:

* **Pending**: The operation has just been created and is waiting for the device to pick it up.
* **Executing**: The operation has been picked up by the device and is being executed.
* **Successful**: The operation has been successfully executed by the device.
* **Failed**: The operation could not be executed by the device.

Clicking on an operation shows the parameters of the operation. For example, clicking on a configuration operation will display the configuration that is sent to the device. Clicking on a failed operation shows the reason of the failure.

The "All" button shows all operations for a device, regardless of whether they were processed already. The device is listing these operations in ascending time order. Operations are executed strictly according to this order.

![Operations](/guides/users-guide/operations.png)

## <a name="bulk-operations"></a>Bulk Operations

For easier handling of devices, Cumulocity features "Bulk operations". With "Bulk operations" you can now easily execute operations for each device in one group.

To execute bulk operations for the one group you have those options:

- Select a device and navigate to the "Control" tab.
- Create an operation.
- Hover over the operation you want to execute.
- Click on the cogwheel.
- Click on "Execute for entire group".

![Execute bulk operations](/guides/users-guide/executebulkoperations.png)

> For more information about operations refer to [Working with operations](#operation-monitoring).

In order to view the status and progress of your operations simply click on the desired group, then click on "Bulk operations".

![Bulk operations tab](/guides/users-guide/bulkoperations.png)

Bulk operations can also be edited. To edit an operation hover over the desired operation first and then click on the blue marker button.A new window will pop-up. "Start Date" and "Delay" values can be changed. To change operation details click on "Show operation details". When ready click on "Reschedule" to apply changes or click on "Cancel" to discard changes. 

To delete operations click on the cross button.

## <a name="events-all"></a>Troubleshooting devices

Events are low-level messages sent by devices that are usually used for application-specific processing. For example, a vending device sends its real-time sales in the form of events. If you need to troubleshoot a device at a more detailed level, visit the "Events" tab. Clicking on individual events will reveal more information on the data contained in the event. Similar, you can see all events across all devices by selecting "Events" in the navigator.

Since devices may send larger amounts of event data, you can filter the data shown here by date. You can also click the "real-time" checkbox to see events coming in from the devices in real-time.

## <a name="software-repo"></a> Managing device firmware and software

Cumulocity provides a central place to collect reference firmware and software for devices in the "Firmware repository" and the "Software repository".

To update firmware or to add software packages on a specific device you have to follow three steps:

1. Upload the firmware or software files in the [Administration application](/guides/users-guide/administration#files). (This step is optional and is not mandatory since the manufacturer might offer the firmware online.)

2. Select and save the files in the "Firmware repository". To add a new firmware image to the repository, visit the "Firmware repository" and click the "Add firmware" button. Then type the name of the firmware, its version and the URL from which the device can download the firmware. Similar use the "Software repository" to add reference software packages.

3. Install the firmware on a specific device. First navigate to "All Devices", select the desired device, then go to "Software" on Device Details and click on "Install firmware". Installing software packages is very similar. You follow the same steps as mentioned before, but you choose "install software" instead. (For more info on this step please refer to ["Software"](/guides/users-guide/device-management#software).)

> You must visit the [Administration application](/guides/users-guide/administration#files) to store other types of binaries in Cumulocity.

Cumulocity provides users with the ability to execute firmware or software updates for multiple devices simultaneously. To do so:

- Execute the software update in a single device to test that the new version really works
- Navigate to the operation and select "Execute for the whole group"
- Fill the form to schedule the bulk operation and click on the "Create" button

The operation status can be viewed under the name of the selected group in the "Bulk operation" tab.

> For more info on bulk operations refer to [Dealing with bulk operations](#bulk-operations) 

## <a name="credentials"></a>Managing device credentials

The "Device credentials" menu lists all credentials that have been generated for your connected devices. Each device that has been [registered](#device-registration) shows up here with the naming convention "device_&lt;id&gt;".

In most cases, you should not need to edit anything. Exceptions are:

* You have carried out a factory reset on a device. In this case, the device will often loose its assigned credentials. Find the credentials and click the "x" button to delete the credentials in Cumulocity as well. Then continue with the normal [registration process](#device-registration) to re-register the device.
* If you would like to temporarily disconnect a device use the "Deactivate" button next to the device credentials.
* If you would like to assign more permissions to an individual device click the device credentials and select additional or different user groups for the device.

![Bulk provisioning](/guides/users-guide/autoregister.png)

Device credentials can be also provided from CSV file. Files can be uploaded using the button pointed with an arrow. More details on the file structure can be found in under [Bulk-registering devices](#creds-upload) above.

## <a name="simulator"></a>Simulators


With the Cumulocity Simulator, all aspects of IoT devices can be simulated:

* Setting up a simulated device or a network of simulated devices
* Specify which operations the device can process
* Create work instructions based on predefined message templates or user defined templates and schedule work steps
* Create up to ten devices of a defined type
* Generate messages for measurements, alarms, events and inventory
* View simulation problems as alarms

###What is a simulator?

With the simulator you can create artificial devices that have the same level of functionality as connected hardware devices.

A simulator uses a playlist to simulate messages that the device sends to the Cumulocity platform. A playlist is a series of instructions that the simulator executes one after the other. When the last instruction is reached, the simulator starts again with the first one.

An instruction can be either sending a message (measurements, alarms, events and inventory) or wait for a specified time (sleep). 

A message is defined by choosing a message template (like sending a temperature) and providing the values for this template (23.0 degrees). Many predefined message templates are provided, for example “create measurement” , “send event”, “create” and “cancel” an alarm or “update operation status”. These are based in MQTT static templates. Additionally, custom message templates can be defined using the SmartREST template editor. 

###Set up a simulator

To set up a simulator go to the Navigator in the Device Management and choose "Simulators" under the section "Devices". 

![New Simulator](/guides/users-guide/newsim.png)

Simulators can be added by clicking on "New" which will open a card. You can choose now if you want to define a new simulator or choose a preset. The name of the simulator will be determined and up to 10 instances from this simulator. 

<img src="/guides/users-guide/addsim.png" alt="Add Simulator" style="max-width: 60%">

###Presets

The other option available is to create a simulator from a preset. Currently there are two different presets available: A "temperature measurement" preset and a "position update" event preset.

<img src="/guides/users-guide/addtempsim.png" alt="Add Add Temperature Preset" style="max-width: 60%">

<img src="/guides/users-guide/addpossim.png" alt="Add Position Preset" style="max-width: 60%">

![Edit Simulator](/guides/users-guide/editcloneremsim.png)

The number of instances of a simulator is limited to 10. Existing simulators are listed on this page. Simulators can be edited, cloned or removed by clicking on the cogwheel in the top right corner of the card. That opens a dropdown menu with those options.

###Adding Instructions to the Simulator

After setting up a simulator you can add instructions what your simulator should do. Instructions are single worksteps added to a playlist. The simulator will work through this list. To see an example click on the Temperature Simulator. 

![Add Instructions](/guides/users-guide/addinstructions.png)

The following overview will appear:

![Add Instructions Step 2](/guides/users-guide/addinstructions2.png)

Within this preset there are sample instructions already added. You can identify 2 steps. "Create measurement" and "Sleep". 

###Instruction Details

**Fragments:**

The measurement instruction refers to a fragment. This refers to the example shown below. Fragments are used to identify capabilities of a managed object. Find more details about fragments here: 
[Sensor Library ](https://www.cumulocity.com/guides/reference/sensor-library/) 

![Add Instructions Step 3](/guides/users-guide/addinstructions3.png)

**Smart Rest Templates**

Other options show a selection of Smart Rest Templates. The Smart Rest Templates are created in the Navigator under the “Device Types” > “SmartREST temSmart Rest Templates plates” entry. These templates are a response template, creating a list of values that describe an operation as a final result. The Smart Rest Template below will create a Warning Alarm post with text at a specified time. 
Specific information and samples of a variety of templates are available from the [MQTT Developer's Guide](https://www.cumulocity.com/guides/mqtt/introduction/). 

![Rest Template](/guides/users-guide/resttemplate.png)

![Add Instructions Step 4](/guides/users-guide/addinstructions4.png)

The "Sleep" instruction requires one value for its duration in seconds. The panel on the right half of the screen changes according to the type of instructions you choose. 

###Adding Operations to a Simulator

Directly underneath the instructions tab, you find supported operations. In this menu you can turn on or off specific operations like Configuration or Software/Firmware update.

![Operations Off](/guides/users-guide/supop1.png)

![Operations On](/guides/users-guide/supop2.png)

Some operations are turned on. You can also specify customized operations by using the add custom operation button.

###Alarms (within the Simulator menu)

The last tab in the simulator menu are alarms.

![Simulator Alarm](/guides/users-guide/simalarm.png)

These are not the alarms related to the simulated device, these are alarms connected to the simulator itself. If a simulator does not work correctly, you will see alarms or a warning here.


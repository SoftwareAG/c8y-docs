---
order: 10
title: Device management
layout: default
---

## <a name="overview"></a>Overview

The Device Management application provides you with an overview of your connected devices and lets you manage their health. In Device Management, you can:

* [Connect](#device-registration) new devices to your account and disconnect them.
* [List](#viewing-devices), [search](#searching-devices) and [group](#grouping-devices) the connected devices.
* [View](#device-details) the details of the devices and check their status.
* Remote control and configure devices.
* View alarms from devices.
* Troubleshoot devices.
* Manage the software and the firmware on devices.

The following sections will walk you through the various menus of the application.

## <a name="device-registration"></a>Connecting devices

This section describes the general procedure for connecting devices to your Cumulocity account. Some steps in the procedure may be specific to the type of device that you are using. Locate your device type in the "Device Guides" to find more information, or consult the manual of your device.

To connect devices to your Cumulocity account, click "Device registration" in the navigator and follow these steps:

1.  Enter the ID of the device in the "Device ID" text field and click "Register Device". To determine the ID, consult the device documentation. For mobile devices, the ID is usually the IMEI (International Mobile Equipment Identity) often found on the back of the device.
2.  You should now see your device listed by its IMEI number with the status reading as "Waiting for connection". Turn on the device and wait for a connection to be established.
3.  After the device connected, the status should change to "Waiting for acceptance". You will need to confirm that this is indeed the device you want to add by clicking on the green "accept" button on the right of your device's listing.
4.  The status of your device should now read "Accepted". Once that happens your device will be connected to your account.

You are now ready to manage the device.

![Device registration](/guides/users-guide/registration.png)

## <a name="viewing-devices"></a>Viewing the connected devices

To view the connected devices, you can 

* Select "All devices", which lists all connected devices (in pages of 1.000 devices).
* [Search](#searching-devices) for the device using the "search" text field.
* [Arrange](#grouping-devices) the devices in groups and view the groups.

In all cases, you will see a list of devices as shown in the example below. The list consists of the following columns:

* An icon representing the connection status as described in "[Connection monitoring](#connection-monitoring)".
* The name of the device.
* Depending on width, the model and the serial number of the device.
* The alarm status of the device, i.e., how many critical, major, minor or warning level alarms are currently unresolved for the device. See "[Alarms](#alarms)" for more information on working with alarms.
* A button for deleting the device.

Please note that deleting a device means to remove the device from the database including all its data. As an alternative to deleting a device, you can also arrange devices into groups so that one group holds all historical devices that are not in use anymore. This makes sure that historical reports are still correct. To prevent alarms from being raised for the devices, disable [connection monitoring](#connect-monitoring). Deleting a device does not delete the data of its child devices.

![Device list](/guides/users-guide/devicelist.png)

In case a list contains more than 1.000 entries, only the first 1.000 entries are shown. Click the "Load more" link at the bottom to load the next 1.000 enties.

## <a name="searching-devices"></a>Searching for devices

Cumulocity includes a full-text search for devices. By entering a search term into the "search ..." text field, you can find all devices that contain that term. The image below shows an example of searching for devices that contain the term "Ublox C027". Note that you can search for any textual property of a device. Prefixes are also supported. For example, a search for "Ublox" would also return the devices containing "Ublox C027".

![Full-text search](/guides/users-guide/searching.png)

## <a name="grouping-devices"></a>Grouping devices

Devices can be arbitrarily grouped according to your use case. A device can be located in multiple groups, and groups themselves can be part of multiple groups again. 

Cumulocity distinguishes between top-level groups and subgroups. Top-level groups are shown in the navigator at top-level in the section "Groups". They are your main entry point. Subgroups are used to further subdivide groups.

To create a top-level group, click on "Top-level groups" and select "Add Group". Enter the name of your new group and click the "Add Group" button.

![Adding top-level groups](/guides/users-guide/toplevelgroups.png)

You can add devices to a group in two ways: 

* Select a device and locate the "Groups" section on the "Info" tab. Use the drop-down menu or the "Browse groups" button to select a group to add this device to.
* Select the group and click "Assign devices" at the top right. Search for the devices that should be added in the search field. Then mark the relevant devices in the result and click the "Assign x devices" button at the bottom of the result list. ("x" will be the number or devices that you marked.)

To create a subgroup, just click "Add Group" when viewing a group.

To edit a group, click the "Edit" button next to the group. This allows you to edit the name of the group and assign user permissions for the group. For more information on permissions, see the [Administration](/guides/users-guide/administration) guide.


## <a name="device-details"></a>Viewing the device details

By clicking on a device in a device list, detailed information on the device is displayed. What is actually shown depends on the device and your configuration of the user interface. For example, if a device has not sent any measurements yet, there will be no "Measurement" tab. Similar, if a device permits certain operations, these operations will be visible in the "Control" tab.

At the top of the device details display, the name of the device is shown. Below the name, a list of breadcrumbs are displayed. If the device is part of an asset hierarchy (such as a group), you can use the breadcrumbs to easily navigate up that hierarchy. Since devices can be contained in multiple hierarchies, several rows of breadcrumbs may be shown.

To the right of the name, a cog wheel is shown. Clicking on the cog wheel shows a drop-down menu with further actions that you can carry out, such as creating a dashboard for the device. 

![Device details](/guides/users-guide/devicedetails.png)

Device details are divided over a number of tabs. The standard tabs that may be visible are:

* [Info](#info)
* [Child devices](#child-devices)
* [Measurements](#measurements)
* [Alarms](#alarms)
* [Control](#control)
* [Software](#software)
* [Events](#events)
* [Location](#location)
* [Shell](#shell)
* [Permissions](#permissions)
* [Tracking](#tracking)
* [Service monitoring](#service-monitoring)
* [Identity](#identity)

### <a name="info"></a>Info

The "Info" tab displays generic information for a device (from top left to bottom):

* **Connection monitoring**: Set up connection monitoring here, as described in more detail [below](#connection-monitoring). 
* **Name** and **Type**: The display name of the device for you to edit, as well as an identifier for the specific type of device.
* **Hardware**: Hardware information read from the device.
* **Mobile**: If the device contains a modem, mobile network information will be shown here. You will also see a "Locate" link here. If enough information could be obtained, "Locate" will determine the rough location of the device using the opencellid.org database. This will not be always successful and depends on the format that the connected mobile network reports its data to the modem.
* **Groups**: The groups that the device is part of. You can add and remove groups here. For more information, see "[Grouping devices](#grouping-devices)".
* **System**: This section shows the
 * The internal ID of the device (e.g., for access from Cumulocity's APIs).
 * The "owner" of the device (the Cumulocity user that created the device).
 * The time stamp when the device data was last updated.
 * A button to disconnect the device, provided you have administrative access to users and the device was connected using the "[Device registration](#device-registration)" feature.
* **Notes**: Leave textual notes for a device that can be seen by your co-workers.

While there are many other fields on this tab editable as well, it only makes sense to edit them if the device does not by itself provide this information. If the device provides this information, your edits will be overwritten by the information from the device. To save your edits, click on the "Save changes" button at the bottom of the screen.

> Note that "Last communication" and "Last updated" are two entirely different time stamps. "Last communication" indicates when a device has last sent data. "Last updated" indicates when the inventory entry of the device was last updated, regardless whether that was done by the device itself, through the web user interface or through another application.

### <a name="child-devices"></a>Child devices

This tab shows other devices that are connected to the currently displayed device. For example, if you look at a gateway, the tab lists all machines connected to the gateway.

### <a name="measurements"></a>Measurements

This tab provides a default visualization of numeric data provided by the device in the form of charts. Charts are grouped into types of measurements, which can contain multiple graphs or "series". For example, the screenshot below shows a chart for motion measurement including graphs for acceleration in the three dimensions, and a chart with modem statistics in the form of signal strength and bit error rate. 

![Measurements](/guides/users-guide/measurements.png)

If a chart contains graphs with different units, one Y axis is rendered per unit. For example, motion measurements consist of three parameters with unit "meter per square second", so only one axis is rendered. Modem statistics consist of signal strength in decibel milliwatts and bit error rate in percent, so one axis is rendered for each graph.

To see detailed information about the measured values, hover your mouse cursor over the chart. A tooltip will be displayed with detailed information on the measurement most close to your cursor. (The tooltip will "snap" to the closest measurement.)

By default, charts show the raw data of the last hour. You can change the time range on the X axis by clicking on the drop-down menu reading "Last hour". 

If you increase the time range, the drop-down menu reading "No aggregation" will switch to "hourly" or "daily". This means that chart now shows ranges instead of individual raw data points. For "hourly", the chart will show a range of the minimum and maximum value measured in an hour. For daily, the chart will show the minimum and maximum value measured over the day. Likewise, the tooltips will now show ranges of values instead of individual values. 

This enables you to get an efficient overview over larger time periods. You can manually change the granularity using the drop-down menu. However, a graph will only show at most 5.000 data points per graph to not overload your desktop browser. If you select a fine granularity resulting in more than 5.000 data points, a warning message will be shown: "Data has been truncated. Please use aggregation."

Clicking on the "Realtime" button will enable real-time user interface updates of the graphs as new data flows into the system from the connected devices. You can influence the graphical display and axes limits by setting up so-called "KPIs", see the [Administration](/guides/users-guide/administration#kpis) guide.

### <a name="alarms"></a>Alarms

The "Alarms" tab displayed the alarms of a device. Please see the Section "[Working with alarms](#alarm-monitoring)" for more information. 

### <a name="control"></a>Control

This tab lists the operations that are being sent to a device or have been sent to a device. Please see the Section "[Working with operations](#operation-monitoring)" for more information on operations.

The tab also enables you to send some generic remote control operations, depending on whether device supports the operations. The device in the example screenshot below supports a restart and setting its configuration.

![Generic remote control](/guides/users-guide/deviceops.png)

### <a name="software"></a>Software

This tab allows you to update the firmware of a device and the software installed on a device. To install a new firmware, click on "Install firmware", then select a firmware image from the [firmware repository](#firmware-repo) and click the "Install" button. 

Similar, to install a software on the device, click "Install software", select a software package from the [software repository](#software-repo) and click the "Install" button. Hover over a particular software package and click the "x" button to remove the package from the device.

![Software](/guides/users-guide/software.png)

Installing software and firmware usually includes a restart of the device. This monitor the progress of an installation, visit the "Control" tab.

### <a name="events"></a>Events

This tab enables low-level troubleshooting of a device, see "[Troubleshooting devices](#events-all)" for more information.

### <a name="location"></a>Location

The "Location" tab by default shows the location as reported by the device on a map. For devices that do not report a location, you can also manually set the location. Click on the cog wheel on the top right and select "Add location", then place the "pin" on the correct place of the displayed map.

### <a name="shell"></a>Shell

The device shell enables you to interactively work with remote devices. Many industrial devices support some form of command language, be it AT commands for modems, CSV-style commands for many tracking devices or elaborate scripting mechanisms such as Tixi TiXML. In the shell, you can send commands in the respective language of the device and interactively view the results of the commands.

The shell user interface is split into two parts: 

* A list of the previously executed commands. By default, the last three commands are shown.
* A command prompt to enter new commands, which are added to the list.

In the list, the status, date, result and text of the command are shown. Clicking on a list item reveals the result of the command (provided it has been executed). 

![Device shell](/guides/users-guide/shell.png)

In the command prompt, you can enter arbitrary command text. To send the command text to the device, click the "Execute" button. The "Execute" button can only be selected if the device is online. 

To help you with the command syntax, frequently used commands are available for some devices by clicking the "Get predefined" button. Select a command and click "Use" to copy the command to the command prompt, or select "Execute" to execute the command straight away.

![Shell commands](/guides/users-guide/shelltemplates.png)

### <a name="permissions"></a>Permissions

The ability to view, edit or control certain devices can be limited to users and user groups. For more information on managing permissions, please visit the [Administration](/guides/users-guide/administration) guide.

### <a name="tracking"></a>Tracking

![Tracking](/guides/users-guide/tracking.png)

### <a name="service-monitoring"></a>Service monitoring
### <a name="identity"></a>Identity


## <a name="connection-monitoring"></a>Connection monitoring

## <a name="service-monitoring"></a>Service monitoring

## <a name="map"></a>Locating devices

## <a name="alarm-monitoring"></a>Working with alarms

Discuss ordering of alarms (newest first)
 navigate to device
Discuss "Only unresolved" button in the "Alarms" tab.

## <a name="operation-monitoring"></a>Working with operations

Operations can be in any of four states:

* **Pending**: The operation has just been created and is waiting for the device to pick it up.
* **Executing**: The operation has been picked up by the device and is being executed.
* **Successful**: The operation has been successfully executed by the device.
* **Failed**: The operation could not be executed by the device. 

Clicking on an operations shows the parameters of the operation. For example, clicking on a configuration operation will display the configuration that is sent to the device. Clicking on a failed operation shows the reason of the failure.

The "All" button shows all operations for a device, regardless of whether they have been processed already or not. Note that operations are listed in the order in which they have been queued for a device with the oldest on top. Operations are executed strictly in this order.

![Operations](/guides/users-guide/operations.png)


## <a name="events-all"></a>Troubleshooting devices

Events are low-level messages sent by devices that are usually used for application-specific processing. For example, a vending telemetry device sends its realtime sales in the form of events. If you need to trouble shoot a device at a more detailed level, visit the "Events" tab. Clicking on indiviudal events will reveal more information on the data contained in the event. 

Since devices may sent larger amounts of event data, you can filter the data shown here 

Realtime 


## <a name="firmware-repo"></a> Managing device firmware

## <a name="software-repo"></a>Managing device software


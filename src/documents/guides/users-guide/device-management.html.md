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

![Device details](/guides/users-guide/devicedetails.png)

### <a name="info"></a>Info



* Connection monitoring
* Name, type
* Hardware, Mobile
* Groups, System
* Notes

### <a name="child-devices"></a>Child devices
### <a name="measurements"></a>Measurements
### <a name="alarms"></a>Alarms
### <a name="control"></a>Control
### <a name="software"></a>Software
### <a name="events"></a>Events
### <a name="location"></a>Location
### <a name="shell"></a>Shell
### <a name="permissions"></a>Permissions
### <a name="tracking"></a>Tracking
### <a name="service-monitoring"></a>Service monitoring
### <a name="identity"></a>Identity


## <a name="connection-monitoring"></a>Connection monitoring

## <a name="service-monitoring"></a>Service monitoring

## Locating devices

## Working with alarms

## Working with operations

## Troubleshooting devices

## Managing device firmware

## Managing device software


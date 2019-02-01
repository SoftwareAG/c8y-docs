---
order: 20
title: Managing assets
layout: redirect
---
<a name="assets"></a>
### Introduction

Assets represent business objects in general like buildings, machines, production units or cars.

Assets are organized in hierarchies. For example, an energy monitoring application might have the following asset hierarchy:

![image alt text](/guides/images/users-guide/image_2.png)

The asset hierarchy is composed of two types of objects:

* **Groups**: Objects which group single devices or other groups. Groups can either be created in the Cockpit application or in the Device Management application.

* **Devices**: Devices which are linked into the asset hierarchy. Before you can use devices in the Cockpit application, they need to be connected to Cumulocity. This is done in the Device Management application. For details on connecting devices refer to [Connecting Devices](/guides/users-guide/device-management#connecting-devices) in the Device Management section.

In this example, the group objects represent a building asset. The device objects represent the room asset. The group names and hierarchy can be defined individually by the user. The hierarchy can have multiple levels, like region level, city level, street level, building level, floor level and room level. Any device can be part of multiple and different hierarchies, like part of regional hierarchy and part of customer hierarchy.

To position a device in the asset hierarchy, you have to "assign" the device to the respective group. See description below for details.

> **Info:** Single devices are not managed in the Cockpit application. They are managed in the Device Management application.

### <a name="hierarchies"></a>Asset hierarchy versus device hierarchy

Cumulocity supports two types of hierarchies: a device hierarchy and an
asset hierarchy.

The device hierarchy tracks how devices are linked to Cumulocity from a communications point of view. The asset hierarchy structures the assets that are being remotely supervised and controlled through the M2M devices. For details, refer to [Cumulocity's domain model](/guides/concepts/domain-model) in the Concepts guide.

In the Cockpit application, you construct your asset hierarchy by creating group objects and by linking devices into the hierarchy. The asset hierarchy depends on the IoT devices used. There are many types of IoT devices, but these two types are very common:

* **Smart devices** are self-contained devices that include sensors, actuators and a communication module. They are typically connected to a single asset. Smart devices are trackers, weather stations or general "smart" sensors with a built-in communication module.

* **Gateway devices** establish the communication from other devices to Cumulocity but do not include sensors or actuators. Typical gateway devices include Zigbee, Modbus, M-Bus or KNX gateways.

The following section explains how to work with smart devices and gateway devices in the Cockpit application.

The first example shows how smart devices are linked into the asset hierarchy:

![image alt text](/guides/images/users-guide/image_3.png)

Smart devices are represented in the Device Management application as top-level devices. In the Cockpit application, you can organize smart devices into groups, as the arrows indicate in the above diagram.

The second example shows how gateway devices can be used in the Cockpit application.

![image alt text](/guides/images/users-guide/image_4.png)

In the Device Management application, gateway devices are represented as top level devices. Their attached devices (like for example Modbus or KNX devices) are shown as child devices. These child devices can be organized in the asset hierarchy in the Cockpit application as shown above.

As you can see from the example, devices can have completely different hierarchies in the Device Management application and in the Cockpit application:
While inside Device Management all child devices are below the gateway device, the same child devices are organized in two different buildings in the Cockpit.

### Cockpit assets versus business assets

The mapping of objects in the Cockpit asset hierarchy is a virtual hierarchy.

If you manage trucks within the Cumulocity platform, then each truck is represented via its individual tracking device communicating with Cumulocity.

For building management, it is most common that a group of sensors inside a building represents the building as a group communicating with the Cumulocity platform.

### Navigating assets

In the asset hierarchy, Cumulocity distinguishes between top-level groups and subgroups, so called sub-assets.

In the navigator, top-level groups are shown in the **Group** menu at top-level. Sub-assets are shown in the navigator under the top-level groups or in the S**ub-asset** tab of a particular group.

<img src="/guides/images/users-guide/cockpit/cockpit-sub-assets.png" name="Sub-assets" style="width:100%;"/>

When selecting an object in the asset hierarchy, details on the selected object are displayed at the right.

<img src="/guides/images/users-guide/cockpit/cockpit-info-tab.png" name="Info tab" style="width:100%;"/>

If you add a gateway device, the child devices are not shown. To show child devices, you must add them to the related asset. Details related to the child hierarchy are visible and editable in the Device Management application.

To navigate further in the asset hierarchy, use the navigator or select an object in the **Sub-Asset** tab. To navigate up in the asset hierarchy, use the breadcrumb entry below the name of the asset.

<img src="/guides/images/users-guide/cockpit/cockpit-breadcrumb.png" name="Breadcrump" style="width:100%;"/>


### Asset details

Several tabs are available for each object, dependent of the object type:

|Tab|Description|Availability
|:---|:---|:---
|Info|Shows a list of [Smart Rules](#smart-rules) created for the object.|Group, Device
|Alarms|Displays alarms for the device. For details on alarms, refer to [Working with alarms](/guides/users-guide/device-management/#alarm-monitoring) in *Device Management*.|Device
|Sub-assets|Shows the sub-assets of a group.|Group
|Data explorer|Shows all data points of the children. For details refer to [Visualizing data using the data explorer](#data-explorer).|Group, Device
|Location|Shows the current location of a device.|Device

If dashboards have been created for an object, they will also be added as a tab. See [Working with Dashboards](#dashboards) for details.

Moreover, additional tabs may be displayed here in case the application has been extended with plugins. See [Web SDK for plugins](/guides/web/introduction) for details.

### <a name="creating-groups"></a>Adding groups

To create a new group, follow these steps:

1. Click the **Plus** button at the right of the top bar, then select **New group** from the menu. <br><br>
<img src="/guides/images/users-guide/cockpit/cockpit-new-menu.png" name="New group" style="width:100%;"/><br>
2. In the window that comes up enter a unique group name to identify your group.
3. In the device search field, enter the search criteria for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
4. Checkmark the devices you want to add from the list.
5. Click **Create group with X device(s)** to finally create your new group. 

<img src="/guides/images/users-guide/cockpit/cockpit-create-group.png" name="Create group" style="width:100%;"/><br>

>**Info:** A group can also be created with "0" devices in it.

To add a new group as a child of an existing asset, navigate to its **Sub-asset** tab and click **Add Group** in the top menu bar.

### <a name="assigning-devices"></a>Assigning devices to groups

Before adding a device to the asset hierarchy, it must be connected to Cumulocity. Connecting devices to the platform is done in the Device Management application. For details on connecting devices refer to [Device Management](/guides/users-guide/device-management).

To assign a device to a group, follow these steps:

1. In the navigator, select a group from the **Group** menu and then open the **Sub-assets** tab. In the **Sub-assets** tab, all devices that are assigned to the respective group are displayed. 
2. Click **Assign devices** at the right of the top menu bar.<br><br>
<img src="/guides/images/users-guide/cockpit/cockpit-assign-devices-link.png" name="Assign devices" style="width:100%;"/><br>
3. In the upcoming window search for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
3. Checkmark the devices you want to add from the list.
4. Click **Assign X device(s)** to assign the selected devices. 

<img src="/guides/images/users-guide/cockpit/cockpit-devices-assign.png" name="Assign devices" style="width:100%;"/>

The devices will be shown as sub-assets in the "Sub-assets" tab.

### Editing groups

To edit the name of a group, navigate to its **Info** tab and click **Edit** next to its name. Edit the name and optionally leave some notes to be displayed in the **Info** tab. Click **Save changes** to apply your settings.

### Deleting groups

To delete a top-level group from the navigator, follow these steps:

1. Click **Groups** in the navigator. 
2. Click the menu icon for the group you want to delete.
3. From the context menu, select **Delete**.

To delete a group from the **Sub-assets** tab of another group, follow these steps:

1. Navigate to the **Sub-assets** tab.
2. Click the menu icon for the group you want to delete.
3. From the context menu, select **Delete**.

<img src="/guides/images/users-guide/cockpit/cockpit-subasset-delete.png" name="Delete sub-asset" style="width:100%;"/><br>

### Unassigning devices

To unassign a device from a group, follow these steps:

1. Navigate to the **Sub-assets** tab of the group.
2. Click the menu icon for the device you want to unassign.
3. From the context menu, select **Unassign**.

<img src="/guides/images/users-guide/cockpit/cockpit-devices-unassign.png" name="Unassign devices" style="width:100%;"/><br>

Unassigning a device does not remove the device, sub-devices or any associated data. The device is only removed from its location in the asset hierarchy. It can be assigned to this group or other groups later.

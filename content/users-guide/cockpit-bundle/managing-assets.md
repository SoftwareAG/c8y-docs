---
weight: 20
title: Managing assets
layout: redirect
helpcontent:
  - label: managing-assets
    title: Managing assets
    content: "The **Subassets** tab provides information on all subassets of the particular group which is selected in the navigator. Subassets can either be other groups or devices.


    Use the navigator, to navigate through the asset hierarchy. In the navigator, top-level groups are shown in the **Groups** menu at top-level. Subassets are shown under its higher-level group."
---

<a name="assets"></a>
### Assets hierarchy

Assets represent business objects in general like buildings, machines, production units or cars.

Assets are organized in hierarchies. For example, an energy monitoring application might have the following asset hierarchy:

![image alt text](/images/users-guide/cockpit/cockpit-groups-image1.png)

The asset hierarchy is composed of two types of objects:

* **Groups**: Objects which group single devices or other groups. Groups can either be created in the Cockpit application or in the Device Management application.

* **Devices**: Devices which are linked into the asset hierarchy. Before you can use devices in the Cockpit application, they must be connected to {{< product-c8y-iot >}}. This is done in the Device Management application. For details on connecting devices refer to [Connecting Devices](/users-guide/device-management#connecting-devices) in the Device Management section.

In this example, the group objects represent a building asset. The device objects represent the room asset. The group names and hierarchy can be defined individually by the user. The hierarchy can have multiple levels, like region level, city level, street level, building level, floor level and room level. Any device can be part of multiple and different hierarchies, like part of regional hierarchy and part of customer hierarchy.

To position a device in the asset hierarchy, you must "assign" the device to the respective group (see below).

{{< c8y-admon-info >}}
Single devices are not managed in the Cockpit application. They are managed in the Device Management application.
{{< /c8y-admon-info >}}

<a name="hierarchies"></a>
#### Asset hierarchy versus device hierarchy

{{< product-c8y-iot >}} supports two types of hierarchies: a device hierarchy and an
asset hierarchy.


The device hierarchy tracks how devices are linked to {{< product-c8y-iot >}} from a communications point of view. The asset hierarchy structures the assets that are being remotely supervised and controlled through the IoT devices. For details, refer to [{{< product-c8y-iot >}}'s domain model](/concepts/domain-model) in the *Concepts guide*.


In the Cockpit application, you construct your asset hierarchy by creating group objects and by linking devices into the hierarchy. The asset hierarchy depends on the IoT devices used. There are many types of IoT devices, but these two types are very common:

* **Smart devices** are self-contained devices that include sensors, actuators and a communication module. They are typically connected to a single asset. Smart devices are trackers, weather stations or general "smart" sensors with a built-in communication module.

* **Gateway devices** establish the communication from other devices to {{< product-c8y-iot >}} but do not include sensors or actuators. Typical gateway devices include Zigbee, Modbus, M-Bus or KNX gateways.

The following section explains how to work with smart devices and gateway devices in the Cockpit application.

The first example shows how smart devices are linked into the asset hierarchy:

![image alt text](/images/users-guide/cockpit/cockpit-groups-image2.png)

Smart devices are represented as top-level devices in the Device Management application. In the Cockpit application, you can organize smart devices into groups, as the arrows indicate in the above diagram.

The second example shows how gateway devices can be used in the Cockpit application.

![image alt text](/images/users-guide/cockpit/cockpit-groups-image3.png)

Gateway devices are as well represented as top level devices in the Device Management application. Their attached devices (like for example Modbus or KNX devices) are shown as child devices. These child devices can be organized in the asset hierarchy in the Cockpit application as shown above.

As you can see from the example, devices can have completely different hierarchies in the Device Management application and in the Cockpit application:
While inside Device Management all child devices are below the gateway device, the same child devices are organized in two different buildings in the Cockpit.

#### Cockpit assets versus business assets

The mapping of objects in the Cockpit asset hierarchy is a virtual hierarchy.

If you manage trucks within the {{< product-c8y-iot >}} platform, then each truck is represented via its individual tracking device communicating with {{< product-c8y-iot >}}.

For building management, it is most common that a group of sensors inside a building represents the building as a group communicating with the {{< product-c8y-iot >}} platform.

<a name="navigating"></a>
### How to navigate assets

In the asset hierarchy, {{< product-c8y-iot >}} distinguishes between top-level groups and subassets. Subassets can either be other groups or devices.

In the navigator, top-level groups are shown in the **Groups** menu at top-level. Subassets are shown under its higher-level group.

Moreover, subassets are shown in the **Subassets** tab of the particular group which is initially displayed when you click on the group in the navigator.

<img src="/images/users-guide/cockpit/cockpit-groups-subassets.png" name="Subassets"/>

{{< c8y-admon-info >}}
If you add a gateway device, the child devices are not shown. To show child devices, you must add them to the related asset. Details related to the child hierarchy are visible and editable in the Device Management application.
{{< /c8y-admon-info >}}

Use the navigator, to navigate through the asset hierarchy.

### Asset details

Depending on the asset type (group or device), various tabs are available with detailed information.

Groups show the following tabs:

* **Subassets** - Shows group details and all subassets of a group, see also [Device management > Viewing devices](/users-guide/device-management/#viewing-devices).
* **Smart rules** - Shows smart rules specified for the group, see also [Smart rules](#smart-rules).
* **Data explorer** - Shows all data points of the children. For details refer to [Visualizing data using the data explorer](#data-explorer).

Devices show the following tabs:

* **Info** - Shows smart rules specified for the device, see also [Smart rules](#smart-rules).
* **Alarms** - Displays alarms for the device, see also [Device management > Working with alarms](/users-guide/device-management/#alarm-monitoring).
* **Data explorer** - Shows all data points of the children. For details refer to [Visualizing data using the data explorer](#data-explorer).
* **Location** - Shows the current location of a device (only available with `c8y_Position`).

If dashboards have been created for a group or device, they will also be added as a tab. See [Working with Dashboards](#dashboards) for details.

Moreover, additional tabs may be displayed here in case the application has been extended with plugins. See [Web SDK for plugins](/web-sdk-for-plugins/overview/) for details.

<a name="creating-groups"></a>
### How to add a group

1. Click **Add group** at the right of the top menu bar.
2. In the resulting dialog box, enter a unique group name and an optional description and click **Next**.
3. In the list, select the devices you want to add. You may apply filters to reduce the number of displayed devices.
4. Click **Create** to create the new group.

The new group will be added to the groups list.

{{< c8y-admon-info >}}
A group can be created with "0" devices in it.
{{< /c8y-admon-info >}}

To add a new group as a child of an existing asset, navigate to its **Subassets** tab and click **Add Group** in the top menu bar.

<a name="assigning-devices"></a>
### How to assign devices to a group

Before adding a device to the asset hierarchy, it must be connected to {{< product-c8y-iot >}}. Connecting devices to the platform is done in the Device Management application. For details on connecting devices refer to [Device Management](/users-guide/device-management).

To assign devices to a group, follow these steps:

1. In the navigator, select a group from the **Group** menu and then open the **Subassets** tab.
2. Click **Assign devices** at the right of the top menu bar.
3. In the list, select the devices you want to add. You may apply filters to reduce the number of displayed devices.
4. Click **Assign** to assign the selected devices.

![Assign devices](/images/users-guide/cockpit/cockpit-group-assign.png)

The devices will be assigned to the selected group and shown as subassets in the **Subassets** tab.

<a name="edit-group"></a>
### How to edit a group

1. In the navigator, click a group to open it.
2. In the **Subassets** tab, you can edit the name and description of the group.

<a name="delete-group"></a>
### How to delete a group

To delete a group either on top-level from the **Groups** page or from the **Subassets** tab of another group, hover over the respective entry you want to delete and click the delete icon at the right.

In the resulting dialog box, you can select to also delete all devices inside the selected asset and all its subassets.

<a name="remove-device"></a>
### How to remove a device from a group

1. Navigate to the **Subassets** tab of the group.
2. Hover over the respective device you want to remove and click the remove icon at the right.

Removing a device does not delete the device, subdevices or any associated data. The device is only removed from its location in the asset hierarchy. It can be assigned to this group or other groups later.

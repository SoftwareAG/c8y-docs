---
weight: 30
title: Grouping devices
layout: redirect
---

Devices can be arbitrarily grouped according to a particular use case. A device can be located in multiple groups, and groups themselves can again be part of multiple groups.

Cumulocity distinguishes between top-level groups and subgroups. 

Top-level groups are shown in the **Group** menu in the navigator at top-level. Subgroups are used to further subdivide top-level groups.

### Viewing groups

To display a list of all groups in the account, click **Groups** in the navigator. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_GroupList.png" alt="Groups list" style="max-width: 100%">

For each group, the name and the number of children is displayed.

Click a group to view its details. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_GroupDetails.png" alt="Group details" style="max-width: 100%">

**Info Tab**

In the **Info** tab, the following information is provided:

|Card|Description|
|:---|:---|
|Notes|Provides optional notes to inform about current activities. Notes usually may only be edited by an administrator. To add or edit a note, click **Edit**, enter your note or your modifications in the text box and save your edits by clicking the green checkmark at the right of the text box. 
|Group data|Displays editable information on the group (name, description).
|Active, critical alarms|Shows the active critical alarms for the devices in the group.

**Sub-assets**

In the **Sub-assets** tab you see a list of all devices assigned to the group. For each device, the name and the number of children is displayed.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_GroupSubAssets.png" alt="Sub-assets" style="max-width: 100%">

To assign a device to a group, click **Assign devices** at the right of the top menu bar (see [How to assign a device to an existing group](#assigning-devices)).

To unassign a device, click the menu icon in a device entry and from the context menu select **Unassign**.

**Bulk operations**

In the **Bulk operations** tab, bulk operations created for the group can be managed. With bulk operations you can at once execute operations for each device within one group. For details, refer to [Bulk operations](#bulk-operations).


### How to create a new group

To create a new group follow these steps:

1. Click the **Plus** button at the right of the top bar, then select **New group** from the menu.
2. In the window that comes up enter a unique group name to identify your group.
3. In the **Device search** field, enter the search criteria for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
4. Checkmark the devices you want to add from the list.
5. Click **Create group with X device(s)** to finally create your new group. 

>**Info:** A group can be created with "0" devices in it.

<img src="/guides/images/users-guide/addtopgroup.png" alt="Device Management" style="max-width: 100%">

### <a name="assigning-devices"></a>How to assign a device to an existing group

You can assign devices to an existing group in two ways. 

From the device perspective:

1. Select a device from the device list and open it.
2. In the **Info** tab, scroll down to the **Groups assignment** card. From the drop-down field, select the group you want to assign the device to. You can also directly enter a group name here or you can enter just parts of a name to filter the list for it and only show the matching group names.
3. Click **Assign**.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_GroupAssignment.png" alt="Add to group" style="max-width: 50%">

If you search for a group by its name which does not exist yet, a **New** button will appear so that you can create a new group with this name from here and assign the device to that group.

In order to create a new group, the user must have the following permissions:

- ROLE_INVENTORY\_CREATE
- ROLE_INVENTORY\_ADMIN


<img src="/guides/images/users-guide/DeviceManagement/devmgmt-group-assignment-new.png" alt="new group" style="max-width: 50%">

From the group perspective:

1. In the navigator, select a group from the **Group** menu and then open the **Sub-assets** tab. In the **Sub-assets** tab, all devices that are assigned to the respective group are displayed. 
2. Click **Assign devices** at the right of the top menu bar. In the upcoming window search for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed. 
3. Checkmark the devices you want to add from the list.
4. Click **Assign X device(s)** to assign the selected devices. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_AssignDevices.png" alt="Assign devices to a group" style="max-width: 50%">

### How to create a sub-group

1. In the navigator, click a group to open it. 
2. Click **Add Group** at the right of the top menu bar. 
2. In the upcoming window, enter a name for the sub-group and click **Add group**.

### How to edit a group

1. In the navigator, click a group to open it. 
2. In the **Info** tab, click **Edit**. This allows you to edit the name of the group and to assign user permissions for the group. 
For further information on permissions, see the [Administration Guide](/guides/users-guide/administration#managing-permissions).

### <a name="smart-groups"></a>Using smart groups

Smart groups are groups dynamically constructed based on filtering criteria. They have a temporary character because the group members can change constantly. Smart groups do not have fixed member listings.They have fixed criteria instead. This type of group can be used, for example, for bulk upgrades of devices of a certain type to a new software or firmware version.

<img src="/guides/images/users-guide/smartfilters.png" alt="Adding top-level groups" style="max-width: 100%">

Smart groups can be created from the device list. 

1. To open the device list, click **All devices** in the navigator.
2. Filter the devices in the list to select the desired devices. Refer to [Filtering devices](#filtering-devices) for details on filtering.
3. Click **Create smart group** at the right of the top menu bar.
4. Enter a name for the group and click **Create**.

<img src="/guides/images/users-guide/smartgroup1.png" alt="Create a smart group" style="max-width: 100%">

The new group will appear as a top-level group in the **Groups** menu of the navigator. Smart groups can be distinguished by a small cogwheel in the folder icon. 

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_SmartgroupIcon.png" alt="Smart groups" style="max-width: 100%">

In the **Sub-asset** tab you can adjust your selection and modify the filter settings.

To delete a smart group, click the menu icon and from the context menu select **Delete**. 

<img src="/guides/images/users-guide/smartgroupdelete1.png" alt="Adding top-level groups" style="max-width: 100%">

**Important**: Deleting a smart group is irreversible.

>**Info**: Smart groups are not shown when using the Cockpit application.

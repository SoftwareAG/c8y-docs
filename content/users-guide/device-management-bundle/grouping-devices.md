---
weight: 30
title: Grouping devices
layout: redirect
helpcontent: >-
  Devices can be arbitrarily grouped according to your requirements. A device can be located in multiple groups, and groups themselves can again be part of multiple groups.


  To create a new group, click Click **Add group** at the top right.


  You can easily restructure groups or assign devices to groups, by dragging and dropping groups or devices in the navigator, see also *Device Management > Grouping devices* in the *User guide*.
---

Devices can be arbitrarily grouped according to a particular use case. A device can be located in multiple groups, and groups themselves can again be part of multiple groups.

Cumulocity IoT distinguishes between top-level groups and subgroups:

**Top-level groups** are shown in the **Group** menu in the navigator at top-level. <br>**Subgroups** are used to further subdivide top-level groups.

### Viewing groups

To display a list of all groups in the account, click **Groups** in the navigator.

![Groups list](/images/users-guide/DeviceManagement/devmgmt-groups.png)

For each group, the name and the number of children is displayed.

Click a group to view its details.

![Group info](/images/users-guide/DeviceManagement/devmgmt-groups-info.png)

**Info Tab**

In the **Info** tab, the following information is provided:

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup><thead>
<tr>
<th align="left">Card</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Notes</td>
<td align="left">Provides optional notes to inform about current activities. Notes usually may only be edited by an administrator. To add or edit a note, click <strong>Edit</strong>, enter your note or your modifications in the text box and save your edits by clicking the green checkmark at the right of the text box.</td>
</tr>
<tr>
<td align="left">Group data</td>
<td align="left">Displays editable information on the group (name, description).</td>
</tr>
<tr>
<td align="left">Active, critical alarms</td>
<td align="left">Shows the active critical alarms for the devices in the group.</td>
</tr>
</tbody>
</table>

**Subassets**

In the **Subassets** tab you see a list of all devices assigned to the group. For each device, the name and the number of children is displayed.

![Subassets](/images/users-guide/DeviceManagement/devmgmt-groups-subassets.png)

See also [To add a group](#add-group) and [To assign a device to a group](#assigning-devices).

**Bulk operations**

In the **Bulk operations** tab, bulk operations created for the group can be managed. With bulk operations you can at once execute operations for each device within one group. For details, refer to [Bulk operations](#bulk-operations).

> **Info:** Bulk operations are ordered by date, showing the latest operation at the top.


### <a name="add-group"></a>To create a new group

1. Click the **Plus** button at the right of the top bar and then click **New group**.<br>
2. In the resulting dialog box, enter a unique group name to identify your group.
3. In the search field, enter the search criteria for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed.
4. Checkmark the devices you want to add from the list.
5. Click **Create group with # device(s)** to finally create your new group.

The new group will be added to the groups list.

>**Info:** A group can be created with "0" devices in it.

From the **Groups** page, you can also create a new group by clicking **Add group** in the top menu bar. In the resulting dialog box, enter a name for the group and click **Add group**.

![Add empty group](/images/users-guide/DeviceManagement/devmgmt-groups-add.png)

### To edit a group

1. In the navigator, click a group to open it.
2. In the **Info** tab, click **Edit**. This allows you to edit the name of the group and to assign user permissions for the group.
For further information on permissions, see [Managing permissions](/users-guide/administration#managing-permissions) in the Administration section.

### To delete a group

Click the menu icon in a device entry and then click **Delete**.

### Managing devices in groups

#### <a name="assigning-devices"></a>To assign devices to a group

You can assign devices to groups in several ways.

**From the group perspective**

You can quickly assign devices to groups by using the drag and drop functionality in the navigator, see [Restructuring groups and devices](#restructuring-groups).  

Moreover, you can assign devices performing the following steps:

1. In the navigator, select a group from the **Group** menu and then open the **Subassets** tab.
2. Click **Assign devices** at the right of the top menu bar. In the resulting dialog box search for the devices you might want to add to your group (e.g. "ublox"). A list of devices that match your search criteria will be displayed.
3. Checkmark the devices you want to add from the list.
4. Click **Assign # device(s)** to assign the selected devices.

The devices will be assigned to the selected group.

![Assign devices](/images/users-guide/DeviceManagement/devmgmt-groups-assign.png)


**From the device perspective**

1. Select a device from the device list and open it.
2. In the **Info** tab, scroll down to the **Groups assignment** card. From the dropdown field, select the group you want to assign the device to. You can also directly enter a group name here or you can enter just parts of a name to filter the list for it and only show the matching group names.
3. Click **Assign**.

The device will be assigned to the selected group.

If you search for a group by its name which does not exist yet, a **New** button will appear so that you can create a new group with this name from here and assign the device to that group.

>**Info:** In order to create a new group, the user must have the permissions
ROLE&#95;INVENTORY\_CREATE and ROLE&#95;INVENTORY\_ADMIN.

<img src="/images/users-guide/DeviceManagement/devmgmt-group-assignment-new.png" alt="new group">


#### To unassign a device

Click the menu icon in a device entry and then click **Unassign**.

#### To delete a device

Click the menu icon in a device entry and then click **Delete**.

The device will be permanently deleted.

#### To view the device details

Click the menu icon in a device entry and then click **Device management**.

The device details for the specific device stored under **All devices** in the Device Management application will open.

### <a name="restructuring-groups"></a>Restructuring groups and devices

You can easily restructure groups, subgroups and devices by a drag and drop functionality.

#### To move a group

1. In the navigator, select a group which you want to move to another group.
2. Drag and drop it to the desired group.
3. In the resulting dialog box, confirm the operation.


#### To move or add a device

1. In the navigator, select the group or device which you want to move or add to another group.
2. Drag and drop it to the desired group.
3. In the resulting dialog box, select if you want to move or add the device.


### <a name="smart-groups"></a>Using smart groups

Smart groups are groups dynamically constructed based on filtering criteria. This type of group can be used, for example, for bulk upgrades of devices of a certain type to a new software or firmware version.

![Smart groups filter](/images/users-guide/DeviceManagement/devmgmt-groups-smartgroups-filter.png)

Note that smart groups are only available in the Device Management application and not visible in the Cockpit application.

Smart groups can be created from the device list.

#### To create a smart group

1. To open the device list, click **All devices** in the navigator.
2. Filter the devices in the list to select the desired devices. Refer to [Filtering devices](#filtering-devices) for details on filtering.
3. Click **Create smart group** at the right of the top menu bar.
4. Enter a name for the group and click **Create**.

![Create smart groups](/images/users-guide/DeviceManagement/devmgmt-groups-smartgroups-create.png)

The new group will appear as a top-level group in the **Groups** menu of the navigator. Smart groups can be distinguished by a small cogwheel in the folder icon.

![Smart groups icon](/images/users-guide/DeviceManagement/devmgmt-groups-smartgroups-icon.png)

In the **Subasset** tab you can adjust your selection and modify the filter settings.

#### To delete a smart group

To delete a smart group, click the menu icon and then click **Delete**.

![Delete smart groups](/images/users-guide/DeviceManagement/devmgmt-groups-delete.png)

> **Important:** Deleting a smart group is irreversible.

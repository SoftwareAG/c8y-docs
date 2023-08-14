---
weight: 10
title: Managing groups
layout: redirect
---

### To view groups

Click **Groups** in the navigator to see all groups in a list format.

![Groups list](/images/users-guide/DeviceManagement/devmgmt-groups.png)

For each group, various information is provided, for example the type and name. Click **Configure columns** at the right, to add or remove columns and customize the view to your preference. See also [Viewing all devices > Configuring columns](/device-management-application/viewing-all-devices/#configuring-columns).

To filter the groups for certain criteria, hover over the column headers and click the respective filter icon.

See also [Viewing all devices > To filter devices](/device-management-application/viewing-all-devices/#to-filter-devices).

Note that this function only creates a temporary filter. For permanent filters, you can use the [smart groups](#using-smart-groups) function.  

Click a group to view its details.

![Subassets](/images/users-guide/DeviceManagement/devmgmt-group-details.png)

<a name="subassets-tab"></a>
**Subassets page**

At the top of the **Subassets** page, the name and the description of the group is displayed (editable), followed by the information when the group was created and last updated.

Below, all assets assigned to the group are listed. For each asset, various information is displayed, for example the type and name. As with the top-level groups list, you can add or remove columns and customize the list to your preference, or you can apply filters to filter the list for certain criteria.

Morover, you can assign devices, see [To assign devices to a group](#to-assign-devices-to-a-group).

### To add a group

1. Click **Add group** at the right of the top menu bar.
2. In the resulting dialog box, enter a unique group name and an optional description and click **Next**.
3. In the list, select the devices you want to add. You may apply filters to reduce the number of displayed devices.
4. Click **Create** to create the new group.

The new group will be added to the groups list.

{{< c8y-admon-info >}}
A group can be created with "0" devices in it.
{{< /c8y-admon-info >}}

To add a new group as a child of an existing group, navigate to its **Subassets** page and click **Add Group** in the top menu bar.

### To edit a group

1. In the navigator, click a group to open it.
2. In the **Subassets** page, you can edit the name and description of the group.

For further information on permissions, see [Managing permissions](/users-guide/administration#managing-permissions) in the Administration section.

### To delete a group

Hover over the respective entry you want to delete and click the delete icon at the right.

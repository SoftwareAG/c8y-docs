---
weight: 20
title: Inventory roles
layout: redirect
section:
  - platform_administration
---

Inventory roles contain permissions that you can assign to groups of devices. For example, an inventory role can contain the permission to restart a device. You can assign this inventory role to a group of devices "region north" and to a user "smith". The result is that the user "smith" can restart all devices that are in the group "region north" or any of its subgroups.

### To view inventory roles {#to-view-inventory-roles}

To view the currently configured inventory roles, click **Roles** in the **Accounts** menu and switch to the **Inventory roles** tab.

<img src="/images/users-guide/Administration/admin-roles-inventory.png" alt="Context menu">

In the **Inventory roles** tab you can manage user permissions for particular groups and/or its children. There are several default inventory roles defined, but you can define your own according to your needs.

The following default inventory roles are initially available in new tenants:

|Role|Description|
|:---|:---|
|Manager| Can read all data of the asset and manage all inventory data but cannot perform operations. In addition, can manage inventory data (including dashboards) and alarms.
|Operations: All|Can remotely manage the assets by sending operations to a device (for example software updates, remote configurations).
|Operations: Restart Device|Can restart devices.
|Reader|Can read all data of the asset.


### To add an inventory role {#to-add-an-inventory-role}

Click **Add inventory role** in the **Inventory roles** tab.
In the "New inventory role" page, provide a **name** and a **description**, and assign the **permissions** for the new inventory role.

![Role details](/images/users-guide/Administration/admin-inventory-role-edit.png)

Permissions are grouped into the following categories:

|Category|Description|
|:---|:---|
|Alarms|Permissions related to working with alarms from devices.
|Audits|Permissions related to audit logs.
|Events|Permissions related to working with events from devices.
|Inventory|Permissions for viewing and editing devices.
|Measurements|Permissions related to measurements.
|Device control|Permissions to remote control devices.
|Full access|Complete access to the associated devices, mainly to simplify configuration.

Add a permission to the role by clicking the plus icon next to the desired category.

In the **Type** field, specify a type to further restrict the type of data that this permission applies to. Access will be only granted to objects that contain
only the specified **Type**. If the selected object contains more fragment types than those defined in the inventory roles configuration, in order to display it, they also must be added to the inventory role configuration.

For example, assume that your device sends measurements related to device management, such as "c8y_SignalStrength" but the measurement itself also has "c8y_Temperature" which you are not interested in. You want a user to only see the device management measurements. In the default configuration for the measurement, provide all types of fragments that the measurement has, that is, "c8y_SignalStrength" and "c8y_Temperature".
Note that if a measurement also contains other fragments types, they must also be added in the inventory role configuration. Otherwise such measurements are not returned because they contain fields to which the user has not been granted access.

With version 10.17 an additional configuration was created for measurements (other categories remain unchanged). After setting the "acl.measurement.only-accessible-fragments" parameter to true, in order to have access to a single measurement parameter, you do not have to grant access to all fragments types that the measurement has. Only measurements that have a defined set of types are returned, and additional types not listed in the inventory role configuration are removed from the returned measurements.
This allows the user to see measurements that contain only the defined types, for example, "c8y_SignalStrength", without the additional need to configure other types of fragments that the measurement has.

By default, the **Type** field contains an asterisk "*" selecting all types.

{{< c8y-admon-info >}}
For further information on possible types, check your device documentation or the [fragment library](/device-integration/fragment-library/). The type being used here is the so-called "fragment type", not the "type" property. You must enter all fragment types send in a measurement to make the measurement visible; similar for other types of data.
{{< /c8y-admon-info >}}

In the **Permission** field, select a permission level from the dropdown list:

* READ - to view objects
* CHANGE - to modify objects (does not include READ permission)
* ALL - to read AND modify objects

{{< c8y-admon-important >}}
When you add a permission, you may see a small exclamation mark. The exclamation mark indicates that the permission that you have just added is not effective, because another, "higher" permission set for the user already includes the respective permission. Check if you have set, for example, "Full access" or if there is another permission in the same section with "*" as type and ALL as permission.
{{< /c8y-admon-important >}}

As another example, assume that you are using tracking devices. You want to allow your user to see all devices, but not to change anything. In addition, the user should be able to follow tracks of devices on a map. Tracks are recorded using an event with fragment type "c8y&#95;Position", see [fragment library](/device-integration/fragment-library/). To do so, assign READ permission on inventory as well as on events with type "c8y&#95;Position" as shown in the image below.

<img src="/images/users-guide/Administration/admin-inventory-role-example.png" alt="Permission example">

### To assign inventory roles to users {#to-assign-inventory-roles-to-users}

Inventory roles are assigned to a user and a group of devices.

To assign inventory roles, click **Users** in the **Accounts** menu, select a user in the user list and switch to its **Inventory roles** tab.

In the **Inventory roles** tab you will see a tree of device groups. To assign an inventory role, open the dropdown at the right of the group row. Select the relevant roles and click **Apply**. For a detailed description of a role click the info icon next to it.

{{< c8y-admon-important >}}
If a user already has a global role containing inventory permissions, the user will be
able to see or change all devices regardless of what inventory roles you set here.
{{< /c8y-admon-important >}}

Inventory roles are inherited from groups to all their direct and indirect subgroups, and to the devices in these groups. If you select, for example, a role with read permissions on alarms for a group of devices, the user will be able to see alarms of all devices in this group and all its subgroups.

If a user has inventory access to a group of devices, the user will also have that access to all dashboards for that group of devices in the Cockpit application.

You can also copy inventory roles from another user. To copy roles, click **Copy inventory roles from another user**. In the upcoming window, select a user from the list and click **Copy**. At the top you can select if you want to merge the roles with the existing user roles (the default) or if you want to replace the existing user roles. Copying roles makes it easier to manage the permissions of many users as you can create a reference user and then copy the permissions from there.

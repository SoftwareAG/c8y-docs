---
order: 45
title: User and permissions management
layout: default
---

## <a name="overview"></a>Overview

This section focuses on the user and permission management feature in the Administration application. The feature includes:

|Section|Description|
|:---|:---|
|[Managing Users](#users)|How to [create users](#creating-users), edit, disable or delete them.
|[Managing Permissions](#managing-permissions)|How to create and edit [global roles](#global) and [inventory roles](#inventory), how to assign them to users, and how to [grant application access](#app-access).
|[Supporting Users in Other Tenants](#support)|How to configure support users and how to login as support user.
|[Managing User Hierarchies](#hierachy)|How to create [user hierarchies](#hierarchy) and how to [delegate](#delegate) user hierarchies. The availability of this feature depends on your subscription plan.


## <a name="users"></a>Managing Users

The user management functionality allows you to manage the users within your tenant and provides the following options:

- Creating users
- Assigning user names and set passwords
- Storing user details
- Choosing basic login options
- Enabling additional login security by using Two-Factor Authentication (TFA)

> **Info:** The user needs to have a role with the user management permission "ADMIN" or "CREATE" to be able to do so.

### Viewing users

To view all users in your tenant, click "Users" in the "Account" menu in the navigator.

![Expanded view](/guides/users-guide/userslist.png)

A user list will be displayed, providing the following information for each user:

* The user name that is used to access the tenant.
* The name and email of the user, if set.
* The global roles assigned to the user.
* The [strength](https://www.cumulocity.com/guides/users-guide/overview#login) of the password set for the user.

To filter the list, you can use the search field at the left of the top menu bar. For details on the search functionality, refer to [Searching](https://www.cumulocity.com/guides/users-guide/overview##searching) in the *Introduction*.

Moreover you can filter by global roles. Select the desired roles from the dropdown list and click **Apply** to limit the users shown in the list to users with the selected roles.

Initially, the "User" page only shows the top-level users. To see all users in your account at once, click **Expand all** at the right of the top bar. This will expand all top-level users, showing their sub-users. Click **Collapse all** to just show the top-level users again. For details on user hierarchies, refer to [Managing User Hierarchies](#hierarchy).

### <a name="creating-users"></a>Creating users

To add a user to your tenant, click **Add user** at the right of the top menu bar. 

![Add new user](/guides/users-guide/newuser.png)

At the left of the "New user" window provide the following information to identify the user:

|Field|Description|
|:---|:---|
|Username|A username used to log on. Note that this username cannot be changed once the user has been created. This field is mandatory.
|Active|Enable/disable the user account here. If the user account is disabled the user cannot login. 
|E-mail|A valid email address. This is required to enable the user to reset the password. This field is mandatory.
|First name|First name of the user. When the user is logged in, this name appears at the right of the top bar on the **User** button. 
|Last name|Last name of the user.
|Telephone|A valid phone number. The phone number is required if the user is configured to use two-factor authentication.
|Owner|Another user that manages ("owns") the new user. Select a user from the dropdown list and click **Done** to confirm. Refer to [Managing User Hierarchies](#hierarchy) for details on user hierarchies.
|Delegated by|Can be activated to delegate user hierarchies and permissions to the user. Refer to [Managing User Hierarchies](#hierarchy) for details on delegation.

Select the login options for the user.

* If you select "User must reset the password on next login", you need to provide a password which the user needs to reset on the next login. <br>Enter a password and confirm it. While entering the password, the strength of the password will be shown. See [Log into the Cumulocity platform](/guides/users-guide/overview/#login) for further information on password strength.  
* If you select "Send password reset link as e-mail", the user will receive an email message with a link to set a password. The email will be sent to the email address configured above.

On the right of the page, select the global roles for the user. Details on global roles are described in [Managing Permissions](#managing-permissions).

Click **Save** to create the user.

<!--what does that mean -->
> **Info:** By default, manually created users always have the "Own_User_Management" permissions set to active.

### Modifying users

Click the menu icon at the right of a user entry to open a context menu which provides further functionalities.

<img src="/guides/users-guide/Admin_UserContextMenu.png" alt="Context menu" style="max-width: 100%">

> **Info:** You need a role with user management permission to perform these options.

Click **Edit** to edit an existing user. All fields except “Username” and “Send password reset link as e-mail” can be modified. For details an each field, refer to [Creating users](#creating-users). Click **Change password** to change the password. After editing, click **Save** to apply your settings.

To copy roles, click **Copy inventory roles from another user**. In the upcoming window, select a user from the list and click **Copy**. At the top you can select if you want to merge the roles with the existing user roles (the default) or if you want to replace the existing user roles.

Click **Delegate** to delegate your user hierachies and permissions to a user, or click **Undelegate** to remove a delegation. Refer to [Managing User Hierarchies](#hierarchy) for details on delegation.

Click **Disable** to disable an active user, or click **Enable** to enable a user that has been disabled.

Click **Delete** to delete a user.

## <a name="managing-permissions"></a>Managing Permissions

Permissions define what a user is allowed to do in Cumulocity applications. To manage permissions more easily, they are grouped in so-called "roles". Every user can be associated with a number of roles, adding up permissions of the user.

The following types of roles can be associated with users:

- Global roles: Contain permissions that apply to all data within a tenant.
- Inventory roles: Contain permissions that apply to groups of devices.
- Application access: Enables a user to use an application.

### <a name="global"></a>Viewing global roles

Click "Roles" in the "Account" menu to display a list of configured roles.

In the "Global roles" tab you can find the roles which grant permissions on a general level. There are several default global roles defined, but you can define your own according to your needs. 

<img src="/guides/users-guide//Admin_GlobalRoles.png" alt="Context menu" style="max-width: 100%">

The roles "admins" and "devices" have a special status:

|Role|Description|
|:---|:---|
|admin|All permissions are enabled. The initial administrator, the first user created in a tenant, has this role.
|devices|Typical permission setup for devices. After registration, a device automatically has this role. Edit this role if your devices require less or more permissions, or assign other roles to your devices.

Furthermore, the following roles are configured as a starting point:

|Role|Description|
|:---|:---|
|CEP Manager|Can access all smart rules and event processing rules.
|Cockpit User|Can access the Cockpit application. In addition, you should add a role providing access to devices.
|Device management User|Can access the Device Management application. The user will be able to use the simulator and to run bulk operations. In addition, you should add a role providing access to devices.
|Global Manager|Can read and write all devices.
|Global Reader|Can read all devices.
|Global User Manager|Can manage all users.
|Shared User Manager|Can manage sub-users. The subscription plan needs to include user hierarchies to be able to manage sub-users.
|Tenant Manager|Can manage tenant-wide settings, such as own applications, data brokerage, data retention, options and tenant statistics.

You may see the following legacy roles:

|Role|Description|
|:---|:---|
|business|Can access all devices and their data but has no management permission in the tenant.
|readers|Can read all data (including users, in contrast to "Global Readers").


### <a name="create-edit-roles"></a>Creating and editing global roles

You can edit the existing global roles and you can create new global roles to meet your particular needs. 

To edit a global role, simply click on its card. To create a new global role, click **Add Role** in the "Global roles" tab. 

In the role page you will see a list of permission types on the left and a list of applications to be accessed on the right. 

The following screenshot shows the settings for the "admins" role.

![Admin example](/guides/users-guide/adminsample.png)

**Permission levels**

For each type, you can select the following permission levels:

- **Read**: Read the specified data.
- **Create**: Create new data like users and inventory data and edit users within your hierarchy.
- **Update**: Modify and delete the specified data (not including "Read").
- **Admin**: Allows for "Read", "Create" and "Update" actions.

> **Info:** "Create" permissions are related to the concept of ownership in Cumulocity. If you have created an object, you are the owner of it and can manage it without requiring any further permissions. For example, if you have  "Create" permission for "Inventory", you can create devices and groups, and fully manage these devices and groups. You cannot manage any devices or groups that you did not create yourself, unless you also have the "Change" permission or an additional inventory role (see below). This concept helps to assign minimal permissions to devices. It also enables you to limit user management permissions to sub-users, if you subscribed to user hierarchies.

Select the checkbox at the top of a column to set the respective level to all permission types.

**Permission categories**

The following permission categories are available by default:

|Category|Description|
|:---|:---|
|Alarms|View or edit alarms for devices.
|Application management|View or edit the applications available in this account.
|Audits|View or create audit logs for devices.
|Bulk operations|View or create bulk operations.
|CEP management|View or edit Cumulocity Event Language rules.
|Data broker|Send data to other tenants or receive data from other tenants.
|Device control|View or edit commands for devices resp. send commands to devices. Also used for device registration.
|Events|View or create events for devices.
|Identity|View or edit identifiers for devices.
|Inventory|View or edit inventory data.
|Measurements|View or create measurements for devices.
|Option management|View or edit account options such as password policies.
|Retention rules|View or edit retention rules.
|Simulator|Configure simulated devices.
|Tenant management|View, create, edit or delete subtenants.
|Tenant statistics|View the usage data for this account, as shown on the Home screen of the Administration application.
|User management|View or edit users, user groups and permissions.
|Own user management|View or edit your own user.

There may be additional permissions visible depending on the features in your subscription plan. These are documented along with the respective feature.

> **Info:** When new features with new permissions are added to Cumulocity, these are not automatically added to existing roles. If you notice that you cannot use a new feature that was recently announced, check your permissions.

### <a name="attach-global"></a>Assigning global roles to users

You can assign global roles to users either directly in the user list, or by opening the page for a particular user and adding them there. 

In the user list, click the "Global roles" column of a particular user to open a list of global roles. Select or clear the respective checkboxes and click **Apply** to save your settings.

![Apply global role](/guides/users-guide/applyglobal.png)

Alternatively, click on a user in the list to open its details. Select or clear the checkboxes for the relevant global roles at the right and click **Save** at the bottom of the page to save your settings.

![Attach global role](/guides/users-guide/attachglobal.png)

### <a name="inventory"></a>Viewing inventory roles

Inventory roles contain permissions that you can assign to groups of devices. For example, an inventory role can contain the permission to restart a device. You can assign this inventory role to a group of devices "Region North" and to a user "smith". The result is that the user "smith" can restart all devices that are in the group "Region North" or any of its subgroups.

To view the currently configured inventory roles, click "Roles" in the "Account" menu and switch to the "Inventory roles" tab.

<img src="/guides/users-guide/Admin_InventoryRoles.png" alt="Context menu" style="max-width: 100%">

In the "Inventory roles" tab you can manage user permissions for particular groups and/or its children. There are several default inventory roles defined, but you can define your own according to your needs. 

The following default inventory roles are available in new tenants as a starting point:

|Role|Description|
|:---|:---|
|Manager| Can read all data of a group but cannot perform operations. In addition, can manage inventory data (including dashboards) and alarms.
|Operations: All|Can send operations to devices in a group (e.g. software updates, remote configurations).
|Operations: Restart Device|Can restart devices in a group.
|Reader|Can read all data of a group.


### Creating and editing inventory roles

You can edit the existing inventory roles and you can create new inventory roles to meet your particular needs. 

To edit an inventory role, simply click on its card. To create a new inventory role, click **Add Role** in the "Inventory roles" tab. 

At the top of the page you can edit the name of the inventory role. Click on the name, edit it and click the green checkmark to save your edits.

![Role details](/guides/users-guide/roledetails.png)

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

> **Info:** Service providers will see an additional permission "Support" in their "management" tenant. This permission lets users of the service provider give support to their customer's users. See [Supporting other users](#support) below.

Add a permission to the role by clicking the plus icon next to the desired category.

In the "Type" field, specify a type to further restrict the type of data that this permission applies to. 

For example, assume that your device sends measurements related to device management, such as "c8y&#95;SignalStrength", and actual production measurements. You want a user to only see the device management measurements. In this case, enter "c8y&#95;SignalStrength" as type.

By default, the "Type" field contains an asterisk "*" selecting all types.

> **Info:** For further information on possible types, check your device documentation, the Cumulocity [sensor library](/guides/reference/sensor-library) or the [device management library](/guides/reference/device-management). The type being used here is the so-called "fragment type", not the "type" property. You need to enter all fragment types send in a measurement to make the measurement visible; similar for other types of data.

In the "Permission" field, select a permission level from the dropdown list: 

* Read - to view objects
* Change - to modify objects (does not include "read" permission)
* All - to read AND modify objects

<img src="/guides/users-guide/showperm.png" alt="Role permissions" style="max-width: 50%">

>**Important:** When you add a permission, you may see a small exclamation mark. The exclamation mark indicates that the permission that you have just added is not effective, because another, "higher" permission set for the user already includes the respective permission. Check if you have set, for example, "Full access" or if there is another permission in the same section with "*" as type and "All" as permission.

<img src="/guides/users-guide/overriddenperm.png" alt="warning message" style="max-width: 50%">

As another example, assume that you are using tracking devices. You want to allow your user to see all devices, but not to change anything. In addition, the user should be able to follow tracks of devices on a map. Tracks are recorded using an event with fragment type "c8y&#95;Position" (see [Sensor library](/guides/reference/sensor-library)). To do so, assign read permission on inventory as well as on events with type "c8y&#95;Position" as shown in the image below.

<img src="/guides/users-guide/permexample.png" alt="Permission example" style="max-width: 50%">

### <a name="attach-inventory"></a>Assigning inventory roles to users

Inventory roles are assigned to a user and a group of devices. 

To assign inventory roles, click "User" in the "Account" menu, select a user in the user list and switch to its "Inventory roles" tab. 

In the "Inventory roles" tab you will see a tree of device groups. To assign an inventory role, click on the arrow right from a device group. Select the relevant roles and click **Apply**. For details on the roles hover over the info icon next to it or refer to [Viewing inventory roles](#inventory).

> **Important**: If a user already has a global role containing inventory permissions, the user will be able to see or change all devices regardless of what inventory roles you set here.

![Inventory roles](/guides/users-guide/inventoryroles.png)

Inventory roles are inherited from groups to all their direct and indirect subgroups, and to the devices in these groups. If you select, for example, a role with read permissions on alarms for a group of devices, the user will be able to see alarms of all devices in this group and all its subgroups.

If a user has inventory access to a group of devices, the user will also have that access to all dashboards for that group of devices in the Cockpit application.

You can also copy inventory roles from another user. To copy roles, click **Copy inventory roles from another user**. In the upcoming window, select a user from the list and click **Copy**. At the top you can select if you want to merge the roles with the existing user roles (the default) or if you want to replace the existing user roles. Copying roles makes it easier to manage the permissions of many users as you can create a reference user and then copy the permissions from there.

<img src="/guides/users-guide/copyroles.png" alt="Copy roles" style="max-width: 50%">

### <a name="app-access"></a>Granting application access

In the "Application Access" tab you assign applications to the user. 

The "Application Access" tab shows a list of all available applications in your tenant in alphabetical order. Select the applications for the user and click **Save**. For more information on application management, see [Managing applications](/guides/users-guide/administration#applications).

![Application access](/guides/users-guide/appaccess.png)

> **Info:** If a user has global permission to read all applications, an information box will be shown.

### Troubleshooting permissions

If you try to perform actions without sufficient permissions, an error message will occur.

To help troubleshooting permissions, click the the **User** button at the right of the top bar. From the context menu, select **Access denied requests**. In the upcoming window details on the denied accesses are provided. An administrator user or the support can help in fixing the permissions.

The example shows a user, who tried to create a simulator without the necessary permissions, hence, a warning message is shown.

![Access error message](/guides/users-guide/noaccess.png)

## <a name="support"></a>Supporting Users in Other Tenants 

Support users are users in the management tenant with a special permission to log in as other tenant's users. As an example, suppose you get a support call from a user "john" in the tenant "acme.cumulocity.com". The user cannot run certain functionality, and you suspect that it is a permission issue. Your username in the management tenant is "jill" and you are permitted to carry out support for "acme.cumulocity.com". In this case, you can log in to "acme.cumulocity.com" using the username "jill&#36;john" and your password for "jill". Now you can reproduce what "john" is seeing. 

### Configuring support users

There are two alternative setups for support users in Cumulocity: 

- A service provider configures specific permissions for management tenant users which enable them to provide support.
- Tenant users request support and by this provide the permission to management tenant users to login.

> **Info:** The support user feature does not work when the support user has two-factor authentication enabled, but no phone number is provided. The phone number has to be provided first, in order to login as a support user.

**Management tenant permission**

To enable a management tenant user to support users in other tenants, you need to provide the user with either the "Support" global permission or the "Support" inventory role (both "Read" and "Change").

Using the "Support" inventory role, you can selectively assign support to particular users. Create a group of the tenants that you want the user to support, then assign the inventory role to the user and the group as described in [Attaching inventory roles to users](#attach-inventory).

**User-provided permission**

Users can allow support, i.e. a management tenant user logging in as them. To do so, click the **User** button at the right of the top bar and from the context menu select **Enable support**. Click **Ok** to confirm. Support will be active for 24 hours. 

![Enable support](/guides/users-guide/enablesupport.png)

### Logging in as support user

To log in as support user, use the following username:

	<support user>$<user>

"support user" is the user in the management tenant that executes the support. "user" is the supported user.

Alternatively, use

	<support user>$

In this case, the support user will access the tenant with one of the administrative users.

> **Important:** In many environments, access to the management tenant is specifically restricted to certain networks or hosts, or can only be used through a tunnel. When logging in using the support user functionality, you need to make sure to have access to the management tenant. If you use a tunnel to access the management tenant, you may need to use a login of the form "<tenant>/<support user>$<user>".

Audit logs are created for each support user access and for the actions that support users perform. In the column "Who?" the author's name will be shown in form of:

	"support_user$user"

## <a name="hierarchy"></a>Managing User Hierarchies

With user hierarchies you can reflect independent organizational entities in Cumulocity that still share the same database. These entities can have limited permissions to subsets of the shared data and can manage their own sub-users.

> **Info**: To be able to use this feature, your tenant must be subscribed to the application "FEATURE.USER.HIERARCHY".

### Viewing user hierarchies

In the “User” page, user hierarchies are indicated by an arrow left from the user icon. Clicking on the arrow unfolds the user hierarchy. You can also fold and unfold the entire user hierarchy using the **Expand all** and **Collapse all** links on the top right.

A small number next to the user name shows how many direct sub-users a user has. Sub-users are users that can be managed by their respective parent user and that have at most the permissions of that parent user. In the example below, the user "TestUser" has two direct sub-users. 

![User hierarchies](/guides/users-guide/userhierarchies.png)

### <a name="sub-users"></a> Creating sub-users

User hierarchies are created by assigning an "owner" to a user. The "owner" can manage the user. The user can have at most the same permissions as the owner.

To assign an owner to a user, select the user in the "Users" page. In the "Owner" field, select a user from the dropdown list and click **Done** to confirm.

![Select owner](/guides/users-guide/chooseowner.png) 

>**Info:** When creating a new user, the owner is automatically set to the user who is logged in. The owner can be changed later. Only users with "USER ADMIN" permission can assign an owner to a user. 

> If you want an owner to manage only their sub-users, make sure that the owner does not have a global role with user management permissions for all users.

As an example, the sample below shows a user with a business role. The user becomes the owner of a new user. Therefore the new user can only get a business role assigned as the user cannot have higher permissions than the owner.

![Owner Sample](/guides/users-guide/ownersample.png)

### <a name="delegate"></a>Delegating user hierarchies to other users

In Cumulocity, users can delegate their user hierarchies and permissions to another user. The delegated user then has the same user management permissions as the user who activated the delegation. 

You may of course also delegate on a temporary basis, for example if you are temporarily unavailable.

To delegate your permissions to a user, either open the user and click the delegate icon in the "Delegated by" field, or click the menu icon at the right of the user entry in the user list and from the context menu, select **Delegate**.

![User delegation](/guides/users-guide/delegation.png)

To undelegate, remove the delegation in the "Delegate by" field, or click **Undelegate** in the context menu.

If the delegated user also needs to manage specific devices, the admin user must assign this device permissions (inventory roles) directly to the intended user. This can be done by using **Copy inventory roles from another user**. For details refer to [Assigning inventory roles to users](#attach-inventory).

> **Info:** Delegation works only inside user management and does not have any implication to other places. 

### Troubleshooting sub-users

In the example below the user cannot change the access to the Administration application, because the owner of the user has no USER MANAGEMENT permissions. As a result, the owner user can not assign built-in applications (and the owned user cannot use them). 

![Warning message](/guides/users-guide/warning1.png)

---
order: 45
title: User and permissions management
layout: default
---

## <a name="overview"></a>Overview

This section focuses on the user and permission management features of the Administration application. In the application, you can:

- Manage [users](#users).
- Assign [global roles](#global) and [inventory roles](#inventory).
- Grant [application access](#app-access).

Depending on your subscription plan, you can also:

- Create [user hierarchies](#hierarchy).
- [Delegate](#delegate) user hierarchies.

## <a name="users"></a>Managing users

The "User" menu lets you manage the individual users within a tenant. You can:

- Create users.
- Assign user names and set passwords.
- Store user details.
- Choose basic login options.
- Choose additional login security by using Two-Factor Authentication  (TFA).

> Your user needs to have a role with the user management permissions "ADMIN" or "CREATE" to be able to do so.

### Browsing users
The screenshot below shows the list of users accessible through the "Users" menu. The list includes the following columns:

- The user name that is used to access the tenant.
- The name and email of the user, if set.
- The global roles of the user.
- The [strength](guides/users-guide/overview/#login) of the password set for the user.

The cogwheel at the end of the row contains a drop-down menu with additional functions, which will be explained later in this chapter.

The list can be filtered by using the "Filter users" text box and the "Filter by global roles" drop-down menu. Start typing into the "Filter users" text box to show only the users that contain the text you typed. Click on the "Filter by global roles" drop-down menu to show only users having the selected roles. After you have selected roles, click the "Filter" button to actually apply the selection.

To get an overview of the users in your account, choose the ”Expand all” link on the top right. To just show the top-level users, select "Collapse all". 

![Expanded view](/guides/users-guide/userslist.png)

### Adding users

To add more users, choose “Add user” on the top right. This will open a dialog as shown below.

![Add new user](/guides/users-guide/newuser.png)

Next,

- Enter a username for this user to log on. Keep in mind that this username cannot be changed anymore later in the process.
- Choose if the user will be active.

> If the switch is set to "disabled", the user will not be able to log in.

- Enter the first and the last name of the user. (This name will be shown on the top right next to the user symbol when the user logs in.)
- Enter the e-mail address of this user. You need to provide a valid, unique email address to enable users to reset their password.
- Enter a phone number. The phone number is especially important if this user is supposed to use two-factor authentication.
- If you check "User must reset the password on next login", the user will have to set a password after the next login.
- If you check "Send password reset link as e-mail", the user will receive an email message with a link to set a password. The email will be sent to the email address configured above.
- Enter a password and confirm it. While entering the password, the strength of the password will be displayed. See ["Logging in"](/guides/users-guide/overview/#login) for more information on password strength  You can only enter a password if "Send password reset link as e-mail" is not checked.
- Add global roles to the user.
- Click the "Save" button to save all the previous data.

> Fields without an asterisk ("*", like "First name", "Last name") are optional. You can edit user details similar like you can add new users.

### Editing, disabling and deleting  users

To edit an existing user, either click on the user or on the cogwheel located at the end of the row of the desired user. The first link on the cogwheel menu will take you to the user details. All fields except “Username” and “Send password reset link as e-mail” can be modified. To change the password, click on "Change password". Click "Save" after you have finished editing.

> To edit existing users you must have a role with a user management permission.

Below, you can see the cogwheel menu.

![Cogwheel menu](/guides/users-guide/cogwheelmenu.png)

Additionally from the cogwheel menu, you can:

- Copy Inventory roles from another user.
- Enable or disable the user.
- Delete the user.

## Managing permissions

Permissions define what a user can do in Cumulocity applications. To more easily manage permissions of users, they are grouped in so-called "roles". Every user can be associated with a number of roles, adding up permissions of the user.

The following types of roles can be associated with users:

- "Global roles" contain permissions that apply to all data within a tenant.
- "Inventory roles" contain permissions that apply to groups of devices.
- "Application access" enables a user to use an application.

### <a name="global"></a>Viewing global roles

Selecting "Roles" in the Administration application takes you to the list of configured roles. At the top, you will find global roles.

![Roles](/guides/users-guide/roles.png)

A number of global roles are configured by default in new tenants. The roles "admins" and "devices" have a special meaning:

- admins: A role with all permissions enabled. The initial administrator, the first user created in a tenant, will have this role.
- devices: A role with a typical permission setup for devices. After registration, a device automatically have this role. You may edit this role if you know that your devices require less or more permissions, or you can assign other roles to your devices.

Furthermore, the following roles are configured to get you started:

- CEP Manager: A role with full access to all smart rules and event processing rules.
- Cockpit User: A role with access to the Cockpit application. In addition, you should add a role providing access to devices to a user.
- Device management User: A role with access to the Device management application. The user will be able to use the simulator and to run bulk operations. In addition, you should add a role providing access to devices to a user.
- Global Manager: Permit the user to read and write all devices.
- Global Reader: Permit the user to read all devices.
- Global User Manager: A user with this role can administer all users.
- Shared User Manager: A user with this role can manage sub-users. Your subscription plan needs to include user hierarchies to be able to manage sub-users.
- Tenant Manager: A user with this role can manage tenant-wide settings, such as own applications, data brokerage, data retention, options and tenant statistics.

You may see the following legacy roles:

- business: A roles with access to all devices and their data but without administration rights in the tenant.
- readers: A role being able to read all data (including users, in contrast to "Global Readers").

### <a name="create-edit-roles"></a>Creating and editing global roles

You can edit the existing global roles and you can create new global roles for your specific needs. To edit a global role, simply click on its card. To create a new global role, click on  “Add Role” in the global roles section.

Next, you will see a panel with all editable permissions and access rights to the applications in this tenant. The screenshot below shows the "admins" role.

![Admin example](/guides/users-guide/adminsample.png)

The permissions are shown in three columns:

- Read: Read specified data.
- Change: Modify and delete specified data. (Not including "Read"!)
- Create: Create new data like users and inventory data and edit users within your hierarchy.

"Create" permissions are related to the concept of ownership in Cumulocity. If you created something, you are the owner of it and can manage it without requiring further rights. For example, if you have the "Create" permission in the "Inventory" row, you can create devices and groups, and fully manage these devices and groups. You cannot manage any devices or groups that you did not create yourself, unless you also have the "Change" permission or an additional inventory role (see below). This concept helps to assign minimal permissions to devices. It also enables you to limit user management permissions to sub-users, if you subscribed to user hierarchies.

You can select an entire column by clicking on the checkbox at the top of the column. The permissions that are visible by default are:

- Alarms: View or edit alarms for devices.
- Application management: View or edit the applications available in this account.
- Audits: View or create audit records for devices.
- Bulk operations: View or create bulk operations.
- CEP management: View or edit Cumulocity Event Language rules.
- Data broker: Send data to other tenants or receive data from other tenants.
- Device control: View or edit commands for devices resp. send commands to devices.
- Events: View or create events for devices.
- Identity: View or edit identifiers for devices.
- Inventory: View or edit inventory data.
- Measurements: View or create measurements for devices.
- Option management: View or edit account options such as password policies.
- Retention rules: View or edit retention rules.
- Simulator: Configure simulated devices.
- Tenant management: View, create, edit or delete subtenants.
- Tenant statistics: View the usage data for this account, as shown on the home page of - the administration application.
- User management: View or edit users, user groups and permissions.
- Own user management: View or edit your own user.

There may be additional permissions visible depending on the features in your subscription plan. These are documented along with the respective feature.

> When new features with new permissions are added to Cumulocity, these are not automatically added to existing roles. If you notice that you cannot use a new feature that was recently announced, check your permissions.

### <a name="attach-global"></a>Attaching global roles to users

Navigate back to the "Users" menu. You can attach global roles to users either directly in the list of users, or by clicking on a particular user and adding them there. 

In the list, click on the column "Global Roles" of a user to open a list. Check or uncheck global roles, then click "Apply" as shown in the screenshot below.

![Apply global role](/guides/users-guide/applyglobal.png)

Alternatively, click on a user and check the relevant global roles on the right side of the user details, then click "Save".

![Attach global role](/guides/users-guide/attachglobal.png)

### <a name="inventory"></a>Viewing Inventory Roles

Inventory roles contain permissions that you can apply to groups of devices. For example, an inventory role can contain the permission to restart a device. You can apply this inventory role to a group of devices "Region North" and to a user "smith". The result is that the user "smith" can restart all devices that are in the group "Region North" or any of its subgroups.

To view the currently configured inventory roles, navigate to the "Roles" menu, possibly scrolling down to the section "Inventory roles".

![Roles](/guides/users-guide/roles.png)

There are some default inventory roles created in new tenants to give you a starting point:

- Manager: Can read all data of a group. In addition, can manage inventory data (incl. dashboards) and alarms.
- Operations: All: Can send operations to devices in a group.
- Operations: Restart Device: Can restart devices in a group.
- Reader: Can read all data of a group.

### Creating and editing inventory roles

You can edit the existing inventory roles and you can create new inventory roles for your specific needs. To edit an inventory role, simply click on its card. To create a new inventory role, click on  “Add Role” in the inventory roles section.

In the following panel, you can:

- Edit the name of the inventory role by clicking on the name, changing it and then clicking the checkmark button to save the changes.
- Edit the description of the inventory role in the description field on the right. Click the "Save" button at the bottom to save the changes.
- Add permissions to the role by clicking one of the "+" buttons in the various sections, or remove permissions by clicking the "-" button next to permission that you want to remove. Again, save the changes by clicking on the "Save" button. 
- Navigate back to the list of all roles by clicking on the "All roles" link on the top right. Edits made since the last save are lost when navigating back.

![Role details](/guides/users-guide/roledetails.png)

Permissions are arranged in sections as follows:

- Alarms: Permissions related to working with alarms from devices.
- Audits: Permissions related to audit logs.
- Events: Permissions related to working with events from devices.
- Inventory: Permissions for viewing and editing devices.
- Measurements: Permissions related to measurements.
- Device control: Permissions to remote control devices.
- Full access: Complete access to the associated devices, mainly to simplify configuration.

> Service providers will see an additional permission "Support" in their "management" tenant. This permission lets users of the service provider give support to their customer's users. See [Supporting other users](#support) below.

Add a permission by clicking the "+" button in a section, then specifying a type and the kind of permission. The type field further limits the type of data that this permission applies to. 

For example, assume that your device sends measurements related to device management, such as "c8y_SignalStrength", and actual production measurements. You would like a user to be able to only see the device management measurements. In this case, enter "c8y_SignalStrength" as type and select either "Read" or "All" permission.

> If you want to know the available types, check your device documentation and the Cumulocity [sensor library](/guides/reference/sensor-library) and the [device management library](/guides/reference/device-management). The type is the so-called "fragment type", not the "type" property. You need to enter all fragment types send in a measurement to make the measurement visible; similar for other types of data.

Use "*" to select all types. Just like for global roles, the "Change" permission does not include the permission to read. Use "All" to enable a user to read and change something.

![Role permissions](/guides/users-guide/showperm.png)

When you add a permission, you may see a small exclamation mark. The exclamation mark indicates that the permission that you have just added is not effective, because there is another permission that permits the user to do more already. Check if you have set, for example, "Full access" or if there is another permission in the same section with "*" as type and "All" as permission.

![Overridden permission](/guides/users-guide/overriddenperm.png)

As another example, assume that you are using tracking devices. Your user should be able to see all devices, but should not be able to change anything. In addition, the user should be able to follow tracks of devices on a map. Tracks are recorded using an event with fragment type "c8y_Position" (see [Sensor library](/guides/reference/sensor-library)). To do so, assign read permissions on inventory as well as on events with type "c8y_Position" as shown in the image below.

![Example](/guides/users-guide/permexample.png)

### <a name="attach-inventory"></a>Attaching inventory roles to users

Inventory roles are attached to a user and a group of devices. To do so, navigate to a user and click on the "Inventory Roles" tab. In this tab, you will see a tree of device groups. By clicking on the small down-arrow on the right of a device group, you can attach an inventory role. Select the relevant roles and click "Apply". Hover your mouse pointer over the info icon next to the role to see a description of the role.

> If a user already has a global role containing inventory permissions, the user will be able to see or change all devices regardless of what inventory roles you set here.

![Inventory roles](/guides/users-guide/inventoryroles.png)

Inventory roles are inherited from groups to all their direct and indirect subgroups, and to the devices in these groups. If you select, for example, a role with read permissions on alarms for a group of devices, the user will be able to see alarms of all devices in this group and all its subgroups.

If a user has inventory access to a group of devices, the user will also have that access to all dashboards for that group of devices in the Cockpit application.

> This does not apply to dashboards and smart rules created before Version 7.47 of Cumulocity. If you need to apply inventory roles, create a copy of the dashboard or smart rules and delete the original.

You can also copy inventory roles from another user by merging or replacing roles. A pop up card will show the choices available, when you click on the “Copy (inventory) roles from another user” button. This makes it easier to manage the permissions of many users. For example, you can select a reference user to edit and test permissions, then copy the permissions to all other

> You can also copy inventory roles from the cogwheel menu next to a user in the users menu.

![Copy Roles](/guides/users-guide/copyroles.png)

### <a name="app-access"></a>Granting application access

The tab "Application Access" shows the available applications in your tenant and permits you to assign the applications to the user. Select the applications and click "Save". For more information on application management, see [Managing applications](/guides/users-guide/administration#applications).

![Application access](/guides/users-guide/appaccess.png)

> If a user already has the global permission to read all applications, an information box will be shown.

### Troubleshooting permissions

If a user attempts to perform actions without sufficient permissions, an error message will be displayed either next to the menu item that should perform this action or at the top of the browser screen.

To help in troubleshooting permissions, the user can click "Access denied requests" in their user menu at the top right. A dialog box will pop up listing the details of the accesses that the application tried and that were denied. An administrator user or the support can help in fixing the permissions.

On the image below, the user is attempting to access an application  that he or she does not have access to. The user is trying to create a simulator without the necessary permissions, hence, a warning message is shown.

![Access error message](/guides/users-guide/noaccess.png)

## <a name="support"></a>Supporting users in other tenants 

### Overview

Support users are users in the management tenant with a special permission to log in as other tenant's users. As an example, suppose you get a support call from a user "john" in the tenant "acme.cumulocity.com". The user cannot run certain functionality, and you suspect that it is a permission issue. Your username in the management tenant is "jill" and you are permitted to carry out support for "acme.cumulocity.com". In this case, you can log in to "acme.cumulociy.com" using the username "jill$john" and your password for "jill". Now you can reproduce what "john" is seeing". 

### Configuring support users

There are two alternative setups for support users on Cumulocity: 

- The service provider configures permissions for management tenant users to enable them to provide support.
- Tenant users request support and through this, provide the permission to management tenant users to login.

#### Management tenant permissions

To enable a management tenant user to support users in other tenants, you need to provide the user with either the "Support" global permission or the "Support" inventory role (both "Read" and "Change").

Using inventory roles, you can selectively assign support to particular users. Create a group of the tenants that you want the user to support, then assign the inventory role to the user and the group as described in ["Attaching inventory roles to users"](#attach-inventory).

#### User-provided permissions

A user can allow support to login as them by clicking on the user icon on the top right of a Cumulocity application and selecting "Enable support". Click "Ok" to confirm. Support will be active for 24 hours. 

![Enable support](/guides/users-guide/enablesupport.png)

### Logging in as support user

To log in as support user, use the following username:

	<support user>$<user>

"<support user>" is the user in the management tenant that executes the support. "<user>" is the supported user.

Alternatively, use

	<support user>$

In this case, the support user will access the tenant with one of the administrative users.

> In many environments, access to the management tenant is specifically restricted to certain networks or hosts, or can only be used through a tunnel. When logging in using the support user functionality, you need to make sure to have access to the management tenant. If you use a tunnel to access the management tenant, you may need to use a login of the form "<tenant>/<support user>$<user>".

Audit log are created for each support user access and for the actions that support users perform. In the column "Who?" the author's name will be shown in form of:

	"support_user$user"

## <a name="hierarchy"></a>Managing user hierarchies

With user hierarchies, you can reflect independent organizational entities in Cumulocity that still share the same database. These entities can have limited permissions to subsets of the shared data and can manage their own sub-users.

> To be able to use this feature, your tenant must be subscribed to the application "FEATURE.USER.HIERARCHY".

### Browsing user hierarchies

In the “Users” menu, user hierarchies are indicated by a "stack" of users and a little arrow to the left of the user icon. Clicking on the arrow unfolds the user hierarchy. You can fold and unfold the entire user hierarchy using the "Expand all" and "Collapse all" links on the top right.

A number next to the user name shows how many direct sub-users a user has. Sub-users are users that can be managed by their respective parent user and that have at most the permissions of that parent user. In the example below, the user "TestUser" has two direct sub-users. 

![User hierarchies](/guides/users-guide/userhierarchies.png)

### Creating sub-users

User hierarchies are created by assigning an "owner" to a user. The "owner" can manage the user. The user can have at most the same permissions as the owner. The screenshot below shows how to assign an owner to a user. You can choose available users from a list and check (or uncheck) them to assign ownership.

> If you want an owner to manage only their sub-users, please make sure that the owner does not have a global role with user management permissions for all users.

![Select owner](/guides/users-guide/chooseowner.png)

As an example, the sample below shows a user with a business role. The user becomes the owner of a new user. Therefore the new user can only get a business role assigned. 

![Owner Sample](/guides/users-guide/ownersample.png)

### <a name="delegate"></a>Delegating user hierarchies to other users

With the “delegated by” button you can only delegate your user hierarchy and your own user permissions to this “Newuser” in this example. “Delegated by” field: Here a user “TestUser” can delegate his or her global roles to a user “newuser”. The delegated user “newuser” can then manage users with the same permissions as “TestUser”. You can also delegate on a temporary basis, for example if the user “TestUser” goes on holiday. 

> If the delegated user also needs to manage specific devices, the admin user must assign this device permissions (inventory roles) directly to the intended user. This can be done by using the “Copy inventory roles from another user”.

![User delegation](/guides/users-guide/delegation.png)

> Delegation works only inside user management and does not have any implication to other places. 

### Troubleshooting sub-users

In the example shown below the user has no access rights to change his or her access to applications, because his owner has no USER_MANAGEMENT_* (one of the permissions) included in his role. As a result the owner user can not assign built-in applications (and the owned user can not use them). 

![Warning message](/guides/users-guide/warning1.png)
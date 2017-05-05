---
order: 70
title: User and permissions
layout: default
---

## <a name="tenants"></a>Managing tenants

With the subtenant concept you can separate the data of the individual tenants one hundred percent.

> Background: As a tenant administrator, all data in your tenant account is 100% separated from the data of other tenants. The data inside your tenant is shared with all account users by default unless it is restricted by user permissions.

If you want 100% data safety instead of dealing with user permissions, then use the subtenants. Each subtenant has a separated data area. All Cumulocity features (e.g. user management, app management, rule management) are available for each subtenant without visibility to other subtenants.

This feature is an optional feature which is not available for all tenants.

> In case you are subscribed to the feature, but you do not see it, contact support.

In order to manage subtenants click on the subtenants menu. Subtenant management includes: Tenant creation, activation, suspension, subscribed applications and options.

![Sub-tenants](/guides/users-guide/sub-tenant.png)

> Tenant ID's must remain unique, two tenants cannot create subtenants with the same "URL/ID".
> Subtenants cannot create an additional level of subtenants.

### Adding sub-tenants

To add a new subtenant, click on "Create Tenant"

> Please note that fields with an asterisk (" * ") are mandatory.

- Enter unique domain/URL of the new tenant. This URL will be used to access the application (e.g. tenant@cumulocity.com).
- Enter the name of the company.
- Enter the administrator's e-mail. You must provide a valid e-mail address to enable users to reset their password.
- Enter username of the administrator for logging in.
- Enter contact name. This field is optional.
- Enter contact phone. Again, this field is optional.
- Choose whether you wish to have the password reset link sent as an e-mail. If you have not selected this option you will have to enter a password and confirm the password. (See "[Logging in](/guides/users-guide/overview#login)" for more information on password strength.)
- Click the "Save" button.

![Tenant-creation](/guides/users-guide/createtenant.png)

### Editing, suspending and removing sub-tenants

To edit subtenants, click on the desired subtenant. All the fields can be edited except "ID" and "Administrators Username".

When you have finished editing, click on the "Save" button.

> If a tenant is suspended, his data still remains in the database and he can be reactivated at any time later. If the tenant is removed his data will be deleted.

Hovering over a tenant will bring up the "Suspend" and the "Remove" buttons. The "Remove" button is shown as a red cross.

> Please note that there is an additional check during tenant suspension. The user will have to provide his own password in order to proceed. After the tenant is suspended, an e-mail is sent to the suspended tenant administrator. The e-mail is sent only if the property in the config file is enabled and if the tenant administrator provided an e-mail address during creation.

## <a name="users"></a>Managing users

The "User" menu lets you manage the individual users within a tenant. You can create, edit and delete users. You can also edit their permissions.

(Your user needs to have a role with the user management permissions "ADMIN" or "CREATE" to be able to do so.)

You can:

- Create users.
- Assign user names and set passwords.
- Store user details.
- Choose basic login options.
- Choose additional login security by using Two-Factor Authentication  (TFA).

You can furthermore define permissions:

- Grant access to applications.
- Assign "global roles" to individual users. Global roles contain permissions that apply to all data within a tenant.
- Create a hierarchy of users, if your tenant is subscribed to this feature.
- Delegate user permissions to other users in your tenant, if your tenant is subscribed to this feature.
- Assign "inventory roles" to individual users. Inventory roles contain permissions that apply to groups of devices.

### Browsing users
The screenshot below shows the list of users accessible through the "Users" menu. The list includes the following columns:

- The user name that is used to access the tenant. The number next to the user name shows how many direct sub-users a user has. Sub-users are users that can be managed by their respective parent user and that have at most the permissions of that parent user. In the example below, the user "admin" has three direct sub-users. 
- The name and email of the user, if set.
- The global roles of the user. These can be edited by clicking on the downward arrow, as described below.
- The (strength)[https://www.cumulocity.com/guides/users-guide/overview/#login] of the password set for the user. Next to the password strength information column you can occasionally see a small key symbol next to it. If this icon is visible, the user has two-factor authentication enabled. 

The cogwheel at the end of the row contains a drop-down menu with additional functions, which will be explained later in this chapter.

The list can be filtered by using the "Filter users" text box and the "Filter by global roles" drop-down menu. Start typing into the "Filter users" text box to show only the users that contain the text you typed. Click on the "Filter by global roles" drop-down menu to show only users having the selected roles. After you have selected roles, click the "Filter" button to actually apply the selection.

To get an overview of the users in your account, choose the ”Expand all” link on the top right. To just show the top-level users, select "Collapse all". 

![Expanded view](/guides/users-guide/expandedview.png)

### Adding users

To add more users, choose “Add user” on the top right. This will open a dialog as follows:

![Add new user](/guides/users-guide/adduserpage.png)

To add more users, click on "Add user".

- Enter a username for this user to log on. Keep in mind that this username cannot be changed anymore later in the process.
- Choose if the user will be active.

> If the switch is set to "disabled", the user will not be able to log in.

- Enter the first and the last name of the user. (This name will be shown on the top right next to the user symbol when the user logs in.)
- Enter the e-mail address of this user. You need to provide a valid, unique email address to enable users to reset their password.
- Enter a phone number. The phone number is especially important if this user is supposed to use two-factor authentication.
- “Owner” field: (Visible only if the tenant and the user is subscribed to this feature.)Clicking on this field opens a dropdown showing available users to assign ownership of this user. The “Owner” creates a user hierarchy, where each user can see the hierarchical user tree below (and including) himself/herself. As this is a permission, the user cannot edit his/her own set of permissions unless you have ADMIN rights in “User Management”. Otherwise those can only be edited by the “Owner”. 
- “Delegated by” field: Here a user can delegate his or her global roles to this user and the management of his or her user hierarchy. Example: This can be temporary, if the user is away but certain tasks need to be done.
- If you choose to check "User must reset the password on next login", the user will have to choose a new password after the next login.
- If you choose to check "Send password reset link as an email", the email message will be sent to provided email address with link to set a password.
- Enter a password and confirm it. (See "Logging in" for more information on password strength https://www.cumulocity.com/guides/users-guide/overview/#login.) 
- Add Global Roles to this User
- Choose built-in applications for the user, after the user account is created.
- Click the "Save" button to save all the previous data.

> Fields without an asterisk ("*", like "First name", "Last name") are optional. You can edit user details similar like you can add new users.

### Editing, disabling and deleting  users

To edit an existing user, either click on the user or on the cogwheel located at the end of the row of the desired user. The first link of the cogwheel menu will take you to the user details. All fields except “Username” can be modified. To change the password, click on "Change password". Click "Save" after you have finished editing.

> To edit existing users you must have a role with a user management permission.

Below, you can see the cogwheel menu.

![Cogwheel menu](/guides/users-guide/cogwheelmenu.png)

- You can delegate or un-delegate your global role to a certain user. For more info, see the “delegated by” functionality below.
- You can enable users or disable them.
- The last option in the dropdown list is to delete the user.

Clicking on the "Global Roles Field" opens a list with available roles and a checkbox next to it to apply them or remove them. The small red frame on the right side shows the TFA key symbol. If it is present this user has TFA applied. For more info on TFA, see [here](/guides/users-guide/administration/#users).

![Global role and TFA view](/guides/users-guide/globalroleview.png)

## Working with the "User hierarchies"

These functions explained below are strictly administrative functions to create a user hierarchy and delegate a user hierarchy and permissions. The tenant must be subscribed to this feature in order to use it.

 By setting the “owner” you create a hierarchy of users, where each user can see the hierarchical user tree. The “owner” can assign roles and grant permissions to the rest of the users in the hierarchy tree. Users, who have an “owner” can at most take the same global roles as their “owner”. Below, you can observe the hierarchy tree. 

ADD SCREENSHOT!!!

As a consequence the user, who has an owner, can at most take the same user global roles as his owner. (If in doubt about the permissions you are assigning to an owned user, open the detailed permissions of this role and check each of them or create a role according to your specifications.)

Examples: The sample below shows a user with a business role, who becomes the owner of a new user. Therefore the new user can only get a business role assigned. If the owner has an admin role, the user owned by the admin user can have the same admin role assigned.
Important: A user can only have the same roles or less assigned than his owner user. That means, if there are two global roles in the system, one which has inventory:”*” and one inventory: ”READ”, this “owner” user cannot assign the read-role to an “owned” user which has inventory:”*” It needs to be the same role, not only less permissions.

![Owner Sample](/guides/users-guide/ownersample.png)

### Dealing with user delegation

With the “delegated by” button you can only delegate your user hierarchy and your own user permissions to this “New User” in this example. Basically you can choose any existing user in your tenant.

>  Delegation works only inside the user hierarchy management and does not have an implication to other system places. 

Example: If an admin user will go on vacation and give another user his or her user permissions by delegation, the delegated user will be able manage the user hierarchy, but if this person also needs to manage specific devices, the admin user must assign this device permissions directly to the intended user. This can be done by using the “Copy inventory roles from another user”.

![User Delegation](/guides/users-guide/delegation.png)

## Troubleshooting

In the example shown below, the user has no access rights to change his or her access to applications, because his owner has no USER_MANAGEMENT_* permission included in his role. As a result, the owner user can not assign built-in applications (and the owned user can not use them).

![Warning](/guides/users-guide/warning.png)

## Using two-factor authentication

The Two-factor authentication (TFA) is an extra layer of security that requires not only a username and a password but SMS verification as well. TFA can only be set up by administrators. When TFA is enabled, it is impossible to configure it from the "User settings", it is configurable from the administration UI.

> Note that, a phone number is required when adding a user and TFA is enabled. When users without a phone number try to log in using TFA, the user will be redirected to a window, to enter his/her mobile phone number. Without a phone number, a login is impossible.

To see whether TFA is enabled for a certain user, go to the "Users" menu and check the TFA status column.

![TFA satus](/guides/users-guide/tfastatus.png)

Enable two-factor authentication for a user:

- Go to the "Users" menu.
- Click on the user name.
- Click on the checkbox next to "Enable two-factor authentication.
- Click "Save".

## Roles

Cumulocity distinguishes three types of roles for users and groups:

- Account-wide “Global Roles”: These enable a user to create, administrate or read data in an account.
- Device or device-group-specific permissions “Inventory Roles”: Those define a specific level access to data in your account, restricted to a group of devices and their child objects and a specific user.

Attached to the roles functionality is also:

- “Application access”: This access defines the applications that users will see in their application switcher and are able to use in Cumulocity in general.

A role is a global set of permissions for a user.
With this function you can:

- Assign, change or remove roles from users.
- Assign inventory roles to specific user groups and their associated hierarchy.

All users with a global role are defined and set up as a user with global permissions within this menu. Another role option is a device-group which gets an inventory role assigned. 

![Roles](/guides/users-guide/roles.png)

### Global Roles

- Admins: A group with all permissions by default.
- Business: A group to work with all devices and their data but without administration rights.
- Devices: A group with typical minimal default permissions for devices.
- Readers: A group who can read all data but cannot edit it.
- “Add Role”: Create a role for your specific needs.

> All Roles can be modified. These roles here serve as an example to explain “Roles”.

The panel dialog behind the role cards show all editable permission right details for each role. For each detail you can choose if this role has “Read” rights or “Admin” rights. This example shows an admin role.

Click on the “admin” role card for example to open the list of permissions you can specify for this role and the choose the application access rights for it.

![Admin example](/guides/users-guide/adminsample.png)

In addition to the permissions, there is also a link to Help & Documentation provided. Choose the built-in applications the global role will be able to use.

The type of permissions are listed below:

- Alarms: Read or edit alarms for devices.		
- Application management: Read or edit the applications available in this account.			
- Audits: Read or create audit records for devices.
- Bulk operations: Read or create bulk operations.
- CEP management: Read or edit Cumulocity Event Language rules.				
- Device control: Read or edit commands for devices resp. send commands to devices.			
- Email: Read and create E-mail notifications.
- Events: Read or create events for devices.	
- Identity: Read or edit identifiers for devices.	
- Inventory: Read or edit inventory data.			
- Measurements: Read or create measurements for devices.
- Option management: Read or edit account options such as password policies.	
- Remote Access: Read or Create remote access
- Retention rules: Read or edit retention rules.	
- Simulator: Read or create simulated devices.	
- SMS: Read or create SMS notifications.	
- Tenant statistics: Read the usage data for this account.
- User management: Read or edit users, roles and permissions.			
- Own user management: Read or edit your own user.

For these various types, the following permissions are available:

- Read: Read specified data.
- Change: Modify and delete specified data. (Not including "Read"!)
- Create: Create new data like users and inventory data and edit users within your hierarchy.

All types of data can be modified, with one exception to this rule which are the “audit logs”. The "Create" permission enables the user to create devices in the inventory and to fully manage these devices owned by the user. The user cannot read or manage devices owned by other users. This is mainly used to limit the permissions available to devices.

To assign permissions click on the relevant checkbox.

More examples for specific User Roles:

|Type of Role|Description|Permission|
|:-----------|:---------|:---------|
|Tenant Manager|This role manages tenant wide applications, tenant options and retention rules.|- Tenant Statistics (READ)
- Tenant Management
- Option Management
- Application Management
- Retention Rules
- Data Broker
	-has access to Administration Application.|
|Global User Manager|Can access and modify the full user hierarchy|- User Management Administration 
- has access to Administration Application.|
|Shared User Manager|Can create users as his sub-users and manage them.|- User Management (CREATE)|
Global Reader|This role reads data from all devices.|READ for the following APIs:
- Alarms
- Measurements
- Events
- Inventory
- Audit
- Identity
- Device Control|
|Global Manager|This role can read and write in all data from all devices.|READ and CHANGE for the following APIs:
- Alarms
- Measurements
- Events
- Inventory
- Audit
- Identity
- Device Control|

### Inventory Roles

Inventory Roles are sets of permissions that allow groups of devices to perform certain operations in a particular context. A group can have one or more members.
- It is a three way assignment: It is a role (a specific set of permissions) and it is assigned to a device group and a user. 

> Please note that inventory roles do not cover dashboards and smart rules created before version 7.47

The Roles Panel shows you also how many permissions are involved in one inventory role. On the right side there is also a description field provided to store additional information about this inventory role.

There are several sample roles provided, but they can be modified to meet user specific requirements. The names are self- explanatory:
- Alarms Read
- Events Read
- Inventory Read
- Measurement read
- Full access (read and write on everything)
- New Role

![Role details](/guides/users-guide/roledetails.png)

Above is the list of permissions for an example "Read permissions for alarms". In this case, you can select the alarm type and the type of authorization. All alarms are selected by setting an asterisk. The second column specifies whether this inventory role has read authorization, has administrative rights, or has all rights. Other permissions can be chosen according to the list and you can save your own combinations according to different requirements.
- Alarms
- Audits
- Events
- Inventory
- Measurements
- Device Control
- Support
- Full Access

![Role permissions](/guides/users-guide/roleperm.png)

### Examples how to use an Inventory role:

- Support: You can create inventory support roles by giving access to inventory and alarms with “Read” status.
- Selected Measurements: A device is processing temperature measurements for example. This device gets an inventory role with “Read” access. The type in the first column is specified as c8y_TemperatureMeasurement and c8y_Battery, both permissions are set to read. It is important to assign both permissions, otherwise no measurement is shown at all.
- Inventory Access: A device processing tracking related events for assets is specified as an Inventory Role with inventory access set to read and an event access added for c8y_Position set to “Read” permission.

### Assigning Roles to Users and Device Groups

Navigate back to the Users menu and click on the cogwheel at the row-end of a user and choose “edit user”. On the top of the following panel you find horizontal tabs where you can choose if you will edit Global Roles for the user, inventory roles and assign Cumulocity applications this user can access.

### Profile / Global Roles

The first panel shows the User profile and Global Roles. Global Roles are assigned to users by choosing the checkbox next to it. 

![User page](/guides/users-guide/userpage.png)

### Assigning Inventory Roles

Inventory Roles are assigned to groups and subgroups of devices. In this panel you will see a list of devices and device groups. By clicking on the small down-arrow at the end of the row you will see a list of Inventory Roles you can assign to this device or device group exactly as on the screenshot below. These are the inventory roles you created before for your devices. Sub- groups inherit Inventory Roles from their parent group, but parents do not adopt Inventory Roles from children.

![Inventory roles](/guides/users-guide/inventoryroles.png)

Clicking on the arrow next to a group opens a dropdown menu with inventory roles available for this group. You can choose inventory roles that were created before from there.You can also copy inventory roles from another user by merging or replacing roles. A pop up card will show the choices available, when you click on the “Copy (inventory) roles from another user” button.

SCREENSHOT MUST BE ADDED

Example: User 1 works with 2 or 3 groups of devices and those groups have inventory roles assigned. If you want to transfer this inventory roles from that user to another user, then you will use this copy function to transfer this inventory roles from user 1 to a user 2.

### Grant application access

The last index tag shows available Cumulocity application options for this user.
These application are visible in the application switcher of this specific user. To choose them you need to set a tick in the checkbox. If a user has one of the user management permissions, he or she has access to all applications by default.

![Application access](/guides/users-guide/appaccess.png)

### Editing groups

The device groups are created inside the device management application. To add devices to groups click on “All devices” in the Navigation and open the “Info” tab. Here you can assign devices to groups. Further information:

https://www.cumulocity.com/guides/users-guide/device-management/#viewing-devices

Groups are created and edited under “Groups” in the Navigation. To edit a group, click on the name of the group in the group list. After you have finished modifying the group, click on the "Save" button. Further information:

https://www.cumulocity.com/guides/users-guide/device-management/#grouping-devices

Assets with groups can also be created in the Cockpit application after registering them in Device Management. Further information:

https://www.cumulocity.com/guides/users-guide/cockpit/#connect

Warning: Editing a user group can change the permission for all users in the group and can affect the functionality of devices.

### Removing Groups

To remove a group, hover over the group name and click on the "X" button. A confirmation dialog will appear. Clicking on "OK" will delete the group.

## Using Support Permission 

### Overview

Support users are users in the management tenant area with a special permission to log in to tenants accounts. To allow login to tenants, the support user account must have support access rights. When a support user logs into a tenant account, the user has the same privileges as a subtenant user. This user type is specified on the login page.
Support users can log in using own passwords and usernames:
support_user$user
The "support_user" is the name of the support user obviously, "user" is the name of the user whose environment will be accessed.
Alternatively:
support_user$
The "support_user" is the name of this user in the management tenant area. In this use case, the support user will access the environment of one of the admin users.

### Configuration

The support user function is enabled by default. If it is disabled by the platform operator, then every user has an "Activate support access" option. It is available in the upper right menu. After selecting this option, support users have access to this tenant account for one day.

### Audit logs

Audit logs for all actions performed by support users will have information about the actual author. In the column "Who?" the author's name will be shown in form of:
"support_user$user"

### Troubleshooting:

If a user attempts to perform actions without sufficient permissions or a sufficient user role an error message will be displayed either next to the menu item that should perform this action or on top of the browser screen. The error message will have information about the type of mistake, so a user will know what needs to be done to be able to perform the desired action.

On the image below the user is attempting to access an application where he or she does not have access to. The application access is granted, but the user still does not have rights to do anything in this area. The pop - up window describes the missing permissions.

![Warning](/guides/users-guide/warning2.png)

### Restricting tenant deletion

Users with tenant management function and  "Admin" permissions can create, update and delete tenants. To prevent a user from deleting tenants only a "create and update" permission should be granted.

![tenant delete restriction](/guides/users-guide/restrict_tenant_deletion.png)

### <a name="tenant_management_object"></a>Tenant management objects

Tenant management objects are devices in tenant "management" representing existing tenants. Once a new tenant is created, a new tenant management object is also created in the tenant "management" with type "c8y_Tenant" and a name equal to tenant ID. This object contains also fragment "customProperties" with "externalReference" and other custom properties of the associated tenant.

Warning: If the tenant management object is accidentally deleted, it can be recovered by updating any property of the associated tenant. Tenant-specific permissions related to the tenant account will be lost.


### <a name="assigning_device_specific_permissions"></a>Assigning device-specific permissions

To assign more specific permissions on device level or device group level, go to the "User permissions" section while editing users, or "Group permissions" section while editing user groups.

- Select a managed object (device or group of devices) by typing the ID or the name of the managed object.
- Select the scope of the permission for the selected managed object. The scope limits the permission to particular types of data for this managed object. Use an asterisk ("*") to grant permission to all types of data of the managed object.
- Limit the permission to particular content in the data ("type"). For example, to limit a user to only send restart commands to a device, use "OPERATION" as scope and "c8y_Restart" as type. Again, use an asterisk ("*")  as wildcard for any content.
- Select the permission to grant: Use "Read" to read the data. Use "Admin" to create, modify and delete the data. Use an asterisk ("*") to assign both read and admin permission.
- Click on the "Add" button.
- Click on the "Save" button.

![User Permissions](/guides/users-guide/userpermissions.png)

> As mentioned above, permissions for groups of devices are inherited to the child devices and child assets of the group.

### Assigning application access permissions

To assign applications to particular users and user groups, go to the "Application access" section of that user or user group. The application access section is not visible if the user or user group already has access to all applications. The section shows marketplace applications and own applications. Marketplace applications are generally subscribed applications for your account. Own applications are applications that you added to your account, see [Applications](#applications). Check all applications that should be made available to the user or user group.

<img src="/guides/users-guide/applicationaccess.png" alt="Application access" style="max-width: 60%">

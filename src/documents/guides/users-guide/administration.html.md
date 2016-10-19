---
order: 40
title: Administration
layout: default
---

## Overview

The Administration application lets account administrators manage their users, applications, rules and stored files, as well as configure a number of options for the account. You can:

* View [subscription information](#home) for your account.
* Manage [users](#users) and [user groups](#user-groups), including their [permissions](#permissions).
* Configure [applications](#applications) and [simulators](#simulators).
* Set up real-time [event processing](#event-processing) scripts and [reprioritize alarms](#reprio-alarms).
* Change [settings](#settings).
* Configure the [retention policies](#retention) for your data.
* Configure the recipients and trigger of the [warning e-mail](#warningEmail) for maximum storage being reached.
* Manage [stored files](#files) such as firmware images or log files.

## <a name="home"></a>The home screenshot

The "Home" screen provides navigation links to the main parts of the administration application. It also shows subscription information for your account. The subscription information describes how much capacity you have used and what optional applications you are subscribed to. The capacity section shows:

* API requests: Counted whenever some functionality in Cumulocity is invoked, regardless of whether the functionality is invoked from a device (for example, sending a measurement) or from an application (for example, viewing the list of devices).
* Device API requests: Counted only when the API is called from a device (for example, sending a measurement)
* Storage: The total amount of data stored in your account. This amount can be influenced by [retention policies](#retention) and by the amount and size of [stored files](#files).
* Storage quota: if the storage limit per device is set, the user is restricted to a [maximum data usage](#storageQuota).
* Devices: The total number of devices connected to your account. This is the sum of the devices listed in the "[All devices](/guides/users-guide/device-management#viewing-devices)" menu of the Device Management application and their direct and indirect child devices.
* Users: The sum of all users configured in this account, active and inactive.

"This month" shows the usage information from the start of the current month. "Last month" shows the last full month.

<img src="/guides/users-guide/home.png" alt="Home" style="max-width: 60%">

## <a name="users"></a>Managing users

In order to manage users in your tenant, click on the "Users" menu. New accounts will usually contain two users: The initial administrator user and the "sysadmin" user. The initial administrator user was configured when your account was created. This user cannot be removed, only edited. The "sysadmin" user is a user that the Cumulocity support uses to guide you through your trial phase.

> Note that the sysadmin user may not be present depending on your provider.

![Click Users](/guides/users-guide/Users.png)

### Adding users

To add additional users, click on "Add user".

- Enter the username that the user will use for logging in to your account.
- Choose if the user will be active. If this switch is set to "disabled", the user will not be able to log in.
- Enter first and last name of the user. This is purely for information and will be shown on the top right next to the user symbol when the user logs in.
- Enter the e-mail address of the user. Note that you need to provide a valid, unique e-mail address here to enable users to reset their password.
- Enter the telephone number. Again, this is purely informational.
- If you choose to check "Enable two-factor authentication", the user will be forced to provide phone number and on login the pin code will be required for successful authentication
- If you choose to check "Password reset", the user will have to choose a new password after the next login.
- If you choose to check "Send password reset link as e-mail", the e-mail message will be sent to provided e-mail address with link to reset password
- Enter a password and confirm the password. (See "[Logging in](/guides/users-guide/overview#login)" for more information on password strength.)
- Add users to relevant [user groups](#user-groups).
- Assign device and application [permissions](#permissions).
- Finally, click the "Save" button.

![Add User](/guides/users-guide/adduserpage.png)

> Fields without an asterisk ("*", e.g., "First name", "Last name") are not mandatory.

### Editing users

To edit an existing user, just click on the user in the list. All user details other than the username and "Send password reset link as e-mail" checkbox can be modified. To change the password, click on "Change password". Click "Save" after you have finished editing.

### Deactivating or deleting users

Hovering over a user reveals the deactivate and delete buttons on the right side. The "Deactivate" button simply disables the user. The user continues to exist, but will not be able to log in. The delete button ("X") permanently deletes the user.

![Delete User](/guides/users-guide/deleteuser.png)

### <a name="tfa"></a>Using two-factor authentication

The Two-factor authentication(TFA) is an extra layer of security that requires not only a username and password, but SMS verification as well. TFA can only be enabled by administrators. When TFA is enabled, it's not possible to configure it from the "User settings", it is configurable from the administration UI.

> Note that phone number is required when adding a user and TFA is enabled. When users without a phone number try to login when TFA is enforced, the user will be redirected to a window, to enter his/her mobile phone number.

To see whether TFA is enabled for a certain user, go to the "Users" menu and check the TFA status column.

![TFA satus](/guides/users-guide/tfastatus.png)

In order enable two-factor authentication for a user:

- Go to the "Users" menu.
- Click on the desired user.
- Click on the checkbox next to "Enable two-factor authentication.
- Click "Save".

![Enable TFA](/guides/users-guide/enabletfa.png)
## <a name="user-groups"></a>Managing user groups

To simplify user management, users with the same permissions can be placed into user groups representing typical permission sets. A single user can be part of multiple user groups. New accounts will usually contain four user groups by default. These user groups have common useful permission settings:

* admins: A group with all permissions set.
* business: Users in this group can work with all devices and their data, but cannot administer the account.
* readers: User in this group can read all data but cannot make any changes (including sending commands to devices, for example).
* devices: A group with typical minimal default permissions for devices.

All groups can be modified and deleted.

![User groups](/guides/users-guide/usergroups.png)

### Adding user groups

To add a user group:

- Click on "Create user group".
- Enter the name of the user group.
- Edit the [permissions](#permissions).
- Click on the "Save" button.

### Editing groups

All user group details can be edited. To edit a group, click on the name of the group in the group list. After you have finished modifying the group, click on the "Save" button. Editing a user group may change the permission for all users in the group and may affect the correct functioning of devices. Hence, you have to confirm your changes as shown in the screenshot below.

<img src="/guides/users-guide/confirmgroup.png" alt="Confirm group editing" style="max-width: 60%">

### Removing groups

To remove a group, simply hover over the group name and click on the "X" button. A confirmation dialog will appear. Click "OK" and the group will be deleted.

![Remove Group](/guides/users-guide/removegroup.png)

## <a name="permissions"></a>Managing permissions

Cumulocity distinguishes three types of permissions that you can assign to users and user groups:

* Account-wide permissions ("roles"): These are flags that enable a user to unconditionally read or modify certain types of data in your account, such as seeing all devices and being able to edit all devices.
* Device- or device group-specific permissions: These permissions define on a granular level access to data in your account, such as being able to work with alarms of a particular group of devices.
* Application access permissions: These define the applications that the user will see in their application switcher.

The total set of permissions that a user has is calculated using the following rules:

* A user has the sum of the permissions that are granted to all groups that the user is part of.
* If a user has account-wide permissions, corresponding more specific permissions are ignored. For example, if a user has the permission to see all applications, you cannot edit application access permissions until you remove the permission to see all applications. Likewise, if a user has full access to the complete inventory, any inventory-related permissions are ignored.
* Device-/group-specific permissions are inherited to all direct and indirect child devices and child assets. For example, if you assign "read" permission to a group of devices, the user will be automatically able to see all devices in the group.

### Assigning account-wide permissions

When you edit a group, a table with "roles" is listed below the group name. These represent permission on the following types of data:

* Tenant management: View, create, edit or delete subtenants.
* Tenant statistics: View the usage data for this account, as shown on the home page of the administration application.
* Option management: View or edit account options such as password policies.
* Application management: View or edit the applications available in this account.
* User management: View or edit users, user groups and permissions.
* Own user management: View or edit your own user.
* Identity: View or edit identifiers for devices.
* Inventory: View or edit inventory data.
* Measurements: View or create measurements for devices.
* Events: View or create events for devices.
* Alarms: View or edit alarms for devices.
* Audits: View or create audit records for devices.
* Device control: View or edit commands for devices resp. send commands to devices.
* CEP management: View or edit Cumulocity Event Language rules.
* Retention rules: View or edit retention rules.
* Bulk operations: View or create bulk operations.
* Support operations: Allows user to log in to other tenants as support user.

For the various types, the following permissions are available:

- Read: Read the particular type of data.
- Admin: Create, modify and delete the particular type of data. (Not including "Read"!)

Note that not all types of data can be modified (e.g., audit records). For inventory data, there is one additional type of permission: "Create". The "Create" permission enables the user to create devices in the inventory and to fully manage these devices owned by the user. However, the user cannot read or manage devices owned by other users. This is mainly used to limit the permissions available to devices.

To assign permissions click on the relevant checkbox. If you wish to select or clear ALL entries in a particular column, use the buttons at the top:

- Clear all: Clears all of the checked roles.
- Select all: Selects all of the roles.
- Select all Read: Selects "Read" for all types and deselects the other roles.
- Select all Admin: Selects "Admin" for all types and deselects the rest.

![All roles](/guides/users-guide/allroles.png)

### Using Support Permission

#### Overview

Support users are users in management tenant that have special permissions to login to normal tenants.
To allow login into normal tenants, support user account must have support access rights.
When support user logs into a tenant, he has the same privileges as the subtenant user.
The user is specified on login page.  

Support users can login using own password and username in form:

> support_user$user

Where "support_user" is the name of the support user in management tenant and "user" is the name of the user which content will be used.

or, you can use as well:

> support_user$

Where "support_user" is the name of the user in management tenant. In this case, the support user will use the content of one of the admin users.

#### Configuration

The support user functionality is enabled by default.
If it is disabled by the platform operator, then every user has "Activate support access" option, it is available in the upper right menu.
After selecting this option, support users have access to the tenant for one day.

#### Audit logs

Audit logs for all action performed by support users will have information about the actual author.
In column "Who?" the author's name will be shown in form of:

> "support_user$user"

#### Tenant-specific permissions

Sometimes, it is required to assign support access rights to specific tenants only. It can be done by [device-specific permissions](#assigning_device_specific_permissions) for the user and [tenant managed object](#tenant_management_object) with scope "SUPPORT", type "&#42;" and permission "&#42;".

The screenshot below shows you, how to grant access to the tenant "myTenant".

<img src="/guides/users-guide/support_permission.png" alt="Support permission">

Tenant managed object can be found by type "c8y_Tenant" or name equal to tenant id.

### Restricting tenant deletion

Users with tenant management "Admin" permissions can create, update and delete tenants. For example, in order to restrict a user from deleting tenants only create and update permissions should be given. This way, the user can only create and update the tenants, but not delete them.

![tenant delete restriction](/guides/users-guide/restrict_tenant_deletion.png)

### <a name="tenant_management_object"></a>Tenant management objects

Tenant management objects are devices in tenant "management" representing existing tenants. Once new tenant is created, new tenant management object is also created in tenant "management" with type "c8y_Tenant" and name equals to tenant id. This object contains also fragment "customProperties" with "externalReference" and other custom properties of associated tenant.

Warning: if tenant management object is accidentally deleted, it may be recreated by updating any property of associated tenant, however tenant-specific permissions related to the tenant will be lost.

### <a name="assigning_device_specific_permissions"></a>Assigning device-specific permissions

To assign more granular permissions on device level or device group level, visit the "User permissions" section while editing users, or "Group permissions" section while editing user groups.

- Select a managed object (device or group of devices) by typing the ID or the name of the managed object.
- Select the scope of this permission for the selected managed object. The scope limits the permission to particular types of data for this managed object. Use an asterisk ("*") to grant permission to all types of data of the managed object.
- Limit the permission to particular content in the data ("type"). For example, to limit a user to only send restart commands to a device, use "OPERATION" as scope and "c8y_Restart" as type. Again, use an asterisk ("*")  as wildcard for any content.
- Select the permission to grant: Use "Read" to read the data. Use "Admin" to create, modify and delete the data. Use an asterisk ("*") to assign both read and admin permission.
- Click on the "Add" button.
- Click on the "Save" button.

![User Permissions](/guides/users-guide/userpermissions.png)

> As mentioned above, permissions for groups of devices are inherited to the child devices and child assets of the group.

### Assigning application access permissions

To assign applications to particular users and user groups, visit the "Application access" section of that user or user group. Note that the application access section is not visible, if the user or user group already has access to all applications. The section shows marketplace applications and own applications. Marketplace applications are generally available applications that your account is subscribed to. Own applications are applications that you added to your account, see [below](#applications). Check all applications that should be made available to the user or user group.

<img src="/guides/users-guide/applicationaccess.png" alt="Application access" style="max-width: 60%">

## <a name="applications"></a>Managing applications

Besides the readily available applications, you can also provide own applications in your account by visiting the "Own applications" menu. These applications can be "Smartapps" or generic HTML5 applications. “Smartapps” applications are HTML5 applications that can be extended by adding plugins. When deploying plugins, the plugins are deployed into a specific application. For example, a plugin might add a specific widget to the Cockpit dashboard.

Plugins can only be added to own applications, because the application itself is modified when adding the plugin. When adding a plugin to subscribed applications, the application must be cloned first into an own application. Afterwards the plugin can be added. This process is supported by the Administration Application wizard.

> Please note that in the new "Smartapps" the plugin is "inserted" into the application. This has changed from the old Smartapps which could reference plugins stored in other applications.

When an application has been created it will be available in the application switcher.

> Note that the "Open" button of the application is revealed when you hover over the application's name.

![List of own applications](/guides/users-guide/ownapplications.png)

### Creating an application

To add an application, you can upload a "ZIP file" application. In order to do that:

- Click on "Add application".
- Click on "Upload ZIP file".
- Either drop the file into the box or simply browse your computer.

### Working with bitbucked hosted application

Assume that you are developing a web application, using Bitbucket as code repository. In this case, exposing the application through Cumulocity can be done as follows:

* Click on "Add application".
* Click on "HTTP(S) proxy".
* Enter the name of the application, as shown in the application switcher.
* Enter an application key. The application key is used to identify requests from this application and to
make it available for subscription.
* Enter the application path. This path will b	e part of the URL to invoke the application. For example, if
you use "hello" as application path, the URL of the application will be "/apps/hello".
* Enter the server URL where your application is hosted. At this URL, there needs to be an index.html file
that provides the entry point to your application.
* Enter a username to access your repository (optional).
* Enter a password to access your repository (optional).
* Click "Save".

![https proxy app](/guides/users-guide/httpsproxy.png)

> Note that, username and password are transmitted using HTTP Basic Authentication.

> We do not recommend to use bitbucket hosted application anymore, because downtime of bitbucket results into downtime of the application.

### Working with external applications

"External applications" are links to applications running elsewhere. Enter name of the application and application key, then provide the URL of that application and click "Save" to make the link available in the application switcher.

### Cloning applications

This option will copy the application. Cloning a subscribed application creates a copy of the application as own application, with a link to the original application.

In order to clone an application:

- Click on "Add application"
- Click on "Clone existing application"
- Select the desired application that you wish to clone. Note that also subscribed applications are shown.
- Enter the name of the application. The name will be shown as title on the top left of the application. It will also be shown in the application switcher.
- Enter an application key. The application key is used to identify requests from this application and to make it available for subscription, see the [Concepts guide](/guides/concepts/applications).
- Enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
- Click on the "Clone" button.

### <a name="creating-smartapp"></a>Adding a smartapp

> Note that this functionality is depreciated and will be removed in future versions of the product.

To add a smartapp:

- Click on "Add application".
- Click on "Create legacy smartapp".
- Enter the name of the application. The name will be shown as title on the top left of the application. It will also be shown in the application switcher.
- Enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
- Click the "Create" button.

> Please note that these are the old "Smartapps" in which the plugins that you wish to add to your application must be selected from a list.

![Legacy smartapps](/guides/users-guide/smartapps.png)

### Adding and removing plugins

In order to configure and extend the functionality provided through a smartapp, you can add plugins (as ZIP files) to your applications. To add additional plugins, go to “Own applications”, hover over your desired applications and click on “Add Plugin”. You can then drag the plugin into the box or simply browse your computer.

![Plugins](/guides/users-guide/plugins.png)

To remove a plugin, click on the cogwheel next to the desired plugin and click remove. The following tables list the navigator items, menu items and their respective plugins:


|Navigator Item|Plugin|
|:-------------|:-----|
|Welcome|Welcome screen|
|Home|Cockpit Home|
|Smart Rules|Smart Rules UI|
|Groups|Groups Hierarchy|
|Data Explorer|Data Point Explorer UI|
|Data Point Library|Data Point Explorer UI|
|Reporting|Reporting|
|Reports|Dashboard (Note: There are two plugins with this name. Select the one with the description: "Reports are stand alone dashboards without a context")|
|Alarms|Alarm Management|

|Menu Item|Plugin|
|:--------|:-----|
|Info|Not possible to disable|
|Subassets|Not possible to disable|
|Permissions|Device Permission Management Plugin|
|Data Explorer|Data Point Explorer UI|

> Please note the "UI" in the end of the plugin names.

### Restoring to an older application version

Users can restore old versions of an application.
If you “set active” a specific version of the app, then this will be the version used by users.

>Note that the “Archive” tab is not available for subscribed applications, as only the owner of the application can perform this action.

### Editing applications

To edit an application, simply click on its name. Depending on the type of the application (e.g. Hosted, External), different fields can be modified.

> Note that "ID", "Application key" and "Path" cannot be changed once configured.

### Uploading archives

For applications that have been created by uploading ZIP files, multiple ZIP file versions can be stored in Cumulocity. Each version is called an archive. You can upload different versions at the same time and switch between these versions. To upload an archive:

- Select the application by clicking on its name.
- Click on the "Archives" tab.
- Click on "Upload archive" and navigate to the archive in your folder.
- Click on "Upload" to upload the archive to Cumulocity.

![Upload archive](/guides/users-guide/uploadarchive.png)

Once uploaded, archives can be downloaded, activated or removed if necessary. The active archive (indicated by a cloud icon) is the version of the application that is currently being served to the users of your account. This version cannot be deleted.

### Editing applications

To edit an application, simply click on its name. Depending on the type of the application (e.g. Hosted, External), different fields can be modified.

> Note that "ID", "Application key" and "Path" cannot be changed once configured.

### Removing applications

If you remove an application that overrides a subscribed application, you make the currently available subscribed application available to all users. Additionally the users will then also benefit from future upgrades of the subscribed application.
It is not possible to remove subscribed apps. This is only possible for the owner of the subscribed application.

> Note that in order to override a "Subscribed application" the "Own Application" must have the same context-path as the "Subscribed application".

To remove an application, simply hover over the application name and click on the cogwheel, then press the "Remove" button. A confirmation pop-up window will appear. Click "OK" and the application will be deleted.

## <a name="simulators"></a>Dealing with simulators

Cumulocity provides a simple capability to simulate devices. This way, users can test their applications against simulated devices during development. To view the simulator section, click on
"Simulator" in the "Applications" menu.

### Adding a simulator

To add new simulator, click on "Add simulator"

- Enter the simulator name. The name will be used in the simulated devices.
- Select the number of simulated instances. For example, if you choose two instances, two sets of simulated devices with the selected sensors are created.
- Select the desired sensors. This will reveal two new fields: "Values" and "Interval". "Values" contains a playlist of numbers separated by semicolons, which will be played in "Interval" seconds. For example, if you use "16.7;18;20" as "Values" and 5 seconds as interval, the first simulated sensor reading will be 16.7. After five seconds, a second value of 18 will be recorded. After another five seconds, 20 will be recorded. After further five seconds, the procedure will start from the first value.
- Click "Save"

Please note that the maximum number of simulators is 10.

![Add simulator](/guides/users-guide/addsimulator.png)

### Starting, pausing or removing simulators

Simulators can have two states, running and paused. To start a simulator first hover over its name, then click on the "Run device" button.

![Start simulator](/guides/users-guide/startsimulator.png)

To stop a simulator, simply press the "Stop device" button while hovering over the desired simulator name. To delete a simulator, hover over the simulator's name, press the "X" button and confirm the pop-up window.

> Note that simulators cannot be edited currently. Instead, you will have to add a new one.

## <a name="tenants"></a>Managing tenants

With subtenants you can 100% separate data from one customer to another customer.

Background: As tenant administrator, all the data in your tenant is 100% isolated from the data in all other tenants. However, the data inside your tenant is by default shared with all users that have an account, unless restricted via user permissions. In addition, data like user accounts and analytic rules are shared by all users.

If you want 100% data isolation instead of dealing with user permissions, then use the subtenants. Each subtenant has a fully isolated data area. All Cumulocity features (e.g. user management, app management, rule management) are available for each subtenant without visibility to other subtenants.

This feature is an optional feature which is not available for all tenants.

> In case you are subscribed to the feature, but you do not see it, contact support.

In order to manage subtenants click on the subtenants menu. Subtenant management includes: Tenant creation, activation, suspension, subscribed applications and options.

![Sub-tenants](/guides/users-guide/sub-tenant.png)

> Note that tenant ID's remain unique, so no two tenants can create subtenants with the same "URL/ID".
> Also note that subtenants cannot create an additional level of subtenants.

### Adding sub-tenants

To add a new subtenant, click on "Create Tenant"

> Please note that fields with an asterisk (" * ") are mandatory.

- Enter unique domain/url of the new tenant. This url will be used to access the application (e.g. tenant@cumulocity.com).
- Enter the name of the company.
- Enter the administrator's e-mail. Note that you need to provide a valid e-mail address here to enable users to reset their password.
- Enter username of the administrator which will be used when logging in.
- Enter contact name. This field is optional.
- Enter contact phone. Again, this field is optional.
- Choose whether you wish to have the password reset link sent as an e-mail. If you have not selected this option you will have to enter a password and confirm the password. (See "[Logging in](/guides/users-guide/overview#login)" for more information on password strength.)
- Press the "Save" button.

![Tenant-creation](/guides/users-guide/createtenant.png)

### Editing, suspending and removing sub-tenants

In order to edit subtenants, click on the desired subtenant. All the fields can be edited except "ID" and "Administrators Username".

When you have finished editing, click on the "Save" button.

> Note that when a tenant is suspended, his data still remains in the database and he can be reactivated at any later date. On the other hand when the tenant has been removed its data will be deleted.

Hovering over a tenant will reveal the "Suspend" and the "Remove" buttons. The "Remove" button is shown as a red cross. To suspend or remove a tenant, click on the respective button.

> Please note that there is an additional check during tenant suspension. The user will have to provide his own password in order to proceed. After the tenant is suspended, an e-mail is sent to the suspended tenant administrator. The e-mail is sent only if the property in the config file is enabled and if the tenant administrator provided an e-mail address during creation.

### <a name="usage-stats"></a> Retrieving usage statistics

Usage statistics menu provides you with information about each subtenant. The statistics show:

- Id: Unique id of the subtenant.
- External reference: This field is for free usage, for example, you can add a link to the CRM system here or an internal customer number.
- API requests: Number of API requests, including requests from  devices and applications.
- Device API requests: Number of API requests from devices
- Storage (MB): The amount of data stored in your account.
- Devices: Total number of devices connected to the tenant.
- Subscribed application: This column shows number of applications that the subtenant is subscribed to.
- Creation time: The date and time of the creation of the subtenant.

![Usage statistics](/guides/users-guide/usagestats.png)

## <a name="event-processing"></a>Managing event processing

Using event processing, you can specify real-time business logic that is automatically run by Cumulocity as soon as new data arrives or existing data is modified. The logic is deployed in so-called "modules". Modules consist of a set of statements that you write in [Cumulocity Event Language](/guides/concepts/realtime). Click on "Event processing" to see the current modules or to create new modules.

![Event processing](/guides/users-guide/eventprocessing.png)

> A user-friendly way to specify real-time business logic is provided in the Cockpit application through the so-called "[Smart Rules](/guides/users-guide/cockpit#working-with-smart-rules)". Smart Rules are "under the hood" also implemented as Cumulocity Event Language statements, and you can see them when you click on "Event Processing". However, you cannot edit Smart Rules from the Event Processing user interface.

### Creating new modules

To create a new module, click on "New module".

- Enter a name for the module. You can only use alphanumeric characters without blanks.
- If you want to run the statements in the module immediately, leave the status set to "Deployed". Otherwise, set the status to "Not deployed".
- Start typing your CEL statements into the large text field labeled "Body". To get some inspiration, select an example from the "Examples" drop-down menu and click "Append example". The example CEL statement will be pasted into the "Body" text field at the position of the cursor.
- Click the "Save" button.

![New module](/guides/users-guide/newmodule.png)

If you selected the "Deployed" status, you will see a small green "Connected" box in the user interface. Whenever your statements produce some output, you will see it below this "Connected" box. Clicking on a line of output unfolds the detailed output of the statement. Clicking "Clear all" removes the output from the screen.

### Managing modules

To modify your module, simply click on the module's name. To remove your module, hover over the module's name and click the "X" button. A confirmation window will pop up. Press "OK" and the module will be removed.

![Remove modules](/guides/users-guide/removemodules.png)

> Note that instead of deleting the module, you can also disable it temporarily by setting the "Status" in the edit menu to "Not deployed". Do not forget to click on the "Save" button.

## <a name="reprio-alarms"></a>Reprioritizing alarms

"Alarm mapping" lets you change the severity and text of alarms to adapt them to your business priorities. For example, a loss of the connection to a device may be critical to you, but it is, by default, a "MAJOR" alarm. To change this, add an alarm mapping to change alarms related to connection losses to "CRITICAL".

![Alarm mapping](/guides/users-guide/alarmmapping.png)

### Adding an alarm mapping

To modify the severity of an alarm, determine the type of the alarm that you want to modify by clicking on an alarm in the [alarm list](/guides/users-guide/device-management#alarm-monitoring). Then click "Add alarm mapping" in the "Alarm mapping" menu.

- Enter the alarm type to modify.
- Select desired new severity, or select "Drop" to not show the alarm at all.
- Enter a new text for the alarm. This step is optional. If you do not enter any text, the original text in the alarm will be preserved.
- Click "Save".

### Changing or deleting alarm mappings

To change an alarm mapping,

- Locate the alarm in the "Alarm mapping" section and click on its name.
- Change the severity and/or text.
- Click "Save".

To delete alarm severities, hover over the alarm type and click the "X" button. A confirmation window will pop up. Press "OK" to delete the alarm mapping.

## <a name="settings"></a>Changing settings

By expanding the "Settings" menu, administrators can:

- Change the [password policy](#changing-password-settings).
- Change the [default application](#default-app).
- Change the [access control](#access-control) settings.
- [Enable or disable the dashboards via e-mail feature](#enabling-server-side-agents)
- Enter [OpenIT credentials](#openIT-credentials)

### <a name="changing-password-settings"></a>Changing the password policy

To change password settings, click on "Password". To limit the validity of user passwords, set the number of days after which users have to change their passwords. If you do not want to force your users to change passwords, use "0" for unlimited validity of passwords.

By default, users can use any password that consists of eight characters or longer. If you select "Enforce that all password are "strong" (green)", your users must provide strong passwords as described in "[Logging in](/guides/users-guide/overview#login)".

> Note that "Enforce that all password are green" and the "Password validity limit" can be mandatory and non-editable, if configured by the platform administrator.

Strong (green) passwords must have M characters. By default, system restricts users to not use password s used in history, in other words last N passwords provided by user are remembered by the system and the system restricts users to not use them. The default value for N is 10.

> Note that M and N can be configured by the platform administrator.

Click "Save" to store the settings.

<img src="/guides/users-guide/passsettings.png" alt="Password settings" style="max-width: 50%">

### <a name="default-app"></a>Changing the default application

Via the "Application" menu, administrators can change the default application reached by all users in the tenant when no application was defined in the URL. Please make sure however to use an application that all user have access to.

### <a name="access-control"></a>Changing access control settings

Via the "Application" menu, administrators can enable cross-origin resource sharing or "CORS" on the Cumulocity API. For more information, see http://enable-cors.org.

### <a name="enabling-server-side-agents"></a>Enabling server-side agents

In the "Server-side agents" menu, the "Send dashboard via e-mail" smart rule can be enabled or disabled. To enable, select the checkbox and click "Save".

### <a name="openIT-credentials"></a>Enter OpenIT credentials

SMS sending is used by several features within the application. it can be used to make login more secure with [two-factors authentication](/guides/users-guide/administration#tfa). An SMS can be sent when an alarm is triggered. SMSes can be used to send instructions to devices. The service provided by [Openit](https://sms.openit.de/main.php) can be used to this effect. In this section, the user can enter its credentials to activate the features that require SMS sending.

## <a name="retention"></a>Managing data retention

"Retention rules" let you control how long data will be stored in your account. For example, you may want to store measurements for 90 days, but delete alarms already after 10 days. By default, all historical data is deleted after 60 days (this can be changed in system settings).

Retention rules are usually run during the night. When you edit a retention rule, you will not see an immediate effect, for example, in the usage section on the home page of the administration application.

![Add rule](/guides/users-guide/addrules.png)

To add additional "Retention rules", click on "Add rule". Up to the "Maximum age" field, you can enter an asterisk ("*") into all fields to permit any value in that field.

- Select the type of data to clean up (alarms, measurements, events, operations, audit logs).
- Enter a fragment type or type, if you want to be more specific about the data to be cleaned up. For example, to clean up all connection loss alarms with this rule, select "alarms" and enter "c8y_UnavailabilityAlarm" into "type".
- If you want to remove only data from a specific device, enter the device ID into "Source".
- Enter the "Maximum age" in days (max. allowed value is 10 years in days).
- Click the "Save" button.

<img src="/guides/users-guide/addrulepage.png" alt="Add retention rule" style="max-width: 50%">

> Note that alarms are only removed if they are in "CLEARED" state.

To delete a rule, click on the "X" button and then press "OK" after the pop-up window appears.

## <a name="warningEmail"></a>Managing storage quota warning e-mail

This section is only visible if a storage quota was set for the tenant. The tenant administrators can set a user group and threshold for an e-mail to be sent once a day if the storage used is higher than a percentage of the storage quota. The e-mail warning can also be disabled. The default setup is sending an e-mail to the "admins" group when the storage reaches 80% of maximum storage.


## <a name="files"></a>Managing files

The file repository provides an overview of the files stored in your account. To see the files, click on "Files repository" in the administration menu. Note that the files listed here may come from various sources. For example, they may be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded using the "Own applications" menu. To delete a file, click the "X" button next to the file.

![Files repository](/guides/users-guide/filesrepo.png)

> If the file corresponds to an active application, it cannot be deleted from here. You first need to remove or upgrade the application to be able to delete it.

## <a name="storageQuota"></a>Storage quota

The storage quota is in place for a tenant when a storage quota per device is set by the platform administrator. The total storage available to the user is calculated using the formula `storage quota per device x number of devices`. A check is performed every night to ensure the quota is not exceeded.

In case the quota is exceeded, an e-mail is sent to all the tenant administrators to warn them that data will be deleted the following night. After 24h, if the quota is still exceeded, all the data retention limits are reduced by a fixed percentage. This percentage is determined to be the minimum that allows the stored data to be under the quota.

For example, let us assume that a tenant has a storage quota of 10GB. Retention rules are 80 days for measurements, 90 days for all other data.
- Day 1: In the nightly check, the total storage is calculated at 13GB. An e-mail is sent to all the tenant administrators.
- Day 2: the total storage is still at 13GB. The system determines that a 15% reduction of the retention rules is sufficient to be under the storage quota. So any measurement older than 68 days (80 days - 15%) and any other data older that 77 days (90 days - 15% results in 76.5 days, rounded to 77 days) is deleted. The total storage is now at 9.8GB.

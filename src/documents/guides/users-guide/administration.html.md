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
* Change [security policies](#security-policies) and [access settings](#access-settings).
* Configure the [retention policies](#retention) for your data.
* Manage [stored files](#files) such as firmware images or log files.

## <a name="home"></a>The home screen

The "Home" screen provides navigation links to the main parts of the administration application. It also shows subscription information for your account. The subscription information describes how much capacity you have used and what optional applications your are subscribed to. The capacity section shows:

* API requests: Counted whenever some functionality in Cumulocity is invoked, regardless of whether the functionality is invoked from a device (for example, sending a measurement) or from an application (for example, viewing the list of devices).
* Storage: The total amount of data stored in your account. This amount can be influenced by [retention policies](#retention) and by the amount and size of [stored files](#files).
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
- Enter the email address of the user. Note that you need to provide a valid, unique email address here to enable users to reset their password.
- Enter the telephone number. Again, this is purely informational.
- If you choose to check "Password reset", the user will have to choose a new password after the next login.
- Enter a password and confirm the password. (See "[Logging in](/guides/users-guide/overview#login)" for more information on password strength.)
- Add users to relevant [user groups](#user-groups).
- Assign device and application [permissions](#permissions).
- Finally, click the "Save" button.

![Add User](/guides/users-guide/adduserpage.png)

> Fields without an asterisk ("*", e.g., "First name", "Last name") are not mandatory.

### Editing users

To edit an existing user, just click on the user in the list. All user details other than the username can be modified. To change the password, click on "Change password". Click "Save" after you have finished editing.

### Deactivating or deleting users

Hovering over a user reveals the deactivate and delete buttons on the right side. The "Deactivate" button simply disables the user. The user continues to exist, but will not be able to log in. The delete button ("X") permanently deletes the user.

![Delete User](/guides/users-guide/deleteuser.png)

## <a name="user-groups></a>Managing user groups

To simplify user management, users with the same permissions can be placed into user groups representing typical permission sets. A single user can be part of multiple user groups. New account will usually contain four user groups by default. These user groups have common useful permission settings:

* Admins: A group with all permissions set.
* Business: Users in this group can work with all devices and their data, but cannot administer the account.
* Readers: User in this group can read all data but cannot make any changes (including sending commands to devices, for example).
* Devices: A group with typical minimal default permissions for devices. 

All groups can be modified and deleted.

![User groups](/guides/users-guide/usergroups.png)

### Adding user groups

To add a user group:

- Click on "Create user group".
- Enter the name of the user group.
- Edit the [permissions](#permissions).
- Click on the "Save" button.

### Editing groups

All user group details can be edited. To edit a group, click on the name of the group in the group list. After you have finished modifying the group, click on the "Save" button. Editing a user group may change the permission for all users in the group and may affect the correct functioning of devices. Hence you have to confirm your changes as shown in the screenshot below.

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
* If a user has an account-wide permissions, corresponding more specific perissions are ignored. For example, if a user has the permission to see all applications, you cannot edit application access permissions until you remove the permission to see all applications. Likewise, if a user has full access to the complete inventory, any inventory-related permissions are ignored.
* Device-/group-specific permissions are inherited to all direct and indirect child devices and child assets. For example, if you assign "read" permission to a group of devices, the user will be automatically able to see all devices in the group.

### Assigning account-wide permissions

When you edit a group, a table with with "roles" is listed below the group name. These represent permission on the following types of data:

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

### Assigning device-specific permissions

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

To assign applications to particular users and user groups, visit the "Application access" section of that user or user group. Note that the application access section is not visible, if the user or user group already has access to all applications. The section showns marketplace applications and own applications. Marketplace applications are generally available applications that your account is subscribed to. Own applications are applications that you added to your account, see [below](#applications). Check all applications that should be made available to the user or user group.

<img src="/guides/users-guide/applicationaccess.png" alt="Application access" style="max-width: 60%">

## <a name="applications"></a>Managing applications

Besides the readily available marketplace applications, you can also provide own applications in your account by visiting the "Own applications" menu. These applications can be "Smartapps" or generic HTML5 applications.

Smartapps are modular applications built on top of the Cumulocity user interface framework, just like the standard Device Management, Cockpit and Administration applications. Smartapps are assembled from a set of so-called "plugins". Plugins provide new functionality in the user interface. Even without programming, you can create variations of the pre-provided applications by simply assembling their plugins in different ways and, for example, hiding unneeded plugins. For more information, see the [Concepts guide](/guides/concepts/applications). 

When an application has been created, you can clone, open and delete it by hovering your mouse over the application. The "Clone" function duplicates the application, while the "Open" button simply opens the application. After the "Clone" button is pressed a pop-up window will appear in which a unique application name and application path need to be entered.

![Own Applications](/guides/users-guide/ownapplications.png) 

### <a name="creating-smartapp"></a>Adding a smartapp

To add smartapp:

- Click on "Create smartapp".
- Enter the name of the application. The name will be shown as title on the top left of the application. It will also be shown in the application switcher.
- Enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
- Click the "Create" button.

<img src="/guides/users-guide/createsmartapp.png" alt="Create Smartapp" style="max-width: 60%">

### Adding an HTML5 application

To add an HTML5 application:

- Click on "Create application", located to the right of "[Create smartapp](#creating-smartapp)"
- Enter the name of the application, as shown in the application switcher.
- Enter an application key. The application key is used to identify requests from this application and to make it available for subscription, see the [Concepts guide](/guides/concepts/applications).
- Choose the type of the application
  - [Hosted](#working-with-hosted-applications)
  - [Repository](#working-with-repository-applications)
  - [External](#working-with-external-applications)

![Create app](/guides/users-guide/createapp.png)

Depending on the selected type, different further options will appear.

### <a name="working-with-hosted-applications"></a>Working with hosted applications

"Hosted applications" are HTML5 applications hosted through Cumulocity servers. These applications are packaged as ZIP archives having an "index.html" file in the root folder of the archive. To complete the configuration:

- Enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
- Select the archive file that contains the application and upload it.
- Click *Save*.

### <a name="working-with-repository-applications"></a>Working with repository applications

"Repository applications" are HTML5 applications hosted through an external repository. Such a repository can be, for example, a version control system such as Bitbucket or Github. To complete the configuration:

- Enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
- Enter the server URL where your application is hosted. At this URL, there needs to be an index.html file that provides the entry point to your application.
- Enter a username to access your repository (optional).
- Enter a password to access your repository (optional).
- Click *Save*.

Username and password are transmitted using HTTP Basic Authentication.

### <a name="working-with-external-applications"></a>Working with external applications

"External applications" are simply links to applications running elsewhere. Provide the URL of that application and click "Save" to make the link available in the application switcher.

### Editing applications

To edit an application, simply click on its name. Depending on the type of the application (e.g. Hosted, External). different fields can be modified. 

> Note that "ID", "Application key" and "Path" cannot be changed once configured.

### Subscribing to plugins

To configure the functionality provided through a smartapps, select the "Plugins" tab. To subscribe to "Plugins":

- Select application by clicking on its name.
- Click on "Plugins".
- Locate the desired plugin by scrolling through the list of available plugins. You can reduce the list by selecting a plugin category from the drop-down menu, or by starting to type the plugin's name. Clicking on the plugin name unfolds a description of the plugin.
- Hover over the desired plugin and click the *Subscribe* button.
- Click on the *Save changes* button

![plugins](/guides/users-guide/plugins.png)

After subscribing to plugins, they will be displayed under the "Subscribed plugins" list. To unsubscribe a plugin:

- Hover over the subscribed plugin.
- Click "Unsubscribe".
- Click "Save changes".
 
![Unsubscribe](/guides/users-guide/unsubscribe.png)

### Uploading archives

You can upload different versions of a hosted application at the same time and switch between these versions. To upload an archive:

- Select the application by clicking on its name.
- Click on the "Archives" tab.
- Click on "Upload archive" and navigate select the archive on your folder. 
- Click on "Upload" to upload the archive to Cumulocity.

![Upload archive](/guides/users-guide/uploadarchive.png)

Once uploaded, archives can be downloaded, activated or removed if necessary. The active archive (indicated by a cloud icon) is the version of the application that is currently being served to the users of your account. This version cannot be deleted.

### Removing applications

To *Remove* applications simply hover over the application name and click the "X" button. A confirmation pop-up window will appear. Click "OK" and the group will be deleted.

![Remove application](/guides/users-guide/removeapp.png)

## <a name="simulators"></a>Dealing with simulators

Cumulocity provides a simple capability to simulate devices. This way, users can test their applications against simulated devices during development. To view the simulator section, click on
"Simulator" in the "Applications" menu.

![Simulator](/guides/users-guide/simulator.png)

### Adding a simulator

To add new simulator, click on "Add simulator"

![Add simulator](/guides/users-guide/addsimulator.png)

- Enter the simulator name. The name will be used in the simulated devices.
- Select the number of simulated instances. For example, if you choose two instances, two sets of simulated devices with the selected sensors are created. 
- Select the desired [sensors](#working-with-sensors). This will reveal two new fields: "Values" and "Interval". "Values" contains a playlist of numbers separated by semicolons, which will be played in "Interval" seconds. For example, if you use "16.7;18;20" as "Values" and 5 seconds as interval, the first simulated sensor reading will be 16.7. After five seconds, a second value of 18 will be recorded. After another five seconds, 20 will be recorded. After further five seconds, the procedure will start from the first value.
- Click "Save"

### Starting, pausing or removing simulators

Simulators can have two states, running and paused. To start a simulator first hover over its name, then click on the "Run device" button.

![Start simulator](/guides/users-guide/startsimulator.png)

To stop a simulator, simply press the "Stop device" button while hovering over the desired simulator name.

![Stop simulator](/guides/users-guide/stopsimulator.png)

To delete a simulator, hover over the simulator's name, press the "X" button and confirm the pop-up window.

> Note that simulators cannot be edited currently. Instead, you will have to add a new one.

## <a name="event-processing"></a>Handling business rules

*Business Rules* allow the administrator to set up events and alarms. Via "Event processing" *New modules* can be created to add alarms that will activate when a certain event occurs or after certain amount of time have passed. *Alarm mapping* will allow administrators to choose between alarm severities. By using severities you can monitor problems with your assets.

### Dealing with event processing

To see your current modules or to create new one click on *Event processing*.

![Event processing](/guides/users-guide/eventprocessing.png)
 
> Note that if you do not see "Event processing" click on "Business Rules".

### Creating new modules

Modules can be used to create alarms a
when certain event conditions have been met (e.g. Temperature threshold has been exceeded). Later even [alarm severities](#adding-alarm-mapping) for the events can be set.

To create new modules first click on "New module".

![New module](/guides/users-guide/newmodule.png)

- Write "Name" of the module.
- Set status to *Deployed* or *Not deployed*.
- Body examples can be seen by clicking on the drop-down menu under "Examples". Select the desired event (e.g. "Create alarm when temperature below 0 degree") and click on "Append example"
- After the *Body* has been completed click on the "Save" button.

> Note that selecting "Deployed" status will set the module immediately to "Connected" after creation. 
 
> The *Clear all* button will clear all of the incoming data.

![Create New module](/guides/users-guide/createnewmodule.png)

### Managing modules

To modify your module simply click on the module's name

To remove your module hover over the module's name and click the "X" button. Confirmation window will pop-up, press "OK" and the module will be removed.

![Remove modules](/guides/users-guide/removemodules.png)

> Note that instead of deleting the module it can be disabled by setting the "Status" in the edit menu to "Not deployed". Do not forget to click on the "Save" button when ready.

### Dealing with alarm mapping

To deal with "Alarm mapping" first click on "Alarm mapping" in the administration menu.

![Alarm mapping](/guides/users-guide/alarmmapping.png)

Alarm mapping helps administrators add severity level to  each alarm. With severity levels in use they will know when something requires their immediate attention or not.

### Adding alarm mapping

There are 5 types of alarm severities:

- *Drop* - There is no alarm or it is set to ["Not deployed"](#creating-new-modules)
- *Critical* - Something requires your immediate attention
- *Major* - Indicates that there is a major problem which should be fixed
- *Minor* - There is a minor problem
- *Warning* - Does not require immediate attention

> Note that setting up alarm severities depends entirely on the user's choice, we offer only an example usage of the alarms severities. 

For more info about alarms please refer to [Working with alarms.](#/guides/users-guide/device-management/#alarm-monitoring)

To select alarm severity for a certain alarm click on *Add alarm mapping*

![Add alarm mapping](/guides/users-guide/addalarmmapping.png)

- Match the name of the alarm to which the severity will be mapped
- Select desired severity
- Give "New description"(optional)
- Click on "Save"

### Changing or Removing alarm severities

To change alarm severities:

- Locate the alarm the "Alarm mapping" section and click on her name
- Under "New severity" change to the desired severity level
- Click on the "Save" button

To delete alarm severities hover over the alarm name and click on the "X" button. Confirmation window will pop-up, press " OK " and the "Alarm mapping" will be deleted.

![Remove alarm mapping](/guides/users-guide/removealarmmapping.png)


## Changing settings

By expanding the "Settings" tab administrators have the following options:

- [Change password](#changing-password-settings) validity for particular amount of days
- Enforce whether all passwords are "strong"
- [Grant *Access control*](#granting-access-control)
- ["Enable" or "Disable" dashboard via e-mail](#enabling-server-side-agents)

### Changing password settings

To change password settings click on Password under "Settings" tab

![Change Password Settings](/guides/users-guide/passsettings.png)

Here password limit validity can be set, meaning that after " X " number of days the password will have to be changed. 

> Note that the default value is set to "0" for unlimited validity.

One can also choose to enable "Enforce that all password are "strong" " by clicking on the checkbox. This setting will allow you to type "easy" passwords which will be counted as "strong". Note that due to security reasons it is not recommended.

After the modification is complete click on "Save".

### Granting access control

Via the "Access Control" tab administrators can enable cross-origin resource sharing or "CORS" by writing the address of the desired domain. "CORS" allows restricted resources to be requested from another domain.

> Beware not to lock yourself out of the platform by writing invalid address!

### Enabling server-side agents

In the *Server-side agents* tab "Send dashboard via e-mail" smart rule can be "Enabled" or "Disabled".

To change "Server-side agents settings" click on "Server-side agents in the administration menu.

![Server-side agents](/guides/users-guide/serversideagents.png)

Afterwards click "Save".

## Handling management tab

Cumulocity provides administrators with the ability to upload their files on the cloud using the *Files repository* and to add and manage their own *Retention rules*.

### Working with retention rules

![Retention rules](/guides/users-guide/retrules.png)

*Retention rules* will give the administrator ability to control for how long will a specific *Data type* be retained. For example an alarm can be established to expire after certain duration. When the time have passed the alarm will be deleted (note: it only applies to CLEARED alarms, ACTIVE and ACKNOWLEDGED are not deleted). 

To add additional "Retention rules" click on "Add rule"

![Add rule](/guides/users-guide/addrules.png)

- Select *Data type*
- Enter *Fragment type*
- Write *Type* only to data that has "Type" property
- Write *Source*
- Enter *Maximum age*
- Click on the "Save" button

![Add rule](/guides/users-guide/addrulepage.png)

> For more info about "Data types" please refer to the [Reference](/guides/reference/alarms) guides.

To delete a rule click on the "X" button and then press "OK" after the pop-up window appears.

### Managing repository

The *Files repository* allows administrators to upload and store files on the cloud. 

To see files in the repository click on "Files repository" in the administration menu.

![Files repository](/guides/users-guide/filesrepo.png)

#### Uploading files

There are 2 ways to upload files in the repository:

- In the "Files repository" tab under "Management" click on "Upload file" located at the top-right. A pop-up window will appear, select the desired file and click "Upload" to finish the process.

![Upload file](/guides/users-guide/uploadfile.png)

- If there are [Hosted applications](#working-with-hosted-applications), files can be uploaded at the [Archives](#uploading-archives) page. Later they can be seen in the repository.

> Note that using the "Application archives" as repository is not recommended. 

#### Downloading or Deleting files

To download a file in the repository hover over the desired file and click on the "Download" button.

To delete a file click on the "X" button and press "OK" when the pop-up window appears.

> Please note that "Application archive" files cannot be deleted from the "Files repository".

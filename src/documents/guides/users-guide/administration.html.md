---
order: 30
title: Administration
layout: default
toc: enabled
---

# Administration Guide

## Overview

The Administration application provides the ability for all account owners to easily manage their *Users*, *User groups* and *Applications*. User and Group permissions can be set and access to applications can be granted and revoked. 

In the "Accounts" tab users and user groups can be managed. Administrators have the ability to choose which user will have access to which application and what kind of permissions the users have to specific "Scope" of a device. If many users have the same permissions they can be added to a user group. User groups can be used to assign specific permissions to a particular device for all the users in the group.

The "Applications" tab gives the opportunity to configure *applications* or *simulators*. With *Business rules* one can add scripts for the builtin real-time analytics engine. Additionally, alarms can be mapped to different severities (e.g. Minor, Major, Critical).

Retention rules can be added, for example alarms or event can be deleted after a number of days. Using the file repository, files can be uploaded on the cloud repository.

![Home](/guides/users-guide/home.png)

The "Home" page shows all subscribed applications, also how many API requests, storage, devices and users were used for "This month" and "Last month". API requests are queries to the Cumulocity database. For example, every time you create or edit a user an API request is created. 

## Managing users

In order to manage users in your tenant click on "Users" in your administration menu. By default after tenant creation there are 2 users automatically added. The first one is the admin user that is configured in the administration setup and the second one is "sysadmin". The admin user cannot be removed, he can only be edited. 

![Click Users](/guides/users-guide/Users.png)

> Note that if you do not see "Users" click on "Accounts" first and then "Users".

### Adding users

To add additional users click on "Add user"

![Add User](/guides/users-guide/addusers.png)

- Enter *Username*
- Choose if the user will be *Enabled* or *Disabled*
- Enter *Password* and *Confirm password*
- If you choose to click on *Password reset* the "User" will have to reset the password on his next login
- [Assign Group membership](#assigning-users-to-a-group) 
- [Give User Permissions](#handling-user-permissions)
- [Grant Application Access](#granting-application-access)
- Click on the *Save* button
	
![Add User](/guides/users-guide/adduserpage.png)

> Fields without an asterisk" * "(e.g. "First name", "Last name") are not mandatory.

### Handling user permissions

Different *User Permissions* can be granted to every user for a specific device. Permissions can be granted or revoked during the [creation](#adding-users) or [editing](#editing-users) of a user.

When a device is selected one can give permissions in a specific scope(e.g. *Alarm*, *Audit*, *Event*).

To grant "User Permissions":

- Choose *Managed Object* by writing the id or the name of the desired device
- Select [*Scope*](#dealing-with-scopes) of permission for a particular object 
- Write the *Type* of the Permission(e.g. c8y-software)
- Select *Permission*
- Click on the *Add* button
- Click on the *Save* button

![User Permissions](/guides/users-guide/userpermissions.png)

> Note that to select all scopes wyou will have to click on the asterisk " * " in the drop down menu.

> Please also note that "Admin" does not have "Read" permissions, to grant all permissions to a user choose the asterisk " * " option from the drop down menu. 

### Dealing with scopes

Cumulocity provides users the ability to grant permissions in a specific scope of an object.

Available scopes:

- *Alarm* - Gives users the ability to create, update or delete alarms
- *Audit* - Usually when alarms are triggered one has the ability to either acknowledge them or to disregard them. "Audit" grants users permission to see who acknowledged, disregarded, updated, created or deleted alarms
- Event - Users can create, update and delete "Events"
- Managed_Object - Grants users with view permission
- Measurement - Users can manage measurement data
- Operation - Allows users to do operations on a certain device. For example users can turn on or off a certain LED. Note that "Admin" role will allow the user to modify or delete operations

### Granting application access

During user [creation](#adding-users), access to different *Marketplace Applications* can be granted to the user. That way you will control which users have access to which applications. 

To grant access to specific applications, click on the checkbox of the desired application. When the selection is completed click on the "Save" button.

> Note that more than one "Marketplace Applications" can be selected at the same time.

### Assigning users to a group

Groups membership can be given amid [adding](#adding-users) or [editing](#editing-users) of a user.

To assign a user to "User groups":

-  Locate the user in the users section and click on his "Username"
- In *User Groups* section choose the desired group by clicking on the checkbox
- Click on the "Save" button

> More than one "User Groups" can be selected at the same time.

### Changing user password
	
- Locate the user in the "Users" section and click on his "Username"
- Choose "Change password"
- Enter and confirm the new password
- Click on the "Save" button

### Editing users

All of the user details except "Username" can be modified including "User Groups" and "Application accesses". In the "Users" page clicking on the "Username" will open the editing window. When the change is complete, click on the "Save" button to finish with the edit.

### Deactivating or deleting users

Hovering over a user reveals the deactivate and delete buttons on the right side. The "Deactivate" button simply disables the user, while the "X" button permanently deletes the user.

![Delete User](/guides/users-guide/deleteuser.png)

## Managing user groups

Cumulocity allows you to easily manage "Users" which have the same permissions and roles via "User Groups". Application Access can also be set.

![User groups](/guides/users-guide/usergroups.png)

> If you do not see "User groups" click on "Accounts" first and then "User groups".

By default after tenant creation there are 4 groups that are automatically created:

- *Business*
- *Admins*
- *Readers*
- *Devices*

All of the groups can be modified or deleted. Additional groups can also be added.

### Creating user groups

To add additional groups:

- click on *Create user group*

![Create user group](/guides/users-guide/creategroup.png)

- Enter *Name* of the group
- [Assign *Roles*](#assigning-group-roles)
- [Give *Group Permissions*](#dealing-with-group-permissions)
- [Grant "Application access"](#granting-group-application-access)
- Click on the *Save* button

![Create user group 1](/guides/users-guide/createusergroup1.png)

![Create user group 2](/guides/users-guide/createusergroup2.png)

### Assigning group roles

Distinct roles can be chosen for each 
type of control interface:

- *Read*
- *Admin*
- *Create*

"Read" roles allows "READ" operation.*Admin* role allows "CREATE, "UPDATE" and "DELETE" operations over given functionality area. To assign roles click on the checkbox under the desired role.

> Hint: If you wish to select or clear ALL roles an easier approach would be to click on the respective button for the desired effect. The buttons are located under "ROLES".

- *Clear all* - Clears all of the checked roles.
- *Select all* - Selects ALL of the roles.
- *Select all Read* - Selects Read role for all types and deselects the other roles
- *Select all Admin* - Selects Admin role for all types and deselects the rest. 

![All roles](/guides/users-guide/allroles.png)

### Dealing with group permissions

When multiple users need the same permissions or restrictions they can be added to a group for easier handling. "Group Permissions" are similar to ["User Permissions"](#users-permissions). Permissions can be given during [creation](#creating-user-groups) or [editing](#editing-groups) of a group. When a device is selected one can give permissions in a specific scope(e.g. "Alarm", "Audit", "Event").

To grant "User Permissions":

- Choose *Managed Object* by writing " ID " or " Name " of the desired device
- [*Scope*](#dealing-with-scopes) of permission can be selected for a specific object.
- Write the *Type* of the Permission(e.g. c8y-software)
- Select *Permission*("READ", "ADMIN", " * ")
- Click on the *Add* button
- Click *Save* 

![Group Permissions](/guides/users-guide/grouppermissions.png)

> Note that to select all of the Scopes click on the asterisk " * " in the drop down menu.

> Please note that admin does not have Read permissions, to grant all permissions to a User choose the asterisk " * " option from the drop down menu.

### Granting group application access

Identical to ["User Application access"](#granting-application-access),       group access to a particular application can be granted during the [creation of a group](#creating-user-groups).

To grant access to specific applications, click on the checkbox of the desired application. When the selection is completed click on the "Save" button.

### Editing groups

All of the "User Groups" details can be edited. To edit a group click on the name of the group. After you have finished modifying the group details click on the "Save" button.

### Removing groups

To remove a group simply hover over the group name and click on the "X" button. A confirmation pop-up window will appear, click "OK" and the group will be deleted.

![Remove Group](/guides/users-guide/removegroup.png)


## Managing applications

With Cumulocity all tenants have the ability to easily handle their applications. They can create, modify and remove their own *Smartapps* and *Applications*. 

When the application has been created, if you hover over it a *Clone*, *Open* and ["X"](#removing-applications) buttons will be revealed. The "Clone" function duplicates the application, while The "Open" button simply opens the application. After the "Clone" button is pressed a pop-up window will appear in which unique "Application name" and "Application path" have to be entered. 

To create applications first navigate to *Own applications* in the administration menu.

![Own Applications](/guides/users-guide/ownapplications.png) 

> If you do not see "Own Applications" first expand "Applications".

### Creating smartapp

To add smartapp:

- click on *Create smartapp*

![Create smartapp](/guides/users-guide/createsmartapp.png)

- Enter *Application name*
- Add *Application path*
- Click on the *Create* button

### Creating applications

To create an application:

- Click on *Create application* located on the right side of "[Create smartapp](#creating-smartapp)"
- Enter unique name otherwise an error will occur
- Write the *Application key*
- Choose *Type* of the application
  - [*Hosted*](#working-with-hosted-applications)
  - [*Repository*](#working-with-repository-applications)
  - [*External*](#working-with-external-applications)

![Create app](/guides/users-guide/createapp.png)

Depending on what "Type" was selected, different details will have to be given.

### Working with hosted applications

Hosted applications allow administrators to operate a software application entirely from the cloud. They have considerable benefits over locally installed applications.

If Hosted Type was selected 2 additional fields will have to be filled. 

To finish with the app creation you will have to: 

- Add *Path*
- select the *Archive* which contains the application from your computer. 
- click on *Save* to finish the process.

### Working with repository applications

If the repository type was selected 4 additional fields will appear. Only fields with asterisk (" * ") are necessary to be filled.
- Add *Path*
- Add *Server URL*
- Enter *Username* (optional)
- Enter *Password* (optional)
- When ready click on *Save*

### Working with external applications

When external type is selected only 1 additional field will appear. Give the *External URL* and click on the "Save" button to create the application.

### Editing applications

To edit applications simply click on their name. Depending on the type of the application (e.g. Hosted, External) different fields can be modified. 

> Note that "ID", "Application key" and "Path" fields cannot be changed! 

### Subscribing to plugins

If the application's type is "Hosted" or "Repository" one can also subscribe to different *Plugins*. Plugins allow you to add new functionalities to Cumulocity's user interface. 

To subscribe to "Plugins":

- Select application by clicking on her name
- Click on "Plugins"
- Hover over the desired plugin and click the *Subscribe* button
- Click on the *Save changes* button

![plugins](/guides/users-guide/plugins.png)

> Note that for easier search, explicit category can be selected.

> Have in mind that instead of hovering, if you click on the plugin a small description will be displayed.

After subscribing to plugins they will be displayed under the *Subscribed plugins* tab. 

To *unsubscribe* plugins:

- Hover over the subscribed plugin
- Click the *Unsubscribe* button
- Click on "Save changes"
 
![Unsubscribe](/guides/users-guide/unsubscribe.png)

### Uploading archives

If the type of the application is "Hosted" you can also *Upload archive* and choose which archive will become active.

To upload archives:

- Select application by clicking on her name
- Click on *Archives*
- Click on *Upload archive* and navigate to the archive directory in your computer

![Upload archive](/guides/users-guide/uploadarchive.png)

Archives can be downloaded, *Set active* or removed if necessary.

To download archives, hover over the desired archive and click on the "Download" button.

To set active archive click the "Set active" button or click the "X" button to remove the archive.

> Note that active archives cannot be removed!

### Removing applications

To *Remove* applications simply hover over the application name and click the "X" button. A confirmation pop-up window will appear, click "OK" and the group will be deleted.

![Remove application](/guides/users-guide/removeapp.png)


## Dealing with simulators

Cumulocity provides the ability to test specific devices and sensors via "Simulators". This way users can test their applications during development. To view the simulator section click on
"Simulator" under the "Applications" tab in the administration menu. 

![Simulator](/guides/users-guide/simulator.png)

### Adding a simulator

To add new simulator click on "Add simulator"

![Add simulator](/guides/users-guide/addsimulator.png)

- Write simulator "Name"
- Select number of instances for the simulator. For example choosing 2 instances, 2 simulated devices will be created. This can be used for example to test network code between the two devices
- Clicking on the checkbox of the desired [Sensor](#working-with-sensors) will reveal 2 new fields. The first field is "Values". To give more than one sensor value you will have to separate them via semicolons(e.g. "16.7;34.25;12").
The second field is "Interval"(in seconds).
- Click "Save"

### Working with sensors

Here we are going to explain all available sensors. They are the following:

- *accelerationSensor* - Measures acceleration along an axis in metres per second per second (m/s2)
- *humiditySensor* - Measures the amount of water vapour in the air 
- *moistureSensor* - Measures the water content of a substance
- *distanceSensor* - Measures distance between the sensor and the closest device.
- *temperatureSensor* - The temperature sensor is used to measure and report temperature in degrees	Celsius(C)
  
For more info you can visit the [Sensor library](/guides/reference/sensor-library). 

### Starting, pausing or removing simulators

Simulators can have only 2 states(Running and Paused). To start a simulator first hover over his name, then click on the "Run device" button.

![Start simulator](/guides/users-guide/startsimulator.png)

To stop simulators simply press the "Stop device" button while hovering over the desired simulator name.

![Stop simulator](/guides/users-guide/stopsimulator.png)

To delete a simulator hover over the simulator's name, press the "X" button and after the pop-up window appears press "OK".

> Note that simulators cannot be edited, instead you will have to add a new one.

## Handling business rules

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

*Retention rules* will give the administrator ability to control for how long will a specific *Data type* be retained. For example an alarm can be established to expire after certain duration. When the time have passed the alarm will be deleted. 

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

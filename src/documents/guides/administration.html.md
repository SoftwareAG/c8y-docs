---
order: 30
title: Administration
layout: default
---

#Administration Panel Guide
## Table of Content
1. [Overview](#overview) 
2. [Accounts Management](#accounts)
   
   1. [Manage Users](#manage-users)
     * [Add Users](#add-user)
     * [User Permissions](#user-permissions)
     * [Application access](#application-access)
     * [Assign User Groups](#assign-group)
     * [Change User Password](#change-pass)
     * [Edit User Details](#edit-user)
     * [Deactivate or Remove Users](#dod-user)
   2. [Manage User Groups](#manage-groups)

     * [Create User Groups](#create-group)
     * [Assign Roles](#assign-roles)
     * [Types](#type)
     * [Group Permissions](#group-permissions)
     * [Group Application Access](#app-access)     
     * [Edit User Groups](#edit-group)
     * [Remove User Group](#remove-group)

3. [Applications Management](#manage-apps)
   
   1. [Create Smartapps](#create-smartapp)
   2. [Create Applications](#create-app)
   
     * [Hosted](#hosted)
     * [Repository](#repo)
     * [External](#external)
   3. [Edit or remove applications](#edit-app)
   
     * [Plugins](#plugins)
     * [Archives](#archives)
     * [Remove applications](#remove-app)
4. [Dealing with Business rules](#business-rules)
  
   1. [Event processing](#event-processing)
  
     * [Create New modules](#new-modules)
     * [Module management](#modules-management)

   2. [Alarm mapping](#alarm-mapping)
   
     * [Add alarm mapping](#add-alarmmapping)
     * [Change or Remove alarm severity](#eor-alarmsev)
  
5. Settings Configuration
   
   1. Change Password Settings
   
   2. Access control

6. Management
   
   1. Add Retention rules
   
   2. Manage Repository

## <a name="overview"></a>Overview

With the Administration Panel Cumulocity provides the ability for all account owners to easily manage their *Users*, *User groups* and *Applications*. User and Group permissions can be set. Access to unique applications can be granted. 

The "Applications" tab gives the opportunity to manage *Own applications* or *Add simulators*. With *Business rules* one can add alarms that will activate only when certain event occurs or when certain amount of time has passed. Alarms can be mapped to different severity (e.g. Minor, Major, Critical).

##<a name="accounts"></a>Account Management

In the Accounts tab Users and User groups can be managed. The account holders have the ability to choose which user will have access to which application and what kind of permissions will users have to a specific Scope of a device. If many users have the same permissions they can be added to a User group. User groups allow easy way to assign specific permissions 
to a particular device for all the users in the group. 

###<a name="manage-users"></a>Manage Users

In order to manage users in your account click on Users in your Administration panel.By default after the account creation there are 2 Users automatically added. The first one is the admin user that is configured in the administration setup after the account creation and the second one is "sysadmin".The admin user cannot be removed, he can only be edited.

![Click Users](/guides/users-guide/Users.png)

Note: If you do not see "Users" click on "ACCOUNTS" first and then "Users".

####<a name="add-user"></a>Add user

To add additional users click on **Add user**

![Add User](/guides/users-guide/addusers.png)

- Enter *Username*
- Choose if the User will be *Enabled* or *Disabled*
- Enter *Password* and *Confirm password*
- If you choose to click on *Password reset* the User will have to reset the password on his next login
- [Assign Group membership](#assign-group) 
- [Give User Permissions](#user-permissions)
- [Grant Application Access](#application-access)
- Click on the *Save* button
	
![Add User](/guides/users-guide/adduserpage.png)

Fields without an asterisk" * "(e.g. "First name", "Last name") are not mandatory.

####<a name="user-permissions"></a>User Permissions

Different *User Permissions* can be given to each User for a specific device.  Permissions can be given or revoked during the [creation](#add-user) or [editing](#edit-user) of a user. 
When a device is chosen one can give permissions in a specific scope(e.g. *Alarm*, *Audit*, *Event*).

To grant **User Permissions**:

- Choose *Managed Object* by writing the id or the name of the desired device
- Select *Scope* of the device
- Write the *Type* of the Permission
- Select *Permission*
- Click on the *Add* button
- Click on the *Save* button

Note: If you wish to select all of the scopes click on the asterisk " * " in the drop down menu.

**Note**: "Admin" does not have "Read" permissions, to grant all permissions to a user choose the asterisk " * " option from the drop down menu. 

![User Permissions](/guides/users-guide/userpermissions.png)

####<a name="application-access"></a>Application Access

During the user [creation](#add-user), access to different *Marketplace Applications* may be granted to the user.That way you will control which users have access to which applications. 

To grant access to specific applications, click on the checkbox of the desired application. When the selection is completed click on the "Save" button.

**Note**: More than one "Marketplace Applications" can be selected at the same time.

####<a name="assign-group"></a>Assigning a user to a group

Groups membership can be given amid [adding](#add-user) or [editing](#edit-user) of a user.

To assign a user to **User groups**:

-  Locate the user in the users section and click on his "Username".
- In *User Groups* section choose the desired group by clicking on the checkbox.
- Click on the "Save" button.

**Note**: More than one "User Groups" can be selected at the same time.

####<a name="change-pass"></a>To change the password of a user:
	
- Locate the user in the Users section and click on his "Username".
- Choose "Change password"
- Enter and confirm the new password.
- Click on the "Save" button.

####<a name="edit-user"></a>Edit Users

All of the user details except "Username" can be edited including "User Groups" and "Application accesses". Clicking on the Username will open the editing window. When the changing of the user details is completed click on the "Save" button to finish with the edit.

####<a name="dod-user"></a>Deactivate or Delete Users

Hovering over a user reveals the deactivate and delete buttons on the right side. The "Deactivate" button simply disables the user, while the cross button permanently deletes the user.

![Delete User](/guides/users-guide/deleteuser.png)

###<a name="manage-groups"></a>Manage Groups

Cumulocity allows you to easily manage Users which have the same permissions and roles via User Groups. Application Access can also be set.  

If you wish to manage *User groups* click on User groups under the *Accounts* tab.

![User groups](/guides/users-guide/usergroups.png)

**Note**: If you do not see "User groups" click on "ACCOUNTS" first and then "User groups".

By default after the account creation there are 4 groups that are automatically created:

- *Business*
- *Admins*
- *Readers*
- *Devices*

All of the groups can be modified or deleted. Additional groups can also be added.

####<a name="create-group"></a>Create User groups

To **add new group**:

- click on *Create user group*

![Create user group](/guides/users-guide/creategroup.png)

- Enter *Name* of the group
- [Assign *Roles*](#assign-roles)
- [Give *Group Permissions*](#group-permissions)
- Grant ["Application access"](#app-access)
- Click on the *Save* button

**Insert picture**

####<a name="assign-roles"></a>Assign Group Roles

Distinct roles can be chosen for each 
**Type** of control interface:

- *Read*
- *Admin*
- *Create*

"Read" roles allows "READ" operation.*Admin* role allows "CREATE, "UPDATE" and "DELETE" operations over given functionality area. To assign roles click on the checkbox under the desired role.

Hint: If you wish to select or clear **ALL** roles an easier approach would be to click on the respective button for the desired effect. The buttons are located under "ROLES".

- *Clear all* - Clears all of the checked roles.
- *Select all* - Selects ALL of the roles.
- *Select all Read* - Selects Read role for all types and deselects the other roles
- *Select all Admin* - Selects Admin role for all types and deselects the rest. 

![All roles](/guides/users-guide/allroles.png)

####<a name="type"></a>Types

Here we are going to describe all Types:

**TO DO **

- *Tenant Statistics*
- *Option Management*
- *Application Management*
- *User Management*
- *User Management Own*
- *User Management Password Reset*
- *Identity*
- *Inventory*
- *Measurement*
- *Event*
- *Alarm*
- *Audit*
- *Device Control*
- *Cep Management*
- *Device*
- *Device Bootstran*
- *Retention Rule*
- *Bulk Operation*

####<a name="group-permissions"></a>Group Permissions

When multiple users need the same permissions or restriction they can be added to a group for easier handling. Group Permissions are similar to ["User Permissions"](#users-permissions). Permissions can be given during [creation](#create-group) or [editing](#edit-group) of a group. When a device is chosen one can give permissions in a specific scope(e.g. "Alarm", "Audit", "Event").

To grant **User Permissions**:

- Choose *Managed Object* by writing the id or the name of the desired device
- Select *Scope* of the device
- Write the *Type* of the Permission
- Select *Permission*
- Click on the *Add* button
- Click on the *Save* button

![Group Permissions](/guides/users-guide/grouppermissions.png)

**Note**: If you wish to select all of the Scopes click on the asterisk " * " in the drop down menu.

**Note**: Admin does not have Read permissions, to grant all permissions to a User choose the asterisk " * " option from the drop down menu.

####<a name="app-access"></a>Application access

Identical to [User Application access](#application-access) Group access to a particular application can be granted during the [creation of a group](#create-group).

To grant access to specific applications, click on the checkbox of the desired application. When the selection is completed click on the "Save" button.

**Note**: More than one Marketplace Applications can be selected at the same time.

####<a name="edit-group"></a>Edit Groups

All of User groups details can be edited. To edit a group click on the name of the group. After you have finished modifying the group details click on the "Save" button.

####<a name="remove-group"></a>Remove Groups

To Remove a group simply hover over the group name and click on the cross button. A confirmation pop-up window will appear, click "OK" and the group will be deleted.

![Remove Group](/guides/users-guide/removegroup.png)


##<a name="manage-apps"></a>Applications Management

With cumulocity all users have the ability to easily handle their applications. They can create, modify and remove their own Smartapps and Applications. 

When the application has been created, if you hover over it a *Clone*, *Open* and [Cross](#remove-app) buttons will be revealed. If the "Clone" button is pressed a pop-up window will open in which unique "Application name" and "Application path" have to be given. The "Open" button simply opens the application.

If you wish to create *Own Application*
first click on *Own applications* in the Administration panel.

![Own Applications](/guides/users-guide/ownapplications.png) 

**Note**: If you do not see "Own Applications" click on "Applications" first and then "Own Applications".

###<a name="create-smartapp"></a>Create smartapp

To add smartapp:

- click on *Create smartapp*

![Create smartapp](/guides/users-guide/createsmartapp.png)

- Enter *Application name*
- Add *Application path*
- Click on the *Create* button

###<a name="create	-app"></a>Create Application

To create application:

- Click on *Create application* located to the right side of "[Create smartapp](#create-smartapp)"
- Enter unique Name otherwise an error will occur.
- Write the *Application key*
- Choose *Type* to host the application with
  - [*Hosted*](#hosted)
  - [*Repository*](#repo)
  - [*External*](#external)

![Create app](/guides/users-guide/createapp.png)

Depending on what "Type" was chosen, different details will have to be given.

####<a name="hosted"></a>Hosted 

Hosted applications allows administrators to operate a software application entirely from the cloud. They have considerable benefits over locally installed applications.

If Hosted Type was selected 2 additional fields will be shown. To finish with the app creation you will have to: 

- Add *Path*
- select the *Archive* of the app from your computer. 
- click on *Save* to finish the process.

####<a name="repo"></a>Repository

If the Repository "Type" was chosen 4 additional fields will be shown. Only fields with asterisk (" * ") are necessary to be filled.
- Add *Path*
- Add *Server URL*
- Enter *Username* (optional)
- Enter *Password* (optional)
- When ready click on *Save*

####<a name="external"></a>External

When External Type is selected only 1 additional field will be shown. Give the *External URL* and click on the *Save* button to create the application.

###<a name="edit-app"></a>Edit or Remove Applications

To edit applications simply click on their name. Depending on the type of the application (e.g. Hosted, External) different fields can be modified. 

**Note**: "ID", "Application key" and "Path" fields cannot be changed! 

####<a name="plugins"></a>Plugins

If the application's type is "Hosted" or "Repository" one can also subscribe to different *Plugins*.

To subscribe to "Plugins":

- Select application by clicking on her name
- Click on "Plugins"
- Hover over the desired plugin and click the *Subscribe* button
- Click on the *Save changes* button

![plugins](/guides/users-guide/plugins.png)

Note: For easier search, category can be selected.

Note: Instead of hovering, if you click on the Plugin a small description will be displayed.

After subscribing to plugins they will be displayed under the *Subscribed plugins* tab. 

To unsubscribe plugins:

- Hover over the subscribed plugin
- Click the *Unsubscribe* button
- Click on "Save changes"
 
![Unsubscribe](/guides/users-guide/unsubscribe.png)

####<a name="archives"></a>Archives

If the type of the application is "Hosted" you can also *Upload archive* and choose which archive will become active.

To upload archives:

- Select application by clicking on her name
- Click on *Archives*
- Click on *Upload archive* and	navigate to the archive directory in your computer

![Upload archive](/guides/users-guide/uploadarchive.png)

Archives can be downloaded, *Set active* or removed if necessary. To download archives, hover over the desired archive and click the "Download" button. To set active archive click the "Set active" button or click the cross button to remove the archive.

**Note**: Active archives cannot be removed!

####<a name="remove-app"></a>Remove applications

To *Remove* applications simply hover over the application name and click the cross button. A confirmation pop-up window will appear, click "OK" and the group will be deleted.

![Remove application](/guides/users-guide/removeapp.png)

##<a name="business-rules"></a>Business Rules

*Business Rules* allow the administrator to set up events and alarms. Via "Event processing" *New modules* can be created to add alarms that will activate when a certain event occurs or after certain amount of time have passed. *Alarm mapping* will allow administrators to set alarm severities. By using severities you can monitor problems with your assets.

###<a name="event-processing"></a>Event processing

To see your current modules or to create new one click on *Event processing* located under "Business Rules" tab.

![Event processing](/guides/users-guide/eventprocessing.png)
 
**Note**: If you do not see "Event processing" click on "Business Rules".

####<a name="new-modules"></a>Create New modules

Modules can be used to create alarms when certain event conditions have been met (e.g. Temperature threshold has been exceeded). Later even [alarm severities](#alarm-mapping) for the events can be set.

To **create new modules** first click on "New module".

![New module](/guides/users-guide/newmodule.png)

Write "Name" of the module. Set status to *Deployed* or *Not deployed*.

**Note**: Selecting "Deployed" status will set the module immediately to "Connected" after creation. 

Body examples can be seen by clicking on the drop-down menu under "Examples". Select the desired event (e.g. "Create alarm when temperature below 0 degree") and click on "Append example".

After the *Body* has been completed click on the "Save" button.

**Note**: The *Clear all* button will clear all of the incoming data.

![Create New module](/guides/users-guide/createnewmodule.png)

####<a name="modules-management"></a>Module Management

**To modify** your module simply click on the module's name

**To remove** your module hover over the module's name and click the cross button. A confirmation window will pop-up, press " OK " and the module will be removed.

![Remove modules](/guides/users-guide/removemodules.png)

**Note**: Instead of deleting the module it can be disabled by setting the "Status" in the edit menu to "Not deployed". Click on the "Save" button when ready.

###<a name="alarm-mapping"></a>Alarm mapping

To deal with "Alarm mapping" first click on "Alarm mapping" in the administration panel.

![Alarm mapping](/guides/users-guide/alarmmapping.png)

Alarm mapping helps administrators add severity level to  each alarm. With severity levels in use they will know when something requires their immediate attention or not.

####<a name="add-alarmmapping"></a>Add alarm mapping

There are 5 types of **alarm severities**:

- *Drop* - There is no alarm or it is set to ["Not deployed"](#modules-management)
- *Critical* - Something requires your immediate attention
- *Major* - Indicates that there is a major problem
- *Minor* - There is a minor problem
- *Warning* - Does not require immediate attention

To select alarm severity for a certain alarm click on *Add alarm mapping*

![Add alarm mapping](/guides/users-guide/addalarmmapping.png)

- Write the name of the "Alarm type to match"
- Select desired severity
- Give "New description"(optional)
- Clicdk on "Save"

####<a name="eor-alarmsev"></a>Change or Remove alarm severities

To **change alarm severities**:

- Locate the alarm the "Alarm mapping" section and click on her name
- Under "New severity" change to the desired severity level
- Click on the "Save" button

To **delete alarm severities** simply hover over the alarm name and click on the cross button. Confirmation window will pop-up, press " OK " and the "Alarm mapping" will be deleted.

![Remove alarm mapping](/guides/users-guide/removealarmmapping.png)
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
     * [Type of Control Interface](#type)
     * [Group Permissions](#group-permissions)
     * [Group Application Access](#app-access)     
     * [Edit User Groups](#edit-group)
     * [Remove User Group](#remove-group)

3. Applications Management
   
   2. Operate Applications
    
     * Create application
     * Create smartapp
     * Edit or delete applications


4. Dealing with Business rules
  
   1. Event processing
  
     * Module description
     * Creation and management of new modules

   2. Handling Alarm mapping
   
     * Add, Modify or Delete Alarm mapping

5. Settings Configuration
   
   1. Change Password Settings
   
   2. Access control

6. Management
   
   1. Add Retention rules
   
   2. Manage Repository

## <a name="overview"></a>Overview

With the Administration Panel Cumulocity provides the ability for all account owners to easily manage their Users, User groups and applications. User and Group permissions can be set. Access to unique applications can be granted. 

##<a name="accounts"></a>Account Management

In the Accounts tab Users and User groups can be managed. The account holders have the ability to choose which user will have access to which application and what kind of permissions will users have to a specific Scope of a device. If many users have the same permissions they can be added to a User group. User groups allow easy way to assign specific permissions 
to a particular device for all the users in the group. 

###<a name="manage-users"></a>Manage Users

In order to manage users in your account click on Users in your Administration panel.By default after the account creation there are 2 Users automatically added. The first one is the admin user that is configured in the administration setup after the account creation and the second one is **sysadmin**.The admin user cannot be removed, he can only be edited.

![Click Users](/guides/users-guide/Users.png)

Note: If you do not see Users click on ACCOUNTS first and then Users.

####<a name="add-user"></a>Add user

To add additional users click on **Add user**

![Add User](/guides/users-guide/addusers.png)

- Enter **Username**
- Choose if the User will be **Enabled** or **Disabled**
- Enter **Password** and **Confirm password**
- If you choose to click on **Password reset** the User will have to reset the password on his next login
- [Assign Group membership](#assign-group) 
- [Give User Permissions](#user-permissions)
- [Grant Application Access](#application-access)
- Click on the **Save** button
	
![Add User](#/guides/users-guide/adduserpage.png)

Fields without an asterisk" * "(e.g. **First name**, **Last name**) are not mandatory.

####<a name="user-permissions"></a>User Permissions

Different **User Permissions** can be given to each User for a specific device.Permissions can be given or revoked during the [creation](#add-user) or [editing](#edit-user) of a User. 
When a device is chosen one can give permissions in a specific scope(e.g. **Alarm**, **Audit**, **Event**).

To grant **User Permissions**:

- Choose **Managed Object** by writing the id or the name of the desired device
- Select **Scope** of the device
- Write the **Type** of the Permission
- Select **Permission**
- Click on the **Add** button
- Click on the **Save** button

Note: If you wish to select all of the Scopes click on the asterisk " * " in the drop down menu.

Note: Admin does not have Read permissions, to grant all permissions to a User choose the asterisk " * " option from the drop down menu. 

![User Permissions](/guide/users-guide/userpermissions.png)

####<a name="application-access"></a>Application Access

During the User [creation](#add-user), access to different **Marketplace Applications** may be granted to the user.That way you will control which **Users** have access to which applications. 

To grant access to specific applications, click on the checkbox of the desired application. When the selection is completed click on the **Save** button.

Note: More than one Marketplace Applications can be selected at the same time.

####<a name="assign-group"></a>Assigning a user to a group

Groups membership can be given amid [adding](#add-user) or [editing](#edit-user) of a user.

To assign User to Groups:

-  Locate the user in the Users section and click on their **Username**.
- In **User Groups** section choose the desired **Group** by clicking on the checkbox.
- Click on the **Save** button.

Note: More than one User Groups can be selected at the same time.

####<a name="change-pass"></a>To change the password of a user:
	
- Locate the user in the Users section and click on their **Username**.
- Choose **Change password**
- Enter and confirm the new password.
- Click on the **Save** button.

####<a name="edit-user"></a>Edit Users

All of the user details except **Username** can be edited including **User Groups** and **Application accesses**. Clicking on the Username will open the editing window. When the changing of the User details is completed click on the Save button to finish with the Edit.

####<a name="dod-user"></a>Deactivate or Delete Users

Hovering over a user reveals the deactivate and delete buttons on the right side. The Deactivate button simply disables the user, while the cross button permanently deletes the user.

![Delete User](/guides/user-guide/deleteuser.png)

###<a name="manage-groups"></a>Manage Groups

Cumulocity allows you to easily manage Users which have the same permissions and roles via User Groups. Application Access can also be set.  

If you wish to manage **User groups** click on User groups under the **Accounts** tab.

![User groups](/guides/user-guide/usergroups.png)

Note: If you do not see **User groups** click on **Accounts** first and then **User groups**.

By default after the account creation there are 4 groups that are automatically created:

- **Business**
- **Admins**
- **Readers**
- **Devices**

All of the groups can be modified or deleted. Additional groups can also be added.

####<a name="create-group"></a>Create User groups

To add new group:

- click on **Create user group**

![Create user group](/guides/user-guide/creategroup.png)

- Enter **Name** of the group
- [Assign **Roles**](#assign-roles)
- [Give **Group Permissions**](#group-permissions)
- Grant **Application access**
- Click on the **Save** button

**Insert picture**

####<a name="assign-roles"></a>Assign Group Roles

Distinct roles can be chosen for each 
Type of control interface:

- Read
- Admin
- Create

**Read** roles allows **Read** operation.**Admin** role allows Create, Update and Delete operations over given functionality area. To assign roles click on the checkbox under the desired role.

Hint: If you wish to select or clear **ALL** Roles an easier approach would be to click on the respective button for the desired effect. The buttons are located under ROLES.

- **Clear all** - Clears all of the checked roles.
- **Select all** - Selects ALL of the roles.
- **Select all Read** - Selects Read role for all types and deselects the other roles
- **Select all Admin** - Selects Admin role for all types and deselects the rest. 

![All roles](#/guides/user-guide/allroles.png)

####<a name="type"></a>Types

Here we are going to describe all Types:

- Tenant Statistics
- Option Management
- Application Management
- User Management
- User Management Own
- User Management Password Reset
- Identity
- Inventory
- Measurement
- Event
- Alarm
- Audit
- Device Control
- Cep Management
- Device
- Device Bootstran
- Retention Rule
- Bulk Operation

####<a name="group-permissions"></a>Group Permissions

When multiple users need the same permissions or restriction they can be added to a group for easier handling. Group Permissions are similar to [User Permissions](#user-permissions). Permissions can be given during [creation](#create-group) or [editing](#edit-group) of a group. When a device is chosen one can give permissions in a specific scope(e.g. **Alarm**, **Audit**, **Event**).

To grant **User Permissions**:

- Choose **Managed Object** by writing the id or the name of the desired device
- Select **Scope** of the device
- Write the **Type** of the Permission
- Select **Permission**
- Click on the **Add** button
- Click on the **Save** button

![Group Permissions](/guides/user-guide/grouppermissions.png)

Note: If you wish to select all of the Scopes click on the asterisk " * " in the drop down menu.

Note: Admin does not have Read permissions, to grant all permissions to a User choose the asterisk " * " option from the drop down menu.

####<a name="app-access"></a>Application access

Identical to [User Application access](#application-access) Group access to a particular application can be granted during the [creation of a group](#create-group).

To grant access to specific applications, click on the checkbox of the desired application. When the selection is completed click on the **Save** button.

Note: More than one Marketplace Applications can be selected at the same time.

####<a name="edit-group"></a>Edit Groups

All of User groups details can be edited. To edit a group click on the **name** of the group. After you have finished modifying the group details click on the **Save** button.

####<a name="remove-group"></a>Remove Groups

To Remove a group simply hover over the group name and click on the cross button. A confirmation pop-up window will appear, click "OK" and the group will be deleted.

![Remove Group](/guides/user-guide/removegroup.png)
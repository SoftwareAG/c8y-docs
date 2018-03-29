---
order: 12
title: Managing users
layout: redirect
---

The user management functionality allows you to manage the users within your tenant and provides the following options:

- Creating users
- Assigning user names and set passwords
- Storing user details
- Choosing basic login options
- Enabling additional login security by using Two-Factor Authentication (TFA)

> **Info:** The user needs to have a role with the user management permission "ADMIN" or "CREATE" to be able to do so.

### Viewing users

To view all users in your tenant, click "Users" in the "Account" menu in the navigator.

![Expanded view](/guides/images/users-guide/userslist.png)

A user list will be displayed, providing the following information for each user:

* The user name that is used to access the tenant.
* The name and email of the user, if set.
* The global roles assigned to the user.
* The [strength](/guides/users-guide/overview#login) of the password set for the user.

To filter the list, you can use the search field at the left of the top menu bar. For details on the search functionality, refer to [Searching](/guides/users-guide/overview##searching) in the *Introduction*.

Moreover you can filter by global roles. Select the desired roles from the dropdown list and click **Apply** to limit the users shown in the list to users with the selected roles.

Initially, the "User" page only shows the top-level users. To see all users in your account at once, click **Expand all** at the right of the top bar. This will expand all top-level users, showing their sub-users. Click **Collapse all** to just show the top-level users again. For details on user hierarchies, refer to [Managing user hierarchies](/guides/users-guide/enterprise-edition/user-hierarchies).

### <a name="creating-users"></a>Creating users

To add a user to your tenant, click **Add user** at the right of the top menu bar. 

![Add new user](/guides/images/users-guide/newuser.png)

At the left of the "New user" window provide the following information to identify the user:

|Field|Description|
|:---|:---|
|Username|A username used to log on. Note that this username cannot be changed once the user has been created. This field is mandatory.
|Active|Enable/disable the user account here. If the user account is disabled the user cannot login. 
|E-mail|A valid email address. This is required to enable the user to reset the password. This field is mandatory.
|First name|First name of the user. When the user is logged in, this name appears at the right of the top bar on the **User** button. 
|Last name|Last name of the user.
|Telephone|A valid phone number. The phone number is required if the user is configured to use two-factor authentication.
|Owner|Another user that manages ("owns") the new user. Select a user from the dropdown list and click **Done** to confirm. Refer to [Managing user hierarchies](/guides/users-guide/enterprise-edition#user-hierarchies) for details on user hierarchies.
|Delegated by|Can be activated to delegate user hierarchies and permissions to the user. Refer to [Managing user hierarchies](/guides/users-guide/enterprise-edition#hierarchy) for details on delegation.

Select the login options for the user.

* If you select "User must reset the password on next login", you need to provide a password which the user needs to reset on the next login. <br>Enter a password and confirm it. While entering the password, the strength of the password will be shown. See [Logging into the Cumulocity platform](/guides/users-guide/overview/#login) for further information on password strength.  
* If you select "Send password reset link as e-mail", the user will receive an email message with a link to set a password. The email will be sent to the email address configured above.

On the right of the page, select the global roles for the user. Details on global roles are described in [Managing Permissions](/guides/users-guide/administration/managing-permissions).

Click **Save** to create the user.

<!--what does that mean -->
> **Info:** By default, manually created users always have the "Own_User_Management" permissions set to active.

### Modifying users

Click the menu icon at the right of a user entry to open a context menu which provides further functionalities.

<img src="/guides/images/users-guide/Admin_UserContextMenu.png" alt="Context menu" style="max-width: 100%">

> **Info:** You need a role with user management permission to perform these options.

Click **Edit** to edit an existing user. All fields except “Username” and “Send password reset link as e-mail” can be modified. For details an each field, refer to [Creating users](#creating-users). Click **Change password** to change the password. After editing, click **Save** to apply your settings.

To copy roles, click **Copy inventory roles from another user**. In the upcoming window, select a user from the list and click **Copy**. At the top you can select if you want to merge the roles with the existing user roles (the default) or if you want to replace the existing user roles.

Click **Delegate** to delegate your user hierarchies and permissions to a user, or click **Undelegate** to remove a delegation. Refer to [Managing User Hierarchies](/guides/users-guide/enterprise-edition#hierarchy) for details on delegation.

Click **Disable** to disable an active user, or click **Enable** to enable a user that has been disabled.

Click **Delete** to delete a user.
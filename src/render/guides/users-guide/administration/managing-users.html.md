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

> **Info:** The user needs to have a role with the user management permission ADMIN or CREATE to be able to do so.

>**Info**: If your tenant is configured for using SSO (Single Sign-On) in SAG Cloud, new users should be created under **My Cloud**, accessible through the application switcher in the upper right corner, so that they are able to use the SSO feature. For users created in **My Cloud**, password reset in Cumulocity is disabled.


### Viewing users

To view all users in your tenant, click **Users** in the **Account** menu in the navigator.

![Expanded view](/guides/images/users-guide/Administration/admin-users-list.png)

A user list will be displayed, providing the following information for each user:

* The user name that is used to access the tenant.
* The name and email of the user, if set.
* The global roles assigned to the user.
* The [strength](/guides/users-guide/overview#login) of the password set for the user.

To filter the list, you can use the search field at the left of the top menu bar. For details on the search functionality, refer to Getting Started > [GUI functionalities and features](/guides/users-guide/overview##searching).

Moreover you can filter by global roles. Select the desired roles from the dropdown list and click **Apply** to limit the users shown in the list to users with the selected roles.

Initially, the **User** page only shows the top-level users. To see all users in your account at once, click **Expand all** at the right of the top bar. This will expand all top-level users, showing their sub-users. Click **Collapse all** to just show the top-level users again. For details on user hierarchies, refer to Enterprise Edition > [Managing user hierarchies](/guides/users-guide/enterprise-edition#user-hierarchies).

### <a name="creating-users"></a>Creating users

To add a user to your tenant, click **Add user** at the right of the top menu bar. 

![Add new user](/guides/images/users-guide/Administration/admin-user-add.png)

At the left of the **New user** window provide the following information to identify the user:

<table>
<col width = 150>
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Username</td>
<td style="text-align:left">Serves as a user ID to identify the user at the system. Note that the username cannot be changed once the user has been created. This field is mandatory.</td>
</tr>
<tr>
<td style="text-align:left">Login alias</td>
<td style="text-align:left">In addition to the user name, an optional alias can be provided to be used to log on. Other then the username, this alias may be changed if required.</td>
</tr>
<tr>
<td style="text-align:left">Active</td>
<td style="text-align:left">Enable/disable the user account here. If the user account is disabled the user cannot login. </td>
</tr>
<tr>
<td style="text-align:left">Email</td>
<td style="text-align:left">A valid email address. This is required to enable the user to reset the password. This field is mandatory.</td>
</tr>
<tr>
<td style="text-align:left">First name</td>
<td style="text-align:left">First name of the user. When the user is logged in, this name appears at the right of the top bar on the <strong>User</strong> button. </td>
</tr>
<tr>
<td style="text-align:left">Last name</td>
<td style="text-align:left">Last name of the user.</td>
</tr>
<tr>
<td style="text-align:left">Telephone</td>
<td style="text-align:left">A valid phone number. The phone number is required if the user is configured to use two-factor authentication.</td>
</tr>
<tr>
<td style="text-align:left">Owner</td>
<td style="text-align:left">Another user that manages ("owns") the new user. Select a user from the dropdown list and click <strong>Done</strong> to confirm. Refer to <a href="/guides/users-guide/enterprise-edition#user-hierarchies" class="no-ajaxy">Managing user hierarchies</a> for details on user hierarchies.</td>
</tr>
<tr>
<td style="text-align:left">Delegated by</td>
<td style="text-align:left">Can be activated to delegate user hierarchies and permissions to the user. Refer to <a href="/guides/users-guide/enterprise-edition#user-hierarchies" class="no-ajaxy">Managing user hierarchies</a> for details on delegation.</td>
</tr>
</tbody>
</table>

Select the login options for the user.

* If you select **User must reset the password on next login**, you need to provide a password which the user needs to reset on the next login. <br>Enter a password and confirm it. While entering the password, the strength of the password will be shown. See Getting Started > [Accessing and logging into the Cumulocity platform](/guides/users-guide/overview/#login) for further information on password strength.  
* If you select **Send password reset link as email**, the user will receive an email message with a link to set a password. The email will be sent to the email address configured above.

On the right of the page, select the global roles for the user. Details on global roles are described in [Managing permissions](/guides/users-guide/administration#managing-permissions).

Click **Save** to create the user.

<!--what does that mean -->
> **Info:** By default, manually created users always have the "Own_User_Management" permissions set to active.

### Modifying users

Click the menu icon at the right of a user entry to open a context menu which provides further functionalities.

<img src="/guides/images/users-guide/Administration/admin-user-menu.png" alt="Context menu">

> **Info:** You need a role with user management permission to perform these options.

Click **Edit** to edit an existing user. All fields except **Username** and **Send password reset link as email** can be modified. For details an each field, refer to [Creating users](#creating-users). Click **Change password** to change the password. After editing, click **Save** to apply your settings.

To copy roles, click **Copy inventory roles from another user**. In the upcoming window, select a user from the list and click **Copy**. At the top you can select if you want to merge the roles with the existing user roles (the default) or if you want to replace the existing user roles.

<img src="/guides/images/users-guide/Administration/admin-user-copy-roles.png" alt="Copy roles">

Click **Delegate** to delegate your user hierarchies and permissions to a user, or click **Undelegate** to remove a delegation. Refer to Enterprise Edition > [Managing user hierarchies](/guides/users-guide/enterprise-edition#user-hierarchies) for details on delegation.

Click **Disable** to disable an active user, or click **Enable** to enable a user that has been disabled.

Click **Delete** to delete a user.
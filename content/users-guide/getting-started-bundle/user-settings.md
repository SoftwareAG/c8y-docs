---
weight: 50
title: User options and settings
layout: redirect
---

Clicking the **User** button at the top right will open a menu which provides access to various actions or information.

<img src="/images/users-guide/Overview/user-account-menu.png" alt="User account menu"  style="max-width: 60%">

The **User** menu contains the following items:

<table>
<col width = 150>
<thead>
<tr>
<th style="text-align:left">Menu item</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">User settings</td>
<td style="text-align:left">Provides access to the <a href="/users-guide/overview#user-settings" class="no-ajaxy">user settings</a>, see below. </td>
</tr>
<tr>
<td style="text-align:left">Access denied requests</td>
<td style="text-align:left">Shows a list of data requests which could not be accessed due to missing permissions, if any. </td>
</tr>
<tr>
<td style="text-align:left">Logout</td>
<td style="text-align:left">Logs you out from your Cumulocity account. </td>
</tr>
<tr>
<td style="text-align:left">Enable (Disable) support</td>
<td style="text-align:left">Allows support users to access your account. This option is only available if support user access is not set globally for subtenant users in the management tenant, see <a href="/users-guide/enterprise-tenant#users-in-other-tenants" class="no-ajaxy">Supporting users in other tenants</a> for details. After the support user access has been activated, the menu item switches to <strong>Disable support</strong>. If your support request has been resolved but the duration for the support user access is not expired (24 hours per default) you can actively disable an active support user request here.</td>
</tr>
<tr>
<td style="text-align:left">Visit support page</td>
<td style="text-align:left">Opens the URL that has been provided as Support page. If no custom URL is provided, opens the Cumulocity support page.</td>
</tr>
<tr>
<td style="text-align:left">Version information</td>
<td style="text-align:left">Shows release information on the Cumulocity version you are using, i.e. 9.16.2, for both Backend and UI. </td>
</tr>
</tbody>
</table>

### <a name="user-settings"></a>To change user settings

Several account settings can be changed by the user.

1. Click the **User** button at the right of the top bar and then click **User Settings**.  
2. In the **Edit user** dialog box, make the relevant changes.
3. To change the language, select a language from the dropdown list in the  **Language** field.

 >**Info:** The user interface language will be selected along the following criteria, in the order listed below:

	>	*  The language selected in the Cumulocity user settings.
	>	*  The language selected in the browser preferences.
	>	* 	The operating system language.

	> The default language is English.

4. Click **Change password** to change your current password, see below.
5. Click **Save** to apply your settings.

<img src="/images/users-guide/overview-user-settings.png" alt="User settings"  style="max-width: 100%">

### <a name="change-password"></a>To change your password

1. Click the **User** button at the right of the top bar and then click **User settings**.
2. In the **Edit user** dialog box, click **Change Password**.
3. Enter a password and confirm it.
4. Click **Save** to apply your settings.

Make sure to select a strong password. To support you in doing so a password strength indicator is displayed along with a password change.

<img src="/images/users-guide/overview-passwordstrength.png" alt="Reset password" style="max-width: 100%">

By default, the password must consist of at least eight characters. For a strong password you must include at least three of the following character types: uppercase letters, lowercase letters, numbers and symbols.

> **Info:** The password rules can be configured by the administrator, i.e. your administrator can configure your account to enforce a password policy. You may be required to pick a strong password for example or to change your password regularly.

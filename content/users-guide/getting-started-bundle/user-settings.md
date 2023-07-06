---
weight: 50
title: User options and settings
layout: redirect
aliases:
  - /users-guide/overview/#user-settings
---

Clicking the **User** button at the top right opens the right drawer which provides access to various actions and information.

<img src="/images/users-guide/getting-started/getting-started-user-account-menu.png" alt="User account menu"  style="max-width: 60%">

At the top you find the following items:

<table>
<colgroup>
<col width = "20%">
<col width = "80%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Menu item</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">User settings</td>
<td style="text-align:left">Provides access to the user settings, see <a href="#change-user-settings" class="no-ajaxy">To change user settings</a> for more details. </td>
</tr>
<tr>
<td style="text-align:left">Access denied requests</td>
<td style="text-align:left">Shows a list of data requests which could not be accessed due to missing permissions, if any. </td>
</tr>
<tr>
<td style="text-align:left">Logout</td>
<td style="text-align:left">Logs you out from your {{< product-c8y-iot >}} account. </td>
</tr>
</tr>
<tr>
<td style="text-align:left">Revoke tokens</td>
<td style="text-align:left">Revoking tokens logs out all users currently logged in via "OAI-Secure" or "Single sign-on redirect". Note that JWT tokens retrieved by your devices will also be revoked.<br>
<br>
To revoke tokens, you must have ADMIN permission for the permission type "User management".  
</td>
</tr>
<tr>
<td style="text-align:left">Request support</td>
<td style="text-align:left">Redirects you to the <a href="{{< link-sag-portal >}}" class="no-ajaxy">{{< company-sag >}} {{< sag-portal >}}</a>. </td>
</tr>
<tr>
<td style="text-align:left">Activate support</td>
<td style="text-align:left">Allows support users to access your account.<br>
<br>
Note that this option is only available if support user access is not set globally for subtenant users in the {{< management-tenant >}}, for details see <a href="/users-guide/enterprise-tenant/#support-user-access" class="no-ajaxy">Support user access</a>. After the support user access has been activated, the menu item switches to <strong>Deactivate support</strong>. If your support request has been resolved but the duration for the support user access is not expired (24 hours per default) you can actively disable an active support user request here.</td>
<tr>
<td style="text-align:left">Version information</td>
<td style="text-align:left">Shows release information on the {{< product-c8y-iot >}} version you are using (for example, 10.13.0.034) for both Backend and UI. Moreover shows the ID of your tenant, which might be required if you request support. Click the copy icon next to the tenant ID to copy it to the clipboard.</td>
</tr>
</tbody>
</table>

In the **Platform info** section, you find information on the infrastructure of your platform:

- The ID of your tenant, which might be required if you request support. Click the copy icon next to the tenant ID to copy it to the clipboard.
- Release version information for both the backend and the UI.

Moreover you can click **Detailed info** to download more detailed platform information.

The **Quick links** section provides links to the most common pages and processes in the platform while the **Documentation** section provides links to the most relevant guides.

<a name="change-user-settings"></a>
### To change user settings

Several account settings can be changed by the user.

1. Click the **User** button at the right of the top bar and then click **User Settings**.  
2. In the **Edit user** dialog box, make the relevant changes.
3. To change the language, select a [language](#languages) from the dropdown list in the  **Language** field. Reload the page to apply the new language setting.
4. Use the **Product experience** toggle to opt-out from the product experience tracking by Gainsight which is enabled by default if you accepted functional cookies.
5. Use the **In-product information** toggle to opt-out from the Knowledge Hub which is enabled by default.
6. Click **Change password** to change your current password, see [To change your password](#change-password) for details.
7. Click **Set up two-factor authentication** to set up two-factor authentication and increase tenant security.
8. Click **Save** to apply your settings.

The user interface language will be selected along the following criteria, in the order listed below:

*  The language selected in the {{< product-c8y-iot >}} user settings.
*  The language selected in the browser preferences.
* 	The operating system language.

<a name="languages"></a>
#### Available languages

The UI is available in the following languages:

|Language|Language code|
|:---|:---|
|English (default)|en|
|Brazilian Portuguese|pt_BR|
|Chinese|zh_CN|
|Chinese, traditional|zh_TW|
|Dutch|nl|
|French|fr|
|German|de|
|Japanese|ja_JP|
|Korean|ko|
|Polish|pl|
|Russian|ru|
|Spanish|es|


<a name="change-password"></a>
#### To change your password

1. Click the **User** button at the right of the top bar and then click **User settings**.
2. In the **Edit user** dialog box, click **Change Password**.
3. Enter a password and confirm it.
4. Click **Save** to apply your settings.

Make sure to select a strong password. To support you in doing so, a password strength indicator is displayed along with a password change.

<img src="/images/users-guide/getting-started/getting-started-password-strength.png" alt="Reset password" style="max-width: 100%">

By default, the password must meet the following conditions:

* Consist of at least eight characters (this parameter can be configured by the {{< management-tenant >}}, see [Administration > Platform configuration settings](/users-guide/administration/#platform-configuration-settings).)
* Include each of the following character types:
  * uppercase letters: `[A-Z]`, for example `ABCDEF`.
  * lowercase letters: `[a-z]`, for example `abcdef`.
  * numbers: `[0-9]`, for example: `123456`.
  * any other symbol from following list `` `~!@#$%^&*()_|+-=?;:'",.<>{}[]\/`` as a special character, for example `!@#$%^`.

{{< c8y-admon-info >}}
The password rules can be configured by the administrator, that means, your administrator can configure your account to enforce a password policy. You may be required to pick a strong password for example or to change your password regularly.
{{< /c8y-admon-info >}}

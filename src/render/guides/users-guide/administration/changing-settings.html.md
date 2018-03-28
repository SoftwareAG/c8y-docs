---
order: 70
title: Changing settings
layout: redirect
---

From the "Settings" menu, administrators can modify or manage various settings for the account as

- changing the [application settings](#default-app),
- changing the [password policy and TFA settings](#changing-password-settings),
- managing the [properties library](#properties),
- configure the [settings for the Enterprise Edition](#config-platform).

### <a name="default-app"></a>Changing application settings

Click "Application" to change applications settings.

Under "Default application", you can select a default application from the list which will apply to all users within the tenant.

>**Info**: All users must have access to this application.

Under "Access control", administrators can enable cross-origin resource sharing or "CORS" on the Cumulocity API. 

The "Allowed Domain" setting will enable your JavaScript web applications to directly communicate with REST APIs.
Set it to "*" to allow communication from any host.
Set it to "http://my.host.com, http://myother.host.com" to allow applications from http://my.host.com and from http://myother.host.com to communicate with the platform.

For further information, see http://enable-cors.org.

### <a name="changing-password-settings"></a>Changing the password policy and TFA settings

To change password settings, click "Password" in the "Settings" menu. 

Under "Password expiration", you can limit the validity of user passwords by specifying the number of days after which users have to change their passwords. If you do not want to force your users to change passwords, use "0" for unlimited validity of passwords (default value).

By default, users can use any password with eight characters or more. If you select **Enforce that all password are "strong" (green)**, your users must provide strong passwords as described in [Logging into the Cumulocity platform](/guides/users-guide/overview#login).

>**Info**: The password validity limit and the enforcing of strong passwords may not be editable, if configured by the platform administrator.

Strong (green) passwords must have "M" characters. By default, the system restricts the use of passwords already used in the past. The last "N" passwords provided by a user are remembered by the system and the system does not allow to use them. The default value for "N" is 10.

>**Info**: "M" and "N" can be configured by the platform administrator.

Click **Save** to apply your password settings.

<img src="/guides/images/users-guide/Administration/Admin_Password.png" alt="Password settings" style="max-width: 100%">

Under "TFA settings", you can change the following TFA settings:

 - "Limit token validity"- here you can set the lifetime of each session in minutes. When the session expires, the user has to enter a new verification code.
 - "Limit PIN validity"- Here you can set the lifetime of each verification code sent via SMS. When the verification code expires, in order to login the user has to request a new verification code.

To allow two-factor authentication, select the checkbox **Allow two-factor authentication**". 

Click **Save TFA settings** to apply your changes.

### <a name="properties"></a>Managing the properties library

In the properties library, accessible from the "Settings" menu, custom properties can be added to inventory objects, alarms, events and tenants. 

![Properties library](/guides/images/users-guide/properties_library.png)

With custom properties, you can extend the data model of Cumulocity built-in objects. You may create the following custom values:

- Custom inventory properties are used to extend the inventory data model. They can be used in the “Asset table” and “Asset properties” widgets.
- Custom tenant properties are available during tenant creation. The custom properties can be edited under “Subtenants” in the “Custom properties” tab of each tenant. Additionally, these properties can be viewed and exported in the “Usage statistics”.
- Custom alarm and event properties can be used as custom fields which can be added to your reports and will be available in the “Reporting” page in the Cockpit application.

**Adding properties to the properties library**

To add a custom property, select the tab for the desired property and click **Add property**. 

![Add new property](/guides/images/users-guide/addproperty.png)

In the upcoming form, provide a unique name as identifier and a label for the property and select its data type from the drop down list. Additionally, select validation rules for the new property:

|Check box|Description|
|:---|:---|
|Required|If selected, the property needs to be provided, i.e. during alarm creation. Not available if the property type is "Boolean".
|Default Value|Provide a default value to be automatically filled in the custom property field. Only available for properties with type "String".
|Minimum|Enter a minimum integer value.
|Maximum|Enter a maximum integer value.
|Minimum length|Enter the minimum length required for the string.
|Maximum length|Enter the maximum length required for the string.
|Regular expression|Add a regular expression which will be required in order to fill the custom property field.

Click **Save** to create the new property.

Click on the name of a property in the list to open it. To edit the property, enter the desired changes and click **Save** to save the settings. Click **Remove** to delete the property.

### <a name="openIT-credentials"></a>Entering OpenIT credentials

By providing OPenIT credentials you enable the platform to utilize SMS services provided by [Openit](https://sms.openit.de/main.php).

SMS are used throughout the application for various features like [two-factors authentication](/guides/users-guide/administration#tfa) and user notifications, i.e. on alarms.

### <a name="config-platform"></a>Configuration settings

Under "Configuration" in the "Settings" menu, you can configure system-wide properties in Cumulocity. The following options can be modified in the "Configuration" settings.

In the "Two-factor authentication" field you can change the SMS template which is sent to the users.

In the "Support link" field you can enter a URL to be used to link to a Support page. If you do not provide a link here, the default link to the Cumulocity Support will be used. 

Enter "false" to hide the link.

In the "Password reset" section you can change all settings related to password reset e-mail templates.

![Configuration menu1](/guides/images/users-guide/configuration_tab2.png)

At the top you can select if you want to allow sending e-mails to unknown email addresses.

In the "Password reset e-mail template" fields, provide an e-mail template to be used when the address is known and one to be used when the address is unknown. The link to reset the password might for example be: {host}/apps/devicemanagement/index.html?token={token}.

In the "E-mail subject" field, provide a subject for all password reset related e-mails.

In the following two fields provide an e-mail template to be used on password change confirmation and a template for the invitation e-mail.

>**Info**: Placeholders to be used are: {host}, {tenant-domain}, {token}. 

In the "E-mail server" section you can provide the "Protocol", "Host", "Port", "Username", "Password" and "Sender Address" for the e-mail server.

<img src="/guides/images/users-guide/Administration/Admin_ConfigurationServer.png" alt="Configure e-mail server" style="max-width: 100%">

In the "Data export" section you can set the e-mail subject and e-mail template for data export and specify the “User unauthorized error message”.

![Configuration menu1](/guides/images/users-guide/configuration_tab4.png)

In the "Storage limit" section you can specify the e-mail subject and e-mail template for emails being send *before* data is removed on exceeding the storage limit and *after* data removal is performed.

In the "Suspending tenants" section you can provide settings for emails being send on tenant suspension. 

<img src="/guides/images/users-guide/Administration/Admin_ConfigurationSuspended.png" alt="Suspended tenants" style="max-width: 100%">

At the top you can select if you want to send the e-mail to the suspended tenant's administrator and specify an additional e-mail receiver. Below you set the subject and template for the tenant suspended e-mail.

Click **Save configuration** to save your settings.

>**Info**: Additional features are available for "Management" tenants.


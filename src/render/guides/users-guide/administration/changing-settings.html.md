---
order: 70
title: Changing settings
layout: redirect
---

From the **Settings** menu, administrators can modify or manage various settings for the account as

- configuring [single sign-on](#single-sign-on),
- changing the [application settings](#default-app),
- changing the [password policy and TFA settings](#changing-password-settings),
- managing the [properties library](#properties),
- configure system-wide [configuration properties](#config-platform) in Cumulocity.

### <a name="single-sign-on"></a>Configuring single sign-on

Cumulocity provides single sign-on functionality, that allows a user to login with a single 3rd-party authorization server using the OAuth2 protocol, for example Azure Active Directory. Currently authorization code grant is supported only with access tokens in form of JWT. 

	**Info**: This feature is built on top of cookies technology. To be able to use it, you must have cookies enabled in the settings of your browser.  

This feature is enabled since Cumulocity version 9.12. For correct behavior any microservice needs to use the microservice SDK with version 9.12 or later. 


#### Configuration settings

To enable the feature, the administrator has to configure a connection with the authorization server. This is done in the Administration application.

Click **Single sign-on** in the **Settings** menu in the navigator. 

![Request configuration](/guides/images/users-guide/Administration/admin-sso-1.png)

As the OAuth protocol is based on the execution of HTTP requests and redirects, a generic request configuration is provided. 

The first part of the **Single sign-on** page consists of the request configuration. Here you can configure the HTTP request address, request parameters, headers and body in case of token and refresh requests. The authorize method is executed as a GET, and others as POST requests. 

The **Configuration** section of the **Single sign-on** page consists of the following configuration settings:

![OAuth configuration](/guides/images/users-guide/Administration/admin-sso-2.png)

|Field|Description|
|:---|:---|
|Group|The initial group assigned to the user on first login
|Applications|The initial applications assigned to the user on first login
|Audience|Expected aud parameter of JWT
|Button name|Name displayed on the button on the **Login** page
|Client ID|OAuth connection client ID. Can be used in request definitions as a ${clientId} place holder
|Redirect to platform|Redirect parameter. Can be used in request definitions as a ${clientId} place holder 
|Issuer|OAuth token issuer
|Provider name|Name of the provider
|Visible on login page|Indicates whether the login option is enabled or not. 

When a user logs in with an access token, the username can be derived from a JWT claim. The claim name can be configured in the **User ID configuration** window. 

 ![OAuth configuration](/guides/images/users-guide/Administration/admin-sso-3.png)

Each access token is signed by a signing certificate. Currently there are two options to configure the signing certificates.
 
1. By specifying the Azure AD certificate discovery address. 

 ![OAuth configuration](/guides/images/users-guide/Administration/admin-sso-4.png)
 
2. By providing the public key of a certificate manually to Cumulocity. A certificate definition requires an algorithm information, public key value and validity period. 

 ![OAuth configuration](/guides/images/users-guide/Administration/admin-sso-5.png)

#### Access 

When a user logs into Cumulocity for the first time, a user instance is created with default access, i.e. groups and applications specified in the **Configuration** section. The administrator can further assign specific access to a user manually. 

#### Integration with Azure AD

##### Azure AD configuration

The integration was successfully verified against Azure AD. The configuration steps are available in [https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code). 

While configuring your Azure AD, redirect_uri is your full domain address. For the purpose of this document we assume that it is http://aad.cumulocity.com. There are no additional steps on Azure AD required. 

##### Cumulocity configuration

In the **Single sign-on** page, the **Authorization request** section should look similar to:
 
 ![Azure AD authorize request](/guides/images/users-guide/Administration/admin-sso-aad-authorize.png)
 
The URL parameter consists of:
 
 * Base URL, in this case https://login.microsoftonline.de 
 * TENANT, should be substituted with your Microsoft tenant ID 
 * Static "oauth2/authorize" part
 
There is no need for headers, and there should be two request parameters:

* redirect_uri = ${redirectUri} -replaced in runtime by REDIRECT TO PLATFORM 
* client_id = ${clientId} replaced in runtime by CLIENT ID

The **Token request** section should look similar to:
 
 ![Azure AD token request](/guides/images/users-guide/Administration/admin-sso-aad-token.png)
 
The URL parameter consists of:

  * Base URL, in this case https://login.microsoftonline.de 
  * TENANT, should be substituted with your Microsoft tenant ID 
  * Static "oauth2/token" part
 
the body parameter can be taken from the Azure AD OAuth specification, an example is:

	 "grant_type=authorization_code&client_id=${clientId}&code=${code}&redirect_uri=${redirectUri}&client_secret=SECRET=&resource=${clientId}"
 
 and consists of:
 
 * grant&#95;type=authorization_code
 * client_id=${clientId} - replaced in runtime by CLIENT ID
 * code=${code} - parameter automatically read after successful redirect to the platform
 * redirect_uri=${redirectUri} - replaced in runtime by REDIRECT TO PLATFORM
 * client_secret=SECRET - a password specified in Azure AD -> App registration -> application -> Settings -> Keys -> Passwords  
 * resource=${clientId} - replaced in runtime by CLIENT ID
 
There is no need to set headers or request parameters.
 
The **Refresh token request** section should look similar to:
 
 ![Azure AD refresh request](/guides/images/users-guide/Administration/admin-sso-aad-refresh.png)
 
The URL parameter consists of:

  * Base URL, in this case https://login.microsoftonline.de 
  * TENANT, should be substituted with your Microsoft tenant ID 
  * Static "oauth2/token" part
 
The body parameter can be taken from the Azure AD OAuth specification, an example is:

	 "grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${clientId}&resource=${clientId}&client_secret=SECRET"
 
 and consists of:
 
 * grant&#95;type=refresh_token
 * refresh_token=${refreshToken} - replaced in runtime by known refresh token
 * client_id=${clientId} - replaced in runtime by CLIENT ID
 * client_secret=SECRET - a password specified in Azure AD -> App registration -> Application -> Settings -> Keys -> Passwords
 * resource=${clientId} - replaced in runtime by CLIENT ID
 
There is no need to set headers or request parameters.
 
The **Configuration** section should look similar to:
 
 ![Azure AD configuration](/guides/images/users-guide/Administration/admin-sso-aad-configuration.png)

* **Groups** and **Applications** - should be specified according to the tenant's requirements, but group "business" and Cockpit application are advised as a good start
* **Audience **- this is the application ID parameter from Azure AD, it can be found in Azure AD -> App registration -> Application
* **Button name** - is the name of the button on the Login page
* **Client ID** - For Azure AD is equal to audience, it can be found in Azure AD -> App registration -> Application 
* **Redirect to platform** - Cumulocity address, in our example http://aad.cumulocity.com,
* **Issuer** - the token issuer, value taken from Azure AD -> App registration -> endpoints -> MICROSOFT AZURE AD GRAPH API ENDPOINT 
* **Provider name** - Azure AD
* **Visible on login page** - enabled

User ID Configuration: 

 ![Azure AD user id](/guides/images/users-guide/Administration/admin-sso-aad-user-id.png)

* **Use constant value** - clear this field
* **JWT**  - upn - which is the user principle name

Signature verification:

 ![Azure AD signature verification](/guides/images/users-guide/Administration/admin-sso-aad-signature-verification.png)
   
For Azure AD, Cumulocity provides support for automatic certificate rollover. 

In the **Certificate Type** section, choose Azure AD, and set the public key discovery URL to a value consisting of:

 * Base URL, in this case https://login.microsoftonline.de
 * TENANT, should be substituted with your Microsoft tenant ID, 
 * Static "discovery/keys" part
   

### <a name="default-app"></a>Changing application settings

Click **Application** in the **Settings** menu to change applications settings.

Under **Default application**, you can select a default application from the list which will apply to all users within the tenant.

>**Info**: All users must have access to this application.

Under **Access control**, administrators can enable cross-origin resource sharing or "CORS" on the Cumulocity API. 

The **Allowed Domain** setting will enable your JavaScript web applications to directly communicate with REST APIs.

* Set it to "*" to allow communication from any host.
* Set it to "http://my.host.com, http://myother.host.com" to allow applications from http://my.host.com and from http://myother.host.com to communicate with the platform.

For further information, see http://enable-cors.org.

### <a name="changing-password-settings"></a>Changing the password policy and TFA settings

To change password settings, click **Password** in the **Settings** menu. 

Under **Password expiration**, you can limit the validity of user passwords by specifying the number of days after which users have to change their passwords. If you do not want to force your users to change passwords, use "0" for unlimited validity of passwords (default value).

By default, users can use any password with eight characters or more. If you select **Enforce that all password are "strong" (green)**, your users must provide strong passwords as described in [Logging into the Cumulocity platform](/guides/users-guide/overview#login).

>**Info**: The password validity limit and the enforcing of strong passwords may not be editable, if configured by the platform administrator.

Strong (green) passwords must have "M" characters. By default, the system restricts the use of passwords already used in the past. The last "N" passwords provided by a user are remembered by the system and the system does not allow to use them. The default value for "N" is 10.

>**Info**: "M" and "N" can be configured by the platform administrator.

Click **Save** to apply your password settings.

<img src="/guides/images/users-guide/Administration/Admin_Password.png" alt="Password settings" style="max-width: 100%">

Under **TFA settings**, you can change the following TFA settings:

 - **Limit token validity** - here you can set the lifetime of each session in minutes. When the session expires, the user has to enter a new verification code.
 - **Limit PIN validity** - Here you can set the lifetime of each verification code sent via SMS. When the verification code expires, in order to login the user has to request a new verification code.

To allow two-factor authentication, select the checkbox **Allow two-factor authentication**". 

Click **Save TFA settings** to apply your changes.

### <a name="properties"></a>Managing the properties library

In the **Properties library**, accessible from the **Settings** menu, custom properties can be added to inventory objects, alarms, events and tenants. 

![Properties library](/guides/images/users-guide/properties_library.png)

With custom properties, you can extend the data model of Cumulocity built-in objects. You may create the following custom values:

- Custom inventory properties are used to extend the inventory data model. They can be used in the “Asset table” and “Asset properties” widgets.
- Custom tenant properties are available during tenant creation. The custom properties can be edited under **Subtenants** in the **Custom properties** tab of each tenant. Additionally, these properties can be viewed and exported in the **Usage statistics**.
- Custom alarm and event properties can be used as custom fields which can be added to your reports and will be available in the **Export** page in the Cockpit application.

>**Info**: Custom properties are visible to all authenticated users of the tenant, regardless of their inventory role permission.

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

Under **Configuration** in the **Settings** menu, you can configure system-wide properties in Cumulocity. The following options can be modified in the **Configuration** settings.

In the **Two-factor authentication** field you can change the SMS template which is sent to the users.

In the **Support link** field you can enter a URL to be used to link to a Support page. If you do not provide a link here, the default link to the Cumulocity Support will be used. 

Enter "false" to hide the link.

In the **Password reset** section you can change all settings related to password reset e-mail templates.

![Configuration menu1](/guides/images/users-guide/configuration_tab2.png)

At the top you can select if you want to allow sending e-mails to unknown email addresses.

In the **Password reset e-mail template** fields, provide an e-mail template to be used when the address is known and one to be used when the address is unknown. The link to reset the password might for example be: {host}/apps/devicemanagement/index.html?token={token}.

In the **E-mail subject** field, provide a subject for all password reset related e-mails.

In the following two fields provide an e-mail template to be used on password change confirmation and a template for the invitation e-mail.

>**Info**: Placeholders to be used are: {host}, {tenant-domain}, {token}. 

In the **E-mail server** section you can provide the protocol, host, port, username, password and sender address for the e-mail server.

<img src="/guides/images/users-guide/Administration/Admin_ConfigurationServer.png" alt="Configure e-mail server" style="max-width: 100%">

In the **Data export** section you can set the e-mail subject and e-mail template for data export and specify the “User unauthorized error message”.

![Configuration menu1](/guides/images/users-guide/configuration_tab4.png)

In the **Storage limit** section you can specify the e-mail subject and e-mail template for emails being send *before* data is removed on exceeding the storage limit and *after* data removal is performed.

In the **Suspending tenants** section you can provide settings for emails being send on tenant suspension. 

<img src="/guides/images/users-guide/Administration/Admin_ConfigurationSuspended.png" alt="Suspended tenants" style="max-width: 100%">

At the top you can select if you want to send the e-mail to the suspended tenant's administrator and specify an additional e-mail receiver. Below you set the subject and template for the tenant suspended e-mail.

Click **Save configuration** to save your settings.

>**Info**: Additional features are available for "Management" tenants.


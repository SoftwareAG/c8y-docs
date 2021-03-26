---
weight: 70
title: Changing settings
layout: redirect
---

From the **Settings** menu, administrators can manage various settings for the account:

- Configure [authentication settings](#authentication) and [single sign-on](#single-sign-on).
- Change the [application settings](#default-app).
- Manage the [properties library](#properties).
- Configure system-wide [configuration properties](#config-platform) in Cumulocity IoT.
- Provide [SMS provider credentials](#openIT-credentials).
- Manage the [connectivity settings](#connectivity).



### <a name="authentication"></a>Changing authentication settings

Click **Authentication** in the **Settings** menu if you want to view or change the Login or TFA settings.

![Password settings](/images/users-guide/Administration/admin-settings-authentication.png)

>**Info:** If the menu is not visible, confirm the user has one of the following roles: `ROLE_TENANT_ADMIN` or `ROLE_TENANT_MANAGEMENT_ADMIN`.


#### Login settings

In the field **Preferred login modes**, you can select one of the following options:

* OAuth Internal - Recommended, since it provides high security, using authorization tokens to prove your identity (to the server).
* Basic Auth - Should be chosen only for specific compatibility reasons, since it only provides basic security.
* Single sign-on redirect - Can be selected only if SSO is configured. If selected, will remove Basic Auth and OAuth Internal login options.


This login mode will be used by the platform's applications as the default method to authenticate users. Device authentication stays unchanged.

>**Info:** If OAuth Internal is enforced, Basic Auth cannot be used to login to applications anymore. Older applications might fail to display the login correctly and need to be updated.

In the field **Limit password validity for**, you can limit the validity of user passwords by specifying the number of days after which users have to change their passwords. If you do not want to force your users to change passwords, use "0" for unlimited validity of passwords (default value).

>**Info:** The password validity limit and the enforcing of strong passwords may not be editable, if configured by the platform administrator.

By default, users can use any password with eight characters or more. If you select **Enforce that all password are "strong" (green)**, your users must provide strong passwords as described in [Getting Started > Accessing and logging into the Cumulocity IoT platform](/users-guide/getting-started/#login).

Strong (green) passwords must have "M" characters. By default, the system restricts the use of passwords already used in the past. The last "N" passwords provided by a user are remembered by the system and the system does not allow to use them. The default value for "N" is 10.

>**Info:** "M" and "N" can be configured by the platform administrator.

Click **Save** to apply the settings.

>**Important:** Each time you change the login mode you will be forced to log out. Other users will need to log out and log in again so that the change is applied.

#### TFA settings

Select the checkbox **Allow two-factor authentication** if you want to allow TFA in your tenant (only possible for administrators).

You may choose one of the following options:

* **SMS-based**, supporting the following settings:
	- **Limit token validity for**: Lifetime of each session in minutes. When the session expires or a user logs out, the user has to enter a new verification code.
   - **Limit verification code validity for**: Here you can set the lifetime of each verification code sent via SMS. When the verification code expires, in order to login the user has to request a new verification code.

	> **Info:** An SMS gateway microservice must be configured for the tenant. Naturally only users with a valid phone number associated can use this functionality.

* **Google Authenticator** (Time-based One-Time Password = TOTP), supporting the following setting:
	 - **Enforce TOTP two-factor authentication on all users**: When enabled it will force all users to set up their TFA on login. Otherwise each individual user can choose to activate it or not.

	> **Info:** The TOTP method is only available with the login mode "OAuth Internal".

Click **Save TFA settings** to apply your settings.

>**Important:** Each time you change the TFA method you will be forced to log out. Users TFA settings are cleared and need to be configured again.

### <a name="single-sign-on"></a>Configuring single sign-on

Cumulocity IoT provides single sign-on functionality, that allows a user to login with a single 3rd-party authorization server using the OAuth2 protocol, for example Azure Active Directory. Currently authorization code grant is supported only with access tokens in form of JWT.

> **Info:** This feature is built on top of cookies technology. To be able to use it, you must have cookies enabled in the settings of your browser.

This feature is enabled since Cumulocity IoT version 9.12. For correct behavior any microservice needs to use the microservice SDK with version 9.12 or later.

Before switching to the single sign-on option it is mandatory that:

* The authorization server you use supports OAuth2 authorization code grant.
* The access token is issued as JWT and you know what goes into the token content.
* The JWT must consist of a unique user identifier, "iss" (issuer), "aud" (audience) and "exp" (expiration time) fields.
* The Cumulocity IoT platform is in version 9.12 but preferably higher.
* All microservices are build with Microservice Java SDK 9.12.6 but preferably higher.For Microservices custom built, refer to [General aspects > Security](/microservice-sdk/concept/#security) in the Microservice SDK guide.
* For on premises installation the domain-based tenant resolution is configured properly.

>**Info:** In order to use the single sign-on feature for Enterprise Tenants, the enterprise domain must be set up as redirect URI in the basic configurations. If single sign-on providers have a list of allowed domains, the enterprise domain should be added to that list.


#### Configuration settings

To enable the feature, the administrator has to configure a connection with the authorization server. This is done in the Administration application.

Click **Single sign-on** in the **Settings** menu in the navigator.

At the top left, you can choose a template. The chosen option has an effect on the look of the panel. The default template is "Custom" which allows for a very detailed configuration with virtually any authorization server using OAuth2 authorization code grant. Other templates provide simplified views for well known and supported authorization servers. In the next steps there will first be a definition of how to use the "Custom" template followed by a view dedicated to Azure Active directory.

##### Custom template

![Request configuration](/images/users-guide/Administration/admin-sso-1.png)

As the OAuth protocol is based on the execution of HTTP requests and redirects, a generic request configuration is provided.

The first part of the **Single sign-on** page consists of the request configuration. Here you can configure the HTTP request address, request parameters, headers and body in case of token and refresh requests. The authorize method is executed as a GET, token and refresh method by POST requests.

Specifying a logout request is optional. It performs [front-channel single logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html). If configured, the user is redirected to the defined authorization server logout URL after logging out from Cumulocity IoT.

![OAuth configuration](/images/users-guide/Administration/admin-sso-logout-custom.png)

The **Basic** section of the **Single sign-on** page consists of the following configuration settings:

![OAuth configuration](/images/users-guide/Administration/admin-sso-2.png)

|Field|Description|
|:---|:---|
|Redirect URI|Redirect parameter. Can be used in request definitions as a ${clientId} place holder
|Client ID|OAuth connection client ID. Can be used in request definitions as a ${clientId} place holder
|Button name|Name displayed on the button on the **Login** page
|Issuer|OAuth token issuer
|Provider name|Name of the provider
|Visible on Login page|Indicates whether the login option is enabled or not.
|Audience|Expected aud parameter of JWT
|Group|(Deprecated in favor of dynamic access mapping since 9.20)The initial group assigned to the user on first login
|Applications|(Deprecated in favor of dynamic access mapping since 9.20)The initial applications assigned to the user on first login

Each time a user logs in, the content of the access token is verified and is a base for user access to the Cumulocity IoT platform. The following section provides the mapping between JWT claims and access to the platform.

 ![OAuth configuration](/images/users-guide/Administration/admin-sso-7.png)

 In the example above, if a user tries to login a decoded JWT claims look like:

```json
{
...
"user": "john.wick",
...
}
```

The user will be granted access to the global role "business" and the default application "cockpit".

New rules can be added by clicking **Add access mapping** at the bottom. An access mapping statement can consist of multiple checks like in the image below. Yo can add a rule to an existing statement by clicking **and**. Click the Minus button to remove a rule.

New roles are added to the user from every matching access mapping. If one access mapping statement assigns the role "admin" and a second one assigns the role "business" and both meet the defined conditions, then the user will be granted access to the global roles “business" and "admin"."

When using "=" as operator you may use wildcards in the **Value** field. The supported wildcard is asterisk (\*) and it matches zero or more characters. For example, if you enter "cur\*" this matches "cur", "curiosity", "cursor" and anything that starts with “cur”. "f\*n" matches "fn", "fission", "falcon", and anything that begins with an "f" and ends with an "n".

In case the asterisk character should be matched literally it has to be escaped by adding a backslash (\\). For example, to match exactly the string "Lorem\*ipsum" the value must be "Lorem\\*ipsum".


 ![OAuth configuration](/images/users-guide/Administration/admin-sso-8.png)

In this case the following claim will match the condition:

 ```json
 {
 ...
 "user": {
    "type": "human"
 },
 "role": [
    "ADMIN"
 ],
 ...
 }
 ```

As you can see, there is an option to verify if a value exists in a list via the "in" operator. Values can also be embedded in other objects. In this case a dot in the key implies looking into an embedded object.

When a user logs in with an access token, the username can be derived from a JWT claim. The claim name can be configured in the **User ID configuration** window.

 ![OAuth configuration](/images/users-guide/Administration/admin-sso-3.png)

Each access token is signed by a signing certificate. Currently there are three options to configure the signing certificates.

* By specifying the Azure AD certificate discovery address.

	![OAuth configuration](/images/users-guide/Administration/admin-sso-4.png)

* By specifying the ADFS manifest address (for ADFS 3.0).

	![OAuth configuration](/images/users-guide/Administration/admin-sso-9.png)

* By providing the public key of a certificate manually to Cumulocity IoT. A certificate definition requires an algorithm information, public key value and validity period.

	![OAuth configuration](/images/users-guide/Administration/admin-sso-5.png)


#### Integration with Azure AD

##### Azure AD configuration

The integration was successfully verified against Azure AD. The configuration steps are available in [https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code).

While configuring your Azure AD, redirect_uri is your full domain address. For the purpose of this document we assume that it is `http://documentation.cumulocity.com/tenant/oauth`. There are no additional steps on Azure AD required.

##### Cumulocity IoT configuration

When the "Azure AD" template is selected the configuration panel will look similar to the following:

 ![OAuth configuration](/images/users-guide/Administration/admin-sso-aad-basic.png)
 ![OAuth configuration](/images/users-guide/Administration/admin-sso-aad-basic-1.png)

|Field|Description|
|:---|:---|
|Azure AD Address| Address of your Azure AD tenant
|Tenant| Azure AD tenant name
|Application ID| Application ID
|Redirect URI| Address of your Cumulocity IoT tenant followed by /tenant/oauth
|Client secret| Azure AD client secret if applicable
|Button name| Button name
|Token issuer| Token issuer value in form of a HTTP address

Optionally single logout can be configured:

 ![OAuth configuration](/images/users-guide/Administration/admin-sso-logout-azure.png)

|Field|Description|
|:---|:---|
|Redirect after logout| Activates single logout by redirecting the user, after logout, to the authorization server logout endpoint
|Redirect URL| Address to redirect the user to after successful logout from the authorization server

The second part of the panel is the same as for the "Custom" template, where access mapping, user ID field selection and signature verification address are provided.

 ![OAuth configuration](/images/users-guide/Administration/admin-sso-aad-2.png)


##### Troubleshooting

It can be particularly helpful to inspect the content of the authorization token sent to the platform as some of its fields contain the information required for the correct configuration described above.

In Administration application, after clicking on **Accounts** > **Audit logs** you can filter by the category "Single sign-on" and look for entries "Json web token claims".

The contexts of the token will be presented in JSON format.

![Audit token content](/images/users-guide/Administration/admin-sso-audit-token.png)


### <a name="default-app"></a>Changing application settings

Click **Application** in the **Settings** menu to change applications settings.

![Default application](/images/users-guide/Administration/admin-settings-application.png)

Under **Default application**, you can select a default application from the list which will apply to all users within the tenant.

>**Info:** All users must have access to this application.

Under **Access control**, administrators can enable cross-origin resource sharing or "CORS" on the Cumulocity IoT API.

The **Allowed Domain** setting will enable your JavaScript web applications to directly communicate with REST APIs.

* Set it to "*" to allow communication from any host.
* Set it to `http://my.host.com`, `http://myother.host.com` to allow applications from `http://my.host.com` and from `http://myother.host.com` to communicate with the platform.

For further information, see [http://enable-cors.org](http://enable-cors.org).

### <a name="properties"></a>Managing the properties library

Click **Properties library** in the **Settings** menu, to add custom properties to inventory objects, alarms, events and tenants.

![Properties library](/images/users-guide/Administration/admin-settings-properties-library.png)

With custom properties, you can extend the data model of Cumulocity IoT built-in objects. You may create the following custom values:

- Custom inventory properties are used to extend the inventory data model. They can be used in the “Asset table” and “Asset properties” widgets.
- Custom tenant properties are available during tenant creation. The custom properties can be edited under **Subtenants** in the **Custom properties** tab of each tenant. Additionally, these properties can be viewed and exported in the **Usage statistics**.
- Custom alarm and event properties can be used as custom fields which can be added to your reports and will be available in the **Export** page in the Cockpit application.

>**Info:** Custom properties are visible to all authenticated users of the tenant, regardless of their inventory role permission.

#### <a name="add-property"></a>To add a custom property

1. Select the tab for the desired property and click **Add property**.

	![Add new property](/images/users-guide/Administration/admin-settings-property-add.png)

1. In the resulting dialog box, provide a unique name as identifier and a label for the property and select its data type from the dropdown list.

1. Additionally, select validation rules for the new property:

	|Checkbox|Description|
|:---|:---|
|Required|If selected, the property needs to be provided, i.e. during alarm creation. Not available if the property type is "Boolean".
|Default Value|Provide a default value to be automatically filled in the custom property field. Only available for properties with type "String".
|Minimum|Enter a minimum integer value.
|Maximum|Enter a maximum integer value.
|Minimum length|Enter the minimum length required for the string.
|Maximum length|Enter the maximum length required for the string.
|Regular expression|Add a regular expression which will be required in order to fill the custom property field.

4. Click **Save** to create the new property.

#### To edit a custom property

1. Click on the name of a property in the list to open it.
2. Do your edits. For details on the fields see [To add a custom property](#add-property).
3. Click **Save** to save your settings.


#### To remove a custom property

1. Click on the name of a property in the list to open it.
2. Click **Remove** to delete the property.

### <a name="openIT-credentials"></a>Providing SMS provider credentials

SMS are used throughout the platform for various features like [two-factor authentication](/users-guide/administration#tfa) and user notifications, i.e. on alarms.

By providing your credentials you enable platform features that utilize SMS services.

#### To enter SMS provider credentials

1. Click **SMS provider** in the **Settings** menu.

	![Select SMS provider](/images/users-guide/Administration/admin-settings-sms-provider.png)

2. In the **SMS provider** page, select either OpenIT or [sms77](https://www.sms77.io/en/) as SMS provider.

3. Depending on the selected provider, enter the relevant credentials:

	 * For OpenIT, your OpenIT username and password.
	 * For sms77, your API key to access sms77 (to be found in your sms77 login under Settings > HTTP API).

4. Click **Save** to save your settings.

>**Info:** OpenIT does not serve new customers anymore and is in the process of shutting down their SMS provider business.


### <a name="config-platform"></a>Configuration settings

Under **Configuration** in the **Settings** menu, you can configure system-wide properties in Cumulocity IoT.

![Configuration settings](/images/users-guide/Administration/admin-settings-configuration.png)

>**Info:** In some of the following properties you can configure email templates for various purposes. Note that the corresponding emails are send with "text/html" as content type.

#### Placeholders

The following placeholders can be found in the **Configuration** page:

- {host} - The value of this placeholder is "https://" + "&lt;&lt;tenantId&gt;&gt;" + "&lt;&lt;base-domain&gt;&gt;". For example, if "tenantId" is auto-generated, the host will be `https://t12345678.cumulocity.com`.
- {tenant-domain} - This is the location in which a tenant can be accessed. It is equal to "https://" + "&lt;&lt;tenantDomainName&gt;&gt;". For example, {tenant-domain} can be `https://myTenant.cumulocity.com`.
- {token} - An automatically generated system token for password reset purposes. When a user requests a password reset, a new random token will be generated. This token will be associated only with the particular user and will allow for a single password reset action. The standard way of using this placeholder is along with the {tenant-domain} property as "{tenant-domain}?token={token}".

>**Info:** In case of the Enterprise Tenant, the {tenantDomain} placeholders can have different values. An example tenant domain is `https://myTenant.myhost.com`.

#### Two-factor authentication

In the **Two-factor authentication** section, you can change the SMS template which is sent to the users.

#### Support link

In the **Support link** section, you can enter a URL to be used to link to a Support page. If you do not provide a link here, the default link to the Software AG TechCommunity page will be used.

Enter "false" to hide the link.

#### Password reset

In the **Password reset** section you can change all settings related to password reset email templates.

![Configuration menu1](/images/users-guide/Administration/admin-settings-configuration-password-reset.png)

At the top you can select if you want to allow sending emails to unknown email addresses.

In the **Password reset email template** fields, provide an email template to be used when the address is known and one to be used when the address is unknown. The link to reset the password might for example be: {host}/apps/devicemanagement/index.html?token={token}.

In the **Email subject** field, provide a subject for all password reset related emails.

In the following two fields provide an email template to be used on password change confirmation and a template for the invitation email.

#### Email server

In the **Email server** section, you can configure custom email server settings.

<img src="/images/users-guide/Administration/admin-settings-configuration-email-server.png" alt="Configure email server">

In the **Protocol and encryption** field, select a protocol/encryption type from the dropdown list. May be one of:

* SMTP (no encryption): email.protocol=smtp and email.connection.encrypted=false
* SMTP (STARTTLS): email.protocol=smtp and email.connection.encrypted=true
* SMTPS (SSL/TLS): email.protocol=smtps and email.connection.encrypted=true

Provide the host, port, username, password and sender address for the email server.

#### Data export

In the **Data export** section, you can set the email subject and email template for data export and specify the **User unauthorized error message**.

![Data export settings](/images/users-guide/Administration/admin-settings-configuration-data-export.png)

#### Storage limit

In the **Storage limit** section, you can specify the email subject and email template for emails being send *before* data is removed on exceeding the storage limit and *after* data removal is performed.

![Storage limit settings](/images/users-guide/Administration/admin-settings-configuration-storage-limit.png)

#### Suspending tenants

In the **Suspending tenants** section, you can provide settings for emails being send on tenant suspension.

<img src="/images/users-guide/Administration/admin-settings-configuration-suspending-tenants.png" alt="Suspended tenants">

At the top you can select if you want to send the email to the suspended tenant's administrator and specify an additional email receiver. Below you set the subject and template for the tenant suspended email.

Click **Save configuration** to save your settings.

Additional features are available for Enterprise Tenants, see [Enterprise Tenant > Customizing your platform](/users-guide/enterprise-edition#customization).

### <a name="connectivity"></a>Managing the connectivity settings

In the **Connectivity** page, you can manage credentials for different providers. In order to add or replace credentials ADMIN permissions are required.

The following provider settings may currently be specified:

- [Impact](/users-guide/optional-services#nokia-impact)
- [LoRa](/users-guide/optional-services#lora)
- [Sigfox](/users-guide/optional-services#sigfox)
- [SIM](/users-guide/optional-services#connectivity)

![Provider settings](/images/users-guide/Administration/admin-settings-connectivity.png)

#### To provide or replace credentials

1. Switch to the tab of your desired provider.
2. Enter the URL of the provider.
3. Enter the credentials of your provider platform. Depending on the provider, these credentials will be either the credentials of your account in the provider platform or the credentials with which you can register in the Cumulocity IoT connectivity page, will be displayed in your account in the provider platform.
4. Finally, click **Save** to save your settings.

Depending on the provider you have selected, there may be additional fields, which will be explained in the respective agent documentation, see [Optional services](/users-guide/optional-services).

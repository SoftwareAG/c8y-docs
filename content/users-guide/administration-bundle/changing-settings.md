---
weight: 70
title: Changing settings
layout: redirect
helpcontent:
- label: authentication
  title: Authentication
  content: "Under **Login settings** you can specify your preferred login mode:


	**OAI-Secure** - Recommended, since it provides high security, using authorization tokens to prove your identity (to the server).

	**Basic Auth** - Should be selected only for specific compatibility reasons, since it only provides basic security.

  **Single sign-on redirect** - Can only be selected if SSO is configured. If selected, will remove Basic Auth and OAI-Secure login options.


	Under **TFA settings**, select the checkbox **Allow two-factor authentication** if you want to allow TFA in your tenant (only possible for administrators).


	Switch to the **Single sign-on** tab to configure single sign-on. For details, see *Administration > Configuring single-sign on* in the *User guide*."
---


From the **Settings** menu, administrators can manage various settings for the account:

- Configure [authentication settings](#authentication) and [single sign-on](#configuring-single-sign-on).
- Change the [application settings](#default-app).
- Manage the [properties library](#properties).
- Provide [SMS provider credentials](#sms-provider).
- Manage the [connectivity settings](#connectivity).

{{< c8y-admon-req >}}
ROLES & PERMISSIONS:

To see the **Authentication** menu item, you must have ADMIN permission for the "Tenant management" permission type or be the first admin user created in the tenant.

For easier user access management, the above permission(s) are/is included in the global role(s) created by default in every new tenant:
- Tenant manager - manages tenant-wide configurations like applications, tenant options and retention rules.
{{< /c8y-admon-req >}}

<a name="authentication"></a>
### Changing authentication settings

Click **Authentication** in the **Settings** menu if you want to view or change the Login or TFA settings.

![Authentication settings](/images/users-guide/Administration/admin-settings-authentication.png)

{{< c8y-admon-related >}}
- [Two-factor authentication](/users-guide/administration/#tfa) for details on the two-factor authentication strategies in {{< product-c8y-iot >}}.
- [Configuring single sign-on](/users-guide/administration/#configuring-single-sign-on) for details on configuring single sign-on in {{< product-c8y-iot >}}.
- [Authentication](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#section/Authentication) in the {{< openapi >}} for details on managing authentication via REST.
{{< /c8y-admon-related >}}

#### Login settings

In the **Preferred login mode** field, you can select one of the following options:

* OAI-Secure - recommended, since it provides high security, using authorization tokens to prove the identity of the user. Default login mode on creating new tenants. This mode is an enhancement of the previous OAuth Internal authentication (available prior to 10.13.0).
* Basic Auth - should be selected only for specific compatibility reasons, since it only provides basic security.
* Single sign-on redirect - can be selected only if SSO is configured. If selected, will remove Basic Auth and OAI-Secure login options.

This login mode will be used by the platform's applications as the default method to authenticate users. Device authentication stays unchanged.

{{< c8y-admon-important >}}
Each time you change the login mode you will be forced to log out. Other users will need to log out and log in again so that the change is applied.
{{< /c8y-admon-important >}}

In the field **Password validity limit**, you can limit the validity of user passwords by specifying the number of days after which users must change their passwords. If you do not want to force your users to change passwords, use "0" for unlimited validity of passwords (default value).

{{< c8y-admon-info >}}
The password validity limit is not imposed on users with a "devices" role. This prevents device passwords from expiring.
{{< /c8y-admon-info >}}

By default, users can use any password with eight characters or more. If you select **Enforce that all password are "strong" (green)**, users must provide strong passwords as described in [Getting Started > User options and settings > To change your password](/users-guide/getting-started/#change-password).

{{< c8y-admon-info >}}
The password validity limit and the password strength may not be editable, if configured by the platform administrator.
{{< /c8y-admon-info >}}

<a name="basic-auth-restrictions"></a>
#### Basic Auth restrictions

Even if OAI-Secure authentication is configured for users, basic authentication remains available for devices and microservices using the platform. To provide a higher security level the basic authentication can be restricted.

Use the **Forbidden for web browsers** toggle to disallow the usage of basic authentication for web browsers. Moreover you can specify the following parameters:

* **Trusted user agents** - this list is empty by default. If some user agent is added, all the HTTP requests containing this entry in the `User-Agent` header and having a valid basic authentication date will be accepted.
* **Forbidden user agents** - this list is empty by default. If some user agent is added, all the HTTP requests containing this entry in the `User-Agent` header and using basic authentication will be rejected.

{{< c8y-admon-info >}}
If the user agent is not found in the list of trusted or forbidden user agents then {{< product-c8y-iot >}} will try to verify if it is a web browser using an external library.
{{< /c8y-admon-info >}}

#### OAI-Secure

OAI-Secure is a more secure alternative to the Basic Auth mode that also supports username and password login. In OAI-Secure mode the credentials in the initial request are exchanged for a JWT token that is set as a cookie in the web browser or returned in the response body. Based on the configuration OAI-Secure can support full session management or work as a standard JWT authentication where the user session lifetime is limited by the token expiration time.

##### OAI-Secure without the configuration related to the session management (session configuration turned off)

When there is no configuration related to the session, OAI-Secure issues a JWT token with a certain lifetime. If the token expires then the user is forced to re-login because token refresh is not supported. This behavior is very inconvenient for the user if the token lifetime is short because the user is forced to re-login frequently.  

##### OAI-Secure with the configuration of the session management (session configuration turned on)

Using OAI-Secure with session configuration is more convenient and secure, and can be used to achieve a behavior which is similar to the authentication based on HTTP sessions.

The OAI-Secure token acts as a session identifier on the client side (web browser). Such a token identifier which is stored in the cookie can have a preconfigured short lifetime. Then, the {{< product-c8y-iot >}} platform is responsible for renewing the session identifier without any user interaction. It is sufficient that the user's action causes the web browser to send a request to {{< product-c8y-iot >}}. Then, {{< product-c8y-iot >}} can examine if the renewing of the session identifier should be executed and perform the operation if necessary. {{< product-c8y-iot >}} offers extensive configuration related to this behavior so that tenant administrators can adjust the configuration to their needs.

If the **Use session configuration** option is enabled, the following settings can be configured on tenant level by a tenant administrator:

<table>
<col width="200">
<col width="600">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Default</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">User agent validation required</td>
<td style="text-align:left">If turned on, the user agent sent in headers of consecutive requests in the scope of one session will be compared and a request with changed user agent will not be authorized.</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">Session absolute timeout</td>
<td style="text-align:left">Defines the maximum period of time that the user can use {{< product-c8y-iot >}} without having to re-authenticate.</td>
<td style="text-align:left">14 days</td>
</tr>
<tr>
<td style="text-align:left">Session renewal timeout</td>
<td style="text-align:left">Expected to be much shorter than the absolute timeout. Defines the time after which {{< product-c8y-iot >}} tries to provide a new token (session identifier). The renewal may take place only when {{< product-c8y-iot >}} receives an HTTP request from a client with a non-expired token and the period of time between obtaining the token and the execution of the request is greater than the renewal timeout.</td>
<td style="text-align:left">1 day</td>
</tr>
<tr>
<td style="text-align:left">Maximum parallel sessions per user</td>
<td style="text-align:left">Defines the maximum number of sessions which can be started by each user (for example on different machines or browsers). When a user exceeds this limit, then the oldest session will be terminated and the user will be logged out on this particular device.</td>
<td style="text-align:left">5 sessions</td>
</tr>
<tr>
<td style="text-align:left">Token lifespan</td>
<td style="text-align:left">Defines the time for which a token is active. The user is only able to access {{< product-c8y-iot >}} with a valid token. This configuration option is always available, it does not depend on session configuration. See <a href="#token-settings" class="no-ajaxy">Token generation with OAI-Secure</a> below. </td>
<td style="text-align:left">2 days</td>
</tr>

</tbody>
</table>

{{< c8y-admon-info >}}
The time parameters should depend on each other in the following manner: renewal timeout < token lifespan < absolute timeout.
Moreover, the renewal timeout should be approximately half of the token lifespan.      

Therefore, the recommended settings for a standard use case for OAI-Secure are the following:   

 * **Session absolute timeout**: 28 800 seconds (8 hours)        
 * **Session renewal timeout**: 2700 seconds (45 minutes)        
 * **Token lifespan**: 5400 seconds (90 minutes)

In such configurations, the idle timeout is in the range of 45 to 90 minutes, depending on when the last activity for the session was performed.
{{< /c8y-admon-info >}}

During the session token renewal the previous token is revoked and a new one is provided. The parameter `renewal token delay` defines the delay used to make this process smooth and not disturbing for the user. The old token is still valid for this period (1 minute by default). This way both tokens, old and new, are accepted by {{< product-c8y-iot >}}. This parameter is only configurable on platform level and cannot be modified by the tenant administrator.


<a name="token-settings"></a>

#### Token generation with OAI-Secure

OAI-Secure is primarily based on JWT stored in a browser cookie. It can be also used to generate JWT in the response body.
The lifespan of the tokens and the cookie is configurable by tenant options belonging to the category `oauth.internal`.

##### Lifespan configuration of JWT stored in the cookie

JWT tokens stored in the browser cookie have a default validity time of two weeks.
This can be changed with tenant options:
 - category: `oauth.internal`;
 - key: `basic-token.lifespan.seconds`;

The minimum allowed value is 5 minutes.

##### Lifespan configuration of cookies

Cookies used to store a JWT token in a browser have their own validity time that can be changed with tenant options:
- category: `oauth.internal`;
- key: `basic-user.cookie.lifespan.seconds`;

The default value is two weeks. To have the cookie deleted when the user closes the browser, set it to any negative value.

##### Lifespan configuration of JWT in response body

The lifespan of JWT tokens generated in the response body is configured with the following tenant options:
- category: `oauth.internal`;
- key: `body-token.lifespan.seconds`;

Refer to the [Tenant API](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Tenant-API) in the {{< openapi >}} for more details.

{{< c8y-admon-info >}}
If external communication to the {{< management-tenant >}} has been blocked, then it is only possible to access the tenant in a secure way (for example via SSH tunnel). This means that you can just as well use basic authentication. Additionally, it is not possible to use single sign-on since the communication from the external authorization server is also blocked. Therefore, the authentication method is automatically set to "Basic authentication" if the {{< management-tenant >}} is configured to block external communication.
{{< /c8y-admon-info >}}

#### TFA settings

Select the checkbox **Allow two-factor authentication** if you want to allow TFA in your tenant (only possible for administrators).

You may select one of the following options:

* **SMS-based**, supporting the following settings:
	- **Limit token validity for** - lifetime of each session in minutes. When the session expires or a user logs out, the user must enter a new verification code.
  - **Limit verification code validity for** - here you can set the lifetime of each verification code sent via SMS. When the verification code expires, the user must request a new verification code in order to login.


	{{< c8y-admon-info >}}
An SMS gateway microservice must be configured for the tenant. Naturally only users with a valid phone number associated can use this functionality.
  {{< /c8y-admon-info >}}

* **Google Authenticator** (Time-based One-Time Password = TOTP), supporting the following setting:
	 - **Enforce TOTP two-factor authentication on all users** - when enabled it will force all users to set up their TFA on login. Otherwise each individual user can choose to activate it or not.

{{< c8y-admon-info >}}
The TOTP method is only available with the login mode "OAI-Secure".
{{< /c8y-admon-info >}}

Click **Save TFA settings** to apply your settings.

{{< c8y-admon-important >}}
Each time you change the TFA method you will be forced to log out. User TFA settings are cleared and must be configured again.
{{< /c8y-admon-important >}}

{{< c8y-admon-info >}}
Users with a "devices" role are excluded from TFA and TOTP. This is also true when TOTP is enforced for all users.
{{< /c8y-admon-info >}}

<a name="default-app"></a>
### Changing application settings

Click **Application** in the **Settings** menu to change applications settings.

![Application settings](/images/users-guide/Administration/admin-settings-application.png)

Under **Default application**, you can select a default application from the list which will apply to all users within the tenant. Whenever the platform is accessed, for example, by domain name only, without mentioning a specific application, the application selected as default application is used as default landing page.

{{< c8y-admon-info >}}
All users must have access to this application.
{{< /c8y-admon-info >}}

Under **Access control**, administrators can enable cross-origin resource sharing or "CORS" on the {{< product-c8y-iot >}} API.

The **Allowed Domain** setting will enable your JavaScript web applications to directly communicate with REST APIs.

* Set it to "*" to allow communication from any host.
* Set it to `http://my.host.com`, `http://myother.host.com` to allow applications from `http://my.host.com` and from `http://myother.host.com` to communicate with the platform.

For further information, see [http://enable-cors.org](http://enable-cors.org).

<a name="properties"></a>
### Managing the properties library

Click **Properties library** in the **Settings** menu, to add custom properties to inventory objects, alarms, events and tenants.

![Properties library](/images/users-guide/Administration/admin-settings-properties-library.png)

With custom properties, you can extend the data model of {{< product-c8y-iot >}} built-in objects. You may create the following custom values:

- Custom inventory properties are used to extend the inventory data model. They can be used in the "Asset table" and "Asset properties" widgets.
- Custom tenant properties are available during tenant creation. The custom properties can be edited under **Subtenants** in the **Custom properties** tab of each tenant. Additionally, these properties can be viewed and exported in the **Usage statistics**.
- Custom alarm and event properties can be used as custom fields which can be added to your reports and will be available in the **Export** page in the Cockpit application.

{{< c8y-admon-info >}}
Custom properties are visible to all authenticated users of the tenant, regardless of their inventory role permission.
{{< /c8y-admon-info >}}

<a name="add-property"></a>
#### To add a custom property

1. Select the tab for the desired property and click **Add property**.

2. In the resulting dialog box, provide a unique name as identifier and a label for the property and select its data type from the dropdown list.

3. Additionally, select validation rules for the new property:

<table>
<colgroup>
<col width="20%">
<col width="80%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Checkbox</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Required</td>
<td style="text-align:left">If selected, the property needs to be provided, for example, during alarm creation. Not available if the property type is "Boolean".</td>
</tr>
<tr>
<td style="text-align:left">Default Value</td>
<td style="text-align:left">Provide a default value to be automatically filled in the custom property field. Only available for properties with type "string".</td>
</tr>
<tr>
<td style="text-align:left">Minimum</td>
<td style="text-align:left">Enter a minimum integer value.</td>
</tr>
<tr>
<td style="text-align:left">Maximum</td>
<td style="text-align:left">Enter a maximum integer value.</td>
</tr>
<tr>
<td style="text-align:left">Minimum length</td>
<td style="text-align:left">Enter the minimum length required for the string.</td>
</tr>
<tr>
<td style="text-align:left">Maximum length</td>
<td style="text-align:left">Enter the maximum length required for the string.</td>
</tr>
<tr>
<td style="text-align:left">Regular expression</td>
<td style="text-align:left">Add a regular expression which will be required in order to fill the custom property field.</td>
</tr>
</tbody>
</table>

4. Click **Save** to create the new property.

#### To edit a custom property

1. Click on the name of a property in the list to open it.
2. Do your edits. For details on the fields see [To add a custom property](#add-property).
3. Click **Save** to save your settings.


#### To remove a custom property

1. Click on the name of a property in the list to open it.
2. Click **Remove** to delete the property.

<a name="sms-provider"></a>
### Providing SMS provider credentials

SMS are used throughout the platform for various features like [two-factor authentication](/users-guide/administration#tfa) and user notifications, for example, on alarms.

By providing your credentials you enable platform features that utilize SMS services.

#### To enter SMS provider credentials

1. Click **SMS provider** in the **Settings** menu.

{{< c8y-admon-info >}}
To see the SMS provider configuration, you must have the permission SMS READ. To modify the SMS provider configuration, you must have the permission SMS ADMIN.
{{< /c8y-admon-info >}}

2. In the **SMS provider** page, select one of the available SMS providers from the **SMS provider** dropdown field. You can start typing to filter items and more easily find your preferred provider.

3. In the resulting dialog, enter the required credentials and properties or specify optional settings, which differ depending on the provider you selected.

4. Click **Save** to save your settings.

{{< c8y-admon-info >}}
OpenIT does not serve new customers anymore and is in the process of shutting down their SMS provider business. We therefore recommend you to select one of the other SMS providers.
{{< /c8y-admon-info >}}


<a name="connectivity"></a>
### Managing the connectivity settings

In the **Connectivity** page, you can manage credentials for different providers. In order to add or replace credentials ADMIN permissions are required.

The following provider settings may currently be specified:

- [Actility LoRa](/protocol-integration/lora-actility)
- [Sigfox](/protocol-integration/sigfox)
- [SIM](/users-guide/device-management/#connectivity)

#### To provide or replace credentials

1. Switch to the tab of your desired provider.
2. Enter the URL of the provider.
3. Enter the credentials of your provider platform. Depending on the provider, these credentials will be either the credentials of your account in the provider platform or the credentials with which you can register in the {{< product-c8y-iot >}} connectivity page, will be displayed in your account in the provider platform.
4. Finally, click **Save** to save your settings.

Depending on the provider you have selected, there may be additional fields, which will be explained in the respective agent documentation, see [Protocol integration guide](/protocol-integration/overview/).

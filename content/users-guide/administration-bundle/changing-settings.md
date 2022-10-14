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


	Switch to the **Single sign-on** tab to configure single sign-on. For details, see *Administration > Changing settings > Configuring single-sign on* in the *User guide*."
---


From the **Settings** menu, administrators can manage various settings for the account:

- Configure [authentication settings](#authentication) and [single sign-on](#configuring-single-sign-on).
- Change the [application settings](#default-app).
- Manage the [properties library](#properties).
- Provide [SMS provider credentials](#sms-provider).
- Manage the [connectivity settings](#connectivity).

<a name="authentication"></a>
### Changing authentication settings

Click **Authentication** in the **Settings** menu if you want to view or change the Login or TFA settings.

![Password settings](/images/users-guide/Administration/admin-settings-authentication.png)

{{< c8y-admon-info >}}
To see the **Authentication** menu entry, you must have "Tenant management" ADMIN permission (`ROLE_TENANT_ADMIN` or `ROLE_TENANT_MANAGEMENT_ADMIN`).
{{< /c8y-admon-info >}}

#### Login settings

In the **Preferred login mode** field, you can select one of the following options:

* OAI-Secure - Recommended, since it provides high security, using authorization tokens to prove the identity of the user. Default login mode on creating new tenants. This mode is an enhancement of the previous OAuth Internal authentication (available prior to 10.13.0).
* Basic Auth - Should be selected only for specific compatibility reasons, since it only provides basic security.
* Single sign-on redirect - Can be selected only if SSO is configured. If selected, will remove Basic Auth and OAI-Secure login options.

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

The OAI-Secure token acts as a session identifier on the client site (web browser). Such a token identifier which is stored in the cookie can have a preconfigured short lifetime. Then, the {{< product-c8y-iot >}} platform is responsible for renewing the session identifier without a user interaction. It is sufficient that the user's action causes the web browser to send a request to {{< product-c8y-iot >}}. Then, {{< product-c8y-iot >}} can examine if the renewing of the session identifier should be executed and perform the operation if necessary. {{< product-c8y-iot >}} offers extensive configuration related to this behavior so that tenant administrators can adjust the configuration to their needs.

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
<td style="text-align:left">Expected to be much shorter than the absolute timeout. Defines the time after which the {{< product-c8y-iot >}} tries to provide a new token (session identifier). The renewal may take place only when {{< product-c8y-iot >}} receives an HTTP request from a client with a non-expired token and the period of time between obtaining the token and the execution of the request is greater than the renewal timeout.</td>
<td style="text-align:left">1 day</td>
</tr>
<tr>
<td style="text-align:left">Maximum parallel sessions per user</td>
<td style="text-align:left">Defines the maximum number of sessions which can be started by each user (for example on different machines or browsers). When a user exceeds this limit, then the oldest session will be terminated and the user will be logged out on this particular device.</td>
<td style="text-align:left">5 sessions</td>
</tr>
<tr>
<td style="text-align:left">Token lifespan</td>
<td style="text-align:left">Defines the time for which a token is active. The user is able to  access the {{< product-c8y-iot >}} only with a valid token. This configuration option is always available, it does not depend on session configuration. See <a href="#token-settings" class="no-ajaxy">Token and cookie settings</a> below. </td>
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

The default value is two weeks. It can also be set to any negative value so that the cookie will be deleted when the user closes the browser.

##### Lifespan configuration of JWT in response body

The lifespan of JWT tokens generated in the response body is configured with the following tenant options:
- category: `oauth.internal`;
- key: `body-token.lifespan.seconds`;

Refer to the [Tenant API](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenant-API) in the {{< openapi >}} for more details.

{{< c8y-admon-info >}}
If external communication to the {{< management-tenant >}} has been blocked, then it is only possible to access the tenant in a secure way (for example via SSH tunnel). This means that you can just as well use basic authentication. Additionally, it is not possible to use single sign-on since the communication from the external authorization server is also blocked. Therefore, the authentication method is automatically set to "Basic authentication" if the {{< management-tenant >}} is configured to block external communication.
{{< /c8y-admon-info >}}

#### TFA settings

Select the checkbox **Allow two-factor authentication** if you want to allow TFA in your tenant (only possible for administrators).

You may select one of the following options:

* **SMS-based**, supporting the following settings:
	- **Limit token validity for**: Lifetime of each session in minutes. When the session expires or a user logs out, the user must enter a new verification code.
   - **Limit verification code validity for**: Here you can set the lifetime of each verification code sent via SMS. When the verification code expires, the user must request a new verification code in order to login.
   <br><br>

	{{< c8y-admon-info >}}
An SMS gateway microservice must be configured for the tenant. Naturally only users with a valid phone number associated can use this functionality.
  {{< /c8y-admon-info >}}

* **Google Authenticator** (Time-based One-Time Password = TOTP), supporting the following setting:
	 - **Enforce TOTP two-factor authentication on all users**: When enabled it will force all users to set up their TFA on login. Otherwise each individual user can choose to activate it or not.

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

<a name="configuring-single-sign-on"></a>
### Configuring single sign-on

{{< product-c8y-iot >}} provides single sign-on functionality, that allows a user to login with a single 3rd-party authorization server using the OAuth2 protocol, for example Azure Active Directory. Currently authorization code grant is supported only with access tokens in form of JWT.

{{< c8y-admon-info >}}
This feature is built on top of cookies technology. To be able to use it, you must have cookies enabled in the settings of your browser.
{{< /c8y-admon-info >}}

This feature is enabled since {{< product-c8y-iot >}} version 10.4.6. For correct behavior any microservice needs to use the microservice SDK with version 10.4.6 or later.

Before switching to the single sign-on option it is mandatory that:

* The authorization server you use supports OAuth2 authorization code grant.
* The access token is issued as JWT and you know what goes into the token content.
* The JWT must consist of a unique user identifier, "iss" (issuer), "aud" (audience) and "exp" (expiration time) fields.
* The {{< product-c8y-iot >}} platform is in version 10.4.6 but preferably higher.
* All microservices are build with Microservice Java SDK 10.4.6 but preferably higher. For custom-built microservices, refer to [General aspects > Security](/microservice-sdk/concept/#security) in the *Microservice SDK guide*.
* For on premises installation the domain-based tenant resolution is configured properly.

{{< c8y-admon-info >}}
In order to use the single sign-on feature for {{< enterprise-tenant >}}s, the enterprise domain must be set up as redirect URI in the basic configurations. If single sign-on providers have a list of allowed domains, the enterprise domain should be added to that list.
{{< /c8y-admon-info >}}

#### Configuration settings

To enable the feature, the administrator must configure a connection with the authorization server. This is done in the Administration application.

Click the **Single sign-on** tab in the **Authentication** page.

At the top left, you can select a template. The selected option has an effect on the look of the panel. The default template is "Custom" which allows for a very detailed configuration with virtually any authorization server using OAuth2 authorization code grant. Other templates provide simplified views for well known and supported authorization servers. In the next steps there will first be a definition of how to use the "Custom" template followed by a view dedicated to Azure Active directory.

<a name="custom-template"></a>
##### Custom template

![Custom authorization request](/images/users-guide/Administration/sso-custom-authorization-request.png)

As the OAuth protocol is based on the execution of HTTP requests and redirects, a generic request configuration is provided.

The first part of the **Single sign-on** page consists of the request configuration. Here you can configure the HTTP request address, request parameters, headers and body in case of token and refresh requests. The authorize method is executed as a GET, token and refresh method by POST requests.

{{< c8y-admon-info >}}
Be aware that the body field of each request, after filling placeholders with values, is sent in the request 'as is'. This means it is not encoded by {{< product-c8y-iot >}}. Many authorization servers require values inside the body to be URL-encoded (x-form-urlencoded). This can be achieved by entering already encoded values in a body field.
{{< /c8y-admon-info >}}

Specifying a logout request is optional. It performs [front-channel single logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html). If configured, the user is redirected to the defined authorization server logout URL after logging out from {{< product-c8y-iot >}}.

![Custom logout request](/images/users-guide/Administration/sso-custom-logout-request.png)

The **Basic** section of the **Single sign-on** page consists of the following configuration settings:

![Custom basic configuration](/images/users-guide/Administration/sso-custom-basic.png)

|Field|Description|
|:---|:---|
|Redirect URI|Redirect parameter. Can be used in request definitions as a ${redirectUri} placeholder
|Client ID|OAuth connection client ID. Can be used in request definitions as a ${clientId} placeholder
|Button name|Name displayed on the button on the **Login** page
|Issuer|OAuth token issuer
|Provider name|Name of the provider
|Visible on Login page|Indicates whether the login option is enabled or not.
|Audience|Expected aud parameter of JWT

Each time a user logs in, the content of the access token is verified and is a base for user access to the {{< product-c8y-iot >}} platform. The following section provides the mapping between JWT claims and access to the platform.

 ![Custom access mapping](/images/users-guide/Administration/sso-custom-access-mapping.png)

 In the example above, if a user tries to login a decoded JWT claims look like:

```json
{
...
"user": "john.wick",
...
}
```

The user will be granted access to the global role "business" and the default application "cockpit".

If no access mapping matches the user access token, the user will get an "access denied" message when trying to log in. This will also happen if there is no access mapping defined causing all users to be unable to log in using SSO.

New rules can be added by clicking **Add access mapping** at the bottom. An access mapping statement can consist of multiple checks like in the image below. You can add a rule to an existing statement by clicking **and**. Click the Minus button to remove a rule.

New roles are added to the user from every matching access mapping. If one access mapping statement assigns the role "admin" and a second one assigns the role "business" and both meet the defined conditions, then the user will be granted access to the global roles "business" and "admin"."

When using "=" as operator you may use wildcards in the **Value** field. The supported wildcard is asterisk (\*) and it matches zero or more characters. For example, if you enter "cur\*" this matches "cur", "curiosity", "cursor" and anything that starts with "cur". "f\*n" matches "fn", "fission", "falcon", and anything that begins with an "f" and ends with an "n".

In case the asterisk character should be matched literally it must be escaped by adding a backslash (\\). For example, to match exactly the string "Lorem\*ipsum" the value must be "Lorem\\*ipsum".


 ![Custom access mapping](/images/users-guide/Administration/sso-custom-access-mapping-WHEN.png)

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

There is an option to verify that a value exists in a list via the "in" operator. Values can also be embedded in other objects. In this case a dot in the key implies looking into an embedded object.

By default, the configuration for dynamic access mapping is selected: **Roles selected in the rules above will be reassigned to a user on each log in and other ones will be cleared**.
This means that dynamic access mapping assigns user roles, based on the access token, on every user login.
It is not possible to change the user roles inside {{< product-c8y-iot >}} as they would be overwritten on the next user login.
To change this behavior, select one of the following radio buttons at the bottom of the **Access mapping** section:

* **Use dynamic access mapping only on user creation**

  When selected, dynamic access mapping will be used only when a new user logs in to fill in the initial roles. When a user already exists in {{< product-c8y-iot >}}, the roles will not be overwritten nor updated.
  
* **Roles selected in the rules above will be reassigned to a user on each log in and other ones will be unchanged**

  When selected, dynamic access mapping will be used on every login, but the roles not listed in the access mapping configuration will not be updated. Only the roles that are listed in the defined access mapping rules will be overwritten.

![Custom access mapping](/images/users-guide/Administration/sso-custom-access-mapping-2.png)

Selecting one of the two options mentioned above will also enable admins to edit roles of SSO users in the user management. For details, refer to [Administration > Managing permissions](/users-guide/administration/#attach-global) in the *User guide*.

When a user logs in with an access token, the username can be derived from a JWT claim. The claim name can be configured in the **User ID configuration** window.
The user ID can be set to any top-level field of the authorization token payload sent from the authorization server to the platform during the login process. We recommend you inspect the authorization token in the audit logs to make sure the correct field is used (see [Troubleshooting](#troubleshooting)).

![User ID configuration](/images/users-guide/Administration/sso-custom-userid-config.png)

 If the **Use constant value** checkbox is selected, a constant user ID is used for all users who log in to the {{< product-c8y-iot >}} platform via SSO. This means that all users who log in via SSO share the same user account in the {{< product-c8y-iot >}} platform. Usage of this option is not recommended.

Next, the **User data mappings** can be configured:

![User data mappings](/images/users-guide/Administration/sso-custom-userdata-mapping.png)

On user login, user data like first name, last name, email and phone number can also be derived from JWT claims. Each field represents the claim name that is used to retrieve the data from JWT. The user data mapping configuration is optional and as admin manager you can only use the required fields. If the configuration is empty or the claim name cannot be found in the JWT token then the values in the user data are set as empty.

Mapping for alias is not available because it is not used in the context of single sign-on login.

Each access token is signed by a signing certificate. Currently there are three options to configure the signing certificates.

1. By specifying the Azure AD certificate discovery address.

 ![Signature verification Azure](/images/users-guide/Administration/sso-signature-verification-Azure-AD.png)

2. By specifying the ADFS manifest address (for ADFS 3.0).

 ![Signature verification ADFS](/images/users-guide/Administration/sso-signature-verification-ADFS-manifest.png)

3. By providing the public key of a certificate manually to {{< product-c8y-iot >}}. A certificate definition requires an algorithm information, public key value and validity period.

 ![Signature verification Custom](/images/users-guide/Administration/sso-signature-verification-custom.png)

4. By specifying the JWKS (JSON Web Key Set) URI. JWKS is a set of JWK objects containing a public key used to verify tokens issued by the authorization server.

 ![Signature verification JWKS](/images/users-guide/Administration/sso-signature-verification-JWKS.png)


{{< c8y-admon-info >}}
{{< product-c8y-iot >}} only supports certificates with RSA key, either as a ("n", "e") parameters pair or "x5c" certificate chain. Other key types (for example Elliptic-curves) are not supported.
{{< /c8y-admon-info >}}

##### Placeholders
Inside some fields you can use placeholders that are resolved by {{< product-c8y-iot >}} at runtime. Available placeholders are:

|Placeholder|Description|
|:---|:---|
|clientId|Value of the **Client ID** field
|redirectUri| Value of the **Redirect URI** field
|code|Code returned by the authorization server in response to authorization request
|refreshToken| Refresh token returned by the authorization server after token request

These placeholders can be used in authorization requests, token requests, refresh requests and logout request in the fields: URL, body, headers and request parameters

To use a placeholder in a field, put it inside two curly brackets preceded with a dollar sign:
![Placeholder standalone](/images/users-guide/Administration/admin-sso-placeholder-standalone.png)

Placeholders can also be used as a part of text:
![Placeholder text](/images/users-guide/Administration/admin-sso-placeholder-text.png)

Placeholders are not validated for correctness. Any not recognized or misspelled placeholder will be left in text unprocessed.

#### Integration with Azure AD

##### Azure AD configuration

The integration was successfully verified against Azure AD. The configuration steps are available in [https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code).

When configuring your Azure AD, use your full domain address as redirect URI. For the purpose of this document we assume that it is "http://documentation.{{< domain-c8y >}}/tenant/oauth". The redirect URI must be set for a web application and not for a single-page application. There are no additional steps on Azure AD required.

#### Integration with Keycloak

##### Global logout feature (available for Keycloak in version 12.0.0 and higher)

Integration with Keycloak allows administrators to use a global logout feature based on OpenId Connect. An event from the Keycloak authorization server is sent to all applications (including the {{< product-c8y-iot >}} platform) with a logout token that is verified in the same way as the token used in the login process. This feature allows ending sessions on both sides, applications and Keycloak, for the particular user.

To configure the global logout feature follow these steps:

1. Go to the administrator console.
2. Select the realm used in the SSO configuration for the tenant.
3. Navigate to **Clients** in the **Configure** section.
4. Select the client used in the SSO configuration.
5. Set the **Backchannel Logout URL** field to "https://mytenant.{{< domain-c8y >}}/user/logout/oidc".

To use the global logout feature follow these steps:

1. Go to the administrator console.
2. Select the realm used in the SSO configuration for the tenant.
3. Navigate to **Users** in the **Manage** section.
4. Select the particular user.
5. Navigate to the **Sessions** tab in the **Manage** section and click **Logout**.

##### Logout all users feature

Keycloak also provides a feature which allows administrators to logout all SSO users.

To configure the logout all users feature follow these steps:

1. Go to the administrator console.
2. Select the realm used in the SSO configuration for the tenant.
3. Navigate to **Clients** in the **Configure** section.
4. Select the client used in the SSO configuration.
5. Set the **Admin URL** to "https://mytenant.{{< domain-c8y >}}/user/keycloak"

To use the logout all users feature follow these steps:

1. Go to the administrator console.
2. Select the realm used in the SSO configuration for the tenant.
3. Navigate to the **Sessions** tab in the **Manage** section and click **Logout all**.

Note that the logout event for all users is only performed in the scope of one Keycloak realm.
Moreover, it is only sent for those tenants where the client being used as a configuration for the SSO feature has the correct **Admin URL** value.

In the **Session** tab, the Keycloak administrator can also check how many active sessions exist on the respective client and estimate how many tenants and users will be affected by the logout event.

To confirm if the logout event for all users or a single user has been received by the tenant, the {{< product-c8y-iot >}} administrator can verify if there is information about the logout event in the audit logs. The audit logs are available in the Administration application under **Accounts** in the **Audit Logs** tab.

##### Cumulocity IoT configuration

When the "Azure AD" template is selected the configuration panel will look similar to the following:

 ![Azure Basic configuration](/images/users-guide/Administration/sso-azure-basic.png)
 ![Azure access mapping](/images/users-guide/Administration/sso-azure-access-mapping.png)
 ![Azure user data mapping](/images/users-guide/Administration/sso-azure-userdata-mappings.png)

|Field|Description|
|:---|:---|
|Azure AD Address| Address of your Azure AD tenant
|Tenant| Azure AD tenant name
|Application ID| Application ID
|Redirect URI| Address of your {{< product-c8y-iot >}} tenant followed by /tenant/oauth
|Client secret| Azure AD client secret if applicable
|Button name| Button name
|Token issuer| Token issuer value in form of a HTTP address

Optionally single logout can be configured:

 ![Azure logout request](/images/users-guide/Administration/admin-sso-logout-azure.png)

|Field|Description|
|:---|:---|
|Redirect after logout| Activates single logout by redirecting the user, after logout, to the authorization server logout endpoint
|Redirect URL| Address to redirect the user to after successful logout from the authorization server

The second part of the panel is the same as for the "Custom" template, where access mapping, user data mapping, user ID field selection and signature verification address are provided.


##### Troubleshooting

It can be particularly helpful to inspect the content of the authorization token sent to the platform as some of its fields contain the information required for the correct configuration described above.

In Administration application, after clicking on **Accounts** > **Audit logs** you can filter by the category "Single sign-on" and look for entries "Json web token claims".

The contexts of the token will be presented in JSON format.

![Audit token content](/images/users-guide/Administration/admin-sso-audit-token.png)


<a name="default-app"></a>
### Changing application settings

Click **Application** in the **Settings** menu to change applications settings.

![Default application](/images/users-guide/Administration/admin-settings-application.png)

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

	![Add new property](/images/users-guide/Administration/admin-settings-property-add.png)

1. In the resulting dialog box, provide a unique name as identifier and a label for the property and select its data type from the dropdown list.

1. Additionally, select validation rules for the new property:

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

    ![Select SMS provider](/images/users-guide/Administration/admin-settings-sms-provider.png)

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

![Provider settings](/images/users-guide/Administration/admin-settings-connectivity.png)

#### To provide or replace credentials

1. Switch to the tab of your desired provider.
2. Enter the URL of the provider.
3. Enter the credentials of your provider platform. Depending on the provider, these credentials will be either the credentials of your account in the provider platform or the credentials with which you can register in the {{< product-c8y-iot >}} connectivity page, will be displayed in your account in the provider platform.
4. Finally, click **Save** to save your settings.

Depending on the provider you have selected, there may be additional fields, which will be explained in the respective agent documentation, see [Protocol integration guide](/protocol-integration/overview/).

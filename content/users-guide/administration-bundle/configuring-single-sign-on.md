---
weight: 72
title: Configuring single sign-on
layout: redirect
---

{{< product-c8y-iot >}} provides single sign-on (SSO) functionality, that allows a user to login with a single 3rd-party authorization server using the OAuth2 protocol, for example Azure Active Directory (ADD). Currently authorization code grant is supported only with access tokens in form of JWT. SAML is not supported.
On top of standard SSO, {{< product-c8y-iot >}} also allows you to access the platform resources using access tokens from your authorization server directly as a Bearer token. For details refer to [Configuring authentication with OAuth2 access tokens from authorization servers](/users-guide/administration/#configuring-authentication-with-oauth2-access-tokens-from-authorization-servers).

{{< c8y-admon-req >}}
To use the SSO feature the following requirements must be met:

* The authorization server you use supports OAuth2 authorization code grant.
* The access token is issued as JWT and you know what goes into the token content.
* The JWT must consist of a unique user identifier, "iss" (issuer), "aud" (audience) and "exp" (expiration time) fields.
* All microservices are built with Microservice Java SDK version 10.4.6 but preferably higher. For custom-built microservices, refer to [General aspects > Security](/microservice-sdk/concept/#security) in the *Microservice SDK guide*.
* For on premises installation the domain-based tenant resolution is configured properly.
* For {{< enterprise-tenant >}}s, the enterprise domain must be set up as redirect URI in the basic configurations. If SSO providers have a list of allowed domains, the enterprise domain should be added to that list.
* You must assign a role to the user with at least READ permission for "Own user management", otherwise the user cannot log in.
* Users must have cookies enabled in the browser settings, as the SSO feature is built on top of cookies technology.
{{< /c8y-admon-req >}}

{{< c8y-admon-related >}}
- [Changing settings > Changing authentication settings](/users-guide/administration/#authentication) for general information on how to configure authentication settings.
- [Authentication](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#section/Authentication) in the {{< openapi >}} for details on managing authentication via REST.
{{< /c8y-admon-related >}}

### Configuration settings

To enable the SSO feature, the administrator must configure a connection with the authorization server. This is done in the Administration application.

#### Configuration access

SSO configurations can be configured to be exclusively accessible by the {{< management-tenant >}}, thus preventing other tenants from accessing the configurations.
Users of such tenants are unable to update the configuration. This removes the risk of an incorrectly configured SSO, which can prevent other users from logging in via SSO.
The {{< management-tenant >}} can grant or restrict access to SSO configurations for specific tenants. For more information about configuration access, refer to the [Login options API](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#operation/putAccessLoginOptionResource) in the {{< openapi >}}.

#### Configuration view

Click the **Single sign-on** tab in the **Authentication** page.
Note that the tab is only visible for tenants which have access to the SSO configuration.

At the top left, you can select a template. The selected option has an effect on the look of the panel. The default template is "Custom" which allows for a very detailed configuration with virtually any authorization server using OAuth2 authorization code grant. Other templates provide simplified views for well known and supported authorization servers. In the next steps there will first be a definition of how to use the "Custom" template followed by a view dedicated to Azure Active directory.

<a name="custom-template"></a>
#### Custom template

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
|Token issuer|OAuth token issuer
|Button name|Name displayed on the button on the **Login** page
|Provider name|Name of the provider
|Audience|Expected aud parameter of JWT
|Visible on Login page|Indicates whether the login option is enabled or not

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

The user will be granted access to the global role "business", the default application "cockpit" and the inventory roles "Manager" and "Reader" for the device group named "region north".

If no access mapping matches the user access token, the user will get an "access denied" message when trying to log in. This will also happen if there is no access mapping defined causing all users to be unable to log in using SSO.

New rules can be added by clicking **Add access mapping** or **Add inventory roles** at the bottom. An access mapping statement can consist of multiple checks like in the image below. You can add a rule to an existing statement by clicking **and**. Click the Minus button to remove a rule.

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

The user access mapping configuration provides the following options:

* **Use dynamic access mapping only on user creation** - when selected, dynamic access mapping will be used only when a new user logs in to fill in the initial roles. When a user already exists in {{< product-c8y-iot >}}, the roles will not be overwritten nor updated.

* **Roles selected in the rules above will be reassigned to a user on each log in and other ones will be unchanged** - when selected, dynamic access mapping is used on every login, but the roles not listed in the access mapping configuration are not updated. Only the global roles, default applications and device groups that are listed in the defined access mapping rules are overwritten.

* **Roles selected in the rules above will be reassigned to a user on each log in and other ones will be cleared** -The default. Dynamic access mapping assigns user roles, based on the access token, on every user login. It is not possible to change the user roles inside {{< product-c8y-iot >}} as they would be overwritten on the next user login. To change this behavior, select one of the remaining options.

![Custom access mapping](/images/users-guide/Administration/sso-custom-access-mapping-2.png)

Selecting one of the two options mentioned above will also enable admins to edit roles of SSO users in the user management. For details, refer to [Administration > Managing permissions](/users-guide/administration/#attach-global) in the *User guide*.

When a user logs in with an access token, the username can be derived from a JWT claim. The claim name can be configured in the **User ID configuration** window.
The user ID can be set to any top-level field of the authorization token payload sent from the authorization server to the platform during the login process. We recommend you inspect the authorization token in the audit logs to make sure the correct field is used (see [Troubleshooting](#troubleshooting)).

![User ID configuration](/images/users-guide/Administration/sso-custom-userid-config.png)

 If the **Use constant value** checkbox is selected, a constant user ID is used for all users who log in to the {{< product-c8y-iot >}} platform via SSO. This means that all users who log in via SSO share the same user account in the {{< product-c8y-iot >}} platform. Usage of this option is not recommended.

Next, the **User data mappings** can be configured:

![User data mappings](/images/users-guide/Administration/sso-custom-userdata-mapping.png)

On user login, user data like first name, last name, email and phone number can also be derived from JWT claims. Each field represents the claim name that is used to retrieve the data from JWT. The user data mapping configuration is optional and as admin manager you can only use the required fields. If the configuration is empty or the claim name cannot be found in the JWT token then the values in the user data are set as empty.

Mapping for alias is not available because it is not used in the context of SSO login.

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

#### Placeholders
Inside some fields you can use placeholders that are resolved by {{< product-c8y-iot >}} at runtime. Available placeholders are:

|Placeholder|Description|
|:---|:---|
|clientId|Value of the **Client ID** field
|redirectUri| Value of the **Redirect URI** field
|code|Code returned by the authorization server in response to authorization request
|refreshToken| Refresh token returned by the authorization server after token request

These placeholders can be used in authorization requests, token requests, refresh requests and logout request in the fields:

* URL
* Body
* Headers
* Request parameters

To use a placeholder in a field, put it inside two curly brackets preceded with a dollar sign:
![Placeholder standalone](/images/users-guide/Administration/admin-sso-placeholder-standalone.png)

Placeholders can also be used as a part of text:
![Placeholder text](/images/users-guide/Administration/admin-sso-placeholder-text.png)

{{< c8y-admon-info >}}
Placeholders are not validated for correctness. Any not recognized or misspelled placeholder will be left in text unprocessed.
{{< /c8y-admon-info >}}

<a name="configuring-authentication-with-oauth2-access-tokens-from-authorization-servers"></a>
### Configuring authentication with OAuth2 access tokens from authorization servers

You can directly request {{< product-c8y-iot >}} to use access tokens from your authorization server.
This way, your applications or users can access resources without logging in to the platform
or using Basic authentication. This leverages your authorization server to get access tokens for your applications which you can send in subsequent request to
{{< product-c8y-iot >}}. 

{{< c8y-admon-req >}}
This feature requires the following on top of the above requirements:

* Your authorization server must support the OAuth2 client credentials grant type.
* All microservices are built with Microservice Java SDK version 1018.6.0 or higher. For custom-built microservices, refer to [General aspects > Security](/microservice-sdk/concept/#security) in the *Microservice SDK guide*.

{{< /c8y-admon-req >}}

Enable or disable this authentication option in the **External token configuration** section.
![External token disabled](/images/users-guide/Administration/sso-access-token-external-iam-disabled.png)
 
If enabled, this authentication takes precedence over the standard [JWT token authentication](https://{{< domain-c8y >}}/guides/{{< c8y-current-version >}}/reference/rest-implementation/#jwt-token-authentication), which means, for example, that an HTTP request to {{< product-c8y-iot >}} with the header `Authentication: Bearer {{access token}}` assumes that the source of the access token is your authorization server instead of the token being issued by {{< product-c8y-iot >}}.
Configure the user ID or the application ID to any top-level claim in the access token.

![External token user id](/images/users-guide/Administration/sso-access-token-external-iam-user-id-config.png)

{{< product-c8y-iot >}} creates a user wich gets assigned the configured user ID or application ID. Additionally, this user is granted the roles to access to the applications defined in the **Access mapping** section.

{{< c8y-admon-info >}}
If it is set, the configuration allows you to create a {{< product-c8y-iot >}} user representing your applications (the access tokens are obtained via the *client credentials flow*), 
or the users of your authorization server (the access tokens are obtained with the *password grant type*).
{{< /c8y-admon-info >}}

By default, {{< product-c8y-iot >}} verifies that the token is not expired and its signature matches the signature you have configured earlier.
You can strengthen the validation of the token by configuring either an introspection or a user info validation with the necessary credentials.
This way, the platform knows if the access tokens were intentionally invalidated or expired. You cannot access {{< product-c8y-iot >}} resources with an invalidated access token. 

##### Introspection endpoint

{{< product-c8y-iot >}} uses token introspection to verify the validity of the access tokens of your applications. In general, this endpoint can be used for access tokens obtained via the client credentials flow or any other OAuth2 flow.

To configure the introspection, provide an introspection endpoint and a URL-encoded (x-form-urlencoded) body containing the access token, the client ID and the client secret, and an "Authorization" request header.  
{{< product-c8y-iot >}} requests the introspection endpoint of your authorization server to query the status of the access token.
If the token is active, proceed with verifying the token signature.

![External token introspection validation](/images/users-guide/Administration/sso-access-token-external-iam-introspection-validation.png)

You can configure the **Access token validation frequency** to set how often the introspection is performed 
as it may be costly to always call the authorization server for the same access token. The validation status of the token is cached internally for the specified time.
If the token is revoked in the meantime, {{< product-c8y-iot >}} will only be aware during the next validation, that is, the token is still considered until the next validation.
To avoid this, use a frequency. The default value is one minute.

![External token validation interval](/images/users-guide/Administration/sso-access-token-external-iam-validation-interval.png)

##### User info endpoint

The user info request can also be used to check the validity of the access token of your users. 
Unlike introspection, a user info request requires a user context. This means you cannot use it to validate access tokens obtained with the client credentials flow.

![External token userinfo validation](/images/users-guide/Administration/sso-access-token-external-iam-userinfo-validation.png)


{{< c8y-admon-caution >}}
If you use one of the two validation methods, make sure that your authorization server exposes the introspection or the user info endpoint.
{{< /c8y-admon-caution >}}

### Integration with Azure AD

The integration was successfully verified against Azure AD using OAuth2 and OpenID Connect (SAML is not supported). The configuration steps are available in [https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code).

The following steps illustrate how to use Azure AD (Azure Active Directory) for SSO in {{< product-c8y-iot >}}.

{{< c8y-admon-req >}}
You need administrative access to your Azure AD.
{{< /c8y-admon-req >}}

#### Configuring Azure AD

To connect {{< product-c8y-iot >}} to Azure AD, you must create an App registration in Azure AD.  

1. Select **App Registrations** under **Manage** on the left and at the top click **New Registration**.
3. In the resulting window, provide a name for the new App registration.
4. As **Redirect URI type** select "Web" and enter the URL to your tenant OAuth endpoint, for example "https:&#47;/documentation.cumulocity.com/tenant/oauth"*". You can derive this value from your {{< product-c8y-iot >}} tenant. Navigate to **Administration** > **Settings** > **Authentication** > **Single sign-on**. The redirect URL is prefilled by the platform.
5. Click **Register** to create the App registration.

The overview in the details page of your App registration contains several IDs and endpoints that you need later on, like the Application (client) ID and the Directory (tenant) ID (for your tenant in {{< product-c8y-iot >}}).

![App registration overview](/images/users-guide/Administration/admin-AAD-registration.png)

Moreover, the App registration requires a secret which is used by {{< product-c8y-iot >}} for the authentication.  

1. In the details page of your App registration, click **Certificates & secrets** under **Manage** on the left.
2. Select **New client secret**.
3. Enter a description and select an expiry time.
4. Click **Add** to add the secret.  

{{< c8y-admon-caution >}}
- Copy the value of the new secret to another location. It will no longer be visible once you have left the page.
- The secret string must not include a "=" character as this may conflict with the later usage in a URL. If it does, create a new one.  
{{< /c8y-admon-caution >}}

Optionally, create a user in Azure AD that you would like to use with {{< product-c8y-iot >}}.

#### Configuring SSO for Azure AD in Cumulocity IoT

Navigate to **Settings > Authentication** in the Administration application and switch to the **Single sign-on** tab.

Retrieve the relevant information by a GET request to:

<code>https://login.microsoftonline.com/&lt;Directory tenant ID&gt;/.well-known/openid-configuration</code>

The response will look like this:

```
  {
      "token_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/token",
      "token_endpoint_auth_methods_supported": [
          "client_secret_post",
          "private_key_jwt",
          "client_secret_basic"
      ],
      "jwks_uri": "https://login.microsoftonline.com/common/discovery/keys",
      "response_modes_supported": [
          "query",
          "fragment",
          "form_post"
      ],
      "subject_types_supported": [
          "pairwise"
      ],
      "id_token_signing_alg_values_supported": [
          "RS256"
      ],
      "response_types_supported": [
          "code",
          "id_token",
          "code id_token",
          "token id_token",
          "token"
      ],
      "scopes_supported": [
          "openid"
      ],
      "issuer": "https://sts.windows.net/4d17551b-e234-4e18-9593-3fe717102dfa/",
      "microsoft_multi_refresh_token": true,
      "authorization_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/authorize",
      "device_authorization_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/devicecode",
      "http_logout_supported": true,
      "frontchannel_logout_supported": true,
      "end_session_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/logout",
      "claims_supported": [
          "sub",
          "iss",
          "cloud_instance_name",
          "cloud_instance_host_name",
          "cloud_graph_host_name",
          "msgraph_host",
          "aud",
          "exp",
          "iat",
          "auth_time",
          "acr",
          "amr",
          "nonce",
          "email",
          "given_name",
          "family_name",
          "nickname"
      ],
      "check_session_iframe": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/oauth2/checksession",
      "userinfo_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/openid/userinfo",
      "kerberos_endpoint": "https://login.microsoftonline.com/4d17551b-e234-4e18-9593-3fe717102dfa/kerberos",
      "tenant_region_scope": "EU",
      "cloud_instance_name": "microsoftonline.com",
      "cloud_graph_host_name": "graph.windows.net",
      "msgraph_host": "graph.microsoft.com",
      "rbac_url": "https://pas.windows.net"
  }
```


Now enter the following values in the configuration:

|Azure|{{< product-c8y-iot >}} |Value
|:---|:---|:---|
|Login URL; OpenID config; Beginning of token endpoint| Azure AD address|Address of your Azure AD tenant, for example "https:&#47;/login.microsoftonline.com"  
|Home > Overview > Primary Domain| Tenant| &lt;directoryName&gt;.onmicrosoft.com, for example "admtest.onmicrosoft.com"
|OpenID config “issuer”| Token issuer| Token issuer value in form of a HTTP address: "https:&#47;/sts.windows.net/&lt;Directory tenant ID&gt;/". Note that this won´t work without the tailing slash.
|App registration > &lt;app&gt; > Application (client) ID| Application ID| for example "7fd1ed48-f4b6-4362-b0af-2b753bb1af2b"
|Redirect URI| Address of your {{< product-c8y-iot >}} tenant followed by /tenant/oauth
|App registration - &lt;app&gt; > Certificates & secrets > Value | Client secret| Azure AD client secret, for example "hE68Q~uC1.BlSzGJSDC3_UEFvvyIZvRcCxbvV345"
|From OpenID config | Public key discovery URL|"https:&#47;/login.microsoftonline.com/common/discovery/keys" or "https:&#47;/login.microsoftonline.com/<Directory tenant ID>/discovery/keys"

Optionally single logout can be configured:

|Field|Description|
|:---|:---|
|Redirect after logout| Activates single logout by redirecting the user, after logout, to the authorization server logout endpoint
|Redirect URL| Address to redirect the user to after successful logout from the authorization server

After configuring SSO in {{< product-c8y-iot >}}, you can try to login. You might get an "access denied" error, if this user has no access mapping yet. But you should see a "User login" event and a JSON web token in the audit logs (**Administration** > **Accounts** > **Audit logs**).

The content looks like this:

```
{
    "typ": "JWT",
    "alg": "RS256",
    "x5t": "2ZQpJ3UpbjAYXYGaXEJl8lV0TOI",
    "kid": "2ZQpJ3UpbjAYXYGaXEJl8lV0TOI"
} {
    "aud": "7fd1ed48-f4b6-4362-b0af-2b753bb1af2b",
    "iss": "https://sts.windows.net/4d17551b-e234-4e18-9593-3fe717102dfa/",
    "iat": 1660815959,
    "nbf": 1660815959,
    "exp": 1660820080,
    "acr": "1",
    "aio": "ASQA2/8TAAAAg0xPUeu6HKAlgK3vZJsW8TdejlNB3BGSz4XFmJLzPt0=",
    "amr": [
        "pwd"
    ],
    "appid": "7fd1ed48-f4b6-4362-b0af-2b753bb1af2b",
    "appidacr": "1",
    "family_name": "Doe",
    "given_name": "Jane",
    "ipaddr": "51.116.186.93",
    "name": "Jane Doe",
    "oid": "afbff765-592e-4ae1-9334-b968dad59c84",
    "rh": "0.AXkAG1UXTTTiGE6Vkz_nFxAt-kjt0X-29GJDsK8rdTuxryuUAAw.",
    "scp": "openid User.Read User.Read.All User.ReadBasic.All",
    "sub": "zRTnTukAjU11ME1aqiPMOdwk9jVNmInXbeuoUr_3cYk",
    "tid": "4d17551b-e234-4e18-9593-3fe717102dfa",
    "unique_name": "jane@admtest.onmicrosoft.com",
    "upn": "jane@admtest.onmicrosoft.com",
    "uti": "IcTqpKPIA0G_P1Lyw6xBAA",
    "ver": "1.0"
} [
    256 crypto bytes
]
```

You can now use the claims to map user attributes and give permissions in the same way as described in the section on the [custom template](#custom-template).



### Integration with Keycloak

#### Global logout feature (available for Keycloak in version 12.0.0 and higher)

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

#### Logout all users feature

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

#### Troubleshooting

It can be particularly helpful to inspect the content of the authorization token sent to the platform as some of its fields contain the information required for the correct configuration described above.

In Administration application, after clicking on **Accounts** > **Audit logs** you can filter by the category "Single sign-on" and look for entries "Json web token claims".

The contexts of the token will be presented in JSON format.

![Audit token content](/images/users-guide/Administration/admin-sso-audit-token.png)

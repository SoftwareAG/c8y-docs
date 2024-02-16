---
weight: 30
title: Custom template configuration
layout: redirect
section:
  - platform_administration
---

On the **Single sign-on** tab in the **Authentication** page, select "custom" (the default) as template to configure a connection with any authorization server using OAuth2 authorization code grant.

As the OAuth protocol is based on the execution of HTTP requests and redirects, a generic request configuration is provided.

![Custom authorization request](/images/users-guide/Administration/sso-custom-authorization-request.png)

### To configure a connection {#to-configure-a-connection}

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
|Visible on Login screen|Indicates whether the login option is enabled or not

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

New roles are added to the user from every matching access mapping. If one access mapping statement assigns the role "admin" and a second one assigns the role "business" and both meet the defined conditions, then the user will be granted access to the global roles "business" and "admin".

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

Selecting one of the two options mentioned above will also enable admins to edit roles of SSO users in the user management. For details, refer to [Managing permissions](/standard-tenant/managing-permissions/#assign-global-roles).

When a user logs in with an access token, the username can be derived from a JWT claim. The claim name can be configured in the **User ID configuration** window.
The user ID can be set to any top-level field of the authorization token payload sent from the authorization server to the platform during the login process. We recommend you inspect the authorization token in the audit logs to make sure the correct field is used (see [Troubleshooting](#troubleshooting)).

![User ID configuration](/images/users-guide/Administration/sso-custom-userid-config.png)

 If the **Use constant value** checkbox is selected, a constant user ID is used for all users who log in to the {{< product-c8y-iot >}} platform via SSO. This means that all users who log in via SSO share the same user account in the {{< product-c8y-iot >}} platform. Usage of this option is not recommended.

Next, the **User data mappings** can be configured:

![User data mappings](/images/users-guide/Administration/sso-custom-userdata-mapping.png)

On user login, user data like first name, last name, email and phone number can also be derived from JWT claims. Each field represents the claim name that is used to retrieve the data from JWT. The user data mapping configuration is optional and as admin manager you can only use the required fields. If the configuration is empty or the claim name cannot be found in the JWT token then the values in the user data are set as empty.

Mapping for alias is not available because it is not used in the context of SSO login.

Each access token is signed by a signing certificate. The following options are available to configure the signing certificates.

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

### Placeholders {#placeholders}
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

---
weight: 40
title: Customizing your platform
layout: redirect
aliases:
  - /users-guide/enterprise-edition/#customization
---

With the {{< enterprise-tenant >}} of {{< product-c8y-iot >}}, you can customize your platform in various aspects and according to your requirements.

Apart from various [configuration](#configuration) settings, you can use your individual [branding](#branding) and your individual [domain name](#domain-name).

Click **{{< enterprise-tenant >}}** in the **Settings** menu to access these settings.

![Custom settings](/images/users-guide/enterprise-tenant/et-custom-settings.png)

<a name="configuration"></a>
### Configuration

{{< c8y-admon-info >}}
In some of the properties you can configure email templates for various purposes. Be aware that the corresponding emails are send with "text/html" as content type.
{{< /c8y-admon-info >}}

The following placeholders can be found in the **Configuration** tab:

|Placeholder|Description|
|:---|:---|
|{host}|The value of this placeholder is "https://" + "&lt;&lt;tenantId&gt;&gt;" + "&lt;&lt;base-domain&gt;&gt;". For example, if "tenantId" is auto-generated, the host will be `https://t12345678.{{< domain-c8y >}}`.
|{tenant-domain}|This is the location in which a tenant can be accessed. It is equal to "https://" + "&lt;&lt;tenantDomainName&gt;&gt;". For example, {tenant-domain} can be `https://myTenant.{{< domain-c8y >}}`. In case of an {{< enterprise-tenant >}}, the {tenantDomain} placeholders can have different values. An example tenant domain is `https://myTenant.myhost.com`.
|{token}|An automatically generated system token for password reset purposes. When a user requests a password reset, a new random token will be generated. This token will be associated only with the particular user and will allow for a single password reset action. The standard way of using this placeholder is along with the {tenant-domain} property as "{tenant-domain}?token={token}".
|{email}|This placeholder will be replaced with the email address of the recipient user as stored in the user settings. Some views in the UI recognize this parameter and prefill the respective field with this value, for example, during the process of password reset.

#### Two-factor authentication

Under **Two-factor authentication**, you can change the SMS template which is sent to the users.

![TFA configuration](/images/users-guide/enterprise-tenant/et-configuration-tfa.png)

#### Support link

In the **Support link** section, you can enter a URL to be used to link to a support page. If you do not provide a link here, the default link to the {{< sag-dev-community >}} page will be used.

![Support link configuration](/images/users-guide/enterprise-tenant/et-configuration-support-link.png)

Enter "false" to hide the link.

#### Password reset

In the **Password reset** section you can change all settings related to password reset email templates.

![Configuration menu1](/images/users-guide/Administration/admin-settings-configuration-password-reset.png)

At the top you can select if you want to allow sending emails to unknown email addresses.

In the **Password reset email template** fields, provide an email template to be used when the address is known and one to be used when the address is unknown. The link to reset the password might for example be: {tenant-domain}/apps/devicemanagement/index.html?token={token}&email={email}.

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

In the **Storage limit** section, you can specify the email subject and email template for emails being send *before* data is removed on exceeding the storage limit (warning) and *after* data removal is performed (limit exceeded).

![Storage limit settings](/images/users-guide/Administration/admin-settings-configuration-storage-limit.png)

#### Suspending tenants

In the **Suspending tenants** section, you can provide settings for emails being send on tenant suspension.

<img src="/images/users-guide/Administration/admin-settings-configuration-suspending-tenants.png" alt="Suspended tenants">

At the top you can select if you want to send the email to the suspended tenant's administrator and specify an additional email receiver. Below you set the subject and template for the tenant suspended email.

Click **Save configuration** at the bottom to save your settings.

{{< c8y-admon-info >}}
Some additional configuration settings can be specified globally in the {{< management-tenant >}}, see [Administration > Platform configuration settings](/users-guide/administration/#platform-configuration-settings).
{{< /c8y-admon-info >}}

<a name="branding"></a>
### Branding

With the Branding feature, you can fully customize the look of your tenant to your own preferences.

In the **Branding** tab, you can configure various parameters like logos, colors  and font types used throughout the platform.

The [parameters](#configuration-parameters) are configured at the left side of the tab while at the right you can immediately see your selections applied to a preview extract.

<img src="/images/users-guide/enterprise-tenant/et-branding.png" alt="Branding tab">

For a more detailed preview of your settings, click **Open preview** in the top menu bar to check the look and feel of your branding settings in the overall platform. You may interact and even switch applications in the preview. Every change that you make in the **Branding** tab will immediately be applied to the **Preview** page.

<img src="/images/users-guide/enterprise-tenant/et-branding-preview.png" alt="Branding tab">

When you are done or want to store your settings, click **Save** at the bottom of the **Configuration** section to save your branding settings to your tenant.

Saving the settings will not yet apply them to the current tenant and respective subtenants. To do so, click **Apply** in the top menu bar.

Click **Reset** in the top menu bar to reset the branding of the current tenant and its subtenants to the default settings. The custom settings will still be saved but are no longer applied.

<a name="configuration-parameters"></a>
#### Configuration parameters

In the Configuration section, the following branding parameters can be configured.

**General**

Under **General**, you can edit the title which will be used in the browser tab.

**Main logo**

Under **Main logo**, specify the following items:

* The favicon, which will be displayed in the browser's address bar. Click **Choose file** to select a file from your file system. The supported favicon format is "ico".
* Your branding logo, which will be shown during application loading. Click **Choose file** to select a file from your file system. The supported formats are "png" and "svg".
* The brand logo height.

**Navigator logo**

Under **Navigator logo** you can provide the navigator logo and set the navigator logo height located on top of the navigator panel.

**Font**

In the **Font** section you specify the font settings for your branded version.

You can select your base and headings font stack, and select an option for the navigator font stack (either same as base or same as headings font). You may also add a link to existing remote fonts to be used.

**Colors**

In the **Colors** section you specify the colors to be used in your branding version.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Main brand color.
* Secondary brand color. The default value is "#07b91A".
* Dark brand color. Mainly used for two-color icons. The default value is "#0B385B".
* Light brand color. Mainly used for two-color icons. The default value is "#5FAEEC".
* Text color. The default value is "#444".
* Link color. The default value is the same as the main brand color.
* Main background color. The default value for this item is "#FAFAFA".

**Top bar**

In the **Top bar** section you specify the parameters for the top bar.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Background color. The default value is "#FFFFF".
* Text color. The default value is "49595B".
* Button hover text color. The default value is the main brand color.

**Navigator**

In the **Navigator** section you specify the parameters for the navigator.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Background color. The default value is "2c3637".
* Logo wrapper background color. The default value is "Transparent".
* Title color. The default value is "FFFFF".
* Text and buttons color. The default value is "#FAFAFA".
* Separator line color. The default value is "#FAFAFA".
* Text color of the current item in the navigator. The default value is "#FAFAFA".
* Background color of the current item in the navigator with the main brand color as default.

**Misc**

In the **Misc** section you specify the "Button Border-Radius" by providing a value in pixel (px).

**Cookie banner**

In the **Cookie banner** section you specify the settings for the banner with the cookie usage information. If not disabled here, the banner is shown for all users of the current tenant and all subtenants until a user clicks **Agree and proceed**.

Disabling the cookie banner, also disables the product experience tracking by Gainsight for the current tenant and all subtenants.

The following parameters can be specified:

* Title - Cookie banner title.
* Text - Cookie banner text with a general statement on the cookie usage and the use cases for it.
* Link to privacy policy - A link to the page with the privacy policy.

<a name="domain-name"></a>
### Domain name

A key feature of the {{< enterprise-tenant >}} is the ability to operate the {{< product-c8y-iot >}} platform using a custom domain name. This
means that you can configure the platform to serve you and your customers using a host name of choice, for example *.iot.mycompany.com rather than the default URL of {{< product-c8y-iot >}}. In addition you'll be able to create subtenants
using your domain. These will be using **\<subtenantName\>.iot.mycompany.com** as their host names.

{{< c8y-admon-info >}}
The custom domain name functionality is only available for {{< product-c8y-iot >}} cloud installations or on-prem installations which don't use a custom load balancer.
{{< /c8y-admon-info >}}

There are three prerequisites for using a custom domain:

1. To activate your domain, a valid license that covers your wildcard domain is required.
   Please contact [product support](/welcome/contacting-support/) to install a license for your domain.
2. You've obtained a valid wildcard SSL certificate for your IoT domain, for
   example a certificate for *\*.iot.mycompany.com*.
3. There is a valid DNS configuration for your domain which ensures that all requests to *\*.iot.mycompany.com* are
   routed to {{< product-c8y-iot >}}. (see below).

#### SSL certificate requirements

The following criteria must be met by any SSL certificate to be used with the {{< enterprise-tenant >}} feature:

* The certificate is currently valid and has not expired. More specifically, validFrom points to a point in time in the
  past, and validTo to a point in the future.
* The certificate has been issued by a well-established certificate authority (CA). Self-signed certificates are
  explicitly not supported.
* The certificate is a wildcard certificate issued for your domain *\*.iot.mycompany.com*. The use of a wildcard
  certificate is mandatory, as it will also be used for subdomains created from your {{< enterprise-tenant >}}.
* Every single certificate in the chain is provided using the X509 format.
* The common name (CN) in the subject of the primary certificate (the first one in the chain) holds the value of your
  wildcard domain name, for example, "CN=\*.iot.mycompany.com".

{{< product-c8y-iot >}} supports a single certificate that is signed by the root CA, as well as a full chain certificate which
contains one or more intermediate certificates.

#### Packaging the SSL certificate in PKCS #12

In order to use an SSL certificate with {{< product-c8y-iot >}}, the certificate together with its private key must be uploaded to
the platform in a single file, using the PKCS #12 file format.

Most certificate authorities deliver their certificates and corresponding private keys in the PEM file format, using two
separate text files for the certificate chain and the private key. Make sure that the private key is not
protected with a password/passphrase.

Such PEM files can easily be repackaged into #PKCS #12 using [OpenSSL](https://www.openssl.org/). In the following
example, OpenSSL is used to combine a certificate chain (*chain.cert*) and the corresponding key (*privkey.pem*) into a
PKCS #12 keystore file (*out_keystore.p12*) that can be used with {{< product-c8y-iot >}}.

```shell
openssl pkcs12 -export -out out_keystore.p12 -inkey privkey.pem -in cert.pem -certfile chain.pem
```

#### DNS requirements for enterprise domains

The DNS entries for your custom domain must be configured in a way that all requests are routed to the {{< product-c8y-iot >}} platform.

We **strongly recommend** you to use a wildcard CNAME entry for this purpose. The CNAME needs to contain your wildcard
domain from the certificate in the NAME field. The VALUE field of the CNAME entry must point to the hostname of {{< product-c8y-iot >}}. This target hostname can be easily determined by looking at your current tenant URL. If your tenant URL
is *http://mytenant.{{< domain-c8y >}}*, the target hostname is *{{< domain-c8y >}}*. Please also make sure to delete any
conflicting A entries.

**Example:**

If you want to use **.iot.mycompany.com* for your enterprise subtenants and if you're using the {{< product-c8y-iot >}} at *{{< domain-c8y >}}*, the following CNAME entry must be added to your DNS zone:

```shell
NAME                  TYPE   VALUE
----------------------------------------------------
*.iot.mycompany.com.   CNAME  {{< domain-c8y >}}.
```

We highly discourage any use of alternative DNS configurations for the following reasons:

- *Wildcard A entries* take the IP address of the platform in the value field and hence redirect all requests based on
  the given IP rather than a hostname. This results in major problems if the IP address of the IoT platform should
  change in the future.
- *Singular A entries or singular CNAME entries* instead of DNS wild cards require a single DNS entry for each
  enterprise domain being created. This is very error prone and prevents the creation of subtenants without always
  tampering with DNS settings.

#### Uploading the certificate and activating your domain

Once the DNS configuration is in place and if a certificate with the given requirements is available, it can be easily
uploaded to the platform.

<img src="/images/users-guide/enterprise-tenant/et-domain-name.png" alt="Domain name">


Afterwards, you can activate the domain with a single click. After the domain has been activated, you will be redirected
to your {{< enterprise-tenant >}} using the new domain name. You will also receive an email with information about the
activation. Note that your {{< management-tenant >}} domain name is static, for example, if your wildcard domain is "*
.iot.mycompany.com" then your {{< management-tenant >}} domain will be "management.iot.mycompany.com".

{{< c8y-admon-info >}}
After the activation is completed you will no longer be able to access your tenant with the {{< product-c8y-iot >}} domain name. Instead, use your custom domain name.
{{< /c8y-admon-info >}}

#### Updating your certificate

When your certificate expires, you must update your certificate with a new one with an extended validation period. When updating a certificate, you must make sure that

* the certificate is valid, like when being uploaded for the first time,
* the certificate is currently valid (validFrom in the past and validTo in the future),
* the certificate has exactly the same common name (domain name) as the currently active certificate.

{{< c8y-admon-info >}}
Keep in mind that after replacing the certificate it may take some minutes until the new certificate has been delivered to the users/browsers.
{{< /c8y-admon-info >}}


#### Deactivating your certificate

If you wish to return to your old domain at {{< product-c8y-iot >}}, you can simply deactivate you certificate.

{{< c8y-admon-important >}}
Use with care. Your customers will not be able to access their subtenants anymore.
{{< /c8y-admon-important >}}

#### Troubleshooting

In case you cannot reach {{< product-c8y-iot >}} using your custom domain, we recommend you to perform the following checks to verify your DNS setup.

**Check if the DNS entry is correct**

Execute the following command:

```shell
host management.<your domain name>
```

The following result should be returned:

```shell
management.<your domain name> is an alias for <instance domain name>
<instance domain name> has address <ip address>
```


**Check if the API is responding**

Execute the following command:

```shell
curl -v -u '<tenant ID>/<your user>:<your password>' --head http://management.<your domain name>/inventory/managedObjects
```

The following result should be returned:

```shell
...
HTTP/1.1 200 OK
...
```


{{< c8y-admon-info >}}
Keep in mind that after changing the DNS entry it might take up to 24 hours until the new entry has been propagated.
{{< /c8y-admon-info >}}

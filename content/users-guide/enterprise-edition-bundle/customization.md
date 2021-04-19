---
weight: 40
title: Customizing your platform
layout: redirect
---

Using the Enterprise Tenant of Cumulocity IoT, you can customize your platform according to your wishes and requirements.

In the **Settings** menu, you may specify various customization settings.

### <a name="configuration"></a>Configuration

>**Info:** For information on the general settings in the **Customization** tab, see [Changing Settings > Configuration settings](/users-guide/administration/#config-platform) in the Administration section. Here, only the features will be explained which are exclusively available for Enterprise Tenants.

#### Applications

In the **Applications** section, you can specify the default applications for new tenants as a comma-separated list.

![Applications settings](/images/users-guide/enterprise-tenant/et-settings-configuration-applications.png)

#### Passwords

In the **Passwords** section, you can specify password settings like default strength, length or validity for the users in your tenant.

![Passwords settings](/images/users-guide/enterprise-tenant/et-settings-configuration-passwords.png)

#### Support user

In the **Support user** section, you configure the parameters for the support user activation for subtenant users.

With the support user feature, support users (i.e. users with specific permissions in the management tenant) can access subtenant users in case of any issues. Refer to [Support user access](/users-guide/enterprise-edition#users-in-other-tenants) for more information.

<img src="/images/users-guide/enterprise-tenant/et-settings-configuration-support-user.png" alt="Support user configuration">

In the field **Activate support user**, specify if support user access is enabled for subtenant users. Possible values you can enter here are:

* *true*: Support user access is activated. If support user access is activated, support users can log into any subtenant as any user, unless overridden on subtenant level. Subtenant users cannot disable access themselves.
* *false*: Support user access is deactivated. If support user access is deactivated, support users can log in only to subtenants for which at least one user has explicitly enabled such access.
* An explicit date in date-time format, until when support user activation should remain enabled. If no date is specified the value is set to "No Limit".

In the **Validity limit** field, you can optionally specify the support duration, i.e. for how many hours support user access will be prolonged after each support user request from a subtenant user. Enter a number specifying the number of hours. The default value is 24 hours.

The expiry date-time will be updated based on the duration specified in the **Validity limit** field, e.g. if the current expiry date-time is 01/09/2018 15:00 and duration has been kept at 24 hours, the enabling support user will update the expiry date to 01/10/2018 15:00.

Details on the status of support requests and support user access for a tenant can be found in the **Properties** tab of the tenant, see [Managing tenants](/users-guide/enterprise-edition#managing-tenants).

### <a name="branding"></a>Branding

With the Branding feature, you can fully customize the look of your tenant to your own preferences.

In the **Branding** tab, you can configure various parameters like logos, colors  and font types used throughout the platform.

The [parameters](#configuration-parameters) are configured on the left side of the tab while on the right you can immediately see your selections applied to a preview extract.

<img src="/images/users-guide/enterprise-tenant/et-branding.png" alt="Branding tab">

For a more detailed preview of your settings, click **Open preview** in the top menu bar to check the look and feel of your branding settings in the overall platform. You may interact and even switch applications in the preview. Every change that you make in the **Branding** tab will immediately be applied to the **Preview** page.

<img src="/images/users-guide/enterprise-tenant/et-branding-preview.png" alt="Branding tab">

When you are done or want to store your settings, click **Save** at the bottom of the **Configuration** section to save your branding settings to your tenant.

Saving the settings will not yet apply them to the current tenant and respective subtenants. To do so, click **Apply** in the top menu bar.

Click **Reset** in the top menu bar to reset the branding of the current tenant and its subtenants to the default settings. The custom settings will still be saved but are no longer applied.

#### <a name="configuration-parameters"></a>Configuration parameters

In the Configuration section, the following branding parameters can be configured.

**General**

Under **General**, you can edit the title which will be used in the browser tab.

**Main logo**

Under **Main logo**, specify the following items:

* The favicon, which will be displayed in the browser’s address bar. Click **Choose file** to select a file from your computer. The supported favicon format is “ico”.
* Your branding logo, which will be shown during application loading. Click **Choose file** to select a file from your computer. The supported formats are “png” and “svg”.
* The brand logo height.

**Navigator logo**

Under **Navigator logo** you can provide the navigator logo and set the navigator logo height located on top of the navigator panel.

**Type**

In the **Type** section you specify the font settings for your branded version.

You can choose your base and headings font, and select an option for the navigator font (either same as base or same as headings font). You may also add a link to existing remote fonts to be used.

**Colors**

In the **Colors** section you specify the colors to be used in your branding version.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Main brand color.
* Secondary brand color. The default value is “#07b91A”.
* Dark brand color. Mainly used for two-color icons. The default value is "#0B385B".
* Light brand color. Mainly used for two-color icons. The default value is "#5FAEEC".
* Text color. The default value is “#444”.
* Link color. The default value is the same as the main brand color.
* Main background color. The default value for this item is “#FAFAFA”.

**Top bar**

In the **Top bar** section you specify the parameters for the top bar.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Background color. The default value is “#FFFFF”.
* Text color. The default value is “49595B”.
* Button hover text color. The default value is the main brand color.

**Navigator**

In the **Navigator** section you specify the parameters for the navigator.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Background color. The default value is “2c3637”.
* Logo wrapper background color. The default value is “Transparent”.
* Title color. The default value is “FFFFF”.
* Text and buttons color. The default value is “#FAFAFA”.
* Separator line color. The default value is “#FAFAFA”.
* Text color of the current item in the navigator. The default value is “#FAFAFA”.
* Background color of the current item in the navigator with the main brand color as default.

**Misc**

In the **Misc** section you may specify the “Button Border-Radius” by providing a value in pixel (px).

**Cookie banner**

In the **Cookie banner** section you specify the settings for the banner with the cookie usage information. The banner is shown for all users of the current tenant and subtenants until a user clicks **Agree and proceed**.

The following parameters can be specified:

* Title. Cookie banner title.
* Text. Cookie banner text with a general statement on the cookie usage and the use cases for it.
* Link to privacy policy. A link to the page with the privacy policy.

### <a name="domain-name"></a>Domain name

A key feature of the Enterprise tenant is the ability to operate the Cumulocity IoT platform using a custom domain name. This
means that you can configure the platform to serve you and your customers using a host name of choice, for example *.iot.mycompany.com rather than the default URL of Cumulocity IoT. In addition you'll be able to create subtenants
using your domain. These will be using **\<subtenantName\>.iot.mycompany.com** as their host names.

> **Info:** The custom domain name functionality is only available for Cumulocity IoT cloud installations or On-Premise installations which don't use a custom load balancer.

There are three prerequisites for using a custom domain:

1. To activate your domain, a valid license that covers your wildcard domain is required.
   Please contact [product support](/about-doc/contacting-support) to install a license for your domain.
2. You've obtained a valid wildcard SSL certificate your IoT domain, for
   example a certificate for *\*.iot.mycompany.com*.
3. There is a valid DNS configuration for your domain which ensures that all requests to *\*.iot.mycompany.com* are
   routed to Cumulocity IoT. (see below).

#### SSL certificate requirements

The following criteria have to be met by any SSL certificate to be used with the Enterprise tenant feature:

* The certificate is currently valid and has not expired. More specifically, validFrom points to a point in time in the
  past, and validTo to a point in the future.
* The certificate has been issued by a well-established certificate authority (CA). Self-signed certificates are
  explicitly not supported.
* The certificate is a wildcard certificate issued for your domain *\*.iot.mycompany.com*. The use of a wildcard
  certificate is mandatory, as it will also be used for subdomains created from your Enterprise tenant.
* Every single certificate in the chain is provided using the X509 format.
* The common name (CN) in the subject of the primary certificate (the first one in the chain) holds the value of your
  wildcard domain name, e.g. "CN=\*.iot.mycompany.com".

Cumulocity IoT supports a single certificate that is signed by the root CA, as well as a full chain certificate which
contains one or more intermediate certificates.

#### Packaging the SSL certificate in PKCS #12

In order to use a SSL certificate with Cumulocity IoT, the certificate together with its private key have to be uploaded to
the platform in a single file, using the PKCS #12 file format.

Most certificate authorities deliver their certificates and corresponding private keys in the PEM file format, using two
separate text files for the certificate chain and the private key. Make sure that the private key is not
protected with a password/passphrase.

Such PEM files can easily be repackaged into #PKCS #12 using [OpenSSL](https://www.openssl.org/). In the following
example, OpenSSL is used to combine a certificate chain (*chain.cert*) and the corresponding key (*privkey.pem*) into a
PKCS #12 keystore file (*out_keystore.p12*) that can be used with Cumulocity IoT.

```shell
openssl pkcs12 -export -out out_keystore.p12 -inkey privkey.pem -in cert.pem -certfile chain.pem
```

#### DNS requirements for enterprise domains

The DNS entries for your custom domain have to be configured in a way that all requests are routed to the Cumulocity IoT platform.

We **strongly recommend** you to use a wildcard CNAME entry for this purpose. The CNAME needs to contain your wildcard
domain from the certificate in the NAME field. The VALUE field of the CNAME entry has to point to the hostname of Cumulocity IoT. This target hostname can be easily determined by looking at your current tenant URL. If your tenant URL
is *http://mytenant.cumulocity.com*, the target hostname is *cumulocity.com*. Please also make sure to delete any
conflicting A entries.

**Example:**

If you want to use **.iot.mycompany.com* for your enterprise subtenants and if you're using the Cumululocity IoT at *cumulocity.com*, the following CNAME entry has to be added to your DNS zone:

```shell
NAME                  TYPE   VALUE
----------------------------------------------------
*.iot.mycompany.com.   CNAME  cumulocity.com.
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
to your enterprise tenant using the new domain name. You will also receive an email with information about the
activation. Note that your management tenant domain name is static, for example, if your wildcard domain is "*
.iot.mycompany.com" then your management tenant domain will be "management.iot.mycompany.com".

> **Info:** After the activation is completed you will no longer be able to access your tenant with the Cumulocity IoT domain name. Instead, use your custom domain name.

#### Updating your certificate

When your certificate expires, you must update your certificate with a new one with an extended validation period. When updating a certificate, you need to make sure that

* the certificate is valid, like when being uploaded for the first time,
* the certificate is currently valid (validFrom in the past and validTo in the future),
* the certificate has exactly the same common name (domain name) as the currently active certificate.

>**Info:** Keep in mind that after replacing the certificate it may take some minutes until the new certificate has been delivered to the users/browsers.


#### Deactivating your certificate

If you wish to return to your old domain at Cumulocity IoT, you can simply deactivate you certificate.

>**Important:** Use with care. Your customers will not be able to access their subtenants anymore.

#### Troubleshooting

In case you cannot reach Cumulocity IoT using your custom domain, we recommend you to perform the following checks to verify your DNS setup.

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


>**Info:** Keep in mind that after changing the DNS entry it might take up to 24 hours until the new entry has been propagated.
>

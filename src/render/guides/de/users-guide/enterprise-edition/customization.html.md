---
order: 40
title: Customizing your platform
layout: redirect
---

In the "Enterprise edition" page under the "Settings" menu you can specify settings for the customization of your platform.

### <a name="branding"></a>Branding

In the "Branding" tab you can fully customize the look of your tenants to your own preferences. 

The branding feature allows you to edit the logos and colors used throughout the platform. Once your branding settings are saved, all subtenants are automatically updated. 

<img src="/guides/images/users-guide/administration/admin_Branding.png" alt="Branding tab" style="max-width: 100%">

**General**

In the “General” section you can edit the “Title” which will be used in the browser tab. 

**Main logo**

Under “Main logo”, specify the following items:

* The “Favicon”, which will be displayed in the browser’s address bar. Click **Choose file** to select a file from your computer. The supported favicon format is “ico”.
* Your branding logo, which will be shown during application loading. Click **Choose file** to select a file from your computer. The supported formats are “png” and “svg”.
* The “Brand logo height”.

**Navigator logo**

Under “Navigator logo” you can provide the “Navigator logo” and set the “Navigator logo height” located on top of the navigator panel.

**Type**

In the “Type” section you specify the font settings for your branded version. 

<img src="/guides/images/users-guide/administration/admin_BrandingType.png" alt="Branding type" style="max-width: 100%">

You can choose your base and headings font, and select an option for the navigator font (either same as base or same as headings font). You may also add a link to existing remote fonts to be used.

**Colors**

In the “Colors” section you specify the colors to be used in your branding version.

<img src="/guides/images/users-guide/administration/admin_BrandingColor.png" alt="Branding color" style="max-width: 100%">

The following parameters can be specified by providing a hex, rgb or rgba value:

* “Main brand color”.
* “Secondary brand color”. The default value is “#07b91A”.
* “Text color”. The default value is “#444”.
* “Link color”. The default value is the same as the main brand color.
* “Main background color”. The default value for this item is “#FAFAFA”.

**Top bar**

In the “Top bar” section you specify the parameters for the top bar.

<img src="/guides/images/users-guide/administration/admin_BrandingTopbar.png" alt="Branding topbar" style="max-width: 100%">

The following parameters can be specified by providing a hex, rgb or rgba value:

* “Background color”. The default value is “#FFFFF”.
* “Text color”. The default value is “49595B”.
* “Button hover text color”. The default value is the main brand color.

**Navigator**

In the “Navigator" section you specify the parameters for the navigator.

<img src="/guides/images/users-guide/administration/admin_BrandingTopbar.png" alt="Branding top bar" style="max-width: 100%">

The following parameters can be specified by providing a hex, rgb or rgba value:

* “Background color”. The default value is “2c3637”.
* "Logo wrapper background color". The default value is “Transparent”.
* “Title color”. The default value is “FFFFF”.
* “Text and buttons color”. The default value is “#FAFAFA”.
* “Separator line color”. The default value is “#FAFAFA”.
* “Text color” of the current item in the navigator. The default value is “#FAFAFA”.
* “Background color” of the current item in the navigator with the main brand color as default.

**Misc**

In the “Misc” section you may specify the “Button Border-Radius” by providing a value in pixel (px).

Click **Save** to save your settings.

Click **Preview** in the top menu bar to preview the new branding.

Click **Generate** in the top menu bar to apply your new branding.

The following image shows and an example where

* the “Main brand color” is purple,
* the “Secondary brand color” is white,
* the “Main background color” is blue,
* the top bar “Background color” is green,
* the navigator “Background color” is pink. 

<img src="/guides/images/users-guide/administration/admin_BrandingColored.png" alt="Branding example" style="max-width: 100%">

### <a name="domain-name"></a>Domain name

In the “Domain name” tab you can activate your own custom domain name.  

<img src="/guides/images/users-guide/administration/admin_DomainName.png" alt="Domain name" style="max-width: 100%">

First you have to upload the appropriate certificate by clicking **Upload Certificate**. Make sure that

* the certificate is in a valid PKCS#12 format,
* the certificate is not password protected,
* you are using a wildcard certificate to enable creation of subtenants.

Before activating the custom domain name, make sure that

* you have uploaded a valid SSL certificate for your custom domain,
* the common name (domain name) is not used by any other tenant,
* the certificate is currently valid (validFrom in the past and validTo in the future),
* you have configured the DNS A entry for the domain to point to the IP address of your DNS server.

After successful activation you will be redirected to your enterprise tenant at the new domain. You will also receive an email with information about the activation.

>**Info**: After the activation is completed you will no longer be able to access your tenant with the cumulocity domain name. Instead, use your custom domain name.


**Updating your certificate**

When your certificate expires, you must update your certificate with a new one with an extended validation period. When updating a certificate, you need to make sure that

* the certificate is in a valid PKCS#12 format,
* the certificate is not password protected,
* the certificate is currently valid (validFrom in the past and validTo in the future),
* the certificate has exactly the same common name (domain name) as the currently active certificate,
* you have configured the DNS A entry for the domain to point to the IP address of your DNS server.


**Deactivating your certificate**

If you wish to return to your old domain at Cumulocity, you can simply deactivate you certificate. 

>**Important**: Use with care. Your customers will not be able to access their subtenants anymore.

## <a name="config-platform"></a>Configuration settings

In the "Configuration" tab of the "Enterprise Edition" page you can configure system-wide properties in Cumulocity. The following options can be modified in the "Configuration" settings.

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

<img src="/guides/images/users-guide/administration/admin_ConfigurationServer.png" alt="Configure e-mail server" style="max-width: 100%">

In the "Data export" section you can set the e-mail subject and e-mail template for data export and specify the “User unauthorized error message”.

![Configuration menu1](/guides/images/users-guide/configuration_tab4.png)

In the "Storage limit" section you can specify the e-mail subject and e-mail template for emails being send *before* data is removed on exceeding the storage limit and *after* data removal is performed.

In the "Suspending tenants" section you can provide settings for emails being send on tenant suspension. 

<img src="/guides/images/users-guide/administration/admin_ConfigurationSuspended.png" alt="Suspended tenants" style="max-width: 100%">

At the top you can select if you want to send the e-mail to the suspended tenant's administrator and specify an additional e-mail receiver. Below you set the subject and template for the tenant suspended e-mail.

Click **Save configuration** to save your settings.

>**Info**: Additional features are available for "Management" tenants.


---
order: 40
title: Customizing your platform
layout: redirect
---

In an Enterprise Edition installation under the **Settings** menu you can specify settings for the customization of your platform.

**Info**: For information on the settings in the **Configuration** tab refer to [Changing Settings > Configuration settings](/guides/users-guide/administration/#config-platform) in the Administration section.

### <a name="branding"></a>Branding

With the Branding feature, you can fully customize the look of your tenant to your own preferences. 

In the **Branding** tab, you can configure various parameters like logos, colors  and font types used throughout the platform. 

The [parameters](#configuration-parameters) are configured on the left side of the tab while on the right you can immediately see your selections applied to a preview extract.

<img src="/guides/images/users-guide/Administration/admin-branding.png" alt="Branding tab" style="max-width: 100%">

For a more detailed preview of your settings, click **Open preview** in the top menu bar to check the look and feel of your branding settings in the overall platform. You may interact and even switch applications in the preview. Every change that you make in the **Branding** tab will immediately be applied to the **Preview** page.

<img src="/guides/images/users-guide/Administration/admin-branding-preview.png" alt="Branding tab" style="max-width: 100%">

When you are done or want to store your settings, click **Save** at the bottom of the **Configuration** section to save your branding settings to your tenant.

Saving the settings will not yet apply the settings to the subtenants. To do so, click **Apply** in the top menu bar.

#### <a name="configuration-parameters"></a>Configuration parameters

In the Configuration section, the following branding parameters can be configured.

**General**

Under **General**, you can edit the title which will be used in the browser tab. 

<img src="/guides/images/users-guide/Administration/admin-branding-general.png" alt="Branding general" style="max-width: 50%">

**Main logo**

Under **Main logo**, specify the following items:

* The favicon, which will be displayed in the browser’s address bar. Click **Choose file** to select a file from your computer. The supported favicon format is “ico”.
* Your branding logo, which will be shown during application loading. Click **Choose file** to select a file from your computer. The supported formats are “png” and “svg”.
* The brand logo height.

**Navigator logo**

Under **Navigator logo** you can provide the navigator logo and set the navigator logo height located on top of the navigator panel.

<img src="/guides/images/users-guide/Administration/admin-branding-general.png" alt="Branding general" style="max-width: 50%">


**Type**

In the **Type** section you specify the font settings for your branded version. 

<img src="/guides/images/users-guide/Administration/admin-branding-type.png" alt="Branding type" style="max-width: 50%">

You can choose your base and headings font, and select an option for the navigator font (either same as base or same as headings font). You may also add a link to existing remote fonts to be used.

**Colors**

In the **Colors** section you specify the colors to be used in your branding version.

<img src="/guides/images/users-guide/Administration/admin-branding-color.png" alt="Branding color" style="max-width: 50%">

The following parameters can be specified by providing a hex, rgb or rgba value:

* Main brand color.
* Secondary brand color. The default value is “#07b91A”.
* Dark brand color.
* Light brand color.
* Text color. The default value is “#444”.
* Link color. The default value is the same as the main brand color.
* Main background color. The default value for this item is “#FAFAFA”.

**Top bar**

In the **Top bar** section you specify the parameters for the top bar.

<img src="/guides/images/users-guide/Administration/admin-branding-topbar.png" alt="Branding topbar" style="max-width: 50%">

The following parameters can be specified by providing a hex, rgb or rgba value:

* Background color. The default value is “#FFFFF”.
* Text color. The default value is “49595B”.
* Button hover text color. The default value is the main brand color.

**Navigator**

In the **Navigator** section you specify the parameters for the navigator.

<img src="/guides/images/users-guide/Administration/admin-branding-navigator.png" alt="Branding top bar" style="max-width: 50%">

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

### <a name="domain-name"></a>Domain name

In the **Domain name** tab you can activate your own custom domain name. 

>**Info**: To activate you domain, you need a valid license. Please contact our Sales team at sales@cumulocity.com to install a license for your domain.  

<img src="/guides/images/users-guide/Administration/Admin_DomainName.png" alt="Domain name" style="max-width: 100%">

First you have to upload the appropriate certificate by clicking **Upload Certificate**. Make sure that

* the certificate is in a valid PKCS#12 format,
* the certificate is not password protected,
* you are using a wildcard certificate to enable creation of subtenants.

Before activating the custom domain name, make sure that

* you have uploaded a valid SSL certificate for your custom domain,
* the common name (domain name) is not used by any other tenant,
* the certificate is currently valid (validFrom in the past and validTo in the future),
* you have added a wildcard CNAME record (starting with `"*."`) to your DNS server of the following format:<br>
 Hostname = `*.<your domain name>`, e.g. `*.iot.mycompany.com` <br>
 Type = CNAME <br>
 Target = the target URL of the platform you want to point to, e.g. `manage.cumulocity.com`<br>
Make sure to remove all A entries for the wildcard domain. If your DNS service does not provide CNAME entries for wildcard certificates, please contact our support.

After successful activation you will be redirected to your enterprise tenant at the new domain. You will also receive an email with information about the activation.

>**Info**: After the activation is completed you will no longer be able to access your tenant with the cumulocity domain name. Instead, use your custom domain name.


#### Updating your certificate

When your certificate expires, you must update your certificate with a new one with an extended validation period. When updating a certificate, you need to make sure that

* the certificate is in a valid PKCS#12 format,
* the certificate is not password protected,
* the certificate is currently valid (validFrom in the past and validTo in the future),
* the certificate has exactly the same common name (domain name) as the currently active certificate,
* you have added a CNAME record to your DNS server. For details on the CNAME record see above.


#### Deactivating your certificate

If you wish to return to your old domain at Cumulocity, you can simply deactivate you certificate. 

>**Important**: Use with care. Your customers will not be able to access their subtenants anymore.

#### Troubleshooting

In case you cannot reach Cumulocity using your custom domain, we recommend to perform the following checks to verify your DNS setup.

**Check if the DNS entry is correct**

Execute the following command:

	host management.<your domain name>
	
The following result should be returned:

	management.<your domain name> is an alias for <instance domain name>
	<instance domain name> has address <ip address>
	

**Check if the API is responding** 

Execute the following command:

	curl -v -u '<tenant ID>/<your user>:<your password>' --head http://management.<your domain name>/inventory/managedObjects
	
The following result should be returned:

	...
	HTTP/1.1 200 OK
	...	


>**Info**: Take into consideration that after changing the DNS entry it might take up to 24 hours until the new entry has been propagated.
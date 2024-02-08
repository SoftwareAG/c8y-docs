---
weight: 30
title: Branding
layout: redirect
section:
  - platform_administration
---

With the Branding feature, you can fully customize the look of your tenant to your own preferences.

{{< c8y-admon-req >}}
APPLICATION ACCESS:

The branding feature comes as default with the {{<enterprise-tenant>}} and is available in the Administration application.

The branding functionality is enabled by subscribing to the "feature-branding" application.

ROLES & PERMISSIONS:

* To manage the branding configuration:
  * READ, ADMIN, CREATE permission for the "Inventory" permission type
  * READ, ADMIN permission for the "Options management" permission type
* To apply the branding configuration: READ, ADMIN permission for the "Application management" permission type

On tenant creation, there are default roles available that can be used as a sample configuration for the above-mentioned permissions:
* Tenant Manager - manages tenant-wide configurations like applications, tenant options and retention rules

{{< /c8y-admon-req >}}

### To configure branding settings {#to-configure-branding-settings}

In the **Branding** tab, you can configure various parameters like logos, colors  and font types used throughout the platform.

The [parameters](#configuration-parameters) are configured at the left side of the tab while at the right you can immediately see your selections applied to a preview extract.

<img src="/images/users-guide/enterprise-tenant/et-branding.png" alt="Branding tab">

For a more detailed preview of your settings, click **Open preview** in the top menu bar to check the look and feel of your branding settings in the overall platform. You may interact and even switch applications in the preview. Every change that you make in the **Branding** tab will immediately be applied to the **Preview** page.

<img src="/images/users-guide/enterprise-tenant/et-branding-preview.png" alt="Branding tab">

When you are done or want to store your settings, click **Save** at the bottom of the **Configuration** section to save your branding settings to your tenant.

Saving the settings will not yet apply them to the current tenant and respective subtenants. To do so, click **Apply** in the top menu bar.

Click **Remove branding** in the top menu bar to reset the branding of the current tenant and its subtenants to the default settings. The custom settings will still be saved but are no longer applied.


#### Configuration parameters {#configuration-parameters}

In the Configuration section, the following branding parameters can be configured.

##### General {#general}

Under **General**, you can edit the title which will be used in the browser tab.

##### Main logo {#main-logo}

Under **Main logo**, specify the following items:

* The favicon - will be displayed in the browser's address bar. Click **Choose file** to select a file from your file system. The supported favicon format is "ico".
* Your branding logo - will be shown during application loading. Click **Choose file** to select a file from your file system. The supported formats are "png", "svg" and "jpg".
* The brand logo height.

##### Navigator logo {#navigator-logo}

Under **Navigator logo** you can provide the navigator logo and set the navigator logo height located on top of the navigator panel.

##### Font {#font}

In the **Font** section you specify the font settings for your branded version.

You can select your base and headings font stack, and select an option for the navigator font stack (either same as base or same as headings font). You may also add a link to existing remote fonts to be used.

##### Colors {#colors}

In the **Colors** section you specify the colors to be used in your branding version.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Main brand color.
* Secondary brand color - the default value is "#07b91A".
* Dark brand color - mainly used for two-color icons. The default value is "#0B385B".
* Light brand color - mainly used for two-color icons. The default value is "#5FAEEC".
* Text color - the default value is "#444".
* Link color - the default value is the same as the main brand color.
* Main background color - the default value for this item is "#FAFAFA".

##### Top bar {#top-bar}

In the **Top bar** section you specify the parameters for the top bar.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Background color - the default value is "#FFFFFF".
* Text color - the default value is "49595B".
* Button hover text color - the default value is the main brand color.

##### Navigator {#navigator}

In the **Navigator** section you specify the parameters for the navigator.

The following parameters can be specified by providing a hex, rgb or rgba value:

* Background color - the default value is "#2c3637".
* Logo wrapper background color - the default value is "Transparent".
* Title color - the default value is "#FFFFFF".
* Text and buttons color - the default value is "#FAFAFA".
* Separator line color - the default value is "#FAFAFA".
* Text color of the current item in the navigator - the default value is "#FAFAFA".
* Background color of the current item in the navigator with the main brand color as default.

##### Misc {#misc}

In the **Misc** section you specify the "Button Border-Radius" by providing a value in pixel (px).

##### Cookie banner {#cookie-banner}

In the **Cookie banner** section you specify the settings for the banner with the cookie usage information. If not disabled here, the banner is shown for all users of the current tenant and all subtenants until a user clicks **Agree and proceed**.

Disabling the cookie banner, also disables sending Personally Identifiable Information to Gainsight along with all forms of engagements and Knowledge Hub for the current tenant and all subtenants.

The following parameters can be specified:

* Title - cookie banner title
* Text - cookie banner text with a general statement on the cookie usage and the use cases for it
* Link to privacy policy - a link to the page with the privacy policy

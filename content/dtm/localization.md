---
weight: 40
layout: bundle
title: Localization
---

{{< c8y-admon-related >}}
* [Subscribed applications](/users-guide/administration/#subscribed-applications) for more information on how to access the DTM application in your tenant.

{{< /c8y-admon-related >}}

{{< c8y-admon-req >}}
* Your user must have a role with READ permission for the permission type "Application management". See [Administration > Managing permissions](/users-guide/administration/#managing-permissions) in the *User guide*.

* Your tenant must have the Public-options application installed, see details below.
{{< /c8y-admon-req >}}

### To use the localization feature
Since the localization feature uses dynamically fetched application options, your tenant must have the Public-options application installed. Install the Public-options application manually or, as a workaround, apply the branding setting which installs the Public-options application behind the scenes.

For details on how to manually install the Public-options application, see [Branding and language customization](/web/application-configuration/#branding-and-languages) in the *Web SDK guide*.

#### To apply the branding setting
To apply the branding setting, you must first subscribe to the [Branding feature](/users-guide/enterprise-tenant/#branding) in the [Enterprise tenant](/users-guide/enterprise-tenant/#overview).

Complete the setup in the Administration application following the steps below: 

1. Navigate to **Settings > Branding**.
2. Click **Apply**. 
3. Navigate to **Ecosystem > Applications** to verify that the Public-options application is installed correctly.

{{<c8y-admon-info>}}
You must have administrator access to the tenant to install the Public-options application.
{{</c8y-admon-info>}}

<a name=""></a>
### Localization feature

To use the localization feature, open the **Localization** page in the navigator.

Additionally, if you want to add translations for the [custom property](/dtm/asset-types/#property-library) or [asset types](/dtm/asset-types/#asset-types) created, or if you want to add custom translations for the existing static text in the DTM application, same can be done using the **Localization** feature.

![Main view localization page](/images/dtm/localization/dtm-localozation-main-page.png)

Initially, the **Localization** page will show a row called **Group** as key. If necessary, add a translation for "Group" according to the explanation above.

Once you create all custom properties and asset types, then all those names are added as keys in the **Localization** page. You can further add the translations as required.

{{< c8y-admon-info>}}
Note that if an asset property or asset model is present, the corresponding entry on the **Localization** page cannot be deleted. However, if no translation exists for the asset property or asset model, deleting the asset property or asset model will automatically remove the corresponding entry.

On the other hand, if a translation exists for the asset property or asset model, deleting it will not automatically remove the corresponding entry. In such cases, a delete option will be available for that specific translation, allowing you to manually delete the entry.
{{< /c8y-admon-info>}}

To add a new translation in the DTM application, you can add the text as key and add the translations as required.


<a name=""></a>
### To add new keys for translations

Add new keys and their respective translations using the **Add term** option on the top right.


![localization-add-term](/images/dtm/localization/dtm-localization-add-term.png)


Fill all the mandatory fields in the dialog window and click **Save**. The new key is saved including the added translations.

Next, click **Apply** to apply the changes.


<a name=""></a>
### To add and edit translations

 You can add or edit translations for all the keys in two ways:

1. Hover over the respective column for the edit icon to be visible.
2. Click the icon to select the desired language.
3. Add or edit the translation.
4. Click **Save**.

or:

1. Click the edit icon in each row to open the dialog window **Edit term translations**.
2. Add or edit the translation for any language.
3. Click **Save**.

Click **Apply** to apply the changes.

Once all your translations are done, you can change the language under **User settings** to see the translations in action. For more information see [Getting started > User options and settings > To change user settings](/users-guide/getting-started/#gui-features) in the *User guide*.

The added translations are now displayed in the DTM application.

To change the language for the DTM application click the **User settings** option under [User button](/users-guide/getting-started/#gui-features) and select the desired language in the dropdown menu. You need to refresh your screen for the application to display the newly selected language.


{{< c8y-admon-info>}}
The added translations for asset type and custom property will only show up in the **Assets** page. Translations are currently available for English and German.
{{< /c8y-admon-info>}}

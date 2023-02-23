---
weight: 40
layout: bundle
title: Localization
outputs:
- html
- json
helpcontent:
- label: localization
  title: Localization
  content: "
  Use the **Localization** feature to add translations for custom properties or asset types, as well as to add custom translations for the existing static text in the DTM application.


  Once you created all custom properties and asset types, their names are added as keys in the **Localization** page. You can add further translations as required.  


  To add a new translation, click **Add term** on the top menu bar. In the resulting dialog box, add the name of the key, followed by the translation in the respective field.


  Note that to use this feature, you must be subscribed to Branding feature application in the Enterprise tenant."
---

{{< c8y-admon-related >}}
* [Subscribed applications](/users-guide/administration/#subscribed-applications) for more information on how to access the DTM application in your tenant.

{{< /c8y-admon-related >}}

{{< c8y-admon-req >}}
* You must be subscribed to the [Branding feature](/users-guide/enterprise-tenant/#branding) in the [Enterprise tenant](/users-guide/enterprise-tenant/#overview).
* Your user must have a role with READ permission for the permission type "Application management". See [Administration > Managing permissions](/users-guide/administration/#managing-permissions) in the *User guide*.
{{< /c8y-admon-req >}}

<a name=""></a>
### Localization feature

The **Localization** feature is provided in the DTM application. To use this feature, subscribe to [Branding feature](/users-guide/enterprise-tenant/#branding) in the [Enterprise tenant](/users-guide/enterprise-tenant/#overview). Once you have enabled it, open the **Localization** page in the navigator.

Additionally, if you want to add translations for the [custom property](/dtm/asset-types/#property-library) or [asset types](/dtm/asset-types/#asset-types) created, or if you want to add custom translations for the existing static text in the DTM application, same can be done using the **Localization** feature.

![Main view localization page](/images/dtm/localization/dtm-localozation-main-page.png)

Initially, the **Localization** page will show a row called **Group** as key. If necessary, add a translation for "Group" according to the explanation above.

Once you create all custom properties and asset types, then all those names are added as keys in the **Localization** page. You can further add the translations as required.

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

Add or modify the translation for any language in {{< product-c8y-iot >}}.

Once all your translations are done, change the language under **User settings**. For more information see [Getting started > User options and settings > To change user settings](/users-guide/getting-started/#gui-features) in the *User guide*.


The added translations are now displayed in the DTM application.

To change the language for the DTM application click the **User settings** option under [User button](/users-guide/getting-started/#gui-features) and select the desired language in the dropdown menu. You need to refresh your screen for the application to display the newly selected language.


{{< c8y-admon-info>}}
The added translations for asset type and custom property will only show up in the **Assets** page. Translations are currently available for English and German.
{{< /c8y-admon-info>}}

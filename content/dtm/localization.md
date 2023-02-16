---
weight: 50
layout: bundle
title: Localization
outputs:
- html
- json
helpcontent:
- label: localization
  title: Localization
  content: "
  Use the **Localization** feature to add translations for asset properties or asset models, as well as to add custom translations for the existing static text in the DTM application.


  Once you created all asset properties and asset models, their names are added as keys in the **Localization** page. You can add further translations as required.  


  To add a new translation, click **Add term** on the top menu bar. In the resulting dialog box, add the name of the key, followed by the translation in the respective field.


  Note that to use this feature, you must be subscribed to Branding feature application in the Enterprise tenant."
---

{{< c8y-admon-req >}}
* Subscribed to [Feature branding](/users-guide/enterprise-tenant/#branding) in the [Enterprise tenant](/users-guide/enterprise-tenant/#overview).
* User's role has READ permission level to **Application management**. See [Administration > Managing permissions](/users-guide/administration/#managing-permissions) in the *User guide*
{{< /c8y-admon-req >}}

<a name=""></a>
### Localization

To use this feature, subscribe to [Branding feature](/users-guide/enterprise-tenant/#branding) in the [Enterprise tenant](/users-guide/enterprise-tenant/#overview). Once you have enabled it, open the **Localization** page by navigating to **Configuration > Localization**.

If you want to add translations for the created [asset properties](/dtm/asset-types/#property-library) or [asset models](/dtm/asset-types/#asset-types), or if you want to add custom translations for the existing static text in the DTM application, use the **Localization** feature.

![Main view localization page](/images/dtm/localization/dtm-localization-main-page.png)

Once you create an asset property or an asset model, their names are added automatically as keys in the **Localization** page. You can further add the translations as required.

To add a new translation in the DTM application, you can add the text as key and add the translations as required.

Click **Apply** to apply the changes.

<a name=""></a>
### To add new keys for translations

Add new keys and their respective translations using the **Add term** option on the top right.

Fill all the mandatory fields in the **Add term and translations** dialog and click **Save**. The new key is saved including the added translations.

Next, click **Apply** to apply the changes.


![localization-add-term](/images/dtm/localization/dtm-localization-add-term.png)



<a name=""></a>
### To add and edit translations

 You can add or edit translations for all the keys in two ways:

1. Hover over the respective column for the edit icon to be visible.
2. Click the icon to select the desired language.
3. Add or edit the translation.
4. Click **Save**.

or:

1. Click the edit icon in each row to open the **Edit term translation** dialog.
2. Add or edit the translation for any language.
3. Click **Save**.

Add or modify the translation for any language in {{< product-c8y-iot >}}.

Click **Apply** to apply the changes.

Once all your translations are done, you can change the language under **User settings** to see the translations in action. For more information see [Getting started > User options and settings > To change user settings](/users-guide/getting-started/#gui-features) in the *User guide*.


{{< c8y-admon-info>}}
The added translations for an asset model or an asset property is seen only in the **Assets** page. 

Translations for other static text of the DTM application are currently available for English and German.
{{< /c8y-admon-info>}}

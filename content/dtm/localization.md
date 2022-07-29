---
weight: 40
layout: bundle
title: Localization
---

Localization feature is provided in **DTM (Digital Twin Manager)** (DTM) application. To use this feature, subscribe to [**Feature branding**](/users-guide/enterprise-tenant/#branding) in the [Enterprise tenant](/users-guide/enterprise-tenant/#overview). It should then appear under [subscribed applications](/users-guide/administration/#subscribed-applications) in your tenant.

Once the Feature branding is enabled, navigate to **Localization** page using the left nav.

Language for the **DTM** application can be changed by clicking on the **User settings** option under [User button](/users-guide/getting-started/#gui-features) and by choosing the language in the **Language** dropdown. Based on the chosen language, application loads accordingly.

Additionally, if you want to add translations for the [**Custom property**](/dtm/asset-types/#property-library) or [**Asset types**](/dtm/asset-types/#asset-types) created, or if you want to add custom translations for the existing Static text in **DTM** application, same can be done using Localization feature.

![localization-mainpage](/images/dtm/localization/dtm-localozation-main-page.png)

On first time login, when you navigate to **Localization** page, by default there will be a row added with **Group** as Key. You can add the translations if needed for **Group**.

Once the Custom properties and asset types are created, then all those names are added as Keys in **Localization** page. You can further add the translations as required.

In case you want to add new translation in the **DTM** application, same can be done by adding the text as Key and adding the required translation for the respective languages.

##### **Adding new Keys for translations:**

New keys and their respective translations can be added using the **Add term** option on top right.

On click of **Add term** option, ADD TERM AND TRANSLATIONS screen loads.

![localization-add-term](/images/dtm/localization/dtm-localization-add-term.png)


Fill all the mandatory parameters and click on **Save** to save the changes. New key with added translations are saved.

Next, click on **Apply** for the changes to be applicable.

##### **Add / Edit translations:**

 For all the keys, you can add translations or edit the existing translations in two ways.

1.	By clicking on the **Edit icon** against the column for the desired language:

For every row, against each column **Edit icon** appears on hover.

On click of this **Edit icon**, you can either add new translation or edit existing translation text.


2.	By clicking on the **Edit icon** against each row:

**Edit icon** is present for each row and on click “Edit term translations” screen loads.

Translation can be added or modified for any of the languages and the changes can be saved using **Save** button.


Once all your translations are in place, change the language using the **Language** dropdown under **User settings**. The added translations will reflect in the **DTM** application.

>**Info:** The translations added for **Asset type** and **Custom property** will be reflecting only in **Assets** page.

{{< c8y-admon-info>}}

 Currently the translations for DTM application are available for English and German language.

{{< /c8y-admon-info>}}

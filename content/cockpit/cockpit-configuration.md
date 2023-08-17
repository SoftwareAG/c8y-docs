---
weight: 100
title: Configuring Cockpit applications
layout: bundle
section:
  - app_development
---

{{< product-c8y-iot >}} offers you to configure custom Cockpit applications according to your individual needs.

{{< c8y-admon-req >}}
To use the Cockpit configuration functionality, the following requirements have to be met:

* You must have ADMIN permission for the permission type "Application management".

* The Cockpit application can only be configured if it is owned by the tenant. That means that you first have to create an own Cockpit application by duplicating the existing Cockpit application. For details, how to clone an application see [Platform administration > Standard tenant management > Managing the ecosystem > Adding custom applications](/standard-tenant/ecosystem/#adding-applications).

If these requirements are met, an **App configuration** entry is visible in the **Configuration** menu in the navigator of the custom Cockpit application.
{{< /c8y-admon-req >}}

### To configure a custom Cockpit application

In the navigator, click **App configuration** in the **Configuration** menu.

![App configuration](/images/users-guide/cockpit/cockpit-app-configuration.png)

In the **App configuration** page, you can customize your Cockpit application in various aspects.

#### Features

In the **Features** section, you can disable certain features like for example, the global search, alarms, or the data explorer.

By default, all features are enabled. Use the toggle next to a feature to disable it. The respective menu item in the navigator (or the respective button as in case of the global search button) will immediately be removed and the functionality will no longer be available, until enabled again.

#### Top level nodes

Under **Top level nodes** you can select which groups to display on top level in the navigator. By default, only the **Groups** entry is shown (if not disabled in the **Features** section).

![Nodes configuration](/images/users-guide/cockpit/cockpit-configuration-nodes.png)

On the right, select the root groups or subgroups to be displayed as top level nodes in the navigator. Once selected, the group will be added to the custom top level nodes list. Moreover, you can further configure the nodes by enabling/disabling the display of devices for a certain group. If disabled, all devices for this group will be hidden, that is, not shown in the navigator.

#### Home dashboard

In the **Home dashboard** section, you can select how the home dashboard, that is, the landing page for this application, is treated.

You can select one of the following options for the customization of the home dashboard:

* It is reflected throughout the entire tenant (the default).
* It is only reflected in the current custom application.
* It is only reflected in the current user. Note that this user then needs CREATE permission for the permission type "Inventory".

{{< c8y-admon-info >}}
The initial home dashboard shows a number of pre-installed widgets. These widgets can be changed according to your needs.
{{< /c8y-admon-info >}}

Click **Reset dashboard** to undo any changes to your home dashboard. This reverts all changes to the dashboard and returns it to the initial state.

#### To hide the navigator

Finally, you can specify if the navigator should be hidden on start up. By default, the navigator is displayed on start up.

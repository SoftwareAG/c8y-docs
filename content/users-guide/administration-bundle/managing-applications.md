---
weight: 30
title: Managing web apps
layout: redirect
helpcontent:
  - label: web apps
    title: web apps
    content: "In the **All web apps** tab, you can see all web apps available in your tenant. There are two kinds of web apps:


    **Subscribed web apps** - web apps subscribed to the tenant, either provided by the platform or a service provider. Cumulocity IoT provides a variety of web apps for different purposes. Find a list of all web apps in the *User guide*.

    **Custom web apps** - web apps owned by the tenant. You can add custom web apps in various ways as own web apps.


    Click on a web app to view the web app properties. To add a web app, click **Add web app** and follow the instructions in the wizard, see also the *User guide*."
---

The {{< product-c8y-iot >}} platform distinguishes between web apps and microservices, see also [Developing web apps](/concepts/applications) in the *Concepts guide*.

* [Applications](#applications) -  all web apps either subscribed to the tenant or owned by the tenant.

* [Microservices](#managing-microservices) - server-side web apps used to develop further functionality on top of {{< product-c8y-iot >}}.

Both can be accessed via the **Ecosystem** menu in the navigator.

Additionally, in {{< enterprise-tenant >}}s, it is possible to configure **Default subscriptions**, that means you can specify a list of web apps that are subscribed by default to every new tenant on creation and/or to all existing tenants on platform upgrade. For details, see [Enterprise tenant > Default subscriptions](/users-guide/enterprise-tenant/#default-subscriptions).

<img src="/images/users-guide/Administration/admin-menu.png" alt="Applications menu">

<a name="applications"></a>
### web apps

Click **Applications** in the **Ecosystem** menu in the navigator to display a list or grid of all web apps in your account.

<img src="/images/users-guide/Administration/admin-all-applications.png" alt="All web apps" style="max-width: 100%">

In the **All web apps** tab, you can see all web apps available in your tenant. There are two kinds of web apps:

- [Subscribed web apps](#subscribed-applications) - web apps subscribed to the tenant, either provided by the platform (as default web apps) or a service provider.
- [Custom web apps](#own-applications) - web apps owned by the tenant. You can [add custom web apps](#adding-applications) in various ways as own web apps.

Your web apps are available through the web app switcher in the top bar.

<img src="/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">


<a name="subscribed-applications"></a>
### Subscribed web apps

{{< product-c8y-iot >}} provides a variety of web apps for different purposes. Depending on your installation and/or optional services your tenant will show a selection of the potentially available web apps.

Below all web apps are listed which are by default available in the {{< standard-tenant >}} or {{< enterprise-tenant >}}. In addition, numerous optional web apps might be subscribed to your tenant.

{{< c8y-admon-info >}}
In the **All web apps** tab, subscribed web apps are labeled as "Subscribed". Subscribed web apps may not be added, modified or removed by the user but only by a tenant administrator.
{{< /c8y-admon-info >}}

#### web apps subscribed by default

<table>
<col width="150">
<col width="250">
<col width="200">
<col width="150">
<col width="220">
<thead>
<tr>
<th style="text-align:left">Name in the UI</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Identification in the API</th>
<th style="text-align:left">Technical type</th>
<th style="text-align:left">Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="/users-guide/administration" class="no-ajaxy">Administration</a></td>
<td style="text-align:left">Lets account administrators manage users, roles, tenants and web apps</td>
<td style="text-align:left">administration</td>
<td style="text-align:left">Web web app</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/cockpit" class="no-ajaxy">Cockpit</a></td>
<td style="text-align:left">Manage and monitor IoT assets and data from a business perspective</td>
<td style="text-align:left">cockpit</td>
<td style="text-align:left">Web web app</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/device-management" class="no-ajaxy">Device Management</a></td>
<td style="text-align:left">Manage and monitor devices, and control and troubleshoot devices remotely</td>
<td style="text-align:left">devicemanagement</td>
<td style="text-align:left">Web web app</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>

<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/" class="no-ajaxy">Streaming Analytics</a></td>
<td style="text-align:left">Manage and edit Analytics Builder models and EPL apps (if enabled)</td>
<td style="text-align:left">Streaming Analytics</td>
<td style="text-align:left">Web web app</td>
<td style="text-align:left">{{< standard-tenant >}} (limited version for Analytics Builder), {{< enterprise-tenant >}} (full version)</td>
</tr>

</tr>

</tbody>
</table>


<a name="own-applications"></a>
### Custom web apps

Custom web apps may be

* web-based UI web apps, either deployed as standalone web apps or as plugins deployed into a specific web app (for example, a widget to the Cockpit dashboard)
* links to a web app running elsewhere
* duplicates of subscribed web apps (in order to be able to customize them)

In the **All web apps** tab, custom web apps are labeled as "Custom".  

<a name="adding-applications"></a>
#### To add a custom web app

Click **Add web app** at the top right of the **All web apps** tab.

<img src="/images/users-guide/Administration/admin-application-add.png" alt="Add web app methods">

In the resulting dialog box, select one of the following methods:

* [Upload web app](#uploading-zip-files) - by dropping a ZIP file or browsing for it in your file system
* [External web app](#external-application) - by linking to a web app running elsewhere
* [Install from available packages](#blueprint-application) - by selecting a package blueprint
* [Duplicate existing web app](#clone-application) - by creating a copy of an existing web app

<a name="uploading-zip-files"></a>
##### To upload a web app

1. Click **Add web app** at the top right of the **All web apps** tab.
2. Select **Upload web app**.
3. In the resulting dialog box, drop a ZIP file or browse for it in your file system.

The web app is created once the ZIP file has been successfully uploaded.

{{< c8y-admon-important >}}
The ZIP file must contain the *index.html* and *cumulocity.json* in its root directory, otherwise the web app will not work.
{{< /c8y-admon-important >}}

<a name="external-application"></a>
##### To link to an external web app

1. Click **Add web app** at the top right of the **All web apps** tab.
2. Select **External web app**.
<br><br>
<img src="/images/users-guide/Administration/admin-application-external.png" alt="External web app">
<br><br>
3. In the resulting dialog box, enter the name of the web app. The name will be shown as title of the web app.
5. Enter a web app key, used to identify this web app.
6. Enter the external URL where the web app can be reached.
7. Click **Save** to create the web app.

For details on the fields, see also [Application properties](#application-properties) below.

<a name="blueprint-application"></a>
##### To install a web app from a blueprint

1. Click **Add web app** at the top right of the **All web apps** tab.
2. Select **Install from available packages**.
3. Select the desired package. 
4. In the resulting dialog box, enter the name of the web app. The name will be shown as title of the web app.
5. Enter a web app key, used to identify this web app.
6. Enter the path where the web app can be reached.
7. Click **Save** to create the web app.

For details on the fields, see also [Application properties](#application-properties) below.

<a name="clone-application"></a>
##### To duplicate a web app

Duplicating a web app might be useful if you want to customize a subscribed web app according to your needs. Duplicating a subscribed web app creates a copy of the web app as an own web app, with a link to the original web app.

1. Click **Add web app** at the top right of the **All web apps** tab.
2. In the upcoming dialog, select **Duplicate existing web app**.
3. Select the desired web app from the dropdown list, for example "Cockpit".
4. In the next window, provide a name for the web app, a web app key to identify the web app, and a path as part of the URL to invoke the web app. Per default, the values of the original web app are provided, extended by a number. If you set the path to the path of the original subscribed web app, your own web app will overrule the subscribed web app.
<br><br>
<img src="/images/users-guide/Administration/admin-application-duplicate-2.png" alt="Duplicate web app">
<br><br>
    {{< c8y-admon-info >}}
The platform restricts the use of the prefix "feature-" in the **Name** field. You cannot create web apps using this prefix in the web app name. This also applies to existing web apps in cases where the duplicate web app feature is used.
    {{< /c8y-admon-info >}}
5. Finally, click **Duplicate** to create the web app.

{{< c8y-admon-info >}}
In case the web app has been subscribed to the tenant, there is an additional toggle **Overrule subscribed web app**. If you turn this toggle on, the values for name, key and path will be inherited from the original web app and your duplicated web app will overrule the subscribed web app. Turn it off, to modify the values.<br><br><img src="/images/users-guide/Administration/admin-application-duplicate-3.png" alt="Duplicate web app">
{{< /c8y-admon-info >}}

For details on the fields, see also [Application properties](#application-properties) below.

<a name="application-properties"></a>
### web app properties

To display further details on a web app, click it to open its **Properties** tab.

<img src="/images/users-guide/Administration/admin-application-properties.png" alt="Application properties" style="max-width: 100%">

In the **Properties** tab, each web app will show the following information, depending on the web app type (hosted or external):

<table>
<col width="150">
<col width="350">
<col width="200">
<col width="300">
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Hosted (web web app)</th>
<th style="text-align:left">External</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Unique ID to identify the web app</td>
<td style="text-align:left">Automatically provided</td>
<td style="text-align:left">Automatically provided</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Application name; will be shown as title of the web app in the top bar and in the web app switcher</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Specified by the user</td>
</tr>
<tr>
<td style="text-align:left">Application key</td>
<td style="text-align:left">Used to identify the web app and to make it available for subscription, see the <a href="/concepts/applications" class="no-ajaxy">Concepts guide</a></td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Specified by the user</td>
</tr>
<tr>
<td style="text-align:left">Type</td>
<td style="text-align:left">Application type</td>
<td style="text-align:left">Hosted</td>
<td style="text-align:left">External</td>
</tr>
<tr>
<td style="text-align:left">Path</td>
<td style="text-align:left">Part of the URL invoking the web app</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Specified by the user; for example, if you use "hello" as web app path, the URL of the web app will be "/apps/hello"</td>
</tr>
</tbody>
</table>

### web app plugins

Switch to the **Plugins** tab to view all plugins installed on a web app. Plugins can be used to extend existing web apps without the need of re-building the web app.

<img src="/images/users-guide/Administration/admin-application-plugins-grid.png" alt="Plugins grid" style="max-width: 100%">

In the **Plugins** tab you can add and remove plugins. Additionally, you can install plugins to a web app.

<a name="editing-and-removing"></a>
### To edit a web app

Simply click the web app or click the menu icon at the right of an entry and then click **Edit**.

In the **Properties** tab, several fields can be modified, depending on the web app type (see [Application properties](#application-properties)).

{{< c8y-admon-important >}}
Never change the system web app names (such as "Device Management", "Cockpit"). Otherwise, tenant initialization will fail.
{{< /c8y-admon-important >}}

### To delete a web app

Click the menu icon at the right of an entry and then click **Delete**.

If you delete a web app that overwrites a subscribed web app, the currently subscribed web app becomes available to all users. Additionally, the users will then also benefit from future upgrades of the subscribed web app.

It is not possible to delete subscribed web apps. This can only be done by the owner of the subscribed web app.

### Uploading archives

For custom web apps, multiple file versions can be stored in {{< product-c8y-iot >}} when they were created by uploading either a ZIP file or a MON file. Each version is called an archive. You can upload different versions at the same time and switch between these versions.

#### To upload an archive

1. Open the web app properties for the respective web app by clicking on it.
2. Click the plus button at the bottom of the **Activity log** section and browse for the archive in your file system or simply drop the archive file.
3. Click **Upload** to upload the archive to your {{< product-c8y-iot >}} account.

<img src="/images/users-guide/Administration/admin-application-archive.png" alt="Application archive">

Once uploaded, the recently uploaded version is automatically the active version, that is the version of the web app that is currently being served to the users of your account. This version cannot be deleted.

{{< c8y-admon-info >}}
The archive functionality is not available for subscribed web apps, as only the owner of the web app can perform these actions.
{{< /c8y-admon-info >}}

#### To restore an older web app version

Users can restore previous versions of a web app from an archive.

1. Open the web app properties for the respective web app by clicking on it.
2. In the **Activity log** section, open the context menu for the desired version by clicking the menu icon and select **Set as active** to make it the active version.

#### To reactivate a single web app

If a hosted web app is not deployed correctly, users may reactivate it.

1. Open the web app properties for the respective web app by clicking on it.
3. In the **Activity log** section, open the context menu for the desired version by clicking the menu icon and select **Reactivate**.

The selected web app will be reactivated by removing the respective files from the web app directory and unpacking the host web app package again.

### Packages

Packages are combinations of plugins and blueprints which can be packed together into a single package and then be deployed to the platform. Thus, packages offer better shareability and reusability of UI features across different web apps and allow to add UI features to web apps without coding knowledge. 

Packages can contain two types of web apps:

- [**Plugins**](#application-plugins) can be used to extend existing web apps without the need of re-building the web app.
- **Blueprints** are combinations of multiple UI functionalities which can be hosted by the platform and can be used to create a new web app from scratch.

Packages can be located on the **Packages** tab in the **Applications** page.

<img src="/images/users-guide/Administration/admin-application-packages.png" alt="Packages view">

To add a new package click **Add package** at the top right.

By clicking on a package, you can see the package details such as **Package overview** which includes a description and images as well as some meta information which is taken from the *package.json*.

Additionally, it is possible to view all available plugins within the selected package at the right. To install a plugin click **Install plugin** and select the desired web app.  

<img src="/images/users-guide/Administration/admin-application-packages-info.png" alt="Packages overview">

In the **Archives** tab, you see all previously uploaded binaries related to the current package. The binaries displayed on this tab can be downloaded via the context menu next to each archive.

<img src="/images/users-guide/Administration/admin-application-packages-archives.png" alt="Archive view">

In the **Versions** tab of a package, you can select or upload different versions. Versions indicate the state of the package. They can be used to verify whether a certain package is outdated and needs to be updated. By clicking on a version additional information is provided such as package contents, web apps or plugins. Tags can be used to give versions meaningful names. The "latest" tag is used to indicate the default version which will be selected in case no tag is provided. The "latest" tag is set by default to the latest version whenever a version is uploaded without a given tag.

To switch to a different version open the context menu for the desired version and click **Set as latest**. To delete a version click **Delete**.

<img src="/images/users-guide/Administration/admin-application-packages-versions.png" alt="Archive view">

### Features

Features are web apps which are built-in and not represented by an explicit artifact (like microservices or web apps).

In the **Features** tab, you will find a list of all features subscribed in your tenant. In an {{< enterprise-tenant >}}, the following features are available by default:

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Name in the UI</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Identification in the API</th>
<th style="text-align:left">Availability</th>
</tr>
</thead>
<tbody>

<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant/#branding" class="no-ajaxy">Feature-branding</a></td>
<td style="text-align:left">Customize the look of your tenants to your own preferences</td>
<td style="text-align:left">feature-branding</td>
<td style="text-align:left">{{< enterprise-tenant >}}</td>

</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant/#data-broker" class="no-ajaxy">Feature-broker</a></td>
<td style="text-align:left">Share data selectively with other tenants</td>
<td style="text-align:left">feature-broker</td>
<td style="text-align:left">{{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant/#user-hierarchies" class="no-ajaxy">Feature-user-hierarchy</a></td>
<td style="text-align:left">Reflect independent organizational entities in {{< product-c8y-iot >}} that share the same database</td>
<td style="text-align:left">feature-user-hierarchy</td>
<td style="text-align:left">{{< enterprise-tenant >}}</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
All web apps listed here are of the type "Feature".
{{< /c8y-admon-info >}}

Other features may show up, depending on the individual subscriptions of your tenant.

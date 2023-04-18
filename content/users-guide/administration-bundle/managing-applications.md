---
weight: 30
title: Managing applications
layout: redirect
helpcontent:
  - label: applications
    title: Applications
    content: "In the **All applications** tab, you can see all applications available in your tenant. There are two kinds of applications:


    **Subscribed applications** - Applications subscribed to the tenant, either provided by the platform or a service provider. Cumulocity IoT provides a variety of applications for different purposes. Find a list of all applications in the *User guide*.

    **Custom applications** - Applications owned by the tenant. You can add custom applications in various ways as own applications.


    Click on an application to view the application properties. To add an application, click **Add application** and follow the instructions in the wizard, see also the *User guide*."
---

The {{< product-c8y-iot >}} platform distinguishes between applications and microservices, see also [Developing applications](/concepts/applications) in the *Concepts guide*.

* [Applications](#applications) -  all web applications either subscribed to the tenant or owned by the tenant.

* [Microservices](#managing-microservices) - server-side applications used to develop further functionality on top of {{< product-c8y-iot >}}.

Both can be accessed via the **Ecosystem** menu in the navigator.

Additionally, in {{< enterprise-tenant >}}s, it is possible to configure **Default subscriptions**, that means you can specify a list of applications that are subscribed by default to every new tenant on creation and/or to all existing tenants on platform upgrade. For details, see [Enterprise tenant > Default subscriptions](/users-guide/enterprise-tenant/#default-subscriptions).

<img src="/images/users-guide/Administration/admin-menu.png" alt="Applications menu">

<a name="applications"></a>
### Applications

Click **Applications** in the **Ecosystem** menu in the navigator to display a list or grid of all applications in your account.

<img src="/images/users-guide/Administration/admin-all-applications.png" alt="All applications" style="max-width: 100%">

In the **All applications** tab, you can see all applications available in your tenant. There are two kinds of applications:

- [Subscribed applications](#subscribed-applications) - applications subscribed to the tenant, either provided by the platform (as default applications) or a service provider.
- [Custom applications](#own-applications) - applications owned by the tenant. You can [add custom applications](#adding-applications) in various ways as own applications.

Your applications are available through the application switcher in the top bar.

<img src="/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">


<a name="subscribed-applications"></a>
### Subscribed applications

{{< product-c8y-iot >}} provides a variety of applications for different purposes. Depending on your installation and/or optional services your tenant will show a selection of the potentially available applications.

Below all applications are listed which are by default available in the {{< standard-tenant >}} or {{< enterprise-tenant >}}. In addition, numerous optional applications might be subscribed to your tenant.

>**Info:** In the **All applications** tab, subscribed applications are labeled as "Subscribed". Subscribed applications may not be added, modified or removed by the user but only by a tenant administrator.

#### Applications subscribed by default

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
<td style="text-align:left">Lets account administrators manage users, roles, tenants and applications</td>
<td style="text-align:left">administration</td>
<td style="text-align:left">Web application</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/cockpit" class="no-ajaxy">Cockpit</a></td>
<td style="text-align:left">Manage and monitor IoT assets and data from a business perspective</td>
<td style="text-align:left">cockpit</td>
<td style="text-align:left">Web application</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/users-guide/device-management" class="no-ajaxy">Device Management</a></td>
<td style="text-align:left">Manage and monitor devices, and control and troubleshoot devices remotely</td>
<td style="text-align:left">devicemanagement</td>
<td style="text-align:left">Web application</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>

<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/" class="no-ajaxy">Streaming Analytics</a></td>
<td style="text-align:left">Manage and edit Analytics Builder models and EPL apps (if enabled)</td>
<td style="text-align:left">Streaming Analytics</td>
<td style="text-align:left">Web application</td>
<td style="text-align:left">{{< standard-tenant >}} (limited version for Analytics Builder), {{< enterprise-tenant >}} (full version)</td>
</tr>

</tr>

</tbody>
</table>


<a name="own-applications"></a>
### Custom applications

Custom applications may be

* web-based UI applications, either deployed as standalone applications or as plugins deployed into a specific application (for example, a widget to the Cockpit dashboard)
* links to an application running elsewhere
* duplicates of subscribed applications (in order to be able to customize them)

In the **All applications** tab, custom applications are labeled as "Custom".  

<a name="adding-applications"></a>
#### To add a custom application

Click **Add application** at the top right of the **All applications** tab.

<img src="/images/users-guide/Administration/admin-application-add.png" alt="Add application methods">

In the resulting dialog box, select one of the following methods:

* [Upload web application](#uploading-zip-files) - by dropping a ZIP file or browsing for it in your file system.
* [External application](#external-application) - by linking to an application running elsewhere
* [Duplicate existing application](#clone-application) - by creating a copy of an existing application

<a name="uploading-zip-files"></a>
##### To upload a web application

1. Click **Add application** at the top right of the **All applications** tab.
2. Select **Upload web application**.
3. In the resulting dialog box, drop a ZIP file or browse for it in your file system.

The application is created once the ZIP file has been successfully uploaded.

>**Important:** The ZIP file must contain the *index.html* and *cumulocity.json* in its root directory, otherwise the application will not work.

<a name="external-application"></a>
##### To link to an external application

1. Click **Add application** at the top right of the **All applications** tab.
2. Select **External application**.
<br><br>
<img src="/images/users-guide/Administration/admin-application-external.png" alt="External application">
<br><br>
3. In the resulting dialog box, enter the name of the application. The name will be shown as title of the application.
5. Enter an application key, used to identify this application.
6. Enter the external URL where the application can be reached.
7. Click **Save** to create the application.

For details on the fields, see also [Application properties](#application-properties) below.

<a name="clone-application"></a>
##### To duplicate an application

Duplicating an application might be useful if you want to customize a subscribed application according to your needs. Duplicating a subscribed application creates a copy of the application as an own application, with a link to the original application.

1. Click **Add application** at the top right of the **All applications** tab.
2. In the upcoming dialog, select **Duplicate existing application**.
3. Select the desired application from the dropdown list.
<br><br>
<img src="/images/users-guide/Administration/admin-application-duplicate.png" alt="Duplicate application">
<br><br>
4. In the next window, provide a name for the application. By default, the name of the original application is provided, extended by a number.
<br><br>
<img src="/images/users-guide/Administration/admin-application-duplicate-2.png" alt="Duplicate application">
<br><br>
5. Provide an application key, used to identify this application. By default, the key of the original application is provided, extended by a number.
6. Provide the application path as part of the URL to invoke the application. By default, the path of the original application is provided, extended by a number. If you set it to the path of the original subscribed application, your own application will overrule the subscribed application.
7. Finally, click **Duplicate** to create the application.

For details on the fields, see also [Application properties](#application-properties) below.

> **Info:** If you want your "own application" to overrule a subscribed standard application, the path of the "own application" needs to be set to the path of the original subscribed application.

<a name="application-properties"></a>
### Application properties

To display further details on an application, click it to open its **Properties** tab.

<img src="/images/users-guide/Administration/admin-application-properties.png" alt="Application properties" style="max-width: 100%">

In the **Properties** tab, each application will show the following information, depending on the application type (hosted or external):

<table>
<col width="150">
<col width="350">
<col width="200">
<col width="300">
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Hosted (web application)</th>
<th style="text-align:left">External</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Unique ID to identify the application</td>
<td style="text-align:left">Automatically provided</td>
<td style="text-align:left">Automatically provided</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Application name; will be shown as title of the application in the top bar and in the application switcher</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Specified by the user</td>
</tr>
<tr>
<td style="text-align:left">Application key</td>
<td style="text-align:left">Used to identify the application and to make it available for subscription, see the <a href="/concepts/applications" class="no-ajaxy">Concepts guide</a></td>
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
<td style="text-align:left">Part of the URL invoking the application</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Specified by the user; for example, if you use "hello" as application path, the URL of the application will be "/apps/hello"</td>
</tr>
</tbody>
</table>

<a name="extensions"></a>
### Extensions

Click **Extensions** in the **Ecosystem** menu in the navigator to display all extensions in your account.

Extensions make it easier to share and reuse UI features across different applications. UI features can be developed as plugins and added to an application without coding knowledge. There are two types of extensions:

- Plugins
- Blueprints

Blueprint applications must be deployed, while plugins are added to other applications. This allows you to scaffold entire solutions or to extend existing ones. Due to the micro frontend technology, this can happen at runtime without rebuilding.

Switch to the **Plugins** tab of an application to view all plugins installed on an application.

<img src="/images/users-guide/Administration/admin-application-plugins-grid.png" alt="Plugins grid" style="max-width: 100%">

In the **Plugins** tab you can add and remove plugins. Additionally, you can install plugins to an application.

<a name="editing-and-removing"></a>
### To edit an application

Simply click the application or click the menu icon at the right of an entry and then click **Edit**.

In the **Properties** tab, several fields can be modified, depending on the application type (see [Application properties](#application-properties)).

>**Important:** Never change the system application names (such as "Device Management", "Cockpit"). Otherwise, tenant initialization will fail.

### To delete an application

Click the menu icon at the right of an entry and then click **Delete**.

If you delete an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally, the users will then also benefit from future upgrades of the subscribed application.

It is not possible to delete subscribed applications. This can only be done by the owner of the subscribed application.

### Uploading archives

For custom applications, multiple file versions can be stored in {{< product-c8y-iot >}} when they were created by uploading either a ZIP file or a MON file. Each version is called an archive. You can upload different versions at the same time and switch between these versions.

#### To upload an archive

1. Open the application properties for the respective application by clicking on it.
2. Click the plus button at the bottom of the **Activity log** section and browse for the archive in your file system or simply drop the archive file.
3. Click **Upload** to upload the archive to your {{< product-c8y-iot >}} account.

<img src="/images/users-guide/Administration/admin-application-archive.png" alt="Application archive">

Once uploaded, the recently uploaded version is automatically the active version, that is the version of the application that is currently being served to the users of your account. This version cannot be deleted.

> **Info:** The archive functionality is not available for subscribed applications, as only the owner of the application can perform these actions.

#### To restore an older application version

Users can restore previous versions of an application from an archive.

1. Open the application properties for the respective application by clicking on it.
2. In the **Activity log** section, open the context menu for the desired version by clicking the menu icon and select **Set as active** to make it the active version.

#### To reactivate a single application

If a hosted application is not deployed correctly, users may reactivate it.

1. Open the application properties for the respective application by clicking on it.
3. In the **Activity log** section, open the context menu for the desired version by clicking the menu icon and select **Reactivate**.

The selected application will be reactivated by removing the respective files from the application directory and unpacking the host application package again.

### Features

Features are applications which are built-in and not represented by an explicit artifact (like microservices or web applications).

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

>**Info:** All applications listed here are of the type "Feature".

Other features may show up, depending on the individual subscriptions of your tenant.

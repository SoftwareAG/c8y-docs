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


    Custom applications may be:


    Web applications uploaded to the platform.

    Links to external applications running elsewhere.

    Packages deployed to the platform.

    Duplicates of subscribed applications.


    Click on an application to view the application details. To add an application, click **Add application** and follow the instructions in the wizard, see also the *User guide*."
  - label: extensions
    title: Extensions
    content: "On the **Extensions** page, you find a list of all extension packages available in your tenant. Extension packages are combinations of plugins and blueprints which can be packed together into a single file and deployed to the platform. To add a new extension package, click **Add extension package** at the top right."
  - label: features
    title: Features
    content: "On the **Features** tab, you will find a list of all features subscribed to your tenant. Features are applications which are built-in and not represented by an explicit artifact (like microservices or web applications)."

---

The {{< product-c8y-iot >}} platform distinguishes between applications and microservices, see also [Developing applications](/concepts/applications) in the *Concepts guide*.

* [Applications](#applications) -  all web applications either subscribed to the tenant or owned by the tenant.

* [Microservices](#managing-microservices) - server-side applications used to develop further functionality on top of {{< product-c8y-iot >}}.

Both can be accessed via the **Ecosystem** menu in the navigator.

Additionally, in {{< enterprise-tenant >}}s, it is possible to configure **Default subscriptions**, that means you can specify a list of applications that are subscribed by default to every new tenant on creation and/or to all existing tenants on platform upgrade. For details, see [Enterprise tenant > Default subscriptions](/users-guide/enterprise-tenant/#default-subscriptions).

{{< c8y-admon-req >}}
ROLES & PERMISSIONS:

* To view applications and microservices: READ permission for the "Application management" permission type
* To manage applications and microservices (create, update, copy, delete): ADMIN permission for the "Application management" permission type

On tenant creation there are default roles available that can be used as sample configuration for the above mentioned permissions:
* Tenant Manager - manages tenant-wide configurations like applications, tenant options and business rules.

Note that for complete application management some additional permission types with different permission levels might be required per feature, for example:
* [Default subscriptions](/users-guide/enterprise-tenant/#default-subscriptions) for the Enterprise tenant additionally requires READ and ADMIN permissions for the "Option management" permission type.
* [Managing subscriptions](/users-guide/enterprise-tenant/#applications) for the Enterprise tenant additionally requires READ and ADMIN permissions for the "Tenant management" permission type.

{{< /c8y-admon-req >}}


{{< c8y-admon-related >}}
- [Managing and monitoring microservices](#managing-microservices) for information on applications of the type microservice.
- [Managing permissions](#managing-permissions) for details on assigning roles and permissions for the usage of {{< product-c8y-iot >}} applications.
- [Changing application settings](/users-guide/administration/#default-app) for information on changing the application settings for your account.
- [Enterprise tenant > Managing tenants > Applications](/users-guide/enterprise-tenant/#applications) for information on application subscriptions on tenant level.
- [Cockpit > Widgets collection > Application](/users-guide/cockpit/#applications) for information on the "Application" widget.
- [Developing applications](/concepts/applications) in the *Concepts guide* for an overview on the basic concepts of applications in {{< product-c8y-iot >}}.
- The [Web SDK guide](/web/overview) for information on how to develop web applications on top of {{< product-c8y-iot >}} and how to [customize](/web/application-configuration) or [extend](/web/tutorials/#extend-an-existing-application) existing applications using the Web SDK.
- [Applications](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Applications) in the {{< openapi >}} for managing applications via REST.
{{< /c8y-admon-related >}}

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

{{< c8y-admon-info >}}
In the **All applications** tab, subscribed applications are labeled as "Subscribed". Subscribed applications may not be added, modified or removed by the user but only by a tenant administrator.
{{< /c8y-admon-info >}}

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
<td style="text-align:left"><a href="/users-guide/device-management" class="no-ajaxy">Device management</a></td>
<td style="text-align:left">Manage and monitor devices, and control and troubleshoot devices remotely</td>
<td style="text-align:left">devicemanagement</td>
<td style="text-align:left">Web application</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

<tr>
<td style="text-align:left"><a href="/streaming-analytics/overview-streaming-analytics/" class="no-ajaxy">Streaming Analytics</a></td>
<td style="text-align:left">Manage and edit Analytics Builder models and EPL apps (if enabled)</td>
<td style="text-align:left">Streaming Analytics</td>
<td style="text-align:left">Web application</td>
<td style="text-align:left">{{< standard-tenant >}} (limited version for Analytics Builder), {{< enterprise-tenant >}} (full version)</td>
</tr>

<tr>
<td style="text-align:left"><a href="/dtm/dtm-introduction/" class="no-ajaxy">Digital twin manager</a></td>
<td style="text-align:left">Create and manage basic building blocks for Digital twins: Assets, Asset models and Asset properties </td>
<td style="text-align:left">digital-twin-manager</td>
<td style="text-align:left">Web application</td>
<td style="text-align:left">{{< standard-tenant >}}, {{< enterprise-tenant >}}</td>
</tr>

</tbody>
</table>


<a name="own-applications"></a>
### Custom applications

Custom applications may be:

* Web-based UI applications, either deployed as standalone applications or as plugins deployed into a specific application (for example, a widget to the Cockpit dashboard).
* Links to an application running elsewhere.
* Duplicates of subscribed applications (in order to be able to customize them).

In the **All applications** tab, custom applications are labeled as "Custom".  

<a name="adding-applications"></a>
#### To add a custom application

Click **Add application** at the top right of the **All applications** tab.

In the resulting dialog box, select one of the following methods:

* [Upload web application](#uploading-zip-files) - drop a ZIP file or browse for it in your file system.
* [External application](#external-application) - link to an application running elsewhere.
* [Install from available packages](#blueprint-application) - select a package blueprint.
* [Duplicate existing application](#clone-application) - create a copy of an existing application.

<a name="uploading-zip-files"></a>
##### To upload a web application

1. Click **Add application** at the top right of the **All applications** tab.
2. Select **Upload web application**.
3. In the resulting dialog box, drop a ZIP file or browse for it in your file system.

The application is created once the ZIP file has been successfully uploaded.

{{< c8y-admon-important >}}
The ZIP file must contain the *index.html* and *cumulocity.json* in its root directory, otherwise the application will not work.
{{< /c8y-admon-important >}}

<a name="external-application"></a>
##### To link to an external application

1. Click **Add application** at the top right of the **All applications** tab.
2. Select **External application**.
3. In the resulting dialog box, enter the name of the application. The name will be shown as title of the application.
5. Enter an application key, used to identify this application.
6. Enter the external URL where the application can be reached.
7. Click **Save** to create the application.

For details on the fields, see also [Application properties](#application-properties) below.

<a name="blueprint-application"></a>
##### To install an application from a blueprint

1. Click **Add application** at the top right of the **All applications** tab.
2. Select **Install from available packages**.
3. Select the desired package.
4. In the resulting dialog box, enter the name of the application. The name will be shown as title of the application.
5. Enter an application key, used to identify this application.
6. Enter the path where the application can be reached.
7. Click **Save** to create the application.

For details on the fields, see also [Application properties](#application-properties) below.

<a name="clone-application"></a>
##### To duplicate an application

Duplicating an application might be useful if you want to customize a subscribed application according to your needs. Duplicating a subscribed application creates a copy of the application as an own application, with a link to the original application.

1. Click **Add application** at the top right of the **All applications** tab.
2. In the upcoming dialog, select **Duplicate existing application**.
3. Select the desired application from the dropdown list, for example "Cockpit".
4. In the next window, provide a name for the application, an application key to identify the application, and a path as part of the URL to invoke the application. Per default, the values of the original application are provided, extended by a number. If you set the path to the path of the original subscribed application, your own application will overrule the subscribed application.
    {{< c8y-admon-info >}}
The platform restricts the use of the prefix "feature-" in the **Name** field. You cannot create applications using this prefix in the application name. This also applies to existing applications in cases where the duplicate application feature is used.
    {{< /c8y-admon-info >}}
5. Finally, click **Duplicate** to create the application.

{{< c8y-admon-info >}}
In case the application has been subscribed to the tenant, there is an additional toggle **Overrule subscribed application**. If you turn this toggle on, the values for name, key and path will be inherited from the original application and your duplicated application will overrule the subscribed application. Turn it off, to modify the values.<br><br><img src="/images/users-guide/Administration/admin-application-duplicate-3.png" alt="Duplicate application">
{{< /c8y-admon-info >}}

For details on the fields, see also [Application properties](#application-properties) below.

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
### Extensions {#extensions}

Extensions or packages are combinations of plugins and blueprints which can be packed together into a single file and then be deployed to the platform. Thus, they offer better shareability and reusability of UI features across different applications and allow to add UI features to applications without coding knowledge.

Extension packages can contain two types of content:

- [**Plugins**](#plugins) can be used to extend existing applications without the need of re-building the application.
- **Blueprints** are combinations of multiple UI functionalities which can be hosted by the platform and can be used to create a new application from scratch.

Blueprint applications must be deployed, while plugins are added to other applications. This allows you to scaffold entire solutions or to extend existing ones. Due to the micro frontend technology, this can happen at runtime without rebuilding.

Packages can be located on the **Extensions** page.

<img src="/images/users-guide/Administration/admin-application-packages.png" alt="Packages view">

Packages can be filtered by name, creator type, availability and type of content.

To add a new extension package click **Add extension package** at the top right.

By clicking on a package, you can see the package details such as **Extension package overview** which includes a description and images as well as some meta information which is taken from the *package.json*.

Additionally, it is possible to view all available plugins within the selected package at the right. To install a plugin click **Install plugin** and select the desired application.  

<img src="/images/users-guide/Administration/admin-application-packages-info.png" alt="Packages overview">

In the **Versions** tab, you see all previously uploaded binaries related to the current package. The binaries displayed on this tab can be downloaded via the context menu next to each package version entry.

<img src="/images/users-guide/Administration/admin-application-packages-versions.png" alt="Versions view">

You can select or upload different versions. Versions indicate the state of the package. They can be used to verify whether a certain package is outdated and needs to be updated. By clicking on a version additional information is provided such as package contents, applications or plugins. Tags can be used to give versions meaningful names. The "latest" tag is used to indicate the default version which will be selected in case no tag is provided. The "latest" tag is set by default to the latest version whenever a version is uploaded without a given tag.

To switch to a different version open the context menu for the desired version and click **Set as latest**. To delete a version click **Delete**.

### Plugins {#plugins}

Switch to the **Plugins** tab of an application to view all plugins installed on an application.

<img src="/images/users-guide/Administration/admin-application-plugins-grid.png" alt="Plugins grid" style="max-width: 100%">

In the **Plugins** tab you can add and remove plugins. Additionally, you can install plugins to an application.

<a name="editing-and-removing"></a>
### To edit an application

Simply click the application or click the menu icon at the right of an entry and then click **Edit**.

In the **Properties** tab, several fields can be modified, depending on the application type (see [Application properties](#application-properties)).

{{< c8y-admon-important >}}
Never change the system application names (such as "Device management", "Cockpit"). Otherwise, tenant initialization will fail.
{{< /c8y-admon-important >}}

### To delete an application

Click the menu icon at the right of an entry and then click **Delete**. You can also delete an application directly from the **Properties** tab in the application details.

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

{{< c8y-admon-info >}}
The archive functionality is not available for subscribed applications, as only the owner of the application can perform these actions.
{{< /c8y-admon-info >}}

#### To restore an older application version

Users can restore previous versions of an application from an archive.

1. Open the application properties for the respective application by clicking on it.
2. In the **Activity log** section, open the context menu for the desired version by clicking the menu icon and select **Set as active** to make it the active version.

#### To reactivate a single application

If a hosted application is not deployed correctly, users may reactivate it.

1. Open the application properties for the respective application by clicking on it.
3. In the **Activity log** section, open the context menu for the desired version by clicking the menu icon and select **Reactivate archive**.

The selected application will be reactivated by removing the respective files from the application directory and unpacking the web application package again.

### Packages

Packages are combinations of plugins and blueprints which can be packed together into a single file and then be deployed to the platform. Thus, packages offer better shareability and reusability of UI features across different applications and allow to add UI features to applications without coding knowledge.

Packages can contain two types of applications:

- [**Plugins**](#application-plugins) can be used to extend existing applications without the need of re-building the application.
- **Blueprints** are combinations of multiple UI functionalities which can be hosted by the platform and can be used to create a new application from scratch.

Packages can be located on the **Packages** tab in the **Applications** page.

<img src="/images/users-guide/Administration/admin-application-packages.png" alt="Packages view">

To add a new package click **Add package** at the top right.

By clicking on a package, you can see the package details such as **Package overview** which includes a description and images as well as some meta information which is taken from the *package.json*.

Additionally, it is possible to view all available plugins within the selected package at the right. To install a plugin click **Install plugin** and select the desired application.  

<img src="/images/users-guide/Administration/admin-application-packages-info.png" alt="Packages overview">

In the **Versions** tab, you see all previously uploaded binaries related to the current package. The binaries displayed on this tab can be downloaded via the context menu next to each package version entry.

<img src="/images/users-guide/Administration/admin-application-packages-versions.png" alt="Versions view">

You can select or upload different versions. Versions indicate the state of the package. They can be used to verify whether a certain package is outdated and needs to be updated. By clicking on a version additional information is provided such as package contents, applications or plugins. Tags can be used to give versions meaningful names. The "latest" tag is used to indicate the default version which will be selected in case no tag is provided. The "latest" tag is set by default to the latest version whenever a version is uploaded without a given tag.

To switch to a different version open the context menu for the desired version and click **Set as latest**. To delete a version click **Delete**.

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

{{< c8y-admon-info >}}
All applications listed here are of the type "Feature".
{{< /c8y-admon-info >}}

Other features may show up, depending on the individual subscriptions of your tenant.

---
weight: 10
title: Using applications
layout: bundle
section:
  - app_development
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
  - label: packages
    title: Packages
    content: "On the **Packages** tab, you will find a list of all packages available in your tenant. Packages are combinations of plugins and blueprints which can be packed together into a single file and deployed to the platform. To add a new package, click **Add package** at the top right."
  - label: features
    title: Features
    content: "On the **Features** tab, you will find a list of all features subscribed to your tenant. Features are applications which are built-in and not represented by an explicit artifact (like microservices or web applications)."

---
Click **Applications** in the **Ecosystem** menu in the navigator to display a list or grid of all applications in your account.

<img src="/images/users-guide/Administration/admin-all-applications.png" alt="All applications" style="max-width: 100%">

In the **All applications** tab, you can see all applications available in your tenant. There are two kinds of applications:

- [Subscribed applications](#subscribed-applications) - applications subscribed to the tenant, either provided by the platform (as default applications) or a service provider.
- [Custom applications](#own-applications) - applications owned by the tenant. You can [add custom applications](#adding-applications) in various ways as own applications.

Your applications are available through the application switcher in the top bar.

<img src="/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">



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

### Application plugins

Switch to the **Plugins** tab to view all plugins installed on an application. Plugins can be used to extend existing applications without the need of re-building the application.

<img src="/images/users-guide/Administration/admin-application-plugins-grid.png" alt="Plugins grid" style="max-width: 100%">

In the **Plugins** tab you can add and remove plugins. Additionally, you can install plugins to an application.

<a name="editing-and-removing"></a>
### To edit an application

Simply click the application or click the menu icon at the right of an entry and then click **Edit**.

In the **Properties** tab, several fields can be modified, depending on the application type (see [Application properties](#application-properties)).

{{< c8y-admon-important >}}
Never change the system application names (such as "Device Management", "Cockpit"). Otherwise, tenant initialization will fail.
{{< /c8y-admon-important >}}

### To delete an application

Click the menu icon at the right of an entry and then click **Delete**.

If you delete an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally, the users will then also benefit from future upgrades of the subscribed application.

It is not possible to delete subscribed applications. This can only be done by the owner of the subscribed application.

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

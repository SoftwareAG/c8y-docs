---
weight: 30
title: Managing applications
layout: redirect
helpcontent:
  - label: applications
    title: Applications
    content: "In the **All applications** tab, you can see all applications available in your tenant. There are two kinds of applications:


    * subscribed applications - applications subscribed to the tenant, either provided by the platform or a service provider. Cumulocity IoT provides a variety of applications for different purposes. Find a list of all applications in *Administration > Managing applications > Subscribed applications* in the *User guide*.
    - custom applications - applications owned by the tenant. You can add custom applications in various ways as own applications.


    To add an application, click **Add application** and follow the instructions in the wizard, see also *Administration > Managing applications > Custom applications* in the *User guide*.


    Click on an application card to view the application properties."
---

The {{< product-c8y-iot >}} platform distinguishes between applications and microservices.

* [Applications](#subscribed-applications) -  all applications either subscribed to the tenant or owned by the tenant.
* [Microservices](#managing-microservices) - server-side applications used to develop further functionality on top of {{< product-c8y-iot >}}, for details see [Managing microservices](#managing-microservices)

Both can be accessed via the **Ecosystem** menu in the navigator.

Additionally, in {{< enterprise-tenant >}}s, it is possible to configure **Default subscriptions**, i.e. you can specify a list of applications that are subscribed by default to every new tenant on creation and/or to all existing tenants on platform upgrade. For details, see [Enterprise tenant> Default subscriptions](/users-guide/enterprise-tenant/#default-subscriptions).

<img src="/images/users-guide/Administration/admin-menu.png" alt="Applications menu">

### Applications

Click **Applications** in the **Ecosystem** menu in the navigator to display a list or grid of all  applications in your account.

In the **All applications** tab, you can see all applications available in your tenant. There are two kinds of applications:

- [subscribed applications](#subscribed-applications) - applications subscribed to the tenant, either provided by the platform or a service provider.
- [custom applications](own-applications) - applications owned by the tenant. Users can [add custom applications](#adding-applications) in various ways as own applications.


<a name="subscribed-applications"></a>
#### Subscribed applications

{{< product-c8y-iot >}} provides a variety of applications for different purposes. Depending on your installation and/or optional services your tenant will show a selection of the potentially available applications.

Below you find all applications which are by default available in a {{< standard-tenant >}} and in an {{< enterprise-tenant >}}. In addition, numerous optional applications might be subscribed to your tenant.

The columns in the lists show the following information:

* **Application**: Application name as visible in the Administration application.
* **Functionality**: Brief description.
* **Name**: Identification of the application in the API. In case you want to subscribe a tenant to the application using an API, use this string in the argument (as name).
* **Type**: Technical type of the application. "Feature" refers to built-in application subscriptions, i.e. these applications are not represented by an explicit artefact (microservice or web application).

>**Info:** In the **All applications** tab, subscribed applications are labeled as "subscribed". Subscribed applications may not be added, modified or removed by the user but only by a tenant administrator.

##### Default applications in the Standard tenant

In the {{< standard-tenant >}} you will find the following default applications:

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Application</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Name (as used in the API)</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="/users-guide/administration" class="no-ajaxy">Administration</a></td>
<td style="text-align:left">Lets account administrators manage users, roles, tenants and applications.</td>
<td style="text-align:left">administration</td>
<td style="text-align:left">Web app</td>
</tr>
<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/" class="no-ajaxy">Apama-ctrl*</a></td>
<td style="text-align:left">Runtime for Analytics Builder, EPL Apps, and smart rules.</td>
<td style="text-align:left">apama-ctrl-* (different strings for different size/capability options)</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/apama/overview-analytics/" class="no-ajaxy">Streaming Analytics</a></td>
<td style="text-align:left">Manage and edit Analytics Builder models and EPL apps (if enabled).</td>
<td style="text-align:left">Streaming Analytics</td>
<td style="text-align:left">Web app</td>
</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/cockpit" class="no-ajaxy">Cockpit</a></td>
<td style="text-align:left">Manage and monitor IoT assets and data from a business perspective.</td>
<td style="text-align:left">cockpit</td>
<td style="text-align:left">Web app</td>
</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/device-management" class="no-ajaxy">Device Management</a></td>
<td style="text-align:left">Manage and monitor devices, and control and troubleshoot devices remotely.</td>
<td style="text-align:left">devicemanagement</td>
<td style="text-align:left">Web app</td>
</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/device-management#simulator" class="no-ajaxy">Device simulator</a></td>
<td style="text-align:left">Simulate all aspects of IoT devices.</td>
<td style="text-align:left">device-simulator</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/cockpit#reports" class="no-ajaxy">Report agent</a></td>
<td style="text-align:left">Allows to schedule data exports from within the Cockpit application.</td>
<td style="text-align:left">report-agent</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/cockpit#smart-rules" class="no-ajaxy">Smart Rules</a></td>
<td style="text-align:left">Use the Smart Rule engine and create <a href="/users-guide/cockpit#smart-rules" class="no-ajaxy">Smart Rules</a> to perform actions based on realtime data. Requires the following application: "Apama"</td>
<td style="text-align:left">smartrule</td>
<td style="text-align:left">Microservice</td>
</tr>
</tbody>
</table>


##### Default Enterprise applications

In the {{< enterprise-tenant >}} you will find the following additional applications:

<table>
<col width="200">
<col width="350">
<col width="200">
<thead>
<tr>
<th style="text-align:left">Application</th>
<th style="text-align:left">Functionality</th>
<th style="text-align:left">Name (as used in the API)</th>
<th style="text-align:left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant/#branding" class="no-ajaxy">Branding</a></td>
<td style="text-align:left">Customize the look of your tenants to your own preferences.</td>
<td style="text-align:left">feature-branding</td>
<td style="text-align:left">Feature</td>
</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant/#data-broker" class="no-ajaxy">Data Broker</a></td>
<td style="text-align:left">Lets you share data selectively with other tenants.</td>
<td style="text-align:left">feature-broker</td>
<td style="text-align:left">Feature</td>
</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant#customization" class="no-ajaxy">SSL management</a></td>
<td style="text-align:left">Activate your own custom domain name by using a SSL certificate.</td>
<td style="text-align:left">sslmanagement</td>
<td style="text-align:left">Microservice</td>
</tr>
<tr>
<td style="text-align:left"><a href="/users-guide/enterprise-tenant/#user-hierarchies" class="no-ajaxy">User hierarchies</a></td>
<td style="text-align:left">Reflect independent organizational entities in {{< product-c8y-iot >}} that share the same database.</td>
<td style="text-align:left">feature-user-hierarchy</td>
<td style="text-align:left">Feature</td>
</tr>
</tbody>
</table>

<a name="own-applications"></a>
### Custom applications

Custom applications may be

* duplicates of subscribed applications (in order to be able to customize them)
* web-based UI applications, either deployed as standalone applications or as plugins deployed into a specific application (e.g. a widget to the Cockpit dashboard)
* server-side business logic deployed through microservices

Your applications are available through the application switcher in the top bar which allows to easily switch between applications.

<img src="/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">

In the **All applications** tab, custom applications are labeled as "custom".  

<a name="adding-applications"></a>
#### To add a custom application

Click **Add application** at the top right of the **All applications** tab.

<img src="/images/users-guide/Administration/admin-application-add.png" alt="Add application methods">

In the resulting dialog box, choose one of the following methods:

* [Upload web application](#uploading-zip-files) - by dropping a ZIP file or browsing for it on your computer.
* [External application](#external-application) - by linking to an application running elsewhere
* [Duplicate existing application](#clone-application) - by creating a copy of an existing application

<a name="uploading-zip-files"></a>
##### To upload a web application

1. Click **Add application** at the top right of the **All applications** tab.
2. Select **Upload web application**.
3. In the resulting dialog box, drop a ZIP file or browse for it on your computer.

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


<a name="editing-and-removing"></a>
#### To edit an application

Simply click the application or click the menu icon at the right of an entry and then click **Edit**.

In the **Properties** tab, several fields can be modified, depending on the application type (see [Application properties](#application-properties)).

>**Important:** Never change the system application names (e.g. "Device Management", "Cockpit"). Otherwise, tenant initialization will fail.

#### To delete an application

Click the menu icon at the right of an entry and then click **Delete**.

If you delete an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally, the users will then also benefit from future upgrades of the subscribed application.

It is not possible to delete subscribed applications. This can only be done by the owner of the subscribed application.

#### Uploading archives

For custom applications, multiple file versions can be stored in {{< product-c8y-iot >}} when they were created by uploading either a ZIP file or a MON file. Each version is called an archive. You can upload different versions at the same time and switch between these versions.

##### To upload an archive

1. Open the application properties by clicking on a particular application.
2. Click the plus button at the bottom of the **Activity log** section and browse for the archive on your computer or simply drop the archive file.
3. Click **Upload** to upload the archive to your {{< product-c8y-iot >}} account.

<img src="/images/users-guide/Administration/admin-application-archive.png" alt="Application archive">

Once uploaded, the recently uploaded version is automatically the active version, i.e. the version of the application that is currently being served to the users of your account. This version cannot be deleted.

> **Info:** The archive functionality is not available for subscribed applications, as only the owner of the application can perform these actions.

##### To restore an older application version

Users can restore previous versions of an application from an archive.

1. Open the application properties by clicking on a particular application.
2. In the **Activity log** section, open the context menu for the desired version by clicking the menu icon and select **Set as active** to make it the active version.
3. Click **Delete** to delete the version from the archive.

<img src="/images/users-guide/Administration/admin-application-set-as-archive.png" alt="Application set as archive">

##### To reactivate a single application

If a hosted application is not deployed correctly, users may reactivate it.

1. Open the application properties by clicking on a particular application.
3. In the **Activity log** section, click **Reload** at the top right.

<img src="/images/users-guide/Administration/admin-reactivate.png" alt="Refresh application">  

The selected application will be reactivated by removing the respective files from the application directory and unpacking the host application package again.

---
weight: 30
title: Managing applications
layout: redirect
---

In the Cumulocity platform we distinguish between two kinds of applications:

* [Subscribed applications](#subscribed-applications) -  all applications subscribed to the tenant (either provided by the platform or a service provider) but not owned
* [Own applications](#own-applications) - all applications owned by the tenant

Both applications are available through the **Applications** menu in the navigator:

<img src="/guides/images/users-guide/Administration/admin-menu.png" alt="Applications menu">

Subscribed applications may not be added, modified or removed by the user, while users can [add custom applications](#add-applications) in various ways as own applications. 

### <a name="application-properties"></a>Application properties

Click on an application card to view the application properties.

<img src="/guides/images/users-guide/Administration/admin-application-properties.png" alt="Application properties" style="max-width: 100%">

Each application will show the following properties, depending on the application type:

<table>
<col width= 100>
<col width= 250>
<col width= 150>
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Hosted (Web app)</th>
<th style="text-align:left">Microservice</th>
<th style="text-align:left">External</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Unique ID to identify the application</td>
<td style="text-align:left">Automatically provided</td>
<td style="text-align:left">Automatically provided</td>
<td style="text-align:left">Automatically provided</td>
</tr>
<tr>
<td style="text-align:left">Name</td>
<td style="text-align:left">Application name. Will be shown as title of the application in the top bar and in the application switcher.</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Automatically created, based on the zip file name</td>
<td style="text-align:left">Specified by the user</td>
</tr>
<tr>
<td style="text-align:left">Application key</td>
<td style="text-align:left">Used to identify the application and to make the application available for subscription, see the <a href="/guides/concepts/applications" class="no-ajaxy">Concepts Guide</a>.</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Automatically created based on the zip file name</td>
<td style="text-align:left">Specified by the user</td>
</tr>
<tr>
<td style="text-align:left">Type</td>
<td style="text-align:left">Application type</td>
<td style="text-align:left">Hosted application</td>
<td style="text-align:left">Microservice</td>
<td style="text-align:left">External</td>
</tr>
<tr>
<td style="text-align:left">Path</td>
<td style="text-align:left">Part of the URL invoking the application</td>
<td style="text-align:left">Automatically created</td>
<td style="text-align:left">Automatically created as .../service/&lt;microservice name&gt;</td>
<td style="text-align:left">Specified by the user. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".</td>
</tr>
</tbody>
</table>

>**Info**: ID and type cannot be changed.

### <a name="subscribed-applications"></a>Subscribed applications

Cumulocity provides a variety of applications for different purposes. 

by default, the following applications are available in the Standard Tenant:

<table>
<thead>
<tr>
<th style="text-align:center">Application</th>
<th style="text-align:left">Functionality</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/administration" class="no-ajaxy">Administration</a></td>
<td style="text-align:left">Lets account administrators manage users, roles, tenants and applications.</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/event-language" class="no-ajaxy">Cep</a></td>
<td style="text-align:left">Define business operations based on realtime data by using the Esper CEP engine. This CEP variant uses a shared instance for multiple tenants. See "Cep-small" for a per-tenant approach.</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/cockpit" class="no-ajaxy">Cockpit</a></td>
<td style="text-align:left">Manage and monitor IoT assets and data from a business perspective.</td>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/device-management" class="no-ajaxy">Device Management</a></td>
<td style="text-align:left">Manage and monitor devices, and control and troubleshoot devices remotely.</td>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/device-management#simulator" class="no-ajaxy">Device simulator</a></td>
<td style="text-align:left">Simulate all aspects of IoT devices.</td>
</tr>
<tr>
<td style="text-align:center"><a href="/guides/users-guide/cockpit#smart-rules" class="no-ajaxy">Smart Rules</a></td>
<td style="text-align:left">Use the Smart Rule engine and create Smart Rules to perform actions based on realtime data. Requires one of the following applications: "Cep", "Apama"</td>
</tr>
</tbody>
</table>

Your tenant may show other subscribed applications, depending on your installation and/or  optional services. For a detailed list of all potentially available applications, including information on the application type, its availability and the string to be used in the API to reference a particular application, refer to [Applications > application list](/guides/reference/applications/#application-names) in the Reference guide. 

### <a name="own-applications"></a>Own applications

Own applications may be 

* duplicates of subscribed applications (in order to be able to customize them)
* web-based UI applications, either deployed as standalone applications or as plugins deployed into a specific application (e.g. a widget to the Cockpit dashboard)
* server-side business logic deployed through microservices

Your applications are available through the application switcher in the top bar which allows to easily switch between applications.

<img src="/guides/images/users-guide/Administration/admin-app-switcher.png" alt="App switcher">

You manage your applications under **Own applications**, accessible through the **Applications** menu. 

In the **Own applications** page you will find a list of the applications available in your account.

<img src="/guides/images/users-guide/Administration/admin-applications-own.png" alt="Own applications">

To display further information on the application, simply click its card. For details on the fields, refer to [Application properties](#application-properties) below. 

To directly open an application from here, click **Open** on the respective application card. 

Click **Add application** in the **Own applications** page to add an application to your account, see [Adding own applications](#adding-applications).

Click the menu icon at the top right of an application to open a context menu from where you can [**Edit** or **Remove**](#editing-and-removing) an application. 

#### <a name="adding-applications"></a>To add an own application

Click **Add application** in the **Own applications** page. 

<img src="/guides/images/users-guide/Administration/admin-application-add.png" alt="Add application methods">

In the resulting dialog box, choose one of the following methods:

* [Upload web application](#uploading-zip-files) - by dropping a ZIP file or browsing for it on your computer.
* [Upload microservice](#uploading-microservices) - by dropping a ZIP file or browsing for it on your computer
* [External application](#external-application) - by linking to an application running elsewhere 
* [Duplicate existing application](#clone-application) - by creating a copy of an existing application

##### <a name="uploading-zip-files"></a>To upload a web application

1. Click **Add application** in the **Own applications** page.
2. Select **Upload web application**.
3. In the resulting dialog box, drop a ZIP file or browse for it on your computer.

The application is created once the ZIP file has been successfully uploaded.

<img src="/guides/images/users-guide/Administration/admin-application-upload-web-app.png" alt="Uploading zip file">

##### <a name="uploading-microservices"></a>To upload a microservice

1. Click **Add application** in the **Own applications** page.
2. Select **Upload microservice**.
3. In the resulting dialog box, drop a ZIP file or browse for it in your file system. Note that the size limit of the file to be uploaded is 500 MB.

The microservice application is created once the ZIP file has been successfully uploaded.

>**Important**: The ZIP file must contain the application manifest and the Docker image of the microservice. Refer to [Packing](/guides/microservice-sdk/concept/#packing) in the Microservice SDK guide under **General aspects** in order to prepare and deploy the microservice package.


##### <a name="external-application"></a>To link to an external application

1. Click **Add application** in the **Own applications** page.
2. Select **External application**.
<br><br>
<img src="/guides/images/users-guide/Administration/admin-application-external.png" alt="External application">
<br><br>
3. In the resulting dialog box, enter the name of the application. The name will be shown as title of the application. 
5. Enter an application key, used to identify this application.
6. Enter the external URL where the application can be reached. 
7. Click **Save** to create the application.

For details on the fields, see also [Application properties](#application-properties) below. 

##### <a name="clone-application"></a>To duplicate an application

Duplicating an application might be useful if you want to customize a subscribed application according to your needs. Duplicating a subscribed application creates a copy of the application as an own application, with a link to the original application.

1. Click **Add application** in the **Own applications** page.
2. In the upcoming dialog, select **Duplicate existing application**.
3. Select the desired application from the dropdown list. 
<br><br>
<img src="/guides/images/users-guide/Administration/admin-application-duplicate.png" alt="Duplicate application">
<br><br>
4. In the next window, provide a name for the application. By default, the name of the original application is provided, extended by a number.
<br><br>
<img src="/guides/images/users-guide/Administration/admin-application-duplicate-2.png" alt="Duplicate application">
<br><br>
5. Provide an application key, used to identify this application. By default, the key of the original application is provided, extended by a number.
6. Provide the application path as part of the URL to invoke the application. By default, the path of the original application is provided, extended by a number. If you set it to the path of the original subscribed application, your own application will overrule the subscribed application. 
7. Finally, click **Duplicate** to create the application.

For details on the fields, see also [Application properties](#application-properties) below.

>**Info**: If you want your "own application" to overrule a subscribed standard application, the path of the "own application" needs to be set to the path of the original subscribed application.


#### <a name="editing-and-removing"></a>To edit an own application

**Edit**

Simply click the application or click the menu icon at the right of an entry and then click **Edit**. 

In the **Properties** tab, several fields can be modified, depending on the application type (see [Application properties](#application-properties)).

>**Important:** Never change the system application names (e.g. "Device Management", "Cockpit"). Otherwise, tenant initialization will fail. 


#### To remove an own application

Click the menu icon at the right of an entry and then click **Remove**. 

If you remove an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally, the users will then also benefit from future upgrades of the subscribed application.

It is not possible to remove subscribed applications. This can only be done by the owner of the subscribed application.


#### <a name="add-remove-plugin"></a>Adding and removing plugins

>**Important**: This plugin functionality is deprecated and only available in versions earlier then 9.16.

In order to configure and extend the functions provided with an application, you can add plugins to it. 

>**Info:** Because the application itself is modified when adding a plugin, plugins can only be added to own applications. When adding a plugin to a subscribed application, the application must be duplicated first into an own application. This process is supported by the Administration Application wizard.

To add additional plugins, click **Add Plugin** on the card of the desired application in the **Own applications** page. 

The **Plugin** tab for the application will open up, showing all existing plugins and allowing to add plugins by simply dropping the respective ZIP file or browsing for it on your computer.

![Plugins](/guides/images/users-guide/plugins.png)

To remove a plugin, hover over it and click **Remove** at the right.

The following tables list the navigator and menu items with their respective plugins.


|Navigator item|Plugin
|:---|:---|
|Welcome|Welcome screen
|Home|Cockpit home screen
|Smart Rules|Smart Rules UI
|Groups|Groups Hierarchy
|Data Explorer|Data Point Explorer UI
|Data Point Library|Data Point Explorer UI
|Reporting|Reporting
|Reports|Dashboard (Note: that there are two plugins with this name. Select the one with the description: "Reports are stand alone dashboards without a context".)
|Alarms|Alarm Management|

|Menu Item|Plugin|
|:--------|:-----|
|Info|Not possible to disable|
|Subassets|Not possible to disable|
|Permissions|Device Permission Management Plugin|
|Data Explorer|Data Point Explorer UI|

Be aware of the "UI" at the end of the plugin names.

#### Uploading archives

Multiple archive file versions can be stored in Cumulocity when they were created by uploading either a zip file or a mon file. Each version is called an archive. You can upload different versions at the same time and switch between these versions.

##### To upload an archive

1. Open the application by clicking on it.
2. Switch to the **Archives** tab.
3. Click **Upload archive** and browse for the archive on your computer or simply drop the archive file.
4. Click **Upload** to upload the archive to your Cumulocity account.

<img src="/guides/images/users-guide/Administration/admin-application-archive.png" alt="Application archive">

Once uploaded, the recently uploaded version is automatically the active version, i.e. the version of the application that is currently being served to the users of your account. This version cannot be deleted. 

>**Info**: The **Archive** tab is not available for subscribed applications, as only the owner of the application can perform this action.

##### To restore an older application version

Users can restore previous versions of an application from an archive.

1. Open the application by clicking on it.
2. Switch to the **Archives** tab.
3. Open the context menu for the desired version by clicking the menu icon and select **Set as active** to make it the active version.
4. Click **Remove** to remove the version from the archive.

<img src="/guides/images/users-guide/Administration/admin-application-set-as-archive.png" alt="Application set as archive">

### Monitoring microservices

You can monitor microservices hosted by Cumulocity in two ways.

#### Status information

The status of the microservice can be checked on the **Status** tab of the respective application. 

<img src="/guides/images/users-guide/Administration/admin-microservice-status.png" alt="Microservice status" style="max-width: 100%">

The following information is provided on the **Status** tab:

* Instances: Number of active, unhealthy and desired microservice instances for the current tenant
* Subscribed tenants: Number of active, unhealthy and desired microservice instances for all subtenants subscribed to the microservice
* Alarms: Alarms for given application, provided in realtime
* Events: Events for given application, provided in realtime

The status information is available for subscribed applications as well as for own applications. Information on subscribed subtenants is only visible for the application owner. 

To view the status you need the following permissions: ROLE_APPLICATION_MANAGEMENT_READ and ROLE_INVENTORY_READ

#### Log files

Moreover, you may view logs to get more details on the status of microservices.

To view logs open the **Log** tab of the respective microservice.

<img src="/guides/images/users-guide/Administration/admin-microservice-log.png" alt="Microservice log" style="max-width: 100%">

At the top of the page, the instance of the microservice, for which you want to view the logs, can be selected. Moreover you can adjust the font size and the theme at the right.

If your microservice was re-scaled into two instances you should be able to switch between them, but it is not possible to see the logs from both instances at once.

There is no possibility to see the logs from the previously running instances, however inside the instance there is a docker container running and if only this one was restarted (not the whole instance) you should see the logs from the currently running and also lately terminated docker container.

Logs are always loaded from the docker container using both `stdout` and `stderr` sources and there is no possibility to distinguish/filter by the source. 

Initially, the **Log** tab shows the logs of the microservice instance for the last 10 minutes. The exact time range for which the logs are displayed is shown below the logs.

Click the arrow buttons "Next" or "Previous" to increase or respectively reduce the time range in 10 minutes steps, there is no possibility to get the logs for the custom date and time.

If there have not been any logs in the selected time range, a message is shown accordingly:

<img src="/guides/images/users-guide/Administration/admin-microservice-no-logs.png" alt="Microservice log">

To view the logs you need the permission EVENT_READ.


### <a name="default-applications"></a>Default applications

To define default applications for subtenants, a tenant policy with the following options can be created and used when creating new tenants:

* category: configuration
* key: default.tenant.applications
* value: comma-separated list of applications names, e.g. administration,devicemanagement,cockpit,feature-microservice-hosting,feature-cep-custom-rules

To define default microservices for subtenants, the following tenant option can be defined for the tenant policy:

* category: configuration
* key: default.tenant.microservices
* value: comma-separated list of microservices names, e.g. device-simulator,smartrule,cep

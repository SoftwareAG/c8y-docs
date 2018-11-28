---
order: 30
title: Managing applications
layout: redirect
---

In addition to the applications provided in your account (per default or as subscription), you can also manage own applications. 

Own applications may be 

* duplicates of subscribed applications (in order to be able to customize them)
* web-based UI applications, either deployed as standalone applications or as plugins deployed into a specific application (e.g. a widget to the Cockpit dashboard)
* server-side business logic deployed through microservices

If you are subscribed to the required application ("apama-small"), you additionally can [upload custom Apama CEP rules](#uploading-cep-rules) as application. 

Your applications are available through the application switcher in the top bar which allows to easily switch between applications.

<img src="/guides/images/users-guide/Administration/Admin_AppSwitcher.png" alt="App switcher" style="max-width: 50%">

You manage your applications under **Own applications**, accessible through the **Applications** menu. 

In the **Own applications** page you will find a list of the applications available in your account.

<img src="/guides/images/users-guide/Administration/Admin_OwnApplications.png" alt="Own applications" style="max-width: 100%">

To display further information on the application, simply click its card. For details on the fields, refer to [Application properties](#application-properties) below. 

To directly open an application from here, click **Open** on the respective application card. 

Click **Add application** in the **Own applications** page, to add an application to your account, see [Adding applications](#adding-applications).

Click the menu icon at the top right of an application to open a context menu from where you can [**Edit** or **Remove**](#editing-and-removing) an application. 

### <a name="adding-applications"></a>Adding applications

To add an application, click **Add application** in the **Own applications** page. In the upcoming dialog choose one of the following methods:

* [uploading a web application](#uploading-zip-files) - by dropping a ZIP file or browsing for it on your computer
* [uploading a microservice](#uploading-microservices) - by dropping a ZIP file or browsing for it on your computer
* [using an external application](#external-application) - by linking to an application running elsewhere 
* [duplicating an existing application](#clone-application) - by creating a copy of an existing application

If you are subscribed to the required application ("apama-small"), you will also see the option **Upload custom Apama rule** to [upload own Apama CEP rules](#uploading-cep-rules) as application. 

<img src="/guides/images/users-guide/Administration/admin-add-application.png" alt="Add application methods" style="max-width: 50%">

#### <a name="uploading-zip-files"></a>Uploading web applications

In order to upload a web application, follow these steps:

1. Click **Add application** in the **Own applications** page.
2. In the upcoming dialog, select **Upload zip file**.
3. Simply drop a zip file or browse for it on your computer.

<img src="/guides/images/users-guide/Administration/Admin_UploadZipFile.png" alt="Uploading zip file" style="max-width: 50%">

After successfully uploading the zip file to the platform the application is being created.

#### <a name="uploading-microservices"></a>Uploading microservices

In order to upload a microservice, follow these steps:

1. Click **Add application** in the **Own applications** page.
2. In the upcoming dialog, select **Upload zip file**.
3. Simply drop a zip file or browse for it on your computer.

<img src="/guides/images/users-guide/Administration/Admin_UploadZipFile.png" alt="Uploading zip file" style="max-width: 50%">

After successfully uploading the zip file to the platform the application is being created.

>**Info**: In case of microservices, the package must contain the manifest file and docker image of the microservice. Refer to [Microservice package reference](/guides/reference/microservice-package) in the Reference guide in order to prepare and deploy the microservice package.


#### <a name="external-application"></a>Linking to external applications

In order to add an application which links to an external application, follow these steps:

1. Click **Add application** in the **Own applications** page.
2. In the upcoming dialog, select **External application**.
<br><br>
<img src="/guides/images/users-guide/Administration/admin-own-applications-external.png" alt="External application" style="max-width: 50%">
<br><br>
3. In the next window, enter the name of the application. The name will be shown as title of the application. 
5. Enter an application key, used to identify this application.
6. Enter the external URL where the application can be reached. 
7. Finally, click **Save** to create the application.

For details on the fields, see also [Application properties](#application-properties) below. 

#### <a name="clone-application"></a>Duplicating applications

Duplicating an application might be useful if you want to customize a subscribed application according to your needs. 

Duplicating a subscribed application creates a copy of the application as an own application, with a link to the original application.

>**Info**: If you want your "own application" to overrule a subscribed standard application, the path of the "own application" needs to be set to the path of the original subscribed application.

In order to duplicate an application, follow these steps:

1. Click **Add application** in the **Own applications** page.
2. In the upcoming dialog, select **Duplicate existing application**.
3. Select the desired application from the dropdown list. 
<br><br>
<img src="/guides/images/users-guide/Administration/admin-own-applications-duplicate.png" alt="Duplicate application" style="max-width: 50%">
<br><br>
4. In the next window, provide a name for the application. By default, the name of the original application is provided, extended by a number.
5. Provide an application key, used to identify this application. By default, the key of the original application is provided, extended by a number.
6. Provide the application path as part of the URL to invoke the application. By default, the path of the original application is provided, extended by a number. If you set it to the path of the original subscribed application, your own application will overrule the subscribed application. 
7. Finally, click **Duplicate** to create the application.

For details on the fields, see also [Application properties](#application-properties) below.

#### <a name="uploading-cep-rules"></a>Uploading custom Apama rules

> **Info:** To be able to upload custom Apama CEP rules as applications to Cumulocity you need to be subscribed to the application "apama-small". 

In order to upload custom Apama CEP rules, follow these steps:

1. Click **Add application** in the **Own applications** page.
2. In the upcoming dialog, select **Upload custom Apama rule**. <br>
	<img src="/guides/images/users-guide/Administration/Admin_ApplicationsAddCEPRules.png" alt="Upload CEP rules" style="max-width: 50%">

3. The file to be uploaded must be a single mon file, containing a set of event definitions and monitors. Drop the mon file or browse for it on your computer.

After successfully uploading the file to the platform an application of type "Apama CEP rule" is being created.

<img src="/guides/images/users-guide/Administration/Admin_ApplicationCEPRule.png" alt="Uploading zip file" style="max-width: 100%">

For details on the fields, see also [Application properties](#application-properties) below.

>**Info:** You cannot add a plugin to an application of type "Apama CEP rule". 


### <a name="application-properties"></a>Application properties

Click on an application card to view the application properties.

<img src="/guides/images/users-guide/Administration/Admin_OwnApplicationMicroservice.png" alt="Microservice application" style="max-width: 100%">

Each application will show the following properties:

|Field|Description|Hosted (Web app)|Microservice|External|CEP rule
|:---|:---|:---|:---|:---|:---
|Name|Application name. Will be shown as title of the application in the top bar and in the application switcher. |Automatically created|Automatically created, based on the zip file name | Specified by the user|Automatically created, based on the mon file name 
|ID|Unique ID to identify the application|Automatically provided|Automatically provided|Automatically provided|Automatically provided
|Application key|Used to identify the application and to make the application available for subscription, see the [Concepts Guide](/guides/concepts/applications). |Automatically created|Automatically created based on the zip file name|Specified by the user|Automatically created based on the mon file name 
|Type|Application type|Hosted application|Microservice|External|Apama CEP rule
|Path|Part of the URL invoking the application|Automatically created|Automatically created as .../service/&#60;microservice name&#62;|Specified by the user. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".|Not available

>**Info**: ID, application key, type and path cannot be changed.


### <a name="editing-and-removing"></a>Editing and removing applications

**Edit**

To edit an application, simply click the application or click **Edit** in its context menu, accessible through the menu icon. 

In the **Properties** tab, several fields can be modified, depending on the application type (see [Application properties](#application-properties)).

>**Important:** Never change the system application names (e.g. "Device Management", "Cockpit"). Otherwise, tenant initialization will fail. 


**Remove**

To remove an application, click the menu icon and from the context menu select **Remove**. 

If you remove an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally, the users will then also benefit from future upgrades of the subscribed application.

It is not possible to remove subscribed applications. This can only be done by the owner of the subscribed application.


### <a name="add-remove-plugin"></a>Adding and removing plugins

>**Important**: This plugin functionality is deprecated and only available in versions earlier then 9.16.

In order to configure and extend the functions provided with an application, you can add plugins to it. 

>**Info:** Because the application itself is modified when adding a plugin, plugins can only be added to own applications. When adding a plugin to a subscribed application, the application must be duplicated first into an own application. This process is supported by the Administration Application wizard.

To add additional plugins, click **Add Plugin** on the card of the desired application in the "Own applications" page. 

The "Plugin" tab for the application will open up, showing all existing plugins and allowing to add plugins by simply dropping the respective ZIP file or browsing for it on your computer.

![Plugins](/guides/images/users-guide/plugins.png)

To remove a plugin, hover over it and click **Remove** at the right.

The following tables list the navigator and menu items with their respective plugins.


|Navigator Item|Plugin
|:---|:---|
|Welcome|Welcome screen
|Home|Cockpit Home
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

### Restoring to an older application version

Users can restore previous versions of an application from an archive:

1. Open the application by clicking on it.
2. Switch to the **Archives** tab. 
3. Open the context menu for the desired version by clicking the menu icon and select **Set as active** to make it the active version.
4. Click **Remove** to remove the version from the archive.

>**Info**: The **Archive** tab is not available for subscribed applications, as only the owner of the application can perform this action.

### Uploading archives

Multiple archive file versions can be stored in Cumulocity when they were created by uploading either a zip file or a mon file. Each version is called an archive. You can upload different versions at the same time and switch between these versions. 

To upload an archive, follow these steps:

1. Open the application by clicking on it.
2. Switch to the "Archives" tab.
3. Click **Upload archive** and browse for the archive on your computer or simply drop the archive file.
4. Click **Upload** to upload the archive to your Cumulocity account.

![Upload archive](/guides/images/users-guide/uploadarchive.png)

Once uploaded, the recently uploaded version is automatically the active version, i.e. the version of the application that is currently being served to the users of your account. This version cannot be deleted. 

To change the active version, open the context menu in the version you want to activate and select **Set as active**.


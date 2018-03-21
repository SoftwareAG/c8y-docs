---
order: 30
title: Managing applications
layout: redirect
---

<a name="applications"></a>

In addition to the applications available in the Cumulocity platform, you can also manage own applications in your account. 

These applications may be generic HTML5 applications that can be extended by adding plugins. When deploying, the plugins are deployed into a specific application. For example, a plugin might add a specific widget to the Cockpit dashboard.

Because the application itself is modified when adding a plugin, plugins can only be added to own applications. When adding a plugin to a subscribed application, the application must be duplicated first into an own application. This process is supported by the Administration Application wizard.

You manage your own application under "Own applications", accessible through the "Applications" menu. 

In the "Own applications" page you will find a list of your own applications in your account.

<img src="/guides/images/users-guide/Administration/Admin_OwnApplications.png" alt="Own applications" style="max-width: 100%">

Click the menu icon at the top right of an application to open a context menu from where you can [**Edit** or **Remove**](#editing-and-removing) an application. 

Click **Open** on the application card to directly open the application from here. Your applications are also available through the application switcher.

Click **Add Plugin** to add a plugin (see [Adding and removing plugins](#add-remove-plugins)).

### <a name="editing-and-removing"></a>Editing and removing applications

**Edit**

To edit an application, simply click the application or click **Edit** in its context menu, accessible through the menu icon. 

In the "Properties" tab, several fields can be modified, depending on the application type.

>**Info**: "ID", "Application key" and "Path" cannot be changed, once configured.

>**Important:** Never change the system application names (e.g. "Device Management", "Cockpit"). Otherwise, tenant initialization will fail. 


**Remove**

If you remove an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally, the users will then also benefit from future upgrades of the subscribed application.

It is not possible to remove subscribed applications. This can only be done by the owner of the subscribed application.

>**Info**: To overwrite a subscribed application, the "own application" must have the same context-path as the "subscribed application".

To remove an application, click the menu icon and from the context menu select **Remove**. 

### Creating an application

To add an application, click **Add application** in the "Own applications" page. In the upcoming dialog choose to create an application by

* uploading a ZIP file,
* using an external application, which links to an application running elsewhere,
* duplicating an existing application.

![Add application methods](/guides/images/users-guide/Administration/Admin_AddApplication.png)

If you select **Upload ZIP file**, the wizard will ask you to simply drop a file or browse for it on your computer.

If you select **External application**, you next need to provide the name, application key and external URL for it. 

If you want to duplicate an existing application, follow the steps described next.


### <a name="clone-application"></a>Duplicate applications

Duplicating a subscribed application creates a copy of the application as an own application, with a link to the original application.

In order to duplicate an application, follow these steps:

1. Click **Add application** in the "Own applications" page.
2. In the upcoming dialog, select **Clone existing application**.
3. Select the desired application from the dropdown list. Note that also subscribed applications are shown.
4. In the next window, enter the name of the application. The name will be shown as title on the top left of the application. It will also be shown in the application switcher.
5. Enter an application key. The application key is used to identify requests from this application and to make it available for subscription, see the [Concepts Guide](/guides/concepts/applications).
6. Enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
7. Finally, click **Clone** to create the application.

### <a name="add-remove-plugin"></a>Adding and removing plugins

In order to configure and extend the functions provided with a smartapp, you can add plugins to your applications. 

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
2. Switch to the "Archives" tab. 
3. Open the context menu for the desired version by clicking the menu icon and select **Set as active** to make it the active version.
4. Click **Remove** to remove the version from the archive.

>**Info**: The "Archive" tab is not available for subscribed applications, as only the owner of the application can perform this action.

### Uploading archives

Multiple archive ZIP file versions can be stored in Cumulocity when they were created by uploading ZIP files. Each version is called an archive. You can upload different versions at the same time and switch between these versions. 

To upload an archive, follow these steps:

1. Open the application by clicking on it.
2. Switch to the "Archives" tab.
3. Click **Upload archive** and browse for the archive on your computer or simply drop the archive file.
4. Click **Upload** to upload the archive to your Cumulocity account.

![Upload archive](/guides/images/users-guide/uploadarchive.png)

Once uploaded, archives can be downloaded, activated or deleted if necessary. The active archive (indicated by a cloud icon) is the version of the application that is currently being served to the users of your account. This version cannot be deleted.
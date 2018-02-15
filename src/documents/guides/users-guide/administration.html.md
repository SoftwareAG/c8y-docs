---
order: 40
title: Administration
layout: default
---

## <a name="overview"></a>Overview

The Administration application enables account administrators to manage their users, roles, tenants, applications and business rules and lets them configure a number of settings for their account. 

The following sections will walk you through all functionalities of the Administration application in detail. For your convenience, find an overview on the content of this document below.

>**Important**: For information on the user and permission management in the Administration application, refer to the separate section on [User and Permission Management](/guides/users-guide/user-and-permissions-management).

|SECTION|CONTENT|
|:---|:---|
|[Viewing audit logs](#audit)|Providing information on all [operations performed by the users](#audit).
|[Managing own applications](#applications)|How to manage and [configure own applications](#applications) in your Cumulocity account.
|[Applying business rules](#retention)|How to set up realtime [event processing](#event-processing) scripts and reprioritize alarms by [alarm mappings](#reprio-alarms).
|[Changing settings](#settings)|How to change account settings like [application settings](#default-app) or [password policy and TFA settings](#changing-password-settings) and how to manage the [properties library](#properties).
|[Managing data retention](#retention)|How to manage and configure [retention rules](#retention-rules) for your data and how to [manage stored files](#files) in the file repository.
|[Storage quota](storageQuota)|How to configure the recipients and triggers of the [warning email](#warningEmail) for maximum storage being reached.


### <a name="home"></a>Home screen

The Home screen of the Administration application provides 

* a welcome message,
* quick links to the main parts of the Administration application,
* your capacity usage for the current and for the last month,
* the optional applications you are subscribed to. 

<img src="/guides/users-guide/administration/admin_HomeScreen.png" alt="Home screen" style="max-width: 100%">

The capacity sections show:

* API requests: The total number of API requests, counting whenever some function in Cumulocity is invoked, regardless of whether the function is invoked from a device (for example, sending a measurement) or from an application (for example, viewing the list of devices).
* Device API requests: Counting only when the API is called from a device (for example, sending a measurement).
* Storage: The total amount of data stored in your account. This amount can be changed by [retention policies](#retention) and by the amount and size of [stored files](#files).
* Storage quota: If the storage limit per device is set, the user is restricted to a [maximum data usage](#storageQuota).
* Root devices: The number of root devices connected to your account, excluding child devices.
* Devices: The total number of devices connected to your account. This is the sum of the devices listed in the "[All devices](/guides/users-guide/device-management#viewing-devices)" page of the Device Management application and their direct and indirect child devices.
* Users: The sum of all users configured in this account, active and inactive.

## <a name="audit"></a>Viewing audit logs

Audit logs show the operations that users have carried out. 

To view the audit log list, click "Audit logs" in the "Account" menu. For each log entry, the following information is provided:

|Column|Description|
|:---|:---|
|Server time|Server time when the operation was processed.
|Change|Type of operation, e.g. "Alarm created", Smart rule deleted". Below it, the user who processed it is displayed.
|Description|Provides further information depending on the operation, e.g. the device name, alarm text, operation status.
|Device time|Device time when the operation was processed. This can differ from the server time.

Only the last 100 logs are visible. Click **Load more** at the bottom of the list to view more log entries.

![Audit logs](/guides/users-guide/administration/admin_auditlogs.png)

>**Info**: The audit log list is not automatically refreshed after a realtime update for operations. Click **Reload** at the right of the top menu bar to update the list to the latest operations.

### Filtering logs

In order to easily search through logs, you may filter logs for

 - the type, i.e. alarm, operation, Smart Rule,
 - a date range providing a "From" and/or a "To" date,
 - the user.

To apply filters, click the filter icon next to the filter fields. To discard filters, click the delete icon (only visible if filters are set).

## <a name="applications"></a>Managing applications

In addition to the applications available in the Cumulocity platform, you can also manage own applications in your account. 

These applications may be generic HTML5 applications that can be extended by adding plugins. When deploying, the plugins are deployed into a specific application. For example, a plugin might add a specific widget to the Cockpit dashboard.

Because the application itself is modified when adding a plugin, plugins can only be added to own applications. When adding a plugin to a subscribed application, the application must be duplicated first into an own application. This process is supported by the Administration Application wizard.

You manage your own application under "Own applications", accessible through the "Applications" menu. 

In the "Own applications" page you will find a list of your own applications in your account.

<img src="/guides/users-guide/administration/Admin_OwnApplications.png" alt="Own applications" style="max-width: 100%">

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

![Add application methods](/guides/users-guide/administration/Admin_AddApplication.png)

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

![Plugins](/guides/users-guide/plugins.png)

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

![Upload archive](/guides/users-guide/uploadarchive.png)

Once uploaded, archives can be downloaded, activated or deleted if necessary. The active archive (indicated by a cloud icon) is the version of the application that is currently being served to the users of your account. This version cannot be deleted.

## <a name="tfa"></a>Using two-factor authentication

The Two-factor authentication(TFA) is an extra layer of security that requires not only a username and password, but SMS verification as well. TFA can only be set up by administrators. When TFA is enabled, it is impossible to configure it from the "User settings", it is configurable from the administration UI only.

>**Info**: When adding a user and TFA is enabled, you need to provide a phone number for the user. When users without a phone number try to login using TFA, the users will be redirected to a window, to enter their mobile phone number. Without a phone number a login is impossible.

To see whether TFA is enabled for a certain user, go to the "Users" page and check the TFA status column.

![TFA status](/guides/users-guide/tfastatus.png)

To enable two-factor authentication for a user, follow these steps:

- Click on the desired user in the "Users" page.
- Select the checkbox next to "Enable two-factor authentication".
- Click **Save**.

![Enable TFA](/guides/users-guide/enabletfa.png)

## <a name="event-processing"></a>Managing business rules

### Event processing

Using event processing, you can specify realtime business logic that is automatically run by Cumulocity as soon as new data arrives or existing data is modified. The logic is deployed in so-called "modules". Modules consist of a set of statements that you write in [Cumulocity Event Language](/guides/concepts/realtime). 

>**Info**: A user-friendly way to specify realtime business logic is provided in the Cockpit application through the so-called "[Smart Rules](/guides/users-guide/cockpit#rules)". Smart Rules are "under the hood" also implemented as Cumulocity Event Language statements, and you can see them in the "Event Processing" page. However, you cannot edit Smart Rules from here.

Click "Event processing" in the "Business rules" menu to view the current modules or to create new ones.

<img src="/guides/users-guide/administration/admin_EventProcessing.png" alt="Event processing" style="max-width: 100%">

For each module in the list, the status (deployed = indicated by a green checkmark / not deployed = indicated by an exclamation mark), the name and the date when is was last updated is provided.

To edit a module, simply click the module or click **Edit** in the context menu, accessible through the menu icon.

To remove a module, click **Remove** in the context menu.

Instead of deleting the module you can also disable it temporarily by setting its status to "Not deployed".

**Creating new modules**

To create a new module, click **New module** in the top menu bar.

<img src="/guides/users-guide/administration/Admin_EventProcessingNewModule.png" alt="New module" style="max-width: 100%">

1. Enter a name for the module at the very top. You can only use alphanumeric characters without blanks.
2. By default, the status is set to "Deployed" which means that the statements you enter will be run immediately. Set the slider to "Not deployed" if you want to avoid this. 
3. Enter your CEL statements into the "Source code" text box. For your convenience, we provide various examples. Click **Examples** and select an appropriate example from the dropdown list. Click **Append example** to paste the example into the "Source code" text box at the position of the cursor.
4. Click **Save** to save your settings.

The example module creates an alarm if the temperature goes below 0 degree.

<img src="/guides/users-guide/administration/Admin_EventProcessingModuleExample.png" alt="Example module" style="max-width: 100%">

If the status of a module is set to "Deployed", this is indicated by a green checkmark in the module list. Whenever your statements produce some output you will see it below the checkmark icon. Clicking a line of output unfolds the detailed output of the statement. Clicking **Clear all** removes the output from the screen.

### <a name="reprio-alarms"></a>Alarm mapping

Alarm mapping enables you to change the severity and text of alarms to adapt them to your business priorities. For example, a loss of the connection to a device is by default a "MAJOR" alarm but may be critical to you. To change this, add an alarm mapping to change alarms related to connection losses to "CRITICAL".

Click "Alarm mapping" in the "Business Rules" menu to see a list of all alarm mappings.

<img src="/guides/users-guide/administration/Admin_AlarmMapping.png" alt="Alarm mapping" style="max-width: 100%">

For each alarm mapping, the alarm severity and the name of the mapping is shown.

To edit an alarm mapping, simply click it.

To delete an alarm mapping, hover over it and click the **Delete** button.

**Adding an alarm mapping**

To add an alarm mapping, click **Add alarm mapping** in the top menu bar.

<img src="/guides/users-guide/administration/Admin_AlarmMappingAdd.png" alt="Add alarm mapping" style="max-width: 100%">

1. Enter the alarm type to be modified.
2. Optionally, enter a new text for the alarm. If you do not enter any text, the original text in the alarm will be kept.
3. Select the desired new severity, or select "Drop" to not show the alarm at all.
4. Click **Save** to save your settings.

## <a name="retention"></a>Managing data retention

### <a name="retention-rules"></a>Retention rules

"Retention rules" gives you control on how long data is stored in your account. You might for example want to store measurements for 90 days, but delete alarms already after 10 days. By default, all historical data is deleted after 60 days (configurable in the system settings).

Retention rules are usually run during the night. When you edit a retention rule, you will not see an immediate effect in the "Usage" section on the Home screen of the Administration application.

Click "Retention rules" in the "Management" menu to view a list of retention rules configured for your account.

<img src="/guides/users-guide/administration/Admin_RetentionRules.png" alt="Retention rules" style="max-width: 50%">

For each rule, the rule name, details on the data to be deleted (fragment type, type and source, see below) and the maximum age in days is provided.

The asterisk ("*") indicates that data with any value will be cleaned up.


**Creating retention rules**

To add additional retention rules, click **Add rule** in the top menu bar. 

<img src="/guides/users-guide/addrulepage.png" alt="Add retention rule" style="max-width: 50%">

>**Info**: Per default, an asterisk ("*") is set in all fields except the "Maximum age" field, to include all values.

1. Select the type of data to be cleaned up (alarms, measurements, events, operations, audit logs or all).
2. Enter a fragment type if you want to be more specific about the data to be cleaned up. To clean up all connection loss alarms with this rule, select "alarms" and enter "c8y_UnavailabilityAlarm" as property into the "Type" field.
3. If you want to remove data only from a specific device, enter the device ID into the "Source" field.
4. Enter the "Maximum age" in days (max. allowed value is 10 years in days).
5. Click **Save** to create the rule.

>**Info**: Alarms are only removed if they are in "CLEARED" state.

<img src="/guides/users-guide/administration/Admin_RetentionRulesDelete.png" alt="Delete retention rule" style="max-width: 50%">

To delete a rule, hover over it and click the **Delete** button at the right.


### <a name="files"></a>Managing files in the file repository

The file repository provides an overview of the files stored in your account.

Click "Files repository" in the "Management" menu to see a list of files. 

The files listed can come from various sources. They can be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded from the "Own applications" page. 

For each file, the name of the file, its owner, the file type (i.e. image/bmp, text/csv), its size and the date when it was last updated is provided.

<img src="/guides/users-guide/administration/Admin_FilesRepository.png" alt="Files Repository" style="max-width: 100%">

To upload a file from your computer, click **Upload file** in the top menu bar.

To download a file from your account, click the menu icon and from the context menu select **Download**.

To delete a file from your account, click **Delete** in the context menu.

>**Info**: If the file corresponds to an active application, it cannot be deleted. You first need to remove or upgrade the application to be able to delete it.


## <a name="settings"></a>Changing settings

From the "Settings" menu, administrators can modify or manage various settings for the account as

- changing the [application settings](#default-app),
- changing the [password policy and TFA settings](#changing-password-settings),
- managing the [properties library](#properties),
- configure the setting for the Enterprise Edition, see [Enterprise Edition](/guides/users-guide/enterprise-edition#platform-config).

### <a name="default-app"></a>Changing application settings

Click "Application" to change applications settings.

Under "Default application", you can select a default application from the list which will apply to all users within the tenant.

>**Info**: All users must have access to this application.

Under "Access control", administrators can enable cross-origin resource sharing or "CORS" on the Cumulocity API. 

The "Allowed Domain" setting will enable your JavaScript web applications to directly communicate with REST APIs.
Set it to "*" to allow communication from any host.
Set it to "http://my.host.com, http://myother.host.com" to allow applications from http://my.host.com and from http://myother.host.com to communicate with the platform.

For further information, see http://enable-cors.org.

### <a name="changing-password-settings"></a>Changing the password policy and TFA settings

To change password settings, click "Password" in the "Settings" menu. 

Under "Password expiration", you can limit the validity of user passwords by specifying the number of days after which users have to change their passwords. If you do not want to force your users to change passwords, use "0" for unlimited validity of passwords (default value).

By default, users can use any password with eight characters or more. If you select **Enforce that all password are "strong" (green)**, your users must provide strong passwords as described in "[Logging in](/guides/users-guide/overview#login)".

>**Info**: The password validity limit and the enforcing of strong passwords may not be editable, if configured by the platform administrator.

Strong (green) passwords must have "M" characters. By default, the system restricts the use of passwords already used in the past. The last "N" passwords provided by a user are remembered by the system and the system does not allow to use them. The default value for "N" is 10.

>**Info**: "M" and "N" can be configured by the platform administrator.

Click **Save** to apply your password settings.

<img src="/guides/users-guide/administration/admin_Password.png" alt="Password settings" style="max-width: 100%">

Under "TFA settings", you can change the following TFA settings:

 - "Limit token validity"- here you can set the lifetime of each session in minutes. When the session expires, the user has to enter a new verification code.
 - "Limit PIN validity"- Here you can set the lifetime of each verification code sent via SMS. When the verification code expires, in order to login the user has to request a new verification code.

To allow two-factor authentication, select the checkbox **Allow two-factor authentication**". 

Click **Save TFA settings** to apply your changes.

### <a name="properties"></a>Managing the properties library

In the properties library, accessible from the "Settings" menu, custom properties can be added to inventory objects, alarms, events and tenants. 

![Properties library](/guides/users-guide/properties_library.png)

With custom properties, you can extend the data model of Cumulocity built-in objects. You may create the following custom values:

- Custom inventory properties are used to extend the inventory data model. They can be used in the “Asset table” and “Asset properties” widgets.
- Custom tenant properties are available during tenant creation. The custom properties can be edited under “Subtenants” in the “Custom properties” tab of each tenant. Additionally, these properties can be viewed and exported in the “Usage statistics”.
- Custom alarm and event properties can be used as custom fields which can be added to your reports and will be available in the “Reporting” page in the Cockpit application.

**Adding properties to the properties library**

To add a custom property, select the tab for the desired property and click **Add property**. 

![Add new property](/guides/users-guide/addproperty.png)

In the upcoming form, provide a unique name as identifier and a label for the property and select its data type from the drop down list. Additionally, select validation rules for the new property:

|Check box|Description|
|:---|:---|
|Required|If selected, the property needs to be provided, i.e. during alarm creation. Not available if the property type is "Boolean".
|Default Value|Provide a default value to be automatically filled in the custom property field. Only available for properties with type "String".
|Minimum|Enter a minimum integer value.
|Maximum|Enter a maximum integer value.
|Minimum length|Enter the minimum length required for the string.
|Maximum length|Enter the maximum length required for the string.
|Regular expression|Add a regular expression which will be required in order to fill the custom property field.

Click **Save** to create the new property.

Click on the name of a property in the list to open it. To edit the property, enter the desired changes and click **Save** to save the settings. Click **Remove** to delete the property.

### <a name="openIT-credentials"></a>Entering OpenIT credentials

By providing OPenIT credentials you enable the platform to utilize SMS services provided by [Openit](https://sms.openit.de/main.php).

SMS are used throughout the application for various features like [two-factors authentication](/guides/users-guide/administration#tfa) and user notifications, i.e. on alarms.

## <a name="storageQuota"></a>Storage quota

The storage quota is in place for a tenant when a storage quota per device is set by the platform administrator. The total storage available to the user is calculated using the formula `storage quota per device x number of devices`. A check is performed every night to ensure the quota is not exceeded.

In case the quota is exceeded, an e-mail is sent to all tenant administrators to warn them that data will be deleted the following night. After 24h, if the quota is still exceeded, all data retention limits are reduced by a fixed percentage. The storage quota per device will be reduced as a result of this rule.

**Example:**

Let us assume that a tenant has a storage quota of 10GB. Retention rules are 80 days for measurements, 90 days for all other data.

 - Day 1: In the nightly check, the total storage is calculated at 13GB. An e-mail is sent to all tenant administrators.

 - Day 2: the total storage is still at 13GB. The system determines that a 15% reduction of the retention rules is sufficient to be under the storage quota. So any measurement older than 68 days (80 days - 15%) and any other data older that 77 days (90 days - 15% results in 76.5 days, rounded to 77 days) is deleted.

The total storage is now at 9.8GB.

### <a name="warningEmail"></a>Managing storage quota warning e-mail

This feature is only visible if a storage quota was set for the tenant. 

The tenant administrators can set a user group and threshold for an e-mail to be sent once a day if the storage used is higher than a particular percentage of the storage quota. The default setup is sending an e-mail to the "admin" group when the storage reaches 80% of maximum storage.

The e-mail warning can also be disabled. 

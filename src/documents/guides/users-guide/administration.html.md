---
order: 40
title: Administration
layout: default
---

## Overview

The Administration application enables account administrators to manage their users, applications, rules and stored files, as well as configure a number of options for their account. Here you can:

* View [subscription information](#home) for your account.
* Manage [users](#users) and [user groups](#user-groups), including their [permissions](#permissions).
* View all operations done by users via the [audit logs](#audit).
* Configure [applications](#applications).
* Set up real-time [event processing](#event-processing) scripts and [reprioritize alarms](#reprio-alarms).
* Change [settings](#settings).
* Configure the [retention policies](#retention) for your data.
* Configure the recipients and trigger of the [warning e-mail](#warningEmail) for maximum storage being reached.
* Manage [stored files](#files) such as firmware images or log files.

## <a name="home"></a>The Home Screen

The "Home" screen provides navigation links to the main parts of the administration application. It also shows subscription information for your account. The subscription information describes how much capacity you have used and the optional applications you are subscribed to. The capacity section shows:

* API requests: It counts whenever some function in Cumulocity is invoked, regardless of whether the function is invoked from a device (for example, sending a measurement) or from an application (for example, viewing the list of devices).
* Device API requests: Counted only when the API is called from a device (for example, sending a measurement)
* Storage: The total amount of data stored in your account. This amount can be changed by [retention policies](#retention) and by the amount and size of [stored files](#files).
* Storage quota: If the storage limit per device is set, the user is restricted to a [maximum data usage](#storageQuota).
* Devices: The total number of devices connected to your account. This is the sum of the devices listed in the "[All devices](/guides/users-guide/device-management#viewing-devices)" menu of the Device Management application and their direct and indirect child devices.
* Users: The sum of all users configured in this account, active and inactive.

"This month" shows the usage information starting with the current month. "Last month" shows the last full month.

![Home](/guides/users-guide/adminscreen.png)

### <a name="tfa"></a>Using two-factor authentication

The Two-factor authentication(TFA) is an extra layer of security that requires not only a username and password, but SMS verification as well. TFA can only be set up by administrators. When TFA is enabled, it is impossible to configure it from the "User settings", it is configurable from the administration UI.

> Note that a phone number is required when adding a user and TFA is enabled. When users without a phone number try to login using TFA, the user will be redirected to a window, to enter his/her mobile phone number. Without a phone number a login is impossible.

To see whether TFA is enabled for a certain user, go to the "Users" menu and check the TFA status column.

![TFA satus](/guides/users-guide/tfastatus.png)

Enable two-factor authentication for a user:

- Go to the "Users" menu.
- Click on the user name.
- Click on the checkbox next to "Enable two-factor authentication.
- Click "Save".

![Enable TFA](/guides/users-guide/enabletfa.png)

## <a name="audit"></a>Viewing audit logs

 By visiting the "Audit logs" menu you can view all operations that users have carried out. The following fields can be observed:

 - "When?": Shows the server time when the change occurred.
 - "What?": This field shows what changed. ("Smart Rule Deleted")
 - "Who?": Displays the user who did the change.
 - "Text": Small summary of the change. ("Cep module "smartRule<number>" updated") - "Type": Type of change. ("Smart rule", "Alarm", "User")
 - "Time": Shows the device time when the change occurred. It can be different from the server time.

> Only the last 100 logs are visible, in order to view more press the "search more" button.

![Audit logs](/guides/users-guide/auditlogs.png)

### Filtering logs

In order to easily search through logs, you have the ability to filter them. The following filters can be used:

 - Type: There are six types of logs, "Alarm", "Event processing", "Group", "Operation", "Smart rule" and "User".
 - Date from: Simply select date from which you wish to filter the log.
 - Date to: Select date to which you wish to filter the log.
 - User: View logs of a specific user only.

![Filter settings](/guides/users-guide/filtersettings.png)

> It is not necessary to use all filters.

To apply filters, simply click on the "Apply filters" button.

To discard filters or to see all audit logs, click on the "cross" button.

## <a name="applications"></a>Managing applications

Besides the available applications, you can also provide own applications in your account by checking the "Own applications" menu. These applications can be "Smartapps" or generic HTML5 applications. "Smartapps" are HTML5 applications that can be extended by adding plugins. When deploying, the plugins are deployed into a specific application. For example, a plugin might add a specific widget to the Cockpit dashboard.

Plugins can only be added to own applications because the application itself is modified when adding the plugin. When adding a plugin to subscribed applications, the application must be cloned first into an own application. Afterward the plugin can be added. This process is supported by the Administration Application wizard.

> "Smartapps" insert the plugin into the application. This has changed from the old Smartapps referencing plugins stored in other applications.

When an application has been created it will be available in the application switcher.

> The "Open" button of the application appears when you hover over the application's name.

![List of own applications](/guides/users-guide/ownapplications.png)

### Creating an application

To add an application, you can upload a "ZIP file" application.

- Click on "Add application".
- Click on "Upload ZIP file".
- Either drop the file into the box or simply browse your computer.

### <a name="clone-application"></a>Cloning applications

This option will copy the application. Cloning a subscribed application creates a copy of the application as an own application, with a link to the original application.

In order to clone an application:

- Click on "Add application"
- Click on "Clone existing application"
- Select the desired application that you wish to clone. Note that also subscribed applications are shown.
- Enter the name of the application. The name will be shown as title on the top left of the application. It will also be shown in the application switcher.
- Enter an application key. The application key is used to identify requests from this application and to make it available for subscription, see the [Concepts guide](/guides/concepts/applications).
- Enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
- Click on the "Clone" button.

### <a name="add-remove-plugin"></a>Adding and removing plugins

In order to configure and extend the function provided with a smartapp, you can add plugins (as ZIP files) to your applications. To add additional plugins, go to â€œOwn applicationsâ€, move the cursor over your desired applications and click on â€œAdd Pluginâ€. You can drag the plugin into the box or just select them from your computer.

![Plugins](/guides/users-guide/plugins.png)

To remove a plugin, click on the cogwheel next to the desired plugin and click remove. The following tables list the navigator items, menu items and their respective plugins:


|Navigator Item|Plugin|
|:-------------|:-----|
|Welcome|Welcome screen|
|Home|Cockpit Home|
|Smart Rules|Smart Rules UI|
|Groups|Groups Hierarchy|
|Data Explorer|Data Point Explorer UI|
|Data Point Library|Data Point Explorer UI|
|Reporting|Reporting|
|Reports|Dashboard (Note: There are two plugins with this name. Select the one with the description: "Reports are stand alone dashboards without a context")|
|Alarms|Alarm Management|

|Menu Item|Plugin|
|:--------|:-----|
|Info|Not possible to disable|
|Subassets|Not possible to disable|
|Permissions|Device Permission Management Plugin|
|Data Explorer|Data Point Explorer UI|

> Please note the "UI" at the end of the plugin names.

### Restoring to an older application version

Users can restore old versions of an application.
If you â€œset activeâ€ a specific version of the app, then this will be the version used by users.

>Note that the â€œArchiveâ€ tab is not available for subscribed applications, as only the owner of the application can perform this action.

### Uploading archives

Multiple archive ZIP file versions can be stored in Cumulocity when they were created by uploading ZIP files. Each version is called an archive. You can upload different versions at the same time and switch between these versions. To upload an archive:

- Select the application by clicking on its name.
- Click on the "Archives" tab.
- Click on "Upload archive" and navigate to the archive in your folder.
- Click on "Upload" to upload the archive to Cumulocity.

![Upload archive](/guides/users-guide/uploadarchive.png)

Once uploaded, archives can be downloaded, activated or removed if necessary. The active archive (indicated by a cloud icon) is the version of the application that is currently being served to the users of your account. This version cannot be deleted.

### Working with bitbucked hosted application (Deprecated)

Assume that you are developing a web application, using Bitbucket as code repository. In this case, exposing the application through Cumulocity can be done as follows:

* Click on "Add application".
* Click on "HTTP(S) proxy".
* Enter the name of the application, as shown in the application switcher.
* Enter an application key. The application key is used to identify requests from this application and to
make it available for subscription.
* Enter the application path. This path will b	e part of the URL to invoke the application. For example, if
you use "hello" as application path, the URL of the application will be "/apps/hello".
* Enter the server URL where your application is hosted. At this URL, there needs to be an index.html file
that provides the entry point to your application.
* Enter a username to access your repository (optional).
* Enter a password to access your repository (optional).
* Click "Save".

![https proxy app](/guides/users-guide/httpsproxy.png)

> Note that, username and password are transmitted using HTTP Basic Authentication.

> We do not recommend to use bitbucket hosted application anymore, because downtime of bitbucket results into downtime of the application.

### <a name="creating-smartapp"></a>Adding a smartapp (Deprecated)

> Note that this functionality is depreciated and will be removed in future versions of the product.

To add a smartapp:

- Click on "Add application".
- Click on "Create legacy smartapp".
- Enter the name of the application. The name will be shown as title on the top left of the application. It will also be shown in the application switcher.
- Enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
- Click the "Create" button.

> Please note that these are the old "Smartapps" in which the plugins that you wish to add to your application must be selected from a list.

![Legacy smartapps](/guides/users-guide/smartapps.png)

### Working with external applications

"External applications" are links to applications running elsewhere. Enter name of the application and application key, then provide the URL of that application and click "Save" to make the link available in the application switcher.

### Editing applications

To edit an application, simply click on its name. Depending on the type of the application (e.g. Hosted, External), different fields can be modified.

> Note that "ID", "Application key" and "Path" cannot be changed once configured.

### Removing applications

If you remove an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally the users will then also benefit from future upgrades of the subscribed application.
It is not possible to remove subscribed apps. This is only possible for the owner of the subscribed application.

> To overwrite a "Subscribed application" the "Own Application" must have the same context-path as the "Subscribed application".

To remove an application, simply hover over the application name and click on the cogwheel, then press the "Remove" button. A confirmation pop-up window will appear. Click "OK" and the application will be deleted.


## <a name="tenants"></a>Managing tenants

With the subtenant concept you can separate the data of the individual tenants one hundred percent.

> Background: As a tenant administrator, all data in your tenant account is 100% separated from the data of other tenants. The data inside your tenant is shared with all account users by default unless it is restricted by user permissions.

If you want 100% data safety instead of dealing with user permissions, then use the subtenants. Each subtenant has a seperated data area. All Cumulocity features (e.g. user management, app management, rule management) are available for each subtenant without visibility to other subtenants.

This feature is an optional feature which is not available for all tenants.

> In case you are subscribed to the feature, but you do not see it, contact support.

In order to manage subtenants click on the subtenants menu. Subtenant management includes: Tenant creation, activation, suspension, subscribed applications and options.

![Sub-tenants](/guides/users-guide/sub-tenant.png)

> Tenant ID's must remain unique, two tenants cannot create subtenants with the same "URL/ID".
> Subtenants cannot create an additional level of subtenants.

### Adding sub-tenants

To add a new subtenant, click on "Create Tenant"

> Please note that fields with an asterisk (" * ") are mandatory.

- Enter unique domain/URL of the new tenant. This URL will be used to access the application (e.g. tenant@cumulocity.com).
- Enter the name of the company.
- Enter the administrator's e-mail. You must provide a valid e-mail address to enable users to reset their password.
- Enter username of the administrator for logging in.
- Enter contact name. This field is optional.
- Enter contact phone. Again, this field is optional.
- Choose whether you wish to have the password reset link sent as an e-mail. If you have not selected this option you will have to enter a password and confirm the password. (See "[Logging in](/guides/users-guide/overview#login)" for more information on password strength.)
- Click the "Save" button.

![Tenant-creation](/guides/users-guide/createtenant.png)

### Editing, suspending and removing sub-tenants

To edit subtenants, click on the desired subtenant. All the fields can be edited except "ID" and "Administrators Username".

When you have finished editing, click on the "Save" button.

> If a tenant is suspended, his data still remains in the database and he can be reactivated at any time later. If the tenant is removed his data will be deleted.

Hovering over a tenant will bring up the "Suspend" and the "Remove" buttons. The "Remove" button is shown as a red cross.

> Please note that there is an additional check during tenant suspension. The user will have to provide his own password in order to proceed. After the tenant is suspended, an e-mail is sent to the suspended tenant administrator. The e-mail is sent only if the property in the config file is enabled and if the tenant administrator provided an e-mail address during creation.

### <a name="usage-stats"></a> Retrieving usage statistics

The usage statistics menu provides you with information about each subtenant. The statistics show:

- Id: Unique id of the subtenant.
- External reference: This field is for individual usage, for example, you can add a link to the CRM system here or an internal customer number.
- API requests: Number of API requests, including requests from  devices and applications.
- Device API requests: Number of API requests from devices
- Storage (MB): The amount of data stored in your account.
- Devices: Total number of devices connected to the tenant.
- Subscribed application: This column shows number of applications that the subtenant is subscribed to.
- Creation time: The date and time of the creation of the subtenant.

![Usage statistics](/guides/users-guide/usagestats.png)

## <a name="event-processing"></a>Managing event processing

Using event processing, you can specify real-time business logic that is automatically run by Cumulocity as soon as new data arrives or existing data is modified. The logic is deployed in so-called "modules". Modules consist of a set of statements that you write in [Cumulocity Event Language](/guides/concepts/realtime). Click on "Event processing" to see the current modules or to create new modules.

![Event processing](/guides/users-guide/eventprocessing.png)

> A user-friendly way to specify real-time business logic is provided in the Cockpit application through the so-called "[Smart Rules](/guides/users-guide/cockpit#working-with-smart-rules)". Smart Rules are "under the hood" also implemented as Cumulocity Event Language statements, and you can see them when you click on "Event Processing". However, you cannot edit Smart Rules from the Event Processing user interface.

### Creating new modules

To create a new module, click on "New module".

- Enter a name for the module. You can only use alphanumeric characters without blanks.
- If you want to run the statements in the module immediately, leave the status set to "Deployed". Otherwise, set the status to "Not deployed".
- Start typing your CEL statements into the large text field labeled "Body". To get some inspiration, select an example from the "Examples" drop-down menu and click "Append example". The example CEL statement will be pasted into the "Body" text field at the position of the cursor.
- Click the "Save" button.

![New module](/guides/users-guide/newmodule.png)

If you selected the "Deployed" status, you will see a small green "Connected" box in the user interface. Whenever your statements produce some output, you will see it below this "Connected" box. Clicking on a line of output unfolds the detailed output of the statement. Clicking "Clear all" removes the output from the screen.

### Managing modules

To modify your module, simply click on the module's name. To remove your module, hover over the module's name and click the "X" button. A confirmation window will pop up. Press "OK" and the module will be removed.

![Remove modules](/guides/users-guide/removemodules.png)

>Instead of deleting the module, you can also disable it temporarily by setting the "Status" in the edit menu to "Not deployed". Click on the "Save" button afterward.

## <a name="reprio-alarms"></a>Reprioritizing alarms

"Alarm mapping" enables you to change the severity and text of alarms to adapt them to your business priorities. For example, a loss of the connection to a device may be critical to you, but it is, by default, a "MAJOR" alarm. To change this, add an alarm mapping to change alarms related to connection losses to "CRITICAL".

![Alarm mapping](/guides/users-guide/alarmmapping.png)

### Adding an alarm mapping

To modify the severity of an alarm, determine the type of the alarm that you want to modify by clicking on an alarm in the [alarm list](/guides/users-guide/device-management#alarm-monitoring). Then click "Add alarm mapping" in the "Alarm mapping" menu.

- Enter the alarm type to modify.
- Select desired new severity, or select "Drop" to not show the alarm at all.
- Enter a new text for the alarm. This step is optional. If you do not enter any text, the original text in the alarm will be preserved.
- Click "Save".

### Changing or deleting alarm mappings

To change an alarm mapping,

- Locate the alarm in the "Alarm mapping" section and click on its name.
- Change the severity and/or text.
- Click "Save".

To delete alarm severities, hover over the alarm type and click the "X" button. A confirmation window will pop up. Press "OK" to delete the alarm mapping.

## <a name="settings"></a>Changing settings

By expanding the "Settings" menu, administrators can:

- Change the [password policy](#changing-password-settings).
- Change the [TFA settings](#changing-tfa-settings).
- Change the [default application](#default-app).
- Change the [access control](#access-control) settings.
- [Enable or disable the dashboards via e-mail feature](#enabling-server-side-agents)
- Enter [OpenIT credentials](#openIT-credentials)

### <a name="changing-password-settings"></a>Changing the password policy

To change password settings, click on "Password". To limit the validity of user passwords, set the number of days when users have to change their passwords. If you do not want to force your users to change passwords, use "0" for unlimited validity of passwords.

By default, users can use any password with eight characters or more. If you select "Enforce that all password are "strong" (green)", your users must provide strong passwords as described in "[Logging in](/guides/users-guide/overview#login)".

> "Enforce that all password are green" and the "Password validity limit" can be mandatory and non-editable, if configured by the platform administrator.

Strong (green) passwords must have M characters. By default, the system restricts users to not use passwords used in history, in other words, last N passwords provided by a user are remembered by the system and the system restricts users to not use them. The default value for N is 10.

> "M" and "N" can be configured by the platform administrator.

Click "Save" to store the settings.

<img src="/guides/users-guide/passsettings.png" alt="Password settings" style="max-width: 50%">

### <a name="changing-tfa-settings"></a>Changing the TFA settings

To change the TFA settings, click on "Password" under the "Settings" menu item. There are two TFA settings that can be changed:

 - "Limit token validity"- You can set the lifetime of each session. When the session expires, the user has to enter a new verification code.
 - "Limit PIN validity"- Set the lifetime of each verification code sent via SMS. When the verification code expires, in order to login the user has to request a new verification code.
 - When ready, click "Save TFA settings".

![TFA settings](/guides/users-guide/tfasettings.png)

To disable two-factor authentication, simply deselect the box "Allow two-factor authentication". Click on "Save TFA settings" to apply your changes.

### <a name="default-app"></a>Changing the default application

With the "Application" menu, administrators can change the default application view for all users within the tenant when no application was defined in the URL. All users also must have access to this application.

### <a name="access-control"></a>Changing access control settings

With the "Application" menu, administrators can enable cross-origin resource sharing or "CORS" on the Cumulocity API. For more information, see http://enable-cors.org.

### <a name="enabling-server-side-agents"></a>Enabling server-side agents

In the "Server-side agents" menu, the "Send dashboard via e-mail" smart rule can be enabled or disabled. To enable, select the checkbox and click "Save".

### <a name="openIT-credentials"></a>Enter OpenIT credentials

SMS sending is used by several features within the application. It can be used to make login more secure with [two-factors authentication](/guides/users-guide/administration#tfa). An SMS can be sent when an alarm is triggered. SMSes can be used to send instructions to devices. The service provided by [Openit](https://sms.openit.de/main.php) can be used similar. In this section, the user can enter credentials to activate features requiring SMS messages.

## <a name="retention"></a>Managing data retention

"Retention rules" gives you control how long data is stored in your account. For example, you want to store measurements for 90 days, but delete alarms already after 10 days. By default, all historical data is deleted after 60 days (This can be edited in system settings).

Retention rules are usually run during the night. When you edit a retention rule, you will not see an immediate effect in the usage section on the home page of the administration application.

![Add rule](/guides/users-guide/addrules.png)

To add additional "Retention rules", click on "Add rule". Up to the "Maximum age" field, you can enter an asterisk ("*") into all fields to permit any value in that field.

- Select the type of data to clean up (alarms, measurements, events, operations, audit logs).
- Enter a fragment type, if you want to be more specific about the data to be cleaned up. To clean up all connection loss alarms with this rule, select "alarms" and enter "c8y_UnavailabilityAlarm" into "type".
- If you want to remove only data from a specific device, enter the device ID into "Source".
- Enter the "Maximum age" in days (max. allowed value is 10 years in days).
- Click the "Save" button.

<img src="/guides/users-guide/addrulepage.png" alt="Add retention rule" style="max-width: 50%">

> Note that alarms are only removed if they are in "CLEARED" state.

To delete a rule, click on the "X" button and then press "OK" after the pop-up window appears.

## <a name="warningEmail"></a>Managing storage quota warning e-mail

This section is only visible if a storage quota was set for the tenant. The tenant administrators can set a user group and threshold for an e-mail to be sent once a day if the storage used is higher than a percentage of the storage quota. The e-mail warning can also be disabled. The default setup is sending an e-mail to the "admin" group when the storage reaches 80% of maximum storage.


## <a name="files"></a>Managing files

The file repository provides an overview of the files stored in your account. To see the files, click on "Files repository" in the administration menu. The files listed can come from various sources. They can be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded using the "Own applications" menu. To delete a file, click the "X" button next to the file.

![Files repository](/guides/users-guide/filesrepo.png)

> If the file corresponds to an active application, it cannot be deleted. You first need to remove or upgrade the application to be able to delete it.

## <a name="storageQuota"></a>Storage quota

The storage quota is in place for a tenant when a storage quota per device is set by the platform administrator. The total storage available to the user is calculated using the formula `storage quota per device x number of devices`. A check is performed every night to ensure the quota is not exceeded.

In case the quota is exceeded, an e-mail is sent to all tenant administrators to warn them that data will be deleted the following night. After 24h, if the quota is still exceeded, all data retention limits are reduced by a fixed percentage. The storage quota per device will be reduced as a result of this rule.

> Let us assume that a tenant has a storage quota of 10GB. Retention rules are 80 days for measurements, 90 days for all other data.
>
>
> - Day 1: In the nightly check, the total storage is calculated at 13GB. An e-mail is sent to all the tenant administrators.
>
> - Day 2: the total storage is still at 13GB. The system determines that a 15% reduction of the retention rules is sufficient to be under the storage quota. So any measurement older than 68 days (80 days - 15%) and any other data older that 77 days (90 days - 15% results in 76.5 days, rounded to 77 days) is deleted.
>
> The total storage is now at 9.8GB.

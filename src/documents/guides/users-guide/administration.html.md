---
order: 40
title: Administration
layout: default
---

## Overview

The Administration application enables account administrators to manage their users, roles, tenants, applications and business rules and lets them configure a number of settings for their account. 

The following sections will walk you through all functionalities of the Administration application in detail. For your convenience, find an overview on the content of this document below.

>**Important**: For information on the user and permission management in the Administration application, refer to the separate section on [User and Permission Management](/guides/users-guide/user-and-permissions-management).

|SECTION|CONTENT|
|:---|:---|
|[Home Screen](#home)|Providing information on your [capacity usage and subscribed applications](#home).
|[Viewing Audit Logs](#audit)|Providing information on all [operations performed by the users](#audit).
|[Managing Applications](#applications)|How to manage and [configure own applications](#applications) in your Cumulocity account.
|[Managing Tenants](#applications)|How to [manage tenants](#tenants), retrieve [user statistics](#user-stats) and configure [tenant policies](#tenant-policies).
|[Applying Business Rules](#retention)|How to set up realtime [event processing](#event-processing) scripts and reprioritize alarms by [alarm mappings](#reprio-alarms).
|[Changing Settings](#settings)|How to change account settings like [application settings](#default-app) or [password policy and TFA settings](#changing-password-settings) and how to manage the [properties library](#properties).
|[Managing Data Retention](#retention)|How to manage and configure [retention rules](#retention-rules) for your data and how to [manage stored files](#files) in the file repository.
|[Data Broker](#data-broker)|How to forward data to other tenants using [data connectors](#data-broker-connector) and how to receive data with a [data subscription](#data-broker-subscriptions) on the receiving end.
|[Storage Quota](storageQuota)|How to configure the recipients and triggers of the [warning email](#warningEmail) for maximum storage being reached.


## <a name="home"></a>Home Screen

The "Home" screen provides 

* a welcome message,
* quick links to the main parts of the Administration application,
* your capacity usage for the current and for the last month,
* the optional applications you are subscribed to. 

<img src="/guides/users-guide/Administration/Admin_HomeScreen.png" alt="Home screen" style="max-width: 100%">

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

![Audit logs](/guides/users-guide/Administration/Admin_AuditLogs.png)

>**Info**: The audit log list is not automatically refreshed after a realtime update for operations. Click **Reload** at the right of the top menu bar to update the list to the latest operations.

### Filtering logs

In order to easily search through logs, you may filter logs for

 - the type, i.e. alarm, operation, Smart Rule,
 - a date range providing a "From" and/or a "To" date,
 - the user.

To apply filters, click the filter icon next to the filter fields. To discard filters, click the delete icon (only visible if filters are set).

## <a name="applications"></a>Managing Applications

In addition to the applications provided in your account (per default or as subscription), you can also manage own applications. 

Own applications may be 

* duplicates of subscribed applications (in order to be able to customize them)
* web-based UI applications, either deployed as standalone applications or as plugins deployed into a specific application (e.g. a widget to the Cockpit dashboard)
* server-side business logic deployed through microservices

Your applications are available through the application switcher in the top bar which allows to easily switch between applications.

<img src="/guides/users-guide/Administration/Admin_AppSwitcher.png" alt="App switcher" style="max-width: 50%">

You manage your applications under "Own applications", accessible through the "Applications" menu. 

In the "Own applications" page you will find a list of the applications available in your account.

<img src="/guides/users-guide/Administration/Admin_OwnApplications.png" alt="Own applications" style="max-width: 100%">

To directly open an application from here, click **Open** on the respective application card. 

Click **Add application** in the "Own applications" page, to add an application to your account, see [Adding applications](#adding-applications).

To add a plugin, click **Add Plugin** on the card of the application you want to add it to (see [Adding and removing plugins](#add-remove-plugin)).

Click the menu icon at the top right of an application to open a context menu from where you can [**Edit** or **Remove**](#editing-and-removing) an application. 

### <a name="adding-applications"></a>Adding applications

To add an application, click **Add application** in the "Own applications" page. In the upcoming dialog choose one of the following methods:

* [uploading a zip file](#uploading-zip-files) - by dropping a file or browsing for it on your computer,
* [using an external application](#external-application), which links to an application running elsewhere 
* [duplicating an existing application](#clone-application)

<img src="/guides/users-guide/Administration/Admin_AddApplication.png" alt="Add application methods" style="max-width: 50%">

#### <a name="uploading-zip-files"></a>Uploading zip files

You can either add a web application or a microservice through uploading a zip file. 

Depending on the information in the package being uploaded the system determines the application type.

* If a "type" field exists and is equal to "MICROSERVICE" then the type is "MICROSERVICE".
* If no "type" field exists but the "apiVersion" field is defined then the type is "MICROSERIVCE".
* Otherwise the type is "HOSTED" (referring to a web application).

In case of microservices, the package must contain the manifest file and docker image of the microservice. Refer to [Microservice package reference](/guides/reference/microservice-package) in order to prepare and deploy the microservice package.

In order to add an application by uploading a zip file, follow these steps:

1. Click **Add application** in the "Own applications" page.
2. In the upcoming dialog, select **Upload zip file**.
3. Simply drop a zip file or browse for it on your computer.

<img src="/guides/users-guide/Administration/Admin_UploadZipFile.png" alt="Uploading zip file" style="max-width: 50%">

After successfully uploading the zip file to the platform the application is being created.


#### <a name="external-application"></a>Linking to external applications

In order to add an application which links to an external application, follow these steps:

1. Click **Add application** in the "Own applications" page.
2. In the upcoming dialog, select **External application**.
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

1. Click **Add application** in the "Own applications" page.
2. In the upcoming dialog, select **Clone existing application**.
3. Select the desired application from the dropdown list. 
4. In the next window, provide a name for the application. By default, the name of the original application is provided, extended by a number.
5. Provide an application key, used to identify this application. By default, the key of the original application is provided, extended by a number.
6. Provide the application path as part of the URL to invoke the application. By default, the path of the original application is provided, extended by a number. If you set it to the path of the original subscribed application, your own application will overrule the subscribed application. 
7. Finally, click **Clone** to create the application.

For details on the fields, see also [Application properties](#application-properties) below.

### <a name="application-properties"></a>Application properties

Click on an application card to view the application properties.

<img src="/guides/users-guide/Administration/Admin_OwnApplicationMicroservice.png" alt="Microservice application" style="max-width: 100%">

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

In the "Properties" tab, several fields can be modified, depending on the application type (see [Application properties](#application-properties)).

>**Important:** Never change the system application names (e.g. "Device Management", "Cockpit"). Otherwise, tenant initialization will fail. 


**Remove**

To remove an application, click the menu icon and from the context menu select **Remove**. 

If you remove an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally, the users will then also benefit from future upgrades of the subscribed application.

It is not possible to remove subscribed applications. This can only be done by the owner of the subscribed application.


### <a name="add-remove-plugin"></a>Adding and removing plugins

In order to configure and extend the functions provided with an application, you can add plugins to it. 

>**Info:** Because the application itself is modified when adding a plugin, plugins can only be added to own applications. When adding a plugin to a subscribed application, the application must be duplicated first into an own application. This process is supported by the Administration Application wizard.

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

Multiple archive file versions can be stored in Cumulocity when they were created by uploading either a zip file or a mon file. Each version is called an archive. You can upload different versions at the same time and switch between these versions. 

To upload an archive, follow these steps:

1. Open the application by clicking on it.
2. Switch to the "Archives" tab.
3. Click **Upload archive** and browse for the archive on your computer or simply drop the archive file.
4. Click **Upload** to upload the archive to your Cumulocity account.

![Upload archive](/guides/users-guide/uploadarchive.png)

Once uploaded, the recently uploaded version is automatically the active version, i.e. the version of the application that is currently being served to the users of your account. This version cannot be deleted. 

To change the active version, open the context menu in the version you want to activate and select **Set as active**.


## <a name="tenants"></a>Managing tenants

If you are a service provider or subscribed to the Enterprise Edition of Cumulocity, you may want to manage your own subtenants. 

The tenants functionality allows you to create subtenants, subscribe them to the applications that you have available and potentially deactivate tenants if they are not in use anymore.

> **Important**: There is an major difference between providing several tenants and providing several users with different permissions within a single tenant. Tenants are physically separated data spaces with a separate URL, with own users, a separate application management and no sharing of data by default. Users in a single tenant by default share the same URL and the same data space. So if your users, for example, are separate customers of yours and you need to strictly separate them because they may be competitors, we strongly recommend you to do so by working with tenants.

>**Info**: If you would like to use this feature, please contact sales@cumulocity.com.

To be able to use the tenant functionality, your user needs to have the appropriate permissions. See [Creating and editing global roles](/guides/users-guide/user-and-permissions-management#create-edit-roles) for information on editing permissions. Since editing tenants is a sensitive operation, permissions for editing tenants are more granular:

- Read: Browse and view tenants.
- Create: Create new tenants.
- Update: Edit tenants (incl. subscriptions) and suspend or activate them.
- Change: Create, edit and delete tenants.

### Viewing subtenants

Click "Subtenants" in the "Tenants" menu to view a list of all subtenants available in your account.

The "Tenants" page provides the following information on each subtenant:

* The name of the subtenant, e.g. company name of your customer.
* The ID and domain. When creating tenants, the ID gets the first part of the URL. For example, if you create a tenant with the ID "acme" on cumulocity.com, the tenant's URL will be "acme.cumulocity.com". Note, that while you can change the URL later on, you cannot change the ID anymore after the tenant was created.
* An optional contact name and phone number.
* The date when the tenant was created.
* The status of the tenant, either active (indicated by a green checkmark icon) or suspended (indicated by a red cross icon).

If you are using the management tenant, you will see an additional column "Parent tenant". This column shows the tenant that created the listed tenant.

![Sub-tenants](/guides/users-guide/Administration/Admin_Subtenants.png)

### <a name="creating-tenants"></a>Creating sub-tenants

To add a new tenant, click **Create tenant** at the right of the top menu bar. To create a tenant, provide the following properties:

|Field|Description
|:--------|:-----
|Domain/ URL|Enter a unique ID as the first part of the URL. For example, if you enter "acme" as ID on cumulocity.com, the tenant's URL will be "acme.cumulocity.com". You can only use one subdomain level. For example, you can only use "acme.cumulocity.com" on cumulocity.com. You cannot use "mycustomer.acme.cumulocity.com". This is not permitted by the TLS standard. 
|Name|The name of the tenant, e.g. the company's name.
|Administrator's email|You must provide a valid email address to enable users to reset their password.
|Administrator's username|Username for the administrator of this tenant.
|Contact name|Optional name of the contact.
|Contact phone|Optional phone number of the contact.
|Send password reset link as email|Selected by default. If you deselect this option, you need to provide a password and confirm the password (see "[Logging in](/guides/users-guide/overview#login)" for more information on password strength).
|Tenant policy|You may select a tenant policy to be applied to the tenant from the dropdown list.

Note, that fields with an asterisk * are mandatory.

Click **Save** to apply your settings.

When the tenant is created, it is automatically provisioned with a first, administrative user ("Administrator's username"). This administrator can create other users and set their permissions. The first user cannot be deleted to prevent you from locking yourself out. 

From the management tenant, you can enable other tenants to create subtenants. To do so, check "Allow creation of subtenants".

![Tenant-creation](/guides/users-guide/createtenant.png)

### Editing subtenant properties

To edit subtenants, click on the desired subtenant or click **Edit** in the context menu, accessible through the menu icon.

In the "Properties" tab, all fields are editable except of the ID and the administrator's username. For details on the fields, refer to [Creating sub-tenants](#creating-tenants).

### <a name="subscribing"></a>Subscribing to applications

In the "Applications" tab you can subscribe tenants to applications or remove the applications from the tenant. By default, tenants will be subscribed to the standard Cumulocity applications. 

<img src="/guides/users-guide/Administration/Admin_SubtenantApplications.png" alt="Subscribe tenant" style="max-width: 100%">

To subscribe an application to a tenant, hover over the applications under "Available applications" on the right and click **Subscribe** on the desired application.

To remove an application, hover over the applications under "Subscribed applications" on the left and click **Unsubscribe**.

Info: Apart from being subscribed to a standard application, i.e. Cockpit, you can also create a duplicate of this application as own application, see [Duplicating applications](#clone-application).

### Suspending subtenants

You can temporarily suspend tenants. Suspending tenants blocks any access to this tenant, regardless whether the access is from devices, users or other applications. 

To suspend a tenant, click the menu icon and from the context menu select **Suspend**.

In the upcoming dialog confirm the suspension by clicking **Ok** and entering your password. The tenant will be shown with a red cross icon. As part of suspending the tenant, an email is sent to the tenant administrator if an email address is configured for that administrator.

>**Info**: If you are a service provider, you can suppress this email.

![Suspend tenant](/guides/users-guide/suspendtenant.png)

If a tenant is suspended, the tenant's data remains in the database and can be made available any time later. To do so, click **Activate**.

### Deleting subtenants

To finally delete a tenant and remove all the data of the tenant, click the menu icon and from the context menu select **Remove**.

>**Info**: This action cannot be reverted. For security reasons, it is only available in the management tenant.

### <a name="tenants-custom-properties"></a>Editing custom properties

The "Custom properties" tab allows you to view and modify values of custom properties, either predefined ones (like "External reference") or those defined in the ["Properties library"](#properties). Such properties are also displayed as columns in [usage statistics table](#usage-stats-custom-properties).

![Custom Properties](/guides/users-guide/subtenant-custom-properties.PNG)

### <a name="usage-stats"></a> Retrieving usage statistics

The "Usage statistics" page provides statistical information on each subtenant. 

The following information is provided for each tenant:

- ID: ID of the subtenant
- API requests: Total number of API requests, including requests from  devices and applications.
- Device API requests: Number of API requests from devices.
- Storage (MB): Amount of data stored in your account.
- Root Devices: The amount of devices excluding child devices.
- Devices: Total number of devices connected to the subtenant.
- Subscribed applications: Number of applications that the subtenant is subscribed to.
- Creation time: The date and time of the creation of the subtenant.
- Parent: The name of parent tenant (available only for management tenant).
- External reference: This field is for individual usage, for example, you can add a link to the CRM system here or an internal customer number.

Moreover custom properties are displayed, if configured. 

Custom properties may be defined in the ["Properties Library"](#properties) and then set their values in the ["Custom properties"](#tenants-custom-properties) tab of the tenant.

![Usage statistics](/guides/users-guide/usage-statistics-list.PNG)

You can filter the usage statistics list for a time period by adding the start and end date in the top menu bar and click **Filter**. You can also filter and sort the list on any column by clicking the filter icon next to the column name and providing the filtering criteria. For details on filtering, refer to [Filtering](/guides/users-guide/overview#filtering) in the Overview section. 

Click Export CSV at the right of the top menu bar to export the current view of the statistics table to a CSV file. A dialog will come up in which you can customize the CSV output.

<img src="/guides/users-guide/usage-statistics-export.PNG" style="width:400px;"></img>


### <a name="tenant-policies"></a> Tenant policies

A tenant policy is a set of tenant options and retention rules. Tenant options and retention rules may be specified during tenant creation. 

Creating a tenant policy with a specific set of options and rules saves time when creating multiple tenants with the same settings.

![Tenant policy](/guides/users-guide/tenantpolicy.png)

>**Info**: The options and rules are copied into the tenant. Editing the policy has no effect on tenants that have already been created.

Click "Tenant policies" in the "Tenants" menu to view all tenant policies available.

<img src="/guides/users-guide/administration/admin_TenantPolicies.png" alt="Tenant policies" style="max-width: 100%">

For each tenant policy, the name, an optional description and the number of options and retention rules is provided, either in a list or a grid.

### Adding a tenant policy

Click **Add tenant policy** in the top menu bar to create a new tenant policy.

![Add new policy](/guides/users-guide/addpolicy.png)
 
2. Enter a name and an optional description. 
3. Add at least one retention rule. For details on creating retention rules, refer to [Retention rules](#retention-rules).
4. Optionally, add a tenant option.
5. Click **Save** to save your settings.

### Editing, duplicating and deleting policies

To edit a policy, click on the desired policy or click **Edit** in the context menu, accessible through the menu icon. 

To change the name of a policy, click the name in the top bar, modify it and click the green checkmark icon to save your changes.

To delete a retention rule or a tenant option from a policy, hover over it and click the delete icon.

To duplicate a policy, click the menu icon and from the context menu select **Duplicate**.

To delete a policy, click the menu icon and from the context menu select  **Delete**.

![Edit policy menu](/guides/users-guide/editpolicy.png)

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

## <a name="event-processing"></a>Managing Business Rules

### Event processing

Using event processing, you can specify realtime business logic that is automatically run by Cumulocity as soon as new data arrives or existing data is modified. The logic is deployed in so-called "modules". Modules consist of a set of statements that you write in [Cumulocity Event Language](/guides/concepts/realtime). 

>**Info**: A user-friendly way to specify realtime business logic is provided in the Cockpit application through the so-called "[Smart Rules](/guides/users-guide/cockpit#rules)". Smart Rules are "under the hood" also implemented as Cumulocity Event Language statements, and you can see them in the "Event Processing" page. However, you cannot edit Smart Rules from here.

Click "Event processing" in the "Business rules" menu to view the current modules or to create new ones.

<img src="/guides/users-guide/Administration/admin_EventProcessing.png" alt="Event processing" style="max-width: 100%">

For each module in the list, the status (deployed = indicated by a green checkmark / not deployed = indicated by an exclamation mark), the name and the date when is was last updated is provided.

To edit a module, simply click the module or click **Edit** in the context menu, accessible through the menu icon.

To remove a module, click **Remove** in the context menu.

Instead of deleting the module you can also disable it temporarily by setting its status to "Not deployed".

**Creating new modules**

To create a new module, click **New module** in the top menu bar.

<img src="/guides/users-guide/Administration/Admin_EventProcessingNewModule.png" alt="New module" style="max-width: 100%">

1. Enter a name for the module at the very top. You can only use alphanumeric characters without blanks.
2. By default, the status is set to "Deployed" which means that the statements you enter will be run immediately. Set the slider to "Not deployed" if you want to avoid this. 
3. Enter your CEL statements into the "Source code" text box. For your convenience, we provide various examples. Click **Examples** and select an appropriate example from the dropdown list. Click **Append example** to paste the example into the "Source code" text box at the position of the cursor.
4. Click **Save** to save your settings.

The example module creates an alarm if the temperature goes below 0 degree.

<img src="/guides/users-guide/Administration/Admin_EventProcessingModuleExample.png" alt="Example module" style="max-width: 100%">

If the status of a module is set to "Deployed", this is indicated by a green checkmark in the module list. Whenever your statements produce some output you will see it below the checkmark icon. Clicking a line of output unfolds the detailed output of the statement. Clicking **Clear all** removes the output from the screen.

### <a name="reprio-alarms"></a>Alarm mapping

Alarm mapping enables you to change the severity and text of alarms to adapt them to your business priorities. For example, a loss of the connection to a device is by default a "MAJOR" alarm but may be critical to you. To change this, add an alarm mapping to change alarms related to connection losses to "CRITICAL".

Click "Alarm mapping" in the "Business Rules" menu to see a list of all alarm mappings.

<img src="/guides/users-guide/Administration/Admin_AlarmMapping.png" alt="Alarm mapping" style="max-width: 100%">

For each alarm mapping, the alarm severity and the name of the mapping is shown.

To edit an alarm mapping, simply click it.

To delete an alarm mapping, hover over it and click the **Delete** button.

**Adding an alarm mapping**

To add an alarm mapping, click **Add alarm mapping** in the top menu bar.

<img src="/guides/users-guide/Administration/Admin_AlarmMappingAdd.png" alt="Add alarm mapping" style="max-width: 100%">

1. Enter the alarm type to be modified.
2. Optionally, enter a new text for the alarm. If you do not enter any text, the original text in the alarm will be kept.
3. Select the desired new severity, or select "Drop" to not show the alarm at all.
4. Click **Save** to save your settings.

## <a name="retention"></a>Managing Data Retention

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

<img src="/guides/users-guide/Administration/Admin_RetentionRulesDelete.png" alt="Delete retention rule" style="max-width: 50%">

To delete a rule, hover over it and click the **Delete** button at the right.


### <a name="files"></a>Managing files in the file repository

The file repository provides an overview of the files stored in your account.

Click "Files repository" in the "Management" menu to see a list of files. 

The files listed can come from various sources. They can be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded from the "Own applications" page. 

For each file, the name of the file, its owner, the file type (i.e. image/bmp, text/csv), its size and the date when it was last updated is provided.

<img src="/guides/users-guide/Administration/Admin_FilesRepository.png" alt="Files Repository" style="max-width: 100%">

To upload a file from your computer, click **Upload file** in the top menu bar.

To download a file from your account, click the menu icon and from the context menu select **Download**.

To delete a file from your account, click **Delete** in the context menu.

>**Info**: If the file corresponds to an active application, it cannot be deleted. You first need to remove or upgrade the application to be able to delete it.


## <a name="settings"></a>Changing Settings

From the "Settings" menu, administrators can modify or manage various settings for the account as

- changing the [application settings](#default-app),
- changing the [password policy and TFA settings](#changing-password-settings),
- managing the [properties library](#properties).

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

<img src="/guides/users-guide/Administration/admin_Password.png" alt="Password settings" style="max-width: 100%">

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

### Configuration

In the "Configuration" page, accessible from the "Settings" menu, you can configure system-wide properties in Cumulocity. The following options can be modified in the "Configuration" settings.

In the "Two-factor authentication" field you can change the SMS template which is sent to the users.

In the "Support link" field you can enter a URL to be used to link to a Support page. If you do not provide a link here, the default link to the Cumulocity Support will be used. 

Enter "false" to hide the link.

In the "Password reset" section you can change all settings related to password reset e-mail templates.

![Configuration menu1](/guides/users-guide/configuration_tab2.png)

At the top you can select if you want to allow sending e-mails to unknown email addresses.

In the "Password reset e-mail template" fields, provide an e-mail template to be used when the address is known and one to be used when the address is unknown. The link to reset the password might for example be: {host}/apps/devicemanagement/index.html?token={token}.

In the "E-mail subject" field, provide a subject for all password reset related e-mails.

In the following two fields provide an e-mail template to be used on password change confirmation and a template for the invitation e-mail.

>**Info**: Placeholders to be used are: {host}, {tenant-domain}, {token}. 

In the "E-mail server" section you can provide the "Protocol", "Host", "Port", "Username", "Password" and "Sender Address" for the e-mail server.

<img src="/guides/users-guide/Administration/Admin_ConfigurationServer.png" alt="Configure e-mail server" style="max-width: 100%">

In the "Data export" section you can set the e-mail subject and e-mail template for data export and specify the “User unauthorized error message”.

![Configuration menu1](/guides/users-guide/configuration_tab4.png)

In the "Storage limit" section you can specify the e-mail subject and e-mail template for emails being send *before* data is removed on exceeding the storage limit and *after* data removal is performed.

In the "Suspending tenants" section you can provide settings for emails being send on tenant suspension. 

<img src="/guides/users-guide/Administration/Admin_ConfigurationSuspended.png" alt="Suspended tenants" style="max-width: 100%">

At the top you can select if you want to send the e-mail to the suspended tenant's administrator and specify an additional e-mail receiver. Below you set the subject and template for the tenant suspended e-mail.

Click **Save configuration** to save your settings.

>**Info**: Additional features are available for "Management" tenants.


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

## <a name="data-broker"></a>Data Broker

Data broker lets you share data selectively with other tenants. You can share:

- devices (and more generically, managed objects),
- events,
- alarms,
- measurements.

Navigate to "Data connectors" if you would like to send data to another tenant. Navigate to "Data subscriptions", if you would like to receive data from another tenant.

<img src="/guides/users-guide/data-broker-on-navigator.PNG" alt="Data broker menus" style="max-width: 25%">

>**Info**: Devices that are forwarded using the data broker are charged like normal devices in the destination tenant.

### <a name="data-broker-connectors"></a> Data connectors

A data connector describes the subset of the data that you would like to send to a destination tenant as well as the URL of that destination tenant.

<a name="data-broker-connectors-list"></a> **Viewing data connectors**

In the "Data connectors" page, you can manage existing data connectors or create new ones. Click "Data connectors" to see a list of all currently defined data connectors with their status.

![Data broker connectors list](/guides/users-guide/data-broker-connectors-list.PNG)

For each data connector, the following information is provided:

* the data connector's name
* its destination tenant
* a description
* the status
* the number of filters set for the data connector

Use the slider to enable and disable data forwarding to the destination tenant. If data is being forwarded, the slider reads "active". If data is not being forwarded, the slider reads "suspended" or "pending". "Suspended" means that you have disabled forwarding. "Pending" means that the destination tenant has disabled forwarding.

* To modify the data connector's configuration, click the menu icon and from the context menu select **Edit**. The configuration is described in more detail below.
* Click "**Duplicate** in the context menu to create another data connector with the same configuration.
* Click **Delete** in the context menu to stop data forwarding and remove the data connector.

<a name="data-broker-connector-edit"></a> **Creating or editing data connectors**

Click **Add data connector** in the top menu bar to create a new data connector.

![Data broker edit connector](/guides/users-guide/data-broker-edit-connector.PNG)

To create a new data connector provide the following information:

|Field|Description|
|:---|:---|
|Title|The name of the data connector.
|Target URL for data connector|The URL of the tenant to which data will be forwarded. Once saved, you cannot edit this value anymore.
|Description|A textual description of the configuration. Both the name and the description will be visible on the destination side after accepting the subscription.
|Data filters|A set of filters that define what is copied to the destination. You need to configure at least one filter.

Each data filter contains the following information:

|Field|Description|
|:---|:---|
|Group or device|The group or device that is forwarded. Selecting a group here results in all sub-groups and sub-devices being forwarded. By default, all data is forwarded.
|API|The type of data being forwarded (alarms, events, measurements, manages objects).
|Fragments to filter|The fragments that need to be present in a device to be forwarded.
|Fragments to copy|The fragments that are copied to the destination. If nothing is specified here, only standard properties of managed objects, alarms, events and measurements are forwarded (see below). Select **Copy all fragments** to forward the entire object.
|Type filter|Forwarded data needs to have this value in its "type" property.

The heading of a data filter summarizes the configuration in one line. The standard properties that are copied by default are:

* **For created alarms**: type, text, time, severity, status.
* **For updated alarms**: status, text, severity.
* **For created events**: type, text, time.
* **For created measurements**: type, text, time
* **For created and updated devices**: type, name, c8y&#95;IsBinary, c8y&#95;IsDeviceGroup, c8y&#95;IsDevice, c8y&#95;DeviceGroup, c8y&#95;DeviceSubgroup, c8y&#95;SmartRule, c8y&#95;applications&#95;storage, c8y&#95;DynamicGroup, c8y&#95;DeviceQueryString.

Once you have configured your data connector, click **Save** to save the configuration. 

After saving, you will see a security code displayed below your configuration. The security code prevents unintended forwarding of data. You need to communicate this security key separately to an administrative user of the destination tenant. You can use the icon next to the security code to copy the code to your clipboard.

![Security code](/guides/users-guide/securitycode.png)

### <a name="data-broker-subscriptions"></a> Data subscriptions

In the "Data subscriptions" page, you can manage existing data subscriptions or create new ones. 

Click "Data subscriptions" to see a list of all currently defined data forwarded to your tenant. 

<img src="/guides/users-guide/Administration/Admin_Subscriptions.png" alt="Data subscriptions" style="max-width: 25%">

For each subscription, the name, the target tenant and the status (enabled or disabled) is provided on a card.

Use the slider to temporarily stop forwarding data into your tenant.

To stop data forwarding and remove the data connector, click the menu icon and from the context menu select **Delete**.

**How to set up data forwarding on the receiving end**

1. Click **Add data subscription** in the top menu bar to receive data. 
2. In the new card, enter the security code that you received from the sending end of the data.
3. When the connection is established, click **Accept** to start forwarding data into your tenant. The subscription is active now.
4. You can move the slider in the card to temporarily stop forwarding data into your tenant.

You can now navigate to the Device Management application or the Cockpit application. There will be a new "virtual group" with a specific icon (see the screenshot below) showing the forwarded devices. The group will have the same name as your subscription. Devices are "lazily" created on the destination side whenever they send data for the first time after setting up an active subscription.

![Data broker group in cockpit app](/guides/users-guide/data-broker-group-created.PNG)


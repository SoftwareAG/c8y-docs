---
order: 40
title: Administration
layout: default
---

## Overview

The Administration application enables account administrators to manage their users, roles, tenants, applications, and business rules as well as configure a number of settings for their account. 

The following sections will walk you through all functionalities of the Administration application in detail. For your convenience find an overview on the content of this document below.

>**Important**: For information on the user and permission management in the Administration application refer to section on [User and Permission Management](/guides/users-guide/user-and-permissions-management).

|SECTION|CONTENT|
|:---|:---|
|[Connecting Devices](#device-registration)|How to [register one or more devices manually](#device-registration-manually) and 

* View [subscription information](#home) for your account.
* View all operations done by users via the [audit logs](#audit).
* Configure [applications](#applications).
* Manage [tenants](#tenants) and configure your [tenant policies](#tenant-policies)	.
* Set up real-time [event processing](#event-processing) scripts and [reprioritize alarms](#reprio-alarms).
* Change [settings](#settings).
* Configure the [retention policies](#retention) for your data.
* Configure the recipients and trigger of the [warning e-mail](#warningEmail) for maximum storage being reached.
* Manage [stored files](#files) such as firmware images or log files.
* Forward data between different tenants with [data broker](#data-broker).


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

## <a name="audit"></a>Viewing audit logs

Audit logs show the operations that users have carried out. 

Click "Audit logs" in the "Account" menu to view the audit logs list. For each log entry the following information is provided:

|Column|Description|
|:---|:---|
|Server time|Server time when the operation was processed.
|Change|Type of operation, e.g. "Alarm created", Smart rule deleted". Below it, the user who processed it is displayed.
|Description|Provides further information depending on the operation, e.g. the device name, alarm text, operation status.
|Device time|Device time when the operation was processed. This can differ from the server time.

Only the latest 100 logs are visible. Click **Load more** at the bottom of the list to view more log entries.

![Audit logs](/guides/users-guide/administration/admin_auditlogs.png)

### Filtering logs

In order to easily search through logs, you may filter logs for

 - the type, i.e. Alarm, Operation, Smart Rule,
 - a date range providing a "From" and/or a "To" date,
 - the user.

To apply filters, click the Filter icon next to the filter fields. To discard filters, click the Delete icon (only visible if filters are set).

## <a name="applications"></a>Managing Applications

In addition to the applications available in the Cumulocity platform, you can also manage own applications in your account. 

These applications may be "Smartapps" or generic HTML5 applications. "Smartapps" are HTML5 applications that can be extended by adding plugins. When deploying, the plugins are deployed into a specific application. For example, a plugin might add a specific widget to the Cockpit dashboard.

Because the application itself is modified when adding a plugin, plugins can only be added to own applications. When adding a plugin to a subscribed application, the application must be cloned first into an own application. This process is supported by the Administration Application wizard.

> **Info**: "Smartapps" insert the plugin into the application and no longer reference plugins stored in other applications.

You manage your own application under "Own applications" accessible through the "Applications" menu. 

In the "Own applications" page you will find a list of your own applications in your account.

![List of own applications](/guides/users-guide/ownapplications.png)

Click the 3-dot icon at the top right of an application to open a context menu from where you can **Edit** or **Remove** an application (see Editing and removing applications). 

Click **Open** to directly open the application from here. Your applications are also available through the Application Switcher.

Click **Add Plugin** to add a plugin (see [Adding and removing plugins](#add-remove-plugins)).


### Creating an application

To add an application, click **Add application** in the "Own applications" page. In the upcoming dialog choose to create an application by

* uploading a ZIP file,
* use an external application, which links to an application running elsewhere,
* cloning an existing application.

![Add application methods](/guides/users-guide/administration/admin_AddApplications.png)

If you select **Upload ZIP file**, the wizard will ask you to simply drop a file or browse for it on your computer.

If you select **External application**, you next need to provide the name, application key and external URL for it. 

If you want to clone an existing application follow the steps below.


### <a name="clone-application"></a>Cloning applications

Cloning a subscribed application creates a copy of the application as an own application, with a link to the original application.

In order to clone an application follow these steps:

1. Click **Add application** in the "Own applications" page.
2. In the upcoming dialog select **Clone existing application**.
3. Select the desired application from the dropdown list. Note that also subscribed applications are shown.
4. In the next window enter the name of the application. The name will be shown as title on the top left of the application. It will also be shown in the Application Switcher.
5. Next, enter an application key. The application key is used to identify requests from this application and to make it available for subscription, see the [Concepts Guide](/guides/concepts/applications).
- Next, enter the application path. This path will be part of the URL to invoke the application. For example, if you use "hello" as application path, the URL of the application will be "/apps/hello".
- Finally click **Clone** to create the application.

### <a name="add-remove-plugin"></a>Adding and removing plugins

In order to configure and extend the functions provided with a smartapp, you can add plugins to your applications. 

To add additional plugins, click **Add Plugin** on the card of the desired application in the "Own applications" page. 

The "Plugin" tab for the application will open up, showing all existing plugins and allowing to add plugins by simply dropping the respective ZIP file or browsing for it on your computer.

![Plugins](/guides/users-guide/plugins.png)

To remove a plugin, hover over it and click **Remove** at the right.

The following tables list the navigator and menu items with their respective plugins:


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

Users can restore previous versions of an application from an archive.

Clcik **Edit** in the 3-dot icon on the desired application and switch to the "Archives" tab. 

Open the context menu for the desired version and select **Set as active** to make it the active version.

Click **Remove** to remove the version from the archive.

>**Info**: The "Archive" tab is not available for subscribed applications, as only the owner of the application can perform this action.

### Uploading archives

Multiple archive ZIP file versions can be stored in Cumulocity when they were created by uploading ZIP files. Each version is called an archive. You can upload different versions at the same time and switch between these versions. To upload an archive:

- Select the application by clicking on its name.
- Click on the "Archives" tab.
- Click on "Upload archive" and navigate to the archive in your folder.
- Click on "Upload" to upload the archive to Cumulocity.

![Upload archive](/guides/users-guide/uploadarchive.png)

Once uploaded, archives can be downloaded, activated or removed if necessary. The active archive (indicated by a cloud icon) is the version of the application that is currently being served to the users of your account. This version cannot be deleted.

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

### Editing and removing applications

To edit an application, simply click the application or click **Edit** in its context menu. 

On the "Properties" tab several fields can be modified, depending on the application type.

> **Info**: "ID", "Application key" and "Path" cannot be changed once configured.

### Removing applications

If you remove an application that overwrites a subscribed application, the currently subscribed application becomes available to all users. Additionally the users will then also benefit from future upgrades of the subscribed application.
It is not possible to remove subscribed apps. This is only possible for the owner of the subscribed application.

> To overwrite a "Subscribed application" the "Own Application" must have the same context-path as the "Subscribed application".

To remove an application, simply hover over the application name and click on the cogwheel, then press the "Remove" button. A confirmation pop-up window will appear. Click "OK" and the application will be deleted.

## <a name="tenants"></a>Managing tenants

If you are a service provider or subscribed to the Enterprise Edition of Cumulocity, you can manage your own subtenants. You can create subtenants, subscribe them to the applications that you have available and potentially deactivate tenants if they are not in use anymore.

> There is an important difference between providing tenants and providing users with different permissions within one tenant. Tenants are physically separated data spaces with a separate URL, own users, separate application management and no sharing of data by default. Users in a single tenant by default share the same URL and the same data space. For example, if your users are separate customers of yours and you need to strictly separate them because they may be competitors, we strongly recommend you to do so by using tenants.

> If you would like to use this feature, please contact sales@cumulocity.com.

To be able to use the functionality below, your user needs to have the appropriate permissions. See ["Creating and editing global roles"](/guides/users-guide/user-and-permissions-management#create-edit-roles) for information on editing permissions. Since editing tenants is a sensitive operation, permissions for editing tenants are more granular:

- Read: Browse and view tenants.
- Create: Create new tenants.
- Update: Edit tenants (incl. subscriptions) and suspend or activate them.
- Change: Create, edit and delete tenants.

### Browsing sub-tenants

To browse the subtenants, click on the subtenants menu. The panel shows the following information:

- Tenant status: The small icon indicates the status of a tenant. It can show a green checkmark to indicate that the tenant is active or a red cross to indicate that the tenant is suspended and cannot be accessed.
- ID: An identifier for this tenant. When you create a tenant, the ID is the first part of the URL. For example, if you create a tenant with the ID "acme" on cumulocity.com, the tenant's URL will be "acme.cumulocity.com". Note that while you can change the URL later on, you cannot change the ID anymore after the tenant was created.
- Name: A name for this tenant, for example, the company name of your customer.
- Domain: The URL that users will use to access this tenant.
- Contact name: An administrative contact for the tenant.
- Phone: The phone number of the administrative contact.
- External reference: A free text field that you can use for arbitrary additional information on the tenant. For example, you can store a reference to your CRM system here.
- Creation time: The time when the tenant was created.
- Parent tenant: If you are using the management tenant, you will see an additional column "parent tenant". This column shows the tenant that created the listed tenant.

![Sub-tenants](/guides/users-guide/sub-tenant.png)

### Adding sub-tenants

To add a new tenant, click on "Create tenant" on the top right of the "Subtenants" panel, fill in the fields and click save. Note that:

- Tenant IDs must be unique within the system.
- Tenant URLs also must be unique. You can only use one subdomain level. For example, you can only use "acme.cumulocity.com" on cumulocity.com. You cannot use "mycustomer.acme.cumulocity.com". This is not permitted by the TLS standard.
- You must provide a valid administrator email address to enable users to reset their password.
- Fields with an asterisk (" * ") are mandatory.

When a tenant is created, it is automatically provisioned with a first, administrative user ("Administrator's username"). This user can create first users and set their permissions. The first user cannot be deleted to prevent you from locking yourself out. You can choose to have the password reset link sent as an e-mail. If you have not selected this option you will have to enter a password and confirm the password. (See "[Logging in](/guides/users-guide/overview#login)" for more information on password strength.)

From the management tenant, you can enable other tenants to create subtenants. To do so, check "Allow creation of subtenants".

![Tenant-creation](/guides/users-guide/createtenant.png)

### Editing, suspending and deleting sub-tenants

To edit subtenants, click on the desired subtenant. All the fields can be edited except the ID and the administrator's username. When you have finished editing, click on the "Save" button.

Click on the "Applications" tab to subscribe tenants to applications or remove the applications from the tenant. By default, tenants will be subscribed to the standard Cumulocity applications. To subscribe an application to a tenant, hover over one of the "Available applications" on the right side and click the "Subscribe" button.

<img src="/guides/users-guide/subscribetenant.png" alt="Subscribe tenant" style="max-width: 50%">

To remove an application, hover over one of the "Subscribed applications" on the left side and click "unsubscribe".

<img src="/guides/users-guide/unsubtenant.png" alt="Usubscribe tenant" style="max-width: 50%">

You can temporarily suspend tenants. Suspending tenants blocks any access to this tenant, regardless whether the access is from devices, user or other applications. To suspend a tenant, hover over a tenant in the list of tenants and click the "Suspend" button. Confirm the action by clicking "Ok" and entering your password. The tenant will be shown with a red cross icon. As part of suspending the tenant, an informational email is sent to the tenant administrator if an email address is configured for that administrator.

> If you are a service provider, you can suppress this email.

![Suspend tenant](/guides/users-guide/suspendtenant.png)

If a tenant is suspended, the tenant's data remains in the database and can be made available any time later. To do so, click the "Activate" button.

To finally delete a tenant and remove all the data of the tenant, click the "x" button while hovering over the tenant in the list. This action cannot be reverted. For security reasons, it is only available in the management tenant.

### <a name="tenants-custom-properties"></a>Editing custom properties

"Custom properties" tab allows you to view and modify values of custom properties, either predefined ones (like "External reference") or those defined in ["Properties library"](#properties). Such properties are also displayed as columns in [usage statistics table](#usage-stats-custom-properties).

![Custom Properties](/guides/users-guide/subtenant-custom-properties.PNG)

### <a name="usage-stats"></a> Retrieving usage statistics

The usage statistics menu provides you with information about each subtenant. The statistics show:

- Id: Unique id of the subtenant
- API requests: Number of API requests, including requests from  devices and applications.
- Device API requests: Number of API requests from devices
- Storage (MB): The amount of data stored in your account.
- Root Devices: The amount of devices excluding child devices.
- Devices: Total number of devices connected to the tenant.
- Subscribed application: This column shows number of applications that the subtenant is subscribed to.
- Creation time: The date and time of the creation of the subtenant.
- Parent: The name of parent tenant (available only for management tenant).
- External reference: This field is for individual usage, for example, you can add a link to the CRM system here or an internal customer number.

![Usage statistics](/guides/users-guide/usage-statistics-list.PNG)

#### <a name="usage-stats-custom-properties"></a> Custom properties

Statistics table also displays custom properties and allows you to sort and filter the list of tenants by their values.

It's possible to export current view of statistics table to CSV file by clicking "Export CSV" link (it will show a dialog where you can customize CSV output, see screenshot below).

<img src="/guides/users-guide/usage-statistics-export.PNG" style="width:400px;"></img>

> Note that you can define custom properties in ["Properties Library"](#properties) and then set their values in tenant's ["Custom Properties"](#tenants-custom-properties) tab.

## <a name="tenant-policies"></a> Configuring the tenant policies

A tenant policy is a set of settings that control tenant options and tenant retention rules. Afterwards these options and rules can be used during tenant creation. When creating multiple tenants with the same options or retention rules, you can save work by creating a tenant policy and using it for each tenant.

![Tenant policy](/guides/users-guide/tenantpolicy.png)

> Please note that the options and rules are copied into the tenant. Editing the policy has no effect on tenants that have already been created.

![Add new policy](/guides/users-guide/addpolicy.png)

> At least one retention rule must be added.

To change the name of the policy, click on the field marked in the screenshot below and then click on the tick to save the changes.

When ready, click on "Save".

![Edit policy name](/guides/users-guide/editpolicyname.png)

### Duplicating, editing and removing policies

In order to duplicate a policy, click on the external menu of your desired policy and then click on "Duplicate".

To edit a policy, either click on the desired policy or click on the desired action in the external options menu.

If you wish to delete a policy, go to the external menu of the policy and click on "Delete".

![Edit policy menu](/guides/users-guide/editpolicy.png)

To remove a retention rule from a policy, simply go to the edit screen of the desired policy, hover over the retention rule and click on the "Remove" sign.

![Remove retention rule](/guides/users-guide/removeretrule.png)

### Adding a new tenant policy

To add a new tenant policy, click on "Add tenant policy". Then enter the policy description and add retention rules. For more info about retention rules, please see [here](http://cumulocity.com/guides/users-guide/administration/#retention).



## <a name="tfa"></a>Using two-factor authentication

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

## <a name="event-processing"></a>Managing event processing

Using event processing, you can specify real-time business logic that is automatically run by Cumulocity as soon as new data arrives or existing data is modified. The logic is deployed in so-called "modules". Modules consist of a set of statements that you write in [Cumulocity Event Language](/guides/concepts/realtime). Click on "Event processing" to see the current modules or to create new modules.

![Event processing](/guides/users-guide/eventprocessing.png)

> A user-friendly way to specify real-time business logic is provided in the Cockpit application through the so-called "[Smart Rules](/guides/users-guide/cockpit#rules)". Smart Rules are "under the hood" also implemented as Cumulocity Event Language statements, and you can see them when you click on "Event Processing". However, you cannot edit Smart Rules from the Event Processing user interface.

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
- Manage the [properties library](#properties).
- Change the [default application](#default-app).
- Change the [access control](#access-control) settings.
- [Enable or disable the dashboards via e-mail feature](#enabling-server-side-agents)
- Enter [OpenIT credentials](#openIT-credentials)
- Manage the [platform configuration](#platform-config) settings.

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

### <a name="properties"></a>Managing the properties library

In the properties library, custom properties can be added to tenants, alarms, events or inventory objects. 

With custom properties, you can extend the data model of Cumulocity built-in objects. After you have added your own custom properties as described below, these properties will be available in Cumulocity as follows:

- Inventory Properties: The custom inventory properties are used to extend the inventory data model. They can be used in the “Asset table” and “Asset properties” widgets.
- Tenant Properties: Custom tenant properties which will be available during tenant creation. The custom properties can be edited under “Subtenants” in the tab “Custom properties” of each tenant. Additionally these properties can be viewed and exported in the “Usage statistics” menu.
- Alarm Properties: These properties can be used as custom fields which can be added to your report.
- Event Properties: Similar to the alarm properties, event properties can be used as additional custom fields. When created, they will be available in the “Reporting” menu in “Cockpit”.

#### Extending the inventory data model

The  inventory properties can be used to add additional custom properties to the “Asset table” and “Asset properties” widgets. To add the properties, simply click on the “Add property” link and select your desired property. When ready, click on the “Save” button to confirm your changes.

![Inventory property](/guides/users-guide/inventoryproperty.png)

#### Using the Alarm and Event properties

The alarm and event custom properties can be used in the “Field” section of the “Reporting” menu in “Cockpit”. They can be used as custom fields that you would like to use in your report.

The properties can be found when you click on “Add predefined”.

[Add predefined properties](/guides/users-guide/addpredefined.png)

#### Adding properties to the "Properties library"

![Properties library](/guides/users-guide/properties_library.png)

To create a new property, click on "Add property". Afterwards, a form will pop-up. Enter the name of the new property, enter the label and select the desired type of the property (String, number, boolean, etc.). Additionally, you can also check the validation rules which will be required for the new property:

- "Required": If this validation rule is checked, the property will be required to be filled (During alarm creation for example). If the property type is "Boolean", this rule cannot be checked.
- "Default Value":  Add a default value which will be automatically filled in the custom property field. Please note that, only "String" type properties can have this validation rule.
- "Minimum": Enter a minimum integer value.
- "Maximum": Enter a maximum integer value.
- "Minimum length": Enter the minimum length required for the string.
- "Maximum length": Enter the maximum length required for the string.
- "Regular expression": Add the regular expression which will be required in order to fill the custom property field.

When ready, click save.

![Add new property](/guides/users-guide/addproperty.png)

Once created, the custom properties can be observed in the “Custom properties” tab as shown in the screenshot below. In this case, a tenant property named “Custom” was created.

![Custom properties tab](/guides/users-guide/customproptab.png)

To edit a property, simply click on the name of the property. To remove a property, click on the property first and then click on “Remove”.

### <a name="default-app"></a>Changing the default application

With the "Application" menu, administrators can change the default application view for all users within the tenant when no application was defined in the URL. All users also must have access to this application.

### <a name="access-control"></a>Changing access control settings

With the "Application" menu, administrators can enable cross-origin resource sharing or "CORS" on the Cumulocity API. For more information, see http://enable-cors.org.

### <a name="enabling-server-side-agents"></a>Enabling server-side agents

In the "Server-side agents" menu, the "Send dashboard via e-mail" smart rule can be enabled or disabled. To enable, select the checkbox and click "Save".

### <a name="openIT-credentials"></a>Enter OpenIT credentials

SMS sending is used by several features within the application. It can be used to make login more secure with [two-factors authentication](/guides/users-guide/administration#tfa). An SMS can be sent when an alarm is triggered. SMSes can be used to send instructions to devices. The service provided by [Openit](https://sms.openit.de/main.php) can be used similar. In this section, the user can enter credentials to activate features requiring SMS messages.

### <a name="platform-config"></a> Dealing with the platform configuration settings

> Please note that, this feature is only available to "Management" tenants.

The "Configuration" menu page is located under the "Settings" section. It allows users to configure system-wide properties in Cumulocity. The following options can be modified in the "Configuration" settings:

![Configuration menu1](/guides/users-guide/configuration_tab1.png)

- You can choose the default applications for new tenants. Note that, the application names are comma-separated.
- Passwords policies can be changed (e.g. "Change password validity limit").
- In the "Two-factor authentication" field, you can change the SMS template which is sent to the users.
- You can edit/override the support link url. The support url is visible to “Management” and “Enterprise Edition” tenants.

![Configuration menu1](/guides/users-guide/configuration_tab2.png)

- In the "Password reset" section, you can change all password reset related e-mail templates. 

![Configuration menu1](/guides/users-guide/configuration_tab3.png)

- Choose whether to enable or disable the support user. You can also set a date until which the user will remain active.
- In the "E-mail server" section you can adjust the "Host", "Port", "Username", "Password" and "Sender Address".

![Configuration menu1](/guides/users-guide/configuration_tab4.png)

- Set the e-mail template for data export and change the “User unauthorized error message”.
- Change the e-mail template for exceeding the storage limit before and after data removal is performed.

![Configuration menu1](/guides/users-guide/configuration_tab5.png)

- Change the suspended tenant “e-mail templates” and enable/disable the “Send e-mail to suspended tenant administrator” option.
- When ready, click on “Save configuration”.

> The configuration settings are available in "Management" tenant only. Other tenants are not able to manage the settings.

## <a name="retention"></a>Managing data retention

"Retention rules" gives you control how long data is stored in your account. For example, you want to store measurements for 90 days, but delete alarms already after 10 days. By default, all historical data is deleted after 60 days (This can be edited in system settings).

Retention rules are usually run during the night. When you edit a retention rule, you will not see an immediate effect in the usage section on the home page of the administration application.

![Add rule](/guides/users-guide/addrules.png)

To add additional "Retention rules", click on "Add rule". Up to the "Maximum age" field, you can enter an asterisk ("\*") into all fields to permit any value in that field.

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

## <a name="data-broker"></a>Data broker

Data broker lets you share data selectively with another tenant. You can share:

- Devices (and more generically, managed objects),
- Events,
- Alarms,
- Measurements.

Navigate to "Data connectors" if you would like to send data to another tenant. Navigate to "Data subscriptions", if you want to receive data from another tenant.

<img src="/guides/users-guide/data-broker-on-navigator.PNG" alt="Data broker menus" style="max-width: 25%">

> Devices that are forwarded using the data broker are accounted like normal devices also in the destination tenant.

### <a name="data-broker-connectors"></a> Data connectors

A data connector describes the subset of the data that you would like to send to a destination tenant, as well as the URL of that destination tenant.

#### <a name="data-broker-connectors-list"></a> Viewing data connectors

In the "Data connectors" menu, you can create new data connectors and manage the existing data connectors. Click on "Data connectors" to see a list of all currently defined data connectors with their status.

![Data broker connectors list](/guides/users-guide/data-broker-connectors-list.PNG)

Each card supports the following actions:

* Use the slider to enable and disable data forwarding to the destination tenant. If data is being forwarded, the slider reads "active". If data is not being forwarded, the slider reads "suspended" or "pending". "Suspended" means that you have disabled forwarding. "Pending" means that the destination tenant has disabled forwarding.
* Click "Edit" in the menu on the top right of the card to modify the data connector's configuration. The configuration is described in more detail below.
* Click "Duplicate" in the menu to create another data connector with the same configuration.
* Click "Delete" in the menu to stop data forwarding and remove the data connector.

#### <a name="data-broker-connector-edit"></a> Editing data connectors

Click "Add data connector" to create a new data connector or use the "Edit" menu on a particular data connector to edit its configuration.

![Data broker edit connector](/guides/users-guide/data-broker-edit-connector.PNG)

When creating a new data connector, enter

* The name of the data connector at the top using the small pencil icon.
* **Target URL for data connector**: The URL of the tenant to which data will be forwarded. Once saved, you cannot edit this value anymore.
* **Description**: A textual description of the configuration. Both the name and the description will be visible on the destination side after accepting the subscription.
* **Data filters**: A set of filters that define what is copied to the destination. You need to configure at least one filter.

Each data filter contains the following information:

* **Group or device**: The group or device that is forwarded. Selecting a group here results in all sub-groups and sub-devces being forwarded. By default, all data is forwarded.
* **API**: Defines the type of data being forwarded.
* **Fragments to filter**: The fragments that need to be present in a device to be forwarded.
* **Fragments to copy**: The fragments that are copied to the destination. If nothing is specified here, only standard properties of managed objects, alarms, events and measurements are forwarded (see below). Select "Copy all fragments" to forward the entire object.
* **Type filter**: Forwarded data needs to have this value in its "type" property.

The heading of a data filter summarizes the configuration in one line. The standard properties that are copied by default are:

* **For created alarms**: "type", "text", "time", "severity", "status".
* **For updated alarms**: "status", "text", "severity".
* **For created events**: "type", "text", "time".
* **For created measurements**: "type", "text", "time"
* **For created and updated devices**: "type", "name", "c8y_IsBinary", "c8y_IsDeviceGroup", "c8y_IsDevice", "c8y_DeviceGroup", "c8y_DeviceSubgroup", "c8y_SmartRule", "c8y_applications_storage", "c8y_DynamicGroup", "c8y_DeviceQueryString".

Once you have configured your filters, save the configuration. After saving, you will see a security code printed below your configuration. The security code prevents unintended forwarding of data. You need to communicate this security key separately to an administrative user of the destination tenant. You can use the icon next to the security code to copy the code to your clipboard.

![Security code](/guides/users-guide/securitycode.png)

### <a name="data-broker-subscriptions"></a> Data subscriptions

Click on "Data subscriptions" to view the data that is being forwarded to your tenant. The screenshot below illustrates the process of setting up data forwarding on the receiving end. Each card shows one step in the process.

![Data broker subscriptions list](/guides/users-guide/data-broker-subscriptions-list.PNG)

The steps are:

* First, click "Add data subscription" to receive data. You will see the card shown on the left of the screenshot. Enter the security code that you received from the sending end of the data.
* The card will temporarily change to a progress indicator. When the connection is established, click the "Accept" button to start forwarding data into your tenant. The subscription is active now.
* You can click the slider in the card to temporarily stop forwarding data into your tenant.

You can now navigate to the Device Management application or the Cockpit application. There will be a new "virtual group" with a specific icon (see the screenshot below) showing the forwarded devices. The group will have the same name as your subscription. Devices are "lazily" created on the destination side whenever they send data for the first time after setting up an active subscription.

![Data broker group in cockpit app](/guides/users-guide/data-broker-group-created.PNG)

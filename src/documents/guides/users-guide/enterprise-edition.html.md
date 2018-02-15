---
order: 140
title: Enterprise Edition
layout: default
---

## Overview

The Enterprise Edition of Cumulocity provides several enhancements to the features provided by the Standard Edition.

The following sections will walk you through all additional functionalities available in the Enterprise Edition in detail. For your convenience, find an overview on the content of this document below.

|SECTION|CONTENT|
|:---|:---|
|[Managing Tenants](#tenants)|How to [manage tenants](#tenants), retrieve [user statistics](#user-stats) and configure [tenant policies](#tenant-policies).
|[Managing User Hierarchies](#hierarchy)|How to create [user hierarchies](#hierarchy) and how to [delegate](#delegate) user hierarchies.
|[Using the Data Broker](#data-broker)|How to forward data to other tenants using [data connectors](#data-broker-connector) and how to receive data with a [data subscription](#data-broker-subscriptions) on the receiving end. The availability of this feature depends on your subscription plan.
|[Customizing your platform](#customization)|How to customize your platform by using the [branding feature](#branding) and by activating your own [domain name](domain-name) through a SSL certificate.
|[Configuration settings](#platform-config)|How to [configure specific settings](platform-config) related to the Enterprise Edition.


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

![Sub-tenants](/guides/users-guide/administration/Admin_Subtenants.png)

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
|Send password reset link as email|Selected by default. If you deselect this option, you need to provide a password and confirm the password (see [Getting Started > Logging in](/guides/users-guide/overview#login) for more information on password strength).
|Tenant policy|You may select a tenant policy to be applied to the tenant from the dropdown list.

Note, that fields with an asterisk * are mandatory.

Click **Save** to apply your settings.

When the tenant is created, it is automatically provisioned with a first, administrative user ("Administrator's username"). This administrator can create other users and set their permissions. The first user cannot be deleted to prevent you from locking yourself out. 

From the management tenant, you can enable other tenants to create subtenants. To do so, check "Allow creation of subtenants".

![Tenant-creation](/guides/users-guide/createtenant.png)

### Editing subtenant properties

To edit subtenants, click on the desired subtenant or click **Edit** in the context menu, accessible through the menu icon.

In the "Properties" tab, all fields are editable except of the ID and the administrator's username. For details on the fields, refer to [Creating sub-tenants](#creating-tenants).

### Subscribing to applications

In the "Applications" tab you can subscribe tenants to applications or remove the applications from the tenant. By default, tenants will be subscribed to the standard Cumulocity applications. 

<img src="/guides/users-guide/administration/Admin_SubtenantApplications.png" alt="Subscribe tenant" style="max-width: 100%">

To subscribe an application to a tenant, hover over the applications under "Available applications" on the right and click **Subscribe** on the desired application.

To remove an application, hover over the applications under "Subscribed applications" on the left and click **Unsubscribe**.

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

You can filter the usage statistics list for a time period by adding the start and end date in the top menu bar and click **Filter**. You can also filter and sort the list on any column by clicking the filter icon next to the column name and providing the filtering criteria. For details on filtering, refer to [Getting Started > Features and Functionalities > Filtering](/guides/users-guide/overview#filtering). 

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
3. Add at least one retention rule. For details on creating retention rules, refer to [Administration > Retention rules](/guides/users-guide/administration#retention-rules).
4. Optionally, add a tenant option.
5. Click **Save** to save your settings.

### Editing, duplicating and deleting policies

To edit a policy, click on the desired policy or click **Edit** in the context menu, accessible through the menu icon. 

To change the name of a policy, click the name in the top bar, modify it and click the green checkmark icon to save your changes.

To delete a retention rule or a tenant option from a policy, hover over it and click the delete icon.

To duplicate a policy, click the menu icon and from the context menu select **Duplicate**.

To delete a policy, click the menu icon and from the context menu select  **Delete**.

![Edit policy menu](/guides/users-guide/editpolicy.png)

## <a name="hierarchy"></a>Managing user hierarchies

With user hierarchies you can reflect independent organizational entities in Cumulocity that still share the same database. These entities can have limited permissions to subsets of the shared data and can manage their own sub-users.

> **Info**: To be able to use this feature, your tenant must be subscribed to the application "FEATURE.USER.HIERARCHY".

### Viewing user hierarchies

In the “User” page, user hierarchies are indicated by an arrow left from the user icon. Clicking on the arrow unfolds the user hierarchy. You can also fold and unfold the entire user hierarchy using the **Expand all** and **Collapse all** links on the top right.

A small number next to the user name shows how many direct sub-users a user has. Sub-users are users that can be managed by their respective parent user and that have at most the permissions of that parent user. In the example below, the user "TestUser" has two direct sub-users. 

![User hierarchies](/guides/users-guide/userhierarchies.png)

### <a name="sub-users"></a> Creating sub-users

User hierarchies are created by assigning an "owner" to a user. The "owner" can manage the user. The user can have at most the same permissions as the owner.

To assign an owner to a user, select the user in the "Users" page. In the "Owner" field, select a user from the dropdown list and click **Done** to confirm.

![Select owner](/guides/users-guide/chooseowner.png) 

>**Info:** When creating a new user, the owner is automatically set to the user who is logged in. The owner can be changed later. Only users with "USER ADMIN" permission can assign an owner to a user. 

> If you want an owner to manage only their sub-users, make sure that the owner does not have a global role with user management permissions for all users.

As an example, the sample below shows a user with a business role. The user becomes the owner of a new user. Therefore the new user can only get a business role assigned as the user cannot have higher permissions than the owner.

![Owner Sample](/guides/users-guide/ownersample.png)

### <a name="delegate"></a>Delegating user hierarchies to other users

In Cumulocity, users can delegate their user hierarchies and permissions to another user. The delegated user then has the same user management permissions as the user who activated the delegation. 

You may of course also delegate on a temporary basis, for example if you are temporarily unavailable.

To delegate your permissions to a user, either open the user and click the delegate icon in the "Delegated by" field, or click the menu icon at the right of the user entry in the user list and from the context menu, select **Delegate**.

![User delegation](/guides/users-guide/delegation.png)

To undelegate, remove the delegation in the "Delegate by" field, or click **Undelegate** in the context menu.

If the delegated user also needs to manage specific devices, the admin user must assign this device permissions (inventory roles) directly to the intended user. This can be done by using **Copy inventory roles from another user**. For details refer to [Administration > Managing users and permissions > Assigning inventory roles to users](/guides/users-guide/user-and-permission-management#attach-inventory).

> **Info:** Delegation works only inside user management and does not have any implication to other places. 

### Troubleshooting sub-users

In the example below the user cannot change the access to the Administration application, because the owner of the user has no USER MANAGEMENT permissions. As a result, the owner user can not assign built-in applications (and the owned user cannot use them). 

![Warning message](/guides/users-guide/warning1.png)

## <a name="data-broker"></a>Using the Data Broker

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

## <a name="customization"></a> Customizing your platform

In the "Enterprise edition" page under the "Settings" menu you can specify settings for the customization of your platform.

### <a name="branding"></a>Branding

In the "Branding" tab you can fully customize the look of your tenants to your own preferences. 

The branding feature allows you to edit the logos and colors used throughout the platform. Once your branding settings are saved, all subtenants are automatically updated. 

<img src="/guides/users-guide/administration/admin_Branding.png" alt="Branding tab" style="max-width: 100%">

**General**

In the “General” section you can edit the “Title” which will be used in the browser tab. 

**Main logo**

Under “Main logo”, specify the following items:

* The “Favicon”, which will be displayed in the browser’s address bar. Click **Choose file** to select a file from your computer. The supported favicon format is “ico”.
* Your branding logo, which will be shown during application loading. Click **Choose file** to select a file from your computer. The supported formats are “png” and “svg”.
* The “Brand logo height”.

**Navigator logo**

Under “Navigator logo” you can provide the “Navigator logo” and set the “Navigator logo height” located on top of the navigator panel.

**Type**

In the “Type” section you specify the font settings for your branded version. 

<img src="/guides/users-guide/administration/admin_BrandingType.png" alt="Branding type" style="max-width: 100%">

You can choose your base and headings font, and select an option for the navigator font (either same as base or same as headings font). You may also add a link to existing remote fonts to be used.

**Colors**

In the “Colors” section you specify the colors to be used in your branding version.

<img src="/guides/users-guide/administration/admin_BrandingColor.png" alt="Branding color" style="max-width: 100%">

The following parameters can be specified by providing a hex, rgb or rgba value:

* “Main brand color”.
* “Secondary brand color”. The default value is “#07b91A”.
* “Text color”. The default value is “#444”.
* “Link color”. The default value is the same as the main brand color.
* “Main background color”. The default value for this item is “#FAFAFA”.

**Top bar**

In the “Top bar” section you specify the parameters for the top bar.

<img src="/guides/users-guide/administration/admin_BrandingTopbar.png" alt="Branding topbar" style="max-width: 100%">

The following parameters can be specified by providing a hex, rgb or rgba value:

* “Background color”. The default value is “#FFFFF”.
* “Text color”. The default value is “49595B”.
* “Button hover text color”. The default value is the main brand color.

**Navigator**

In the “Navigator" section you specify the parameters for the navigator.

<img src="/guides/users-guide/administration/admin_BrandingTopbar.png" alt="Branding top bar" style="max-width: 100%">

The following parameters can be specified by providing a hex, rgb or rgba value:

* “Background color”. The default value is “2c3637”.
* "Logo wrapper background color". The default value is “Transparent”.
* “Title color”. The default value is “FFFFF”.
* “Text and buttons color”. The default value is “#FAFAFA”.
* “Separator line color”. The default value is “#FAFAFA”.
* “Text color” of the current item in the navigator. The default value is “#FAFAFA”.
* “Background color” of the current item in the navigator with the main brand color as default.

**Misc**

In the “Misc” section you may specify the “Button Border-Radius” by providing a value in pixel (px).

Click **Save** to save your settings.

Click **Preview** in the top menu bar to preview the new branding.

Click **Generate** in the top menu bar to apply your new branding.

The following image shows and an example where

* the “Main brand color” is purple,
* the “Secondary brand color” is white,
* the “Main background color” is blue,
* the top bar “Background color” is green,
* the navigator “Background color” is pink. 

<img src="/guides/users-guide/administration/admin_BrandingColored.png" alt="Branding example" style="max-width: 100%">

### <a name="domain-name"></a>Domain name

In the “Domain name” tab you can activate your own custom domain name.  

<img src="/guides/users-guide/administration/admin_DomainName.png" alt="Domain name" style="max-width: 100%">

First you have to upload the appropriate certificate by clicking **Upload Certificate**. Make sure that

* the certificate is in a valid PKCS#12 format,
* the certificate is not password protected,
* you are using a wildcard certificate to enable creation of subtenants.

Before activating the custom domain name, make sure that

* you have uploaded a valid SSL certificate for your custom domain,
* the common name (domain name) is not used by any other tenant,
* the certificate is currently valid (validFrom in the past and validTo in the future),
* you have configured the DNS A entry for the domain to point to the IP address of your DNS server.

After successful activation you will be redirected to your enterprise tenant at the new domain. You will also receive an email with information about the activation.

>**Info**: After the activation is completed you will no longer be able to access your tenant with the cumulocity domain name. Instead, use your custom domain name.


**Updating your certificate**

When your certificate expires, you must update your certificate with a new one with an extended validation period. When updating a certificate, you need to make sure that

* the certificate is in a valid PKCS#12 format,
* the certificate is not password protected,
* the certificate is currently valid (validFrom in the past and validTo in the future),
* the certificate has exactly the same common name (domain name) as the currently active certificate,
* you have configured the DNS A entry for the domain to point to the IP address of your DNS server.


**Deactivating your certificate**

If you wish to return to your old domain at Cumulocity, you can simply deactivate you certificate. 

>**Important**: Use with care. Your customers will not be able to access their subtenants anymore.

## <a name="config-platform"></a>Configuration settings

In the "Configuration" tab of the "Enterprise Edition" page you can configure system-wide properties in Cumulocity. The following options can be modified in the "Configuration" settings.

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

<img src="/guides/users-guide/administration/admin_ConfigurationServer.png" alt="Configure e-mail server" style="max-width: 100%">

In the "Data export" section you can set the e-mail subject and e-mail template for data export and specify the “User unauthorized error message”.

![Configuration menu1](/guides/users-guide/configuration_tab4.png)

In the "Storage limit" section you can specify the e-mail subject and e-mail template for emails being send *before* data is removed on exceeding the storage limit and *after* data removal is performed.

In the "Suspending tenants" section you can provide settings for emails being send on tenant suspension. 

<img src="/guides/users-guide/administration/admin_ConfigurationSuspended.png" alt="Suspended tenants" style="max-width: 100%">

At the top you can select if you want to send the e-mail to the suspended tenant's administrator and specify an additional e-mail receiver. Below you set the subject and template for the tenant suspended e-mail.

Click **Save configuration** to save your settings.

>**Info**: Additional features are available for "Management" tenants.


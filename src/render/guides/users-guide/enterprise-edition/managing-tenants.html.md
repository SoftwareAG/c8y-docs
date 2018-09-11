---
order: 10
title: Managing tenants
layout: redirect
---

<a name="tenants"></a>
If you are a service provider or subscribed to the Enterprise Edition of Cumulocity, you may want to manage your own subtenants. 

The tenants functionality allows you to create subtenants, subscribe them to the applications that you have available and potentially deactivate tenants if they are not in use anymore.

> **Important**: There is an major difference between providing several tenants and providing several users with different permissions within a single tenant. Tenants are physically separated data spaces with a separate URL, with own users, a separate application management and no sharing of data by default. Users in a single tenant by default share the same URL and the same data space. So if your users, for example, are separate customers of yours and you need to strictly separate them because they may be competitors, we strongly recommend you to do so by working with tenants.

>**Info**: If you would like to use this feature, please contact sales@cumulocity.com.

To be able to use the tenant functionality, your user needs to have the appropriate permissions. See [Creating and editing global roles](/guides/users-guide/administration#create-edit-roles) for information on editing permissions. Since editing tenants is a sensitive operation, permissions for editing tenants are more granular:

- Read: Browse and view tenants.
- Create: Create new tenants.
- Update: Edit tenants (incl. subscriptions) and suspend or activate them.
- Change: Create, edit and delete tenants.

### Viewing subtenants

Click **Subtenants** in the **Tenants** menu to view a list of all subtenants available in your account.

The **Tenants** page provides the following information on each subtenant:

* The name of the subtenant, e.g. company name of your customer.
* The ID and domain. When creating tenants, the ID gets the first part of the URL. For example, if you create a tenant with the ID "acme" on cumulocity.com, the tenant's URL will be "acme.cumulocity.com". Note, that while you can change the URL later on, you cannot change the ID anymore after the tenant was created.
* An optional contact name and phone number.
* The date when the tenant was created.
* The status of the tenant, either active (indicated by a green checkmark icon) or suspended (indicated by a red cross icon).

If you are using the management tenant, you will see an additional column "Parent tenant". This column shows the tenant that created the listed tenant.

![Sub-tenants](/guides/images/users-guide/Administration/Admin_Subtenants.png)

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

From the management tenant, you can enable other tenants to create subtenants. To do so, check **Allow creation of subtenants**.

![Tenant-creation](/guides/images/users-guide/createtenant.png)

### Editing subtenant properties

To edit subtenants, click on the desired subtenant or click **Edit** in the context menu, accessible through the menu icon.

In the **Properties** tab, all fields are editable except of the ID and the administrator's username. For details on the fields, refer to [Creating sub-tenants](#creating-tenants).

### <a name="subscribe"></a>Subscribing to applications

In the **Applications** tab you can subscribe tenants to applications or remove the applications from the tenant. By default, tenants will be subscribed to the standard Cumulocity applications. 

<img src="/guides/images/users-guide/Administration/Admin_SubtenantApplications.png" alt="Subscribe tenant" style="max-width: 100%">

To subscribe an application to a tenant, hover over the applications under **Available applications** on the right and click **Subscribe** on the desired application.

To remove an application, hover over the applications under **Subscribed applications** on the left and click **Unsubscribe**.

### Suspending subtenants

You can temporarily suspend tenants. Suspending tenants blocks any access to this tenant, regardless whether the access is from devices, users or other applications. 

To suspend a tenant, click the menu icon and from the context menu select **Suspend**.

In the upcoming dialog confirm the suspension by clicking **OK** and entering your password. The tenant will be shown with a red cross icon. As part of suspending the tenant, an email is sent to the tenant administrator if an email address is configured for that administrator.

>**Info**: If you are a service provider, you can suppress this email.

![Suspend tenant](/guides/images/users-guide/suspendtenant.png)

If a tenant is suspended, the tenant's data remains in the database and can be made available any time later. To do so, click **Activate**.

### Deleting subtenants

To finally delete a tenant and remove all the data of the tenant, click the menu icon and from the context menu select **Remove**.

>**Info**: This action cannot be reverted. For security reasons, it is only available in the management tenant.

### <a name="tenants-custom-properties"></a>Editing custom properties

The **Custom properties** tab allows you to view and modify values of custom properties, either predefined ones (like "External reference") or those defined in the [Properties library](/guides/users-guide/administration/changing-settings#properties). Such properties are also displayed as columns in [usage statistics table](#usage-stats).

![Custom Properties](/guides/images/users-guide/subtenant-custom-properties.png)

**Limiting subtenant device number**

The platform administrator can limit the count of concurrently registered root devices or simply all devices (including children devices). The platform administrator can also see the peak count of concurrently registered devices, root devices and the peak value of used storage in the **Usage statistics** page.

### <a name="usage-stats"></a> Retrieving usage statistics

The **Usage statistics** page provides statistical information on each subtenant. 

The following information is provided for each tenant:

- ID: ID of the subtenant
- API requests: Total number of API requests, including requests from  devices and applications
- Device API requests: Number of API requests from devices
- Storage (MB): Amount of data stored in your account
- Peak storage (MB): Peak value of storage
- Root Devices: Number of root devices, excluding child devices
- Peak root devices: Peak number of root devices, excluding child devices
- Devices: Total number of devices connected to the subtenant, including child devices
- Peak devices: Peak number of devices, including child devices
- Endpoint devices: Leaf machines, without gateways and edges
- Subscribed applications: Number of applications that the subtenant is subscribed to
- Creation time: Date and time of the creation of the subtenant
- Alarms created: Number of alarms created
- Alarms updated: Number of updates on alarms
- Inventories created: Number of managed objects created
- Inventories updated: Number of updates on managed objects
- Events created: Number of events created
- Events updated: Number of updates on events
- Measurements created: Number of measurements created
- Total inbound transfer: Sum of all inbound transfers (alarms created, alarms updated, events created, events updated, inventories created, inventories updated, measurements created)
- Parent tenant: Name of the parent tenant (available only for management tenant)
- External reference: This field is for individual usage, for example, you can add a link to the CRM system here or an internal customer number.

Moreover custom properties are displayed, if configured. 

Custom properties may be defined in the [Properties Library](/guides/users-guide/administration/changing-settings#properties) and then set their values in the [Custom properties](#tenants-custom-properties) tab of the tenant.

![Usage statistics](/guides/images/users-guide/usage-statistics-list.PNG)

You can filter the usage statistics list for a time period by adding the start and end date in the top menu bar and click **Filter**. You can also filter and sort the list on any column by clicking the filter icon next to the column name and providing the filtering criteria. For details on filtering, refer to [Getting Started > Features and Functionalities > Filtering](/guides/users-guide/overview#filtering). 

Click Export CSV at the right of the top menu bar to export the current view of the statistics table to a CSV file. A dialog will come up in which you can customize the CSV output.

<img src="/guides/images/users-guide/usage-statistics-export.PNG" style="width:400px;"></img>


### <a name="tenant-policies"></a> Tenant policies

A tenant policy is a set of tenant options and retention rules. Tenant options and retention rules may be specified during tenant creation. 

Creating a tenant policy with a specific set of options and rules saves time when creating multiple tenants with the same settings.

![Tenant policy](/guides/images/users-guide/tenantpolicy.png)

>**Info**: The options and rules are copied into the tenant. Editing the policy has no effect on tenants that have already been created.

Click **Tenant policies** in the **Tenants** menu to view all tenant policies available.

<img src="/guides/images/users-guide/administration/admin_TenantPolicies.png" alt="Tenant policies" style="max-width: 100%">

For each tenant policy, the name, an optional description and the number of options and retention rules is provided, either in a list or a grid.

### Adding a tenant policy

Click **Add tenant policy** in the top menu bar to create a new tenant policy.

![Add new policy](/guides/images/users-guide/addpolicy.png)
 
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

![Edit policy menu](/guides/images/users-guide/editpolicy.png)

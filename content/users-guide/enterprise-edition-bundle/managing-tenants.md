---
weight: 10
title: Managing tenants
layout: redirect
---

Using the Enterprise Tenant of Cumulocity IoT, you can make use of the tenants functionality which allows you to create and a manage subtenants.

> **Important:** There is a major difference between providing several tenants and providing several users with different permissions within a single tenant. Tenants are physically separated data spaces with a separate URL, with own users, a separate application management and no sharing of data by default. Users in a single tenant by default share the same URL and the same data space. So if your users, for example, are separate customers of yours and you need to strictly separate them because they may be competitors, we strongly recommend you to do so by working with tenants.

>**Info:** If you would like to use this feature, please contact sales@cumulocity.com.

To be able to use the tenant functionality, your user needs to have the appropriate permissions. See [Creating and editing global roles](/users-guide/administration#create-edit-roles) for information on editing permissions. Since editing tenants is a sensitive operation, permissions for editing tenants are more granular:

- READ: Browse and view tenants.
- CREATE: Create new tenants.
- UPDATE: Edit tenants (incl. subscriptions) and suspend or activate them.
- CHANGE: Create, edit and delete tenants.

### To view subtenants

Click **Subtenants** in the **Tenants** menu to view all subtenants available in your account, either in a grid or a list.

The **Tenants** page provides the following information on each subtenant:

* The name of the subtenant, e.g. company name of your customer.
* The ID and domain.
* Optionally, a contact name and phone number.
* The date when the tenant was created.
* The status of the tenant, either active (indicated by a green checkmark icon) or suspended (indicated by a red cross icon).

In the management tenant, you will also find information on the parent tenant, i.e. the tenant that created the listed tenant.

### <a name="creating-tenants"></a>To create a subtenant

1. Click **Create tenant** at the right of the top menu bar.

	![Create subtenant](/images/users-guide/enterprise-tenant/et-subtenant-create.png)

2. Provide the following properties:

	<table>
	<col style="width:20%">
	<col style="width:80%">
	<thead>
	<tr>
	<th style="text-align:left">Field</th>
	<th style="text-align:left">Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	<td style="text-align:left">Domain/ URL</td>
	<td style="text-align:left">Enter a subdomain of your choice, for example "acme". The tenant's URL will be "acme.cumulocity.com" on cumulocity.com. You can only use one subdomain level. For example, you can only use "acme.cumulocity.com" on cumulocity.com. You cannot use "mycustomer.acme.cumulocity.com". This is not permitted by the TLS standard. <br> The tenant domain may contain lowercase letters, digits or hyphens. It must start with a letter; hyphens are only allowed in the middle; minimum is 2 characters. Note that the usage of underscore characters is deprecated but still possible for backward compatibility reasons.  </td>
	</tr>
	<tr>
	<td style="text-align:left">Name</td>
	<td style="text-align:left">The name of the tenant, e.g. the company's name.</td>
	</tr>
	<tr>
	<td style="text-align:left">Administrator's email</td>
	<td style="text-align:left">You must provide a valid email address to enable users to reset their password.</td>
	</tr>
	<tr>
	<td style="text-align:left">Administrator's username</td>
	<td style="text-align:left">Username for the administrator of this tenant.</td>
	</tr>
	<tr>
	<td style="text-align:left">Contact name</td>
	<td style="text-align:left">Optional name of the contact.</td>
	</tr>
	<tr>
	<td style="text-align:left">Contact phone</td>
	<td style="text-align:left">Optional phone number of the contact.</td>
	</tr>
	<tr>
	<td style="text-align:left">Send password reset link as email</td>
	<td style="text-align:left">Selected by default. If you deselect this option, you need to provide a password and confirm the password (see <a href="/users-guide/getting-started/#login" class="no-ajaxy">Getting Started &gt; Accessing and logging into the Cumulocity IoT platform</a> for more information on password strength).</td>
	</tr>
	<tr>
	<td style="text-align:left">Tenant policy</td>
	<td style="text-align:left">You may select a tenant policy to be applied to the tenant from the dropdown list.</td>
	</tr>
	</tbody>
	</table>

3. Click **Save** to apply your settings.

When the subtenant is created, it gets an auto-generated ID, which cannot be changed. Also, it is automatically provisioned with a first, administrative user ("Administrator's username"). This administrator can create other users and set their permissions. The first user cannot be deleted to prevent you from locking yourself out.

From the management tenant, you can enable other tenants to create subtenants. To do so, check **Allow creation of subtenants** in the tenant editor.

### To view or edit subtenant properties

Click on the desired subtenant or click the menu icon at the right of the subtenant entry and then click **Edit**.

In the **Properties** tab, all fields are editable except of the ID and the administrator's username. For details on the fields, refer to [Creating sub-tenants](#creating-tenants).

To change the tenant password, click **Change password**, enter the new password in the upcoming fields and click **Save**.

#### Support user access

In the management tenant, you will moreover find information here on the support user requests/access for the subtenants.

<img src="/images/users-guide/enterprise-tenant/et-support-user-properties.png" alt="Support user access information" style="max-width: 100%">

The following information is displayed here:

|Field|Description
|:--------|:-----
|Status|May be either *Enabled* or *Disabled*. <br>*Enabled* indicates that: <br> - support user access has been activated on platform level (see [Configuration](/users-guide/enterprise-edition#configuration)), <br> - one or more subtenant users have activated support user access. <br>*Disabled* indicates that: <br> - support user access has been deactivated on platform level, <br> - support user access has been activated on platform level but deactivated for the subtenant, <br> - no subtenant user has currently any active support user access (i.e. as each support user request has either expired or has actively been deactivated).
|Active requests count|The number of requests currently active in the subtenant. Only displayed if support user access is not enabled globally on platform level. Shown as a number in a small red dot.
|Expiry date|Specifies the date on which support user access for the tenant will expire. If no date has been specified, the expiry date is set to "No limit".


### Suspending subtenants

Suspending a tenant blocks any access to this tenant, regardless whether the access is from devices, users or other applications.

If a tenant is suspended, the tenant’s data remains in the database and can be made available later by clicking **Activate**.

>**Important:** Suspended tenants for all Cumulocity IoT public cloud instances will be automatically deleted after 60 days.
>
> **Info:** If data broker connectors are configured for a tenant, suspending this tenant results in suspending all its data broker connectors as well.


#### To suspend a subtenant

1. Click the menu icon at the right of the respective subtenant entry and then click **Suspend**.

	![Suspend tenant](/images/users-guide/enterprise-tenant/et-subtenant-suspend.png)

2. In the resulting dialog box confirm the suspension by clicking **OK** and entering your password.

As part of suspending the tenant, an email is sent to the tenant administrator if an email address is configured for that administrator.

>**Info:** If you are a service provider, you can suppress this email.


### Deleting subtenants

>**Important:** Deleting a subtenant cannot be reverted. For security reasons, it is therefore only available in the management tenant. You cannot delete tenants from any tenant but the management tenant.
>
>Administrators in Enterprise Tenants are only allowed to suspend active subtenants, but not to delete them.

#### To delete a subtenant

Click the menu icon at the right of the respective subtenant entry and then click **Delete** to finally delete a tenant and remove all the data of the tenant.


### <a name="subscribe"></a>Applications

In the **Applications** tab you can view all subscribed applications, subscribe tenants to applications or remove the applications from the tenant. By default, tenants will be subscribed to the standard Cumulocity IoT applications.

<img src="/images/users-guide/enterprise-tenant/et-subtenant-applications.png" alt="Subscribe tenant" style="max-width: 100%">

#### To subscribe an application

Hover over the applications under **Available applications** on the right and click **Subscribe** on the desired application.

#### To unsubscribe an application

Hover over the applications under **Subscribed applications** on the left and click **Unsubscribe**.

#### Monitoring microservices

For all applications hosted as microservices by Cumulocity IoT the status of the microservice is indicated next to its name by symbols:

<img src="/images/users-guide/enterprise-tenant/et-applications-status.png" alt="Application details">

The microservice may be in one of the following states:

* <img src="/images/icons/ok.png" alt="Up" style="max-width: 100%; display: inline-block;"> Microservice is up and running
* <img src="/images/icons/warning.png" alt="Unhealthy" style="max-width: 100%; display: inline-block;">&nbsp; Microservice is unhealthy
* <img src="/images/icons/danger.png" alt="Down" style="max-width: 100%; display: inline-block;"> Microservice is down

You may view details on their status by expanding the respective entry.

<img src="/images/users-guide/enterprise-tenant/et-application-details.png" alt="Application details">

The following information is provided:

* Active: The number of active microservice instances
* Unhealthy: The number of inactive microservice instances
* Desired: The number of desired microservice instances
* Name: Microservice instance name
* Restarts: The number of microservice instance restarts

Further details are provided on the **Status** tab of the respective application, see [Administration > Managing applications](/users-guide/administration#managing-applications).


### <a name="tenants-custom-properties"></a>Custom properties

The **Custom properties** tab allows you to view and edit values of custom properties, either predefined ones (like "External reference") or those defined in the [Properties library](/users-guide/administration#properties). Such properties are also displayed as columns in the [Usage statistics](#usage-stats) page.

![Custom properties](/images/users-guide/enterprise-tenant/et-subtenant-custom-properties.png)

#### Limiting subtenant device number

Platform administrators can limit the count of concurrently registered root devices or simply all devices (including children devices) via the custom property "Limit number of devices".

They can view the peak number of concurrently registered devices, root devices and the peak value of used storage in the **[Usage statistics](#usage-stats)** page.

#### Limiting subtenant request rate

Platform administrators can limit the request rate of each subtenant via the following custom properties:

* Limit HTTP queue - Limit of HTTP request queue for tenant
* Limit HTTP requests - Limit of HTTP requests for tenant per second
* Limit stream queue - Limit of MQTT request queue for tenant
* Limit stream requests - Limit of MQTT requests for tenant per second

It is also possible to customize the buffer size for the CEP queue and the data broker queue for a particular tenant. This can be done from the management tenant by using the following subtenant custom fragments:

 - cep.queue.limit
 - data-broker.queue.limit

When there is no limit on tenant and system level, the limit feature is considered as disabled and the tenant gains unlimited access. To switch off request rate limiting after it was enabled, set the value to "-1".


### <a name="usage-stats"></a> Usage statistics

The **Usage statistics** page provides statistical information on each subtenant.

![Subtenant statistics](/images/users-guide/enterprise-tenant/et-subtenants-usage-statistics.png)

The following information is provided for each subtenant (not completely visible in the screenshot above due to space restrictions):

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th align="left">Field</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">ID</td>
<td align="left">ID of the subtenant</td>
</tr>
<tr>
<td align="left">Name</td>
<td align="left">Name of the subtenant</td>
</tr>
<tr>
<tr>
<td align="left">API requests</td>
<td align="left">Total number of API requests, including requests from  devices and applications</td>
</tr>
<tr>
<td align="left">Device API requests</td>
<td align="left">ID of the subtenant</td>
</tr>
<tr>
<td align="left">Storage (MB)</td>
<td align="left">Amount of data stored in your account</td>
</tr>
<tr>
<td align="left">Peak storage (MB)</td>
<td align="left">Peak value of storage</td>
</tr>
<tr>
<td align="left">Root devices</td>
<td align="left">Number of root devices, excluding child devices</td>
</tr>
<tr>
<td align="left">Peak root devices</td>
<td align="left">Peak number of root devices, excluding child devices</td>
</tr>
<tr>
<td align="left">Devices</td>
<td align="left">Total number of devices connected to the subtenant, including child devices</td>
</tr>
<tr>
<td align="left">Peak devices</td>
<td align="left">Peak number of devices, including child devices</td>
</tr>
<tr>
<td align="left">Endpoint devices</td>
<td align="left">ID of the subtenant</td>
</tr>
<tr>
<td align="left">ID</td>
<td align="left">Leaf machines, without gateways and edges</td>
</tr>
<tr>
<td align="left">Subscribed applications</td>
<td align="left">Number of applications that the subtenant is subscribed to</td>
</tr>
<tr>
<td align="left">Creation time</td>
<td align="left">Date and time of the creation of the subtenant</td>
</tr>
<tr>
<td align="left">Alarms created</td>
<td align="left">Number of alarms created</td>
</tr>
<tr>
<td align="left">Alarms updated</td>
<td align="left">Number of updates on alarms</td>
</tr>
<tr>
<td align="left">Inventories created</td>
<td align="left">Number of managed objects created</td>
</tr>
<tr>
<td align="left">Inventories updated</td>
<td align="left">Number of updates on managed objects</td>
</tr>
<tr>
<td align="left">Events created</td>
<td align="left">Number of events created</td>
</tr>
<tr>
<td align="left">Events updated</td>
<td align="left">Number of updates on events</td>
</tr>
<tr>
<td align="left">Measurements created</td>
<td align="left">Number of measurements created</td>
</tr>
<tr>
<td align="left">Total inbound transfer</td>
<td align="left">Sum of all inbound transfers (alarms created, alarms updated, events created, events updated, inventories created, inventories updated, measurements created)</td>
</tr>
<tr>
<td align="left">CPU (M)</td>
<td align="left">Microservice CPU usage, specified in CPU milliseconds, see <a href="#microservice-usage">Microservice usage</a> for details</td>
</tr>
<tr>
<td align="left">Memory (MB)</td>
<td align="left">Microservice memory usage, see <a href="#microservice-usage">Microservice usage</a> for details</td>
</tr>
<tr>
<td align="left">Parent tenant</td>
<td align="left">Name of the parent tenant (available only for management tenant)</td>
</tr>
<tr>
<td align="left">External reference</td>
<td align="left">This field is for individual usage, for example, you can add a link to the CRM system here or an internal customer number</td>
</tr>
</tbody>
</table>

Moreover custom properties are displayed, if configured.

Custom properties may be defined in the [Properties Library](/users-guide/administration#properties) and then set their values in the [Custom properties](#tenants-custom-properties) tab of the tenant.

You can filter the usage statistics list for a time period by adding the start and end date in the top menu bar and click **Filter**. You can also filter and sort the list on any column by clicking the filter icon next to the column name and providing the filtering criteria. See also [Getting Started > UI functionalities and features> Filtering](/users-guide/getting-started/#filtering).

#### To export the usage statistics table

1. Click Export CSV at the right of the top menu bar to export the current view of the statistics table to a CSV file.
2. In the resulting dialog box you can customize the CSV output by specifying a field separator, decimal separator and charset.
<br> <img src="/images/users-guide/enterprise-tenant/et-subtenant-statistics-export.png"></img> <br>
3. Click **Download** to start the export.

The CSV file will be downloaded to your file system.


#### <a name="microservice-usage"></a>Microservice usage

The microservice usage feature gathers information on the resource usage per subtenant for each microservice. This enables Enterprise Tenants and service providers to charge tenants not only based on subscriptions but also based on resources usage.


##### Billing modes

Cumulocity IoT offers two billing modes:

* **Subscription-based billing**: Charges a constant price when a tenant is subscribed to a microservice while resource usage is assigned to the owner.

* **Resource-based billing**: Exposes the number of resources used by a microservice to calculate billing.

The billing modes are specified per microservice in the [microservice manifest](/microservice-sdk/concept/#manifest) and are set in the field "billingMode".

RESOURCES: Sets the billing mode to resources-based. This is the default mode and will be applied to all microservices that are not explicitly switched to subscription-based billing mode.

SUBSCRIPTION: Sets the billing mode to subscription-based.

##### Isolation level

Two isolation levels are distinguished for microservices: per-tenant isolation and multi-tenant isolation.

In case of subscription-based billing, the entire resources usage is always assigned to the microservice owner, independent of the isolation level,  while the subscribed tenant will be billed for the subscription.

In case of resources-based billing, charging depends on the isolation level:

* Per-tenant - the subscriber tenant is charged for used resources
* Multi-tenant - the owner of the microservice is charged for used resources

In case of multi-tenant isolation level, the parent tenant as the owner of a microservice (e.g. the management tenant of an Enterprise Tenant or service provider) is charged for both subscribed applications (subscription-based billing) and used resources (resource-based billing) of the subtenants.

##### Resources usage assignment for billing mode and isolation level

|Billing mode|Microservice Isolation|Resources usage assigned to
|:--------|:-----|:-----
|Subscription-based|Per-tenant|Owner
|Subscription-based|Multi-tenant|Owner
|Resources-based|Per-tenant|Subscriber
|Resources-based|Multi-tenant|Owner

##### Collected values

The following values are collected on a daily base for each tenant:

* CPU usage, specified in CPU milliseconds (1000m = 1 CPU)
* Memory usage, specified in MB

Microservice resources are counted based at limits defined in the microservice manifest per day. At the end of each day, the information about resource usage is collected into the tenant statistics. It is also considered that a microservice might not be subscribed for a whole day.

**Example**: If a tenant was subscribed to a microservice for 12h and the microservice has 2 CPU and 2 GB of memory it should be counted as 1000 CPU milliseconds and 1024 MB of memory.

For billing purposes, in addition to CPU usage and memory usage the cause for the billing is collected (e.g. owner, subscription for tenant):

```json
{
  "name": "cep",
	"cpu": 6000,
	"memory": "20000",
	"cause": "Owner"
},
{
  "name": "cep-small",
  "cpu": 1000,
  "memory": "2000",
  "cause": "Subscription for tenant"
}
```

The information on the microservice usage is presented in the **Usage Statistics** page.

![Tenant statistics](/images/users-guide/enterprise-tenant/et-subtenants-usage-statistics-microservice.png)

For more details, refer to [Tenants > Tenant usage statistics](/reference/tenants/#tenant-usage-statistics) in the Reference guide. Note that details are available only for daily usage. For a summary query only the sum of all issued requests is returned.

##### Scaling

Auto-scaling monitors your microservices and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. It is easy to configure the microservice scaling by setting the property `scale` in the [Microservice manifest](/microservice-sdk/concept/#manifest).

For instance, when you have a microservice with scale policy set to AUTO and the CPU usage points that it is needed to start a new microservice instance for three hours, the billing logs: (24/24 + 3/24) * consumed resources.

24/24 - one instance active for the whole day<br>
 3/24 - second instance active only three hours

Note that an audit record is created for every change of the number of instances.

![Audit logs](/images/users-guide/enterprise-tenant/et-audit-logs-microscaling.png)

For more information, refer to [Auditing](/reference/auditing/) in the Reference guide.


### <a name="tenant-policies"></a> Tenant policies

A tenant policy is a set of tenant options and retention rules. Tenant options and retention rules may be specified during tenant creation.

<img src="/images/users-guide/enterprise-tenant/et-tenant-policy-assign.png" alt="Assign tenant policy">

Creating a tenant policy with a specific set of options and rules saves time when creating multiple tenants with the same settings.

>**Info:** The options and rules are copied into the tenant. Editing the policy has no effect on tenants that have already been created.

#### To view tenant policies

Click **Tenant policies** in the **Tenants** menu to view all available tenant policies.

<img src="/images/users-guide/enterprise-tenant/et-tenant-policies.png" alt="Tenant policies">

For each tenant policy, the name, an optional description and the number of options and retention rules is provided, either in a list or a grid.

#### To create a tenant policy

1. Click **Add tenant policy** in the top menu bar.
<br>![Add new policy](/images/users-guide/enterprise-tenant/et-tenant-policy-add.png)<br>
2. In the resulting dialog box, enter a name and an optional description.
3. Add at least one retention rule. For details on creating retention rules, see [Administration > Managing data retention > Retention rules](/users-guide/administration#retention-rules).
4. Optionally, add a tenant option.
5. Click **Save**.

The tenant policy will be added to the tenant policies list.

#### To edit a tenant policy

Click the respective policy entry or click the menu icon at the right of the policy entry and then click **Edit**.

In the resulting dialog box, make your edits and click **Save** to save your settings.

To delete a retention rule or a tenant option from a policy, hover over it and click the delete icon.

#### To duplicate a tenant policy

Click the menu icon in the tenant policy entry you want to duplicate and then click **Duplicate**.

#### To delete a tenant policy

Click the menu icon in the tenant policy entry you want to delete and then click **Delete**.

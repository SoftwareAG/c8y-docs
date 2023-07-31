---
weight: 10
title: Managing tenants
layout: redirect
aliases:
  - /users-guide/enterprise-edition/#managing-tenants
helpcontent:
  - label: managing-tenants
    title: Subtenants
    content: "Click **Subtenants** in the **Tenants** menu to view all subtenants available in your account. The **Tenants** page provides information on each subtenant such as the name of the subtenant, its ID and domain, and the status of the tenant (either active, indicated by a green checkmark icon, or suspended, indicated by a red cross icon).


    To create a subtenant click **Create tenant** at the top right."
  - label: tenant-policies
    title: Tenant policies
    content: "During tenant creation, tenant options and retention rules may be specified. This can easily be done by using a tenant policy, which defines a set of tenant options and retention rules. Creating a tenant policy with a specific set of options and rules saves time when creating multiple tenants with the same settings.


    Click **Tenant policies** in the **Tenants** menu to view all available tenant policies. To create a tenant policy, click **Add policy** at the top right."

---

Using the {{< enterprise-tenant >}} of {{< product-c8y-iot >}}, you can make use of the tenants functionality which allows you to create and manage subtenants.

{{< c8y-admon-important >}}
There is a major difference between providing several tenants and providing several users with different permissions within a single tenant. Tenants are physically separated data spaces with a separate URL, with own users, a separate application management and no sharing of data by default. Users in a single tenant by default share the same URL and the same data space. So if your users, for example, are separate customers of yours and you must strictly separate them because they may be competitors, we strongly recommend you to do so by working with tenants. For details on the role-based access approach versus multi-tenancy, see [RBAC versus multi-tenancy approach](/concepts/tenant-hierarchy/#comparison).
{{< /c8y-admon-important >}}

{{< c8y-admon-info >}}
If you would like to use this feature, please contact [product support](/welcome/contacting-support/).
{{< /c8y-admon-info >}}

To be able to use the tenant functionality, your user needs to have the appropriate permissions. See [To add a global role](/users-guide/administration#create-edit-roles) for information on editing permissions. Since editing tenants is a sensitive operation, permissions for editing tenants are more granular:

- READ - browse and view tenants.
- CREATE - create new tenants.
- UPDATE - edit tenants (incl. subscriptions) and suspend or activate them.
- CHANGE - create, edit and delete tenants.

### To view subtenants

Click **Subtenants** in the **Tenants** menu to view all subtenants available in your account.

The **Tenants** page provides the following information on each subtenant:

* The name of the subtenant, for example, company name of your customer.
* The ID and domain.
* Optionally, a contact name.
* The date when the tenant was created.
* The status of the tenant, either active (indicated by a green checkmark icon) or suspended (indicated by a red cross icon).

{{< c8y-admon-info >}}
In the {{< management-tenant >}}, you also find a column with information on the parent tenant. The parent tenant is the original tenant that created the subtenants that are listed in the table.
{{< /c8y-admon-info >}}


<a name="creating-tenants"></a>
### To create a subtenant

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
				<th style="text-align:left">Required</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="text-align:left">Domain/ URL</td>
				<td style="text-align:left">Enter a subdomain of your choice, for example "acme". The tenant's URL will be "acme.{{< domain-c8y >}}" on {{< domain-c8y >}}. You can only use one subdomain level. For example, you can only use "acme.{{< domain-c8y >}}" on {{< domain-c8y >}}. You cannot use "mycustomer.acme.{{< domain-c8y >}}". This is not permitted by the TLS standard. <br> The tenant domain may contain lowercase letters, digits or hyphens (-). It must start with a letter; hyphens are only allowed in the middle; minimum is 2 characters.</td>
				<td style="text-align:left">Yes</td>
			</tr>
			<tr>
				<td style="text-align:left">Name</td>
				<td style="text-align:left">The name of the tenant, for example, the company's name.</td>
				<td style="text-align:left">Yes</td>
			</tr>
			<tr>
				<td style="text-align:left">Administrator's email</td>
				<td style="text-align:left">A valid email address to enable users to reset their password.</td>
				<td style="text-align:left">Yes</td>
			</tr>
			<tr>
				<td style="text-align:left">Administrator's username</td>
				<td style="text-align:left">Username for the administrator of this tenant.</td>
				<td style="text-align:left">Yes</td>
			</tr>
			<tr>
				<td style="text-align:left">Contact name</td>
				<td style="text-align:left">Name of the contact.</td>
				<td style="text-align:left">No</td>
			</tr>
			<tr>
				<td style="text-align:left">Contact phone</td>
				<td style="text-align:left">Phone number of the contact.</td>
				<td style="text-align:left">Yes</td>
			</tr>
			<tr>
				<td style="text-align:left">Send password reset link as email</td>
				<td style="text-align:left">Selected by default. If you deselect this option, you must provide a password and confirm the password (see <a href="/users-guide/getting-started/#login" class="no-ajaxy">Getting Started &gt; Accessing and logging into the platform &gt; How to log into the platform</a> for more information on password strength).</td>
				<td>No</td>
			</tr>
			<tr>
				<td style="text-align:left">Tenant policy</td>
				<td style="text-align:left">You may select a tenant policy to be applied to the tenant from the dropdown list.</td>
				<td style="text-align:left">No</td>
			</tr>
		</tbody>
	</table>


3. Click **Save** to apply your settings.

When the subtenant is created, it gets an auto-generated ID, which cannot be changed. Also, it is automatically provisioned with a first, administrative user ("Administrator's username"). This administrator can create other users and set their permissions. The first user cannot be deleted to prevent you from locking yourself out.

From the {{< management-tenant >}}, you can enable other tenants to create subtenants. To do so, check **Allow creation of subtenants** in the tenant editor.

### To view or edit subtenant properties

Click on the desired subtenant or click the menu icon at the right of the subtenant entry and then click **Edit**.

In the **Properties** tab, all fields are editable except of **ID**, **Domain/ URL** and **Administrator's username**. For details on the fields, refer to [To create a subtenant](#creating-tenants).

To change the tenant password, click **Change password**, enter the new password in the upcoming fields and click **Save**.

<a name="user-access"></a>
#### Support user access information

At the right of the **Properties** tab, you can find information on the support user requests/access for the subtenants.

<img src="/images/users-guide/enterprise-tenant/et-support-user-properties.png" alt="Support user access information" style="max-width: 100%">

The following information is displayed here:

<table>
<colgroup>
<col width="20%">
<col width="80%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Status</td>
<td style="text-align:left">May be either "Enabled" or "Disabled". <br>"Enabled" indicates that: <br>&nbsp;&nbsp;- Support user access has been activated globally in the {{< management-tenant >}} (see <a href="../../users-guide/administration/#platform-configuration-settings">Administration &gt; Platform &nbsp;&nbsp;configuration settings</a>).<br>&nbsp;&nbsp;- One or more subtenant users have activated support user access.<br>"Disabled" indicates that: <br>&nbsp;&nbsp;- Support user access has been deactivated globally in the {{< management-tenant >}}. <br>&nbsp;&nbsp;- No subtenant user has currently any active support user access (that means, each support user request has either expired or has actively been deactivated).</td>
</tr>
<tr>
<td style="text-align:left">Active requests count</td>
<td style="text-align:left">The number of requests currently active in the subtenant. Only displayed if support user access is not enabled globally in the {{< management-tenant >}}. Shown as a number in a small red dot.</td>
</tr>
<tr>
<td style="text-align:left">Expiry date</td>
<td style="text-align:left">Specifies the date on which support user access for the tenant will expire. If no date has been specified, the expiry date is set to "No limit".</td>
</tr>
</tbody>
</table>

### Suspending subtenants

Suspending a tenant blocks any access to this tenant, regardless whether the access is from devices, users or other applications. In addition all its microservices are undeployed, and if the tenant is reactivated all its microservices are re-deployed.

The tenant's data remains in the database and can be made available later by clicking **Activate**.

Refer to [Usage statistics and billing > Lifecycle](#lifecycle) for details on the billing perspective of suspended tenants.

{{< c8y-admon-important >}}
Suspended tenants for all {{< product-c8y-iot >}} public cloud instances will be automatically deleted after 60 days.
{{< /c8y-admon-important>}}

{{< c8y-admon-info >}}
If data broker connectors are configured for a tenant, suspending this tenant results in suspending all its data broker connectors as well.
{{< /c8y-admon-info >}}

#### To suspend a subtenant

1. Click the menu icon at the right of the respective subtenant entry and then click **Suspend**.

	![Suspend tenant](/images/users-guide/enterprise-tenant/et-subtenant-suspend.png)

2. In the resulting dialog box confirm the suspension by clicking **Suspend** and then entering your password.

{{< c8y-admon-info >}}
* As part of suspending the tenant, an email is sent to the email address that was configured for the tenant administrator.
* If you are a service provider, you can suppress this email.
{{< /c8y-admon-info >}}

### Deleting subtenants

{{< c8y-admon-important >}}
Deleting a subtenant cannot be reverted. For security reasons, it is therefore only available in the {{< management-tenant >}}. You cannot delete tenants from any tenant but the {{< management-tenant >}}.

Administrators in {{< enterprise-tenant >}}s are only allowed to suspend active subtenants, but not to delete them.
{{< /c8y-admon-important >}}

#### To delete a subtenant

Click the menu icon at the right of the respective subtenant entry and then click **Delete** to finally delete a tenant and remove all the data of the tenant.


<a name="subscribe"></a>
### Applications

In the **Applications** tab you can view all subscribed applications, subscribe tenants to applications or remove the applications from the tenant. By default, tenants will be subscribed to the standard {{< product-c8y-iot >}} applications.

<img src="/images/users-guide/enterprise-tenant/et-subtenant-applications.png" alt="Subscribe tenant" style="max-width: 100%">

#### To subscribe an application

Hover over the application under **Available applications** at the right and click **Subscribe** on the desired application.

#### To unsubscribe an application

Hover over the application under **Subscribed applications** at the left and click **Unsubscribe**.

#### Monitoring microservices

For all applications hosted as microservices by {{< product-c8y-iot >}} the status of the microservice is indicated next to its name by symbols and may be in one of the following states:

* <img src="/images/icons/ok.png" alt="Up" style="max-width: 100%; display: inline-block;"> Microservice is up and running
* <img src="/images/icons/warning.png" alt="Unhealthy" style="max-width: 100%; display: inline-block;">&nbsp; Microservice is unhealthy
* <img src="/images/icons/danger.png" alt="Down" style="max-width: 100%; display: inline-block;"> Microservice is down

You may view details on their status by expanding the respective entry.

<img src="/images/users-guide/enterprise-tenant/et-application-details.png" alt="Application details">

The following information is provided:

* Active - the number of active microservice instances
* Unhealthy - the number of inactive microservice instances
* Desired - the number of desired microservice instances
* Name - microservice instance name
* Restarts - the number of microservice instance restarts.

{{< c8y-admon-info >}}
Information on the microservice instance name and the number of restarts is displayed in case of at least one restart.
{{< /c8y-admon-info >}}

Further details are provided on the **Status** tab of the respective application, see [Administration > Managing applications](/users-guide/administration#managing-applications).


<a name="tenants-custom-properties"></a>
### Custom properties

The **Custom properties** tab allows you to view and edit values of custom properties, either predefined ones (like "External reference") or those defined in the [Properties library](/users-guide/administration#properties). Such properties are also displayed as columns in the [Usage statistics](/users-guide/enterprise-tenant/#usage-and-billing) page.

#### Limiting subtenant request rate

Platform administrators can limit the request rate of each subtenant via the following custom properties:

* Limit HTTP queue - limit of HTTP request queue for tenant
* Limit HTTP requests - limit of HTTP requests for tenant per second
* Limit stream queue - limit of MQTT request queue for tenant
* Limit stream requests - limit of MQTT requests for tenant per second

The request throttling mechanism is only enabled when both HTTP properties (limit HTTP queue and limit HTTP requests) are configured. If one of the values is omitted, it does not work.

{{< c8y-admon-important >}}
Rate limiting can be an effective countermeasure against threats like brute force login attempts, API abuse and request flooding thus reducing the number of malicious/unwanted traffic. This helps in protecting against DoS (Denial of Service) attacks and saving the available bandwidth for legitimate requests.
{{< /c8y-admon-important >}}

It is also possible to customize the buffer size for the CEP queue and the data broker queue for a particular tenant. This can be done from the {{< management-tenant >}} by using the following subtenant custom fragments:

* cep.queue.limit
* data-broker.queue.limit

When there is no limit on tenant and system level, the limit feature is considered as disabled and the tenant gains unlimited access. To switch off request rate limiting after it was enabled, set the value to "-1".

#### Limiting subtenant device number

Platform administrators can limit the count of concurrently registered root devices or simply all devices (including child devices) via the custom property "Limit number of devices".

They can view the peak number of concurrently registered devices, root devices and the peak value of used storage in the [Usage statistics](/users-guide/enterprise-tenant/#usage-and-billing) page.

#### Product experience tracking

Using the checkbox **Enable Gainsight product experience tracking** a parent tenant can enable/disable the product experience tracking through the [Gainsight PX](https://www.gainsight.com/product-experience/) product experience software for the given child tenant.

On tenant level, the product experience tracking by Gainsight can be disabling by disabling the cookie banner on the **Branding** page, see [Customizing your platform > Branding](/users-guide/enterprise-tenant/#branding).

Even if tracking is enabled for a tenant, users must actively accept the tracking of functional cookies, before any functional data on the usage of the platform is tracked, see [Getting started > Accessing and logging into the platform](/users-guide/getting-started/#accessing-platform).


<a name="tenant-policies"></a>
### Tenant policies

A tenant policy is a set of tenant options and retention rules. Tenant options and retention rules may be specified during tenant creation.

Creating a tenant policy with a specific set of options and rules saves time when creating multiple tenants with the same settings.

{{< c8y-admon-info >}}
The options and rules are copied into the tenant. Editing the policy has no effect on tenants that have already been created.
{{< /c8y-admon-info >}}

{{< c8y-admon-important >}}
Tenant options specified in a tenant policy are **not encrypted**. You should not specify or overwrite tenant options here with a "credentials." prefix, since the platform expects those options to be encrypted with data that will appear after the tenant has been created.
{{< /c8y-admon-important >}}

#### To view tenant policies

Click **Tenant policies** in the **Tenants** menu to view all available tenant policies.

For each tenant policy, the name, an optional description and the number of options and retention rules is provided, either in a list or a grid.

#### To create a tenant policy

1. Click **Add policy** in the top menu bar.
2. In the resulting dialog box, enter a name and an optional description.
<br>![Add new policy](/images/users-guide/enterprise-tenant/et-tenant-policy-add.png)<br>
3. Add at least one retention rule. For details on creating retention rules, see [Administration > Managing data > Retention rules](/users-guide/administration#retention-rules).
4. Optionally, add a tenant option.
5. Click **Save**.

The tenant policy will be added to the tenant policies list.

{{< c8y-admon-important >}}
When defining the retention rules and options you can select a checkbox to allow subtenants to modify definitions of these rules or options. By default, this checkbox is not activated. Be aware that if you do not select this checkbox after creating the subtenant you must run an update from the {{< management-tenant >}} in order to edit those rules and options.
{{< /c8y-admon-important >}}

#### To edit a tenant policy

Click the respective policy entry or click the menu icon at the right of the policy entry and then click **Edit**.

In the resulting dialog box, make your edits and click **Save** to save your settings.

To delete a retention rule or a tenant option from a policy, hover over it and click the delete icon.

#### To duplicate a tenant policy

Click the menu icon in the tenant policy entry you want to duplicate and then click **Duplicate**.

#### To delete a tenant policy

Click the menu icon in the tenant policy entry you want to delete and then click **Delete**.

<a name="default-subscriptions"></a>
### Default subscriptions

In the {{< product-c8y-iot >}} platform, you can configure which applications and microservices are subscribed to a tenant on tenant creation. When you create a new tenant, the specified applications and microservices automatically get subscribed to it.

In addition, you can specify which applications and microservices are subscribed to a tenant when the system is upgraded. This list might differ from the default subscriptions on tenant creation. For example, certain default applications might have been unsubscribed from a tenant after creation and you may not want these applications to be subscribed to it again or you may want to subscribe different ones to it.

In the **Default subscriptions** page, you can configure two separate lists of applications. These will be subscribed by default to:

- Every new tenant on its creation.
- Every existing tenant on platform upgrade.

{{< c8y-admon-info >}}
These default lists can be overridden for particular subtenants by setting additional tenant options, for example via tenant policy. For details, see [Overriding default subscriptions](#default-applications) below or the [Tenant API](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Tenant-API) in the {{< openapi >}}.
{{< /c8y-admon-info >}}

On the left, the list of subscribable applications (both web applications and microservices) is displayed, which consists of:

- All own applications.
- All subscribed applications which have different names than the own applications.

{{< c8y-admon-info >}}
In order to help you to distinguish which application is owned and which is subscribed, the tenant ID of the owner is displayed.
{{< /c8y-admon-info >}}

On the right, you see the **Subscribed on tenant creation** and the **Subscribed on platform upgrade** columns.

Initially, the lists show the default subscriptions inherited from the tenant hierarchy.

<img src="/images/users-guide/Administration/admin-default-subscriptions-inherited.png" alt="Default subscriptions - inherited from tenant hierarchy">

<br>

You can override both lists by switching the corresponding toggle. This will reveal all available applications (initially, unselected ones are hidden) but the selection will remain the same.

Next, adjust the lists to your needs by selecting additional applications to be subscribed by default or deselect applications you do not want to be subscribed.

You may also deselect all of them if you don't want any subscriptions to be executed on tenant creation and/or platform upgrade.

<img src="/images/users-guide/Administration/admin-default-subscriptions-overridden.png" alt="Default subscriptions - overriding settings from tenant hierarchy">
<br>

If you want to return to the settings inherited from the tenant hierarchy, just switch the corresponding toggle again.

Save the settings by clicking **Save** at the bottom of the page.

{{< c8y-admon-info >}}
Obsolete entries not matching any existing applications are removed on save. If an application selected in one of the lists has been removed, it will be silently ignored during tenant creation and/or platform upgrade. If another application with the same name is created afterwards (but before the settings on this page are saved again, which will remove the obsolete entry), the new application will be subscribed instead of the previous one.
{{< /c8y-admon-info >}}

<a name="default-applications"></a>
#### Overriding default subscriptions

The default subscriptions can be overridden for subtenants by setting up a tenant policy with the following options:

* To define default web applications subscribed to new tenants on creation:
  * category: configuration
  * key: default.tenant.applications
  * value: comma-separated list of application names, for example, administration,devicemanagement,cockpit,feature-microservice-hosting,feature-cep-custom-rules
* To define default microservices subscribed to new tenants on creation:
  * category: configuration
  * key: default.tenant.microservices
  * value: comma-separated list of microservice names, for example, device-simulator,report-agent,sms-gateway
* To use a different list of web applications to be subscribed to existing tenants on platform upgrade:
  * category: configuration
  * key: on-update.tenant.applications.enabled
  * value: true/false (when false or not set, the same list from default.tenant.applications will be used)
* To define default web applications subscribed to existing tenants on platform upgrade:
  * category: configuration
  * key: on-update.tenant.applications
  * value: comma-separated list of application names, for example, administration,devicemanagement,cockpit,feature-microservice-hosting,feature-cep-custom-rules
* To use a different list of microservices to be subscribed to existing tenants on platform upgrade:
  * category: configuration
  * key: on-update.tenant.microservices.enabled
  * value: true/false (when false or not set, the same list from default.tenant.microservices will be used)
* To define default microservices subscribed to existing tenants on platform upgrade:
  * category: configuration
  * key: on-update.tenant.microservices
  * value: comma-separated list of microservice names, for example, device-simulator,report-agent,sms-gateway

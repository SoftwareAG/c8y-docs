---
weight: 13
title: Custom properties
layout: bundle
section:
  - platform_administration
aliases:
  - /users-guide/enterprise-edition
---

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



<a name="default-subscriptions"></a>
### Default subscriptions

In the {{< product-c8y-iot >}} platform, you can configure which applications and microservices are subscribed to a tenant on tenant creation. When you create a new tenant, the specified applications and microservices automatically get subscribed to it.

In addition, you can specify which applications and microservices are subscribed to a tenant when the system is upgraded. This list might differ from the default subscriptions on tenant creation. For example, certain default applications might have been unsubscribed from a tenant after creation and you may not want these applications to be subscribed to it again or you may want to subscribe different ones to it.

In the **Default subscriptions** page, you can configure two separate lists of applications. These will be subscribed by default to:

- Every new tenant on its creation.
- Every existing tenant on platform upgrade.

{{< c8y-admon-info >}}
These default lists can be overridden for particular subtenants by setting additional tenant options, for example via tenant policy. For details, see [Default subscriptions](#default-subscriptions) below or the [Tenant API](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Tenant-API) in the {{< openapi >}}.
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

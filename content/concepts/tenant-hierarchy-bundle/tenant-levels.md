---
weight: 30
title: Hierarchy levels
layout: redirect
---

The {{< product-name-1 >}} tenant concept builds a 3-level hierarchy, including the following levels from bottom to top:

* [{{< tenant-type-1 >}}](#standard-tenant)
* [{{< tenant-type-2 >}}](#enterprise-tenant)
* [{{< tenant-type-3 >}}](#management-tenant)


![3-level hierarchy](/images/concepts-guide/tenant-hierarchy.png)

These three levels differ in their scope, particularly with regards to administration, see below.

>**Info:** Refer to the [{{< product-name-1 >}} Pricing page](https://www.softwareag.cloud/site/pricing/cumulocity-iot.html#/) for details on our related commercial offering.
>
>Refer to your contract for details on your individual subscriptions.
>

<a name="standard-tenant"></a>
### {{< tenant-type-1 >}}

At the bottom of the hierarchy you can find single tenants which are represented by the concept of {{< tenant-type-1 >}}s in {{< product-name-1 >}}.

A {{< tenant-type-1 >}} offers most of the device management and monitoring functionality of the {{< product-name-1 >}} platform, but has certain limitations when it comes to administrative aspects.

In a {{< tenant-type-1 >}}, multiple parties are reflected by separate users. Since all users in a tenant share the same URL and data space they can only be separated from each other by assigning access rights based on the [roles concept](/concepts/security/#access-control), i.e. using roles you can give certain users only restricted visibility of the tenant (for example, only the devices that belong to them).

{{< tenant-type-1 >}}s, as direct subtenants of the {{< tenant-type-3 >}}, provide fully standardized functionality.

Details on the administration of {{< tenant-type-1 >}}s are described in the [Administration](/users-guide/administration/) section in the *User guide*.

<a name="enterprise-tenant"></a>
### {{< tenant-type-2 >}}

An {{< tenant-type-2 >}} offers additional administrative functionality compared to a {{< tenant-type-1 >}}, the major difference being **multi-tenancy**.

Using an {{< tenant-type-2 >}}, you can

* create and manage subtenants
* manage the subscribed applications/features of the subtenants
* invoice subtenants based on usage statistics

See also [multi-tenancy approach](/concepts/tenant-hierarchy/#multi-tenancy).

Moreover, an {{< tenant-type-2 >}} includes the following additional features:

* **Branding** -  To configure an individual look & feel
* **Domain name** - To provide an individual domain name
* **Support user** - To support users of other tenants
* **User hierarchy** - To reflect entities with limited permissions to subsets of shared data

{{< tenant-type-2 >}}s offer standardized functionality combined with some individual customization.

Details on the usage of this additional features and on the additional administration options of the {{< tenant-type-2 >}} can be found in the [{{< tenant-type-2 >}}](/users-guide/enterprise-edition/) section in the *User guide*.

<a name="management-tenant"></a>
### {{< tenant-type-3 >}}

The {{< tenant-type-3 >}} builds the highest level of the {{< product-name-1 >}} tenant hierarchy.

Every {{< product-name-1 >}} deployment is delivered with a {{< tenant-type-3 >}}. The {{< tenant-type-3 >}} is used to administer all tenants within the same deployment on platform level and thus provides full control of the platform.

On the {{< product-name-1 >}} cloud instances, the {{< tenant-type-3 >}} can only be accessed by the {{< company-cloud >}} operations team.

You will only have access to the {{< tenant-type-3 >}}, when you setup your own {{< product-name-1 >}} instance either as a dedicated/hosted cloud deployment, an on-premise deployment, or the {{< product-name-1 >}} Edge offering.

For detailed information on the configuration options of a {{< product-name-1 >}} deployment on platform level, refer to the *{{< product-name-1 >}} Core - Operations guide* available on the [{{< company-name-2 >}} {{< company-portal >}}]({{< documentation-link >}}).

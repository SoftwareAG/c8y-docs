---
weight: 30
title: Hierarchy levels
layout: redirect
---

The Cumulocity IoT tenant concept builds a 3-level hierarchy, including the following levels from bottom to top:

* [Standard tenant](#standard-tenant)
* [Enterprise tenant](#enterprise-tenant)
* [Management tenant](#management-tenant)

![3-level hierarchy](/images/concepts-guide/tenant-hierarchy.png)


### <a name="standard-tenant"></a> Standard tenant

At the bottom of the hierarchy you can find single tenants which are represented by the concept of Standard tenants in Cumulocity IoT.

A Standard tenant offers most of the device management and monitoring functionality of the Cumulocity IoT platform, but shows certain limitations when it comes to administrative aspects.

In a Standard tenant, multiple parties are reflected by separate users. Since all users in a tenant share the same URL and data space they can only be separated from each other by assigning access rights based on the [roles concept](/concepts/security/#access-control), i.e. using roles you can give certain users only restricted visibility of the tenant (for example, only the devices that belong to them).

Standard tenants, as direct subtenants of the management tenant, provide fully standardized functionality.

Details on the administration of Standard tenants are described in the [Administration](/users-guide/administration/) section in the *User guide*.

>**Info:** One use case example for a Standard tenant might be a single factory looking to build a solution to promote efficiency within their facility.

### <a name="enterprise-tenant"></a> Enterprise tenant

An Enterprise tenant offers additional administrative functionality compared to a Standard tenant, the major difference being **multi-tenancy**.

Using an Enterprise tenant, you can

* create and manage subtenants
* manage the subscribed applications/features of the subtenants
* invoice subtenants based on usage statistics

See also [multi-tenancy approach](/concepts/tenant-hierarchy/#multi-tenancy).

Moreover, an Enterprise tenant includes the following additional features:

* **Branding** -  To configure an individual look & feel
* **Domain name** - To provide an individual domain name
* **Support user** - To support users of other tenants
* **User hierarchy** - To reflect entities with limited permissions to subsets of shared data

Enterprise tenants offer standardized functionality combined with some individual customization. 

Details on the usage of this additional features and on the additional administration options of the Enterprise tenant can be found in the [Enterprise tenant](/users-guide/enterprise-edition/) section in the *User guide*. 

>**Info:** Enterprise tenants are best suited for more innovative, large scale IoT applications used by a single organization or by a single-branded IoT reseller. One example of this might be a company who has built a Smart City Lighting Solution and wants to sell their IoT solution to several customers.

### <a name="management-tenant"></a> Management tenant

The Management tenant builds the highest level of the Cumulocity IoT tenant hierarchy.

Every Cumulocity IoT deployment is delivered with a Management tenant. The Management tenant is used to administer all tenants within the same deployment on platform level.

On the Cumulocity IoT cloud instances, The Management tenant of the Cumulocity IoT cloud instances can only be accessed by Cumulocity.

You will only have access to the Management tenant, when you setup your own Cumulocity IoT instance either as a dedicated/hosted cloud deployment, an on-premise deployment, or the Cumulocity IoT Edge offering.

For detailed information on the configuration options of a Cumulocity IoT deployment on platform level, refer to the *Cumulocity IoT Core - Operations guide* available on the [Software AG Empower Portal](https://documentation.softwareag.com/).

>**Info:** An own Cumulocity IoT instance with access to the Management tenant is best suited for highly critical or complex IoT applications, possibly involving several rebranded solutions for resell. 


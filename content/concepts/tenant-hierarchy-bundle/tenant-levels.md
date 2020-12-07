---
weight: 30
title: Hierarchy levels
layout: redirect
---

The Cumulocity IoT tenant concept builds a 3-level hierarchy, including the following levels from bottom to top:

* [Standard tenant](#standard-tenant)
* [Enterprise tenant](#enterprise-tenant)
* [Management tenant](#management-tenant)

![3-level hierarchy](/images/concepts-guide/Hierarchy.png)


### <a name="standard-tenant"></a> Standard tenant

At the bottom you can find single tenants which are represented by the concept of standard tenants in Cumulocity IoT. 

A standard tenant offers most of the device management and monitoring functionality of the Cumulocity IoT platform, but shows certain limitations when it comes to administrative aspects. 

Users in a standard tenant share the same URL and the same data space. Multiple users are separated from each other by assigning access rights based on the roles concept, i.e. using roles you can give certain users only restricted visibility of the tenant (for example, only the devices that belong to them). 

A standard tenant can either be a direct subtenant of the [management tenant](#management-tenant) or a subtenant of an [enterprise tenant](enterprise-tenant).

>**Info:** Standard tenants, as direct subtenants of the management tenant, correspond to the Basic Package of the Cumulocity IoT offering. This package provides fully standardized functionality and is hosted on a public cloud and managed by Cumulocity. One example of a use case for a Basic Package might be a single factory looking to build a solution to promote efficiency within their facility.


### <a name="enterprise-tenant"></a> Enterprise tenant

An enterprise tenant offers additional administrative functionality compared to a standard tenant, the major difference being **multi-tenancy**. 

Using an enterprise tenant, you can
  
* create and manage subtenants
* manage the subscribed applications/features of the subtenants
* invoice subtenants based on usage statistics

See also [multi-tenancy approach](/concepts/tenant-concept/multi-tenancy). 

Moreover, the following additional features are provided:

* **Branding** -  To configure an individual look & feel 
* **Domain name** - To provide an own domain name
* **Support user** - To support users of other tenants
* **User hierarchy** - To reflect entities with limited permissions to subsets of shared data 
* **Data broker** - To securely share data between tenants

Details on the usage of the additional features and functionalities of the enterprise tenant can be found in the [Enterprise tenant](/users-guide/enterprise-edition/) section in the *User guide*.  

>**Info:** Enterprise tenants correspond to the Advanced Package of the Cumulocity IoT offering. This package offers standardized functionality with minimal customizations available via public cloud hosting. The Advanced Package is available on the same public cloud as other Basic (or Advanced) Package customers. This package is best suited for more innovative, large scale IoT applications used by a single organization or by a single-branded IoT reseller. One example of this might be a company who has built a Smart City Lighting Solution and wants to sell their IoT solution to several customers.


### <a name="management-tenant"></a> Management tenant

The management tenant builds the highest level of the Cumulocity IoT tenant hierarchy.

Every Cumulocity IoT deployment is delivered with a management tenant. The management tenant is used to administrate all tenants within the same deployment.

You will only have access to the management tenant, when you setup your own Cumulocity IoT instance either as a dedicated/hosted cloud deployment, an on-premise deployment, or the Cumulocity IoT Edge offering.

>**Info:** Management tenants correspond to the Enterprise Package of the Cumulocity IoT offering. This package is best suited for highly critical or complex IoT applications, possibly involving several rebranded solutions for resell. This package gives buyers fully-dedicated resources, either in a dedicated cloud environment or installed on-premises, making the deployment options highly flexible and completely within the organization’s control.

>* Enterprise Dedicated Cloud - An Enterprise Package with a dedicated/hosted cloud deployment means that Software AG will designate a cloud environment to be solely used by the customer purchasing the package. With this dedicated cloud environment, the customer can deploy both dedicated standard tenants or additional enterprise tenants. 
* Enterprise On-Premises - An on-premise deployment of the Enterprise Package is installed on the customer’s hardware at their desired location, giving them the ability to manage and coordinate software upgrades.

For detailed information on the configuration options of a Cumulocity IoT deployment, refer to the *Cumulocity IoT Core - Operations guide* available on the [Software AG Empower Portal](https://documentation.softwareag.com/). 


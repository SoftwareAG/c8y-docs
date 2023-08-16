---
weight: 40
title: Subscribing applications
layout: bundle
---

The application concept of {{< product-c8y-iot >}} includes a basic application marketplace.

Tenants can be subscribed to applications which have been deployed by their superior tenant ({{< management-tenant >}} or {{< enterprise-tenant >}}).

Granting access to subtenants and subscribing to applications is done in the Administration application, see [Enterprise tenant > Managing tenants > Applications](/users-guide/enterprise-tenant/#subscribe) in the *User guide*.

Tenants can also have their own applications which can also be subscribed to subtenants. See [Administration > Managing application > Custom applications](/users-guide/administration#custom-applications) in the *User guide* for details on adding custom applications.

### Service discovery

A tenant can have multiple available applications but to use an application's functionality a subscription to the application must be established for the tenant. As an example, when a custom decoder microservice is available in the tenant's marketplace, it is not enabled to be used until the tenant subscribes for the microservice application.

To see the list of subscribed applications for the tenant, the {{< product-c8y-iot >}} REST API can be used to get [specific tenant information](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Tenant-API). Those applications will be listed under the <code>applications</code> fragment.

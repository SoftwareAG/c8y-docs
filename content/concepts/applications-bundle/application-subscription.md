---
weight: 40
title: Application subscription
layout: bundle
---

The application concept of {{< product-c8y-iot >}} includes a basic application marketplace.

Tenants can be subscribed to applications which have been deployed by their superior tenant ({{< management-tenant >}} or {{< enterprise-tenant >}}).

[Granting access to subtenants](/standard-tenant/managing-permissions/#application-access) and [subscribing to applications](/enterprise-tenant/managing-tenants/#subscribing-applications) is done in the Administration application.

Tenants can also have their own applications which can also be subscribed to subtenants. See [Custom applications](/standard-tenant/ecosystem/#custom-applications) for details on how to add custom applications.

### Service discovery {#service-discovery}

A tenant can have multiple available applications but to use an application's functionality a subscription to the application must be established for the tenant. As an example, when a custom decoder microservice is available in the tenant's marketplace, it is not enabled to be used until the tenant subscribes for the microservice application.

To see the list of subscribed applications for the tenant, the {{< product-c8y-iot >}} REST API can be used to get [specific tenant information](https://{{< domain-c8y >}}/api/core/#tag/Tenant-API). Those applications will be listed under the <code>applications</code> fragment.

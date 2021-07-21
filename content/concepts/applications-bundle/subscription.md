---
weight: 40
title: Subscribing applications
layout: redirect
---

The application concept of {{< product-c8y-iot >}} includes a basic application marketplace.

Tenants can be subscribed to applications which have been deployed by their super tenant ({{< management-tenant >}} or {{< enterprise-tenant >}}).

Granting access to subtenants and subscribing to applications is done in the Administration application.

![Application Subscription](/images/concepts-guide/application-subscription.png)

Tenants can also have their own application marketplace, which can be viewed in the **Own Applications** page in the Administration application.

<img src="/images/users-guide/Administration/admin-applications-own.png" alt="Own applications" style="max-width: 100%">

Owned applications and granted applications can also be subscribed to the subtenants by the tenant.

For details refer to [Managing tenants](/users-guide/administration#tenants) in the User guide.

### Service Discovery

A tenant can have multiple available applications but to use an application's functionality a subscription to the application must be established for the tenant. As an example, when a custom decoder microservice is available in the tenant's marketplace, it is not enabled to be used until the tenant subscribes for the microservice application.

To see the list of subscribed applications for the tenant, {{< product-c8y-iot >}} Rest API can be used to get [specific tenant information](https://{{< domain-c8y >}}/api/#tag/Tenant-API). Those applications will be listed under the "applications" fragment.

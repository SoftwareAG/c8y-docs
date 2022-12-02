---
weight: 40
title: Subscribing web apps
layout: redirect
---

The web app concept of {{< product-c8y-iot >}} includes a basic web app marketplace.

Tenants can be subscribed to web apps which have been deployed by their superior tenant ({{< management-tenant >}} or {{< enterprise-tenant >}}).

Granting access to subtenants and subscribing to web apps is done in the Administration web app, see [Enterprise tenant > Managing tenants > web apps](/users-guide/enterprise-tenant/#subscribe) in the *User guide*.

Tenants can also have their own web apps which can also be subscribed to subtenants. See [Administration > Managing web app > Custom web apps](/users-guide/administration#custom-applications) in the *User guide* for details on adding custom web apps.

### Service discovery

A tenant can have multiple available web apps but to use a web app's functionality a subscription to the web app must be established for the tenant. As an example, when a custom decoder microservice is available in the tenant's marketplace, it is not enabled to be used until the tenant subscribes for the microservice web app.

To see the list of subscribed web apps for the tenant, the {{< product-c8y-iot >}} REST API can be used to get [specific tenant information](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenant-API). Those web apps will be listed under the <code>applications</code> fragment.

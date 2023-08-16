---
title: Managing the ecosystem
layout: bundle
bundle: ecosystem
section:
  - platform_administration
weight: 30
---

The {{< product-c8y-iot >}} platform distinguishes between applications and microservices, see also [Developing applications](/concepts/applications) in the *Concepts guide*.

* [Applications](#applications) -  all web applications either subscribed to the tenant or owned by the tenant.

* [Microservices](#managing-microservices) - server-side applications used to develop further functionality on top of {{< product-c8y-iot >}}.

Both can be accessed via the **Ecosystem** menu in the navigator.

Additionally, in {{< enterprise-tenant >}}s, it is possible to configure **Default subscriptions**, that means you can specify a list of applications that are subscribed by default to every new tenant on creation and/or to all existing tenants on platform upgrade. For details, see [Enterprise tenant > Default subscriptions](/users-guide/enterprise-tenant/#default-subscriptions).

{{< c8y-admon-req >}}
ROLES & PERMISSIONS:

* To view applications and microservices: READ permission for the "Application management" permission type
* To manage applications and microservices (create, update, copy, delete): ADMIN permission for the "Application management" permission type

On tenant creation there are default roles available that can be used as sample configuration for the above mentioned permissions:
* Tenant Manager - manages tenant-wide configurations like applications, tenant options and business rules.

Note that for complete application management some additional permission types with different permission levels might be required per feature, for example:
* [Default subscriptions](/users-guide/enterprise-tenant/#default-subscriptions) for the Enterprise tenant additionally requires READ and ADMIN permissions for the "Option management" permission type.
* [Managing subscriptions](/users-guide/enterprise-tenant/#applications) for the Enterprise tenant additionally requires READ and ADMIN permissions for the "Tenant management" permission type.

{{< /c8y-admon-req >}}


{{< c8y-admon-related >}}
- [Managing and monitoring microservices](#managing-microservices) for information on applications of the type microservice.
- [Managing permissions](#managing-permissions) for details on assigning roles and permissions for the usage of {{< product-c8y-iot >}} applications.
- [Changing application settings](/users-guide/administration/#default-app) for information on changing the application settings for your account.
- [Enterprise tenant > Managing tenants > Applications](/users-guide/enterprise-tenant/#applications) for information on application subscriptions on tenant level.
- [Cockpit > Widgets collection > Application](/users-guide/cockpit/#applications) for information on the "Application" widget.
- [Developing applications](/concepts/applications) in the *Concepts guide* for an overview on the basic concepts of applications in {{< product-c8y-iot >}}.
- The [Web SDK guide](/web/overview) for information on how to develop web applications on top of {{< product-c8y-iot >}} and how to [customize](/web/application-configuration) or [extend](/web/tutorials/#extend-an-existing-application) existing applications using the Web SDK.
- [Applications](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Applications) in the {{< openapi >}} for managing applications via REST.
{{< /c8y-admon-related >}}

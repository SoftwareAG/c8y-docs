---
weight: 50
title: Support user access
layout: redirect
aliases:
  - /users-guide/enterprise-edition#users-in-other-tenants
---

The support user access feature enables {{< product-c8y-iot >}} platform providers ({{< company-sag >}} in case of the public cloud instances, or service providers in case of individual on-prem installations) to support their customers by accessing their users using a support user. A support user is a user in the {{< management-tenant >}} that has specific permissions, that is, to access subtenant users in case of any issues.

To use this feature, support user access must be configured and the required support users must be created in the {{< management-tenant >}}, see [Administration > Platform configuration settings > Support user](/users-guide/administration/#config-support-users).

{{< c8y-admon-info >}}
On the {{< product-c8y-iot >}} public cloud instances, the support user functionality can only be used by the [{{< sag-support >}}](/welcome/contacting-support/) team for providing customer support. It is not available for {{< enterprise-tenant >}} customers to support their customers/subtenants.
{{< /c8y-admon-info >}}

<a name="configuring-support-access"></a>
### Configuring support user access

Support user access can either be

* activated for all subtenants by default,
* deactivated for all subtenants, but explicitly be enabled by a user for their tenant.

This is configured globally in the *{{< management-tenant >}}*, see [Administration > Platform configuration settings > Support user](/users-guide/administration/#config-support-users).


If activated globally, the support user can log in to all allowed subtenants as any user without restriction.

If deactivated globally, support user access can still be enabled by a subtenant user if required. This is done by clicking **Enable support** in the **User** menu, see [Getting started > User options and settings](/users-guide/getting-started/#user-settings). The support access is not restricted to the user who activated it but applies to all users of the tenant. This is necessary for retracing of role/right issues.

After a user has activated support access, the menu item changes to **Disable support**, so that the user can disable a pending support request which has been resolved actively before it expires.

{{< c8y-admon-info >}}
If you don't see either the **Enable support** or **Disable support** button in the **User** menu, support user access has been activated globally. Contact [product support](/welcome/contacting-support/) for more details.
{{< /c8y-admon-info >}}

{{< c8y-admon-info >}}
If a user with tenant management admin permissions disables the support request, *all* support requests for the tenant will be disabled.
{{< /c8y-admon-info >}}

The duration of the active support request can be globally configured in the {{< management-tenant >}} (default is 24 hours), see [Administration > Platform configuration settings](/users-guide/administration/#platform-configuration-settings).

Each new support request will prolong the support duration for the specified number of hours. After the last support request in a subtenant has expired or has been actively disabled by the user, the support user access for the subtenant will immediately be disabled (if not activated globally).

Details on the status of support requests and support user access for a tenant can be found in the **Properties** tab of the tenant, see [Managing tenants](/users-guide/enterprise-tenant#managing-tenants).

### To log in as support user

To log in as support user from the {{< management-tenant >}}, you must provide the following information in the Login screen:

* Tenant ID:  The ID of the tenant of the user to be supported. The tenant ID is shown in the user dropdown menu in the UI. In some environments, especially in test environments, you can open the destination tenant´s URL (for example *testtenant.{{< domain-c8y >}}*) and log into the tenant without the tenant ID.
* Support user: The username of the {{< management-tenant >}} user that executes the support.
* User: The username of the user to be supported.

"Support user" and "user" are entered into the **Username** field in the following notation:

&#60;support user>&#36;&#60;user>

**Example**

Suppose you get a support call from a user "John" in the tenant *testtenant.{{< domain-c8y >}}* (which has the tenant ID *t07007007*). Your username in the {{< management-tenant >}} is "Jill" and you are permitted to carry out support for *testtenant.{{< domain-c8y >}}*. In this case, you can log in with the following credentials to reproduce what John is seeing:

![Support user access login](/images/users-guide/enterprise-tenant/et-support-user-access.png)

Alternatively, enter "&#60;support user>&#36;" into the **Username** field to access the tenant with one of the administrative users.

Audit logs are created for each support user access and for the actions that support users perform. In the column "Who?" the author's name will be shown in the form of "support_user$user".

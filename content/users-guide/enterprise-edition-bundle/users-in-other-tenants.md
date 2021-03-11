---
weight: 50
title: Support user access
layout: redirect
---

This feature, enables Software AG or Service Provider to support their Customers using support user. Support users are users with specific permissions in the *Management tenant* who can access subtenant users in case of any issues.

To do so, support user access must be configured and required support users must be created on *Management tenant*

> **Note:** For *Enterprise Tenant Customers* on cumulocity.com and other Public Cloud offering, **support user** is only used by *Software AG Global Support team* for providing customer support. It cannot be used by the Customer to support their customers/subtenants.

### <a name="configuring-support-access"></a>Configuring support user access

Support user access can either be activated for all subtenants by default or deactivated for all subtenants, but can be explicitly enabled by a user for their tenant. This is configured in the system wide *Configuration* in *Management tenant* . see [Administration > Changing Settings > Configuration settings](/users-guide/administration/#config-platform).

If it’s activated system wide, support user can login in as any user into all allowed subtenants freely without any restriction.

> **Info:** If you don’t see either **Enable support** or **Disable support** button in the User menu, means it has been activated on System wide. Contact support for more details

If it’s deactivated system wide, it still can be enabled by a subtenant user when needed. This is done by clicking **Enable support** in the **User** menu, see [Getting started > User options and settings](/users-guide/getting-started/#user-settings). The support access is not restricted to the user who activated it but applies to all users of the subtenant. This is necessary for retracing of role/right issues.

After a user has activated support access, the menu item changes to **Disable support**, so that the user can disable a pending support request which has been resolved actively before it expires.

> **Info:** If a user with tenant management admin permissions disables the support request, *all* support requests for the tenant will be disabled.

The duration of the active support request is configurable on System wide on *Management tenant* (default is 24 hours), see [Getting started > User options and settings](/users-guide/getting-started/#user-settings).

Each new support request will prolong the support duration for the specified number of hours. After the last support request in a subtenant has expired or has been actively disabled by the user, the support user access for the subtenant will immediately be disabled (if not enabled globally).

Details on the status of support requests and support user access for a tenant can be found in the **Properties** tab of the tenant, see [Managing tenants](/users-guide/enterprise-edition#managing-tenants).

### <a name="configuring-support-users"></a>Configuring support users

A **support user** is a user with specific permissions on *Management tenant*. These users can login in to the target tenant and imporsonate target user.

Below are the steps to create a **support user** in the *Management tenant*
1. Software AG or Service providers creates a user in the *Management tenant*
2. The user get assigned proper Roles as bescribed below
    1. Using a global role. This can easily be done by
        - Creating a Role called “Support” with “Support Read” and “Support Admin” permission
        - Assign the Role “Support” and remove any other Roles for the user.
    2. Using inventory role. Using this, you can selectively assign a **support user** for specific subtenants. This can be done in 3 steps
        - Create a Inventory Role called “Support” for Type: * and Permission: All
        - Create a group of the all the subtenants that you want the user to support.
        - Assign the “Support” inventory role to above group as described in [Administration > Managing permissions > Assigning inventory roles to users](/users-guide/administration#attach-inventory).

> **Info:** The support user feature does not work when the support user has two-factor authentication enabled, but no phone number is provided. The phone number has to be provided first, in order to login as a support user.


### To log in as support user

To log in as support user from the management tenant, you must provide the following information in the Login screen:

* Tenant ID:  The ID of the tenant of the user to be supported. The tenant ID is shown in the user dropdown menu in the UI. In some environments, especially in test environments, you can open the destination tenant´s URL (e.g. *testtenant.cumulocity.com*) and log into the tenant without the tenant ID.
* Support user: The username of the management tenant user that executes the support.
* User: The username of the user to be supported.

"Support user" and "user" are entered into the **Username** field in the following notation:

&#60;support user>&#36;&#60;user>

**Example**

Suppose you get a support call from a user "John" in the tenant *testtenant.cumulocity.com* (which has the tenant ID *t07007007*). Your username in the management tenant is "Jill" and you are permitted to carry out support for *testtenant.cumulocity.com*. In this case, you can log in with the following credentials to reproduce what John is seeing:

![Support user access login](/images/users-guide/enterprise-tenant/et-support-user-access.png)

Alternatively, enter "&#60;support user>&#36;" into the **Username** field to access the tenant with one of the administrative users.

Audit logs are created for each support user access and for the actions that support users perform. In the column "Who?" the author's name will be shown in the form of "support_user$user".

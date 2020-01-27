---
weight: 50
title: Support user access
layout: redirect
slug: support-user-access
---

With the support user access feature, support users, i.e. users of the management tenant with specific permissions, can log into accounts of other subtenant's users to provide help in case of any issues.

To do so, support user access must be enabled. This can globally be done on platform level or on user level as described below. 


### <a name="configuring-support-access"></a>Configuring support user access

Support user access may be enabled on different levels.

**Platform level**

The management tenant can enable support user access for all subtenants on platform level. This is done in the **Configuration** page, see [Customizing the platform](/users-guide/enterprise-edition#configuration). 

If support user access is enabled, support users can log into any subtenant as any user, unless overridden on subtenant level. Subtenant users cannot disable access themselves. If support user access is disabled support users can log in only to subtenants for which at least one user has explicitly enabled such access, as described next.

**Subtenant/user level** 

If support user access is disabled on platform level, it may still be enabled by a subtenant user. This is done by clicking **Enable support** in the **User** menu, see [Getting started > User options and settings](/users-guide/getting-started/#user-settings). 

The support access is then not restricted to the user who activated it but applies to all users of the subtenant. This is necessary for retracing of role/right issues.

After a user has activated support access, the menu item changes to **Disable support**, so that the user can disable a pending support request which has been resolved actively before it expires.

> **Info:** If a user with tenant management admin permissions disables the support request, *all* support requests for the tenant will be disabled.

The duration of the active support request is configurable on platform level (default is 24 hours), see [Customizing the platform](/users-guide/enterprise-edition#configuration).

Each new support request will prolong the support duration for the specified number of hours. After the last support request in a subtenant has expired or has been actively disabled by the user, the support user access for the subtenant will immediately be disabled (if not enabled globally). 

Details on the status of support requests and support user access for a tenant can be found in the **Properties** tab of the tenant, see [Managing tenants](/users-guide/enterprise-edition#managing-tenants).

### Configuring support users

There are two alternative setups for support users in Cumulocity: 

- A service provider configures specific permissions for management tenant users which enable them to provide support.
- Tenant users request support and by this provide the permission to management tenant users to login.

> **Info:** The support user feature does not work when the support user has two-factor authentication enabled, but no phone number is provided. The phone number has to be provided first, in order to login as a support user.

**Management tenant permission**

To enable a management tenant user to support users in other tenants, you need to provide the user with either the "Support" global role or the "Support" inventory role (both READ and CHANGE).

Using the "Support" inventory role, you can selectively assign support to particular users. Create a group of the tenants that you want the user to support, then assign the inventory role to the user and the group as described in [Administration > Managing permissions > Assigning inventory roles to users](/users-guide/administration#attach-inventory).

**User-provided permission**

Users can allow support, i.e. a management tenant user logging in as them. To do so, click the **User** button at the right of the top bar and from the context menu select **Enable support access**. For details, refer to [Getting started > User options and settings](/users-guide/getting-started/#user-settings).


### To log in as support user

To log in as support user from the management tenant, use a login of the form:

	<tenant id>/<support user>$<user>


* `tenant id` is the tenant ID of the user to be supported. The tenant ID is shown in the user dropdown menu in the UI.
* `support user` is the username of the management tenant user that executes the support. 
* `user` is the username of the supported user.

**Example**

Suppose you get a support call from a user "John" in the tenant *testtenant.cumulocity.com* (which has the ID *t07007007*). The user cannot run certain functionality, and you suspect that it is a permission issue. Your username in the management tenant is "Jill" and you are permitted to carry out support for *testtenant.cumulocity.com*. In this case, you can log in with the following command to reproduce what John is seeing:

	<t07007007>/Jill$John


In some environments, especially in test environments, you can simply open the destination tenants URL (e.g. *testtenant.cumulocity.com*) and log into the tenant using 

	<support user>$<user>

Alternatively, use

```
<support user>$
```

to access the tenant with one of the administrative users.

Audit logs are created for each support user access and for the actions that support users perform. In the column "Who?" the author's name will be shown in the form of "support_user$user".
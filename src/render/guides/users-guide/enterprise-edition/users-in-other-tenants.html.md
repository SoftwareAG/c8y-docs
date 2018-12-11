---
order: 21
title: Supporting users in other tenants
layout: redirect
---

With the support user feature support users, i.e. users of the management tenant, can log into accounts of other tenant's users to provide help in case of any issues.

To so so, support user access must be enabled on platform level, subtenant level  or user level, see [Configuring support user access](#configuring-support-access) below. 

As an example, suppose you get a support call from a user "john" in the tenant `acme.cumulocity.com`. The user cannot run certain functionality, and you suspect that it is a permission issue. Your username in the management tenant is "jill" and you are permitted to carry out support for `acme.cumulocity.com`. In this case, you can log in to `acme.cumulocity.com` using the username "jill&#36;john" and your password for "jill". Now you can reproduce what "john" is seeing. 

### <a name="configuring-support-access"></a>Configuring support user access



### Configuring support users

There are two alternative setups for support users in Cumulocity: 

- A service provider configures specific permissions for management tenant users which enable them to provide support.
- Tenant users request support and by this provide the permission to management tenant users to login.

> **Info:** The support user feature does not work when the support user has two-factor authentication enabled, but no phone number is provided. The phone number has to be provided first, in order to login as a support user.

**Management tenant permission**

To enable a management tenant user to support users in other tenants, you need to provide the user with either the "Support" global permission or the "Support" inventory role (both "Read" and "Change").

Using the "Support" inventory role, you can selectively assign support to particular users. Create a group of the tenants that you want the user to support, then assign the inventory role to the user and the group as described in [Assigning inventory roles to users](/guides/users-guide/administration#attach-inventory).

**User-provided permission**

Users can allow support, i.e. a management tenant user logging in as them. To do so, click the **User** button at the right of the top bar and from the context menu select **Enable support**. Click **Ok** to confirm. Support will be active for 24 hours. 

![Enable support](/guides/images/users-guide/enablesupport.png)

### Logging in as support user

To log in as support user, use the following username:

	<support user>$<user>

"support user" is the user in the management tenant that executes the support. "user" is the supported user.

Alternatively, use

	<support user>$

In this case, the support user will access the tenant with one of the administrative users.

> **Important:** In many environments, access to the management tenant is specifically restricted to certain networks or hosts, or can only be used through a tunnel. When logging in using the support user functionality, you need to make sure to have access to the management tenant. If you use a tunnel to access the management tenant, you may need to use a login of the form `<tenant>/<support user>$<user>`.

Audit logs are created for each support user access and for the actions that support users perform. In the column "Who?" the author's name will be shown in form of:

	"support_user$user"
	
	
### Example

As an example, suppose you get a support call from a user "john" in the tenant `acme.cumulocity.com`. The user cannot run certain functionality, and you suspect that it is a permission issue. Your username in the management tenant is "jill" and you are permitted to carry out support for `acme.cumulocity.com`. In this case, you can log in to `acme.cumulocity.com` using the username "jill&#36;john" and your password for "jill". Now you can reproduce what "john" is seeing. 
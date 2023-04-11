---
title: Configuring support users
weight: 30
layout: bundle
section:
  - platform_administration
---


In the **Support user** section you can configure the parameters for the support user access for subtenant users.

This feature enables {{< product-c8y-iot >}} platform providers ({{< company-sag >}} in case of the public cloud instances or service providers with on-prem installations) to support their customers by accessing their users using a support user. A support user is a user in the {{< management-tenant >}} that has specific permissions, that is, to access subtenant users in case of any issues. Refer to [Enterprise tenant > Support user access](/users-guide/enterprise-tenant/#support-user-access) for more information.

In the field **Activate support user**, specify if support user access is activated for subtenant users. Possible values you can enter here are:

* *true* - support user access is activated for all subtenants by default. A support user can log into any subtenant as any user. Note that subtenant users cannot disable access themselves.
* *false* - support user access is deactivated for all subtenants, but can be explicitly enabled for a subtenant. A support user can log in only to subtenants for which at least one user has explicitly enabled such access.
* An explicit date in date-time format, until when support user access should remain activated. If no date is specified the value is set to "No limit".

In the **Validity limit** field, you can optionally specify the support duration, that means, for how many hours support user access will be prolonged after each support user request from a subtenant user. Enter a number specifying the number of hours. The default value is 24 hours.

The expiry date-time will be updated based on the duration specified in the **Validity limit** field, for example, if the current expiry date-time is 01/09/2018 15:00 and duration has been kept at 24 hours, the enabling support user will update the expiry date to 01/10/2018 15:00.

Details on the status of support requests and support user access for a tenant can be found in the **Properties** tab of the tenant, see [{{< enterprise-tenant >}} > Managing tenants](/users-guide/enterprise-tenant/#managing-tenants).

<a name="configuring-support-users"></a>
### To configure a support user

A support user is a user in the {{< management-tenant >}} with specific permissions. This user can log in to the target tenant and impersonate the target user.

To configure a user in the {{< management-tenant >}} as support user, you must assign the relevant roles to the user. This can either be done by using a global role or by inventory roles.  

**Using a global role**

1. Create a role "Support" with "Support READ" and "Support ADMIN" permission.
2. Assign the role "Support" to the respective user and remove all other roles for the user.

**Using inventory roles**

Using inventory roles, you can selectively assign a support user for specific subtenants.

1. Create an inventory role called "Support" with type = "*" and permission = "All".
2. Create a group of all subtenants which you want to be supported by the user.
3. Assign the "Support" inventory role to above group as described in [Administration > Managing permissions > Assigning inventory roles to users](/users-guide/administration#attach-inventory).

{{< c8y-admon-info >}}
The support user feature does not work when the support user has two-factor authentication enabled, but no phone number is provided. The phone number must be provided first, in order to login as a support user.
{{< /c8y-admon-info >}}

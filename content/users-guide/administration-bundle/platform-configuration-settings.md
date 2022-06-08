---
weight: 80
title: Platform configuration settings
layout: redirect
---

<a name="config-platform"></a>

From the {{< management-tenant >}}, you can configure properties which apply globally to the whole {{< product-c8y-iot >}} deployment.

Click **Configuration** in the **Settings** menu, to access the **Configuration** page.

![Configuration settings](/images/users-guide/Administration/admin-settings-configuration.png)

Most of the settings you can configure here are also available in the {{< enterprise-tenant >}}. For details, refer to [{{< enterprise-tenant >}} > Customizing your platform](/users-guide/enterprise-tenant/#customization).

In addition, the following settings can be configured in the {{< management-tenant >}} only.

### Passwords

In the **Passwords** section, you can specify password settings like default strength, length or validity for the users in your tenant.

![Passwords settings](/images/users-guide/enterprise-tenant/et-settings-configuration-passwords.png)

Select the checkbox **Enforce "green" passwords for all users** to enforce the users in your tenant to use passwords that meet the conditions for "green" passwords, see also [Getting started > User options and settings](/users-guide/getting-started/#user-settings).

* **Password validity limit (days)** - The number of days a password may be valid before it must be reset; minimum value is  "0", maximum value is "999999". Leave empty to use the value from the tenant options configured in the {{< management-tenant >}}, see *{{< product-c8y-iot >}} Core - Operations guide*.
* **Password history size** - The number of times before the current password can be reused.  Minimum value is "0", preset value is "10".  
* **Minimum length of "green" password** - The minimum number of characters which are required for a safe password. Minimum (and preset) value is "8", maximum value is "32".  Leave empty to skip this constraint.


<a name="config-support-users"></a>
### Support user

In the **Support user** section you can configure the parameters for the support user access for subtenant users.

This feature enables {{< product-c8y-iot >}} platform providers ({{< company-sag >}} in case of the public cloud instances or service providers with on-prem installations) to support their customers by accessing their users using a support user. A support user is a user in the {{< management-tenant >}} that has specific permissions, that is, to access subtenant users in case of any issues. Refer to [Support user access](/users-guide/enterprise-tenant/#support-user-access) for more information.

<img src="/images/users-guide/enterprise-tenant/et-settings-configuration-support-user.png" alt="Support user configuration">

In the field **Activate support user**, specify if support user access is activated for subtenant users. Possible values you can enter here are:

* *true*: Support user access is activated for all subtenants by default. A support user can log into any subtenant as any user. Note that subtenant users cannot disable access themselves.
* *false*: Support user access is deactivated for all subtenants, but can be explicitly enabled for a subtenant. A support user can log in only to subtenants for which at least one user has explicitly enabled such access.
* An explicit date in date-time format, until when support user access should remain activated. If no date is specified the value is set to "No limit".

In the **Validity limit** field, you can optionally specify the support duration, that means, for how many hours support user access will be prolonged after each support user request from a subtenant user. Enter a number specifying the number of hours. The default value is 24 hours.

The expiry date-time will be updated based on the duration specified in the **Validity limit** field, for example, if the current expiry date-time is 01/09/2018 15:00 and duration has been kept at 24 hours, the enabling support user will update the expiry date to 01/10/2018 15:00.

Details on the status of support requests and support user access for a tenant can be found in the **Properties** tab of the tenant, see [{{< enterprise-tenant >}} > Managing tenants](/users-guide/enterprise-tenant/#managing-tenants).

<a name="configuring-support-users"></a>
#### Configuring a support user

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

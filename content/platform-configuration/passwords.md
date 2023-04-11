---
title: Configuring passwords
weight: 20
layout: bundle
section:
  - platform_administration
---

In the **Passwords** section, you can specify password settings like default strength, length or validity for the users in your tenant.

Select the checkbox **Enforce "green" passwords for all users** to enforce the users in your tenant to use passwords that meet the conditions for "green" passwords, see also [Getting started > User options and settings](/users-guide/getting-started/#user-settings).

* **Password validity limit (days)** - the number of days a password may be valid before it must be reset; minimum value is  "0", maximum value is "999999". Leave empty to use the value from the tenant options configured in the {{< management-tenant >}}, see *{{< product-c8y-iot >}} Core - Operations guide*.
* **Password history size** - the number of times before the current password can be reused.  Minimum value is "0", preset value is "10".  
* **Minimum length of "green" password** - the minimum number of characters which are required for a safe password. Minimum (and preset) value is "8", maximum value is "32".  Leave empty to skip this constraint.

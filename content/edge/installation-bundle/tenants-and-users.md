---
weight: 45
title: Tenants and users
layout: redirect
---

After completing the post-installation process, Cumulocity IoT Edge creates the following tenants:

* **edge** tenant
* **management** tenant

### edge tenant

The **edge** tenant is the default tenant and has two users accounts:

* Tenant admin user - This is the user that you specify during the post-installation process. The tenant admin user account is used for accessing Cumulocity IoT Edge platform.
* sysadmin user - The **sysadmin** user account is used for unlocking the tenant admin user.

### management tenant

The management tenant is used to enable other tenants, create sub tenants, and delete tenants and so on. For more information about management tenant, see [Managing tenants](/users-guide/enterprise-edition/).

The **management** tenant has the following users:

* **admin** user - The default administrative user for each tenant. 
* **sysadmin** user - The default support user for each tenant. For example, unlocking the tenant admin user.
* **edgeadmin** user - The **edgeadmin** user is created during the post-installation process for managing the settings in the management tenant. For example, configuring email settings. The password for **edgeadmin** user is the same password as the tenant admin user that is set during the post-installation process.



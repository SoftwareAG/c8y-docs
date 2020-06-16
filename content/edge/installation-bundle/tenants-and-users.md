---
weight: 45
title: Tenants and users
layout: redirect
---

The following table lists the tenants and users available in Cumulocity IoT Edge:

|<div style="width:150px">Tenant</div>|<div style="width:150px">Users</div>|Description|
|:---|:---|:---|
|edge|Tenant admin user|The **edge** tenant is the default tenant.<br>The tenant admin user is created during the post-installation process.|
|management|edgeadmin|The management tenant is used to enable other tenants, create subtenants, delete tenants and so on. For more information about the management tenant, see [Enterprise Tenant > Managing tenants](/users-guide/enterprise-edition/) in the User guide.<br><br>If you have to log in as **edgeadmin** user, log in to the management tenant using the URL *https://&#60;Edge&#95;VM&#95;IP&#95;Address>/apps/administration/index.html*.<br><br> - Tenant: management<br>- Username: edgeadmin<br>- Password: Will be the same as the Edge tenant admin password provided during the post-installation process<br><br>**Info:** You cannot access the Cockpit and Device Management application as **edgeadmin** user.|
|management|sysadmin|The default support user for each tenant. For example, the **sysadmin** user account is used for branding and unlocking the tenant admin user.|

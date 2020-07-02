---
weight: 45
title: Tenants and users
layout: redirect
---

The following table lists the tenants and users available in Cumulocity IoT Edge:

|<div style="width:100px">Tenant</div>|<div style="width:100px">User</div>|<div style="width:150px">Credentials</div>|Description
|:---|:---|:---|:---
|edge|Tenant admin user|Username: The username provided during the post-installation process.<br>Password: The password provided during the post-installation process.<br>|The **edge** tenant is the default tenant. The tenant admin user is created during the post-installation process.<br><br>
|management|sysadmin|Username: sysadmin<br>Password: sysadmin-pass|The management tenant is used to configure branding, user management and other platform settings. For information about managing the **edge** tenant, see [Enterprise Tenant > Managing tenants](/users-guide/enterprise-edition/) in the User guide.<br><br>The sysadmin user account in the management tenant is used for branding and unlocking the tenant admin user.
|management|edgeadmin|If you have to log in as **edgeadmin** user, log in to the management tenant using the URL *https://&#60;Edge&#95;VM&#95;IP&#95;Address>/apps/administration/index.html*.<br><br> - Tenant: management<br>- Username: edgeadmin<br>- Password: Will be the same as the Edge tenant admin password provided during the post-installation process|The edgeadmin user account in the management tenant is used for configuring password policies, email server and template configurations.<br><br>**Info:** You cannot access the Cockpit and Device Management application as **edgeadmin** user.

>**Important:** Creating tenants in Cumulocity IoT Edge is not supported.


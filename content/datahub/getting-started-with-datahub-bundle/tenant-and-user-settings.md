---
weight: 30
title: Tenant and user settings
layout: redirect
---

The DataHub Console you have access to is tenant-specific, i.e., this instance solely serves your tenant. When you access the DataHub Console, this instance is already pre-configured with respect to the connections to Dremio and to the data lake.
For DataHub Console and for Dremio you have a specific account. Both accounts have the same username and password.

### Changing the password
While the username is fixed and cannot be changed, you can change the password for your DataHub Console and your Dremio account. For that purpose you have to navigate to the **User** page. Enter a new password and confirm the new password. Click **Change Password** to change the password to the new one. The next time you log into DataHub Console or Dremio, you have to use the new password.

> **Info:** Changing a password does not affect your offloading pipelines, neither their runtime status nor their configurations. It also does not change your configurations in Dremio.

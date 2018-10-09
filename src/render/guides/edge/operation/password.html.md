---
order: 70
title: Managing the admin tenant
layout: redirect
---

### Resetting the tenant password

The tenant admin password can be reset using the following command, executed as “admin”:

	# cd /opt/c8y/utilities
	# sudo ./reset_tenant_password.sh 

This will prompt for a new password. Enter a new tenant admin password:

	<enter new password>
	
Once the password is reset successfully, the new password must be used for the tenant admin user.

### Unlocking the tenant admin user

The tenant admin user could be locked if incorrect credentials are passed during login into UI, REST API or MQTT. 

<img src="/guides/images/edge/edge-tenant-lock.jpg" name="Locked user" style="width:50%;"/>

To unlock the tenant admin user, perform the following steps:

1. Login as sysadmin user (password= sysadmin-pass).
1. In the Administration application, navigate to the **Users** page and open the tenant admin user.
1. Activate the user account by switching the toggle next to the username to **Enabled** and save your settings.





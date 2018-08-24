---
order: 70
title: Reset tenant password
layout: redirect
---

The tenant admin password can be reset using the following command, executed as “admin”:

	# cd /opt/c8y/utilities
	# sudo ./reset_tenant_password.sh 

This will prompt for a new password. Enter a new tenant admin password:

	<enter new password>
	
Once the password is reset successfully, the new password must be used for the tenant admin user.

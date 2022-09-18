---
weight: 86
title: Security configuration
layout: redirect
---

The Red Hat Enterprise Linux based {{< product-c8y-iot >}} Edge provides security configuration options to harden the security of your Edge appliance. You can edit the security configuration for your Edge appliance as per your requirements. For example, operating system configuration for audit logs, SSH connectivity, and Kubernetes configuration for audit policy.

### Configuring operating system configuration

In the operating system configuration, configure the SSH connectivity and the idle duration before a user session is terminated, configure the remote logging server and audit logging server, and the login banner.

1. Log in to the {{< management-tenant >}} using the Edge administrator credentials created during the installation.

   - Username: management/<*Edge admin username*>
   - Password: password provided during the installation
2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.
3. Click **Edge** > **Security** in the navigator.
4. 
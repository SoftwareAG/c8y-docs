---
weight: 86
title: Security configuration
layout: redirect
---

The Red Hat Enterprise Linux based {{< product-c8y-iot >}} Edge provides security configuration options to harden the security of your Edge appliance. You can edit the security configuration for your Edge appliance as per your requirements. For example, Security-Enhanced Linux (SELinux) mode, configuration for audit logs, SSH connectivity, and Kubernetes configuration for audit policy.

### Configuring the operating system

In the operating system configuration, configure the SSH connectivity and the idle duration before a user session is terminated, configure the remote logging server and audit logging server, and the login banner.

1. Log in to the {{< management-tenant >}} using the Edge administrator credentials created during the installation.

   - Username: management/<*Edge admin username*>
   - Password: password provided during the installation
   
2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge** > **Security** in the navigator.

4. Click **Edit configuration**. 

   You can either import a JSON file to prefill the values or enter the values manually.  

5. Select the **SELinux mode** to *permissive* or *enforcing*.

   - **permissive** - In the permissive mode, the system acts as if SELinux is enforcing the loaded security policy, including labeling objects and emitting access denial entries in the logs.
   - **enforcing** - In enforcing mode SELinux operates normally, enforcing the loaded security policy on the entire system.

6. **SSH enabled** - Use the toggle button to enable or disable the SSH functionality of the Edge appliance.

7. **Login sessions inactivity timeout (seconds)** - Specify the idle duration before a user session is terminated.

8. **Rsyslog remote logging server** - Specify the remote logging server to transfer the local logs to the remote logging server.

   - **Server** - Specify the IP address or the hostname of the destination server.
   - **Port** - Specify the port on the destination server.
   - **Protocol** - Specify the protocol (TCP or UDP) used to transfer the logs.

9. **Audisp remote logging server** - Specify the remote logging server to transfer the audit logs to the remote logging server.

   - **Server** - Specify the IP address or the hostname of the destination server.
   - **Port** - Specify the port on the destination server.

10. **Login banner** - Specify the login banner for your Edge appliance.

11. Click **Save**.

### Configuring the Kubernetes audit policy

1. Log in to the {{< management-tenant >}} using the Edge administrator credentials created during the installation.

   - Username: management/<*Edge admin username*>
   - Password: password provided during the installation

2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge** > **Security** in the navigator.

4. Click **Edit configuration** > **Kubernetes**.

   You can either import a JSON file to prefill the values or enter the values manually. 

5. **Audit policy** - Specify the rules for the Kubernetes log entries. 

   - **Level** - Specify the audit level of the event.
     - None - do not log events.
     - **Metadata** - log request metadata (requesting user, timestamp, resource, verb, etc.) but not request or response body.
     - **Request** - log event metadata and request body but not response body. This does not apply for non-resource requests.
     - **RequestResponse** - log event metadata, request and response bodies. This does not apply for non-resource requests.
   - **Maximum age (days)** - Specify the maximum number of days to retain old audit log files.
   - **Maximum numbers of log files to retain** - Specify the maximum number of audit log files to retain.
   - **Maximum size (megabytes)** - Specify the maximum size in megabytes of the audit log file.

6. Click **Save**.
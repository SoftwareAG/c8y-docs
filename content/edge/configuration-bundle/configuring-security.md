---
weight: 86
title: Security configuration
layout: redirect
---

{{< product-c8y-iot >}} Edge provides security configuration options to harden the security of your Edge appliance as per your requirements. For example, Security-Enhanced Linux (SELinux) mode, configuration for audit logs, SSH connectivity, and Kubernetes configuration for audit policy.

### Configuring the operating system

In the operating system configuration, configure the SSH connectivity and the idle duration before a user session is terminated, configure the remote logging server and audit logging server, and the login banner.

1. Log in to the {{< management-tenant >}} using the Edge administrator credentials created during the installation.

   - Username: management/<*Edge admin username*>
   - Password: password provided during the installation
   
2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge** > **Security** in the navigator.

4. Click **Edit configuration**. 

   You can either import a JSON file to prefill the values or enter the values manually.  

5. Specify the following parameters:
	|<div style="width:230px">Parameter</div>|Description
	|:---|:---
	|**SELinux mode**|**permissive**: In the permissive mode, the system acts as if SELinux is enforcing the loaded security policy, including labeling objects and emitting access denial entries in the logs.<br><br>**enforcing**: In enforcing mode SELinux operates normally, enforcing the loaded security policy on the entire system.
	|**SSH enabled**|Use the toggle button to enable or disable the SSH functionality of the Edge appliance.
	|**Login sessions inactivity timeout (seconds)**|The idle duration before a user session is terminated.
	|**Rsyslog remote logging server**|The remote logging server to transfer the local logs to the remote logging server.<br><br>**Server** - The IP address or the hostname of the destination server.<br> **Port** - The port on the destination server.<br>**Protocol** - The protocol (TCP or UDP) used to transfer the logs.
	|**Audisp remote logging server**|The remote logging server to transfer the audit logs to the remote logging server.<br><br>**Server** - The IP address or the hostname of the destination server.<br>**Port** - The port on the destination server.
	|**Login banner**|The login banner for your Edge appliance.
6. Click **Save**.

### Configuring the Kubernetes audit policy

1. Log in to the {{< management-tenant >}} using the Edge administrator credentials created during the installation.

   - Username: management/<*Edge admin username*>
   - Password: password provided during the installation

2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge** > **Security** in the navigator.

4. Click **Edit configuration** > **Kubernetes**.

   You can either import a JSON file to prefill the values or enter the values manually. 

5. **Audit policy** - Specify the rules for the Kubernetes log entries. 
	|<div style="width:230px">Parameter</div>|Description
	|:---|:---
	|**Level**|The audit level of the event.<br><br>**None** - do not log events.<br>**Metadata** - log request metadata (requesting user, timestamp, resource, verb, etc.) but not request or response body.<br>**Request** - log event metadata and request body but not response body. This does not apply for non-resource requests.<br>**RequestResponse** - log event metadata, request and response bodies. This does not apply for non-resource requests.
	|**Maximum age (days)**|The maximum number of days to retain old audit log files.
	|**Maximum numbers of log files to retain**|The maximum number of audit log files to retain.
	|**Maximum size (megabytes)**|The maximum size in megabytes of the audit log file.
6. Click **Save**.
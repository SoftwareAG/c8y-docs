---
weight: 60
title: Administration and configuration
layout: redirect
---

### Unlocking the tenant admin user

The tenant admin user could be locked if incorrect credentials are passed during login into UI, REST API or MQTT. 

<img src="/images/edge/edge-tenant-lock.png" name="Locked user" style="width:50%;"/>

To unlock the tenant admin user, perform the following steps:

1. Login as **management/sysadmin** user to unlock a user in the **management** tenant.<br>
Login as **edge/sysadmin** user to unlock a user in the **edge** tenant.
2. In the Administration application, navigate to the **Users** page and open the tenant admin user.
3. Activate the user account by switching the toggle next to the username to **Enabled** and save your settings.

### Configuring email server and password template settings

To configure the "reset password" template and email server settings, perform the following steps:

1. Log into the management tenant using *https://&#60;Edge&#95;VM&#95;IP&#95;Address>/apps/administration/index.html#/configuration*.
	* Tenant: management
	* User: edgeadmin 
	* Password: Will be the same as the Edge tenant admin password provided in the post-installation execution
<br>
2. Update the email server details and templates following the instructions in [Administration > Changing settings> Configuration settings](/users-guide/administration/#config-platform) in the User guide.

### Increasing the system performance

If the system performance is slow, the memory should be increased. First, increase the memory of the VM. This is done by stopping the VM and increasing its memory.

<img src="/images/edge/edge-vm-increasing-memory.png" name="Increasing memory"/>

Increasing the VM memory should be followed by a JVM memory increase. 

This is done by starting the VM (follow the steps described in the Installation section). Log into VM, open the file */usr/share/cumulocity-core-karaf/bin/setenv*  and edit it as described below. The parameter is the following, default size is 1024.

	export JAVA_MAX_MEM=1024M # Maximum memory for the JVM

After increasing the size, restart Karaf by executing:

```shell
[admin@server ~]$  sudo service cumulocity-core-karaf stop
```

and

```shell
[admin@server ~]$  service cumulocity-core-karaf start
```

### Log rotation 

The components for which log rotation is configured are as follows:

|Component|Log file location|Log file rotation|Max file size|Max backup index|
|:---|:---|:---|:---|:---|
|Karaf|${karaf.data}/log/error.log|Daily|50 MB|14|
|MQTT|${karaf.data}/log/mqtt.log|Daily|50 MB|14|
|Access|${karaf.data}/log/access.log|Daily|50 MB|14|
|DataBroker|${karaf.data}/log/databroker.log|Daily|50 MB|14|
 
<br>
**Under /etc/ configured via logrotate.conf and config files under /etc/logrotate.d**
 
The components for which log rotation is configured are as follows:
 
|Component|Log file location|Log file rotation|Max file size|Max backup index|
|:---|:---|:---|:---|:---|
|MongoDB|/var/log/mongodb/*.log|Daily|50 MB|14|
|NginX|/var/log/nginx/*.log|Daily|50 MB|14|
|Apama|/var/log/apama/*.log|Daily|50 MB|14|

For microservices, there currently is no specific log rotation configured.

### Time synchronization

For many use cases, and especially when using APAMA, time synchronization must be available, i.e. the time inside the VM must be synchronized with the time of the host OS and with devices sending data.

`chrony` or `ntp` services can be configured by end users based on their time synchronization needs. These services are by default stopped and disabled in Edge and can be enabled by standard commands. Use the following commands to interact with the `chrony` or `ntp` services:
 
	sudo systemctl start|stop|status|restart ntpd
	sudo systemctl start|stop|status|restart chronyd

By default, for VMWare-based installations, the *vmtools* service is responsible for time synchronization with the host operating system.

For HyperV, the `chronyd` service is enabled by default for accurate time synchronization.

>**Info:** As HyperV relies on the `chronyd` service for time synchronization, do not stop the `chronyd` service. 


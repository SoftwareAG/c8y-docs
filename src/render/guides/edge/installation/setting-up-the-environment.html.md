---
order: 30
title: Setting up the environment
layout: redirect
---


For your convenience, we provide two hypervisor examples for setting up Cumulocity IoT Edge:

* [Example setup for VirtualBox](/guides/edge/installation#setting-up-virtual-box)
* [Example setup for ESXi VMWare](/guides/edge/installation#setting-up-esxi)


### VM login details

SSH login into Edge is allowed through the “admin” user. All operational activities described in this guide need to be carried out through the admin user.

Use the following login credentials for SSH login into the Edge instance:
 
* Username: admin
* Password: manage

Use the following command to log into Edge server via SSH:

```shell	
ssh admin@<IP address>
	
$ Password: manage
```
	
Use the IP address provided during [network configuration](/guides/edge/installation#configuration). The default value for the Virtual Box is 192.168.56.120.


>**Info**: 
Root access is not supported in the Edge VM instance. Changes made as root user might cause failure of the described operational procedures. 
Moreover, the Edge VM is tested and validated with the configuration shipped (i.e. OS version/patch level, other components compatibility etc). Root access would alter Cumulocity IoT Edge to an unknown and not tested configuration and handling support tickets would no longer work. 


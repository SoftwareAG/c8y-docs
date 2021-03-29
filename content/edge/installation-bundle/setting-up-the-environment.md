---
weight: 20
title: Setting up the environment
layout: redirect
---

For your convenience, we provide the hypervisor examples for setting up Cumulocity IoT Edge:

* [Example setup for ESXi VMWare](/edge/installation#setting-up-esxi)
* [Example setup for VMWare Workstation Player](/edge/installation#setting-up-vmware)
* [Example setup for Hyper-V](/edge/installation#setting-up-hyper-v)

For all hypervisors, the Edge VM is configured to use CET time zone. Software AG recommends that you use the same Internet Time Server on the host machine and the guest VM for better time synchronization.

### VM login details

SSH login into Cumulocity IoT Edge is allowed through the “admin” user. All operational activities described in this guide need to be carried out through the admin user.

Use the following login credentials for SSH login into the Edge instance:

* Username: admin
* Password: manage

In the Edge VM, the default keyboard layout is **en_US**. If your keyboard is other than **en_US**, the characters that you type might not match the keys on the keyboard. This might affect your Edge VM password when setting the password or logging in to Edge VM directly through the VM console.

Use the following command to log into Edge server via SSH:

```shell
ssh admin@<IP address>

$ Password: manage
```

#### Changing the hostname

The **admin** user can change the hostname of the Edge VM using the command:

```shell
[admin@server ~]$ sudo hostnamectl set-hostname <hostname>
```
The default hostname of the Edge VM is **server**.

>**Info:**
Root access is not supported in the Edge VM instance. Changes made as root user might cause failure of the described operational procedures.
Moreover, the Edge VM is tested and validated with the configuration shipped (that is, operating system version/patch level, other components compatibility and so on). Root access would alter Cumulocity IoT Edge to an unknown and not tested configuration and handling support tickets would no longer work.

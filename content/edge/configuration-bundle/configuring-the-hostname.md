---
weight: 45
title: Configuring the hostname
layout: redirect
---

You can change the hostname of your Edge appliance using the terminal and REST APIs.

### Configuring the hostname using the terminal

To configure the hostname of your Edge appliance, run the command:

```shell
[admin@server ~]$ sudo hostnamectl set-hostname <hostname>
```
The default hostname of the Edge VM is **iot-edge-server**.

>**Info:** Root access is not supported in the Edge VM instance. Changes made as root user might cause failure of the described operational procedures.
Moreover, the Edge VM is tested and validated with the configuration shipped (that is, operating system version/patch level, other components compatibility and so on). Root access would alter Cumulocity IoT Edge to an unknown and not tested configuration and handling support tickets would no longer work. 

### Configuring the hostname using the REST APIs

To configure the hostname of your Edge appliance, use the following endpoints:

- [GET /edge/configuration/hostname](/edge/rest-api/#get-edgeconfigurationhostname)
- [POST /edge/configuration/hostname](/edge/rest-api/#post-edgeconfigurationhostname)

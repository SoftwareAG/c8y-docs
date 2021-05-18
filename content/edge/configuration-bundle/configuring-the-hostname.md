---
weight: 45
title: Configuring the hostname
layout: redirect
---

You can change the hostname of your Edge appliance using the terminal and REST APIs.

### Configuring the hostname using the terminal

To configure the hostname of your Edge appliance, run the command:

```shell
[admin@iot-edge-server ~]$ sudo hostnamectl set-hostname <hostname>
```
The default hostname of the Edge appliance is **iot-edge-server**.

### Configuring the hostname using the REST APIs

To configure the hostname of your Edge appliance, use the following endpoints:

- [GET /edge/configuration/hostname](/edge/rest-api/#get-edgeconfigurationhostname)
- [POST /edge/configuration/hostname](/edge/rest-api/#post-edgeconfigurationhostname)

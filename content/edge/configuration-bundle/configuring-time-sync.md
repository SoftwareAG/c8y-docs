---
weight: 30
title: Configuring the time synchronization 
layout: redirect
---

For many use cases, and especially when using APAMA, time synchronization must be available, i.e. the time inside the VM must be synchronized with the time of the host OS and with devices sending data.

`chrony` or `ntp` services can be configured by end users based on their time synchronization needs. These services are by default stopped and disabled in Edge and can be enabled by standard commands. Use the following commands to interact with the `chrony` or `ntp` services:
 
	sudo systemctl start|stop|status|restart ntpd
	sudo systemctl start|stop|status|restart chronyd

By default, for VMWare-based installations, the *vmtools* service is responsible for time synchronization with the host operating system.

For HyperV, the `chronyd` service is enabled by default for accurate time synchronization.

>**Info:** As Hyper-V relies on the `chronyd` service for time synchronization, do not stop the `chronyd` service. 

### Configuring the time synchronization using the REST APIs

To configure the time synchronization, use the following endpoints:

- [POST /edge/configuration/time-sync](/edge/rest-api/#post-edgeconfigurationtime-sync)
- [GET /edge/configuration/time-sync](/edge/rest-api/#get-edgeconfigurationtime-sync)
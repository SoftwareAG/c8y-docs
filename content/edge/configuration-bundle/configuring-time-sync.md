---
weight: 30
title: Configuring the time synchronization 
layout: redirect
---

For many use cases, and especially when using APAMA, time synchronization must be available, i.e. the time inside the Edge appliance must be synchronized with the time of the host OS and with the devices sending the data.

By default, the `chrony` service is responsible for time synchronization with the host operating system. For HyperV, the `chronyd` service is disabled by default for accurate time synchronization.

>**Info:** As Hyper-V relies on the `chronyd` service for time synchronization, do not stop the `chronyd` service. 

### Configuring the time synchronization using the REST APIs

To configure the time synchronization, use the following endpoints:

- [POST /edge/configuration/time-sync](/edge/rest-api/#post-edgeconfigurationtime-sync)
- [GET /edge/configuration/time-sync](/edge/rest-api/#get-edgeconfigurationtime-sync)
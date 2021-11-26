---
weight: 30
title: Configuring the time synchronization 
layout: redirect
---

For many use cases, and especially when using Apama, the time inside the Edge appliance must be synchronized with the network.

By default, the `chrony` service is responsible for time synchronization with the host operating system. For HyperV, the `chronyd` service is disabled by default for accurate time synchronization.

Once the time synchronization is enabled, you can specify the NTP servers and the interval to trigger the time synchronization.

### Configuring the time synchronization using the REST APIs

To configure the time synchronization, use the following endpoints:

- [POST /edge/configuration/time-sync](/edge/rest-api/#post-edgeconfigurationtime-sync)
- [GET /edge/configuration/time-sync](/edge/rest-api/#get-edgeconfigurationtime-sync)
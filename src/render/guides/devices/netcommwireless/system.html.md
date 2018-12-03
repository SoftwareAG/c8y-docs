---
title: Monitoring system resources
layout: redirect
order: 40
---
You can record statistics of the router's system resources usage for troubleshooting purposes. The following statistics are available:

* CPU load in percent.
* Used and total memory in MB.
* Uplink and downlink traffic over all interfaces in KB/sec.

By default, collection of resource statistics is disabled. They can be enabled by setting a non-zero collecting interval in the "System resources measurements" entry of the [router user interface](#configure) or using [Device Shell](#shell):

	set service.cumulocity.system_resources.interval=<interval>

Collected data can be accessed in the "Measurements" tab or in a dashboard.
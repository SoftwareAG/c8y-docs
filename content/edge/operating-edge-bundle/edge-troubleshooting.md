---
weight: 50
title: Troubleshooting the system
layout: bundle
section:
  - edge_server
---

In case of any issues, {{< company-sag >}} recommends you to follow these steps:

* Perform a health check, see [Health check](/edge/operating-edge/#health-check).
* Monitor the system processes, see [Monitoring](/edge/operating-edge/#monitoring).
* Check the log files, see [Logging](/edge/operating-edge/#logs-files).

These steps help you analyze the issue and provide a fix. If you need to contact {{< company-sag >}} support, include the output of the diagnostics dump. For more information about using the diagnostics, see [Diagnostic utility](#diagnostics).

### Troubleshooting Microservices {#troubleshooting-microservices}

In case of any microservices related issues, {{< company-sag >}} recommends you to additionally check the status of the microservices pods using the following command:

	[admin@iot-edge-server ~]$ sudo kubectl get pods -n kube-system

If any pods show their status as evicted, expand the disk size. See [Expanding the disk size](/edge/operating-edge/#expanding-the-disk-size).

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

In case of any microservices related issues, it is recommended to:

* Check if microservice_hosting is disabled using the command `sudo monit status microservice_hosting`
* If it is showing as disabled, restart microservices through the UI or REST APIs
* If microservice_hosting is still showing as disabled or restarting fails, check the status of the kubernetes system pods using the command below:
```shell
sudo kubectl get pods -n kube-system
```
If any of the pods in the list show their status as evicted, the most probable cause could be that the system ran out of disk space. You should expand the disk size, see [Expanding the disk size](/edge/operating-edge/#expanding-the-disk-size).

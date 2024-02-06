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

In case of any microservices related issues, we recommend you to:

Check if _microservice_hosting_ is disabled using the command `sudo monit status microservice_hosting`

![Microservice Hosting Status](/images/edge/monit_status_microservice_hosting.png)
If it is showing as disabled, enable the microservice hosting feature through [the GUI](/edge/edge-configuration/#enabling-or-disabling-the-microservice-hosting-feature-using-the-ui) or [the REST API](/api/edge/#tag/Microservice-hosting-feature)
If enabling the microservice hosting feature fails, check the status of the Kubernetes system pods using the command below:
```shell
sudo kubectl get pods --namespace kube-system
```
If any pod in the list show its status as evicted, the most probable cause could be that the system ran out of disk space. You should expand the disk size through [the GUI](/edge/operating-edge/#expanding-the-disk-size) or [the REST API](/api/edge/#operation/expandDiskSize). Enable the microservice hosting feature after disk expansion.

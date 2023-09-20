---
weight: 15
title: Installing the Edge Operator
layout: redirect
---

A Helm chart is available for installing the Edge Operator. To begin, create a new **single node** Kubernetes cluster with the Kubernetes distribution of your choice, and configure `kubectl` to use that cluster. See the [System Requirements](/edge-k8s/installing-edge-on-k8/#prerequisites) page for the supported Kubernetes distributions and versions.

{{< c8y-admon-info >}}
To use the Helm charts, you need to install Helm v3. Refer to [Installing Helm](https://helm.sh/docs/intro/install/) for the installation instructions.
{{< /c8y-admon-info >}}

{{< product-c8y-iot >}} Edge provides a script to install the Edge Operator. This script is located at [c8yedge-operator-install.sh](/files/edge-k8s/c8yedge-operator-install.sh).

To install the Operator, run and enter the version (for example, 1017.0.0) you want to install, and the repository credentials you received along with the license.

```shell
curl -sfL https://cumulocity.com/guides/files/edge-k8s/c8yedge-operator-install.sh -O && bash ./c8yedge-operator-install.sh
```
Provide the Edge Operator repository credentials in the prompt:

```
Enter username to access Edge Operator repository:  
Enter password to access Edge Operator repository: 
```
{{< c8y-admon-info >}}
To request the repository credentials, contact the logistics team for your region:
- North and South America: LogisSrvus@softwareagusa.com 
- All Other Regions: LogisticsServiceCenterGER@softwareag.com {{< /c8y-admon-info >}}

By default, the Operator is deployed within the **c8yedge** namespace. If you wish to install the Operator and {{< product-c8y-iot >}} Edge in a different namespace, you can specify it using the `-n` option in the installation script. 

Run the following command to follow the logs for the Operator pod:
```bash
kubectl logs -f -n c8yedge deployment/c8yedge-operator-controller-manager manager
```
{{< c8y-admon-info >}}
Substitute the namespace name, which is currently **c8yedge** in the command, with the namespace name where you have installed the Operator.
{{< /c8y-admon-info >}}
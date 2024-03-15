---
weight: 15
title: Installing the Edge Operator
layout: redirect
---

A Helm chart is available for installing the Edge Operator. To begin, create a new single-node Kubernetes cluster with the Kubernetes distribution of your choice, and configure `kubectl` to use that cluster. See [Prerequisites](/edge-k8s/installing-edge-on-k8/#prerequisites) for the supported Kubernetes distributions and versions.

Edge provides a script to install the Edge Operator. This script is located at [c8yedge-operator-install.sh](/files/edge-k8s/c8yedge-operator-install.sh).

To install the Edge Operator, run and enter the version (for example, 1017.0.0) you want to install, and the repository credentials you received along with the license.

```shell
curl -sfL {{< link-c8y-doc-baseurl >}}/files/edge-k8s/c8yedge-operator-install.sh -O && bash ./c8yedge-operator-install.sh
```
Provide the Edge Operator repository credentials in the prompt:

```text
Enter username to access Edge Operator repository:  
Enter password to access Edge Operator repository:
```
{{< c8y-admon-info >}}
To request the repository credentials, contact the logistics team for your region:
* North and South America: LogisSrvus@softwareagusa.com
* All Other Regions: LogisticsServiceCenterGER@softwareag.com {{< /c8y-admon-info >}}

By default, the Edge Operator is deployed within the **c8yedge** namespace. If you wish to install the Edge Operator and Edge in a different namespace, you can specify it using the `-n` option in the installation script.

Run the following command to follow the logs for the Edge Operator pod:
```shell
kubectl logs -f -n c8yedge deployment/c8yedge-operator-controller-manager manager
```
{{< c8y-admon-info >}}
Substitute the namespace name **c8yedge** in the command above with the namespace name where you have installed the Edge Operator.
{{< /c8y-admon-info >}}

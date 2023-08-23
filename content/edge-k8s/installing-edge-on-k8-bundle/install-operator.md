---
weight: 15
title: Installing the Edge operator
layout: redirect
---

A Helm chart is available for installing the Edge Kubernetes operator. To begin, create a new **single node** Kubernetes cluster with the Kubernetes distribution of your choice, and configure `kubectl` to use that cluster. See the [System Requirements](/edge-k8s/installing-edge-on-k8/#prerequisites) page for the supported Kubernetes distributions and versions.

{{< c8y-admon-info >}}
To use the Helm charts, you need to install Helm v3. Refer to [Installing Heml](https://helm.sh/docs/intro/install/) for the installation instructions.
{{< /c8y-admon-info >}}

{{< product-c8y-iot >}} Edge provides a script to install the Edge operator. This script is located at [cumulocity-iot-edge-operator-install.sh](/files/edge-k8s/cumulocity-iot-edge-operator-install.sh).

To install the operator, run and enter the version (for example, 1017.0.0) you want to install, and the repository credentials you received along with the license. To request the repository credentials, contact the logistics team for your region:
- North and South America: LogisSrvus@softwareagusa.com 
- All Other Regions: LogisticsServiceCenterGER@softwareag.com 

```shell
curl -sfL https://cumulocity.com/guides/files/edge-k8s/cumulocity-iot-edge-operator-install.sh -O && bash ./cumulocity-iot-edge-operator-install.sh 
```

The operator is deployed in the `cumulocityiotedge-operator-system` namespace. Run the following command to follow the logs for the operator pod:
```bash
kubectl logs --follow --namespace cumulocityiotedge-operator-system deployment/cumulocityiotedge-operator-controller-manager manager
```
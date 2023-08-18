---
weight: 15
title: Installing the Edge operator
layout: redirect
---

A Helm chart is available for installing the Edge Kubernetes operator. To begin, create a new **single node** Kubernetes cluster with the Kubernetes distribution of your choice, and configure `kubectl` to use that cluster. See the [System Requirements](/k8-edge/installing-edge-on-k8/#prerequisites) page for the supported Kubernetes distributions and versions.

{{< c8y-admon-info >}}
To use the Helm charts, you need to install Helm v3. Refer to [Installing Heml](https://helm.sh/docs/intro/install/) for the installation instructions.
{{< /c8y-admon-info >}}

Run the `cumulocity-iot-edge-operator-install.sh` script to install the operator.

The operator is deployed in the `cumulocityiotedge-operator-system` namespace. Run the following command to follow the logs for the operator pod:
```bash
kubectl logs --follow --namespace cumulocityiotedge-operator-system deployment/cumulocityiotedge-operator-controller-manager manager
```
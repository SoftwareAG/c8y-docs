---
weight: 20
title: Edge Operator
layout: redirect
---

The Edge Operator automates the deployment and management of Edge on Kubernetes. The Edge Operator manages a Custom Resource Definition (CRD) to extend the Kubernetes API for Edge. You can deploy and manage Edge on a Kubernetes cluster through Edge Custom Resource (CR). Modify the Edge CR file and use `kubectl apply -f` to apply the changes. The Edge Operator receives these changes and installs or updates {{< product-c8y-iot >}} Edge accordingly.

The Edge Operator enables you to install, configure, upgrade or downgrade, scale up or down {{< product-c8y-iot >}} Edge on Kubenetes. The Edge Operator supports:
- Deploy {{< product-c8y-iot >}} Edge
- Version upgrade and downgrade
- Scale up and down resources
- Configure persistent storage
- Validate configurations

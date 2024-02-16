---
weight: 20
title: Cumulocity IoT {{< product-c8y-iot >}} Edge Operator
layout: redirect
---

The {{< product-c8y-iot >}} Edge Operator automates the deployment and management of {{< product-c8y-iot >}} Edge on Kubernetes. The {{< product-c8y-iot >}} Edge Operator manages a Custom Resource Definition (CRD) to extend the Kubernetes API for {{< product-c8y-iot >}} Edge. You can deploy and manage {{< product-c8y-iot >}} Edge on a Kubernetes cluster through {{< product-c8y-iot >}} Edge Custom Resource (CR). Modify the {{< product-c8y-iot >}} Edge CR file and use `kubectl apply -f` to apply the changes. The {{< product-c8y-iot >}} Edge Operator receives these changes and installs or updates {{< product-c8y-iot >}} Edge accordingly.

The {{< product-c8y-iot >}} Edge Operator enables you to install, configure, upgrade or downgrade, scale up or down {{< product-c8y-iot >}} Edge on Kubenetes. The {{< product-c8y-iot >}} Edge Operator supports:
- Deploy {{< product-c8y-iot >}} Edge
- Version upgrade and downgrade
- Scale up and down resources
- Configure persistent storage
- Validate configurations

---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} Edge can be deployed on a single node Kubernetes cluster and managed using {{< product-c8y-iot >}} Edge Kubernetes Operator. 

The {{< product-c8y-iot >}} Edge Kubernetes Operator automates the deployment and management of {{< product-c8y-iot >}} Edge on Kubernetes. The operator manages a [Custom Resource Definition (CRD)](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/crd/v1/edge.cumulocity.com_edges.yaml) to extend the Kubernetes API for {{< product-c8y-iot >}} Edge.

You can deploy and manage {{< product-c8y-iot >}} Edge on a Kubernetes cluster by updating {{< product-c8y-iot >}} Edge Custom Resource (CR). Instead of performing manual changes to the deployment, you specify the changes in the {{< product-c8y-iot >}} Edge CR file and use `kubectl apply` to apply these changes.

This documentation includes a sample manifest [Cumulocity IoT Edge Manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/cr/v1/cumulocity-iot-edge-manifest.yaml) you can use to deploy Edge on Kubernetes.

Henceforth, Cumulocity IoT Edge will be referred to as Edge.

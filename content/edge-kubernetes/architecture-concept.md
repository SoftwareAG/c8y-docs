---
weight: 45
title: Deployment architecture
layout: bundle
---
The {{< product-c8y-iot >}} Edge Operator operates within a namespace (default **c8yedge**, unless specified during the {{< product-c8y-iot >}} Edge Operator installation). It creates and monitors multiple Kubernetes resources that collectively constitute the {{< product-c8y-iot >}} Edge.

You can deploy {{< product-c8y-iot >}} Edge on Kubernetes in two modes: one includes MongoDB, which is both deployed and managed by the {{< product-c8y-iot >}} Edge Operator; the other involves connecting to an externally deployed MongoDB.

The deployment model is depicted below:

![{{< product-c8y-iot >}} Edge Operator managed MongoDB](/images/edge-k8s/edge-k8-internal-db.png)

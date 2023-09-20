---
weight: 45
title: Deployment architecture
layout: bundle
---
The Edge Operator incorporates a custom controller developed in the Go programming language. This controller oversees the lifecycle and status of the {{< product-c8y-iot >}} Edge deployment. It achieves this by managing a Custom Resource Definition (CRD) that enhances the Kubernetes API to accommodate {{< product-c8y-iot >}} Edge deployment. Update the Edge CR for regular maintenance of the {{< product-c8y-iot >}} Edge deployment and management. 

The Edge Operator operates within a namespace (default c8yedge unless specified during Operator installation). Here it creates multiple Kubernetes resources across the namespace where the Operator, which it continuously monitors.

{{< product-c8y-iot >}} Edge on Kubernetes can be deployed in two modes: one includes MongoDB, which is both deployed and managed by the Edge Operator; the other involves connecting to an externally deployed MongoDB.
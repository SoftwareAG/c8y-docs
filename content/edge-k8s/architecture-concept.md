---
weight: 45
title: Deployment architecture
layout: bundle
---
The Edge Operator incorporates a custom controller developed in the Go programming language. This controller oversees the lifecycle and status of the {{< product-c8y-iot >}} Edge deployment. It achieves this by managing a Custom Resource Definition (CRD) that enhances the Kubernetes API to accommodate {{< product-c8y-iot >}} Edge deployment. Update the Edge CR for regular maintenance of the {{< product-c8y-iot >}} Edge deployment and management. 

The Edge Operator operates within the edge-k8s-operator-system namespace. Here it creates multiple Kubernetes resources across different namespaces, which it continuously monitors. These namespaces are named with prefixes based on the Edge CR name. For example, `<EDGE-CR-NAME>-logging`, `<EDGE-CR-NAME>-mongodb`, `<EDGE-CR-NAME>-microservices-registry`, `<EDGE-CR-NAME>-microservices`, `<EDGE-CR-NAME>-core`, and `<EDGE-CR-NAME>-thin-edge`. 

Edge on Kubernetes can be deployed in two modes: one includes MongoDB, which is both deployed and managed by the Edge Operator; the other involves connecting to an externally deployed MongoDB.
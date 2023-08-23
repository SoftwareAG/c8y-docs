---
weight: 15
title: Deployment architecture
layout: bundle
---

The Edge Kubernetes operator incorporates a custom controller developed in the Go programming language. This controller oversees the lifecycle and status of the Edge deployment. It achieves this by managing a Custom Resource Definition (CRD) that enhances the Kubernetes API to accommodate  Edge deployment. Regular maintenance of the Edge deployment and management can be performed by updating the Edge Custom Resource (CR). 

Operational within the edge-k8s-operator-system namespace, the Edge Kubernetes operator creates multiple Kubernetes resources across different namespaces, which it continuously monitors. These namespaces are named with prefixes based on the Edge CR name. For example, `<EDGE-CR-NAME>-logging`, `<EDGE-CR-NAME>-mongodb`, `<EDGE-CR-NAME>-microservices-registry`, `<EDGE-CR-NAME>-microservices`, `<EDGE-CR-NAME>-core`, and `<EDGE-CR-NAME>-thin-edge`. 

Edge on Kubernetes can be deployed in two modes: one includes MongoDB, which is both deployed and managed by the Edge operator; the other involves connecting to an externally deployed MongoDB.

### With the Edge operator managed MongoDB

![Edge operator managed MongoDB](/images/edge-k8s/edge-k8-internal-db.png)

### With self-managed MongoDB 

![Self-managed MongoDB](/images/edge-k8s/edge-k8-external-db.png)
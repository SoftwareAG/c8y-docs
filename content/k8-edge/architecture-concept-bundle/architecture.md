---
weight: 15
title: Architecture
layout: bundle
---

The Edge Kubernetes Operator has a custom controller (written in Go) that manages the lifecycle and the state of an Edge deployment. It does so by managing a CRD to extend the Kubernetes API for Edge deployment. Management and maintenance of the Edge deployment can be performed by updating the Edge CR.

The Operator is deployed in the namespace specified during the installation or by default, created in the `edge-k8s-operator-system` namespace. As part of the Edge deployment, the Operator creates multiple Kubernetes resources in various namespaces and watches them. These namespace names are prefixed with the Edge CR name. e.g. `<EDGE-CR-NAME>`, `<EDGE-CR-NAME>-microservices`, `<EDGE-CR-NAME>-logging`, `<EDGE-CR-NAME>-mongodb` and `<EDGE-CR-NAME>-microservices-registry`.

![operator-architecture](/images/k8-edge/edge-k8s-operator.png)
---
weight: 15
title: Kubernetes Operator
layout: redirect
---

Kubernetes Operators are a powerful concept and pattern for managing complex applications and services within Kubernetes clusters. Operators are software extensions to Kubernetes that make use of [custom resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) to manage applications and their components. Operators follow Kubernetes principles, notably the [control loop](https://kubernetes.io/docs/concepts/architecture/controller/).

The integral part of the Edge Operator pattern is Custom Resource Definitions (CRDs), which allow you to define application-specific resources and its behavior. An Edge Operator uses these CRDs to understand how to manage and interact with the application. 

Operators are particularly valuable for managing stateful applications, like {{< product-c8y-iot >}}. The Edge Operators automate best practices, routine tasks, and provide a consistent way to manage complex applications across different environments.

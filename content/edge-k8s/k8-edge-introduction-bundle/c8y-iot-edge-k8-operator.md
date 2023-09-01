---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} Edge can be deployed and managed on a single node Kubernetes cluster using {{< product-c8y-iot >}} Edge Kubernetes Operator (Edge Operator).

Edge on Kubernetes managed by the Edge Operator enables you with:

- **Unified Management**: Manage Edge through an Edge Custom Resource (CR) in consistent with standard Kubernetes resources. This approach provides a unified and familiar interface for administrators and operators.
- **Desired State Management**: Specify the desired state of Edge through Edge CR. The Edge Operator then ensures that the actual state matches the desired state, simplifying operations and reducing the need for manual intervention.
- **GitOps Friendly**: The declarative nature of CR aligns seamlessly with GitOps workflows. The entire Edge deployment state, including configurations, can be stored and versioned in Git, promoting transparency and traceability. 
- **Automation**: Edge CR empowers you to automate various operational aspects of Edge like scaling, upgrades, and configuration.
- **Distribution**: Distribute and replicate the Edge deployments using Edge CR. Simplifies the deployment and accelerates the adoption of {{< product-c8y-iot >}} platform across diverse environments.

### What is a Kubernetes Operator?

Kubernetes Operators are a powerful concept and pattern for managing complex applications and services within Kubernetes clusters. Operators are software extensions to Kubernetes that make use of [custom resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) to manage applications and their components. Operators follow Kubernetes principles, notably the [control loop](https://kubernetes.io/docs/concepts/architecture/controller/).

The integral part of the Operator pattern is Custom Resource Definitions (CRDs), which allow you to define application-specific resources and its behavior. An Operator uses these CRDs to understand how to manage and interact with the application. 

Operators are particularly valuable for managing stateful applications, like {{< product-c8y-iot >}}. The Operators automate best practices, routine tasks, and provide a consistent way to manage complex applications across different environments.

### Edge Operator

The Edge Operator automates the deployment and management of Edge on Kubernetes. The Operator manages a [Custom Resource Definition (CRD)](/files/edge-k8s/c8y-edge-CRD.yaml) to extend the Kubernetes API for Edge. You can deploy and manage Edge on a Kubernetes cluster through Edge CR. Modify the Edge CR file and use `kubectl apply -f` to apply the changes. The Operator receives these changes and installs or updates Edge accordingly.

#### What features does it provide?

The Operator enables you to install, configure, upgrade or downgrade, scale up or down Edge. The Operator supports:
- Deploy Edge
- Version upgrade and downgrade
- Scale up and down resources
- Configure persistent storage
- Validate configurations
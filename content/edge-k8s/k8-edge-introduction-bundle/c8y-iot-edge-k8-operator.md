---
weight: 10
title: Overview
layout: redirect
---

{{< product-c8y-iot >}} Edge on Kubernetes represents a cloud-native solution for the delivery, deployment, and management of {{< product-c8y-iot >}} Edge. It retains the functionalities of the {{< product-c8y-iot >}} Edge appliance VM, encompassing similar benefit like autonomy, data reduction, and reactivity.

Kubernetes offers an efficient platform for deploying, scaling, and managing containerized applications using a centralized control plane. Given this, containers orchestrated by Kubernetes have become standard in contemporary IT, fitting a broad spectrum of deployment contexts. {{< product-c8y-iot >}} Edge on Kubernetes capitalizes on these orchestration and management benefits, streamlining the operations of the {{< product-c8y-iot >}} Edge servers with other containerized applications in your deployment landscape.

{{< product-c8y-iot >}} Edge on Kubernetes captures all the highlighted advantages of a cloud-native deployment strategy by using a Kubernetes Operator, known as the Edge Operator. This Edge Operator serves as the central controller and facilitates the deployment and management of the {{< product-c8y-iot >}} Edge on a single-node Kubernetes cluster. This equips you with:

- **Unified Management**: Manage Edge through an Edge Custom Resource (CR) in consistent with standard Kubernetes resources. This approach provides a unified and familiar interface for administrators and operators.
- **Desired State Management**: Specify the desired state of Edge through Edge CR. The Edge Operator then ensures that the actual state matches the desired state, simplifying operations and reducing the need for manual intervention.
- **GitOps Friendly**: The declarative nature of CR aligns seamlessly with GitOps workflows. The entire Edge deployment state, including configurations, can be stored and versioned in Git, promoting transparency and traceability. 
- **Automation**: Edge CR empowers you to automate various operational aspects of Edge like scaling, upgrades, and configuration.
- **Distribution**: Distribute and replicate the Edge deployments using Edge CR. Simplifies the deployment and accelerates the adoption of {{< product-c8y-iot >}} platform across diverse environments.

Although the features remain on par with the {{< product-c8y-iot >}} Edge appliance VM, the deployment strategy undergoes a change, as illustrated in the diagram below:

<img src="/images/edge-k8s/edge-k8-overview.png" name="{{< product-c8y-iot >}} Edge overview" style="width:75%;"/>
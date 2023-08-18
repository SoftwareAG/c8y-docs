---
weight: 10
title: System requirements
layout: redirect
---

> **CAUTION**
>
> Early access release of the Cumulocity IoT Edge Kubernetes Operator is not ready for production deployments. Software AG doesn't support upgrades of the Edge deployments done using this version of the Operator.

The Edge Kubernetes Operator deploys and manages Cumulocity IoT Edge, version 1014.0.x.

The Operator is tested on the following lightweight Kubernetes distributions:
* K3s version 1.21.x
* K3d version 5.2.x

Ideally, the Operator should work on any Cloud Native Computing Foundation (CNCF) certified Kubernetes distribution.

### K3s

K3s is a certified lightweight Kubernetes distribution for IoT * Edge computing. K3s is packaged as a single <50MB binary that reduces the dependencies and steps needed to install, run and auto-update a production Kubernetes cluster. Refer to [Installing K3s](https://rancher.com/docs/k3s/latest/en/installation/) for the installation instructions.

### K3d

K3d is a lightweight wrapper to run K3s in docker. K3d makes it very easy to create single-node K3s clusters in docker, e.g. for local development on Kubernetes. Refer to [Installing K3d](https://k3d.io/v5.3.0/#installation) for the installation instructions.

> **INFO**
>
> If you want to manage the Kubernetes cluster from a remote machine, you will need `kubectl` installed on your client machine. Refer to [Installing kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) for the installation instructions. Ensure you verify and update the [kubectl configuration](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#verify-kubectl-configuration) after installation.

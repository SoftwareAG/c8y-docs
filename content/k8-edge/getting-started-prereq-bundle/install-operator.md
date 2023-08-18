---
weight: 15
title: Install operator
layout: redirect
---

A Helm chart is available for installing the Edge Kubernetes Operator. To begin, create a new **single node** Kubernetes cluster with the Kubernetes distribution of your choice, and configure kubectl to use that cluster. See the [System Requirements page](#system-requirements) for the supported Kubernetes distributions and versions.

> **INFO**
>
> To use Helm charts, you need to install Helm v3. Refer to [Installing Heml](https://helm.sh/docs/intro/install/) for the installation instructions.

### Requirements

For installing the Operator, you need a license key and credentials to access the Cumulocity IoT Edge repository. Please contact Andrej Schreiner (email: Andrej.Schreiner@softwareag.com), the Product Manager, to get the necessary details.

### Get Helm Charts

Run this command after replacing `<EDGE_REPO_USERNAME>` and `<EDGE_REPO_PASSWORD>` with the Edge repository credentials you received to add the Operator Helm charts repository to your Helm and fetch the charts.

```bash
#
# Add the Operator Helm charts repository to your Helm.
#

# Replace <USERNAME> and <PASSWORD> with the credentials you received
EDGE_REPO_USERNAME=<USERNAME>
EDGE_REPO_PASSWORD=<PASSWORD>

# This adds edge chart repository to your helm
helm repo add edge_repo https://registry.c8y.io/chartrepo/edge --username ${EDGE_REPO_USERNAME} --password ${EDGE_REPO_PASSWORD}

# This fetches all the Helm charts available in the repo.
helm repo update
```

### Deploy Edge Kubernetes Operator

Run this command after replacing `<EDGE_REPO_USERNAME>` and `<EDGE_REPO_PASSWORD>` with the credentials you received to deploy the Operator.

> **INFO**
>
> This script depends on [./jq](https://stedolan.github.io/jq) for determining the latest version of the Operator. Refer to [Installing jq](https://stedolan.github.io/jq/download/). 
>

```bash
#
# Deploy the Cumulocity IoT Edge Kubernetes Operator.
#

# Replace <USERNAME> and <PASSWORD> with the credentials you received
EDGE_REPO_USERNAME=<USERNAME>
EDGE_REPO_PASSWORD=<PASSWORD>

# Resolves the latest version of the Operator
EDGE_OPERATOR_VERSION=$(helm search repo edge_repo -l -o json | jq -r 'map(select(.name | contains("edge-operator")).version) | max')

# Deploys the Operator
# If necessary, change the Operator name from edge-k8s-operator to a name relevant for you
# Pass --namespace and --create-namespace options to deploy in a specific namespace
helm install edge-k8s-operator edge_repo/edge-operator --version=${EDGE_OPERATOR_VERSION} --username=${EDGE_REPO_USERNAME} --password=${EDGE_REPO_PASSWORD}
```

By default, the Operator is deployed in `edge-k8s-operator-system` namespace. However, you can override by providing the `--namespace` and `--create-namespace` _(to create namespace if not present)_ options to the command. You can also change the Operator name in the command from `edge-k8s-operator` to a name relevant for you.

> **INFO**
>
> We recommend not using the Edge Custom Resource (CR) name as Kubernetes Operator's namespace, as it is used for deploying one of the Edge components.

Use `kubectl get pods --all-namespaces` to check and ensure the status of the `edge-k8s-operator-controller-manager` pod is "Running" before continuing with the subsequent steps.
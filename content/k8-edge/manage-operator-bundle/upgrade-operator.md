---
weight: 10
title: Upgrade operator
layout: redirect
---

To upgrade the Operator, you need to update the local edge-repo by following the steps described in [Get Helm Charts](03-getting-started#get-helm-charts).

Run this command after replacing `<EDGE_REPO_USERNAME>` and `<EDGE_REPO_PASSWORD>` with the credentials you received to deploy the Operator. Change the Operator name in the command if you named it different from `edge-k8s-operator`. 

```bash
#
# Upgrade the Cumulocity IoT Edge Kubernetes Operator.
#

# Replace <USERNAME> and <PASSWORD> with the credentials you received
EDGE_REPO_USERNAME=<USERNAME>
EDGE_REPO_PASSWORD=<PASSWORD>

# Resolves the latest version of the Operator
EDGE_OPERATOR_VERSION=$(helm search repo edge_repo -l -o json | jq -r 'map(select(.name | contains("edge-operator")).version) | max')

# Upgrades the Operator
# Change the Operator name from edge-k8s-operator to a name you gave when you installed it
helm upgrade edge-k8s-operator edge-repo/edge-operator --version ${EDGE_OPERATOR_VERSION} --set "imageCredentials.username=${EDGE_REPO_USERNAME}" --set "imageCredentials.password=${EDGE_REPO_PASSWORD}"
```

We recommend you upgrade the Operator to the latest version. However, if you want to upgrade to a specific version, you can pass the version of the Operator to the `helm upgrade...` command via the option `--version`.
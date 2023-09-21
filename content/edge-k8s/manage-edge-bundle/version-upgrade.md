---
weight: 15
title: Version upgrade
layout: redirect
---

The Operator follows the recreate update strategy to upgrade the {{< product-c8y-iot >}} Edge deployment. 

The recreate update strategy is an all-or-nothing process that updates all aspects of the system at once with a brief downtime period. The Operator selects all the outdated pods and deactivates them at once. Once all old pods are deactivated, the Operator creates updated pods for the entire system. {{< product-c8y-iot >}} Edge is not operational while the old pods are deactivating and until the final updated pod is created.

For this example, assume that {{< product-c8y-iot >}} Edge is deployed using the [c8yedge-sample.yaml](/files/edge-k8s/c8yedge-sample.yaml).

### Start the Upgrade

To upgrade the {{< product-c8y-iot >}} Edge deployment, change the `sepc.version` field in the Edge CR file to the appropriate version. For example to `1017.0.1`.

Save the file and use the command below to apply the changes:

```bash
kubectl apply -f c8yedge-sample.yaml
```

To verify the {{< product-c8y-iot >}} Edge deployment, see [Verify Edge installation](/edge-k8s/installing-edge-on-k8/#verify-edge-installation).

### Upgrade Edge remotely

For information about upgrading {{< product-c8y-iot >}} Edge remotely, see [Upgrading Edge remotely](/edge-k8s/k8-edge-connecting-edge-to-cloud/#k8-edge-upgrading-edge-remotely).
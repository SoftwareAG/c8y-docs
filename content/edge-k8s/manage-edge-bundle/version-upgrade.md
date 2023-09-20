---
weight: 15
title: Version upgrade
layout: redirect
---

The Operator follows the recreate update strategy to upgrade the Edge deployment. 

The recreate update strategy is an all-or-nothing process that updates all aspects of the system at once with a brief downtime period. The Operator selects all the outdated pods and deactivates them at once. Once all old pods are deactivated, the Operator creates updated pods for the entire system. Edge is not operational while the old pods are deactivating and until the final updated pod is created.

For this example, assume that Edge is deployed using the [c8yedge.yaml](/files/edge-k8s/c8yedge.yaml).

### Start the Upgrade

To upgrade the Edge deployment, change the `sepc.version` field in the Edge CR file to the appropriate version. For example to `1017.0.1`.

Save the file and use the command below to apply the changes:

```bash
kubectl apply -f c8yedge.yaml
```

To verify the Edge deployment, see [Verify Edge deployment](/edge-k8s/installing-edge-on-k8/#verify-edge-deployment).

### Upgrade Edge remotely

For information about updating Edge remotely, see [Upgrading Edge remotely](/edge-k8s/k8-edge-connecting-edge-to-cloud/#k8-edge-upgrading-edge-remotely).
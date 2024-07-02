---
weight: 15
title: Upgrading Edge
layout: redirect
---

The Edge Operator follows the recreate update strategy to upgrade the Edge deployment.

Recreating update strategy is an all-or-nothing process that updates all aspects of the system at once with a brief downtime period. The Edge Operator selects all the outdated pods and deactivates them at once. Once all old pods are deactivated, the Edge Operator creates updated pods for the entire system. Edge is not operational while the old pods are deactivating and until the final updated pod is created.

For this example, assume that Edge is deployed using the [c8yedge-sample.yaml](/files/edge-k8s/c8yedge-sample.yaml).

### Starting the upgrade {#starting-the-upgrade}

To upgrade the Edge deployment, change the `spec.version` field in the Edge CR file to the appropriate version. For example to `{{< c8y-edge-current-version >}}.0.1`.

Save the file and use the command below to apply the changes:

```bash
kubectl apply -f c8yedge-sample.yaml
```

To verify the Edge deployment, see [Verifying the Edge installation](/edge-kubernetes/installing-edge-on-k8/#verifying-the-edge-installation).

### Upgrading Edge remotely {#upgrading-edge-remotely}

For information about upgrading Edge remotely, see [Upgrading Edge remotely](/edge-kubernetes/k8-edge-connecting-edge-to-cloud/#k8-edge-upgrading-edge-remotely).

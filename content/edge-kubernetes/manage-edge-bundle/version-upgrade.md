---
weight: 15
title: Upgrading Cumulocity IoT Edge
layout: redirect
---

The {{< product-c8y-iot >}} Edge Operator follows the recreate update strategy to upgrade the {{< product-c8y-iot >}} Edge deployment.

Recreating update strategy is an all-or-nothing process that updates all aspects of the system at once with a brief downtime period. The {{< product-c8y-iot >}} Edge Operator selects all the outdated pods and deactivates them at once. Once all old pods are deactivated, the {{< product-c8y-iot >}} Edge Operator creates updated pods for the entire system. {{< product-c8y-iot >}} Edge is not operational while the old pods are deactivating and until the final updated pod is created.

For this example, assume that {{< product-c8y-iot >}} Edge is deployed using the [c8yedge-sample.yaml](/files/edge-k8s/c8yedge-sample.yaml).

### Starting the upgrade {#starting-the-upgrade}

To upgrade the {{< product-c8y-iot >}} Edge deployment, change the `spec.version` field in the {{< product-c8y-iot >}} Edge CR file to the appropriate version. For example to `1017.0.1`.

Save the file and use the command below to apply the changes:

```bash
kubectl apply -f c8yedge-sample.yaml
```

To verify the {{< product-c8y-iot >}} Edge deployment, see [Verifying the {{< product-c8y-iot >}} Edge installation](/edge-kubernetes/installing-edge-on-k8/#verifying-the-edge-installation).

### Upgrading {{< product-c8y-iot >}} Edge remotely {#upgrading-edge-remotely}

For information about upgrading {{< product-c8y-iot >}} Edge remotely, see [Upgrading {{< product-c8y-iot >}} Edge remotely](/edge-kubernetes/k8-edge-connecting-edge-to-cloud/#k8-edge-upgrading-edge-remotely).

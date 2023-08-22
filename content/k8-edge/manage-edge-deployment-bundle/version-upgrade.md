---
weight: 15
title: Version upgrade
layout: redirect
---

The operator follows the recreate update strategy to upgrade the Edge deployment. 

The recreate update strategy is an all-or-nothing process that updates all aspects of the system at once with a brief downtime period. The operator selects all the outdated pods and deactivates them at once. Once all old pods are deactivated, the operator creates updated pods for the entire system. Edge is not operational while the old pods are deactivating and until the final updated pod is created.

For this example, assume that Edge is deployed using the [Sample Cumulocity IoT Edge Manifest](/files/k8-edge/cumulocity-iot-edge-manifest.yaml) file.

### Start the Upgrade

To upgrade the Edge deployment, change the `sepc.version` field in the Edge CR file to the appropriate version. For example to `1014.0.1`.

Save the manifest file, then use `kubectl` to apply the change.

```bash
kubectl patch -f cumulocity-iot-edge-manifest-UPDATED.yaml
```

To verify the Edge deployment, see [Verify Edge deployment](/k8-edge/installing-edge-on-k8/#verify-edge-deployment).
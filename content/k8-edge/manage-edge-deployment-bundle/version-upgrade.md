---
weight: 15
title: Version upgrade
layout: redirect
---

The operator follows the recreate update strategy to upgrade the Edge deployment. 

The recreate update strategy is an all-or-nothing process that updates all aspects of the system at once with a brief downtime period. The operator selects all the outdated pods and deactivates them at once. Once all old pods are deactivated, the operator creates updated pods for the entire system. Edge is inoperable during the, starting at the old pod’s deactivation and ending once the final updated pod is created. 

Edge is inoperable while the old pods are deactivating and until the last pod is created.

For this example, assume that Edge is deployed using the [Sample Cumulocity IoT Edge Manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/cr/v1/cumulocity-iot-edge-manifest.yaml) file.

### Start the Upgrade

To upgrade the Edge deployment, change the `sepc.version` field in the Edge CR to the desired version, for example to `1014.0.1`.

Save the manifest file, then use `kubectl` to apply the change.

```bash
kubectl apply -f cumulocity-iot-edge-manifest-UPDATED.yaml
```

Post this, follow the steps in [Verify Edge deployment](03-getting-started#verify-edge-deployment) to verify the Edge deployment.
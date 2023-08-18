---
weight: 15
title: Version upgrade
layout: redirect
---

The Operator follows the recreate update strategy to upgrade the Edge deployment.

The recreate update strategy is an all-or-nothing process that updates all aspects of the system at once with a brief downtime period. The Operator selects all outdated Pods and deactivates them at once. Once all old Pods are deactivated, the Operator creates updated Pods for the entire system. Edge is inoperable, starting at the old Pod’s deactivation and ending once the final updated Pod is created.

For this example, assume that Edge is deployed using the [Sample Cumulocity IoT Edge Manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/cr/v1/cumulocity-iot-edge-manifest.yaml) file.

### Start the Upgrade

To upgrade the Edge deployment, change the `sepc.version` field in the Edge CR to the desired version, for example to `1014.0.1`.

Save the manifest file, then use `kubectl` to apply the change.

```bash
kubectl apply -f cumulocity-iot-edge-manifest-UPDATED.yaml
```

Post this, follow the steps in [Verify Edge deployment](03-getting-started#verify-edge-deployment) to verify the Edge deployment.
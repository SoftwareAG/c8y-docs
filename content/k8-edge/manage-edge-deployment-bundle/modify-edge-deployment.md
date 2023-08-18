---
weight: 10
title: Modify Edge deployment
layout: redirect
---

The Edge Kubernetes Operator makes it easier for you to use Edge on Kubernetes. Instead of making changes to the Edge deployment by hand, you specify changes to the Edge CR in the manifest file, then use `kubectl apply` to apply these changes. The Operator picks up on the changes and does what it needs to do in order to make them happen.

For this example, assume that the Edge is deployed using the [Sample Cumulocity IoT Edge Manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/cr/v1/cumulocity-iot-edge-manifest.yaml) file.

### Example Configuration Change

Change the `spec.domain` field to `edge.myown.iot.com` and if required update the `license-secret` accordingly.

Save the manifest file, then use `kubectl` to apply the change.

```bash
kubectl apply -f cumulocity-iot-edge-manifest-UPDATED.yaml
```

Post this, follow the steps in [Verify Edge deployment](03-getting-started#verify-edge-deployment) to verify the Edge deployment.
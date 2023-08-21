---
weight: 10
title: Modify Edge deployment
layout: redirect
---

The {{< product-c8y-iot >}} Edge Kubernetes operator automates the deployment and management of {{< product-c8y-iot >}} Edge on Kubernetes. You can deploy and manage {{< product-c8y-iot >}} Edge on a Kubernetes cluster by updating {{< product-c8y-iot >}} Edge Custom Resource (CR). Specify the changes in the {{< product-c8y-iot >}} Edge CR file and use `kubectl apply -f` to apply the changes. The operator uses the CR file to deploy these changes. 

For this example, assume that the Edge is deployed using the [Sample Cumulocity IoT Edge Manifest](/files/edge/cumulocity-iot-edge-manifest.yaml) file.

### Example Configuration Change

Change the `spec.domain` field to `sample.myown.iot.com` and if required update the `licenseKey` accordingly.

Save the manifest file, then use the command below to apply the change.

```bash
kubectl apply -f cumulocity-iot-edge-manifest-UPDATED.yaml
```

To verify the Edge deployment, see [Verify Edge deployment](/k8-edge/installing-edge-on-k8/#verify-edge-deployment).
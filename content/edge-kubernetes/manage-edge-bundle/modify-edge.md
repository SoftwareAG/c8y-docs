---
weight: 10
title: Modifying Edge
layout: redirect
---

For this example, assume that the Edge is deployed using the [c8yedge-sample.yaml](/files/edge-k8s/c8yedge-sample.yaml).

### Example configuration change {#example-configuration-change}

Change the `spec.domain` field to `sample.myown.iot.com` and if required update the `spec.licenseKey` accordingly.

Save the file and use the command below to apply the changes:

```bash
kubectl apply -f c8yedge-sample.yaml
```

To verify the Edge deployment, see [Verifying the Edge installation](/edge-kubernetes/installing-edge-on-k8/#verifying-the-edge-installation).

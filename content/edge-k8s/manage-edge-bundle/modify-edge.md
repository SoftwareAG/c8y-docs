---
weight: 10
title: Modify Edge
layout: redirect
---

For this example, assume that the Edge is deployed using the [sample manifest file](/files/edge-k8s/c8y-edge-manifest.yaml).

### Example configuration change

Change the `spec.domain` field to `sample.myown.iot.com` and if required update the `licenseKey` accordingly.

Save the file and use the command below to apply the changes:

```bash
kubectl patch -f c8y-edge-manifest.yaml
```
To verify the Edge deployment, see [Verify Edge deployment](/edge-k8s/installing-edge-on-k8/#verify-edge-deployment).
---
weight: 10
title: Modify Edge
layout: redirect
---

For this example, assume that the Edge is deployed using the [c8yedge.yaml](/files/edge-k8s/c8yedge.yaml).

### Example configuration change

Change the `spec.domain` field to `sample.myown.iot.com` and if required update the `licenseKey` accordingly.

Save the file and use the command below to apply the changes:

```bash
kubectl apply -f c8yedge.yaml
```
{{< c8y-admon-info >}}
Substitute the namespace name, which is currently **c8yedge** in the command, with the specific namespace name you've specified in your Edge CR. 
{{< /c8y-admon-info >}}

To verify the Edge deployment, see [Verify Edge deployment](/edge-k8s/installing-edge-on-k8/#verify-edge-deployment).
---
weight: 15
title: Pending external cumulocity-core service IP
layout: redirect
---

The external IP is not assigned to the `cumulocity-core` service.

Output of `kubectl get service cumulocity-core -n c8yedge`:

```text
NAME              TYPE           CLUSTER-IP          EXTERNAL-IP   PORT(S)                                      AGE
cumulocity-core   LoadBalancer   X.X.X.X **REDACTED  <pending>     443:31342/TCP,1883:32751/TCP,8883:32270/TCP  12m           
```
For more information, see [Assigning an external IP](/edge-kubernetes/installing-edge-on-k8/#assigning-an-external-ip).

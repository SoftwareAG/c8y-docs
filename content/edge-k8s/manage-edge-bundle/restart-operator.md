---
weight: 35
title: Restart Operator
layout: redirect
---

Run this command to restart the Edge Operator. 

```shell
kubectl rollout restart deployment --namespace cumulocityiotedge-operator-system   cumulocityiotedge-operator-controller-manager
```
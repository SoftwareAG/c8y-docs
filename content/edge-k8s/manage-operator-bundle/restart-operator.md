---
weight: 20
title: Restart Operator
layout: redirect
---

Run this command to restart the {{< product-c8y-iot >}} Edge Kubernetes Operator. 

```shell
kubectl rollout restart deployment --namespace cumulocityiotedge-operator-system   cumulocityiotedge-operator-controller-manager
```
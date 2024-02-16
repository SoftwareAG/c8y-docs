---
weight: 17
title: Restarting the Cumulocity IoT Edge Operator
layout: redirect
---

Run this command to restart the {{< product-c8y-iot >}} Edge Operator.

```shell
kubectl rollout restart deployment -n c8yedge c8yedge-operator-controller-manager
```
{{< c8y-admon-info >}}
Substitute the namespace name *c8yedge* in the command above with the namespace name where you have installed the {{< product-c8y-iot >}} Edge Operator.
{{< /c8y-admon-info >}}

---
weight: 35
title: Restarting the Edge Operator
layout: redirect
---

Run this command to restart the Edge Operator. 

```shell
kubectl rollout restart deployment -n c8yedge c8yedge-operator-controller-manager
```
{{< c8y-admon-info >}}
Substitute the namespace name, which is currently **c8yedge** in the command, with the namespace name where you have installed the Edge Operator.
{{< /c8y-admon-info >}}
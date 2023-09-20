---
weight: 35
title: Restart Operator
layout: redirect
---

Run this command to restart the Edge Operator. 

```shell
kubectl rollout restart deployment -n c8yedge c8yedge-operator-controller-manager
```
{{< c8y-admon-info >}}
Substitute the namespace name, which is currently **c8yedge** in the command, with the specific namespace name you've specified in your Edge CR. 
{{< /c8y-admon-info >}}
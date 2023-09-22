---
weight: 30
title: Uninstalling the Edge Operator
layout: redirect
---

Run this command for removing the Edge Operator from your Kubernetes cluster.

```bash
helm uninstall c8yedge-operator -n c8yedge 
```
{{< c8y-admon-info >}}
Substitute the namespace name *c8yedge* in the command above with the namespace name where you have installed the Edge Operator.
{{< /c8y-admon-info >}}


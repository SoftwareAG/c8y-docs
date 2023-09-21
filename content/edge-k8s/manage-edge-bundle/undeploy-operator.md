---
weight: 30
title: Uninstalling Operator
layout: redirect
---

Run this command for removing the Operator from your Kubernetes cluster.

```bash
helm uninstall c8yedge-operator -n c8yedge 
```
{{< c8y-admon-info >}}
Substitute the namespace name, which is currently **c8yedge** in the command, with the namespace name where you have installed the Operator.
{{< /c8y-admon-info >}}


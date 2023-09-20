---
weight: 30
title: Undeploy Operator
layout: redirect
---

Run this command for removing the Operator from your Kubernetes cluster.

```bash
helm uninstall c8yedge-operator -n c8yedge 
```
{{< c8y-admon-info >}}
Substitute the namespace name, which is currently **c8yedge** in the command, with the specific namespace name you've specified in your Edge CR. 
{{< /c8y-admon-info >}}


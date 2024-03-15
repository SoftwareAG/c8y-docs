---
weight: 25
title: Uninstalling Edge
layout: redirect
---

You can uninstall Edge either by:
- Deleting the Edge Custom Resource using the command:

   ```shell
   kubectl delete edge c8yedge -n c8yedge
   ```

- Through the [c8yedge-sample.yaml](/files/edge-k8s/c8yedge-sample.yaml) that you used to install Edge.

   For example, you can uninstall by using the command:

   ```shell
   kubectl delete -f c8yedge-sample.yaml
   ```
   {{< c8y-admon-info >}}
   Substitute the namespace name *c8yedge* in the command above with the specific namespace name you have specified in your Edge CR.
   {{< /c8y-admon-info >}}

### Uninstalling the Edge Operator {#uninstalling-the-edge-operator}

   Run this command for removing the Edge Operator from your Kubernetes cluster.

   ```bash
   helm uninstall c8yedge-operator -n c8yedge
   ```

   {{< c8y-admon-info >}}
   Substitute the namespace name *c8yedge* in the command above with the namespace name where you have installed the Edge Operator.
   {{< /c8y-admon-info >}}

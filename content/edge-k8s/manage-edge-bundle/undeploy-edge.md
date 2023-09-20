---
weight: 20
title: Undeploy Edge
layout: redirect
---

You can undeploy {{< product-c8y-iot >}} Edge either by:
- Deleting the Edge Custom Resource using the command:
  
   ```shell
   kubectl delete edge c8yedge -n c8yedge
   ```

- Through the [c8yedge.yaml](/files/edge-k8s/c8yedge.yaml) that you used to deploy Edge. 

   For example, you can undeploy by using the command:
   
   ```shell
   kubectl delete -f c8yedge.yaml
   ```
   
{{< c8y-admon-info >}}
Substitute the namespace name, which is currently **c8yedge** in the command, with the specific namespace name you've specified in your Edge CR. 
{{< /c8y-admon-info >}}
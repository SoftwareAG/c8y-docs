---
weight: 20
title: Uninstalling Cumulocity IoT Edge
layout: redirect
---

You can uninstall {{< product-c8y-iot >}} Edge either by:
- Deleting the Edge Custom Resource using the command:
  
   ```shell
   kubectl delete edge c8yedge -n c8yedge
   ```

- Through the [c8yedge-sample.yaml](/files/edge-k8s/c8yedge-sample.yaml) that you used to install {{< product-c8y-iot >}} Edge. 

   For example, you can uninstall by using the command:
   
   ```shell
   kubectl delete -f c8yedge-sample.yaml
   ```
{{< c8y-admon-info >}}
Substitute the namespace name, which is currently **c8yedge** in the command, with the specific namespace name you've specified in your Edge CR. 
{{< /c8y-admon-info >}}
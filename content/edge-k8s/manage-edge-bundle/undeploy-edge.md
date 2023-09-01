---
weight: 20
title: Undeploy Edge
layout: redirect
---

You can undeploy Edge either by:
- Deleting the Edge Custom Resource using the command:
  
   ```shell
   kubectl delete cumulocityiotedge <EDGE-CR-NAME>
   ```
   For example, you can delete the Edge CR file using the command:
   ```shell
   kubectl delete cumulocityiotedge cumulocity-iot-edge
   ```
- Through the [sample manifest file](/files/edge-k8s/c8y-edge-manifest.yaml) that you used to deploy Edge. 

   For example, you can undeploy by using the command:
   
   ```shell
   kubectl delete -f c8y-edge-manifest.yaml
   ```
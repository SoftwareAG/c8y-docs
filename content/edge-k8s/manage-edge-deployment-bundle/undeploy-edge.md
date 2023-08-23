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
   For example, you can delete the cumulocity-iot-edge CR file using the command:
   ```shell
   kubectl delete cumulocityiotedge cumulocity-iot-edge
   ```
- Through the [Cumulocity IoT Edge manifest](/files/edge-k8s/cumulocity-iot-edge-manifest.yaml) file that you used to deploy Edge. 

   For example, you can undeploy by using the command:
   
   ```shell
   kubectl delete -f cumulocity-iot-edge.yaml
   ```
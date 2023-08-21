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
- Through the manifest file you used to deploy Edge. 

   For example, you can undeploy by using the command:
   
   ```shell
   kubectl delete -f cumulocity-iot-edge.yaml
   ```
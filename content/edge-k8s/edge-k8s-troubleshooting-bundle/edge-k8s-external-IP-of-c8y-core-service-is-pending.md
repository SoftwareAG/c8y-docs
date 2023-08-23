---
weight: 15
title: External IP of cumulocity-core service is <pending>
layout: redirect
---

External IP is not assigned to the `cumulocity-core` service. 

Output of `kubectl get service cumulocity-core --namespace <EDGE-CR-NAME>-core`:

```shell
NAME             TYPE           CLUSTER-IP          EXTERNAL-IP        PORT(S)                                      AGE 

cumulocity-core           LoadBalancer            X.X.X.X **REDACTED           <pending>                       443:31342/TCP,1883:32751/TCP,8883:32270/TCP  12m            
``` 
For more information, see [Assigning an external IP](/edge-k8s/installing-edge-on-k8/#assigning-an-external-ip).

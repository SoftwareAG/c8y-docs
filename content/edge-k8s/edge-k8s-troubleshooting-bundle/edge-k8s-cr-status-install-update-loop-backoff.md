---
weight: 10
title: Edge CR status InstallLoopBackOff or UpdateLoopBackOff
layout: redirect
---
After deploying or updating Edge, if the Edge CR status appears as **InstallationLoopBackOff** or **UpdateLoopBackOff**, as shown below: 

Output of `kubectl get cumulocityiotedge`:

```shell
NAME                   DOMAIN NAME     VERSION     STATUS     

cumulocity-iot-edge    myown.iot.com   1017.0.0    InstallLoopBackOff
``` 

Describe the Edge CR (cumulocity-iot-edge) `kubectl describe cumulocityiotedge <EDGE-CR-NAME>`.

In the events section, you will find the reasons for the install or update failure. For example: 

```shell
Name:         <EDGE-CR-NAME> 
Namespace:     
API Version:  edge.cumulocity.com/v1 
Kind:         CumulocityIoTEdge 

Status: 
  Deploying Generation:  x 

  State:  ValidationLoopBackOff 

Events: 
  Type     Reason                    Age    From               Message 
  ----     ------                    ----   ----               ------- 
  Normal   Validating                8m37s  cumulocityiotedge  validating 

  Normal   ValidationPassed          8m37s  cumulocityiotedge  validation passed 

  Normal   Installing                8m34s  cumulocityiotedge  installing 
…… 
….. 

  Normal   InstallLoopBackOff        1m00s  cumulocityiotedge  waiting for mongo server to be ready 
```

Check the logs of the Edge operator, MongoDB and Core pods to get more insights. 

The Edge operator logs: 

```shell
kubectl  logs --namespace cumulocityiotedge-operator-system deployment.apps/cumulocityiotedge-operator-controller-manager -c manager
```

MongoDB logs: 

```shell
kubectl logs --namespace <EDGE-CR-NAME>-mongodb logs statefulset.apps/edge-db-rs0 --all-containers --prefix 
```

Core logs: 

```shell
kubectl logs --namespace <EDGE-CR-NAME>-core logs statefulset.apps/c8ycore-sts --all-containers --prefix
```
---
weight: 20
title: Deploying Edge
layout: redirect
---

To use the Edge Kubernetes operator to deploy Edge, create a Kubernetes manifest file with an Edge Custom Resource (CR) which describes the Edge deployment. Then use `kubectl` to apply that configuration file to your Kubernetes cluster.

### Configuring storage

Before applying the manifest, ensure that the static [Persistent Volumes (PVs)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) fulfill the requirements of the Persistent Volume Claims (PVCs) made by Cumulocity IoT Edge. These PVs should either be provisioned by the Kubernetes Cluster administrator or, in the case of dynamic provisioning, ensure that your Kubernetes cluster is configured with an appropriate Storage Class. To define the desired Storage Class, utilize the `spec.storageClassName` field within the Edge Custom Resource (CR). 

PVs required to satisfy the PVCs mentioned in the table below:

|<div style="width:120px">Persistent volume</div>|<div style="width:250px">Persistent Volume Claim</div>|Description
|:---|:---|:---
|75 GB|`mongod-data-edge-db-rs0-0`|Claimed by the MongoDB server to retain application data. The default size is 75 GB, but this value can be adjusted using the `spec.mongodb.resources.requests.storage` field in the Edge CR.
|10 GB|`microservices-registry-data`|Claimed by the private registry to store microservice images.
|5 GB|`edge-logs`|Claimed by the Edge logging component for the storage of application and system logs.

{{< c8y-admon-info >}}
Ensure that the [Reclaim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming) policy is set to [Retain](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retain) to ensure that the associated storage asset within the external infrastructure remains intact even when the corresponding PV is deleted.
{{< /c8y-admon-info >}}

### Deploy Edge

Use the sample `cumulocity-iot-edge.yaml` manifest file with the Edge Custom Resource (CR) definition and Secrets necessary to deploy {{< product-c8y-iot >}} Edge.

For example, you can deploy the sample `cumulocity-iot-edge.yml`file using the command:

```bash
kubectl apply -f cumulocity-iot-edge.yaml
```
For more information about the structure and configuration options available in the Edge Custom Resource (CR), see [Edge Custom Resource Definition](/k8-edge/edge-custom-resource-definition/).

The CR defined in the sample manifest file deploys the Edge version 1017.0.0 named  "cumulocity-iot-edge", with the details below:
- myown.iot.com domain with self-signed tls certificates
- Cumulocity IoT Core and related pods in 'cumulocity-iot-edge-core' namespace
- thin-edge for connecting Edge to Cumulocity IoT cloud for remote management in 'cumulocity-iot-edge-thin-edge' namespace
- MongoDB server in the 'cumulocity-iot-edge-mongodb' namespace
- Private registry in the 'cumulocity-iot-edge-microservices-registry' namespace
- Apama and Smart Rules and other microservices in the 'cumulocity-iot-edge-microservices' namespace
- Administration, Cockpit, Device Management and Apama Streaming Analytics applications
- Logging components in the 'cumulocity-iot-edge-logging' namespace 

### Verify Edge deployment

Use `kubectl describe cumulocityiotedge <EDGE-CR-NAME>` to view the progress of the <EDGE-CR-NAME> deployment.

You can also follow the events raised for the Edge CR by using the command:

`kubectl get event --field-selector involvedObject.name=<EDGE-CR-NAME> --watch`

The **Events** section in the output of this command specifies the deployment progress and the **Status** section displays the generation of the CR which is being deployed and its current state. Once the deployment succeeds, the **Status** section also displays the generation of the CR which is deployed, version of the Edge, last deployed time/age, validation warnings, if any and some help commands for downloading the diagnostic logs, extracting the Root CA of the operator generated TLS certificates.

A sample status output:
```
Name:         <EDGE-CR-NAME> 
Kind:         CumulocityIoTEdge 

Metadata: 
  Creation Timestamp:  2023-08-11T00:00:01Z 
  Generation:          1 

Spec: 
  Version:             1017.0.0 
  License Key:         *************** 
  Company:             IoT Company 
  Domain:              myown.iot.com 
  Email:               myown@iot.com 
  Mongodb: 
    Credentials Secret Name:  mongodb-credentials-secret 

Status: 
  Deployed Generation:  1 
  Last Deployed Time:  2023-08-11T00:15:00Z 
  State:               Ready 
  Version:             1017.0.0 

  Warnings: 
    persistent volume reclaim policy of storage class [local-storage] is currently set to    [Delete] instead of the recommended value [Retain] 
    allow volume to expand setting of the storage class [local-storage] is currently set to [false] instead of the recommended value [true] 

  Help Commands: 
    download diagnostic logs:   
##########################################################################################################\ 

# Execute this script to download diagnostic logs into your local file system\ 
# Prerequisites:\ 
#  - kubectl tool to communicating with Kubernetes cluster's control plane in which Edge is deployed.\ 
#  - For configuration, kubectl looks for a file named config in the $HOME/.kube directory.\ 
#    You can specify other kubeconfig files by setting the KUBECONFIG environment variable.\ 
#########################################################################################################\ 
FILE_NAME="edge-diagnostic-archive-$(date +%Y%m%d%H%M%S).tar.gz" && \ 
kubectl exec -n edge-sample-logging logging-fluentd-0 -c fluentd -- tar -czvf /var/log/$FILE_NAME /var/log/edge && \ 
kubectl cp edge-sample-logging/logging-fluentd-0:/var/log/$FILE_NAME -c fluentd ./$FILE_NAME && \ 
kubectl exec -n edge-sample-logging logging-fluentd-0 -c fluentd -- rm /var/log/$FILE_NAME 
```

A sample set of installation events:
```
Events: 
  Type     Reason            Age    From               Message 
  ----     ------            ----   ----               ------- 
  Normal   Validating        15m    cumulocityiotedge  validating 
  Warning  Validating        15m    cumulocityiotedge  persistent volume reclaim policy of storage class [custom-sc] is currently set to [Delete] instead of the recommended value [Retain] 
  Warning  Validating        15m    cumulocityiotedge  allow volume to expand setting of the storage class [custom-sc] is currently set to [false] instead of the recommended value [true] 
  Normal   ValidationPassed  15m    cumulocityiotedge  validation passed 
  Normal   Installing        15m    cumulocityiotedge  installing 
………… 
………… 
  Normal   Installing        12m    cumulocityiotedge  finished installing mongo server 
………… 
………… 
  Normal   Installing        8m     cumulocityiotedge  finished installing core 
………… 
………… 
  Normal   Installing        5m     cumulocityiotedge  finished installing and updating microservices 
………… 
………… 
  Normal   Installing        2m     cumulocityiotedge  finished finished installing thin-edge 
………… 
  Normal   Ready             1m     cumulocityiotedge  installed successfully 
```

Before you continue, wait for the Edge CR status to reach the Ready state. 
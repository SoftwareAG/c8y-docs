---
weight: 36
title: MongoDB
layout: redirect
---

This field is necessary to specify the MongoDB admin credentials or to configure an externally hosted MongoDB server or to specify resource limits for the MongoDB server containers deployed by the operator.

|<div style="width:170px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|credentialsSecretName|Yes|String||Name of the Kubernetes Secret containing the admin credentials with which the operator managed MongoDB must be configured or the admin credentials of the externally hosted MongoDB server. For more information, see [MongoDB Credentials Secret](/edge-k8s/edge-custom-resource-definition/#k8-edge-mongodb-cred-secret). <p>**Note:** The operator retrieves this secret from the namespace corresponding to the name specified in the Edge CR. Ensure that this secret is created before initiating the Edge deployment or update process.
|connectionString|No|String|If not provided, the operator installs a single node MongoDB server and configures it with the admin credentials provided in `spec.mongodb.credentialsSecretName`|Connection string of the externally hosted MongoDB server. URI Format: `mongodb://host1[:port1][,...hostN[:portN]]`<br>**Note:** If you do not provide this value, the operator installs a single node MongoDB server. Once Edge is installed and configured to use the operator managed MongoDB, you cannot provide the `connectionString` to use an externally hosted MongoDB. 
|tlsSecretName|No|String||Secret for supplying the Certificate Authority (CA) certificate to trust. For more information, [External hosted MongoDB TLS Secret](/edge-k8s/edge-custom-resource-definition/#k8-edge-external-hosted-mongodb-tl-secret).<br>**Note:** The operator retrieves this secret from the namespace corresponding to the name specified in the Edge CR. Ensure that this secret is created before initiating the Edge deployment or update process.
|resources.limits|Yes|Structure|Defaults to CPU Limit: 3000m<br>Memory Limit: 6GB|Specify resource limits for the MongoDB server pod. For more information, see [Resource Limits Specification](/edge-k8s/edge-custom-resource-definition/#k8-edge-resources-limits-spec).
|resources.requests|No|Structure|Defaults to 75 GB|Specify the size of the Persistent Volume Claim (PVC) named `mongod-data-edge-db-rs0-0` made by MongoDB server for persisting application data. For more information, see [MongoDB storage size](/edge-k8s/edge-custom-resource-definition/#k8-edge-mongodb-storage-size).
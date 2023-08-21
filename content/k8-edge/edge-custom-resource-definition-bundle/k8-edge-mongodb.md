---
weight: 36
title: MongoDB
layout: redirect
---

This field is necessary to specify the MongoDB admin credentials or to configure an externally hosted MongoDB server or to specify resource limits for the MongoDB server containers deployed by the operator.

|<div style="width:150px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|credentialsSecretName|Yes|String||Name of the Kubernetes Secret containing the admin credentials with which the operator managed MongoDB must be configured or the admin credentials of the externally hosted MongoDB server. For more information, see [MongoDB Credentials Secret](/k8-edge/edge-custom-resource-definition/#k8-edge-mongodb-cred-secret). <p>**Note:** The operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.
|connectionString|No|String|If not provided, the operator installs a single node MongoDB server and configures it with the admin credentials provided in `spec.mongodb.credentialsSecretName`|Connection string of the externally hosted MongoDB server. URI Format: `mongodb://host1[:port1][,...hostN[:portN]]`
|tlsSecretName|No|String||Secret for supplying the Certificate Authority (CA) certificate to trust. For more information, [External hosted MongoDB TLS Secret](/k8-edge/edge-custom-resource-definition/#k8-edge-external-hosted-mongodb-tl-secret).<br>**Note:** The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.
|resources.limits|Yes|Structure|Defaults to CPU Limit: 3000m<br>Memory Limit: 6GB|Specify resource limits for the {{< product-c8y-iot >}} Core container. For more information, see [Resource Limits Specification](/k8-edge/edge-custom-resource-definition/#k8-edge-resources-limits-spec).
|resources.requests|No|Structure|Defaults to 75 GB|Specify the size of the Persistent Volume Claim (PVC) named `mongod-data-edge-db-rs0-0` made by MongoDB server for persisting application data. For more information, see [MongoDB storage size](/k8-edge/edge-custom-resource-definition/#k8-edge-mongodb-storage-size).
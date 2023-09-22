---
weight: 36
title: MongoDB
layout: redirect
---

This field is necessary for one or more of the following reasons:

* To specify the MongoDB admin credentials.
* To configure an externally hosted MongoDB server.
* To specify resource limits for the MongoDB server containers deployed by the Operator.

|<div style="width:170px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|credentialsSecretName|No|String|Defaults to **`databaseAdmin`** and **`admin-pass`** as the database admin user and password for the Operator managed MongoDB or fails with validation error for the externally hosted MongoDB server.<br><br>{{< c8y-admon-info >}}For the MongoDB managed by the Operator, it is recommended to provide the database admin credentials secret, rather than relying on the default credentials assigned by the Operator.{{< /c8y-admon-info >}}|Name of the Kubernetes Secret containing the database admin credentials with which the Operator managed MongoDB must be configured or the database admin credentials of the externally hosted MongoDB server. For more information, see [MongoDB Credentials Secret](/edge-k8s/edge-custom-resource-definition/#k8-edge-mongodb-cred-secret). <p>{{< c8y-admon-info >}}The Operator retrieves this secret from the **`EDGE-CR-NAMESPACE`**. Ensure that this secret is created before initiating the {{< product-c8y-iot >}} Edge deployment or update process.{{< /c8y-admon-info >}}
|connectionString|No|String|If not provided, the Operator installs a single node MongoDB server and configures it with the admin credentials provided in `spec.mongodb.credentialsSecretName`|Connection string of the externally hosted MongoDB server. URI Format: `mongodb://host1[:port1][,...hostN[:portN]]`<br>{{< c8y-admon-info >}}If you do not provide this value, the Operator installs a single node MongoDB server. Once {{< product-c8y-iot >}} Edge is installed and configured to use the Operator managed MongoDB, you cannot provide the `connectionString` to use an externally hosted MongoDB.{{< /c8y-admon-info >}}
|tlsSecretName|No|String||Secret for supplying the Certificate Authority (CA) certificate to trust. For more information, [External hosted MongoDB TLS Secret](/edge-k8s/edge-custom-resource-definition/#k8-edge-external-hosted-mongodb-tl-secret).<br>{{< c8y-admon-info >}}The Operator retrieves this secret from the **`EDGE-CR-NAMESPACE`**. Ensure that this secret is created before initiating the {{< product-c8y-iot >}} Edge deployment or update process.{{< /c8y-admon-info >}}
|resources.limits|Yes|Structure|Defaults to CPU Limit: 3000m<br>Memory Limit: 6GB|Specify resource limits for the MongoDB server pod. For more information, see [Resource Limits Specification](/edge-k8s/edge-custom-resource-definition/#k8-edge-resources-limits-spec).
|resources.requests|No|Structure|Defaults to 75 GB|Specify the size of the Persistent Volume Claim (PVC) named `mongod-data-edge-db-rs0-0` made by MongoDB server for persisting application data. For more information see [MongoDB storage size](/edge-k8s/edge-custom-resource-definition/#k8-edge-mongodb-storage-size).
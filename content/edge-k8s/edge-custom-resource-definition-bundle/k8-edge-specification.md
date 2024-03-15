---
weight: 15
title: Specification
layout: redirect
---

This section defines the Edge deployment's configurations.

|<div style="width:150px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|version|Yes|String| |Edge version to deploy.<br><br>For example, 1017.0.0 for 10.17 and 1017.0.1 for a fix-1 of 10.17.
|licenseKey|Yes|String||Edge license key.
|company|Yes|String||Name of the "edge" tenant, for example, the company's name.
|domain|Yes|String||A fully qualified domain name. <p>For example, *myown.iot.com*. Here, you must have the Edge license for the domain name *iot.com* or *myown.iot.com*.
|tlsSecretName| No|String|The Edge Operator generates and assigns self-signed certificates.|Name of the Kubernetes secret containing the TLS key and certificates for the name specified in the `spec.domain` field. See [TLS secret](#tls-secret) for details.<p><p>**Info:** The Edge Operator retrieves this secret from the **`EDGE-CR-NAMESPACE`**. Ensure that this secret is created before initiating the Edge deployment or update process.
|email|Yes|String||Email used for the admin user.
|cloudTenant|No|Structure||Cloud tenant details to configure and manage Edge remotely. See [Cloud Tenant](/edge-k8s/edge-custom-resource-definition/#k8-edge-cloud-tenant) for details.
|storageClassName|No|String||The Edge Operator requests three PVCs, as outlined below.<br>- 75 GB, PVC named `mongod-data-edge-db-rs0-0` made by MongoDB server for persisting application data. 75 GB is the default, and its value can be configured through the Edge CR field `spec.mongodb.resources.requests.storage`.<br>- 10 GB, PVC named `microservices-registry-data` made by the private registry for persisting microservice images.<br>- 5 GB, PVC named `edge-logs` made by the Edge logging component for persisting application and system logs.<p><p>Each of these PVCs utilizes the StorageClass if specified within the **`storageClassName`** field of the Edge CR.<br>- In case you omit the **`storageClassName`**, the Edge Operator requests PVCs without a StorageClass, thereby instructing Kubernetes to utilize the default StorageClass configured in the cluster.<br>- If you explicitly specify an empty StorageClass as **`""`**, the Edge Operator requests PVCs with an empty StorageClass, thereby instructing Kubernetes to carry out static provisioning.<br>- Finally, if you specify the name of an existing StorageClass for which dynamic provisioning is enabled, the Operator requests PVCs with that same class name, thereby instructing Kubernetes to utilize dynamic provisioning according to the specified class.<p><p>**Info:** This value is used only during the Edge installation and can’t be changed for existing installations.
|core|No|Structure||{{< product-c8y-iot >}} platform configurations. For more information, see [{{< product-c8y-iot >}} Core configurations](/edge-k8s/edge-custom-resource-definition/#c8y-core-config).
|mongodb|Yes|Structure||Configurations needed to deploy the MongoDB server managed by the Edge Operator or connect to an external one. For more information, see [MongoDB](/edge-k8s/edge-custom-resource-definition/#k8-edge-mongodb).
|microservices| No|Array of Structure|The Edge Operator deploys all the default {{< product-c8y-iot >}} microservices, which include the Apama, Smart Rules, OPCUA Management Server microservices.|Specify resources to allocate to each of the default {{< product-c8y-iot >}} microservices deployed. For more information, see [Microservices](/edge-k8s/edge-custom-resource-definition/#k8-edge-microservices).

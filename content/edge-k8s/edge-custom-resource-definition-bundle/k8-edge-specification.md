---
weight: 15
title: Specification
layout: redirect
---

This section defines the Edge deployment's configurations.

|<div style="width:150px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|version|Yes|String| |{{< product-c8y-iot >}} Edge version to deploy.
|licenseKey|Yes|String||{{< product-c8y-iot >}} Edge license key.
|company|Yes|String||Name of the edge tenant, for example, the company's name.
|domain|Yes|String||A fully qualified domain name. <p>For example, “myown.iot.com”. Here, you must have the Edge license for the domain name iot.com or myown.iot.com.
|tlsSecretName| No|String|The operator generates and assigns self-signed certificates.|Name of the Kubernetes Secret containing the TLS key and certificates for the name specified in the `spec.domain` field. See [TLS Secret](#tls-secret) for details. <p>**Note:** The operator retrieves this secret from the namespace corresponding to the name specified in the Edge CR. Ensure that this secret is created before initiating the Edge deployment or update process.
|email|Yes|String||Email used for the admin user. 
|cloudTenant|No|Structure||Cloud tenant details to configure and manage Edge remotely. See [Cloud Tenant](/edge-k8s/edge-custom-resource-definition/#k8-edge-cloud-tenant) for details.
|storageClassName|No|String||Name of the [Storage Class](https://kubernetes.io/docs/concepts/storage/storage-classes/) that your Kubernetes administrator provisioned and configured for dynamic provisioning of the PVs to occur for satisfying the below three PVCs:<br><br>- 75 GB, PVC named `mongod-data-edge-db-rs0-0` made by MongoDB server for persisting application data. 75 GB is default, and its value can be configured through the Edge CR field `spec.mongodb.resources.requests.storage`.<br><br>- 10 GB, PVC named `microservices-registry-data` made by the private registry for persisting microservice images.<br><br>- 5 GB, PVC named `edge-logs` made by the Edge logging component for persisting application and system logs.<br><br>If not provided, you must ensure that the Kubernetes cluster is configured with the three PVs to satisfy the PVCs described above.<br>**Note:** This value is used only during the Edge installation and can’t be changed for existing installations.
|core|No|Structure||{{< product-c8y-iot >}} platform configurations. For more information, see [{{< product-c8y-iot >}} Core configurations](/edge-k8s/edge-custom-resource-definition/#c8y-core-config).
|mongodb|Yes|Structure||Configurations needed to deploy the operator managed MongoDB server or connect to an external one. For more information, see [MongoDB](/edge-k8s/edge-custom-resource-definition/#k8-edge-mongodb).
|microservices| No|Array of Structure|The operator deploys all the default Cumulocity microservices, which include the Apama, Smart Rules, SSL Management Server, Device Simulator and OPCUA Management Server microservices.|Specify resources to allocate to each of the default Cumulocity microservices deployed. For more information, see [Microservices](/edge-k8s/edge-custom-resource-definition/#k8-edge-microservices).

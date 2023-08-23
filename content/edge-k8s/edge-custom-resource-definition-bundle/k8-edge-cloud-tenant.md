---
weight: 26
title: Cloud tenant
layout: redirect
---

{{< product-c8y-iot >}} Edge can be managed, configured, and monitored remotely through a {{< product-c8y-iot >}} cloud tenant. You can control and troubleshoot your Edge deployments remotely. 

To enable this, you must first register Edge as a device in the {{< product-c8y-iot >}} cloud tenant. You can register Edge by providing the {{< product-c8y-iot >}} cloud tenant URI, and optionally, TLS key and certificate chain with which Edge connects to cloud through MQTT protocol using X.509 certificate for authentication. If you do not provide the TLS key and the certificate chain, the Edge operator uses an internally generated TLS key and certificate for identifying Edge as a device to the cloud tenant. For completing the registration process, you must sign into your cloud tenant and follow the steps described in [Managing trusted certificates](/users-guide/device-management/#managing-trusted-certificates) to add the Certificate Authority (CA) certificate to the trusted certificate list of your tenant. For more information, see [Device certificates](/device-integration/mqtt/#device-certificates).

In case you let the {{< product-c8y-iot >}} Edge use the internally generated TLS key and certificates, you can download the CA certificate by using the command following command:

```shell
kubectl --namespace cumulocityiotedge-operator-system get secrets internal-generated-tls-certificates --output jsonpath='{ .data.ca\.crt }' | base64 -d
```

Once registered, you can access your Edge remotely as a device, monitor its metrics, upgrade its version and collect diagnostic data remotely.

|<div style="width:150px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|domain|Yes|String||{{< product-c8y-iot >}} cloud tenant domain. For example, `<tenantid>.cumulocity.com`|
|tlsSecretName|No|string||Name of the Kubernetes Secret containing the TLS key and the certificate chain with which Edge connects to the cloud through MQTT protocol using X.509 certificate for authentication. See [TLS Secret](/edge-k8s/edge-custom-resource-definition/#tls-secret) for details.<br>**Note**: The operator retrieves this secret from the namespace corresponding to the name specified in the Edge CR. Ensure that this secret is created before initiating the Edge deployment or update process.
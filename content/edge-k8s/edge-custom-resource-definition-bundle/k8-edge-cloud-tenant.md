---
weight: 26
title: Cloud tenant
layout: redirect
---

{{< product-c8y-iot >}} Edge can be managed, configured, and monitored remotely through a {{< product-c8y-iot >}} cloud tenant. You can control and troubleshoot your {{< product-c8y-iot >}} Edge deployments remotely. 

To enable this, first register {{< product-c8y-iot >}} Edge as a device in the {{< product-c8y-iot >}} cloud tenant. You can register {{< product-c8y-iot >}} Edge by providing the {{< product-c8y-iot >}} cloud tenant URI, and optionally, TLS key and certificate chain with which {{< product-c8y-iot >}} Edge connects to cloud through MQTT protocol using a X.509 certificate for authentication. If you do not provide the TLS key and the certificate chain, the Edge Operator uses an internally generated TLS key and certificate for identifying {{< product-c8y-iot >}} Edge as a device in the cloud tenant. For completing the registration process, sign into your cloud tenant and follow the steps described in [Managing trusted certificates](/users-guide/device-management/#managing-trusted-certificates) to add the Certificate Authority (CA) certificate to the trusted certificate list of your tenant. For more information, see [Device certificates](/device-integration/mqtt/#device-certificates).

In case you let the {{< product-c8y-iot >}} Edge use the internally generated TLS key and certificates, you can download the CA certificate by using the command below:

```shell
kubectl get edge c8yedge -n c8yedge --output jsonpath='{.status.helpCommands.fetchGeneratedCACrt}' | sh
```
{{< c8y-admon-info >}}
Substitute the {{< product-c8y-iot >}} Edge name and namespace name *c8yedge* in the command above with the specific {{< product-c8y-iot >}} Edge name and namespace name you have specified in your Edge CR. 
{{< /c8y-admon-info >}}

Once registered, you can access your {{< product-c8y-iot >}} Edge remotely as a device, monitor its metrics, upgrade its version and collect diagnostic data remotely.

|<div style="width:150px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|domain|Yes|String||{{< product-c8y-iot >}} cloud tenant domain. For example, `<tenantid>.cumulocity.com`|
|tlsSecretName|No|string||The name of the Kubernetes secret containing the TLS key and the certificate chain with which {{< product-c8y-iot >}} Edge connects to the cloud through MQTT protocol using a X.509 certificate for authentication. For more information, see [TLS secret](/edge-k8s/edge-custom-resource-definition/#tls-secret) for details.<br><br>**Note:** The Edge Operator retrieves this secret from the **`EDGE-CR-NAMESPACE`**. Ensure that this secret is created before initiating the {{< product-c8y-iot >}} Edge deployment or update process.

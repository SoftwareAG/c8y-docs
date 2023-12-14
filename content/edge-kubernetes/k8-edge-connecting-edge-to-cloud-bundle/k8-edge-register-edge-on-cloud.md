---
weight: 5
title: Registering Cumulocity IoT Edge in the cloud tenant
layout: redirect
---

To manage, configure, and monitor remotely through a {{< product-c8y-iot >}} cloud tenant, you must first register {{< product-c8y-iot >}} Edge as a device in the {{< product-c8y-iot >}} cloud tenant. You can register {{< product-c8y-iot >}} Edge by providing the {{< product-c8y-iot >}} cloud tenant URI, and optionally, TLS key and certificate chain with which {{< product-c8y-iot >}} Edge connects to cloud through MQTT protocol using an X.509 certificate for authentication. If you do not provide the TLS key and the certificate chain, the Edge Operator uses an internally generated TLS key and certificate for identifying {{< product-c8y-iot >}} Edge as a device to the cloud tenant. For completing the registration process, you must sign into your cloud tenant and follow the steps described in [Managing trusted certificates](/device-management-application/managing-device-data/#managing-trusted-certificates) to add the Certificate Authority (CA) certificate to the trusted certificate list of your tenant.

In case you let {{< product-c8y-iot >}} Edge use the internally generated TLS key and certiﬁcates, you can download the CA certiﬁcate by using the following command:

```shell
kubectl get edge c8yedge -n c8yedge --output jsonpath='{.status.helpCommands.fetchGeneratedCACrt}' | sh
```
{{< c8y-admon-info >}}
Substitute the namespace name *c8yedge* in the command above with the specific namespace name you have specified in your Edge CR.
{{< /c8y-admon-info >}}

Once registered, the {{< product-c8y-iot >}} Edge deployment appears as a device named after the domain name of your {{< product-c8y-iot >}} Edge instance. For example, if you have configured your domain name as **myown.iot.com**, the {{< product-c8y-iot >}} Edge deployment appears as **myown.iot.com** .

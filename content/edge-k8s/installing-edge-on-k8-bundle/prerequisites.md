---
weight: 10
title: System requirements
layout: redirect
---

|Item|Details|
|:---|:---|
|Kubernetes|Version 1.25.x has been tested (with potential compatibility for subsequent versions) and is supported across the following platforms:<br>- [K3s - Lightweight Kubernetes](https://docs.k3s.io/installation). You must configure K3s to be able to deploy Edge. For more information, see [K3s installation and configuration](/edge-k8s/installing-edge-on-k8/#k3s-installation-and-configuration). <br><br>- [Kubernetes - K8s](https://kubernetes.io/docs/setup/)<br><br>- [Amazon Elastic Kubernetes Service (EKS)](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)<br><br>- [Microsoft Azure Kubernetes Service](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli)|
|{{< product-c8y-iot >}} Edge license file|To request the license file for {{< product-c8y-iot >}} Edge, please contact the logistics team for your region:<br> - North and South America: LogisSrvus@softwareagusa.com <br>- All Other Regions: LogisticsServiceCenterGER@softwareag.com <br>In the email, you must include <br> - your company name, under which the license has been bought <br> - the domain name (for example, myedge.domain.com), where {{< product-c8y-iot >}} Edge will be reachable<br>For more information, see [Domain name validation for Edge license key generation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).|
|{{< product-c8y-iot >}} Edge operator repository credentials|You will receive the Edge operator repository credentials along with the {{< product-c8y-iot >}} Edge license.|
|TLS/SSL key and TLS/SSL certificate|Optional. Use your internal or an external CA (Certification Authority) to generate these files. Ensure that the TLS/SSL certificate has the complete certificate chain in the right order.<br>**Info:** The .crt and .key files must be in the PEM format and the .key file must not be encrypted.|
|Edge cloud remote access|To connect and manage one (or multiple) Edge deployments to your {{< product-c8y-iot >}} cloud tenant, you need an active {{< product-c8y-iot >}} {{< standard-tenant >}} with the Data Broker and Cloud Remote Access extensions.<br>**Info:** The Edge cloud remote access is an optional feature in {{< product-c8y-iot >}} Edge.|

### K3s installation and configuration

To install the latest version of K3S, run the command: 

```shell
curl -sfL https://get.k3s.io | sh -s - --disable=traefik --protect-kernel-defaults true --write-kubeconfig-mode 644 --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook
```
To install K3S version 1.25.11, run the command: 

```shell
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.25.11+k3s1 sh -s - --disable=traefik --protect-kernel-defaults true --write-kubeconfig-mode 644 --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook
```

For configuration options, see [K3s configuration options](https://docs.k3s.io/installation/configuration).

- Add `--disable=traefik` in the install command to disable Traefik to avoid port conflicts between Traefik and cumulocity-core service, as both are LoadBalancer type services which expose port 443.
- Add `--kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook` to enable admission controllers. The flag is set to enable the `ValidatingAdmissionWebhook` and `MutatingAdmissionWebhook` admission controllers, as Edge requires them. See [https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/).
- Add `--protect-kernel-defaults` true to protect the default kernel settings on the host system. It prevents modifications to critical kernel parameters by container workloads running in Kubernetes. For more information, see [https://docs.k3s.io/security/hardening-guide#host-level-requirements](https://docs.k3s.io/security/hardening-guide#host-level-requirements). 

## Hardware requirements
|Hardware|Configuration|
|:---|:---|
|Kubernetes Node|Single node with:<br>- CPU: 6 cores<br>- RAM: 10 GB|
|Disk space|Three static Persistent Volumes (PV) or a Storage Class configured with dynamic provisioning to bind.<br>- 75 GB for the Persistent Volume Claim (PVC) made for MongoDB (configurable through the Custom Resource).<br>- 10 GB for the Persistent Volume Claim (PVC) made for the Private Registry to host custom microservices.<br>- 5 GB for the Persistent Volume Claim (PVC) made for application logs.|

These are the minimum system requirements for deploying {{< product-c8y-iot >}} Edge. If the microservice requires additional system resources, you must configure the system requirements accordingly in addition to minimum system requirements. For example, if the microservice requires 2 CPU cores and 4 GB of RAM, then the Kubernetes worker node must have 8 CPU cores (6 cores for standard workloads + 2 cores for your microservice) and 14 GB of RAM (10 GB for standard workloads + 4 GB for your microservice).

## Supported browsers

* Microsoft Edge (latest Chromium-based version)
* Mozilla Firefox (latest Extended Support Release [1])
* Google Chrome [2]
* Internet Explorer 11 [3]

[1] Only the latest Extended Support Release of Mozilla Firefox is explicitly supported. Possible incompatibilities will be removed during the regular maintenance process of {{< product-c8y-iot >}}. Due to frequent upgrades of the Mozilla Firefox consumer release, the compatibility of Edge with other versions of Mozilla Firefox cannot be guaranteed.

[2] The Google Chrome support is based on Google Chrome Version 84. Due to frequent version upgrades of Google Chrome, compatibility of Edge with future versions of Google Chrome cannot be fully guaranteed. Possible incompatibilities will be removed during the regular maintenance process of {{< product-c8y-iot >}}.

You may also use recent smartphone and tablet web browsers. We have tested our products with the following mobile web browsers:

* Chrome on Android (latest version) on Galaxy smartphones and tablets
* Safari on iOS (latest version) on Apple iPhone and iPad

{{< c8y-admon-info >}}
{{< product-c8y-iot >}} Edge on mobile devices shows some limitations.
The limitations could be the following:

* The usage may be constrained by the memory and the processing power available on the devices. <br>  
For example, loading graphs with large amounts of data points may make the mobile device unresponsive.
* Using the private mode on browsers may not work.
* The [Streaming Analytics application](/streaming-analytics/overview-streaming-analytics/) does not support mobile or touch devices.
{{< /c8y-admon-info >}}
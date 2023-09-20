---
weight: 10
title: Prerequisites
layout: redirect
---

|<div style="width:140px">Item</div>|Details|
|:---|:---|
|Hardware|CPU: 6 cores<br>RAM: 10 GB<br>CPU Architecture: x86-64 <br><br>{{< c8y-admon-info >}}These are the minimum system requirements for deploying {{< product-c8y-iot >}} Edge. If a custom microservice requires additional resources, you must configure the system accordingly in addition to the minimum requirements. For example, if a custom microservice requires 2 CPU cores and 4 GB of RAM, then the Kubernetes node must have 8 CPU cores (6 cores for standard workloads + 2 cores for your microservice) and 14 GB of RAM (10 GB for standard workloads + 4 GB for your microservice).{{< /c8y-admon-info >}}|
|Kubernetes|Version 1.25.x has been tested (with potential compatibility for subsequent versions) and is supported across the following platforms:<br>- [Lightweight Kubernetes (K3s)](https://docs.k3s.io/installation). To enable the proper functioning of the Edge Operator on K3s, you must install K3s with the following configuration options. For more information, see [Special instructions for K3s](/edge-k8s/installing-edge-on-k8/#special-instructions-for-k3s). <br>- [Kubernetes (K8s)](https://kubernetes.io/docs/setup/)<br>- [Amazon Elastic Kubernetes Service (EKS)](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)<br>- [Microsoft Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli)|
|Helm Version 3.x|Refer to [Installing Helm](https://helm.sh/docs/intro/install/) for the installation instructions.| 
|Disk space|Three static Persistent Volumes (PV) or a Storage Class configured with dynamic provisioning to bind.<br>- 75 GB for the Persistent Volume Claim (PVC) made for MongoDB (configurable through the Custom Resource).<br>- 10 GB for the Persistent Volume Claim (PVC) made for the Private Registry to host custom microservices.<br>- 5 GB for the Persistent Volume Claim (PVC) made for application logs.<br>For more information about configuring the storage, see [Configuring storage](/edge-k8s/installing-edge-on-k8/#configuring-storage).|
|{{< product-c8y-iot >}} Edge license file|To request the license file for {{< product-c8y-iot >}} Edge, please contact the logistics team for your region:<br> - North and South America: LogisSrvus@softwareagusa.com <br>- All Other Regions: LogisticsServiceCenterGER@softwareag.com <br>In the email, you must include <br> - your company name, under which the license has been bought <br> - the domain name (for example, myedge.domain.com), where {{< product-c8y-iot >}} Edge will be reachable<br>For more information, see [Domain name validation for Edge license key generation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).|
|{{< product-c8y-iot >}} Edge Operator repository credentials|You will receive the Edge Operator repository credentials along with the {{< product-c8y-iot >}} Edge license.|
|TLS/SSL key and TLS/SSL certificate|Optional. Use your internal or an external CA (Certification Authority) to generate these files. Ensure that the TLS/SSL certificate has the complete certificate chain in the right order.<br><br>{{< c8y-admon-info >}} The .crt and .key files must be in the PEM format and the .key file must not be encrypted.{{< /c8y-admon-info >}}|
|Edge cloud remote access|To connect and manage one (or multiple) Edge deployments to your {{< product-c8y-iot >}} cloud tenant, you need an active {{< product-c8y-iot >}} {{< standard-tenant >}} with the Data Broker and Cloud Remote Access extensions.<br><br>{{< c8y-admon-info >}} The Edge cloud remote access is an optional feature in {{< product-c8y-iot >}} Edge.{{< /c8y-admon-info >}}|

### Configuring storage

Before applying the manifest, ensure that the static [Persistent Volumes (PVs)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) fulfill the requirements of the Persistent Volume Claims (PVCs) made by Edge. These PVs should either be provisioned by the Kubernetes Cluster administrator or, in the case of dynamic provisioning, ensure that your Kubernetes cluster is configured with an appropriate Storage Class. You can specify the StorageClass to the Edge Operator by configuring the `spec.storageClassName` field in the Edge CR.

PVs required to satisfy the PVCs mentioned in the table below:

|<div style="width:120px">Persistent volume</div>|<div style="width:250px">Persistent Volume Claim</div>|Description
|:---|:---|:---
|75 GB|`mongod-data-edge-db-rs0-0`|Claimed by the MongoDB server to retain application data. The default size is 75 GB, but this value can be adjusted using the `spec.mongodb.resources.requests.storage` field in the [Edge CR](/files/edge-k8s/c8y-edge-manifest.yaml).
|10 GB|`microservices-registry-data`|Claimed by the private docker registry to store microservice images.
|5 GB|`edge-logs`|Claimed by the {{< product-c8y-iot >}} Edge logging component to store the application and system logs.

{{< c8y-admon-info >}}
Ensure that the [Reclaim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming) policy is set to [Retain](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retain) to ensure that the associated storage asset within the external infrastructure remains intact even when the corresponding PV is deleted.
{{< /c8y-admon-info >}}

### Special instructions for K3s

To enable the proper functioning of the {{< product-c8y-iot >}} Edge Operator on K3s, you must install K3s with the following configuration options.

Create a file with the filename  `/etc/sysctl.d/90-kubelet.conf` and add the snippet below.

```shell
vm.panic_on_oom=0 
vm.overcommit_memory=1 
kernel.panic=10 
kernel.panic_on_oops=1 
```
Run the command `sudo run sysctl -p /etc/sysctl.d/90-kubelet.conf`.

To install the latest version of K3s, run the command: 

```shell
curl -sfL https://get.k3s.io | sh -s - --disable=traefik --protect-kernel-defaults true --write-kubeconfig-mode 644 --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook
```

To install K3s version 1.25.12, run the command: 

```shell
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.25.12+k3s1 sh -s - --disable=traefik --protect-kernel-defaults true --write-kubeconfig-mode 644 --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook
```
For configuration options, see [K3s configuration options](https://docs.k3s.io/installation/configuration).

- Add `--disable=traefik` in the install command to disable Traefik to avoid port conflicts between Traefik and cumulocity-core service, as both are LoadBalancer type services which expose port 443.
- Add `--kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook` to enable admission controllers. The flag is set to enable the `ValidatingAdmissionWebhook` and `MutatingAdmissionWebhook` admission controllers, as Edge requires them. See [https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/).
- Add `--protect-kernel-defaults` true to protect the default kernel settings on the host system. It prevents modifications to critical kernel parameters by container workloads running in Kubernetes. For more information, see [https://docs.k3s.io/security/hardening-guide#host-level-requirements](https://docs.k3s.io/security/hardening-guide#host-level-requirements). 
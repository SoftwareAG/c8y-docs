---
weight: 10
title: Prerequisites
layout: redirect
---

|<div style="width:140px">Item</div>|Details|
|:---|:---|
|Hardware|CPU: 6 cores<br>RAM: 10 GB<br>CPU Architecture: x86-64 <br><br>**Note:** These are the minimum system requirements for deploying {{< product-c8y-iot >}} Edge. If a custom microservice requires additional resources, you must configure the system accordingly in addition to the minimum requirements. For example, if a custom microservice requires 2 CPU cores and 4 GB of RAM, then the Kubernetes node must have 8 CPU cores (6 cores for standard workloads + 2 cores for your microservice) and 14 GB of RAM (10 GB for standard workloads + 4 GB for your microservice).|
|Kubernetes|Version 1.25.x has been tested (with potential compatibility for subsequent versions) and is supported across the following platforms:<br>- [Lightweight Kubernetes (K3s)](https://docs.k3s.io/installation). To enable the proper functioning of the Edge Operator on K3s, you must install K3s with the following configuration options. For more information, see [Special instructions for K3s](/edge-k8s/installing-edge-on-k8/#special-instructions-for-k3s). <br>- [Kubernetes (K8s)](https://kubernetes.io/docs/setup/)<br>- [Amazon Elastic Kubernetes Service (EKS)](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)<br>- [Microsoft Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli).<br><br>**Note:** {{< product-c8y-iot >}} Edge on Kubernetes has undergone testing on the Kubernetes platforms mentioned above, using the Containerd, CRI-O, and Docker container runtimes.|
|Helm version 3.x|Refer to [Installing Helm](https://helm.sh/docs/intro/install/) for the installation instructions.|
|Disk space|Three static Persistent Volumes (PV) or a Storage Class configured with dynamic provisioning to bind.<br>- 75 GB for the Persistent Volume Claim (PVC) made for MongoDB (configurable through the Custom Resource).<br>- 10 GB for the Persistent Volume Claim (PVC) made for the Private Registry to host custom microservices.<br>- 5 GB for the Persistent Volume Claim (PVC) made for application logs.<br>For more information about configuring the storage, see [Configuring storage](/edge-k8s/installing-edge-on-k8/#configuring-storage).|
|{{< product-c8y-iot >}} Edge license file|To request the license file for {{< product-c8y-iot >}} Edge, please contact the logistics team for your region:<br> - North and South America: LogisSrvus@softwareagusa.com <br>- All Other Regions: LogisticsServiceCenterGER@softwareag.com <br>In the email, you must include <br> - Your company name, under which the license has been bought <br> - The domain name (for example, myedge.domain.com), where {{< product-c8y-iot >}} Edge will be reachable<br>For more information, see [Domain name validation for Edge license key generation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).|
|The Edge Operator repository credentials|You will receive the Edge Operator repository credentials along with the {{< product-c8y-iot >}} Edge license.|
|TLS/SSL key and TLS/SSL certificate|Optional. Use your internal or an external CA (Certification Authority) to generate these files. Ensure that the TLS/SSL certificate has the complete certificate chain in the right order.<p>**Note:** The .crt and .key files must be in the PEM format and the .key file must not be encrypted.|
|Edge cloud remote access|To connect and manage one (or multiple) {{< product-c8y-iot >}} Edge deployments to your {{< product-c8y-iot >}} cloud tenant, you need an active {{< product-c8y-iot >}} {{< standard-tenant >}} with the Data Broker and Cloud Remote Access extensions.<br><br>**Note:** The {{< product-c8y-iot >}} Edge cloud remote access is an optional feature in {{< product-c8y-iot >}} Edge.|

### Configuring storage

Before applying the manifest, ensure that the static [Persistent Volumes (PVs)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) fulfill the requirements of the Persistent Volume Claims (PVCs) made by Edge. These PVs should either be provisioned by the Kubernetes Cluster administrator or, in the case of dynamic provisioning, ensure that your Kubernetes cluster is configured with an appropriate Storage Class. You can specify the StorageClass to the Edge Operator by configuring the `spec.storageClassName` field in the Edge CR.

PVs required to satisfy the PVCs mentioned in the table below:

|<div style="width:120px">Persistent volume</div>|<div style="width:250px">Persistent Volume Claim</div>|Description
|:---|:---|:---
|75 GB|`mongod-data-edge-db-rs0-0`|Claimed by the MongoDB server to retain application data. The default size is 75 GB, but this value can be adjusted using the `spec.mongodb.resources.requests.storage` field in the Edge CR file.
|10 GB|`microservices-registry-data`|Claimed by the private docker registry to store microservice images.
|5 GB|`edge-logs`|Claimed by the {{< product-c8y-iot >}} Edge logging component to store the application and system logs.

{{< c8y-admon-info >}}
Ensure that the [Reclaim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming) policy is set to [Retain](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retain) to ensure that the associated storage asset within the external infrastructure remains intact even when the corresponding PV is deleted.
{{< /c8y-admon-info >}}





Kubernetes makes physical storage devices available to your cluster in the form of two API resources, PersistentVolume and PersistentVolumeClaim. 

A *PersistentVolume* (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using [Storage Classes](https://kubernetes.io/docs/concepts/storage/storage-classes/). It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system.

 A *PersistentVolumeClaim* (PVC) is a request for storage by a user. PVCs consume PV resources. Claims can request specific size and access modes (for example, they can be mounted with access modes ReadWriteOnce, ReadOnlyMany or ReadWriteMany).

PVs represent cluster resources, while PVCs serve as requests for these resources and also serve as validation checks for the resource they request. Provisioning PVs can be done in two ways: statically or dynamically.

- **Static provisioning**: In this method, a cluster administrator manually creates PVs, specifying details about the actual storage available for cluster users. These PVs are registered in the Kubernetes API and are ready for consumption.

- **Dynamic provisioning**: When none of the statically created PVs match a PVC's requirements, the cluster can automatically provision storage on-demand, specifically tailored for the PVC. This dynamic provisioning relies on Storage Classes. To trigger dynamic provisioning, the PVC must request a Storage Class, and the administrator must have set up and configured that class accordingly. Claims that request an empty string (“”) for the class effectively disable dynamic provisioning for themselves. If no Storage Class is specified in a claim, it falls back to using a default storage class if one is configured in the cluster. To enable a default storage class, the cluster administrator must activate the `DefaultStorageClass` [admission controller](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#defaultstorageclass) on the API server. This can be achieved, for instance, by ensuring that DefaultStorageClass is included in the comma-delimited, ordered list of values for the --enable-admission-plugins flag of the API server component. For more details on API server command-line flags, refer to the [kube-apiserver](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/) documentation.

The Edge Operator requests three PVCs, as outlined in the table below. Each of these PVCs utilizes the StorageClass specified within the **`spec.storageClassName`** field of the Edge CR.

- In case you omit the **`spec.storageClassName`**, the Operator requests PVCs without a Storage Class, thereby instructing Kubernetes to utilize the default Storage Class configured in the cluster.

- If you explicitly specify an empty Storage Class as **`""`**, the Operator requests PVCs with an empty Storage Class, thereby instructing Kubernetes to carry out static provisioning.

- Finally, if you specify the name of an existing Storage Class for which dynamic provisioning is enabled, the Operator requests PVCs with that same class name, thereby instructing Kubernetes to utilize dynamic provisioning according to the specified class.

|<div style="width:120px">Persistent volume</div>|<div style="width:250px">Persistent Volume Claim</div>|Description
|:---|:---|:---
|75 GB|`mongod-data-edge-db-rs0-0`|Claimed by the MongoDB server to retain application data. The default size is 75 GB, but this value can be adjusted using the `spec.mongodb.resources.requests.storage` field in the Edge CR file.
|10 GB|`microservices-registry-data`|Claimed by the private docker registry to store microservice images.
|5 GB|`edge-logs`|Claimed by the {{< product-c8y-iot >}} Edge logging component to store the application and system logs.

To guarantee the retention of physical storage even after the PVC is deleted (for example, when {{< product-c8y-iot >}} Edge is deleted) and to enable future storage expansion if needed, it's crucial to configure the Storage Class and/or the PVs with the following settings:

1. **Reclaim Policy:** Ensure that the reclaim policy is set to **`Retain`**. This setting preserves the storage even after the PVC deletion.
2. **Volume Expansion:** Set the volume expansion option to **`true`**. This setting enables the storage to be expanded when necessary.

If these recommended settings are not configured in the Storage Class, in the Edge CR status you receive the warnings below: 

- persistent volume reclaim policy of storage class [storage-class] is currently set to [Delete] instead of the recommended value [Retain]

- allow volume to expand setting of the storage class [storage-class] is currently set to [false] instead of the recommended value [true]

These warnings serve as reminders to adjust these settings for optimal storage management. 

Kubernetes provides a variety of persistent volume types, but two specific types enable Pod containers to access either a Network File System (NFS) or the cluster node's local filesystem (often set up as a NFS drive mapped to a local folder). This configuration is especially prevalent in on-premises deployments.

This section outlines the steps for configuring the Kubernetes cluster to enable {{< product-c8y-iot >}} Edge to utilize NFS as a source for the PVs. For additional storage options, refer to the [Kubernetes documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

### Special instructions for K3s

To enable the proper functioning of the Edge Operator on K3s, you must install K3s with the following configuration options.

Run the command below:

```shell
sudo bash -c 'echo -e "vm.panic_on_oom=0\nvm.overcommit_memory=1\nkernel.panic=10\nkernel.panic_on_oops=1" >> /etc/sysctl.d/90-kubelet.conf' \
&& sudo sysctl -p /etc/sysctl.d/90-kubelet.conf \
&& curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.25.13+k3s1 sh -s - --disable=traefik --write-kubeconfig-mode 644 --protect-kernel-defaults true  --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook \
&& sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config \
&& chmod 600 ~/.kube/config \
&&echo -e '\e[32mSuccessfully installed k3s!\e[0m'
```
For configuration options, see [K3s configuration options](https://docs.k3s.io/installation/configuration).

- Added `--disable=traefik` in the install command to disable Traefik to avoid port conflicts between Traefik and cumulocity-core service, as both are LoadBalancer type services which expose port 443.
- Added `--kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook` to enable admission controllers. The flag is set to enable the `ValidatingAdmissionWebhook` and `MutatingAdmissionWebhook` admission controllers, as {{< product-c8y-iot >}} Edge requires them. See [https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/).
- Added `--protect-kernel-defaults` true to protect the default kernel settings on the host system. It prevents modifications to critical kernel parameters by container workloads running in Kubernetes. For more information, see [https://docs.k3s.io/security/hardening-guide#host-level-requirements](https://docs.k3s.io/security/hardening-guide#host-level-requirements). 
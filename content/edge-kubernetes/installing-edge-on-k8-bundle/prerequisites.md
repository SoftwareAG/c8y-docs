---
weight: 10
title: Prerequisites
layout: redirect
---

|<div style="width:140px">Item</div>|Details|
|:---|:---|
|Hardware|CPU: 6 cores<br>RAM: 10 GB<br>CPU Architecture: x86-64 <p><p>**Info:** These are the minimum system requirements for deploying Edge. If a custom microservice requires additional resources, you must configure the system accordingly in addition to the minimum requirements. For example, if a custom microservice requires 2 CPU cores and 4 GB of RAM, then the Kubernetes node must have 8 CPU cores (6 cores for standard workloads + 2 cores for your microservice) and 14 GB of RAM (10 GB for standard workloads + 4 GB for your microservice). <br><br>**Important:** MongoDB requires a CPU that support AVX instructions. Ensure that the CPU type used for the VM includes support for AVX instructions. To check if a CPU supports AVX instructions, you can use the following command on a Linux system: `sudo lscpu`|
|Kubernetes|Version 1.25.x has been tested (with potential compatibility for subsequent versions) and is supported across the following platforms:<br>- [Lightweight Kubernetes (K3s)](https://docs.k3s.io/installation). To enable the proper functioning of the Edge Operator on K3s, you must install K3s with the following configuration options. For more information, see [Special instructions for K3s](/edge-kubernetes/installing-edge-on-k8/#special-instructions-for-k3s). <br>- [Kubernetes (K8s)](https://kubernetes.io/docs/setup/)<br>- [Amazon Elastic Kubernetes Service (EKS)](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)<br>- [Microsoft Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli) <p><p>**Info:** Edge on Kubernetes has undergone testing on the Kubernetes platforms mentioned above, using the Containerd, CRI-O, and Docker container runtimes. {{< c8y-admon-important >}} Edge on Kubernetes is tested and supported on single-node Kubernetes clusters. {{< /c8y-admon-important >}}|
|Helm version 3.x|Refer to [Installing Helm](https://helm.sh/docs/intro/install/) for the installation instructions.|
|Disk space|Three static Persistent Volumes (PV) or a StorageClass configured with dynamic provisioning to bind.<br>- 75 GB for the Persistent Volume Claim (PVC) made for MongoDB (configurable through the Custom Resource).<br>- 10 GB for the Persistent Volume Claim (PVC) made for the Private Registry to host custom microservices.<br>- 5 GB for the Persistent Volume Claim (PVC) made for application logs.<br>For more information about configuring the storage, see [Configuring storage](/edge-kubernetes/installing-edge-on-k8/#configuring-storage).|
|Edge license file|To request the license file for Edge, please contact the logistics team for your region:<br> - North and South America: LogisSrvus@softwareagusa.com <br>- All Other Regions: LogisticsServiceCenterGER@softwareag.com <br>In the email, you must include <br> - Your company name, under which the license has been bought <br> - The domain name (for example, myedge.domain.com), where Edge will be reachable<br>For more information, see [Domain name validation for Edge license key generation](/edge/edge-installation/#domain-name-validation-for-edge-license-key-generation).|
|The Edge Operator repository credentials|You will receive the Edge Operator repository credentials along with the Edge license.|
|TLS/SSL key and TLS/SSL certificate|Optional. Use your internal or an external CA (Certification Authority) to generate these files. Ensure that the TLS/SSL certificate has the complete certificate chain in the right order.<p><p>**Info:** The .crt and .key files must be in the PEM format and the .key file must not be encrypted. See [Obtaining Valid Certificates with ACME Client and Auto Renewal](/edge-kubernetes/installing-edge-on-k8/#ACME-certificates) for information on using an ACME client for certificate generation and automatic renewal.|
|Edge cloud remote access|To connect and manage one (or multiple) Edge deployments to your {{< product-c8y-iot >}} cloud tenant, you need an active {{< product-c8y-iot >}} {{< standard-tenant >}} with the Data Broker and Cloud Remote Access extensions.<p><p>**Info:** The Edge cloud remote access is an optional feature in Edge.|

### Special instructions for K3s {#special-instructions-for-k3s}

To enable the proper functioning of the Edge Operator on K3s, you must install K3s with the following configuration options.

Run the command below to install Kubernetes version 1.25.13:

```shell
sudo sh -c '
echo "vm.panic_on_oom=0\nvm.overcommit_memory=1\nkernel.panic=10\nkernel.panic_on_oops=1" >> /etc/sysctl.d/90-kubelet.conf && \
sysctl -p /etc/sysctl.d/90-kubelet.conf && \
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.25.13+k3s1 sh -s - \
    --disable=traefik \
    --write-kubeconfig-mode 644 \
    --protect-kernel-defaults true  \
    --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook && \
mkdir -p ~/.kube && \
cp /etc/rancher/k3s/k3s.yaml ~/.kube/config && \
chown $USER: ~/.kube/config && \
chmod 600 ~/.kube/config && \
echo "\e[32mSuccessfully installed k3s!\e[0m"
'
```
For configuration options, see [K3s configuration options](https://docs.k3s.io/installation/configuration).

- Added `--disable=traefik` in the install command to disable Traefik to avoid port conflicts between Traefik and cumulocity-core service, as both are LoadBalancer type services which expose port 443.
- Added `--kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook` to enable admission controllers. The flag is set to enable the `ValidatingAdmissionWebhook` and `MutatingAdmissionWebhook` admission controllers, as Edge requires them. See [https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/).
- Added `--protect-kernel-defaults` true to protect the default kernel settings on the host system. It prevents modifications to critical kernel parameters by container workloads running in Kubernetes. For more information, see [https://docs.k3s.io/security/hardening-guide#host-level-requirements](https://docs.k3s.io/security/hardening-guide#host-level-requirements).

{{< c8y-admon-info >}}

To install a later version of Kubernetes, update the environment variable `INSTALL_K3S_VERSION`.

{{< /c8y-admon-info >}}

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

### Special instructions for K3s

To enable the proper functioning of the Edge Operator on K3s, you must install K3s with the following configuration options.

Run the command below to install Kubernetes version 1.25.13:

```shell
sudo bash -c 'echo -e "vm.panic_on_oom=0\nvm.overcommit_memory=1\nkernel.panic=10\nkernel.panic_on_oops=1" >> /etc/sysctl.d/90-kubelet.conf' \
&& sudo sysctl -p /etc/sysctl.d/90-kubelet.conf \
&& curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.25.13+k3s1 sh -s - --disable=traefik --write-kubeconfig-mode 644 --protect-kernel-defaults true  --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook \
&& mkdir -p ~/.kube \
&& sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config \
&& sudo chown $USER:$USER ~/.kube/config \
&& sudo chmod 600 ~/.kube/config \
&&echo -e '\e[32mSuccessfully installed k3s!\e[0m'
```
For configuration options, see [K3s configuration options](https://docs.k3s.io/installation/configuration).

- Added `--disable=traefik` in the install command to disable Traefik to avoid port conflicts between Traefik and cumulocity-core service, as both are LoadBalancer type services which expose port 443.
- Added `--kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook` to enable admission controllers. The flag is set to enable the `ValidatingAdmissionWebhook` and `MutatingAdmissionWebhook` admission controllers, as {{< product-c8y-iot >}} Edge requires them. See [https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/).
- Added `--protect-kernel-defaults` true to protect the default kernel settings on the host system. It prevents modifications to critical kernel parameters by container workloads running in Kubernetes. For more information, see [https://docs.k3s.io/security/hardening-guide#host-level-requirements](https://docs.k3s.io/security/hardening-guide#host-level-requirements). 

{{< c8y-admon-info >}}

To install a later version of Kubernetes, update the environment variable `INSTALL_K3S_VERSION`.

{{< /c8y-admon-info >}}
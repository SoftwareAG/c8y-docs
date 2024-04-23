---
weight: 35
title: Installing Edge in an air-gapped environment
layout: redirect
---

Cumulocity IoT Edge on Kubernetes supports extended offline operations with intermittent or no internet connection. This capability enables seamless operation in environments where continuous internet access is not guaranteed. In order to achieve seamless operation of Edge in offline environments, it is essential to ensure that all required artifacts, including Helm Charts and Docker images, are readily available. This can be accomplished by hosting these artifacts in a local Harbor registry.

Harbor is an open-source container image registry which can be installed and configured to host the Edge artifacts. This guide will walk you through the process of installing and configuring Harbor version 2.5, providing step-by-step instructions to help you set up the registry for Edge deployment. For more information on Harbor, refer to [Harbor 2.5 Documentation](https://goharbor.io/docs/2.5.0/)

### Harbor Installation and Configuration
This section describes how to install and configure Harbor on Kubernetes using [Helm Chart for Harbor](https://artifacthub.io/packages/helm/harbor/harbor/1.9.6).

#### Prerequisites
Make sure that your target host meets the following prerequisites.
|<div style="width:140px">Item</div>|Details|
|:---|:---|
|Hardware|CPU: 2 cores<br>RAM: 4 GB<br>CPU Architecture: x86-64 <p><p>**Info:** These are the minimum system requirements for deploying Harbor. If you are deploying Harbor in the same cluster as you intend to deploy Edge, please note that these requirements are additional to those required for Edge.|
|Kubernetes|Version 1.25.x has been tested (with potential compatibility for subsequent versions)|
|Helm version 3.x|Refer to [Installing Helm](https://helm.sh/docs/intro/install/) for the installation instructions.|
|Helm cm-push plugin|Helm plugin to push chart package to ChartMuseum. Refer to [Installing cm-push plugin](https://github.com/chartmuseum/helm-push?tab=readme-ov-file#install) for the installation instructions.|
|Disk space|Four static Persistent Volumes (PV) or a StorageClass configured with dynamic provisioning to bind.<br>- 5 GB each for the Persistent Volume Claims (PVC) made for the registry (storing container images) and the chartmuseum (storing Helm Charts).<br>- 1 GB each for the Persistent Volume Claims (PVC) made for the harbor database and the jobservice.|
|TLS/SSL key and TLS/SSL certificate|Optional. Use your internal or an external CA (Certification Authority) to generate these files. Ensure that the TLS/SSL certificate has the complete certificate chain in the right order.<p><p>**Info:** The .crt and .key files must be in the PEM format and the .key file must not be encrypted.|

#### Install Harbor using Helm Charts
Download and edit if necessary the Harbor configuration ([c8yedge-harbor-values.yaml](/files/edge-k8s/c8yedge-harbor-values.yaml)), before running the commands below to install Harbor in *c8yedge-harbor* namespace: 

```shell
helm repo add harbor-repo https://helm.goharbor.io
kubectl create namespace c8yedge-harbor
helm upgrade --install -f c8yedge-harbor-values.yaml --namespace c8yedge-harbor c8yedge-harbor harbor-repo/harbor --version 1.9.6
```

#### Update /etc/hosts to resolve the domain
Run the below commands:



#### Step 2: Install Docker
Docker must be installed before Harbor can be run.

1. Add Docker's official GPG key:
```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

2. Set up the Docker repository:
```shell
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

3. Install Docker Engine and Docker Compose:
```shell
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
```

4. Verify that Docker is running:
```shell
sudo systemctl status docker
```

5. If Docker is not running, start it with:
```shell
sudo systemctl start docker
```

#### Step 3: Download Harbor Offline Installer
Harbor's offline installer package includes all the components for installing and running Harbor.

1. Download the Harbor offline installer for version 2.5.1:
```shell
cd /tmp
wget https://github.com/goharbor/harbor/releases/download/v2.5.1/harbor-offline-installer-v2.5.1.tgz
```
2. Extract the installer:
```shell
tar -xzvf harbor-offline-installer-v2.5.1.tgz
```

3. Move the Harbor directory to /opt/:
```shell
sudo mv harbor /opt/
```

#### Step 4: Configure harbor.yaml
Before installing Harbor, you must configure the harbor.yaml file with your specific settings.

1. Navigate to the Harbor directory:
``` shell
cd /opt/harbor
```

2. Create the harbor.yaml file with your domain, certificates, and other settings. Replace `harbor.vm.local` with your actual domain name.
```shell
hostname: harbor.vm.local
http:
  port: 80
https:
  port: 443
  certificate: /opt/harbor/harbor.vm.local.crt
  private_key: /opt/harbor/harbor.vm.local.key
harbor_admin_password: Harbor12345
database:
  password: root123
  max_idle_conns: 100
  max_open_conns: 900
  conn_max_lifetime: 5m
  conn_max_idle_time: 0
data_volume: /data
trivy:
  ignore_unfixed: false
  skip_update: false
  offline_scan: false
  security_check: vuln
  insecure: false
jobservice:
  max_job_workers: 10
  job_loggers:
    - STD_OUTPUT
    - FILE
notification:
  webhook_job_max_retry: 3
log:
  level: info
  local:
    rotate_count: 50
    rotate_size: 200M
    location: /var/log/harbor
_version: 2.10.0
proxy:
  http_proxy:
  https_proxy:
  no_proxy:
  components:
    - core
    - jobservice
    - trivy
upload_purging:
  enabled: true
  age: 168h
  interval: 24h
  dryrun: false
cache:
  enabled: false
  expire_hours: 24
```

#### Step 5: Generate SSL Certificates
Generate SSL certificates for your domain. Replace `harbor.vm.local` with your actual domain name.
```shell
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout harbor.vm.local.key -out harbor.vm.local.crt -subj "/CN=harbor.vm.local" -addext "subjectAltName = DNS:harbor.vm.local"
```
Move the generated certificates to the specified location in your harbor.yaml configuration.

#### Step 6: Install Harbor
With the configuration and certificates in place, you can now install Harbor. The following command installs Harbor along with Notary, which is used for signing images, and ChartMuseum, which is used for storing Helm charts.

```shell
sudo ./install.sh --with-notary --with-chartmuseum
```

#### Verification
After installation, you can verify that Harbor is running by accessing it through your web browser at https://harbor.vm.local. Use the default admin password `Harbor12345` to log in, which you should change immediately after logging in for the first time.

### Synchronizing Harbor Repositories
To synchronize Harbor repositories between your local machine and a remote Harbor instance, follow these steps. This guide includes running a synchronization script and ensuring your local system trusts the Harbor certificate.

#### Creating Projects in Harbor
Before running the synchronization script, ensure that the following projects are created in Harbor to properly organize the repositories:

* edge
* edge-thirdparty
* microservice-hosting
* stack
* thin-edge

These projects will host the various container images and Helm charts as per your organizational structure and deployment needs.

#### Running the Synchronization Script
Use the provided [registrysync.py](/files/edge-k8s/registrysync.py) script to synchronize repositories. Ensure you replace sensitive information such as passwords with placeholders or securely manage the credentials.

Execute the synchronization script:
```shell
./registrysync.py sync -v 1018.0.0 -sr registry.stage.c8y.io -sru edge -srp [MASKED_PASSWORD] -tr harbor.vm.local -tru admin -trp Harbor12345
```
In this command, replace [MASKED_PASSWORD] with your actual source registry password.

#### Adding Certificate to Trusted Store
To avoid SSL certificate errors and securely connect to your Harbor instance, you must add the Harbor certificate to your system's trusted store.

1. Copy the Harbor certificate to the CA certificates directory:
```shell
sudo cp -av harbor.vm.local.crt /usr/local/share/ca-certificates/
```
2. Update the CA certificates store:
```shell
sudo update-ca-certificates
```
Executing these commands will ensure your system recognizes and trusts the SSL certificate issued for your Harbor registry, facilitating secure connections.

#### Restarting Docker Service
After adding the Harbor certificate to the trusted certificate store, it is necessary to restart the Docker service. This ensures that Docker recognizes the newly trusted certificate and can establish secure connections to your Harbor registry.

Restart the Docker service using:
```shell
sudo systemctl restart docker
```
This command will stop and then start the Docker service again, applying any changes made to the system's trusted certificates.

Ensure you have appropriate permissions to restart services on your machine. Restarting Docker will temporarily interrupt any running containers or services managed by Docker, so it's best to plan this step accordingly to minimize downtime.

#### Add local domain to k3s coredns resolution
Based on your current CoreDNS ConfigMap setup, you're leveraging a custom hosts file (/etc/coredns/NodeHosts) within CoreDNS for domain name resolution. This method allows you to add custom domain-to-IP mappings directly within CoreDNS, affecting all pods that use the cluster DNS for name resolution across the cluster.

1. Locate the NodeHosts Section
Your provided NodeHosts section may currently look like this:
```shell
NodeHosts: |
  192.168.5.251 sag-291zvl3.softwareag.com
```

2. Add Your Custom Domain
To introduce a new local domain, simply append it to the NodeHosts list. For instance, to add harbor.vm.local that resolves to 192.168.1.100, you would update it as follows:
```shell
NodeHosts: |
  192.168.5.251 sag-291zvl3.softwareag.com
  192.168.1.100 harbor.vm.local
```

3. Apply the Changes
The NodeHosts data resides directly in your CoreDNS ConfigMap YAML output. To apply your modifications, edit this ConfigMap with:
```shell
kubectl edit configmap coredns -n kube-system
```
Then, insert your changes under the NodeHosts section.

4. Wait for CoreDNS to Reload
CoreDNS automatically reloads its configuration files, thanks to the reload directive in your Corefile (for example, reload 15s). Consequently, CoreDNS should recognize the changes within approximately 15 seconds after saving them.

5. Verify the Configuration
After giving CoreDNS time to reload its configuration, test the DNS resolution from a pod in your cluster to confirm that your new domain resolves correctly:
```shell
kubectl run -i --tty --rm debug --image=busybox --restart=Never -- nslookup harbor.vm.local
```
This command initiates a temporary pod and employs nslookup to verify the resolution of your newly added custom domain. If everything is configured properly, it should resolve to the IP address you've specified.

This direct management of DNS entries through the CoreDNS ConfigMap is particularly effective for static domain-to-IP mappings, providing a cluster-wide solution for custom domain resolutions.

### Creating a ConfigMap for TLS Verification Bypass in Edge Operator
This guide outlines the creation of a ConfigMap named custom-environment-variables, specifically designed for the edge operator pod within Kubernetes. The ConfigMap facilitates communication with services utilizing self-signed TLS certificates by instructing the edge operator to bypass TLS certificate verification.

#### The ConfigMap Details
* API Version: v1
* Kind: ConfigMap
* Metadata:
  * Name: custom-environment-variables
  * Namespace: c8yedge
* Data:
  * OPERATOR_REGISTRY_INSECURE_SKIP_TLS_VERIFY: "true"

#### Purpose
The OPERATOR_REGISTRY_INSECURE_SKIP_TLS_VERIFY environment variable, set to "true", serves as a directive for the edge operator to ignore TLS verification failures. This is crucial for ensuring uninterrupted operation when interacting with operator registries or Helm repositories secured with self-signed certificates.

#### Creating the ConfigMap
To create the ConfigMap in your Kubernetes cluster, apply the following YAML definition:
```shell
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: custom-environment-variables
      namespace: c8yedge
    data:
      OPERATOR_REGISTRY_INSECURE_SKIP_TLS_VERIFY: "true"
```
You can deploy this ConfigMap by saving the above content to a file (for example, custom-env-configmap.yaml) and running:
```shell
kubectl apply -f custom-env-configmap.yaml
```

#### Utilization by Edge Operator
Once the ConfigMap is created, it's available for use within the c8yedge namespace. The edge operator pod can be configured to utilize this ConfigMap to set the OPERATOR_REGISTRY_INSECURE_SKIP_TLS_VERIFY environment variable, thereby bypassing TLS verification as required.

#### Security Consideration
Bypassing TLS verification, while necessary in certain contexts, carries inherent security risks, such as the potential for Man-In-The-Middle (MITM) attacks. It is recommended to use this approach in controlled environments and consider more secure alternatives, such as certificates from trusted CAs, for production use.

### K3s Air-Gapped Installation
An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters. [Local Harbor Registry Installation Guide on Ubuntu 22.04](#local-harbor-registry-installation-guide-on-ubuntu-2204) describes the installation and synchronization of images.

#### Download K3s Binary and Install Script
1. Obtain the K3s binary from the releases page, ensuring it matches the version of the airgap images used.
2. Place the binary in /usr/local/bin on each node and mark it as executable.
3. Download the K3s install script from get.k3s.io and place it on each node.

#### Installation Steps
For a Single Server Configuration, execute the following on the server node:
```shell
sudo mkdir -p /var/lib/rancher/k3s/agent/images/
sudo curl -L -o /var/lib/rancher/k3s/agent/images/k3s-airgap-images-amd64.tar.zst "https://github.com/k3s-io/k3s/releases/download/v1.29.1-rc2%2Bk3s1/k3s-airgap-images-amd64.tar.zst"
curl -sfL https://get.k3s.io > install.sh
wget https://github.com/k3s-io/k3s/releases/download/v1.29.3-rc1%2Bk3s1/k3s
sudo mv -v ./k3s /usr/local/bin/
sudo chmod +x /usr/local/bin/k3s
sudo chmod +x ./install.sh
INSTALL_K3S_VERSION=v1.29.13+k3s1 INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh --disable=traefik --write-kubeconfig-mode 644 --protect-kernel-defaults true --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook
```

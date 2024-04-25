---
weight: 35
title: Installing Edge in an air-gapped environment
layout: redirect
---

Edge on Kubernetes supports extended offline operations with intermittent or no internet connection. This capability enables seamless operation in environments where continuous internet access is not guaranteed. In order to achieve seamless operation of Edge in offline environments, it is essential to ensure that all required artifacts, including Helm Charts and Docker images, are readily available. This can be accomplished by hosting these artifacts in a local Harbor registry.

Harbor is an open-source container image registry which can be installed and configured to host the Edge artifacts. This guide will walk you through the process of installing and configuring Harbor version 2.5, providing step-by-step instructions to help you set up the registry for Edge deployment. For more information on Harbor, refer to [Harbor 2.5 Documentation](https://goharbor.io/docs/2.5.0/)

### Harbor Installation and Configuration
This section describes how to install and configure Harbor on Kubernetes using [Helm Chart for Harbor](https://artifacthub.io/packages/helm/harbor/harbor/1.9.6).

#### Prerequisites
Make sure that your target host meets the following prerequisites.
|<div style="width:140px">Item</div>|Details|
|:---|:---|
|Hardware|CPU: 2 cores<br>RAM: 4 GB<br>CPU Architecture: x86-64 <p><p>{{< c8y-admon-info>}}These are the minimum system requirements for deploying Harbor. If you are deploying Harbor in the same cluster as you intend to deploy Edge, please note that these requirements are additional to those required for Edge.{{< /c8y-admon-info>}}|
|Kubernetes|Version 1.25.x has been tested (with potential compatibility for subsequent versions)|
|Helm version 3.x|Refer to [Installing Helm](https://helm.sh/docs/intro/install/) for the installation instructions.|
|Helm cm-push plugin|Helm plugin to push chart package to ChartMuseum. Refer to [Installing cm-push plugin](https://github.com/chartmuseum/helm-push?tab=readme-ov-file#install) for the installation instructions.|
|Disk space|Four static Persistent Volumes (PV) or a StorageClass configured with dynamic provisioning to bind.<br>- 5 GB each for the Persistent Volume Claims (PVC) made for the registry (storing container images) and the chartmuseum (storing Helm Charts).<br>- 1 GB each for the Persistent Volume Claims (PVC) made for the harbor database and the jobservice.|
|TLS/SSL key and TLS/SSL certificate|Optional. Use your internal or an external CA (Certification Authority) to generate these files. Ensure that the TLS/SSL certificate has the complete certificate chain in the right order.<p><p>{{< c8y-admon-info>}} The .crt and .key files must be in the PEM format and the .key file must not be encrypted.{{< /c8y-admon-info>}}|

#### Install Harbor using Helm Charts
You can download and edit the Harbor configuration file [c8yedge-harbor-values.yaml](/files/edge-k8s/c8yedge-harbor-values.yaml) if necessary.
After making any required edits, execute the following commands to install Harbor in the *c8yedge-harbor* namespace:

```bash
LOCAL_HARBOR_NAMESPACE=c8yedge-harbor  		# Change namespace name if necessary

helm repo add harbor-repo https://helm.goharbor.io && \
kubectl create namespace $LOCAL_HARBOR_NAMESPACE && \
helm upgrade --install -f c8yedge-harbor-values.yaml -n $LOCAL_HARBOR_NAMESPACE c8yedge-harbor harbor-repo/harbor --version 1.9.6
```

#### Wait for Harbor server to start
You can verify if the Harbor server has started by checking the status of the pods using the following command:

```bash
LOCAL_HARBOR_NAMESPACE=c8yedge-harbor 		# Change namespace name if necessary   

kubectl get pods -n $LOCAL_HARBOR_NAMESPACE
```
This command will display the status of all pods in the specified namespace (*c8yedge-harbor* in this case), allowing you to confirm whether the Harbor server pods are running successfully.

#### Update /etc/hosts to resolve the domain
Run the below commands to update the `/etc/hosts` file to resolve the harbor domain:

```bash
LOCAL_HARBOR_NAMESPACE=c8yedge-harbor       # Change namespace name if necessary
LOCAL_HARBOR_DOMAIN=c8yedge.harbor.local    # Change harbor domain if necessary

LOCAL_HARBOR_IP=$(kubectl get service -n $LOCAL_HARBOR_NAMESPACE c8yedge-harbor-lb -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
sudo sed -i "/$LOCAL_HARBOR_DOMAIN/d" /etc/hosts && \

# Update /etc/hosts to resolve the Harbor domain
echo "$LOCAL_HARBOR_IP $LOCAL_HARBOR_DOMAIN" | sudo tee -a /etc/hosts
```

After completing this step, you should be able to sign into the Harbor registry at https://c8yedge.harbor.local:5001 with the username *admin* and password *admin-pass*.

#### Trust the self-signed Harbor server certificates
Run the below commands to trust the self-signed Harbor server certificates:
{{< c8y-admon-important >}}
If you intend to install Edge on a different Kubernetes cluster, you need to run these commands also on the machine hosting the cluster.
{{< /c8y-admon-important >}}

```bash
sudo sh -c '
LOCAL_HARBOR_DOMAIN=c8yedge.harbor.local    # Change harbor domain if necessary
LOCAL_HARBOR_PORT=5001                      # Change harbor port if necessary

LOCAL_HARBOR_REGISTRY_CA_CERT=$(echo quit | openssl s_client -showcerts -servername $LOCAL_HARBOR_DOMAIN -connect $LOCAL_HARBOR_DOMAIN:$LOCAL_HARBOR_PORT) && \
if command -v "update-ca-certificates" > /dev/null 2>&1; then 
	mkdir -p /usr/local/share/ca-certificates 
	echo "$LOCAL_HARBOR_REGISTRY_CA_CERT" > /usr/local/share/ca-certificates/c8yedge-harbor-registry-ca.crt 
	update-ca-certificates 
elif command -v "update-ca-trust" > /dev/null 2>&1; then 
	mkdir -p /etc/pki/tls/certs 
	echo "$LOCAL_HARBOR_REGISTRY_CA_CERT" > /etc/pki/tls/certs/c8yedge-harbor-registry-ca.crt 
	update-ca-trust extract 
fi
'
```
{{< c8y-admon-important >}}
You should restart the container runtime and Kubernetes cluster after running the above commands for the changes to take effect. For example, you can restart k3s using `sudo systemctl restart k3s` or `sudo service k3s restart` commands.
{{< /c8y-admon-important >}}

### Download and publish Edge artifacts to local Harbor registry  
This section outlines the steps to download the Edge artifacts from the [{{< company-c8y >}} registry](https://registry.c8y.io/) and publish them to the local Harbor registry. You need to run a Python script to achieve this.

#### Install reposiotry sync script
To install Edge repository synchronization script run the commands below:
{{< c8y-admon-info >}}
Refer to [Python Setup and Usage](https://docs.python.org/3/using/index.html) for installing Python 3 required to run this script.
{{< /c8y-admon-info >}}

```bash
pip install --force-reinstall {{< link-c8y-doc-baseurl >}}/files/edge-k8s/c8yedge_repository_sync-1018.0.0-py3-none-any.whl
```

#### Run reposiotry sync script
To download and publish the Edge artifacts to local Harbor registry, run the command below:

```bash
sudo sh -c '
EDGE_REPO_USER="EDGE-REPO-USER"             # Edge repository credentials
EDGE_REPO_PASSWORD="EDGE-REPO-PASS"         # Edge repository credentials

LOCAL_HARBOR_DOMAIN=c8yedge.harbor.local    # Change harbor domain if necessary
LOCAL_HARBOR_PORT=5001                      # Change harbor port if necessary
LOCAL_HARBOR_USER="admin"                   # Change if you used different credentails while installing the Harbor registry
LOCAL_HARBOR_PASSWORD="admin-pass"          # Change if you used different credentails while installing the Harbor registry

c8yedge_repository_sync sync -v 1018.0.0 -sr registry.c8y.io -sru "$EDGE_REPO_USER" -srp "$EDGE_REPO_PASSWORD" -tr "$LOCAL_HARBOR_DOMAIN:$LOCAL_HARBOR_PORT" -tru "$LOCAL_HARBOR_USER" -trp "$LOCAL_HARBOR_PASSWORD" --dryrun False
'
```

{{< c8y-admon-info >}}
To request the Edge repository credentials, contact the logistics team for your region:
* North and South America: LogisSrvus@softwareagusa.com
* All Other Regions: LogisticsServiceCenterGER@softwareag.com
{{< /c8y-admon-info >}}

### Update CoreDNS configuration
Run the commands below to modify the CoreDNS configuration of the Kubernetes cluster to enable resolution of the local Harbor registry's domain:
```bash
LOCAL_HARBOR_NAMESPACE=c8yedge-harbor       # Change namespace name if necessary
LOCAL_HARBOR_DOMAIN=c8yedge.harbor.local    # Change harbor domain if necessary

# Retrieve Local Harbor IP 
LOCAL_HARBOR_IP=$(kubectl get service -n "$LOCAL_HARBOR_NAMESPACE" c8yedge-harbor-lb -o jsonpath="{.status.loadBalancer.ingress[0].ip}")

# Retrieve the existing NodeHosts value
EXISTING_NODEHOSTS=$(kubectl get configmap coredns -n kube-system -o jsonpath='{.data.NodeHosts}')
EXISTING_NODEHOSTS=$(echo -n "$EXISTING_NODEHOSTS" | sed ':a;N;$!ba;s/\n/\\n/g')

# Append the new domain and IP address to the existing NodeHosts value
UPDATED_NODEHOSTS=$(echo "$EXISTING_NODEHOSTS\\n$LOCAL_HARBOR_IP $LOCAL_HARBOR_DOMAIN")

# Patch the CoreDNS ConfigMap with the updated NodeHosts value
kubectl patch configmap coredns -n kube-system --type merge -p "{\"data\":{\"NodeHosts\":\"$UPDATED_NODEHOSTS\"}}"
```

### Installing the Edge Operator
To install the Edge Operator, run and enter the version (for example, 1018.0.0) you want to install, and the local Harbor registry credentials.

```bash
EDGE_NAMESPACE=c8yedge                    # Change namespace name if you want to deploy Edge operator and Edge in a different namespace
LOCAL_HARBOR_DOMAIN=c8yedge.harbor.local  # Change harbor domain if necessary
LOCAL_HARBOR_PORT=5001                    # Change harbor port if necessary

kubectl create namespace $EDGE_NAMESPACE && \
kubectl apply -n $EDGE_NAMESPACE -f {{< link-c8y-doc-baseurl >}}/files/edge-k8s/custom-environment-variables.yaml && \ 
curl -sfL {{< link-c8y-doc-baseurl >}}/files/edge-k8s/c8yedge-operator-install.sh -O && bash ./c8yedge-operator-install.sh -n $EDGE_NAMESPACE -r $LOCAL_HARBOR_DOMAIN:$LOCAL_HARBOR_PORT
```
Provide the local Harbor registry credentials in the prompt:

```text
Enter username to access Edge Operator repository:  
Enter password to access Edge Operator repository:
```
Run the following command to follow the logs for the Edge Operator pod:
```bash
EDGE_NAMESPACE=c8yedge   # Change namespace name if you deployed Edge operator in a different namespace

kubectl logs -f -n $EDGE_NAMESPACE deployment/c8yedge-operator-controller-manager manager
```

### Installing Edge
Continue with installing Edge by following the instructions in [Installing Edge](/edge-k8s/installing-edge-on-k8/#install-edge) section.
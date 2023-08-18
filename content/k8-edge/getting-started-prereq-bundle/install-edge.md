---
weight: 20
title: Install Edge
layout: redirect
---

To use the Edge Kubernetes Operator to deploy Cumulocity IoT Edge, create a Kubernetes manifest file with an Edge Custom Resource (CR) which describes the Edge deployment. Then use `kubectl` to apply that configuration file to your Kubernetes cluster.

### Requirements

Before deploying the Cumulocity IoT Edge, you must [Install Operator](#install-operator) on your Kubernetes cluster using Helm.

### Configure Kubernetes with private registry

For hosting microservices, the Cumulocity IoT Core Platform needs a Docker registry to store and deliver the microservice images to Kubernetes cluster. Hence, the Kubernetes cluster in which you plan to deploy the Edge needs to be configured to connect to this registry (even for the externally hosted Docker registry scenario).

#### K3s

Upon startup, K3s checks to see if a `registries.yaml` file exists at `/etc/rancher/k3s/` and instructs containerd to use any registries defined in the file. You need to create a `registries.yaml` file with the registry details, and it needs to be **created as root** on the node that uses the registry.

For connecting to the registry installed by the Operator, you can use [registries.yaml](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/registry/registries.yaml). Replace `cumulocity-iot-edge` in the file with the Edge CR name you plan to deploy.

> **INFO**
>
> In order for the registry changes to take effect, you need to restart K3s on each node.

For more details, refer to [Private Registry Configuration](https://rancher.com/docs/k3s/latest/en/installation/private-registry/)

#### K3d

You can add registries by specifying them in a `registries.yaml` and referencing it at creation time: `k3d cluster create mycluster --registry-config "my-registries.yaml"`.

For more details refer to [Using Image Registries](https://k3d.io/v5.2.1/usage/registries/)

### Domain Name System (DNS) setup

Kubernetes doesn't use its CoreDNS service to resolve hostnames, rather, it uses DNS servers listed in the `/etc/resolv.conf` of the Operating System. As the Cumulocity IoT Core Platform needs DNS to resolve the microservices registry (Docker registry) host, you need to update `/etc/resolv.conf` file to add the cluster IP address of the CoreDNS service at the top of the nameserver list.

Execute this command to find the cluster IP of the CoreDNS or kube-dns (K3s cluster) service.

```bash
kubectl get services -A   # Use the cluster IP of the CoreDNS or kube-dns service
```

Add `nameserver <cluster IP address of CoreDNS or kube-dns service>` to `/etc/resolv.conf` file.

If you are using Ubuntu 18.04 or later, the resolv.conf file is a symbolic link managed by the Resolve daemon. In this case, you need to disable ResolveD before updating the file.

```bash
# Stop ResolveD service
sudo systemctl disable systemd-resolved.service
sudo systemctl stop systemd-resolved

# Remove the symbolic link created by the ResolveD
rm /etc/resolv.conf

# Create a new resolv.conf
touch /etc/resolv.conf

# Use the cluster IP of the CoreDNS or kube-dns service
echo "nameserver <cluster IP address of CoreDNS or kube-dns service>" >> /etc/resolv.conf 
```

> **INFO**
>
> Refer to [Advanced settings configuration in WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config) for configuring DNS in Windows Subsystem for Linux (WSL2).

### Create Kubernetes Manifest with Edge Custom Resource (CR)

You can use [Sample Cumulocity IoT Edge Manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/cr/v1/cumulocity-iot-edge-manifest.yaml) file with the Edge Custom Resource (CR) definition, Secrets and Ingress necessary to deploy Cumulocity IoT Edge.

Updates needed to the sample manifest file, 
* `sag-registry-credentials` secret to supply the Software AG Registry (registry.c8y.io) credentials to the Cumulocity IoT Edge Operator.
  * Replace the `<EDGE_REPO_USERNAME>` and `<EDGE_REPO_PASSWORD>` with the repository credentials you received.
* `license-secret` secret to supply the Edge license key to the Cumulocity IoT Edge Operator.
  * Replace the `<EDGE-LICENSE-KEY>` with the license text you received.
* To change the Edge Custom Resource name, replace the occurrences of `cumulocity-iot-edge` with the name you want to use.

Refer to the [Edge Custom Resource Definition](04-edge-custom-resource-definition) for structure and configuration options available in the Edge Custom Resource (CR). 

> **CAUTION**
>
> Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd). Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd. Additionally, anyone who is authorized to create a Pod in a namespace can use that access to read any Secret in that namespace; this includes indirect access such as the ability to create a Deployment.
>
> Follow the approach recommended by the Kubernetes distribution you are using to secure the secrets.

The CR defined in the sample manifest file deploys Edge version 1014.0.0 named **"cumulocity-iot-edge"**, with the below details
* myown.iot.com domain with self-signed tls certificates
* Cumulocity IoT Core and related pods in `cumulocity-iot-edge` namespace
* MongoDB in the `cumulocity-iot-edge-mongodb` namespace
* Docker Registry in the `cumulocity-iot-edge-microservices-registry` namespace
* Logging components in the `cumulocity-iot-edge-logging` namespace
* Apama, Smart Rules, Device Simulator and OPCUA Management Server microservices in the `cumulocity-iot-edge-microservices` namespace
* Administration, Cockpit, Device Management and Apama Streaming Analytics applications

### Deploy Edge

Use the manifest file you updated to deploy Edge.

For example, you can deploy [Sample Cumulocity IoT Edge Manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/cr/v1/cumulocity-iot-edge-manifest.yaml) file with,

```bash
kubectl apply -f cumulocity-iot-edge-manifest.yaml
```
You can edit the manifest file anytime and `kubectl apply` to manage the Edge deployment.

### Verify Edge deployment

Use `kubectl get pods --all-namespaces` to check the pods to confirm the status. It may take several minutes for the pods to provision resources, initialize, and start running. Before you continue, please wait for the pods in the `cumulocity-iot-edge*` namespaces to switch to the Running state.

**Sample output:**
```
NAMESPACE                                    NAME                                                              READY   STATUS      RESTARTS   AGE
kube-system                                  local-path-provisioner-7b7dc8d6f5-86x4p                           1/1     Running     0          16h
kube-system                                  helm-install-traefik-crd-d962m                                    0/1     Completed   0          16h
kube-system                                  helm-install-traefik-jrxgx                                        0/1     Completed   1          16h
kube-system                                  svclb-traefik-00cea91a-chwf9                                      2/2     Running     0          16h
kube-system                                  traefik-7cd4fcff68-6k2zg                                          1/1     Running     0          16h
kube-system                                  coredns-b96499967-w8zkk                                           1/1     Running     0          16h
kube-system                                  metrics-server-668d979685-l9bmx                                   1/1     Running     0          16h
edge-k8s-operator-system                     edge-k8s-operator-controller-manager-749fc495fd-md57k             2/2     Running     0          35m
cumulocity-iot-edge-logging                  logging-operator-6b5fcd96c8-kx7z4                                 1/1     Running     0          25m
cumulocity-iot-edge-logging                  eventtailer-event-tailer-0                                        1/1     Running     0          25m
cumulocity-iot-edge-logging                  logging-fluentd-configcheck-4bdeec00                              0/1     Completed   0          25m
cumulocity-iot-edge-logging                  logging-fluentd-0                                                 2/2     Running     0          25m
cumulocity-iot-edge-logging                  logging-fluentbit-6wj4g                                           1/1     Running     0          25m
cumulocity-iot-edge-mongodb                  edge-mongodb-sharded-configsvr-0                                  1/1     Running     0          25m
cumulocity-iot-edge-mongodb                  edge-mongodb-sharded-mongos-5c958dd955-skzrr                      1/1     Running     0          25m
kube-system                                  svclb-cumulocity-iot-edge-service-mqtt-42efe561-tjr2h             2/2     Running     0          24m
cumulocity-iot-edge-mongodb                  edge-mongodb-sharded-shard0-data-0                                1/1     Running     0          25m
cumulocity-iot-edge-microservices-registry   internal-registry-7f6d784d44-8rt5l                                1/1     Running     0          24m
cumulocity-iot-edge                          c8ycore-sts-0                                                     3/3     Running     0          24m
cumulocity-iot-edge-microservices            smartrule-scope-management-deployment-66c9c6589f-8f8fv            1/1     Running     0          19m
cumulocity-iot-edge-microservices            device-simulator-scope-management-deployment-6797b7fd7d-sdnkc     1/1     Running     0          15m
cumulocity-iot-edge-microservices            apama-ctrl-scope-edge-deployment-7dbd8dfbd9-r7nqx                 1/1     Running     0          11m
cumulocity-iot-edge-microservices            ssl-management-server-scope-management-deployment-67c95c8cskphj   1/1     Running     0          11m
```
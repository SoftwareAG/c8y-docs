---
weight: 10
title: Quickstart for Lightweight Kubernetes (K3s)
layout: redirect
---

### Install K3s

Create a file `/etc/sysctl.d/90-kubelet.conf` and add the snippet below:

```shell
vm.panic_on_oom=0 
vm.overcommit_memory=1 
kernel.panic=10 
kernel.panic_on_oops=1 
```
Run the commands:
```shell
sudo run sysctl -p /etc/sysctl.d/90-kubelet.conf
```

```shell
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.25.13+k3s1 sh -s - --disable=traefik --protect-kernel-defaults true --write-kubeconfig-mode 644 --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook
```

### Install Helm 

Run the command below to install Helm v3 

```shell
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash 
```
### Install Edge Operator 

Run the command below to install {{< product-c8y-iot >}} Edge Operator in **c8yedge** namespace:

```shell
curl -sfL {{< link-c8y-doc-baseurl >}}/files/edge-k8s/c8yedge-operator-install.sh -O && bash ./c8yedge-operator-install.sh 
```
Provide the {{< product-c8y-iot >}} Edge Operator repository credentials when prompted, as shown below: 

```shell
Enter username to access Edge Operator repository:  
Enter password to access Edge Operator repository: 
```
### Install Edge 

Run the command below to apply Edge CR ([c8yedge-sample.yaml](/files/edge-k8s/c8yedge-sample.yaml)) for installing {{< product-c8y-iot >}} Edge version **1017.0.0** named **c8yedge** with the domain **myown.iot.com**:

```shell
kubectl apply -f c8yedge-sample.yaml
```
See [Verify Edge installation](/edge-k8s/installing-edge-on-k8/#verify-edge-installation) and [Accessing Edge](/edge-k8s/installing-edge-on-k8/#accessing-edge) to sign into {{< product-c8y-iot >}} Edge. 
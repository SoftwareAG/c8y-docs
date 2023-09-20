---
weight: 10
title: Quick overview of the setup
layout: redirect
---

### Install Lightweight Kubernetes (K3s) 

Create a file with the filename  `/etc/sysctl.d/90-kubelet.conf` and add the snippet below.

```shell
vm.panic_on_oom=0 
vm.overcommit_memory=1 
kernel.panic=10 
kernel.panic_on_oops=1 
```
Run the command `sudo run sysctl -p /etc/sysctl.d/90-kubelet.conf`.

### Install K3s 

```shell
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.25.12+k3s1 sh -s - --disable=traefik --protect-kernel-defaults true --write-kubeconfig-mode 644 --kube-apiserver-arg=admission-control=ValidatingAdmissionWebhook,MutatingAdmissionWebhook 
```

### Install Helm 

Run the command below to install Helm v3 

```shell
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash 
```

### Install Edge K8s Operator 

Run the command below to install {{< product-c8y-iot >}} Edge K8s Operator 

```shell
curl -sfL https://cumulocity.com/guides/files/edge-k8s/c8yedge-operator-install.sh -O && bash ./c8yedge-operator-install.sh 
```

### Install Edge 

Run the command below to install {{< product-c8y-iot >}} Edge on K3s version 1017.0.0 named 'c8yedge' accessible at the domain ‘myown.iot.com’  

```shell
kubectl apply -f c8yedge-sample.yaml 
```

Provide the {{< product-c8y-iot >}} Edge Operator repository credentials when prompted, as shown below: 

```shell
Enter username to access Edge Operator repository:  
Enter password to access Edge Operator repository: 
```
See [Verify Edge deployment](/edge-k8s/installing-edge-on-k8/#verify-edge-deployment) and [Accessing Edge](/edge-k8s/installing-edge-on-k8/#accessing-edge) to sign into {{< product-c8y-iot >}} Edge. 
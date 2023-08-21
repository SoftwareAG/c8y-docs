---
weight: 10
title: System requirements
layout: redirect
---

|Item|Details|
|:---|:---|
|Kubernetes|Version 1.25.x has been tested (with potential compatibility for subsequent versions) and is supported across the following platforms:<br>- [K3s - Lightweight Kubernetes](https://docs.k3s.io/installation)<br>- [Kubernetes - K8s](https://kubernetes.io/docs/setup/)<br>- [Amazon Elastic Kubernetes Service (EKS)](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)<br>- [Microsoft Azure Kubernetes Service](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal?tabs=azure-cli)|
|{{< product-c8y-iot >}} Edge license file|To request the license file for {{< product-c8y-iot >}} Edge, please contact the logistics team for your region:<br> - North and South America: LogisSrvus@softwareagusa.com <br>- All Other Regions: LogisticsServiceCenterGER@softwareag.com <br>In the email, you must include <br> - your company name, under which the license has been bought <br> - the domain name (for example, myedge.domain.com), where {{< product-c8y-iot >}} Edge will be reachable<br>For more information, see [Domain name validation for Edge license key generation](#domain-name-validation-for-edge-license-key-generation).|
|{{< product-c8y-iot >}} Edge Operator repository credentials|You will receive the credentials along with the {{< product-c8y-iot >}} Edge license.|
|TLS/SSL key and TLS/SSL certificate|Optional. Use your internal or an external CA (Certification Authority) to generate these files. Ensure that the TLS/SSL certificate has the complete certificate chain in the right order.<br>**Info:** The .crt and .key files must be in the PEM format and the .key file must not be encrypted.|
|Edge cloud remote access|To connect and manage one (or multiple) Edge appliances to your {{< product-c8y-iot >}} cloud tenant, you need an active {{< product-c8y-iot >}} {{< standard-tenant >}} with the Data Broker and Cloud Remote Access extensions.<br>**Info:** The Edge cloud remote access is an optional feature in {{< product-c8y-iot >}} Edge.|

## Hardware requirements
|Hardware|Configuration|
|:---|:---|
|Kubernetes Node|Single node with:<br>- CPU: 4 cores<br>- RAM: 8GB|
|Disk space|Three static Persistent Volumes (PV) or a Storage Class configured with dynamic provisioning to bind.<br>- 75 GB for the Persistent Volume Claim (PVC) made for MongoDB (configurable through the Custom Resource).<br>- 10 GB for the Persistent Volume Claim (PVC) made for the Private Registry to host custom microservices.<br>- 5 GB for the Persistent Volume Claim (PVC) made for application logs.|

These are the minimum system requirements to enable the microservice hosting feature. If the microservice requires additional system resources, you must configure the system requirements accordingly in addition to minimum system requirements. For example, if the microservice requires 2 CPU cores and 4 GB of RAM, then the VM must have 6 CPU cores (4 cores for VM + 2 cores for microservice) and 12 GB of RAM (8 GB for VM + 4 GB for microservice).
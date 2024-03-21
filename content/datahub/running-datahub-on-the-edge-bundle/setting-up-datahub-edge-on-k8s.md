---
weight: 20
title: Setting up Cumulocity IoT DataHub Edge on Kubernetes
layout: redirect
---

In this setup the application is deployed into a Kubernetes environment using an operator. The {{< product-c8y-iot >}} DataHub backend is run as a microservice within the {{< product-c8y-iot >}} platform. The Dremio master and executor are deployed as a set of Kubernetes pods.

### Prerequisites

Before setting up {{< product-c8y-iot >}} DataHub Edge on Kubernetes, you must check the following prerequisites:

| Item | Details |
| -----   | -----   |
| Kubernetes | A Linux machine with admin access, bash and jq command line tools, as well as kubectl and helm command line tools. |
| {{< product-c8y-iot >}} Edge on Kubernetes  | The corresponding version of {{< product-c8y-iot >}} Edge being set up in the Kubernetes environment; see also [Installing Cumulocity IoT Edge on Kubernetes](https://cumulocity.com/guides/10.17.0/edge-k8s/installing-edge-on-k8) |
| {{< product-c8y-iot >}} DataHub Edge on Kubernetes archive | You have downloaded the archive **datahub-edgek8s.tar** from the [{{< company-sag >}} {{< sag-portal >}}]({{< link-sag-portal >}}). |
| Internet access | Internet access is required. |
| Registry and repository access | Access to artifact registry and repository is required. |

TODO @UPO: Which registry and repository?

#### Hardware requirements

The hardware requirements for running a bare {{< product-c8y-iot >}} Edge instance are described in section [Requirements](/edge/installation#prerequisites). 
When {{< product-c8y-iot >}} DataHub Edge on Kubernetes is deployed on top, the hardware requirements of the virtual machine are as follows:

TODO @Tim
 * 100 GB of free disk space plus sufficient free disk space for the data lake contents
 * Intel x86 CPU
 * Recommended: 20 GB RAM, minimum: 16 GB RAM
 * Recommended: 12 logical CPU cores, minimum: 10 logical CPU cores
 * One NIC

 Hardware requirements for the host OS are excluded.

### Setting up {{< product-c8y-iot >}} DataHub Edge on Kubernetes

Subsequently, it is assumed that {{< product-c8y-iot >}} Edge on Kubernetes has been installed using the default Kubernetes namespace **c8yedge**. If another namespace has been chosen, you need to adapt the commands and configuration files accordingly.

Extract the archive **datahub-edgek8s.tar** to a working folder of your choice.
```
tar -xvf datahub-edgek8s.tar
```  
The folder will contain the following files: 
  
| File | Purpose | Adaptation required |
| -----   | -----   |-----   |
| install.sh | Installation script, which requires bash and jq command line tools for execution | | -
| datahub-config.json | Primary configuration file for DataHub installation | yes |
| dremio-values.yaml | Deployment configuration for Dremio | - |
| dremio-helmchart.tar.gz | Helm chart used for Dremio deployment | - |
| mysql-values.yaml | Deployment configuration for MySQL database, which is used to store configuration data | - |
| datahub-mysql-helmchart.tar.gz | Helm chart used for MySQL deployment  | - |
| datahub.zip | {{< product-c8y-iot >}} DataHub backend packaged as microservice | - |
| datahub-webapp.zip | {{< product-c8y-iot >}} DataHub web application | - |

{{< c8y-admon-info >}}
Internet connectivity is required as the MySQL image, the Dremio image and some auxiliary images (busybox) are downloaded during the installation.
{{< /c8y-admon-info >}}

#### Adapting datahub-config.json

You have to apply the following changes:
* If your {{< product-c8y-iot >}} Edge on Kubernetes configuration does not use **c8yedge** as namespace, change the Kubernetes namespace accordingly. 
* Specify the username and password for admin access to Dremio.
* Set the password for the root user in MySQL.

#### Configuring Dremio deployment via dremio-values.yaml

The **dremio-values.yaml** file contains the configuration settings for the Dremio deployment. It needs to be adapted as follows:

The Dremio master uses a persistent volume to persist its metadata. The persistent volume claim is defined in the Dremio helm chart. You have to provide the name of the **<CRITICAL_STORAGE_CLASS>** used by that claim.

The distributed storage as well as the datalake storage need to be available as a volume mounted into the Dremio master pod. The mount path (e.g. "/datalake") then needs to be specified when configuring the initial settings in the DataHub UI.

TODO @Tim: can we refer to Dremio deployment documentation?

The **$DREMIO_USER** and **$DREMIO_PASSWORD** credentials need to be provided. They are substituted during installation.

In case you want to modify memory settings for Dremio master or executor, you must not exceed the following constraints:
* at maximum 48 GB RAM for each, master and executor
* only one executor

These constraints are checked during the installation procedure.

#### Configuring Deployment of MySQL via mysql-values.yaml

The **mysql-values.yaml** file contains the configuration settings for the MySQL deployment. It needs to be adapted as follows:

The MySQL database uses a persistent volume to persist its data. The persistent volume claim is defined in the MySQL helm chart. You have to provide the name of the **<STORAGE_CLASS>** used by that claim.

The **$MYSQL_USER** and **$MYSQL_PASSWORD** credentials need to be provided. They are substituted during installation.

#### Running the installation script

Execute the following command to prepare the required persistent volumes:
```shell
./install.sh -a
```

#### Using {{< product-c8y-iot >}} DataHub Edge on Kubernetes

After you have logged into the {{< product-c8y-iot >}} UI, you should be able to navigate to the {{< product-c8y-iot >}} DataHub UI by selecting the corresponding entry in the application switcher.

### Validation of {{< product-c8y-iot >}} DataHub Installation

In case of problems, run the following validation steps:

#### MySQL 

You can monitor the startup of the MySQL pod **datahub-mysql-0** using
```shell
kubectl get pods -n c8yedge datahub-mysql-0 --watch
```
    
When running the command
```shell
kubectl get svc -n c8yedge
```
the output should be similar to:
```
NAME          TYPE          CLUSTER-IP          EXTERNAL-IP          PORT(S)          AGE
mysql-client  ClusterIP     10.43.193.54        <none>               3306/TCP         10m
```

#### Dremio

You can monitor the state of the Dremio pods *zk-0*, *dremio-executor-0*, and *dremio-master-0* using
```shell
kubectl get pods -n c8yedge --watch
```

The status *Running* indicates that the pods have started successfully:

```
NAME              READY          STATUS          RESTARTS         AGE
...
zk-0              1/1            Running         0                6m34s
dremio-executor-0 1/1            Running         0                6m34s
dremio-master-0   1/1            Running         0                6m34s
```

When running the command
```shell
kubectl get svc -n c8yedge
```

the output should be similar to 

```
NAME              TYPE              CLUSTER-IP              EXTERNAL-IP               PORT(S)                                         AGE
dremio-client     LoadBalancer      10.43.66.19             172.23.161.181            31010:32334/TCP,9047:30333/TCP,32010:31297/TCP  9m33s
```

#### {{< product-c8y-iot >}} DataHub microservice

When logged into {{< product-c8y-iot >}} UI, the {{< product-c8y-iot >}} DataHub microservice is available under *Administration > Ecosystem > Microservices*.

You can monitor the startup of the microservice pod *datahub-scope-edge-deployment-....* using
```shell
kubectl get pods -n c8yedge --watch
```

The status *Running* indicates that the pod has started successfully:
```
NAMESPACE     NAME                                            READY   STATUS      RESTARTS    AGE
...
c8yedge       datahub-scope-edge-deployment-7985c88469-xg8pc  1/1     Running     0           16m
```

#### DataHub Web Application

When logged into the {{< product-c8y-iot >}} UI, the {{< product-c8y-iot >}} DataHub web application is available under *Administration > Ecosystem > Applications*.
---
weight: 20
title: Setting up Cumulocity IoT DataHub Edge on Kubernetes
layout: redirect
---

### Prerequisites

Before setting up {{< product-c8y-iot >}} DataHub Edge on Kubernetes, you must check the following prerequisites:

| Item | Details |
| -----   | -----   |
| Kubernetes | A Linux machine with admin access with kubectl to Kubernetes target environment, bash and jq command line tool must be available |
| {{< product-c8y-iot >}} Edge on Kubernetes  | The corresponding version of {{< product-c8y-iot >}} Edge is set up in the Kubernetes environment. See also section https://cumulocity.com/guides/10.17.0/edge-k8s/installing-edge-on-k8 |
| {{< product-c8y-iot >}} DataHub Edge on Kubernetes archive | You have downloaded the archive datahub-edgek8s.tar from the [{{< company-sag >}} {{< sag-portal >}}]({{< link-sag-portal >}}). |
| Internet access | Internet access is required. |
| Registry and repository access | Access to artifact registry and repository |

#### Hardware requirements

The hardware requirements for running a bare {{< product-c8y-iot >}} Edge instance are described in section [Requirements](/edge/installation#prerequisites). 
When {{< product-c8y-iot >}} DataHub Edge on Kubernetes is deployed on top, the hardware requirements of the virtual machine are as follows:

??? (Tim)
* 100 GB of free disk space plus sufficient free disk space for the data lake contents
* Recommended: additional 8 GB RAM
* Recommended: 6-8 additional logical CPU cores (Dremio: 5, MySQL: 1, DataHub microservice: 1)

### Setting up {{< product-c8y-iot >}} DataHub Edge on Kubernetes

Subsequently, we assume that {{< product-c8y-iot >}} Edge on Kubernetes has been installed using the default Kubernetes namespace *c8yedge*. If another namespace has been chosen, you need to adapt the  commands and configuration files accordingly.

* Extract the archive datahub-edgek8s.tar to an working folder of your choice using the following command
```
tar -xvf datahub-edgek8s.tar
```  
  It should contain the following files: 
  
| File | Requires Adaptation | Purpose |
| -----   | -----   |-----   |
| install.sh | - | The installation script, requires bash and jq for execution |
| datahub-config.json | yes | Primary configuration file for DataHub installation |
| dremio-values.yaml | Configuration for deployment of Dremio |
| dremio-helmchart.tar.gz | - | Helm chart used for deployment of Dremio |
| mysql-values.yaml | Configuration for deployment of MySQL database used to store DataHub configuration data |
| datahub-mysql-helmchart.tar.gz | - | Helm chart used for deployment of MySQL |
| datahub.zip | - | DataHub microservice |
| datahub-webapp.zip | - | DataHub web application |

Note that images for MySQL, Dremio and some auxiliary images (busybox) are downloaded during the installation. 
Hence, internet connectivity is required.

#### Adapting datahub-config.json

You have to apply the following changes:
* Change the Kubernetes namespace if you have configured {{< product-c8y-iot >}} Edge on Kubernetes to use a namespace different from 'c8yedge'. 
* Specify the username and password for admin access to Dremio
* Set the password for the root user in MySQL

#### Configuring Deployment of Dremio via dremio-values.yaml

Here you have to provide the name of the <CRITICAL_STORAGE_CLASS> used by a persistent volume claim in the Dremio helm chart.
It is used to create a persistent volume holding metadata persisted by the Dremio master.

Furthermore, the distrbuted storage as well as the datalake storage needs to be clarified.
It needs to be available as a volume mounted into the Dremio master pod.
The mount path (e.g. "/datalake") then needs to be specified when configuring the initial settings in the DataHub UI, 

??? (Tim) can we refer to Dremio deployment documentation?

The credentials $DREMIO_USER and $DREMIO_PASSWORD are substituted by the installation script.

Also, you may modify especially memory settings for Dremio master and executor. 
However, there are installation constraints checked by the installation procedure which may not be exceeded:
* max 48 GB RAM for each, master and executor
* number of executors must be 1

#### Configuring Deployment of MySQL via mysql-values.yaml

Here you have to provide the name of the <STORAGE_CLASS> used by a persistent volume claim in the MySQL helm chart.
It is used to create a persistent volume for storing persistent data of the MySQL database.

The credentials $MYSQL_USER and $MYSQL_PASSWORD are substituted by the installation script.

#### Running the Installation Script

Execute the following commands to prepare the required persistent volumes:
```shell
./install.sh -a
```

#### Using {{< product-c8y-iot >}} DataHub Edge on Kubernetes

After you have logged in to Cumulocity UI using the browser of your choice you should be able to navigate to the DataHub webapp as for any cloud setup.

### Validation of DataHub Installation

If that does not work, you may go through the validation stepes described below. 

#### MySQL 

You can monitor the startup of the MySQL pod *datahub-mysql-0* using
```shell
kubectl get pods -n c8yedge datahub-mysql-0 --watch
```
    
When running the command
```shell
kubectl get svc -n c8yedge
```
the output should be similar to 
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

#### DataHub Microservice

When logged in to Cumulocity UI you should see the DataHub microservice in 
    Administration > Ecosystem > Microservices

You can monitor the startup of the DataHub microservice pod *datahub-scope-edge-deployment-....* using
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

When logged in to Cumulocity UI you should see the DataHub web application in 
    Administration > Ecosystem > Applications


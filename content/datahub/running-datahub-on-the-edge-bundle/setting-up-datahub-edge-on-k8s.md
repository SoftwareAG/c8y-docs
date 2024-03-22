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
| Kubernetes | An environment with bash, jq, and admin access to Kubernetes via kubectl and helm command line tools. |
| {{< product-c8y-iot >}} Edge on Kubernetes  | The corresponding version of {{< product-c8y-iot >}} Edge being set up in the Kubernetes environment; see also [Installing Cumulocity IoT Edge on Kubernetes](https://cumulocity.com/guides/10.17.0/edge-k8s/installing-edge-on-k8) |
| {{< product-c8y-iot >}} DataHub Edge on Kubernetes archive | You have downloaded the archive **datahub-edgek8s.tar** from the [{{< company-sag >}} {{< sag-portal >}}]({{< link-sag-portal >}}). |
| Internet access | Internet access is required. |
| Registry and repository access | Access to artifact registry and repository is required. |

#### Resource requirements

The resource requirements for running a bare {{< product-c8y-iot >}} Edge instance are described in section [Requirements](/edge-k8s/installing-edge-on-k8/#prerequisites). 
When {{< product-c8y-iot >}} DataHub Edge on Kubernetes is deployed on top, the resource requirements change by following additional amount:

 * 100 GB of free disk space plus sufficient free disk space for the data lake contents
 * Recommended: 16 GB RAM, minimum: 10 GB RAM
 * Recommended: 10 logical CPU cores, minimum: 6 logical CPU cores

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
| dremio-values.yaml | Deployment configuration for Dremio | yes |
| dremio-helmchart.tar.gz | Helm chart used for Dremio deployment | - |
| mysql-values.yaml | Deployment configuration for MySQL database, which is used to store configuration data | yes |
| datahub-mysql-helmchart.tar.gz | Helm chart used for MySQL deployment  | - |
| datahub.zip | {{< product-c8y-iot >}} DataHub backend packaged as microservice | - |
| datahub-webapp.zip | {{< product-c8y-iot >}} DataHub web application | - |

{{< c8y-admon-info >}}
Internet connectivity is required as the MySQL image, the Dremio image and some auxiliary images (busybox) are downloaded during the installation.
{{< /c8y-admon-info >}}

#### Adapting datahub-config.json

You have to apply the following changes:
* If your {{< product-c8y-iot >}} Edge on Kubernetes configuration does not use **c8yedge** as namespace, change the Kubernetes namespace accordingly. 
* Specify the username and password for admin access to Dremio. The password must have at least 8 characters, including at least 1 letter and 1 digit.
* Set the password for the root user in MySQL.

#### Configuring Dremio deployment via dremio-values.yaml

The **dremio-values.yaml** file contains the configuration settings for the Dremio deployment. It needs to be adapted as follows:

The Dremio master uses a persistent volume to persist its **metadata**. The persistent volume claim is defined in the Dremio helm chart. You have to provide the name of the **<CRITICAL_STORAGE_CLASS>** used by that claim.

The **datalake storage** needs to be available as a volume mounted into the Dremio master and executor pods. The mount path (typically "/datalake") later needs to be specified when configuring the initial settings in the DataHub UI.
The respective configuration in dremio-values.yaml may look as follows:
```
    datalakeNFS:
         enabled: true
         mountPath: /datalake
		 hostPath: <PATH_ON_HOST>
```
If your Kubernetes cluster has only a single worker node, both pods are running on the same node and **<PATH_ON_HOST>** refers to a path on that node.
Please assert that the folder does already exist.

The **distributed storage** also needs to be available as a volume mounted into the Dremio master and executor pods.
The respective configuration in dremio-values.yaml may look as follows:
```
distStorage:
    type: nfs
    nfs:
        mountPath: <MOUNT_PATH>
```
If your Kubernetes cluster has only a single worker node, i.e. both pods are running on the same node and you can use a subfolder of /datalake mounted to a hostpath as shown above.
This may lead e.g. to the following configuration  
```
distStorage:
    type: nfs
    nfs:
        mountPath: /datalake/distributedStorage
```

```shell
./install.sh -a
```

The **$DREMIO_USER** and **$DREMIO_PASSWORD** credentials are substituted during installation based on the values provided in datahub-config.json.

In case you want to modify memory settings for Dremio master or executor, you must not exceed the following constraints:
* at maximum 48 GB RAM for each, master and executor
* only one executor

These constraints are checked during the installation procedure.

#### Configuring Deployment of MySQL via mysql-values.yaml

The **mysql-values.yaml** file contains the configuration settings for the MySQL deployment. It needs to be adapted as follows:

The MySQL database uses a persistent volume to persist its data. The persistent volume claim is defined in the MySQL helm chart. You have to provide the name of the **<STORAGE_CLASS>** used by that claim.

The **$MYSQL_PASSWORD** is substituted during installation based on the value provided in datahub-config.json. 

#### Running the installation script

Execute the following command to install {{< product-c8y-iot >}} DataHub Edge on Kubernetes:
```shell
./install.sh -a
```

#### Add entry to /etc/hosts

In order to access Dremio, the following entry needs to be added to /etc/hosts:
```
<IP address>   datahub.<domain_name>
```
where **<DOMAIN>** is the domain name chosen during the installation of {{< product-c8y-iot >}} Edge on Kubernetes.
 
The **<IP address>** can be obtained using
```shell
kubectl get service -n c8yedge cumulocity-core -o jsonpath={.status.loadBalancer.ingress[*].ip}
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
The result should be similar to:
```
NAME              READY   STATUS    RESTARTS   AGE
datahub-mysql-0   1/1     Running   0          4m55s
```
    
When running the command
```shell
kubectl get svc -n c8yedge
```
the output should be similar to:
```
NAME          TYPE          CLUSTER-IP          EXTERNAL-IP          PORT(S)          AGE
mysql-client  ClusterIP     XXX.XXX.XXX.XXX     <none>               3306/TCP         10m
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
dremio-client     LoadBalancer      XXX.XXX.XXX.XXX         XXX.XXX.XXX.XXX           31010:XXXXX/TCP,9047:XXXXX/TCP,32010:XXXXX/TCP  9m33s
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
c8yedge       datahub-scope-edge-deployment-XXXXXXXXXX-YYYYY  1/1     Running     0           16m
```

#### DataHub Web Application

When logged into the {{< product-c8y-iot >}} UI, the {{< product-c8y-iot >}} DataHub web application is available under *Administration > Ecosystem > Applications*.
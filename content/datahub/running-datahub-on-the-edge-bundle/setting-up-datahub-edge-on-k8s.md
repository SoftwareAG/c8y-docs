---
weight: 20
title: Setting up Cumulocity IoT DataHub Edge on Kubernetes
layout: redirect
---

### Prerequisites

Before setting up {{< product-c8y-iot >}} DataHub Edge on Kubernetes, you must check the following prerequisites:

| Item | Details |
| -----   | -----   |
| Kubernetes | Admin access to Kubernetes target environment using kubectl. |
| {{< product-c8y-iot >}} Edge on Kubernetes  | The corresponding version of {{< product-c8y-iot >}} Edge is set up in the Kubernetes environment |
| | See https://cumulocity.com/guides/10.17.0/edge-k8s/installing-edge-on-k8/#install-operator |
| {{< product-c8y-iot >}} DataHub Edge on Kubernetes archive??? | You have downloaded the archive with all installation artifacts from the [{{< company-sag >}} {{< sag-portal >}}]({{< link-sag-portal >}}). |
| Internet access | Internet access is required. |
| Credentials | You have received credentials for access to artifact registry and repository | 

#### Hardware requirements

The hardware requirements for running a bare {{< product-c8y-iot >}} Edge instance are described in section [Requirements](/edge/installation#prerequisites). 
When {{< product-c8y-iot >}} DataHub Edge onKubernetes is additionally running, the hardware requirements of the virtual machine are as follows:

???
* 100 GB of free disk space plus sufficient free disk space for the data lake contents
* Recommended: additional 8 GB RAM
* Recommended: 6-8 additional logical CPU cores (Dremio: 5, MySQL: 1, DataHub microservice: 1)

### Setting up {{< product-c8y-iot >}} DataHub Edge on Kubernetes

Subsequently, we assume that {{< product-c8y-iot >}} Edge on Kubernetes has been installed using the default Kubernetes namespace "c8yedge".
If another namespace has been chosen you need to replace it subsequently. 

#### Prepare Persistent Volumes for MySQL and Dremio

Let's assume we have two file

1. local-path-retain.yaml

apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-path-retain
provisioner: rancher.io/local-path
reclaimPolicy: Retain
volumeBindingMode: WaitForFirstConsumer

2. datahub-pv-local-path.yaml

########################################################################################################################
#                            Defines the Persistent Volumes with local filesystem path                                 #
########################################################################################################################
---
#
# This PV will be claimed by PVC named '...' for MySQL database
#
apiVersion: v1
kind: PersistentVolume
metadata:
  name: datahub-db-pv
spec:
  capacity:
    storage: 5G                                # Modify the capacity to match the value you plan to specify in 'spec.mongodb.resources.requests.storage' field of the Edge CR
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  volumeMode: Filesystem
  hostPath:
    path: /c8yedge/datahub/database             # Map an NFS folder to this path in all the Kubernetes cluster's worker nodes. This prevents data loss in case of node crashes.
    type: DirectoryOrCreate

---
#
# This PV will be claimed by PVC named '???' for Dremio 
#
apiVersion: v1
kind: PersistentVolume
metadata:
  name: datahub-dremio-dist-pv
spec:
  capacity:
    storage: 5G
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  volumeMode: Filesystem
  hostPath:
    path: /c8yedge/datahub/distributedStorage
    type: DirectoryOrCreate

---
#
# This PV will be claimed by PVC named '???' for datalake used for offloading
#
apiVersion: v1
kind: PersistentVolume
metadata:
  name: datahub-datalake
spec:
  capacity:
    storage: 20G
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  volumeMode: Filesystem
  hostPath:
    path: /c8yedge/datahub/datalake  
    type: DirectoryOrCreate
    
Then execute the following commands to prepare the required pewrsistent volumes:

    kubectl apply -f local-path-retain.yaml
    kubectl apply -f datahub-pv-local-path.yaml

??? (Tim) to be discussed
    - combine to single file?
    - storage classes

#### Deploy MySQL

Create a file mysql-values.yaml with following content

serviceType: ClusterIP
env:
  "MYSQL_USER" : "root"
  "MYSQL_PASSWORD" : "<mysqlPassword>"
  
and execute the following command

    helm install -n c8yedge datahub-mysql-helmchart.tar.gz -f mysql-values.yaml
    
You can monitor startup of MySQL pod "datahub-mysql-0" using

    kubectl get pods -n c8yedge datahub-mysql-0 --watch
    
until it has reached status "Running".

Output from 
    kubectl get svc -n c8yedge

should contain entry similar to 

NAME                                                  TYPE           CLUSTER-IP      EXTERNAL-IP                       PORT(S)                                               AGE
mysql-client                                          ClusterIP      10.43.193.54    <none>                            3306/TCP                                              10m

#### Deploy Dremio

Create a file dremio-values.yaml with following content:

automation:
  acceptEULA: true
  createAdmin: true
  adminUser: <dremioUser>
  adminPassword: <dremioPassword>
coordinator:
  cpu: 2
  memory: 4096
executor:
  count: 1
  cpu: 4
  memory: 4096
  volumeSize: 30Gi
criticalStorageClass: local-path-retain  ???
env: dev
image: registry.c8y.io/cdh/dremio
imagePullSecrets: c8yedge-operator-regcred
serviceType: LoadBalancer
datalakeNFS:
  enabled: true
  mountPath: /datalake
  hostPath: /tmp                   ???
distStorage:
  type: nfs
  nfs:
    mountPath: /datalake/distributedStorage
      
??? (Tim) can we reference some other documentation here?

and execute the following command

    helm install -n c8yedge dremio-helmchart.tar.gz -f dremio-values.yaml
    
You can monitor startup of Dremio pods "zk-0", "dremio-executor-0", and "dremio-master-0" using

    kubectl get pods -n c8yedge --watch
    
until all of them have reached status "Running", e.g.

NAME                                                              READY   STATUS             RESTARTS   AGE
...
zk-0                                                              1/1     Running            0          6m34s
dremio-executor-0                                                 1/1     Running            0          6m34s
dremio-master-0                                                   1/1     Running            0          6m34s

Also, output from 
    kubectl get svc -n c8yedge

should contain entry similar to 

NAME                                                  TYPE           CLUSTER-IP      EXTERNAL-IP                       PORT(S)                                               AGE
dremio-client                                         LoadBalancer   10.43.66.19     172.23.161.181                    31010:32334/TCP,9047:30333/TCP,32010:31297/TCP        9m33s

#### Installing DataHub Web Application and Microservice

Prepare the following files with given content

1. systemEnvSecret.yaml

apiVersion: v1
kind: Secret
metadata:
  name: "microservice-deployer-system-env"
  namespace: <NAMESPACE>
type: Opaque
stringData:
    HOST_NAME: "http://cores-svc.<NAMESPACE>.svc.cluster.local:8111"
    USERNAME: "edge/<C8Y_USER>"
    PASSWORD: "<C8Y_PWD>"
    RESOURCE_BASE_URL: "<RESOURCE_BASE_URL>"
    RESOURCE_USER: "<RESOURCE_USER>"
    RESOURCE_PASSWORD: "<RESOURCE_PWD>"
    C8Y_SETTINGS_DEFAULTS_TIMEOUT: "30s"
    RETRY_NUMBER: "1"

where

| Item | Details |
| -----   | -----   |
| <NAMESPACE> | c8yedge |
| <C8Y_USER> | Obtain from  kubectl get secret -n c8yedge internal-generated-tls-certificates -o "jsonpath={.data.username}"  |
| <C8Y_PWD>  | Obtain from  kubectl get secret -n c8yedge internal-generated-tls-certificates -o "jsonpath={.data.password}"  |
| <RESOURCE_BASE_URL> | https://resources.cumulocity.com/  or (internally) https://staging-resources.cumulocity.com/   |
| <RESOURCE_USER> | Contact support |
| <RESOURCE_PWD>  | Contact support |

2. datahub-values.yaml 

deploy: 
    imagePullSecrets: 
        - name: c8yedge-operator-regcred
    datahubTenantOptions: 
        CDH_DEPLOYMENT_TYPE: EDGE_ON_K8S
        CDH_ALLOWED_SINK_TYPES: NAS
        CDH_SINK_TYPE: NAS
        CDH_NAS_PATH: /datalake
        CDH_DB_TYPE: MYSQL
        CDH_DB_URL: jdbc:mariadb://mysql-client.c8yedge.svc.cluster.local:3306?allowPublicKeyRetrieval=true
        credentials.CDH_DB_USER: root
        credentials.CDH_DB_PASSWORD: <mysqlPassword>
        CDH_DREMIO_HOST: dremio-client.c8yedge.svc.cluster.local
        CDH_DREMIO_PORT: 9047
        credentials.CDH_DREMIO_USER: <dremioUser>
        credentials.CDH_DREMIO_PASSWORD: <dremioPassword>
        CDH_DREMIO_SSL_ENABLED: false
        CDH_DREMIO_PUBLIC_HOST: datahub.<edgeDomain>
        CDH_DREMIO_PUBLIC_PORT: 9047
        CDH_DREMIO_PUBLIC_SSL_ENABLED: false
        CDH_MONGODB_HOSTLIST: edge-db-rs0.c8yedge.svc.cluster.local:27017
        credentials.CDH_MONGODB_USER: backup
        credentials.CDH_MONGODB_PASSWORD: admin-pass
        CDH_STORE_JOB_METRICS: false
        
??? (Tim) we might also use CDH_DREMIO_PUBLIC_HOST: <edgeDomain>  (i.e. without leading "datahub.") - otherwise we need to mention need to add entry in "/etc/hosts"
??? (Bhaskar) for CDH_MONGODB_USER / _PASSWORD : shall we refer to respective K8S secret? 
  
and execute the following commands

    kubectl apply -f systemEnvSecret.yaml
    helm install -n c8yedge datahub-helmchart.tar.gz -f datahub-values.yaml
    
You can monitor startup of DataHub microservice pod "datahub-scope-edge-deployment-...." using

    kubectl get pods -n c8yedge --watch
    
until it has reached status "Running", e.g.

NAMESPACE     NAME                                                              READY   STATUS             RESTARTS      AGE
...
c8yedge       datahub-scope-edge-deployment-7985c88469-xg8pc                    1/1     Running            0             16m

#### Using {{< product-c8y-iot >}} DataHub Edge on Kubernetes

Login 
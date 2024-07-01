---
weight: 12
title: Configuring storage
layout: redirect
---

Kubernetes makes physical storage devices available to your cluster in the form of two API resources, PersistentVolume and PersistentVolumeClaim.

A Persistent Volume (PV) is a storage resource in Kubernetes that is provisioned and managed independently from the Pods that use it. It provides a way to store data in a durable and persistent manner, even if the Pod that uses it is deleted or restarted.

PVs are typically used to store data that must be preserved across Pod restarts or rescheduling, such as databases or file systems. They can be backed by various storage technologies, such as local disks, network-attached storage (NAS), or cloud-based storage services.

To use a PV in Kubernetes, you must define a PersistentVolume object that describes the characteristics of the storage, such as capacity, access modes, and the storage-provider-specific details. Once the PV is created, you can create a PersistentVolumeClaim object that requests a specific amount of storage with specific access requirements. The Persistent Volume Claim (PVC) binds to a matching PV, and the Pod can then use the PVC to mount the storage and access the data.

By using PVs and PVCs, you can decouple the storage management from the application deployment, making it easier to manage and scale your applications in Kubernetes.

PVs represent cluster resources, while PVCs serve as requests for these resources and also serve as validation checks for the resource they request. Provisioning PVs can be done in two ways: statically or dynamically.

- **Static provisioning**: In this method, a cluster administrator manually creates PVs, specifying details about the actual storage available for cluster users. These PVs are registered in the Kubernetes API and are ready for consumption.

- **Dynamic provisioning**: When none of the statically created PVs match a PVC's requirements, the cluster can automatically provision storage on-demand, specifically tailored for the PVC. This dynamic provisioning relies on [StorageClasses](https://kubernetes.io/docs/concepts/storage/storage-classes/). To trigger dynamic provisioning, the PVC must request a StorageClass, and the administrator must have set up and configured that class accordingly. Claims that request an empty string (“”) for the class effectively disable dynamic provisioning for themselves. If no StorageClass is specified in a claim, it falls back to using a default StorageClass if one is configured in the cluster. To enable a default StorageClass, the cluster administrator must activate the `DefaultStorageClass` [admission controller](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#defaultstorageclass) on the API server. This can be achieved, for instance, by ensuring that DefaultStorageClass is included in the comma-delimited, ordered list of values for the --enable-admission-plugins flag of the API server component. For more details on API server command-line flags, refer to the [kube-apiserver](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/) documentation.

### Persistent Volume Claims made by the Edge Operator {#persistent-volume-claims-made-by-the-edge-operator}

The Edge Operator requests three PVCs, as outlined in the table below. Each of these PVCs utilizes the StorageClass if specified within the **`spec.storageClassName`** field of the Edge CR.

- In case you omit the **`spec.storageClassName`**, the Edge Operator requests PVCs without a StorageClass, thereby instructing Kubernetes to utilize the default StorageClass configured in the cluster.

- If you explicitly specify an empty StorageClass as **`""`**, the Edge Operator requests PVCs with an empty StorageClass, thereby instructing Kubernetes to carry out static provisioning.

- Finally, if you specify the name of an existing StorageClass for which dynamic provisioning is enabled, the Operator requests PVCs with that same class name, thereby instructing Kubernetes to utilize dynamic provisioning according to the specified class.

|<div style="width:120px">Persistent volume</div>|<div style="width:250px">Persistent Volume Claim</div>|Description
|:---|:---|:---
|75 GB|`mongod-data-edge-db-rs0-0`|Claimed by the MongoDB server to retain application data. The default size is 75 GB, but this value can be adjusted using the `spec.mongodb.resources.requests.storage` field in the Edge CR file.
|10 GB|`microservices-registry-data`|Claimed by the private docker registry to store microservice images.
|5 GB|`edge-logs`|Claimed by the Edge logging component to store the application and system logs.

To guarantee the retention of physical storage even after the PVC is deleted (for example, when Edge is deleted) and to enable future storage expansion if needed, it's crucial to configure the StorageClass and/or the PVs with the following settings:

1. **Reclaim Policy:** Ensure that the reclaim policy is set to **`Retain`**. This setting preserves the storage even after the PVC deletion.
2. **Volume Expansion:** Set the volume expansion option to **`true`**. This setting enables the storage to be expanded when necessary.

If these recommended settings are not configured in the StorageClass, in the Edge CR status you receive the warnings below:

- persistent volume reclaim policy of StorageClass [storage-class] is currently set to [Delete] instead of the recommended value [Retain]

- allow volume to expand setting of the StorageClass [storage-class] is currently set to [false] instead of the recommended value [true]

These warnings serve as reminders to adjust these settings for optimal storage management.

Kubernetes provides a variety of persistent volume types, but two specific types enable Pod containers to access either a Network File System (NFS) or the cluster node's local filesystem (often set up as a NFS drive mapped to a local folder). This configuration is especially prevalent in on-premises deployments.

### Configuring the Required StorageClasses and PersistentVolumes {#configuring-the-required-storageclasses-and-persistentvolumes}

To configure the required StorageClasses and PersistentVolumes (PVs) for Kubernetes, follow these steps:

#### 1. Create StorageClasses {#create-storageclasses}
StorageClasses are used to define the storage types and configurations for dynamic provisioning of PVs. Below is an example of how to create a StorageClass with the necessary settings.

Create a YAML file for the StorageClass, for example, `storage-class.yaml` and apply the StorageClass using `kubectl apply -f storage-class.yaml`:

```YAML
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: standard
provisioner: k8s.io/minikube-hostpath
reclaimPolicy: Retain
allowVolumeExpansion: true
volumeBindingMode: Immediate
```

#### 2. Create PersistentVolumes (PVs) {#create-persistentvolumes}
PVs need to be defined if you are using static provisioning. Below is an example of how to create PVs with specific sizes and configurations.

Create a YAML file for the PVs, for example, `persistent-volumes.yaml` and apply the PVs using `kubectl apply -f persistent-volumes.yaml`:

```YAML
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-mongod-data-edge-db-rs0-0
spec:
  capacity:
    storage: 75Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: "/mnt/data/mongod"

---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-microservices-registry-data
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: "/mnt/data/registry"

---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-edge-logs
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: "/mnt/data/logs"
```

#### 3. Create PersistentVolumeClaims (PVCs) {#create-persistentvolumeclaims}
PVCs request storage resources from Kubernetes. Below is an example of how to create PVCs to claim the storage defined in the PVs.

Create a YAML file for the PVCs, for example, `persistent-volume-claims.yaml` and apply the PVCs using `kubectl apply -f persistent-volume-claims.yaml`:

```YAML
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mongod-data-edge-db-rs0-0
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 75Gi
  storageClassName: standard

---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: microservices-registry-data
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: standard

---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: edge-logs
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard
```

### Static provisioning of PVs {#static-provisioning-of-pvs}

{{< c8y-admon-info >}}
You can skip this section if your Kubernetes cluster is already configured for dynamic provisioning of PVs.
{{< /c8y-admon-info >}}

This section outlines the steps for configuring the Kubernetes cluster to enable Edge to utilize NFS as a source for the PVs. For additional storage options, refer to the [Kubernetes documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

- Storage provisioning by connecting directly to the NFS server via PV configuration

  - Download the [c8yedge-pv-nfs.yaml](/files/edge-k8s/c8yedge-pv-nfs.yaml) file.

  - Create and export the folders required for the 3 PVs defined in the *c8yedge-pv-nfs.yaml* file. Ensure that the user running Kubernetes server has read/write access to these folders.

  - Run the command below:
    ```shell
    kubectl apply -f c8yedge-pv-nfs.yaml
    ```

- Storage provisioning by mapping NFS drive to a local folder into the cluster node

  - Download the [c8yedge-pv-local-path.yaml](/files/edge-k8s/c8yedge-pv-local-path.yaml) file.

  - Create the folders in the local file system or mount NFS folders required for the 3 PVs defined in the *c8yedge-pv-local-path.yaml* file. Ensure that the user running Kubernetes server has read/write access to these folders.

  -  Run the command below:

     ```shell
     kubectl apply -f c8yedge-pv-local-path.yaml
     ```

{{< c8y-admon-info >}}
Since you manually created the PVs, you must specify an empty StorageClass as **`""`** in the **`spec.storageClassName`** field of the Edge CR for Kubernetes to carry out static provisioning, thereby binding PVC claims made by the Edge Operator.
{{< /c8y-admon-info >}}

---
weight: 30
title: Setting up Dremio account and data lake
layout: redirect
---

The setup of {{< product-c8y-iot >}} DataHub requires you to choose a Dremio account name, and provide credentials to the data lake. In the navigator, select **Settings** to define those settings.

>**Info:** You need administration permissions to define the settings. See the section on [Defining {{< product-c8y-iot >}} DataHub permissions and roles](/datahub/setting-up-datahub#defining-permissions) for details.

### Defining new settings

#### Dremio Account
Under **Dremio Account** name and password of the Dremio account are defined.

The name is composed of three parts:

1. tenant id
2. forward slash
3. string with a minimum length of two starting with a character and consisting of numbers, characters, dash, or underline

If your tenant id is `t12345`, then `t12345/user` is a valid name. The system would also set this value as the initial value in the account field.

The password of the Dremio account has to have at least eight characters, including at least one character and one number.

#### Data Lake
Depending on the configuration of the environment, the data lake provider is either fixed or you can choose among different providers. For each data lake provider, you have to specify corresponding settings to define the data lake to be used. Once the configuration of the data lake is completed, it cannot be changed afterwards.

The following types of data lakes are currently supported:

**Azure Storage** is a set of cloud storage services offered by Microsoft. {{< product-c8y-iot >}} DataHub supports Azure Data Lake Storage Gen2, which is part of these services. The following settings need to be defined for this data lake:

|Settings|Description|
|:---|:---|
|Azure Storage account name|The name of the Azure storage account|
|Azure Storage container|The name of the storage container; it must be between 1 and 63 characters long and may contain alphanumeric characters (letters and numbers) as well as dashes (-)|
|Root path|The root path within your data lake for storing the offloaded data. With the default path /, data is stored top-level in your storage container. You can also store data in a subfolder, provided the folder already exists. For example, for storage container *myContainer* and subfolder *mySubFolder*, use */myContainer/mySubFolder* as root path. This option is especially useful to hide other data inside the container from {{< product-c8y-iot >}} DataHub, e.g. when the container is also used by other users or applications.|
|Azure Storage shared access key|The access key used for authentication|

>**Info:** Note that the account type must be **StorageV2**, and the **Hierarchical namespace** feature must be activated for the corresponding Azure Storage account. It is for performance reasons recommended to set the **Blob access tier** to **Hot**.

**Amazon S3** is an object storage service offered by Amazon Web Services. The following settings need to be defined for this data lake:

|Settings|Description|
|:---|:---|
|AWS access key|The access key|
|Access secret|The access secret|
|Bucket name|The name of the S3 bucket; it must be between 1 and 63 characters long and may contain alphanumeric characters (letters and numbers) as well as dashes (-)|
|Root path in bucket|The root path within the S3 bucket; default root path is /; setting a subfolder allows you to hide other data in the bucket from {{< product-c8y-iot >}} DataHub|

>**Info:** An S3 bucket with default settings works. If specific security policies are applied, make sure that the minimum policy requirements listed in [https://docs.dremio.com/data-sources/s3/](https://docs.dremio.com/data-sources/s3/) are satisfied.

**NAS** is a storage system mounted (NFS, SMB) directly into the Dremio cluster. It is only available for Edge installations. The following settings need to be defined for this data lake:

|Settings|Description|
|:---|:---|
|Mount path|The mount path refers to a path in the local Linux file system on both the coordinator and executor containers. By default, the file system of {{< product-c8y-iot >}} Edge is mounted into /datalake inside the containers. To use some other folder, you must map the folder into both containers, e.g. to /datalake inside the containers.|

**HDFS** is the Hadoop Distributed File System, which is a distributed, scalable file system designed for running on commodity hardware. The following settings need to be defined for this data lake:

|Settings|Description|
|:---|:---|
|Namenode host|The host name of the HDFS NameNode|
|Namenode port|The port of the HDFS NameNode|
|Root path|The root path within the HDFS filesystem for storing offloaded data; default root path is /; setting a subfolder allows you to hide other data in the filesystem from {{< product-c8y-iot >}} DataHub|
|Short-circuit local reads|If enabled, Dremio can directly open the HDFS block files; default is disabled|
|Enable impersonation|If disabled, all requests against HDFS will be made using the user *dremio*; if enabled, the name of the user logged into Dremio will be used to access HDFS; prerequisite is that the user has rwx-permissions for the given root path|
|Allow VDS-based access delegation|If enabled, data used in virtual datasets (VDS) will be requested from HDFS using the username of the owner of the VDS; if disabled, the name of the user logged into Dremio is used|
|Impersonation user delegation|Defines whether an impersonated username is either *As is*, *Lowercase*, or *Uppercase*|

**Info:** Impersonation is supported and used. However, Dremio uses the tenant ID as username for querying HDFS, not the actual username. For example, if "t12345/user" is the logged in user, Dremio will use "t12345" for HDFS requests. Thus, granting file system permissions is only possible on a per-tenant basis and not on a per-user basis.

For **Azure Storage**, **Amazon S3**, and **HDFS** data lakes, you can also define additional connection properties. Click **Add property** and define an additional property consisting of a key/value pair.

#### Saving settings
Once all settings are defined, click **Save** in the action bar to the right. During the save process, the following steps are automatically conducted:

* A Dremio account is created, with the account having standard Dremio user privileges, not admin privileges.
* A data lake connection in Dremio is created using the provided data lake settings. For Dremio that connection is technically spoken a source. In our context we refer to it as **target table** as this data lake is used for storing the offloaded data.
* A source in Dremio is created which connects to the Operational Store of {{< product-c8y-iot >}}.
* A space in Dremio is created which you can use to organize your custom Dremio entities, e.g. views. The name of the space is your tenant ID concatenated with 'Space', e.g. t12345Space.

### Editing settings
Editing the settings is not supported. You have to delete the existing settings and define new settings. If you want to keep your offloading configurations, you have to export the configurations to a backup file, delete the settings, define new settings, and import the configurations from the backup file. See section [Importing/exporting offloading configurations](/datahub/working-with-datahub/#import-export) for details on import/export. 

### Deleting settings
Click **Delete** in the action bar to delete the settings. During deletion, all Dremio artifacts which were created when saving the settings are deleted. All offloading pipelines and their histories are deleted; active pipelines are deleted after completing the current offloading. As mentioned in the previous section, you can use the import/export functionality to backup your offloading configurations. The data lake and its contents are *not* deleted. To delete the data lake and its contents you have to use the tooling of your data lake provider.
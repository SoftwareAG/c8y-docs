---
weight: 30
title: Setting up Dremio account and data lake
layout: redirect
---

The setup of DataHub requires the administrator to choose a Dremio account name, and provide credentials to the data lake. In the navigator, select **Settings** to define those settings.

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

**Azure Data Lake Storage Gen1** is a repository for big data analytic workloads offered by Microsoft. The following settings need to be defined for this data lake:

|Settings|Description|
|:---|:---|
|Data Lake Store resource name|The name of the instance created in Azure Data Lake|
|Application ID|The ID of the registered application under Azure Active Directory|
|OAuth 2.0 token endpoint|The OAuth 2.0 authentication endpoint for registered applications|
|Root path|The root path in the data lake under which the offloaded data will be stored|
|Access key value|The password for the registered application|

**Azure Storage** is a set of cloud storage services offered by Microsoft. DataHub supports Azure Data Lake Storage Gen2, which is part of these services. The following settings need to be defined for this data lake:

|Settings|Description|
|:---|:---|
|Azure Storage account name|The name of the Azure storage account|
|Azure Storage container|The name of the storage container; it must be between 1 and 63 characters long and may contain alphanumeric characters (letters and numbers) as well as dashes (-)|
|Root path|The root path in the data lake under which the offloaded data will be stored|
|Azure Storage shared access key|The access key used for authentication|

**Amazon S3** is an object storage service offered by Amazon Web Services. The following settings need to be defined for this data lake:

|Settings|Description|
|:---|:---|
|AWS access key|The access key|
|Access secret|The access secret|
|Bucket name|The name of the S3 bucket; it must be between 1 and 63 characters long and may contain alphanumeric characters (letters and numbers) as well as dashes (-)|
|Root path in bucket|The root path within the S3 bucket|

**NAS** is a storage system mounted (NFS, SMB) directly into the Dremio cluster. It is only available for on-premise installations. The following settings need to be defined for this data lake:

|Settings|Description|
|:---|:---|
|Mount path|The mount path of the NAS|

For **Azure Data Lake Storage Gen1**, **Azure Storage**, and **Amazon S3** data lakes, you can also define additional connection properties. Click **Add property** and define an additional property consisting of a key/value pair.

#### Saving settings
Once all settings are defined, click **Save** in the action bar to the right. During the save process, the following steps are automatically conducted:

* A Dremio account is created, with the account having standard Dremio user privileges, not admin privileges.
* A data lake source in Dremio is created using the provided data lake settings.
* A source in Dremio is created which connects to the Cumulocity IoT database.
* A space in Dremio is created which you can use to organize your custom Dremio entities, e.g. views.

### Editing settings
Editing the settings is not supported. You have to delete the old settings and define new settings. 

### Deleting settings
Click **Delete** in the action bar to delete the settings. During deletion, all Dremio artifacts which were created when saving the settings are deleted. All offloading pipelines and their histories are deleted; active pipelines are deleted after completing the current offloading. The data lake and its contents are *not* deleted. 
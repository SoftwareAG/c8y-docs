---
weight: 20
title: Defining DataHub permissions and roles
layout: redirect
---

Dedicated permissions define what a user is allowed to do in DataHub. To ease assigning permissions to users, permissions are grouped in roles. During deployment of the DataHub applications the corresponding permissions as well as roles are created. If a role with the same name already exists, no new role will be created. The same holds for permissions.

### DataHub roles and permissions

#### DataHub administrator
The administrator primarily sets up the data lake and Dremio account and conducts administrative tasks like viewing audit logs or monitoring the system status. The administrator can also manage offloading pipelines, e.g., defining and starting a pipeline. 

For those tasks the default role **DATAHUB_ADMINISTRATOR** is created. The permissions for this role are defined as follows:

|Type|READ|ADMIN|
|:---|:---|:---|
|Cdh configure|yes|yes|
|Cdh manage|yes|yes|
|Cdh use|yes|no|

#### DataHub configurator
The configurator manages offloading pipelines, e.g., defining and starting a pipeline. For those tasks the default role **DATAHUB_MANAGER** is created. The permissions for this role are defined as follows:

|Type|READ|ADMIN|
|:---|:---|:---|
|Cdh configure|yes|yes|
|Cdh manage|no|no|
|Cdh use|yes|no|

#### DataHub user
The user runs queries against the data in the data lake. For details see section [Querying offloaded Cumulocity data](/datahub/working-with-datahub#querying-offloaded). To run queries the following approaches can be used:
* Dremio UI: The Dremio account defined in section [Setting up Dremio account and data lake](/datahub/setting-up-datahub#setting-up-dremio-datalake) is used for logging into the UI.
* Dremio API: The Dremio account defined in section [Setting up Dremio account and data lake](/datahub/setting-up-datahub#setting-up-dremio-datalake) is used for authenticating the requests against the Dremio REST API.
* DataHub proxy API: The Cumulocity user needs the role **DATAHUB_READER** in order to run queries using the proxy API.

The permissions for the role **DATAHUB_READER** are defined as follows:

|Type|READ|ADMIN|
|:---|:---|:---|
|Cdh configure|no|no|
|Cdh manage|no|no|
|Cdh use|yes|no|

### Assignment of DataHub roles and permissions
The roles **DATAHUB_ADMINISTRATOR**, **DATAHUB_MANAGER**, and **DATAHUB_READER** have to be assigned to the respective users of your tenant. For assigning roles to users see section [Managing permissions](/users-guide/administration/#managing-permissions). You need at least one user with the **DATAHUB_ADMINISTRATOR** role to complete the DataHub configuration. 

> **Info**: You do not necessarily need to use the predefined roles to enable Cumulocity users to work with DataHub. Alternatively, you can modify other roles the users are associated with and add the corresponding permissions to those roles. In that case you also have to add the **DataHub** application to the user's applications.


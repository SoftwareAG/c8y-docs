---
weight: 20
title: Setting up DataHub Edge
layout: redirect
---

### Prerequisites

Before setting up DataHub Edge, you have to check the following prerequisites:

| Item | Details |
| -----   | -----   |
| Cumulocity IoT Edge | The local version of Cumulocity IoT is set up on a Virtual Machine (VM). See also section [Setting up Cumulocity IoT Edge](/edge/installation). |
| DataHub Edge archive | You have to download the archive with all installation artifacts from the [Software AG Empower portal](https://empower.softwareag.com/). |
| Internet access | Internet access is not required. |
| TODO: what else? | ??? |

### Setting up the environment

Copy the DataHub Edge archive to the Cumulocity IoT Edge.

```shell	
scp cdh.tgz admin@<IP address>:/opt/datahub
```

Log in into Cumulocity IoT Edge with SSH and unzip the DataHub Edge archive.

```shell	
ssh admin@<IP address>

tar -xfvz /opt/datahub/cdh.tgz
```

Run the install script in the unzipped folder.

```shell	
./opt/datahub/cdh/install_datahub.sh
```

It takes a few minutes to complete the installation.

The install script runs the following basic steps:
* Deploy the DataHub Edge UI as web application to Cumulocity IoT Core.
* Configure corresponding roles and permissions in Cumulocity IoT Core.
* Start a Docker container with the DataHub Edge backend and the database system for managing the backend state.
* Start a Docker container with the Dremio master and a ZooKeeper instance.
* Start a Docker container with the Dremio executor.

The Docker containers are configured to store their application state on the data disk under **/opt/mongodb**:
* **/cdh-server/data**: the state of the Dremio master
* **/cdh-server/datalake**: the data lake folder
* **/cdh-executor/data**: the state of the Dremio executor
* **/cdh-console/db**: the state of the DataHub Edge backend

>**Info**: You must not modify the contents of these folders as this will corrupt your installation.

### Configuration

DataHub is automatically configured so that it can operate seamlessly on your cloud instance.

In some cases, it might be necessary to change the default configuration of DataHub Edge.

- Data disk size
- Container settings: Dremio container limited to 2 CPUs
- Dremio settings: some are online configurable, others require to change the Dremio properties (dremio-env file)
- CDH settings: env variables of Docker container

These adaptations have to be done before running the install script.

TODO: adapting an existing installation requires to stop the Docker containers.

### Upgrading an existing installation

If you want to upgrade an existing installation, you have to follow the above steps. During installation the data folders will be kept, while the DataHub Edge components are upgraded.

TODO: do we really want to keep the state? what about breaking changes? Parameterize that step...?

### Accessing DataHub Edge

The different DataHub Edge interfaces can be accessed in the same way as in a cloud deployment of DataHub.

| Interface | Description |
| -----   | -----   |
| DataHub Edge UI | The UI can be accessed in the **application switcher** after you have logged in into Cumulocity IoT Edge UI with your admin account. Alternatively you can access it directly under https://<edge_domain_name>/apps/datahub-ui. |
| Dremio UI | On the DataHub Edge home page you will find a link to the Dremio UI. Alternatively you can access it directly under https://datahub.<edge_domain_name>:9047 |
| DataHub JDBC/ODBC | You find the connection settings for JDBC/ODBC in the DataHub Edge UI on the **Home** page. |
| DataHub REST API | The path of the microservice hosting the API is https://<edge_domain_name>/service/datahub. |
| Dremio REST API | TODO: ??? |

### Defining Datahub permissions and roles

The definition and assignment of permissions and roles is done in the same way as in a cloud deployment. See section [Defining DataHub permissions and roles](/datahub/setting-up-datahub/#defining-permissions) for details.

### Setting up Dremio account and data lake

The setup of the Dremio account and the data lake is done in the same way as in a cloud deployment. See section [Setting up Dremio account and data lake](/datahub/setting-up-datahub/#setting-up-dremio-datalake) for details.

DataHub Edge is configured to use an NAS as data lake. When configuring the NAS use as mount path **/where/to/mount/to?**.
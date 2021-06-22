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
| DataHub Edge archive | You have downloaded the archive with all installation artifacts from the [{{< company-name-2 >}} {{< company-portal >}}]({{< portal-link >}}). |
| Internet access | Internet access is not required. |

#### Hardware requirements

The hardware requirements for running a bare Cumulocity IoT Edge instance are described in section [Requirements](/edge/installation#prerequisites). When DataHub Edge is additionally running, the hardware requirements of the virtual machine are as follows:

* 100 GB of free disk space plus sufficient free disk space for the data lake contents
* Intel x86 CPU
* Recommended: 12 GB RAM, minimum: 8 GB RAM
* Recommended: 4 logical CPU cores, minimum: 2 logical CPU cores
* One NIC

Hardware requirements for the host OS are excluded.

### Setting up DataHub Edge

Copy the DataHub Edge archive to the Cumulocity IoT Edge.

```shell
scp datahub-<version>.tgz admin@<edge_ip_address>:/tmp
```

Log in as admin into Cumulocity IoT Edge.

```shell
ssh admin@<edge_ip_address>
```

Run the install script.

```shell
sudo /opt/c8y/utilities/install_signed_package.sh /tmp/datahub-<version>.tar
```

During script execution, you are prompted for the username and password of the administration user of tenant <em>edge<em>. During installation, you are also prompted to set the new password of the Dremio <em>admin<em> account. It takes a few minutes to complete the installation. After completion you can delete the DataHub Edge archive.

The install script runs the following basic steps:

* Deploy the DataHub Edge UI as a web application to Cumulocity IoT Core
* Start a Docker container with the DataHub Edge backend and the database system for managing the backend state
* Start a Docker container with the Dremio master and a ZooKeeper instance
* Start a Docker container with the Dremio executor
* Configure corresponding roles and permissions in Cumulocity IoT Core

The Docker containers will be restarted automatically if the container itself fails or the applications within are no longer reachable.

The containers are configured to store their application state on the data disk under **/opt/mongodb**:

* **/cdh-server/data**: the state of the Dremio master
* **/cdh-executor/data**: the state of the Dremio executor
* **/cdh-console/db**: the state of the DataHub Edge backend
* **/cdh-server/datalake**: the data lake folder

>**Warning:** You must not modify the contents of these folders as this may corrupt your installation.

### Adapting to network changes of Cumulocity IoT Edge

There might be cases where you have to change the network setup of your edge installation, e.g. by setting the IP range used by the edge internally. The network configuration of DataHub Edge must be adapted to such a change by running the script `/opt/softwareag/cdh/bin/restart.sh` once. The script restarts DataHub with parameters aligned with the new network configuration.

### Accessing DataHub Edge

The different DataHub Edge interfaces can be accessed in the same way as in a cloud deployment of DataHub.

<table>
<thead>
<colgroup>
   <col style="width: 20%;">
   <col style="width: 80%;">
</colgroup>
<tr>
<th>Interface</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>DataHub Edge UI</td>
<td>The UI can be accessed in the <strong>application switcher</strong> after you have logged into the Cumulocity IoT Edge UI. Alternatively you can access it directly under <em>http://edge_domain_name/apps/datahub-ui</em> or <em>https://edge_domain_name/apps/datahub-ui</em>, depending on whether TLS/SSL is used or not. A login is required as well.</td>
</tr>
<tr>
<td>Dremio UI</td>
<td>On the DataHub Edge home page you will find a link to the Dremio UI. Alternatively you can access it directly under <em>http://datahub.edge_domain_name</em> or <em>https://datahub.edge_domain_name</em>, depending on whether TLS/SSL is used or not. You can log in as <em>admin</em> using the password defined in the installation procedure.</td>
</tr>
<tr>
<td>DataHub JDBC/ODBC</td>
<td>You find the connection settings and the required driver version for JDBC/ODBC in the DataHub Edge UI on the <strong>Home</strong> page.</td>
</tr>
<tr>
<td>DataHub REST API</td>
<td>The path of the microservice which hosts the API is <em>https://edge_domain_name/service/datahub</em>.</td>
</tr>
<tr>
<td>Dremio REST API</td>
<td>The Dremio URL to run REST API requests against is either <em>http://datahub.edge_domain_name</em> or <em>https://datahub.edge_domain_name</em>, depending on whether TLS/SSL is used or not.</td>
</tr>
</tbody>
</table>

> **Info:** For JDBC/ODBC you have to configure Cumulocity IoT Edge so that port 31010 can be accessed from the host system. For instructions on port forwarding see section "Setting up port forwarding" under [Setting up the environment](/edge/installation/#setting-up-the-environment).

### Defining DataHub permissions and roles

The definition and assignment of permissions and roles is done in the same way as in a cloud deployment. See section [Defining DataHub permissions and roles](/datahub/setting-up-datahub/#defining-permissions) for details.

### Setting up Dremio account and data lake

The setup of the Dremio account and the data lake is done in the same way as in a cloud deployment. See section [Setting up Dremio account and data lake](/datahub/setting-up-datahub/#setting-up-dremio-datalake) for details.

DataHub Edge is configured to use a NAS as data lake. When configuring the NAS use as mount path */datalake*. This path is mounted to */opt/mongodb/cdh-master/datalake*.

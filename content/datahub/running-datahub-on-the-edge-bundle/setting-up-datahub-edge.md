---
weight: 20
title: Setting up Cumulocity IoT DataHub Edge
layout: redirect
---

### Prerequisites

Before setting up {{< product-c8y-iot >}} DataHub Edge, you must check the following prerequisites:

| Item | Details |
| -----   | -----   |
| {{< product-c8y-iot >}} Edge | The local version of {{< product-c8y-iot >}} is set up on a Virtual Machine (VM). See also section [Setting up {{< product-c8y-iot >}} Edge](/edge/installation). |
| {{< product-c8y-iot >}} DataHub Edge archive | You have downloaded the archive with all installation artifacts from the [{{< company-sag >}} {{< sag-portal >}}]({{< link-sag-portal >}}). |
| Internet access | Internet access is not required. |

#### Hardware requirements

The hardware requirements for running a bare {{< product-c8y-iot >}} Edge instance are described in section [Requirements](/edge/installation#prerequisites). When {{< product-c8y-iot >}} DataHub Edge is additionally running, the hardware requirements of the virtual machine are as follows:

* 100 GB of free disk space plus sufficient free disk space for the data lake contents
* Intel x86 CPU
* Recommended: 12 GB RAM, minimum: 8 GB RAM
* Recommended: 4 logical CPU cores, minimum: 2 logical CPU cores
* One NIC

Hardware requirements for the host OS are excluded.

### Setting up {{< product-c8y-iot >}} DataHub Edge

Copy the {{< product-c8y-iot >}} DataHub Edge archive to the {{< product-c8y-iot >}} Edge.

```shell
scp datahub-<version>.tgz admin@<edge_ip_address>:/tmp
```

Log in as admin into {{< product-c8y-iot >}} Edge.

```shell
ssh admin@<edge_ip_address>
```

Run the install script.

```shell
sudo /opt/c8y/utilities/install_signed_package.sh /tmp/datahub-<version>.tar
```

During script execution, you are prompted for the username and password of the administration user of the tenant <em>edge</em>. During installation, you are also prompted to set the new password of the Dremio <em>admin</em> account. It takes a few minutes to complete the installation. After completion you can delete the {{< product-c8y-iot >}} DataHub Edge archive.

The install script runs the following basic steps:

* Deploy the {{< product-c8y-iot >}} DataHub Edge UI as a web application to {{< product-c8y-iot >}} Core
* Start a Docker container with the {{< product-c8y-iot >}} DataHub Edge backend and the database system for managing the backend state
* Start a Docker container with the Dremio master and a ZooKeeper instance
* Start a Docker container with the Dremio executor
* Configure corresponding roles and permissions in {{< product-c8y-iot >}} Core

The Docker containers will be restarted automatically if the container itself fails or the applications within are no longer reachable.

The containers are configured to store their application state on the data disk under **/opt/mongodb**:

* **/cdh-master/data**: the state of the Dremio master
* **/cdh-executor/data**: the state of the Dremio executor
* **/cdh-console/db**: the state of the {{< product-c8y-iot >}} DataHub Edge backend
* **/cdh-master/datalake**: the data lake folder

>**Warning:** You must not modify the contents of these folders as this may corrupt your installation.

### Upgrading {{< product-c8y-iot >}} DataHub Edge
An upgrade of {{< product-c8y-iot >}} DataHub Edge follows the same steps as the initial setup. First, you must copy the archive with the new version to {{< product-c8y-iot >}} Edge. Next, you must log in as admin. Then you must run the install script using the new version.

```shell
sudo /opt/c8y/utilities/install_signed_package.sh /tmp/datahub-<NEW version>.tar
```

During script execution, the already installed version is detected and the script runs an upgrade using the new version. It takes a few minutes to complete the installation. After completion you can delete the {{< product-c8y-iot >}} DataHub Edge archive.

### Adapting to network changes of Cumulocity IoT Edge

There might be cases where you must change the network setup of your Edge installation, for example by setting the IP range used by Edge internally or changing the domain name. The network configuration of {{< product-c8y-iot >}} DataHub Edge must be adapted to such a change by running the script `/opt/softwareag/cdh/bin/restart.sh` once. The script restarts {{< product-c8y-iot >}} DataHub with parameters aligned with the new network configuration.

### Accessing {{< product-c8y-iot >}} DataHub Edge

The different {{< product-c8y-iot >}} DataHub Edge interfaces can be accessed in the same way as in a cloud deployment of {{< product-c8y-iot >}} DataHub.

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
<td>{{< product-c8y-iot >}} DataHub Edge UI</td>
<td>The UI can be accessed in the <strong>application switcher</strong> after you have logged into the {{< product-c8y-iot >}} Edge UI. Alternatively you can access it directly under <em>http://edge_domain_name/apps/datahub-ui</em> or <em>https://edge_domain_name/apps/datahub-ui</em>, depending on whether TLS/SSL is used or not. A login is required as well.</td>
</tr>
<tr>
<td>Dremio UI</td>
<td>On the {{< product-c8y-iot >}} DataHub Edge home page you will find a link to the Dremio UI. Alternatively you can access it directly under <em>http://datahub.edge_domain_name</em> or <em>https://datahub.edge_domain_name</em>, depending on whether TLS/SSL is used or not. You can log in as <em>admin</em> using the password defined in the installation procedure.</td>
</tr>
<tr>
<td>{{< product-c8y-iot >}} DataHub JDBC/ODBC</td>
<td>You find the connection settings and the required driver version for JDBC/ODBC in the {{< product-c8y-iot >}} DataHub Edge UI on the <strong>Home</strong> page.</td>
</tr>
<tr>
<td>{{< product-c8y-iot >}} DataHub REST API</td>
<td>The path of the microservice which hosts the API is <em>https://edge_domain_name/service/datahub</em>.</td>
</tr>
<tr>
<td>Dremio REST API</td>
<td>The Dremio URL to run REST API requests against is either <em>http://datahub.edge_domain_name</em> or <em>https://datahub.edge_domain_name</em>, depending on whether TLS/SSL is used or not.</td>
</tr>
</tbody>
</table>

> **Info:** For JDBC/ODBC you must configure {{< product-c8y-iot >}} Edge so that port 31010 can be accessed from the host system. For instructions on port forwarding see the section "Setting up port forwarding" under [Setting up the environment](/edge/installation/#setting-up-the-environment).

### Defining Cumulocity IoT DataHub permissions and roles

The definition and assignment of permissions and roles is done in the same way as in a cloud deployment. See the section [Setting up Cumulocity IoT DataHub > Defining {{< product-c8y-iot >}} DataHub permissions and roles](/datahub/setting-up-datahub/#defining-permissions) for details.

### Setting up Dremio account and data lake

The setup of the Dremio account and the data lake is done in the same way as in a cloud deployment. See the section [Setting up Dremio account and data lake](/datahub/setting-up-datahub/#setting-up-dremio-datalake) for details.

{{< product-c8y-iot >}} DataHub Edge is configured to use a NAS as data lake. When configuring the NAS use as mount path */datalake*. This path is mounted to */opt/mongodb/cdh-master/datalake*.

### Changing Dremio memory configuration on Cumulocity IoT DataHub Edge

Depending on the use case, it might be necessary to increase the memory available to Dremio, the internal engine of {{< product-c8y-iot >}} DataHub. By default, Dremio is configured to consume a maximum of 4 GB of RAM (2 GB assigned to both master node and executor node).
  
Depending on the situation, one either needs to increase the memory of Dremio's master or executor node. In many cases, the master node’s memory is the limiting factor, but not always. 
Inspecting the Query Profile in Dremio helps to determine where the bottleneck occurs.

#### Master node memory configuration

Run the following steps:
- Log into edge via SSH
- As root, run `vi /etc/cdh/cdh-master/dremio-env` and change `DREMIO_MAX_HEAP_MEMORY_SIZE_MB=1750` and `DREMIO_MAX_DIRECT_MEMORY_SIZE_MB=250` to your needs. For example, you can double both values.
- Run `service cdh-master restart`.

#### Executor node memory configuration

Run the following steps:
- Log into edge via SSH
- As root, run `vi /etc/cdh/cdh-executor/dremio-env` and change `DREMIO_MAX_HEAP_MEMORY_SIZE_MB=1024` and `DREMIO_MAX_DIRECT_MEMORY_SIZE_MB=1488` to your needs. For example, you can double both values.
- Run `service cdh-executor restart`.

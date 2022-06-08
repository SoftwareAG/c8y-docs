---
weight: 40
title: Operating Cumulocity IoT DataHub Edge
layout: redirect
---

Similar to the cloud variant, {{< product-c8y-iot >}} DataHub Edge UI allows you to check system information and view audit logs. See the section on [Operating {{< product-c8y-iot >}} DataHub](/datahub/operating-datahub) for details.

When managing {{< product-c8y-iot >}} DataHub Edge, the following standard tasks are additionally relevant.

### Troubleshooting the system

If problems occur, you should follow these steps:

- Perform a health check, see the section on [Health check](#health-check)
- Check the log files, see the section on [Log files](#log-files)
- Monitor the system processes, see the section on [Monitoring](#monitoring)

If you still need to contact [product support](/welcome/contacting-support), include the output of the diagnostics script. See the section on [Diagnostics](/edge/diagnostics-and-support/#diagnostics) for details of how to run it.

<a name="health-check"></a>
#### Health check

##### Check Cumulocity IoT DataHub Edge backend status

You can check the status of the backend in the Administration page of the {{< product-c8y-iot >}} DataHub UI. Alternatively you can query the *isalive* endpoint, which should produce an output similar to:

```shell
curl --user admin:your_password https://edge_domain_name/service/datahub/isalive

{
  "timestamp" : 1582204706844,
  "version" : {
    "versionId" : "10.6.0.0.337",
    "build" : "202002200050",
    "scmRevision" : "4ddbb70bf96eb82a2f6c5e3f32c20ff206907f43"
  }
}
```

If the backend cannot be reached, you will get an error response.

##### Check Dremio backend status

You can check the status of Dremio using the *server_status* endpoint:

```shell
curl http://datahub.edge_domain_name/apiv2/server_status
"OK"
```
Dremio is running if *OK* is returned. No response will be returned if it is not running or inaccessible.

<a name="log-files"></a>
#### Log files

The installation log file is stored at */var/log/cdh*.

In order to access the logs of the {{< product-c8y-iot >}} DataHub and Dremio containers, you must use the Docker *logs* command. To follow the logs of cdh-master you must run:

```shell
docker logs -f cdh-master
```

 To follow the logs of cdh-executor you must run:

```shell
docker logs -f cdh-executor
```

The containers are configured to rotate log files with rotation settings of two days and a maximum file size of 10 MB.

<a name="monitoring"></a>
#### Monitoring
{{< product-c8y-iot >}} Edge uses *Monit* for management and monitoring of relevant processes. See the section on [Monitoring](/edge/diagnostics-and-support/#monitoring) for details. The {{< product-c8y-iot >}} DataHub Edge processes, namely the {{< product-c8y-iot >}} DataHub backend and the Dremio nodes, are also monitored by Monit.

### Data disk management and monitoring

The data disk is used for storing the state of {{< product-c8y-iot >}} DataHub and Dremio and serves as data lake. In order to ensure that the system can work properly, the disk must not run out of space. The main factors for the disk space allocation of {{< product-c8y-iot >}} DataHub Edge are the Dremio job profiles and the data lake contents.

#### Cleanup of Dremio job history

Dremio maintains a history of job details and profiles, which can be inspected in Dremio's job log, that is, the "Jobs" page of the Dremio UI. This job history must be cleaned up regularly to free the resources necessary for storing it.

Dremio is configured to perform the cleanup of job results automatically without downtime. The default value for the maximum age of stored job results is seven days. To change that value, a Dremio administrator must modify the support key *jobs.max.age_in_days*. The changes become effective within 24 hours or after restarting Dremio. See the corresponding [Dremio documentation](https://docs.dremio.com/advanced-administration/support-settings/) for more details on support keys.

#### Cleanup of data lake contents

The data lake contents are not automatically purged, as the main purpose of {{< product-c8y-iot >}} DataHub is to maintain a history of data. However, if disk space is critical and cannot be freed otherwise, parts of the data lake contents must be deleted.

Browse to the data lake folder **/opt/mongodb/cdh-master/datalake**. The data within the data lake is organized hierarchically. Delete the temporal folders you deem adequate to be deleted. After that you must run the following query in Dremio:

```
ALTER PDS <deleted_folder_path> REFRESH METADATA FORCE UPDATE
```

>**Warning:** Data being deleted from the data lake cannot be recovered anymore.

#### Backup and Restore

{{< product-c8y-iot >}} DataHub's runtime state as well as the data lake containing offloaded data reside in the {{< product-c8y-iot >}} Edge server VM. In order to back up and restore {{< product-c8y-iot >}} DataHub, its runtime state, and its data we recommend you to back up and recover the {{< product-c8y-iot >}} Edge server VM as described in section [Backup and restore](/edge/backup-and-restore/).

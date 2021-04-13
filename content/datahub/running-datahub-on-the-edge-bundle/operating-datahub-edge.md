---
weight: 40
title: Operating DataHub Edge
layout: redirect
---

Similar to the cloud variant, DataHub Edge UI allows you to check system information and view audit logs. See section [Operating DataHub](/datahub/operating-datahub) for details.

When managing DataHub Edge, the following standard tasks are additionally relevant.

### Troubleshooting the system

In problems occur, you should follow these steps:

- Perform a health check, see the [Health check](#health-check) section.
- Check the log files, see the [Log files](#log-files) section.
- Monitor the system processes, see the [Monitoring](#monitoring) section.

If you still need to contact [product support](/about-doc/contacting-support), include the output of the diagnostics script. See the section on [Diagnostics](/edge/operation/#diagnostics) for details of how to run it.

#### <a name="health-check"></a>Health check

##### Check DataHub Edge backend status

You can check the status of the backend in the Administration page of the DataHub UI. Alternatively you can query the *isalive* endpoint, which should produce an output similar to:

```shell
curl --user admin:<your_password> https://edge_domain_name/service/datahub/isalive

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

#### <a name="log-files"></a>Log files

Log files are stored at */var/log/cdh*.

| File | Usage |
| -----   | -----   |
| clean_history.log | Log file for cleanup of job history |
| install.log | Installation log file |

In order to access the logs of the DataHub and Dremio containers, you have to use the Docker *logs* command. To follow the logs of cdh-master you have to run:

```shell
docker logs -f cdh-master
```

 To follow the logs of cdh-executor you have to run:

```shell
docker logs -f cdh-executor
```

The containers are configured to rotate log files with rotation settings of two days and a maximum file size of 10 MB.

#### <a name="monitoring"></a>Monitoring
Cumulocity IoT Edge uses Monit for management and monitoring of relevant processes. See section [Monitoring](/edge/operation/#monitoring) for details. The DataHub Edge processes, namely the DataHub backend and the Dremio nodes, are also monitored by Monit.

### Data disk management and monitoring

The data disk is used for storing the state of DataHub and Dremio and serves as data lake. In order to ensure that the system can work properly, the disk must not run out of space. The main factors for the disk space allocation of DataHub Edge are the Dremio job profiles and the data lake contents.

#### Cleanup of Dremio job history

Dremio maintains a history of job details and profiles, which can be inspected in Dremio’s job log, i.e. the "Jobs" page of the Dremio UI. This job history must be cleaned up regularly to free the resources necessary for storing it.

Cleanup is executed by a preconfigured cron job, running the script

```shell
/opt/softwareag/cdh-executor/scripts/clean_history.sh <max_job_days>
```

This uses a Dremio admin command for the actual cleanup, but Dremio must not be running during execution of the admin command. The script will thus stop Dremio, run the Dremio admin command, and restart Dremio, so cleanup execution will cause a short outage of Dremio service. There is one parameter, *max_job_days*, specifying the number of days of job history to keep. By default, cleanup removes all job history except for the last 7 days, and the cron job is scheduled to run early Sunday morning at 2 a.m.

Job history cleanup can be reconfigured using the script

```shell
/opt/softwareag/cdh-executor/scripts/clean_history_configuration.sh <max_job_days> <cron_expression>
```   

The arguments are:

| Interface | Description |
| -----   | -----   |
| max_job_days | The number of days to keep job history (default: 7) |
| cron_expression | The cron expression for running the cleanup job (default: '0 2 * * 0', i.e. on Sundays at 2 a.m.) |

Be sure to provide a proper cron expression and pass it to the configuration script in single quotes. The configuration can be verified by:

```shell
crontab -l
```

#### Cleanup of data lake contents

The data lake contents are not automatically purged, as the main purpose of DataHub is to maintain a history of data. However, if disk space is critical and cannot be freed otherwise, parts of the data lake contents need to be deleted.

Browse to the data lake folder **/opt/mongodb/cdh-server/datalake**. The data within the data lake is organized hierarchically. Delete the temporal folders you deem adequate to be deleted. After that you need to run the following query in Dremio:

```
ALTER PDS <deleted_folder_path> REFRESH METADATA FORCE UPDATE
```

>**Warning:** Data being deleted from the data lake cannot be recovered anymore.

#### Backup and Restore

DataHub's runtime state as well as the data lake containing offloaded data reside in the Cumulocity IoT Edge server VM. In order to back up and restore DataHub, its runtime state, and its data we recommend you to back up and recover the Cumulocity IoT Edge server VM as described in section [Backup and restore](/edge/operation/#backup-restore).

---
weight: 40
title: Operating DataHub Edge
layout: redirect
---

DataHub Edge provides the same operation capabilities the cloud variant does. See section [Operating Datahub](/datahub/operating-datahub) for details on checking system information and viewing audit logs.

Operating DataHub Edge includes additional aspects.

### Troubleshooting the system

In case of problems, we recommend to follow these steps:

- Perform a health check, see the [Health check](#health-check) section.
- Check the log files, see the [Log files](#log-files) section.
- Monitor the system processes, see the [Monitoring](#monitoring) section.

If you still need to contact SAG support, include the output of the diagnostics script. See the [Diagnostics](/edge/operation/#diagnostics) section on details how to run it.

#### <a name="health-check"></a>Health check

##### Check DataHub Edge backend status

You can check the status of the backend in the Administration page of the DataHub UI. This page requires administrative rights. Alternatively you can query the *isalive* endpoint:

```shell	
TODO: stimmen die credentials?
curl --user admin:manage https://<edge_domain_name>/service/datahub/isalive

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

You can check the status of Dremio using the *live* endpoint:

```shell	
curl http://datahub.<edge_domain_name>:9047/live
```

The response is an HTML page which has an object holding the server configuration, including the server status.

TODO: what else? DB, data disk

#### <a name="log-files"></a>Log files

Log files are stored at /var/log/cdh.

TODO: include the CDH logs in the Edge documentation as well.

| File | Usage |
| -----   | -----   |
| xyz.log | logfile for DataHub Edge backend |
| xyz.log | logfile for Dremio |

TODO: Dremio logs: access like that or via docker logs? Logs for both cluster nodes and ZooKeeper?

#### <a name="monitoring"></a>Monitoring
Cumulocity IoT Edge uses Monit for management and monitoring of relevant processes. See section [Monitoring](/edge/operation/#monitoring) for details. The DataHub Edge processes, namely the DataHub backend and the Dremio nodes, are also monitored by Monit.

### Data disc management and monitoring

The data disk is used for storing the state of DataHub and Dremio and serves as data lake. In order to ensure that the system can work properly, the disk must not run out of space. The main factors for the disk space allocation are the Dremio job profiles and the data lake contents.

#### Cleanup of Dremio job history

Dremio maintains a history of job details and profiles, which can be inspected in Dremio’s job log, i.e. the “Jobs” page of the Dremio UI. This job history must be cleaned up regularly to free the resources necessary for storing it.

Cleanup is executed by a preconfigured cron job, running script

```shell	
/opt/softwareag/cdh-executor/scripts/clean_history.sh <max_job_days>
``` 

This uses a Dremio admin command for the actual cleanup, but Dremio must not be running during execution of the admin command. The script will thus stop Dremio, run the Dremio admin command, and restart Dremio, so cleanup execution will cause a short outage of Dremio service. There is one parameter, max_job_days, specifying the number of days of job history to keep. By default, cleanup removes all job history except for the last 7 days, and the cron job is scheduled to run early Sunday morning at 2 a.m.

Job history cleanup can be reconfigured using script

```shell	
/opt/softwareag/cdh-executor/scripts/clean_history_configuration.sh <max_job_days> <cron_expression>
```   

The arguments are:

| Interface | Description |
| -----   | -----   |
| max_job_days | the number of days to keep job history (default: 7) |
| cron_expression | the cron expression for running the cleanup job (default: '0 2 * * 0', i.e. on Sundays at 2 a.m.) |

Be sure to provide a proper cron expression and pass it to the configuration script in single quotes. The configuration can be verified by

```shell	
crontab -l
```

#### Cleanup of data lake contents

The data lake contents are not automatically purged as the main purpose of DataHub is to maintain a history of data. However, if disk space is critical and cannot be freed otherwise, parts of the data lake contents need to be deleted.

Browse to the data lake folder **/opt/mongodb/cdh-server/datalake**. The data within the data lake is organized hierarchically. Delete the temporal folders you deem adequate to be deleted.

>**Warning**: Data being deleted from the data lake cannot be recovered anymore.

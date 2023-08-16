---
weight: 40
title: Endpoints for monitoring
layout: redirect
---

### ETL pipeline health

The {{< product-c8y-iot >}} DataHub microservice exposes an endpoint to automatically monitor the health of active offloading configurations. The ETL pipeline health can be monitored with the endpoint <kbd>GET /service/datahub/scheduler/health</kbd>:

The endpoint examines the latest job executions of all jobs and classifies them:

* If the job has failed, it is reported as CRITICAL.
* If the job is still running, it is categorized as follows:
    * If it is running for up to one hour, its health is classified as STEADY.
    * If it is running for up to six hours, its health is classified as WARNING.
    * If it is running for more than six hours, its health is classified as CRITICAL.
* If the job has succeeded, it is checked whether it was the last job that should have been run for this configuration. If there should have been a new run of this job and the system is already 10 minutes behind the scheduled execution time, the job is classified as CRITICAL. Otherwise, the job is classified as STEADY.

If all jobs are classified as STEADY, the endpoint returns the HTTP status code 200 with the following message:

	“HTTP 200 CDHCBEI0029 - Scheduler healthcheck succeeded.”


Otherwise, the endpoint returns the HTTP status code 500 with the following message:

	“HTTP 500 CDHCBEE0031 - Scheduler healthcheck failed: There were failed or suspended jobExecutions.”

The response body indicates the jobs to be checked by an administrator:

```
{
"error" : "There were failed or suspended jobExecutions: \n\nCRITICAL: Job failed: uuid=0d2eb545-cae5-4718-b6c1-50c4169bac69, jobType=CTAS, jobRunId=NON_CLUSTERED1580741460697\n\n"
}
```

The endpoint can be accessed by any logged in {{< product-c8y-iot >}} user who is authorized to access the {{< product-c8y-iot >}} DataHub microservice.

---
weight: 90
title: Tenant usage statistics
layout: redirect
---

### UsageStatistics

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|day|datetime|1|Date of statistics.|
|deviceCount|int|1|Number of devices in the tenant (c8y\_IsDevice). Latest value for a queried period.|
|deviceEndpointCount|int|1|Number of devices which do not have child devices (leaf devices). Latest value for a queried period.|
|deviceRequestCount|int|1|Number of requests that were issued only by devices against the tenant. Sum of all issued requests during the queried period.|
|deviceWithChildrenCount|int|1|Number of devices with all children. Latest value for a queried period.|
|requestCount|int|1|Number of requests that were issued against the tenant. Sum of all issued requests during the queried period.|
|storageSize|int|1|Database storage in use by the tenant, in bytes. Latest value for a queried period.|
|subscribedApplications|array|1|Names of tenant subscribed applications. Latest value for a queried period.|

"requestCount" - the following requests are not included in the counter:

* internal SmartREST requests used to resolve templates
* internal SLA monitoring requests
* calls to any "/health" endpoint
* device bootstrap process requests related to configuring and retrieving device credentials
* Microservice SDK internal calls for applications and subscriptions - "/currentApplication"

"deviceRequestCount" - in addition to the exceptions already listed for "requestCount" the following requests are not included in the counter:

 * requests to /user, /tenant and /application API's
 * application related requests (with "X-Cumulocity-Application-Key" header)

Note:

 * "requestCount" and "deviceRequestCount" are updated every 5 minutes.
 * "deviceCount", "deviceEndpointCount", "deviceWithChildrenCount", "storageSize" and "subscribedApplications" are updated only three times a day starting at 8:57, 16:57 and 23:57.
 * "storageSize" is affected by your retention rules. It is also affected by the regularly running database optimization functions running in Cumulocity IoT. If the size decreases, it does not necessarily mean that data was deleted.
 * Days are counted according to server timezone.

Request counting in SmartREST and MQTT:

- SmartREST: <br>Each row in a SmartREST request is transformed into a separate HTTP request. For example, if one SmartREST request contains 10 rows, then 10 separate calls are executed, meaning that request count is increased by 10.
- MQTT: <br>Each row/line counts as a separate request. Creating custom template counts as a single request.

REST specific counting details:

* All counters increase also when the request is invalid, for example wrong payload or missing permissions.
* Bulk measurements creation and bulk alarm status update are counted as a single "requestCount"/"deviceRequestCount" and multiple inbound data transfer count.

SmartREST 1.0 specific counting details:

* Invalid SmartREST requests are not counted, for example when the template doesn't exist.
* A new template registration is treated as two separate requests. Create a new inventory object which increases "requestCount", "deviceRequestCount" and "inventoriesCreatedCount". There is also a second request which binds the template with X-ID, this increases "requestCount" and "deviceRequestCount".
* Each row in a SmartREST request is transformed into a separate HTTP request. For example, if one SmartREST request contains 10 rows, then 10 separate calls are executed, meaning that both "requestCount" and "deviceRequestCount" are increased by 10.

MQTT specific counting details:

* Invalid requests are counted, for example when sending a message with a wrong template ID.
* Device creation request and automatic device creation are counted.
* Each row/line counts as a separate request.
* Creating custom template counts as a single request, no matter how many rows are send in the request.
* There is one special SmartREST 2.0 template (402 Create location update event with device update) which is doing two things in one call, i.e. create a new location event and update the location of the device. It is counted as two separate requests.

### Total inbound data transfer

Inbound data transfer refers to the total number of inbound requests performed to transfer data into the Cumulocity IoT platform. This includes sensor readings, alarms, events, commands and alike that are transferred between devices and the Cumulocity IoT platform using the REST and/or MQTT interfaces. Such an inbound request could also originate from a custom microservice, website or any other client.

The table below lists all counters that enhance the Cumulocity IoT tenant statistics and measure the inbound data transfers:

<div class="table-responsive"><table>
<colgroup>
<col style="width: 25%;">
<col style="width: 15%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">measurementsCreatedCount</td>
<td style="text-align:left">int</td>
<td style="text-align:left">The number of measurements created. Note: The bulk creation of measurements is handled in a way that each measurement is counted individually.</td>
</tr>
<tr>
<td style="text-align:left">alarmsCreatedCount</td>
<td style="text-align:left">int</td>
<td style="text-align:left">The number of alarms created.</td>
</tr>
<tr>
<td style="text-align:left">alarmsUpdatedCount</td>
<td style="text-align:left">int</td>
<td style="text-align:left">The number of updates on alarms.</td>
</tr>
<tr>
<td style="text-align:left">eventsCreatedCount</td>
<td style="text-align:left">int</td>
<td style="text-align:left">The number of events created.</td>
</tr>
<tr>
<td style="text-align:left">eventsUpdatedCount</td>
<td style="text-align:left">int</td>
<td style="text-align:left">The number of updates on events.</td>
</tr>
<tr>
<td style="text-align:left">inventoriesCreatedCount</td>
<td style="text-align:left">int</td>
<td style="text-align:left">The number of managed objects created.</td>
</tr>
<tr>
<td style="text-align:left">inventoriesUpdatedCount</td>
<td style="text-align:left">int</td>
<td style="text-align:left">The number of updates to managed objects.</td>
</tr>
<tr>
<td style="text-align:left">totalResourceCreateAndUpdateCount</td>
<td style="text-align:left">int</td>
<td style="text-align:left">The sum of values above (all inbound transfers).</td>
</tr>
</tbody>
</table></div>

See the table below for more information on how the counters above are increased. Additionally, it shows how inbound data transfers are handled for both MQTT and REST:

|Type of transfer|MQTT counter information|REST counter information|
|:---------------|:-----------------------|:-----------------------|
|Creation of an **alarm** in one request|One alarm creation is counted.|One alarm creation is counted via REST.|
|Update of an **alarm** (e.g. status change)|One alarm update is counted.|One alarm update is counted via REST.|
|Creation of **multiple alarms** in one request|Each alarm creation in a single MQTT request will be counted.|Not supported by C8Y (REST does not support creating multiple alarms in one call).|
|Update of **multiple alarms** (e.g. status change) in one request|Each alarm creation in a single MQTT request will be counted.|Not supported by C8Y (REST does not support updating multiple alarms in one call).|
|Creation of an **event** in one request|One event creation is counted.|One event creation is counted.|
|Update of an **event** (e.g. text change)|One event update is counted.|One event update is counted.|
|Creation of **multiple events** in one request|Each event creation in a single MQTT request will be counted.|Not supported by C8Y (REST does not support creating multiple events in one call).|
|Update of **multiple events** (e.g. text change) in one request|Each event update in a single MQTT request will be counted.|Not supported by C8Y (REST does not support updating multiple events in one call).|
|Creation of a **measurement** in one request|One measurement creation is counted. |One measurement creation is counted.|
|Creation of **multiple measurements** in one request|Each measurement creation in a single MQTT request will be counted. Example: If MQTT is used to report 5 measurements, the measurementCreated counter will be incremented by five.|REST allows multiple measurements to be created by sending multiple measurements in one call. In this case, each measurement sent via REST is counted individually. The call itself is not counted. For example, if somebody sends 5 measurements via REST in one call, the corresponding counter will be increased by 5. Measurements with multiple series are counted as a singular measurement.|
|Creation of a **managed object** in one request|One managed object creation is counted.|One managed object creation is counted.|
|Update of one **managed object** (e.g. status change)|One managed object update is counted.|One managed object update is counted.|
|Update of **multiple managed objects** in one request|Each managed object update in a single MQTT request will be counted.|Not supported by C8Y (REST does not support updating multiple managed objects in one call).|
|Creation/update of **multiple alarms/measurements/events/inventories** mixed in a single call.|Each MQTT line is processed separately. If it is a creation/update of an event/alarm/measurement/inventory, the corresponding counter is increased by one.|Not supported by the REST API.|
|Assign/unassign of **child devices and child assets** in one request|One managed object update is counted.|One managed object update is counted.|

### Time zone handling

>**Important:** Cumulocity IoT platform servers by default work at UTC timezone. The platform supports other time zones, which can be selected by the service provider at installation time.
 
The tenant usage statistics are collected on a daily base according to the beginning of day (BOD) and the end of day (EOD), which are defined by the service side timezone. 
As a result, if the local time zone of a user is different from the server timezone, an operation triggered by the user may be assigned to a different day according to the server time.

#### Examples

##### Example 1: Request counting

||Device|Server|
|:---|:----|:-----|
|Time zone| CEST +2h |UTC|
|Send measurement time | 26.08.2020T01:30:00+02:00| 25.08.2020T23:30Z|

 **Result:** 
The request will be billed to the day 25.08.2020 as this is the server time of the request handing.

##### Example 2: Request counting 2

||Device| Server|
|:---|:----|:-----|
|Time zone| UTC |UTC|
|Send measurement time | 26.08.2020T01:30:00Z| 26.08.2020T01:30:00Z|

**Result:** The request will be billed to the day 26.08.2020 as the server time is the same as the device time.

##### Example 1: Microservice resource billing

||User| Server|
|:---|:----|:-----|
|Time zone| CEST +2h |UTC|
|Subscribe time | 26.08.2020T12:00:00+02:00| 26.08.2020T10:00Z|
|Unsubscribe time | 26.08.2020T12:00:00+02:00| 26.08.2020T10:00Z|

**Result:** The request will be billed to the day 25.08.2020 as this is the server time of the request handing.

##### Example 2: Microservice resource billing

||User| Server|
|:---|:----|:-----|
|Time zone| CEST +2h |UTC|
|Send measurement time | 26.08.2020T12:00:00+02:00| 26.08.2020T10:00Z|

**Result:** The request will be billed to the day 25.08.2020 as this is the server time of the request handing.

##### Example 3: Microservice resource billing
 
||Device| Server|
|:---|:----|:-----|
|Time zone| UTC |UTC|
|Send measurement time | 26.08.2020T01:30:00Z| 26.08.2020T01:30:00Z|

  **Result:** The request will be billed to the day 26.08.2020 as the server time is the same as the device time.


### Daily routine


|Operation|Refreshed|
|:--------|:--------|
|Request count flush| Every 5 minutes|
|Used storage | 9, 17 and EOD |
|Device count | 9, 17 and EOD|
|Subscribed applications | 9, 17 and EOD|
|Microservice resources | 9, 17 and EOD|

### Lifecycle



### MicroserviceUsageStatistics

The microservice usage statistics gathers information on the resource usage for tenants for each subscribed application which are collected on a daily base.

The microservice usage's information is stored in the `resources` object.

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|cpu|long|1| Total number of cpu usage for tenant microservices, specified in CPU milliseconds (1000m = 1 CPU)|
|memory|long|1|Total number of memory usage for tenant microservices, specified in MB|
|usedBy|array|1..n|Collection of resources usage for each microservice|
|usedBy.name|string|1|Microservice name|
|usedBy.cpu|long|1|Number of CPU usage for a single microservice|
|usedBy.memory|long|1|Number of memory usage for a single microservice|
|usedBy.cause|string|1|The reason for calculating statistics of the selected microservice|

Response body: TenantUsageStatisticsCollection

Required role: ROLE\_TENANT\_STATISTICS\_READ

Example Request: Get statistics of the current tenant starting on July 1st.

    GET /tenant/statistics?dateFrom=2020-07-01
    Host: ...
    Authorization: Basic ...

Example Response :

     HTTP/1.1 200 OK
     Content-Type: application/vnd.com.nsn.cumulocity.tenantusagestatisticscollection+json; charset=UTF-8; ver=0.9
     Content-Length: ...
     {
         "usageStatistics": [
                {
                    "requestCount": 297180,
                    "deviceEndpointCount": 2,
                    "deviceCount": 2,
                    "resources": {
                        "cpu": 12006,
                        "usedBy": [
                            {
                                "name": "cep",
                                "cpu": 6003,
                                "cause": "Owner",
                                "memory": 30079
                            },
                            {
                                "name": "device-simulator",
                                "cpu": 2001,
                                "cause": "Owner",
                                "memory": 1073
                            },
                            {
                                "name": "smartrule",
                                "cpu": 2001,
                                "cause": "Owner",
                                "memory": 1074
                            },
                            {
                                "name": "sms-gateway",
                                "cpu": 2001,
                                "cause": "Owner",
                                "memory": 1073
                            }
                        ],
                        "memory": 33299
                    },
                    "deviceRequestCount": 70540,
                    "deviceWithChildrenCount": 2,
                    "eventsCreatedCount": 0,
                    "subscribedApplications": [
                        "devicemanagement",
                        "administration",
                        "feature-microservice-hosting",
                        "device-simulator",
                        "sms-gateway",
                        "smartrule",
                        "feature-cep-custom-rules",
                        "cep",
                        "cockpit"
                    ],
                    "alarmsCreatedCount": 0,
                    "inventoriesUpdatedCount": 5,
                    "alarmsUpdatedCount": 0,
                    "eventsUpdatedCount": 0,
                    "inventoriesCreatedCount": 0,
                    "storageSize": 91601985,
                    "measurementsCreatedCount": 0,
                    "self": "...",
                    "totalResourceCreateAndUpdateCount": 5,
                    "day": "2020-07-01T00:00:00.000Z"
                }
                ...
         ]
     }            


### TenantUsageStatisticsCollection [application/vnd.com.nsn.cumulocity.tenantUsageStatisticsCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|usageStatistics|array|0..n|List of usage statistics, see above.|
|statistics|object|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of tenants.|
|next|string|0..1|A URI linking to a potential next page of tenants.|

### GET a representation of a TenantUsageStatisticsCollection

|      Query param       |   type   |
|:-----------------------|:---------|
| dateFrom               | datetime |
| dateTo                 | datetime |
| dateTill (deprecated)  | datetime |

Response body: TenantUsageStatisticsCollection

Required role: ROLE\_TENANT\_STATISTICS\_READ

Example Request: Get statistics of current tenant starting Aug 1st, 2014, until today.

    GET /tenant/statistics?dateFrom=2014-08-01
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenantusagestatisticscollection+json; charset=UTF-8; ver=0.9
    Content-Length: ...
    {
        "statistics": {
            "currentPage": 1,
            "pageSize": 5,
            "totalPages": 5
        },
        "self": "<<Collection URL>>",
        "usageStatistics": [ {
            "day": "2014-08-12T00:00:00.000+02:00",
            "deviceCount": 5,
            "deviceEndpointCount": 5,
            "deviceRequestCount": 101966,
            "deviceWithChildrenCount": 5,
            "requestCount": 103966,
            "self": "...",
            "storageSize": 1005442845,
	    "subscribedApplications": [
                "testadmin"
            ]
        },
        {
            "day": "2014-08-07T00:00:00.000+02:00",
            "deviceCount": 30,
            "deviceEndpointCount": 15,
            "deviceRequestCount": 114378,
            "deviceWithChildrenCount": 38,
            "requestCount": 116378,
            "self": "...",
            "storageSize": 1151862557,
	    "subscribedApplications": [
                "testadmin"
            ]
        },
        ...
        ]
    }

### GET a summary of all tenant usage statistics

| Query param |    type  |
|:------------|:---------|
| dateFrom    | datetime |
| dateTo      | datetime |

Response body: application/json

Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get statistics of all tenants starting Aug 1st, 2014, until today.

    GET /tenant/statistics/allTenantsSummary?dateFrom=2014-08-01
    Host: ...
    Authorization: Basic ...


Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: ...
    [
        {
            "deviceCount": 5,
            "deviceEndpointCount": 5,
            "deviceRequestCount": 114338,
            "deviceWithChildrenCount": 5,
            "requestCount": 116378,
            "tenantId": "tenant1",
            "storageSize": 1151862557,
	    "subscribedApplications": [
                "testadmin"
            ]
        },
        {
            "deviceCount": 2,
            "deviceEndpointCount": 2,
            "deviceRequestCount": 114338,
            "deviceWithChildrenCount": 2,
            "requestCount": 116378,
            "tenantId": "tenant2",
            "storageSize": 1151862557,
	    "subscribedApplications": [
                "testadmin"
            ]
        },
        ...
	]


### TenantUsageStatisticsSummary [application/vnd.com.nsn.cumulocity.tenantUsageStatisticsSummary+json]


### GET a representation of a TenantUsageStatisticsSummary

| Query param            |    type  |
|:-----------------------|:---------|
| dateFrom               | datetime |
| dateTo                 | datetime |
| dateTill (deprecated)  | datetime |

Response body: TenantUsageStatisticsSummary

Required role: ROLE\_TENANT\_STATISTICS\_READ

Example Request: Get summary of requests and database usage from the start of this month until now.

    GET /tenant/statistics/summary
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenantusagestatisticssummary+json; charset=UTF-8; ver=0.9
    Content-Length: ...

    {
        "self": "...",
        "day": "2014-08-21T00:00:00.000+02:00",
        "deviceCount": 30,
        "deviceEndpointCount": 15,
        "deviceRequestCount": 15006838,
        "deviceWithChildrenCount": 38,
        "requestCount": 15013818,
        "storageSize": 983856925,
	"subscribedApplications": [
            "testadmin"
        ]
    }


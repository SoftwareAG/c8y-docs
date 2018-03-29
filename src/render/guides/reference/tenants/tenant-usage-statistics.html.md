---
order: 90
title: Tenant usage statistics
layout: redirect
---

### UsageStatistics

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|day|String|1|Date of statistics.|
|deviceCount|Number|1|Number of devices in the tenant (c8y\_IsDevice).|
|deviceEndpointCount|Number|1|Number of devices which do not have child devices (leaf devices).|
|deviceRequestCount|Number|1|Number of requests that were issued only by devices against the tenant.|
|deviceWithChildrenCount|Number|1|Number of devices with all children.|
|requestCount|Number|1|Number of requests that were issued against the tenant.|
|storageSize|Number|1|Database storage in use by the tenant, in bytes.|
|subscribedApplications|List|1|Names of tenant subscribed applications.|

"requestCount" and "deviceRequestCount" contains the sum of all issued requests during the querying period. "deviceCount" and "storageSize" contain the last reported value during the querying period. Please note:

 * "requestCount" and "deviceRequestCount" are updated every 5 minutes.
 * "deviceCount", "deviceEndpointCount", "deviceWithChildrenCount", "storageSize" and "subscribedApplications" are updated daily starting at 23:57.
 * "storageSize" is affected by your retention rules. It is also affected by the regularly running database optimization functions running in Cumulocity. If the size decreases, it does not necessarily mean that data was deleted.
 * Days are counted according to server timezone.

"deviceRequestCount" - device requests are recognized as requests that do not contain "X-Cumulocity-Application-Key" header. 
In addition, requests to /user, /tenant and /application API's are never counted as "deviceRequestCount".

Request counting in SmartREST and MQTT:
- SmartREST: each row in SmartREST request is transformed into a separate HTTP request. For example, if one SmartREST request contains 10 rows, then 10 separate calls are executed, meaning that request count is increased by 10. 
- MQTT: each row/line counts as a separate request. Creating custom template counts as a single request.


### TenantUsageStatisticsCollection [application/vnd.com.nsn.cumulocity.tenantUsageStatisticsCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|usageStatistics|UsageStatistics|0..n|List of usage statistics, see above.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of tenants.|
|next|URI|0..1|Link to a potential next page of tenants.|

### GET a representation of a TenantUsageStatisticsCollection

|      Query param      |   type   |
|:----------------------|:---------|
| dateFrom (inclusive)  | datetime |
| dateTill (inclusive)  | datetime |

Response body: TenantUsageStatisticsCollection
  
Required role: ROLE\_TENANT\_STATISTICS\_READ

Example Request: Get statistics of current tenant starting Aug 1st, 2014, until today.

    GET /tenant/statistics?dateFrom=2014-08-01
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenantUsageStatisticsCollection+json; charset=UTF-8; ver=0.9
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

| Query param |    type  |
|:------------|:---------|
| dateFrom    | datetime |
| dateTill    | datetime |

Response body: TenantUsageStatisticsSummary
  
Required role: ROLE\_TENANT\_STATISTICS\_READ

Example Request: Get summary of requests and database usage from the start of this month until now.

    GET /tenant/statistics/summary
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenantUsageStatisticsSummary+json; charset=UTF-8; ver=0.9
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


## Current tenant

### Current tenant [application/vnd.com.nsn.cumulocity.currentTenant+json]
|Field Name|Type|Occurs|Description|
|:---------|:---|:-----|:----------|
|name|String|1|Tenant
|domainName|String|1|Domain name
|allowCreateTenants|Boolean|1|Flag indicating if tenant can create subtenants

### GET current tenant

Request for currently logged service user's tenant. 

Required role: ROLE&#95;USER&#95;MANAGEMENT&#95;OWN&#95;READ, or ROLE&#95;SYSTEM

ResponseBody: CurrentTenant

    GET /tenant/currentTenant
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     ContentType: application/vnd.com.nsn.cumulocity.currentTenant+json;;ver=...

Example response

    {
        "allowCreateTenants": true,
        "customProperties": {},
        "domainName": "...",
        "name": "..."
    }

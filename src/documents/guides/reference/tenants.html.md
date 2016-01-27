---
order: 150
title: Tenants
layout: default
---

## Tenants

The Tenant interface is available consists of parts:

-   The tenant collection resource retrieves tenants, accesible by url */tenant/tenants*
-   The tenant resource represents individual tenant that can be view, accesible by url */tenant/tenants/{tenantId}*
-   The tenant application reference collection resource retrieves applications, accesible by url */tenant/tenants/{tenantId}/applications*
-   The tenant application reference resource represents individual application reference that can be view, accesible by url */tenant/tenants/{tenantId}/applications/{applicationId}*
-   The tenant option collection resource enables creating new option and viewing existing options, accesible by url */tenant/options*
-   The tenant option resource represents individual option that can be view and modified, accesible by url */tenant/options/{optionCategory}/{optionKey}*
-   The tenant usage statistics resources return information on the request load and database usage of tenants.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

## Tenant collection

### TenantCollection [application/vnd.com.nsn.cumulocity.tenantCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|tenants|Tenant|0..n|List of Tenant, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of tenants.|
|next|URI|0..1|Link to a potential next page of tenants.|

### GET a representation of a Tenant Collection.

Response body: TenantCollection
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get tenants as sample\_tenant.

     
    GET /tenant/tenants
    Host: ...
    Authorization: Basic ...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenantCollection+json;ver=...
    Content-Length: ...
    {
        "statistics": {
            "currentPage": 1,
            "pageSize": 5,
            "totalPages": 1
        },
        "self": "<<Collection URL>>",
        "tenants": [
            {
                "adminName": "admin",
                "applications": {
                    "references": [],
                    "self":"<<ApplicationCollection of This Tenant  URL>>",
                },
                "company": "sample_company",
                "domain": "sample_domain.com",
                "id": "sample_tenant",
                "ownedApplications": {
                    "references": [
                        {
                            "application": {
                                "availability": "PRIVATE",
                                "id": "5",
                                "key": "<<hashed value>>",
                                "name": "sample_private_application",
                                "owner": {
                                    "self":"<<Application Owner Tenant URL>>",
                                    "tenant": {
                                        "id": "sample_tenant"
                                    }
                                },
                                "self":"<<Application 5 URL>>",
                                "type": "EXTERNAL"
                            },
                            "self":"<<This Tenant Application 5 URL>>",
                        },
                        ...
                    ],
                    "self":"<<ApplicationCollection of This Tenant URL>>",
                },
                "self":"<<This Tenant URL>>",
                "status": "ACTIVE"
            },
            {
                "applications": {
                    "references": [],
                    "self": "<<ApplicationCollection of This Tenant URL>>",
                },
                "company": "sample_company",
                "domain": "sample_domain.com",
                "id": "next_sample_tenant",
                "ownedApplications": {
                    "references": [
                        {
                            "application": {
                                "availability": "MARKET",
                                "id": "6",
                                "key": "<<hashed value>>",
                                "name": "market_application",
                                "owner": {
                                    "self":"<<Application Owner Tenant URL>>",
                                    "tenant": {
                                        "id": "next_sample_tenant"
                                    }
                                },
                                "self":"<<Application 6 URL>>",
                                "type": "EXTERNAL"
                            },
                            "self":"<<This Tenant Application 6 URL>>",
                        }
                    ],
                    "self":"<<ApplicationCollection of This Tenant URL>>",
                },
                "self":"<<This Tenant URL>>",
            },
            ...
        ]
    }
    
### POST - Create a new Tenant

Request body: Tenant

Response body: Tenant

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN

Example request:
				
	POST /tenant/tenants
	Host: ...
	Authorization: Basic ...
	Content-Length: ...
	Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver...
	
	{
		"id" : "sample_tenant",
		"company" : "sample_company",
		"domain" : "sample_domain.com",
		"contactName" : "Mr. Doe",
		"contactPhone" : "0123-4567829",
		"adminName" : "firstAdmin",
		"adminPass" : "myPassword",
		"customProperties" : {"referenceId":"1234567890"}
	}

Example Response:


	HTTP/1.1 201 Created
	Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
	Content-Length: ...
	Location: <<URL of new tenant>>
	
	{
		"id" : "sample_tenant",
		"self" : "<<URL of new tenant>>",
		"company" : "sample_company",
		"domain" : "tenant_nsn.com",
		"contactName" : "Mr. Doe",
		"contactPhone" : "0123-4567829",
		"status" : "ACTIVE",
		"adminName" : "firstAdmin",
		"customProperties" : {"referenceId":"1234567890"}
	}




## Tenant

### Tenant [application/vnd.com.nsn.cumulocity.tenant+json]

|Name|Type|Occurs|Description|Visibility|
|:---|:---|:-----|:----------|:---------|
|self|URI|0..1|Link to this resource.|Public|
|id|String: max length="32"|1|Tenant id|Public|
|status|String|1|Status of tenant, possible values [ACTIVE, SUSPENDED].|Private|
|adminName|String: max length = "50"|1|Administrator user name|Private|
|domain|String: max length = "256"|1|URL of tenants domain.|Public|
|company|String: max length = "256"|1|Tenants company name.|Public|
|contactName|String: max length = "30"|1|Contact person name.|Public|
|contactPhone|String: max length= "20"|1|Contact person phone number.|Public|
|applications|ApplicationReferenceCollection|1|Collection of tenant subscribed, applications.|Private|
|ownedApplications|ApplicationReferenceCollection|1|Collection of tenant owned, applications.|Public - only applications with availability MARKET|,
|customProperties|Object|1|Keeps a list of custom properties|optional|

### GET a representation of a Tenant.

Response body: Tenant
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get single tenant.

     
    GET /tenant/tenants/{{tenantId}}
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.tenant+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    Content-Length: ...
    {
        "adminName": "admin",
        "applications": {
            "references": [],
            "self":"<<ApplicationCollection of This Tenant  URL>>",
        },
        "company": "sample_company",
        "domain": "sample_domain.com",
        "id": "sample_tenant",
        "ownedApplications": {
            "references": [
                {
                    "application": {
                        "availability": "PRIVATE",
                        "id": "5",
                        "key": "<<hashed value>>",
                        "name": "sample_private_application",
                        "owner": {
                            "self":"<<Application Owner Tenant URL>>",
                            "tenant": {
                                "id": "sample_tenant"
                            }
                        },
                        "self":"<<Application 5 URL>>",
                        "type": "EXTERNAL"
                    },
                    "self":"<<This Tenant Application 5 URL>>",
                },
               ...
            ],
            "self":"<<ApplicationCollection of This Tenant URL>>",
        },
        "self":"<<This Tenant URL>>",
        "status": "ACTIVE"
    }
    
### PUT - Update an existing tenant.

Request body: Tenant

Response body: Tenant
  
Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN

Example Request :
     
    PUT /tenant/tenants/{{tenantId}}
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Accept: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    
    {
       "adminName" : "newAdmin"
    }
    
Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    Content-Length: ...
    {
    	 "id": "sample_tenant",
    	 "self":"<<ApplicationCollection of This Tenant URL>>",
        "company": "sample_company",
        "domain": "sample_domain.com",
        "status": "ACTIVE",
        "self":"<<This Tenant URL>>",
        "ownedApplications": {
            "references": [
                {
                    "application": {
                        "availability": "PRIVATE",
                        "id": "5",
                        "key": "<<hashed value>>",
                        "name": "sample_private_application",
                        "owner": {
                            "self":"<<Application Owner Tenant URL>>",
                            "tenant": {
                                "id": "sample_tenant"
                            }
                        },
                        "self":"<<Application 5 URL>>",
                        "type": "EXTERNAL"
                    },
                    "self":"<<This Tenant Application 5 URL>>",
                },
               ...
            ],
        },
      "adminName" : "newAdmin"
    }
    
    
### DELETE  a representation of a Tenant.

Response body: N/A

Response body: N/A

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN

Example request:

	DELETE /tenant/tenants/{{tenantId}}
	Host: [hostname]
	Authorization: Basic xxxxxxxxxxxxxxxxxxx
    
Example response:

	HTTP/1.1  204 NO CONTENT



## Application reference collection

### ApplicationReferenceCollection [application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json].

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|references|ApplicationReference|0..n|List of Options, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of options.|
|next|URI|0..1|Link to a potential next page of options.|

### GET a representation of a ApplicationReferenceCollection.

Response body: ApplicationReferenceCollection
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get Application reference collection.

     
    GET /tenant/tenants/{{tenantId}}/applications
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Collection URL>>",
      "references": [
        {
          "application": {
              "availability": "PRIVATE",
              "id": "5",
              "key": "<<hashed value>>",
              "name": "sample_private_application",
              "owner": {
                  "self":"<<Application Owner Tenant URL>>",
                  "tenant": {
                      "id": "sample_tenant"
                  }
              },
              "self":"<<Application 5 URL>>",
              "type": "EXTERNAL"
          },
          "self":"<<This Tenant Application 5 URL>>",
        },
            ...
      ],
      "statistics" : {
        "totalPages" : 1,
        "pageSize" : 5,
        "currentPage" : 1
      },
      "next" : "...",
      "prev" : "..."
    }

## Application reference

### ApplicationReference [application/vnd.com.nsn.cumulocity.applicationReference+json].

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|reference|Application|0..n|The Application being referenced|

### GET a representation of a ApplicationReference.

Response body: ApplicationReference
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example Request: Get options.

     
    GET /tenant/tenants/{{tenantId}}/applications/{{applicationId}}
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.applicationReference+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReference+json;ver=...
    Content-Length: ...
    {
      "application": {
          "availability": "PRIVATE",
          "id": "5",
          "key": "<<hashed value>>",
          "name": "sample_private_application",
          "owner": {
              "self":"<<Application Owner Tenant URL>>",
              "tenant": {
                  "id": "sample_tenant"
              }
          },
          "self":"<<Application 5 URL>>",
          "type": "EXTERNAL"
      },
      "self":"<<This Tenant Application 5 URL>>",
    }

## Option collection

### OptionCollection [application/vnd.com.nsn.cumulocity.optionCollection+json].

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|options|Option|0..n|List of Options, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of options.|
|next|URI|0..1|Link to a potential next page of options.|

### GET a representation of a OptionCollection.

Response body: OptionCollection
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example Request: Get options.

     
    GET /tenant/options
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Collection URL>>",
      "options": [
            {
                "category": "access.control",
                "key": "allow.origin",
                "self": "<<Option access.control.allow.origin URL>>",
                "value": "*"
            },
            ...
      ],
      "statistics" : {
        "totalPages" : 1,
        "pageSize" : 5,
        "currentPage" : 1
      },
      "next" : "...",
      "prev" : "..."
    }

### POST a representation of a Option.

Request body: Option

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN

Example Request: Post option.

     
    POST /tenant/options
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "category" : "alarm.type.mapping",
        "key": "temp_too_high",
        "value": "CRITICAL|temperature too high"
    }

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Content-Length: ...
    {
        "self" : "<<Option alarm.type.mapping.temp_too_high URL>>"
        "category" : "alarm.type.mapping",
        "key": "temp_too_high",
        "value": "CRITICAL|temperature too high"
    }

## Option

Options are category-key-value tuples, storing tenant configuration. Some categories of options allow creation of new one, other are limited to predefined set of keys.

### Default Options

|Category|Key|Default value|Only predefined|Description|
|:-------|:--|:------------|:--------------|:----------|
|access.control|allow.origin|\*|yes|Comma separated list of domains allowed for execution of CORS. Wildcards are allowed (e.g. \*.cumuclocity.com)|
|alarm.type.mapping|&lt;&lt;alarmType&gt;&gt;||no|Overrides severity and alarm text for the alarm with type "&lt;&lt;alarmType&gt;&gt;". Severity and text are specified as "&lt;&lt;alarmSeverity&gt;&gt;&#124;&lt;&lt;alarmText&gt;&gt;". If either part of the text is empty, the value will not be overridden. If severity is "NONE", the alarm will be suppressed.|

### Option [application/vnd.com.nsn.cumulocity.option+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|0..1|Link to this resource.|
|category|String|1|Category of option|
|key|String|1|Key of option|
|value|String|1|Value of option|

### GET a representation of a Option.

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ
 Example Request: Get single option.

     
    GET /tenant/options/{{category}}/{{key}}
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "self": "<<Option access.control.allow.origin URL>>",
        "value": "*"
    }

### PUT - Update a Option.

Request body: Option

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN
 Example Request: Update access.control.allow.origin option.

     
    PUT /tenant/options/{{category}}/{{key}}
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "value": "http://developer.cumulocity.com"
    }

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "self": "<<Option access.control.allow.origin URL>>",
        "value": "http://developer.cumulocity.com"
    }

## System Options

This endpoint provides a set of read-only properties pre-defined in platform configuration. The response format is exactly the same as for OptionCollection.

Response body: OptionCollection
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example Request: Get system options.

     
    GET /tenant/system/options
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
    {
      "options": [
            {
                "category": "access.control",
                "key": "allow.origin",
                "value": "*"
            },
            ...
      ],
    }

It is also poss	ible to query a single system option passing in url path category and id:

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ
 Example Request: Get single option.

     
    GET /tenant/system/option/{category}/{id}
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "value": "*"
    }

##  Tenant usage statistics

### UsageStatistics

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|day|String|1|Date of statistics.|
|deviceCount|Number|1|Number of devices in the tenant (c8y\_IsDevice).|
|requestCount|Number|1|Number of requests that were issued against the tenant.|
|storageSize|Number|1|Database storage in use by the tenant, in bytes.|

"requestCount" contains the sum of all issued requests during the querying period. "deviceCount" and "storageSize" contain the last reported value during the querying period. Please note:

 * "deviceCount" and "storageSize" are updated every six hours.
 * "storageSize" is affected by your retention rules. It is also affected by the regularly running database optimization functions running in Cumulocity. If the size decreases, it does not necessarily mean that data was deleted.
 * Days are counted according to server timezone.

### TenantUsageStatisticsCollection [application/vnd.com.nsn.cumulocity.tenantUsageStatisticsCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|usageStatistics|UsageStatistics|0..n|List of usage statistics, see above.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of tenants.|
|next|URI|0..1|Link to a potential next page of tenants.|

### GET a representation of a TenantUsageStatisticsCollection

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
            "requestCount": 103966,
            "self": "...",
            "storageSize": 1005442845
        },
        {
            "day": "2014-08-07T00:00:00.000+02:00",
            "requestCount": 116378,
            "self": "...",
            "storageSize": 1151862557
        },
        ...
        ]
    }

### GET a summary of all tenant usage statistics

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
            "deviceCount": "5",
            "requestCount": 116378,
            "tenantId": "tenant1",
            "storageSize": 1151862557
        },
        {
            "deviceCount": "2",
            "requestCount": 116378,
            "tenantId": "tenant2",
            "storageSize": 1151862557
        },
        ...
	]
    

### TenantUsageStatisticsSummary [application/vnd.com.nsn.cumulocity.tenantUsageStatisticsSummary+json]


### GET a representation of a TenantUsageStatisticsSummary

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
        "requestCount": 15013818,
        "storageSize": 983856925
    }

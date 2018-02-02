---
order: 150
title: Tenants
layout: default
---

## Tenants

The tenant interface consists of the following parts:

-   Tenant collection resource - retrieves tenants, accessible by the URL */tenant/tenants*
-   Tenant resource - represents an individual tenant that can be viewed, accessible through the URL */tenant/tenants/{tenantId}*
-   Tenant application reference collection resource - retrieves applications, accessible through the URL */tenant/tenants/{tenantId}/applications*
-   Tenant application reference resource - represents an individual application reference that can be viewed, accessible through the URL */tenant/tenants/{tenantId}/applications/{applicationId}*
-   Tenant option collection resource - enables creating new option and viewing existing options, accessible through the URL */tenant/options*
-   Tenant option resource - represents an individual option that can be viewed and modified, accessible through the URL */tenant/options/{optionCategory}/{optionKey}*
-   Tenant usage statistics resources - return information on the request load and database usage of tenants
-   *current tenant* resource - represents user data for currently logged service user
 
> **Info:** For all PUT/POST requests an accept header must be provided, otherwise an empty response body will be returned.

## Tenant collection

### TenantCollection [application/vnd.com.nsn.cumulocity.tenantCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource|
|tenants|Tenant|0..n|List of tenants, see below|
|statistics|PagingStatistics|1|Information about paging statistics|
|prev|URI|0..1|Link to a potential previous page of tenants|
|next|URI|0..1|Link to a potential next page of tenants|

### GET a representation of a tenant collection

Response body: TenantCollection
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example request: Get tenants as sample\_tenant.
     
    GET /tenant/tenants
    Host: ...
    Authorization: Basic ...

Example response:

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
				"allowCreateTenants": false,
				"storageLimitPerDevice": 10485760,
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
		"parent": "parentTenant",
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
    
### POST - create a new tenant

Request body: Tenant

Response body: Tenant

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN or ROLE\_TENANT\_MANAGEMENT\_CREATE

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
		"adminEmail" : "john.doe@sample_domain.com",
		"adminName" : "firstAdmin",
		"adminPass" : "myPassword",
		"customProperties" : {"referenceId":"1234567890"},
		"sendPasswordResetEmail": true
	}

Example response:

	HTTP/1.1 201 Created
	Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
	Content-Length: ...
	Location: <<URL of new tenant>>
	
	{
		"id" : "sample_tenant",
		"allowCreateTenants": false,
		"self" : "<<URL of new tenant>>",
		"company" : "sample_company",
		"domain" : "tenant_nsn.com",
		"contactName" : "Mr. Doe",
		"contactPhone" : "0123-4567829",
		"status" : "ACTIVE",
		"adminName" : "firstAdmin",
		"parent": "parentTenant",
		"adminEmail" : "john.doe@sample_domain.com",
		"customProperties" : {"referenceId":"1234567890"}
	}

In the following table you can see the restrictions for each field.

|Field|Type|
|:----|:---|
|id|VARCHAR(32)|
|company_name|VARCHAR(256)|
|domain_name|VARCHAR(256)|
|contact_name|VARCHAR(30)|
|contact_phone|VARCHAR(20)|
|administrator|VARCHAR(50)|

> **Info:** Creating a tenant with adminName, adminPass and adminEmail creates an admin user with these settings.
For the tenant ID, SQL keywords (e.g., select, cross, where) are not allowed. 

## Tenant

### Tenant [application/vnd.com.nsn.cumulocity.tenant+json]

|Name|Type|Occurs|Description|Visibility|
|:---|:---|:-----|:----------|:---------|
|self|URI|0..1|Link to this resource|Public|
|id|String: max length="32"|1|Tenant ID|Public|
|status|String|1|Status of tenant, possible values [ACTIVE, SUSPENDED]|Private|
|adminName|String: max length = "50"|1|Administrator user name. Whitespaces, slashes, +$: characters not allowed|Private|
|adminEmail|String|1|Administrator email|Private|
|allowCreateTenants|boolean|1|Specifies, if this tenant can create its own tenants|Private|
|storageLimitPerDevice|number|1|Storage quota per device|Private|
|adminPassword|String|1|Administrator password|Private|
|sendPasswordResetEmail|boolean|1|Enable password reset|Private|
|domain|String: max length = "256"|1|URL of tenant domain|Public|
|company|String: max length = "256"|1|Tenant company name|Public|
|contactName|String: max length = "30"|1|Contact person name|Public|
|contactPhone|String: max length= "20"|1|Contact person phone number|Public|
|applications|ApplicationReferenceCollection|1|Collection of tenant subscribed applications|Private|
|ownedApplications|ApplicationReferenceCollection|1|Collection of tenant owned applications|Public - only applications with availability MARKET|,
|customProperties|Object|1|Keeps a list of custom properties|optional|
|parent|String|1|Name of parent tenant, the creator of this tenant|Public|

### GET a representation of a tenant

Response body: Tenant
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example request: Get single tenant

     
    GET /tenant/tenants/<<tenantId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.tenant+json;ver=...

Example response:

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
		"allowCreateTenants": false,
		"storageLimitPerDevice": 10485760,
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
	"parent": "parentTenant",
        "status": "ACTIVE"
    }
    
### PUT - update an existing tenant

Request body: Tenant

Response body: Tenant
  
Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN or ROLE\_TENANT\_MANAGEMENT\_UPDATE

Example request:
     
    PUT /tenant/tenants/<<tenantId>>
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Accept: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    
    {
       "adminName" : "newAdmin"
    }
    
Example response:

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
		"allowCreateTenants": false,
		"storageLimitPerDevice": 10485760,
		"parent": "parentTenant",
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

>**Info:** Changing adminPass and adminEmail updates these settings in the admin user of the tenant. Updating adminName has no effect.
    
    
### DELETE a representation of a tenant

Response body: N/A

Response body: N/A

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN

Example request:

	DELETE /tenant/tenants/<<tenantId>>
	Host: [hostname]
	Authorization: Basic xxxxxxxxxxxxxxxxxxx
    
Example response:

	HTTP/1.1  204 NO CONTENT



## Application reference collection

### ApplicationReferenceCollection [application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json].

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource|
|references|ApplicationReference|0..n|List of options, see below|
|statistics|PagingStatistics|1|Information about paging statistics|
|prev|URI|0..1|Link to a potential previous page of options|
|next|URI|0..1|Link to a potential next page of options|

### POST application to tenant applications

Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN or ROLE\_TENANT\_MANAGEMENT\_UPDATE

Example request: Adds application reference to tenant's applications

    POST /tenant/tenants/<<tenantId>>/applications
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReference+json;ver=...
    {
        "application":{"self":"<<Application URL>>"}
    }


Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationReference+json;ver=...
    Content-Length: ...
    {
        "application":{"self":"<<Application URL>>", "id":...}
    }

### GET a representation of a ApplicationReferenceCollection.

Response body: ApplicationReferenceCollection
  
Required role: ROLE\_TENANT\_MANAGEMENT\_READ

Example request: Get application reference collection
     
    GET /tenant/tenants/<<tenantId>>/applications
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.applicationReferenceCollection+json;ver=...

Example response:

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
|self|URI|1|Link to this resource|
|reference|Application|0..n|The application being referenced|

### DELETE application reference from tenant's applications

Response body: ApplicationReference
  
Required role: ROLE\_TENANT\_MANAGEMENT\_ADMIN

Example request: Delete reference
     
    DELETE /tenant/tenants/<<tenantId>>/applications/<<applicationId>>
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1  204 NO CONTENT
    

## Option collection

### OptionCollection [application/vnd.com.nsn.cumulocity.optionCollection+json].

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource|
|options|Option|0..n|List of options, see below|
|statistics|PagingStatistics|1|Information about paging statistics|
|prev|URI|0..1|Link to a potential previous page of options|
|next|URI|0..1|Link to a potential next page of options|

### GET a representation of a OptionCollection

Response body: OptionCollection
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example request: Get options
     
    GET /tenant/options
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...

Example response:

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

### POST a representation of an option

Request body: Option

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN

Example request: Post option
     
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

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Content-Length: ...
    {
        "self" : "<<Option alarm.type.mapping.temp_too_high URL>>"
        "category" : "alarm.type.mapping",
        "key": "temp_too_high",
        "value": "CRITICAL|temperature too high"
    }

## Options

Options are category-key-value tuples, storing tenant configuration. Some categories of options allow the creation of new ones, others are limited to a predefined set of keys. 

Any option of any tenant can be defined as "non-editable" by a management tenant. As a result, any PUT or DELETE requests made on that option by the owner tenant, will result in error 403 (Unauthorized).

### Default options

|Category|Key|Default value|Only predefined|Description|
|:-------|:--|:------------|:--------------|:----------|
|access.control|allow.origin|\*|yes|Comma-separated list of domains allowed for execution of CORS. Wildcards are allowed (e.g. \*.cumuclocity.com)|
|alarm.type.mapping|&lt;&lt;alarmType&gt;&gt;||no|Overrides severity and alarm text for the alarm with type "&lt;&lt;alarmType&gt;&gt;". Severity and text are specified as "&lt;&lt;alarmSeverity&gt;&gt;&#124;&lt;&lt;alarmText&gt;&gt;". If either part of the text is empty, the value will not be overridden. If severity is NONE, the alarm will be suppressed.|

### Option [application/vnd.com.nsn.cumulocity.option+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|0..1|Link to this resource|
|category|String|1|Category of option|
|key|String|1|Key of option|
|value|String|1|Value of option|

### GET a representation of an option

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example request: Get single option
     
    GET /tenant/options/<<category>>/<<key>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "self": "<<Option access.control.allow.origin URL>>",
        "value": "*"
    }

### PUT - update an option

Request body: Option

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN

Example request: Update access.control.allow.origin option

     
    PUT /tenant/options/<<category>>/<<key>>
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "value": "http://developer.cumulocity.com"
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "self": "<<Option access.control.allow.origin URL>>",
        "value": "http://developer.cumulocity.com"
    }

### PUT - update multiple options in provided category

Request body: Option

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN

Example request: Update options in provided category
     
    PUT /tenant/options/<<category>>
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
        "key4": "value4"
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...

### GET options from provided category

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example request: Get options from given category
     
    GET /tenant/options/<<category>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...
    Content-Length: ...
     {
       "key1": "value1"
       "key2": "value2",
       "key3": "value3",
       "key4": "value4",
     }

### PUT - define option editability

Request body: Option

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN, Required tenant: management

Example request: Update access.control.allow.origin option
     
    PUT /tenant/options/<<category>>/<<key>>/editable
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "editable": "false"
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "self": "<<Option access.control.allow.origin URL>>",
        "value": "http://developer.cumulocity.com"
    }

## System options

This endpoint provides a set of read-only properties predefined in platform configuration. The response format is exactly the same as for OptionCollection.

Response body: OptionCollection
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example request: Get system options
     
    GET /tenant/system/options
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.optionCollection+json;ver=...

Example response:

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

It is also possible to query a single system option passing in URL path category and ID:

Response body: Option
  
Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example request: Get single option
     
    GET /tenant/system/option/<<category>>/<<id>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...

Example response:

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
|day|String|1|Date of statistics|
|deviceCount|Number|1|Number of devices in the tenant (c8y\_IsDevice)|
|deviceRequestCount|Number|1|Number of requests that were issued by devices against the tenant|
|deviceWithChildrenCount|Number|1|Number of devices with all children|
|requestCount|Number|1|Number of requests that were issued against the tenant|
|storageSize|Number|1|Database storage in use by the tenant, in bytes|
|subscribedApplications|List|1|Names of tenant subscribed applications|

"requestCount" and "deviceRequestCount" contains the sum of all issued requests during the querying period. "deviceCount" and "storageSize" contain the last reported value during the querying period. 


"requestCount" and "deviceRequestCount" are updated every 5 minutes.
 "deviceCount", "deviceWithChildrenCount", "storageSize" and "subscribedApplications" are updated daily starting at 23:57.
 
 "storageSize" is affected by your retention rules. It is also affected by the regularly running database optimization functions running in Cumulocity. If the size decreases, it does not necessarily mean that data was deleted.
 
 Days are counted according to server timezone.

"deviceRequestCount" - device requests are recognized as requests that do not contain "X-Cumulocity-Application-Key" header. 
In addition, requests to /user, /tenant and /application API's are never counted as "deviceRequestCount".

Request counting in SmartREST and MQTT:

- SmartREST: each row in SmartREST request is transformed into a separate HTTP request. For example, if one SmartREST request contains 10 rows, then 10 separate calls are executed, meaning that request count is increased by 10. 
- MQTT: each row/line counts as a separate request. Creating custom template counts as a single request.


### TenantUsageStatisticsCollection [application/vnd.com.nsn.cumulocity.tenantUsageStatisticsCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource|
|usageStatistics|UsageStatistics|0..n|List of usage statistics, see above|
|statistics|PagingStatistics|1|Information about paging statistics|
|prev|URI|0..1|Link to a potential previous page of tenants|
|next|URI|0..1|Link to a potential next page of tenants|

### GET a representation of a TenantUsageStatisticsCollection

|      Query param      |   type   |
|:----------------------|:---------|
| dateFrom (inclusive)  | datetime |
| dateTill (inclusive)  | datetime |

Response body: TenantUsageStatisticsCollection
  
Required role: ROLE\_TENANT\_STATISTICS\_READ

Example request: Get statistics of current tenant starting Aug 1st, 2014, until today.

    GET /tenant/statistics?dateFrom=2014-08-01
    Host: ...
    Authorization: Basic ...

Example response:

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

Example request: Get statistics of all tenants starting Aug 1st, 2014, until today.

    GET /tenant/statistics/allTenantsSummary?dateFrom=2014-08-01
    Host: ...
    Authorization: Basic ...


Example response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: ...
    [
        {
            "deviceCount": "5",
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
            "deviceCount": "2",
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

Example request: Get summary of requests and database usage from the start of this month until now.

    GET /tenant/statistics/summary
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenantUsageStatisticsSummary+json; charset=UTF-8; ver=0.9
    Content-Length: ...

    {
        "self": "...",
        "day": "2014-08-21T00:00:00.000+02:00",
        "deviceCount": 30,
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

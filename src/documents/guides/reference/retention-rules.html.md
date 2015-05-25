---
order: 180
title: Retention rules
layout: default
---

## Retention rules
Rules are used to removing retention data from data base once a day. Which data will be deleted shows directly retention rules. For example retention rule with dataType=EVENT and maximumAge=30 removes from system all events older than 30 days.  
The Retention rules interface consists of parts:
-   The retention rule collection resource retrieves retention rules, accesible by url */retention/retentions*
-   The retention rule resource represents individual retention rule that can be view, accesible by url */retetion/retentions/{retentionRuleId}*

## Retention rule collection

### RetentionRuleCollection [application/vnd.com.nsn.cumulocity.retentionRuleCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|retentionRules|RetentionRule|0..n|List of Retention rule, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of tenants.|
|next|URI|0..1|Link to a potential next page of tenants.|


### GET a representation of a RetentionRuleCollection.

Response body: RetentionRuleCollection
  
Required role: ROLE\_RETENTION\_RULE\_READ

Example Request: Get retentionRules as sample\_tenant.

     
    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.retentionRuleCollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.retentionRuleCollection+json;ver=...
    Content-Length: ...
    {
    "statistics": {
        "currentPage": 1,
        "pageSize": 5,
        "totalPages": 1
    },
    "retentionRules": [
        {
            "dataType": "ALARM",
            "fragmentType": "fragmentType",
            "id": 1,
            "maximumAge": 12,
            "self": "<<URL of retentionRule>>",
            "source": "source",
            "type": "type"
        },
        {
            "dataType": "ALARM",
            "fragmentType": "fragmentType",
            "id": 2,
            "maximumAge": 12,
            "self": "<<URL of retentionRule>>",
            "source": "source",
            "type": "type"
        },
        {
            "dataType": "*",
            "fragmentType": "*",
            "id": 5,
            "maximumAge": 12,
            "self": "<<URL of retentionRule>>",
            "source": "*",
            "type": "*"
        },
        {
            "dataType": "ALARM",
            "fragmentType": "fragmentTypeUpdated",
            "id": 3,
            "maximumAge": 24,
            "self": "<<URL of retentionRule>>",
            "source": "source",
            "type": "type"
        }
    ],
    "self": "<<URL of current page>>"
    }
    
    
### POST - Create a new RetentionRule

Request body: RetentionRule

Response body: RetentionRule

Required role: ROLE\_RETENTION\_RULE\_ADMIN

Example request (full POST):
	
	POST ...
	Host: ...
	Authorization: Basic ...
	Content-Length: ...
	Content-Type: application/vnd.com.nsn.cumulocity.retentionRule+json;ver...
	
	{
        "dataType":"ALARM",
        "fragmentType":"fragmentType",
        "type":"type",
        "source":"source",
        "maximumAge":"12"
    }
	
Example Response (full POST):

	HTTP/1.1 201 Created
	Content-Type: application/vnd.com.nsn.cumulocity.retentionRule+json;ver=...
	Content-Length: ...
	Location: <<URL of new retentionRule>>
	
	{
	    "id" : "<<ID of new retetionRule>>",
		"self" : "<<URL of new retetionRule>>",
        "dataType":"ALARM",
        "fragmentType":"fragmentType",
        "type":"type",
        "source":"source",
        "maximumAge":"12"
    }
	
Example request (partial POST):
	
	POST ...
	Host: ...
	Authorization: Basic ...
	Content-Length: ...
	Content-Type: application/vnd.com.nsn.cumulocity.retentionRule+json;ver...
	
	{
        "dataType":"ALARM",
        "maximumAge":"12"
    }

Example Response (partial POST):

	HTTP/1.1 201 Created
	Content-Type: application/vnd.com.nsn.cumulocity.retentionRule+json;ver=...
	Content-Length: ...
	Location: <<URL of new retentionRule>>
	
	{
	    "id" : "<<ID of new retetionRule>>",
		"self" : "<<URL of new retetionRule>>",
        "dataType":"ALARM",
        "fragmentType":"*",
        "type":"*",
        "source":"*",
        "maximumAge":"12"
    }




## RetentionRule

### RetentionRule [application/vnd.com.nsn.cumulocity.retentionRule+json]

|Name|Type|Occurs|Description|Visibility|
|:---|:---|:-----|:----------|:---------|
|self|URI|0..1|Link to this resource.|Public|
|id|Long|1|RetentionRulle id.|Public|
|dataType|String|0..1|RetentionRule will be applied to this type of documents, possible values [ALARM, AUDIT, EVENT, MEASUREMENT, OPERATION, *].|Public|
|fragmentType|String|0..1|RetentionRule will be applied to documents with fragmentType.|Public|
|type|String|0..1|RetentionRule will be applied to documents with type.|Public|
|source|String|0..1|RetentionRule will be applied to documnets with source.|Public|
|maximumAge|Long|1|Maximum age of document in days.|Public|
- Fields in RetentionRule are joined by way of the logical operation AND.
- For fields: dataType, fragmentType, type, source can be set value "*". Field with value "*" during matching fits to all.


### GET a representation of a RetentionRule.

Response body: RetentionRule
  
Required role: ROLE\_RETENTION\_RULE\_READ

Example Request: Get single retentionRule.

     
    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.retentionRule+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.retentionRule+json;ver=...
    Content-Length: ...
    {
        "dataType": "EVENT",
        "fragmentType": "*",
        "id" : "<<ID of new retetionRule>>",
        "maximumAge": 12,
        "self" : "<<URL of new retetionRule>>",
        "source": "source",
        "type": "*"
}
    
    
### PUT - Update an existing retentionRule.

Request body: RetentionRule

Response body: RetentionRule
  
Required role: ROLE\_RETENTION\_RULE\_ADMIN

Example Request :
     
    PUT ...
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Accept: application/vnd.com.nsn.cumulocity.retentionRule+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.retentionRule+json;ver=...
    
    {
        "fragmentType":"fragmentTypeUpdated"
    }
    
Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.tenant+json;ver=...
    Content-Length: ...
    {
        "dataType": "EVENT",
        "fragmentType": "fragmentTypeUpdated",
        "id" : "<<ID of new retetionRule>>",
        "maximumAge": 12,
        "self" : "<<URL of new retetionRule>>",
        "source": "source",
        "type": "*"
    }
    
    
### DELETE  a representation of a RetentionRule.

Response body: N/A

Response body: N/A

Required role: ROLE\_RETENTION\_RULE\_ADMIN

Example request:

	DELETE [URL to the resource]
	Host: [hostname]
	Authorization: Basic xxxxxxxxxxxxxxxxxxx
    
Example response:

	HTTP/1.1  204 NO CONTENT


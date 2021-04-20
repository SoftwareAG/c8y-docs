---
weight: 20
title: Retention rule collection
layout: redirect
---

### RetentionRuleCollection [application/vnd.com.nsn.cumulocity.retentionRuleCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|retentionRules|array|0..n|List of Retention rule, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of tenants.|
|next|string|0..1|A URI linking to a potential next page of tenants.|


### GET a representation of a RetentionRuleCollection.

Response body: RetentionRuleCollection

Required role: ROLE\_RETENTION\_RULE\_READ

Example Request: Get retentionRules as sample\_tenant.


    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.retentionrulecollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.retentionrulecollection+json;ver=...
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
	Content-Type: application/vnd.com.nsn.cumulocity.retentionrule+json;ver...

	{
        "dataType":"ALARM",
        "fragmentType":"fragmentType",
        "type":"type",
        "source":"source",
        "maximumAge":"12"
    }

Example Response (full POST):

	HTTP/1.1 201 Created
	Content-Type: application/vnd.com.nsn.cumulocity.retentionrule+json;ver=...
	Content-Length: ...
	Location: <<URL of new retentionRule>>

	{
	    "id" : "<<ID of new retetionRule>>",
		"self" : "<<URL of new retetionRule>>",
        "dataType":"ALARM",
        "fragmentType":"fragmentType",
        "type":"type",
        "source":"source",
        "maximumAge":"12",
        "editable":"true"
    }

Example request (partial POST):

	POST ...
	Host: ...
	Authorization: Basic ...
	Content-Length: ...
	Content-Type: application/vnd.com.nsn.cumulocity.retentionrule+json;ver...

	{
        "dataType":"ALARM",
        "maximumAge":"12"
    }

Example Response (partial POST):

	HTTP/1.1 201 Created
	Content-Type: application/vnd.com.nsn.cumulocity.retentionrule+json;ver=...
	Content-Length: ...
	Location: <<URL of new retentionRule>>

	{
	    "id" : "<<ID of new retetionRule>>",
		"self" : "<<URL of new retetionRule>>",
        "dataType":"ALARM",
        "fragmentType":"*",
        "type":"*",
        "source":"*",
        "maximumAge":"12",
        "editable":"true"
    }

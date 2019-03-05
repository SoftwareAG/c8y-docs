---
weight: 30
title: RetentionRule
layout: redirect
---

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
|editable|boolean|1|Whether the rule is editable. Can be updated only by management tenant.|Public|
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
        "type": "*",
        "editable":"true"
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
        "type": "*",
        "editable":"true"
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

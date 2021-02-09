---
weight: 30
title: RetentionRule
layout: redirect
---

### RetentionRule [application/vnd.com.nsn.cumulocity.retentionRule+json]

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 30%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">A URI linking to this resource.</td>
</tr>
<tr>
<td align="left">id</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">RetentionRule ID.</td>
</tr>
<tr>
<td align="left">dataType</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">RetentionRule will be applied to this type of documents. Possible values: ALARM, AUDIT, EVENT, MEASUREMENT, OPERATION, *</td>
</tr>
<tr>
<td align="left">fragmentType</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">RetentionRule will be applied to documents with fragmentType.</td>
</tr>
<tr>
<td align="left">type</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">RetentionRule will be applied to documents with type.</td>
</tr>
<tr>
<td align="left">source</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">RetentionRule will be applied to documents with source.</td>
</tr>
<tr>
<td align="left">maximumAge</td>
<td align="left">long</td>
<td align="left">1</td>
<td align="left">Maximum age of document in days.</td>
</tr>
<tr>
<td align="left">editable</td>
<td align="left">boolean</td>
<td align="left">1</td>
<td align="left">Whether the rule is editable. Can be updated only by management tenant.</td>
</tr>
</tbody>
</table>

### GET a representation of a RetentionRule.

Response body: RetentionRule

Required role: ROLE\_RETENTION\_RULE\_READ

Example Request: Get single retentionRule.


    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.retentionrule+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.retentionrule+json;ver=...
    Content-Length: ...
    {
        "dataType": "EVENT",
        "fragmentType": "*",
        "id" : "<<ID of new retentionRule>>",
        "maximumAge": 12,
        "self" : "<<URL of new retentionRule>>",
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
    Accept: application/vnd.com.nsn.cumulocity.retentionrule+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.retentionrule+json;ver=...

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
        "id" : "<<ID of new retentionRule>>",
        "maximumAge": 12,
        "self" : "<<URL of new retentionRule>>",
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

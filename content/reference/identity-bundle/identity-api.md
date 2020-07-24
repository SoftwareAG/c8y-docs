---
weight: 10
title: Identity API
layout: redirect
---

### Identity [application/vnd.com.nsn.cumulocity.identityApi+json]

<table>
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 10%;">
<col style="width: 40%;">
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
<td align="left">1</td>
<td align="left">A URL linking to this resource.</td>
</tr>
<tr>
<td align="left">externalId</td>
<td align="left">ExternalID URI template</td>
<td align="left">1</td>
<td align="left">Single external ID, represented by type of the external ID and the value of the external ID, both as strings (placeholders {type} and {value}).</td>
</tr>
<tr>
<td align="left">externalIdsOfGlobalId</td>
<td align="left">ExternalIDCollection URI template</td>
<td align="left">1</td>
<td align="left">Represents a collection of external IDs for a specified global ID (placeholder {globalId}).</td>
</tr>
</tbody>
</table>
### GET the Identity API resource

Response body: identityApi

Required role: ROLE\_IDENTITY\_READ

Example request:

	GET /identity
	Host: ...
	Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.identityapi+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Identity API URL>>",
      "externalId" : "<<ExternalId URL>>/{type}/{externaId}",
      "externalIdsOfGlobalId" : "<<GlobalIdCollection URL>>/{globalId}/externalIds"
    }

---
weight: 30
title: External ID
layout: redirect
---

### External ID [application/vnd.com.nsn.cumulocity.externalId+json]

<table>
colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 30%;">
<col style="width: 20%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
<th align="left">PUT/POST</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">externalId</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The identifier used in the external system that Cumulocity interfaces with.</td>
<td align="left">Mandatory</td>
</tr>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URI linking to this resource.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">type</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The type of the external identifier as string, e.g., “com_cumulocity_model_idtype_SerialNumber”.</td>
<td align="left">Mandatory</td>
</tr>
<tr>
<td align="left">managedObject</td>
<td align="left">ManagedObject</td>
<td align="left">1</td>
<td align="left">The ManagedObject linked to the external ID.</td>
<td align="left">Mandatory</td>
</tr>
</tbody>
</table>

### GET an ExternalID

Response body: ExternalId

Required role: ROLE\_IDENTITY\_READ

Example request:

	GET /identity/externalIds/<<externalIdType>>/<<externalId>>
	Host: ...
	Authorization: Basic ...
	Accept: application/vnd.com.nsn.cumulocity.externalid+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.externalid+json;ver=...
    Content-Length: ...

    {
      "externalId" : "42",
      "self" : "<<URL to this ExternalID mapping>>",
      "type" : "com_cumulocity_model_idtype_SerialNumber",
      "managedObject" : {
        "id" : "24",
        "self" : "<<URL to the Managed Object>>"
      }
    }

### DELETE an ExternalID

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_IDENTITY\_ADMIN

Example Request: Delete an External ID

    DELETE /identity/externalIds/<<externalIdType>>/<<externalId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

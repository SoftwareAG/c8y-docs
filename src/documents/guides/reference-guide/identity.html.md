---
order: 70
title: Identity
layout: default
---

The identity interface allows associating identifiers used in external IT systems and devices with unique identifiers used in Cumulocity. It consists of three parts:

-   The *identity API* resource returns URIs and URI templates for associating external identifiers with unique identifiers.
-   The *external ID collection* resource contains the set of external IDs for a unique ID.
-   The *external ID* resource represents an individual external ID that can be queried and deleted.

# Identity API

## Identity [application/vnd.com.nsn.cumulocity.identityApi+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URL
1
Link to this resource.</td>
<td align="left">externalId
ExternalID URI template
1
Single external ID, represented by type of the external ID and the value of the external ID, both as strings (placeholders &lt;&lt;type&gt;&gt; and &lt;&lt;value&gt;&gt;).</td>
<td align="left">externalIdsOfGlobalId
ExternalIDCollection URI template
1
Represents a collection of external ids for a specified global id (placeholder &lt;&lt;globalId&gt;&gt;).</td>
</tr>
</tbody>
</table>

## GET the Identity API resource

Response body: application/vnd.com.nsn.cumulocity.identityApi+json
  
Required role: ROLE\_IDENTITY\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.identityApi+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Identity API URL>>",
      "externalId" : "<<ExternalId URL>>/{type}/{externaId}",
      "externalIdsOfGlobalId" : "<<GlobalIdCollection URL>>/{globalId}/externalIds"
    }

# External ID collection

## ExternalIDCollection [application/vnd.com.nsn.cumulocity.externalIdCollection+json]

As returned by "externalIdsOfGlobalId".

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
1
Link to this resource.</td>
<td align="left">externalIds
ExternalId
0..n
List of external IDs, see below.</td>
<td align="left">prev
URI
0..1
Link to a potential previous page of external IDs.</td>
<td align="left">next
URI
0..1
Link to a potential next page of external IDs.</td>
</tr>
</tbody>
</table>

External IDs contained in the collection contain the properties "self", "externalId", "type" and reference to the managed object.

## GET an ExternalIdCollection

Response body: ExternalIdCollection
  
Required role: ROLE\_IDENTITY\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.externalIdCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<ExternalIdCollection URL>>",
      "externalIds" :[
        {
          "self" : "<<ExternalId URL>>",
          "externalId" : "42",
          "type" : "theregate",
          "managedObject" : {        "id" : "24",
            "self" : "<<URL to the Managed Object>>"
          }
        },
        {
           ...
        }
      ]
    }

## POST / Create an External ID

Request body: ExternalId
 Response body: ExternalId (when Accept header is not provided, empty response body is returned)
  
Required role: ROLE\_IDENTITY\_ADMIN

Example Request:

    POST ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.externalId+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.externalId+json;ver=...
    Content-Length: ...
     
    {
      "externalId" : "42",
      "type" : "theregate"
    }

Example Response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.externalId+json;ver=...
    Content-Length: ...
    Location: <<URL of new ExternalId mapping>>
     
    {
      "self" : "<<URL of new ExternalId mapping>>",
      "externalId" : "42",
      "type" : "theregate",
      "managedObject" : {
        "id" : "24",
        "self" : "<<URL to the Managed Object>>"
      }
    }

Note that the managed object has to be created first, then the mapping can be registered.

# External ID

## External ID [application/vnd.com.nsn.cumulocity.externalId+json]

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description
PUT/POST</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">externalId
String
1
The identifier used in the external system that Cumulocity interfaces with.
Mandatory</td>
<td align="left">self
URI
1
Link to this resource.
No</td>
<td align="left">type
String
1
The type of the external identifier as string, e.g., &quot;com_cumulocity_model_idtype_SerialNumber&quot;.
Mandatory</td>
<td align="left">managedObject
ManagedObject
1
The ManagedObject linked to the external ID.
Mandatory</td>
</tr>
</tbody>
</table>

## GET an ExternalID

Response body: ExternalId
  
Required role: ROLE\_IDENTITY\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.externalId+json;ver=...
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

## DELETE an ExternalID

Request Body: N/A.
 Response Message Body: N/A.
  
Required role: ROLE\_IDENTITY\_ADMIN

Example Request: Delete an External ID

    DELETE [URL to the resource]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

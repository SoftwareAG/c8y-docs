---
order: 70
title: Identity
layout: default
---
The identity interface associates identifiers used in external IT systems and devices with unique identifiers used in Cumulocity. It consists of three parts:

-   The *identity API* resource returns URIs and URI templates for associating external identifiers with unique identifiers.
-   The *external ID collection* resource contains the set of external IDs for a unique ID.
-   The *external ID* resource represents an individual external ID that can be queried and deleted.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

## Identity API

### Identity [application/vnd.com.nsn.cumulocity.identityApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|externalId|ExternalID URI template|1|Single external ID, represented by type of the external ID and the value of the external ID, both as strings (placeholders {type} and {value}).|
|externalIdsOfGlobalId|ExternalIDCollection URI template|1|Represents a collection of external ids for a specified global id (placeholder {globalId}).|

### GET the Identity API resource

Response body: identityApi
  
Required role: ROLE\_IDENTITY\_READ

Example request: 

	GET /identity
	Host: ...
	Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.identityApi+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Identity API URL>>",
      "externalId" : "<<ExternalId URL>>/{type}/{externaId}",
      "externalIdsOfGlobalId" : "<<GlobalIdCollection URL>>/{globalId}/externalIds"
    }

## External ID collection

### ExternalIDCollection [application/vnd.com.nsn.cumulocity.externalIdCollection+json]

As returned by "externalIdsOfGlobalId".

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|externalIds|ExternalId|0..n|List of external IDs, see below.|
|prev|URI|0..1|Link to a potential previous page of external IDs.|
|next|URI|0..1|Link to a potential next page of external IDs.|

External IDs contained in the collection contain the properties "self", "externalId", "type" and reference to the managed object.

### GET an ExternalIdCollection

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

### POST / Create an External ID

Request body: ExternalId

Response body: ExternalId

Required role: ROLE\_IDENTITY\_ADMIN

Example Request:

    POST /identity/globalIds/<<deviceId>>/externalIds
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

## External ID

### External ID [application/vnd.com.nsn.cumulocity.externalId+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|externalId|String|1|The identifier used in the external system that Cumulocity interfaces with.|Mandatory|
|self|URI|1|Link to this resource.|No|
|type|String|1|The type of the external identifier as string, e.g., "com\_cumulocity\_model\_idtype\_SerialNumber".|Mandatory|
|managedObject|ManagedObject|1|The ManagedObject linked to the external ID.|Mandatory|

### GET an ExternalID

Response body: ExternalId
  
Required role: ROLE\_IDENTITY\_READ

Example request:

	GET /identity/externalIds/<<externalIdType>>/<<externalId>>
	Host: ...
	Authorization: Basic ...
	Accept: application/vnd.com.nsn.cumulocity.externalId+json;ver=...

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

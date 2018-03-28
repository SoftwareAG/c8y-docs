---
order: 30
title: External ID
layout: redirect
---

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

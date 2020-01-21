---
weight: 30
title: Operation
layout: redirect
---

### Operation [application/vnd.com.nsn.cumulocity.operation+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|--------|
|id|String|1|Uniquely identifies an operation.|No|
|self|URI|1|Link to this resource.|No|
|creationTime|String|1|Time when the operation was created in the database.|No|
|deviceID|String|1|Identifies the target device on which this operation should be performed.|POST: Mandatory PUT: No|
|deviceExternalIDs|ExternalIDCollection|0..n|External IDs of the target device, see the [Identity](/reference/identity) interface.|No|
|bulkOperationId|String|1|Reference to bulkOperationId, if this operation was scheduled from Bulk Operation|No|
|status|String|1|Operation status, can be one of SUCCESSFUL, FAILED, EXECUTING or PENDING.|POST: No PUT: Mandatory|
|failureReason|String|0..1|Reason for the failure.|No|
|\*|Object|1..n|Additional properties describing the operation which will be performed on the device.|POST: Optional PUT: Optional|

> **Note**: failureReason is optional only when the PUT status is "failed".

An "ExternalID" embedded in the "deviceExternalIDs" collection contains the properties "type" and "externalId".

### PUT - Update an Operation

Request body: Operation

Response body: n/a.

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN or owner of source object

Example Request:

    PUT /devicecontrol/operations/<<operationId>>
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.operation+json;ver=...
    {
      "status" : "SUCCESSFUL"
    }

### GET an Operation

Response body: Operation

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example request:

    GET /devicecontrol/operations/<<operationId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.operation+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.operation+json;ver=...
    Content-Length: ...
    {
      "id" : "123",
      "self" : "<<This Operation URL>>",
      "deviceId" : "1243",
      "status" : "PENDING",
      "creationTime" : "2011-09-06T12:03:27.927+02:00",
      "com_cumulocity_model_WebCamDevice" : {
        "name" : "take picture",
        "parameters" : {
          "duration" : "5s",
          "quality" : "HD"
        }
      }
    }

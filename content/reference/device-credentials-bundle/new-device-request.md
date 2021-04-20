---
weight: 20
title: New device request
layout: redirect
---

### NewDeviceRequest [application/vnd.com.nsn.cumulocity.newDeviceRequest+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|string|1|Device identifier. Max: 1000 characters. E.g. IMEI|
|status|string|1|Status of registration, one of: WAITING\_FOR\_CONNECTION, PENDING\_ACCEPTANCE, ACCEPTED|
|self|string|1|A URL linking to this resource.|

### GET - returns a new device request

Response body: newDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    GET /devicecontrol/newDeviceRequests/<<requestId>>
    Authorization: Basic ...
	Accept: application/vnd.com.nsn.cumulocity.newdevicerequest+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.newdevicerequest+json;ver=...
    Content-Length: ...
    {
      "id" : "1234",
      "self" : "<<URL of new request>>",
      "status" : "WAITING_FOR_CONNECTION",
    }

### DELETE - deletes a new device request

Request body: N/A

Response body: N/A

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN

Example Request:

    DELETE /devicecontrol/newDeviceRequests/<<requestId>>
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK

### PUT - updates a new device request

Request body: newDeviceRequest

Response body: newDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    PUT /devicecontrol/newDeviceRequests/<<requestId>>
    Content-Type: application/vnd.com.nsn.cumulocity.newdevicerequest+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.newdevicerequest+json;ver=...
    Authorization: Basic ...
    {
      "status" : "ACCEPTED",
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.newdevicerequest+json;ver=...
    Content-Length: ...
    {
      "id" : "1234",
      "self" : "<<URL of new request>>",
      "status" : "ACCEPTED",
    }

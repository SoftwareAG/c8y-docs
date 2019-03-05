---
weight: 10
title: New device request collection
layout: redirect
---

### NewDeviceRequestCollection [application/vnd.com.nsn.cumulocity.newDeviceRequestCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|newDeviceRequests|New device requests |0..n|List of new device requests, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of operations.|
|next|URI|0..1|Link to a potential next page of operations.|

### POST - Create a new device request

Request body: newDeviceRequest

Response body: newDeviceRequest

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN

Example Request:

    POST /devicecontrol/newDeviceRequests
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Authorization: Basic ...
    {
      "id" : "1234",
    }

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Content-Length: ...
    {
      "id" : "1234",
      "self" : "<<URL of new request>>",
      "status" : "WAITING_FOR_CONNECTION",
    }

### GET - returns all new device requests

Response body: newDeviceRequestCollection

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    GET /devicecontrol/newDeviceRequests
    Accept: application/vnd.com.nsn.cumulocity.newDeviceRequestCollection+json;ver=...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Location: <<URL of new operation>>
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequestCollection+json;ver=...
    Content-Length: ...
    {
      "newDeviceRequests": [{
             "id" : "1234",
             "self" : "<<URL of new request>>",
             "status" : "WAITING_FOR_CONNECTION"
      }, {
             "id" : "12345",
             "self" : "<<URL of new request>>",
             "status" : "WAITING_FOR_CONNECTION" }]
    }

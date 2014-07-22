---
order: 65
title: Device credentials
layout: default
---

## New device request collection

### NewDeviceRequestCollection 
[application/vnd.com.nsn.cumulocity.newDeviceRequestCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|newDeviceRequests|New device requests |0..n|List of new device requests, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of operations.|
|next|URI|0..1|Link to a potential next page of operations.|

### POST - Create a new device request

Request body: application/vnd.com.nsn.cumulocity.newDeviceRequest+json
Response body: application/vnd.com.nsn.cumulocity.newDeviceRequest+json
(when Accept header is not provided, empty response body is returned)  
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

Response body: application/vnd.com.nsn.cumulocity.newDeviceRequestCollection+json  
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
             "status" : "WAITING_FOR_CONNECTION" },
    {
             "id" : "12345",
             "self" : "<<URL of new request>>",
             "status" : "WAITING_FOR_CONNECTION" }]
    }

## New device request

### NewDeviceRequest [application/vnd.com.nsn.cumulocity.newDeviceRequest+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|String|1|Device identifier, e.g. IMEI|
|status|String|1|Status of registration, one of: WAITING\_FOR\_CONNECTION, PENDING\_ACCEPTANCE, ACCEPTED|
|self|URL|1|Link to this resource.|

### GET - returns a new device request

Response body: application/vnd.com.nsn.cumulocity.newDeviceRequest+json   
Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    GET /devicecontrol/newDeviceRequests/1234
    Accept: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Content-Length: ...
    {
      "id" : "1234",
      "self" : "<<URL of new request>>",
      "status" : "WAITING_FOR_CONNECTION",
    }

### DELETE - deletes a new device request

   
Required role: ROLE\_DEVICE\_CONTROL\_ADMIN

Example Request:

    DELETE /devicecontrol/newDeviceRequests/1234
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK

### PUT - updates a new device request

Request body: application/vnd.com.nsn.cumulocity.newDeviceRequest+json
Response body: application/vnd.com.nsn.cumulocity.newDeviceRequest+json   
Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request:

    PUT /devicecontrol/newDeviceRequests/1234
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Authorization: Basic ...
    {
      "status" : "ACCEPTED",
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json;ver=...
    Content-Length: ...
    {
      "id" : "1234",
      "self" : "<<URL of new request>>",
      "status" : "ACCEPTED",
    }

## Device credentials

### DeviceCredentials [application/vnd.com.nsn.cumulocity.deviceCredentials+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|String|1|Device identifier, e.g. IMEI|
|tenantId|String|1|Tenant id for authentication|
|username|String|1|New username|
|password|String|1|New password|
|self|URL|1|Link to this resource.|

### POST - creates a device credentials request

Request body: application/vnd.com.nsn.cumulocity.deviceCredentials+json
Response body: application/vnd.com.nsn.cumulocity.deviceCredentials+json   
Required role: ROLE\_DEVICE\_BOOTSTRAP

Example Request:

    POST /devicecontrol/deviceCredentials
    Content-Type: application/vnd.com.nsn.cumulocity.deviceCredentials+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.deviceCredentials+json;ver=...
    Authorization: Basic ...
    {
      "id" : "12345",
    }

Example response:

    HTTP/1.1 201 CREATED
    Content-Type: application/vnd.com.nsn.cumulocity.deviceCredentials+json;ver=...
    Content-Length: ...
    {
      "id" : "12345",
      "tenantId" : "test",
      "username" : "device_1234",
      "password" : "3rasfst4swfa",
      "self" : "<<URL to this device credentials>>"
    }

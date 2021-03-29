---
weight: 20
title: Operation collection
layout: redirect
---

### OperationCollection [application/vnd.com.nsn.cumulocity.operationCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URL linking to this resource.|
|operations|Operations|0..n|List of operations, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of operations.|
|next|string|0..1|A URI linking to a potential next page of operations.|

Notes about Operation Collections:

-   The embedded operation object contains "deviceExternalIDs" only when queried with an "agentId" parameter. 
-   The embedded operation object is filled with "deviceName", but only when requesting resource: Get a collection of operations.
-   Operations are returned in the order of their ascending IDs.

### POST - Create an Operation

Request body: Operation

Response body: Operation 

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN or owner of source object

Example Request:

    POST /devicecontrol/operations/
    Content-Type: application/vnd.com.nsn.cumulocity.operation+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.operation+json;ver=...
    Authorization: Basic ...
    {
      "deviceId" : "1234",
      "com_cumulocity_model_WebCamDevice": {
        "name": "take picture",
        "parameters": {
          "duration": "5s",
          "quality": "HD"
        }
      }
    }

Example response:

    HTTP/1.1 201 Created
    Location: <<URL of new operation>>
    Content-Type: application/vnd.com.nsn.cumulocity.operation+json;ver=...
    Content-Length: ...
    {
      "id" : "123",
      "self" : "<<URL of new operation>>",
      "deviceId" : "1234",
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

### Get a collection of operations

Response body: OperationCollection  

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example Request: Get all operations.

    GET /devicecontrol/operations
    Accept: application/vnd.com.nsn.cumulocity.operationcollection+json;ver=...
    Authorization: Basic ...

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.operationcollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<This OperationCollection URL>>",
      "operations" : [
        {
          "id" : "123",
          "self" : "<<This Operation URL>>",
          "deviceId" : "1234",
	  "deviceName" : "WebCamDevice",
          "status" : "PENDING",
          "creationTime" : "2011-09-06T12:03:27.927Z",
          "com_cumulocity_model_WebCamDevice" : {
            "name" : "take picture",
            "parameters" : {
              "duration" : "5s",
              "quality" : "HD"
            }
          }
        },
        {
          "id" : "124",
          "self" : "<<This Operation URL>>",
          "deviceId" : "1234",
          "deviceName" : "DiscreteStateDevice",
          "status" : "PENDING",
          "creationTime" : "2011-09-06T12:03:27.927Z",
          "com_cumulocity_model_DiscreteStateDevice" : {
                "state" : "off"
          }
        }
      ],
      "statistics" : {
        "pageSize" : 5,
        "currentPage : 1
      }
    }

### DELETE - delete an collection of operations

The DELETE method allows for deletion of operation collections. Applicable query parameters are equivalent to GET method.

Request body: N/A

Response body: N/A

Required role: ROLE\_DEVICE\_CONTROL\_ADMIN

Example request:

     DELETE: /devicecontrol/operations ....
     Host: ...
     Authorization: Basic ...

Example response:

    HTTP/1.1  204 NO CONTENT

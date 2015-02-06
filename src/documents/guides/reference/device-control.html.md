---
order: 50
title: Device control
layout: default
---
The device control interface consists of three parts:

-   The *device control API* resource returns URIs and URI templates to collections of operations, so that operations can be queried by various criteria.
-   The *operation collection* resource retrieves operations and enables creating new operations.
-   The *operation* resource represents individual operations that can be queried and modified.

> In order to create/retrieve/update an operation for a device, the device must be in the "childDevices" hierarchy of an existing agent. To create an agent in the inventory, you should create a managed object with a fragment "com\_cumulocity\_model\_Agent".

## Device control API

### DeviceControlAPI [application/vnd.com.nsn.cumulocity.devicecontrolApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|operations|OperationCollection|1|Collection of all operations.|
|operationsByStatus|OperationCollection URI template|1|Read-only collection of all operations in a particular status (placeholder {status}, see the operation media type below for permitted values).|
|operationsByAgentId|OperationCollection URI template|1|Read-only collection of all operations targeted to a particular agent (placeholder {agentId}, with the unique ID of the agent).|
|operationsByAgentIdAndStatus|OperationCollection URI template|1|Read-only collection of all operations targeted to a particular agent (placeholder {agentId} and {status}).|
|operationsByDeviceId|OperationCollection URI template|1|Read-only collection of all operations to be executed on a particular device (placeholder {deviceId} with the unique ID of the device).|
|operationsByDeviceIdAndStatus|OperationCollection URI template|1|Read-only collection of all operations in particular state, that should be executed on a particular device (placeholder {deviceId} and {status}).|

### GET the Device Control API resource

Response body: application/vnd.com.nsn.cumulocity.devicecontrolApi+json
  
Required role: ROLE\_DEVICE\_CONTROL\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.devicecontrolApi+json;ver=...
    Content-Length: ...
    {
      "self" : "<<DeviceControl API URL>>",
       "operations" : { "self" :"<<OperationsCollection URL>>" },
       "operationsByStatus" : "<<OperationsCollection URL>>?status={status}",
       "operationsByAgentId" : "<<OperationsCollection URL>>?agentId={agentId}",
       "operationsByAgentIdAndStatus" : "<<OperationsCollection URL>>?agentId={agentId}&status={status}",
       "operationsByDeviceId" : "<<OperationsCollection URL>>?deviceId={deviceId}"
       "operationsByDeviceIdAndStatus" : "<<OperationsCollection URL>>?deviceId={deviceId}&status={status}"
    }

## Operation collection

### OperationCollection [application/vnd.com.nsn.cumulocity.operationCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|operations|Operations|0..n|List of operations, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of operations.|
|next|URI|0..1|Link to a potential next page of operations.|

Notes about Operation Collections:

-   The embedded operation object contains "deviceExternalIDs" only when queried with an "agentId" parameter. 
-   Operations are returned in the order in which they have been created (a [FIFO](http://en.wikipedia.org/wiki/FIFO) queue).

### POST - Create an Operation

Request body: Operation

Response body: Operation (when Accept header is not provided, empty response body is returned)
  
Required role: ROLE\_DEVICE\_CONTROL\_ADMIN or owner of source object

Example Request:

    POST ...
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

    GET ...
    Accept: application/vnd.com.nsn.cumulocity.operationCollection+json;ver=...
    Authorization: Basic ...

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.operationCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<This OperationCollection URL>>",
      "operations" : [
        {
          "id" : "123",
          "self" : "<<This Operation URL>>",
          "deviceId" : "1234",
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

## Operation

### Operation [application/vnd.com.nsn.cumulocity.operation+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|--------|
|id|String|1|Uniquely identifies an operation.|No|
|self|URI|1|Link to this resource.|No|
|creationTime|String|1|Time when the operation was created in the database.|No|
|deviceID|String|1|Identifies the target device on which this operation should be performed.|POST: Mandatory PUT: No|
|deviceExternalIDs|ExternalIDCollection|0..n|External IDs of the target device, see the [Identity](/guides/reference/identity) interface.|No|
|status|String|1|Operation status, can be one of SUCCESSFUL, FAILED, EXECUTING or PENDING.|POST: No PUT: Mandatory|
|failureReason|String|0..1|Reason for the failure.|No|
|\*|Object|1..n|Additional properties describing the operation which will be performed on the device.|POST: Mandatory PUT: No|

An "ExternalID" embedded in the "deviceExternalIDs" collection contains the properties "type" and "externalId".

### PUT - Update an Operation

Request body: Operation

Response body: n/a.
  
Required role: ROLE\_DEVICE\_CONTROL\_ADMIN or owner of source object

Example Request:

    PUT ...
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

## Notifications

There are two options to receive real-time notifications for the device control API.
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/guides/reference/real-time-notifications)".

### Receive operations for an agent

Real-time notifications permit an agent to almost immediately receive new operations targeted to it. For control-related notifications, use the URL 

	/devicecontrol/notifications

The subscription channel needs to contain the managed object ID of the agent that wants to receive its operations:

	/<<agentId>>

For example, to subscribe on notifications about new operations created for the agent with the ID "5", the subscription channel should be the following string:

    /5

Required role: ROLE\_DEVICE\_CONTROL\_READ

### Receive operations for a device

This endpoint will not only result in returning newly created operations but also all updates (including deletion) of the operations for a device. The URL is

    /cep/realtime

The subscription channel needs to contain the managed object ID of the device or a "*" as placeholder to receive notifications for all devices

    /operations/<<deviceId>>

The response will additionally to the operation object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the id of the deleted operation.

Example Response:

    HTTP/1.1 200 OK 
    Content-Type: application/json
    [
      {
        "channel": "/operations/12345", 
        "successful": true, 
        "error": "", 
        "data": [{
          "realtimeAction": "CREATE",
          "data": {
            "id": "1",
            "deviceId": "12345",
            "self": "...",
            "creationTime": "2011-09-06T12:03:27.927+02:00",
            "status": "PENDING",
            "time": "2011-09-06T12:03:27.845+02:00",
            "description": "Deactivate motion tracking",
            "c8y_MotionTracking": { ... }
          }
        }], 
        "clientId": "Un1q31d3nt1f13r" 
      }
    ]

Required role: ROLE\_DEVICE\_CONTROL\_READ

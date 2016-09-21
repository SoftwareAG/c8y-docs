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

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

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

Response body: devicecontrolApi
  
Required role: ROLE\_DEVICE\_CONTROL\_READ

Example request:

    GET /devicecontrol
    Host: ...
    Authorization: Basic ...

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
-   The embedded operation object is filled with "deviceName", but only when requesting resource: Get a collection of operations. 
-   Operations are returned in the order in which they have been created (a [FIFO](http://en.wikipedia.org/wiki/FIFO) queue).

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

## Operation

### Operation [application/vnd.com.nsn.cumulocity.operation+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|--------|
|id|String|1|Uniquely identifies an operation.|No|
|self|URI|1|Link to this resource.|No|
|creationTime|String|1|Time when the operation was created in the database.|No|
|deviceID|String|1|Identifies the target device on which this operation should be performed.|POST: Mandatory PUT: No|
|deviceExternalIDs|ExternalIDCollection|0..n|External IDs of the target device, see the [Identity](/guides/reference/identity) interface.|No|
|bulkOperationId|String|1|Reference to bulkOperationId, if this operation was scheduled from Bulk Operation|No|
|status|String|1|Operation status, can be one of SUCCESSFUL, FAILED, EXECUTING or PENDING.|POST: No PUT: Mandatory|
|failureReason|String|0..1|Reason for the failure.|No|
|\*|Object|1..n|Additional properties describing the operation which will be performed on the device.|POST: Mandatory PUT: No|

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

## <a name="control_via_sms"></a> Device control via SMS

In order to send operations via SMS, either the device managed object should contain the fragment:

		"c8y_CommunicationMode": {
    		"mode": "SMS"
		}

or the operation should contain the property:

		"deliveryType": "SMS"

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

## Bulk Operation collection

### BulkOperationCollection [application/vnd.com.nsn.cumulocity.bulkOperationCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|bulkOperations|Operations|0..n|List of bulk operations, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of bulk operations.|
|next|URI|0..1|Link to a potential next page of bulk operations.|

### POST - Create a Bulk Operation

Request body: Bulk Operation

Response body: Bulk Operation
  
Required role: ROLE\_BULK\_OPERATION\_ADMIN

Example Request:

    POST /devicecontrol/bulkoperations
    Content-Type: application/vnd.com.nsn.cumulocity.bulkOperation+json
    Accept: application/vnd.com.nsn.cumulocity.bulkOperation+json
    Authorization: Basic ...
    {
     "operationPrototype":{"test"=>"TEST1"},
     "creationRamp":45,
     "groupId":"10205",
     "startDate":"2015-05-01T22:21:22"
    }

Example response:

    HTTP/1.1 201 Created
    Location: <<URL of new operation>>
    Content-Type: application/vnd.com.nsn.cumulocity.bulkOperation+json

    {
     "id":2,
     "self":"https://dev.cumulocity.com/devicecontrol/bulkoperations/2",
     "operationPrototype":{"test"=>"TEST1"},
     "creationRamp":45,
     "groupId":"10205",
     "startDate":"2015-05-01T22:21:22"
     "progress":
       {
       "pending":0, "failed":0, "executing":0, "successful":0, "all":1
       },
     "status":"ACTIVE"
    }

### Get a collection of bulk operations

Request body: N/A

Response body: BulkOperationCollection  

Required role: ROLE\_BULK\_OPERATION\_READ

Example Request: Get all bulk operations.

    GET /devicecontrol/bulkoperations
    Accept: application/vnd.com.nsn.cumulocity.bulkOperationCollection+json
    Authorization: Basic ...

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.bulkOperationCollection+json
    Content-Length: ...
    {
      "self" : "<<This BulkOperationCollection URL>>",
      "bulkOperations" : [
        {
         "id":2,
         "self":"https://dev.cumulocity.com/devicecontrol/bulkoperations/2",
         "operationPrototype":{"test"=>"TEST1"},
         "creationRamp":45,
         "groupId":"10205",
         "startDate":"2015-05-01T22:21:22"
         "progress":
           {
            "pending":0, "failed":0, "executing":0, "successful":0, "all":1
           },
         "status":"ACTIVE",
        },
        {
         "id":3,
         "self":"https://dev.cumulocity.com/devicecontrol/bulkoperations/3",
         "operationPrototype":{"test"=>"TEST2"},
         "creationRamp":15,
         "groupId":"10201",
         "startDate":"2015-05-05T22:21:22"
         "progress":
           {
            "pending":0, "failed":0, "executing":0, "successful":0, "all":5
           },
         "status":"ACTIVE",
        }
      ],
      "statistics" : {
        "pageSize" : 5,
        "currentPage : 1
      }
    }

By default query bulk operations endpoint does not return CANCELLED operations. It is possible to include them in the response by adding additional query parameter: withDeleted=true.

## Bulk Operation

Bulk Operation API allows to schedule an operation on a group of devices to be executed at a specified time. It is required to specify the delay between every operation is created.
When Bulk Operation is created, it has ACTIVE status. When all operations are created, Bulk Operation has state COMPLETED. It is also possible to cancel already created Bulk Operation by deleting it. 

When you create a Bulk Operation, you can run it in two modes: 
- when groupId is passed, it works standard way, i.e. takes devices from group and schedules operations on them
- when failedBulkOperationId is passed, it takes the already processed bulk operation by that id, and schedules operation on devices for which previous operations failed

Hints and tips:
- it is forbidden to pass both: groupId and failedBulkOperationId,
- bulk operation works with device group of types: static and 'dynamic'.

Bulk Operation API requires different roles that standard device control API. These new roles are: BULK_OPERATION_READ and BULK_OPERATION_ADMIN.

### Bulk Operation [application/vnd.com.nsn.cumulocity.bulkOperation+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|--------|
|id|String|1|Uniquely identifies an operation.|No|
|self|URI|1|Link to this resource.|No|
|groupId|String|1|Identifies the target group on which this operation should be performed.|POST: No PUT: No|
|failedBulkOperationId|String|1|Identifies the failed bulk operation from which failed operations should be rescheduled.|POST: No PUT: No|
|startDate|String|1|Time when operations should be created.|POST: Mandatory PUT: No|
|creationRamp|Number|1|Delay between every operation creation.|POST: Mandatory PUT: No|
|operationPrototype|OperationRepresentation|1|Operation to be executed for every device in a group.|POST: Mandatory PUT: No|
|status|String|1|Status of Bulk Operation. Possible values: ACTIVE, COMPLETED, DELETED|No|
|progress|BulkOperationProgressRepresentation|1|Contains information about number of processed operations.|No|

### PUT - Update a Bulk Operation

Making update on a started bulk operation cancels it and creates/schedules a new one.

Request body: Bulk Operation

Response body: n/a.
  
Required role: ROLE\_BULK\_OPERATION\_ADMIN

Example Request:

    PUT /devicecontrol/bulkoperations/<<bulkoperationId>>
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.bulkoperation+json
    { 
      "creationRamp" : 15
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.bulkoperation+json

    {
      "id" : "123",
      "self" : "<<This BulkOperation URL>>",
      "groupId" : "124301",
      "status" : "ACTIVE",
      "startDate" : "2011-09-06T12:03:27",
      "operationPrototype":{"test"=>"TEST1"},
      "creationRamp":15,
      "progress":
        {
         "pending":0, "failed":0, "executing":0, "successful":0, "all":2
        }
    }

### GET a Bulk Operation

Response body: Bulk Operation
  
Required role: ROLE\_BULK\_OPERATION\_READ

Example request:

    GET /devicecontrol/bulkoperations/<<bulkoperationId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.bulkoperation+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.bulkoperation+json

    {
      "id" : "123",
      "self" : "<<This BulkOperation URL>>",
      "groupId" : "124301",
      "status" : "ACTIVE",
      "startDate" : "2011-09-06T12:03:27",
      "operationPrototype":{"test"=>"TEST1"},
      "creationRamp":15,
      "progress":
        {
         "pending":0, "failed":0, "executing":0, "successful":0, "all":2
        }
    }

### DELETE a Bulk Operation

Request Body: N/A.

Response Message Body: N/A.
  
Required role: ROLE\_BULK\_OPERATION\_ADMIN

Example Request: Delete a Bulk Operation

    DELETE /devicecontrol/bulkoperations/<<id>>
    Authorization: Basic ...

Example Response:

    HTTP/1.1  204 NO CONTENT

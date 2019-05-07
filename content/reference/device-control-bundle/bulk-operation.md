---
weight: 70
title: Bulk operation
layout: redirect
---

Bulk Operation API allows to schedule an operation on a group of devices to be executed at a specified time. It is required to specify the delay between every operation is created.
When Bulk Operation is created, it has ACTIVE status. When all operations are created, Bulk Operation has state COMPLETED. It is also possible to cancel already created Bulk Operation by deleting it.

When you create a Bulk Operation, you can run it in two modes:
- when groupId is passed, it works standard way, i.e. takes devices from group and schedules operations on them
- when failedParentId is passed, it takes the already processed bulk operation by that id, and schedules operation on devices for which previous operations failed

Hints and tips:
- it is forbidden to pass both: groupId and failedParentId,
- bulk operation works with device group of types: static and 'dynamic'.

Bulk Operation API requires different roles that standard device control API. These new roles are: BULK_OPERATION_READ and BULK_OPERATION_ADMIN.

### Bulk Operation [application/vnd.com.nsn.cumulocity.bulkOperation+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|--------|
|id|String|1|Uniquely identifies an operation.|No|
|self|URI|1|Link to this resource.|No|
|groupId|String|1|Identifies the target group on which this operation should be performed.|POST: No PUT: No|
|failedParentId|String|1|Identifies the failed bulk operation from which failed operations should be rescheduled.|POST: No PUT: No|
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
      "operationPrototype":{
        "description": "Restart device",
        "c8y_Restart": {}
      },
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
      "operationPrototype":{
        "description": "Restart device",
        "c8y_Restart": {}
      },
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

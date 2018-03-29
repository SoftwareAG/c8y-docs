---
order: 10
title: Device control API
layout: redirect
---

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

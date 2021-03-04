---
weight: 10
title: Device control API
layout: redirect
---

### DeviceControlAPI [application/vnd.com.nsn.cumulocity.devicecontrolApi+json]

<table>
<colgroup>
<col style="width: 25%;">
<col style="width: 25%;">
<col style="width: 10%;">
<col style="width: 40%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URL linking to this resource.</td>
</tr>
<tr>
<td align="left">operations</td>
<td align="left">OperationCollection</td>
<td align="left">1</td>
<td align="left">Collection of all operations.</td>
</tr>
<tr>
<td align="left">operationsByStatus</td>
<td align="left">OperationCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all operations in a particular status (placeholder {status}, see the operation media type below for permitted values).</td>
</tr>
<tr>
<td align="left">operationsByAgentId</td>
<td align="left">OperationCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all operations targeted to a particular agent (placeholder {agentId}, with the unique ID of the agent).</td>
</tr>
<tr>
<td align="left">operationsByAgentIdAndStatus</td>
<td align="left">OperationCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all operations targeted to a particular agent (placeholder {agentId} and {status}).</td>
</tr>
<tr>
<td align="left">operationsByDeviceId</td>
<td align="left">OperationCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all operations to be executed on a particular device (placeholder {deviceId} with the unique ID of the device).</td>
</tr>
<tr>
<td align="left">operationsByDeviceIdAndStatus</td>
<td align="left">OperationCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all operations in particular state, that should be executed on a particular device (placeholder {deviceId} and {status}).</td>
</tr>
</tbody>
</table>

### GET the Device Control API resource

Response body: devicecontrolApi

Required role: ROLE\_DEVICE\_CONTROL\_READ

Example request:

    GET /devicecontrol
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.devicecontrolapi+json;ver=...
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

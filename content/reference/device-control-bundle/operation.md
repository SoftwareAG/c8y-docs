---
weight: 30
title: Operation
layout: redirect
---

### Operation [application/vnd.com.nsn.cumulocity.operation+json]

<table>
colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 30%;">
<col style="width: 20%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
<th>PUT/POST Mandatory</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">id</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Uniquely identifies an operation.</td>
<td>No</td>
</tr>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URI linking to this resource.</td>
<td>No</td>
</tr>
<tr>
<td align="left">creationTime</td>
<td align="left">datetime</td>
<td align="left">1</td>
<td align="left">Time when the operation was created in the database.</td>
<td>No</td>
</tr>
<tr>
<td align="left">deviceID</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Identifies the target device on which this operation should be performed.</td>
<td>POST: Mandatory<br>PUT: No</td>
</tr>
<tr>
<td align="left">deviceExternalIDs</td>
<td align="left">ExternalIDCollection</td>
<td align="left">0..n</td>
<td align="left">External IDs of the target device, see the <a href="../../reference/identity">Identity</a> interface.</td>
<td>No</td>
</tr>
<tr>
<td align="left">bulkOperationId</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Reference to bulkOperationId, if this operation was scheduled from Bulk Operation</td>
<td>No</td>
</tr>
<tr>
<td align="left">status</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Operation status, can be one of SUCCESSFUL, FAILED, EXECUTING or PENDING.</td>
<td>POST: No<br>PUT: Mandatory</td>
</tr>
<tr>
<td align="left">failureReason</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">Reason for the failure.</td>
<td>No</td>
</tr>
<tr>
<td align="left">&#42;</td>
<td align="left">Object</td>
<td align="left">1..n</td>
<td align="left">Additional properties describing the operation which will be performed on the device.</td>
<td>POST: Optional PUT: Optional</td>
</tr>
</tbody>
</table>

> **Note:** You must set the `failureReason` message only when `status` is FAILED during a PUT operation.

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

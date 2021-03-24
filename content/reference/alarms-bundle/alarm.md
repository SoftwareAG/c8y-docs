---
weight: 30
title: Alarm
layout: redirect
---
### Alarm [application/vnd.com.nsn.cumulocity.alarm+json]

<table>
<colgroup>
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
<th align="left">Mandatory for PUT/POST</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">id</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Uniquely identifies an alarm.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URI linking to this resource.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">creationTime</td>
<td align="left">datetime</td>
<td align="left">1</td>
<td align="left">Time when alarm was created in the database.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">type</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Identifies the type of this alarm, e.g., “com_cumulocity_events_TamperEvent”.</td>
<td align="left">POST: Yes<br> PUT: No</td>
</tr>
<tr>
<td align="left">time</td>
<td align="left">datetime</td>
<td align="left">1</td>
<td align="left">Time of the alarm.</td>
<td align="left">POST: Yes<br> PUT: No</td>
</tr>
<tr>
<td align="left">text</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Text description of the alarm.</td>
<td align="left">POST: Yes<br> PUT: No</td>
</tr>
<tr>
<td align="left">source</td>
<td align="left">ManagedObject</td>
<td align="left">1</td>
<td align="left">The ManagedObject that the alarm originated from, as object containing the “id” property.</td>
<td align="left">POST: Yes<br> PUT: No</td>
</tr>
<tr>
<td align="left">status</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">The status of the alarm: ACTIVE, ACKNOWLEDGED or CLEARED. If status was not appeared, new alarm will have status ACTIVE. Must be upper-case.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">severity</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The severity of the alarm: CRITICAL, MAJOR, MINOR or WARNING. Must be upper-case.</td>
<td align="left">POST: Yes<br> PUT: No</td>
</tr>
<tr>
<td align="left">count</td>
<td align="left">long</td>
<td align="left">1</td>
<td align="left">The number of times this alarm has been sent.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">firstOccurrenceTime</td>
<td align="left">datetime</td>
<td align="left">1</td>
<td align="left">The first time that this alarm occurred (i.e., where “count” was 1).</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">history</td>
<td align="left">AuditRecordCollection</td>
<td align="left">1</td>
<td align="left">Legacy. Should not be used.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">&#42;</td>
<td align="left">Object</td>
<td align="left">0..n</td>
<td align="left">Additional properties of the event.</td>
<td align="left">No</td>
</tr>
</tbody>
</table>

### GET an Alarm

Response body: Alarm

Required role: ROLE\_ALARM\_READ

Example request:

    GET /alarm/alarms/<<alarmId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.alarm+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.alarm+json;ver=...
    Content-Length: ...
    {
      "id" : "10",
      "self" : "<<Alarm URL>>",
      "creationTime" : "2011-09-06T12:03:27.927Z",
      "type" : "com_cumulocity_events_TamperEvent",
      "time" : "2011-09-06T12:03:27.845Z",
      "text" : "Tamper sensor triggered",
      "status" : "ACTIVE",
      "severity" : "MAJOR",
      "source" : { "id" : "12345", "self" : "..." },
      "com_mycorp_MyProp" : { ... }
      "history" : { }
    }

### Update an Alarm

Changes to alarms will generate a new audit record. The audit record will include the username and application that triggered the update, if applicable. To get the list of audits for alarm, use the following request: GET /audit/auditRecords?source=<alarmId>

Please notice that if update actually doesn't change anything (i.e. request body contains data that is identical to already present in database), there will be no audit record added and no notifications will be sent.

Only text, status, severity and custom properties can be modified. Non-modifiable fields will be ignored when provided in request.

Request body: Alarm

Response body: Alarm

Required : ROLE\_ALARM\_ADMIN or owner of source object

Example Request:

    PUT /alarm/alarms/<<alarmId>>
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.alarm+json;ver=...
    {
      "severity" : "minor"
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.alarm+json;ver=...
    Content-Length: ...
    {
      "id" : "10",
      "self" : "<<Alarm URL>>",
      "creationTime" : "2011-09-06T12:03:27.927Z",
      "type" : "com_cumulocity_events_TamperEvent",
      "time" : "2011-09-06T12:03:27.845Z",
      "text" : "Tamper sensor triggered",
      "status" : "ACKNOWLEDGED",
      "severity" : "MINOR",
      "source" : { "id" : "12345", "self" : "..." },
      "history" : { }
    }

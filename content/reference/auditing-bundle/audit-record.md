---
weight: 40
title: Audit record
layout: redirect
---

### AuditRecord [application/vnd.com.nsn.cumulocity.auditRecord+json]

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 6%;">
<col style="width: 34%;">
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
<td align="left">Uniquely identifies this audit record.</td>
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
<td align="left">Time when audit record was created in the database.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">type</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Identifies the type of this audit record.</td>
<td align="left">POST: Yes<br>PUT: No</td>
</tr>
<tr>
<td align="left">time</td>
<td align="left">datetime</td>
<td align="left">1</td>
<td align="left">Time of the audit record.</td>
<td align="left">POST: Yes<br>PUT: No</td>
</tr>
<tr>
<td align="left">text</td>
<td align="left">String</td>
<td align="left">1</td>
<td align="left">Text description of the audit record.</td>
<td align="left">POST: Yes<br>PUT: No</td>
</tr>
<tr>
<td align="left">source</td>
<td align="left">ManagedObject</td>
<td align="left">1</td>
<td align="left">An optional ManagedObject that the audit record originated from, as object containing properties “id” and “self”.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">user</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The user responsible for the audited action.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">application</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The application used to carry out the audited action.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">activity</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The activity that was carried out.</td>
<td align="left">POST: Yes<br>PUT: No</td>
</tr>
<tr>
<td align="left">severity</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The severity of action: critical, major, minor, warning or information.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">changes</td>
<td align="left">array</td>
<td align="left">0..1</td>
<td align="left">An optional collection of objects describing the changes that were carried out.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">*</td>
<td align="left">Object</td>
<td align="left">0..n</td>
<td align="left">Additional properties of the audit record.</td>
<td align="left">No</td>
</tr>
</tbody>
</table>

> **Info:** `source` can contain a ManagedObject with `id` and `self` properties. Also, in case of "Operation" type, it can contain an operation `id`. In case of "Alarm" type, an alarm `id`.
In both cases, the `self` link in `source` is not correct, but it is kept there to not break the clients that expect to get a ManagedObject in `source`.

### GET an audit record

Response body: AuditRecord

Required role: ROLE\_AUDIT\_READ

Example request: Get a specific audit record

	GET /audit/auditRecords/<<recordId>>
	Host: ...
	Authorization: Basic ...
	Accept: application/vnd.com.nsn.cumulocity.auditrecord+json;

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.auditrecord+json;ver=...
    Content-Length: ...

    {
      "id" : "123",
      "self" : "<<AuditRecord URL>>",
      "creationTime" : "2011-09-06T12:03:27.927Z",
      "type" : "com_cumulocity_audit_LoginFailure",
      "time" : "2011-09-06T12:03:27.845Z",
      "text" : "Login failed after 3 attempts.",
      "user" : "Spock",
      "application" : "Omniscape",
      "activity" : "login",
      "severity" : "warning"
    }

---
weight: 20
title: Audit API
layout: redirect
---

### AuditRecords [application/vnd.com.nsn.cumulocity.auditApi+json]

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
<td align="left">auditRecords</td>
<td align="left">AuditRecordCollection</td>
<td align="left">1</td>
<td align="left">Collection of all audit records.</td>
</tr>
<tr>
<td align="left">auditRecordsForType</td>
<td align="left">AuditRecordCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all audit records of a particular type (placeholder {type}).</td>
</tr>
<tr>
<td align="left">auditRecordsForUser</td>
<td align="left">AuditRecordCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all audit records for a particular user (placeholder {user}).</td>
</tr>
<tr>
<td align="left">auditRecordsForApplication</td>
<td align="left">AuditRecordCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all audit records for a particular application (placeholder {application}).</td>
</tr>
<tr>
<td align="left">auditRecordsForUserAndType</td>
<td align="left">AuditRecordCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all audit records of a particular user and type (placeholder {user} and {type}).</td>
</tr>
<tr>
<td align="left">auditRecords &nbsp;&nbsp;&nbsp;ForUserAndApplication</td>
<td align="left">AuditRecordCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all audit records for a particular user and application (placeholder {user} and {application}).</td>
</tr>
<tr>
<td align="left">auditRecords &nbsp;&nbsp;&nbsp;ForTypeAndApplication</td>
<td align="left">AuditRecordCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all audit records of a particular type and application (placeholder {type} and {application}).</td>
</tr>
<tr>
<td align="left">auditRecords &nbsp;&nbsp;&nbsp;ForTypeAndUserAndApplication</td>
<td align="left">AuditRecordCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all audit records of a particular type, user and application (placeholder {type}, {user} and {application}).</td>
</tr>
</tbody>
</table>

### GET the AuditAPI resource

Response body: application/vnd.com.nsn.cumulocity.auditApi+json

Required role: ROLE\_AUDIT\_READ

Example request: Retrieve AuditAPI resource

	GET /audit
	Host: ...
	Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.auditapi+json;ver=...
    Content-Length: ...

    {
      "self" : "<<AuditAPI URL>>",
      "auditRecords" : { "self" :"<<AuditCollection URL>>" },
      "auditRecordsForType" : "<<AuditCollection URL>>?type={type}",
      "auditRecordsForUser" : "<<AuditCollection URL>>?user={user}",
      "auditRecordsForApplication" : "<<AuditCollection URL>>?application={application}",
      "auditRecordsForUserAndType" : "<<AuditCollection URL>>?user={user}&type={type}",
      "auditRecordsForUserAndApplication" : "<<AuditCollection URL>>?user={user}&application={application}",
      "auditRecordsForTypeAndApplication" : "<<AuditCollection URL>>?type={type}&application={application}",
      "auditRecordsForTypeAndUserAndApplication" : "<<AuditCollection URL>>?type={type}&user={user}&application={application}"
    }

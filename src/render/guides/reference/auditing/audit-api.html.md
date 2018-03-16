---
order: 20
title: Audit API
layout: redirect
---

### AuditRecords [application/vnd.com.nsn.cumulocity.auditApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|auditRecords|AuditRecordCollection|1|Collection of all audit records.|
|auditRecordsForType|AuditRecordCollection URI template|1|Read-only collection of all audit records of a particular type (placeholder {type}).|
|auditRecordsForUser|AuditRecordCollection URI template|1|Read-only collection of all audit records for a particular user (placeholder {user}).|
|auditRecordsForApplication|AuditRecordCollection URI template|1|Read-only collection of all audit records for a particular application (placeholder {application}).|
|auditRecordsForUserAndType|AuditRecordCollection URI template|1|Read-only collection of all audit records of a particular user and type (placeholder {user} and {type}).|
|auditRecords    ForUserAndApplication|AuditRecordCollection URI template|1|Read-only collection of all audit records for a particular user and application (placeholder {user} and {application}).|
|auditRecords    ForTypeAndApplication|AuditRecordCollection URI template|1|Read-only collection of all audit records of a particular type and application (placeholder {type} and {application}).|
|auditRecords    ForTypeAndUserAndApplication|AuditRecordCollection URI template|1|Read-only collection of all audit records of a particular type, user and application (placeholder {type}, {user} and {application}).|

### GET the AuditAPI resource

Response body: application/vnd.com.nsn.cumulocity.auditApi+json
  
Required role: ROLE\_AUDIT\_READ

Example request: Retrieve AuditAPI resource

	GET /audit
	Host: ...
	Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.auditApi+json;ver=...
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

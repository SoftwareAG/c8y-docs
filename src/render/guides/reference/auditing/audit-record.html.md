---
order: 40
title: Audit record
layout: redirect
---

### AuditRecord [application/vnd.com.nsn.cumulocity.auditRecord+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|id|String|1|Uniquely identifies this audit record.|No|
|self|URI|1|Link to this resource.|No|
|creationTime|String|1|Time when audit record was created in the database.|No|
|type|String|1|Identifies the type of this audit record.|POST: Mandatory PUT: No|
|time|String|1|Time of the audit record.|POST: Mandatory PUT: No|
|text|String|1|Text description of the audit record.|POST: Mandatory PUT: No|
|source|ManagedObject|1|An optional ManagedObject that the audit record originated from, as object containing properties "id" and "self".|POST: Mandatory PUT: No|
|user|String|1|The user responsible for the audited action.|Optional|
|application|String|1|The application used to carry out the audited action.|Optional|
|activity|String|1|The activity that was carried out.|POST: Mandatory PUT: Optional|
|severity|String|1|The severity of action: critical, major, minor, warning or information.|POST: Mandatory PUT: Optional|
|changes|Set|0..1|An optional collection of objects describing the changes that were carried out.|No|
|\*|Object|0..n|Additional properties of the audit record.|Optional|

Please note that the source can contain not only ManagedObject with id and self, but in case of "Operation" type - operation id and in case of Alarm type - alarm Id.
In such cases the self link in source is not correct, but it is kept there to not break the clients that expected to get ManagedObject in source. 

### GET an audit record

Response body: AuditRecord
  
Required role: ROLE\_AUDIT\_READ

Example request: Get a specific audit record

	GET /audit/auditRecords/<<recordId>>
	Host: ...
	Authorization: Basic ...
	Accept: application/vnd.com.nsn.cumulocity.auditRecord+json;

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.auditRecord+json;ver=...
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

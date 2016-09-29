---
order: 90
title: Auditing
layout: default
---
The auditing interface consists of three parts:

-   The *audit API* resource returns URIs and URI templates to collections of audit records, so that they can be queried by criteria such as "all records from a particular user", or "all records from a particular application".
-   The *audit record collection* resource retrieves audit records and enables creating new audit records.
-   The *audit record* resource represents audit records that are individually queried.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

## Audit API

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

## Audit record collection

### AuditRecordCollection [application/vnd.com.nsn.cumulocity.auditRecordCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|auditRecords|AuditRecord|0..n|List of audit records, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of audit records.|
|next|URI|0..1|Link to a potential next page of audit records.|

The "source" object of an audit record contains the properties "id" and "self".

### POST - create a new audit record

Request body: AuditRecord

Response body: AuditRecord
  
Required role: ROLE\_AUDIT\_ADMIN

Example request:

    POST /audit/auditRecords
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.auditRecord+json;ver=...
    {
      "type" : "com_cumulocity_audit_LoginFailure",
      "time" : "2011-09-06T12:03:27.845Z",
      "text" : "Login failed after 3 attempts.",
      "user" : "Spock",
      "application" : "Omniscape",
      "activity" : "login",
      "severity" : "warning"
    }

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.auditRecord+json;ver=...
    Content-Length: ...
    Location: <<URL of new audit record>>
    {
      "id" : "123",
      "self" : "<<URL of new audit record>>",
      "creationTime" : "2011-09-06T12:03:27.927Z",
      "type" : "com_cumulocity_audit_LoginFailure",
      "time" : "2011-09-06T12:03:27.845Z",
      "text" : "Login failed after 3 attempts.",
      "user" : "Spock",
      "application" : "Omniscape",
      "activity" : "login",
      "severity" : "warning"
    }

The "id" and "creationTime" of the new audit record are generated by the server and returned in the response to the POST operation.

### GET audit records

Response body: AuditRecordCollection
  
Required role: ROLE\_AUDIT\_READ

Example request: Retrieve audit records

	GET /audit/auditRecords
	Host: ...
	Authorization: Basic ...
	Accept: application/vnd.com.nsn.cumulocity.auditRecordCollection+json;

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.auditRecordCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "",
      "auditRecords" : [
        {
          "id" : "123",
          "self" : "<<AuditRecord 123 URL>>",
          "creationTime" : "2011-09-06T12:03:27.927Z",
          "type" : "com_cumulocity_audit_LoginFailure",
          "time" : "2011-09-06T12:03:27.845Z",
          "text" : "Login failed after 3 attempts.",
          "user" : "Spock",
          "application" : "Omniscape",
          "activity" : "login",
          "severity" : "warning"
        }
      ],
      "statistics" : {
        "totalPages" : 3,
        "pageSize" : 5,
        "currentPage" : 1
      }
    }
    
In case of executing range queries on audit logs API, like query by dateFrom and dateTo, audits are returned in order from the last to the latest. 
It is possible to change the order by adding query parameter "revert=true" to the request URL.

### DELETE - delete an collection of auditRecords

The DELETE method allows for deletion of auditRecords collections. Applicable query parameters are equivalent to GET method.

Request body: N/A

Response body: N/A
  
Required role: ROLE\_AUDIT\_ADMIN

Example request:

     DELETE: /audit/auditRecords ....
     Host: ...
     Authorization: Basic ...
     
Example response:

    HTTP/1.1  204 NO CONTENT
    
## Audit record

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

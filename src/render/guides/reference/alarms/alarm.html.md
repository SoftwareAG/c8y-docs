---
order: 30
title: Alarm
layout: redirect
---
### Alarm [application/vnd.com.nsn.cumulocity.alarm+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|id|String|1|Uniquely identifies an alarm.|No|
|self|URI|1|Link to this resource.|No|
|creationTime|String|1|Time when alarm was created in the database.|No|
|type|String|1|Identifies the type of this alarm, e.g., "com\_cumulocity\_events\_TamperEvent".|POST: Mandatory PUT: No|
|time|String|1|Time of the alarm.|POST: Mandatory PUT: No|
|text|String|1|Text description of the alarm.|POST: Mandatory PUT: No|
|source|ManagedObject|1|The ManagedObject that the alarm originated from, as object containing the "id" property.|POST: Mandatory PUT: No|
|status|String|0..1|The status of the alarm: ACTIVE, ACKNOWLEDGED or CLEARED. If status was not appeared, new alarm will have status ACTIVE. Must be upper-case.|POST: Optional PUT: Optional|
|severity|String|1|The severity of the alarm: CRITICAL, MAJOR, MINOR or WARNING. Must be upper-case.|POST: Mandatory PUT: Optional|
|count|Long|1|The number of times this alarm has been sent.|No|
|firstOccurenceTime|String|1|The first time that this alarm occurred (i.e., where "count" was 1).|No|
|history|AuditRecordCollection|1|Legacy. Should not be used.|No|
|\*|Object|0..n|Additional properties of the event.||

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

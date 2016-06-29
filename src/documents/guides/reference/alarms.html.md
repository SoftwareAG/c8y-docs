---
order: 60
title: Alarms
layout: default
---
The alarms interface consists of three parts:

-   The *alarm API* resource returns URIs and URI templates to collections of alarms, so that all alarms or alarms of a specified source device and/or status can be retrieved.
-   The *alarm collection* resource retrieves alarms and enables creating new alarms.
-   The *alarm* resource represents individual alarms that can be queried, modified and progressed through an alarm workflow.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

## Alarm API

### AlarmAPI [application/vnd.com.nsn.cumulocity.alarmApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|alarms|AlarmCollection|1|Collection of all alarms.|
|alarmsForStatus|AlarmCollection URI template|1|Read-only collection of all alarms in a particular status (placeholder {status}, see "Alarm" resource below for permitted values).|
|alarmsForSource|AlarmCollection URI template|1|Read-only collection of all alarms for a particular source object (placeholder {source}, unique ID of an object in the inventory).|
|alarmsForSourceAndStatus|AlarmCollection URI template|1|Read-only collection of all alarms for a particular source object in a particular status (placeholder {source} and {status}).|
|alarmsForTime|AlarmCollection URI template|1|Read-only collection of all alarms for a particular time range (placeholder {dateFrom} and {dateTo}).|
|alarmsForStatusAndTime|AlarmCollection URI template|1|Read-only collection of all alarms for a particular status and time range (placeholder {status}, {dateFrom} and {dateTo}).|
|alarmsForSourceAndTime|AlarmCollection URI template|1|Read-only collection of all alarms for a particular source and time range (placeholder {source}, {dateFrom} and {dateTo};).|
|alarmsForSourceAndStatusAndTime|AlarmCollection URI template|1|Read-only collection of all alarms for a particular source, status and time range (placeholder {source}, {status}, {dateFrom} and {dateTo};).|

### GET the AlarmAPI resource

Response body: application/vnd.com.nsn.cumulocity.alarmApi+json
  
Required role: ROLE\_ALARM\_READ

Example request:

    GET /alarm
    Host: ...
    Authorization: Basic ...

Example response:

	HTTP/1.1 200 OK
	Content-Type: application/vnd.com.nsn.cumulocity.alarmApi+json;ver=…
	Content-Length: …
	{
		"self" : "<<AlarmAPI URL>>",
		"alarms" : { "self" :"<<AlarmCollection URL>>" },
		"alarmsForStatus" : "<<AlarmCollection URL>>?status={status}",
		"alarmsForSource" : "<<AlarmCollection URL>>?source={source}",
		"alarmsForSourceAndStatus" : "<<AlarmCollection URL>>?source={source}&status={status}",
		"alarmsForTime" : "<<AlarmCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}",
		"alarmsForStatusAndTime" : "<<AlarmCollection URL>>?status={status}&dateFrom={dateFrom}&dateTo={dateTo}",
		"alarmsForSourceAndTime" : "<<AlarmCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}",
		"alarmsForSourceAndStatusAndTime" : "<<AlarmCollection URL>>?source={source}&status={status}&dateFrom={dateFrom}&dateTo={dateTo}"
	}

## Alarm collection

### AlarmCollection [application/vnd.com.nsn.cumulocity.alarmCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|alarms|Alarm|0..n|List of alarms, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of alarms.|
|next|URI|0..1|Link to a potential next page of alarms.|

### GET an alarm collection

Response body: AlarmCollection
  
Required role: ROLE\_ALARM\_READ

Example request:

    GET /alarm/alarms
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.alarmCollection+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.alarmCollection+json;ver=...
    Content-Length: ...
     
    {
      "self" : "...",
      "next" : "...",
      "prev" : "...",
      "alarms": [
        {
          "id" : "10",
          "self" : "...",
          "creationTime" : "2011-09-06T12:03:27.927Z",
          "type" : "com_cumulocity_events_TamperEvent",
          "time" : "2011-09-06T12:03:27.845Z",
          "text" : "Tamper sensor triggered",
          "status" : "ACTIVE",
          "severity" : "MAJOR",
          "source": { "id" : "12345", "self" : "..." },
          "count":1,
          "history": { ... }
        },
        {
          "id" : "11",
          "self" : "...",
          "creationTime" : "2011-09-06T12:03:27.927Z",
          "type" : "com_cumulocity_events_BatteryWarning",
          "time" : "2011-09-06T12:04:27.845Z",
          "text" : "Low battery level",
          "status" : "ACTIVE",
          "severity" : "MINOR",
          "source": { "id" : "1122", "self" : "..." },
          "count":1,
          "history": { ... }
        }
      ],
      "statistics" : {
        "totalPages" : 8,
        "pageSize" : 5,
        "currentPage : 1
      }
    }

### POST - Create a new Alarm

Request body: Alarm

Response body: Alarm
  
Required role: ROLE\_ALARM\_ADMIN or owner of source object.

Example request:

    POST /alarm/alarms
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.alarm+json;ver=...
     
    {
      "type" : "com_cumulocity_events_TamperEvent",
      "time" : "2011-09-06T12:03:27.845Z",
      "text" : "Tamper sensor triggered",
      "status" : "ACTIVE",
      "severity" : "MAJOR",
      "source" : { "id" : "12345", "self" : "..." },
      "com_mycorp_MyProp" : { ... }
    }

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.alarm+json;ver=...
    Content-Length: ...
    Location: <<URL of new alarm>>
     
    {
      "id" : "10",
      "self" : "<<URL of new alarm>>",
      "creationTime" : "2011-09-06T12:03:27.927Z",
      "type" : "com_cumulocity_events_TamperEvent",
      "time" : "2011-09-06T12:03:27.845Z",
      "text" : "Tamper sensor triggered",
      "status" : "ACTIVE",
      "severity" : "MAJOR",
      "source" : { "id" : "12345", "self" : "..." },
      "count": 1,
      "com_mycorp_MyProp" : { ... }
      "history" : { ... }
    }

For POST requests, the source parameter is required to have only an id.

The "id" and "creationTime" of the new alarm are generated by the server and returned in the response to the POST operation.

**Alarm suppression** If the source device is in [maintenance](/guides/reference/device-management) mode, the alarm is not created and not reported to the Cumulocity event processing engine.

**Alarm de-duplication** If an active or acknowledged alarm (does not work for cleared) with the same source and type exists, no new alarm is created. Instead, the existing alarm is updated by incrementing the "count" property. Any other changes are ignored, and the alarm history is not updated. The first occurrence of the alarm is recorded in "firstOccurenceTime".

### DELETE - delete an alarm collection

The DELETE method allows for deletion of alarm collections. Applicable query parameters are equivalent to GET method.

Request body: N/A

Response body: N/A
  
Required role: ROLE\_ALARM\_ADMIN

Example request:

     DELETE: /alarm/alarms....
     Host: ...
     Authorization: Basic ...
     
Example response:

    HTTP/1.1  204 NO CONTENT

## Alarm

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
|history|AuditRecordCollection|1|History of modifications tracing property changes.|No|
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
      "history" : {
        "self" : "...",
        "auditRecords" : [ ... ],
      }
    }

### Update an Alarm

Changes to alarms will generate a new audit record which will be added to the "history" collection. The audit record will include the username and application that triggered the update, if applicable. 

Please notice that if update actually doesn't change anything (i.e. request body contains data that is identical to already present in database), there will be no audit record added and no notifications will be sent.

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
      "history" : {
        "self" : "link to audit history",
        "auditRecords" : [
          {
            "id" : "123",
            "self" : "...",
            "type" : "com_cumulcity_model_alarm_AlarmRaised",
            "creationTime" : "2011-09-06T12:03:32.103Z",
            "time" : "2011-09-06T12:03:27.845Z",
            "text" : "Alarm raised",
            "user" : "Spock",
            "application" : "Omniscape",
            "activity" : "Alarm raised",
            "severity" : "MINOR",
            "source" : { ... }
          },
          {
            "id" : "1234",
            "self" : "...",
            "type" : "com_cumulcity_model_alarm_AlarmChanged",
            "creationTime" : "2011-09-07T12:04:29.031Z",
            "changes": [{
              "attribute": "severity",
              "newValue": {},
              "previousValue": {},
              "type": "com.cumulocity.model.event.CumulocitySeverities"
            }],
            "time" : "2011-09-07T12:04:27.845Z",
            "text" : "Alarm changed",
            "user" : "Spock",
            "application" : "Omniscape",
            "activity" : "Alarm changed.",
            "severity" : "Minor",
            "source" : { ... }
          }
        ]
      }
    }

## Notifications

The alarm notification API permits the monitoring of alarms of specific devices.
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/guides/reference/real-time-notifications)". The URL is

    /cep/realtime

The subscription channel needs to contain the managed object ID of the device or a "*" as placeholder to receive notifications for the alarms of all devices

    /alarms/<<deviceId>>

The response will additionally to the alarm object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the id of the deleted alarm.

Example Response:

    HTTP/1.1 200 OK 
    Content-Type: application/json
    [
      {
        "channel": "/alarms/12345", 
        "successful": true, 
        "error": "", 
        "data": [{
          "realtimeAction": "UPDATE",
          "data": {
            "id": "1",
            "self": "...",
            "source": { 
              "12345"
            },
            "type": "c8y_UnavailabilityAlarm",
            "text": "I am an alarm",
            "severity": "MINOR",
            "status": "CLEARED",
            "firstOccurrence": true,
            "count": 1
          }
        }], 
        "clientId": "Un1q31d3nt1f13r" 
      }
    ]

Required role: ROLE\_ALARMS\_READ

---
weight: 20
title: Alarm collection
layout: redirect
---

### AlarmCollection [application/vnd.com.nsn.cumulocity.alarmCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|alarms|Alarm|0..n|List of alarms, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of alarms.|
|next|string|0..1|A URI linking to a potential next page of alarms.|

### GET an alarm collection

Response body: AlarmCollection

Required role: ROLE\_ALARM\_READ

Example request:

    GET /alarm/alarms
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.alarmcollection+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.alarmcollection+json;ver=...
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

#### Acceptable query parameters are:

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">status</td>
<td align="left">string</td>
<td align="left">Comma-separated alarm statuses, for example ACTIVE,CLEARED.</td>
</tr>
<tr>
<td align="left">source</td>
<td align="left">string</td>
<td align="left">Source device ID.</td>
</tr>
<tr>
<td align="left">withSourceAssets</td>
<td align="left">boolean</td>
<td align="left">When set to <code>true</code> the alarms for the related source assets will be returned. When this parameter is provided <code>source</code> must also be defined.</td>
</tr>
<tr>
<td align="left">withSourceDevices</td>
<td align="left">boolean</td>
<td align="left">When set to <code>true</code> also alarms for related source devices will be returned. When this parameter is provided <code>source</code> must also be defined.</td>
</tr>
<tr>
<td align="left">resolved</td>
<td align="left">boolean</td>
<td align="left">When set to <code>true</code> only resolved alarms will be returned (the one with status CLEARED), <code>false</code> means alarms with status ACTIVE or ACKNOWLEDGED.</td>
</tr>
<tr>
<td align="left">severity</td>
<td align="left">string</td>
<td align="left">Comma-separated alarm severities, for example MINOR,MAJOR.</td>
</tr>
<tr>
<td align="left">dateFrom</td>
<td align="left">datetime</td>
<td align="left">Start date or date and time of alarm occurrence.</td>
</tr>
<tr>
<td align="left">dateTo</td>
<td align="left">datetime</td>
<td align="left">End date or date and time of alarm occurrence.</td>
</tr>
<tr>
<td align="left">type</td>
<td align="left">string</td>
<td align="left">Comma-separated alarm types, for example <code>c8y_BatteryWarning,c8y_TemperatureWarning</code>.</td>
</tr>
<tr>
<td align="left">pageSize</td>
<td align="left">number</td>
<td align="left">Indicates how many alarms shall be returned. Default value is 5.</td>
</tr>
<tr>
<td align="left">currentPage</td>
<td align="left">number</td>
<td align="left">The current page of the paginated results. Default value is 1.</td>
</tr>
<tr>
<td align="left">withTotalPages</td>
<td align="left">boolean</td>
<td align="left">When set to <code>true</code>, the returned result will contain the total number of pages in the statistics object. Default value is <code>false</code>.</td>
</tr>
<tr>
<td align="left">query</td>
<td align="left">string</td>
<td align="left">Use query language to filter and/or sort the results. Properties and supported operations are the same as for <a href="/reference/inventory/#managed-object-collection">managed objects</a> with two exceptions: The functions <code>has</code> and <code>bygroupid</code> are not supported.</td>
</tr>
</tbody>
</table>

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

For POST requests, the source parameter is required to have only an `id`.

The `id` and `creationTime` of the new alarm are generated by the server and returned in the response to the POST operation.

**Alarm suppression** If the source device is in [maintenance](/reference/device-management/#device-availability) mode, the alarm is not created and not reported to the Cumulocity IoT event processing engine. After sending a POST request to create a new alarm and the device is in maintenance mode the self link of the alarm will be:

	{
		"self" : "<<URL of new alarm>>/null",
	}

**Alarm de-duplication** If an active or acknowledged alarm (does not work for cleared) with the same source and type exists, no new alarm is created. Instead, the existing alarm is updated by incrementing the "count" property and the time-property is also updated. Any other changes are ignored, and the alarm history is not updated. The first occurrence of the alarm is recorded in "firstOccurenceTime".

### DELETE - delete an alarm collection

The DELETE method allows for deletion of alarm collections. Acceptable query parameters are:

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">status</td>
<td align="left">string</td>
<td align="left">Comma separated alarm statuses, for example <code>ACTIVE,CLEARED</code>.</td>
</tr>
<tr>
<td align="left">source</td>
<td align="left">string</td>
<td align="left">Source device ID.</td>
</tr>
<tr>
<td align="left">withSourceAssets</td>
<td align="left">boolean</td>
<td align="left">When set to <code>true</code> also alarms for related source assets will be removed. When this parameter is provided also <code>source</code> must be defined.</td>
</tr>
<tr>
<td align="left">withSourceDevices</td>
<td align="left">boolean</td>
<td align="left">When set to <code>true</code> also alarms for related source devices will be removed. When this parameter is provided also <code>source</code> must be defined.</td>
</tr>
<tr>
<td align="left">resolved</td>
<td align="left">boolean</td>
<td align="left">When set to <code>true</code> only resolved alarms will be removed (the one with status <code>CLEARED</code>), <code>false</code> means alarms with status <code>ACTIVE</code> or <code>ACKNOWLEDGED</code>.</td>
</tr>
<tr>
<td align="left">severity</td>
<td align="left">string</td>
<td align="left">Alarm severity, for example <code>MINOR</code>.</td>
</tr>
<tr>
<td align="left">dateFrom</td>
<td align="left">datetime</td>
<td align="left">Start date or date and time of alarm occurrence.</td>
</tr>
<tr>
<td align="left">dateTo</td>
<td align="left">datetime</td>
<td align="left">End date or date and time of alarm occurrence.</td>
</tr>
<tr>
<td align="left">type</td>
<td align="left">string</td>
<td align="left">Alarm type.</td>
</tr>
</tbody>
</table>

Request body: N/A

Response body: N/A

Required role: ROLE\_ALARM\_ADMIN

Example request:

     DELETE: /alarm/alarms....
     Host: ...
     Authorization: Basic ...

Example response:

    HTTP/1.1  204 NO CONTENT

> **Important**: Note that it is possible to call this endpoint without providing any parameter - it will result in deleting all alarms and it is not recommended. Also note that DELETE requests are not synchronous. The response could be returned before the delete request has been completed.

### PUT - bulk update of alarm collection

The PUT method allows for updating alarms collections. Currently only the status of alarms can be changed.

Request body:

      { status: <new_status> }

Response body: N/A

Required role: ROLE\_ALARM\_ADMIN

Response status:

 * 200 - if the process has completed, all alarms have been updated
 * 202 - if process continues in background

Example request: clear all active alarms

     PUT: /alarm/alarms?status=ACTIVE
     Host: ...
     Authorization: Basic ...      
     {
        "status": "CLEARED"
     }

Example response:

     HTTP/1.1  202 Accepted    

The endpoint uses query parameters. At least one query parameter is required for processing to avoid accidentally updating all existing alarms.

Acceptable query parameters are:

* status           
* source
* resolved
* severity
* dateFrom
* dateTo

Since this operations can take a lot of time, request returns after maximum 0.5 sec of processing, and updating is continued as a background process in the platform.

---
weight: 10
title: Alarm API
layout: redirect
---

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
|alarmsForSourceWithAssetsAndWithDevices|AlarmCollection URI template|1|Read-only collection of all alarms for a particular source with its children (placeholder {source}, {withSourceAssets} and {withSourceDevices}).|
|alarmsForSeverity|AlarmCollection URI template|1|Read-only collection of all alarms for a particular severity (placeholder {severity}).|
|alarmsForResolved|AlarmCollection URI template|1|Read-only collection of all alarms which are resolved (placeholder {resolved}).|

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
		"alarmsForSourceAndStatusAndTime" : "<<AlarmCollection URL>>?source={source}&status={status}&dateFrom={dateFrom}&dateTo={dateTo}",
		"alarmsForSourceWithAssetsAndWithDevices": "<<AlarmCollection URL>>?source={source}&withAssets={withAssets}&withDevices={withDevices}"
		"alarmsForResolved": "<<AlarmCollection URL>>?resolved={resolved}",
		"alarmsForSeverity": "<<AlarmCollection URL>>?severity={severity}",
	}

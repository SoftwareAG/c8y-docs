---
weight: 10
title: Alarm API
layout: redirect
---

### AlarmAPI [application/vnd.com.nsn.cumulocity.alarmApi+json]

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
<td align="left">alarms</td>
<td align="left">AlarmCollection</td>
<td align="left">1</td>
<td align="left">Collection of all alarms.</td>
</tr>
<tr>
<td align="left">alarmsForStatus</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms in a particular status (placeholder {status}, see “Alarm” resource below for permitted values).</td>
</tr>
<tr>
<td align="left">alarmsForSource</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms for a particular source object (placeholder {source}, unique ID of an object in the inventory).</td>
</tr>
<tr>
<td align="left">alarmsForSourceAndStatus</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms for a particular source object in a particular status (placeholder {source} and {status}).</td>
</tr>
<tr>
<td align="left">alarmsForTime</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms for a particular time range (placeholder&nbsp;{dateFrom} and&nbsp;{dateTo}).</td>
</tr>
<tr>
<td align="left">alarmsForStatusAndTime</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms for a particular status and time range (placeholder&nbsp;{status},&nbsp;{dateFrom} and&nbsp;{dateTo}).</td>
</tr>
<tr>
<td align="left">alarmsForSourceAndTime</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms for a particular source and time range (placeholder&nbsp;{source},&nbsp;{dateFrom} and&nbsp;{dateTo};).</td>
</tr>
<tr>
<td align="left">alarmsForSourceAndStatusAndTime</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms for a particular source, status and time range (placeholder&nbsp;{source},&nbsp;{status},&nbsp;{dateFrom} and&nbsp;{dateTo};).</td>
</tr>
<tr>
<td align="left">alarmsForSourceWithAssetsAndWithDevices</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms for a particular source with its children (placeholder&nbsp;{source}, {withSourceAssets} and {withSourceDevices}).</td>
</tr>
<tr>
<td align="left">alarmsForSeverity</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms for a particular severity (placeholder&nbsp;{severity}).</td>
</tr>
<tr>
<td align="left">alarmsForResolved</td>
<td align="left">AlarmCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all alarms which are resolved (placeholder&nbsp;{resolved}).</td>
</tr>
</tbody>
</table>
### GET the AlarmAPI resource

Response body: application/vnd.com.nsn.cumulocity.alarmApi+json

Required role: ROLE\_ALARM\_READ

Example request:

    GET /alarm
    Host: ...
    Authorization: Basic ...

Example response:

	HTTP/1.1 200 OK
	Content-Type: application/vnd.com.nsn.cumulocity.alarmapi+json;ver=…
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

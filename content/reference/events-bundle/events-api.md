---
weight: 10
title: Events API
layout: redirect
---

### EventAPI [application/vnd.com.nsn.cumulocity.eventApi+json]

<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>
<colgroup>
<col style="width: 30%;">
<col style="width: 20%;">
<col style="width: 5%;">
<col style="width: 45%;">
</colgroup>
<tbody>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URL linking to this resource.</td>
</tr>

<tr>
<td align="left">events</td>
<td align="left">EventCollection</td>
<td align="left">1</td>
<td align="left">Collection of all events.</td>
</tr>

<tr>
<td align="left">eventsForType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events of a particular type (placeholder {type}).</td>
</tr>

<tr>
<td align="left">eventsForSource</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular source object (placeholder {source}).</td>
</tr>

<tr>
<td align="left">eventsForSourceAndType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events of a particular type and from a particular source (placeholders {type} and {source}).</td>
</tr>

<tr>
<td align="left">eventsForTime</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular period (placeholder {dateFrom}, {dateTo}).</td>
</tr>

<tr>
<td align="left">eventsForFragmentType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events containing a particular fragment type (placeholder {fragmentType}).</td>
</tr>

<tr>
<td align="left">eventsForSourceAndTime</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular source object from a particular period (placeholders {source}, {dateFrom}, {dateTo}).</td>
</tr>

<tr>
<td align="left">eventsForSourceAndFragmentType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events of a particular source object containing a particular fragment type (placeholders {source}, {fragmentType}).</td>
</tr>

<tr>
<td align="left">eventsForDateAndFragmentType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular period containing a particular fragment type (placeholders {dateFrom}, {dateTo}, {fragmentType}).</td>
</tr>

<tr>
<td align="left">eventsForFragmentTypeAndType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events of a particular type containing a particular fragment type (placeholders {fragmentType}, {type}).</td>
</tr>

<tr>
<td align="left">eventsForTimeAndType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events with a particular type from a particular period (placeholders {type}, {dateFrom}, {dateTo}).</td>
</tr>

<tr>
<td align="left">eventsForSourceAnd &nbsp;&nbsp;DateAndFragmentType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular source object, containing a particular fragment type, from a particular period (placeholders {source}, {dateFrom}, {dateTo}, {fragmentType}).</td>
</tr>

<tr>
<td align="left">eventsForSourceAnd &nbsp;&nbsp;DateAndFragmentTypeAndType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular source object, with a particular type, containing a particular fragment type, from a particular period (placeholders {source}, {dateFrom}, {dateTo}, {fragmentType}, {type}).</td>
</tr>

<tr>
<td align="left">eventsForSourceAnd &nbsp;&nbsp;FragmentTypeAndType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular source object, with a particular type, containing a particular fragment type (placeholders {source}, {fragmentType}, {type}).</td>
</tr>

<tr>
<td align="left">eventsForSourceAndTimeAndType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular source object, with a particular type, from a particular period (placeholders {source}, {type}, {dateFrom}, {dateTo}).</td>
</tr>

<tr>
<td align="left">eventsForDateAnd &nbsp;&nbsp;FragmentTypeAndType</td>
<td align="left">EventCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all events from a particular type, containing a particular fragment type, from a particular period (placeholders {type}, {dateFrom}, {dateTo}, {fragmentType}).</td>
</tr>
</tbody>
</table>

### GET - Event API resource

**Response body:** application/vnd.com.nsn.cumulocity.inventoryApi+json

**Required role:** ROLE\_EVENT\_READ

#### Example request - Get the event API resource

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
200 - OK

GET <<url>>/event
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.eventapi+json;ver=...

```http
HTTP/1.1
200 - OK

{
"self" : "<<Event API URL>>",
"events" : {
	"self" :"<<EventCollection URL>>"
},
"eventsForType" : "<<EventCollection URL>>?type={type}",
"eventsForSource" : "<<EventCollection URL>>?source={source}",
"eventsForTime" : "<<EventCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}",
"eventsForFragmentType" : "<<EventCollection URL>>?fragmentType={fragmentType}",
"eventsForSourceAndType" : "<<EventCollection URL>>?type={type}&source={source}",
"eventsForSourceAndTime" : "<<EventCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}",
"eventsForSourceAndFragmentType" : "<<EventCollection URL>>?source={source}&fragmentType={fragmentType}",
"eventsForDateAndFragmentType" : "<<EventCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}",
"eventsForFragmentTypeAndType" : "<<EventCollection URL>>?fragmentType={fragmentType}&type={type}",
"eventsForTimeAndType" : "<<EventCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
"eventsForSourceAndDateAndFragmentType" : "<<EventCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}",
"eventsForSourceAndDateAndFragmentTypeAndType" : "<<EventCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}&type={type}",
"eventsForSourceAndFragmentTypeAndType" : "<<EventCollection URL>>?source={source}&fragmentType={fragmentType}&type={type}",
"eventsForSourceAndTimeAndType" : "<<EventCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
"eventsForDateAndFragmentTypeAndType" : "<<EventCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}&type={type}"
}
```

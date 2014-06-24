---
order: 30
title: Events
layout: default
---

The events interface consists of three parts:

-   The *event API* resource returns URIs and URI templates to collections of events, so that all events or events of a specified type and/or a specific source device can be retrieved.
-   The *event collection* resource retrieves events and enables creating new events.
-   The *event* resource represents individual events that can be queried and deleted.

# Event API

## EventAPI [application/vnd.com.nsn.cumulocity.eventApi+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URL
1
Link to this resource.</td>
<td align="left">events
EventCollection
1
Collection of all events.</td>
<td align="left">eventsForType
EventCollection URI template
1
Read-only collection of all events of a particular type (placeholder &lt;&lt;type&gt;&gt;).</td>
<td align="left">eventsForSource
EventCollection URI template
1
Read-only collection of all events from a particular source object (placeholder &lt;&lt;source&gt;&gt;).</td>
</tr>
</tbody>
</table>

## GET the Event API resource

Request body: N/A.
 Response body: Event Api
  
Required role: ROLE\_EVENT\_READ
 Example request: Retrieve information about Event API Resource

    GET [URL to the Event resource]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.eventApi+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.eventApi+json;ver=...
    Content-Length: ...
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

# Event collection

## EventCollection [application/vnd.com.nsn.cumulocity.eventCollection+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URI
1
Link to this resource.</td>
<td align="left">events
Event
0..n
List of events, see below.</td>
<td align="left">statistics
PagingStatistics
1
Information about paging statistics.</td>
<td align="left">prev
URI
0..1
Link to a potential previous page of events.</td>
</tr>
</tbody>
</table>

## GET an event collection

Request body: N/A.
 Response body: Event Collection
  
Required role: ROLE\_EVENT\_READ
 Example request: Retrieve information about an Event Collection

    GET [URL to the Event Collection]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.eventCollection+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.eventCollection+json;ver=...
    Content-Length: ...
     
    {
     "self":"...",
     "events":[
       {
         "id" : "10",
         "self" : "...",
         "creationTime" : "2011-09-06T12:03:27.927+02:00",
         "type" : "com_cumulocity_model_DoorSensorEvent",
         "time" : "2011-09-06T12:03:27.845+02:00",
         "text" : "Door sensor was triggered.",
         "com_othercompany_Extension" : { ... },
         "source":{ "id":"12345", "self": "..." }
       }, {
         "id":"11",
         ...
       }
     ],
     "statistics" : {
        "totalPages" : 2,
        "pageSize" : 5,
        "currentPage : 1
     }
    }

## POST - create a new event

Request body: Event
 Response body: Event (when accept header is not provided, empty response body is returned)
  
Required role: ROLE\_EVENT\_ADMIN or owner of source object

Example request: Create a new Event

    POST ...
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.event+json;ver=...
     
    {
      "time" : "2011-09-06T12:03:27.845+02:00",
      "type" : "com_cumulocity_model_DoorSensorEvent",
      "text" : "Door sensor was triggered.",
      "source": { "id" : "12345", ... }
    }

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.event+json;ver=...
    Content-Length: ...
    Location: <<URL of new event>>
     
    {
      "id" : "10",
      "self" : "<<URL of new event>>",
      "time" : "2011-09-06T12:03:27.845+02:00",
      "creationTime" : "2011-09-06T12:03:27.927+02:00",
      "type" : "com_cumulocity_model_DoorSensorEvent",
      "text" : "Door sensor was triggered.",
      "source" : { "id":"12345", "self ": "..." }
    }

For POST requests, the source parameter is required to have only an id.

The "id" and "creationTime" of the new event are generated by the server and returned in the response to the POST operation.

# Event

## Event [application/vnd.com.nsn.cumulocity.event+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
String
1
Uniquely identifies an event.</td>
<td align="left">self
URI
1
Link to this resource.</td>
<td align="left">creationTime
String
1
Time when event was created in the database.</td>
<td align="left">type
String
1
Identifies the type of this event.</td>
</tr>
</tbody>
</table>

## GET a representation of an Event

Request body: N/A
 Response body: Event
  
Required role: ROLE\_EVENT\_READ

Example request: Retrieve information about an Event

    GET [URL to the resource]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept: application/vnd.com.nsn.cumulocity.event+json;ver=0.9

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.event+json;ver=...
    Content-Length: ...
     
    {
      "id" : "10",
      "self" : "...",
      "time" : "2011-09-06T12:03:27.845+02:00",
      "creationTime" : "2011-09-06T12:03:27.927+02:00",
      "type" : "com_cumulocity_model_DoorSensorEvent",
      "text" : "Door sensor was triggered.",
      "source" : { "id":"12345", "self ": "..." }
    }

## DELETE an Event

Request Body: N/A.
 Response Message Body: N/A.
  
Required role: ROLE\_EVENT\_ADMIN or owner of source object.

Example Request: Delete an event

    DELETE [URL to the resource]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

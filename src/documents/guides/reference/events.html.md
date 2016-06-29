---
order: 30
title: Events
layout: default
---
The events interface consists of three parts:

-   The *event API* resource returns URIs and URI templates to collections of events, so that all events or events of a specified type and/or a specific source device can be retrieved.
-   The *event collection* resource retrieves events and enables creating new events.
-   The *event* resource represents individual events that can be queried and deleted.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

## Event API

### EventAPI [application/vnd.com.nsn.cumulocity.eventApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|events|EventCollection|1|Collection of all events.|
|eventsForType|EventCollection URI template|1|Read-only collection of all events of a particular type (placeholder {type}).|
|eventsForSource|EventCollection URI template|1|Read-only collection of all events from a particular source object (placeholder {source}).|
|eventsForSourceAndType|EventCollection URI template|1|Read-only collection of all events of a particular type and from a particular source (placeholders {type} and {source}).|
|eventsForTime|EventCollection URI template|1|Read-only collection of all events from a particular period (placeholder {dateFrom}, {dateTo}).|
|eventsForFragmentType|EventCollection URI template|1|Read-only collection of all events containing a particular fragment type (placeholder {fragmentType}).|
|eventsForSourceAndTime|EventCollection URI template|1|Read-only collection of all events from a particular source object from a particular period (placeholders {source}, {dateFrom}, {dateTo}).|
|eventsForSourceAndFragmentType|EventCollection URI template|1|Read-only collection of all events of a particular source object containing a particular fragment type (placeholders {source}, {fragmentType}).|
|eventsForDateAndFragmentType|EventCollection URI template|1|Read-only collection of all events from a particular period containing a particular fragment type (placeholders {dateFrom}, {dateTo}, {fragmentType}).|
|eventsForFragmentTypeAndType|EventCollection URI template|1|Read-only collection of all events of a particular type containing a particular fragment type (placeholders {fragmentType}, {type}).|
|eventsForTimeAndType|EventCollection URI template|1|Read-only collection of all events with a particular type from a particular period (placeholders {type}, {dateFrom}, {dateTo}).|
|eventsForSourceAnd   DateAndFragmentType|EventCollection URI template|1|Read-only collection of all events from a particular source object, containing a particular fragment type, from a particular period (placeholders {source}, {dateFrom}, {dateTo}, {fragmentType}).|
|eventsForSourceAnd   DateAndFragmentTypeAndType|EventCollection URI template|1|Read-only collection of all events from a particular source object, with a particular type, containing a particular fragment type, from a particular period (placeholders {source}, {dateFrom}, {dateTo}, {fragmentType}, {type}).|
|eventsForSourceAnd   FragmentTypeAndType|EventCollection URI template|1|Read-only collection of all events from a particular source object, with a particular type, containing a particular fragment type (placeholders {source}, {fragmentType}, {type}).|
|eventsForSourceAndTimeAndType|EventCollection URI template|1|Read-only collection of all events from a particular source object, with a particular type, from a particular period (placeholders {source}, {type}, {dateFrom}, {dateTo}).|
|eventsForDateAnd   FragmentTypeAndType|EventCollection URI template|1|Read-only collection of all events from a particular type, containing a particular fragment type, from a particular period (placeholders {type}, {dateFrom}, {dateTo}, {fragmentType}).|

### GET the Event API resource

Response body: Event Api
  
Required role: ROLE\_EVENT\_READ
 Example request: Retrieve information about Event API Resource

    GET /event
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

## Event collection

### EventCollection [application/vnd.com.nsn.cumulocity.eventCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|events|Event|0..n|List of events, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of events.|
|next|URI|0..1|Link to a potential next page of events.|

### GET an event collection

Response body: Event Collection
  
Required role: ROLE\_EVENT\_READ
 Example request: Retrieve information about an Event Collection

    GET /event/events
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

### POST - create a new event

Request body: Event

Response body: Event
  
Required role: ROLE\_EVENT\_ADMIN or owner of source object

Example request: Create a new Event

    POST /event/events
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

### DELETE - delete an event collection

The DELETE method allows for deletion of event collections. Applicable query parameters are equivalent to GET method.

Request body: N/A

Response body: N/A
  
Required role: ROLE\_EVENT\_ADMIN

Example request:

     DELETE: /event/events....
     Host: ...
     Authorization: Basic ...
     
Example response:

    HTTP/1.1  204 NO CONTENT

## Event

### Event [application/vnd.com.nsn.cumulocity.event+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|String|1|Uniquely identifies an event.|
|self|URI|1|Link to this resource.|
|creationTime|String|1|Time when event was created in the database.|
|type|String|1|Identifies the type of this event.|
|time|String|1|Time of the event.|
|text|String|1|Text description of the event.|
|source|ManagedObject|1|The ManagedObject that the event originated from, as object containing properties "id", "self", "name", and "type".|
|\*|Object|0..n|Additional properties of the event.|

### GET a representation of an Event

Response body: Event
  
Required role: ROLE\_EVENT\_READ

Example request: Retrieve information about an Event

    GET /event/events/<<eventID>>
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

### DELETE an Event

Request Body: N/A.

Response Message Body: N/A.
  
Required role: ROLE\_EVENT\_ADMIN or owner of source object.

Example Request: Delete an event

    DELETE /event/events/<<eventID>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

## Notifications

With the event notification API it is possible to receive updates for all events for a specific device.
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/guides/reference/real-time-notifications)". The URL is

    /cep/realtime

The subscription channel needs to contain the managed object ID of the device or a "*" as placeholder to receive notifications for the events of all devices

    /events/<<deviceId>>

The response will additionally to the event object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the id of the deleted event.

Example Response:

    HTTP/1.1 200 OK 
    Content-Type: application/json
    [
      {
        "channel": "/events/12345", 
        "successful": true, 
        "error": "", 
        "data": [{
          "realtimeAction": "CREATE",
          "data": {
            "id": "1",
            "self": "...",
            "source": { 
              "12345"
            },
            "creationTime": "2011-09-06T12:03:27.927+02:00",
            "text": "event has been triggered"
          }
        }], 
        "clientId": "Un1q31d3nt1f13r" 
      }
    ]

Required role: ROLE\_EVENT\_READ
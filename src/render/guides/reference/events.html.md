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

### PUT - update a event

Request body: Event

Response body: Event

Required role: ROLE_EVENT_ADMIN or owner of source object

Example Request: Change the text of a event

    PUT /event/events/<<eventId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.event+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.event+json;ver=...
    Content-Length: ...
    {
      "text": "Life full of events"
    }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.event+json;ver=...
    {
      "creationTime": "2016-11-08T16:07:40.917+01:00",
      "time": "2014-03-03T12:03:27.845Z",
      "id": "10400",
      "self": ".../event/events/10400",
      "source": {
        "id": "10216",
        "self": ".../inventory/managedObjects/10216"
      },
      "text": "Life full of events",
      "type": "TestAlarm"
    }

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

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|id|String|1|Uniquely identifies an event.|No|
|self|URI|1|Link to this resource.|No|
|creationTime|String|1|Time when event was created in the database.|No|
|type|String|1|Identifies the type of this event.|POST: Mandatory PUT: No|
|time|String|1|Time of the event.|POST: Mandatory PUT: No|
|text|String|1|Text description of the event.|POST: Mandatory PUT: Optional|
|source|ManagedObject|1|The ManagedObject that the event originated from, as object containing properties "id", "self", "name", and "type".|POST: Mandatory PUT: No|
|\*|Object|0..n|Additional properties of the event.|POST: Optional PUT: Optional|

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

## Binaries

The events Rest API has the possibility to store/retrieve and delete binaries for events.

Every event can have one binary attached.

### GET - Download a binary

Required role: ROLE\_EVENT\_READ

Example request:

    GET <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    
Example response when binary exists:

    HTTP/1.1 200 OK
    Content-Type: <<content-type>>
    Content-Disposition: attachment; filename=”file.txt”
    <<content-body>>

Response when binary doesn't exists or is only partially uploaded or when event doesn't exist

    HTTP/1.1 404 OK
    <<error-message>>
    

### POST - Upload a binary

Using POST method it is possible to upload binary file as attachment to Event. Size of attachment cannot exceed 50MB.

Required role: ROLE\_EVENT\_ADMIN

Example request:

    POST <<url>>/event/events/<<eventId>>/binaries
    Content-Type: <<content-type>>
    Content-Length: <<content-lenght>>
    Authorization: Basic <<auth>>
    <<content-body>>
    
Successful response:
    
    HTTP/1.1 201 Created
    Location: <<url>>/event/events/<<eventId>>/binaries
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/binaries/<<eventId>>”,
      “type”: “<<content-type>>”,
      “source”: <<eventId>>,
      “length”: <<content-lenght>>
    }

Response when event doesn't exist:

    HTTP/1.1 404 NOT FOUND
    <<error-message>>
    
Response when binary already exists:
 
    HTTP/1.1 409 CONFLICT
    <<error-message>>

Corresponding event will have fragment:

    {
      ...
      “c8y_IsBinary”:  {
        “type”: “<<content-type>>”
      }
      ...
    }

### POST multipart/form-data - Upload a binary

Uploading functionality is also available using multipart request.

Required role: ROLE\_EVENT\_ADMIN

Example request:

    POST <<url>>/event/events/<<eventId>>/binaries
    Content-Type: multipart/form-data; boundary=--myBoundary
    Authorization: Basic <<auth>>
    
    --myBoundary
    Content-Type: application/octet-stream
    Content-Disposition: form-data; name="file.txt"
    
    <<content-body>>
    --myBoundary--
    
Successful response:

    HTTP/1.1 201 Created
    Location: <<url>>/event/events/<<eventId>>/binaries
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/events/<<eventId>>/binaries”,
      “type”: “application/octet-stream”,
      “name”: “file.txt”,
      “source”: <<eventId>>,
      "length": <<lenght>>
    }

### POST content-range - Upload a binary

Files can be uploaded in many chunks using “Content-Range” header.

“Content-Range” header is in format “start-stop/length” where:
* “start” represents beginning of uploaded file, starting from 0, 
* "stop” is end of file inclusive, 
* “length” is length of whole document, the property is mandatory only in last chunk of file, in other cases it can be replaced with ‘*’

Ie having document with size 10 we can create chunks: “0-3/\*”, “4-5/\*”, “6-9/10”.

Size of single chunk cannot exceed 5MB.

Required role: ROLE\_EVENT\_ADMIN
    
Example first chunk request:

    POST <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    Content-Type: <<content-type>>
    Content-Length: 100
    Content-Range: 0-399/*
    <<content-body>>

Example response for first chunk:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/events/<<eventId>>/binaries”,
      “type”: “<<content-type>>”,
      “range”: “0-399/*”,
      “source”: <<eventId>>
    }
    
Corresponding event will have fragment:

    {
      ...
      “c8y_IsIncompleteBinary”: {
        “range”: “0-399/*”
      }
      ...
    }
    
Example last request:

    POST <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    Content-Type: <<content-type>>
    Content-Length: 100
    Content-Range: 400-499/500
    <<content-body>>
    
Example response for last chunk:

    HTTP/1.1 201 Created
    Location: <<url>>/event/events/<<eventId>>/binaries
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/binaries/<<eventId>>”,
      “type”: “<<content-type>>”,
      “source”: <<eventId>>,
      “length”: <<content-lenght>>
    }

### PUT - Replace existing binary

Required role: ROLE\_EVENT\_ADMIN  
    
Example request:

    PUT <<url>>/event/events/<<eventId>>/binaries
    Content-Type: <<content-type>>
    Content-Length: <<content-lenght>>
    Authorization: Basic <<auth>>
    <<content-body>>
    
Successful response:
    
    HTTP/1.1 201 Created
    Location: <<url>>/event/events/<<eventId>>/binaries
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/binaries/<<eventId>>”,
      “type”: “<<content-type>>”,
      “source”: <<eventId>>,
      “length”: <<content-lenght>>
    }

### DELETE - Delete a binary

Required role: ROLE\_EVENT\_ADMIN

Example request:

    DELETE <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    
Example response:

    HTTP/1.1 204 NO CONTENT
    
Example response when binary or event doesn't exist

    HTTP/1.1 404 NOT FOUND
    <<error-message>>

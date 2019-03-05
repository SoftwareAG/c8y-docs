---
weight: 30
title: Event
layout: redirect
---
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

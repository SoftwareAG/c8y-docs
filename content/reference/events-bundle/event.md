---
weight: 30
title: Event
layout: redirect
---
### Event [application/vnd.com.nsn.cumulocity.event+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|id|string|1|Uniquely identifies an event.|No|
|self|string|1|A URI linking to this resource.|No|
|creationTime|datetime|1|Time when event was created in the database.|No|
|type|string|1|Identifies the type of this event.|POST: Mandatory PUT: No|
|time|string|1|Time of the event.|POST: Mandatory PUT: No|
|text|string|1|Text description of the event.|POST: Mandatory PUT: Optional|
|source|ManagedObject|1|The ManagedObject that the event originated from, as object containing properties "id", "self", "name", and "type".|POST: Mandatory PUT: No|
|\*|Object|0..n|Additional properties of the event.|POST: Optional <br> PUT: Optional|

### GET - Representation of an event

Response body: application/vnd.com.nsn.cumulocity.event+json

Required role: ROLE\_EVENT\_READ

#### Example request - Retrieve information about an event

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}   

```http
GET <<url>>/event/events/<<eventID>>    
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.event+json;ver=...

```http
HTTP/1.1
200 OK

{
  "id" : "10",
  "self" : "...",
  "time" : "2011-09-06T12:03:27.845+02:00",
  "creationTime" : "2011-09-06T12:03:27.927+02:00",
  "type" : "com_cumulocity_model_DoorSensorEvent",
  "text" : "Door sensor was triggered.",
  "source" : {
 	"id":"12345",
	"self ": "..."
  }
}
```

### DELETE - Delete an event

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_EVENT\_ADMIN or owner of source object.

#### Example Request - Delete an event

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
DELETE <<url>>/event/events/<<eventID>>
```

#### Example Response

```http
HTTP/1.1
204 NO CONTENT
```

> **Info:** DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when the deleted event has a lot of associated data. After sending the request, the platform starts deleting the associated data in an asynchronous way. Finally, the requested event is deleted after all associated data has been deleted.

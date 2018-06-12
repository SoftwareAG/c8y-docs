---
order: 10
title: Events API
layout: redirect
---

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

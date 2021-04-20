---
weight: 60
title: Option collection
layout: redirect
---

### OptionCollection [application/vnd.com.nsn.cumulocity.optionCollection+json].

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|options|array|0..n|List of Options, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of options.|
|next|string|0..1|A URI linking to a potential next page of options.|

### GET a representation of a OptionCollection.

Response body: OptionCollection

Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example Request: Get options.


    GET /tenant/options
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.optioncollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optioncollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Collection URL>>",
      "options": [
            {
                "category": "access.control",
                "key": "allow.origin",
                "self": "<<Option access.control.allow.origin URL>>",
                "value": "*"
            },
            ...
      ],
      "statistics" : {
        "totalPages" : 1,
        "pageSize" : 5,
        "currentPage" : 1
      },
      "next" : "...",
      "prev" : "..."
    }

### POST a representation of a Option.

Request body: Option

Response body: Option

Required role: ROLE\_OPTION\_MANAGEMENT\_ADMIN

Example Request: Post option.


    POST /tenant/options
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "category" : "alarm.type.mapping",
        "key": "temp_too_high",
        "value": "CRITICAL|temperature too high"
    }

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Content-Length: ...
    {
        "self" : "<<Option alarm.type.mapping.temp_too_high URL>>"
        "category" : "alarm.type.mapping",
        "key": "temp_too_high",
        "value": "CRITICAL|temperature too high"
    }

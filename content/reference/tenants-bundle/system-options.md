---
weight: 80
title: System options
layout: redirect
---

This endpoint provides a set of read-only properties pre-defined in platform configuration. The response format is exactly the same as for OptionCollection.

Response body: OptionCollection

Required role: ROLE\_OPTION\_MANAGEMENT\_READ

Example Request: Get system options.


    GET /tenant/system/options
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.optioncollection+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optioncollection+json;ver=...
    Content-Length: ...
    {
      "options": [
            {
                "category": "access.control",
                "key": "allow.origin",
                "value": "*"
            },
            ...
      ],
    }

It is also poss	ible to query a single system option by passing `category` and `id` in the URL path:

Response body: Option

Required role: ROLE\_OPTION\_MANAGEMENT\_READ
 Example Request: Get single option.


    GET /tenant/system/option/<<category>>/<<id>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...

Example Response :

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.optioncollection+json;ver=...
    Content-Length: ...
    {
        "category": "access.control",
        "key": "allow.origin",
        "value": "*"
    }

---
order: 40
title: Query particular capabilities
layout: redirect
---

To decouple applications from the specifics of particular types and makes of devices, applications can use so-called fragments to query the inventory (see the [Fragments section of "Cumulocity's domain model"](/guides/concepts/domain-model)). For example, to find all managed objects having a location, use

    GET /inventory/managedObjects?fragmentType=c8y_Position&withTotalPages=true HTTP/1.1

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectCollection+json; charset=UTF-8; ver=0.9
    ...
    {
        "managedObjects": [
            {
                "id": "2480700",
                "lastUpdated": "2013-08-30T10:15:44.218+02:00",
                "name": "RaspPi BCM2708 0000000017b769d5 Gps eM9",
                "owner": "admin",
                "self": "https://.../inventory/managedObjects/2480700",
                "type": "c8y_TinkerForge_Gps",
                "c8y_Position": {
                    "alt": 102.36,
                    "lng": 6.769717,
                    "lat": 51.267259
                },
                ...
            },
            ...
        ]
        "next": "https://.../inventory/managedObjects?withTotalPages=true&fragmentType=c8y_Position&pageSize=5&currentPage=2",
        "statistics": {
            "currentPage": 1,
            "pageSize": 5,
            "totalPages": 4
        },
        "self": "https://.../inventory/managedObjects?withTotalPages=true&fragmentType=c8y_Position&pageSize=5&currentPage=1"
    }

Now, you can, for example, place the object in a map. Standard fragments are defined in the [Device management library](/guides/reference/device-management) and in the [Sensor library](/guides/reference/sensor-library).

Querying the "/platform" resource will show you further possibilities for querying your data (see the [Introduction](/guides/images/rest/introduction)).

Note that queries do not necessarily return all query results at once, but only a "page" of the result. For more information on paging, see the Section [Query result paging](/guides/reference/rest-implementation). The optional parameter "withTotalPages" will make the query contain full page statistics at the expensive of slightly slower performance.
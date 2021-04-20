---
weight: 60
title: Notifications
layout: redirect
---

Inventory notifications permit the monitoring of changes in the inventory (CREATE, UPDATE and DELETE).

The basic protocol for receiving notifications is described in [Real-time notifications](/reference/real-time-notifications). 

The URL is:

```http
    /notification/realtime
```

The subscription channel must contain the managed object ID of the object in the inventory to be monitored or a "*" as placeholder to receive notifications for the entire inventory.

```http
    /managedobjects/<<managedObjectId>>
```

In addition to the managed object, the response will  contain a `realtimeAction` to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the ID of the deleted managed object.

Required role: ROLE\_INVENTORY\_READ

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/json

```http
HTTP/1.1 
200 - OK

[
  {
    "channel": "/managedobjects/12345",
    "successful": true,
    "error": "",
    "data": [{
      "realtimeAction": "UPDATE",
      "data": {
        "id": "12345",
        "self": "...",
        "creationTime": "2011-09-06T12:03:27.927+02:00",
        "name": "a device",
        "c8y_IsDevice": {},
        "c8y_Location": { ... }
      }
    }],
    "clientId": "Un1q31d3nt1f13r"
  }
]
```



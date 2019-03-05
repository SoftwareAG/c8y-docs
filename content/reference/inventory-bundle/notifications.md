---
weight: 60
title: Notifications
layout: redirect
---

Inventory notifications permit the monitoring of changes in the inventory (creation, update and deletion).
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/guides/reference/real-time-notifications)". The URL is

    /cep/realtime

The subscription channel needs to contain the managed object ID of the object in the inventory that should be monitored or a "*" as placeholder to receive notifications for the complete inventory

    /managedobjects/<<managedObjectId>>

The response will additionally to the managed object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the id of the deleted managed object.

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/json
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

Required role: ROLE\_INVENTORY\_READ

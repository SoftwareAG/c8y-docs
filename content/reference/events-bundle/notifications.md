---
weight: 40
title: Notifications
layout: redirect
---

With the event notification API it is possible to receive updates for all events for a specific device.
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/reference/real-time-notifications)". The URL is

    /cep/realtime

The subscription channel needs to contain the managed object ID of the device or a "*" as placeholder to receive notifications for the events of all devices

    /events/<<deviceId>>

The response will additionally to the event object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the ID of the deleted event.

**Required role:** ROLE\_EVENT\_READ

#### Example Response:

|HEADERS||
|:---|:---|
|Content-Type|application/json

```http
HTTP/1.1
200 - OK
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
```

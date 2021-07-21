---
weight: 10
title: Notifications
layout: redirect
---

The alarm notification API permits the monitoring of alarms of specific devices.
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/reference/real-time-notifications)". The URL is

    /cep/realtime

The subscription channel needs to contain the managed object ID of the device or a "*" as placeholder to receive notifications for the alarms of all devices

    /alarms/<<deviceId>>

The response will additionally to the alarm object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the ID of the deleted alarm.

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    [
      {
        "channel": "/alarms/12345",
        "successful": true,
        "error": "",
        "data": [{
          "realtimeAction": "UPDATE",
          "data": {
            "id": "1",
            "self": "...",
            "source": {
              "12345"
            },
            "type": "c8y_UnavailabilityAlarm",
            "text": "I am an alarm",
            "severity": "MINOR",
            "status": "CLEARED",
            "firstOccurrence": true,
            "count": 1
          }
        }],
        "clientId": "Un1q31d3nt1f13r"
      }
    ]

Required role: ROLE\_ALARM\_READ

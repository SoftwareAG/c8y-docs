---
weight: 50
title: Notifications
layout: redirect
---

There are two options to receive real-time notifications for the device control API.
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/reference/real-time-notifications)".

### Receive operations for an agent

Real-time notifications permit an agent to almost immediately receive new operations targeted to it. For control-related notifications, use the URL

	/notification/operations

> **Info:** The old endpoint `/devicecontrol/notifications` is deprecated. Switch your applications to `/notification/operations` if not already done.

The subscription channel needs to contain the managed object ID of the agent that wants to receive its operations:

	/<<agentId>>

For example, to subscribe on notifications about new operations created for the agent with the ID "5", the subscription channel should be the following string:

    /5

Required role: ROLE\_DEVICE\_CONTROL\_READ

### Receive operations for a device

This endpoint will not only result in returning newly created operations but also all updates (including deletion) of the operations for a device. The URL is

    /notification/realtime

> **Info:** The old endpoint `/cep/realtime` is deprecated. Switch your applications to `/notification/realtime` if not already done.

The subscription channel needs to contain the managed object ID of the device or a "*" as placeholder to receive notifications for all devices

    /operations/<<deviceId>>

The response will additionally to the operation object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the ID of the deleted operation.

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    [
      {
        "channel": "/operations/12345",
        "successful": true,
        "error": "",
        "data": [{
          "realtimeAction": "CREATE",
          "data": {
            "id": "1",
            "deviceId": "12345",
            "self": "...",
            "creationTime": "2011-09-06T12:03:27.927+02:00",
            "status": "PENDING",
            "time": "2011-09-06T12:03:27.845+02:00",
            "description": "Deactivate motion tracking",
            "c8y_MotionTracking": { ... }
          }
        }],
        "clientId": "Un1q31d3nt1f13r"
      }
    ]

Required role: ROLE\_DEVICE\_CONTROL\_READ

---
weight: 40
title: Unsubscribe
layout: redirect
---

To stop receiving notifications from a channel, send a message to <kbd>/meta/unsubscribe</kbd> supplying the proper channel name in the same format as used during subscription.

### Request

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|string|1|ID of message, required to match response message.|
|channel|string|1|The channel name as a URI, required value: "/meta/unsubscribe".|
|clientId|string|1|Unique client ID received during handshake.|
|subscription|string|1|Name of channel.|

Example Request:

```http
POST /notification/realtime
Host: ...
Authorization: Basic ...
Content-Length: ...
Content-Type: application/json
[
  {
    "channel": "/meta/unsubscribe",
    "clientId": "Un1q31d3nt1f13r",
    "subscription": "/alarms/<Device ID>"
  }
]
```

### Response

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|string|1|ID of message passed in request message.|
|channel|string|1|The channel name as a URI, required value: "/meta/unsubscribe".|
|clientId|string|1|Unique ID of client.|
|subscription|string|1|Name of subscribed channel.|
|successful|boolean|1|Result of unsubscription.|
|error|string|0..1|Unsubscription failure reason.|

Example response:

```http
HTTP/1.1 200 OK
Content-Type: application/json
[
  {
    "channel": "/meta/unsubscribe",
    "clientId": "Un1q31d3nt1f13r",
    "subscription": "/alarms/<Device ID>",
    "successful": true,
    "error": ""
  }
]
```

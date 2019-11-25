---
weight: 40
title: Unsubscribe
layout: redirect
---

To stop receiving notifications from a channel, send a message to "/meta/unsubscribe" supplying the proper channel name in the same format as used during subscription.

### Request

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|Integer|1|Id of message, required to match response message|
|channel|URI|1|Name of channel, required value "/meta/unsubscribe".|
|clientId|String|1|Unique client ID received during handshake.|
|subscription|String|1|Name of channel.|

Example Request:

    POST /cep/realtime
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

### Response

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|Integer|1|Id of message passed in request message|
|channel|URI|1|Name of channel, required value "/meta/unsubscribe".|
|clientId|String|1|Unique ID of client.|
|subscription|String|1|Name of subscribed channel.|
|successful|Boolean|1|Result of unsubscription.|
|error|String|0..1|Unsubscription failure reason.|

Example response:

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

---
order: 60
title: Disconnect
layout: redirect
---

To stop receiving notifications from all channels and close the conversation, send a message to the "/meta/disconnect" channel.

### Request

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|Integer|0..1|Id of message, required to match response message|
|channel|URI|1|Name of channel, required value "/meta/disconnect".|
|clientId|String|1|Unique ID of client received during handshake.|

Example response :

    POST /cep/realtime
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/json
    [
      {
        "channel": "/meta/disconnect",
        "clientId": "Un1q31d3nt1f13r",
      }
    ]

### Response

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|Integer|0..1|Id of message passed in request message|
|channel|URI|1|Name of channel, required value "/meta/disconnect".|
|successful|Boolean|1|Result of disconnect operation.|
|clientId|String|1|Unique ID of client received during handshake.|
|error|String|0..1|Disconnect failure reason.|

Example response :

    HTTP/1.1 200 OK
    Content-Type: application/json
    [
      {
        "channel": "/meta/disconnect",
        "clientId": "Un1q31d3nt1f13r",
        "successful": true
      }
    ]

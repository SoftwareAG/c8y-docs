---
weight: 60
title: Disconnect
layout: redirect
---

To stop receiving notifications from all channels and close the conversation, send a message to the <kbd>/meta/disconnect</kbd> channel.

### Request

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|string|0..1|ID of message, required to match response message.|
|channel|string|1|The channel name as a URI, required value: "/meta/disconnect".|
|clientId|string|1|Unique ID of client received during handshake.|

Example response :

```http
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
```

### Response

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|string|0..1|ID of message passed in request message.|
|channel|string|1|The channel name as a URI, required value: "/meta/disconnect".|
|successful|boolean|1|Result of disconnect operation.|
|clientId|string|1|Unique ID of client received during handshake.|
|error|string|0..1|Disconnect failure reason.|

Example response :

```http
HTTP/1.1 200 OK
Content-Type: application/json
[
  {
    "channel": "/meta/disconnect",
    "clientId": "Un1q31d3nt1f13r",
    "successful": true
  }
]
```

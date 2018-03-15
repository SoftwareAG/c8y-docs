---
order: 30
title: Subscribe
layout: redirect
---

A notification client can send subscribe messages where can specify desired channel to receive output messages from cumulocity server. The client will receive the messages in succeeding connect requests.

The format of channels names is different according to REST api in which the real-time notification service is used. For details go to :

-   The Real-time statements
-   The Device control

### Request

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|Integer|1|Id of message, required to match reponse message|
|channel|String|1|Name of channel, required value "/meta/subscribe"|
|clientId|String|1|Unique ID of client received during handshake.|
|subscription|String|1|Name of channel to subscribe to.|

Example Request:

    POST /cep/realtime
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/json
    [
      {
        "channel": "/meta/subscribe",
        "clientId": "Un1q31d3nt1f13r",
        "subscription": "/alarms/overHeatAlarms"
      }
    ]


### Response

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|Integer|1|Id of message passed in request message|
|channel|URI|1|Name of channel, required value "/meta/subscribe".|
|clientId|String|1|Unique ID of client.|
|subscription|String|1|Name of channel.|
|successful|Boolean|1|Result of subscription.|
|error|String|0..1|Subscription failure reason.|

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    [
      {
        "channel": "/meta/subscribe",
        "clientId": "Un1q31d3nt1f13r",
        "subscription": "/alarms/overHeatAlarms",
        "successful": true,
        "error": ""
      }
    ]

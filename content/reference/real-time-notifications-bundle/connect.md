---
weight: 50
title: Connect
layout: redirect
---

After a Bayeux client has discovered the server's capabilities with a handshake exchange and subscribed to the desired channels, a connection is established by sending a message to the "/meta/connect" channel. This message may be transported over any of the transports returned by the server in the handshake response. Requests to the connect channel must be immediately repeated after every response to receive the next batch of notifications.

### Request

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|Integer|0..1|Id of message, required to match reponse message|
|channel|URI|1|Name of channel, required value "/meta/connect".|
|clientId|String|1|Unique ID of client received during handshake.|
|connectionType|String|1|Selected connection type.|
|advice|Object|0..1|Configuration paramaters for current connect message.|

### Advice

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|timeout|Integer|0..1|Interval between sending of connect message and response from server. Overrides server default settings for current request-response conversation.|
|interval|Integer|0..1|Period above which server will close session, if not received next connect message from client. Overrides server default settings for current request-response conversation.|

Example Request :

    POST /cep/realtime
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/json
    [
      {
        "channel": "/meta/connect",
        "clientId": "Un1q31d3nt1f13r",
        "connectionType": "long-polling",
        "advice":{"timeout":1200000,"interval":30000}
      }
    ]

### Response

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|Integer|0..1|Id of message passed in request message|
|channel|URI|1|Name of channel.|
|clientId|String|1|Unique ID of client.|
|successful|Boolean|1|Result of connect.|
|data|Array|1|List of notifications from channel.|
|error|String|0..1|Connect failure reason.|

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    [
      {
        "channel": "/cepModuleName/cepStatementName",
        "successful": true,
        "error": "",
        "data": [{
           "id" : "10",
           "self" : "...",
           "creationTime" : "2011-09-06T12:03:27.927+02:00",
           "type" : "com_cumulocity_model_DoorSensorEvent",
           "time" : "2011-09-06T12:03:27.845+02:00",
           "text" : "Door sensor was triggered.",
           "com_othercompany_Extension" : { ... },
           "source":{ "id":"12345", "self": "..." }
        }],
        "clientId": "Un1q31d3nt1f13r"
      },{
        "channel": "/cepModuleName/cepStatementName",
        "successful": true,
        "error": "",
        "data": [{
           "id" : "11",
           "self" : "...",
           "creationTime" : "2011-09-06T12:03:27.927+02:00",
           "type" : "com_cumulocity_model_DoorSensorEvent",
           "time" : "2011-09-06T12:03:27.845+02:00",
           "text" : "Door sensor was triggered.",
           "com_othercompany_Extension" : { ... },
           "source":{ "id":"12345", "self": "..." }
        }],
        "clientId": "Un1q31d3nt1f13r"
      },
      {
        "channel":"/meta/connect",
        "successful":true
      }
    ]

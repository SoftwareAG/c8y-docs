---
weight: 50
title: Connect
layout: redirect
---

After a Bayeux client has discovered the server's capabilities with a handshake exchange and subscribed to the desired channels, a connection is established by sending a message to the <kbd>/meta/connect</kbd> channel. This message may be transported over any of the transports returned by the server in the handshake response. Requests to the connect channel must be immediately repeated after every response to receive the next batch of notifications.

### Request

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 10%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">id</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">ID of message, required to match response message.</td>
</tr>
<tr>
<td align="left">channel</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The channel name as a URI, required value: “/meta/connect”.</td>
</tr>
<tr>
<td align="left">clientId</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Unique ID of client received during handshake.</td>
</tr>
<tr>
<td align="left">connectionType</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Selected connection type.</td>
</tr>
<tr>
<td align="left">advice</td>
<td align="left">Object</td>
<td align="left">0..1</td>
<td align="left">Configuration parameters for current connect message.</td>
</tr>
</tbody>
</table>

### Advice

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 10%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">timeout</td>
<td align="left">int</td>
<td align="left">0..1</td>
<td align="left">Interval between sending of connect message and response from server. Overrides server default settings for current request-response conversation.</td>
</tr>
<tr>
<td align="left">interval</td>
<td align="left">int</td>
<td align="left">0..1</td>
<td align="left">Period above which server will close session, if not received next connect message from client. Overrides server default settings for current request-response conversation.</td>
</tr>
</tbody>
</table>

Example Request :

```http
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
```

### Response

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|id|string|0..1|ID of message passed in request message.|
|channel|string|1|The channel name as a URI.|
|clientId|string|1|Unique ID of client.|
|successful|boolean|1|Result of connect.|
|data|array|1|List of notifications from channel.|
|error|string|0..1|Connect failure reason.|

Example response:

```http
HTTP/1.1 200 OK
Content-Type: application/json
[
    {
        "channel": "/alarms/208",
        "id": "79",
        "data": {
            "realtimeAction": "UPDATE",
            "data": {
                "severity": "MAJOR",
                "creationTime": "2019-10-29T13:10:21.297Z",
                "count": 2,
                "history": {
                    "auditRecords": [],
                    "self": "https://[..]/audit/auditRecords"
                },
                "source": {
                    "self": "https://[..]/inventory/managedObjects/208",
                    "id": "208"
                },
                "type": "c8y_Application__BackOff",
                "firstOccurrenceTime": "2019-10-29T13:10:21.000Z",
                "self": "https://[..]/alarm/alarms/327",
                "time": "2019-10-29T13:10:36.000Z",
                "id": "327",
                "text": "Back-off restarting failed container",
                "status": "ACTIVE",
                "c8y_Application__Metadata": {
                    "owner": "management",
                    "tenant": "management"
                }
            }
        }
    },
    {
        "advice": {
            "interval": 0,
            "timeout": 5400000,
            "reconnect": "retry"
        },
        "channel": "/meta/connect",
        "successful": true
    }
]
```

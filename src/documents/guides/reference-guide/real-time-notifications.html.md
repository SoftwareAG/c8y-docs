---
order: 150
title: Real-time notifications
layout: default
---

# Overview

This section describes the aspects common to all the real-time notifications services of Cumulocity.

Each service has his own subscription channel name format and URL which are described in section *Notifications* with REST interface documentation. The real-time notifications are available for:

-   [Real-time statements](index.php?option=com_k2&view=item&id=952).
-   [Device control](index.php?option=com_k2&view=item&id=825).

The real-time notifications API enables responsive communication from Cumulocity over restricted networks towards clients such as web browser and mobile devices. Clients subscribe to so-called channels to receive messages. These channels are filled by Cumulocity with the output of [real-time statements](index.php?option=com_k2&view=item&id=952) or newly created [operations](index.php?option=com_k2&view=item&id=825). In addition, particular system channels are used for initial handshake with clients, subscription to channels, removal from channels and connection. As communication mechanism, the [Bayeux protocol](http://svn.cometd.com/trunk/bayeux/bayeux.html) over HTTP is used.

# Handshake

A real-time notifications client initiates connection negotiation by sending a message to the "/meta/handshake" channel. In response, the client receives a *clientId* which identifies a conversation and must be passed in every non-handshake request.

## Request

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
1
Id of message, required to match response message </td>
<td align="left">channel
URI
1
Name of channel, required value &quot;/meta/handshake&quot;.</td>
<td align="left">version
String
1
Bayeux protocol version used by client.</td>
<td align="left">minimumVersion
String
0..1
Minimum server-side Bayeux protocol version required by client.</td>
</tr>
</tbody>
</table>

## Advice

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">timeout
Integer
0..1
Interval in milliseconds between sending of connect message and response from server . Overrides server default settings for session. Default value : 3600000, maximum value 7200000</td>
<td align="left">interval
Integer
0..1
Period above which server will close session, if not received next connect message from client. Overrides server default settings for session. Default value : 10000</td>
</tr>
</tbody>
</table>

Example request:

    POST ... 
    Host: ... 
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/json
    [
      { 
        "channel": "/meta/handshake",
        "version": "1.0",
        "mininumVersion": "1.0beta",
        "supportedConnectionTypes": ["long-polling","callback-polling"],
        "advice":{"timeout":120000,"interval":30000}
      }
    ]

## Response

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
1
Id of message passed in request message</td>
<td align="left">channel
URI
1
Name of channel, required value &quot;/meta/handshake&quot;.</td>
<td align="left">version
String
0..1
Bayeux protocol version used by server.</td>
<td align="left">minimumVersion
String
0..1
Minimum client-side Bayeux protocol version required by server.</td>
</tr>
</tbody>
</table>

Example of successful response:

    HTTP/1.1 200 OK 
    Content-Type: application/json
    [
      {
        "channel": "/meta/handshake", 
        "version": "1.0", 
        "minimumVersion": "1.0beta", 
        "supportedConnectionTypes": ["long-polling"], 
        "clientId": "Un1q31d3nt1f13r", 
        "successful": true 
      }
    ]

Example of failed response:

    HTTP/1.1 200 OK 
    Content-Type: application/json
    [
      {
        "channel": "/meta/handshake", 
        "successful": false, 
        "error":"403::Handshake denied" 
      }
    ]
        

# Subscribe

A notification client can send subscribe messages where can specify desired channel to receive output messages from cumulocity server. The client will receive the messages in succeeding connect requests.

The format of channels names is different according to REST api in which the real-time notification service is used. For details go to :

-   The Real-time statements
-   The Device control

## Request

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
1
Id of message, required to match reponse message</td>
<td align="left">channel
String
1
Name of channel, required value &quot;/meta/subscribe&quot;</td>
<td align="left">clientId
String
1
Unique ID of client received during handshake.</td>
<td align="left">subscription
String
1
Name of channel to subscribe to.</td>
</tr>
</tbody>
</table>

Example Request:

    POST ... 
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
        

## Response

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
1
Id of message passed in request message</td>
<td align="left">channel
URI
1
Name of channel, required value &quot;/meta/subscribe&quot;.</td>
<td align="left">clientId
String
1
Unique ID of client.</td>
<td align="left">subscription
String
1
Name of channel.</td>
</tr>
</tbody>
</table>

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

# Unsubscribe

To stop receiving notifications from a channel, send a message to "/meta/unsubscribe" supplying the proper channel name in the same format as used during subscription.

## Request

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
1
Id of message, required to match reponse message</td>
<td align="left">channel
URI
1
Name of channel, required value &quot;/meta/unsubscribe&quot;.</td>
<td align="left">clientId
String
1
Unique client ID received during handshake.</td>
<td align="left">subscription
String
1
Name of channel.</td>
</tr>
</tbody>
</table>

Example Request:

    POST ... 
    Host: ... 
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/json
    [
      {
        "channel": "/meta/unsubscribe",
        "clientId": "Un1q31d3nt1f13r",
        "subscription": "/CepModuleName/CepStatementName"
      }
    ]

## Response

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
1
Id of message passed in request message</td>
<td align="left">channel
URI
1
Name of channel, required value &quot;/meta/unsubscribe&quot;.</td>
<td align="left">clientId
String
1
Unique ID of client.</td>
<td align="left">subscription
String
1
Name of subscribed channel.</td>
</tr>
</tbody>
</table>

Example response:

    HTTP/1.1 200 OK 
    Content-Type: application/json
    [
      {
        "channel": "/meta/unsubscribe",
        "clientId": "Un1q31d3nt1f13r",
        "subscription": "/CepModuleName/CepStatementName",
        "successful": true,
        "error": ""
      }
    ]

# Connect

After a Bayeux client has discovered the server's capabilities with a handshake exchange and subscribed to the desired channels, a connection is established by sending a message to the "/meta/connect" channel. This message may be transported over any of the transports returned by the server in the handshake response. Requests to the connect channel must be immediately repeated after every response to receive the next batch of notifications.

## Request

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
0..1
Id of message, required to match reponse message</td>
<td align="left">channel
URI
1
Name of channel, required value &quot;/meta/connect&quot;.</td>
<td align="left">clientId
String
1
Unique ID of client received during handshake.</td>
<td align="left">connectionType
String
1
Selected connection type.</td>
</tr>
</tbody>
</table>

## Advice

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">timeout
Integer
0..1
Interval between sending of connect message and response from server. Overrides server default settings for current request-response conversation.</td>
<td align="left">interval
Integer
0..1
Period above which server will close session, if not received next connect message from client. Overrides server default settings for current request-response conversation.</td>
</tr>
</tbody>
</table>

Example Request :

    POST ... 
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

## Response

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
0..1
Id of message passed in request message</td>
<td align="left">channel
URI
1
Name of channel.</td>
<td align="left">clientId
String
1
Unique ID of client.</td>
<td align="left">successful
Boolean
1
Result of connect.</td>
</tr>
</tbody>
</table>

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

# Disconnect

To stop receiving notifications from all channels and close the conversation, send a message to the "/meta/disconnect" channel.

## Request

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
Integer
0..1
Id of message, required to match reponse message</td>
<td align="left">channel
URI
1
Name of channel, required value &quot;/meta/disconnect&quot;.</td>
<td align="left">clientId
String
1
Unique ID of client received during handshake.</td>
</tr>
</tbody>
</table>

Example response :

    POST ... 
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

## Response

Name

Type

Occurs

Description

id

Integer

0..1

Id of message passed in request message

channel

URI

1

Name of channel, required value "/meta/disconnect".

successful

Boolean

1

Result of disconnect operation.

clientId

String

1

Unique ID of client.

error

String

0..1

Disconnect failure reason.

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

# Network Traffic

Listening to notifications through long polling generates certain traffic depending on the choice of timeouts. The table below lists the traffic generated by long polling requests with a timeout of one hour and no intervals between requests. The calculation does not include received notifications and session reconnects.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Period
Traffic</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">day
7 kB</td>
<td align="left">week
50 kB</td>
</tr>
</tbody>
</table>

During handshake or connect, a client can override default server connection settings such as timeout and interval. In case of the long polling transport, a client can change the long poll request duration by passing a timeout value. Longer timeout values reduce the traffic needed for sending request and response messages but can result in a loss of the connection. Clients can also set longer interval values and wait with sending the next connect message after receiving the last response (at the expensive of less interactivity).



---
weight: 70
title: Built-in messages
layout: redirect
---

*SmartREST* has a variety of built-in messages.

### Request messages

Message identifier | Message parameters              | Description
-------------------|-------------------------|------------
10 | Template message identifier<br>Method<br>Resource identifier<br>Content MIME type<br>Accept MIME type<br>Placeholder<br>Request parameters<br>Template string | Represents a request template. If this message occours in the body, the whole body is treated as a *SmartREST* template and thus, all messages besides `10` and `11` will yield an error.
11 | Template message identifier<br>Base JSON path<br>Conditional JSON ath<br>Value JSON paths | Represents a response template. If this message occours in the body, the whole body is treated as a *SmartREST* template and thus, all messages besides `10` and `11` will yield an error.
15 | X-Id | Defines which X-Id to use for the following lines. You must not use the X-Id header when using this line.
61 | Device MO GId | Poll device credentials during device bootstrapping process. No `X-Id` header must be present and the device bootstrap authorization must be used.
80 | *None* | Initial handshake that will return a unique bayeux clientId. SmartREST real-time notifications.
81 | clientId,channel | Subscribe for the given channel. SmartREST real-time notifications.
82 | clientId,channel | Unsubscribe for the given channel. SmartREST real-time notifications.
83 | clientId | Establish conntection for receiving the notifications (long-polling). SmartREST real-time notifications.
84 | clientId | Disconnect the client from the server. SmartREST real-time notifications.

### Response messages

Message identifier | Message parameters              | Description
-------------------|-------------------------|------------
20 | *SmartREST* Template MO GId | Echo response message. Template was found or has been created and everything is OK.
40 | *None* | Template not found.
41 | Line number (optional) | Template creation error.
42 | Line number | Malformed request line
43 | Line number | Invalid message identifier.
45 | Line number | Invalid message arguments.
50 | Line number<br>*HTTP* response code | Server error. This message occurs when an error happened between the *SmartREST* proxy and the platform.
70 | Line number<br>Unique device identifier<br>Tenant ID<br>Username<br>Password | Device bootstrap polling response with credentials.
86 | timeout,interval,reconnect policy | Settings advice for the client using SmartREST real-time notifications.
87 | amount of lines, X-Id | Indicates which X-Id was used to create the amount of following response lines.

#### Error messages

Message identifier | Error message
-------------------|-------------------------|------------
41 | Cannot create templates for already existing template object
41 | Duplicate message identifiers are not allowed
41 | Bad request template definition
41 | Bad response template definition
41 | Bad value type: ...
41 | Bad pattern
41 | Not a valid message identifier for template creation
41 | Invalid JsonPath
41 | Using JsonPath to refer to a list of objects is not allowed for SmartRest
41 | Using Filters (?) in JsonPath is not allowed for SmartRest
41 | No content type supported for {GET or DELETE} templates.
41 | No template string supported for {GET or DELETE} templates.
41 | No content type found for {POST or PUT} templates.
41 | No template string found for {POST or PUT} templates.
41 | Values are only supported for templates with placeholder.
42 | Malformed Request
43 | Invalid message identifier
45 | No arguments supported
45 | Wrong number of arguments
45 | Value is not a {value type}: {value}
---
order: 50
layout: redirect
title: Error handling
---

To subscribe for errors related to the JSON MQTT implementation use `error` topic. In case of invalid payload, wrong topic
or any other exception, notification will be published on this topic.

The payload is in JSON form which beside of standard error message contains also message id -
it allows client to find out which exactly message was failing.
Example payload:
 
```
{
  "error": "undefined/validationError",
  "message": "Following mandatory fields should be included: severity,text,time",
  "messageId": 3
}
```
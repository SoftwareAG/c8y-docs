---
order: 50
layout: redirect
title: Error handling
---

To subscribe for errors related to the JSON MQTT implementation use the `error` topic. In case of invalid payload, wrong topic or any other exception, a notification will be published on this topic.

The payload is in JSON format. Beside a standard error message it also contains a message id which allows the client to find out which exact message was failing.

Example payload:
 
```
{
  "error": "undefined/validationError",
  "message": "Following mandatory fields should be included: severity,text,time",
  "messageId": 3
}
```
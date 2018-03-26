---
order: 80
title: JSON via MQTT
layout: default
---

## Overview

This section describes the JSON payload format that can be used with the Cumulocity MQTT implementation.

In compare to the SmartREST 2.0 which works only with fixed templates, JSON support for MQTT was designed to combine
the payload flexibility of our REST API with the low protocol overhead of MQTT. 

The SmartREST way should still be the prefered way if reducing your payload to the minimum is important (mobile traffic, low capability device).

## Topic structure

Topic structure in JSON MQTT is quite similar to the REST endpoints, the main difference is in the additional action part which is included in the topic. 

To publish messages:
```
<api>/<resource>/<action>/<id>
```

To publish messages in *TRANSIENT* mode:
```
t/<api>/<resource>/<action>/<id>
```

Please, refer to [Processing Mode](/guides/reference/rest-implementation#processingmode) for more information about transient data processing.

### Topic actions

Action in the topic corresponds to HTTP methods combined with Content-Type header.

Following actions are available:
- *create* - corresponds to HTTP *POST*
- *createBulk* - corresponds to HTTP *POST* with Content-Type header value set to collection media type, for example `application/vnd.com.nsn.cumulocity.measurementCollection+json;charset=UTF-8;ver=0.9`
- *update* - corresponds to HTTP *PUT*
- *delete* - corresponds to HTTP *DELETE*
  
## Supported endpoint

Current JSON MQTT implementation does not cover all SmartREST 2.0 operations, so for example whole [device bootstrap process](/guides/mqtt/device-integration) has to be done using SmartREST 2.0.
Following endpoints and actions are supported:

|Endpoint|create|createBulk|update|delete|
|:-------|:-----|:---------|:-----|:-----|
|[event/events](/guides/reference/events)|x|x|x|x|
|[alarm/alarms](/guides/reference/alarms)|x|x|x| |
|[measurement/measurements](/guides/reference/measurements)|x|x| |x|

If the operation is not supported proper error message will be send to the `error` topic.

For all of the above endpoints you can use the same payload like in the REST API. The only difference is in the *source* field - in REST this field is mandatory while for JSON MQTT there is no need to set the device id here.
Source device id will be automatically resolved based on mqtt client id and this value will be always used, no mother if there is something already defined there.

## Examples

- Create new event
  
  Publish message on topic `/event/events/create` with payload:
  ```
  {
    "type": "TestEvent",
    "text": "sensor was triggered",
    "time": "2014-03-03T12:03:27.845Z"
  }
  ```
- Create many events
  
  Publish message on topic `/event/events/createBulk` with payload:
  ```
  {
    "events": [
      {
        "type": "TestEvent1",
        "text": "sensor was triggered",
        "time": "2014-03-03T12:03:27.845Z"
      },
      {
        "type": "TestEvent2",
        "text": "sensor was triggered",
        "time": "2014-03-04T12:03:27.845Z"
      }
    ]
  }
  ```
  
- Update event

  Publish message on topic `/event/events/update/<event_id>` with payload:
  ```
  {
    "text": "new text"
  }
  ```
  
- Delete event

  Publish message on topic `/event/events/delete/<event_id>` with empty payload

## Error handling

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
---
order: 30
layout: redirect
title: Supported endpoint
---

The current JSON MQTT implementation does not cover all SmartREST 2.0 operations, so for example the whole [device bootstrap process](/guides/mqtt/device-integration) has to be done using SmartREST 2.0.

The following endpoints and actions are supported:

|Endpoint|create|createBulk|update|delete|
|:-------|:-----|:---------|:-----|:-----|
|[event/events](/guides/reference/events)|x|x|x|x|
|[alarm/alarms](/guides/reference/alarms)|x|x|x| |
|[measurement/measurements](/guides/reference/measurements)|x|x| |x|

If the operation is not supported a proper error message will be send to the `error` topic.

For all of the above endpoints you can use the same payload like in the REST API. The only difference is in the *source* field - in REST this field is mandatory while for JSON MQTT there is no need to set the device ID here.
The source device ID will automatically be resolved based on the MQTT client ID. This value will always be used, no matter if there already is something defined there.
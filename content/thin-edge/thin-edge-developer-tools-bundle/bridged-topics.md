---
weight: 70
title: The bridged topics
layout: redirect
---

This document lists the MQTT topics that are supported by thin-edge.io.

### Thin Edge JSON MQTT topics

To send the Thin Edge JSON measurements to a supported IoT cloud, the device should publish the measurements on the **tedge/measurements** topic.
Internally the tedge-mapper will consume the measurements from this topic and translate and send them to the cloud that the device has been connected to by the `tedge connect` command.

### Cumulocity IoT MQTT topics

The topics follow the below format
`<protocol>/<direction><type>[/<template>][/<child id>]`

| Protocol | Direction | Type |
|----------|-----------|-------|
| s = standard  | u = upstream | s =  static (built-in)
| t = transient | d = downstream |c = custom (device-defined)
|               |  e = error| d = default (defined in connect)
|               |           | t = template
|               |           | cr = credentials

### SmartREST 2.0 topics

All {{< product-c8y-iot >}} topics have been prefixed by `c8y/`.

* Registration topics
  * c8y/s/dcr
  * c8y/s/ucr
* Creating template topics
   * c8y/s/dt
   * c8y/s/ut/#
* Static templates topics
  * c8y/s/us
  * c8y/t/us
  * c8y/q/us
  * c8y/c/us
  * c8y/s/ds
* Debug topics
  * c8y/s/e
* Custom template topics
  * c8y/s/uc/#
  * c8y/t/uc/#
  * c8y/q/uc/#
  * c8y/c/uc/#
  * c8y/s/dc/#

### C8Y JSON topics

* c8y/measurement/measurements/create
* c8y/error

You can find more information about {{< product-c8y-iot >}} topics in our [{{< sag-dev-community >}} ](https://tech.forums.softwareag.com/t/cumulocity-iot-tips-and-tricks-mqtt-cheat-sheet/237187).

### Azure MQTT topics

MQTT clients on Thin Edge devices must use the below topics to communicate with the Azure cloud.
The Azure topics are prefixed by `az/`.

 * `az/messages/events/` - Use this topic to send messages from the device to the cloud.
 The messages are forwarded to the Azure topic named `devices/{device_id}/messages/events/` where `device_id` is the Thin Edge device ID.

 * `az/messages/devicebound/#` - Use this topic to subscribe for the messages that were sent from the cloud to the device.
 Any message published by Azure on one of the subtopics of `devices/{device_id}/messages/devicebound/#` is republished here.


### Collectd topics

When the [device monitoring feature is enabled](/thin-edge/thin-edge-tutorials/#device-monitoring), monitoring metrics are emitted by `collectd` on a hierarchy of MQTT topics.

* `collectd/$HOSTNAME/#` - All the metrics collected on the device with hostname `$HOSTNAME`.
* `collectd/$HOSTNAME/$PLUGIN/#` - All the metrics collected by a given collectd plugin, named `$PLUGIN`.
* `collectd/$HOSTNAME/$PLUGIN/$METRIC` - The topic for a given metric, named `$METRIC`. All the measurements are published as a pair of a Unix timestamp in milli-seconds and a numeric value in the format `$TIMESTAMP:$VALUE`. For example: `1623155717:98.6`.

The `collectd-mapper` daemon process ingests these measurements and emits translated messages to the `tedge/measurements` topic.
This process groups the atomic measurements that have been received in the same time-window (currently 200 ms) and produces a single Thin Edge JSON for the whole group of measurements.

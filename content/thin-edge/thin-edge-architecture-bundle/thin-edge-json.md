---
weight: 30
title: Thin Edge JSON format
layout: redirect
---

Thin Edge JSON is a lightweight format used in thin-edge.io to represent measurements data. This format can be used to represent single-valued measurements, multi-valued measurements or a combination of both along with some auxiliary data like the timestamp at which the single measurement or multiple measurements were generated.

### Single-valued measurements

Simple single-valued measurements like temperature or pressure measurement with a single value can be expressed as follows:

```json
{
    "temperature": 25
}
```

The key represents the measurement type while the value represents the measurement value. The keys can only have alphanumeric characters and the "_" (underscore) character. However, the key cannot start with an underscore. Values can only be numeric, therefore string, boolean or other JSON object values are not allowed.

### Multi-valued measurements

A multi-valued measurement is a measurement that is comprised of multiple values. Below you find the representation of a `three_phase_current'measurement` that consists of `L1`, `L2` and `L3` values, each representing the current on each phase, see example below:

```json
{
    "three_phase_current": {
      "L1": 9.5,
      "L2": 10.3,
      "L3": 8.8
    }
}
```

The key is the top-level measurement type and value is a JSON object having further key-value pairs which represent each aspect of the multi-valued measurement. Only one level of nesting is allowed, therefore the values of the measurement keys at the inner level can only be numeric values.

For example, a multi-level measurement as follows is NOT valid:

```json
{
    "three_phase_current": {
        "phase1": {
            "L1": 9.5
        },
        "phase2": {
            "L2": 10.3
        },
        "phase3": {
            "L3": 8.8
        }
    }
}
```

This example is not valid as the values at the second level, `phase1`, `phase2`, and `phase3`, are not numeric values.

### Grouping measurements

Multiple single-valued and multi-valued measurements can be grouped into a single Thin Edge JSON message, see example below.

```json
{
    "temperature": 25,
    "three_phase_current": {
        "L1": 9.5,
        "L2": 10.3,
        "L3": 8.8
    },
    "pressure": 98
}
```

The grouping of measurements allows you to represent measurements collected at the same instant of time.

### Auxiliary measurement data

When thin-edge.io receives a measurement, it adds a generated timestamp to the measurement before any further processing. If you do not want to rely on this timestamp, an explicit timestamp can be provided in the measurement message itself by adding the time value as a string in ISO 8601 format using `time` as the key name. See the example below:

```json
{
    "time": "2020-10-15T05:30:47+00:00",
    "temperature": 25,
    "location": {
        "latitude": 32.54,
        "longitude": -117.67,
        "altitude": 98.6
    },
    "pressure": 98
}
```

The `time` key is a reserved keyword and hence cannot be used as a measurement key. The `time` field must be defined at the root level of the measurement JSON. It is not allowed at any other level, for example inside the object value of a multi-valued measurement. Non-numeric values like the ISO 8601 timestamp string are solely allowed for these reserved keys and not for regular measurements.

Below you find the complete list of reserved keys that serve a special role inside the thin-edge.io framework and hence must not be used as measurement keys:

| Key | Description |
| --- | --- |
| time | Timestamp in ISO 8601 string format |
| type | Internal to thin-edge.io |

### Sending measurements to thin-edge.io

The thin-edge.io framework exposes some MQTT endpoints that can be used by local processes to exchange and to forward data to the cloud. It acts as an MQTT broker against which you can write your application logic. Other Thin Edge processes can use this broker as an inter-process communication mechanism by publishing and subscribing to various MQTT topics. Publish the respective data to a standard topic to forward data to the connected cloud provider.

Thin-edge.io reserves all topics with the prefix `tedge/` for this purpose. To send measurements to thin-edge.io publish the measurements represented in Thin Edge JSON format to the `tedge/measurements` topic. Other processes running on the Thin Edge device can subscribe to this topic to process these measurements.

If the messages published to this `tedge/measurements` topic is not a well-formed Thin Edge JSON, thin-edge.io does not process this message. It publishes an appropriate error message including the reason why the validation failed to a dedicated `tedge/errors` topic. The messages published to this topic will be highly verbose error messages and can be used for any debugging during development. Do not rely on the structure of these error messages to automate any actions as they are purely textual data and bound to change from time-to-time.

More topics will be added under the `tedge/` topic in future to support more data types like events, alarms etc. We recommend you to avoid any sub-topics under `tedge/` for any other data exchange between processes.

Below you find the complete list of topics reserved by thin-edge.io for its internal working:

| Topic | Description |
| --- | --- |
| `tedge/` | Reserved root topic of thin-edge.io |
| `tedge/measurements` | Topic to publish measurements to thin-edge.io |
| `tedge/errors` | Topic to subscribe to receive any error messages emitted by thin-edge.io while processing measurements|

### Sending measurements to the cloud

The thin-edge.io framework allows you to forward all the measurements generated and published to the `tedge/measurements` MQTT topic in the Thin Edge device to any connected IoT cloud provider using a mapper component designed for that particular cloud.

The mapper is used to subscribe to the `tedge/measurements` topic in order to receive all incoming measurements represented in Thin Edge JSON format and to format these measurements to a format understood by the connected cloud. Refer to [Thin Edge Mapper](#mapper) for more details on the mapper component.

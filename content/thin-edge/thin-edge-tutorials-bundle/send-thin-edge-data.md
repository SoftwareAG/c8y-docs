---
weight: 30
title: Send Thin Edge JSON data
layout: redirect
opensource: true
---

Once your Thin Edge device is configured and connected to an IoT cloud provider, you can start sending measurements.
Refer to [Connect your device to {{< product-c8y-iot >}}](#connect-c8y) or tutorials for other cloud providers
to learn how to connect your Thin Edge device to an IoT cloud provider.

This section gives an overview on how different kinds of measurements are represented in Thin Edge JSON format and
how they can be sent to the connected cloud provider.
For a more detailed specification of this data format, refer to [Architecture > Thin Edge JSON format](/thin-edge/thin-edge-architecture/#thin-edge-json).

### Sending measurements

A simple single-valued measurement like a temperature measurement, is represented in Thin Edge JSON as follows:

```json
{ "temperature": 25 }
```

The key-value pair represents the measurement type and the numeric value of the measurement.

This measurement can be sent from the Thin Edge device to the cloud by publishing this message to the `tedge/measurements` MQTT topic.
Processes running on the Thin Edge device can publish messages to the local MQTT broker using any MQTT client or library.
In this tutorial, we'll be using the `tedge mqtt pub` command line utility for demonstration purposes.

The temperature measurement described above can be sent using the `tedge mqtt pub` command as follows:

```shell
$ tedge mqtt pub tedge/measurements '{ "temperature": 25 }'
```

The first argument to the `tedge mqtt pub` command is the topic to which the measurements must be published.
The second argument is the Thin Edge JSON representation of the measurement itself.

When connected to a cloud provider, a message mapper component for that cloud provider will be running as a daemon,
listening to any measurements published to `tedge/measurements`.
The mapper, on receipt of these Thin Edge JSON measurements, will map those measurements to their equivalent
cloud provider native representation and send it to that cloud.

For example, when the device is connected to {{< product-c8y-iot >}}, the {{< product-c8y-iot >}} mapper component will be performing these actions.
To check if these measurements have reached {{< product-c8y-iot >}}, log in to your {{< product-c8y-iot >}} account and navigate to
**Device Management** > **Devices** > **All devices** > &#60;your device id&#62; > **Measurements**
and check if your temperature measurement shows up in the dashboard.

### Complex measurements

You can represent measurements that are far more complex than the single-valued ones described above using the Thin Edge JSON format.

A multi-valued measurement like `three_phase_current` that consists of `L1`, `L2` and `L3` values,
representing the current on each phase, can be represented as follows:

```json
{
  "three_phase_current": {
    "L1": 9.5,
    "L2": 10.3,
    "L3": 8.8
  }
}
```

Here is another complex message consisting of single-valued measurements: `temperature` and `pressure`
along with a multi-valued `coordinate` measurement, all sharing a single timestamp captured as `time`.

```json
{
  "time": "2020-10-15T05:30:47+00:00",
  "temperature": 25,
  "current": {
    "L1": 9.5,
    "L2": 10.3,
    "L3": 8.8
  },
  "pressure": 98
}
```

The `time` field is not a regular measurement like `temperature` or `pressure` but a special reserved field.
Refer to the [Architecture > Thin Edge JSON format](/thin-edge/thin-edge-architecture/#thin-edge-json) for more details on the kinds of telemetry
data that can be represented in Thin Edge JSON format and the reserved fields like `time` used in the above example.

### Error detection

If the data published to the `tedge/measurements` topic are not valid Thin Edge JSON measurements, those won't be
sent to the cloud but instead you'll get a feedback on the `tedge/errors` topic, if you subscribe to it.
The error messages published to this topic will be highly verbose and may change in the future.
So, use it only for debugging purposes during the development phase and it should **not** be used for any automation.

You can use the `tedge mqtt sub` command to subscribe to the error topic as follows:

```shell
$ tedge mqtt sub tedge/errors
```

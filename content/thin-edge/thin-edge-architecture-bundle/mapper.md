---
weight: 40
title: Thin Edge mapper
layout: redirect
opensource: true
---

The tedge-mapper is a key concept to support multiple cloud providers. The purpose is to translate messages written using the cloud-agnostic [Thin Edge JSON format](#thin-edge-json), into cloud-specific messages.

The tedge-mapper is composed of multiple cloud-specific mappers, such as {{< product-c8y-iot >}} mapper and Azure mapper. Each mapper is responsible for its dedicated cloud. These specific mappers are launched by the respective `tedge connect` command. For instance, `tedge connect c8y` establishes a bridge to {{< product-c8y-iot >}} and launches a {{< product-c8y-iot >}} mapper that translates the messages in the background.

A mapper subscribes to the reserved MQTT topic `tedge/measurements` with the QoS level 1 at least once. The messages that arrive in the mapper must be formed in the [Thin Edge JSON format](#thin-edge-json). The mapper verifies if the arrived messages are correctly formatted. If the verification fails, the mapper publishes a corresponding error message on the topic `tedge/errors` with the QoS level 1 at least once.

When the mapper receives a correctly formatted message, it translates the message into a cloud-specific format.

### Platform mapper

The {{< product-c8y-iot >}} mapper translates [Thin Edge JSON](#thin-edge-json) into {{< product-c8y-iot >}}'s [JSON via MQTT](/reference/smartrest-two/#json-via-mqtt).
The translated messages are published on the topic `c8y/measurement/measurements/create` from where they are forwarded to {{< product-c8y-iot >}}. This mapper is launched by the `tedge connect c8y` command, and stopped by the `tedge disconnect c8y` command.

Example in Thin-Edge JSON:

```json
{
	"temperature": 23
}
```

Translated into JSON via MQTT by the {{< product-c8y-iot >}} mapper:

```json
{
	"type": "ThinEdgeMeasurement",
	"time": "2021-04-22T17:05:26.958340390+00:00",
	"temperature": {
		"temperature": {
			"value": 23
		}
	}
}
```

The {{< product-c8y-iot >}} mapper added the three things which are undefined before the translation:

1. `type`
2. `time`
3. Another hierarchy level. This is required by the {{< product-c8y-iot >}} data model.
The string `temperature` is used as fragment and series.

(1) The `type` is a mandatory field in the {{< product-c8y-iot >}} JSON via MQTT manner. Therefore, the {{< product-c8y-iot >}} mapper always adds `ThinEdgeMeasurement` as a type. This value is not configurable by users.

(2) The `time` is added by the mapper only when it is not specified in a received Thin Edge JSON message. In this case, the mapper uses the device's local time zone. If you want another time zone, specify the time filed in Thin Edge JSON.

(3) The mapper uses a measurement name, for example "temperature", as both a fragment type and a fragment series in [{{< product-c8y-iot >}} measurements](https://www.cumulocity.com/api/#tag/Measurements).

After the mapper publishes a message on the topic `c8y/measurement/measurements/create`, the message is transferred to the topic `measurement/measurements/create` by [the MQTT bridge](/thin-edge/thin-edge-developer-tools/#mqtt-topics).

### Azure IoT Hub mapper

The Azure IoT Hub mapper takes messages formatted in the [Thin Edge JSON](/thin-edge/thin-edge-architecture/#thin-edge-json) as input. It validates if the incoming message is correctly formatted in Thin Edge JSON and outputs the message. The validated messages are published on the topic `az/messages/events/` from where they are forwarded to Azure IoT Hub. This mapper is launched by the `tedge connect az` command, and stopped by the `tedge disconnect az` command.

The Azure IoT Hub mapper processes a message in the following way:

1. Validates if it is a correct Thin Edge JSON message or not.
2. Validates if the incoming message size is below 255 KB.
The size of all device-to-cloud messages must be up to 256 KB, see the Azure IoT Hub Manager at [https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-d2c-guidance](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-d2c-guidance) for more information.
The mapper keeps 1 KB as a buffer for the strings added by Azure.
3. Adds a current timestamp if a timestamp is not included in an incoming message (default). To stop this behavior, refer to the following instruction:

If the input is the following,

```json
{
	"temperature": 23
}
```

the output of the mapper is

```json
{
	"temperature": 23,
	"time": "2021-06-01T17:24:48.709803664+02:00"
}
```

#### Configure whether adding a timestamp or not

If you do not want to add a timestamp in the output of Azure IoT Hub mapper, you can change the behavior by running the following command:

```shell
sudo tedge config set az.mapper.timestamp false
```

After changing the configuration, you need to restart the mapper service by

```shell
sudo systemctl restart tedge-mapper-az.service
```

### Error cases

When an error occurs in a mapper process, the mapper publishes a corresponding error message on the topic `tedge/errors` with the QoS level 1 at least once.

Below you find an example for publishing invalid Thin Edge JSON messages on `tedge/measurements`:

```shell
$ tedge mqtt pub tedge/measurements '{"temperature": 23,"pressure": 220'
$ tedge mqtt pub tedge/measurements '{"temperature": 23,"time": 220}'
```

You receive error messages from the mapper on the topic `tedge/errors`:

```shell
$ tedge mqtt sub tedge/errors
[tedge/errors] Invalid JSON: Unexpected end of JSON: {"temperature":23,"pressure":220
[tedge/errors] Not a timestamp: the time value must be an ISO8601 timestamp string in the YYYY-MM-DDThh:mm:ss.sss.±hh:mm format, not a number.
```

### Topics used by tedge-mapper

- Incoming topics
    - `tedge/measurements`

- Outgoing topics
    - `tedge/errors` (for errors)
    - `c8y/measurement/measurements/create` (for {{< product-c8y-iot >}})
    - `az/messages/events/` (for Azure IoT Hub)

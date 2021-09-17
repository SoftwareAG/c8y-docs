---
weight: 40
title: Use the tedge mqtt module
layout: redirect
---

The thin-edge.io CLI provides a convenient way to debug and aid the development process.

### Publish

The [tedge mqtt pub](/thin-edge/thin-edge-developer-tools/#pub) command can be used to publish MQTT messages on a topic to the local mosquitto server.

Example:

```shell
tedge mqtt pub 'tedge/measurements' '{ "temperature": 21.3 }'
```

`tedge mqtt pub` supports the setting of QoS for MQTT messages:

```shell
tedge mqtt pub 'tedge/measurements' '{ "temperature": 21.3 }' --qos 2
```

### Subscribe

The [tedge mqtt sub](/thin-edge/thin-edge-developer-tools/#sub) command can be used to ease the debugging of MQTT communication on the local bridge.
You can subscribe to the topic of your choice:

```shell
tedge mqtt sub tedge/errors
```

Or you can subscribe to any topic on the server using the wildcard (`#`) topic:

```shell
tedge mqtt sub '#'
```

Now use `tedge mqtt pub 'tedge/measurements' '{ "temperature": 21.3 }'` to publish a message on the `tedge/measurements` topic with payload `{ "temperature": 21.3 }`.

All messages from the sub-command are printed to `stdout` and can be captured to a file if needed:

```shell
tedge mqtt sub '#' > filename.mqtt
```

The wildcard (`#`) topic is used by the [MQTT protocol](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901242) as a wildcard and will listen on all topics.

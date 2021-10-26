---
weight: 70
title: SmartREST 1.0
layout: redirect
---

<!--
TODO:
add note that we will continue to support and maintain this feature, but we are not actively developing it anymore
add a note that new device projects should use SR2 where possible
May incorporate SR1 specific segments from existing "Using SmartREST" section (from the Microservice SDK guide) 
-->

This section describes how you can use your existing SmartREST 1.0 templates with MQTT.

Note that SmartREST 1.0 was designed for HTTP request/response and does not support the ID-less communication with MQTT. It only uses the MQTT connection to send exactly the same request as you would send using HTTP. Therefore, it comes with some limitations as MQTT is not request/response.

The support for SmartREST 1.0 was added to ease transition if you have an existing implementation using it.

>**Info**: If you start a new device integration, we highly recommend to use SmartREST 2.0.

For general information on SmartREST 1.0, refer to Using the REST interface > [Using SmartREST](/microservice-sdk/rest#smartrest) in the *Microservice SDK guide*.

### MQTT ClientId

Although you need to send the IDs in the body of each message with SmartREST 1.0, it is still important to connect with the correct MQTT ClientId.

The MQTT ClientId needs to match the externalId with type **c8y_Serial** of your device. It is used to assign the correct operations and responses.

### Sending SmartREST 1.0

To send data to the server you can publish the same content as you would POST to the SmartREST endpoint <kbd>/s</kbd>.

The X-ID header is part of the topic the client needs to publish on.

```http
s/ul/<X-ID>
```
An X-ID acts as a protocol identifier and identifies the template collection.
An X-ID should be immutable: it always identifies exactly the same template collection.
If the template collection changes, the X-ID must also change.
An X-ID should also be globally unique: select an X-ID that is not used by anyone else.
To make sure, we recommend you to use reverse domain names, e.g.:

    com.acme.gw801-v1
    com.acme.gw801-v2

We also recommend you to add the protocol version as a postfix in the X-ID.

#### Processing mode

Since the [{{< product-c8y-iot >}} SmartREST protocol](/reference/smartrest) supports TRANSIENT processing mode for avoiding storage of sent data in the database, publishing on MQTT <kbd>t/</kbd> topic instead of <kbd>s/</kbd> topic will only pass the data to real-time processing.

```http
t/ul/<X-ID>
```

The [{{< product-c8y-iot >}} SmartREST protocol](/reference/smartrest) also supports QUIESCENT processing mode for avoiding real-time notifications by publishing on MQTT <kbd>q/</kbd> topic instead of <kbd>s/</kbd> topic. Currently, the QUIESCENT processing mode is applicable for measurements and events only.

```http
q/ul/<X-ID>
```

The [{{< product-c8y-iot >}} SmartREST protocol](/reference/smartrest) also supports CEP processing mode to ensure that data is only sent to the real-time event processing engine with real-time notifications, disabled by publishing on MQTT <kbd>c/</kbd> topic instead of <kbd>s/</kbd> topic. Currently, the CEP processing mode is applicable for measurements and events only.

```http
c/ul/<X-ID>
```

### Receiving SmartREST 1.0

If a template triggers a response template, the returning message will be published by the server on the following topic.

```http
s/dl/<X-ID>
```

This topic can be subscribed by the client.

### Receiving operations

SmartREST 1.0 via HTTP offers the <kbd>/notification/operations</kbd> endpoint to listen to realtime operations. You can receive the same content on the following MQTT topic.

```http
s/ol/<X-ID>
```

### Limitations

MQTT currently does not support request/response. Therefore, if you send a request on the publish topic and receive a response on the subscribe topic, the client cannot securely match that they belong together.

You can counter this limitation by designing the templates in a way that you never need to know what request triggered the response, and the client automatically knows it by the **messageId**.

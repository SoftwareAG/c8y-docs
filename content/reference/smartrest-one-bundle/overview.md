---
weight: 5
title: Overview
layout: redirect
---

<div style="padding: 24px ; border: 2px solid #1776BF; border-radius: 4px; margin-bottom: 24px; background-color: #f6fafe ">

  <h3 style="color: #1776BF"><strong>IMPORTANT</strong></h3>

  <p class="lead" style="font-size:22px">SmartREST 1.0 has been superseded by SmartREST 2.0.

  <p style="font-size:16px">SmartREST 1.0 will be maintained by Cumulocity but no longer actively developed. We highly recommend you to use <a href="../smartrest">SmartREST 2.0</a> for new device integrations.</p>

</div>

This section describes how you can use your existing SmartREST 1.0 templates with MQTT.

Note that SmartREST 1.0 was designed for HTTP request/response and does not support the ID-less communication with MQTT. It only uses the MQTT connection to send exactly the same request as you would send using HTTP. Therefore, it comes with some limitations as MQTT is not request/response.

The support for SmartREST 1.0 was added to ease transition if you have an existing implementation using it.

For general information on SmartREST 1.0, refer to [Using the REST interface](/microservice-sdk/rest#smartrest) in the *Microservice SDK guide*.

### MQTT ClientId

Although you need to send the IDs in the body of each message with SmartREST 1.0, it is still important to connect with the correct MQTT ClientId.

The MQTT ClientId needs to match the externalId with type `c8y_Serial` of your device. It is used to assign the correct operations and responses.

### Sending and receiving SmartREST 1.0

In general, the following holds for SmartREST requests and responses via MQTT:

* All request rows will be sent as single MQTT messages. A single request message always yields a single response message instead of being split up to several response messages.
* All SmartREST response templates will be applied to the JSON response of a single request.
* Every matching response template will yield one row in the response.
* Response lines are separated by `\n`.

#### Sending SmartREST 1.0

To send data to the server you can publish the same content as you would POST to the SmartREST endpoint <kbd>/s</kbd>.

The X-ID header is part of the topic the client needs to publish on.

```http
s/ul/<X-ID>
```

An X-ID acts as a protocol identifier and identifies the template collection.
An X-ID should be immutable: it always identifies exactly the same template collection.
If the template collection changes, the X-ID must also change.
An X-ID should also be globally unique: select an X-ID that is not used by anyone else.
To make sure, we recommend you to use reverse domain names, for example:

    com.acme.gw801-v1
    com.acme.gw801-v2

We also recommend you to add the protocol version as a postfix in the X-ID.

##### Processing mode

Since the [{{< product-c8y-iot >}} SmartREST protocol](/reference/smartrest-one) supports TRANSIENT processing mode for avoiding storage of sent data in the database, publishing on MQTT <kbd>t/</kbd> topic instead of <kbd>s/</kbd> topic will only pass the data to real-time processing.

```http
t/ul/<X-ID>
```

The [{{< product-c8y-iot >}} SmartREST protocol](/reference/smartrest-one) also supports QUIESCENT processing mode for avoiding real-time notifications by publishing on MQTT <kbd>q/</kbd> topic instead of <kbd>s/</kbd> topic. Currently, the QUIESCENT processing mode is applicable for measurements and events only.

```http
q/ul/<X-ID>
```

The [{{< product-c8y-iot >}} SmartREST protocol](/reference/smartrest-one) also supports CEP processing mode to ensure that data is only sent to the real-time event processing engine with real-time notifications, disabled by publishing on MQTT <kbd>c/</kbd> topic instead of <kbd>s/</kbd> topic. Currently, the CEP processing mode is applicable for measurements and events only.

```http
c/ul/<X-ID>
```

#### Receiving SmartREST 1.0

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
{{< c8y-admon-info >}}
To get notifications running, the platform device must have an external ID set which matches the MQTT client ID, otherwise it will not receive notifications.
{{< /c8y-admon-info >}}


### Limitations

MQTT currently does not support request/response. Therefore, if you send a request on the publish topic and receive a response on the subscribe topic, the client cannot securely match that they belong together.

You can counter this limitation by designing the templates in a way that you never need to know what request triggered the response, and the client automatically knows it by the **messageId**.

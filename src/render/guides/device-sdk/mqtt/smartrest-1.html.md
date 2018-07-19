---
order: 95
title: SmartREST 1.0
layout: redirect
---

This section describes how you can use your existing SmartREST 1.0 templates with MQTT.

Note, that SmartREST 1.0 was designed for HTTP request/response and also does not support the ID-less communication with MQTT. It only uses the MQTT connection to send exactly the same request as you would send using HTTP and therefore comes with some limitations as MQTT is not request/response.

The support for SmartREST 1.0 was added to ease transition if you have an existing implementation using it.

If you start a new device integration we highly recommend to use SmartREST 2.0.

For general information on SmartREST 1.0, refer to the [SmartREST Guide](/guides/rest/smartrest).

### MQTT ClientId

Although you need to send the IDs in the body of each message with SmartREST 1.0, it is still important to connect with the correct MQTT ClientId.

The MQTT ClientId needs to match the externalId with type "c8y_Serial" of your device. It is used to assign the correct operations and responses.

### Sending SmartREST 1.0

To send data to the server you can publish the same content as you would POST to the SmartREST endpoint /s.

The X-Id header is part of the topic the client needs to publish on.

Topic:
```
s/ul/<X-ID>;
```

#### Processing mode

Since [Cumulocity SmartREST protocol](/guides/reference/smartrest) supports *TRANSIENT* processing mode for avoiding storage of sent data in the database, publishing on MQTT t/ topic instead of s/ topic will only pass the data to real-time processing.

Topic:
```
t/ul/<X-ID>;
``` 

[Cumulocity SmartREST protocol](/guides/reference/smartrest) also supports *QUIESCENT* processing mode for avoiding real-time notifications by publishing on MQTT q/ topic instead of s/ topic. Currently, the QUIESCENT processing mode is applicable for measurements and events only.

Topic:
```
q/ul/<X-ID>;
```

### Receiving SmartREST 1.0

If a template triggers a response template the returning message will be published by the server on the following topic.

Topic:
```
s/dl/<X-ID>;
```

This topic can be subscribed by the client.

### Receiving operations

SmartREST 1.0 via HTTP offers the /devicecontrol/notifications endpoint to listen to realtime operations. You can receive the same content on the following MQTT topic.

Topic:
```
s/ol/<X-ID>;
```

### Limitations

MQTT currently does not support request/response. Therefore if you send a request on the publish topic and receive a response on the subscribe topic the client cannot securely match that they belong together.

You can counter this limitation by designing the templates in a way that you never need to know what request triggered the response and the client automatically knows it by the messageId.
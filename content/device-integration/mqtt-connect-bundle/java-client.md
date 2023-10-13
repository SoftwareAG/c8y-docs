---
weight: 30
layout: redirect
title: Java Client
---

The MQTT Connect Java Client library provides the classes necessary to interact with MQTT Connect.
The following operations are supported by the client:
* Publishing messages to the MQTT Connect via WebSocket protocol.
* Subscribing to messages from the MQTT Connect via WebSocket protocol

#### Repositories and dependencies {#repositories-and-dependencies}

Follow the [Microservice SDK](/microservice-sdk/java/#add-repositories-and-dependencies) documentation for guidance on how to configure Maven repositories.
To include MQTT Connect Java Client into your project, add the following dependency inside the `<dependencies>` node:
```xml
<dependency>
    <groupId>com.cumulocity.client.mqtt</groupId>
    <artifactId>mqtt-connect-websocket</artifactId>
    <version>${c8y.version}</version>
</dependency>
```

#### Example {#example}
Example of publishing messages to the MQTT Connect via WebSocket:
```java
// Message to be sent
final String payload = "Hello World";

// Construct a new MqttMessage and set the payload
final MqttMessage message = new MqttMessage();
message.setPayload(payload.getBytes());

// Build MqttConfig with topic to which the message is to be sent
final MqttConfig config = MqttConfig.webSocket().topic(topic).build();

// Create an instance of MqttClient by specifying the server URI to connect to along with TokenApi
final MqttClient client = MqttClient.webSocket()
        .url(webSocketBaseUrl)
        .tokenApi(tokenApi)
        .build();

// Build MqttPublisher and publish MqttMessage. Close the resource either by using a [try-with-resources block](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html) as below or by calling publisher.close() explicitly
try (final MqttPublisher publisher = client.buildPublisher(config)) {
    publisher.publish(message);
} catch (Exception e) {
    log.error("Could not sent message to {}", topic, e);
}
```

Example of subscribing to messages from the MQTT Connect via WebSocket:
```java
// Build MqttConfig with topic and subscriber name
final MqttConfig config = MqttConfig.webSocket().topic(topic).subscriber(subscriberName).build();

// Create an instance of MqttClient by specifying the server URI to connect to along with TokenApi
final MqttClient client = MqttClient.webSocket()
        .url(webSocketBaseUrl)
        .tokenApi(tokenApi)
        .build();

// Build MqttSubscriber
final MqttSubscriber subscriber = client.buildSubscriber(config);

// Subscribe by passing implementation of MqttMessageListener to handle events from the websocket server.
subscriber.subscribe(new MqttMessageListener() {
    @Override
    public void onMessage(MqttMessage message) {
        log.info("Message Received: {}", new String(message.getPayload()));
    }

    @Override
    public void onError(Throwable t) {
        log.error("WebSocket Error", t);
    }
});

// Close the resource after usage
subscriber.close();
```

---
weight: 80
title: MQTT connection
layout: redirect
---

### JWT token retrieval {#jwt-token-retrieval}

A device which is authenticated by certificates and connected to the {{< product-c8y-iot >}} platform can receive a token which can later be used to authenticate HTTP requests.

* First the device subscribes to the topic <kbd>s/dat</kbd>.
* Then the device publishes an empty message on the topic <kbd>s/uat</kbd>.
* After a while a token will be published on the subscribed <kbd>s/dat</kbd> topic in the format:

```plain
71,<<Base64 encoded JWT token>>
```

A device token lifetime can be configured using tenant options with a category of `oauth.internal` and a key of `device-token.lifespan.seconds`.
The default value is 1 hour.
The minimum allowed value is 5 minutes.
Refer to the [Tenant API](https://{{< domain-c8y >}}/api/core/#tag/Tenant-API) in the {{< openapi >}} for more details.

A device can fetch a new device token before the old one expires, if it request a JWT token after half of the token's lifetime has passed.

{{< c8y-admon-caution >}}
A device can only subscribe to a topic like <kbd>s/dat</kbd> once certificate based mutual authentication is successful. The MQTT broker will not make any information available on the device's subscribed topics until the device publishes a message to <kbd>s/uat</kbd> or <kbd>s/us</kbd>.
{{< /c8y-admon-caution >}}

### MQTT example client {#mqtt-example-client}

The code of the {{< product-c8y-iot >}} MQTT example client implemented in Java, which connects to the platform using x.509 certificates, is available here: https://github.com/SoftwareAG/cumulocity-examples/tree/develop/mqtt-client.
This example client uses the implementation of Eclipse Paho, which is described in detail on their website: https://www.eclipse.org/paho/index.php?page=documentation.php.

Here is an example that shows how to add the needed dependency in Maven to use Eclipse Paho client:

    <dependency>
        <groupId>org.eclipse.paho</groupId>
        <artifactId>org.eclipse.paho.client.mqttv3</artifactId>
        <version>${paho.version}</version>
    </dependency>

Then the instance of the MQTT client can be created with a single line:


    MqttClient mqttClient = new MqttClient(BROKER_URL, "d:" + CLIENT_ID, new MemoryPersistence());

The BROKER_URL should contain protocol, url and port, which the client will connect to, like this: `ssl://<cumulocity url>:8883`.
The certificate's common name should not contain `:` characters, see [MQTT ClientId](#mqtt-clientid) for more information.
The CLIENT_ID value must match the value of the common name of the device certificate that will be used.
The "d:" prefix is used in {{< product-c8y-iot >}} for device connections and it should not be removed or changed.
Now the only thing that must be configured to establish the SSL connection is to fill paths in the code fragment:

    sslProperties.put(SSLSocketFactoryFactory.KEYSTORE, getClass().getClassLoader().getResource(KEYSTORE_NAME).getPath());
    sslProperties.put(SSLSocketFactoryFactory.KEYSTOREPWD, KEYSTORE_PASSWORD);
    sslProperties.put(SSLSocketFactoryFactory.KEYSTORETYPE, KEYSTORE_FORMAT);
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTORE, getClass().getClassLoader().getResource(TRUSTSTORE_NAME).getPath());
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTOREPWD, TRUSTSTORE_PASSWORD);
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTORETYPE, TRUSTSTORE_FORMAT);

* KEYSTORE_NAME is the path to your keystore, which contains the private key and the chain of certificates, which the device will use to authenticate itself.
* KEYSTORE_PASSWORD is the password created for keystore to use its private key.
* KEYSTORE_FORMAT should be "JKS" or "PKCS12" depending on the file format. The path is provided by KEYSTORE_NAME.
* TRUSTSTORE_NAME is the path to your truststore, which contains the certificate of the server.
* TRUSTSTORE_PASSWORD is the password to access the truststore.
* TRUSTSTORE_FORMAT should be "JKS" or "PKCS12" depending on the file format. The path is provided by TRUSTSTORE.

After filling in this data, the example client will use the provided data to connect to the specified platform using certificates.
The example also shows how to create the callback for the connection.
First thing is to create the class which implements the interface `MqttCallbackExtended`.
Then such a class can be created and an instance of it can be provided to the MQTT client: `mqttClient.setCallback(this);`.

In general, the MQTT Eclipse Paho Client uses the Java Secure Socket Extension, which is part of the Java Development Kit, to provide secure connections via SSL.
JSSE provides the Java implementation of the SSL and TLS protocol, which can be configured by developers using its classes.
The documentation of the Java Secure Socket Extension shows how the SSL connection is established and provides some examples of customizing the implementation.
The full document is available on the [official Oracle website](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html).

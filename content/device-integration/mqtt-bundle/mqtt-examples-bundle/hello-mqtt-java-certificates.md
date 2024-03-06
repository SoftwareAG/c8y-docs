---
weight: 45
title: Hello MQTT Java with certificates
layout: redirect
---

In this tutorial, you will learn how to use the Java MQTT client with {{< product-c8y-iot >}} using X.509 certificates for authentication.

### JWT token retrieval {#jwt-token-retrieval}

A device which is authenticated by certificates and connected to the {{< product-c8y-iot >}} platform can receive a token which can later be used to authenticate HTTP requests.

In the GitHub repository [cumulocity-examples](https://github.com/SoftwareAG/cumulocity-examples/tree/develop/mqtt-client), you can find a sample Java MQTT client using X.509 certificates and all necessary scripts used in this tutorial.

### Prerequisites {#prerequisites}

In order to follow this tutorial, check the following prerequisites:

*   You have correctly configured the Java client based on the [Hello MQTT Java](#hello-mqtt-java) tutorial.
*   You have a valid tenant, a user and a password in order to access {{< product-c8y-iot >}}.
*   You have a valid certificate. If you don't have it, follow the instructions in the next section to generate one.
*   Then the instance of the MQTT client can be created with a single line:


    MqttClient mqttClient = new MqttClient(BROKER_URL, "d:" + CLIENT_ID, new MemoryPersistence());

*   The BROKER_URL should contain protocol, url and port, which the client will connect to, like this: `ssl://<cumulocity url>:8883`.
*   The certificate's common name should not contain `:` characters, see [MQTT ClientId](#mqtt-clientid) for more information.
*   The CLIENT_ID value must match the value of the common name of the device certificate that will be used.
*   The "d:" prefix is used in {{< product-c8y-iot >}} for device connections and it should not be removed or changed.
*   Now the only thing that must be configured to establish the SSL connection is to fill paths in the code fragment:

#### To generate a valid certificate {#to-generate-a-valid-certificate}

If you don't have a valid certificate, you can generate one for testing purposes, following the instructions below.

1.  Download the scripts from the [cumulocity-examples](https://github.com/SoftwareAG/cumulocity-examples/tree/develop/mqtt-client/scripts) repository.
2.  Create a root self-signed certificate (execute the script *00createRootSelfSignedCertificate.sh*) and upload it to your tenant. You can do it via [the Device management application in the UI](/device-management-application/managing-device-data/#managing-trusted-certificates) or via [REST](https://{{< domain-c8y >}}/api/core/#tag/Tenant-API).
3.  Create and sign the certificate (execute the script *01createSignedCertificate.sh*).
4.  Move the certificates to keystore (execute the script *02moveCertificatesToKeystore.sh*).
5.  Finally, import the trusted certificate into keystore running the following command:

```shell
$ keytool -importcert -file c8y-mqtt-server.cer -keystore chain-with-private-key-iot-device-0001.jks -alias "Alias"
```

### Developing the "Hello, MQTT world!" client with certificates {#developing-the-hello-mqtt-world-client-with-certificates}

To develop a "Hello, world!" MQTT client for {{< product-c8y-iot >}} with certificates, you must

*  copy the certificate and upload it to the platform,
*  change the configuration in the MQTT client.

#### To copy and upload the certificate {#to-copy-and-upload-the-certificate}

Copy the certificate from the file *chain-iot-device-0001.pem* and upload it to the platform employing a POST request:

**Endpoint:**  <kbd>/tenant/tenants/{tenantId}/trusted-certificates</kbd> <br/>
**Authorization:** Basic <br/>
**Content-Type:** application/json <br/>
**Request body:**

```json
{
    "status" :  "ENABLED",
    "name" : "sampleName",
    "autoRegistrationEnabled" : "true",
    "certInPemFormat" : "<<certificate in pem format>>"
}
```

### To change the configuration {#to-change-the-configuration}

After filling in this data, the example client will use the provided data to connect to the specified platform using certificates.
The example also shows how to create the callback for the connection.
First thing is to create the class which implements the interface `MqttCallbackExtended`.
Then such a class can be created and an instance of it can be provided to the MQTT client: `mqttClient.setCallback(this);`.
To change the configuration in the MQTT client, copy the file *chain-with-private-key-iot-device-0001.jks* into the resource folder and set the configuration. Note that the script employed (Step 4.) uses the password `changeit`. If you changed the value in the script, also do it for `KEYSTORE_PASSWORD` and `TRUSTSTORE_PASSWORD` in the following example.

```java
// Configuration
private static final String KEYSTORE_NAME = "chain-with-private-key-iot-device-0001.jks";
private static final String KEYSTORE_PASSWORD = "changeit";
private static final String KEYSTORE_FORMAT = "jks";

private static final String TRUSTSTORE_NAME = "chain-with-private-key-iot-device-0001.jks";
private static final String TRUSTSTORE_PASSWORD = "changeit";
private static final String TRUSTSTORE_FORMAT = "jks";

private static final String CLIENT_ID = "iotdevice0001";
private static final String BROKER_URL = "<SSL URL of the platform>";

private MqttClient connect() throws MqttException {
    MqttClient mqttClient = new MqttClient(BROKER_URL, "d:" + CLIENT_ID, new MemoryPersistence());
    MqttConnectOptions options = new MqttConnectOptions();

    options.setCleanSession(true);

    Properties sslProperties = new Properties();
    sslProperties.put(SSLSocketFactoryFactory.KEYSTORE, getClass().getClassLoader().getResource(KEYSTORE_NAME).getPath());
    sslProperties.put(SSLSocketFactoryFactory.KEYSTOREPWD, KEYSTORE_PASSWORD);
    sslProperties.put(SSLSocketFactoryFactory.KEYSTORETYPE, KEYSTORE_FORMAT);
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTORE, getClass().getClassLoader().getResource(TRUSTSTORE_NAME).getPath());
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTOREPWD, TRUSTSTORE_PASSWORD);
    sslProperties.put(SSLSocketFactoryFactory.TRUSTSTORETYPE, TRUSTSTORE_FORMAT);
    sslProperties.put(SSLSocketFactoryFactory.CLIENTAUTH, true);

    options.setSSLProperties(sslProperties);
    mqttClient.setCallback(this);
    System.out.println("Connecting to the broker at " + BROKER_URL);
    mqttClient.connect(options);

    return mqttClient;
}
```  
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
The device can now publish and subscribe as a standard device. Note that before the first connect no other actions are required, for example, creating a user. The user is created during the [auto registration](/device-integration/mqtt/#device-certificates) process.

{{< c8y-admon-info >}}
You do not need to set a password, user or tenant for the MQTT client connecting using certificates. {{< product-c8y-iot >}} will recognize the tenant and the user by the provided certificate.
A device can only subscribe to a topic like <kbd>s/dat</kbd> once certificate based mutual authentication is successful. The MQTT broker will not make any information available on the device's subscribed topics until the device publishes a message to <kbd>s/uat</kbd> or <kbd>s/us</kbd>.
{{< /c8y-admon-info >}}

In general, the MQTT Eclipse Paho Client uses the Java Secure Socket Extension, which is part of the Java Development Kit, to provide secure connections via SSL.
JSSE provides the Java implementation of the SSL and TLS protocol, which can be configured by developers using its classes.
The documentation of the Java Secure Socket Extension shows how the SSL connection is established and provides some examples of customizing the implementation.
The full document is available on the [official Oracle website](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html).

---
weight: 40
title: Hello MQTT Java with Certificates
layout: redirect
---

In this tutorial, you will learn how to use the Java MQTT client with Cumulocity IoT using X509 certificates for authentication. 

You can find a sample Java MQTT client using x509 certificates in the [cumulocity-examples](https://bitbucket.org/m2m/cumulocity-examples/src/develop/mqtt-client)
### Prerequisites  

In order to follow this tutorial, check the following prerequisites:

* You have correctly configured java client based on [Hello MQTT Java](#hello-mqtt-java)
* You have a valid tenant, a user and a password in order to access Cumulocity IoT.
* You have a valid X509 certificate.

To enable the device to connect using certificates, the following are required:  

In the first step you have to upload root certificates to your tenant. You can do it via [device-management](#TODO) or via [rest](#TODO)  
Next change the configuration in MQTT client as presented below:

```java
  MqttClient mqttClient = new MqttClient(<<broker URL>>, "d:" + <<client Id>>, new MemoryPersistence());
            MqttConnectOptions options = new MqttConnectOptions();
            options.setCleanSession(true);
            options.setMqttVersion(3);
            Properties sslProperties = new Properties();
            sslProperties.put(SSLSocketFactoryFactory.KEYSTORE, <<keystore path>>);
            sslProperties.put(SSLSocketFactoryFactory.KEYSTOREPWD, <<keystore password>>);
            sslProperties.put(SSLSocketFactoryFactory.KEYSTORETYPE, <<keystore format>>);
            sslProperties.put(SSLSocketFactoryFactory.TRUSTSTORE, <<truststore path>>);
            sslProperties.put(SSLSocketFactoryFactory.TRUSTSTOREPWD, <<truststore password);
            sslProperties.put(SSLSocketFactoryFactory.TRUSTSTORETYPE, <<truststore format>>);
            sslProperties.put(SSLSocketFactoryFactory.CLIENTAUTH, true);
            options.setSSLProperties(sslProperties);
            mqttClient.setCallback(this);
            mqttClient.connect(options);
```
 Replace broker URL and client id as needed. Do not forget to complete also the keystore and truststore path, password and type.  
 
 Now the device can publish and subscribe as a standard device.
   
**Info:** Do not need to set a password, user or tenant for the MQTT client connecting using certificates. Cumulocity IoT will recognize tenant and user by the provided certificate.
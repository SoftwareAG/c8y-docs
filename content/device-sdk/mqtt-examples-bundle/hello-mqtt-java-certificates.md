---
weight: 40
title: Hello MQTT Java with certificates
layout: redirect
---

In this tutorial, you will learn how to use the Java MQTT client with Cumulocity IoT using X509 certificates for authentication. 

You can find a sample Java MQTT client using x509 certificates and all necessary scripts used in this tutorial in the Bitbucket repository [cumulocity-examples](https://bitbucket.org/m2m/cumulocity-examples/src/develop/mqtt-client).
### Prerequisites  

In order to follow this tutorial, check the following prerequisites:

* You have correctly configured the Java client based on [Hello MQTT Java](#hello-mqtt-java).
* You have a valid tenant, a user and a password in order to access Cumulocity IoT.

If you do not have a valid certificate, for testing purposes you can generate a certificate using the instructions below.   
The scripts are in the Bitbucket repository [cumulocity-examples](https://bitbucket.org/m2m/cumulocity-examples/src/develop/mqtt-client/scripts).  
1. Create a root self signed certificate:  
```shell
$ ./00createRootSelfSignedCertificate.sh
```  
2. Create and sign the certificate:  
```shell
$ ./01createSignedCertificate.sh
```  
3. Move the certificates to keystore:    
```shell
$ ./02moveCertificatesToKeystore.sh
```  
4. Import the trusted certificate into keystore:  
```shell
$ keytool -importcert -file c8y-mqtt-server.cer -keystore chain-with-private-key-iot-device-0001.jks -alias "Alias"
```  
In the first step you have to upload the root certificates to your tenant. You can do it via [device-management](/users-guide/device-management/#managing-trusted-certificates) or via [REST](/reference/tenants/#trusted-certificates-collection).  

**Example:**  
Copy the certificate from file: *chain-iot-device-0001.pem* and send it to the platform via REST.    
 
   POST /tenant/tenants/<<tenantId>>/trusted-certificates

    Host: ...

    Authorization: Basic ...

    Content-Type: application/json

    {
    	"status" :  "ENABLED",
    	"name" : "sampleName",
    	"autoRegistrationEnabled" : "true",
    	"certInPemFormat" : "<<certificate in pem format>>"
    }
    

Next, change the configuration in the MQTT client. Copy the file *chain-with-private-key-iot-device-0001.jks* into the resource folder and set the configuration as in the example below. 

```java
        //Configuration
        private static final String KEYSTORE_NAME = "chain-with-private-key-iot-device-0001.jks";
        private static final String KEYSTORE_PASSWORD = "changeit";
        private static final String KEYSTORE_FORMAT = "jks";
        private static final String TRUSTSTORE_NAME = "chain-with-private-key-iot-device-0001.jks";
        private static final String TRUSTSTORE_PASSWORD = "changeit";
        private static final String TRUSTSTORE_FORMAT = "jks";
        private static final String CLIENT_ID = "iotdevice0001";
        private static final String BROKER_URL = "<<SSL URL for platform>>";
        
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
            System.out.println("Connecting to broker " + BROKER_URL);
            mqttClient.connect(options);
            return mqttClient;
        }
```  
 Now the device can publish and subscribe as a standard device.  
 Note that before the first connect no other actions are required, such as creating a user.  
 The user will be created during the [auto registration](#TODO) process.  
>**Info:** You do not need to set a password, user or tenant for the MQTT client connecting using certificates. Cumulocity IoT will recognize the tenant and the user by the provided certificate.
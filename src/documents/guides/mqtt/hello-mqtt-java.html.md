---
order: 21
title: Hello MQTT Java
layout: default
---
## Overview

In this tutorial, you will learn how to use Java MQTT client with Cumulocity using pre-defined messages (called "static templates").

## Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, user and password in order to access Cumulocity.
* Verify that you have Maven 3 installed with Java 7:
  
  	mvn -v
  	Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-10T17:41:47+01:00)
  	Maven home: /home/schm/development/devtools/apache-maven-3.3.9
  	Java version: 1.7.0_80, vendor: Oracle Corporation
  	Java home: /usr/lib/jvm/java-7-oracle/jre
  	Default locale: pl_PL, platform encoding: UTF-8
  	OS name: "linux", version: "4.4.0-66-generic", arch: "amd64", family: "unix"
  
  Maven can be downloaded from http://maven.apache.org.

## Develop the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to

* Create a Maven project.
* Add a dependency to the MQTT Java client library to the Maven pom.xml (in this example we will use [Paho Java Client](https://eclipse.org/paho/clients/java/)).
* Create a Java application.
* Build and run the Java application.

### Create a Maven project

To create a plain Java project with Maven, run

    mvn archetype:generate -DgroupId=c8y.example -DartifactId=hello-mqtt-java -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

This will create a folder "hello-mqtt-java" in the current directory with a skeleton structure for your project.

### Add MQTT Java client library

Edit the "pom.xml" in the "hello-mqtt-java" folder. Add dependency to the MQTT Paho Java Client.

    <dependency>
        <groupId>org.eclipse.paho</groupId>
        <artifactId>org.eclipse.paho.client.mqttv3</artifactId>
        <version>1.1.0</version>
    </dependency>
    
### Create a Java application

Edit the "App.java" file in the folder "hello-mqtt-java/src/main/java/c8y/example" with the following content:

    package c8y.example;
    
    import org.eclipse.paho.client.mqttv3.*;
    import java.util.concurrent.*;

    public class App {

        public static void main(String[] args) throws Exception {
            final String clientId = "<<clientId>>";
            final String serverURI = "<<serverUrl>>";
    
            //configure MQTT connection
            final MqttConnectOptions options = new MqttConnectOptions();
            options.setUserName("<<tenant>>/<<username>>");
            options.setPassword("<<password>>".toCharArray());
            final MqttClient client = new MqttClient(serverURI, clientId, null);
            
            //connect to the Cumulocity
            client.connect(options);
    
            //create device
            client.publish("s/us", "100,My MQTT device,c8y_MQTTDevice".getBytes(), 2, false);
            
            //set hardware information
            client.publish("s/us", "110,S123456789,MQTT test model,Rev0.1".getBytes(), 2, false);
            
            //listen for operation
            client.subscribe("s/ds", new IMqttMessageListener() {
                public void messageArrived(final String topic, final MqttMessage message) throws Exception {
                    System.out.println("Received operation " + new String(message.getPayload()));
                }
            });
            
            Executors.newSingleThreadScheduledExecutor().scheduleWithFixedDelay(new Runnable() {
                public void run() {
                    try {
                        //send temperature measurement
                        client.publish("s/us", new MqttMessage("211,25".getBytes()));
                    } catch (MqttException e) {
                        e.printStackTrace();
                    }
                }
            }, 1, 3, TimeUnit.SECONDS);
        }
    }
    
Replace "&lt;&lt;clientId&gt;&gt;", "&lt;&lt;serverUrl&gt;&gt;", "&lt;&lt;tenant&gt;&gt;", "&lt;&lt;username&gt;&gt;", and "&lt;&lt;password&gt;&gt;" with your data.

Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL connections (e.g. ``tcp://mqtt.cumulocity.com:1883`` or ``ssl://mqtt.cumulocity.com:8883``), so as the "&lt;&lt;serverUrl&gt;&gt;" you can pick the one which fits for you.

What does the code in "main" do?

-   Configure MQTT connection
-   Connect with the Cumulocity via MQTT protocol
-   Create a new device with ``My MQTT device`` name and ``c8y_MQTTDevice`` type
-   Update device hardware information by putting ``S123456789`` serial, ``MQTT test model`` model and ``Rev0.1`` revision
-   Subscribe to the static operation templates for the device and print all received operations to the console
-   Create new thread which sends temperature measurement every 3 seconds

Note that subscription is established after device creation, otherwise if there is no device for a given ``clientId`` server will not accept it.

### Build and run

To build:

    cd hello-mqtt-java
    mvn clean install
    ...
    [INFO] 
    [INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ hello-mqtt-java ---
    [INFO] Building jar: /home/schm/Pulpit/hello-mqtt-java/target/hello-mqtt-java-1.0-SNAPSHOT.jar
    [INFO] 
    [INFO] --- maven-install-plugin:2.4:install (default-install) @ hello-mqtt-java ---
    [INFO] Installing /home/schm/Pulpit/hello-mqtt-java/target/hello-mqtt-java-1.0-SNAPSHOT.jar to /home/schm/.m2/repository/c8y/example/hello-mqtt-java/1.0-SNAPSHOT/hello-mqtt-java-1.0-SNAPSHOT.jar
    [INFO] Installing /home/schm/Pulpit/hello-mqtt-java/pom.xml to /home/schm/.m2/repository/c8y/example/hello-mqtt-java/1.0-SNAPSHOT/hello-mqtt-java-1.0-SNAPSHOT.pom
    [INFO] ------------------------------------------------------------------------
    [INFO] BUILD SUCCESS
    [INFO] ------------------------------------------------------------------------
    [INFO] Total time: 2.642 s
    [INFO] Finished at: 2017-03-14T09:16:25+01:00
    [INFO] Final Memory: 14M/301M
    [INFO] ------------------------------------------------------------------------
    
To run:

    mvn exec:java -Dexec.mainClass="c8y.example.App"
    ...
    [INFO]                                                                         
    [INFO] ------------------------------------------------------------------------
    [INFO] Building hello-mqtt-java 1.0-SNAPSHOT
    [INFO] ------------------------------------------------------------------------
    [INFO] 
    [INFO] --- exec-maven-plugin:1.6.0:java (default-cli) @ hello-mqtt-java ---
    Received operation 510,123456789

After starting application you should see new device in the Cumulocity application in the device list.
Additionally if there will be a new operation created for this device, (for example ``c8y_Restart``) information about it will be printed to the console.

## Improve the agent

Now that you have done your first step, check out the Section [Hello MQTT](/guides/mqtt/hello-mqtt) to learn more about Cumulocity MQTT and improve your application.
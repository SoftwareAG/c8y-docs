---
order: 21
title: Hello MQTT C
layout: default
---
## Overview

In this tutorial, you will learn how to use MQTT client in C with Cumulocity using pre-defined messages (called "static templates").

## Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, user and password in order to access Cumulocity.
* Verify that you have gcc compiler installed:
  
  	gcc --version
  	gcc (Ubuntu 5.4.0-6ubuntu1~16.04.4) 5.4.0 20160609
  	Copyright (C) 2015 Free Software Foundation, Inc.
  	This is free software; see the source for copying conditions.  There is NO
  	warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  
* Download, compile and install MQTT C Paho Client, you will find more details on the [Paho website](http://www.eclipse.org/paho/clients/c/)

## Develop the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to

* Create application.
* Build and run the application.

### Create application

Create source file, for example "hello_mqtt.c" with the following content:

    #include "stdlib.h"
    #include "string.h"
    #include "unistd.h"
    #include "MQTTClient.h"
    
    #define ADDRESS     "<<serverUrl>>"
    #define CLIENTID    "<<clientId>>"
    
    void publish(MQTTClient client, char* topic, char* payload) {
        MQTTClient_message pubmsg = MQTTClient_message_initializer;
        pubmsg.payload = payload;
        pubmsg.payloadlen = strlen(pubmsg.payload);
        pubmsg.qos = 2;
        pubmsg.retained = 0;
        MQTTClient_deliveryToken token;
        MQTTClient_publishMessage(client, topic, &pubmsg, &token);
        MQTTClient_waitForCompletion(client, token, 1000L);
        printf("Message '%s' with delivery token %d delivered\n", payload, token);
    }
    
    int on_message(void *context, char *topicName, int topicLen, MQTTClient_message *message) {
        char* payload = message->payload;
        printf("Received operation %s\n", payload);
        MQTTClient_freeMessage(&message);
        MQTTClient_free(topicName);
        return 1;
    }
    
    int main(int argc, char* argv[]) {
        MQTTClient client;
        MQTTClient_create(&client, ADDRESS, CLIENTID, MQTTCLIENT_PERSISTENCE_NONE, NULL);
        MQTTClient_connectOptions conn_opts = MQTTClient_connectOptions_initializer;
        conn_opts.username = "<<tenant>>/<<username>>";
        conn_opts.password = "<<password>>";
    
        MQTTClient_setCallbacks(client, NULL, NULL, on_message, NULL);
    
        int rc;
        if ((rc = MQTTClient_connect(client, &conn_opts)) != MQTTCLIENT_SUCCESS) {
            printf("Failed to connect, return code %d\n", rc);
            exit(-1);
        }
        //create device
        publish(client, "s/us", "100,C MQTT,c8y_MQTTDevice");
        //set hardware information
        publish(client, "s/us", "110,S123456789,MQTT test model,Rev0.1");
        //listen for operation
        MQTTClient_subscribe(client, "s/ds", 0);
    
        for (;;) {
            //send temperature measurement
            publish(client, "s/us", "211,25");
            sleep(3);
        }
        MQTTClient_disconnect(client, 1000);
        MQTTClient_destroy(&client);
        return rc;
    }
    
Replace "&lt;&lt;clientId&gt;&gt;", "&lt;&lt;serverUrl&gt;&gt;", "&lt;&lt;tenant&gt;&gt;", "&lt;&lt;username&gt;&gt;", "&lt;&lt;password&gt;&gt;" with your data.

Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL connections (e.g. ``tcp://mqtt.cumulocity.com:1883`` or ``ssl://mqtt.cumulocity.com:8883``), so as the "&lt;&lt;serverUrl&gt;&gt;" you can pick the one which fits for you.
When using SSL remember to configure ``MQTTClient_SSLOptions`` and set it in the ``MQTTClient_connectOptions``.

What does the code in "main" do?

-   Configure MQTT connection
-   Register ``on_message`` callback function which will print incoming messages
-   Connect with the Cumulocity via MQTT protocol
-   Create a new device with ``C MQTT`` name and ``c8y_MQTTDevice`` type
-   Update device hardware information by putting ``S123456789`` serial, ``MQTT test model`` model and ``Rev0.1`` revision
-   Subscribe to the static operation templates for the device - this will result in ``on_message`` method call every time new operation is created
-   Send temperature measurement every 3 seconds

What does the code in "publish" do?

-   Create new MQTT message and set payload
-   Publish message via MQTT protocol
-   Wait maximum 1 second for message delivered ACK from server

Note that subscription is established after device creation, otherwise if there is no device for a given ``clientId`` server will not accept it. 

### Build and run

To build:

    gcc hello_mqtt.c -o hello_mqtt -lpaho-mqtt3c
    
To run:

    ./hello_mqtt
    Message '100,C MQTT,c8y_MQTTDevice' with delivery token 1 delivered
    ...

After starting application you should see new device in the Cumulocity application in the device list.
Additionally if there will be a new operation created for this device, (for example ``c8y_Restart``) information about it will be printed to the console. 

## Improve the agent

Now that you have done your first step, check out the Section [Hello MQTT](/guides/mqtt/hello-mqtt) to learn more about Cumulocity MQTT and improve your application.
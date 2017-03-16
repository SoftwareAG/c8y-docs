---
order: 21
title: Hello MQTT JavaScript
layout: default
---
## Overview

In this tutorial, you will learn how to use JavaScript MQTT client with Cumulocity using pre-defined messages (called "static templates").

## Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, user and password in order to access Cumulocity.

## Develop the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to

* Create a JavaScript application.
* Run script.
    
### Create a JavaScript application

Create html file, for example "hello_mqtt_js.html" with the following content:

    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>
        <script type="text/javascript">
            client = new Paho.MQTT.Client("<<serverUrl>>", 8999, "", "<<clientId>>");
            client.onMessageArrived = function(message) {
                console.log("Received operation " + message.payloadString);
            }
    
            function publish(topic, message, onMessageDeliveredCallback) {
                message = new Paho.MQTT.Message(message);
                message.destinationName = topic;
                message.qos = 2;
                client.send(message);
            }
    
            function onConnect() {
                //create device
                publish("s/us", "100,JS MQTT,c8y_MQTTDevice");
                setTimeout(function() {
                    //set hardware information
                    publish("s/us", "110,S123456789,MQTT test model,Rev0.1");
                    //listen for operation
                    client.subscribe("s/ds");
                    //send temperature measurement
                    setInterval(function() {
                        publish("s/us", "211,25");
                    }, 3000);
                }, 3000);
            }
    
            function init() {
                client.connect({
                    userName: "<<tenant>>/<<username>>",
                    password: "<<password>>",
                    onSuccess: onConnect
                });
            }
        </script>
    </head>
    <body onload="init();"></body>
    </html>
    
Replace "&lt;&lt;clientId&gt;&gt;", "&lt;&lt;serverUrl&gt;&gt;", "&lt;&lt;tenant&gt;&gt;", "&lt;&lt;username&gt;&gt;", and "&lt;&lt;password&gt;&gt;" with your data.

Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL connections, so when configuring MQTT port you can pick the one which fits for you.

What does the code do?

-   Configure MQTT connection
-   Register ``on_onMessageArrived`` callback function which will print incoming messages
-   Connect with the Cumulocity via MQTT protocol after page is fully loaded
-   Create a new device with ``JS MQTT`` name and ``c8y_MQTTDevice`` type
-   Wait a little bit to be sure that the device was registered???
-   Update device hardware information by putting ``S123456789`` serial, ``MQTT test model`` model and ``Rev0.1`` revision
-   Subscribe to the static operation templates for the device and print all received operations to the console
-   Send temperature measurement every 3 seconds

### Run

Open "hello_mqtt_js.html" in the browser, after that you should see new device in the Cumulocity application in the device list.
Additionally if there will be a new operation created for this device, (for example ``c8y_Restart``) information about it will be printed to the console. 

## Improve the agent

Now that you have done your first step, check out the Section [Hello MQTT](/guides/mqtt/hello-mqtt) to learn more about Cumulocity MQTT and improve your application.
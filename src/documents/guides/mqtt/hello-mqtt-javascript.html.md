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
* Run the application.
    
### Create a JavaScript application

Create html file, for example "hello_mqtt_js.html" with the following content:

    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8"></meta>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>
        <script type="text/javascript">
            var undeliveredMessages = []
    
            var client = new Paho.MQTT.Client("<<serverUrl>>", 8999, "", "<<clientId>>");
            client.onMessageArrived = onMessageArrived;
            client.onMessageDelivered = onMessageDelivered;
    
            function onMessageArrived(message) {
                log('Received operation "' + message.payloadString + '"');
            }
    
            function onMessageDelivered(message) {
                log('Message "' + message.payloadString + '" delivered');
                var undeliveredMessage = undeliveredMessages.pop();
                if (undeliveredMessage.onMessageDeliveredCallback) {
                    undeliveredMessage.onMessageDeliveredCallback();
                }
            }
    
            function createDevice() {
                //create device
                publish("s/us", "100,JS MQTT,c8y_MQTTDevice", function() {
                    //set hardware information
                    publish("s/us", "110,S123456789,MQTT test model,Rev0.1", function() {
                        //listen for operation
                        client.subscribe("s/ds");
                        //send temperature measurement
                        setInterval(function() {
                            publish("s/us", "211,25");
                        }, 3000);
                    });
                });
            }
    
            function publish(topic, message, onMessageDeliveredCallback) {
                message = new Paho.MQTT.Message(message);
                message.destinationName = topic;
                message.qos = 2;
                undeliveredMessages.push({
                    message: message,
                    onMessageDeliveredCallback: onMessageDeliveredCallback
                });
                client.send(message);
            }
    
            function init() {
                client.connect({
                    userName: "<<tenant>>/<<username>>",
                    password: "<<password>>",
                    onSuccess: createDevice
                });
            }
    
            function log(message) {
                document.getElementById('logger').insertAdjacentHTML('beforeend', '<div>' + message + '</div>');
            }
        </script>
    </head>
    <body onload="init();"><div id="logger"></div></body>
    </html>
    
Replace "&lt;&lt;clientId&gt;&gt;", "&lt;&lt;serverUrl&gt;&gt;", "&lt;&lt;tenant&gt;&gt;", "&lt;&lt;username&gt;&gt;", and "&lt;&lt;password&gt;&gt;" with your data.

Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL connections, so when configuring MQTT port you can pick the one which fits for you.

What does the code do?

-   Configure MQTT connection
-   Register ``onMessageArrived`` callback function which will print all incoming messages
-   Register ``onMessageDelivered`` callback function which will be called after publish message has been delivered
-   After page is fully loaded call ``init`` function which connects with the Cumulocity via MQTT protocol
-   After connection is established call ``createDevice`` function
-   Create a new device with ``JS MQTT`` name and ``c8y_MQTTDevice`` type
-   Update device hardware information by putting ``S123456789`` serial, ``MQTT test model`` model and ``Rev0.1`` revision
-   Subscribe to the static operation templates for the device - this will result in ``onMessageArrived`` method call every time new operation is created
-   Send temperature measurement every 3 seconds

Note that subscription is established after device creation, otherwise if there is no device for a given ``clientId`` server will not accept it.

### Run

Open "hello_mqtt_js.html" in the browser, after that you should see new device in the Cumulocity application in the device list.
Additionally if there will be a new operation created for this device, (for example ``c8y_Restart``) information about it will be printed in the browser page.

## Improve the agent

Now that you have done your first step, check out the Section [Hello MQTT](/guides/mqtt/hello-mqtt) to learn more about Cumulocity MQTT and improve your application.
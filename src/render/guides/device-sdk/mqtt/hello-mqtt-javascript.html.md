---
order: 50
title: Hello MQTT JavaScript
layout: redirect
---

In this tutorial, you will learn how to use the JavaScript MQTT client with Cumulocity using pre-defined messages (called "static templates").

### Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, a user, and a password in order to access Cumulocity.


### Developing the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to

* create a JavaScript application,
* run the application.
    
#### Creating a JavaScript application

Create an HTML file, for example "hello_mqtt_js.html" with the following content:

    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8"></meta>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>
        <script type="text/javascript">
            var undeliveredMessages = []           
            var temperature = 25
    
            var client = new Paho.MQTT.Client("<<serverUrl>>", "<<clientId>>");
            client.onMessageArrived = onMessageArrived;
            client.onMessageDelivered = onMessageDelivered;
    
            function onMessageArrived(message) {
                log('Received operation "' + message.payloadString + '"');
                if (message.payloadString.indexOf("510") == 0) {
                    log("Simulating device restart...");
                    publish("s/us", "501,c8y_Restart");
                    log("...restarting...");
                    setTimeout(function() {
                        publish("s/us", "503,c8y_Restart");
                    }, 1000);
                    log("...done...");
                }
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
                        publish('s/us', '114,c8y_Restart', function() { 
                            log('Enable restart operation support') 
                            //listen for operation
                            client.subscribe("s/ds");
                        })
                       
                        //send temperature measurement
                        setInterval(function() {
                            publish("s/us", '211,'+temperature);
                            temperature += 0.5 - Math.random()
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
    
Replace &lt;&lt;clientId&gt;&gt;, &lt;&lt;serverUrl&gt;&gt;, &lt;&lt;tenant&gt;&gt;, &lt;&lt;username&gt;&gt;, and &lt;&lt;password&gt;&gt; with your valid data.

The Cumulocity MQTT protocol supports both unsecured TCP and also secured SSL connections (e.g. ``ws://mqtt.cumulocity.com/mqtt`` or ``wss://mqtt.cumulocity.com/mqtt``), so as &lt;&lt;serverUrl&gt;&gt; select the one which fits for you.

What does the code do?

-   Configure the MQTT connection.
-   Register ``onMessageArrived`` a callback function which will print all incoming messages and in case of ``c8y_Restart`` operation it will simulate a device restart.
-   Register ``onMessageDelivered`` a callback function which will be called after a publish message has been delivered.
-   After the page is fully loaded, call ``init`` function which connects with Cumulocity via a MQTT protocol.
-   When the connection is established call a ``createDevice`` function.
-   Create a new device with a ``JS MQTT`` name and a ``c8y_MQTTDevice`` type.
-   Update the device hardware information by putting  a ``S123456789`` serial, a ``MQTT test model`` model and a ``Rev0.1`` revision.
-   Subscribe to the static operation templates for the device - this will result in ``onMessageArrived`` method call every time a new operation is created.
-   Send temperature measurement every 3 seconds.

Note that subscription is established after the device creation, otherwise if there is no device for a given ``clientId`` the server will not accept it.

#### Running the application

Open "hello_mqtt_js.html" in a browser. You should see the new device in the Cumulocity application in the device list.

Additionally if there is a new operation created for this device (for example ``c8y_Restart``), related information will be printed in the browser page.

### Improving the agent

Now that you have done your first step, check out the section [Hello MQTT](/guides/device-sdk/mqtt#hello-mqtt) to learn more about Cumulocity MQTT and improve your application.
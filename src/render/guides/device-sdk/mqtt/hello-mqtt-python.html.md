---
order: 60
title: Hello MQTT Python
layout: redirect
---

In this tutorial, you will learn how to use the Python MQTT client with Cumulocity using pre-defined messages (called "static templates").

### Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, a user, and a password in order to access Cumulocity.
* Verify that you have Python installed:

```shell
$ python --version
Python 2.7.12
```
Python can be downloaded from [www.python.org](https://www.python.org/).

* Install the Paho client:
```shell
$ pip install paho-mqtt
```
> Info: On macOS you may need to execute `sudo easy_install pip` in case the `pip` command is not found.

### Developing the "Hello, MQTT world!" client

To develop a very simple "Hello, world!" MQTT client for Cumulocity, you need to

* create a python script,
* Run the script.

#### Creating a python script

Create a script file, for example "hello_mqtt.py" with the following content:

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
import paho.mqtt.client as mqtt
import time, threading, ssl, random

# client, user and device details
serverUrl   = "tcp://mqtt.cumulocity.com"
port        = 1883
clientId    = "my_mqtt_python_client"
device_name = "My Python MQTT device"
tenant      = "<<tenant>>"
username    = "<<username>>"
password    = "<<password>>"

receivedMessages = []

# display all incoming messages
def on_message(client, userdata, message):
    print("Received operation " + str(message.payload))
    if (message.payload.startswith("510")):
        print("Simulating device restart...")
        publish("s/us", "501,c8y_Restart");
        print("...restarting...")
        time.sleep(1)
        publish("s/us", "503,c8y_Restart");
        print("...done...")

# send temperature measurement
def sendMeasurements():
    try:
        print("Sending temperature measurement...")
        publish("s/us", "211," + str(random.randint(10, 20)))
        thread = threading.Timer(7, sendMeasurements)
        thread.daemon=True
        thread.start()
        while True: time.sleep(100)
    except (KeyboardInterrupt, SystemExit):
        print 'Received keyboard interrupt, quitting ...'

# publish a message
def publish(topic, message, waitForAck = False):
    mid = client.publish(topic, message, 2)[1]
    if (waitForAck):
        while mid not in receivedMessages:
            time.sleep(0.25)

def on_publish(client, userdata, mid):
    receivedMessages.append(mid)

# connect the client to Cumulocity and register a device
client = mqtt.Client(clientId)
client.username_pw_set(tenant + "/" + username, password)
client.on_message = on_message
client.on_publish = on_publish

client.connect(serverUrl, port)
client.loop_start()
publish("s/us", "100," + device_name + ",c8y_MQTTDevice", True)
publish("s/us", "110,S123456789,MQTT test model,Rev0.1")
publish("s/us", "114,c8y_Restart")
print "Device registered successfully!"

client.subscribe("s/ds")
sendMeasurements()
```   

Replace `serverUrl`, `clientId` and `device_name` as needed. Do not forget to specify the user credentials setting values for `tenant`, `username` and `password`.

Cumulocity MQTT protocol supports both unsecured TCP and secured SSL connections, so when configuring  a port remember to use the correct one. No matter which connection type you choose, your `serverUrl` should stay the same (like `mqtt.cumulocity.com`).

The above example uses a TCP connection. If you would like to use an SSL connection, remember to use the proper configuration from the Paho MQTT client. Further information can be found at [www.eclipse.org](http://www.eclipse.org/paho/clients/python/docs/#option-functions).

What does the script do?

-   Configure a MQTT connection.
-   Register an ``on_message`` callback function which will print incoming messages. In case of a ``c8y_Restart`` operation will simulate a device restart.
-   Register an ``on_publish`` callback function which will be called after a publish message has been delivered.
-   Connect with Cumulocity via the MQTT protocol.
-   Create a new device with a name (**device_name**) and a type (**c8y_MQTTDevice**).
-   Update the device hardware information by putting a **S123456789** serial, a **MQTT test model** model and a **Rev0.1** revision.
-   Subscribe to the static operation templates for the device –this will result in an ``on_message`` method call every time a new operation is created.
-   Call the ``sendMeasurements`` method which sends a temperature measurement every 7 seconds.

What does the ``publish`` message do?

-   Publish a given message about the given topic via MQTT.
-   When publishing the message it uses QoS 2. So to be sure that the message was delivered, it will wait for server ACK (until the ``on_publish`` method is called with the matching message ID).

Note that the subscription is established after the device creation, otherwise if there is no device for a given ``clientId``, the server will not accept it.

#### Running the script

To run the script just use the command:
```shell
$ python hello_mqtt.py 
```

After starting the application you should see a new registered device in the Device Management application listed in All devices. In the Measurements tab, you will see the  Temperature measurements being sent by your client.
Additionally, if there will be a new operation created for this device (e.g. "c8y_Restart"), information about it will be printed to the console.
    
    
### Improving the agent

Now that you have done your first step, check out the section [Hello MQTT](/guides/device-sdk/mqtt#hello-mqtt) to learn more about Cumulocity MQTT and improve your application.

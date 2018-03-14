---
order: 20
title: Hello MQTT
layout: default
---
## Overview

In this tutorial, you will learn how to use MQTT with Cumulocity using pre-defined messages (called "static templates").

## Prerequisites

In order to follow this tutorial, check the following prerequisites:

* You have a valid tenant, a user and a password in order to access Cumulocity.
* You have installed the Chrome extension [MQTTLens](https://chrome.google.com/webstore/detail/mqttlens/hemojaaeigabkbcookmlgmdigohjobjm) or a similar MQTT tool (e.g. [MQTTBox](https://chrome.google.com/webstore/detail/mqttbox/kaajoficamnjijhkeomgfljpicifbkaf)).

The screen shots in the tutorial use MQTTLens. Other tools can look slightly different.

## Talking MQTT

### Configure the MQTT connection

To configure the MQTT connection, you need to pass the following connection parameters (see the screenshot below).
* Hostname: For this example, please use TCP and Port 1883. You also need to pass the URL to your tenant (e.g. mqtt.cumulocity.com)
* Client ID: You can use the "Generate a random ID" button (most tools will offer such a button) or fill one in yourself. This ID will be linked to your device. To reconnect to the same device, use the same ID.
* Username: You need to enter your tenant and username separated by a slash (tenant/username). You can use the same user that you use for logging into Cumulocity for this example.
* Password: The password of the user.

![Example MQTTLens Configuration](/guides/images/mqtt/mqttLensConfig.png)

The other configurations like "clean session" are not important for this example. You can change them to your liking. After clicking on "save changes", you should see a screen similar to the following screenshot.

![MQTTLens Established Connection](/guides/images/mqtt/mqttLensSuccess.png)

If the icon next to your connection on the left is red, verify your configuration (especially username and password). If the icon is green, you successfully established an MQTT connection to Cumulocity.

### Sending data

All MQTT "publish messages" in this tutorial will be sent to the topic "s/us". This is the topic used for Cumulocity's pre-provided static templates.

![MQTTLens Publish Message](/guides/images/mqtt/mqttLensPublish.png)

#### Creating the device

The first message sent will create our device. Although the static templates support automatic device creation, in this example we will create the device manually. The template "100" will create a new device. It can be used with two optional parameters (deviceName, deviceType).

```
100,My first MQTT device,c8y_MQTTdevice
```

Afterward, you will find this device in the "Device Management Application" as a new device. If you go to the identity tab of the device you will notice that there was an identity created automatically to link the device to the MQTT ClientId.
Besides the name and the type, the device is empty so master data needs to be added.

You can use multiple static templates per publishing separated by a line break (one template per row).
This feature is used to set the hardware and the required interval for the device in a single published message.
The hardware can be set with the template "110". It can take 3 parameters (serialNumber, model, revision). Optional parameters in static templates can be left empty if you don't want to set them. For the hardware all parameters are optional.
The required interval can be set with the template "117" and just takes a single parameter (the interval in minutes)

```
110,,MQTT test model,1.2.3
117,10
```

After a reload of the info page of your device in "Device Management" you should see the information we just added.

#### Creating measurements

Now the device has some master data and we can start sending some measurements.
There are a couple of measurements that can be created directly by using a static template:
* 210: Signal strength measurement
* 211: Temperature measurement
* 212: Battery measurement

The temperature and battery measurement just take the value and time as parameters. For the signal strength, you can pass two values (RSSI and BER). Passing timestamps in the Cumulocity MQTT implementation is always optional. If you don't pass them along the server will automatically create a timestamp with the current server time.
We will make use of this feature in this example. Also if you don't set the last parameters you do not need to enter the remaining commas.

```
210,-87
211,24
212,95
```

Besides the measurements above we can also use the template "200" to create a more custom measurement. It will take the measurement fragment, series, value, unit and time as its parameters.

```
200,myCustomTemperatureMeasurement,fahrenheit,75.2,F
```

After a reload in the "Device Management Application"  in the "measurement" tab of your device you should see 4 graphs with the newly added measurements.

#### Creating alarms

In the next step, we want to create some alarms for this device. There are 4 templates to create alarms for the 4 alarm severities:
* 301: CRITICAL
* 302: MAJOR
* 303: MINOR
* 304: WARNING

Each of them note a type (which is mandatory), a text and a time (both optional).

```
301,gpio_critical,There is a GPIO alarm
304,simple_warning
```

The alarm list of your device should now contain one critical alarm and one warning.
Note that we did not set any text for the warning therefore it was created with a default alarm text.

With the next step, we want to clear the critical alarm again.
To achieve this we use the template "306" which refers to the type of the alarm that should be cleared.

```
306,gpio_critical
```

Afterward, the critical alarm should be cleared.
Note that you did not have to handle any alarm IDs with the MQTT implementation. Cumulocity will take over this part so that the device communication can be as easy as possible.

#### Creating events

Next, we want to create some location events for the device. You can use this [External Link](http://www.latlong.net/) to get the latitude and longitude for your city if you want.
The template "401" lets you create location events and takes latitude, longitude, altitude, accuracy and the time as parameters but for now, we will just use the first two.

```
401,51.227741,6.773456
```

In "Device Management" you can see one event in the event list but the location has not been updated. This is because on REST these are different requests. Instead of the template "401" you can use the template "402" in MQTT. It works exactly the same as "401" but additionally it also updates the position of the device itself.

```
402,51.227741,6.773456
```

Now you should see both the location and the tracking tab in the device with the location tab having the same latitude longitude as the last location event.


### Receiving data

So far we have only used MQTT to send data from the client to the server. Now we want to send data from the server to the client
To achieve that we first need to subscribe to the responsible topic. We will do two subscriptions:
* s/ds : This will subscribe to the static operation templates for the device
* s/e :  This will subscribe to an error topic that can be used for debugging

You can enter both topics after another in the subscribe field and hit subscribe. The QoS selection does not matter for this example.

Afterward, your MQTTLens should look like this:

![MQTTLens Subscribed Topics](/guides/images/mqtt/mqttLensAfterSubscribe.png)

#### Receiving operations

At the current state the UI does not show any tabs for operations. Up to this point it was unkown what exactly the device supports. But the list of supported operations can be modified with the template "114". A list of supported operations can be added here. 
We will add support for the configuration and shell.


```
114,c8y_Command,c8y_Configuration
```

After reloading the UI the two new tabs should appear ("Configuration" and "Shell").
We can now create a shell command from the UI and click "Execute".

In the MQTTLens you should now have received a new message for the s/ds subscription

![MQTTLens Received Operation](/guides/images/mqtt/mqttLensReceivedOperation.png)

The "511" is indicating what kind of operation we received (in this case c8y_Command). Behind there will be the deviceIdentifier to locate the device with the dedicated operation. This is required if you have a hierarchy with multiple children. In that case, you need to know for which of the children the operation was dedicated.
Finally, you have the operation specific parameters which in the case of c8y_Command is only the command text.

After receiving the operation we can start EXECUTING  it to initiate the client's handling the operation. Similar to changing the status of an alarm you can add the type of operation to the template.

```
501,c8y_Command
```

After finishing the handling the operation can be set to successful with the template "503".
Besides the operation type, this operation can also take additional parameters based on what kind of operation it was. For the c8y_Command we can return a result.

```
503,c8y_Command,Everything went fine
```

#### Learning from errors

The topic s/e can help you debugging in case something went wrong.
If we for example try to send

```
999,I made this up
```

we can see a message on the topic because the template "999" is unknown

```
40,999,No static template for this message id
```

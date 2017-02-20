---
order: 40
title: Android Cloud Sensor App
layout: default
---

## Overview

This user guide describes the Android Cloud Sensor App. The app sends the sensor measurements from a Texas Instruments (TI) Sensor Tag and an Android smartphone to Cumulocity to be securely processed and managed. Additionally both devices can be controlled from Cumulocity. The TI Sensor Tag is a low energy wireless device manufactured by Texas Instruments © [http://www.ti.com/](http://www.ti.com/).

## Getting the Android Cloud Sensor App

In order to use an Android Cloud Sensor App you need a smartphone with Android version 5.0 (Lollipop) or higher. To determine the Android version, please consult [http://www.wikihow.com/Check-What-Android-Version-You-Have](http://www.wikihow.com/Check-What-Android-Version-You-Have).

To download the Android Cloud Sensor App executable package, please proceed to the Cockpit application in your Cumulocity IoT Sensor Demo tenant and click “Add phone” from the quick links:

![Quick Links](/guides/users-guide/quicklinks.png)

Once the “Add phone” button is pressed, you will be presented with the wizard showing the QR code for downloading the Android Cloud Sensor App:

![Install App](/guides/users-guide/installapp.png)

Scan this QR code with any scanning application you have on your smartphone. The Android Cloud Sensor App will start being downloaded.

## Registering the Cloud Sensor App to your Cumulocity IoT Sensor Demo tenant

To register the smartphone as a new device in your tenant you have two options:

- Fastest option: Scan a QR code with encrypted registration credentials
- Use Web-based registration

> In case you need to re-register your smartphone, and you change from option 1 to option 2 (or vice versa), then you must delete the smartphone object in Device management.

The QR code registration process (option 1) uses credentials derived from the username and password of the user who is currently logged in to the IoT Sensor Demo tenant. Unique device credentials are used in the web-based registration process (option 2).

### Registering using a QR code with credentials

Click the “Next” button in the Cockpit wizard to see the QR code with credentials to register the Cloud Sensor App to your Cumulocity IoT Sensor Demo tenant:

![Register phone](/guides/users-guide/registerphone.png)

The registration credentials are encrypted, however we highly recommend to use specifically created demo user accounts on your tenant for large public presentations.

> Important: Do not use this method for production tenants or for tenants that contain sensitive data.

### Registering using Web-based registration

Registration is started by pressing the “Manual registration” menu item on the Cloud Sensor App action bar. The action’s widget looks like a cog button or might be consolidated into the option menu depending on your screen’s resolution and orientation:

![Action bar](/guides/users-guide/actionbar.png)

Next, select the instance where your IoT Sensor Demo tenant is hosted, e. g., cumulocity.com.

![Select Instance](/guides/users-guide/selectinstance.png)

Press the “Register” button to start registration. Afterwards, scroll to the bottom of a main Cloud Sensor App screen, there will be the device id which needs to be entered during Device Registration on the Cumulocity IoT Sensor Demo tenant:

![Get device Id](/guides/users-guide/getdeviceid.png)

Enter this device id in your Cumulocity tenant under Device Management -> Devices -> Registration menu:

![Register device](/guides/users-guide/registerdeviceid.png)

Next, press the “accept” button.

![Accept device](/guides/users-guide/acceptdevice.png)

After the “accept” button is pressed, a smartphone will appear in the list of All devices in the Device Management application:

![All devices](/guides/users-guide/alldevices.png)

For more information about registering a device at the platform manually, please consult [https://goo.gl/8KNVN3](https://goo.gl/8KNVN3).

## Sending sensor data to Cumulocity

As soon as the smartphone has scanned the registration credentials QR code, it is added to the automatically created group “Phones”. You can navigate to the group in the Cockpit plugin by clicking a “Go to phones” button. 

> Please, notice that the button will remain in the pending state with the text “Waiting...” until you scan the registration credentials QR code.

![registerphone](/guides/users-guide/registerphone.png)

Once your Cloud Sensor App is registered either by a QR code or manually, the bottom of the main screen will indicate the device name and the tenant name to which the data is sent:

![main screen](/guides/users-guide/mainscreen.png)

The measurements from the sensors of your smartphone will start being sent to your Cumulocity tenant automatically once the registration has succeeded. The arrow next to the cloud image will indicate that the data is being pushed to the tenant:

![cloud image](/guides/users-guide/cloudimage.png)

The data points will also start being displayed on the graphs of the dashboard for your smartphone under “Phones” group.

![dashboard graph](/guides/users-guide/dashboardgraph.png)

To save battery power, the Cloud Sensor App does not send measurements to Cumulocity whilst in the background. The data is posted to Cumulocity while the app is active and visible. The app resumes data transfer automatically when it returns from either the inactive or background mode.

## Connecting TI Sensor Tag to the Cloud Sensor App

The Cloud Sensor App connects to both TI Sensor Tag versions 1.20 and 1.30 via Bluetooth. Use the plus toolbar button in the Cloud Sensor App to connect a Sensor Tag.

![Plus toolbar button](/guides/users-guide/plustoolbarbutton.png)

On the next screen you will be asked to scan for available Sensor Tags which are discoverable. Push “Scan” to start scanning. To make a Sensor Tag discoverable, press the red round button on its side. The Sensor Tag will start blinking to show that it is ready to connect. It should immediately appear in the list of visible Bluetooth devices in the Cloud Sensor App:

![Connect Sensor Tag](/guides/users-guide/connectsensortag.png)

Press “Connect” next to the Sensor Tag of your choice. The Bluetooth connection will be established between the Sensor Tag and your smartphone. Depending on your smartphone’s bluetooth hardware the time required to establish this connection might vary and the progress bar will indicate the level of completeness:

![Generate GUI](/guides/users-guide/generategui.png)

Once the Sensor Tag is paired with your smartphone, you will see the list of sensors in the Sensor Tag and their current measurements:

![Sensors list](/guides/users-guide/sensorslist.png)

Afterwards the data points for Sensor Tag graphs will appear in your Cumulocity tenant:

![Sensor tag data points](/guides/users-guide/sensortagdatapoints.png)

To detach the Sensor Tag from your smartphone, please press the minus toolbar button.

## Device Control

The Cloud Sensor App can receive real-time control commands from Cumulocity. The Messaging widget can be used to send text notifications to the smartphone. The Vibration relay control can be used to turn on / off the vibration motor. For example, to send a message from Cumulocity, enter the text into the Messaging widget:

![message widget](/guides/users-guide/messagewidget.png)

When the “Send” button is pressed, this message will appear as a pop-up on the screen of the smartphone:

![App message](/guides/users-guide/appmessage.png)

If the Vibration switch gets turned on, the smartphone will start vibrating until the switch is turned off.

> The smartphone must remain connected to the platform to receive these commands. 

To know more about dashboard widgets, please, consult
[https://www.cumulocity.com/guides/users-guide/cockpit/#widget.](https://www.cumulocity.com/guides/users-guide/cockpit/#widget.)
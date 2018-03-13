---
order: 80
title: Android Cloud Sensor App
layout: default
---

## Overview

This user guide describes the Android Cloud Sensor Application. The app sends the sensor measurements from a Texas Instruments (TI) Sensor Tag and an Android smartphone to Cumulocity to be securely processed and managed. Additionally, both devices can be remote-controlled by Cumulocity. The TI Sensor Tag is a low energy wireless device manufactured by Texas Instruments © [http://www.ti.com/](http://www.ti.com/).

## Getting the Android Cloud Sensor App

To use the Android Cloud Sensor App you need a smartphone with Android version 5.0 (Lollipop) or higher. To determine the Android version, please consult [http://www.wikihow.com/Check-What-Android-Version-You-Have](http://www.wikihow.com/Check-What-Android-Version-You-Have).

To install the Android Cloud Sensor App from Google Play, please proceed to the Cockpit application in your Cumulocity IoT Sensor Demo tenant and click “Add smartphone” from the quick links on the welcome panel:

![Quick Links](/guides/images/users-guide/quicklinks.png)

Clicking on “Add smartphone” will start a wizard showing the QR code for downloading the Android Cloud Sensor App:

![Install App](/guides/images/users-guide/installapp.png)

Scan this QR code with any scanning application you have on your smartphone or install a QR scanner available. You will be navigated to Google Play for installing the Cloud Sensor App.

## Registering the Cloud Sensor App to your Cumulocity IoT Sensor tenant

To register a smartphone as a new device in your tenant you have two options:

- Fastest option: Scan a QR code with encrypted registration credentials
- Use Web-based registration

> Just in case you need to re-register your smartphone, and you change from option 1 to option 2 (or vice versa), you must delete the smartphone object in Device management.

The QR code registration process (option 1) uses credentials derived from the username and password of the user who is currently logged in to the IoT Sensor tenant. Unique device credentials are used in the web-based registration process (option 2).

### Registering using a QR code with credentials

Click the “Next” button in the Cockpit wizard to see the QR code with credentials to register the Cloud Sensor App to your Cumulocity IoT Sensor tenant:

![Register phone QR](/guides/images/users-guide/registerphonenew.png)

The registration credentials are encrypted however, we highly recommend to use specially created demo user accounts on your tenant for large public presentations.

> Important: Do not use this method for production tenants or for tenants containing sensitive data.

### Registering using web-based registration

Registration is started by pressing the “Web-based Registration” button on the Cloud Sensor App welcome screen:

![Action bar](/guides/images/users-guide/webbased.png)

Next, select the instance where your IoT Sensor Demo tenant is hosted, e. g., cumulocity.com.

![Select Instance](/guides/images/users-guide/selectinstancenew.png)

Press the “Register device” button to start registration. Afterwards, you will be presented with device id which needs to be entered during Device Registration on the Cumulocity IoT Sensor Demo tenant:

![Get device Id](/guides/images/users-guide/getdeviceidnew.png)

Enter this device id in your Cumulocity tenant under Device Management -> Devices -> Registration menu:

![Register device](/guides/images/users-guide/registerdeviceid.png)

Next, click the “accept” button.

![Accept device](/guides/images/users-guide/acceptdevice.png)

After the “accept” button is clicked, a smartphone will appear in the list of the "All devices" navigation in the Device Management application:

![All devices](/guides/images/users-guide/alldevices.png)

For more information about registering a device at the platform manually, please consult [https://goo.gl/8KNVN3](https://goo.gl/8KNVN3).

## Sending sensor data to Cumulocity

As soon as the smartphone has scanned the registration credentials QR code, it is added to the automatically created group called “Smartphones”. You can navigate to the group in the Cockpit application by clicking the “Go to phones” button. 

> Please, notice that the button will remain in the pending state with the text “Waiting...” until you scan the registration credentials QR code. This will finish the registration process.

![Waiting text](/guides/images/users-guide/registerphonenew.png)

Once your Cloud Sensor App is registered either by a QR code or manually, the next screen will indicate the device name that will be used to identify your smartphone at the platform. The permission requests for accessing the network information, accessing GPS data and storing location map in images cache will be prompted only once on start. Please, accept them so that the smartphone can transfer network and GPS data to the cloud:

![access media](/guides/images/users-guide/accessmedia.png)
![manage calls media](/guides/images/users-guide/managecalls.png)
![read location](/guides/images/users-guide/readlocation.png)

You can edit the device name or leave it as a default value for your smartphone model:

![edit name](/guides/images/users-guide/editname.png)

A new device record with the model name and a device name at the platform will appear on the screen of a Cloud Sensor App. The measurements from the sensors of your smartphone will start being sent to your Cumulocity tenant automatically. You can view the data from sensors by clicking “View sensors” button:

![phone sensors](/guides/images/users-guide/phonesensors.png)
![gps sensor](/guides/images/users-guide/gpssensor.png)
![acceleration sensor](/guides/images/users-guide/accelerationsensor.png)

The data points will also start being displayed on the graphs of the dashboard for your smartphone under “Smartphones” group.

![map in cockpit](/guides/images/users-guide/mapincockpit.png)

A 3D rotation widget on this dashboard will depict the data from a gyroscope sensor on your smartphone if present:

![rotation widget](/guides/images/users-guide/rotationwidget.png)

To save battery power, the Cloud Sensor App sends measurements to Cumulocity only when the data change is significant or every 20 minutes by default. This sending interval can be changed with Configuration update. For this purpose, please open Device Management application and select your smartphone from a list of devices:

![select from list](/guides/images/users-guide/selectfromlist.png)

A Configuration tab will appear on the left side and the interval can be specified in milliseconds:

![configuration interval](/guides/images/users-guide/configurationinterval.png)

## Connecting TI Sensor Tag to the Cloud Sensor App

The Cloud Sensor App connects to both TI Sensor Tag versions 1.20 and 1.30 via Bluetooth. Use the “Scan devices” button in the Cloud Sensor App to connect a Sensor Tag.

![Scan devices button](/guides/images/users-guide/scandevicesbutton.png)

On the next screen there will appear all Sensor Tags which are discoverable. To make a Sensor Tag discoverable, press the red round button on its side. The Sensor Tag will start blinking to show that it is ready to connect. It should immediately appear in the list of visible Bluetooth devices in the Cloud Sensor App:

![Connect Sensor Tag](/guides/images/users-guide/bluetoothscreen.png)

Press “Connect” next to the Sensor Tag of your choice. The Bluetooth connection will be established between the Sensor Tag and your smartphone. Once the Sensor Tag is paired with your smartphone, you will see it as a record on the Cloud Sensor App’s screen:

![Sensor Tag Card](/guides/images/users-guide/ticard.png)

Observing information and sensor data from the TI Sensor Tag is possible by pressing “View sensors” button on its card:

![Sensor Tag Info](/guides/images/users-guide/sensortaginfo.png)
![Sensor Tag Key Not Pressed](/guides/images/users-guide/tikeynopressed.png)
![Sensor Tag Key Pressed](/guides/images/users-guide/tikeypressed.png)

The data points for Sensor Tag will appear in your Cumulocity tenant on the graph of the Cockpit smartphone dashboard and as the Measurements in Device Management application:

![Sensor tag data points](/guides/images/users-guide/sensortagdatapoints.png)

To detach the Sensor Tag from your smartphone, please press the “Remove” button on its card.

## Device Control

The Cloud Sensor App can receive real-time control commands from Cumulocity. The Messaging widget can be used to send text notifications to the smartphone. The Vibration relay control can be used to turn on / off the vibration motor. For example, to send a message from Cumulocity, enter the text into the Messaging widget:

![message widget](/guides/images/users-guide/messagewidget.png)

When the “Send” button is pressed, this message will appear as a pop-up on the screen of the smartphone:

![Hello World Messsage](/guides/images/users-guide/helloworldnew.png)

If the Vibration switch gets turned on, the smartphone will start vibrating until the switch is turned off.

> The smartphone must remain connected to the platform to receive these commands. 

To know more about dashboard widgets, please, consult
[https://www.cumulocity.com/guides/users-guide/cockpit/#widget](https://www.cumulocity.com/guides/users-guide/cockpit/#widget).

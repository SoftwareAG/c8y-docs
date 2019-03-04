---
weight: 30
title: Cloud Sensor App
layout: redirect
---

### Overview

This document describes the Cumulocity Cloud Sensor App. This App sends the sensor measurements from a Texas Instruments (TI) Sensor Tag and an Android smartphone to Cumulocity to be securely processed and managed. Additionally, both devices can be remote-controlled by Cumulocity. The TI Sensor Tag is a low energy wireless device manufactured by Texas Instruments © [http://www.ti.com/](http://www.ti.com/).

### Installing the Cloud Sensor App

To use the Cloud Sensor App for Android you need a smartphone with Android version 5.0 (Lollipop) or higher. To determine the Android version installed on your smartphone, refer to [http://www.wikihow.com/Check-What-Android-Version-You-Have](http://www.wikihow.com/Check-What-Android-Version-You-Have).

To install the Cloud Sensor App from Google Play, open the Cockpit application in your Cumulocity IoT Sensor tenant and click **Add smartphone** from the quick links on the Welcome screen.

![Quick Links](/guides/images/users-guide/quicklinks.png)

This will start a wizard showing the QR code for downloading the Cloud Sensor App.

![Install App](/guides/images/users-guide/installapp.png)

Scan this QR code with any scanning application on your smartphone. You will be navigated to Google Play for the installation of the Cloud Sensor App.

### Registering the Cloud Sensor App to your IoT Sensor tenant

To register your smartphone as a new device in your tenant you have two options:

- Option 1: Scan a QR code with encrypted registration credentials (fastest way)
- Option 2: Use Web-based registration

> **Info:** Just in case you need to re-register your smartphone, and you change from option 1 to option 2 (or vice versa), you must delete the smartphone object in Device Management.

The QR code registration process (option 1) uses credentials derived from the username and password of the user who is currently logged into the IoT Sensor tenant. Unique device credentials are used in the web-based registration process (option 2).

#### Registering using a QR code with credentials

Click **Next** in the Cockpit wizard to see the QR code with credentials to register the Cloud Sensor App to your Cumulocity IoT Sensor tenant.

![Register phone QR](/guides/images/users-guide/registerphonenew.png)

Your smartphone will be added to the devices list in the Device Management application, available from **All devices** in the **Devices** menu in the navigator.

![All devices](/guides/images/users-guide/alldevices.png)

Moreover it will be added to the group “Smartphones” (which will be created if not available yet). You can easily navigate to the group in the Cockpit application by clicking **Go to phones**. 

> **Info:** Until you scan the registration credentials QR code, the button will remain in the pending state showing the message “Waiting...”. Scanning the QR code will complete the registration process.

![Waiting text](/guides/images/users-guide/registerphonenew.png)

> **Important:** The registration credentials are encrypted. However, we highly recommend to use specific demo user accounts on your tenant for large public presentations. Do not use this method for production tenants or for tenants containing sensitive data.

#### Registering using web-based registration

To register your smartphone manually, follow these steps:

1. Press the **Web-based Registration** button on the Cloud Sensor App Welcome screen. <br>![Action bar](/guides/images/users-guide/webbased.png)
2. Select the instance on which your IoT Sensor Demo tenant is hosted, e.g. cumulocity.com. <br>![Select Instance](/guides/images/users-guide/selectinstancenew.png)
3. Press the **Register device** button to start registration. A device ID will be displayed which needs to be entered during device registration on the Cumulocity IoT Sensor tenant. <br>![Get device Id](/guides/images/users-guide/getdeviceidnew.png)
4. In your Cumulocity tenant in the Device Management application, click **Registration** in the **Devices** menu and enter the device ID. <br>![Register device](/guides/images/users-guide/registerdeviceid.png)
5. Click **Accept**.<br>![Accept device](/guides/images/users-guide/acceptdevice.png)

Your smartphone will be added to the devices list in the Device Management application, available from **All devices** in the **Devices** menu in the navigator.

![All devices](/guides/images/users-guide/alldevices.png)

Moreover it will be added to the group “Smartphones” (which will be created if not available yet). You can easily navigate to the group in the Cockpit application by clicking **Go to phones**. 

For further information about registering a device at the platform manually, refer to [Device Management > Connecting devices](/guides/users-guide/device-management#device-registration).

### Sending sensor data to Cumulocity

Once your Cloud Sensor App is registered either by a QR code or manually, the device name will be provided which identifies your smartphone in the platform. 

You need to accept several permission requests allowing for accessing data on your device (e.g. network information and GPS data) to let the smartphone transfer network and GPS data to the cloud. This requests only show up once.

![access media](/guides/images/users-guide/accessmedia.png)
![manage calls media](/guides/images/users-guide/managecalls.png)
![read location](/guides/images/users-guide/readlocation.png)

You may edit the device name or leave it at the default value for your smartphone model.

![edit name](/guides/images/users-guide/editname.png)

A new device record with the model name and the device name used in the platform will appear on the screen of the Cloud Sensor App. 

The measurements from the sensors of your smartphone will automatically start being sent to your Cumulocity tenant. You can view the data from sensors by pressing the **View sensors** button.

![phone sensors](/guides/images/users-guide/phonesensors.png)
![gps sensor](/guides/images/users-guide/gpssensor.png)
![acceleration sensor](/guides/images/users-guide/accelerationsensor.png)

The data points will also be displayed on the graphs in the dashboard of your smartphone in the Cockpit application.

![map in cockpit](/guides/images/users-guide/mapincockpit.png)

A 3D rotation widget on this dashboard will depict the data from a gyroscope sensor on your smartphone if present.

![rotation widget](/guides/images/users-guide/rotationwidget.png)

To save battery power, the Cloud Sensor App sends measurements to Cumulocity only when the data change is significant, or every 20 minutes by default. This interval can be changed in the Device Management application.

Switch to the Device Management application and select your smartphone from the device list, available through **All devices** in the **Devices** menu in the navigator.

![select from list](/guides/images/users-guide/selectfromlist.png)

Switch to the **Configuration** tab and specify the interval in milliseconds.

![configuration interval](/guides/images/users-guide/configurationinterval.png)

### Connecting TI Sensor Tag to the Cloud Sensor App

The Cloud Sensor App connects to both TI Sensor Tag version 1.20 and 1.30 via Bluetooth. Use the “Scan devices” button in the Cloud Sensor App to connect a Sensor Tag.

![Scan devices button](/guides/images/users-guide/scandevicesbutton.png)

All Sensor Tags which are discoverable are displayed. To make a Sensor Tag discoverable, press the red button next to it. The Sensor Tag will start blinking to show that it is ready to connect. It should immediately appear in the list of visible Bluetooth devices in the Cloud Sensor App.

![Connect Sensor Tag](/guides/images/users-guide/bluetoothscreen.png)

Press **Connect** next to the Sensor Tag of your choice. The Bluetooth connection between the Sensor Tag and your smartphone will be established. Once the Sensor Tag is paired with your smartphone, you will see it as a record on the Cloud Sensor App’s screen:

![Sensor Tag Card](/guides/images/users-guide/ticard.png)

Observing information and sensor data from the TI Sensor Tag is possible by pressing the **View sensors** button on its card.

![Sensor Tag Info](/guides/images/users-guide/sensortaginfo.png)
![Sensor Tag Key Not Pressed](/guides/images/users-guide/tikeynopressed.png)
![Sensor Tag Key Pressed](/guides/images/users-guide/tikeypressed.png)

In your Cumulocity tenant, the data points for the Sensor Tag will be displayed on the graphs in the dashboard of your smartphone and as measurements in the Device Management application.

![Sensor tag data points](/guides/images/users-guide/sensortagdatapoints.png)

To detach the Sensor Tag from your smartphone, press the **Remove** button on its card.

### Device control

The Cloud Sensor App can receive real-time control commands from Cumulocity. 

The Messaging widget can be used to send text notifications to the smartphone. The vibration relay control can be used to turn on/off the vibration motor. 

For example, to send a message from Cumulocity, enter a text into the Messaging widget and click **Send**.

![message widget](/guides/images/users-guide/messagewidget.png)

The message will appear as a pop-up on the screen of your smartphone.

![Hello World Messsage](/guides/images/users-guide/helloworldnew.png)

If the vibration switch is turned on, the smartphone will start vibrating until the switch is turned off again.

> **Info:** The smartphone must remain connected to the platform to receive these commands. 

To learn more about dashboard widgets, refer to 
[Cockpit > Working with dashboards](/guides/users-guide/cockpit/#dashboards).

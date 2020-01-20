---
weight: 10
title: Cumulocity IoT Sensor App
layout: redirect
slug: cumulocity-iot-sensor-app
---

### Overview

The **Cumulocity IoT Sensor App** is a smartphone application which sends sensor measurements to the Cumulocity IoT platform. With the app it is also possible to connect a Texas Instruments (TI) Sensor Tag device over bluetooth and send the measurements to Cumulocity. Commands can also be sent from Cumulocity to the smartphone.  

>**Info**: The TI Sensor Tag is a low energy wireless device manufactured by Texas Instruments © [http://www.ti.com/](http://www.ti.com/).

The Sensor App requires a smartphone with Android version 5.0 (or higher) or iOS version 11.0 (or higher). 

### Installing the Sensor App

To install the Sensor App on your smartphone, open the Cockpit application in Cumulocity, expand the right drawer and click **Add smartphone** from the quick links.

![Quick Links](/images/users-guide/csa/csa-quick-links.png)

This will start a wizard showing the QR code for downloading the Sensor App.

![Install App](/images/users-guide/csa/csa-qr-code.png)

Scanning the QR code with your smartphone will take you to the App Store where you can install the app.

> **Info:** Alternatively, you can open the Apple App Store or Google Play Store from your smartphone, search for **Cumulocity IoT Sensor App** and install the app.

### Registering the Sensor App in Cumulocity

The easiest way to register your smartphone as a new device in Cumulocity is by scanning the QR code in step 2 of the **Add Smartphone** wizard. This feature is only available for Android smartphones. 

If you are not able to scan the code or if are using an iOS smartphone, you can connect via username and password.

##### Registering using a QR code

In Cumulocity click **Next** in the **Add Smartphone** wizard to display step 2 with the second QR code which registers the smartphone in Cumulocity.

![Register phone QR](/images/users-guide/csa/csa-register-phone.png)

Your smartphone will be added to the devices list in the Device Management application, which can be accessed by navigating to **All devices** in the **Devices** menu in the navigator.

![All devices](/images/users-guide/csa/csa-device-list.png)

Moreover it will be added to the group **Phones** (which will be created if not available yet). You will find the group in the **Group** menu in the navigator. This feature is only available in case of QR code registration.

> **Info:** Until you scan the registration credentials QR code, the button will remain in the pending state showing the message “Waiting...”. Scanning the QR code will complete the registration process.

> **Important:** The registration credentials are encrypted. However, we highly recommend to use specific demo user accounts on your tenant for large public presentations. Do not use this method for production tenants or for tenants containing sensitive data.

##### Registering with username and password

1. On the start screen of the **Cumulocity IoT Sensor App**, press **Connect to Cumulocity**, to connect your device to Cumulocity.
2. In the **Account details** page of the **Cumulocity IoT Sensor App**, provide the Cumulocity tenant and instance. These can be seen in the Cumulocity URL from the browser address bar. For example the screenshot below shows the tenant and instance for a URL "mytenant.us.cumulocity.com". Press **Connect**.
<br><br>![Account details](/images/users-guide/csa/csa-ios-accountdetails-connect.png)

3. Press **Login with Software AG Cloud** or enter your username and password and press **Login**. 
<br><br>![Account details](/images/users-guide/csa/csa-ios-accountdetails-login.png)

	>**Info**: The option **Login with Software AG Cloud** is only available for subscriptions made via the Software AG Cloud portal.

4. Next, go to Cumulocity.

Your smartphone will be registered and added to the devices list in the **Device Management** application, which can be accessed by navigating to **All devices** in the **Devices** menu in the navigator.

![All devices](/images/users-guide/csa/csa-device-list.png)

For further information about registering a device on the platform manually, refer to [Connecting devices](/users-guide/device-management#device-registration) in the Device Management section.

### Viewing sensor data

Press **View sensors** to view the data from sensors on your smartphone.

The sensor data (i.e. gyroscope, location, acceleration, magnetic field and barometer data), will be shown on the smartphone.

>**Info**: On an iOS smartphone you can view sensor data without being connected to Cumulocity. Only when your phone is connected to Cumulocity the sensor data is being sent to the platform.

### Sending sensor data to Cumulocity

The measurements from the sensors of your smartphone will automatically start being sent to your Cumulocity tenant when your smartphone is connected to the platform.

The data points will be displayed in the **Phones** group on the dashboard of your smartphone device.

![map in cockpit](/images/users-guide/csa/mapincockpit2.png)

A 3D rotation widget on this dashboard will depict the data from a gyroscope sensor on your smartphone if present.

The Sensor App sends measurements to Cumulocity every 2 seconds by default. This interval can be changed in the app.

### Connecting TI Sensor Tag to the Sensor App

The **Cumulocity IoT Sensor App** connects to both TI Sensor Tag version 1.20 and 1.30 via bluetooth. 

**On an Android smartphone**

Use the **Scan devices** button in the Sensor App to connect a Sensor Tag.

![Scan devices button](/images/users-guide/csa/csa-scan-devices.png)

**On an iOS smartphone**

Press the **Add Tag** button in the Sensor App to connect a Sensor Tag.

![Add Tag](/images/users-guide/csa/csa-ios-add-tag.png)


All Sensor Tags which are discoverable are displayed. To make a Sensor Tag discoverable, press the red button next to it. The Sensor Tag will start blinking to show that it is ready to connect. It should immediately appear in the list of visible bluetooth devices in the Sensor App.

![Connect Sensor Tag](/images/users-guide/csa/csa-bluetooth.png)

Press **Connect** next to the Sensor Tag of your choice. The Bluetooth connection between the Sensor Tag and your smartphone will be established. Once the Sensor Tag is paired with your smartphone, you will see it as a record on the Sensor App’s screen:

![Sensor Tag Card](/images/users-guide/csa/csa-ticard.png)

Observing information and sensor data from the TI Sensor Tag is possible by pressing **View sensors** on its card.

![Sensor Tag Info](/images/users-guide/csa/csa-sensortag-info.png)

In your Cumulocity tenant, the data points for the Sensor Tag will be displayed on the graphs in the dashboard of your smartphone and as measurements in the Device Management application.

![Sensor tag data points](/images/users-guide/csa/sensortagdatapoints.png)

To detach the Sensor Tag from your smartphone, press **Remove** on its card.

### Device control

The **Cumulocity IoT Sensor App** can receive real-time control commands from Cumulocity. 

The Messaging widget, for example, can be used to send text notifications to the smartphone. The vibration relay control can be used to turn on/off the vibration motor. 

Create a dashboard for your smartphone device as described in [Creating a dashboard](/users-guide/cockpit#creating-dashboards) in the Cockpit section. 

Add the Messaging widget to the dashboard, for details see [Widgets collection](users-guide/cockpit/widgets). 

To send a message from Cumulocity, enter a text into the Messaging widget and click **Send**.

![message widget](/images/users-guide/csa/csa-messaging-widget.png)

The message will appear as a pop-up on the screen of your smartphone.

![Hello World Message](/images/users-guide/csa/helloworldnew.png)

If the vibration switch is turned on, the smartphone will start vibrating until the switch is turned off again.

> **Info:** The smartphone must remain connected to the platform to receive these commands. 
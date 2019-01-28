---
order: 10
title: Cloud Sensor App
layout: redirect
---

### Overview

The Cumulocity IoT Cloud Sensor App sends sensor measurements from an Android smartphone, an iOS smartphone or a Texas Instruments (TI) Sensor Tag to Cumulocity to be securely processed and managed. Additionally, all devices can be remote-controlled by Cumulocity. 

>**Info**: The TI Sensor Tag is a low energy wireless device manufactured by Texas Instruments © [http://www.ti.com/](http://www.ti.com/).

To use the Cloud Sensor App for Android you need a smartphone with Android version 5.0 or higher. 

To use the Cloud Sensor App for iOS you need a smartphone with iOS version 11.0 (or higher). 

**Info**: The screenshots are exemplarily taken from an Android smartphone. Unless mentioned otherwise the screens look similar in the Cloud Sensor App for iOS. 

### Installing the Cloud Sensor App

#### On an Android smartphone

To install the Cloud Sensor App on your Android smartphone, open the Cockpit application in your Cumulocity IoT tenant and click **Add smartphone** from the quick links on the **Welcome** screen.

![Quick Links](/guides/images/users-guide/csa-welcome.screen.png)

This will start a wizard showing the QR code for downloading the Cloud Sensor App.

![Install App](/guides/images/users-guide/csa-qr-code.png)

Scan this QR code with any scanning application on your smartphone. 

You will then be navigated to the Google Play Store for the installation of the Cloud Sensor App for Android.

#### On an iOS smartphone

To install the Cloud Sensor App on your iOS smartphone, navigate to the App Store, search for **Cumulocity IoT Sensor App** and install the app on your smartphone. 

### Registering the Cloud Sensor App to your tenant

#### On an Android smartphone

Their are two ways to register your Android smartphone as a new device in your tenant:

- Option 1: Scan a QR code with encrypted registration credentials (only available for Android smartphones)
- Option 2: Use web-based registration

The QR code registration process (option 1) uses credentials derived from the username and password of the user who is currently logged into the IoT tenant while in the web-based registration process (option 2) unique device credentials are used.

> **Info:** Just in case you want to re-register your smartphone, and you change from option 1 to option 2 (or vice versa), you first must delete the smartphone object in Device Management.

#### Registering using a QR code with credentials

Click **Next** in the Cockpit wizard to display the QR code with credentials to register your smartphone to your Cumulocity IoT tenant.

![Register phone QR](/guides/images/users-guide/csa-register-phone.png)

Your smartphone will be added to the devices list in the Device Management application, which can be accessed by navigating to **All devices** in the **Devices** menu in the navigator.

![All devices](/guides/images/users-guide/alldevices.png)

Moreover it will be added to the group “Phones” (which will be created if not available yet). You will find the group in the **Group** menu in the navigator. 

> **Info:** Until you scan the registration credentials QR code, the button will remain in the pending state showing the message “Waiting...”. Scanning the QR code will complete the registration process.

> **Important:** The registration credentials are encrypted. However, we highly recommend to use specific demo user accounts on your tenant for large public presentations. Do not use this method for production tenants or for tenants containing sensitive data.

#### Registering using web-based registration

To register your smartphone manually, follow these steps.

1. Press the **Web-based Registration** link on the Cloud Sensor App Welcome screen on your smartphone. <br>![Action bar](/guides/images/users-guide/csa-webbased.png)
2. Select the instance on which your IoT Sensor Demo tenant is hosted, e.g. cumulocity.com. <br>![Select Instance](/guides/images/users-guide/csa-select-instance.png)
3. Press the **Register device** button to start the registration. A device ID will be displayed which needs to be entered during device registration in the Cumulocity tenant. <br>![Get device ID](/guides/images/users-guide/csa-get-device-id.png)

Next, go to your Cumulocity tenant.

1. In the Device Management application, click **Registration** from the **Devices** menu, click **Register device** and in the upcoming window select **General device registration**. <br>![Register device](/guides/images/users-guide/csa-register-devices.png)<br>
2. Enter the devide ID provided by the app on your smartphone.<br>![Register device](/guides/images/users-guide/csa-enter-id.png)<br>
3. A message will show up that your device has been successfully registered. Click **Complete** to proceed. <br>![Register device](/guides/images/users-guide/csa-registration-complete.png)<br>
46. Finally, click **Accept** to complete the registration process.<br>![Accept device](/guides/images/users-guide/csa-accept-device.png)<br>

Your smartphone will be registered and added to the devices list in the Device Management application, which can be accessed by navigating to **All devices** in the **Devices** menu in the navigator.

![All devices](/guides/images/users-guide/csa-device-list.png)

Moreover it will be added to the group “Phones” (which will be created if not available yet). You will find the group in the **Group** menu in the navigator.

For further information about registering a device on the platform manually, refer to [Connecting devices](/guides/users-guide/device-management#device-registration) in the Device Management section.

In case of an Android smartphone, you need to accept several permission requests allowing for accessing data (photos, media and files) on your device, make and manage phone calls and access the location (including network information and GPS data) to let the smartphone transfer network and GPS data to the cloud. This requests only show up once.

Once your smartphone is registered, the device name, which identifies your smartphone in the platform, is displayed on the screen of the Cloud Sensor App. You may edit this name here.

![edit name](/guides/images/users-guide/csa-editname.png)


#### On an iOS smartphone

### Sending sensor data to Cumulocity

The measurements from the sensors of your smartphone will automatically start being sent to your Cumulocity tenant. You can view the data from sensors by pressing the **View sensors** button.

![phone sensors](/guides/images/users-guide/phonesensors.png)
![gps sensor](/guides/images/users-guide/gpssensor.png)
![acceleration sensor](/guides/images/users-guide/accelerationsensor.png)

The data points will also be displayed in the graphs on the **Info** tab of your smartphone device in the Device Management application.

![map in cockpit](/guides/images/users-guide/csa-info.png)

A 3D rotation widget on this dashboard will depict the data from a gyroscope sensor on your smartphone if present.

To save battery power, the Cloud Sensor App sends measurements to Cumulocity only when the data change is significant, or every 20 minutes by default. This interval can be changed in the Device Management application.

Switch to the **Configuration** tab of your device and specify the interval in milliseconds.

![configuration interval](/guides/images/users-guide/csa-configure-interval.png)

### Connecting TI Sensor Tag to the Cloud Sensor App

The Cloud Sensor App connects to both TI Sensor Tag version 1.20 and 1.30 via Bluetooth. Use the **Scan devices** button in the Cloud Sensor App to connect a Sensor Tag.

![Scan devices button](/guides/images/users-guide/csa-scan-devices.png)

All Sensor Tags which are discoverable are displayed. To make a Sensor Tag discoverable, press the red button next to it. The Sensor Tag will start blinking to show that it is ready to connect. It should immediately appear in the list of visible bluetooth devices in the Cloud Sensor App.

![Connect Sensor Tag](/guides/images/users-guide/csa-bluetooth.png)

Press **Connect** next to the Sensor Tag of your choice. The Bluetooth connection between the Sensor Tag and your smartphone will be established. Once the Sensor Tag is paired with your smartphone, you will see it as a record on the Cloud Sensor App’s screen:

![Sensor Tag Card](/guides/images/users-guide/csa-ticard.png)

Observing information and sensor data from the TI Sensor Tag is possible by pressing the **View sensors** button on its card.

![Sensor Tag Info](/guides/images/users-guide/csa-sensortag-info.png)

In your Cumulocity tenant, the data points for the Sensor Tag will be displayed on the graphs in the dashboard of your smartphone and as measurements in the Device Management application.

![Sensor tag data points](/guides/images/users-guide/sensortagdatapoints.png)

To detach the Sensor Tag from your smartphone, press the **Remove** button on its card.

### Device control

The Cloud Sensor App can receive real-time control commands from Cumulocity. 

The Messaging widget, for example, can be used to send text notifications to the smartphone. The vibration relay control can be used to turn on/off the vibration motor. 

Create a dashboard for your smartphone device as described in [Creating a dashboard](/guides/users-guide/cockpit#creating-dashboards) in the Cockpit section. 

Add the Messaging widget to the dashboard, for details see [Widgets collection](guides/users-guide/cockpit/widgets). 

To send a message from Cumulocity, enter a text into the Messaging widget and click **Send**.

![message widget](/guides/images/users-guide/csa-messaging-widget.png)

The message will appear as a pop-up on the screen of your smartphone.

![Hello World Message](/guides/images/users-guide/helloworldnew.png)

If the vibration switch is turned on, the smartphone will start vibrating until the switch is turned off again.

> **Info:** The smartphone must remain connected to the platform to receive these commands. 
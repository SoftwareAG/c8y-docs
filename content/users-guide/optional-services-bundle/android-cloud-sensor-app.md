---
weight: 10
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

To install the Cloud Sensor App on your Android smartphone, open the Cockpit application in your Cumulocity IoT tenant, expand the right drawer and click **Add smartphone** from the quick links.

![Quick Links](/images/users-guide/csa/csa-quick-links.png)

This will start a wizard showing the QR code for downloading the Cloud Sensor App.

![Install App](/images/users-guide/csa/csa-qr-code.png)

Scan this QR code with any scanning application on your smartphone. 

You will then be navigated to the Google Play Store for the installation of the Cloud Sensor App for Android.

#### On an iOS smartphone

To install the Cloud Sensor App on your iOS smartphone, navigate to the App Store, search for **Cumulocity IoT Sensor App** and install the app on your smartphone. 

### Registering the Cloud Sensor App to your tenant

#### From an Android smartphone

Their are two ways to register your Android smartphone as a new device in your tenant:

- Option 1: Scan a QR code with encrypted registration credentials (only available for Android smartphones)
- Option 2: Use web-based registration

The QR code registration process (option 1) uses credentials derived from the username and password of the user who is currently logged into the IoT tenant while in the web-based registration process (option 2) unique device credentials are used.

> **Info:** Just in case you want to re-register your smartphone, and you change from option 1 to option 2 (or vice versa), you first must delete the smartphone object in Device Management.

##### Registering using a QR code with credentials

Click **Next** in the Cockpit wizard to display the QR code with credentials to register your smartphone to your Cumulocity IoT tenant.

![Register phone QR](/images/users-guide/csa/csa-register-phone.png)

Your smartphone will be added to the devices list in the Device Management application, which can be accessed by navigating to **All devices** in the **Devices** menu in the navigator.

![All devices](/images/users-guide/csa/csa-device-list.png)

Moreover it will be added to the group “Phones” (which will be created if not available yet). You will find the group in the **Group** menu in the navigator. This feature is only available in case of QR code registration.

> **Info:** Until you scan the registration credentials QR code, the button will remain in the pending state showing the message “Waiting...”. Scanning the QR code will complete the registration process.

> **Important:** The registration credentials are encrypted. However, we highly recommend to use specific demo user accounts on your tenant for large public presentations. Do not use this method for production tenants or for tenants containing sensitive data.

##### Registering using web-based registration

To register your smartphone manually, follow these steps.

1. Press the **Web-based Registration** link on the Cloud Sensor App Welcome screen on your smartphone. <br><br>![Action bar](/images/users-guide/csa/csa-webbased.png)<br><br>
2. Select the instance on which your IoT Sensor Demo tenant is hosted, e.g. cumulocity.com. <br><br>![Select Instance](/images/users-guide/csa/csa-select-instance.png)<br><br>
3. Press **Register device** to start the registration. A device ID will be displayed which needs to be entered during device registration in the Cumulocity tenant. <br><br>![Get device ID](/images/users-guide/csa/csa-get-device-id.png)<br><br>

Next, go to your Cumulocity tenant.

1. In the Device Management application, click **Registration** from the **Devices** menu, click **Register device** and in the upcoming window select **General device registration**. <br><br>![Register device](/images/users-guide/csa/csa-register-devices.png)<br><br>
2. Enter the devide ID provided by the app on your smartphone.<br><br>![Register device](/images/users-guide/csa/csa-device-id.png)<br><br>
3. A message will show up that your device has been successfully registered. Click **Complete** to proceed. <br><br>![Register device](/images/users-guide/csa/csa-registration-complete.png)<br><br>
4. Finally, click **Accept** to complete the registration process.<br><br>![Accept device](/images/users-guide/csa/csa-accept-device.png)<br><br>

Your smartphone will be registered and added to the devices list in the Device Management application, which can be accessed by navigating to **All devices** in the **Devices** menu in the navigator.

![All devices](/images/users-guide/csa/csa-device-list.png)

For further information about registering a device on the platform manually, refer to [Connecting devices](/users-guide/device-management#connecting-devices) in the Device Management section.

Next, you need to accept several permission requests allowing for accessing data (photos, media and files) on your device, make and manage phone calls and access the location (including network information and GPS data) to let the smartphone transfer network and GPS data to the cloud. This requests only show up once.

Once your smartphone is registered, the device name, which identifies your smartphone in the platform, is displayed on the screen of the Cloud Sensor App. You may edit this name here.

![edit name](/images/users-guide/csa/csa-editname.png)


#### From an iOS smartphone

To register your iOS smartphone as a new device to the Cumulocity platform, process the following steps.

>**Info**: In case of an iOS smartphone, no QR-code-based registration is provided.

1. On the start screen of the **Cumulocity IoT Sensor App**, press **Connect to Cumulocity**, to connect your device to Cumulocity. <br><br>![Start screen](/images/users-guide/csa/csa-ios-connect.png)<br><br>
2. If you connect to Cumulocity for the first time, you need to register your device next. <br> 
In the **Account details** page of the **Cumulocity IoT Sensor App**, provide the relevant details for the Cumulocity account you want to register the device to, i.e. username and password, tenant and the instance on which your IoT Sensor Demo tenant is hosted, e.g. cumulocity.com. The instance can be selected from a drop-down list. <br><br>![Account details](/images/users-guide/csa/csa-ios-account-details.png)<br><br>
3. Press **Connect** to connect to the Cumulocity platform. <br>

Next, go to your Cumulocity tenant.

1. In the Cumulocity platform, a message will show up that your device has been successfully registered. Click **Complete** to proceed. <br><br>![Register device](/images/users-guide/csa/csa-registration-complete.png)<br><br>
2. Click **Accept** to complete the registration process.<br><br>![Accept device](/images/users-guide/csa/csa-accept-device.png)<br><br>

Your smartphone will be registered and added to the devices list in the Device Management application, which can be accessed by navigating to **All devices** in the **Devices** menu in the navigator.

![All devices](/images/users-guide/csa/csa-device-list.png)

For further information about registering a device on the platform manually, refer to [Connecting devices](/users-guide/device-management#device-registration) in the Device Management section.

Pressing the "**i**" symbol in the upper right corner of the start screen of the **Cumulocity IoT Sensor App** will open the "About" information of the application.

![About](/images/users-guide/csa/csa-ios-about.png)

### Viewing sensor data


**On an Android smartphone**

Press **View sensors** to view the data from sensors on your Android smartphone.

![View sensors](/images/users-guide/csa/csa-view-sensors.png)

The sensor data (i.e. gyroscope, location, acceleration, magnetic field and barometer data), will be shown on the smartphone.

Example 1

![GPS sensor](/images/users-guide/csa/csa-gps-sensor.png)
 
Example 2
 
![Acceleration sensor](/images/users-guide/csa/csa-acceleration-sensor.png)

**On an iOS smartphone**

Press **View sensors** to view the data from sensors on your iOS smartphone.

![View sensors](/images/users-guide/csa/csa-ios-view-sensors.png)

The sensor data (i.e. gyroscope, location, acceleration, magnetic field and barometer data), will be shown on the smartphone.

Example 1

![GPS sensor](/images/users-guide/csa/csa-ios-sensor-data.png)
 
 Example 2
 
![Acceleration sensor](/images/users-guide/csa/csa-ios-sensor-data2.png)

>**Info**: Note, that on on IoS smartphone you can view sensor data without being connected to Cumulocity. However, only on connecting your phone to Cumulocity the sensor data is being sent to the platform.

### Sending sensor data to Cumulocity

The measurements from the sensors of your smartphone will automatically start being sent to your Cumulocity tenant when your smartphone is connected to the platform.

The data points will be displayed in the graphs on the **Info** tab of your smartphone device in the Device Management application.

![map in cockpit](/images/users-guide/csa/mapincockpit.png)

A 3D rotation widget on this dashboard will depict the data from a gyroscope sensor on your smartphone if present.

To save battery power, the Cloud Sensor App sends measurements to Cumulocity only when the data change is significant, or every 20 minutes by default. This interval can be changed in the Device Management application.

Switch to the **Configuration** tab of your device and specify the interval in milliseconds.

![configuration interval](/images/users-guide/csa/csa-configure-interval.png)

### Connecting TI Sensor Tag to the Cloud Sensor App

The Cloud Sensor App connects to both TI Sensor Tag version 1.20 and 1.30 via bluetooth. 

**On an Android smartphone**

Use the **Scan devices** button in the Cloud Sensor App to connect a Sensor Tag.

![Scan devices button](/images/users-guide/csa/csa-scan-devices.png)

**On an iOS smartphone**

Press the **Add Tag** button in the Cloud Sensor App to connect a Sensor Tag.

![Add Tag](/images/users-guide/csa/csa-ios-add-tag.png)


All Sensor Tags which are discoverable are displayed. To make a Sensor Tag discoverable, press the red button next to it. The Sensor Tag will start blinking to show that it is ready to connect. It should immediately appear in the list of visible bluetooth devices in the Cloud Sensor App.

![Connect Sensor Tag](/images/users-guide/csa/csa-bluetooth.png)

Press **Connect** next to the Sensor Tag of your choice. The Bluetooth connection between the Sensor Tag and your smartphone will be established. Once the Sensor Tag is paired with your smartphone, you will see it as a record on the Cloud Sensor App’s screen:

![Sensor Tag Card](/images/users-guide/csa/csa-ticard.png)

Observing information and sensor data from the TI Sensor Tag is possible by pressing **View sensors** on its card.

![Sensor Tag Info](/images/users-guide/csa/csa-sensortag-info.png)

In your Cumulocity tenant, the data points for the Sensor Tag will be displayed on the graphs in the dashboard of your smartphone and as measurements in the Device Management application.

![Sensor tag data points](/images/users-guide/csa/sensortagdatapoints.png)

To detach the Sensor Tag from your smartphone, press **Remove** on its card.

### Device control

The Cloud Sensor App can receive real-time control commands from Cumulocity. 

The Messaging widget, for example, can be used to send text notifications to the smartphone. The vibration relay control can be used to turn on/off the vibration motor. 

Create a dashboard for your smartphone device as described in [Creating a dashboard](/users-guide/cockpit#creating-dashboards) in the Cockpit section. 

Add the Messaging widget to the dashboard, for details see [Widgets collection](/users-guide/cockpit/#widgets). 

To send a message from Cumulocity, enter a text into the Messaging widget and click **Send**.

![message widget](/images/users-guide/csa/csa-messaging-widget.png)

The message will appear as a pop-up on the screen of your smartphone.

![Hello World Message](/images/users-guide/csa/helloworldnew.png)

If the vibration switch is turned on, the smartphone will start vibrating until the switch is turned off again.

> **Info:** The smartphone must remain connected to the platform to receive these commands. 
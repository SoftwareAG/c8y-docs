---
weight: 10
title: Cumulocity IoT Sensor App
layout: redirect
---

### Overview

The Cumulocity IoT Sensor App is a free smartphone application available for iOS and Android smartphones. It is the successor of the previous Cloud Sensor App.

The app is designed to collect measurements from your smartphone and nearby Bluetooth device sensors and send them to the Cumulocity IoT platform. It has a straightforward registration workflow to get you up and running quickly and provides an easy way to get data into Cumulocity IoT.

If you are using the Cumulocity IoT free trial available via Software AG Cloud, the app ideally helps you to quickly get familiar with the platform as it provides an easy way to connect devices and sensors. Capturing data from Bluetooth devices with Cumulocity IoT moreover saves a lot of implementation effort.

Besides sending data to the platform, the Cumulocity IoT Sensor App can also send commands to the smartphone directly from the phone dashboard. Commands currently available in the dashboard include alert messages and vibration.

Supported smartphone sensors include:

*   Accelerometer and motion sensor
*   Gyroscope
*   Barometer
*   Magnetometer and compass
*   GPS location 
*   Microphone and voice

> **Info:** The app only works with sensors supported by your smartphone's hardware which provide official APIs. Depending on platform support, additional sensors may be added in future releases.

The latest list of supported Bluetooth devices is provided in the app. A button to take you to this page can be found when scanning for new devices. Currently the app supports the following devices:

*   Texas Instruments Sensor Tag
*   Acaia Lunar Scale
*   Cinco Scale
*   CirrusSense Pressure Sensor

Additional devices will be supported in the future and made available in the app.

> **Info:** The Barista.io demo demonstrates the use of connected weight and pressure sensors to brew the perfect coffee. The demo sends measurements from up to 4 connected Bluetooth devices to Cumulocity IoT in real time.

### Installing the Sensor App

To get started with the Cumulocity IoT Sensor App, download it from the Apple App Store, or Google Play Store as appropriate.

The app is compatible with Android devices running Android 5.0 or higher, and iOS devices running iOS 11.0 or higher.

Using these links from your smartphone takes you to the app's install page:

* iOS: http://onelink.to/g39r8w
* Android: https://play.google.com/store/apps/detailsid=com.softwareag.cumulocity.iotcloudsensor

Alternatively, you can open the Apple App Store or Google Play Store from your smartphone, search for **Cumulocity IoT Sensor App** and install the app.

You need a Cumulocity IoT account to send measurements to the platform.
If you don't have one yet, you can create a free trial account at [https://softwareag.cloud](https://softwareag.cloud).
Click the **Login** button at the top right of the page and follow the instructions to create a new account.
There are no limitations within a Cumulocity IoT free trial. 

> **Info:** This mobile app does not collect any personal data. The app collects only mobile phone sensor data and anonymous app usage data. If you do not agree with Software AG collecting this data, do not connect the app with Cumulocity IoT and delete it from your device.

### Registering the Sensor App in Cumulocity IoT

There are two ways of connecting your smartphone to Cumulocity IoT, depending on the platform's version.
For Cumulocity IoT versions starting with release 10.6.6, you can connect your smartphone via [QR code](#registration-using-qr-code).
For earlier versions of Cumulocity IoT, follow the steps in [Manual registration](#manual-registration).

#### Registration using QR code

1.  On a desktop or laptop computer, open a web browser and log in to your Cumulocity IoT tenant. From the Cockpit application, click **Connect Smartphone** in the right drawer or in the Welcome widget.

    ![](/images/users-guide/csa2/csa2-connect-smartphone-right-drawer.jpg)

2.  Follow the instructions in the wizard to step 3, ensuring that the app is installed on the smartphone.

    ![](/images/users-guide/csa2/csa2-connect-smartphone-wizard-step3.png)

3.  From your smartphone, launch the app and tap **Connect** in the top right corner of the screen. 
4.  Grant access to your camera if the app asks you for permission.
5.  Scan the QR code shown on your PC's web browser. If you can't scan the QR code, tap **Manual Registration** on your smartphone and fill in the details at the right side of the wizard screen.
6.  Back on your smartphone, tap **Done**. Sensor measurements are sent to the server. They can be viewed in the device's dashboard.

When using the **Connect Smartphone** wizard for device registration, your smartphone is automatically registered by Cumulocity IoT and assigned to the "Phones" group. Tap **Done** on your smartphone to return to the main screen.

> **Info:** QR codes not supported by the Cumulocity IoT Sensor App are highlighted using a red region of interest in the Camera view. QR codes from older versions of Cumulocity IoT will be scanned, but it is not possible to connect automatically. Instead, you are forwarded to the **Manual Registration** dialog with your tenant and instance pre-filled. From there you should continue with step 4 in [Manual registration](#manual-registration).

#### Manual registration

1.  On a desktop or laptop computer, open a web browser and log in to your Cumulocity IoT tenant. In the Device Management application, choose **Devices > Registration** from the navigator.

    ![](/images/users-guide/csa2/csa2-device-registration.jpg)

2.  From your smartphone, launch the app and tap **Connect** at the top right of the screen. When the camera opens, tap **Manual Registration**.

3. Back in your web browser, click **Register device** and then **General device registration**. Choose a meaningful and unique device ID for your smartphone and a group to assign your device to. Click **Next** and then **Complete**. The server will notice the pending registration and wait for your smartphone to show up.

4. On your smartphone, fill in your tenant (e.g. "companytenant01"), select your instance (e.g. "cumulocity.com"), and enter your chosen device ID. If your instance is not available in the list, you can enter it manually after clicking **Add other instance**. Click **Connect** and your device will contact the server and ask to be accepted.

    ![](/images/users-guide/csa2/csa2-manual-registration-smartphone.png) 

5.  Back on your web browser, your device's card now shows the options to accept or reject the connection. Accept the connection. Your device will be registered with the server and assigned to the chosen group.

6.  Back on your smartphone, tap **Done**. Sensor measurements are sent to the server. They can be viewed in the device's dashboard.

> **Info:** If you do not accept the device request within the required time, an according message shows up. Choose **Retry** to continue with the registration process. 

For further information about registering a device on the platform manually, refer to [Device Management > Connecting devices](/users-guide/device-management/#connecting-devices).

If you want to disconnect from Cumulocity IoT, tap **Disconnect** in the top right corner of the screen and approve the confirmation dialog. After that you can connect to the same or any other Cumulocity IoT instance or tenant.

### Sending sensor data to Cumulocity IoT

Measurements from your smartphone and connected Bluetooth sensors are sent to Cumulocity IoT automatically as soon as the device is connected or started and as long as the app is in foreground. All measurements of the smartphone sensors are displayed automatically in the device dashboard in Cumulocity IoT.

![](/images/users-guide/csa2/csa2-device-dashboard.jpg)

Various widgets may be used to display the data points. If your smartphone has a gyroscope sensor, a 3D rotation widget depicts the current sensor data for your smartphone's orientation.

The app sends sensor data to Cumulocity IoT at regular intervals.
By default, the interval is 2 seconds. This interval can be configured from the app itself for the accelerometer, location, and other sensors.

Tap the 3 vertical dots on a sensor's card, then **Edit** or drag the page up from the bottom to reveal additional settings.

Every time a measurement is sent to Cumulocity IoT the pulse indicator in front of the device name will animate.

Using device details, it is also possible to disable sending measurements for the device. The sensor measurements is still displayed, but not sent to Cumulocity IoT. When disabled, the pulse indicator is shown as "striked through".

### Viewing sensor data

You can find an overview of all sensor data on the main page of the app.
Your smartphone's internal sensors, such as its gyroscope, barometer, location and magnetic field, are shown in cards at the top of the page.
Swipe left and right to inspect them.

Some sensors are only available if the permission is granted (e.g. microphone) and the sensor is enabled (e.g. location). Tap **Allow** in the first sensor card to grant these permissions or enable the sensors.

![](/images/users-guide/csa2/csa2-application-main-page.png)

Some supported Bluetooth devices provide more than one sensor.
In these cases, the card for this device also reacts to left and right swipes, changing the sensor that is displayed.

> **Info:** Your smartphone allows you to view sensor data without being connected to Cumulocity IoT. Ensure that your smartphone is connected to Cumulocity IoT when you wish to have sensor data sent to the server.

Tap a card to show some sensor details, including when the last measurement was last updated.

Most sensors provide new measurements within a second. Others, such as location, might provide updates only on a significant change. Use the update time to find out if measurements are received.

### Connecting new Bluetooth devices to the Sensor App

The Cumulocity IoT Sensor App connects to a range of Bluetooth sensor devices.
Additional devices will be added in the future.

To connect a device, click the plus button at the bottom right of the screen.
If Bluetooth is enabled and all required permissions are granted, your smartphone starts scanning for any new supported Bluetooth devices in the area that are not already paired.
New devices will be added to the list as the smartphone discovers them.

![](/images/users-guide/csa2/csa2-available-bluetooth-devices.png)

> **Info:** If there are no supported devices in range, there is an option to see a list of all currently supported device types.

Ensure that the device you wish to connect to is switched on and in pairing mode. For most devices, this automatically happens when they are switched on and not paired with any other device. Refer to the manufacturer's instructions if you are unsure.

Bring the device close to your smartphone, 30cm or less is ideal.

When the Bluetooth device appears in the list, tap **Pair Device** to start pairing. The Bluetooth device will then be connected to your smartphone and start sending data to Cumulocity IoT if you are currently connected.

### Configuring, disabling or removing devices

If you want to make changes to the settings of the smartphone or a connected Bluetooth device, simply tap the 3 dots at the top right of the card for this device. Various options will be displayed at bottom of the screen. For Bluetooth devices, the options **Disconnect**, **Disable** and **Edit** are available. The smartphone itself only has the **Disable** and **Edit** options. 

![](/images/users-guide/csa2/csa2-device-options.png)

Tapping **Disconnect** removes a Bluetooth device from your smartphone entirely.

Tapping **Disable** still allows the smartphone to monitor measurements from this device, but stops sending sensor measurements to Cumulocity IoT.

Tapping **Edit**, or swiping upwards, reveals further settings that allow you to adjust various properties about this sensor, such as its name and update intervals.

> **Info:** Smaller update intervals provide better response times and more complete measurement data, but also lead to higher power usage.

### Device control

The Cumulocity IoT Sensor App can receive real-time control commands from Cumulocity IoT.

You can create a dashboard for your smartphone device as described in [Cockpit > Dashboards](/users-guide/cockpit/#dashboards).

For details on how to add new widgets to the dashboard, see [Cockpit > Widgets collection](/users-guide/cockpit/#widgets).

The "Message sending" widget can be used to send simple text notifications to a smartphone. Simply enter the required text into the widget and click **Send**. The message will appear as a pop-up alert on the device.

The "Vibration" widget can be used to activate and deactivate the vibration motor on the device. When the vibration switch is activated, the smartphone continuously vibrates until it is switched off again.

![](/images/users-guide/csa2/csa2-messaging-and-vibration-widget.jpg)

> **Info:** The smartphone must remain connected to Cumulocity IoT to receive these commands. On the device's own dashboard, online devices are shown with a green map-marker. You can also determine if the device is connected in the Device Management application. On the **All Devices** page two green arrows indicate that a device is online. Moreover, the individual device info pages contain a "Device status" widget.

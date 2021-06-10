---
weight: 10
title: Cumulocity IoT Sensor App
layout: redirect
aliases:
  - /users-guide/cumulocity-sensor-app/
---

### Overview

The Cumulocity IoT Sensor App is a free smartphone application available for iOS and Android smartphones and the successor of the Cloud Sensor App.

The app is designed to collect measurements from your smartphone, nearby Bluetooth device sensors, and vehicle On-board Debug (OBD) sensors, and send them to the Cumulocity IoT platform.
It has a straightforward registration workflow to get you up and running quickly and provides an easy way to get data into Cumulocity IoT.

If you are using the Cumulocity IoT free trial available via Software AG Cloud, the app ideally helps you to quickly get familiar with the platform as it provides an easy way to connect devices and sensors.
Capturing data from Bluetooth devices with Cumulocity IoT moreover saves a lot of implementation effort.

Besides sending data to the platform, the Cumulocity IoT Sensor App can also send commands to the smartphone directly from the phone dashboard.
Commands currently available in the dashboard include alert messages and vibration.

Supported smartphone sensors include:

*   Accelerometer and motion sensor
*   Gyroscope
*   Barometer
*   Magnetometer and compass
*   GPS location 
*   Microphone and voice
*   WiFi strength (selected Android devices only)

> **Info:** The application only works with sensors supported by your smartphone's hardware which provides official APIs. Depending on platform support, additional sensors may be added in future releases.

The latest list of supported Bluetooth devices can be found inside the application.
A button to take you to this page can be found when scanning for new devices.
At the time of writing, the application supports the following devices:

*   Texas Instruments Sensor Tag
*   Acaia Lunar Scale
*   Cinco Scale
*   CirrusSense Pressure Sensor

More devices will be supported in the future and made available within the application.

> **Info:** The Barista.io demo demonstrates the use of connected weight and pressure sensors to brew the perfect coffee. The demo sends measurements from up to 4 connected Bluetooth devices to Cumulocity IoT in real time.

Reading vehicle sensors comes with the use of an additional OBD dongle, which exposes the vehicles sensors to the phone via WiFi or Bluetooth (Note: iOS is WiFi only). There are two supported diagnostic connectors, both based on the ELM327 microcontroller:

* Kungfuren OBD2 Diagnostic Device Bluetooth 4.0 Adapter
* Kungfuren OBD2 Reader WiFi Adapter

### Installing the Sensor App

To get started with the Cumulocity IoT Sensor App, download it from the the Apple App Store, or Google Play Store as appropriate.
The application is compatible with Android devices running Android 5.0 or higher, and iOS devices running iOS 11.0 or higher.
Using these links from your smartphone will take you to the application's install page: [iOS](http://onelink.to/g39r8w) and [Android](https://play.google.com/store/apps/details?id=com.softwareag.cumulocity.iotcloudsensor).

It is also possible to open the Apple App Store or Google Play Store application directly on your smartphone and search for "Cumulocity IoT Sensor App".

You need a Cumulocity IoT account to send measurements to the platform.
If you don't have one yet, you can create a free trial account at [https://softwareag.cloud](https://softwareag.cloud).
Click the **Login** button at the top right of the page and follow the instructions to create a new account.
There are no limitations within a Cumulocity IoT free trial. 

> **Info:** This mobile application does not collect any personal data. The application collects only mobile phone sensor data and anonymous app usage data. If you do not agree with Software AG collecting this data, please do not connect the application with Cumulocity IoT and delete it from your device.

### Registering the Sensor App in Cumulocity IoT

There are two ways of connecting your smartphone to Cumulocity IoT which depend on the platform's version.
For Cumulocity IoT versions starting with release 10.6.6, you can connect your smartphone via [QR code](#registration-using-qr-code).
For earlier versions of Cumulocity IoT, follow the steps in [Manual registration](#manual-registration).

#### Registration using QR Code

1.  Using a desktop or laptop computer, open a web browser and log in to your Cumulocity IoT tenant. From the Cockpit application, click **Connect Smartphone** in the right drawer.

    ![](/images/users-guide/csa2/csa2-connect-smartphone-right-drawer.jpg)

2.  Follow the instructions in the wizard to step 3, ensuring that the app is installed on the smartphone.

    ![](/images/users-guide/csa2/csa2-connect-smartphone-wizard-step3.png)

3.  From your smartphone, launch the app and tap **Connect** in the top right corner of the screen. 
4.  Grant access to your camera if the app asks you for permission.
5.  Scan the QR code shown on your PC's web browser. If you can't scan the QR code, tap **Manual Registration** on your smartphone and fill in the details on the right side of the wizard screen.
6.  Back on your smartphone, tap **Done**. Sensor measurements will be sent to the server. They can be viewed in the device's dashboard.

When using the **Connect Smartphone** Wizard for device registration, your smartphone will be automatically registered by Cumulocity IoT and assigned to the "Phones" group. Tap **Done** on your smartphone to return to the main screen.

> **Info:** QR codes not supported by the Cumulocity IoT Sensor App will be highlighted using a red region of interest in the Camera view. QR codes from older versions of Cumulocity IoT will be scanned, but it is not possible to connect automatically. Instead, you will be forwarded to the **Manual Registration** dialog with your tenant and instance pre-filled. From there you should continue with step 4 in [Manual Registration](#manual-registration).

#### Manual Registration

1.  Using a desktop or laptop computer, open a web browser and log in to your Cumulocity IoT tenant. In the Device Management application, choose **Devices > Registration** from the navigator.

    ![](/images/users-guide/csa2/csa2-device-registration.jpg)

2.  From your smartphone, launch the app and tap **Connect** at the top right of the screen. When the camera opens, tap **Manual Registration**.

3. Back in your web browser, click **Register Device** and then **General Device Registration**. Choose a meaningful and unique device ID for your smartphone and a group to assign your device to. Click **Next** and then **Complete**. The server will notice the pending registration and wait for your smartphone to show up.

4. On your smartphone, fill in your tenant (e.g. "companytenant01"), select your instance (e.g. "cumulocity.com"), and enter your chosen device ID. If your instance is not available in the list, you can enter it manually after clicking **Add other instance**. Click **Connect** and your device will contact the server and ask to be accepted.

    ![](/images/users-guide/csa2/csa2-manual-registration-smartphone.png) 

5.  Back on your web browser, your device's card will now change to have the options to accept or reject the connection. Accept the connection. Your device will then be registered with the server and assigned to the chosen group.

6.  Back on your smartphone, tap **Done**. Sensor measurements will be sent to the server. They can be viewed in the device's dashboard.

> **Info:** If you cannot manage to accept the device request within the required time, a small dialog window will notify you of this. Choose **Retry** to continue with the registration process. You can retry and take as much time as you need.

For further information about registering a device on the platform manually, refer to [Connecting devices](https://cumulocity.com/guides/users-guide/device-management/#connecting-devices) in the Device Management section.

If you want to disconnect from Cumulocity IoT, tap **Disconnect** in the top right corner of the screen and approve the confirmation dialog.
After that you can connect to the same or any other Cumulocity IoT instance or tenant.

### Sending sensor data to Cumulocity IoT

Measurements from your smartphone, OBD devices and connected Bluetooth sensors will be sent to Cumulocity IoT automatically when you're connected.
This happens automatically as soon the device is connected or started and as long as the app is in foreground.
All measurements of the smartphone sensors will be displayed automatically in the device dashboard in Cumulocity IoT.

![](/images/users-guide/csa2/csa2-device-dashboard.jpg)

Different widgets may be used to display the data points.
If your smartphone has a gyroscope sensor, a 3D rotation widget will depict the current sensor data for your smartphone's orientation.

The application will send sensor data to Cumulocity IoT at regular intervals.
By default, this will be every 2 seconds.
This interval can be configured from the application itself for the accelerometer, location, and other sensors.

Tap the 3 vertical dots on a sensor's card, then **Edit** or drag the page up from the bottom to reveal additional settings.

Every time a measurement is sent to Cumulocity IoT the Pulse indicator in front of the device name will animate.

Using device details, it is also possible to disable sending measurements for the device.
The sensor measurements will still be displayed, but not sent to Cumulocity IoT.
When disabled, the Pulse indicator is shown as "striked through".

### Viewing sensor data

Find an overview of all sensor data on the main page of the application.
Your smartphone's internal sensors, such as its gyroscope, barometer, location and magnetic field, will be shown in cards at the top of the page.
Swipe left and right to inspect them.
Some sensors are only available if the permission is granted (e.g. microphone) and the sensor is enabled (e.g. location).
Tap **Allow** in the first sensor card to grant those permissions or enable the sensors.
Some supported Bluetooth devices will provide more than one sensor.
In those cases, the card for that device will also react to left and right swipes, changing the sensor that is displayed.

![](/images/users-guide/csa2/csa2-application-main-page.png)

For a more detailed view of any sensor's data, tap the card to go to the detailed graphs page.

> **Info:** Your smartphone will allow you to view sensor data without being connected to Cumulocity IoT. Ensure that your smartphone is connected to Cumulocity IoT when you wish to have sensor data sent to the server.

Selecting a card opens the sensor details with a few more details, including when the last measurement was last updated.
Most sensors provide new measurements within a second. Others, such as location, might provide updates only with a significant change.
Use the update time to find out if measurements are received.

### Connecting new Bluetooth devices to the Sensor App

The Cumulocity IoT Sensor App connects to a range of Bluetooth sensor devices.
Additional devices will be added in the future.

To connect a device, click the plus button at the bottom right of the screen.
If Bluetooth is enabled and all required permissions are granted, your smartphone will now start scanning for any new supported Bluetooth devices in the area that are not already paired.
New devices will be added to the list as the smartphone discovers them.

![](/images/users-guide/csa2/csa2-available-bluetooth-devices.png)

> **Info:** If there are no supported devices in range, there is an option to see a list of all currently supported device types.

Ensure that the device you wish to connect to is switched on and in pairing mode.
For most devices, this will happen automatically when they are switched on and not paired with any other device.
Refer to the manufacturer's instructions if you are unsure.

Bring the device close to your smartphone, 30cm or less is ideal.

When the Bluetooth device appears in the list, tap **Pair Device** to start pairing.
The Bluetooth device will then be connected to your smartphone and start sending data to Cumulocity IoT if you are currently connected.

### Connecting new OBD devices to the Sensor App

Connections to OBD devices work in a slightly different way than normal Bluetooth sensors. They must be connected to the phone directly before the device can be added to the Sensor App.


In case of WiFi based OBD devices, the procedure is as follows:


* Plug the OBD dongle into the vehicle's diagnostic port. Ensure that the power LED is illuminated.
* On the phone, navigate to the WiFi settings in the Settings application.
* Search for new networks, and join the "WiFi_OBDII" network (or other name as specified in the device's documentation), to pair directly with the dongle.
* If a password is required to do this, refer to your device's documentation.
* Once the device is connected, return to the Sensor App, and click the plus ("+") button at the bottom right of the screen.
* The OBD device should then become available in the list of available devices and can be added as any other Bluetooth sensor.

For Bluetooth-based OBD devices, the device must be paired with the phone before the Sensor App will recognize it:

* Plug the OBD dongle into the vehicle's diagnostic port. Ensure that the power LED is illuminated.
* On the phone, navigate to the WiFi settings in the Settings application.
* Scan for new Bluetooth devices and connect to the device named "ODBII" (or other name as specified in the device's documentation).
* The pairing process will ask for a PIN, consult your device's documentation to find this value.
* Once the device is connected, return to the Sensor App, and click the plus ("+") button in the bottom right of the screen.
* The OBD device should then become available in the list of available devices and can be added as any other Bluetooth sensor.

### Configuring, disabling or removing devices

If you wish to make changes to the smartphone's or a connected Bluetooth device's settings, simply tap the 3 dots at the top right of the card for that device.
A new view will pop up from the bottom of the screen.
For Bluetooth devices, there are the options **Disconnect**, **Disable** and **Edit**.
The smartphone itself will only have **Disable** and **Edit** options. 

![](/images/users-guide/csa2/csa2-device-options.png)

Tapping **Disconnect** will remove a Bluetooth device from your smartphone entirely.

Tapping **Disable** will still allow the smartphone to monitor measurements from this device, but will stop sending sensor measurements Cumulocity IoT.

Tapping **Edit**, or swiping upwards, will reveal further settings that allow you to adjust various properties about this sensor, such as its name and update intervals.

> **Info:** Smaller update intervals will give better response times and more complete measurement data, but will also lead to higher power usage.

### Adjusting sensor properties

When editing sensor properties, it is possible to change the following settings:


* The interval in seconds between measurements sent to Cumulocity IoT.
* The minimum and maximum thresholds for data values to be sent.
* The size and number of simulated peak values to be sent.

The update interval determines how often the sensor is queried by the phone, as well as how often data is sent to Cumulocity IoT. Altering the value here will also affect the speed at which charts are redrawn in the application. The minimum value for the update interval is 0.1 seconds. Note that at shorter update intervals, both the sensor device and the phone itself will consume more power.

Minimum and maximum thresholds affect the handling of the incoming data. By default, both the minimum and maximum values are infinite - that is, any recorded value from the sensor will be sent directly to Cumulocity IoT. You can drag the slider to adjust these values, or type new values directly into the text boxes at each end of the slider. To change the slider between adjusting minimum and maximum values on iOS, tap in the text box on the respective side. Although there is a recommended range for sensor measurements, it is possible to type values outside of this range if desired.

To return to unlimited values, simply drag the slider all the way to the end of the range again.

With non-infinite minimum or maximum threshold values configured, measurements sent to Cumulocity IoT will be capped to the minimum and maximum threshold values. No measurement values outside the threshold will be sent to Cumulocity IoT.

Simulated peaks can be useful for sending data values outside of the expected range on demand. These can be used for testing rules, alarms and other such functionality in a controlled and repeatable manner. The application allows you to specify the peak value to be used, as well as the number of times the sensor will be simulated at that value.

![Sensor properties](/images/users-guide/csa/csa-sensor-properties.png)

### Simulating peaks and sending alarms and events

![Sensor buttons](/images/users-guide/csa/csa-sensor-buttons.png)

In order to simulate peak values, tap the 3rd button on the card for that sensor. The application will ask if you wish to start simulating peak values. Select **Simulate** to begin. If the phone is connected to Cumulocity IoT, then it will send these values to the platform instead of the measurements coming from the selected sensor.

Sending alarms and events requires the phone to be connected to Cumulocity IoT. If the device is not connected, the icons are greyed out. Tap the bell icon to send an alarm.

![Alarm dialog](/images/users-guide/csa/csa-alarm-dialog.png)

This will open a dialog in which you can select the alarm text, its type, and its severity. Tap **Create** to generate the alarm and send it to the Cumulocity IoT platform.

To generate an event, tap the 2nd button on the card for that sensor.

![Event dialog](/images/users-guide/csa/csa-event-dialog.png)

This will open a dialog where the user can set the event text and type. Tap **Create** to generate the event and send it to Cumulocity IoT platform.

### Device control

The Cumulocity IoT Sensor App can receive real-time control commands from Cumulocity IoT.

You can create a dashboard for your smartphone device as described in [Creating a dashboard](https://cumulocity.com/guides/users-guide/cockpit/#dashboards) in the Cockpit section.

To add the new widgets to the dashboard, see [Widgets collection](https://cumulocity.com/guides/users-guide/cockpit/#widgets).

The Messaging widget can be used to send simple text notifications to a smartphone.
Simply enter the required text into the widget and click **Send**. The message will appear as a pop-up alert on the device.

![](/images/users-guide/csa2/csa2-messaging-and-vibration-widget.jpg)

The Vibration widget can be used to activate and deactivate the vibration motor on the device.
When the vibration switch is activated, the smartphone will continuously vibrate until it is switched off again.

> **Info:** The smartphone must remain connected to Cumulocity IoT to receive these commands. From the device's own dashboard, online devices will be shown with a green map-marker. You can also determine if the device is connected using the Device Management section. The "All Devices" page will show online devices with two green arrows, and the individual device info pages contain a Device Status widget.

---
weight: 20
title: Mbed u-blox C027
layout: bundle
---


### Overview

The [u-blox C027](https://mbed.org/platforms/u-blox-C027/ "u-blox C027") is a starter kit that allows quick prototyping of a variety of applications for the Internet of Things. The device comes with a cellular module as well as a GPS/GNSS receiver. These enable straightforward development of applications with location-aware communication capability.

![u-blox C027](/images/device-demos/ublox/ublox_c027.png)

For demonstration purposes, the [mbed application shield](http://mbed.org/components/mbed-Application-Shield/) can be attached to the C027. It provides various sensors, two dials and an LCD display.

![mbed application shield](/images/device-demos/ublox/ublox_applicationshield.jpg)

The {{< product-c8y-iot >}} mbed agent connects the C027 application board to {{< product-c8y-iot >}} and provides the following features:

* Network dial-up using the C027 modem.
* Efficient communication through [SmartREST](/microservice-sdk/rest#smartrest).
* Full auto-registration using {{< product-c8y-iot >}}'s bootstrap and device registration.
* Collection and storage of temperature, GPS, accelerometer and analog sensor readings.
* Remote control of the device LEDs and LCD display from {{< product-c8y-iot >}}.
* Status monitoring using the LCD display of the application shield.

#### Prerequisites

To run the {{< product-c8y-iot >}} mbed agent, the following items are required:

* [u-blox C027](https://mbed.org/platforms/u-blox-C027/) Internet of Things starter kit, 2G or 3G version.
* [mbed appliation shield](https://mbed.org/components/mbed-Application-Shield/).
* A USB type A to type B adapter.
* A power supply.
* A SIM card with data plan for internet access. The SIM card should have no SIM PIN. The SIM PIN can be deactivated using any mobile phone.
* You need access to the {{< product-c8y-iot >}} platform. If you do not have access yet, try {{< product-c8y-iot >}} for free. Go to [{{< sag-cloud >}} > {{< product-c8y-iot >}}]({{< cloud-link >}}) and select "Try for free".

### Setting up and registering the device

#### To get started

1. Insert the SIM card into the SIM slot on the backside of the u-blox C027.
2. Attach the cellular antenna to the board.
3. For GPS/GNSS capabilities, attach the GPS antenna to the board.
4. Attach the mbed application shield to the C027.
5. Connect a USB cable to the C027 and to your computer. The C027 will appear as "MBED" drive on your computer.
6. Plug in the power supply and connect it to the application board.

{{< c8y-admon-info >}}
The device cannot be flashed without the power supply connected.
{{< /c8y-admon-info >}}

Further information is available on [https://os.mbed.com/users/ublox/notebook/u-blox-C027-Getting-Started/](https://os.mbed.com/users/ublox/notebook/u-blox-C027-Getting-Started/) and [https://os.mbed.com/users/ublox/notebook/u-blox-C027-Downloading/](https://os.mbed.com/users/ublox/notebook/u-blox-C027-Downloading/).

#### To install the agent

<!--
Comment ALC: The links to the firmware are no longer correct. I can't find any of such files. Perhaps this is worth a ticket?
-->

1. Download the firmware to your file system, see table below.
2. Copy the downloaded file to the "MBED" drive.
3. Press the reset button on the C027 to start the agent.

| Version | Release date | Download |
| --- | --- | --- |
| 1.9 | 18. Feb 2015 | [download](/images/device-demos/ublox/firmware-1.9.bin)     |
| 2.0 | 06. Mar 2015 | [download](/images/device-demos/ublox/firmware-2.0c8y.bin)  |
| 2.2 | 10. Aug 2015 | [download](/images/device-demos/ublox/firmware-2.2c8y.bin)  |

<a id="Connecting_the_C027"></a>
#### To register the device to the platform

1. The C027 will now dial up to the internet. You will see the status "updated" in the LCD display. If the device cannot connect to the internet, it will display an error message. If there is an error message "Wrong APN setting" or "Unknown APN setting", follow the instructions below in the section [Troubleshooting](#Troubleshooting).
2. On successful connection for the first time, the device shows "Bootstrapping" and below the IMEI of the cellular modem on the LCD display.
  **Info**: The IMEI can also be found on the white sticker on the modem chip of the C027.
3. Log into the {{< product-c8y-iot >}} platform.
4. Navigate to the Device Management application using the application switcher at the top right.
5. To register the device follow the instructions in [Device Management > Connecting devices](/users-guide/device-management/#connecting-devices) in the *User guide*.
6. After successful registration the device will be listed in **All devices** with the name "Mbed Test Device".
7. When the device is connected to {{< product-c8y-iot >}}, it will show its current status in the LCD display. The first line always displays the tenant name (until there is a message received from the platform, see the section [To interact with control operations](#Interacting_with_the_control_operations)). The second line shows the signal quality in units of dBm. The third line displays information about which sensor data the u-blox is sending and their corresponding values. In the case of repeatedly sending similar data, the third line remains empty.

### Interacting with the platform

The device is now connected to {{< product-c8y-iot >}} and sends sensor data periodically. You can now browse and process the collected data in the cloud in various ways.

#### To view measurements

1. In the Device Management application, click **Devices > All Devices** in the navigator and then select the "Mbed Test Device" from the device list.
2. In the **Measurements** tab of the device, you can browse the collected sensor data:

![Measurement Screenshot](/images/device-demos/ublox/ublox_measurements.png)

The device sends new sensor data only when the sensor values are changing. If the values remain constant, no new values are sent except for a forced sending every 15 minutes in order to retain connectivity with the platform.

#### To create a dashboard

The representation of sensor data can be customized.

1. Add the "Mbed Test Device" to a group, see [Grouping devices](/users-guide/device-management/#grouping-devices) for details.
2. Switch to the Cockpit application using the application switcher and then navigate to **Groups > \<Your New Group>** where you will find the "Mbed Test Device".  
3. To create a new dashboard, click the **Plus** button in the top bar and from the context menu select **Add dashboard**.

The new dashboard will appear in the top menu bar.

You can set up the dashboard according to your requirements. Using **Add widget** provides access to numerous predefined widgets.

Try the following examples:

##### Relay

In the "Relay control" widget, switch the toggle to turn the LED on or off.


##### Send Message

In the "Message sending" widget, enter a message in the text field, and then click **Send**. After several seconds, the first line of the LCD display should display the message you sent. This message will be displayed in the first line until you send another message or restart the device.

An example dashboard created for an mbed device is shown below:

![Dashboard Screenshot](/images/device-demos/ublox/ublox_dashboard.png)

For details refer to [Dashboards](/users-guide/cockpit/#dashboards) and [Widgets collection](/users-guide/cockpit/#widgets-collection) in the *User guide*.

<a id="Interacting_with_the_control_operations"></a>
#### To interact with control operations

1. In the Device Management application, click **Devices > All Devices** in the navigator and select the "Mbed Test Device" from the device list.
2. In the **Configuration** tab of the device, the supported configuration parameters are shown with their current values. Currently for the mbed u-blox, the only parameter is "interval" with the default value of 20 minutes, which determines the time period at which {{< product-c8y-iot >}} will check the availability of the device. It must be set to the same value as in the **Required interval** in the **Info** tab.

![Interval Screenshot](/images/device-demos/ublox/ublox_interval.png)


### Tips and tricks for users

#### Force sending sensor data

Subject to the sensitivity threshold, you may not see frequent sending of sensor data because similar sensor readings are not sent. This effect is especially noticeable for the temperature sensor. However, it is possible to trigger an immediate sensor data sending by manually imposing a change to the sensor readings.

* For *temperature* sensor: Place one finger atop the temperature sensor, which is located in the top middle of the u-blox device, above the text "Temperature LM7580". You should immediately see its effect on the LCD display updating its status to send a temperature reading.
* For *acceleration* sensor: Simply turn aside or rotate the device. You should immediately see the device sending an acceleration reading on its LCD display.
* For *analog* sensor: Turn right or left the two blue knobs below the LCD display. You should immediately see the device sending analog readings on its LCD display.
* For *GPS* receiver: Simply move around the GPS receiver. You should immediately see the device sending GPS readings on its LCD display.

#### Performing a factory reset

When a u-blox device is already registered under a certain tenant, a factory reset must be performed to remove the stored credentials so that the device can be re-registered again. The factory reset is performed as follows:

* Press and hold the joystick when (re)starting an already registered device.
* Prior to 2.1, after the LCD display shows "Join Network" and the device is correctly joined to the network, you should see "Reset Success" shown on the LCD display, which indicates a successful factory reset. Starting from version 2.1, a factory reset is much faster, simply wait for "Factory resetting" to appear on the screen, and you can release your finger. After about 2 seconds, you should see "Reset Success" on the display.
* Now restart the u-blox device and follow the instructions described in section [To register the device to {{< product-c8y-iot >}}](#Connecting_the_C027) to register the device again under your tenant.


### Tips and tricks for developers

<a id="Enabling_debug_ mode"></a>
#### Enabling debug mode

By default, the agent runs in production mode, which does not write any information to the serial port. You can enable the debug mode to see a detailed log of the agent running. Prior to version 2.1, in order to enable debug mode, you can either push up the joystick before starting the agent, or at any time after the agent is *connected* to the cloud and running. Starting from version 2.1, simply push up the joystick at any time to enable the debug mode.

The debug information is printed to the serial port of the device. To view its content, see https://os.mbed.com/handbook/SerialPC for details.

>   **Info** (applies only to versions prior to 2.1.): Because the agent only reads the state of the joystick once per several seconds, you may need to push up the joystick and hold it for several seconds to switch on/off debug mode.  

> When the agent is running in debug mode, many operations will be slowed down by a factor of 2 to 3 because of the large amount of I/O operations. If you want to disable the debug mode and switch back to express mode, simply push down the joystick and hold for several seconds (no holding is required starting from version 2.1).

#### Changing the agent source code

If you want to change the behaviour of the agent, go to mbed.org and adopt the source code. Here are the steps required to do so:

1. Sign up for an account in [mbed](https://mbed.org) for free.
2. Log into the mbed.org site and visit the [C027 page](https://mbed.org/platforms/u-blox-C027/). Click **Add to your mbed Compiler**.
3. Visit <a href="http://mbed.org/users/Cumulocity/code/MbedSmartRestMain/">Cumulocity MbedSmartRESTMain application</a> and click **Import into Compiler** to import the agent into your online Mbed IDE.
4. In the IDE, click **Compile**. The IDE will download the compiled application to your file system.
5. Copy the downloaded file to the "MBED" drive.
6. Press the reset button on the C027 to start the agent.

#### Changing the reporting interval in the source code

By default the reporting intervals for all sensor values are 15 minutes. You can change the reporting intervals by changing the defined corresponding macros in the source code (all units in second):

* `measurement/AccelerationMeasurement.cpp`: TIME_LIMIT_ACCE
* `measurement/AnalogMeasurement.cpp`: TIME_LIMIT_ANA
* `measurement/LocationUpdate.cpp`: TIME_LIMIT_LOC
* `measurement/SignalQualityMeasurement.cpp`: TIME_LIMIT_SIG
* `measurement/Temperature.cpp`: TIME_LIMIT_TEMP

#### Changing the reporting sensitivity threshold in the source code

Due to the jittering nature of the sensor readings, there is a threshold set for all sensor values to avoid constantly reporting false positive sensor reading changes. As the sensitivity of the sensors varies, the thresholds for different sensors vary. These thresholds are defined as a fraction of the last reported sensor values and you can also change them in the corresponding source file (all in real fraction numbers):

* `measurement/AccelerationMeasurement.cpp`: THRESHOLD_PERCENT_ACCE [default: 0.1]
* `measurement/AnalogMeasurement.cpp`: THRESHOLD_PERCENT_ANA [default: 0.02]
* `measurement/LocationUpdate.cpp`: THRESHOLD_PERCENT_LOC [default: 0.05]
* `measurement/SignalQualityMeasurement.cpp`: THRESHOLD_PERCENT_SIG [default: 0.06]
* `measurement/Temperature.cpp`: THRESHOLD_PERCENT_TEMP [default: 0.02]

<a id="Troubleshooting"></a>
### Troubleshooting

* **The device freezes or resets when booting up**: This is commonly an issue originated from a bad power connection. Unplug and plug in your power connector again and make sure the connection is firm and stable.

* **"Modem Init Failure", "No SIM card found", or "SIM has PIN code"**: Make sure you inserted the SIM card in the right direction and side. Verify that the SIM card holder is locked so that the SIM card has good contact to the device. If the SIM card has a PIN code, remove the PIN code (for example using a mobile phone).

* **GPS Init Failure**: Sometimes the agent is unable to initialize the GPS unit. Simply restart the device to resolve the issue. Note that the GPS initialization process works without an actual GPS receiver. It is therefore usually not necessary to actually attach the GPS receiver to resolve this problem.

* **My GPS does not work**: This problem originates from a different data format returned by a new GPS model. Support for this new data format has been added as of version 2.2. If your GPS function does not work, download the latest firmware from the link above and follow the instructions to flash the firmware.

* **No Network Coverage**: Make sure you have the modem antenna correctly mounted to the "WL\_INT" connector, otherwise the device will not be able to connect to a network.

* **Agent Init Failure**: To troubleshoot this issue, we recommend you to connect the device to your computer and enable debug mode to collect more information via a serial port. See the section [Enabling debug mode](#Enabling_debug_ mode).

* **Integration/Config Failure** and **Integrate Failure**: This error occurs when you attempt to connect to a server that has not been set in the firmware. Perform a factory reset and register the device again. If this doesn't solve the problem then it's likely to be a server-side issue. Contact your network administrator if you are connecting to your own Cloud instance or contact [product support](/welcome/contacting-support/) if you are connecting directly to {{< product-c8y-iot >}}.

* **The device failed to join a network and displays "Wrong APN setting" or "Unknown APN setting"**: Review the source code file _C027_Support/MDMAPN.h_ and add an entry with the Mobile Country Code (MCC), Mobile Network Code (MNC) and your APN setting. The current MMC and MNC code should be shown on the LCD display below the error message "Wrong APN setting" or "Unknown APN setting".

* **The device does not appear as CONNECTED in the device registration process**: Review the application output using a serial console. See https://os.mbed.com/handbook/SerialPC for details. Also make sure you flashed the device with the correct firmware version, that is, the one that performs the bootstrap against the correct server.

* **The device does not appear in the devices list in the UI**: Review the application output using a serial console. See https://os.mbed.com/handbook/SerialPC for details.

* **Upon boot-up, the device displays "Connect to Cloud" right after "Agent Run", instead of showing "Bootstrapping" and IMEI**: The device is already registered with {{< product-c8y-iot >}} under another user account, a factory reset must be performed to unregister the device.

* **The device does not send GPS data**: The GPS receiver needs to have direct sight to the sky to receive satellite signals. Bad weather can also influence GPS reception.

* **I have accidentally deleted my device from the devices list**: Restart your device and wait a while. Your device will automatically re-register with {{< product-c8y-iot >}} and appear again.

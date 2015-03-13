---
layout: devices
title: Mbed u-blox C027
---

## Introduction

The [u-blox C027](https://mbed.org/platforms/u-blox-C027/ "u-blox C027") is a complete starter kit that allows quick prototyping of a variety of applications for the Internet of Things. The device also comes with a detachable cellular module as well as a GPS/GNSS receiver, which enable straightforward development of applications with location-aware global communication capability.

![u-blox C027](/guides/devices/mbed/c027.png)

For demonstration purposes, the [mbed application shield](http://mbed.org/components/mbed-Application-Shield/) can be attached to the C027. It provides various sensors and an LCD display.

![mbed application shield](/guides/devices/mbed/applicationshield.jpg)

The Cumulocity mbed agent connects the C027 application board to Cumulocity and provides the following features:

* Network dial-up using the C027 modem.
* Efficient communication through [SmartREST](/guides/rest/smartrest).
* Full auto-registration using Cumulocity's bootstrap and device registration.
* Collection and storage of temperature, GPS, accelerometer and analog sensor readings.
* Control the device LED's and LCD display remotely from Cumulocity.
* Connection status monitoring using the LCD display of the application shield.

## Prerequisites

To run the Cumulocity mbed agent, the following items are required:

* [u-blox C027](https://mbed.org/platforms/u-blox-C027/) Internet of Things starter kit, 2G or 3G version.
* [mbed appliation shield](https://mbed.org/components/mbed-Application-Shield/).
* A USB type A to type B adapter.
* A power supply.
* A SIM card with data plan for Internet access. The SIM card should have no SIM PIN. The SIM PIN can be deactivated using any mobile phone.
* You need access to Cumulocity platform. If you do not have it yet, click on "TRY CUMULOCITY FREE" on the top right of https://www.cumulocity.com.

## Preparation

* Insert the SIM card into the SIM slot on the backside of the u-blox C027.
* Attach the cellular antenna to the board.
* For GPS/GNSS capabilities, attach the GPS antenna to the board.
* Attach the mbed application shield to the C027.
* Connect a USB cable to the C027 and to your computer. The C027 will appear as "MBED" drive on your computer.
* Plug in the power supply and connect it to the application board.

> Note that the device cannot be flashed without the power supply connected.

> Further information is available on http://mbed.org/users/ublox/notebook/u-blox-C027-Getting-Started/ and http://mbed.org/users/ublox/notebook/u-blox-C027-Downloading/.

## Install the Agent

* Download the firmware to your computer, see table below.
* Copy the downloaded file to the "MBED" drive.
* Press the reset button on the C027 to start the agent.

|Version|Release Date|Download|
|---|:-:|:-:|
|1.9|18.Feb 2015| [download](/guides/devices/mbed/firmware-1.9.bin)|
|2.0      | 6.Mar 2015  | [download](/guides/devices/mbed/firmware-2.0c8y.bin)  |

Version for Deutsche Telekom Device Cloud (m2m-devicecloud.com):
|Version|Release Date|Download|
|---|:-:|:-:|
|2.0  | 6.Mar 2015  | [download](/guides/devices/mbed/firmware-2.0.bin)  |

These downloads are the same as the above ones, except that device registration (bootstrap) is performed against m2m-devicecloud.com .

## Connect the C027

* The C027 will now dial up to the Internet. You will see status updated in the LCD display. If the device cannot connect to the Internet, it will display an error message. In case of an error message "Wrong APN settting", follow the instructions below in Section "Troubleshooting".
* On a successful connection for the first time, the device should print "Bootstrapping" and below the IMEI of the cellular modem on the LCD display.
  _Note_: The IMEI can also be found on the white sticker on modem chip of the C027.
* Log on to the Cumulocity web interface, select "Registration" in the Device Management application. Enter the IMEI and press "Register Device".
* The device appears as *CONNECTED*. Click the "Accept" button.
* The device is now registered with Cumulocity and shows up under "All Devices" with the name "Mbed Test Device".
* After the device is successful connected to the Cumulocity platform, it will update the LCD display regarding its current status. The first line always displays the tenant name (until there is a message received from the platform, see Section "Interacting with the Control Operations"). The second line shows the signal quality in units of dBm. The third line displays information about which sensor data the u-blox is sending and their corresponding values. In case similar sensory values are read comparing with the last sending, the third line is empty to imply a skip of sending.

## Interacting with the Cumulocity Platform

The device is now connected to Cumulocity and sends sensor data periodically. You can now browse and process the collected data in the cloud in various ways:

Browse the collected sensor data under "Measurements" tab, as shown in the following screenshot:
![Measurement Screenshot](/guides/devices/mbed/measurements.png)

The device sends new sensor data only when the sensor values are changing. If the values are constant, no new values are send. If the values do not change for 15 minutes, then the values are changed anyway. 

Create a dashboard to customize the representation of the sensor data from the device. You can create a new dashboard by selecting the mbed device, clicking on the small cog symbol on the top right and selecting "Create Dashboard".
An example dashboard created for an mbed device is shown below:
![Dashboard Screenshot](/guides/devices/mbed/dashboard.png)

For further details, see the [Cumulocity User Guide](guides/users-guide/overview).

#### Interacting with the Control Operations

The "Control" page features a listing of all possible operations that are supported by a u-blox device, as shown in the following screenshot:

![Control Operations Screenshot](/guides/devices/mbed/controls.png)


Currently  the u-blox firmware supports three operations:

* RELAY: Click either the "On" or "Off" button on the *RELAY* widget to turn on or off the RGB LED on the platform. When clicked, the LED is turned on after a few seconds in green.
* SEND MESSAGE: On the "SEND MESSAGE" widget, type in a message in the text field, then click the "Send" button. After several seconds, then first line of the LCD display should display the message you sent. This message will stay in the first line until you send another message or restart the device.
* CONFIGURATION: On the "CONFIGURATION" widget, all supported configuration parameters are shown with their current values. At the moment, the only parameter is "interval" with default value of 20 minutes, which determines the time period at which the Cumulocity platform will check for availability of the device. It must be the same value as the "REQUIRED INTERVAL" in the "Info" page.


## Troubleshooting

* **I can not log-in to the platform**: Due to a badly chosen font option, upper case 'i' and lower case 'l' are indistinguishable on printout, you may need to try out different combinations to make sure the password you entered is the right one. (Applies to Deutsche Telekom Cloud-der-Dinge kit only.)

* **The device freezes or resets when booting up**: This is commonly an issue originated from a bad power connection. Unplug and plug in your power connector again, make sure the connection is firm and stable, this will normally resolve the issue.

* **"Modem Init Failure", "No SIM card found", "Or SIM has PIN code"**: Make sure you have inserted the SIM card in the right direction and side, and the SIM card is locked so that it has good contact to the device.
<p>It is also possible that the SIM card has a PIN code. In this case, you have to manually remove the PIN code to make it work.

* **GPS Init Failure**: Sometimes the agent is unable to initialize the GPS unit, simply restart the device should get away this issue.
<p>Note that the GPS initialization process works without an actual GPS receiver, it is therefore usually not necessary to actually attach a GPS receiver to resolve this problem.

* **No Network Coverage**: Make sure you have the modem antenna correctly mounted, otherwise the device will not be able to connect to a network.

* **Agent Init Failure**: The agent initialization is a complex process and comprises multiple components. It is in this case impossible to locate the actual problem without concrete information. You are recommended to connect the device to your computer and enable debug mode to collect more information via a serial port and trace where the problem actually is. See "Enable Debug Mode" on this page for further details.

* **Integration/Config Failure**: An ill functioning platform can often render this problem. In case you encountered this error message, please ensure that the cloud server is functioning well.

* **The device failed to join a network and displays "Wrong APN setting"**: Review the source code file `C027_Support/MDMAPN.h` and add an entry with the Mobile Country Code (MCC), Mobile Network Code (MNC) and your APN setting. Your MMC and MNC code should be shown on the LCD display below the error message "Wrong APN setting".

* **The device does not appear as *Connected* in the device registration process**: Review application output using a serial console. See http://mbed.org/handbook/SerialPC for details. Also make sure you flashed the device with correct firmware version, i.e. the one that performs the bootstrap against the right server.

* **The device does not appear in the devices section on the web interface**: Review application output using a serial console. See http://mbed.org/handbook/SerialPC for details.

* **Upon boot-up, the device displays "Connect to Cloud" right after "Agent Run", instead of showing "Bootstrapping" and IMEI**: The device is already registered with Cumulocity under another user account, a _factory reset_ has to be performed to unregister the device.

* **The device does not send GPS data**: Due to the weak ability of the GPS receiver, it needs to have direct sight to the sky to receive satellite signals. If you've already done so, keep in mind that a bad weather can also affect the GPS receiver.

* **I have accidentally deleted my device in device management**: The platform is able to recreate your device the next time it is connecting to the platform, so you only need to restart your u-blox device and wait for sometime for the device to appear again in device management.


## Tips and Tricks

#### Force a Sensory Data Sending

Subject to the sensitivity threshold, you may not see frequent sending of sensor data because similar sensor readings are not send. This effect is especially noticeable for the temperature sensor. However, it is possible to trigger an immediate sensory data sending by manually imposing a change to the sensory readings.

* For *temperature* sensor: place one finger atop the temperature sensor, which is located in the top middle of the u-blox device, above the text "Temperature LM7580". You should immediately see its effect on the LCD display updating its status to send a temperature reading.
* For *acceleration* sensor: simply turn aside or rotate the device you should immediately see the device is sending an acceleration reading on its LCD display.
* For *analog* sensor: turn right or left the two blue knobs below the LCD display, you should immediately see the device is sending analog readings on its LCD display.
* For *GPS* receiver: simply move around the GPS receiver, you should immediately see the device is sending GPS readings on its LCD display.

#### Perform a Factory Reset

When a u-blox device is already registered under a certain tenant, a *Factory Reset* has to be performed to remove the stored credentials so that the device can be re-registered again. The factory reset is performed as follows:

* Press and hold the *joystick* when (re)starting a already registered device.
* After the LCD display shows "Join Network" and the device is correctly joined the network, you should see "Reset Success" shown on the LCD display, which indicates a successful *Factory Reset*.
* Now restart the u-blox device and follow the instructions described in Section "Connect the C027" to register the device again under your tenant.


## Tips and Tricks for Developers

#### Enable Debug Mode

By default, the agent runs in production mode, which does not write any information to the serial port. You can enable the debug mode to see how a detailed log of the agent. In order to enable debug mode, you can either push up the *joystick* before starting the agent, or at any time after the agent is *connected* to the cloud and running.

The debug information is printed to the serial port of the device. To view its content, see http://mbed.org/handbook/SerialPC for details.

> Please note: Because the agent only reads the state of the *joystick* once per several seconds, you may need to push up the *joystick* and hold it for several seconds to switch on/off debug mode.

> When the agent is running in debug mode, many operations will be slowed down by a factor of 2 to 3 because of the large amount of I/O operations. If you want to disable the debug mode and switch back to express mode, simply push down the *joystick* and hold for several seconds.

#### Change the Agent Source Code

If you want to change the behaviour of the agent, go to mbed.org and adopt the source code. Here are the steps required to do so:

* Sign up for an account in [mbed](https://mbed.org) for free.
* Login to the mbed.org site and visit the [C027 page](https://mbed.org/platforms/u-blox-C027/). Click "Add to your mbed Compiler".
* Visit <a href="http://mbed.org/users/Cumulocity/code/MbedSmartRestMain/" target="_blank" title="Cumulocity Mbed SmartREST main application">Cumulocity Mbed SmartREST main application</a> and click "Import" to import the agent into your online Mbed IDE.
* In the IDE, click the "Compile" button. The IDE will download the compiled application to your computer.
* Copy the downloaded file to the "MBED" drive.
* Press the reset button on the C027 to start the agent.

#### Change Reporting Interval in the Source Code

By default the reporting intervals for all sensor values are 15 minutes. You can change the reporting intervals by changing the defined corresponding macros in the source code (all units in second):

* `measurement/AccelerationMeasurement.cpp`: TIME_LIMIT_ACCE
* `measurement/AnalogMeasurement.cpp`: TIME_LIMIT_ANA
* `measurement/LocationUpdate.cpp`: TIME_LIMIT_LOC
* `measurement/SignalQualityMeasurement.cpp`: TIME_LIMIT_SIG
* `measurement/Temperature.cpp`: TIME_LIMIT_TEMP

#### Change Reporting Sensitivity Threshold in the Source Code

Due to the jittering nature of the sensory readings, there is a threshold set for all sensor values to avoid constantly reporting false positive sensor reading changes. As the sensitivity of the sensors varies, the thresholds for different sensors vary. These thresholds are defined as a fraction of the last reported sensor values and you can also change them in the corresponding source file (all in real fraction numbers):

* `measurement/AccelerationMeasurement.cpp`: THRESHOLD_PERCENT_ACCE [default: 0.1]
* `measurement/AnalogMeasurement.cpp`: THRESHOLD_PERCENT_ANA [default: 0.02]
* `measurement/LocationUpdate.cpp`: THRESHOLD_PERCENT_LOC [default: 0.05]
* `measurement/SignalQualityMeasurement.cpp`: THRESHOLD_PERCENT_SIG [default: 0.06]
* `measurement/Temperature.cpp`: THRESHOLD_PERCENT_TEMP [default: 0.02]


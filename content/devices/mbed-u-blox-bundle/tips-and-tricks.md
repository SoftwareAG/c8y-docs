---
title: Tips and Tricks
layout: redirect
weight: 50
---

### Force a Sensory Data Sending

Subject to the sensitivity threshold, you may not see frequent sending of sensor data because similar sensor readings are not sent. This effect is especially noticeable for the temperature sensor. However, it is possible to trigger an immediate sensory data sending by manually imposing a change to the sensory readings.

* For *temperature* sensor: place one finger atop the temperature sensor, which is located in the top middle of the u-blox device, above the text "Temperature LM7580". You should immediately see its effect on the LCD display updating its status to send a temperature reading.
* For *acceleration* sensor: simply turn aside or rotate the device you should immediately see the device is sending an acceleration reading on its LCD display.
* For *analog* sensor: turn right or left the two blue knobs below the LCD display, you should immediately see the device is sending analog readings on its LCD display.
* For *GPS* receiver: simply move around the GPS receiver, you should immediately see the device is sending GPS readings on its LCD display.

### Perform a Factory Reset

When a u-blox device is already registered under a certain tenant, a *Factory Reset* has to be performed to remove the stored credentials so that the device can be re-registered again. The factory reset is performed as follows:

* Press and hold the *joystick* when (re)starting a already registered device.
* Prior to 2.1, after the LCD display shows "Join Network" and the device is correctly joined the network, you should see "Reset Success" shown on the LCD display, which indicates a successful *Factory Reset*. Starting from version 2.1, factory reset is much faster, simply wait for "Factory resetting" to appear on the screen, and you can release your finger already, after about 2 seconds, you should see "Reset Success" on the display.
* Now restart the u-blox device and follow the instructions described in Section "Connect the C027" to register the device again under your tenant.


### Tips and Tricks for Developers

#### Enable Debug Mode

By default, the agent runs in production mode, which does not write any information to the serial port. You can enable the debug mode to see a detailed log of the agent running. Prior to version 2.1, in order to enable debug mode, you can either push up the *joystick* before starting the agent, or at any time after the agent is *connected* to the cloud and running. Starting from version 2.1, simply push up the *joystick* at any time debug mode will be enabled.

The debug information is printed to the serial port of the device. To view its content, see http://mbed.org/handbook/SerialPC for details.

> Please note (applies only to versions prior to 2.1): Because the agent only reads the state of the *joystick* once per several seconds, you may need to push up the *joystick* and hold it for several seconds to switch on/off debug mode.

> When the agent is running in debug mode, many operations will be slowed down by a factor of 2 to 3 because of the large amount of I/O operations. If you want to disable the debug mode and switch back to express mode, simply push down the *joystick* and hold for several seconds (No holding is required starting from version 2.1).

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

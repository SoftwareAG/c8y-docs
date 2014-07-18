---
layout: default
title: Arduino
---
# Overview

This section describes how to get started with the Cumulocity Agent for Arduino and the M2M DevStarter Arduino package from Deutsche Telekom. We start with our instructions from installing and setting up the hardware, as well as showing a step-by-step example how to take sensor data and upload the data into the Cumulocity developer sandbox.

If you build something with it, tell us, we are more than happy to hear about your cool Thing !

# Table of contents

1.  Information about hardware
    -   [What is the M2M DevStarter Arduino package for Cumulocity?](#DevStarter)
    -   [Seeedstudio GSM Shield](#seeedStudioInfo)

2.  Setting up the software
    -   [Install the Arduino IDE and the Cucmulocity Client Library](#installArduino)

3.  Setting up the hardware
    -   [Setting up the Deutsche Telekom M2M DevStarter Arduino](#setupDevKit)
    -   [Setting up the Seeedstudio GSM Shield](#setupSeeedstudioShield)

4.  Getting started
    -   [First steps... check GSM connection](#firstSteps)
    -   [Running the sketches](#runningSketches)
    -   [Sketches explained](#sketchesExplained)

# Information about hardware

## What is the M2M DevStarter Arduino package for Cumulocity

Arduino is an open-source electronics development platform. It is intended for hobbyists, designers or anyone interested to build interactive objects.

Deutsche Telekom offers a DevStarter Arduino Package. It combines the Arduino with GSM network connectivity and Cumulocity C Client Library for easy integration with Cumulocity: Bring your M2M data into the cloud and/or remotely control your Arduino.

It's great for building M2M applications from home automation to remote control / remote measurement.

![GBoard](/images/guides/devices/arduino/GBoard.png)

The package consists of:

-   Arduino GBoard with GSM modem
-   Foca FTDI programming adapter
-   Example sensor: light sensor
-   Deutsche Telekom M2M SIM card
-   sensor & USB cables, power supply, antenna
-   Platform access credentials (tenant, user, password, application key), delivered as separate EMail.

The DevStarter Arduino Package is available from Deutsche Telekom. To order a package, check for announcements on [www.developergarden.com/m2m/home](http://www.developergarden.com).

## Seeedstudio GSM Shield

The GSM Shield from Seeedstudio let's your Arduino connect to the internet via mobile network.
The GSM Shield can be used with e.g. An Arduino UNO as an alternative to the described Gboard.
For more information about the shield, check the Seeedstudio Wiki: [http://www.seeedstudio.com/wiki/GPRS\_Shield](http://www.seeedstudio.com/wiki/GPRS_Shield)

![seedstudio shield](/images/guides/devices/arduino/seedstudio_shield.png)

# Setting up the software

## Install the Arduino IDE and the Cumulocity Client Library

### Arduino IDE v1.0.4

Download and install the Arduino IDE 1.0.4, see instructions [here](http://arduino.cc/en/main/software)
Start the Arduino IDE once and quit the application again. This will create directory structures needed in the next steps.

### Cumulocity C Client Library for Arduino

Download the Cumulocity Client Library from??[https://bitbucket.org/m2m/cumulocity-clients-c/get/default.zip](https://bitbucket.org/m2m/cumulocity-clients-c/get/default.zip).

Unzip the Client Library and install the unpacked folder "CumulocityArduinoClient" into the Arduino library folder, as described in [Library installation](http://arduino.cc/en/Guide/Libraries).

Your directory structure will then look like this on Windows:

	My Documents\Arduino\libraries\CumulocityArduinoClient\CumulocityPlatform.cpp
	My Documents\Arduino\libraries\CumulocityArduinoClient\CumulocityPlatform.h
	My Documents\Arduino\libraries\CumulocityArduinoClient\examples
	...

or like this (on Mac):

	Documents/Arduino/libraries/CumulocityArduinoClient/CumulocityPlatform.cpp
	Documents/Arduino/libraries/CumulocityArduinoClient/CumulocityPlatform.h
	Documents/Arduino/libraries/CumulocityArduinoClient/examples
	...

### GSM Library

Download and install a patched version of the Open Electronics GSM Library:??[GSMSHIELD.zip](/images/guides/devices/arduino/GSMSHIELD.zip), by performing similar steps as for the Cumulocity Agent Library above.

This ensures the library communicates with the pins you will set up during next steps (dip-switches).
You can find further information about the Open Electronics library here: [GSM Library for Arduino.](http://code.google.com/p/gsm-shield-arduino/)

Note on the patch: The original library has been changed at two places: A timing issue has been corrected.

### Installing the USB drivers

For the Foca FTD232 programming adapter you will need to install drivers. Please check [http://www.ftdichip.com/Drivers/VCP.htm](http://www.ftdichip.com/Drivers/VCP.htm%20)and install the driver that fits your platform (not required for Linux).

### Upgrading avr-gcc compiler version

One of the example sketches - the devicecontrol sketch, allows you to send a command to Arduino, for example to switch on/off an attached lamp or other device. This DeviceControl sketch does not work with Arduino IDE, which includes avr-gcc 4.3.2, because of a compiler bug. It works with avr-gcc 4.7.2.

In order to compile and run the DeviceControl sketch, you will need to manually update the compiler included in our Arduino IDE. You can find instructions on how to do the update [here](index.php?option=com_k2&view=item&id=955&Itemid=181).

# Setting up the hardware

## Setting up the??Deutsche Telekom M2M DevStarter Arduino

### 1. Installing the SIM-card

Verify that the SIM-card has no pin-code enabled or remove the pin-code using your mobile phone. Install the SIM-card into the GBoard.

### 2. Connect the Antenna

### 3. Set programming adapter to 3.3 Volt

Adjust the switch on the Foca FT232 programming adapter: set the switch to the 3.3 Volt position as shown below.

![foca](/images/guides/devices/arduino/foca.png)

### 4. Adjust the dip-switches on the GBoard. Set the dip switches as shown on the picture below.

![](/images/guides/devices/arduino/dipswitch2.jpg)

### 5. Connect the Foca dapter to the GBoard

Connect the Foca Adapter to the GBoard, making sure the PINs are aligned as shown on the picture below

-   Pin DTR to Pin DTR
-   Pin VDD33 to Pin VCCIO

![connect1](/images/guides/devices/arduino/connect1.png)

### 6. Connecting the sensor

You can connect sensors and actors to the M2M DevStarter Arduino to remotely measure and control things.?? The package comes with one example sensors - a light sensor - to get you started easily.

Connect the sensor with the supplied cable to connector as shown below ( Note the while cable is connected to pin 'S' on both ends).

![sensor3](/images/guides/devices/arduino/sensor3.png)

### 7. Final hardware setup steps

Place the GBoard on a non-conductive surface, connect the power supply. Connect the USB cable to your computer and the Foca.

### 8. Open the file GSM.h from GSM Library folder and make sure correct pins are set:

>     #define GSM_ON 6
>     #define GSM_RESET 7

### 9. Configure switches in the GSM.cpp file, which resides in the GSM Library folder. Make following settings in line 27 and 28 of the file:

>     #define _GSM_TXPIN_ 2
>     #define _GSM_RXPIN_ 3

## **Setting up the Seeedstudio GSM Shield**

Seeedstudio GSM shield can be used in conjunction with our Client Library Cumulocity. The Seeedstudio shield is a add-on shield to extend your Arduino with mobile network (GSM)
Connectivity.

![seedstudio shield](/images/guides/devices/arduino/seedstudio_shield.png)

1.  **Installing the SIM-card**

    Verify that the SIM-card has no pin-code enabled or remove the pin-code using your mobile phone. Install the SIM-card into the GBoard.

2.  **Connect the Antenna**
3.  **Set power supply switch**

    The Seeedstudio GPRS Shield can be either powered by an external 5Volt power supply or can be powered from Arduino board.
    Set the switch to the preferred position. Check the official Seeedstudio shield documentation for details:??[http://www.seeedstudio.com/wiki/GPRS\_Shield](http://www.seeedstudio.com/wiki/GPRS_Shield)

4.  **Set the dip switches on the board and in the GSM Library**

    Set the DIP switches on the shield as shown below ( RX=7, TX=8):

    ![seedstudio switch](/images/guides/devices/arduino/seedstudio_switch.png)

    Configure the same switches in the GSM.cpp file, which resides in the GSM Library folder. Make following settings in line 27 and 28 of the file:

    \#define \_GSM\_TXPIN\_ 7
    \#define \_GSM\_RXPIN\_ 8

5.  **Open the file GSM.h from GSM Library folder and set:**

    \#define GSM\_ON 9

6.  **Comment out output port definitions in Cumulocity Library**

    Open CumulocityPlatform.cpp file from the CumulocityArduinoClient library folder and comment lines as shown below:

    //pinMode(7, OUTPUT);
    //pinMode(6, OUTPUT);

**
**

# Getting started

## First steps... check GSM connection

Open Arduino IDE. From it's menu select the GSM GPRS Client example: GSM\_GPRSLibrary\_Client (available in GSMSHIELD section).

Then edit the 'sketch' and insert the Access Point Data for your SIM-card. For example change the line:

    inet.attachGPRS("<<apn>>", "<<username>>", "<<password>>")

to:

    inet.attachGPRS("m2m.business", "", "")

Also add the code "pinMode(6, OUTPUT);"?? as shown below. This will enable the GSM Library to power on the GSM module. (Note: For the seeedstudio GSM shield use pin 9 instead of 6).

![arduino2](/images/guides/devices/arduino/arduino2.png)

From Arduino IDE Tools menu select the Board type:?? Arduino Duemilanove w/ ATMega 328. Press the upload button in Arduino IDE

When upload is finished, open the Serial Monitor (Menu: Tools-\>Serial Monitor), and adjust the bitrate of SerialMonitor to 9600.

The sketch will now run. When SerialMonitor shows:

    GSM Shield testing
    status=READY

It means, the sketch can communicate with the GSM Modem and has initialized the modem.

The next messages mean, it has opened a GPRS connection and an IP-address was assigned to the GBoard:

    status=ATTACHED
    10.19.87.64

Then the sktech executes an HTTP GET request to www.google.com and the result will be printed into SerialMonitor window.

## When this tests are successful you are ready to start with your first Cumulocity example with Arduino !

## Runing the sketches

***Note**: There is a known issue of some HTTP responses failing to be read. In such case you might notice, that the return value of a method is negative (which indicates an error), but the request succeeds (e.g. measurement is sent, alarm is raised, or operation updated). In such case the exact value of exit code is -2. We are working on this issue.*

*Debug mode: If you wish to turn on the debug mode (very verbose output) you can open CumulocityPlatform.cpp and uncomment line "\#define DEBUG\_ENABLED"*

### RegisterDevice Sketch

With this sketch, you can register the device to the Cumulocity M2M Cloud.

To do that, load the sketch into the Arduino IDE by selecting File-\>Sketchbook-\>libraries-\>Cumulocity-\>RegsiterDevice .

In the beginning of the sketch you will see a CumulocityPlatform constructor:

    CumulocityPlatform cPlatform("<<host>>", "<<tenantId>>", 
    "<<user>>", "<<password>>", "<<applicationKey>>");

Make sure to replace parameters with correct credentials to the platform. The host is "developer.cumulocity.com" or "dev-dg.cumulocity.com".

The credentials you use depend on your subscription:

-   If you have subscribed to the free Cumulocity Public edition or M2M DevFree, then tenantId is "demo" and application key is "uL27no8nhvLlYmW1JIK1CA==". Use your username and password.
-   If you have purchased an M2M DevStarter package from Deutsche Telekom, you should have received an email which includes the tenant ID, credentials and application key. Alternatively you can use also your M2M DevFree account.

Important: Choose a name for your device and configure the name in the sketch. Replace \<\<devicename\>\> with your own name.

    result = cPlatform.registerDevice("<<deviceName>>", id, 8);

After uploading the script, the Arduino will register. Expected output (ID value may be different):

> ~~~~ {style="white-space: pre-wrap;"}
> Start
> Attaching GPRS...
> Registering a device...
>
> 10200
> Arduino registered with id: 10200
> ~~~~

If this is your first registration, or you run the sketch second time, without changing parameters, the output might be slightly different. The most important is last line:

> Arduino registered with id: 23100

At this stage, the Arduino has been created in Cumulocity. To see the Arduino in the web user interface, perform the following steps.

-   Open the developer sandbox at https://?sandbox URL?/ui/tenantadmin in your web browser and log in.
-   Go to the "My devices" tab and find the object with the name you have entered.

Alternatively, you can view the device in a DevStarter Arduino Package specific user interface:

-   Open the developer sandbox at https://?sandbox URL?/ui/arduino in your web browser and log in.
-   Find the object with the name you have entered in the device list.

![Arduino user interface](/images/guides/devices/arduino/cumulocity-ui.png)

### SendMeasurement Sketch

With this sketch, you can send measurements to the Cumulocity M2M Cloud.

To do that, load the sketch into the Arduino IDE by selecting File-\>Sketchbook-\>libraries-\>Cumulocity-\>SendMeasurement .

Similarly to the RegisterDevice Sketch, make sure to replace parameters:

-   Set CumulocityPlatform's constructor with correct credentials to the platform (see previous sketch for details).
-   **Important !** Also replace the device-name in registerDevice method with the name that you have choosen in the previous sketch.

Now, let's add in the light sensor from the M2M DevStarter Kit. Add following line of code to the setup() section of your sketch:

    pinMode(A3, INPUT); // Sensor plugged to A3 header

Change the loop() method of your sketch, so that a real sensor value is read and send to the cloud:

      int sensorValue = analogRead(3);
      int Rsensor=(int)(1023-sensorValue)*10/sensorValue;  

      result = cPlatform.sendMeasurement("Light", "Ev", Rsensor, "lx");

After uploading the script, the Arduino will start sending measurements. In this sketch ID of source device is the ID from registration.

You should see the following output:??

> ~~~~ {style="white-space: pre-wrap;"}
> Start
> Attaching GPRS...
> GPRS attached.
> Registering a device...
>
> 10300
> Saving in EEPROM:10300
> Arduino registered with id: 10300
> Sending measurement
> Measurement sent successfully.
> ~~~~

To save bandwith measurements are sent every 5 minutes, limited to 5 sents. This is only for this sketch, in your sketch you can send measurements as often you like.

To see measurements open the developer sandbox at https://?sandbox URL?/ui/arduino in your web browser and log in. In tab "Arduino" you can choose your device and in the right panel you will see measurements that have been sent

### DeviceControl Sketch

***Note**: DeviceControl sketch does not work with Arduino IDE, which includes avr-gcc 4.3.2, because of a compiler bug. It works with avr-gcc 4.7.2. See instructions above how to upgrade compiler version.
*

With this sketch you can obtain operations sent to the Arduino device.

To do that, load the sketch into the Arduino IDE by selecting File-\>Sketchbook-\>libraries-\>Cumulocity-\>DeviceControl .

**Mandatory sketch configuration:**

-   ****Configure your credentials in cPlatform() constructor (see first sketch for details)
-   Configure your chosen device name in registerDevice call ( see first sketch for details)

After uploading the script, the Arduino will start asking Cumulocity for operations:

> ~~~~ {style="white-space: pre-wrap;"}
> Start
> Attaching GPRS...
> GPRS attached.
> Registering a device...
>
> Arduino registered with id: 10300
>
> Retrieving operation from server...
> No operation awaiting.
> ~~~~

To submit an operation:

-   open the developer sandbox at https://?sandbox URL?/ui/arduino in your web browser and log in.
-   In tab "Arduino" you choose your device
-   In the botton right click on button "LED Toggle",?? set State to "ON" and finally click on button 'Submit operation'??

Wait for the next polling of operations from server. On Serial Monitor console you should see the output:

> ~~~~ {style="white-space: pre-wrap;"}
> Retrieving operation from server...
> Executing operation:
> LED_control
> ON
> Updating operation 11100
> Operation marked as completed
> ~~~~

## Sketches explained

### RegisterDevice Sketch explained

In the beginning, we need to setup a GPRS APN:

> mod = new GSMModule();
> Serial.println(F("Attaching GPRS..."));
> if(mod-\>attachGPRS("internet.t-mobile", "t-mobile", "tm")) {
> ?? cPlatform.setGSM(mod);

Here we construct a GSMModule object, which will manage GPRS connection. It is dependent on the arduino-gsm-shield library which you have downloaded in previous step.

Make sure that APN data are correct. When GPRS is correctly attached we can set GSMModule object in CumulocityPlatform object.

Next step is to register the Arduino as managed object in the platform.

> if(cPlatform.registerDevice("\<\<deviceName\>\>", id, 8) \< 0) {
> ?? Serial.print(F("Arduino registered with id: "));
> ?? Serial.println(id);
> } else {
> ?? Serial.println(F("Registration error."));
> ?? while(true);
> }

Method registerDevice accepts a name of the device in first parameter, then buffer for id and the length of the buffer. Make sure to fill the name??appropriately. The ID will be saved to first bytes in EEPROM as a string. If device has already been registered, method will not reregister and will return 0 instead of 1. In case of error, the return value is negative (see documentation).

### SendMeasurement Sketch explained

The beginning of the sketch looks exactly the same as RegisterDevice sketch. The difference is in the loop() function.

> void loop() {
> ?? Serial.println(F("Sending measurement"));
> ?? result = cPlatform.sendMeasurement("Light", "Ev", 50, "lx");
> ?? if(result \> 0) {
> ?? ?? Serial.println(F("Measurement sent successfully."));
> ?? } else {
> ?? ?? Serial.println(F("Measurement sending failed."));
> ?? }
> ?? delay(2000);
> }

You will see that there is a measurement sent every time the loop function is executed.

As presented, you can invoke method sendMeasurement with or without time parameter. All the rest (type, name, value, unit) are obligatory. In case the time argument is not passed, the current time will be obtained using additional HTTP request.

The return values are similar to the ones in registerDevice method. General rule is: positive value - OK, negative value - ERROR. In case of return value lower than -200, it means that it is HTTP code multiplied by -1.

### DeviceControl Sketch explained

**The beginning of the sketch looks exactly the same as RegisterDevice sketch. The difference is in the loop() function.

> void loop() {
> ?? Serial.println(F("\\nRetrieving operation from server..."));
> ?? if((result = cPlatform.getPendingOperationFromServer(operationName, 15, operation, 50)) \> 0) {
> ?? ?? executeOperation();?? ????if((result = cPlatform.markOperationCompleted()) \> 0) {
> ?? ?? ?? Serial.println(F("Operation marked as completed"));
> ?? ?? } else {
> ?? ?? ?? Serial.println(F("Operation update failed."));
> ?? ?? }
> ?? } else if(result \< 0) {
> ?? ?? Serial.println(F("Operation retrieval failed."));
> ?? } else {
> ?? ?? Serial.println(F("No operation awaiting."));
> ?? }
> }

In the first part we ask for the oldest operation for the Arduino device that is in PENDING status. This requires the Arduino to be already registered successfully, because the ID value is taken from EEPROM.

Similarly to registerDevice method, in case of succes it will return 1, in case of no operation awaiting (without error) it will return 0, and in case of error, there will be negative value (see documentation).

When the operation is retrieved and executed, it can be marked as completed with markOperationCompleted() method.

### DeviceControl2 Sketch explained

**This sketch provides similar functionality, but is implemented differently: Here we register a handler for an operation:

> cPlatform.registerForServerOperation(executeOperation, operationName, 15, operation, 50, 30);

Parameters here are pointer to handler, buffer for operation name and its length, then buffer for operation content and its length, and finally interval, which says how often the library should ask for operation.

Operation name needs to have "control" substring in its name.

There is only one more line required to have your handler invoked whenever pending operation is found:

> cPlatform.triggerHandlersIfCommandsAwaiting();

### RaiseAlarm Sketch explained

Raising alarm is very similar to sending measurements. In the sketch you will see that the only??difference??is a loop function

> void loop() {
> ?? Serial.println(F("Raising alarm..."));
> ?? int result = cPlatform.raiseAlarm("TYPE\_1", "active", "major", "Something happened");
> ?? if(result \< 0) {
> ?? ?? Serial.println(F("Alarm failed."));
> ?? } else {
> ?? ?? Serial.println(F("Alarm sent."));
> ?? }
>
> ?? delay(2000);
> }

The method used here is raiseAlarm, which accepts type of the alarm, severity of the alarm and the message. Return values are the same as in sendMeasurement.

# Upgrading compiler in Arduino IDE

Currently by default Arduino comes with avr-gcc 4.3.2. This is quite old version and is known to have many bugs. In Cumulocity library these cause Device Control to not work and restart a program. We strongly recommend updating the compiler and??

Whatever your platform is, please have in mind that avr-gcc 4.7.2 and avr-libc 1.8.0 are the currently the only versions confirmed to be working with Device Control functionality. However, we expect that further versions should work as well.

Below you find instructions for?? Mac, Windows and Linux on how to upgrade compiler and libc.

# Mac OS X

## Download packages

For Macintosh you can download the latest versions of 'avr-gcc' and 'avr-libc' using MacPorts.???? You can also download the packages manually from the package repository. Follow these links to download the latest packages of avr-gcc and avr-libc. Then replace them in Arduino IDE directory.

[http://jog.id.packages.macports.org/macports/packages/avr-gcc/](http://jog.id.packages.macports.org/macports/packages/avr-gcc/)
[http://jog.id.packages.macports.org/macports/packages/avr-libc/](http://jog.id.packages.macports.org/macports/packages/avr-libc/)

Darwin\_10 package is for Mac OS X 10.6.x, whereas Darwin 11 is for Mac OS X 10.7.x and Darwin 12 for version 10.8.

??Next you need to merge the contents of these packages with the contents of the Arduino IDE. NOTE, that on Macintosh copying a directory over another directory will completely replace the directory contents ( as opposed to Windows, where a file merge is done).???? Replacing complete directories should not be done - you would loose important files - instead MERGE the contents of the directories.

Open Arduino IDE directories.?? To open the Arduino IDE directories on Macintosh hold "Control" button on keyboard while clicking on the Arduino Application Icon, select "Show Package Contents".

In the Package Contents navigate to directory:

???? ??Contents/Resources/Java/hardware/tools/avr

## Updating GCC?? compiler

Now MERGE the contents of GCC4.7.2 directories over to the Arduino IDE folders, as shown below.
Confirm questions about overwriting/replacement of files.

![final mac copy gcc](/images/guides/devices/arduino/final_mac_copy_gcc.png)

## Updating Libc 1.8.0

You also need to update libc to version 1.8.0. Unpack the avr-libc 1.8.0 package and MERGE the files over to the Arduini IDE folders as shown?? below. Confirm questions about overwriting/replacement of files.
NOTE: Do not copy whole directories, as this would remove some files in the Arduini IDE directories ( e.g. the ldscripts folder in avr/lib in the IDE).

![final mac copy libc](/images/guides/devices/arduino/final_mac_copy_libc.png)

# 

# Linux

On Fedora you can just install the latest Arduino with following command:

yum install arduino

This should install all the required dependencies, including avr-gcc compiler, in the latest version.

On other distributions you will have to replace libraries in Arduino IDE directory. You can follow these links:
[http://www.micahcarrick.com/installing-gnu-tools-avr-gcc.html](http://www.micahcarrick.com/installing-gnu-tools-avr-gcc.html)

## 

# Windows

Please follow instructions here:??[http://andybrown.me.uk/wk/2012/04/28/avr-gcc-4-7-0-and-avr-libc-1-8-0-compiled-for-windows/](http://andybrown.me.uk/wk/2012/04/28/avr-gcc-4-7-0-and-avr-libc-1-8-0-compiled-for-windows/)

Note: Instructions are for Arduino IDE 1.0. For Arduino IDE 1.0.4 files from "Step 4" will not work. Please use following files for Arduino IDE 1.0.4:??[sources](/images/guides/devices/arduino/sources.zip).

## Replace packages

By default avr-gcc is located in:

ARDUINO\_DIR/hardware/tools/avr/lib/gcc/avr/

The avr-libc library is located in:

ARDUINO\_DIR/hardware/tools/avr/lib/avr/

This is where you need to place newly downloaded package.


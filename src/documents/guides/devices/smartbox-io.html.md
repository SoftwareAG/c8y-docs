---
title: SMARTBox IO
layout: devices
---

## Contents

* [Overview](#overview)
* [Interface](#interface) 
* [Connect the Smartbox](#connect-the-smartbox) to your Cumulocity Account
* Use the [built-in IOs](#ios) 
* Manage [software](#software) 
* Use the built-in [location functionality](#location) 
* Use the built-in [tracking functionality](#tracking) 
* Troubleshoot devices by [SMS mode](#sms-mode)
* Remotely execute text commands via [device shell](#device-shell) 
* [Debug](#debug) the device 
* Connect Modbus devices with [Cloud fieldbus](#cloud-fieldbus) 
* Help for setUp the items in [device database](#device-database) 


## <a name="overview"></a>Overview

Smartbox, based on the Telit Chipset HE910 is a ready to use solution for connecting Modbus devices to the Cumulocity Fieldbus Cloud. It provides a Master Slave Communication on RS485 for connecting up to 20 devices as well as 10 Sensors (Current ,Temperature, Pressure). Easy configure the SetUp of building automation fielddevices like pumps, e-meters, Airhandling units in the Cumulocity Fieldbus cloud or connect different sensortypes to the box. Using the Smartrest protocol the terminal comes up with a low traffic solution for decentralized applications. For the Smartbox there is a customized user interface available made for easy handling the sensors and showing graphs for consumption and temperatures. 

![Overview](/guides/devices/smartbox-io/overview.png)

### For further information: 
* please refer to the datasheet [provided by PSsystec](https://www.pssystec.de/downloads/) or download [here](/guides/devices/smartbox-io/Datasheet_Smartbox-IO.pdf)
* For installing the agent and SW releases, pls refer to Release notes folder of Device guide in Cumulocity or go to: https://www.pssystec.de/downloads/
* For getting the device pls contact Cumulocity Hardware support or Pssystec (kontakt@pssystec-gmbh.de) 
* The full product overview pls download it [here](/guides/devices/smartbox-io/PSsystec-Smartbox-Products_ShortOverviewCC.pdf) 

## <a name="interface"></a>Interface

Connect SMARTbox IO to the power supply 24VDC. The start-up of the unit will take 60 seconds: 

Wire your network: 

![Wire your Network](/guides/devices/smartbox-io/interface-network.png)

Wire the sensors:

![Wire the sensors](/guides/devices/smartbox-io/interface-sensors.png)

## <a name="connect-the-smartbox"></a>Connect the Smartbox to your Cumulocity Account

### Configure the terminal:

By default the terminal supports cloud fieldbus from Cumulocity. To use it you should:

* Subscribe your account to the Cloud Fieldbus app by contacting [support](https://support.cumulocity.com)
* Configure the terminal: 
  * Power on the Terminal  
  * Configure the Terminal's APN by sending an SMS to Terminal's SIM card with the following syntax: GPRS=APN,username,password (e.g. GPRS==public4.m2minternet.com,,) 

### Registering the Terminal in Cumulocity:

In the cumulocity Cloud Fieldbus app go to the menu and there find Devices &rarr; Registration. Enter the Terminal's IMEI as an ID. The IMEI is printed on the devices itself:

![IMEI](/guides/devices/smartbox-io/imei.png)

After accepting the device you should be able to see it in the All Devices list within 30 seconds.  

![Terminal in all devcies](/guides/devices/smartbox-io/terminal-in-all-devices.png)

## Use the <a name="ios"></a>built-in IOs

Sensors - max. 10

| Type | Type A | Type B | Type C | Type D | Type E | Type F |  
| --- | --- | --- | --- | --- | --- | --- | 
| NTC | 10 | - | - | 5 | - | - |
| PT1000 | Opt.10 | - | 2 | - | - | 2 |
| PT100 | Opt.10 | | | | | |
| 4..20mA (supply by Smartbox) | - | 8 | 6 | 5 | - | 8 |
| 0..10V | Opt.6 | - | 2 | - | - | - |
| DIN (supply by Smartbox) | Opt. 10 | - | - | - | 6 | - |
| Fast DIN | | 2 | - | - | 4 | - |

To activate the specific sensorboard proceed as follows:
1. Upload the sensor-model in device database. Download the sensorboard model Type A [here](/guides/devices/smartbox-io/F4_IO_2100.03.1_TypeA)
2. Edit the model if you need it (refer to [Configuring Fieldbus device types](https://www.cumulocity.com/guides/users-guide/cloud-fieldbus/#configure)) but keep the addresses
3. Connect the sensor board in Modbus tab on adress 1
4. Include the fieldbus widget in the cockpit related to the device and activate all items. You can now configure the inputs as Temperature sensor or Digitalinputs- as described in the table above

## <a name="software"></a>Manage software

The installed software on the SMARTbox can be remotely managed using the standard software and management feature from Cumulocity, as described in the [Device management user's guide](http://cumulocity.com/guides/users-guide/device-management/#software-repo).
You can get the latest Software version in the Release notes folder of Device guide in Cumulocity or go to: [https://www.pssystec.de/downloads/](https://www.pssystec.de/downloads/)

Since version 2.0 or higher all version are up compatible.

## <a name="location"></a>Use the built-in location functionality

The terminal features cell location and is available in Location tab on terminal level. Devices are shown as "pins" that you can click to see the name of the device. Clicking the name of the device takes you to the detailed view of the device. In Smartbox Mini you have 3 Options:
  1. Using the built in Cell Location. The terminal identifies  3 cells in the near environment and derives the location (default)
  2. Using the hardware  Option with a built in- GPS (this is an extra option). Set c8y.GPS=1 then GPS is enabled. Setting c8y.GPS=0 Cell location is enabled.
  3. Activate a regular identification of the location. In Configuration tab you can set:
    * c8y.LocationCycle=60; define in min, how often the location should be checked. 0 means the cycled checking is disabled. If a value >0 ist set, also the tracking is enabled

![Location](/guides/devices/smartbox-io/location.png)

## <a name="tracking"></a>Use the built-in tracking functionality

Devices can record the history of their movements in Cumulocity. Using the tracking tab, you can select a time period and visualize the movements of the device during this time period. Movements are shown as red lines on the map.

Next to the map, the individual recordings with their time are listed ("location update events"). When you click a recording, a "pin" on the map will show the location at the time of the recording.

Activate a regular identification of the location. In Configuration tab you can set. If the value of c8y.LocationCycle is greater 0 then tracking is enabled.

![Tracking](/guides/devices/smartbox-io/tracking.png)

Depending on the type of device and the integration into Cumulocity, you can also configure device-side geo-fencing and motion detection.

Additionally, when the feature is activated, Cell ID information can be used to determine the position of the device. Currently, the services from [Combain](https://combain.com/) and [Google](https://developers.google.com/maps/documentation/geolocation/intro) are supported. The user can see the tracks based on both data, or filter out GPS based data or Cell ID based data.

## <a name="sms-mode"></a>Troubleshoot devices by SMS mode

You can send AT commands vie the SMS to the device:

| Command | Description |
| --- | --- |
| DELETE | deletes the registration in CC and you can register on a new tenant |
| RESET	| Restarts the device |
| GPRS=&lt;APN&gt;,&lt;User&gt;,&lt;Password&gt; | Change APN, if no User or Password is required, the fields free |
| COMMAND:<AT command> | You can take all supported AT commands from here in Chapter "AT commands": https://www.pssystec.de/downloads/ |

## <a name="device-shell"></a>Remotely execute text commands via device shell

The device shell enables you to read and write configuration parameters to interactively work with remote devices.  You can send AT commands in the respective language of the device and view the results of the commands. You can sent any At Command. Check here in Chapter "AT commands": [https://www.pssystec.de/downloads/](https://www.pssystec.de/downloads/)

![Device Shell](/guides/devices/smartbox-io/device-shell.png)

Frequently used commands are available by clicking the "Get predefined" button. Multiple get, set and execute commands can be sent using a semicolon as separator. 

## <a name="debug"></a>Debug the device

For debug service:
* Install the Telit USB driver on your PC: [https://www.pssystec.de/downloads/](https://www.pssystec.de/downloads/). The PC will recognize 6 new USB Ports
* Open an Terminal program
* Connect your PC on Telit High Speed Modem USB Port with USB port on the Smartbox

You will get details of the running machine.

## <a name="cloud-fieldbus"></a>Connect Modbus devices with Cloud fieldbus

Support Modbus RTU:

| Fieldbus communication |  |
| --- | --- |
| Type | Modbus RTU (Master) |
| Baudrate | 4800, 9600, 19200, 38400, 115200 (Change during Runtime possible) |
| Parity | Even, ODD, NONE  (Change during Runtime possible) |
| Stopbits | 2,1 (Change during Runtime possible) |
| Functioncodes | Funct.1 (Read Single Coils)
|               | Funct.2 (Read Input Status)
|               | Funct.3 (Read Holding Registers) 
|               | Funct.4 (Read Input Registers) 
|               | Funct.5 (Write Coil)
|               | Funct.6 (Write Holding Register) |
| Datapoints | Max 10 Slaves with each 100 datapoints |
| Polling Rate on Bus | 300ms |

To connect a Modbus/RTU device:

* Physically wire the Modbus/RTU device through RS/485 to the terminal. 
* Give the device a unique Modbus address according to the instructions provided with the Modbus device (e.g. by setting a jumper on the device). 
* Check the serial communication settings of the device according to the instructions provided with the device (i.e. baud rates and communication protocol). These have to match with all devices on the bus. 
* Navigate to the terminal in Cumulocity and click on the "Modbus" tab. 
* Change the communication settings shown in the section "Serial Communication" to match the settings on the bus, if needed. 
* Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency where measurements are sent to Cumulocity. 
* Click "Save changes" if you made changes. 
* To start communication between the terminal and the Modbus device, click "Add new device". 
* Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see ["Configuring Fieldbus device types"](https://www.cumulocity.com/guides/users-guide/cloud-fieldbus/#configure) below. Set the Modbus address of the connected device. 
* Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds. 

![Connect Modbus/ RTU device](/guides/devices/smartbox-io/connect-modbus-device.png)

## <a name="device-database"></a>Help for setUp the items in device database

![Device Database](/guides/devices/smartbox-io/device-database1.png)

![Device Database](/guides/devices/smartbox-io/device-database2.png)

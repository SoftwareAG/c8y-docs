---
title: SMARTBox Mini
layout: devices
---

## Contents

* [Overview](#overview)
* [Wire](#wire) your Smartbox 
* [Connect the Smartbox](#connect-the-smartbox) to your Cumulocity Account
* Use the [built-in IOs](#ios)
* [Connect a Modbus Device](#connect-a-modbus-device) to the SMARTbox
* Use the built-in [location functionality](#location) 
* Use the built-in [tracking functionality](#tracking) 
* [Manage the Agent](#manage-agent)
* Operate by [SMS](#sms)
* Operate AT commands via [device shell](#device-shell) 
* Local [Debug and operate](#debug-and-operate) the device
* Help for setting up the items in [device database](#device-database)

## <a name="overview"></a>Overview

Smartbox, based on the Telit Chipset HE910 is a ready to use solution for connecting Modbus devices to the Cumulocity Fieldbus Cloud. It provides a Master Slave Communication on RS485 for connecting up to 10 devices. Easy configure the SetUp of building automation fielddevices like pumps, e-meters, Airhandling units in the Cumulocity Fieldbus cloud. Using the MQTT protocol the terminal comes up with a low traffic solution for decentralized applications. 


![Overview](/guides/images/devices/smartbox-mini/overview.png)

| Smartbox Mini Overview <td colspan=2> 
| --- | --- | --- |
| ![Radio](/guides/images/devices/smartbox-io/radio.png) <td colspan=2>  <ul><li>2G  - global</li><li>3G  - EMEA, APAC, NA, Global</li><li>LTE - EMEA, APAC, Americas</li><li>GNSS</li></ul>
| ![Connectivity](/guides/images/devices/smartbox-io/connectivity.png) | Fieldbus |<ul><li>Modbus RTU (RS232/RS485) ![ ](/guides/images/devices/smartbox-io/modbus.png)  |
| | Sensors | <ul><li>Digital Input (DIN)</li><li>AIN (NTC,0..20mA)</li></ul> |
| ![Cloudagent](/guides/images/devices/smartbox-io/cloudagent.png) <td colspan=2>  MQTT Agent for Cumulocity IoT, T-Systems- Cloud der Dinge


### For further information: 
* For further information: please refer to the datasheet provided by PSsystec https://www.pssystec.de/downloads/
* For installing the agent and SW releases, pls refer to Release notes folder of Device guide in Cumulocity or go to: http://cumulocity.com/guides/devices/smartbox-release-notes/
* For getting the device pls contact Cumulocity Hardware support or Pssystec Kontakt@pssystec-gmbh.de
* The full product overview pls download it https://www.pssystec.de/downloads/

## <a name="wire"></a>Wire your Smartbox

* Connect your sensors and Modbus Devices to the terminal block
* You can use external 24VDC (200mA) or the with the delivered PowerSupply

![interface](/guides/images/devices/smartbox-mini/interface.png)


## <a name="connect-the-smartbox"></a>Connect the Smartbox to your Cumulocity Account

### Prepare the Cloud and APN:

By default the terminal supports cloud fieldbus from Cumulocity. To use it you should:

1.	Subscribe your account to the Cloud Fieldbus app by contacting Cumulocity support.After this the device Database will be visible in the root folder of Device management. Refer also here: http://cumulocity.com/guides/users-guide/cloud-fieldbus/
2.	Power on the Terminal and wait until the RUN LED is flashing 2xflash-pause-2xflash-...
3.	Configure the Terminal's APN by sending an SMS to Terminal's SIM card with the following syntax: GPRS=APN,username,password
</br>For example, if you have no User and Password then you have to type in your SMS  GPRS=&#60;APN&#62;,,
 
### Register the device

In the cumulocity Devicemanagement go to the menu in Device Registration. Enter the Terminal's IMEI as an ID. The IMEI is printed on the devices itself:

![IMEI](/guides/images/devices/smartbox-io/imei.png)

After accepting the device (this process may tale 30 seconds) you should be able to see it in the All Devices list after a short delay.  

![Terminal in all devcies](/guides/images/devices/smartbox-io/terminal-in-all-devices.png)

## Use the <a name="ios"></a>built-in IOs

1. Note that the SMARTbox Mini supports: 
  * 1 x Digital Input (DIN)
  * 1 x AIN (NTC,0..20mA)
</br> Note the activation of NTC or 0..20mA must be defined during production

![interface](/guides/images/devices/smartbox-mini/interface-sensors.png)

## <a name="connect-a-modbus-device"></a> Connect a Modbus Device to the SMARTbox

The Smartbox supports Modbus RTU - all Connections paramters are configurable in the Cloud.

| Connections parameters |  |  |
| --- | --- | --- |
| Type | Modbus RTU (Master) | Cloud |
| Baudrate | 4800, 9600, 19200, 38400, 115200 (Change during Runtime possible) | Modbus Tab |
| Parity | Even, ODD, NONE (Change during Runtime possible) | Modbus Tab |
| Stopbits | 2,1 (Change during Runtime possible) | Modbus Tab |
| Functioncodes | <ul><li>Funct.1 (Read Single Coils)</li><li> Funct.2 (Read Input Status)</li><li> Funct.3 (Read Holding Registers)</li><li> Funct.4 (Read Input Registers)</li><li> Funct.5 (Write Coil)</li><li> Funct.6 (Write Holding Register)</li></ul> | Device database (model) |
| Datapoints | 1.. 10 Slaves with each 100 datapoints | fix |
| Polling Rate on Bus | 500ms | fix |

We assume that you already defined your Modbus device(s) which you want to connect in the device database. In this exemplary SetUp you need 4 Models in the device database, which can and should be defined offline in the Cloud (see also chapter Help Device database)</br>
Device1:  Chiller on Address1</br>
Device2: Energy Meter on Address2</br>
Device3: Frontcooler for Serverline1 on Address5</br>
Device4: Frontcooler for Serverline2 on Address6

![ ](/guides/images/devices/smartbox-mini/use-case.png)

To connect 1 Modbus Device to the RTU network:

1. Physically wire the Modbus/RTU device through RS485 to the terminal. 
2. Give the device a unique Modbus address according to the instructions provided with the Modbus device (e.g. by setting a jumper on the device). 
3. Check the serial communication settings of the device according to the instructions provided with the device (i.e. baud rates and communication protocol). These have to match with all devices on the bus. 
4. Navigate to the terminal in Cumulocity and click on the "Modbus" tab. 
5. Change the communication settings shown in the section "Serial Communication" to match the settings on the bus, if needed. 
6. Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency where measurements are sent to Cumulocity. 
7. Click "Save changes" if you made changes. 
8. To start communication between the terminal and the Modbus device, click "Add new device". 
9. Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "Configuring Fieldbus device types" below. Set the Modbus address of the connected device. 
10. Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds. 

![Terminal](/guides/images/devices/smartbox-mini/terminal-modbus.png)


## <a name="location"></a>Use the built-in location functionality

The terminal features cell location and is available in Location tab on terminal level. Devices are shown as "pins" that you can click to see the name of the device. Clicking the name of the device takes you to the detailed view of the device. In Smartbox Mini you have 3 Options:
1.	Using the built in Cell Location. The terminal identifies  3 cells in the near environment and derives the location (default)
2.	Using the hardware  Option with a built in- GPS (this is an extra option). Set c8y.GPS=1 then GPS is enabled. Setting c8y.GPS=0 Cell location is enabled (default)
3.	Activate a regular identification of the location. In Configuration tab you can set:
</br>c8y.LocationCycle=60; define in min, how often the location should be checked. 0 means the cycled checking is disabled. If a value >0 ist set, also the tracking is enabled

![Location](/guides/images/devices/smartbox-mini/location.png)

## <a name="tracking"></a>Use the built-in tracking functionality

Devices can record the history of their movements in Cumulocity. Using the tracking tab, you can select a time period and visualize the movements of the device during this time period. Movements are shown as red lines on the map.

Next to the map, the individual recordings with their time are listed ("location update events"). When you click a recording, a "pin" on the map will show the location at the time of the recording.

Activate a regular identification of the location. In Configuration tab you can set. If the value of c8y.LocationCycle is greater 0 then tracking is enabled.

![Tracking](/guides/images/devices/smartbox-io/tracking.png)

Depending on the type of device and the integration into Cumulocity, you can also configure device-side geo-fencing and motion detection.

Additionally, when the feature is activated, Cell ID information can be used to determine the position of the device. Currently, the services from Combain and Google are supported. The user can see the tracks based on both data, or filter out GPS based data or Cell ID based data.

## <a name="manage-agent"></a> Manage the Agent

The installed software on the SMARTbox can be remotely managed using the standard software and management feature from Cumulocity, as described in the Device management user's guide. You can get the latest Software version in the Release notes folder of Device guide in Cumulocity or go to: https://www.pssystec.de/downloads/
</br>If you want to install the agent manually, follow the instructions here: http://cumulocity.com/guides/devices/smartbox-release-notes/

Since version 2.0 or higher all version are up compatible.

## Operate by <a name="sms"></a>SMS

You can send AT commands vie the SMS to the device:

| AT commands | |
| --- | --- |
| DELETE | deletes the registration in CC and you can register on a new tenant |	
| RESET | Restarts the device |
| GPRS=&#60;APN&#62;,&#60;User&#62;,&#60;Password&#62; | Change APN, if no User or Password is required, the fields free |

## <a name="device-shell"></a>Operate AT commands via device shell 

The device shell enables you to read and write configuration parameters to interactively
work with remote devices. You can send AT commands in the respective language of the
 device and view the results of the commands. You can sent any At Command. Check here
 in Chapter "AT commands": https://www.pssystec.de/downloads/. Frequently used
 commands are available by clicking the "Get predefined" button

![Device Shell](/guides/images/devices/smartbox-io/device-shell.png)


## <a name="debug-and-operate"></a>Local Debug and operate the device

For debug service:
1.	Install the Telit USB driver on your PC: https://www.pssystec.de/downloads/. The PC will recognize 6 new USB Ports
2.	Open an Terminal program
3.	Connect your PC on Telit High Speed Modem USB Port with USB port on the Smartbox

You will get details of the running machine.


## <a name="device-database"></a>Help for setting up the items in device database

Depending on your Modbus Slave e.g. the chiller from the example above, you have to define all datapoints of your connected Slave device. Here you will find a detailled description of one datapoint (Holding Register and a coil) and its metadata which you can define to control Cloud Visualization. 

![Device Database](/guides/images/devices/smartbox-io/device-database1.png)

![Device Database](/guides/images/devices/smartbox-io/device-database2.png)

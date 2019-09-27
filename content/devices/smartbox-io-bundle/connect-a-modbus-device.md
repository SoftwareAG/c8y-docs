---
title: Connect a Modbus Device to the SMARTbox
layout: redirect
weight: 60
---
The Smartbox supports Modbus RTU - all Connections parameters are configurable in the Cloud.

| Connections parameters |  |  |
| --- | --- | --- |
| Type | Modbus RTU (Master) | Cloud |
| Baudrate | 4800, 9600, 19200, 38400, 115200 (Change during Runtime possible) | Modbus Tab |
| Parity | Even, ODD, NONE  (Change during Runtime possible) | Modbus Tab |
| Stopbits | 2,1 (Change during Runtime possible) | Modbus Tab |
| Functioncodes | <ul><li>Funct.1 (Read Single Coils)</li><li> Funct.2 (Read Input Status)</li><li> Funct.3 (Read Holding Registers)</li><li> Funct.4 (Read Input Registers)</li><li> Funct.5 (Write Coil)</li><li> Funct.6 (Write Holding Register)</li></ul> | Device database (model) |
| Datapoints | 1.. 10 Slaves with each 100 datapoints | fix |
| Polling Rate on Bus | 500ms | fix |

We assume that you already defined your Modbus device(s) which you want to connect in the device database. In this exemplary SetUp you need 4 Models in the device database, which can and should be defined offline in the Cloud (see also chapter Help Device database)</br>
   Device1:  Chiller on Address1</br>
   Device2: Energy Meter on Address2</br>
   Device3: Frontcooler for Serverline1 on Address5</br>
   Device4: Frontcooler for Serverline2 on Address6

![ ](/images/devices/smartbox-io/modbus-setup.png)   

To connect 1 Modbus Device to the RTU network:

1.	Physically wire the Modbus/RTU device through RS485 to the terminal. 
2.	Give the device a unique Modbus address according to the instructions provided with the Modbus device (e.g. by setting a jumper on the device). 
3.	Check the serial communication settings of the device according to the instructions provided with the device (i.e. baud rates and communication protocol). These have to match with all devices on the bus. 
4.	Navigate to the terminal in Cumulocity and click on the "Modbus" tab. 
5.	Change the communication settings shown in the section "Serial Communication" to match the settings on the bus, if needed. 
6.	Change the transmit rate and the polling rate according to your requirements. The polling rate is the frequency at which the Modbus devices are polled for changes. The transmit rate is the frequency where measurements are sent to Cumulocity. 
7.	Click "Save changes" if you made changes. 
8.	To start communication between the terminal and the Modbus device, click "Add new device". 
9.	Enter a name for the device and select the type of the device from the drop-down box. To add new device types, see "Configuring Fieldbus device types" below. Set the Modbus address of the connected device. 
10.	Click "Add". Cumulocity will now send a notification to the Modbus terminal that a new device is ready to be managed. This may take a few seconds. 

![ ](/images/devices/smartbox-io/rtu-network.png)

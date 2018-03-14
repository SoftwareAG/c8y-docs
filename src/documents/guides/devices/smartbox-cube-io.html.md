---
title: SMARTBox CubeIO
layout: devices
---
## Contents

* [Overview](#overview)
* SMARTbox CubeIO [Datasheet](#datasheet)
  * [Radio](#radio)
  * [Connectivity/ Features](#connectivity)
  * [Cloud Connector](#cloud-connector)
  * [Edge Processing](#edge-processing) (Agent > 2.4.x)
  * [General](#general)
  
## <a name="overview"></a>Overview

Smartbox, based on the Telit Chipset HE910 is a ready to use solution for connecting Modbus devices to the Cumulocity Fieldbus Cloud. It provides a Master Slave Communication on RS485 for connecting up to 10 devices as well as 10 Sensors (Current ,Temperature, Pressure). Easy configure the SetUp of building automation fielddevices like pumps, e-meters, Airhandling units in the Cumulocity Fieldbus cloud or connect different sensortypes to the box. Using the MQTT protocol the terminal comes up with a low traffic solution for decentralized applications. 

![Overview](/guides/devices/smartbox-cube-io/overview.png)

## SMARTbox CubeIO <a name="datasheet"></a>Datasheet

## <a name="radio"></a>Radio

| Radio | | 
| --- | --- |
| 4G LTE | <li>LTE Cat 4 (incl. 3G/2G)</li><li>LTE Cat 1 (incl. 3G/2G)</li><li>LTE Cat M1</li><li>NB-IoT (Cat NB1)</li>|
| 3G | <li>UMTS &#124; HSPA+ (incl. 2G)</li><li>UMTS &#124; HSPA (incl. 2G)</li>|
| 2G | GSM &#124; GPRS |
| Regions | EMEA / APAC / Latinamerica / NorthAmerica / Australia / Global (3G / 2G) |
| GPS | Supported by 2G and 3G Variances |
| Production | The selected Region,Technology and GPS can be defined during Production. The default assembly is 3G with supported regions  EMEA / APAC  |  

## <a name="connectivity"></a>Connectivity/ Features

| Connectivity/ Features <td colspan="2">
| --- | --- | --- |
| Layout <td colspan="2"> ![Layout](/guides/devices/smartbox-cube-io/interface.png)
| Fieldbus Modbus </br> ![ ](/guides/devices/smartbox-dp/profibus.png) | Type | Modbus RTU Master |
| | Baudrate | 4800, 9600, 19200, 38400, 57600, 115200 |
| | Parity | Even, ODD, NONE | 
| | Stoppbits | 2,1 |
| | Functioncodes | <li>Funct.1 (Read Single Coils)</li><li>Funct.2 (Read Input Status)</li><li>Funct.3 (Read Holding Registers)</li><li>Funct.4 (Read Input Registers)</li><li>Funct.5 (Write Coil)</li><li>Funct.6 (Write Holding Register)</li> |
| | Datapoints | Max. 10 Modbus Slaves, with 100 datapoints per device or 1000 datapoints with 1 device |
| Sensors <td colspan="2"> 12 Universal Inputs
| | U1/U2 | DIN NO [voltage free] / DIN NC [voltage free] /0..20mA/4..20mA/0..10V/2..10V/0..5V |
| | U3/U4/U5/U6 | DIN NO [voltage free] / DIN NC [voltage free] /0..20mA/4..20mA |
| | U7/U8/U9/U10 | PT1000 |
| | Output | 24VDC Digital Output. Note: Either the Output or the 2nd Fieldbusinterface can be selected during production |
| | DIN/O | DIN [voltage free] |
| | AIN/O | NTC (selectable by Hardwarejumper, either NTC or 0..20mA) |
| | AIN/P+ | 0..20mA (selectable by Hardwarejumper, either NTC or 0..20mA) |
| 2nd Fieldbus | RS485 | Customized Interface for Modbus RTU Master/Slave,, Custom Interface. 24VDC Digital Output. Note: Either the Output or the 2nd Fieldbusinterface can be selected during production |
| LEDs | GSM | Flashing- connected to mobile network |
| | RUN | 2xflashing/pause: StartUp Phase </br> 3xflashing/pause: Connected to Server, Data exchange |
| | Act | Flashing: Sensor Board Power |
| | Link | Flashing: Sensor Board is ready to process data |
| USB <td colspan="2"> For programming, Logging and Trace the device

## <a name="cloud-connector"></a>Cloud Connector

| Cloud Connector <td colspan=2>
| --- | --- | --- |
| Availability <td colspan=2> All Cumulocity Based systems, Cloud der Dinge Deutsche Telekom
| Realtime Clock <td colspan=2> Updating Realtime automatical from #NTP timeserver
| Application <td colspan=2> CloudFieldbus (CFB Integrated in Devicemanagement)</br>For SetUp connected field devices
| Online Operations <td colspan=2> Remote Restart</br> Fieldbus Configuration Cloud-Device</br> Change Transmitinterval from device to Cloud</br> Change Communication. Baudrate, Databits, Parity, Stopbits</br> Operate the connected Field device:  Registervalues (R/W)</br> Operate the connected Field device:  Change CoilValues (R/W)</br> Operate the device with AT Commands in the shell
| Communication <td colspan=2> MQTT
| Security <td colspan=2> TLS
| Notifications <td colspan=2> Realtime and Pending Operations
| Shell <td colspan=2> Operate the device with AT Commands in the shell
| Location <td colspan=2> Identification by cellular network or GPS Signal (selected- see Radio)
| Tracking <td colspan=2> Location Route by cellular network or GPS Signal
| Info <td colspan=2> Operator, Cell ID, LAC, MNC, MCC, Signal strength
| Device Database <td colspan=2> Device database Support: Measurements, Event, Alarms, Values, Read,Read/Write, Signed/Unsigned, Decimal Places, Multiplier, Divisor, No of Bits, StartBit
| OTA <td colspan=2> RemoteUpdate Software
| Data-Exchange | Values | On Change |
| | Alarms | On Change |
| | Events | On Change |
| | Measurements | Default 900 |
| | Signal strength | Is sent every 20 Min as a measurement |
| | Offline Buffering | Alarms, Events, Measurments &asymp; 72h |
| SMS <td colspan=2> For Troubleshooting you can operate the device by SMS:</br>Reboot</br>Change tenant</br>FOTA/OTA

## <a name="edge-processing"></a> Edge Processing

| Edge Processing | |
| --- | --- |
| FUP Plan | Supporting, 3 x PID Control, And, XOR, NOR, NAND, Multiplexer, Conversion, up to 500 Signals |
| Deploy Remote | Deploy remotely by Cloud (SW Download) |

## <a name="general"></a>General

| General <td colspan=3>
| --- | --- | --- | --- |
| Dimensions <td colspan=3> 70 x 70 x 45 mm
| Weight <td colspan=3> 89g
| GSM Antenna <td colspan=3> SMA Connector
| Power Supply <td colspan=3> Nominal voltage range: 12-24 VDC, 10% </br> Maximum continuous (average) supply power: 2.5 W </br> Maximum continuous (average) supply current: 200 mA at 12V, 100 mA at 24V
| Mounting <td colspan=3> Via DIN Rail Adapter or Adapter for Wall Mounting
| SIM Card Format <td colspan=3> 2FF
| Operating temperature <td colspan=3> -20..60&#176;C
| Storage temperature <td colspan=3> -40..85&#176;C
| Operating humidity <td colspan=3> Max. 85%
| Storage humidity <td colspan=3> Max. 85%
| IP Class <td colspan=3> IP20/IP54 (opt.)
| Approvals </br> ![ ](/guides/devices/smartbox-dp/certification.png)| <strong>America</strong> | <strong>Europe </strong> | <strong>Australia</strong> |
| | FCC /IC, PTCRB /GCF | R&TTE / GCF / RED | RCM, Telstra |
| Conformity Declerations <td colspan=3> EMC-Directive 2014/30/EU </br> EN 55022:2010</br> EN 55024:2010</br> IEC 61000-6-1:2005</br> IEC 61000-6-3:2011</br> R&TTE-Directive 2014/53/EU</br> EN 301 511 V9.0.2</br> EN 301 908-1 V6.2.1</br> EN 301 908-2 V6.2.1</br> RoHS-DIrective 2011/65/EU</br> EN 50581:2012



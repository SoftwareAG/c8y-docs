---
title: Datasheet
layout: redirect
order: 20
---

* [Radio](#radio)
* [Connectivity/ Features](#connectivity)
* [Cloud Connector](#cloud-connector)
* [Edge Processing](#edge-processing) (Agent > 2.4.x)
* [General](#general)


### <a name="radio"></a>Radio

| Radio | | 
| --- | --- |
| 4G LTE | <ul><li>LTE Cat 4 (incl. 3G/2G)</li><li>LTE Cat 1 (incl. 3G/2G)</li><li>LTE Cat M1</li><li>NB-IoT (Cat NB1)</li></ul> |
| 3G | <ul><li>UMTS &#124; HSPA+ (incl. 2G)</li><li>UMTS &#124; HSPA (incl. 2G)</li></ul> |
| 2G | GSM &#124; GPRS |
| Regions | EMEA / APAC / Latinamerica / NorthAmerica / Australia / Global (3G / 2G) |
| GPS | Supported by 2G and 3G Variances |
| Production | The selected Region,Technology and GPS can be defined during Production. The default assembly is 3G with supported regions  EMEA / APAC  |  

### <a name="connectivity"></a>Connectivity/ Features

| Connectivity/ Features | | |
| --- | --- | --- |
| Layout <td colspan="2"> ![Layout](/guides/images/devices/smartbox-cube-io/interface.png)	
| Fieldbus Modbus </br> ![ ](/guides/images/devices/smartbox-cube-io/modbus.png) | Type | Modbus RTU Master |
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
	
### <a name="cloud-connector"></a>Cloud Connector

| Cloud Connector | | |
| --- | --- | --- |
| Availability <td colspan=2> All Cumulocity Based systems, Cloud der Dinge Deutsche Telekom
| Realtime Clock <td colspan=2> Updating Realtime automatical from #NTP timeserver
| Application <td colspan=2> CloudFieldbus (CFB Integrated in Devicemanagement)</br>For SetUp connected field devices
| Online Operations <td colspan=2> Remote Restart</br> Fieldbus Configuration Cloud-Device</br> Change Transmitinterval from device to Cloud</br> Change Communication. Baudrate, Databits, Parity, Stopbits</br> Operate the connected Field device:  Registervalues (R/W)</br> Operate the connected Field device:  Change CoilValues (R/W)</br> Operate the device with AT Commands in the shell
| Communication <td colspan=2> MQTT
| Security <td colspan=2> TLS-Security 1.0 / TLS 1.2 (ab Version 2.4.x)
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


### <a name="edge-processing"></a> Edge Processing

| Edge Processing | |
| --- | --- |
| FUP Plan | Supporting, 3 x PID Control, And, XOR, NOR, NAND, Multiplexer, Conversion, up to 500 Signals |
| Deploy Remote | Deploy remotely by Cloud (SW Download) |

### <a name="general"></a>General

| General | |
| --- | --- | 
| Dimensions | 70 x 70 x 45 mm |
| Weight | 89g |
| GSM Antenna | SMA Connector |
| Power Supply | Nominal voltage range: 12-24 VDC, 10% </br> Maximum continuous (average) supply power: 2.5 W </br> Maximum continuous (average) supply current: 200 mA at 12V, 100 mA at 24V |
| Mounting | Via DIN Rail Adapter or Adapter for Wall Mounting |
| SIM Card Format | 2FF |
| Operating temperature | -20..60&#176;C |
| Storage temperature | -40..85&#176;C |
| Operating humidity | Max. 85% |
| Storage humidity | Max. 85% |
| IP Class | IP20/IP54 (opt.) |
| Approvals | ![ ](/guides/images/devices/smartbox-cube-io/certification.png) |
| Conformity Declerations | 2014/53/EU (Radio Equipment Directive - RED)</br></br><strong>Radio</strong></br>EN301511 v12.5.1 for GSM 900 and 1800 MHz</br>EN301908 v11.1.1 for UMTS band 1 and 8</br><strong>EMC</strong></br>EN 301489-1 v2.1.1 general part</br>EN 301489-52 v0.0.7 for GSM and UMTS</br><strong>Safety</strong></br>EN60950-01|</br> |
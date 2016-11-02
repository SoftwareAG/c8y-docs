---
title: SMARTBox-Modbus
layout: devices
---

## Overview

Smartbox Modbus, based on the Telit Chipset HE910 is a ready to use solution for connecting Modbus devices to the Cumulocity Fieldbus Cloud. It provides a Modbus RTU Master Communication on RS485 for connecting up to 20 devices. Easy configure the SetUp of building automation fielddevices like pumps, e-meters, Airhandling units in the Cumulocity Fieldbus cloud – the Smartbox Modbus will take care of it!...by automaticallypicking Up the coils and registers and sending alarms, measurements and status back to Cumulocity. Using the Smartrest protocol the terminal comes up with a low traffic solution for decentralized applications.   

![Overview](/guides/devices/smartbox-modbus/overview.png)

## Wire your Modbus RTU RS485 Network

Combined RS232/RS485 Interface. After StartUp (≈ 60sec) the RS232 is switched to RS485 Mode, half duplex. Table of DB9 pins: 
![RS232](/guides/devices/smartbox-modbus/rs232.png)

| Pin DB9 | RS232 | Full Name           | RS485 - Modbus | 
|:-------:|:-----:|:-------------------:|:--------------:|
| Pin 3	  | TD    | Transmit Data	      |                | 
| Pin 2	  | RD    | Receive Data        |                |
| Pin 7   | RTS   | Request To Send     |                |
| Pin 8   | CTS   | Clear To Send       |                | 
| Pin 6   | DSR   | Data Set Ready      | DATA+          |
| Pin 5   | SG    | Signal Ground       | GND            |
| Pin 1   | CD    | Carrier Detect      |                |
| Pin 4   | DTR   | Data Terminal Ready |                |
| Pin 9   | RI    | Ring Indicator      | DATA-          |


## Configure the Terminal

By default the terminal supports cloud fieldbus from Cumulocity. To use it you should:
* Subscribe your account to the Cloud Fieldbus app by contacting [support](https://support.cumulocity.com).
* Configure the terminal:
  1. Power on the Terminal.
  2. Configure the Terminal's APN by sending an SMS to Terminal's SIM card with the following syntax: `GPRS=APN,username,password` (e.g. `GPRS==public4.m2minternet.com,,`)

## Registering the Terminal in Cumulocity

In the cumulocity Cloud Fieldbus app go to the menu and there find Devices -> Registration. Enter the Terminal's IMEI as an ID. The IMEI is printed on the devices itself:

![IMEI](/guides/devices/smartbox-modbus/imei.png)

After accepting the device you should be able to see it in the All Devices list within 30 second.

![The Terminal in the List of All Devices](/guides/devices/smartbox-modbus/terminal-in-all-devices.png)

## An Example Modbus use case

 Assume  you  have  a  data  center  application:  A  chiller provides constant cold water of 7°C at the outlet. For each server rack line	, a precision air conditioner is  installed  which  maintain  the  rack temperature  to  20°C  by  blowing  cool  Air  through  the floor grid to the racks. The warm air at the outlet of each rack will be again cooled down by a heat exchanger, installed in the air conditioning units, fed from cool water coming from the chiller. Your company servicing the cooling system for your customer. You want to: 
 - be  informed  about  alarms  of  the  internal  refrigeration  systems  of  the  chiller  and precision air conditioners 
 - Maintain running hours of the compressors of the chiller 
 - Measure the electrical consumption of the system 
 - Measure the temperature of each rack managed by the precision air conditioning units 
 - be informed about critical temperatures 
 - Reset Alarms of chiller or precision air conditioning units 


![Topology](/guides/devices/smartbox-modbus/example-topology.png)
To connect this data center application to Cumulocity follow these steps: 
1. The Smartbox Modbus, acts as a Modbus Master. Connect all slaves together in one line and put different Slave addresses in the field devices, as well as a common Baudrate and Communication frame (e.g. 8/N/1). Normally all field devices provides such setting at a local display. 
2. For each different Field device (Chiller, Air Conditioning units, Energy meter) create the Device database entry in the Cloud Fieldbus App in Cumulocity: 
  1. Get the Modbus data point list, given by the manufacturer of the field device. E.g. http://bit.ly/22w5kur page 26 for a chiller 
  2. Create a device Chiller and include all relevant Modbus coils and registers from the step 2.1 . In this step, define whether the data point is an event, alarm, measurement, Value, Read/Write Value. How to do it: check here Cloud Fieldbus user's guide in the section Configuring Modbus device types.
3. Now build Up your Modbus network in the Modbus Configuration Tab:
  - Set Modbus Communication frame.
  - Add Field devices from step 2.2 and allocate the slave address in the Modbus network.

![Modbus Tab](/guides/devices/smartbox-modbus/fieldbus-config.png)

In Cumulocity, each Field device come up as a single child device of the Terminal. So in this case we would have 3 child devices. After saving the changes, the terminal will discover all child devices and its Modbus items and begin feeding the platform with measurements, alarms, events, values. *Note: Without a setup network, the terminal will not send any data.*

The default name of the terminal is the IMEI. Click on the terminal to view the detailed information. You can change the terminal's name on the "Info" tab, which also displays basic information such as serial number of the router and SIM card data. After changing the name, remember to click "save changes" button at the bottom of the "Info" page. All data coming from the field devices are available under the section child devices.

## References

For further information please refer to the [manual](/guides/devices/smartbox-modbus/Manual_Smartbox-Modbus_29-09-2016.pdf) and [datasheet](/guides/devices/smartbox-modbus/Datasheet_Smartbox-Modbus_26-09-2016.pdf) provided by PSsystec.

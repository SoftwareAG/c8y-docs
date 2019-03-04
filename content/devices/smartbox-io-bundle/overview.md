---
title: Overview
layout: redirect
weight: 10
---

[>> get the Agent](mailto:kontakt@pssystec-gmbh.de)</br>
[>> PSsystec Downloads](https://www.pssystec.de/downloads/)


Smartbox, based on the Telit Chipset HE910 is a ready to use solution for connecting Modbus devices to the Cumulocity Fieldbus Cloud. It provides a Master Slave Communication on RS485 for connecting up to 10 devices as well as 10 Sensors (Current ,Temperature, Pressure). Easy configure the SetUp of building automation fielddevices like pumps, e-meters, Airhandling units in the Cumulocity Fieldbus cloud or connect different sensortypes to the box. Using the MQTT protocol the terminal comes up with a low traffic solution for decentralized applications. 

![Overview](/guides/images/devices/smartbox-io/overview.png)

| Smartbox IO Overview <td colspan=2> 
| --- | --- | --- |
| ![Radio](/guides/images/devices/smartbox-io/radio.png) <td colspan=2>  <ul><li>2G  - global</li><li>3G  - EMEA, APAC, NA, Global</li><li>LTE - EMEA, APAC, Americas</li><li>GNSS</li><li>Default: 3G EMEA / APAC</li></ul>
| ![Connectivity](/guides/images/devices/smartbox-io/connectivity.png) | Fieldbus |<ul><li>Modbus RTU (RS232/RS485) ![ ](/guides/images/devices/smartbox-io/modbus.png)  |
| | Sensors | <ul><li>Digital Input (DIN)</li><li>AIN (NTC,0..20mA)</li><li>10 x Universal inputs (NTC, PT100, PT1000, 0..10V, DIN)</li><li>1 x RelayOutput</li></ul> |
| ![Cloudagent](/guides/images/devices/smartbox-io/cloudagent.png) <td colspan=2>  MQTT Agent for Cumulocity IoT, T-Systems- Cloud der Dinge

### For further information: 
* please refer to the datasheet [provided by PSsystec](https://www.pssystec.de/downloads/) or download [here](/guides/images/devices/smartbox-io/Datasheet-SMARTbox-IO.pdf)
* For installing the agent and SW releases, pls refer to Release notes folder of Device guide in Cumulocity or go to: http://cumulocity.com/guides/devices/smartbox-release-notes/ 
* For getting the device pls contact Cumulocity Hardware support or Pssystec (kontakt@pssystec-gmbh.de) 
* The full product overview pls download it https://www.pssystec.de/downloads/ 

### Contents

* [Wire](#wire)  your Smartbox
* [Connect the Smartbox](#connect-the-smartbox) to your Cumulocity Account
* Use the [built-in IOs](#ios) 
* [Connect a Modbus Device](#connect-a-modbus-device) to the SMARTbox 
* Use the built-in [location functionality](#location) 
* Use the built-in [tracking functionality](#tracking) 
* [Manage the Agent](#manage-agent)
* Remotely Manage [APN, Tenant, Reboot](#apn-tenant-reboot)
* Operate the Device by [SMS](#sms)
* Operate AT commands via [device shell](#device-shell) 
* Local [Debug](#debug) the device  
* Help for setting up the items in [device database](#device-database) 
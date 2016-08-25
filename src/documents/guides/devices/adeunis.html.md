---
layout: devices
title: Adeunis LoRaWAN Demonstrator 
---

## Overview

The following data are currently recorded:

* Raw Adeunis data as event
* Signal strength measurement including RSSI (Received signal strength indication), SNR (Signal noise ratio) and average SNR
* Battery voltage measurement
* Device temperature measurement
* Accelerometer warning  as alarm
* Button 1 triggered as event
* GPS position as event and location update

## Configuring Adeunis devices for Cumulocity

Currently Cumulocity only supports connecting Adeunis LoRa Demonstrator devices via Actility AS. After connecting and adding you device in your Actility AS instance (https://partners.thingpark.com/) you have to create a new "AS Routing Profile" for Cumulocity using destination http://actility-server.cumulocity.com as "Third Party AS (HTTP)" and assign it to you devices.

### Device registration

When you device is configured correctly in Actility AS, you can register you device with Cumulocity with the normal device registration process using the serialnumber.

## Data created by Adeunis devices

The full payload contained in the data callback will be created as an event. Also any location update and triggering the button will create an event.

![Adeunis event](/guides/devices/adeunis/adeunis_event.png)

The signal strength, battery and temperature values will be created as measurements.

![Adeunis signal strength](/guides/devices/adeunis/adeunis_signalstrength.png)

![Adeunis battery](/guides/devices/adeunis/adeunis_battery.png)

![Adeunis temperature](/guides/devices/adeunis/adeunis_temperature.png)

When the accelerometer of the device was triggered an alarm is generated. The alarm is cleared automatically when the device is not moved in the next measurement period.

![Adeunis location](/guides/devices/adeunis/adeunis_alarm.png)

The location and movement of the devices is tracked with each received GPS position.

![Adeunis location](/guides/devices/adeunis/adeunis_location.png)

![Adeunis tracking](/guides/devices/adeunis/adeunis_tracking.png)

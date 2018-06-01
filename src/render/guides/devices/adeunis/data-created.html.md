---
order: 30
title: Data created
layout: redirect
---

Device protocol mapping with LoRa device type creation only supports decoding for fixed byte positions. Adeunis LoRa Demonstrator's uplink payload does not fulfill this requirement. Cumulocity provides an Esper event processing module to successfully decode the Adeunis LoRa Demonstrator uplink data. Download the module for Adeunis LoRa Demonstrator from [here](http://resources.cumulocity.com/examples/lora/adeunis-demonstrator-payload-decoder.epl) and use event processing tool to deploy it.

To deploy the EPL module, go to Event Processing in the Administration application and create a new module.
Place the content of the file and deploy.

**The following data is recorded:**

* Raw Adeunis data as event
* Signal strength measurement including RSSI (Received signal strength indication), SNR (Signal noise ratio) and average SNR
* Battery voltage measurement
* Device temperature measurement
* Accelerometer warning  as alarm
* Button 1 triggered as event
* GPS position as event and location update

The full payload contained in the data callback will be created as an event. Any location updates and triggering of the button will create an event as well. 

![Adeunis event](/guides/images/devices/adeunis/adeunis_event.png)

The signal strength, battery and temperature values will be created as measurements.

![Adeunis signal strength](/guides/images/devices/adeunis/adeunis_signalstrength.png)

![Adeunis battery](/guides/images/devices/adeunis/adeunis_battery.png)

![Adeunis temperature](/guides/images/devices/adeunis/adeunis_temperature.png)

When the accelerometer of the device is triggered, an alarm is generated. The alarm is cleared automatically if the device is being stationary in the next measurement period.

![Adeunis location](/guides/images/devices/adeunis/adeunis_alarm.png)

The location and movement of the devices is tracked with each received GPS position.

![Adeunis location](/guides/images/devices/adeunis/adeunis_location.png)

![Adeunis tracking](/guides/images/devices/adeunis/adeunis_tracking.png)

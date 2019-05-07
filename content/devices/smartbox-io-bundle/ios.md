---
title: Use the built-in IOs
layout: redirect
weight: 50
---
To activate all sensors and Configurable Options proceed as follows:
1.	Upload the sensor-model in device database. Download the sensorboard model Type https://www.pssystec.de/downloads/ - CloudModels
2.	Edit the Sensor model if you need it (refer to Configuring Fieldbus device types) but keep the addresses. You will be able to configure for each Input how it should be displayed - You can define each Input as a Measurement or Alarm or event or just a display value. Note that Sensortype is not defined here, but as you will see the parameter which is responsible for the sensortype selection is part of the device model.
3.	"Add" the sensor Model in Modbus tab on address 1 with Baudrate 19200/8/N/1
4.	Include the fieldbus widget in the cockpit related to the device and display all items. You can now see all items of the Sensormodel and you can configure the inputs as Temperature sensor or Digitalinputs.

---
weight: 75
title: Adjusting Sensor Properties
layout: redirect
---

When editing a sensor's properties, it is possible to change the following settings:

* The interval in seconds between measurements sent to Cumulocity IoT
* The minimum and maximum thresholds for data values to be sent
* The size and number of simulated Peak values to be sent.

The update interval will determine how often the sensor is queried by the phone, as well as how often data is sent to Cumulocity IoT. Altering the value here will also affect the speed at which charts are redrawn in the application. The minimum value for the update interval is 0.1 seconds. Note that at shorter update intervals, both the sensor device and the phone itself will consume more power.

Minimum and maximum thresholds affect the handling of the incoming data. By default, both the minimum and maximum values will be infinite - that is, any recorded value from the sensor will be sent directly to Cumulocity IoT.  Users can drag the slider to adjust these values, or type a new value directly into the text boxes at each end of the slider. To change the slider between adjusting minimum and maximum values on iOS, tap in the text box on that side. Although there is a recommended range for sensor measurements, it is possible to type values outside of this range if desired. 

To get back to unlimited values, simply drag the slider all the way to the end of the range again.

With non-infinite threshold minimum or maximum values configured, measurements sent to Cumulocity will be capped to the minimum and maximum threshold values. No measurement values outside the threshold will be sent to Cumulocity. 

Simulated peaks can be useful for sending data values outside of the expected range on demand. These can be used for testing rules, alarms and other such functionality in a controlled and repeatable manner. The application will allow users to specify the peak value to use, as well as the number of times the sensor will be simulated at that value.

![Sensor properties](/images/users-guide/csa/csa-sensor-properties.png)
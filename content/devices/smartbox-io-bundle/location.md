---
title: Use the built-in location functionality
layout: redirect
weight: 80
---
The terminal features cell location and is available in Location tab on terminal level. Devices are shown as "pins" that you can click to see the name of the device. Clicking the name of the device takes you to the detailed view of the device. In Smartbox Mini you have 3 Options:
1.	Using the built in Cell Location. The terminal identifies  3 cells in the near environment and derives the location (default)
2.	Using the hardware  Option with a built in- GPS (this is an extra option). Set c8y.GPS=1 then GPS is enabled. Setting c8y.GPS=0 Cell location is enabled (default)
3.	Activate a regular identification of the location. In Configuration tab you can set:
</br> c8y.LocationCycle=60; define in min, how often the location should be checked. 0 means the cycled checking is disabled. If a value >0 ist set, also the tracking is enabled


![Location](/images/devices/smartbox-mini/location.png)

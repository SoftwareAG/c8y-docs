---
title: Use the built-in tracking functionality
layout: redirect
weight: 90
---
Devices can record the history of their movements in Cumulocity. Using the tracking tab, you can select a time period and visualize the movements of the device during this time period. Movements are shown as red lines on the map.

Next to the map, the individual recordings with their time are listed ("location update events"). When you click a recording, a "pin" on the map will show the location at the time of the recording.

Activate a regular identification of the location. In Configuration tab you can set. If the value of c8y.LocationCycle is greater 0 then tracking is enabled.

![Tracking](/guides/images/devices/smartbox-io/tracking.png)

Depending on the type of device and the integration into Cumulocity, you can also configure device-side geo-fencing and motion detection.

Additionally, when the feature is activated, Cell ID information can be used to determine the position of the device. Currently, the services from Combain and Google are supported. The user can see the tracks based on both data, or filter out GPS based data or Cell ID based data.


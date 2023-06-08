---
weight: 170
title: Tracking
layout: redirect
---

Devices can record the history of their movements in {{< product-c8y-iot >}}. This movements may be viewed in the **Tracking** tab.

{{< c8y-admon-info >}}
The **Tracking** tab only shows up when a device contains `c8y_Position` property.
{{< /c8y-admon-info >}}

In the dropdown list at the top right you can select a time period (or specify one by selecting "Custom- from the list) and visualize the movements of the device during this period. Movements are shown as red lines in the map.

![Tracking tab](/images/users-guide/DeviceManagement/devmgmt-devices-tracking.png)

Next to the map, the individual recordings with their time are listed ("location update events"). When you click a recording, a "pin" on the map will show the location at the time of the recording.

Depending on the type of device and the integration into {{< product-c8y-iot >}}, you can configure device-side geo-fencing and motion detection.

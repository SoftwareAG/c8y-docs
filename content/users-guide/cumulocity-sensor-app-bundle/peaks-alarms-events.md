---
weight: 77
title: Simulating peaks and sending alarms and events
layout: redirect
---

![Sensor buttons](/images/users-guide/csa/csa-sensor-buttons.png)

In order to simulate peak values, tap the 3rd button on the card for that sensor. The application will ask if you wish to start simulating peak values. Select **simulate** to begin. If the phone is connected to Cumulocity IoT, then it will send these values to the server instead of the measurements coming from the selected sensor.

Sending alarms and events requires the phone to be connected to Cumulocity IoT. If the device is not connected, the icons are greyed out. Tap the bell icon to send an alarm.

![Alarm dialog](/images/users-guide/csa/csa-alarm-dialog.png)

This will open a dialog in which you can select the alarm text, its type, and its severity. Tap **create** to generate the alarm and send it to the Cumulocity IoT sever.

To generate an event, tap the icon that looks like a dot with lines radiating from it. 

![Event dialog](/images/users-guide/csa/csa-event-dialog.png)

This will open a dialog where the user can set the event text and type. Tap **create** to generate the event and send it to Cumulocity IoT platform.
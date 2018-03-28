---
title: Data created by Telic device
layout: redirect
order: 50
---
Telic creates following events:

* Location update event
* Geofence enter event
* Geofence exit event
* Motion started event
* Motion ended event
* Charger connected event

The central point is location event which has properties:

* "satellitesForCalculation" - is the number of satellites used to position calculation.
* "GPSTimestamp" - is the GPS timestamp.
* "logTimestamp" - is the value representing timestamp when the logging happened. This value is also substituted for time of all created events and measurements.
* "reportReason" - is the report reason and can have one of the folowing values: "Time Event", "Distance Event", "Angular Change Event", "Power Event", "Geofence Area Enter", "Geofence Area Exit", "Motion Start", "Motion Stop".
The "c8y_Position" fragment of the event is also updated in the device ManagedObject.
* "Fix type" - GPS fix: "No Fix", "2D Fix" or "3D Fix".
* "trackingProtocol" - is  the name of tracking protocol.

Telic events are listed here:

![Telic Events](/guides/images/devices/telic/telic_events_1.png)

Telic creates following measurements:

* Altitude measurement
* Speed measurement
* Mileage measurement
* Battery level measurement
* Motion measurement (with values: 1 - for motion, 0 - for stationary)

Telic measurements are presented in the graphs:

![Telic Measurements](/guides/images/devices/telic/telic_measurements_1.png)

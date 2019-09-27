---
title: Data created by Telic device
layout: redirect
weight: 50
---

### Events

Telic creates the following events:

* Location update event
* Geofence enter event
* Geofence exit event
* Motion started event
* Motion ended event
* Charger connected event

The central point is location event which has the following properties:

* satellitesForCalculation - The number of satellites used for position calculation.
* GPSTimestamp - The GPS timestamp.
* logTimestamp - The timestamp of the logging. This value is also substituted for time of all created events and measurements.
* reportReason - The report reason;  can have one of the following values: "Time Event", "Distance Event", "Angular Change Event", "Power Event", "Geofence Area Enter", "Geofence Area Exit", "Motion Start", "Motion Stop".
The "c8y_Position" fragment of the event is also updated in the device ManagedObject.
* Fix type - GPS fix, one of "No Fix", "2D Fix" or "3D Fix".
* trackingProtocol - The name of the tracking protocol.

Telic events are listed here:

![Telic Events](/images/devices/telic/telic_events_1.png)

### Measurements

Telic creates the following measurements:

* Altitude measurement
* Speed measurement
* Mileage measurement
* Battery level measurement
* Motion measurement (with values: 1 - for motion, 0 - for stationary)

Telic measurements are presented in the graphs:

![Telic Measurements](/images/devices/telic/telic_measurements_1.png)

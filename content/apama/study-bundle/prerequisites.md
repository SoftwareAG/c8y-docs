---
weight: 10
title: Prerequisites
layout: redirect
---

### Goal

We want our tracking devices that are continuously sending location events to automatically generate alarms if they move outside a geofence. This geofence will be a circle and should be configurable for each device separately. The alarm will be created at the moment the device moves outside the geofence. While it is moving outside, it should not create new alarms because the first one will remain active. As soon as the device moves back into the geofence, the alarm will be cleared.

### Cumulocity IoT data model

Location event structure (the part we need):

    {
      "id": "...",
      "source": {"id": "..."},
      "text": "...",
      "time": "...",
      "type": "...",
      "c8y_Position": {"alt": ..., "lng": ..., "lat": ...}
    }

We store the geofence configuration in the device (the radius will be configured in meters):

    {
      "c8y_Geofence": {"lat": ..., "lng": ..., "radius": ...}
    }

Additionally, we want to enable/disable the geofence alarms for each device without removing the configuration entirely. We will do that by adding/removing "c8y_Geofence" to `c8y_SupportedOperations` in the device:

    {
      "c8y_SupportedOperations": [..., "c8y_Geofence", ...]
    }

### Calculation

The device is outside of the geofence if the distance between the current position and the center is bigger than the configured radius of the geofence. What we need is a function that can calculate the difference between *two* geo-coordinates:

```java
action distance(float lat1, float lon1, float lat2, float lon2) returns float {
	float R := 6371000.0;
	float toRad := float.PI / 180.0;
	float lat1Rad := lat1 * toRad;
	float lat2Rad := lat2 * toRad;
	float deltaLatRad := (lat2-lat1) * toRad;
	float deltaLonRad := (lat2-lat1) * toRad;
	float a := (deltaLatRad/2.0).sin().pow(2.0) * lat1Rad.cos() * lat2Rad.cos() * (deltaLonRad/2.0).sin().pow(2.0);
	float c := 2.0 * a.sqrt().atan2((1.0-a).sqrt());
	return R * c;
}
```

The above action will return the distance in meters.

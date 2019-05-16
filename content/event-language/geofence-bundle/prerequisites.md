---
weight: 10
title: Prerequisites
layout: redirect
---

### Goal

We want our tracking devices that are continuously sending location events to automatically generate alarms if they move outside a geofence.
This geofence will be a circle and should be configurable for each device separately. The alarm will be created at the moment the device moves outside the geofence.
While it is moving outside it should not create new alarms because the first one will keep active.
As soon as the device moves back into the geofence the alarm will be cleared.

### Cumulocity data model

Location event structure (the part we need):

    {
      "id": "...",
      "source": {
        "id": "...",
      },
      "text": "...",
      "time": "...",
      "type": "...",
      "c8y_Position": {
        "alt": ...,
        "lng": ...,
        "lat": ...
      }
    }

How do we store the geofence configuration in the device (the radius will be configured in meters):

    {
      "c8y_Geofence": {
        "lat": ...,
        "lng": ...,
        "radius": ...
      }
    }

Additionally we want to enable/disable the geofence alarms for each device without removing the configuration entirely.
We will do that by adding/removing "c8y_Geofence" to c8y_SupportedOperations in the device:

    {
      "c8y_SupportedOperations": [..., "c8y_Geofence", ...]
    }

### Calculation

The device is outside of the geofence if the distance between the current position and the center is bigger than the configured radius of the geofence.
What we need is a function that can calculate the difference between to geo-coordinates:

    create expression distance(lat1, lon1, lat2, lon2) [
    	var R = 6371000;
    	var toRad = function(arg) {
    		return arg * Math.PI / 180;
    	};
    	var lat1Rad = toRad(lat1);
    	var lat2Rad = toRad(lat2);
    	var deltaLatRad = toRad(lat2-lat1);
    	var deltaLonRad = toRad(lon2-lon1);

    	var a = Math.sin(deltaLatRad/2) * Math.sin(deltaLatRad/2) +
    		Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLonRad/2) * Math.sin(deltaLonRad/2);

    	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    	var d = R * c;
    	d;
    ];

The above function will return the distance in meters.

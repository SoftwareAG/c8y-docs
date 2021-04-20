---
weight: 40
title: "Step 3: Checking if the device supports c8y_Geofence"
layout: redirect
---

With the device available we will now check if there is a geofence configured for the device and if it is activated (contains "c8y_Geofence" in c8y_SupportedOperations).
To check the c8y_SupportedOperations array we will extract it from the device and use the anyOf() function. This function will loop through all elements and return true if the expression returns true for an element.
For the configuration we will just check if the device contains the fragment "c8y_Geofence"

    create schema LocationEventWithGeofenceConfig (
    	event Event,
    	eventLat Number,
    	eventLng Number,
    	centerLat Number,
    	centerLng Number,
    	maxDistance Number
    );

    @Name('parse_event_and_device_fragments')
    insert into LocationEventWithGeofenceConfig
    select
    	c.event as event,
      getNumber(e.event, "c8y_Position.lat") as eventLat,
      getNumber(e.event, "c8y_Position.lng") as eventLng,
      getNumber(e.device, "c8y_Geofence.lat") as centerLat,
      getNumber(e.device, "c8y_Geofence.lng") as centerLng,
      getNumber(e.device, "c8y_Geofence.radius") as maxDistance
    from LocationEventAndDevice e
    where  
    	getList(e.device, "c8y_SupportedOperations", new ArrayList()).anyOf(el => el = "c8y_Geofence") = true
    	and getObject(e.device, "c8y_Geofence") is not null;

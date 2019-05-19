---
weight: 50
title: "Step 4: Creating the trigger"
layout: redirect
---

As mentioned earlier the device is outside of the fence if the distance between the current device position and the geofence center is bigger than the configured geofence radius.
To trigger the alarm we need 2 events so we can check if within these two events the device entered or left the geofence.

In the first step we calculate the distance with the function mentioned earlier:

    create schema LocationEventWithDistance (
    	event Event,
    	maxDistance Number,
    	distance Number
    );

    @Name('calculate_current_distance')
    insert into LocationEventWithDistance
    select
    	e.event as event,
    	e.maxDistance as maxDistance,
    	cast(distance(centerLat, centerLng, eventLat, eventLng), java.lang.Number) as distance
    from LocationEventWithGeofenceConfig e;

Now we create a window which holds the last two events

    create schema LocationEventWithDistancePair (
    	firstPos LocationEventWithDistance,
    	secondPos LocationEventWithDistance
    );

    @Name('last_two_positions')
    insert into LocationEventWithDistancePair
    select
    	first(*) as firstPos,
    	last(*) as secondPos
    from LocationEventWithDistance.win:length(2);

The stream LocationEventWithDistancePair now holds all data for checking if we should create the alarm or not.


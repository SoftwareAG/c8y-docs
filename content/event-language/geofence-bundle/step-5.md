---
weight: 60
title: "Step 5: Creating the alarm"
layout: redirect
---
To create the alarm we now need two events where the first one has a distance smaller than the radius and the second one has a distance bigger than the radius.
This would mean that the device just left the geofence.

    @Name('create_geofence_alarm')
    insert into CreateAlarm
    select
    	pair.firstPos.event.source as source,
    	"ACTIVE" as status,
    	current_timestamp().toDate() as time,
    	"c8y_GeofenceAlarm" as type,
    	"MAJOR" as severity,
    	"Device moved out of circular geofence" as text
    from LocationEventWithDistancePair pair
    where pair.firstPos.distance.doubleValue() <= pair.firstPos.maxDistance.doubleValue()
    and pair.secondPos.distance.doubleValue() > pair.secondPos.maxDistance.doubleValue();
---
weight: 80
title: "Step 7: Creating a device context"
layout: redirect
---

Our rule is already working now but there is one issue left: where to send the location event.
If a device A sends a location event which is inside its geofence and the following event is from a device B which is outside the geofence it would create an alarm.
The alarm would be generated for device A because when creating the alarm we regard the source of the first arriving event as source for the alarm creation.
We must configure that the window which holds the latest two events should only hold events of the same device.
If there is an event from another device a new window should be created so there is one window for each device.

This can be achieved with a context. We only need the context at the point where we create the window.
The partition for the context should be the device id so that the engine automatically creates a separate context partition for every device.

    create context GeofenceDeviceContext
	   partition by event.source.value from LocationEventWithDistance;

Now we can add the context to the statement where we create the window. A context can only be applied to statements where the input of the statement is configured in the context.
Otherwise the engine would not know which value to take for creating context partitions.

    @Name('last_two_positions')
    context GeofenceDeviceContext
    insert into LocationEventWithDistancePair
    select
      first(*) as firstPos,
      last(*) as secondPos
    from LocationEventWithDistance.win:length(2);

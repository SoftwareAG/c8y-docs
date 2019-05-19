---
weight: 70
title: "Step 6: Clearing the alarm"
layout: redirect
---

To clear the alarm we just need to switch the condition at the bottom and additionally grab the currently active alarm to get its ID.
We do not need to care about whether there is an existing alarm at this point. If there is none this statement will not evaluate successfully because the function would return null.

    @Name('clear_geofence_alarm')
    insert into UpdateAlarm
    select
        findFirstAlarmBySourceAndStatusAndType(pair.firstPos.event.source.value, "ACTIVE", "c8y_GeofenceAlarm").getId().getValue() as id,
        "Device moved back into circular geofence" as text,
        "CLEARED" as status
    from LocationEventWithDistancePair as pair
    where pair.firstPos.distance.doubleValue() > pair.firstPos.maxDistance.doubleValue()
    and pair.secondPos.distance.doubleValue() <= pair.secondPos.maxDistance.doubleValue();

---
weight: 90
title: Putting everything together
layout: redirect
---

We can now combine all the parts into one module. The order of the statements does not matter.
The only exception is that if you use custom models (like schemas, functions, contexts, variables, ...) you must declare them before using them.

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

    create schema LocationEvent(
      event Event
    );

    create schema LocationEventAndDevice (
      event Event,
      device ManagedObject
    );

    create schema LocationEventWithGeofenceConfig (
      event Event,
      eventLat Number,
      eventLng Number,
      centerLat Number,
      centerLng Number,
      maxDistance Number
    );

    create schema LocationEventWithDistance (
      event Event,
      maxDistance Number,
      distance Number
    );

    create schema LocationEventWithDistancePair (
      firstPos LocationEventWithDistance,
      secondPos LocationEventWithDistance
    );

    create context GeofenceDeviceContext
     partition by event.source.value from LocationEventWithDistance;

    @Name('Location_event_filter')
    insert into LocationEvent
    select
      e.event as event
    from EventCreated e
    where getObject(e, "c8y_Position") is not null;

    @Name('fetch_event_device')
    insert into LocationEventAndDevice
    select
      e.event as event,
      findManagedObjectById(event.source.value) as device
    from LocationEvent e;

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

    @Name('calculate_current_distance')
    insert into LocationEventWithDistance
    select
      e.event as event,
      e.maxDistance as maxDistance,
      cast(distance(centerLat, centerLng, eventLat, eventLng), java.lang.Number) as distance
    from LocationEventWithGeofenceConfig e;

    @Name('last_two_positions')
    context GeofenceDeviceContext
    insert into LocationEventWithDistancePair
    select
      first(*) as firstPos,
      last(*) as secondPos
    from LocationEventWithDistance.win:length(2);

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

    @Name('clear_geofence_alarm')
    insert into UpdateAlarm
    select
        findFirstAlarmBySourceAndStatusAndType(pair.firstPos.event.source.value, "ACTIVE", "c8y_GeofenceAlarm").getId().getValue() as id,
        "Device moved back into circular geofence" as text,
        "CLEARED" as status
    from LocationEventWithDistancePair as pair
    where pair.firstPos.distance.doubleValue() > pair.firstPos.maxDistance.doubleValue()
    and pair.secondPos.distance.doubleValue() <= pair.secondPos.maxDistance.doubleValue();

---
order: 60
title: Study: circular geofence alarms
layout: default
---

## Overview

This module will give an in depth example how you can create more complex rules. It will use multiple of the features explained before in the other guide sections.
If you are just starting with the Cumulocity Event Language please take a look at [these examples](/guides/event-language/examples).

## Prerequisites

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

## Step 1: Filter the input

The main input for this module will be events. To discard non- matching events as early as possible we will create a filter in one statement that only matching events will pass.
These will be put to a new stream.

    create schema LocationEvent(
      event Event
    );

    @Name('Location_event_filter')
    insert into LocationEvent
    select
      e.event as event
    from EventCreated e
    where getObject(e, "c8y_Position") is not null;

We do not need the additional information of EventCreated and just take the payload (the event) to the next stream.

## Step 2: Collecting necessary data

In the next step we need the configuration of the geofence for the calculation and grab it. Together with the event we will forward it into the next stream.

    create schema LocationEventAndDevice (
    	event Event,
    	device ManagedObject
    );

    @Name('fetch_event_device')
    insert into LocationEventAndDevice
    select
    	e.event as event,
    	findManagedObjectById(event.source.value) as device
    from LocationEvent e;

## Step 3: Check if device supports c8y_Geofence

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

## Step 4: Creating the trigger

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

## Step 5: Creating the alarm

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

## Step 6: Clear the alarm

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

## Step 7: Creating a device context

Our rule is already working now but there is one issue left: where to send the location event.
If a device A sends a location event which is inside its geofence and the following event is from a device B which is outside the geofence it would create an alarm.
The alarm would be generated for device A because when creating the alarm we regard the source of the first arriving event as source for the alarm creation.
We need to configure that the window which holds the latest two events should only hold events of the same device.
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

## Putting everything together

We can now combine all the parts into one module. The order of the statements does not matter.
The only exception is that if you use custom models (like schemas, functions, contexts, variables, ...) you need to declare them before using them.

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

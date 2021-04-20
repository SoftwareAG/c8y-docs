---
weight: 30
title: "Step 2: Collecting necessary data"
layout: redirect
---

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

---
weight: 20
title: Advanced trigger
layout: redirect
aliases:
  - /event-language/advanced#advanced-trigger
---

Triggering a statement by an arriving event in some stream is not the only possibility.
The following sections will cover other ways to trigger statements and combining triggers.

### Pattern

Patterns enable you to trigger by combinations or sequences of other triggers.
If you have a trigger like this

    from EventCreated e;

the functionality is identical with this trigger using a pattern.

    from pattern [every e=EventCreated];

It is also possible to add filters in the pattern.

    from pattern [every e=EventCreated(event.type = "myEventType")];

You can trigger by joining streams.

    from EventCreated e unidirectional, AlarmCreated.std:lastevent() a
    where e.event.source = a.alarm.source;

This will trigger on every EventCreated (defined through the keyword unidirectional) and add the latest AlarmCreated if it is from the same device.

_Note: it will not add the latest AlarmCreated of the device but the latest AlarmCreated overall if it is from the same device_


You can also trigger by sequences.

    from pattern[every (e=EventCreated -> a=AlarmCreated(alarm.source = e.event.source))];

This will trigger for every pair EventCreated followed by AlarmCreated. It will start on an arriving EventCreated and then finally trigger on an AlarmCreated from the same device.
Afterwards it is going to wait for the next EventCreated.

### Timer

Instead of using streams for triggering a statement there is also the possibility to trigger by timers.
You can either trigger in a certain interval

    from pattern [every timer:interval(5 minutes)];

or as a cron job.

    // timer:at(minutes, hours, daysOfMonth, month, daysOfWeek, (optional) seconds)
    // minutes: 0-59
    // hours: 0-23
    // daysOfMonth: 1-31
    // month: 1-12
    // daysOfWeek: 	0 (Sunday) - 6 (Saturday)
    // seconds: 0-59

    from pattern [every timer:at(*, *, *, *, *)]; // trigger every minute
    from pattern [every timer:at(*, *, *, *, *, *)]; // trigger every second
    from pattern [every timer:at(*/10, *, *, *)]; // trigger every 10 minutes
    from pattern [every timer:at(0, 1, *, *, [1,3,5])]; // trigger at 1am every monday, wednesday and friday
    from pattern [every timer:at(0, */2, (1-7), *, *)]; // trigger every 2 hours on every day in the first week of every month

You can also combine timer patterns with other patterns.
For example you can check if there was an event within a certain time after another event.

    from pattern [every e=EventCreated -> (timer:interval(10 minutes) and not a=AlarmCreated)];

This will trigger if there is an EventCreated and within 10 minutes there is no AlarmCreated.

### Outputs

Outputs give you the possibility to not take every event on a stream into account and to directly control when a statement should output its result.
If you have a measurement that is taken every 10 seconds and you want to do calculations with it maybe it is not necessary to calculate with all measurements but only a subset.

    // will output the last measurement arrived every 1 minute
    from MeasurementCreated e
    where e.measurement.type = "c8y_TemperatureMeasurement"
    output last every 1 minutes;

    // will output the first of every 20 measurements arriving
    from MeasurementCreated e
    where e.measurement.type = "c8y_TemperatureMeasurement"
    output first every 20 events;

    // will output all 20 measurements after the 20th arrived
    from MeasurementCreated e
    where e.measurement.type = "c8y_TemperatureMeasurement"
    output every 20 events;

If you need to take all measurements into account because for example, you want to calculate the sum of your measurements and you do not want to update it for every new measurement.

    select
        sum(getNumber(e, "myCustomMeasurement.mySeries.value")),
        last(*)
    from MeasurementCreated e
    where e.measurement.type = "myCustomMeasurement"
    output last every 50 events;

Every 50 measurements this statement will output the sum (of all measurements since deployment not just of the 50) and the latest measurement.

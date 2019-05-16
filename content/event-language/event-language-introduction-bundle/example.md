---
weight: 40
title: Example
layout: redirect
---

As an example, we create a statement. It should listen to a stream and create a new event in another stream whenever the specified condition applies.
As example we want to create an alarm for each temperature measurement that is created.

1. To create an alarm we need to `insert into` the stream `CreateAlarm`.
2. We need to specify all parameters for the event in the `select` clause.
3. We want the alarm to be created when an event `from` the stream `MeasurementCreated` is received.
4. We want the alarm only be created under certain conditions of the event from the `MeasurementCreated` stream which we specify in the `where` clause.

The resulting statement can look like this:

    insert into CreateAlarm
    select
      measurementEvent.measurement.time as time,
      measurementEvent.measurement.source.value as source,
      "c8y_TemperatureAlarm" as type,
      "Temperature measurement was created" as text,
      "ACTIVE" as status,
      "CRITICAL" as severity
    from MeasurementCreated measurementEvent
    where measurementEvent.measurement.type = "c8y_TemperatureMeasurement";

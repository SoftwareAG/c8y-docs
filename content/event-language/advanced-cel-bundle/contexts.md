---
weight: 70
title: Contexts 
layout: redirect
aliases:
  - /event-language/advanced#contexts
---

Contexts give you the possibility to handle and sort events based on defined values.
If you want to create a calculation for some measurements you usually want this to be done for all the devices having this measurement and more importantly separated for each device.

Taking this example

    select
      avg(getNumber(e, "myCustomMeasurement.mySeries.value")),
      last(*)
    from MeasurementCreated.win:length(100) e
    where e.measurement.type = "myCustomMeasurement";

It will work perfectly for a single device. But as soon as you have two devices the average calculation would be over both devices because all measurements end up in MeasurementCreated.
The statement is not aware of how to distinguish the measurements by device.
Creating a context is like telling the statement where it can find the information by which it should separate the incoming events.

    create context DeviceAwareContext
      partition by measurement.source.value from MeasurementCreated;

This context definition declares that in the stream MeasurementCreated the context key (by which we want to separate the events) can be found at measurement.source.value which is the ID of the device.

Now we can add the context to the statement:

    context DeviceAwareContext
    select
      avg(getNumber(e, "myCustomMeasurement.mySeries.value")),
      last(*)
    from MeasurementCreated.win:length(100) e
    where e.measurement.type = "myCustomMeasurement";

Now the average will be calculated for each device separately.

The context can only be applied to statements that have an input that is declared in the context.
If you have multiple statements that need to be context aware and have different inputs you need to configure each input in the context and where to find the context key.

    create context DeviceAwareContext
      partition by
        measurement.source.value from MeasurementCreated,
        alarm.source.value from AlarmCreated,
        event.source.value from EventCreated,
        operation.deviceId.value from OperationCreated;

You can also create context keys of multiple values:

    create context DeviceAwareContext
      partition by measurement.source.value and measurement.type from MeasurementCreated;

This context will not only create an own partition for each device but also for each measurement type.

---
weight: 30
title: Event windows
layout: redirect
aliases:
  - /event-language/advanced#event-windows
---

Event windows give you the possibility to batch together multiple events in a stream for further analysis.
There are mainly two ways to create windows:

1. Windows for a certain time

    select
      avg(getNumber(e, "myCustomMeasurement.mySeries.value")),
      last(*)
    from MeasurementCreated.win:time(1 hours) e
    where e.measurement.type = "myCustomMeasurement";

    select
      avg(getNumber(e, "myCustomMeasurement.mySeries.value")),
      last(*)
    from MeasurementCreated.win:time(1 hours) e
    where e.measurement.type = "myCustomMeasurement"
    output last every 1 hours;

The difference between the two statements is that the first one will trigger on every MeasurementCreated and then output the average of the last hour.
The second statement only triggers every hour and will only output the last average (calculated when the last MeasurementCreated was received).


2. Windows with a certain amount of events:

    select
      avg(getNumber(e, "myCustomMeasurement.mySeries.value")),
      last(*)
    from MeasurementCreated.win:length(100) e
    where e.measurement.type = "myCustomMeasurement";

    select
      avg(getNumber(e, "myCustomMeasurement.mySeries.value")),
      last(*)
    from MeasurementCreated.win:length(100) e
    where e.measurement.type = "myCustomMeasurement"
    output last every 100 events;

Windows can also be globally declared:

    create window MeasurementCreated.win:length(20) as MyMeasurementWindow;

    select
      avg(getNumber(e, "myCustomMeasurement.mySeries.value")),
      last(*)
    from MyMeasurementWindow e
    where e.measurement.type = "myCustomMeasurement";

Declaring a window gives you also the possibility of clearing the window.

    on AlarmCreated delete from MyMeasurementWindow


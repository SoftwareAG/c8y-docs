---
weight: 10
title: Calculating an hourly median of measurements
layout: redirect
---

We are assuming the input data looks like this:

    {
      "c8y_TemperatureMeasurement": {
        "T": {
          "value": ...,
          "unit": "C"
        }
      },
      "time":"...",
      "source": {
        "id":"..."
      },
      "type": "c8y_TemperatureMeasurement"
    }

To create the median we need the following parts in the module:

 - A context to separate the measurements correctly per device
 - A time window over one hour
 - An output that returns only the last average calculation every hour
 - Everything created as a new measurement

Module:

    create context HourlyAvgMeasurementDeviceContext
      partition measurement.source.value from MeasurementCreated;

    @Name("Creating_hourly_measurement")
    context HourlyAvgMeasurementDeviceContext
    insert into CreateMeasurement
    select
      m.measurement.source as source,
      current_timestamp().toDate() as time,
      "c8y_AverageTemperatureMeasurement" as type,
      {
        "c8y_AverageTemperatureMeasurement.T.value", avg(cast(getNumber(m, "c8y_TemperatureMeasurement.T.value"), double)),
        "c8y_AverageTemperatureMeasurement.T.unit", getString(m, "c8y_TemperatureMeasurement.T.unit")
      } as fragments
    from MeasurementCreated.win:time(1 hours) m
    where getObject(m, "c8y_TemperatureMeasurement") is not null
    output last every 1 hours;


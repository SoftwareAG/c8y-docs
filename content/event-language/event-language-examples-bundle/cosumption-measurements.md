---
weight: 40
title: Consumption measurements
layout: redirect
---


Assuming we have a sensor which measures the current fill level of something and sends the values in a regular basis to Cumulocity we can easily create additional consumption values.
Calculating the absolute difference between two measurements can be useful but it will only give you a clear view if the measurements are send always in the same interval.
Therefore we will put the absolute difference in relation to the time difference and calculate as a per hour consumption.

We will compare the value and time difference of two adjacent measurements for a device (we will need a context for that).

    create schema FillLevelMeasurement(
      measurement Measurement,
      value double
    );

    create schema AdjacentFillLevelMeasurements(
    	firstValue double,
    	lastValue double,
    	firstTime Date,
    	lastTime Date,
    	source String
    );

    create context ConsumptionMeasurementDeviceContext
          partition measurement.source.value from FillLevelMeasurement;

    create expression double calculateConsumption(firstValue, lastValue, firstTime, lastTime) [
      if (lastTime == firstTime) {
        0;
      } else {
        ((firstValue - lastValue) * 3600000) / (lastTime - firstTime);
      }
    ];

    @Name("filter_fill_level_measurements")
    insert into FillLevelMeasurement
    select
      m.measurement as measurement,
      cast(getNumber(m, "c8y_WaterTankFillLevel.level.value"), double) as value
    from MeasurementCreated m
    where getObject(m, "c8y_WaterTankFillLevel") is not null;

    @Name("combine_two_latest_measurements")
    context ConsumptionMeasurementDeviceContext
    insert into AdjacentFillLevelMeasurements
    select
      first(m.value) as firstValue,
      first(m.measurement.time) as firstTime,
      last(m.value) as lastValue,
      last(m.measurement.time) as lastTime,
      context.key1 as source
    from FillLevelMeasurement.win:length(2) m;

    @Name("create_consumption_measurement")
    insert into CreateMeasurement
    select
      m.lastTime as time,
      m.source as source,
      "c8y_HourlyWaterConsumption" as type,
      {
        "c8y_HourlyWaterConsumption.consumption.value", calculateConsumption(m.firstValue, m.lastValue, m.firstTime.toMillisec(), m.lastTime.toMillisec()),
        "c8y_HourlyWaterConsumption.consumption.unit", "l/h"
      } as fragments
    from AdjacentFillLevelMeasurements m;
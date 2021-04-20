---
weight: 10
title: Java functions
layout: redirect
---

Every module automatically imports the following libraries:

    java.lang.*
    java.math.*
    java.text.*
    java.util.*

You can use any of the functions located in those libraries.

Examples:

Using java.util.Random

    create variable Random generator = new Random();

    insert into CreateMeasurement
    select
      "12345" as source,
      "c8y_TemperatureMeasurement" as type,
      current_timestamp().toDate() as time,
      {
        "c8y_TemperatureMeasurement.T1.value", generator.nextInt(12) + 18,
        "c8y_TemperatureMeasurement.T1.unit", "C",
        "c8y_TemperatureMeasurement.T2.value", generator.nextInt(12) + 18,
        "c8y_TemperatureMeasurement.T2.unit", "C",
        "c8y_TemperatureMeasurement.T3.value", generator.nextInt(12) + 18,
        "c8y_TemperatureMeasurement.T3.unit", "C",
        "c8y_TemperatureMeasurement.T4.value", generator.nextInt(12) + 18,
        "c8y_TemperatureMeasurement.T4.unit", "C",
        "c8y_TemperatureMeasurement.T5.value", generator.nextInt(12) + 18,
        "c8y_TemperatureMeasurement.T5.unit", "C"
      } as fragments
    from pattern[every timer:at(*, *, *, *, *, */30)];

Using java.math.BigDecimal

    select
      getNumber(m, "c8y_TemperatureMeasurement.T.value").divide(new BigDecimal(3),2,RoundingMode.HALF_UP)
    from MeasurementCreated m;


---
order: 30
title: Functions
layout: default
toc: true
---

## Overview

With the Cumulocity Event Language it is possible to utilize functions. This section will cover the already built-in functions ready to use. For a guide how to write your own functions please check this [section](/guides/event-language/advanced#creating-own-functions).

## Java functions

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

## Database functions

To interact with your historical data you can use one of the following functions to directly query the database.

Most functions are available in several variants:

-   findOne...(...): The function expects exactly one object as query result and fails otherwise.
-   findFirst...(...): The function returns the first object in the query result or "null", if the result is empty.
-   findAll...(...): The function returns all objects in the query result.

Here is the full list of available functions. Replace the ellipses ("...") with "findOne", "findFirst" or "findAll".

|Function name (with variants)|Return type|Alternative argument lists|
|:----------------------------|:----------|:-------------------------|
|findManagedObjectById|ManagedObject|id*:String*<br/>id*:GId*|
|findFirstManagedObjectParent<br/>findOneManagedObjectParent|ManagedObject|managedObjectId*:String*<br/>managedObjectId*:GId*|
|...ManagedObjectByFragmentType|List|fragmentType*:String*|
|...ManagedObjectByType|List|type*:String*|
|findEventById|Event|id*:String*<br/>id*:GId*|
|...EventByFragmentType|List|fragmentType*:String*|
|...EventByFragmentTypeAndSource|List|fragmentType*:String*, source*:String*|
|...EventByFragmentTypeAndSourceAndTimeBetween|List|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*|
|...EventByFragmentTypeAndSourceAndTimeBetweenAndType|List|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*|
|...EventByFragmentTypeAndSourceAndType|List|fragmentType*:String*, source*:String*, type*:String*|
|...EventByFragmentTypeAndTimeBetween|List|fragmentType*:String*, from*:Date*, to*:Date*|
|...EventByFragmentTypeAndTimeBetweenAndType|List|fragmentType*:String*, from*:Date*, to*:Date*, type*:String*|
|...EventByFragmentTypeAndType|List|fragmentType*:String*, type*:String*|
|...EventBySource|List|source*:String*|
|findMeasurementById|Measurement|id*:String*<br/>id*:GId*|
|...MeasurementByFragmentType|List|fragmentType*:String*|
|...MeasurementByFragmentTypeAndSource|List|fragmentType*:String*, source*:String*|
|...MeasurementByFragmentTypeAndSourceAndTimeBetween|List|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*|
|...MeasurementByFragmentTypeAndSourceAndTimeBetweenAndType|List|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*|
|...MeasurementByFragmentTypeAndSourceAndType|List|fragmentType*:String*, source*:String*, type*:String*|
|...MeasurementByFragmentTypeAndTimeBetween|List|fragmentType*:String*, from*:Date*, to*:Date*|
|...MeasurementByFragmentTypeAndTimeBetweenAndType|List|fragmentType*:String*, from*:Date*, to*:Date*, type*:String*|
|...MeasurementByFragmentTypeAndType|List|fragmentType*:String*, type*:String*|
|...MeasurementBySource|List|source*:String*|
|findLastMeasurementByFragmentTypeAndSourceAndTimeBetween|Measurement|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*|
|findLastMeasurementByFragmentTypeAndSourceAndTimeBetweenAndType|Measurement|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*|
|findLastMeasurementByFragmentTypeAndTimeBetween|Measurement|fragmentType*:String*, from*:Date*, to*:Date*|
|findLastMeasurementByFragmentTypeAndTimeBetweenAndType|Measurement|fragmentType*:String*, from*:Date*, to*:Date*, type*:String*|
|findOperationById|Operation|id*:String*<br/>id*:GId*|
|...OpererationByAgent|List|agentId*:String*|
|...OpererationByAgentAndStatus|List|agentId*:String*, status*:String*|
|...OpererationByDevice|List|deviceId*:String*|
|...OpererationByDeviceAndStatus|List|deviceId*:String*, status*:String*|
|...OpererationByStatus|List|status*:String*|
|...OpererationByCreationTimeBetween|List|from*:Date*, to*:Date*|
|findAlarmById|Alarm|id*:String*<br/>id*:GId*|
|...AlarmBySource|List|sourceId*:String*|
|...AlarmBySourceAndStatus|List|sourceId*:String*, status*:String*|
|...AlarmBySourceAndStatusAndType|List|sourceId*:String*, status*:String*, type*:String*|
|...AlarmBySourceAndStatusAndTimeBetween|List|sourceId*:String*, status*:String*, from*:Date*, to*:Date*|
|...AlarmBySourceAndTimeBetween|List|sourceId*:String*, from*:Date*, to*:Date*|
|...AlarmByStatus|List|status*:String*|
|...AlarmByStatusAndTimeBetween|List|status*:String*, from*:Date*, to*:Date*|
|...AlarmByTimeBetween|List|from*:Date*, to*:Date*|


## Utility functions

### access fragments

Fragments are accessible through the following helper functions:

-   Object getObject(Object event, String path[, Object defaultValue])
-   String getString(Object event, String path[, String defaultValue])
-   Number getNumber(Object event, String path[, Number defaultValue])
-   Boolean getBoolean(Object event, String path[, Boolean defaultValue])
-   Date getDate(Object event, String path[, Date defaultValue])
-   List getList(Object event, String path[, List defaultValue])

You can use JsonPath (without the root element $) to navigate in the object structure
Example:

    select
      getNumber(m, "c8y_TemperatureMeasurement.T.value")
    from MeasurementCreated m;

    select
      e.event as event
    from EventCreated e
    where getObject(e, "c8y_Position") is not null;

### cast

The cast() function gives you the possibility to transform data to the correct data type if you receive it e.g. as Object.
Casting to a basic Java type:

    cast(myVariable, long)

For other types you need to specify the fully-qualified class name

    cast(event.managedObject.childAssets[0], com.cumulocity.model.ID)

### current_timestamp

The current_timestamp() function will give you the current server time. You can easily transform it to the required Date data type with the toDate() function to be used in the Cumulocity streams.

Example:

    insert into CreateAlarm
    select
      "c8y_HighTemperatureAlarm" as type,
      current_timestamp().toDate() as time,
      event.event.source as source,
      CumulocitySeverities.WARNING as severity,
      CumulocityAlarmStatuses.ACTIVE as status,
      "The device has high temperature" as text
    from EventCreated event;

### inMaintenanceMode

The inMaintenaceMode() function is a fast way to check if the device is currently in maintenance mode. It takes an [ID](/guides/event-language/data-model#id) as paramter and will return a boolean value.

Example:

    insert into SendEmail
    select
      "receiver1@cumulocity.com,receiver2@cumulocity.com" as receiver,
      "cc@cumulocity.com" as cc,
      "bcc@cumulocity.com" as bcc,
      "reply@cumulocity.com" as replyTo,
      "Example mail" as subject,
      "This mail was sent to test the SendEmail stream in Cumulocity" as text
    from EventCreated e
    where not inMaintenanceMode(e.event.source);

### replaceAllPlaceholders

To enrich your texts you can either use concatenation

    insert into SendEmail
    select
      "receiver1@cumulocity.com,receiver2@cumulocity.com" as receiver,
      "cc@cumulocity.com" as cc,
      "bcc@cumulocity.com" as bcc,
      "reply@cumulocity.com" as replyTo,
      "Example mail" as subject,
      "An event with the text " || e.event.text || " has been created." as text
    from EventCreated e;

If the texts get longer and have more values that are dynamically set from the data you can use the replaceAllPlaceholders() function.
Another advantage of this function is that you can not only use the current object but also access all information of the device that created the alarm, measurment, event.

In your text string you mark the placeholders with the JsonPath to the value (without the root element $) and surround it by #{}. If you want to access data from the device you start the JsonPath with source.

The function gets called with the string which contains the placeholders and the object which you want to use for filling the placeholders. The source device will then be automatically queried.

Example:

    create variable string myMailText =
    "The device #{source.name} with the serial number #{source.c8y_Hardware.serialNumber} created an event with the text #{text} at #{time}. The device is located at #{source.c8y_Address.street} in #{source.c8y_Address.city}.";

    insert into SendEmail
    select
      "receiver1@cumulocity.com,receiver2@cumulocity.com" as receiver,
      "cc@cumulocity.com" as cc,
      "bcc@cumulocity.com" as bcc,
      "reply@cumulocity.com" as replyTo,
      "Example mail" as subject,
      replaceAllPlaceholders(myMailText, e.event) as text
    from EventCreated e;

### toNumberSetParameter

The toNumberSetParameter() function helps you to configure timer patterns outside of the module. When deploying a module with timer patterns the pattern has to be fixed to the point of deployment and cannot be changed without redeploying the module.
It is possible to configure timer patterns with variables if the variables get resolved immediately on deployment. This enables you to store the timer pattern in a ManagedObject. On deployment you load it and fill it with the timer pattern.
The toNumberSetParameter() function transforms strings to the NumberSetParameter type which is the input for timer patterns.
For more information about timer patterns please check [here](/guides/event-language/advanced).

Example:

    create variable ManagedObject device = findManagedObjectById("12345");
    create variable string minuteVal = getString(device, "config.minute");
    create variable string hourVal = getString(device, "config.hour");
    create variable string dayOfMonthVal = getString(device, "config.day");
    create variable string monthVal = getString(device, "config.month");
    create variable string dayOfWeekVal = getString(device, "config.weekday");

    insert into CreateOperation
    select
      "PENDING" as status,
      "12345" as deviceId,
      { "c8y_Restart", {} } as fragments
    from
     pattern [every timer:at(toNumberSetParameter(minuteVal),
     toNumberSetParameter(hourVal),
     toNumberSetParameter(dayOfMonthVal),
     toNumberSetParameter(monthVal),
     toNumberSetParameter(dayOfWeekVal))];

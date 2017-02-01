---
order: 10
title: Introduction
layout: default
---

## Overview

Using the Cumulocity real-time event processing, you can add your own logic to your IoT solution. This includes data analytics logic but it is not limited to it. To define new analytics, you will use the Cumulocity Event Language. The language allows to analyze incoming data. It is using a powerful pattern and time window based query language. You can create, update and delete your data in real-time.


Typical real-time analytics use cases include:

* Remote control: Turn a device off if it's temperature rises over 40 degrees.
* Validation: Discard negative meter readings or meter readings that are lower than the previous.
* Derived data: Calculate the volume of sales transactions per vending machine per day.
* Aggregation: Sum up the sales of vending machines for a customer per day.
* Notifications: Send me an email if there's a power outage in one of my machines.
* Compression: Store location updates of all cars only once every five minutes (but still send real-time data for the car that I am looking at to the user interface).

In the following sections we describe the basics for understanding how the Cumulocity Event Language works and how you can create your own analytics or other server-side business logic and automation.

## Event streams

In the Cumulocity Event Language data flows in streams. You can create events in streams and listen to events created in streams.

### Predefined streams

There are some predefined streams to interact with several Cumulocity APIs. For each input stream Cumulocity will automatically create a new event when the respective API call was made. If a measurement was created via REST API there will be a new event in the MeasurementCreated stream.
For interacting with the Cumulocity backend you can create an event on the respective output stream and Cumulocity will automatically execute either the database query or create the API calls necessary for sending mails, sms, or similar. To create a new alarm in the database you can create a new event in the CreateAlarm stream.

|API|Input streams|Output streams|Description|
|:--|:----------|:-------------|:----------|
|Inventory|ManagedObjectCreated<br/>ManagedObjectUpdated<br/>ManagedObjectDeleted|CreateManagedObject<br/>UpdateManagedObject<br/>DeleteManagedObject|This group of events represents creation, modification or deletion of a single ManagedObject.|
|Events|EventCreated<br/>EventUpdated<br/>EventDeleted|CreateEvent<br/>UpdateEvent<br/>DeleteEvent|This group of events represents creation or deletion of a single Event.|
|Measurements|MeasurementCreated<br/>MeasurementDeleted|CreateMeasurement<br/>DeleteMeasurement|This group of events represents creation or deletion of a single Measurement.|
|Device control|OperationCreated<br/>OperationUpdated|CreateOperation<br/>UpdateOperation|This group of events represents creation or modification of a single Operation.|
|Alarms|AlarmCreated<br/>AlarmUpdated|CreateAlarm<br/>UpdateAlarm|This group of events represents creation or modification of a single Alarm.|
|Emails|*(not used)*|SendEmail<br/>SendDashboard|This group of events represents sending of an email.|
|SMS|*(not used)*|SendSms|This group of events represents sending of a SMS.|
|Text-to-speech|*(not used)*|SendSpeech|This group of events represents initializing of a phone call.|

Look at the data model to see how the events for each stream are structured.

### Creating events in a stream

Creating an event is done by the keywords `insert into` and `select`. First you need to specify the "insert into" followed by the stream name for which stream you want to create an event. After that you can use the "select" clause to specify the parameters of the event.
A parameter gets specified by the following syntax: `value as parameter`. You can specify multiple parameters by separating them by commas. The order of the parameters does not matter. Please notice that streams can have mandatory parameters you need to specify in the "select" clause.

### Listening to events in a stream

The most common way to trigger the creation of an event in a stream is when something happens on another stream. Therefore you can listen to events from other streams. This is done by the keyword `from` followed by the name of the stream and (optional) followed by a variable name to reference the event in your statement at a later point.

## Conditions

Adding conditions can be done with the keyword `where` to not trigger your event creation for every incoming event but only if these conditions are met. The `where` keyword is followed by an expression that results either in true or false. You can also have multiple expressions connected with `and` or `or`.

## Example

As an example we create a statement. It should listen to a stream and create a new event in another stream whenever the specified condition applies.
As example we want to create an alarm for each temperature measurement that is created.

1. To create an alarm we need to `insert into` the stream `CreateAlarm`.
2. We need to specify all parameters for the event in the `select` clause.
3. We want the alarm to be created when an event `from` the stream `MeasurementCreated` is received.
4. We want the alarm only be created under certain conditions of the event from the `MeasurementCreated` stream which we specific in the `where` clause.

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

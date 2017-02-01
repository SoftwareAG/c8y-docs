---
order: 40
title: Advanced use cases
layout: default
toc: true
---

## Custom fragments

Cumulocity APIs give you the possibility to structure your data freely. In the Cumulocity Event Language this is also the case.
Each of the output streams can be extended with custom fragments.
You can add fragments by setting the fragments field in the stream with a list of key, value pairs. The key is the full JsonPath to the value.

    {
      key1, value1,
      key2, value2,
      key3, value3
    } as fragments

Example 1:

    insert into CreateMeasurement
    select
      "12345" as source,
      "c8y_TemperatureMeasurement" as type,
      current_timestamp().toDate() as time,
      {
        "c8y_TemperatureMeasurement.T1.value", 1,
        "c8y_TemperatureMeasurement.T1.unit", "C",
        "c8y_TemperatureMeasurement.T2.value", 2,
        "c8y_TemperatureMeasurement.T2.unit", "C",
        "c8y_TemperatureMeasurement.T3.value", 3,
        "c8y_TemperatureMeasurement.T3.unit", "C",
        "c8y_TemperatureMeasurement.T4.value", 4,
        "c8y_TemperatureMeasurement.T4.unit", "C",
        "c8y_TemperatureMeasurement.T5.value", 5,
        "c8y_TemperatureMeasurement.T5.unit", "C"
      } as fragments
    from EventCreated;

This will result in the following json structure:

    {
      "type": "c8y_TemperatureMeasurement",
      "time": "...",
      "source": {
        "id": "12345"
      },
      "c8y_TemperatureMeasurement": {
        "T1": {
          "value": 1,
          "unit": "C"
        },
        "T2": {
          "value": 1,
          "unit": "C"
        },
        "T3": {
          "value": 1,
          "unit": "C"
        },
        "T4": {
          "value": 1,
          "unit": "C"
        },
        "T5": {
          "value": 1,
          "unit": "C"
        },
      }
    }

Example 2:

    insert into CreateManagedObject
    select
      "MyCustomDevice" as name,
      "customDevice" as type,
      {
        "c8y_IsDevice", {},
        "c8y_SupportedOperations", {"c8y_Restart", "c8y_Command"},
        "c8y_Hardware.serialNumber", "mySerialNumber",
        "c8y_Hardware.model", "myDeviceModel",
        "com_cumulocity_model_Agent", {},
        "c8y_RequiredAvailability.responseInterval", 30
      } as fragments
    from EventCreated e;

This will result in the following json structure:

    {
      "name": "MyCustomDevice",
      "type": "customDevice",
      "c8y_IsDevice": {},
      "c8y_RequiredAvailability": {
        "responseInterval": 30
      },
      "c8y_SupportedOperations": [
        "c8y_Restart",
        "c8y_Command"
      ],
      "com_cumulocity_model_Agent": {},
      "c8y_Hardware": {
        "model": "myDeviceModel",
        "serialNumber": "mySerialNumber"
      }
    }


## Advanced trigger  

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

    from pattern [timer:interval(5 minutes)];

or as a cron job.

    // timer:at(minutes, hours, daysOfMonth, month, daysOfWeek, (optional) seconds)
    // minutes: 0-59
    // hours: 0-23
    // daysOfMonth: 1-31
    // month: 1-12
    // daysOfWeek: 	0 (Sunday) - 6 (Saturday)
    // seconds: 0-59

    from pattern [timer:at(*, *, *, *, *)]; // trigger every minute
    from pattern [timer:at(*, *, *, *, *, *)]; // trigger every second
    from pattern [timer:at(*/10, *, *, *)]; // trigger every 10 minutes
    from pattern [timer:at(0, 1, *, *, [1,3,5])]; // trigger at 1am every monday, wednesday and friday
    from pattern [timer:at(0, */2, (1-7), *, *)]; // trigger every 2 hours on every day in the first week of every month

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

If you need to take all measurements into account because e.g. you want to calculate the sum of your measurements and you do not want to update it for every new measurement.

    select
        sum(getNumber(e, "myCustomMeasurement.mySeries.value")),
        last(*)
    from MeasurementCreated e
    where e.measurement.type = "myCustomMeasurement"
    output last every 50 events;

Every 50 measurements this statement will output the sum (of all measurements since deployment not just of the 50) and the latest measurement.

## Event windows

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

## Creating own streams

Creating complex modules is not doable in a single statement. While Cumulocity already provides certain streams it is possible to create additional ones to control your event flow.
It is not required to define a stream. If you use a unknown stream name it will automatically be created and defined with the input you set.

    insert into MyEvent
    select
      e.event as e
    from EventCreated e;

    select e.type from MyEvent e;

If you now try to add:

    insert into MyEvent
    select
      e as e
    from AlarmCreated e;

You will not be able to deploy the statement because the stream MyEvent has already been declared with one variable e of type Event.
This statement tries to set a value of type AlarmCreated to e.

You can also explicitly create a new stream.

    create schema MyEvent(
      e Event
    );

The general syntax is:

    create schema StreamName(
      var1Name var1Type,
      var2Name var2Type,
      var3Name var3Type
    );

You can use every basic Java data type, data types from the imported [Java libraries](/guides/event-language/functions#java-functions), Cumulocity data types (like Event, Measurement, ManagedObject, ...) and other streams.

    create schema TwoMyEvents(
      firstEvent MyEvent,
      secondEvent MyEvent
    );

_Note: Stream names are unique and once declared (regardless if implicit or explicit) the stream is available in all your modules_

## Creating own functions

If you want to make more complex calculation than e.g. sum or average you can create your own helper functions and expressions.
For writing the function you can use JavaScript as the scripting language. You can also import Java classes into your expressions using importClass.

Examples:

Increasing the given severity (using JavaScript):

    create expression CumulocitySeverities js:increaseSeverity(severity) [
    	importClass (com.cumulocity.model.event.CumulocitySeverities);
    	if(severity == CumulocitySeverities.WARNING) {
    		CumulocitySeverities.MINOR;
    	} else if(severity == CumulocitySeverities.MINOR) {
    		CumulocitySeverities.MAJOR;
    	} else if(severity == CumulocitySeverities.MAJOR) {
    		CumulocitySeverities.CRITICAL;
    	} else {
    		severity
    	}
    ];

Calculating the distance between two geo-coordinates:

    create expression distance(lat1, lon1, lat2, lon2) [
      var R = 6371000;
      var toRad = function(arg) {
        return arg * Math.PI / 180;
      };
      var lat1Rad = toRad(lat1);
      var lat2Rad = toRad(lat2);
      var deltaLatRad = toRad(lat2-lat1);
      var deltaLonRad = toRad(lon2-lon1);

      var a = Math.sin(deltaLatRad/2) * Math.sin(deltaLatRad/2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLonRad/2) * Math.sin(deltaLonRad/2);

      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      var d = R * c;
      d;
    ];

## Variables

You can define variables in your modules.

    create variable String myEmailText = "Hello World";
    create variable List supportedOperationsList = cast({"c8y_Restart", "c8y_Relay"}, java.util.List);

You can also dynamically change variable values during runtime

    create variable String latestEventType;

    on EventCreated e set latestEventType = e.event.type;


## Contexts

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

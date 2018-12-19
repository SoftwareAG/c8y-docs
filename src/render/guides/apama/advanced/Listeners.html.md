---
order: 20
title: Listeners
layout: redirect
---

Triggering a statement by an arriving event is not the only possibility. The following sections cover other ways to combine listeners. Refer to the Apama documentation for full details - see the [Defining Event Listeners](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/#page/apama-webhelp%252Fco-DevApaAppInEpl_defining_event_listeners.html%2523) topic.

### Filters

Filters enable you to trigger by combinations or sequences of other triggers. If you have a trigger like this

	on all Event() as e { .. }

it is also possible to add filters in the pattern.

	on all Event(type = "c8y_EntranceEvent") as e { }

You can listen for more than one event:

	on Event() as e and Alarm() as m { .. }

This will trigger on receiving an Event and an Alarm event - the first of each will be captured.

You can also trigger by sequences.

    on all (Event() as e -> Alarm() as m) { .. }

This will trigger for every pair Event followed by Alarm. On receiving an Event, it will stop listening for further events and start listening for alarms instead. Once an Alarm is received, it will start listening for events again.

### Timers

You can also trigger listeners based on time. You can either trigger in a certain interval, for example, fire every 5 minutes (300 seconds):

	on all wait(300.0) { .. }

Or you can have a listener fire at certain times of the day, with similar functionality to Unix's cron scheduler:

    // timer:at(minutes, hours, daysOfMonth, month, daysOfWeek, (optional) seconds)
    // minutes: 0-59
    // hours: 0-23
    // daysOfMonth: 1-31
    // month: 1-12
    // daysOfWeek: 0 (Sunday) - 6 (Saturday)
    // seconds: 0-59

    on all at(*, *, *, *, *) {} // trigger every minute

	on at(*/10, *, *, *, *) {} // trigger every 10 minutes
	on at(0, 1, *, *, [1,3,5]) {} // trigger at 1am every monday, wednesday and friday
	on at(0, */2, (1-7), *, *) {} // trigger every 2 hours on every day in the first week of every month

You can also combine timer patterns with other patterns. For example, you can check if there was an event within a certain time after another event:

    on Event() -> wait(600.0)  and not Alarm() { .. }

This will trigger if there is an Event and within 10 minutes there is no Alarm. Note the use of "not" which terminates the listener if the event occurs.

### Streams - windows

Streams give you the possibility to operate on windows of events. Streams use the "from" keyword instead of "on" and define a window to operate over, and select what output they want from that window using aggregates. Windows can be restricted by two means:

1.  Windows for a certain time - use the "within" keyword.

    	from m in all Measurement(type = "c8y_TemperatureMeasurement") within 3600.0 select avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }

2.  Windows with a certain amount of events - use the "retain" keyword.  

	    from m in all Measurement(type = "c8y_TemperatureMeasurement") retain 100 select avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }

### Streams - outputting periodically

Streams can also control how frequently they evaluate, using the `"every`" specifier.

	// will output the last measurement arrived every 1 minute
	from m in all Measurement(type = "c8y_TemperatureMeasurement") within 60.0 every 60.0 select last(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as lastValue {  }
	
	// will output the first of every 20 measurements arriving
	from m in all Measurement(type = "c8y_TemperatureMeasurement") retain 20 every 20 select first(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as firstValue { }
	
	// will output average of all 20 measurements after the 20th arrived
	from m in all Measurement(type = "c8y_TemperatureMeasurement") retain 20 every 20 select avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }


See the Apama documentation for [built-in aggregates](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/#page/apama-webhelp%252Fre-ApaEplRef_built_in_aggregate_functions.html).



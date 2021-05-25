---
weight: 20
title: Listeners
layout: redirect
---

Triggering a statement by an arriving event is not the only possibility. The following sections cover other ways to combine listeners. Refer to [Defining Event Listeners](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-DevApaAppInEpl_defining_event_listeners.html) in the Apama documentation for full details.

### Filters

Filters enable you to trigger by combinations or sequences of other triggers. If you have a trigger like this

```java
on all Event() as e { ... }
```
it is also possible to add filters in the pattern.

```java
on all Event(type = "c8y_EntranceEvent") as e { ... }
```
You can listen for more than one event:

```java
on Event() as e and Alarm() as a { ... }
```
This will trigger on receiving an Event and an Alarm event - the first of each will be captured.

You can also trigger by sequences:

```java
on all (Event() as e -> Alarm() as a) { ... }
```
This will trigger for every pair "Event followed by Alarm". On receiving an event, it will stop listening for further events and start listening for alarms instead. Once an alarm is received, it will start listening for events again.

### Timers

You can also trigger listeners based on time. You can either trigger in a certain interval, for example, fire every 5 minutes (300 seconds):

```java
on all wait(300.0) { ... }
```
Or you can have a listener fire at certain times of the day, with similar functionality to Unix's cron scheduler:

```java
// timer:at(minutes, hours, daysOfMonth, month, daysOfWeek, (optional) seconds)
// minutes: 0-59
// hours: 0-23
// daysOfMonth: 1-31
// month: 1-12
// daysOfWeek: 0 (Sunday) - 6 (Saturday)
// seconds: 0-59

on all at(*, *, *, *, *) {} // trigger every minute

on all at(*/10, *, *, *, *) {} // trigger every 10 minutes
on all at(0, 1, *, *, [1,3,5]) {} // trigger at 1am every monday, wednesday and friday
on all at(0, */2, 1:7, *, *) {} // trigger every 2 hours on every day in the first week of every month
```
You can also combine timer patterns with other patterns. For example, you can check if there was an event within a certain time after another event:

```java
on Event() -> wait(600.0) and not Alarm() { ... }
```
This will trigger if there is an event and within 10 minutes (600 seconds) there is no alarm. Note the use of `not` which terminates the listener if the event occurs.

You can use a tenant option to set the timezone used for `on all at` timers. To set the tenant option, specify the `microservice.runtime` category and the `timezone` key. 
For example: 

```
{
    "category" : "microservice.runtime",
    "key" : "timezone",
    "value" : "Europe/Warsaw"
}
```

See also [Timezone variable](/microservice-sdk/concept/#timezone-variable) in the *Microservice SDK guide*.

> **Info:** This tenant option is only read when the microservice starts. 
If the tenant option is changed, the microservice only picks this up on the next microservice subscription.

### Streams - windows

Streams give you the possibility to operate on windows of events. Streams use the `from` keyword instead of `on ` and define a window to operate over, and select what output they want from that window using aggregates. Windows can be restricted by two means:

1. Windows for a certain time - use the `within` keyword.

    ```java
	from m in all Measurement(type="c8y_TemperatureMeasurement") within 3600.0 select avg(m.measurements	["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }
    ```

2. Windows with a certain amount of events - use the `retain` keyword.  

    ```java
	from m in all Measurement(type="c8y_TemperatureMeasurement") retain 100 select avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }
    ```

### Streams - outputting periodically

Streams can also control how frequently they evaluate, using the `every` specifier.

```java
// will output the last measurement arrived every 1 minute
from m in all Measurement(type="c8y_TemperatureMeasurement") within 60.0 every 60.0 select last(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as lastValue { }

// will output the first of every 20 measurements arriving
from m in all Measurement(type="c8y_TemperatureMeasurement") retain 20 every 20 select first(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as firstValue { }

// will output the average of all 20 measurements after the 20th arrived
from m in all Measurement(type="c8y_TemperatureMeasurement") retain 20 every 20 select avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }
```

See the Apama documentation for [built-in aggregate functions](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fre-ApaEplRef_built_in_aggregate_functions.html).

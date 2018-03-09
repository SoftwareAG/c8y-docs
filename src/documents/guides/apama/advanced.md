---
order: 40
title: Introduction
layout: default
---

## Custom fragments

Cumulocity APIs give you the possibility to structure your data freely. In the Apama Event Processing Language this is done by adding entries to params, which is of the type dictionary&#60;string,any>. Events all have a params field, which is translated to fragments or optional fields. Thus, when receiving events, look up entries in the params field. When sending events, this can be done by definining event types, <span class="inline-comment-marker" data-ref="d29e7740-e15f-435e-aa96-b25a195d8416">or you can use</span> dictionary&#60;string,any> type; when receiving events, the EPL type will be dictionary&#60;any,any>. Note that EPL is strongly typed, so if you are creating an event with no fragments, a 'new dictionary&#60;string,any>' expression is required. If you are providing entries inline with a dictionary literal, then EPL will determine the type based on the type of the first key and value pair - thus, for dictionary&#60;string, any>, cast the first value to an 'any' type with a &#60;any> cast operator:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="768a1dd9-14a4-4db4-ba72-bf3835473faa" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>send Event(..., new dictionary&#60;string,any>) to Event.CHANNEL;

send Event(..., {"fragment":&#60;any>"value"}) to Event.CHANNEL;</pre>

</td>

</tr>

</tbody>

</table>

The MeasurementValue type is provided for the measurements in the Measurement type. MeasurementValue has value and unit, fields, and extraParams for other fragments.

Example 1:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="320aa770-e230-4de5-bfff-45a9b8f0783e" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>send Measurement("", "c8y_TemperatureMeasurement", "12345", currentTime, {
	"c8y_TemperatureMeasurement":{
		"T1":MeasurementValue(1.0, "C", new dictionary&#60;string,any>),
		"T2":MeasurementValue(2.0, "C", new dictionary&#60;string,any>),
		"T3":MeasurementValue(3.0, "C", new dictionary&#60;string,any>),
		"T4":MeasurementValue(4.0, "C", new dictionary&#60;string,any>),
		"T5":MeasurementValue(5.0, "C", new dictionary&#60;string,any>)
	}},
	new dictionary&#60;string,any>) to Measurement.CREATE_CHANNEL;</pre>

</td>

</tr>

</tbody>

</table>


This will result in the following JSON structure:


<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="8777b411-16a9-4166-b309-69599ac3372c" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>{
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
}</pre>

</td>

</tr>

</tbody>

</table>

Example 2:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="529e483c-5dc2-4974-91b6-0b861d55c0ee" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>send ManagedObject("",
	"MyCustomDevice",
	"customDevice",
	["c8y_Restart","c8y_Command"],
	new sequence&#60;string>,
	new sequence&#60;string>,
	new sequence&#60;string>,
	new sequence&#60;string>,
	new sequence&#60;string>,
	new dictionary&#60;string, float>,
	{	"c8y_IsDevice": &#60;any> new dictionary&#60;any,any>,
		"c8y_Hardware":&#60;any>{"serialNumber":"mySerialNumber", "model":"myDeviceModel"},
		"com_cumulocity_model_Agent":&#60;any>new dictionary&#60;any,any>,
		"c8y_RequiredAvailability":&#60;any>{"responseInterval":30.0}
	}) to "CumulocityIoT";

</pre>

</td>

</tr>

</tbody>

</table>

This will result in the following JSON structure:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="763e4ce9-82c1-476e-866d-9c5e8fb020bc" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>{
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
</pre>

</td>

</tr>

</tbody>

</table>

## Listeners

Triggering a statement by an arriving event is not the only possibility. The following sections cover other ways to combine listeners. Refer to the Apama documentation for full details - see the [Defining Event Listeners](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/#page/apama-webhelp%252Fco-DevApaAppInEpl_defining_event_listeners.html%2523) topic.

### Filters

Filters enable you to trigger by combinations or sequences of other triggers. If you have a trigger like this

<pre><span style="color: rgb(133,153,0);">on all Event() as e { .. }</span></pre>

it is also possible to add filters in the pattern.

`on all Event(type = "c8y_EntranceEvent") as e { }`

You can listen for more than one event:

<pre><span style="color: rgb(133,153,0);">on Event() as e and Measurement() as m { .. }</span></pre>

This will trigger on receiving an Event and an Alarm event - the first of each will be captured.

You can also trigger by sequences.

    on all (Event() as e -> Measurement() as m) { .. }

This will trigger for every pair Event followed by Alarm. On receiving an Event, it will stop listening for further events and start listening for alarms instead. Once an Alarm is received, it will start listening for events again.

### Timers

You can also trigger listeners based on time. You can either trigger in a certain interval, for example, fire every 5 minutes (300 seconds):

<pre><span style="color: rgb(133,153,0);">on all wait(300.0) { .. }</span> </pre>

Or you can have a listener fire at certain times of the day, with similar functionality to Unix's cron scheduler:

    // timer:at(minutes, hours, daysOfMonth, month, daysOfWeek, (optional) seconds)
    // minutes: 0-59
    // hours: 0-23
    // daysOfMonth: 1-31
    // month: 1-12
    // daysOfWeek: 0 (Sunday) - 6 (Saturday)
    // seconds: 0-59

    on all at(*, *, *, *, *) {} // trigger every minute

    on all 

    on at(*/10, *, *, *, *) {} // trigger every 10 minutes
    on at(0, 1, *, *, [1,3,5]) {} // trigger at 1am every monday, wednesday and friday
    on at(0, */2, (1-7), *, *) {} // trigger every 2 hours on every day in the first week of every month

You can also combine timer patterns with other patterns. For example, you can check if there was an event within a certain time after another event:

    on Event() -> wait(600.0)  and not Measurement() { .. }

This will trigger if there is an Event and within 10 minutes there is no Alarm. Note the use of "not" which terminates the listener if the event occurs.

### Streams - windows

Streams give you the possibility to operate on windows of events. Streams use the "from" keyword instead of "on" and define a window to operate over, and select what output they want from that window using aggregates. Windows can be restricted by two means:

1.  Windows for a certain time - use the "within" keyword.

    `from m in all Measurement(type = "c8y_TemperatureMeasurement") within 3600.0 select avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }`

2.  Windows with a certain amount of events - use the "retain" keyword.  

    <span style="font-family: monospace;">from m in all Measurement(type = "c8y_TemperatureMeasurement") retain 100 select avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }</span>

### Streams - outputting periodically

Streams can also control how frequently they evaluate, using the `"every`" specifier.

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="c4bc99fc-0416-4a6d-9119-30259787fec1" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>// will output the last measurement arrived every 1 minute
from m in all Measurement(type = "c8y_TemperatureMeasurement") within 60.0 every 60.0 select last(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as lastValue {  }

// will output the first of every 20 measurements arriving
from m in all Measurement(type = "c8y_TemperatureMeasurement") retain 20 every 20 select first(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as firstValue { }

// will output average of all 20 measurements after the 20th arrived
from m in all Measurement(type = "c8y_TemperatureMeasurement") retain 20 every 20 select avg(m.measurements["c8y_TemperatureMeasurement"]["T"].value) as avgValue { }

</pre>

</td>

</tr>

</tbody>

</table>

See the Apama documentation for [built-in aggregates](http://www.apamacommunity.com/documents/10.1.0.3/apama_10.1.0.3_webhelp/apama-webhelp/#page/apama-webhelp%252Fre-ApaEplRef_built_in_aggregate_functions.html).

## Creating own event types

As well as the predefined event types, you can define your own event types. These can be useful to detect patterns of events occurring which trigger other parts of the same module.

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="f7b9231f-2d6e-4fbb-9a05-57fcfcbab1ba" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>event MyEvent {
	Measurement m1;
	Measurement m2;
}

...

on Measurement() as m1 -> Measurement() as m2 {
	route MyEvent(m1, m2);
}</pre>

</td>

</tr>

</tbody>

</table>

>**Info:** Cumulocity deploys each module into its own namespace, so event definitions from one module cannot be used in other modules. This prevents dependencies between modules._

## Creating own actions

Typically you will structure a monitor using actions (much like functions in Java).

Examples:

Increasing the given severity:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="088c3a43-c06c-4778-b261-d560edff51a6" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>	action upgradeSeverity(string old) returns string {
		if old = "WARNING" { return "MINOR"; }
		if old = "MINOR"   { return "MAJOR"; }
		if old = "MAJOR"   { return "CRITICAL"; }
		return old;
	}</pre>

</td>

</tr>

</tbody>

</table>

Calculating the distance between two geo-coordinates:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="577044f8-10bb-4bf4-8465-df1ee168fa0f" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>action distance(float lat1, float lon1, float lat2, float lon2) returns float {
	float R := 6371000.0;
	float toRad := float.PI / 180.0;
	float lat1Rad := lat1 * toRad;
	float lat2Rad := lat2 * toRad;
	float deltaLatRad := (lat2-lat1) * toRad;
	float deltaLonRad := (lat2-lat1) * toRad;
	float a := (deltaLatRad/2.0).sin().pow(2.0) * lat1Rad.cos() * lat2Rad.cos() * (deltaLonRad/2.0).sin().pow(2.0);
	float c := 2.0 * a.sqrt().atan2((1.0-a).sqrt());
	return R * c;
}

	</pre>

</td>

</tr>

</tbody>

</table>

## Variables

You can define variables in your modules.

    string myEmailText := "Hello World";
    sequence&#60;string> supportedOperationsList := ["c8y_Restart", "c8y_Relay"];

If you define a monitor-scope variable (that is, inside a monitor but not within any actions on that monitor), then that can be used in a listener if you use a colon (:) instead of "as" for the event coassignment in the listener. Thus the below sends the latest event every 10 seconds:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="c177fc36-f0f4-4332-b419-0e57570bbc35" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>monitor MyMonitor {
	// monitor scope:
	Event e;
	action onload() {
		on all Event():e {}
		on all wait(10.0) {
			emit e to Event.CHANNEL;
		}
	}
}</pre>

</td>

</tr>

</tbody>

</table>

When a listener starts, it takes a copy of all of the local variables. The below example thus sends each event after a 10 second delay, even if other events come in between.

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="b6c8f9cb-d203-4800-b66c-2a939713f06c" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>monitor MyMonitor {
	// monitor scope:
	Event e;
	action onload() {
		on all Event():e {
			on all wait(10.0) {
				emit e to Event.CHANNEL;
			}
		}
	}
}</pre>

</td>

</tr>

</tbody>

</table>

## Spawning monitor instances and contexts

While it is possible to handle multiple devices in a single monitor (for example, using `group by` and `partition by` in streams, or maintaining a dictionary keyed on the device ID for other state), it is often useful to separate processing of different devices into separate monitor instances.

New monitor instances can be created using the `spawn` statement. This takes a copy of the monitor's monitor scope variables and runs the named action in a new monitor instance. No listeners are copied into the new monitor. It is also possible to specify a context to spawn the new monitor instance in. Different contexts can run concurrently with each other, and also help isolate different monitors from each other. When constructing a context, supply a name to identify the context, and a boolean to control if the context is public - that is, it receives the Cumulocity events by default (sent to the default channel).

This pattern is often used with the unmatched keyword to identify events that are not matched by any other listeners in that context; by using a separate context for each monitor, the unmatched behavior is scoped to that monitor. For example:

<table class="wysiwyg-macro" data-macro-name="code" data-macro-id="b4bc6f09-9953-4311-8283-323142b4fa04" data-macro-schema-version="1" style="background-image: url(/plugins/servlet/confluence/placeholder/macro-heading?definition=e2NvZGV9&amp;locale=en_GB&amp;version=2); background-repeat: no-repeat;" data-macro-body-type="PLAIN_TEXT">

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>monitor PerDeviceMeasurementTracker {
	action onload() {
		spawn factory to context("PerDeviceMeasurementTracker", true);
	}
	action factory() {
		on all unmatched Measurement() as m {
			spawn perDevice(m);
		}
	}

	dictionary&#60;string, Measurement> latestMeasurementByType; // measurements for this device

	action perDevice(Measurement m) {
		processMeasurement(m);
		on all Measurement(source = m.source) as m {
			processMeasurement(m);
		}
	}
	action processMeasurement(Measurement m) {
		latestMeasurementByType[m.type] := m;
	}
}

</pre>

</td>

</tr>

</tbody>

</table>

---
weight: 50
title: Example
layout: redirect
---

As an example, we create a statement. The statement listens to one event and creates a different event type whenever the specified filter applies. For instance‚ we want to create an alarm for each temperature measurement that is created.

**Info:** In order to create the statement, first you have to create an "EPL Monitor" in your Apama project.

1. Subscribe to Measurement.CHANNEL 
2. Listen to the measurement type - filtering on the type having the value "c8y_TemperatureMeasurement".
3.  Create the event using the constructor specifying all of the fields.
4.  Send the event to the correct channel - Alarm.CHANNEL.

The resulting monitor can look like this:

	using com.apama.cumulocity.Alarm;
	using com.apama.cumulocity.Measurement;
	
	monitor ForwardMeasurements {
		action onload() {
	    	monitor.subscribe(Measurement.CHANNEL);
			on all Measurement(type = "c8y_TemperatureMeasurement") as m {
				send Alarm("", "c8y_TemperatureAlarm", m.source, m.time,
				           "Temperature measurement was created", "ACTIVE", "CRITICAL", 1, new dictionary<string,any>) to Alarm.CHANNEL;
			}
		}
	}

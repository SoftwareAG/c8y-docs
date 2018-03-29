---
order: 50
title: Example
layout: redirect
---

As an example, we create a statement. It should listen to one event and create a different event type whenever the specified filter applies. As example we want to create an alarm for each temperature measurement that is created.

1.  Listen to the measurement type - filtering on the measurementType having the value "c8y_TemperatureMeasurement".
2.  Create the event using the constructor specifying all of the fields.
3.  Send the event to the correct channel - Event.CHANNEL.

The resulting monitor can look like this:

	<pre>monitor ForwardMeasurements {
		action onload() {
			on all Measurement(type = "c8y_TemperatureMeasurement") as m {
				send Alarm("", "c8y_TemperatureAlarm", m.source, m.time,
					"Temperature measurement was created", "ACTIVE", "CRITICAL", 1, new dictionary&#60;string,any>) to Event.CHANNEL;
			}
		}
	}
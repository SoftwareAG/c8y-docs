---
order: 10
title: Custom fragments
layout: redirect
---

Cumulocity APIs give you the possibility to structure your data freely. In the Apama Event Processing Language this is done by adding entries to params, which is of the type dictionary&lt;string, any&gt;. Events all have a params field, which is translated to fragments or optional fields. Thus, when receiving events, look up entries in the params field. When sending events, this can be done by definining event types, or you can use dictionary&lt;string, any&gt; type; when receiving events, the EPL type will be dictionary&lt;any, any&gt;. Note that EPL is strongly typed, so if you are creating an event with no fragments, a 'new dictionary&lt;string, any&gt;' expression is required. If you are providing entries inline with a dictionary literal, then EPL will determine the type based on the type of the first key and value pair - thus, for dictionary&lt;string, any&gt;, cast the first value to an 'any' type with `<any>` cast operator:

	send Event(..., new dictionary<string,any>) to Event.CHANNEL;
	send Event(..., {"fragment":<any>"value"}) to Event.CHANNEL;

The MeasurementValue type is provided for the measurements in the Measurement type. MeasurementValue has `value` and `unit` fields and `params` for other fragments.

Example 1:

	send Measurement("", "c8y_TemperatureMeasurement", "12345", currentTime, {
		"c8y_TemperatureMeasurement":{
			"T1":MeasurementValue(1.0, "C", new dictionary<string,any>),
			"T2":MeasurementValue(2.0, "C", new dictionary<string,any>),
			"T3":MeasurementValue(3.0, "C", new dictionary<string,any>),
			"T4":MeasurementValue(4.0, "C", new dictionary<string,any>),
			"T5":MeasurementValue(5.0, "C", new dictionary<string,any>)
		}},
		new dictionary<string,any>) to Measurement.CREATE_CHANNEL;

This will result in the following JSON structure:

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

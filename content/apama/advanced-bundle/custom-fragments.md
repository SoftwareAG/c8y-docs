---
weight: 10
title: Custom fragments
layout: redirect
---

{{< product-c8y-iot >}} APIs let you structure your data freely. In Apama EPL, this is done by adding entries to `params`, which is of the type `dictionary<string, any>`. Each {{< product-c8y-iot >}} event in the `com.apama.cumulocity` package (such as `Alarm`, `Event`, `Measurement` or `Operation`) has a `params` field, which is translated to fragments or optional fields. Thus, when receiving events, your code must look up entries in the `params` field. When sending events, this can be done by defining event types, or you can use the `dictionary<string, any>` type. When receiving events, the EPL type is `dictionary<any, any>`. Note that EPL is strongly typed, so if you are creating an event with no fragments, a `new dictionary<string, any>` expression is required. If you are providing entries inline with a dictionary literal, then EPL determines the type based on the type of the first key-value pair - thus, for `dictionary<string, any>`, cast the first value to an `any` type with the `<any>` cast operator:

```java
send Event(..., new dictionary<string,any>) to Event.SEND_CHANNEL;
send Event(..., {"fragment":<any>"value"}) to Event.SEND_CHANNEL;
```

The `MeasurementValue` type is provided for the measurements in the `Measurement` type. `MeasurementValue` has `value` and `unit` fields and `params` for other fragments.

Example 1:

```java
send Measurement("", "c8y_TemperatureMeasurement", "12345", currentTime, {
	"c8y_TemperatureMeasurement":{
		"T1":MeasurementValue(1.0, "C", new dictionary<string,any>),
		"T2":MeasurementValue(2.0, "C", new dictionary<string,any>),
		"T3":MeasurementValue(3.0, "C", new dictionary<string,any>),
		"T4":MeasurementValue(4.0, "C", new dictionary<string,any>),
		"T5":MeasurementValue(5.0, "C", new dictionary<string,any>)
	}},
	new dictionary<string,any>) to Measurement.SEND_CHANNEL;
```

This will result in the following JSON structure:

```json
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
```

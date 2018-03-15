---
order: 10
title: Custom fragments
layout: redirect
---

Cumulocity APIs give you the possibility to structure your data freely. In the Apama Event Processing Language this is done by adding entries to params, which is of the type dictionary&#60;string,any>. Events all have a params field, which is translated to fragments or optional fields. Thus, when receiving events, look up entries in the params field. When sending events, this can be done by definining event types, or you can use dictionary&#60;string,any> type; when receiving events, the EPL type will be dictionary&#60;any,any>. Note that EPL is strongly typed, so if you are creating an event with no fragments, a 'new dictionary&#60;string,any>' expression is required. If you are providing entries inline with a dictionary literal, then EPL will determine the type based on the type of the first key and value pair - thus, for dictionary&#60;string, any>, cast the first value to an 'any' type with a &#60;any> cast operator:

	send Event(..., new dictionary&#60;string,any>) to Event.CHANNEL;
	
	send Event(..., {"fragment":&#60;any>"value"}) to Event.CHANNEL;

The MeasurementValue type is provided for the measurements in the Measurement type. MeasurementValue has value and unit, fields, and extraParams for other fragments.

Example 1:

	send Measurement("", "c8y_TemperatureMeasurement", "12345", currentTime, {
		"c8y_TemperatureMeasurement":{
			"T1":MeasurementValue(1.0, "C", new dictionary&#60;string,any>),
			"T2":MeasurementValue(2.0, "C", new dictionary&#60;string,any>),
			"T3":MeasurementValue(3.0, "C", new dictionary&#60;string,any>),
			"T4":MeasurementValue(4.0, "C", new dictionary&#60;string,any>),
			"T5":MeasurementValue(5.0, "C", new dictionary&#60;string,any>)
		}},
		new dictionary&#60;string,any>) to Measurement.CREATE_CHANNEL;

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

Example 2:

	send ManagedObject("",
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

This will result in the following JSON structure:

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



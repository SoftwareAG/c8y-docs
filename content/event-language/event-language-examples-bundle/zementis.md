---
weight: 50
title: Using Zementis analytic models
layout: redirect
---

The CEP rule/module below shows how to use [Zementis](http://www2.softwareag.com/corporate/products/apama_webmethods/zementis/default.aspx?) analytic models inside {{< product-c8y-iot >}}.

We are assuming the input data looks like this:

	{
	  "c8y_SteamMeasurement": {
	    "Temperature": {
	      "value": ...,
	      "unit": "C"
	    }
	  },
	{
	  "c8y_TemperatureMeasurement": {
	    "Pressure": {
	      "value": ...,
	      "unit": "bar"
	    }
	  },
	{
	  "c8y_TemperatureMeasurement": {
	    "Steamoutput": {
	      "value": ...,
	      "unit": "%"
	    }
	  },
	  "time":"...",
	  "source": {
	    "id":"..."
	  },
	  "type": "c8y_TemperatureMeasurement"
	}

First, a predictive model is created and uploaded via Zementis console. Assume, the model becomes available for data scoring on https://myadapa.zementis.com:443/adapars/apply/model_name endpoint.

**CEP module:**

	create constant variable string model_name = "model_name";
	create constant variable string model_url = "https://myadapa.zementis.com:443/adapars/apply/";
	create constant variable string auth = "Basic ...";
	create constant variable string source_device = "12345";

	create expression string js:getLabel(stringObj)[
	var zemOutputs = JSON.parse(stringObj).outputs;
	output = zemOutputs.pop().Predicted_label;
	];

	@Name("inputData")
	insert into inputDataAll
	select
	     m.source as source,
	     getNumber(m, "c8y_SteamMeasurement.Temperature.value") as `steam.temperature`,
	     getNumber(m, "c8y_SteamMeasurement.Pressure.value") as `steam.pressure`,
	     getNumber(m, "c8y_SteamMeasurement.Steamoutput.value") as `steam.steamoutput`
	from MeasurementCreated m
	where
	     measurement.source.value = source_device;

	@Name("requestZementis")
	insert into SendRequest
	select
	     "GET" as method,
	     model_url || model_name || "?record=" || toJSON(m.*) as url,
	     auth as authorization,
	     "application/json" as contentType,
	     m.source as source
	from inputDataAll m;

	@Name("responseZementis")
	insert into CreateEvent
	select
	     "response_received_" || getString(response, "status") as type,
	     getLabel(response.body) as text,
	     response.creationTime as dateTime,
	     getString(response, "source.value") as source
	from ResponseReceived response
	where
	     getString(response, "source.value") = source_device;

	@Name("generateAlarm")
	insert into CreateAlarm
	select
	     response.creationTime as dateTime,
	     getString(response, "source.value") as source,
	     "cepFailureAlarm" as type,
	     "Zementis Test Failure" as text,
	     "ACTIVE" as status,
	     "MAJOR" as severity
	from ResponseReceived response
	where
	     getString(response, "source.value") = source_device
	     and getLabel(response.body) = "0";


The {{< product-c8y-iot >}} CEP module works as follows:

* The data from a specific device is filtered. The measurement values that should be passed for analysis are selected.
* In order to apply the analytic model, an outbound HTTP request is performed to the above Zementis endpoint. The measurement values that need to be analyzed are passed in request URL parameters.
* Depending on the score returned from the model, an alarm is raised.

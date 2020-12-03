---
weight: 50
title: Combining streaming analytics with predictive analytics
layout: redirect
---

Apama can process incoming data and then use a predictive model in the Zementis microservice to make decisions on the processed data. We will assume you have already created a model following the [Predictive Analytics guide](/predictive-analytics). Each model has a name and you execute the model with a JSON-encoded data string in the query parameters of a GET request to that name. For example, you might execute a simple model with a request like this:

```http
GET /service/zementis/apply/modelName?record=%7B%22name%22:%22fred%22,%22age%22:37%7D
```

Special characters like quotes (") and curly braces must be encoded in the request. This will happen automatically when using the `setQueryParameter` API.

The rest of this guide will assume you have a model with a single parameter which analyzes the RSSI value of WiFi networks

The response will be a JSON document with the results of executing the model.

```java
{
  "model" : "modelName",
  "outputs" : [ {
    "normalizedAnomalyScore" : 0.36550809046915766,
    "decisionFunction" : -0.27619546519420546,
    "rawAnomalyScore" : 5.5437220118668105,
    "outlier" : false
  } ]
}
```

We will start with EPL which connects to Cumulocity and starts listening for measurements from a specific device.

```java
using com.apama.json.JSONPlugin;
 
monitor LookForWifiAnomalies
{
    CumulocityRequestInterface cumulocity;
    action onload()
    {
        cumulocity := CumulocityRequestInterface.connectToCumulocity();
        listenForSignalStrength("idOfDevice", "nameOfZementisModel");
    }
}
```

You will need to replace the device identifier and Zementis model name for your installation.

### Looking for events

First we need to collect some data from measurements. This will use techniques which were previously introduced in this guide. In this case, we will be looking for measurements which arrive from a particular device, check whether they have a given key and if so query the Zementis microservice to decide how we should respond.

```java
action listenForSignalStrength(string deviceId, string modelName)
{
    monitor.subscribe(Measurement.CHANNEL);
    on all Measurement(source = deviceId) as m {
        if (m.measurements.hasKey("c8y_SignalStrengthWifi")) {
            string record := convertMeasurementToRecord(m);
            Request zementisRequest := cumulocity.createRequest("GET", "/service/zementis/apply/"+modelName, any());
            zementisRequest.setQueryParameter("record", record);
            zementisRequest.execute(ZementisHandler(deviceId).requestHandler);
        }
    }
}
```

### Converting measurements to Zementis records

In order to execute the Zementis model we need to convert the Cumulocity request into a record suitable for passing to the Zementis microservice. This will consist of constructing a dictionary corresponding to a JSON object and then encoding it as a string with the JSON EPL plug-in.

```java
action convertMeasurementToRecord(Measurement m) returns string
{
    dictionary<string, any> json := {};
    json["rssi"] := m.measurements.getOrDefault("c8y_SignalStrengthWifi").getOrDefault("rssi").value;
    json["source"] := m.source;
    json["time"] := m.time;
    return JSONPlugin.toJSON(json);
}
```

### Receiving the response from the Zementis microservice

The response from the Zementis microservice will be passed to the request handler once the model has finished executing. It will contain a payload which has been parsed from JSON and will tell us if this is an outlier. We want to raise alarms in Cumulocity for any outliers, which we will do by sending an `Alarm` event. We are using an event with an action on it so that we can create a closure around the device identifier.

```java
event ZementisHandler
{
    string deviceId;
    action requestHandler(Response zementisResponse)
    {
        integer statusCode := zementisResponse.statusCode;
        if (statusCode = 200 and <boolean> zementisResponse.payload.getSequence("outputs")[0].getEntry("outlier") = true) {
            send Alarm("", "AnomalyDetectionAlarm", deviceId, currentTime,
                "Anomaly detected", "ACTIVE", "CRITICAL", 1, new dictionary<string, any>) to Alarm.CHANNEL;
        }
    }
}
```


---
weight: 70
title: Connecting Apama to Zementis and other microservices
layout: redirect
---

### Overview

Streaming analytics applications using Apama can make use of applications running in other microservices. This section uses a Machine Learning application built with the Zementis microservice, but the steps apply to connecting to any other microservice running inside {{< product-c8y-iot >}}. This section is going to show you how to create a connection to the {{< product-c8y-iot >}} platform from within Apama EPL which can be used to invoke other microservices directly. It will then show you how to make a request and decode the result.

We will assume that you are developing an EPL app using the EPL editor that is part of the Streaming Analytics application and demonstrate talking to a Machine Learning model loaded through the Zementis microservice. The steps in this guide will also work with any other way you could be creating an Apama application and can be used to interact with any microservice.

### Creating an EPL app

Click the Streaming Analytics icon in the application switcher. On the resulting home screen, navigate to the **EPL Apps** page and then click **New EPL app**. You will now see an EPL editor window in which to create the app which interacts with the Zementis microservice.

### Connecting to the Cumulocity IoT platform

To support making these requests, we provide a helper event with actions to automatically connect to the {{< product-c8y-iot >}} platform and then create requests which can be used to call other microservices. This helper event is called `CumulocityRequestInterface` and is within the `com.apama.cumulocity` package. This helper event provides a static action which will connect to {{< product-c8y-iot >}} and return an instance of the event. It can automatically connect either from within a microservice or the {{< product-c8y-iot >}} platform itself, or from a remote correlator. That instance has an action which will create a request to call a specific microservice.

To create the connection from your own code, simply call the `connectToCumulocity` method and store the result:

```java
CumulocityRequestInterface cumulocity := CumulocityRequestInterface.connectToCumulocity();
```

This will automatically create a connection using the credentials and connection details provided to your microservice, or using the configuration for the {{< product-c8y-iot >}} transport when connecting from an external Apama instance.

### Making microservice requests

The `CumulocityRequestInterface` instance has an action on it to create a request:

```java
/**
* Allows creation of a request on a transport that
* has been configured for a Cumulocity IoT connection.
*
* @param method The type of HTTP request, for example "GET".
* @param path A specific path to be appended to the request.
* @param payload A dictionary of elements to be included in the request.
*/
action createRequest(string method, string path, any payload) returns Request
```

This takes the HTTP method to use (usually GET, PUT or POST), a path including the {{< product-c8y-iot >}} service prefix (typically something like */service/serviceName/path/on/service*) and the payload. The payload will be converted to a JSON document before submitting to the microservice. The action returns a `Request` object which is part of the HTTP Client interface, documentation of which can be found in the [API Reference for EPL (ApamaDoc)]({{< link-apamadoc-api >}}com/softwareag/connectivity/httpclient/package-summary.html).

Requests are executed with a call-back action as an argument which will be invoked when the request is completed with the response as an argument. If you must set any options, query parameters or headers on the request, you can set those on the `Request` object before calling it. For example:

```java
action responseCallback(Response resp) {
    string objectId := resp.payload.getString("id");
    ...
}
...
Request req := cumulocity.createRequest("GET", "/service/otherService/data", any());
req.setQueryParameter("type", "object");
req.execute(responseCallback);
```

The response will also be decoded from JSON and the response payload uses the `AnyExtractor` pattern which you can find linked from the `Response` event in the HTTP Client transport documentation. The above example will be equivalent to the REST request `GET http://cumulocity/service/otherService/data?type=object`.

### Combining streaming analytics with machine learning

Apama can process incoming data and then use a Machine Learning model in the Zementis microservice to make decisions on the processed data. We will assume you have already created a model following the [Machine Learning guide](/machine-learning). Each model has a name and you execute the model with a JSON-encoded data string in the query parameters of a GET request to that name. For example, you might execute a simple model with a request like this:

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

We will start with EPL which connects to {{< product-c8y-iot >}} and starts listening for measurements from a specific device.

```java
using com.apama.json.JSONPlugin;
using com.apama.cumulocity.CumulocityRequestInterface;
using com.softwareag.connectivity.httpclient.Request;
using com.softwareag.connectivity.httpclient.Response;
using com.apama.cumulocity.Alarm;
using com.apama.cumulocity.Measurement;

monitor LookForWifiAnomalies
{
    CumulocityRequestInterface cumulocity;
    action onload()
   {
           cumulocity := CumulocityRequestInterface.connectToCumulocity();
           listenForSignalStrength("idOfDevice", "nameOfMachineLearningModel");
   }
}
```

You must replace the device identifier and the name of the Machine Learning model for your installation.

#### Looking for events

First we must collect some data from measurements. This will use techniques which were previously introduced in this guide. In this case, we will be looking for measurements which arrive from a particular device, check whether they have a given key and if so query the Zementis microservice to decide how we should respond.

```java
action listenForSignalStrength(string deviceId, string modelName)
{
    monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
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

#### Converting measurements to Zementis records

In order to execute the Machine Learning model, we must convert the {{< product-c8y-iot >}} request into a record suitable for passing to the Zementis microservice. This will consist of constructing a dictionary corresponding to a JSON object and then encoding it as a string with the JSON EPL plug-in.

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

#### Receiving the response from the Zementis microservice

The response from the Zementis microservice will be passed to the request handler once the model has finished executing. It will contain a payload which has been parsed from JSON and will tell us if this is an outlier. We want to raise alarms in {{< product-c8y-iot >}} for any outliers, which we will do by sending an `Alarm` event. We are using an event with an action on it so that we can create a closure around the device identifier.

```java
event ZementisHandler
{
    string deviceId;
    action requestHandler(Response zementisResponse)
    {
        integer statusCode := zementisResponse.statusCode;
        if (statusCode = 200 and <boolean> zementisResponse.payload.getSequence("outputs")[0].getEntry("outlier") = true) {
            send Alarm("", "AnomalyDetectionAlarm", deviceId, currentTime,
                "Anomaly detected", "ACTIVE", "CRITICAL", 1, new dictionary<string, any>) to Alarm.SEND_CHANNEL;
        }
    }
}
```

### Other microservices

This section was demonstrating talking to a Zementis microservice to execute a model. However, you can also access any other microservice through {{< product-c8y-iot >}} as long as it uses standard REST requests with JSON payloads. You must simply construct the appropriate */service* URL using the name of your microservice followed by the path of the request within your microservice.

---
weight: 70
title: Connecting Apama to other microservices
layout: redirect
---

### Overview

Streaming analytics applications using Apama can make use of applications running in other microservices. This section uses the `health` endpoint of an Apama-ctrl microservice, but the steps apply to connecting to any other microservice running inside {{< product-c8y-iot >}}. This section is going to show you how to create a connection to the {{< product-c8y-iot >}} platform from within Apama EPL which can be used to invoke other microservices directly. It will then show you how to make a request and decode the result.

We will assume that you are developing an EPL app using the EPL editor that is part of the Streaming Analytics application and demonstrate a request to a microservice. The steps in this guide will also work with any other way you could be creating an Apama application and can be used to interact with any microservice.

### Creating an EPL app

Click the Streaming Analytics icon in the application switcher. On the resulting home screen, navigate to the **EPL Apps** page and then click **New EPL app**. You will now see an EPL editor window in which to create the app which interacts with another microservice.

### Connecting to the {{< product-c8y-iot >}} platform

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

### Example request to a microservice endpoint

The following is a very simple application that shows how to query another microservice. We will be using the `health` endpoint of an Apama-ctrl microservice as an example.

We will start with EPL which connects to {{< product-c8y-iot >}} and calls an action to send the request.

```java
using com.apama.cumulocity.CumulocityRequestInterface;
using com.softwareag.connectivity.httpclient.Request;
using com.softwareag.connectivity.httpclient.Response;

monitor CallAnotherMicroservice {

	CumulocityRequestInterface requestIface;

	action onload() {
		requestIface := CumulocityRequestInterface.connectToCumulocity();
		sendHealthRequest();
	}
```

#### Sending the request

First we create the `Request` with: the type of request, the request path and the payload `any()` because we do not need to put anything in the payload in this example.

We then use `execute` to send the request and provide an action to be called with the response.

```java
action sendHealthRequest()
{
	Request healthRequest:=
		requestIface.createRequest("GET", "/service/cep/health", any());
	healthRequest.execute(responseHandler);
}
```

We use an Apama-ctrl microservice for this example, which has the context path of */cep*. To modify this for another microservice substitute */cep* with the context path as defined in the manifest for your microservice.
The */health* endpoint completes the request path for this example, but could be replaced with any valid endpoint of the microservice.

#### Receiving the response

Here is the defined action that we used when sending the request. This action is called on response to the sent request and is provided with the `Response` object.

For this example we simply log the `health` of the microservice if it was successful.

```java
action responseHandler(Response healthResponse)
{
	integer statusCode:= healthResponse.statusCode;
	if (statusCode = 200)
	{
		log "Health response received: " + healthResponse.payload.data.toString() at INFO;
	}
}
```

### Other microservices

This section was demonstrating talking to an Apama-ctrl microservice. However, you can also access any other microservice through {{< product-c8y-iot >}} as long as it uses standard REST requests with JSON payloads. You must simply construct the appropriate */service* URL using the name of your microservice followed by the path of the request within your microservice.

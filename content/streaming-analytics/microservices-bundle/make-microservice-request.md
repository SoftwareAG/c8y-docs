---
weight: 40
title: Making microservice requests
layout: redirect
---

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

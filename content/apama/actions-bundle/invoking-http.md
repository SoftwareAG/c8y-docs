---
weight: 40
title: Invoking HTTP services
layout: redirect
---

To interact with HTTP services using REST and JSON, create a `com.softwareag.connectivity.httpclient.HttpTransport` instance using one of the factory methods:

* HttpTransport.getOrCreate(string host, integer port) returns HttpTransport
* HttpTransport.getOrCreateWithConfiguration(string host, integer port, dictionary &lt;string, string&gt; configurations) returns HttpTransport (the keys in the configurations dictionary are the constants on HttpTransport with the `CONFIG_` prefix)

On the `HttpTransport` object, call one of the create methods, passing a path and payload as needed, to produce a `Request` object.

On the `Request` object, you may set cookies, headers or query parameters as needed, and can then invoke the request with the `execute(action<Response> callback)`. Supply the name of an action in your monitor for the callback, and it will be invoked with the `Response` when the request has completed (or timed out).

In the callback, the `Response` object is supplied with `statusCode` and `payload`. Fields on the payload are accessible via the `AnyExtractor` object it is supplied in - see the information on [access fragments](/apama/actions/#utility-functions) below.

Refer to the [API Reference for EPL (ApamaDoc)]({{< link-apamadoc-api >}}) for further details.

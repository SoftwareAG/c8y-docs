---
order: 30
title: The basic SmartREST protocol
layout: redirect
---

The basic structure of all SmartREST requests is as follows:

* All requests are POST requests to the endpoint "/s", regardless of what the requests finally translate to.
* The standard HTTP "Authorization" header is used to authenticate the client.
* An additional "X-Id:" header is used to identify the implementation of the client, either as device type (such as "Device_1.0") or as an identifier returned by the template registration process.
* A request body contains rows of text in comma-separated value format. Each row corresponds to one request to the standard Cumulocity REST API.
* The response is always "200 OK".
* The response body again contains rows of comma-separated values. A row corresponds to a response from the Cumulocity REST API on a particular request. 

Using the above example, a SmartREST request would be as follows:

	POST /s HTTP/1.1
	Authorization: Basic ...
	X-Id: Device_1.0

	1,200,20.5

And the corresponding response would be:

	HTTP/1.1 200 OK
	Transfer-Encoding: chunked

	20,0

To match the requests and responses, a response line contains, next to the error code, the line of the request that the response answers. In this example, "20" indicates "OK" and "0" refers to the first line of the request.
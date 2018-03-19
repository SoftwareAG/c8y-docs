---
order: 40
title: How are templates registered?
layout: redirect
---

As described above, a client using SmartREST will first ask if its SmartREST templates are already known to the server. This is done with an empty SmartREST request:

	POST /s HTTP/1.1
	Authorization: Basic ...
	X-Id: Device_1.0

If the device implementation is known, the response will return an ID that can be used as "shorthand" in the "X-Id" header of later requests.

	HTTP/1.1 200 OK

	20,<id>

If the device implementation is unknown, the response will be:

	HTTP/1.1 200 OK

	40,"No template for this X-ID"

In this case, create all templates used in your device implementation. 

	POST /s HTTP/1.1
	Authorization: Basic ...
	X-Id: Device_1.0
	
	10,1,POST,/measurement/measurements,application/vnd.com.nsn.cumulocity.measurement+json,,%%,NOW UNSIGNED NUMBER,{ "time": "%%", "type": ... }
	...

In this example, "10" refers to a request template (whereas "11" would refer to a response template). The template is number "1", so SmartREST requests using this template have a "1" in their first column. The template refers to a "POST" request to the endpoint "/measurement/measurements" with a content type of "application/vnd.com.nsn.cumulocity.measurement+json". The placeholder used in the template is "%%". The placeholders are a time stamp ("NOW"), an unsigned number and a general number. Finally, the last column contains the body of the request to be filled in an sent.
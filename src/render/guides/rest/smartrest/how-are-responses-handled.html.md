---
order: 50
title: How are responses handled?
layout: redirect
---

The above example illustrated the handling of requests and request templates. For responses, [JSONPath expressions](http://goessner.net/articles/JsonPath/) translate Cumulocity REST responses into CSV. Assume, for example, a device has a display and can show a message on the display. An operation to update the message would look like this:

	{
		"c8y_Message": {
			 "text": "Hello, world!"
		},
		"creationTime": "2014-02-25T08:32:45.435+01:00",
		"deviceId": "8789602",
		"status": "PENDING",
		...
	}

On the client side, the device mainly needs to know the text to be shown. In JSONPath, the "text" property is extracted using the following syntax:

	$.c8y_Message.text 

In this syntax, "$" refers to the root of the data structure and "." selects an element from a data structure. For more options, please consult the [JSONPath reference](http://goessner.net/articles/JsonPath/).

A device usually queries for all operations that are associated with it and that are in pending state. The standard Cumulocity response to such a query is:

	{
		"operations": [
			{
				"c8y_Message": {
					"text": "Hello, world!"
				},
				"creationTime": "2014-02-25T08:32:45.435+01:00",
				"deviceId": "8789602",
				"status": "PENDING",
				...
			}, {
				"c8y_Relay": {
					...
			}
			...
		]
	]

That is, the response contains a list of operations, and these operations can have different types. To work with such a structure, use the following response template:

	11,2,$.operations,$.c8y_Message,$.c8y_Message.text 

This means, value by value:

* 11: This is a response template.
* 2: It has Number 2.
* $.operations: The response is a list and the list's property is "operations".
* $.c8y_Message: This template applies to responses with the property "c8y_Message".
* $.c8y_Message.text: The text will be extracted from the message and will be returned.

The SmartREST client will thus get the following response:

	HTTP/1.1 200 OK
	
	2,0,"Hello, world!"

That is, the response was created using Template 2, the template to translate display message operations. The response refer to the first request sent. The actual message to set is "Hello, world!".
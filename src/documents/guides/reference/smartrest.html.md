---
order: 15
layout: default
title: SmartREST
toc: true
---

## Overview

Topics:

* Reference to SmartREST description
* Specification of general request/response format, structure of X-Id (i.e., include software identifier and version)
* Specification of CSV encoding (character set, escaping, line feeds)
* Registration API.
* Templates data structure including permitted values for validation.
* Error codes.
* Compatbility (i.e., if you change the request, use a new number or create a new implementation version)

## The protocol

*SmartREST* is built upon the well-established *HTTP* protocol making it work everywhere since most popular platforms provide an *HTTP* client through which *SmartREST* can be accessed. *SmartREST* communicates exclusively through the `/s` resource using the *HTTP* `POST` method for bidirectional communication. The payload data format in *CSV (comma-separated values)*.

The following example shows the communication between a client and the  *SmartREST* endpoint. Note the `Authorization` header and the custom `X-Id` header in the request which specifies the *SmartREST* template to use for this request.

	POST /s HTTP/1.0
	Authorization: Basic ...
	X-Id: ...
	Content-Length: 13
	
	100,1234456

Each *SmartREST* request is represented by one row having a unique unsigned integer as its first value determining the action and subsequent values for parameters.

The *SmartREST* endpoint yields the following response. Note that the *HTTP* response code is always `200` unless the *SmartREST* endpoint is not available.

	HTTP/1.1 200 OK
	Content-Length: 29
	
	200,1,123456,Request result

Each row yielded by the *SmartREST* endpoint represents a set of extracted values from the result of a *SmartREST* request containing a unique unsigned integer, the *SmartREST* request line number and the extracted data values, respectively.

### Data format

The *CSV (comma-separated values)* format is used for communication with the *SmartREST* endpoint. The following rules must be followed to ensure a frictionless communication.

* Every row must be terminated by the `CRLF` character sequence.
* Values are always separated by a comma (`,`).
* If a value contains double-quotes (`"`), commas (`,`), leading or trailing whitespace, line-breaks or tab stops, it must be surrounded by quotes (`"`). Contained double-quotes (`"`) must be escaped by prepending another double-quote (`""`).

#### Examples

The following examples illustrate the rules stated above:

	100,Hello world!
	101," I have leading whitespace!"
	102,"I have trailing whitespace!"
	103,"I contain a line
	break!"
	104,"I have ""quotes""!"
	105,I also have 'quotes'!

## Templates

*SmartREST* templates are a collection of request and response templates used for the conversion of *CSV* data and Cumulocity REST API calls. Additionally, *SmartREST* templates contain a template identifier which is compared to the custom `X-Id` header field to identify the *SmartREST* template used for processing.

Each request and response template has a unique numeric identifier called the message identifier which is referenced by the first value of each *SmartREST* request or response row. To avoid collision with one of the default message identifiers, developers are advised to choose message identifiers starting at `100`.

### Request templates

A request template contains all necessary information to convert a *SmartREST* request into a corresponding REST API call which is then sent to the platform.

A request template contains the following information:

* A unique unsigned integer as a message identifier
* The request method, e.g. `GET` or `POST`.
* The resource URI, for instance `/inventory/managedObjects`
* The `Content-TYpe` and `Accept` header values of the sent and received data
* A placeholder such as `%%`
* The expected request parameters such as `STRING`s, `NUMBER`s, `UNSIGNED` integers and `DATE`s
* The template string with placeholders for each parameter

### Response templates

A response template contains the necessary information to extract data values from a platform REST API call response which are then sent back to the client in the *CSV* data format.

The following information is contained within a response template:

* A unique unsigned integer as a message identifier
* A JSON path referencing a base object or object list to extract data from, e.g. `$` or `$.managedObjects`. If the JSON path points to a list of objects, one row of extracted data for each object in the list is yielded.
* A JSON path which must exist within the base object or base object list in order to extract values, e.g. `$.id`. The value is not added to the response.
* A variable number of JSON paths for each value to extract, e.g. `$.id`, `$.name` or `$.type`. Values are added to the response in the order they were defined in the template.

## Registration process

This reference guide solely focusses on the registration of *SmartREST* templates using the *SmartREST* `/s` endpoint. Alternatively, templates can also be registered using the platform inventory API.

Templates can be registered with one single request to the `/s` endpoint containing the custom `X-Id` header field as well as the *SmartREST* template in the form of *CSV* data. The difference between a template registration and a normal *SmartREST* request is that rows are not processed individually during template registration.

	POST /s HTTP/1.0
	Authorization: Basic ...
	X-Id: ...
	Content-Length: ...
	
	...

Should the template registration be successful, a response like this will be returned where the message identifier `20` indicates that the template now exists in the inventory and the parameter `123456` indicates the managed object ID of the template.

	HTTP/1.1 200 OK
	Content-Length: 10
	
	20,12345

### Syntax

Each request and response template is contained within one row of the template data. Request templates are indicated by the message identifier `10` and response templates by the identifier `11`. Should one of those message identifiers occour in a *SmartREST* request, the entire request is treated as a template. Thus any other message identifier besides `10` and `11` will yield an error.

#### Request templates

Request templates have the following syntax:

	10,<ID>,<METHOD>,<URI>,<CONTENT>,<ACCEPT>,<PLACEHOLDER>,<PARAMS>,<TEMPLATE>

Where:

* `<ID>` is the message identifier of the request template.
* `<METHOD>` is the *HTTP* method used for the request. `GET`, `POST`, `PUT` and `DELETE` are supported.
* `<URI>` is the resource identifier.
* `<CONTENT>` is the `Content-Type` header field value.
* `<ACCEPT>` is the `Accept` header field value. This is mostly equal to `<CONTENT>`.
* `<PLACEHOLDER>` is the placeholder string which is replaced by parameters in the request URI and template string.
* `<PARAMS>` is a space-separated list of parameter types which are required for the template. The number of occourances of the placeholder string in the request URI and template string must be equal to the number of parameters specified.
  * `STRING` parameters will only yield an error if no value is specified.
  * `UNSIGNED` parameters will yield an error if the supplied parameter is not an unsigned integer.
  * `INTEGER` parameters will yield an error if the supplied parameter is not a signed integer.
  * `NUMBER` parameters will yield an error if the supplied parameter is not a floating-point number.
  * `DATE` parameters will yield an error if the parameter cannot be parsed as a date.
  * `NOW` parameters will never yield an error. No request parameter is required.
* `<TEMPLATE>` is the actual template string which gets sent as payload to the platform after the placeholders have been replaced with the parameter values.

##### Example

	10,100,POST,/inventory/managedObjects,application/vnd.com.nsn.cumulocity.managedObject+json,application/vnd.com.nsn.cumulocity.managedObject+json,%%,STRING,"{""name"":""Test Device"",""type"":""com_example_TestDevice"",""c8y_IsDevice"":{}}"

Explanation:

* `10` describes a request template.
* `100` is the message identifier of the request template.
* `POST` is the *HTTP* method used.
* `/inventory/managedObjects` is the resource identifier.
* `application/vnd.com.nsn.cumulocity.managedObject+json` is the content type.
* `application/vnd.com.nsn.cumulocity.managedObject+json` is the accept content type.
* `%%` is the placeholder string.
* `STRING` specifies that the request accepts one parameter which must be a string.

#### Response templates

Response templates have the following syntax:

	11,<ID>,<BASE>,<COND>,<VALUE>[,<VALUE>]

Where:

* `<ID>` is the message identifier of the response template.
* `<BASE>` is the base JSON path pointing to an object or object list from which the values are extracted.
* `<COND>` is a conditional JSON path which gets checked for existance. Only if the path exists, values are extracted.
* `<VALUE>` is a JSON path pointing to a value to extract within the base object or object in the base object list. An unlimited number of `<VALUE>`s can be specified.

##### Example

	11,201,,"$.c8y_IsDevice","$.id"

Explanation:

* `11` describes a response template.
* `201` is the message identifier of the response template.
* The base object JSON path is empty, thus `$` is assumed.
* `$.c8y_IsDevice` specifies that values are only extracted if the object has a fragment called `c8y_IsDevice`.
* `$.id` is the value extracted, namely the device ID.

## Built-in messages

*SmartREST* has a variety of built-in messages.

...


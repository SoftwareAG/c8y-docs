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

*SmartREST* is built upon the well-established *HTTP* protocol making it work everywhere since each and every platform provides an *HTTP* client through which *SmartREST* can be accessed. *SmartREST* communicates exclusively through the `/s` resource using the *HTTP* `POST` method for bidirectional communication.

The following example shows the communication between a client and the  *SmartREST* endpoint. Note the `Authorization` header and the custom `X-Id` header in the request which specifies the *SmartREST* template to use for this request.

	POST /s HTTP/1.0
	Authorization: Basic ...
	X-Id: ...
	Content-Length: 13
	
	100,1234456

Each *SmartREST* request is represented by one row having the message identifier of the request template as its first value and subsequent values for request parameters.

The *SmartREST* endpoint yields the following response. Note that the *HTTP* response code is always `200` unless the *SmartREST* endpoint is not available.

	HTTP/1.1 200 OK
	Content-Length: 29
	
	200,1,123456,Request result

Each row yielded by the *SmartREST* endpoint represents a set of extracted values from the result of a *SmartREST* request containing the response template message identifier, the *SmartREST* request line number and the extracted data values, respectively.

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

*SmartREST* templates are a collection of request and response templates used for the conversion of *CSV* data and Cumulocity REST API calls. Additionally, *SmartREST* templates contain a template identifier which is compared to the custom `X-Id` header field to identify the *SmartREST* template which should be used for request processing.

Each request and response template has a unique numeric identifier called the message identifier which is referenced by the first value of each *SmartREST* request or response row. To avoid collision with one of the default message identifiers, developers are advised to choose message identifiers starting at `100`.

### Request templates

A request template contains all necessary information to convert a *SmartREST* request into a corresponding REST API call which is then sent to the platform.

A request template contains the following information:

* A unique unsigned integer as a message identifier
* The resource URI, for instance `/inventory/managedObjects`
* The `Content-TYpe` and `Accept` header values of the sent and received data
* A placeholder such as `%%`
* The expected request parameters such as `STRING`s, `NUMBER`s, `UNSIGNED` integers and `DATE`s
* The template string with placeholders for each parameter

### Response templates

A response template contains the necessary information to extract data values from a platform REST API call response.

The following information is contained within a response template:

* A unique unsigned integer as a message identifier
* A JSON path referencing the base
* A JSON path
* A variable number of JSON paths for each value to extract

### Registration process

## Error codes


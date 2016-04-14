---
order: 15
layout: default
title: SmartREST
toc: true
---

## Overview

This reference guide walks through the *SmartREST* protocol, the data format used, as well as the anatomy and registration of *SmartREST* templates. Built-in messages as well as errors are also discussed. For a step-by-step guide, see the [SmartREST guide](/guides/rest/smartrest)

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

Note: If response from Cumulocity REST API would be empty (e.g. like after deleting a Managed Object) then response from *SmartREST* would be empty as well. Regardless of registered response templates.

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

Before a *SmartREST* template can be registered, its existence must be checked. If the template already exists, a registration is not necessary and yields an error message.

The existence of a *SmartREST* template can be checked by making an empty request:

	POST /s HTTP/1.0
	Authorization: Basic ...
	X-Id: ...
	Content-Length: 0

If the template exists, the following response is yielded where the message identifier `20` indicates that the template exists in the inventory and the parameter `123456` indicates the managed object GId of the template:

	HTTP/1.1 200 OK
	Content-Length: 10

	20,12345

If the template does not exist, a response containing an error message is yielded:

	HTTP/1.1 200 OK
	Content-Length: 33

	40,"No template for this X-ID."

If the template does not exist, a template registration request can be issued using the previously checked `X-Id`.

Templates can be registered with one single request containing *SmartREST* template in the form of *CSV* data. The difference between a template registration request and a normal *SmartREST* request is that rows are not processed individually during template registration.

	POST /s HTTP/1.0
	Authorization: Basic ...
	X-Id: ...
	Content-Length: 275

	10,100,POST,/inventory/managedObjects,application/vnd.com.nsn.cumulocity.managedObject+json,application/vnd.com.nsn.cumulocity.managedObject+json,,,"{""name"":""Test Device"",""type"":""com_example_TestDevice"",""c8y_IsDevice"":{}}"
	11,201,,"$.c8y_IsDevice","$.id"

Should the template registration be successful, a similar response like above will be returned.

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

	10,100,POST,/inventory/managedObjects,application/vnd.com.nsn.cumulocity.managedObject+json,application/vnd.com.nsn.cumulocity.managedObject+json,,,"{""name"":""Test Device"",""type"":""com_example_TestDevice"",""c8y_IsDevice"":{}}"

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

## Using SmartREST with multiple X-Ids

SmartREST supports sending of messages for different X-Ids within the same request. In this case the X-Id header mustn't be used but instead the body will contain additional information about which lines belong to which X-Id.

### Sending messages

To indicate the X-Id in the body it is possible to include the following line

	15,myxid

All following lines will be handled with the given X-Id until you enter the next X-Id line.

	15,myxid1
	...
	...
	15,myxid2
	...

### Receiving messages

When sending with multiple X-Ids the response also can contain responses from multiple X-Ids. The response will contain an additional line that will indicate which X-Id the following lines are from.
The second value in this line indicates how many lines are following from this X-Id.

	87,2,myxid1
	...
	...
	87,1,myxid2
	...

### Checking if templates are registered

You can check if templates are already existing by just include X-Id lines in the body.

	15,myxid1
	15,myxid2
	15,myxid3
	15,myxid4

You will get the same response like described in the registration process but for every line.

	20,12345
	20,12346
	40,"No template for this X-ID."
	20,12347

### Registering templates

Template registration also supports the use of the X-Id in the body. Therefore you can create multiple in a single request.

	15,myxid1
	10,100,POST,/inventory/managedObjects,application/vnd.com.nsn.cumulocity.managedObject+json,application/vnd.com.nsn.cumulocity.managedObject+json,,,"{""name"":""Test Device"",""type"":""com_example_TestDevice"",""c8y_IsDevice"":{}}"
	11,201,,"$.c8y_IsDevice","$.id"
	15,myxid2
	10,100,POST,/inventory/managedObjects,application/vnd.com.nsn.cumulocity.managedObject+json,application/vnd.com.nsn.cumulocity.managedObject+json,,,"{""name"":""Test Device"",""type"":""com_example_TestDevice"",""c8y_IsDevice"":{}}"
	11,201,,"$.c8y_IsDevice","$.id"

## SmartREST Real-time Notifications

All available real-time notification endpoints and channels of the Cumulocity platform are also available in a SmartREST syntax. Please have a look at the [Real-time notifications](/guides/reference/real-time-notifications) reference guide to understand the general functionality of the [Bayeux protocol](https://docs.cometd.org/current/reference/#_concepts_bayeux_protocol) and get an overview of our available endpoints and channels fo  real-time notifications.

### Using Real-time Notifications with SmartREST

To tell the Cumulocity platform that the real-time notifications should use SmartREST all requests send to the URL must contain the `X-Id` header.

#### Message identifiers

Message identifier | Message parameters              | Description
-------------------|-------------------------|------------
80 | *None* | Initial handshake that will return a unique bayeux clientId.
81 | clientId,channel | Subscribe for the given channel.
82 | clientId,channel | Unsubscribe for the given channel.
83 | clientId | Establish conntection for receiving the notifications (long-polling).
84 | clientId | Disconnect the client from the server.

#### Handshake

Example request:

	80

Example response:

	Un1q31d3nt1f13r


#### Subscribe

Example request:

	81,Un1q31d3nt1f13r,/mychannel

Example response:

Unless there is an error there is no specific response for the subscribe

#### Unsubscribe

Example request:

	82,Un1q31d3nt1f13r,/mychannel

Example response:

Unless there is an error there is no specific response for the unsubscribe

#### Connect

Example request:

	83,Un1q31d3nt1f13r

Example response:

The response is formed by the response templates registered via SmartREST for the `X-Id`. Every received notification via real-time will be parsed  with the available templates and every matching template will be returned as response for the connect request.

Keep-Alive:

The Cumulocity platform will send every 10 minutes a space character through an open long-polling connection to detect connection loss. A response for a connect that has been open for a longer time could contain leading space characters in the first line of the response.

#### Disconnect

Example request:

	84,Un1q31d3nt1f13r

Example response:

Unless there is an error there is no specific response for the disconnect

#### The advice response

The bayeux protocol has a special fragment to tell the client about the recommended settings for timeout of a connection, interval between connect requests and the policy for the follow up after a response for a connect. The advice will be communicated via SmartREST also as a seperate line in the response and can be contained in any response of the above requests.

Response Structure:

	86,<timeout>,<interval>,<reconnect policy>

Timeout and interval will be numbers defining the time in millisecons. The reconnect policy can be one of three values:
- none: do not reconnect after the response from a connect.
- retry: do reconnect after the response from a connect.
- handshake: start with a new handshake (e.g. because the clientId is invalid / server has closed session).

An advice response line does not need to have every value filled

Example:

	86,,10000,retry

### Subscribing with multiple templates

If your device uses multiple templates (e.g. child devices have a different templates than the parent) it is possible to add these templates to your subscribe request. The server will than use all templates (from header and subscribe statement) to parse the responses.

Example request:

	POST /devicecontrol/notifications HTTP/1.0
	Authorization: Basic ...
	X-Id: mytemplate1

	81,Un1q31d3nt1f13r,/mychannel,mytemplate2,mytemplate3

In the case multiple templates are used the response will contain an additional line that indicates which lines are parsed with which templates:

87,{number of  parsed rows},{X-Id used to parse the following rows}

Example response:

	HTTP/1.0 200 OK

 	87,2,mytemplate1
	100,myvalue
	101,myvalue2
	87,1,mytemplate3
	100,myvalue3

## Built-in messages

*SmartREST* has a variety of built-in messages.

### Request messages

Message identifier | Message parameters              | Description
-------------------|-------------------------|------------
10 | Template message identifier<br>Method<br>Resource identifier<br>Content MIME type<br>Accept MIME type<br>Placeholder<br>Request parameters<br>Template string | Represents a request template. If this message occours in the body, the whole body is treated as a *SmartREST* template and thus, all messages besides `10` and `11` will yield an error.
11 | Template message identifier<br>Base JSON path<br>Conditional JSON ath<br>Value JSON paths | Represents a response template. If this message occours in the body, the whole body is treated as a *SmartREST* template and thus, all messages besides `10` and `11` will yield an error.
15 | X-Id | Defines which X-Id to use for the following lines. You must not use the X-Id header when using this line.
61 | Device MO GId | Poll device credentials during device bootstrapping process. No `X-Id` header must be present and the device bootstrap authorization must be used.
80 | *None* | Initial handshake that will return a unique bayeux clientId. SmartREST real-time notifications.
81 | clientId,channel | Subscribe for the given channel. SmartREST real-time notifications.
82 | clientId,channel | Unsubscribe for the given channel. SmartREST real-time notifications.
83 | clientId | Establish conntection for receiving the notifications (long-polling). SmartREST real-time notifications.
84 | clientId | Disconnect the client from the server. SmartREST real-time notifications.

### Response messages

Message identifier | Message parameters              | Description
-------------------|-------------------------|------------
20 | *SmartREST* Template MO GId | Echo response message. Template was found or has been created and everything is OK.
40 | *None* | Template not found.
41 | Line number (optional) | Template creation error.
42 | Line number | Malformed request line
43 | Line number | Invalid message identifier.
45 | Line number | Invalid message arguments.
50 | Line number<br>*HTTP* response code | Server error. This message occurs when an error happened between the *SmartREST* proxy and the platform.
70 | Line number<br>Unique device identifier<br>Tenant ID<br>Username<br>Password | Device bootstrap polling response with credentials.
86 | timeout,interval,reconnect policy | Settings advice for the client using SmartREST real-time notifications.
87 | amount of lines, X-Id | Indicates which X-Id was used to create the amount of following response lines.

#### Error messages

Message identifier | Error message
-------------------|-------------------------|------------
41 | Cannot create templates for already existing template object
41 | Duplicate message identifiers are not allowed
41 | Bad request template definition
41 | Bad response template definition
41 | Bad value type: ...
41 | Bad pattern
41 | Not a valid message identifier for template creation
41 | Invalid JsonPath
41 | Using JsonPath to refer to a list of objects is not allowed for SmartRest
41 | Using Filters (?) in JsonPath is not allowed for SmartRest
41 | No content type supported for {GET or DELETE} templates.
41 | No template string supported for {GET or DELETE} templates.
41 | No content type found for {POST or PUT} templates.
41 | No template string found for {POST or PUT} templates.
41 | Values are only supported for templates with placeholder.
42 | Malformed Request
43 | Invalid message identifier
45 | No arguments supported
45 | Wrong number of arguments
45 | Value is not a {value type}: {value}

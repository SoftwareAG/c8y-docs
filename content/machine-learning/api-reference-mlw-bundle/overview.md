---
order: 5
title: Overview
weight: redirect

aliases:
  - /machine-learning/api-reference/#overview
---

This guide provides users with a comprehensive set of API (Application Programming Interface) to interact with the mlw microservice using REST (Representational State Transfer) over HTTP (Hypertext Transfer Protocol). The mlw microservice API allows users to perform operations on project, resources, tasks and data imports, and process data by issuing a simple request using any HTTP client such as a web browser.

### URI

A full path to the mlw microservice API resource consists of a base path and a resource path. 

The base path URI (Uniform Resource Identifier) for the mlw microservice API is `http://domain:port/service/mlw`, where http or https is the protocol name, domain is the internet domain or network address, port is a non-negative integer representing the port number, and service/mlw represents the application context path. The base path is static and does not change between requests; it merely identifies the server with an application on the network. 

Following the base path is the resource path. It may contain path or query parameters depending on the type of the request and available resources on the server. For example, a resource path `/model/Iris_NN/source?annotated=true `contains static path definitions such as model or source, path parameter Iris_NN for a dynamically allocated resource, and a query parameter annotated=true.

In the following examples, `http://domain:port` is represented as `{{ url }}`.

### Request

The HTTP request is a combination of a simple URI, HTTP verb GET, POST, PUT, or DELETE, request parameters, which can be in the form of a path variable, query, body, or header parameters, and message body (content). 

The path variable is a variable part of otherwise static URI that denotes a set of possible resource names on the server and is denoted with curly braces. For example, `/projects/{projectID}/resources` resource path specifies the Project ID for an arbitrary project denoted as `{projectID}`. Thus, the request path for the Project ID of model 1601283001_Project should be constructed as `/projects/1601283001_Project/resources`. 

Query parameters are appended to the URI with a question mark followed by a list of key/value pairs. A query variable annotated with the value true in the `/resources/deploy?type=PMML` resource path specifies that the returned PMML file should contain annotations as placed by mlw Server, in case of errors or warnings. 

Header parameters are HTTP message metadata in the form of key/value pairs containing information about the message such as content type, message encoding type, authorization, etc. 

Body parameters appear only in POST or PUT requests and need to be encoded by the HTTP client.

In the following examples, `{{ auth }}` represents the base64-encoded `tenant/username:password` or `username:password` sent as Basic Authorization headers with HTTP requests.

### Response

The HTTP response message is composed of a message header and a message body. All mlw microservice response content types implement standard UTF-8 character set encoding. 

The header contains response status code and header fields represented as list of key/value pairs, i.e. `Content-Type:application/json`. Every response from mlw microservice contains a Content-Type header entry with one of following internet media types (aka MIME) as value.

* application/json
* application/xml
* text/plain
* application/zip

### Errors

In error cases, standard HTTP response codes are returned. The response body can contain more information about the error, see the error media type definition below. 

The error interpretations are:

|Code|Name|Description
|:---|:---|:---
|400|Bad Request|Invalid PMML or resource file was provided for uploading.
|401|Unauthorized|Authentication has failed, or credentials were required but not provided.
|404|Not Found|Model or resource was not found.
|409|Conflict|Model or resource already exists.
|500|Internal Server Error|An internal error has occurred and the request could not be processed.
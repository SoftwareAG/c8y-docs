---
order: 10
title: REST implementation
layout: default
---

## Overview

This section describes the aspects common to all REST-based interfaces of Cumulocity. The interfaces are based on the [Hypertext Transfer Protocol, version 1.1](http://www.w3.org/Protocols/rfc2616/rfc2616.html) using [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure).

## HTTP usage

### Authentication

All requests need to include the HTTP ["Authorization" header](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields). The format is:

	Authorization: Basic <<Base64 encoded credentials>>

An example can be found in the [Wikipedia entry](http://en.wikipedia.org/wiki/Basic_access_authentication). For OAuth authentication, the format is:

	Authorization: Bearer <<Base64 encoded access token>>

Cumulocity uses the URL in the ["Host" header](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields) to determine the tenant to authenticate against. Alternatively, you can pass the tenant's ID as part of the "Authorization" header in the following form:

	<<tenant ID>>/<<user name>>:<<password>>

Typically, the tenant ID corresponds to the first part of the URL that you are using to access Cumulocity. E.g., if you use "mytenant.cumulocity.com" as URL, the tenant ID will be "mytenant".

### Application management

Cumulocity uses a so-called "application key" to distinguish requests coming from devices and traffic from applications. If you write an application, pass the following header as part of all requests:

	X-Cumulocity-Application-Key: <<application key>>

For example, if you registered your application in the Cumulocity administration application with the key "myapp", pass 

	X-Cumulocity-Application-Key: myapp

This makes your application subscribable and billable. If you implement a device, do not pass the key.

> Make sure that you pass the key in **all** requests coming from an application. If you leave out the key, 
> the request will be considered a device request and the corresponding device will be marked as "available".

### Limited HTTP clients

If you use an HTTP client that can only perform GET and POST methods in HTTP, you can emulate the other methods through an additional "X-HTTP-METHOD" header. Simply issue a POST request and add the header, specifying the actual REST method to be executed. For example, to emulate the "PUT" (modify) method, you can use:

	POST ...
	X-HTTP-METHOD: PUT

### <a id="processingmode"></a> Processing mode

Every update request (PUT, POST, DELETE) executes with a so-called *processing mode*. The default processing mode is *PERSISTENT*, which means that all updates will be send both to the Cumulocity database and to real-time processing. The alternative processing mode *TRANSIENT* will only send updates to real-time processing. As part of real-time processing, the user can decide case by case through Cumulocity Event Language scripts whether updates should be stored to the database or not.

To explicitly control the processing mode of an update request, an "X-Cumulocity-Processing-Mode" header can be used with a value of either "PERSISTENT" or "TRANSIENT":

    X-Cumulocity-Processing-Mode: TRANSIENT

### Authorization

All requests issued to Cumulocity are subject to authorization. To determine the required permissions, see the
"Required role" entries in the reference documentation for the individual requests. To learn more about the different permissions and the concept of ownership in Cumulocity, see "Managing permissions and ownership" in the Section "[Security aspects](/guides/concepts/security)".

### Media types

Each type of data is associated with an own media type. The general format of media types is

    application/vnd.com.nsn.cumulocity.<<type>>+json;ver=<<version>>;charset=UTF-8

Each media type contains a parameter "ver" indicating the version of the type. At the time of writing, the latest version is "0.9". The complete media type names are given in the respective sections of the reference guide. As an example, the media type for an error message in the current version is

    application/vnd.com.nsn.cumulocity.error+json;ver=0.9;charset=UTF-8

Media types are used in HTTP "Content-Type" and "Accept" headers. If you specify an "Accept" header in a POST or PUT request, the response will contain the newly created or updated object. If you do not specify the header, the response body will be empty. 

If a media type without "ver" parameter is given, the oldest available version will be returned by the server. If the accept header contains the same media type in multiple versions the server will return a representation in the latest supported version.

### Date format

Data exchanged with Cumulocity in HTTP requests and responses is encoded in [JSON format](http://www.ietf.org/rfc/rfc4627.txt) and [UTF-8](http://en.wikipedia.org/wiki/UTF-8) character encoding. Timestamps and dates are accepted and emitted by Cumulocity in [ISO 8601](http://www.w3.org/TR/NOTE-datetime) format:

    Date: YYYY-MM-DD
    Time: hh:mm:ss±hh:mm
    Timestamp: YYYY-MM-DDThh:mm:ss±hh:mm

To avoid ambiguity, all times and timestamps must include timezone information. Please take into account that the plus character "+" must be encoded as "%2B".

### <a name="error_reporting"></a>Error reporting

In error cases, Cumulocity returns standard HTTP response codes as described in [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). A Client should not only be able to handle individual codes but classes of codes as well (e.g., 4xx). The response body can contain more information about the error, see the error media type definition below. General error interpretations are:

|Code|Name|Description|
|:---|:---|:----------|
|400|Bad Request|The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.|
|401|Unauthorized|Authentication has failed, or credentials were required but not provided.|
|403|Forbidden|You are not authorized to access the API.|
|404|Not Found|Resource not found at given location.|
|405|Method not allowed|The employed HTTP method cannot be used on this resource (e.g., using "POST" on a read-only resource).|
|409|Update Conflict|Conflict on resource update, entity was changed in the meantime.|
|409|Duplicate|The entity already exists in the data source.|
|422|Invalid Data|General error with entity data format.|
|422|Non Unique Result|Resource constraints error. Non-unique result from the query.|
|422|Unprocessable entity|Resource cannot be processed.|
|500|Internal Server Error|An internal error in the software system has occurred and the request could not be processed.|
|503|Service Unavailable|The service is currently not available. This may be caused by an overloaded instance or it is down for maintenance. Please try it again in a few minutes.|

## REST usage

### Interpretation of HTTP verbs

The semantics described in the [HTTP specification](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9) are used:

-   POST creates a new resource. In the response "Location" header, the URI of the newly created resource is returned.
-   GET retrieves a resource.
-   PUT updates an existing resource with the contents of the request. 
-   DELETE removes a resource. The response will be "204 No Content".

If a PUT request only contains parts of a resource, so called "fragments", only those parts are updated. To remove a fragment, use a PUT request with a null value for the fragment. PUT cannot update sub-resources that are identified by a separate URI.

### URI space and URI templates

Clients should not make assumptions on the layout of URIs used in requests, but construct URIs from previously returned URIs or URI templates. The root interface provides the entry point for clients, see below.

URI templates contain placeholders in curly braces, which need to be filled by the client to produce a URI. As an example, see the following excerpt from the event API response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.eventApi+json;...
    Content-Length: ...
     
    {
      ...
      "events" : { "self" : "http://..." },
      "eventsForSourceAndType" : "http://...?type={type}&source={source}"
      ...
    }

The client would need to fill the "type" and "source" placeholders with the desired type and source devices of the events to be returned. The meaning of these placeholders is documented in the respective interface descriptions in the reference guide.

### Interface structure

In general, Cumulocity REST resources are modelled according to the following pattern:

-   The starting point are API resources, which will provide access to the actual data through URIs and URI templates to collection resources. For example, the above event API resource provides the "events" URI and the "eventsForSourceAndType" URI to access collections of events.
-   Collection resources aggregate member resources and allow creating new member resources in the collection. For example, through the "events" collection resource, new events can be created.
-   Finally, individual resources can be edited.

### <a name="paging"></a>Query result paging

Collection resources support paging of data to avoid passing huge data volumes in one block from client to server. GET requests to collections accept two query parameters: "pageSize" indicates how many entries of the collection should be returned. By default, 5 entries are returned. The upper limit for one page is currently 2,000 documents, any larger requested page size is trimmed to the upper limit. "currentPage" defines the slice of data to be returned, starting with "1". By default, the first page is returned.

For convenience, collection resources provide a "next" and "prev" links to retrieve the next resp. the previous page of the results. This is an example response for managed object collections:

    {
      "self" : "...",
      "managedObjects" : [
        ...
      ],
      "statistics" : {
        "totalPages" : 7,
        "pageSize" : 5,
        "currentPage" : 2
      },
      "prev" : "http://...?pageSize=5&Page=1",
      "next" : "http://...?pageSize=5&Page=3"
    }

Please note that the totalPages property can be expensive to compute, hence it is not returned by default for range queries. To include totalPages in the result, add the query parameter "withTotalPages=true".

## Root interface

To discover the URIs to the various interfaces of Cumulocity, a "root" interface is provided. This root interface aggregates all the underlying API resources and is available through http://&lt;&lt;yourURL&gt;&gt;.cumulocity.com/platform/". For more information on the different API resources, please consult the respective API sections of this reference guide.

### Platform [application/vnd.com.nsn.cumulocity.platformApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|inventory|InventoryAPI|1|See [inventory](/guides/reference/inventory) interface.|
|identity|IdentityAPI|1|See [identity](/guides/reference/identity) interface.|
|event|EventAPI|1|See [event](/guides/reference/events) interface.|
|measurement|MeasurementAPI|1|See [measurement](/guides/reference/measurements) interface.|
|audit|AuditAPI|1|See [auditing](/guides/reference/auditing) interface.|
|alarm|AlarmAPI|1|See [alarm](/guides/reference/alarms) interface.|
|user|UserAPI|1|See [user](/guides/reference/users) interface.|
|deviceControl|DeviceControlAPI|1|See [device control](/guides/reference/device-control) interface.|

### GET the Platform resource

Response body: application/vnd.com.nsn.cumulocity.platformApi+json

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.platformApi+json;...
    Content-Length: ...
     
    {
      "self" : "<<URL to the platform API resource>>",
      "event" : {
        "self" : "<<URL to the event API resource>>",
        "events" : { "self" : "<<URL to event collection resource>>" },
        "eventsForSourceAndType" : "<<URL to event collection resource>>?type={type}&source={source}"
        ...
      },
      "inventory" : {
        ...
      },
      ...
    }

## Generic media types

### Error [application/vnd.com.nsn.cumulocity.error+json]

The error type provides further information on the reason of a failed request.

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|error|String|1|Error type formatted as "&lt;&lt;resource type&gt;&gt;/&lt;&lt;error name&gt;&gt;". For example, an object not found in the inventory is reported as "inventory/notFound".|
|message|String|1|Short text description of the error|
|info|URL|1|URL to an error description on the Internet.|
|details|Error details|1|Error details. Only available in DEBUG mode.|

Error details are provided in the following structure:

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|expectionClass|String|1|Class name of an exception that caused this error.|
|exceptionMessage|String|1|Exception message content.|
|expectionStackTrace|String|1|Strack trace of the exception.|
|-|-|-|Further diagnostic information depending on error type.|

### PagingStatistics [application/vnd.com.nsn.cumulocity.pagingStatistics+json]

Paging statistics for collection resources are provided in the following format:

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|totalRecords|Integer|1|The approximate total number of records.|
|pageSize|Integer|1|Maximum number of records contained in this query.|
|currentPage|Integer|1|The current returned page within the full result set, starting at "1".|



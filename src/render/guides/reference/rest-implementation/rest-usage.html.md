---
order: 30
title: REST usage
layout: redirect
---

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

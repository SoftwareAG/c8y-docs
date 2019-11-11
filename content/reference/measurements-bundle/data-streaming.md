---
weight: 50
title: Data streaming
layout: redirect
---

The measurement collection API allows to fetch data in form of a data stream. The response format stays the same but the data is transmitted by the server directly from the database element by element so it can be received in the same way.

Using stream JSON parsers like [java json](http://docs.oracle.com/javaee/7/api/javax/json/stream/JsonParser.html) or [javascript json](http://oboejs.com/) parsers we are able to transmit high data volumes in a single request. 
To activate streaming you need to send as Accept header `application/json-stream`.

#### Example 

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Accept|application/json-stream

```http
GET <<url>>/measurement/measurements
```
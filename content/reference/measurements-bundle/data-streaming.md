---
weight: 50
title: Data streaming
layout: redirect
---

Measurement collection API allows to fetch the data in form of data stream. The response format stays same but data is transmitted by server directly from database element by element so it can be received in same way.
Using stream json parses like [java json](http://docs.oracle.com/javaee/7/api/javax/json/stream/JsonParser.html) or [javascript json](http://oboejs.com/) parsers we are able to transmit high data volumes in single request. 
To activate streaming you need to send as Accept header `application/json-stream`

#### Example 

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Accept|application/json-stream

```http
GET <<url>>/measurement/measurements
```
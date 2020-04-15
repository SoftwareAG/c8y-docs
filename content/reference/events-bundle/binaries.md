---
weight: 50
title: Binaries
layout: redirect
---

The events Rest API has the possibility to store/retrieve and delete binaries for events.

Every event can have one binary attached.

### GET - Download a binary

Required role: ROLE\_EVENT\_READ

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}} 

```http
    GET <<url>>/event/events/<<eventId>>/binaries
``` 
#### Example response

Response when binary exists:

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.event+json;ver=...
|Content-Disposition|attachment; filename=”file.txt”|

```http
HTTP/1.1
200 OK

<<content-body>>
```

Response when binary doesn't exists or is only partially uploaded or when event doesn't exist:

```http
HTTP/1.1 
404 OK

<<error-message>>
```

### POST - Upload a binary

Using POST method it is possible to upload binary file as attachment to Event. Size of attachment cannot exceed 50MB.

Required role: ROLE\_EVENT\_ADMIN

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}} 

```http
POST <<url>>/event/events/<<eventId>>/binaries
```    
#### Example response

Successful response:

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.event+json;ver=...
  
```http
HTTP/1.1 
201 Created

{
  "self”: “<<url>>/event/events/<<eventId>>/binaries”,
  “type”: “<<content-type>>”,
  “source”: <<eventId>>,
  “length”: <<content-lenght>>
}
```

Response when event doesn't exist:

```http
HTTP/1.1 
404 NOT FOUND
    
<<error-message>>
```

Response when binary already exists:

```http
HTTP/1.1 
409 CONFLICT

<<error-message>>
```

Corresponding event will have fragment:

```http
{
  ...
  “c8y_IsBinary”:  {
    “type”: “<<content-type>>”
  }
  ...
}
```

### POST multipart/form-data - Upload a binary

Uploading functionality is also available using multipart request.

Required role: ROLE\_EVENT\_ADMIN

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}} 
|Content-Type|multipart/form-data; boundary=--myBoundary

```http
POST <<url>>/event/events/<<eventId>>/binaries
    
--myBoundary
Content-Type: application/octet-stream
Content-Disposition: form-data; name="file.txt"

<<content-body>>
--myBoundary--
```
    
Successful response:

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.event+json;ver=...

```http
HTTP/1.1 
201 Created

{
  "self”: “<<url>>/event/events/<<eventId>>/binaries”,
  “type”: “application/octet-stream”,
  “name”: “file.txt”,
  “source”: <<eventId>>,
  "length": <<lenght>>
}
```

### POST content-range - Upload a binary

Files can be uploaded in many chunks using “Content-Range” header.

“Content-Range” header is in format “start-stop/length” where:
* “start” represents beginning of uploaded file, starting from 0, 
* "stop” is end of file inclusive, 
* “length” is length of whole document, the property is mandatory only in last chunk of file, in other cases it can be replaced with ‘*’

Ie having document with size 10 we can create chunks: “0-3/\*”, “4-5/\*”, “6-9/10”.

Size of single chunk cannot exceed 5MB.

Required role: ROLE\_EVENT\_ADMIN
    
#### Example first chunk request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}} 
|Content-Length|100
|Content-Range|0-399/*

```http
POST <<url>>/event/events/<<eventId>>/binaries

<<content-body>>
```

#### Example response for first chunk

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.event+json;ver=...

```http
HTTP/1.1
200 OK

{
"self”: “<<url>>/event/events/<<eventId>>/binaries”,
“type”: “<<content-type>>”,
“range”: “0-399/*”,
“source”: <<eventId>>
}
```    
Corresponding event will have fragment:

```http
{
  ...
  “c8y_IsIncompleteBinary”: {
    “range”: “0-399/*”
  }
  ...
}
```
    
#### Example last request


|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}} 
|Content-Length|100
|Content-Range|400-499/500

```http
POST <<url>>/event/events/<<eventId>>/binaries
```
    
#### Example response for last chunk

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.event+json;ver=...

```http
HTTP/1.1 
201 Created

{
  "self”: “<<url>>/event/events/<<eventId>>/binaries”,
  “type”: “<<content-type>>”,
  “source”: <<eventId>>,
  “length”: <<content-lenght>>
}
```

### PUT - Replace existing binary

Required role: ROLE\_EVENT\_ADMIN  
    
#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}} 

```http
PUT <<url>>/event/events/<<eventId>>/binaries

<<content-body>>
```    
#### Successful response
    
|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.event+json;ver=...

```http
HTTP/1.1 
201 Created

{
  "self”: “<<url>>/event/events/<<eventId>>/binaries”,
  “type”: “<<content-type>>”,
  “source”: <<eventId>>,
  “length”: <<content-lenght>>
}
```

### DELETE - Delete a binary

Required role: ROLE\_EVENT\_ADMIN

#### Example request

    DELETE <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    
#### Example response

Request Body: N/A.

Response Message Body: N/A.

Example response when binary exists:

```http
HTTP/1.1 
204 NO CONTENT
``` 

Example response when binary or event doesn't exist:

```http
HTTP/1.1
404 NOT FOUND

<<error-message>>
```

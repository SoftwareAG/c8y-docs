---
order: 50
title: Binaries
layout: redirect
---

The events Rest API has the possibility to store/retrieve and delete binaries for events.

Every event can have one binary attached.

### GET - Download a binary

Required role: ROLE\_EVENT\_READ

Example request:

    GET <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    
Example response when binary exists:

    HTTP/1.1 200 OK
    Content-Type: <<content-type>>
    Content-Disposition: attachment; filename=”file.txt”
    <<content-body>>

Response when binary doesn't exists or is only partially uploaded or when event doesn't exist

    HTTP/1.1 404 OK
    <<error-message>>
    

### POST - Upload a binary

Using POST method it is possible to upload binary file as attachment to Event. Size of attachment cannot exceed 50MB.

Required role: ROLE\_EVENT\_ADMIN

Example request:

    POST <<url>>/event/events/<<eventId>>/binaries
    Content-Type: <<content-type>>
    Content-Length: <<content-lenght>>
    Authorization: Basic <<auth>>
    <<content-body>>
    
Successful response:
    
    HTTP/1.1 201 Created
    Location: <<url>>/event/events/<<eventId>>/binaries
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/binaries/<<eventId>>”,
      “type”: “<<content-type>>”,
      “source”: <<eventId>>,
      “length”: <<content-lenght>>
    }

Response when event doesn't exist:

    HTTP/1.1 404 NOT FOUND
    <<error-message>>
    
Response when binary already exists:
 
    HTTP/1.1 409 CONFLICT
    <<error-message>>

Corresponding event will have fragment:

    {
      ...
      “c8y_IsBinary”:  {
        “type”: “<<content-type>>”
      }
      ...
    }

### POST multipart/form-data - Upload a binary

Uploading functionality is also available using multipart request.

Required role: ROLE\_EVENT\_ADMIN

Example request:

    POST <<url>>/event/events/<<eventId>>/binaries
    Content-Type: multipart/form-data; boundary=--myBoundary
    Authorization: Basic <<auth>>
    
    --myBoundary
    Content-Type: application/octet-stream
    Content-Disposition: form-data; name="file.txt"
    
    <<content-body>>
    --myBoundary--
    
Successful response:

    HTTP/1.1 201 Created
    Location: <<url>>/event/events/<<eventId>>/binaries
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/events/<<eventId>>/binaries”,
      “type”: “application/octet-stream”,
      “name”: “file.txt”,
      “source”: <<eventId>>,
      "length": <<lenght>>
    }

### POST content-range - Upload a binary

Files can be uploaded in many chunks using “Content-Range” header.

“Content-Range” header is in format “start-stop/length” where:
* “start” represents beginning of uploaded file, starting from 0, 
* "stop” is end of file inclusive, 
* “length” is length of whole document, the property is mandatory only in last chunk of file, in other cases it can be replaced with ‘*’

Ie having document with size 10 we can create chunks: “0-3/\*”, “4-5/\*”, “6-9/10”.

Size of single chunk cannot exceed 5MB.

Required role: ROLE\_EVENT\_ADMIN
    
Example first chunk request:

    POST <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    Content-Type: <<content-type>>
    Content-Length: 100
    Content-Range: 0-399/*
    <<content-body>>

Example response for first chunk:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/events/<<eventId>>/binaries”,
      “type”: “<<content-type>>”,
      “range”: “0-399/*”,
      “source”: <<eventId>>
    }
    
Corresponding event will have fragment:

    {
      ...
      “c8y_IsIncompleteBinary”: {
        “range”: “0-399/*”
      }
      ...
    }
    
Example last request:

    POST <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    Content-Type: <<content-type>>
    Content-Length: 100
    Content-Range: 400-499/500
    <<content-body>>
    
Example response for last chunk:

    HTTP/1.1 201 Created
    Location: <<url>>/event/events/<<eventId>>/binaries
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/binaries/<<eventId>>”,
      “type”: “<<content-type>>”,
      “source”: <<eventId>>,
      “length”: <<content-lenght>>
    }

### PUT - Replace existing binary

Required role: ROLE\_EVENT\_ADMIN  
    
Example request:

    PUT <<url>>/event/events/<<eventId>>/binaries
    Content-Type: <<content-type>>
    Content-Length: <<content-lenght>>
    Authorization: Basic <<auth>>
    <<content-body>>
    
Successful response:
    
    HTTP/1.1 201 Created
    Location: <<url>>/event/events/<<eventId>>/binaries
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    {
      "self”: “<<url>>/event/binaries/<<eventId>>”,
      “type”: “<<content-type>>”,
      “source”: <<eventId>>,
      “length”: <<content-lenght>>
    }

### DELETE - Delete a binary

Required role: ROLE\_EVENT\_ADMIN

Example request:

    DELETE <<url>>/event/events/<<eventId>>/binaries
    Authorization: Basic <<auth>>
    
Example response:

    HTTP/1.1 204 NO CONTENT
    
Example response when binary or event doesn't exist

    HTTP/1.1 404 NOT FOUND
    <<error-message>>

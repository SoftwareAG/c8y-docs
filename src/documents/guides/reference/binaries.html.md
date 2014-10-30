---
order: 170
title: Binaries
layout: default
---

The inventory has the possibility to store binaries also the API below is not published in "/inventory".

The binaries interface consists of the following parts:

-   The *binaries collection* resource retrieves sets with information about uploaded binaries and enables uploading new binaries.
-   The *binaries* resource represents binaries that can be downloaded, updated or deleted.

## Binaries collection

### BinariesCollection [application/vnd.com.nsn.cumulocity.managedObjectCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|managedObjects|ManagedObject|0..n|List of binary objects, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of binary objects.|
|next|URI|0..1|Link to a potential next page of binary objects.|

### GET a binaries collection

Response body: ManagedObjectCollection

Required role: ROLE\_INVENTORY\_READ

Example request:

    POST /invenotry/binaries
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationCollection+json;ver=...
    Content-Length: ...
    {
        "self" : "...",
        "next" : "...",
        "prev" : "...",
        "managedObjects": [
            {
                "self": "<<Object 1 URL>>",
                "id": "1",
                "name": "my_picture.png",
                "type": "image/png",
                ...
                "_attachments": {
                  "my_picture.png": {
                    "stub": true,
                    "length": 211952,
                    "digest": "md5-xyz==",
                    "revpos": 2,
                    "content_type": "image/png"
                  }
                }
            },
            {
                "self": "<<Object 2 URL>>",
                "id": "2",
                "name": "my_compressed_file.zip",
                "type": "application/zip",
                ...
                "_attachments": {
                  "my_compressed_file.zip": {
                    "stub": true,
                    "length": 21152,
                    "digest": "md5-xyz==",
                    "revpos": 2,
                    "content_type": "application/zip"
                  }
                }
            }
        ],
        "statistics": {
            "currentPage": 1,
            "pageSize": 5,
            "totalPages": 1
        }
    }

### POST - Upload a new binary

Request body: Multipart

Response body: Managed Object (when Accept header is not provided, empty response body is returned)

Required role: ROLE\_INVENTORY\_ADMIN

Uploading a binary requires to have a multipart with the following three form values:

-   The *object* value contains a managed object containing information about the file.
-   The *filesize* value contains the size of the binary in bytes.
-   The *file* value contains the binary which will be uploaded (to store the file correctly the mime type of this part should match the type of the file).

Example request:

    POST /invenotry/binaries
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: multipart/form-data; boundary=--myBoundary

    --myBoundary
    Content-Disposition: form-data; name="object"

    {
      "name":"my-file.pdf",
      "type":"application/pdf",
      ...
    }
    --myBoundary
    Content-Disposition: form-data; name="filesize"

    217152
    --myBoundary
    Content-Disposition: form-data; name="file"; filename="my-file.pdf"
    Content-Type: application/pdf

    <<file content>>
    --myBoundary

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    Content-Length: ...
    Location: <<URL of new managed object>>

    {
      "self": "<<Object 3 URL>>",
      "id": "3",
      "name":"my-file.pdf",
      "type":"application/pdf",
      ...
    }

## Binaries

### GET - Download a binary

Response body: Binary

Required role: ROLE\_INVENTORY\_READ

Example request:

  	GET /inventory/binaries/1
  	...

Example response:

    HTTP/1.1 200 OK
    Content-Type: <<depending on binary mime type>>
    Content-Length: ...
    Content-Disposition: attachment; filename="myfile.ext"

    ...

### PUT - Replace a binary

Request body: Binary

Response body: Managed Object (when Accept header is not provided, empty response body is returned)

Required role: ROLE\_INVENTORY\_ADMIN

The PUT request will replace the binary attached to the managed object only.
For changing the managed object storing information about the binary it is possible.
To update the managed object directly described at this section [Update Managed Object](/guides/reference/inventory#managed-object)

Example request:

    PUT /inventory/binaries/1
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: <<depending on binary mime type>>

    ...

### DELETE an binary

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_INVENTORY\_ADMIN

Note: The request will delete the binary and the associated managed object containing information

Example Request:

    DELETE /inventory/binaries/1
    Host: ...
    Authorization: Basic ...

Example Response:

    HTTP/1.1  204 NO CONTENT

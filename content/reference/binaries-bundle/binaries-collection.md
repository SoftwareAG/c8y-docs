---
weight: 10
title: Binaries collection
layout: redirect
---

### BinariesCollection [application/vnd.com.nsn.cumulocity.managedObjectCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|managedObjects|array|0..n|List of binary objects, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of binary objects.|
|next|string|0..1|A URI linking to a potential next page of binary objects.|

### GET a binaries collection

Response body: ManagedObjectCollection

Required role: ROLE\_INVENTORY\_READ

Example request:

    GET /inventory/binaries
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.applicationcollection+json;ver=...
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

Response body: Managed Object

Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

Uploading a binary requires to have a multipart with the following three form values:

-   The *object* value contains a managed object containing information about the file.
-   The *filesize* value contains the size of the binary in bytes.
-   The *file* value contains the binary which will be uploaded (to store the file correctly the mime type of this part should match the type of the file).

Example request:

    POST /inventory/binaries
    Host: ...
    Authorization: Basic ...
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
    Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json;ver=...
    Location: <<URL of new managed object>>

    {
      "self": "<<Object 3 URL>>",
      "id": "3",
      "name":"my-file.pdf",
      "type":"application/pdf",
      ...
    }

---
order: 170
title: Binaries
layout: default
---

The inventory has the possibility to store binaries also the API below is not published in "/inventory".

The binaries interface consists of the following parts:

-   The *binaries collection* resource retrieves sets with information about uploaded binaries and enables uploading new binaries.
-   The *binaries* resource represents binaries that can be downloaded, updated or deleted.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

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

    GET /inventory/binaries
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

Response body: Managed Object

Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

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

	GET /inventory/binaries/<<binaryId>>
 	...

Example response:

    HTTP/1.1 200 OK
    Content-Type: <<depending on binary mime type>>
    Content-Length: ...
    Content-Disposition: attachment; filename="myfile.ext"

    ...

### PUT - Replace a binary

Request body: Binary

Response body: Managed Object 

Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

The PUT request will replace the binary attached to the managed object only.
For changing the managed object storing information about the binary it is possible
to update the managed object directly as described at this section [Update Managed Object](/guides/reference/inventory#managed-object).

Example request:

    PUT /inventory/binaries/<<binaryId>>
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: <<depending on binary mime type>>

    ...

### DELETE a binary

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

Note: The request will delete the binary and the associated managed object containing information

Example Request:

    DELETE /inventory/binaries/<<binaryId>>
    Host: ...
    Authorization: Basic ...

Example Response:

    HTTP/1.1  204 NO CONTENT


## Application Plugin Binaries    

### Binaries [multipart/form-data]

### POST - Adding a plugin

Posting a plugin adds new plugin to existing active application, merges content to specified directory and updates application with new active version. 
Uploaded plugin binary is required to have content. 
Plugin directory name is the same as "plugin_name" used in the url.
Response contains representation of managed object which contains new application content.

Request body: Multipart

Response body: ManagedObject

Required role: ROLE\_APPLICATION\_MANAGEMENT\_ADMIN

Example request:

    POST /application/applications/<<application_id>>/binaries/plugins/<<plugin_name>> HTTP/1.1
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json
    Content-Type: multipart/form-data; boundary=myBoundary
    Content-Disposition: form-data; name="file"
    Content-Length: 742
    Authorization: Basic ...
    
    --myBoundary
    Content-Disposition: form-data; name="file"; filename="hello-world-application.zip"
    Content-Type: application/zip
    
    ... zip content ...
    --myBoundary--
    
Example response:
    
    HTTP/1.1 201 Created
    Location: .../application/applications/{{application_id}}/binaries/{{id}}
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9
    
    {... managed object content ...}


### DELETE - Deleting plugin

Deleting a plugin removes existing plugin directory from existing application and updates application with new active version. 
Plugin directory name is the same as "plugin_name" used in the url. 
Response contains representation of managed object which contains new application content.

Response body: ManagedObject

Required role: ROLE\_APPLICATION\_MANAGEMENT\_ADMIN

Example request:

    DELETE /application/applications/<<application_id>>/binaries/plugins/<<plugin_name>> HTTP/1.1
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9

    {... managed object content ...}

### GET - Get all plugins

Getting a list of plugins from active application returns all directory names (ie. plugin names) in the root folder of the application.
In addition, if directory contains a file cumulocity.json, then the content of this file is included in the response.

Response body: List of plugins

Required role: ROLE\_APPLICATION\_MANAGEMENT\_READ

Example request:

    GET /application/applications/<<application_id>>/binaries/plugins HTTP/1.1
    Authorization: Basic ...
    
Example response:
    
    HTTP/1.1 200 OK
    Content-Type: application/json
    
    [
  	{
    	    pluginName: 'myfolder'
  	},
  	{
    	    pluginName: 'plugin',
    	    pluginPackage: {'this is the content of cumulocity.json inside plugin folder'}
  	}
    ]

### POST - Updating application file

Posting a file adds or updates the file located under the file path in existing active application.
Response contains representation of managed object which contains new application content.

Request body: Multipart

Response body: ManagedObject

Required role: ROLE\_APPLICATION\_MANAGEMENT\_ADMIN

Example request:

    POST /application/applications/<<application_id>>/binaries/files HTTP/1.1
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json
    Content-Type: multipart/form-data; boundary=myBoundary
    Content-Disposition: form-data; name="filepath"
    Content-Length: 742
    Authorization: Basic ...
    
    --myBoundary
    Content-Disposition: form-data; name="filepath"; filename="index.html"
    
    ... zip content ...
    --myBoundary--
    
Example response:
    
    HTTP/1.1 201 Created
    Location: .../application/applications/{{application_id}}/binaries/{{id}}
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9
    
    {... managed object content ...}

---
order: 30
title: Application plugin binaries
layout: redirect
---


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

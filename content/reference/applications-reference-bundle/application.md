---
weight: 30
title: Application
layout: redirect
---

### Application [application/vnd.com.nsn.cumulocity.application+json;ver=0.9]

<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 30%;">
<col style="width: 20%;">
</colgroup>
<thead>
<tr>
<th align="left">Field Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
<th align="left">PUT/POST</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URL linking to this resource.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">id</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Unique identifier for the application.</td>
<td align="left">No</td>
</tr>
<tr>
<td align="left">name</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Name of application.</td>
<td align="left">POST: Mandatory, PUT: Optional</td>
</tr>
<tr>
<td align="left">key</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Applications regardless of their form are identified by a so-called application key. The application key enables Cumulocity to associate a REST request from an application with the particular application.</td>
<td align="left">POST: Mandatory, PUT: Optional</td>
</tr>
<tr>
<td align="left">type</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Type of application. Possible values are: EXTERNAL, HOSTED, MICROSERVICE</td>
<td align="left">POST: Mandatory PUT: No</td>
</tr>
<tr>
<td align="left">availability</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">Access level for other tenants. Possible values are: MARKET, PRIVATE (default)</td>
<td align="left">Optional</td>
</tr>
<tr>
<td align="left">owner</td>
<td align="left">TenantReference</td>
<td align="left">&nbsp;1</td>
<td align="left">Reference to the tenant owning this application.</td>
<td align="left">No&nbsp;</td>
</tr>
<tr>
<td align="left">contextPath</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">contextPath of the hosted application.</td>
<td align="left">POST: Mandatory (when application type is HOSTED), PUT: Optional</td>
</tr>
<tr>
<td align="left">resourcesUrl</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">URL to application base directory hosted on an external server.</td>
<td align="left">POST: Mandatory (when application type is HOSTED) PUT: Optional</td>
</tr>
<tr>
<td align="left">resourcesUsername</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">Authorization username to access resourcesUrl.</td>
<td align="left">Optional</td>
</tr>
<tr>
<td align="left">resourcesPassword</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">Authorization password to access resourcesUrl.</td>
<td align="left">Optional</td>
</tr>
<tr>
<td align="left">externalUrl</td>
<td align="left">string</td>
<td align="left">0..1</td>
<td align="left">URL to the external application.</td>
<td align="left">POST: Mandatory (when application type is EXTERNAL) PUT: Optional</td>
</tr>
</tbody>
</table>

### POST - copy an application

A POST request to the "clone" resource creates a new application based on an already existing one.

The properties are copied to the newly created application. For name, key and context path a "clone" prefix is added in order to be unique.

If the target application is hosted and has an active version, the new application will have the active version with the same content.

The response contains a representation of the newly created application.

Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN

Example request:

    POST /application/applications/<<application_id>>/clone HTTP/1.1
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.application+json

Example response:

    HTTP/1.1 201 Created
    Location: .../application/applications/{{application_id}}
    Content-Type: application/vnd.com.nsn.cumulocity.application+json; charset=UTF-8; ver=0.9

    {
        "activeVersionId": "10414",
        "availability": "MARKET",
        "contextPath": "clonetest",
        "id": "1115",
        "key": "clonesecretKeyForTheApplication",
        "manifest": {},
        "name": "clonetestApplicationName",
        "owner": {
            "self": ".../tenant/tenants/management",
            "tenant": {
                "id": "management"
            }
        },
        "resourcesUrl": "/test",
        "self": ".../application/applications/1115",
        "type": "HOSTED"
    }

### PUT - update an application

Request body: Application

Response body: Application (if "ACCEPT" header is specified).

Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN

Example request:

    PUT /application/applications/<<applicationId>>
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
    {
      "availability" : "MARKET"
    }

### GET an application

Response body: Application

Required role: ROLE\_APPLICATION\_MANAGEMENT\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.application+json;ver=...
    Content-Length: ...
    {
      "availability": "PRIVATE",
      "id": "105",
      "key": "...",
      "name": "vehicleControlApplication",
      "owner": {
          "self": "...",
          "tenant": {
              "id": "taxiDrive"
          }
      },
      "self": "...",
      "type": "EXTERNAL",
      "externalUrl":"http://external.host.com/application"
    }

### DELETE an application

Request Body: n/a

Response Body: n/a

Required role: ROLE\_APPLICATION\_MANAGMENT\_ADMIN and owner

>Info: The application can only be removed when its availability is PRIVATE or in other case when it has no subscriptions.

Example Request: Delete an application

    DELETE /application/applications/<<applicationId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

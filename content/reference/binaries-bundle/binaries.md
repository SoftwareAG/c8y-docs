---
weight: 20
title: Binaries
layout: redirect
---

### GET - Download a binary

Response body: Binary

Required role: ROLE\_INVENTORY\_READ

Example request:
```http
	GET /inventory/binaries/<<binaryId>>
 	...
```
Example response:

    HTTP/1.1 200 OK
    Content-Type: <<depending on binary mime type>>
    Content-Disposition: attachment; filename="myfile.ext"

    ...

### PUT - Replace a binary

Request body: Binary

Response body: Managed Object

Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

The PUT request will replace the binary attached to the managed object only.
For changing the managed object storing information about the binary it is possible
to update the managed object directly as described at this section [Update Managed Object](/reference/inventory#managed-object).

Example request:
```http
    PUT /inventory/binaries/<<binaryId>>
    Host: ...
    Authorization: Basic ...
    Content-Type: <<depending on binary mime type>>

    ...
```
### DELETE a binary

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

Note: The request will delete the binary and the associated managed object containing information

Example Request:
```http
DELETE /inventory/binaries/<<binaryId>>
Host: ...
Authorization: Basic ...
```
Example Response:

    HTTP/1.1  204 NO CONTENT

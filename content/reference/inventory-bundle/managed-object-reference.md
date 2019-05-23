---
weight: 50
title: Managed object reference
layout: redirect
---

### ManagedObjectReference [application/vnd.com.nsn.cumulocity.managedObjectReference+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|managedObject|ManagedObject|1|The ManagedObject being referenced.|

### GET a managed object reference

Response body: ManagedObjectReference

Required role: ROLE\_INVENTORY\_READ

Example request:

    GET /inventory/managedObjects/<<deviceId>>/<<references>>/<<referenceId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.managedObjectReference+json;ver=...

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json;ver=...
    Content-Length: ...
    {
      "self" : "<<This ManagedObjectReference URL>>",
      "managedObject" : {
        "self" : "<<ManagedObject 4 URL>>",
        "name" : "Foo",
        "id" : "4",
        ...
      }
    }

### DELETE a managed object reference

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_INVENTORY\_ADMIN or parent owner or child owner

Note: This operations just removes the reference, it does not delete the object itself.

Example Request: Delete a managed object reference

    DELETE /inventory/managedObjects/<<deviceId>>/<<references>>/<<referenceId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

> **Info:** Inventory DELETE requests are not synchronous. The response could be returned before the delete request has been completed.

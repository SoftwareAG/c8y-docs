---
weight: 50
title: Managed object reference
layout: redirect
---

### ManagedObjectReference [application/vnd.com.nsn.cumulocity.managedObjectReference+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|managedObject|ManagedObject|1|The ManagedObject being referenced.|

### GET - Managed object reference

**Response body:** ManagedObjectReference

**Required role:** ROLE\_INVENTORY\_READ

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http    
200 - OK

GET <<url>>/inventory/managedObjects/<<deviceId>>/<<references>>/<<referenceId>>
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectreference+json;ver=...

```http
HTTP/1.1
200 - OK

{
  "self" : "<<This ManagedObjectReference URL>>",
  "managedObject" : {
    "self" : "<<ManagedObject 4 URL>>",
    "name" : "Foo",
    "id" : "4",
    ...
  }
}
```

### DELETE - Managed object reference

**Request body:** N/A

**Response message body:** N/A

**Required role:** ROLE\_INVENTORY\_ADMIN or parent owner or child owner

> **Info:** This operation just removes the reference, it does not delete the object itself.

#### Example request - Delete a managed object reference

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
DELETE /inventory/managedObjects/<<deviceId>>/<<references>>/<<referenceId>>
```

#### Example response

```http
HTTP/1.1
204 - NO CONTENT
```

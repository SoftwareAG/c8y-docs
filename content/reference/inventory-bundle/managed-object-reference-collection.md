---
weight: 40
title: Managed object reference collection
layout: redirect
---

### ManagedObjectReferenceCollection [application/vnd.com.nsn.cumulocity.managedObjectReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|references|ManagedObjectReference|0..n|List of managed object references, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of managed objects.|
|next|string|0..1|A URI linking to a potential next page of managed objects.|

### GET - Managed object reference collection

**Response body:** ManagedObjectReferenceCollection

#### Example request - Get reference collection of a certain managed object

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

> **Info:** "404 Not Found" error will appear if the object has no references.

```http
GET <<url>>/inventory/managedObjects/<<deviceId>>/<<references>>
```

> **Info:** References can be either `childDevices` or `childAssets`.

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json;ver=...

```http
HTTP/1.1
200 - OK

{
  "self" : "<<This ManagedObjectReferenceCollection URL>>",
  "references" : [
    {
      "self" : "<<ManagedObjectReference URL>>",
      "managedObject" : {
        "self" : "<<ManagedObject 1 URL>>",
        "name" : "Meter1",
        "id" : "1",
        ...
      }
    },
    {
      "self" : "<<ManagedObjectReference URL>>",
      "managedObject" : {
        "self" : "<<ManagedObject 2 URL>>",
        "name" : "Meter2",
        "id" : "2",
        ...
      }
    }
  ],
  "statistics" : {
    "pageSize" : 5,
    "currentPage : 1
  },
  "next": "...",
  "prev": "..."
}
```

### POST - Add a managed object reference to the collection

**Request body:** ManagedObjectReference

**Response body:** ManagedObjectReference

**Required role:** ROLE\_INVENTORY\_ADMIN or parent and child owner

> **Info:** Use header `X-Cumulocity-Processing-Mode` set to `QUIESCENT` to disable real-time notifications. 
This is required when performance is important or dealing with the large group of objects.


#### Example request - Add a ManagedObjectReference

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=... 

```http

POST <<url>>/inventory/managedObjects/<<deviceId>>/<<references>>

{
  "managedObject" : { "self" :"<<ManagedObject URL>>" }
}

```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectreference+json;ver=...

```http
HTTP/1.1
201 - Created

{
  "self" : "<<This ManagedObjectReference URL>>,
  "managedObject" : {
    "id" : "2",
    "self" : <<ManagedObject 2 URL>>,
    "name" : "Meter2",
    ...
  }
}
```

As an alternative, it is also allowed to pass the following reference object in the request body when adding to the collection:

```http
    {
      "managedObject" : { "id" :"<<ManagedObject id>>" }
    }
```

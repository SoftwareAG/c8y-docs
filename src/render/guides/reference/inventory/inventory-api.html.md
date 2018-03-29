---
order: 10
title: Inventory API
layout: redirect
---

### InventoryAPI [application/vnd.com.nsn.cumulocity.inventoryApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|managedObjects|ManagedObjectCollection|1|Collection of all managed objects.|
|managedObjectsForType|ManagedObjectCollection URI-Template|1|Read-only collection of all managed objects of a particular type (placeholder {type}).|
|managedObjectsForFragmentType|ManagedObjectCollection URI-Template|1|Read-only collection of all managed objects with a particular fragment type or capability (placeholder {fragmentType}).|
|managedObjectsForListOfIds|ManagedObjectCollection URI-Template|1|Read-only collection of managed objects fetched for a given list of ids (placeholder {ids}),for example "?ids=41,43,68".|
|managedObjectsForText|ManagedObjectCollection URI-Template|1|Read-only collection of managed objects containing a text value starting with the given text (placeholder {text}). Text value is any alphanumeric string starting with a latin letter (A-Z or a-z).|

### GET a representation of the Inventory API resource

Response body: application/vnd.com.nsn.cumulocity.inventoryApi+json  
Required role: ROLE\_INVENTORY\_READ

Example request: Get the Inventory API resource

    GET /inventory
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.inventoryApi+json;ver=...
    Content-Length: ...
    {
        "self" : "<<InventoryAPI URL>>",
        "managedObjects" : {
            "self" : "<<ManagedObjectCollection URL>>"
        },
        "managedObjectsForType" : "<<ManagedObjectCollection URL>>?type={type}",
        "managedObjectsForFragmentType" : "<<ManagedObjectCollection URL>>?fragmentType={fragmentType}",
        "managedObjectsForListOfIds" : "<<ManagedObjectCollection URL>>?ids={ids}",
        "managedObjectsForText" : "<<ManagedObjectCollection URL>>?text={text}"
    }

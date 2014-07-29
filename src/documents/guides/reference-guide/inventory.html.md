---
order: 20
title: Inventory
layout: default
---

The inventory interface consists of the following parts:

-   The *inventory API* resource returns URIs and URI templates to collections of managed objects, so that all objects, all objects of a particular type and all objects with particular capabilities can be queried.
-   The *managed object collection* resource retrieves sets of managed objects and enables creating new managed objects.
-   The *managed object* resource represents individual managed objects that can be queried and deleted.
-   The *managed object reference collection* resource retrieves sets of references to managed objects. These could be, for example, child devices of a particular managed object. It also enables adding new references to a collection (e.g., adding a new child device).
-   The *managed object reference* resource represents one individual reference to a managed object, which can be retrieved or deleted.

## Inventory API

### InventoryAPI [application/vnd.com.nsn.cumulocity.inventoryApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|managedObjects|ManagedObjectCollection|1|Collection of all managed objects.|
|managedObjectsForType|ManagedObjectCollection URI-Template|1|Read-only collection of all managed objects of a particular type (placeholder {type}).|
|managedObjectsForFragmentType|ManagedObjectCollection URI-Template|1|Read-only collection of all managed objects with a particular fragment type or capability (placeholder {fragmentType}).|
|managedObjectsForListOfIds|ManagedObjectCollection URI-Template|1|Read-only collection of managed objects fetched for a given list of ids (placeholder {ids}),for example "?ids=41,43,68".|
|managedObjectsForText|ManagedObjectCollection URI-Template|1|Read-only collection of managed objects containing a text value starting with the given text (placeholder {text}). Text value is any alphanumeric string starting with a latin letter (A-Z or a-z).|

### GET the Inventory API resource

Response body: application/vnd.com.nsn.cumulocity.inventoryApi+json  
Required role: ROLE\_INVENTORY\_READ

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

## Managed object collection

### ManagedObjectCollection [application/vnd.com.nsn.cumulocity.managedObjectCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|managedObjects|ManagedObject|0..n|List of managed objects, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of managed objects.|
|next|URI|0..1|Link to a potential next page of managed objects.|

### GET a representation of a ManagedObjectCollection

Response body: ManagedObjectCollection  
Required role: ROLE\_INVENTORY\_READ

Example Request: Get managed objects of a particular type.

    GET ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.managedObjectCollection+json;ver=...

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectCollection+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Collection URL>>",
      "managedObjects" : [
        {
          "self" : "<<Object 42 URL>>",
          "id" : "42",
          "type" :"bg_mps_D413",
          "name" : "Meter1",
          ...
        },
        {
          "self" : "<<Object 43 URL>>",
          "id": "43",
          "type" :"bg_mps_D413",
          "name": "Meter2",
          ...
        }
      ],
      "statistics" : {
        "totalPages" : 42,
        "pageSize" : 5,
        "currentPage : 1
      },  "next" : "...",  "prev" : "..."}

### POST - Create a new ManagedObject

Request body: ManagedObject

Response body: ManagedObject (when accept header is not provided, empty response body is returned)
  
Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

Example request :

    POST ...
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    {
      "name" : "A brand new switch",
      "com_cumulocity_model_BinarySwitch" : { "state": "OFF" }
    }

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    Content-Length: ...
    Location: <<URL of new object>>
    {
      "self" : "<<URL of new object>>",
      "id"   : "111",
      "lastUpdated": "2012-04-21T18:03:19.932+02:00",
      "name" : "A brand new switch",
      "com_cumulocity_model_BinarySwitch" : { "state": "OFF" }
    }

The "id" and "lastUpdated" of the new managed object are generated by the server and returned in the response to the POST operation.

## Managed object

### Managed Object [application/vnd.com.nsn.cumulocity.managedObject+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|id|String|1|Unique identifier of the object, automatically allocated when the object is created (see above).|No|
|self|URL|1|Link to this resource.|No|
|type|String|0..1|The most specific type of the managed object as fully qualified Java-style type name, dots replaced by underscores.|Optional|
|name|String|0..1|Human-readable name that is used for representing the object in user interfaces.|Optional|
|\*|Object|0..n|Additional properties associated with the specific ManagedObject.|Optional|
|lastUpdated|TimeStamp|1|The time when the object was last updated.|No|
|childDevices|ManagedObject ReferenceCollection|0..1|A collection of references to child devices.|No|
|childAssets|ManagedObject ReferenceCollection|0..1|A collection of references to child assets.|No|
|deviceParents|ManagedObject ReferenceCollection|0..1|A collection of references to device parent objects.|No|
|assetParents|ManagedObject ReferenceCollection|0..1|A collection of references to asset parent objects.|No|

A managed object reference in the "child" and "parents" collections contains only "id", "name" and "self" properties.

Not every GET response contains "parents" collections. It is required to pass "withParents=true" query param to have "parents" included.

### GET a representation of a managed object

Response body: ManagedObject

Required role: ROLE\_INVENTORY\_READ

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    Content-Length: ...
    {
      "id" : "42",
      "name" : "SomeName",
      "self" : "<<This ManagedObject URL>>",
      "type" :"com_nsn_cumulocity_example_Clazz",
      "lastUpdated": "2012-05-02T19:48:40.006+02:00",
      "com_othercompany_StrongTypedClass" : { ... },
      "childDevices": {
        "self" : "<<ManagedObjectReferenceCollection URL>>",
        "references" : [
          {
            "self" : "<<ManagedObjectReference URL>>",
            "managedObject": {
              "id": "1",
              "self" : "<<ManagedObject URL>>"
              "name": "Some Child"
            }
          },
          ...
        ]    
      },
      ...
    }

### GET supported measurements of a managed object

Example request: Get the supported measurements of a management object

	GET <<ManagedObject URL>>/supportedMeasurements
	Host: ...
	Authorization: Basic ...

Example response:

	HTTP/1.1 200 OK
	{
		"c8y_SupportedMeasurements": ["c8y_AnalogMeasurement", "c8y_MotionMeasurement", "c8y_SignalStrength", "c8y_TemperatureMeasurement"]
	}

### PUT - Update a managed object

Request body: ManagedObject

Response body: ManagedObject (when accept header is not provided, empty response body is returned)
  
Required role: ROLE\_INVENTORY\_ADMIN or owner

Example Request: Change the name of a managed object

    PUT ...
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    Content-Length: ...
    { "name" : "Life, the Universe and the REST" }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    {
      "id" : "42",
      "name" : "Life, the Universe and the REST",
      "self" : "<<This ManagedObject URL>>",
      "type" :"com_nsn_cumulocity_example_Clazz",
      "lastUpdated": "2012-05-02T19:58:40.006+02:00",
      "com_othercompany_StrongTypedClass" : { ... },
      "childDevices": {
        ...
      },
      ...
    }

### DELETE a managed object

Request Body: N/A.

Response Message Body: N/A.
  
Required role: ROLE\_INVENTORY\_ADMIN or owner

Example Request: Delete a managed object

    DELETE [URL to the resource]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

## Managed object reference collection

### ManagedObjectReferenceCollection [application/vnd.com.nsn.cumulocity.managedObjectReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|references|ManagedObjectReference|0..n|List of managed object references, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of managed objects.|
|next|URI|0..1|Link to a potential next page of managed objects.|

### GET a managed object reference collection

Response body: ManagedObjectReferenceCollection

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReferenceCollection+json;ver=...
    Content-Length: ...
     
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

### POST - add a managed object reference to the collection

Request body: ManagedObjectReference

Response body: ManagedObjectReference
  
Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

Example Request: Add a ManagedObjectReference

    POST ...
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json;ver=...
     
    {
      "managedObject" : { "self" :"<<ManagedObject URL>>" }
    }

Example Response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json;ver=...
    Content-Length: ...
    Location: <<This ManagedObjectReference URL>>
    {
      "self" : "<<This ManagedObjectReference URL>>,
      "managedObject" : {
        "id" : "2",
        "self" : <<ManagedObject 2 URL>>,
        "name" : "Meter2",
        ...
      }
    }

## Managed object reference

### ManagedObjectReference [application/vnd.com.nsn.cumulocity.managedObjectReference+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this resource.|
|managedObject|ManagedObject|1|The ManagedObject being referenced.|

### GET a managed object reference

Response body: ManagedObjectReference
  
Required role: ROLE\_INVENTORY\_READ

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
  
Required role: ROLE\_INVENTORY\_ADMIN or owner

Note: This operations just removes the reference, it does not delete the object itself.

Example Request: Delete a managed object reference

    DELETE [URL to the reference]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

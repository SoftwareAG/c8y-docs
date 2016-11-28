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

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

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

    GET /inventory/managedObjects
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

### GET a representation of a ManagedObjectCollection by query

Response body: ManagedObjectCollection  
Required role: ROLE\_INVENTORY\_READ

Example Request: Get managed objects finded by query.

    GET /inventory/managedObjects?q=<<query language statement>>
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

### Query Language

Query language is applied only on devices, i.e. managed objects with property c8y_IsDevice.

##### User can put query via 'q' parameter. Parameter can be:
* only query to database: ...?q=name eq 'M01'
* keyword $filter=: ...?q=$filter=name eq  'M01'
* keyword $orderby=: ...?q=$orderby=id asc
* keywords $filter= and $orderby=: ...?q=$filter=name eq 'M01' $orderby=id,

This part explain, how application will be handle query in parameter 'q'.

##### Supported query operations:
* eq(Equal): City eq 'Redmond'
* gt(Greater than): Price gt 20
* ge(Greater than or equal): Price ge 10
* lt(Less than): Price lt 20
* le(Less than or equal): Price le 100
* and(Logical and): Price le 200 and Price gt 3.5
* or(Logical or): Price le 3.5 or Price gt 200

##### Supported query functions:
* has: has(name) - match objects with property name
* bygroupid(12) - match objects from group with id equals 12

##### Supported query values:
* string
    * examples: name eq 'Dev_002', name eq 'Dev*', name eq '*_001', name eq '*'
    * string must be surround single quote
    * string can contains wildcard '*' and this wildcard match form 0 to N characters
    * matching is insensitive in case
* number
* date
    * examples: creationTime gt '2015-10-24T09:00:53.351+01:00'

##### Supported query properties:
* simple: name
* nested: c8y_Availability.status
* array: c8y_Availability.statuses = [1, 2, 3]

##### Grouping query operators:
* ( ) Precedence grouping: (p1 eq 1) and (p2 eq 5 or p2 eq 6)

##### Supported sort operations:
* desc
    * example: $orderby=name desc
* asc
    * example: $orderby=name, $orderby=name asc

##### Examples:
Example data:

    {
        "_id": 1,
        "name": "Dev_001",
        "num": 1,
        "c8y_Availability": {
            "statusId": 1
        }
    },
    {
        "_id": 2,
        "name": "Dev_002",
        "num": 2,
        "c8y_Availability": {
            "statusId": 1
        }
    },
    {
        "_id": 3,
        "name": "Mo_003",
        "num": 3,
        "c8y_Availability": {
            "statusId": 2
        }
    },
    {
        "_id": 4,
        "name": "Mo_004",
        "num": 4,
        "c8y_Availability": {
            "statusId": 2
        }
    }

and query will return:

    ...q=num eq 1 - {"_id": 1, ...}
    ...q=name eq 'Dev_002' - {"_id": 2, ...}
    ...q=name eq '*00*' - return all 4 rows
    ...q=name eq '*dev_001*' - {"_id": 1, ...}
    ...q=c8y_Availability.statusId eq 2 - {"_id": 3, ...}, {"_id": 4, ...}
    ...q=num gt 2 - {"_id": 3, ...}, {"_id": 4, ...}
    ...q=num le 2 - {"_id": 1, ...}, {"_id": 2, ...}
    ...q=num eq 1 or num eq 2 - {"_id": 1, ...}, {"_id": 2, ...}
    ...q=has(name) - return all 4 rows

### POST - Create a new ManagedObject

Request body: ManagedObject

Response body: ManagedObject (when accept header is not provided, empty response body is returned)
  
Required role: ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

Example request : Add a new ManagedObject

    POST /inventory/managedObjects
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

Example request: Get a representation of a specific manage object

    GET /inventory/managedObjects/<<deviceId>>
    Host: ... 
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json;=ver...

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

Example request: Retrieve supported measurements of a managed object

	GET /inventory/managedObjects/<<deviceId>>/supportedMeasurements
	Host: ...
	Authorization: Basic ...

Example response:

	HTTP/1.1 200 OK
	{
		"c8y_SupportedMeasurements": ["c8y_AnalogMeasurement", "c8y_MotionMeasurement", "c8y_SignalStrength", "c8y_TemperatureMeasurement"]
	}

Important: In order to have fragment names included in supported measurements list, fragment has to have specific structure:

"fragment_name" : {
	"serie_name" : {
		"value" : ...
		"unit" : ...
	}
}

Real example: 

"c8y_SpeedMeasurement": {
      "Speed": { "value": 1234, "unit": "km/h" }
}

Fragment_name and serie_name can be replaced by different valid json property name, but that name cannot contain whitespaces and special characters like [],*. The structure has to be exactly as above, two-level deep json object.

### PUT - Update a managed object

Request body: ManagedObject

Response body: ManagedObject (when accept header is not provided, empty response body is returned)

Required role: ROLE\_INVENTORY\_ADMIN or owner

Example Request: Change the name of a managed object

    PUT /inventory/managedObjects/<<deviceId>>
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

When managed object of type 'c8y_SmartRule' is updated, audit record is created with type 'SmartRule' and activity 'Smart rule updated', 'Smart rule enabled' or 'Smart rule disabled'.

### DELETE a managed object

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_INVENTORY\_ADMIN or owner

Example Request: Delete a managed object

    DELETE /inventory/managedObjects/<<deviceId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

If optional query parameter "cascade=true" is used all child devices and child assets will be deleted recursively. By default delete operation is propagated to the subgroups only if deleted object is a group.

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

Example Request: Get reference collection of a certain managed object

Note that a "404 Not Found" error will appear if the object has no references.

    GET /inventory/managedObjects/<<deviceId>>/<<references>>
    Host: ...
    Authorization: Basic
    Accept: application/vnd.com.nsn.cumulocity.managedObjectReferenceCollection+json;ver=...

> Please note that references can be either childDevices or childAssets.

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

    POST /inventory/managedObjects/<<deviceId>>
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

As an alternative it is also allowed to pass the following reference object in the request body when adding to the collection:

    {
      "managedObject" : { "id" :"<<ManagedObject id>>" }
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

Example request:

    GET /inventory/managedObjects/<<deviceId>>/references/<<referenceId>>
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

Required role: ROLE\_INVENTORY\_ADMIN or owner

Note: This operations just removes the reference, it does not delete the object itself.

Example Request: Delete a managed object reference

    DELETE /inventory/managedObjects/<<deviceId>>/references/<<referenceId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT


## Notifications

Inventory notifications permit the monitoring of changes in the inventory (creation, update and deletion).
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/guides/reference/real-time-notifications)". The URL is

    /cep/realtime

The subscription channel needs to contain the managed object ID of the object in the inventory that should be monitored or a "*" as placeholder to receive notifications for the complete inventory

    /managedobjects/<<managedObjectId>>

The response will additionally to the managed object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the id of the deleted managed object.

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    [
      {
        "channel": "/managedobjects/12345",
        "successful": true,
        "error": "",
        "data": [{
          "realtimeAction": "UPDATE",
          "data": {
            "id": "12345",
            "self": "...",
            "creationTime": "2011-09-06T12:03:27.927+02:00",
            "name": "a device",
            "c8y_IsDevice": {},
            "c8y_Location": { ... }
          }
        }],
        "clientId": "Un1q31d3nt1f13r"
      }
    ]

Required role: ROLE\_INVENTORY\_READ

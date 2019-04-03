---
order: 20
title: Managed object collection
layout: redirect
---

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

    GET /inventory/managedObjects?query=<<query language statement>>
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

Query language is applied to all managed objects.

##### User can put query via 'query' parameter. Parameter can be:
* only query to database: ...?query=name eq 'M01'
* keyword $filter=: ...?query=$filter=name eq  'M01'
* keyword $orderby=: ...?query=$orderby=id asc
* keywords $filter= and $orderby=: ...?query=$filter=name eq 'M01' $orderby=id,

This part explain, how application will be handle query in parameter 'query'.

##### Supported query operations:
* eq(Equal): City eq 'Redmond'
* gt(Greater than): Price gt 20
* ge(Greater than or equal): Price ge 10
* lt(Less than): Price lt 20
* le(Less than or equal): Price le 100
* and(Logical and): Price le 200 and Price gt 3.5
* or(Logical or): Price le 3.5 or Price gt 200

##### Supported query functions:
* has: has(c8y_IsDevice) - match objects with custom property c8y_IsDevice. Supports only custom fragments. 
  Standard properties are not supported, i.e. id, type, name, self, lastUpdated, owner, creationTime, supportedMeasurements, childAssets, childDevices, childAdditions, externalIds   
* bygroupid(12) - match objects from group with id equals 12

##### Supported query values:
* string
    * examples: name eq `'Dev_002'`, name eq `'Dev*'`, name eq `'*_001'`, name eq `'*'`
    * string must be surround single quote
    * string can contains wildcard '*' and this wildcard match form 0 to N characters
    * matching is sensitive in case
* number
* date
    * examples: creationTime.date gt '2015-10-24T09:00:53.351+01:00' (+ must be url encoded)

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

    ...query=num eq 1 - {"_id": 1, ...}
    ...query=name eq 'Dev_002' - {"_id": 2, ...}
    ...query=name eq '*00*' - return all 4 rows
    ...query=name eq '*Dev_001*' - {"_id": 1, ...}
    ...query=c8y_Availability.statusId eq 2 - {"_id": 3, ...}, {"_id": 4, ...}
    ...query=num gt 2 - {"_id": 3, ...}, {"_id": 4, ...}
    ...query=num le 2 - {"_id": 1, ...}, {"_id": 2, ...}
    ...query=num eq 1 or num eq 2 - {"_id": 1, ...}, {"_id": 2, ...}
    ...query=has(c8y_Availability) - return all 4 rows

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
